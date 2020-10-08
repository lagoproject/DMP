---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO


## Desciption, item by item

{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}
{{ thisPage | markdownify }}

## Graphical Representation

TBD.

## Plain JSON-LD file

```json
{% include_relative lagoSchema.jsonld %}
```
