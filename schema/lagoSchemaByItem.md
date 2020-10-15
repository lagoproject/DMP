---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 26

## Desciption, item by item (js) 


{% capture thisPage %}
    {% include_relative prueba.jsonld %}
{% endcapture %}


<div id="text2"></div>
 
<script>
var j = '{{thisPage}}'
document.getElementById("text2").innerHTML = "hola2";
</script>


<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
    $.getJSON( "/DMP/schema/prueba.jsonld", function( data ) {
    $("#text").html(data);
  });
});
</script>
 
<div id="text"></div>
