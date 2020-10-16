---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO by item
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.1 develop | {{ site.time }} | 2020-06-01 - today | LAGO Collaboration |


<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$().ready(function(){
  $.getJSON( "/DMP/schema/lagoSchema.jsonld", function( data ) {
      $('#text').append(data["@graph"][3]["@id"]); 
      var graphelements = data["@graph"];
      for (i=0; i<=graphelements.length-1; i++) {
        if ("@id" in graphelements[i]) { 
	  var id = graphelements[i]["@id"].split(':')[1];
	  var indexhtml = '<li><a href="#'+id+'"><strong>'+id+'</strong></a></li>';
	  var headerhtml = '<h5 id="'+id+'"><a href="#'+id+'" class="anchor-heading" aria-labelledby="'+id+'"><svg viewBox="0 0 16 16" aria-hidden="true"><use xlink:href="#svg-link"></use></svg></a><strong>'+id+'</strong></h5>';
	  if ("comment" in graphelements[i]) {
	    headerhtml = headerhtml + '  <p>'+ graphelements[i]["comment"][0]["@value"] +'</p>';
	  };
	  if ("dcat:domain" in graphelements[i]) {
            $('#iproperties').append(indexhtml);
	    $('#properties').append(headerhtml);
					  
	  } else {
	    $('#iclasses').append(indexhtml);
	    $('#classes').append(headerhtml);
	  };
	};
      };		
    });
});
</script>

## Table of Contents

* [LAGO Classes](#lago-classes)
	<div id="iclasses"></div>
* [LAGO Properties](#lago-properties)
	<div id="iproperties"></div>

## LAGO classes

<div id="classes"></div>

## LAGO properties

<div id="properties"></div>




