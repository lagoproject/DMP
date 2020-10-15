---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 13

## Desciption, item by item (js) 


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}


<div id="text2"></div>
 
<script>
var j = {{ thisPage }}
document.getElementById("text2").innerHTML = "hola2" + j;
document.getElementById("text3").innerHTML = "hola3" + j ;
</script>

<div id="text3"></div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
     $("#text").html({{thisPage}});
    });
</script>
 
<div id="text"></div>
