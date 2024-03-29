---
layout: default
parent: Old Schemas
grand_parent: Metadata Schema
nav_order: 1
---

# Metadata Schema for LAGO 1.0
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.0   | {{ site.time }} | 2020-06-01 - today | LAGO Collaboration |

## Table of contents
{: .no_toc}

- TOC
{:toc}

## What is defined?

This schema is the metadata vocabulary used to describe the datasets (the files) and catalogs (the directories) stored in the LAGO repositories. Aiming to provide a standardised description of the data to make them findable, accessible, interoperable, and reusable [(FAIR)](https://www.go-fair.org/fair-principles/). 

This specification is independent of the other metadata currently generated by LAGO applications. They should coexist to avoid significant loss, since legacy metadata files are handled as datasets. 

Therefore, the metadata schema is based on three pillars:

- [The LAGO vocabulary](./lagoSchema.1.0.jsonld): as described in this document. It is a re-profile of [DCAT-AP2](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) (European Commission), extending the existing classes and adding properties needed for LAGO computation.

- Main vocabulary: [DCAT-AP2](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) (European Commission), which is a specific profile of [DCAT2](https://www.w3.org/TR/vocab-dcat-2/) (W3C), recommended for repositories, content aggregators or data consumers related to the public sector (governments, research centers, funded projects).

- Language syntax: [JSON-LD 1.1](https://json-ld.org/spec/latest/json-ld/) (W3C). It is the simplest standard for linking metadata. Promoted by Google, currently, it is ousting more heavy and complex syntaxes such as RDF, Turtle, XML.  


## How to use this metadata vocabulary?

Firstly, any developer should be familiar with the specifications of [JSON-LD 1.1](https://json-ld.org/spec/latest/json-ld/), [DCAT2](https://www.w3.org/TR/vocab-dcat-2/) and [DCAT-AP2](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe). In particular, you should focus on JSON-LD to avoid getting confuse with other syntaxes and explore as many JSON-LD examples as possible (as the ones at [json-ld.org](https://json-ld.org/) or W3C --only using the Schema.org, not DCAT, as main vocabulary--). For instance, you can review the JSON-LD implementations for [wc3.org/DCAT2](https://www.w3.org/ns/dcat2.jsonld) and [GitHub/DCAT-AP2](https://github.com/SEMICeu/DCAT-AP/tree/master/releases).

Secondly, the developer can use [this document](./lagoSchema.1.0.md) and the [lagoSchema.1.0.jsonld](./lagoSchema.1.0.jsonld) as the reference for:
- interpreting the state of the stored data (curation, provenance) and their contents (a resume) to:
    - make searches and process the selected data, 
    - expose and harvest data;
- making data available by means to: 
    - describe legacy data (extracting metadata from existing files),
    - generate new data with metadata (specific LAGO wrappers execute the processing or [simulations](examples/sims/simulationExample.md));
- using the pre-established:
    - [definitions](/defs/index.md): [LAGO sites](/defs/lagoSites.md) or [LAGO organisation](/defs/lagoOrganisation.md),
    - [rights](/rights/index.md): licenses and permissions;
- proposing extensions of the schema or definitions:
    - new or existing LAGO sites,
    - users, institutions, etc.


## Vocabulary item by item

{% include generate_html_for_vocab.html folder="/DMP/schema/lagoSchema.1.0.jsonld" vocabulary="true" %}


## Plain JSON-LD file

{% capture thisPage %}
    {% include_relative lagoSchema.1.0.jsonld %}
{% endcapture %}
```json
{{ thisPage }}
```


