---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

## Desciption, item by item (js) 

<script type="application/ld+json" id="datablock1">
	{% include_relative lagoSchema.jsonld %}
</script>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
		// get the contents of the element with id="datablock1"
		var data = $("#datablock1").html();

		// parse the contents as a JSON object
		var json = JSON.parse(data);
        
		var graphelements = json["@graph"];

		// iterate 
		for (i=0; i<=graphelements.length-1; i++) {
		    var id=json["@graph"][i]["@id"];
			// append a <li> list items
			$('#items').append("<li>"+id+"</li>");
		}
</script>        
     
## Desciption, item by item (jekyll)


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}
pruebecita 25

{% assign tableJson =  thisPage | normalize_whitespace | strip | strip_html | split: "}, {"    %}

{% assign tableJson2 =  thisPage | normalize_whitespace | jsonify   %}

{{ tableJson2[0] | inspect  }}

{{ tableJson[0] | inspect }}

{{ tableJson[1] | inspect }}



{% for entry in tableJson %}
    Hola soy una entrada principal
    {{ entry | inspect }} 
    {% for sec in entry %}
        Hola soy una entrada secundaria
        {{ sec | inspect }}
    {% endfor %}    
{% endfor %}



## Graphical Representation

TBD.

{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}
{{ thisPage | jsonVis }}


## Plain JSON-LD file

```json
{% include_relative lagoSchema.jsonld %}
```
