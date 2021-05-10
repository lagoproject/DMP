---
layout: default
parent: HowTo's
nav_order: 4
---

# How to Create a Slurm cluster in EOSC cloud and run simulations

## Table of contents
{: .no_toc}

- TOC
{:toc}


## Crear el cluster Slurm básico.

### Características mínimas del master: 

Tiene que tener suficiente memoria y CPUs, en especial esta última, para el despliegue de los nodos por Ansible. Luego para que ejecute slurm no necesita casi nada, pero es lo que hay (es un desperdicio que se podría solucionar poniendo al master que funcione también como un nodo, pero eso estro tema).

En general 4GB es más que suficiente. Pero 4 VCPUs puede valer para 8 nodos de trabajo, pero esto último lo decidimos despúes, según cuántos nodos creamos.

### Número y tipo de nodos. 

Lo ideal es intentar copar el máximo de cores disponibles (VCPUS) en el proveedor Cloud con el mínimo número de MVs y memoria por MV. De esta forma aseguras que las simulaciones terminan antes (tienes más cores disponibles por simulación) y te aseguras que el máximo de memoria usable en el proveedor te impida obtener todas las VCPUs restantes. Lo suyo es que todas los nodos de trabajo sean iguales.

Para ello miramos primero cuántas VCPUs máximas por MV nos deja hacer el proveedor desde la pestaña del IM y luego aplicamos la fórmula para la memoria que habíamos establecido viendo lo que consume corsika: (500MB + VCPUs*250MB)

Por ejemplo si nos dejan hacer máquinas con 16 VCPUs y nos están dando 200 VCPUs:

200/16 = 12,5 

Es decir, tenemos para 12 máquinas de 16 VCPUs y 1 de 8VCPUs.  Entonces podemos dedicarle 8VCPUs al master y crear 12 nodos de trabajo.

- el máster tendría 8 VCPUs y 4GB de RAM
- 12 nodos de trabajo con 16 VCPUs y (500+16*250MB=) 4.5 GB de RAM.

### Comprobar si está todo bien. 

Para ello se entra en el master y al pasar a "root" comprueba que aparece el hostname "slurmserver", no quedan procesos "ansible" consumiendo mucha CPU y que los nodos están "idle".

Lanzar la creación y esperar a que esté todo OK en verde (10-15 minutos para 8 nodos)

```bash
PC-local# ssh -i key.pem cloudadm@<IP master>
$ sudo su -
root@slurmserver:~# ps aux | grep -i ansible
root     17961  0.0  0.0  14436  1116 pts/0    S+   15:18   0:00 grep --color=auto -i ansible
root@slurmserver:~# sinfo
PARTITION AVAIL  TIMELIMIT  NODES  STATE NODELIST
debug*       up   infinite      12  idle vnode-[1-12]
```


## Preparación y pruebas del cluster para el Challenge.

### HOME compartido con los nodos. 

El oneclient requiere que se ejecute con privilegios casi de root y el docker también, por tanto tenemos que lanzar los trabajos con root.

El directorio /root no está compartido con los nodos, tenemos que crear uno en /home (que si está compartido) y lanzar desde allí para poder ver los logs de los trabajos.

```bash
root@slurmserver:~# mkdir /home/root
root@slurmserver:~# cd /home/root
root@slurmserver:/home/root#
```

### Comprobación del cluster


Creamos un directorio prep, para lanzar pruebas simples y preparativos

```bash
root@slurmserver:/home/root# mkdir prep
root@slurmserver:/home/root# cd prep
root@slurmserver:/home/root/prep# cat test.sbatch
#!/bin/bash
#SBATCH --export=ALL
#SBATCH --exclusive
#SBATCH-o %j.log
date
hostname
sleep 10
docker ps
date
```

Como tenemos 12 nodos

```bash
root@slurmserver:/home/root/prep# for i in {1..12}; do sbatch test.sbatch ; done
```



### Creación de una imagen docker lista para ser usada en cada nodo.

En el mundo ideal el "docker build" puede ir justo antes del "docker run" así actualizaría lo que fuera necesario si cambiamos de rama y etc.

Pero para el Challenge es mejor dejar las imágenes creadas fijas en cada nodo y no arriesgarnos a que el repositorio de turno (Vault CentOs, pip, etc) fallen.

Entonces creamos, en este caso para la rama "dev-asoreyh"  

```bash
root@slurmserver:/home/root/prep# export TOKEN="XXXXXmi tokenXXXXX"
#no necesitamos exportar todavia el OneProvider 
root@slurmserver:/home/root/prep# cat > build_docker.sbatch
#!/bin/bash
#SBATCH --export=ALL
#SBATCH --exclusive
#SBATCH-o %j.log

## oneprovider and branch hardcoded
docker build --build-arg ONEDATASIM_BRANCH="dev-asoreyh" --build-arg ONECLIENT_ACCESS_TOKEN_TO_BUILD=$TOKEN --build-arg ONECLIENT_PROVIDER_HOST_TO_BUILD=https://mon01-tic.ciemat.es -t lagocontainer:0.0.1 https://github.com/lagoproject/onedataSim.git#dev-asoreyh 
```

Para 12 nodos, se lanzaría así:

```bash
root@slurmserver:/home/root/prep# for i in {1..12}; do sbatch build_docker.sbatch ; done
```

Se puede repetir la operación todas las veces que queramos hasta que se consigan crear todas las imágenes docker en cada nodo.

### Comprobar que los docker funcionan 

```bash
root@slurmserver:/home/root/prep# export TOKEN="XXXXXmi tokenXXXXX"
#ahora sí necesitamos exportar el OneProvider 
root@slurmserver:/home/root/prep# cat test_docker.sbatch
#!/bin/bash
#SBATCH --export=ALL
#SBATCH --exclusive
#SBATCH-o %j.log
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker run --privileged -e ONECLIENT_ACCESS_TOKEN=$TOKEN -e ONECLIENT_PROVIDER_HOST=$ONEPROVIDER -i lagocontainer:0.0.1 bash -lc "ls -alh /mnt/datahub.egi.eu/"
```

Para 12 nodos, se lanzaría así:
```bash
root@slurmserver:/home/root/prep# for i in {1..12}; do sbatch build_docker.sbatch ; done
```



## Lanzamiento de listados de simulaciones.


### Crear los scripts genéricos de lanzamiento

Es un script basado que lanza al vuelo sbatch's creados desde un patron que también está en un fichero.

```bash
root@slurmserver:/home/root# cat read_csv_and_submit.sh
#!/bin/bash
# USE: read_csv_and_submit.sh <.CSV> <NUM jobs> 

INPUT=$1
PROCS=$2
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

if ! [[ "$PROCS" =~ ^[0-9]+$ ]] || [ "$PROCS" -lt 1 ]; then
        PROCS=1
fi

Nlines=$(cat Data01.csv | wc -l)
let Nsimulations=$Nlines-1
echo "Total simulations" $Nsimulations

var_start='"do_sims_onedata.py '
var_t='-t '
var_u=' -u '
var_s=' -s '
var_k=' -k '
var_h=' -h '
var_j_procs=' -j '$PROCS
var_end=' -x"'

{
        read
        while IFS=, read -r t u s k h
        do
          [[ "$t" != "t" ]] && echo "$t"
          [[ "$u" != "u" ]] && echo "$u"
          [[ "$s" != "s" ]] && echo "$s"
          [[ "$k" != "k" ]] && echo "$k"
          [[ "$h" != "h" ]] && echo "$h"

          DO_nSIM=$var_start$var_t$t$var_u$u$var_s$s
          if [ "$k" !=  "" ]; then
               DO_nSIM=$DO_nSIM$var_k$k
          fi
          DO_nSIM=$DO_nSIM$var_h$h$var_j_procs$var_end
          echo $DO_nSIM
          eval "sbatch pattern.sbatch $DO_nSIM"

        done
} < $INPUT
```

```bash
root@slurmserver:/home/root# cat pattern.sbatch
#!/bin/bash
#SBATCH --export=ALL
#SBATCH --exclusive
#SBATCH-o %j.log

DO_nSIM=$*

docker run --privileged -e ONECLIENT_ACCESS_TOKEN=$TOKEN -e ONECLIENT_PROVIDER_HOST=$ONEPROVIDER -i lagocontainer:0.0.1 bash -lc "$DO_nSIM"
```


### Preparar un directorio exclusivamente para un conjunto de simulaciones y su .csv

```bash
root@slurmserver:/home/root# mkdir sims01
root@slurmserver:/home/root# cd smis01
root@slurmserver:/home/root/sims01# 
```

Esta sería una simulación de 10 segundos con la altura pre-determinada (k) por eso está vacia:

```bash
root@slurmserver:/home/root/sims01# cat sims01.csv 
t,u,s,k,h
10,0000-0001-6497-753X,and,,QGSII
10,0000-0001-6497-753X,asu,,QGSII
10,0000-0001-6497-753X,ber,,QGSII
10,0000-0001-6497-753X,bga,,QGSII
10,0000-0001-6497-753X,brc,,QGSII
....
....
```

Pero se podría hacer variedad, unas k si y otras no:

```bash
root@slurmserver:/home/root/sims01# cat sims01bis.csv 
t,u,s,k,h
10,0000-0001-6497-753X,and,,QGSII
10,0000-0001-6497-753X,asu,220e2,QGSII
10,0000-0001-6497-753X,ber,,QGSII
10,0000-0001-6497-753X,bga,3e5,QGSII
10,0000-0001-6497-753X,brc,,QGSII
....
....
```


### Lanzar la simulacion

Se copian los scripts de lanzamiento y se hacen los export correspondintes
Aqui hay que exportar también el oneprovider donde se depositarán los resultados. /LAGOsim está en ceta-ciemat01.datahub.egi.eu

```bash
root@slurmserver:/home/root/sims01# cp ../read_csv_and_submit.sh .
root@slurmserver:/home/root/sims01# chmod +x read_csv_and_submit.sh
root@slurmserver:/home/root/sims01# cp ../pattern.sbatch .
root@slurmserver:/home/root/sims01# export TOKEN="XXXXXmi tokenXXXXX"
root@slurmserver:/home/root/sims01# export ONEPROVIDER="ceta-ciemat01.datahub.egi.eu"
```

Se lanza el script indicando el .csv que quiere similar y si tenemos MVs con 16 cores, se pone como número de jobs 16

```bash
root@slurmserver:/home/root/sims01# ./read_csv_and_submit.sh sims01bis.csv 16
```



## Troubleshooting y limpieza

### Entrar en los nodos y ver que pasa.

Dos opciones: 
- Hay que descargarse las key de cada nodo desde el IM. Es tedioso.
- Aprovechar que funciona el slurm para depositar una clave pública en en /root/.ssh/know-keys

Lo último es lo mejor a la larga.



### Matar todos los trabajos

´´´bash
#scancel  `echo $(squeue | awk -F' ' '{print $1}' | tail -n +2)`
´´´

## limpiar nodos de imágenes docker y reiniciar.

A veces se quedan muy llenos de basura o colgados los dockers y los oneclients.

El procedimiento bestia para reinciar los 12 nodos es mandar un trabajo de limpieza/reinicio como este:

```bash
root@slurmserver:/home/root# mkdir prep
root@slurmserver:/home/root# cd prep
root@slurmserver:/home/root/prep# cat clean_docker.sbatch
#!/bin/bash
#SBATCH --export=ALL
#SBATCH --exclusive
#SBATCH-o %j.log

docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images)

sleep 5
reboot
```


```bash
root@slurmserver:/home/root/prep# for i in {1..12}; do sbatch clean_docker.sbatch ; done
```




