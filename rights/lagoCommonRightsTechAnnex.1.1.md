---
layout: default
parent: LAGO Data and Metadata Releases, Rights and Disclaimer 1.1
grand_parent: Rights
---

## TECHNICAL APPENDIX: how to linking this document
{: .no_toc }

As stated above, the ["LAGO Data and Metadata Releases, Rights and Disclaimer 1.1" document](/rights/lagoCommonRights.1.1/) unifies the rights, disclaimers and acknolegmentes for the LAGO data and metadata 1.1 main release. 

To accomplish the linked-data requirements, the aforementioned document has associated metatada in:
- a JSON-LD file [lagoCommonRights.1.1.jsonld](./lagoCommonRights.1.1.jsonld) 
- a block ```<script type="application/ld+json">```, which shows the later JSON-LD in the ```<head>``` section of this HTML page.   

There are several ways to perform linking, described in this technical appendix.

- TOC
{:toc}

### How should this document be referenced for linked-data?

To preserve the provenance of the linked metadata through time, the GitHub raw link of a certain tag release (``Major.Minor.Patch``) of this document must be used:

`https://raw.githubusercontent.com/lagoproject/DMP/`*\<Major.Minor.Patch\>*`/rights/lagoCommonRights.1.1.jsonld`

For example:

[https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/rights/lagoCommonRights.1.1.jsonld](https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/rights/lagoCommonRights.1.1.jsonld)


As a real example, the metadata´s catalog of a simulation should include the reference as the [DCAT-AP2](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) property [*rights*](https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld#rigths):

```json
{
"@context":{
...
            "lago":"https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/schema/lagoSchema.1.1.jsonld",
            "@vocab":"https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld",
...
          },
"@id":"/sac_60_100.0_75600_QGSII_flat",
"@type":"Catalogue",
...
"license":"https://creativecommons.org/licenses/by-nc-sa/4.0/"
"rights":"https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/rights/lagoCommonRights.1.1.jsonld",
"accessRigths":"http://publications.europa.eu/resource/authority/access-right/RESTRICTED",
"creator":{
           "@id":"https://orcid.org/0000-0001-6497-753X",
           "@type":"lago:Person"
          },
...
...
```

### How could this document be embarranssingly referenced?

Although it is **discouraged** because these methods do not preserve the metadata provenance, it could be sometimes needed linking this document using only the **main release** (the ``Major.Minor``) as reference and forgetting the GitHub tag release.

As this document has ``Major.Minor = 1.1`` version, there are alternative ways:  

- Static source documents: they could be outdated with respect to te release of software used for generating the metadata.
  - Zenodo DOI: [https://doi.org/10.5281/zenodo.6599863](https://doi.org/10.5281/zenodo.6599863)
  - Zenodo Record: [https://zenodo.org/record/6599863](https://zenodo.org/record/6599863) 
  - Copy on lagoproject page: [https://lagoproject.net/lagoCommonRights/1.1](https://lagoproject.net/lagoCommonRights/1.1)

- Dynamic documents: links to the DMP web page, they could include changes which were not taken into account when the metadata was generated.
  - GitHub dynamic page: [https://lagoproject.github.io/DMP/rights/lagoCommonRights.1.1/](https://lagoproject.github.io/DMP/rights/lagoCommonRights.1.1/)
  - CURL command agaisnt the GitHub dynamic page: (TBD.)


### The plain JSON-LD file

```json
{% include_relative lagoCommonRights.1.1.jsonld %}
```
