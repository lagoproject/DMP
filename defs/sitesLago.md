---
layout: default
parent: Definitions
nav_order: 2
---

# LAGO sites 

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

`https://raw.githubusercontent.com/lagoproject/DMP/``**\<tag release\>**``/defs/sitesLago.jsonld``**#\<site codename\>**`

For example:

https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/sitesLago.jsonld#sac

## Plain JSON-LD file

```json
{% include_relative sitesLago.jsonld %}
```

