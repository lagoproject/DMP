---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 12

## Desciption, item by item (js) 


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}


<div id="text2"></div>
 
<script>
document.getElementById("text2").innerHTML = "{{ thisPage }}";
document.getElementById("text3").innerHTML = "{{ thisPage }}";
</script>

<div id="text3"></div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
     $("#text").html("{{thisPage}}");
    });
</script>
 
<div id="text"></div>
