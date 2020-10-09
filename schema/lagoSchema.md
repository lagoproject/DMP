---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO


## Desciption, item by item


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}
pruebecita 7

{% assign tableJson =  thisPage | normalize_whitespace %}

{{ tableJson.@context | inspect }}

{% for entry in tableJson."@graph" %}
    Hola soy una entrada
    {{ entry | inspect }}  
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
