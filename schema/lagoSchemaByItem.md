---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 11

## Desciption, item by item (js) 


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}


<div id="text2"></div>
 
<script>
document.getElementById("text2").innerHTML = "</script>{{ thisPage }}<script>";
</script>



<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
     $("#text").html(</script>{{ thisPage }}<script>);
    });
</script>
 
<div id="text"></div>
