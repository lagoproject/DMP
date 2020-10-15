---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

## Desciption, item by item (js) 

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
   $().ready(function(){
      $.getJSON( "/lagoSchema.jsonld", function( data ) {
            $("#text").html(data["@graph"]);
         });
       });
</script>
 
<div id="text"></div>
