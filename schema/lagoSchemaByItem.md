---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 19

## Desciption, item by item (js) 


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}


<div id="text2"></div>
 
<script>
var j = '{{thisPage|jsonify}}'
document.getElementById("text2").innerHTML = "hola2";
</script>


<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
     $("#text").html("hola");
    });
</script>
 
<div id="text"></div>
