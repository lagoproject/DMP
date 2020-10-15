---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 46

## Desciption, item by item (js) 

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
    $.getJSON( "/DMP/schema/lagoSchema.jsonld", function( data ) {
	        $('#text').append(data["@graph"][3]["@id"]); 
        	var graphelements = data["@graph"];
		for (i=0; i<=graphelements.length-1; i++) {
		    	var id=data["@graph"][i]["@id"];
			$('#text').append(<li>id</li>);
		}		

    });
});
</script>
 
<div id="text"></div>




