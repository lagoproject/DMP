---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO


## Desciption, item by item

{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}

{% assign tableFile = thisPage.data %}
{% assign tableGraph = tableFile['graph'] %}

{% for entry in tableGraph %}
    #### {{ entry.'@id' }}
    {% for desc in entry %}
        - {{ desc }} 
        
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
