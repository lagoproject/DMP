---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

Test 30

## Desciption, item by item (js) 

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
    $.getJSON( "/DMP/schema/test.json", function( data ) {
		$('#text').html(data["@graph"][2]["@id"]);

  });
});
</script>
 
<div id="text"></div>



        var graphelements = data["@graph"];
		// iterate 
		for (i=0; i<=graphelements.length-1; i++) {
		    	var id=data["@graph"][i]["@id"];
			// append a <li> list items
			$('#text').append("<li>"+id+"</li>");
		}
