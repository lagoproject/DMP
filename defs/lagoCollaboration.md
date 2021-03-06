---
layout: default
parent: Definitions
nav_order: 2
---

# LAGO Collaboration 
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.1 develop | {{ site.time }} | 2020-06-01 - today | LAGO Collaboration |


## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## What is defined?

[lagoCollaboration.jsonld](./lagoCollaboration.jsonld) unifies the definition of the LAGO Collaboration following the official LAGO schema vocabulary. 

The purpose of the definition is to univocally identify the LAGO Collaboration employing a public URI for being linked by any metadata. 

## How should an item be referenced?

To preserve the provenance of the linked metadata through time, the GitHub raw link of a certain release of this document must be used:

`https://raw.githubusercontent.com/lagoproject/DMP/`*\<tag release\>*`/defs/lagoCollaboration.jsonld`

For example:

[https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/lagoCollaboration.jsonld](https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/lagoCollaboration.jsonld)


As a real example, the metadata´s catalog of a simulation should include the reference to the [DCAT-AP2](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) property [publisher](https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld#publisher):

```json
{
"@context":{
...
            "lago":"https://raw.githubusercontent.com/lagoproject/DMP/1.1/schema/lagoSchema.jsonld",
            "@vocab":"https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld",
...
          },
"@id":"/sac_60_100.0_75600_QGSII_flat",
"@type":"Catalog",
"title":"sac_60_100.0_75600_QGSII_flat",
"description":"A Complete Corsika Simulation",
"publisher":{
             "@id":"https://raw.githubusercontent.com/lagoproject/DMP/1.1/defs/lagoCollaboration.jsonld",
             "@type":"lago:Organization"
            },
...
...
```

## Plain JSON-LD file

```json
{% include_relative lagoCollaboration.jsonld %}
```

