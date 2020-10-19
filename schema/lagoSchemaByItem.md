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
function itemnize_json( json, context ) { 
  var html ='';
  if ( typeof(json) === 'string' ) {
    var element = json.split(':');
    var innid = element[0];
    var vocab = "@vocab";
    if (element.length == 2) {
        innid = element[1];
        vocab = element[0];
    };
    var contexturl = context[vocab];
    if ( vocab == "lago" ) {
      contexturl = '';  
    };
    html = '<li><a href="#'+ contexturl + innid +'">'+ json +'</a></li>';
  } else {
    if ( !Array.isArray(json) ) {
      var json_aux = [];
      json_aux.push(json);
      json = json_aux;
    };
    for (j=0; j<json.length; j++) {
      var inner_json = json[j];
      if ( !(typeof(json[j]) === 'string') ) {
      	if ("@id" in json[j]) {
          inner_json = json[j]["@id"];
        } else {
          inner_json = JSON.stringify(json[j]);
        };
      };
      html = html + itemnize_json(inner_json, context);
    };
  };
  return html;
};
$().ready(function(){
  $.getJSON( "/DMP/schema/lagoSchema.jsonld", function( data ) { 
      var graphelements = data["@graph"];
      for (i=0; i<graphelements.length; i++) {
        if ("@id" in graphelements[i]) { 
	  var id = graphelements[i]["@id"].split(':')[1];
	  var indexhtml = '<li><a href="#'+id+'"><strong>'+id+'</strong></a></li>';
	  var headerhtml = '<h5 id="'+id+'"><a href="#'+id+'" class="anchor-heading" aria-labelledby="'+id+'"><svg viewBox="0 0 16 16" aria-hidden="true"><use xlink:href="#svg-link"></use></svg></a><strong>lago:'+id+'</strong></h5>';
	  if ("comment" in graphelements[i]) {
	    headerhtml = headerhtml + '  <p>'+ graphelements[i]["comment"][0]["@value"] +'</p>';
	  };
	  var keys = Object.keys(graphelements[i]);
          var omit = [ "@id", "@type", "comment"];
	  for (k=0; k<omit.length; k++) {
	    if (omit[k] in keys) {
	      keys.splice(keys.indexOf(omit[k], 1);
	    };  
	  }; 
	  var table = '<table class="grid" style="width: 100%"> 
		    <thead>
			<tr class="header">
			    <th>"@type"</th>';	  
	  for (k=0; k<keys.length; k++) {
	    table = table + ' <th>'+ keys[k] + '</th>';
	  };
	  table = table +'	</tr>
		      </thead>
		      <tbody>
			<tr>
			  <td>'+ itemnize_json(graphelements[i]["@type"] , data["@context"]) +'</td>';
	  for (k=0; k<keys.length; k++) {
	    table = table + ' <td>'+ itemnize_json(graphelements[i][keys[k]] , data["@context"]) +' </td>';
	  };
	  table = table +'	</tr>
		      </tbody>
		  </table>';
	  if ("dcat:domain" in graphelements[i]) {
            $('#iproperties').append(indexhtml);
	    $('#properties').append(headerhtml);
            $('#properties').append(table);				  
	  } else {
	    $('#iclasses').append(indexhtml);
	    $('#classes').append(headerhtml);
	    $('#classes').append(table);
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




