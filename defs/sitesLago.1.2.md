---
layout: default
parent: Dev Defs
grand_parent: Definitions
---

# LAGO sites 1.2 
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.2   | {{ site.time }} | 2020-06-01 - today | LAGO Collaboration |


## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## What is defined?

[sitesLago.1.2.jsonld](./sitesLago.1.2.jsonld) unifies the definition of the LAGO sites following the official LAGO schema vocabulary. 

The purpose of the site's definition is:
- to univocally identify a predefined LAGO site (real or virtual) to be linked by metadata using a public URI;
- to link several related definitions of the site: short codename, name, description, responsible organisation;  
- to fix their location, i.e. magnetic field, observation level, GPS coordinates;
- to provide other default configuration parameters, meaningful for applications such as the `arrang` [(ARTI)](https://github.com/lagoproject/arti), `status` [(locationMaps)](https://github.com/lagoproject/locationsMaps), etc.  

Note that the sites give support or have given support (physically or virtually) to one or several Water Cherenkov Detectors (WCDs). Their definitions should not be included in this document, conversely, it is the WCD definition that should be linked to a LAGO site.

## How should an item be referenced?

To preserve the provenance of the linked metadata through time, you must use the GitHub raw link to a certain tag release of this document, plus `#` and the short site codename:

`https://raw.githubusercontent.com/lagoproject/DMP/`*\<Major.Minor.Patch\>*`/defs/sitesLago.1.2.jsonld`*#\<site codename\>*

For example:

[https://raw.githubusercontent.com/lagoproject/DMP/1.2.0/defs/sitesLago.1.2.jsonld#sac](https://raw.githubusercontent.com/lagoproject/DMP/1.2.0/defs/sitesLago.1.2.jsonld#sac)


As a real example, the metadata´s catalog of a simulation should include the site´s reference:

```json
{
"@context":{
...
            "lago":"https://raw.githubusercontent.com/lagoproject/DMP/1.2.0/schema/lagoSchema.1.2.jsonld",
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
           "lago:detectorSite":"https://raw.githubusercontent.com/lagoproject/DMP/1.2.0/defs/sitesLago.1.2.jsonld#sac",
           "lago:obsLev":100,
           "lago:highEnergyCutsSecondaries": False,
           "lago:fluxTime":"Psac_60_100.0_75600_QGSII_flatS",
           "lago:flatArray":True
           },
...
...
```

### How could an item be embarranssingly referenced?

Although it is **discouraged** because these methods do not preserve the metadata provenance, it could be sometimes needed linking this document using only the **main release** (the ``Major.Minor``) as reference and forgoting the GitHub tag release.

As this document has ``Major.Minor = 1.2`` version, you can use links to [this](./) dynamic web page, adding also the plus `#` and the short site codename. For example:

[https://lagoproject.github.io/DMP/defs/sitesLago.1.2/#ima](https://lagoproject.github.io/DMP/defs/sitesLago.1.2/#ima)


The mechanism is similar to other vocabularies published in Internet. Nevertheless, it could include changes which were not taken into account when the metadata was generated.



## Defined LAGO sites

{% include generate_html_for_sites.html folder="/DMP/defs/sitesLago.1.2.jsonld" %}


## Plain JSON-LD file

```json
{% include_relative sitesLago.1.2.jsonld %}
```

