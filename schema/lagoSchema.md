---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO


## Desciption, item by item


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}
pruebecita 10

{% assign tableJson =  thisPage | normalize_whitespace %}

{{ tableJson.@graph | inspect }}

{{ tableJson.@context | inspect }}

{% for entry in tableJson %}
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
