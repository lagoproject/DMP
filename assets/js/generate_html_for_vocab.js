function itemnize_json( json, context ) { 
  var html ='';
  if ( typeof(json) === 'boolean' ) {
    return json;
  };
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
      contexturl = '#';  
    };
    html = '<li><a href="'+ contexturl + innid +'">'+ json +'</a></li>';
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
generate_html( data ) { 
    var graphelements = data["@graph"];
    for (i=0; i<graphelements.length; i++) {
        if ("@id" in graphelements[i]) { 
          var id = graphelements[i]["@id"].split(':')[1];
          var indexhtml = '<li><a href="#'+id+'"><strong>lago:'+id+'</strong></a></li>';
          var headerhtml = '<h5 id="'+id+'"><a href="#'+id+'" class="anchor-heading" aria-labelledby="'+id+'"><svg viewBox="0 0 16 16" aria-hidden="true"><use xlink:href="#svg-link"></use></svg></a><strong>lago:'+id+'</strong></h5>';
          if ("comment" in graphelements[i]) {
            headerhtml = headerhtml + '  <p>'+ graphelements[i]["comment"][0]["@value"] +'</p>';
          };
          var keys = Object.keys(graphelements[i]);
          keys.splice(keys.indexOf("@id"),1);
          keys.splice(keys.indexOf("@type"),1);
          keys.splice(keys.indexOf("comment"),1);
          var table = '<table class="grid" style="width: 100%"> 
              <thead>
            <tr class="header">
                <th>@type</th>';	  
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
};