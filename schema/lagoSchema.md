---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

## Plain JSON-LD file

```json
{% include_relative lagoSchema.jsonld %}
```


## Graphical Representation

TBD.

{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}
{{ thisPage | jsonVis }}
