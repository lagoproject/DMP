---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO


## Desciption, item by item


{% capture thisPage %}
    {% include_relative prueba.jsonld %}
{% endcapture %}
pruebecita 14

{% assign tableJson =  thisPage | uri_escape | normalize_whitespace %}

{{ tableJson | inspect }}

{{ tableJson.propertyA | inspect }}

{{ tableJson.propertyB | inspect }}

{% for entry in site.schema.prueba %}
    Hola soy una entrada principal
    {{ entry | inspect }} 
    {% for sec in entry %}
        Hola soy una entrada secundaria
        {{ sec | inspect }}
    {% endfor %}    
{% endfor %}



## Graphical Representation

TBD.

{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}
{{ thisPage | jsonVis }}


## Plain JSON-LD file

```json
{% include_relative lagoSchema.jsonld %}
```
