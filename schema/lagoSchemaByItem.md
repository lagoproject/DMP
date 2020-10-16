---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO by item
{: .no_toc }

|Version|Date|Contributors|
|-------|----|------------|
| 1.1 develop | 2020-06-01 - today | LAGO Collaboration|

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
  $.getJSON( "/DMP/schema/lagoSchema.jsonld", function( data ) {
      $('#text').append(data["@graph"][3]["@id"]); 
      var graphelements = data["@graph"];
      for (i=1; i<=graphelements.length-1; i++) {
        if ("@id" in graphelements[i]) { 
	  var id = graphelements[i]["@id"];
	  if ("dcat:domain" in graphelements[i]) {
            $('#iproperties').append('<li><a href="#'+id+'"><strong>'+id+'</strong>.</a></li>');
	    $('#properties').append('<h5 id="'+id+'"><a href="#'+id+'" class="anchor-heading" aria-labelledby="'+id+'"><svg viewBox="0 0 16 16" aria-hidden="true"><use xlink:href="#svg-link"></use></svg></a><strong>'+id+'</strong></h5>');
	  } else {
	    $('#iclasses').append('<li><a href="#'+id+'"><strong>'+id+'</strong>.</a></li>');
	    $('#classes').append('<h5 id="'+id+'"><a href="#'+id+'" class="anchor-heading" aria-labelledby="'+id+'"><svg viewBox="0 0 16 16" aria-hidden="true"><use xlink:href="#svg-link"></use></svg></a><strong>'+id+'</strong></h5>');
	  };
	};
      };		
    });
});
</script>

## Table of Contents

* [LAGO Classes](#lago-classes)
	- <div id="iclasses"></div>
* [LAGO Properties](#lago-properties)
	<div id="iproperties"></div>

## LAGO Classes

<div id="classes"></div>

## LAGO Properties

<div id="properties"></div>




