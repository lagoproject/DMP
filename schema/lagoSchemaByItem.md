---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 4

## Desciption, item by item (js) 

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
   $.getJSON( "https://raw.githubusercontent.com/lagoproject/DMP/develop/schema/lagoSchema.jsonld", function( data ) {
         $("#text").html(data);
      });
    });
</script>
 
<div id="text"></div>
