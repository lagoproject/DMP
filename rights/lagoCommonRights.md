---
layout: default
parent: Rights
nav_order: 1
---

# LAGO Common Rights 
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.1 develop | {{ site.time }} | 2020-06-01 - today | LAGO Collaboration |


## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## What is defined?

[lagoCommonRights.jsonld](./sitesLago.jsonld) unifies the usual rights of LAGO data and metadata, following the official LAGO schema vocabulary. 

## How should a item be referenced?

In order to preserve the provenance of the linked metadata through the time, you must use the GitHub raw link of a certain release of this document:

`https://raw.githubusercontent.com/lagoproject/DMP/`*\<tag release\>*`/rights/lagoCommonRights.jsonld`

For example:

[https://raw.githubusercontent.com/lagoproject/DMP/1.1/rights/lagoCommonRights.jsonld](https://raw.githubusercontent.com/lagoproject/DMP/1.1/rights/lagoCommonRights.jsonld)


As an real example, the catalog metadata of some simulation should include the the reference as the [DCAT-AP2](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) property [*rigths*](https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld#rigths):

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
...
"license":"https://creativecommons.org/licenses/by-nc-sa/4.0/"
"rights":"https://raw.githubusercontent.com/lagoproject/DMP/1.1/rights/lagoCommonRights.jsonld",
"accessRigths":"http://publications.europa.eu/resource/authority/access-right/RESTRICTED",
"creator":{
           "@id":"https://orcid.org/0000-0001-6497-753X",
           "@type":"lago:Person"
          },
...
...
```

## Plain JSON-LD file

```json
{% include_relative lagoCommonRights.jsonld %}
```

