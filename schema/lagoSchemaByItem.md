---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO by item
{: .no_toc }

|Version|Date|Contributors|
|-------|----|------------|
| 1.1 develop | 2020-06-01 - today | LAGO Collaboration|

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}


## Desciption, item by item (js) 

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
    $.getJSON( "/DMP/schema/lagoSchema.jsonld", function( data ) {
	        $('#text').append(data["@graph"][3]["@id"]); 
        	var graphelements = data["@graph"];
		for (i=1; i<=graphelements.length-1; i++) {
		    	var id = data["@graph"][i]["@id"];
			$('#text').append('<h3 id="'+id+'"><a href="#'+id+'" class="anchor-heading" aria-labelledby="'+id+'"><svg viewBox="0 0 16 16" aria-hidden="true"><use xlink:href="#svg-link"></use></svg></a><strong>'+id+'</strong></h3>');
		}		

    });
});
</script>
 
<div id="text"></div>




