---
layout: default
parent: Definitions
nav_order: 1
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

[sitesLago.1.1.jsonld](./sitesLago.1.1.jsonld) unifies the definition of the LAGO sites following the official LAGO schema vocabulary. 

The purpose of the site's definition is:
- to univocally identify a predefined LAGO site (real or virtual) to be linked by metadata using a public URI;
- to link several related definitions of the site: short codename, name, description, responsible organisation;  
- to fix their location, i.e. magnetic field, observation level, GPS coordinates;
- to provide other default configuration parameters, meaningful for applications such as the `arrang` [(ARTI)](https://github.com/lagoproject/arti), `status` [(locationMaps)](https://github.com/lagoproject/locationsMaps), etc.  

Note that the sites give support or have given support (physically or virtually) to one or several Water Cherenkov Detectors (WCDs). Their definitions should not be included in this document, conversely, it is the WCD definition that should be linked to a LAGO site.

## How should an item be referenced?

To preserve the provenance of the linked metadata through time, you must use the GitHub raw link to a certain release of this document, plus `#` and the short site codename:

`https://raw.githubusercontent.com/lagoproject/DMP/`*\<tag release\>*`/defs/sitesLago.1.1.jsonld`*#\<site codename\>*

For example:

[https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/sitesLago.1.1.jsonld#sac](https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/sitesLago.1.1.jsonld#sac)


As a real example, the metadata´s catalog of a simulation should include the site´s reference:

```json
{
"@context":{
...
            "lago":"https://raw.githubusercontent.com/lagoproject/DMP/1.1/schema/lagoSchema.jsonld",
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
           "lago:detectorSite":"https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/sitesLago.1.1.jsonld#sac",
           "lago:obsLev":100,
           "lago:highEnergyCutsSecondaries": False,
           "lago:fluxTime":"Psac_60_100.0_75600_QGSII_flatS",
           "lago:flatArray":True
           },
...
...
```

## Defined LAGO sites

{% include generate_html_for_sites.html folder="/DMP/defs/sitesLago.1.1.jsonld" %}


## Plain JSON-LD file

```json
{% include_relative sitesLago.1.1.jsonld %}
```

