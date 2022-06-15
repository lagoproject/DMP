---
layout: default
parent: Definitions
nav_order: 2
---

# LAGO Collaboration 1.1
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.1   | {{ site.time }} | 2020-06-01 - today | LAGO Collaboration |


## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## What is defined?

[lagoCollaboration.1.1.jsonld](./lagoCollaboration.1.1.jsonld) unifies the definition of the LAGO Collaboration following the official LAGO schema vocabulary. 

The purpose of the definition is to univocally identify the LAGO Collaboration employing a public URI for being linked by any metadata. 


## How should this definition be referenced for linked-data?

To preserve the provenance of the linked metadata through time, the GitHub raw link of a certain tag release (``Major.Minor.Patch``) of this document must be used:

`https://raw.githubusercontent.com/lagoproject/DMP/`*\<Major.Minor.Patch\>*`/defs/lagoCollaboaration.1.1.jsonld`

For example:

[https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/defs/lagoCollabaration.1.1.jsonld](https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/defs/lagoCollaboration.1.1.jsonld)


As a real example, the metadata´s catalog of a simulation should include the reference to the [DCAT-AP2](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) property [publisher](https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld#publisher):

```json
{
"@context":{
...
            "lago":"https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/schema/lagoSchema.1.1.jsonld",
            "@vocab":"https://raw.githubusercontent.com/SEMICeu/DCAT-AP/2.0.0/releases/2.0.0/dcat-ap_2.0.0.jsonld",
...
          },
"@id":"/sac_60_100.0_75600_QGSII_flat",
"@type":"Catalog",
"title":"sac_60_100.0_75600_QGSII_flat",
"description":"A Complete Corsika Simulation",
"publisher":{
             "@id":"https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/defs/lagoCollaboration.1.1.jsonld",
             "@type":"lago:Organization"
            },
...
...
```

### How could this definition be embarranssingly referenced?

Although it is **discouraged** because these methods do not preserve the metadata provenance,  it could be sometimes needed referencing using alternative ways.

- Links to other official LAGO pages: gererally are updated but not corresponding with the the release of software used for generating the metadata.
  - Directly, the main page for LAGO Collaboration [http://lagoproject.net](http://lagoproject.net) page.
  - The current list of collaborators: [https://lagoproject.net/collab.html](https://lagoproject.net/collab.html)
  - CURL command against *lagoproject.net* page: (TBD.)
  - The GitHub repository for LAGO Collaboration: [https://github.com/lagoproject/](https://github.com/lagoproject/),
  - The DockerHub repositroy for LAGO Collaboration: [https://hub.docker.com/u/lagocollaboration](https://hub.docker.com/u/lagocollaboration)
  
- Alternative static documents: they could be outdated with respect to the release of software used for generating the metadata.
  - arXiv DOI: [https://doi.org/10.48550/arXiv.1909.10039](https://doi.org/10.48550/arXiv.1909.10039)  
  
- Linking this document using only the **main release** (the ``Major.Minor``) as reference and forgetting the GitHub tag release, altough it could include changes which were not taken into account when the metadata was generated. As this document has ``Major.Minor = 1.1`` version
  - GitHub dynamic page for the : [https://lagoproject.github.io/DMP/defs/lagoCollaboration.1.1/](https://lagoproject.github.io/DMP/defs/lagoCollaboration.1.1/)
  - CURL command against this GitHub dynamic page (TBD).


## Plain JSON-LD file

```json
{% include_relative lagoCollaboration.1.1.jsonld %}
```

