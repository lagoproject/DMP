---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 9

## Desciption, item by item (js) 


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
     $("#text").html( {{ thisPage }} );
    });
</script>
 
<div id="text"></div>
