---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 41

## Desciption, item by item (js) 

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
    $.getJSON( "/DMP/schema/test.json", function( data ) {
	        $('#text').html(data["@graph"][3]["@id"]);  

    });
});
</script>
 
<div id="text"></div>




