---
layout: default
parent: Data and Metadata Releases, Rights and Disclaimer 1.1
grand_parent: Rights
---

## TECHNICAL APPENDIX: how to linking this document

As stated above, this document unifies the rights, disclaimers and acknolegmentes for this LAGO data and metadata release. 

To accomplish the linked-data requirements, this document has associated metatada in:
- a JSON-LD file [lagoCommonRights.1.1.jsonld](./lagoCommonRights.1.1.jsonld) 
- a block ```<script type="application/ld+json">```, which shows the later JSON-LD in the ```<head>``` section of this HTML page.   

### How should this be embarransingly referenced?

- ZENODO DOI
- lagoproject page
- github dynamic page...
- CURL... agains the page.

### How should this be referenced for linked-data?

To preserve the provenance of the linked metadata through time, the GitHub raw link of a certain release of this document must be used:

`https://raw.githubusercontent.com/lagoproject/DMP/`*\<tag release\>*`/rights/lagoCommonRights.1.1.jsonld`

For example:

[https://raw.githubusercontent.com/lagoproject/DMP/1.1/rights/lagoCommonRights.1.1.jsonld](https://raw.githubusercontent.com/lagoproject/DMP/1.1/rights/lagoCommonRights.1.1.jsonld)


As a real example, the metadata´s catalog of a simulation should include the reference as the [DCAT-AP2](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) property [*rights*](https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld#rigths):

```json
{
"@context":{
...
            "lago":"https://raw.githubusercontent.com/lagoproject/DMP/1.1/schema/lagoSchema.1.1.jsonld",
            "@vocab":"https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld",
...
          },
"@id":"/sac_60_100.0_75600_QGSII_flat",
"@type":"Catalogue",
...
"license":"https://creativecommons.org/licenses/by-nc-sa/4.0/"
"rights":"https://raw.githubusercontent.com/lagoproject/DMP/1.1/rights/lagoCommonRights.1.1.jsonld",
"accessRigths":"http://publications.europa.eu/resource/authority/access-right/RESTRICTED",
"creator":{
           "@id":"https://orcid.org/0000-0001-6497-753X",
           "@type":"lago:Person"
          },
...
...
```

#### The plain JSON-LD file

```json
{% include_relative lagoCommonRights.1.1.jsonld %}
```
