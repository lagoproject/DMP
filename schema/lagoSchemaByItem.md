---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 21

## Desciption, item by item (js) 


{% capture thisPage %}
    {% include_relative test.json %}
{% endcapture %}


<div id="text2"></div>
 
<script>
var j = '{{thisPage}}'
document.getElementById("text2").innerHTML = "hola2";
</script>


<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
    $.getJSON( "/DMP/schema/test.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});
</script>
 
<div id="text"></div>
