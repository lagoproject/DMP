---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 3

## Desciption, item by item (js) 

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
   $.getJSON( "schema/lagoSchema.jsonld", function( data ) {
         console.log(data);
         $("#text").html(data);
      });
    });
</script>
 
<div id="text"></div>
