---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 47

## Desciption, item by item (js) 

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
    $.getJSON( "/DMP/schema/lagoSchema.jsonld", function( data ) {
	        $('#text').append(data["@graph"][3]["@id"]); 
        	var graphelements = data["@graph"];
		for (i=1; i<=graphelements.length-1; i++) {
		    	var id=data["@graph"][i]["@id"];
			$('#text').append("<br /> #### " + id);
		}		

    });
});
</script>
 
<div id="text"></div>




