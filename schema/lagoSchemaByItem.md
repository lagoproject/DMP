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

function itemnize_json( json ) {  
  var html ='';
  for (j=0; j<=json.length-1; j++) {
    html = html + '<li>'+json[j]+'</li>';
  };
  return html;
};
	
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
	    var table = '<table class="grid" style="width: 100%"> 
			    <colgroup> 
				<col width="20%" /> 
				<col width="65%" />
				<col width="15%" />
			    </colgroup>
			    <thead>
				<tr class="header">
				    <th>"@type"</th>
				    <th>"dcat:domain"</th>
				    <th>"dcat:range"</th>
				</tr>
			    </thead>
			    <tbody>
				<tr>
				  <td>'+ itemnize_json(graphelements[i]["@type"]) +'</td>
				  <td>'+ itemnize_json(graphelements[i]["dcat:domain"]) +' </td>
				  <td>'+ itemnize_json(graphelements[i]["dcat:range"]) +'</td>
				</tr>
			    </tbody>
			</table>';
		$('#properties').append(table);				  
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




