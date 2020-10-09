---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO


## Desciption, item by item

{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}

{% for entry in thisPage %}
    Hola soy una entrada primaria
    {% for desc in entry %}
        {% if desc.comment  != empty %}
           #### Comment
           {{ desc.comment }}
        {% endif %}
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
