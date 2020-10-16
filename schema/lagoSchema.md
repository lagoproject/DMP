---
layout: default
parent: Metadata Schema
---

# Metadata Schema for LAGO

pruebecita 29

## Desciption, item by item (js) 

{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}

<div id="text"></div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
		var data = JSON.parse({{thisPage}});
	        $('#text').append(data["@graph"][3]["@id"]); 
        	var graphelements = data["@graph"];
		for (i=2; i<=4; i++) {
		    	var id=data["@graph"][i]["@id"];
			$('#text').append("<br /> #### " + id);
</script>        


     
## Desciption, item by item (jekyll)


{% capture thisPage %}
    {% include_relative lagoSchema.jsonld %}
{% endcapture %}


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
