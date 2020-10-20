---
layout: default
parent: Definitions
nav_order: 2
---

# LAGO sites 
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.1 develop | {{ site.time }} | 2020-06-01 - today | LAGO Collaboration |


## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## What is defined?

[sitesLago.jsonld](./sitesLago.jsonld) unifies the definition of LAGO sites following the official LAGO schema vocabulary. 

The purpose of site's definition is:
- to univocally idenfify a predefined LAGO site (real or virtual) to be linked by metadata by means of a public URI;
- to link several related definitions of the site: short codename, name, description, responsible organisation;  
- to fix their location, i.e. the mangetic field, observation level, GPS coordinates;
- to provide other default configuration parameters, meaningful for applications such as the `arrang` [(ARTI)](https://github.com/lagoproject/arti), `status` [(locationMaps)](https://github.com/lagoproject/locationsMaps), etc.  

Note that any site supports or had supported (actually or virtually) one or several Water Cherenkov Detectectors (WCDs). Their definitions should not be included into this document, on the contrary, a WCD definition should link a LAGO site.

## How should a item be referenced?

In order to preserve the provenance of the linked metadata through the time, you must use the GitHub raw link of a certain release of this document, plus `#` and the short site codename:

`https://raw.githubusercontent.com/lagoproject/DMP/`*\<tag release\>*`/defs/sitesLago.jsonld`*#\<site codename\>*

For example:

[https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/sitesLago.jsonld#sac](https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/sitesLago.jsonld#sac)


As an real example, the catalog metadata of some simulation should include the site reference:

```json
{
"@context":{
            "lago":"https://github.com/lagoproject/DMP/blob/0.0.1/schema/lagoSchema.jsonld",
...
...
          },
...
...      
          {
           "@id":"/sac_60_100.0_75600_QGSII_flat#artiParams",
           "@type":"lago:ArtiParams",
           "lago:cherenkov":False,
           "lago:debug":False,
           "lago:highEnergyIntModel":"QGSII",
           "lago:detectorSite":"https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/sitesLago.jsonld#sac",
           "lago:obsLev":100,
           "lago:highEnergyCutsSecondaries": False,
           "lago:fluxTime":"Psac_60_100.0_75600_QGSII_flatS",
           "lago:flatArray":True
           },
...
...
...
```

## Defined LAGO sites

{% include generate_html_for_vocab.html %}


## Plain JSON-LD file

```json
{% include_relative sitesLago.jsonld %}
```

