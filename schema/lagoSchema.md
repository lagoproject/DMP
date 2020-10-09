---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO


## Desciption, item by item


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}
pruebecita 2
{% for entry in thisPage %}
    Hola soy una entrada
    {{ entry | inspect }}  
    {% if entry.@id  != empty %}
    #### {{ entry.@id }}
        {% for desc in entry %}
            - {{ desc }} 
        
        {% endfor %}
    {% endif %}
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
