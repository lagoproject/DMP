---
layout: default
#title: Definitions
has_children: false
nav_order: 2
---

# The PSA Data Management Plan (DMP) document
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.1 develop | {{ site.time }} | 2020-06-01 - today | PSA-CIEMAT |


## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## A. Data summary

This section presents the main issues on how the project deals with data as established in the PSA Data Management Plan (DMP).

#### **Purpose of the data collection/generation**.

The [Plataforma Solar de Almería (PSA)](https://www.psa.es/), a dependency of the [Centro de Investigaciones Energéticas, Medioambientales y Tecnológicas (CIEMAT)](https://www.ciemat.es/). The PSA is the largest concentrating solar technology research, development and test center in Europe, which activities are integrated in the CIEMAT organization as an R&D division of the Department of Energy. 

The [PSA](https://www.psa.es/) manages a network of SOLAR detectors at different GEOPOSITIONAL LOCATIONS RELIYING ON DIFFERENT HARDWARE AND SOFTWARE.

The measurements collected from these detectors are processed and analysed in subsequent steps.. 

The final purpose is to enable the long-term curation and re-use of data within and outside the PSA through a Virtual Observatory of SOLAR....

#### **Relation to the objectives of the project**.

The objective is to enable the long-term curation and re-use of generated data within and outside the PSA through a Virtual Observatory, being of interest in areas as HEP, space weather, life sciences, aerospatial security, computer science,...

On the other hand, the European Commission (EC) requires open access to the results obtained from their funded projects and encourages the implementation of FAIR policies as an additional standard in research. Since PSA is (and will be) involved in several EC projects, the generated or stored data should observe these guidelines for the success of future collaborations and applying to funding.

#### **Types and formats of generated/collected data**.

Every generated **file** is considered **the minimum data-set** to be linked and processed, while **a collection** of related files is grouped in a **catalog**, which should be referenced with a persistent and unique identifier (PID). As the different PSA activities generate only one data sub-type, **catalogs will only contain files belonging to one sub-type activity**, with exception of checking or correction procedures.

There are two main kinds of data managed by the PSA. The first one is the data measured or raw (R) by the detectors, and the second is the data processed (P) from these raw data.

The measured (raw) data depends on the hardware/software of the detectector:
  - **R0.** ... : data as acquired from detectors of [type](https://github.com/?).
  - **R1.** ... : data as acquired from detectors of [type](https://github.com/?).

The aforementioned (raw) data is pipelined for correction and analysis, obtaining the following data sub-types according to their quality and processing level. 

Users can perform their own processing. 
Users are able to generate different types of hierarchical data-sets:

  - **P0. Unifiying datasets**:  R0-R* are translated to a common format, which are described in the official [standard](https://dummy.ciemat.es/....).
  - **P1. Analyzed**: analysis and outputs of the P0 data-set, containing the expected XXXXX. These data are the 

#### **Re-used previous data**.

Measurements from PSA detectors gathered in previous years and stored at the PSA and CIEMAT, this is, ~ XXX TB. Additionally, previous processing performed by users will be considered if it implies high CPU consumption to be recalculated.

#### **Origin of the data**.

| Data Type | Source |
|-----------|--------|
| Raw 0 (R0) | measurements of detectors of [type](https://dummy0.ciemat.es)|  
| Raw 1 (R1) | measurements of detectors of [type](https://dummy1.ciemat.es)| 
| ... | ... |  
| Unified datasets 0 (P0) | measurements of detectors of [type](https://dummy0.ciemat.es)|  
| Analyzed (P1) | measurements of detectors of [type](https://dummy1.ciemat.es)| 
| ... | ... |

#### **Expected size of the data**.

Fixed data-set for raw (R) data is one hour of measurement:
  - Raw 0 (R0): ~ XXX MB
  - Raw 1 (R1): ~ XXX MB
  - ...
The minimal data-set for processed data is XXXX:
  - Unified datasets 0 (P0): ~ XXX MB 
  - Analyzed (P1): ~ XXX MB
  - ...

Typically, every detector generates one measurement per hour producing files of ~ XXXMB-XXXMB each, this is ~ XXXGB-XXXGB of raw data per month for a total of 720 files. 

These files can originate 70-120GB of cleaned data (L1) and 10-40GB of quality data (L2 and L3). The one-hour interval is kept as the reference unit, resulting in 2160 files (between 2-160MB each). The necessary amount of CPU resources to generate these files is small; around XXX minutes on a Gold XXX Intel core (XXX GHz). However, all data-sets should be preserved for reprocessing if software errors appear in the future.

On the other hand, users can perform their own simulations, which should be re-usable and reproducible by other collaborators. A standard simulation using only CORSIKA (i.e. s background simulation), results in a data-set of 4-10 GB (usually ~ 6 GB), but the simulation of one event could take up to 100 GB. Geant4 files output does not change these estimated figures.

To keep the one-hour convention, both types of simulations are usually split into 60 runs, with an interval lasting from 15 minutes to 10 hours. One task per minute. Thus, the complete workload of a background simulation is over 640 CPU/hours (Gold Intel core, 2 GHz). Additionally, to assure reproducibility, every input and output file of each run should be in the data-set comprising 180 files.

Currently, there are 10 detectors installed (plus 11 planned), that can potentially transfer 18 TB/year of raw data. Members of the Collaboration (~ 85 researchers) are also allowed to run simulations. Thus, the entire collaboration could generate up to 27 TB of raw, cleaned, and analyzed data, plus 12-120 TB of simulated data in one year. Nevertheless, the availability of detectors can be an issue, an active user could submit 10 or 20 simulations per month, but actually researchers do not regularly submit simulations, and even some may only run simulations sporadically. Therefore, a realistic estimation of the storage consumption could be around 3.6 TB/year of L(0-3) data corresponding to 4 WCDs and 2-8 TB/year corresponding to 25 active users.


| Data Type | triggered | Size |  number of files | 
|-----------|-----------|------|------------------|
| Raw 0 (R0) | measurements of detectors of [type](https://dummy0.ciemat.es)|  XXX GB/month per detector, total XXX GB/month | num files |
| Raw 1 (R1) | measurements of detectors of [type](https://dummy1.ciemat.es)|  XXX GB/month per detector, total XXX GB/month | num files |
| ... | ... | ... | ... |  
| Unified datasets 0 (P0) | measurements of detectors of [type](https://dummy0.ciemat.es)| XXX GB/month per detector, estimated XXX GB/month |  num files |
| Analyzed (P1) | measurements of detectors of [type](https://dummy1.ciemat.es)| XXX GB/month per detector, estimated XXX GB/month |  num files |
| ... | ... | ... | ... |

#### **The utility of the data: to whom will they be useful**.

FSA data are of interest for Weather and Climate forecasting applied to the solar generation of energy. Moreover, they are also of interest for other scientific or industrial areas such as Astrophysics, High Energy Physics, Life Sciences, Geophysics, Aero-spatial security or Computer Science, among others, because of the effects of solar radiation on natural life, materials, or climate change, among others.

## B. FAIR data

### B.1. Making data findable, including provisions for metadata:

#### **Discoverability of data (metadata provision)**.

The PSA data repository will be based on [OneData](https://onedata.org). OneData supports storing catalogs and datasets with enriched metadata, as well as publishing catalogs with persistent identifiers (PIDs) to allow gathering by services such as [B2FIND](https://eudat.eu/services/b2find). Thus **the discoverability** will be technically guaranteed, through:
- OneData:
  - for PSA members: web browser (without search engine), CDMI API, proprietary API and FUSE mount;
  - for the general public: web browser (link to a public PID).
- B2FIND: web interface (with search engine), for PSA members and the general public.
- Other discovery services: customized CKAN based (for Comprehensive Knowledge Archive Network) could better benefit from metadata provided than B2FIND, and they will be explored in the future. Anyway, when the data become public, any discovery service can gather metadata, even not specific engines such as Google.

Some of these services will be supported by the EOSC infrastructure as they are included in its [marketplace](https://marketplace.eosc-portal.eu/):
- OneData is [provided](https://marketplace.eosc-portal.eu/services/egi-datahub) through the [EGI DataHub service](https://datahub.egi.eu).
- B2FIND is also [offered](https://marketplace.eosc-portal.eu/services/b2find) through an unified [web page](http://b2find.eudat.eu/).

Specific PSA wrappers execute the processing or simulation and, at a subsequent stage, check every data-set and store them in the PSA repository, always together with their metadata. These wrappers are packed into Docker images and released at the [official PSA code repository](https://github.com/???) in GitHub.

To assure the **metadata provision**, the only way to directly store and publish data-sets in the PSA repository (by PSA members) is by making use of these wrappers from the official Docker releases. Any other data to be included in the repository must be supervised and checked by the PSA organization.

#### **Identifiability of data and standard identification mechanisms (PIDs)**

There are two kinds of standard identifiers:
1. Resolvable IRIs [(IETF RFC 3987)](https://tools.ietf.org/html/rfc3987) that univocally identifies every JSON-LD [(W3C Recomm.)](https://www.w3.org/TR/json-ld11/) object (datasets, catalogs and others) over the Internet. They build the network of standards-based, machine-readable linked-data across websites, actually allowing the provenance and reuse of the data.
2. [Handle.net](http://handle.net) PIDs that only points to catalogs or to repository providers. The first ones are used as shortcuts for publication (as cheaper [DOIs](https://doi.org)), but the second are for assuring the accessibility to the whole data through provider migrations (changes of name/domain), being part of the aforementioned IRIs.

For clarification, the Internationalized Resource Identifier (IRI) is an internet protocol standard [IETF RFC 3987](https://tools.ietf.org/html/rfc3987) that unambiguously identifies an object, but a resolvable IRI corresponds to the one that can be publicly accessed on Internet, preferably through conventional protocols such as HTTP. The basis of JSON-LD syntax [(W3C Recomm.)](https://www.w3.org/TR/json-ld11/) is always to refer to related objects and descriptions with IRIs to discover new data by simply following those links. This creates a metadata grid linking objects. These objects describe datasets, catalogs as well as provenance elements (activities, actors, owners) following a certain vocabulary.

On the other hand, repository providers are physical servers, with certain DNS name/IP. However, these addresses could change through time due to migrations of data, maintenance or changes of their domains. To preserve the linked grid and the univocal identification, absolute IRIs should use persistent and unique identifiers (PIDs) from [Handle.net](http://handle.net) to resolve these addresses, and even a catalog service. The preferred way to state this in JSON-LD is using the `@base` property in the `@context`, becoming the needed IRIs relative to the `@base` PID.

As commented above, every generated file is considered a dataset, but only collections of related datasets compose the catalogs. Catalogs should be directly referenced with PIDs from Handle.net, but datasets should not. The reason is that there is no necessity for a dataset reference in a publication. For example, an input file without the output. Moreover, every file (i.e. dataset) can also be identified with a relative path to its catalog's PID. When a Catalog is complete and verified, the corresponding PID for being published will be automatically requested by the checker tool to the EOSC B2Handle service.

#### **Naming conventions**.

Any dataset or catalog will be referenced by its absolute IRI, composed by its provider PID, its internal path and its name. Note that a catalog corresponds to a directory and a dataset to a file in the repositories.

In general, files (i.e datasets) generated by WCDs or base software will maintain their names when they are stored in repositories, but naming catalogs will follow a different approach. In order to be distinguishable, the catalog name will be based on the data type (L0-L3, S0-S2) by adding meaningful parameters used by the software, splitted by the `_` character.

| Data Type | Source | Catalog Name |
|-----------|--------|------|
| Raw (L0) | Water-Cherenkov detector (WCD) | TBD. `L0_<site name>` |
| Preliminary (L1) | Raw data from WCD | (_TBD<sup>*</sup>._) `L1_<site name>` |
| Quality (L2) | Cleaned data from WCD | (_TBD<sup>*</sup>._) `L2_<site name>` |
| Quality (L3) | Cleaned data from WCD | (_TBD<sup>*</sup>._) `L3_<site name>` |
| Simulated (S0) | researchers | `S0_<site>_<flux time>_<altitude>_ <CORSIKA version>_<HE model>[_LE model][_volu][_flat][_Cherenk][_HEcuts][_GDASmodel]_[defaults]` |
| Analyzed (S1) | Analisyed data from S0 | (_TBD<sup>*</sup>._) `S1__<site>_<flux time>__<altitude>_ <CORSIKA version>_...` |
| Analyzed (S2) | Simulation model from S1 | (_TBD<sup>*</sup>._) `S2__<site>_<flux time>__<altitude>_ <CORSIKA version>_...` |

<sup>*</sup>(_Not supported by EOSC-Synergy. It is added for completeness and future projects._)

Moreover, versioning is only allowed for catalogs by adding a `_v<number>` at the end of the catalog´s name.

#### **Approach towards search keywords**.

Searching should be based on any metadata value, but there are technical limitations of the discovery services (i.e., B2FIND) and repositories (i.e., OneData). Therefore, the main search keywords that enable minimal SPARQL queries are the ones related to:
- the location (virtual or real) of the site: name, magnetic field, atmosphere, observation level and GPS coordinates;
- the measured period or the simulated flux time.

#### **Approach for clear versioning**.

To save on computational costs, versioning (i.e the same generation of files without modifiying the input parameters) only is allowed if corrections have been done by the software used for generating them. It implies that every file should be calculated again. Thus, it is more clear to build a new catalog for storing them together with their new metadata. It will be declared by adding a `_v<number>` at the end of the catalog's name, where `<number>` is a consecutive number indicating the version and starting with 2.  

Therefore, versioning directly the files (i.e. datasets) is not allowed, and the decision about versioning any catalog will be based on the metadata previously stored (related to parameters and software version). 


#### **Standards for metadata creation (in your discipline)**.
(_If there are no standards in your discipline describe what metadata will be created and how_)

| Data Type | related standards | previous metadata | new metadata specification |
|-----------|-------------------|-------------------|--------|
| Raw (L0) | JSON for GEANT4/ROOT validator. Freyermuth et. al, DOI: [10.1051/epjconf/201921405002](https://doi.org/10.1051/epjconf/201921405002) | key:value [(ACQUA docs)](https://github.com/lagoproject/acqua) and XML/DublinCore. Asorey H. et al, DOI: [10.1109/CCGrid.2016.110](https://doi.org/10.1109/CCGrid.2016.110) | JSON-LD/DCAT-AP based [profile](/DMP/schema/) and [definitions](/DMP/defs) |
| Preliminary (L1) | None | None | (_TBD<sup>*</sup>._) JSON-LD/DCAT-AP based [profile](/DMP/schema/) and [definitions](/DMP/defs) |
| Quality for Astrophysics (L2) | None | None |  (_TBD<sup>*</sup>._) JSON-LD/DCAT-AP based [profile](/DMP/schema/) and [definitions](/DMP/defs) |
| Quality for public (L3) | None | None |  (_TBD<sup>*</sup>._) JSON-LD/DCAT-AP based [profile](/DMP/schema/) and [definitions](/DMP/defs) |
| Simulated (S0) | None | XML/DublinCore: Asorey H. et al, DOI: [10.1109/CCGrid.2016.110](https://doi.org/10.1109/CCGrid.2016.110) | JSON-LD/DCAT-AP based [profile](/DMP/schema/) and [definitions](/DMP/defs) |
| Analyzed (S1) | JSON for GEANT4/ROOT validator: Freyermuth et. al, DOI: [10.1051/epjconf/201921405002](https://doi.org/10.1051/epjconf/201921405002) | None | ((_TBD<sup>*</sup>._) JSON-LD/DCAT-AP based [profile](/DMP/schema/) and [definitions](/DMP/defs) |
| Analyzed (S2) | None | None |  (_TBD<sup>*</sup>._) JSON-LD/DCAT-AP based [profile](/DMP/schema/) and [definitions](/DMP/defs) |

<sup>*</sup>(_Not supported by EOSC-Synergy. It is added for completeness and future projects._)

### B.2. Making data openly accessible:

#### **Which data will be made openly available**.

(_If some data is kept closed provide rationale for doing so_).

Data will be made publicly available after a variable waiting (embargo) period similar to the established ones for other large experiments.

#### **Specify how the data will be made available**.

Consolidated datasets (grouped by catalogs) will be exposed together with their metadata through the [EGI DataHub, https://datahub.egi.eu](https://datahub.egi.eu) service to be gathered by discovery services such as B2FIND, thus:  

- General public: B2FIND web interface at [http://b2find.eudat.eu](http://b2find.eudat.eu) (search engine of metadata published), a web browser to the page of some published catalog (link to a public PID). Additionally, as metadata follow a linked-data syntaxis and standards, other discovery services, even Google could find them.
- PSA members: the aforementioned ones for general public plus, browser whole data repository at [https://datahub.egi.eu](https://datahub.egi.eu) (without search engine),
CDMI API, proprietary API and FUSE mount on a local system of the repository tree.


#### **Methods or software tools needed to access the data**.

(_Is documentation about the software needed to access the data included?_)
(_Is it possible to include the relevant software (e.g. in open source code)?_)

To profit from the published data, researchers should use the CORSIKA tools included in the source code and described in the official documentation in section 10, page 121 at
https://web.ikp.kit.edu/corsika/usersguide/usersguide.pdf

#### **Where the data and associated metadata, documentation and code are deposited**.

As commented above, data and metadata will be stored in providers associated to [EGI DataHub, https://datahub.egi.eu](https://datahub.egi.eu) service (relying in [OneData](https://onedata.org/) technology), while the documentation and codes:

| Data Type | Docs and code URLs |
|-----------|--------|
| Raw (L0) | [ACQUA](https://github.com/lagoproject/acqua) |
| <sup>*</sup>Preliminary (L1), Quality for Astrophysics (L2) and for public (L3) | [ANNA](https://github.com/lagoproject/anna) |
| Simulated (S0) | [onedataSim](https://github/lagoproject/onedataSim), [ARTI](https://github/lagoproject/arti), [CORSIKA](https://web.ikp.kit.edu/corsika/) |
| <sup>*</sup>Simulated (S1, S2) | [onedataSim](https://github/lagoproject/onedataSim), [ARTI](https://github/lagoproject/arti), [CORSIKA](https://web.ikp.kit.edu/corsika), [GEANT4](https://geant4.web.cern.ch), [ROOT](https://root.cern.ch) and [geant-val](https://geant-val.cern.ch) |

<sup>*</sup>(_Not supported by EOSC-Synergy. They are added for completeness and future projects._)

#### **Specify how access will be provided in case there are any restrictions**.

The data will be only accessible by the author and/or the Collaboration during the embargo period with the corresponding OpenID credentials. These will be obtained after login into the PSA Virtual Organisation, supported by eduTEAMs (https://eduteams.org/), a service provided by GEANT in Europe and associated with RedClara.

A manual for joining to the PSA VO is published at:
- [https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO/](https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO/),

while a manual to login into EGI DataHub, visualise datasets and obtain tokens is at:
- [https://lagoproject.github.io/DMP/docs/howtos/how_to_login_OneData/](https://lagoproject.github.io/DMP/docs/howtos/how_to_login_OneData/).


### B.3. Making data interoperable:

####  **Interoperability of data (general vocabularies, standards or methodologies)**

(_Specify what data and metadata vocabularies, standards or methodologies you will follow to facilitate interoperability_)

Metadata:
- Language syntax: [JSON-LD 1.1, W3C](https://json-ld.org/spec/latest/json-ld/)
- Main vocabulary: [DCAT-AP2, European Commission](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe), which is a specific profile of [DCAT2, W3C](https://www.w3.org/TR/vocab-dcat-2/) recommended for repositories, content aggregators or data consumers related to the public sector (goverments, rearch centers, funded projects).
- PSA vocabulary: It is re-profile of [DCAT-AP2, European Commission](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe), extending the existing classes and adding properties needed for the PSA computation. The [re-profile](/DMP/schema/) and specific [definitions](/DMP/defs) are available at [https://lagoproject.github.io/DMP/](https://lagoproject.github.io/DMP/).


Data:
- Unfortunately, the generated data follow propietary formats. 
- Interesting parameter or summarised results will be extracted from data-sets and then represented in their metadata using terms belonging PSA vocabulary.


####  **Inter-disciplinary interoperability**

(_Specify whether you will be using standard vocabulary for all data types present in your data set, to allow inter-disciplinary interoperability? If not, will you provide mapping to more commonly used ontologies?_)

In principle, only supports [CORSIKA](https://web.ikp.kit.edu/corsika), inputs/outputs as described in the official documentation, which widely used in several disciplines.
However, rest of data currently follows a proprietary format. Translating files to standardised formats in the future can be considered. For now, the only alternative identified could be translate these files to the [ROOT](https://root.cern.ch) format and make use the vocabulary for [GEANT4/ROOT](https://geant-val.cern.ch) validator (Freyermuth et. al, DOI: [10.1051/epjconf/201921405002](https://doi.org/10.1051/epjconf/201921405002)), but it does not accomplishes all the requirements of LAGO. 


### B.4. Increase data re-use (through clarifying licenses):

####  **How the data will be licensed**.

- Related code: [BSD-3 clause](https://opensource.org/licenses/BSD-3-Clause)
- Documentation (including DMP): [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Metadata specifications: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Data: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Metadata: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Databases derived from metadata or data: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)

A compilation of common rights and acceptable use policies are available for reference at [https://lagoproject.github.io/DMP/rights/](https://lagoproject.github.io/DMP/rights/).

####  **When the data will be made available for reuse**.

(_Specify why and for what period a data embargo is needed_).

LAGO Collaboration requires a waiting period similar to the established ones for other large experiments. Such a period should be set not only to properly exploit results by the Consortium before their availability, but because measured raw data must be pre-processed by the Consortium to make them 'understandable’. Simulations will be available too, but it would be valuable that the waiting period could be set by the user, as the data owner. The recommended embargo period is set as one year in general, but depends on the data type, specifically:

| Data Type | embargo period |
|-----------|--------|
| L0 | private while quality data (L2,L3) are not publicly available. |
| L1 | should be released almost in real-time as it is important for operative space weather forecasting. Should include a disclaimer about quality and usage. |
| L2, L3 | one year.|
| S0, S1, S2 | one year maximum, the owner can decide to open the data before the end of this period.|

####  **Usability by third parties (restricted data)**.

(_Specify whether the data produced and/or used in the project is usable by third parties, in particular after the end of the project? If the re-use of some data is restricted, explain why_).

There is no restriction after the embargo period with exception of the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) clauses.

####  **Data quality assurance processes**.

Only the data measured by WCDs or generated using software versions officially released by LAGO will be stored and exposed in the repositories. Previously to the publication, a robot of the Virtual Organization will check the minimal accuracy of the data.

####  **Length of time for which the data will remain re-usable**.

Indefinitely, after the waiting period.

## C. Allocation of resources

Cloud storage is based on OneData techonology, and the architecture will count on:
- The OneZone service at [EGI DataHub](https://datahub.egi.eu), supported by the EOSC infrastructure. 
- A network of OneProviders, supported by LAGO participating institutions: 
  - Tier 1 OneProviders: the high capacity ones will store all data generated, backing up other tiers and among them.
  - Tier 2 OneProviders: mid-capacity servers assuring long-term availability, used to improve the performance in a region.   
  - Tier 3 OneProviders: temporal deployments for local caching before consolidate data in upper tiers.

The architecture is deeply described at [https://ciemat-tic.github.io/PSA-DMP/Architecture/](https://ciemat-tic.github.io/PSA-DMP/Architecture/).

####  **Costs for making your data FAIR**.

The process of making the data FAIR will be supported by CIEMAT. The cost of the management (human resources) will be supported by CIEMAT and counting on external collaborators.

####  **Responsibilities for data management in your project**.

Computing as data management will be structured as a Virtual Organization with specific roles for data acquisition and processing.

| Roles |  Responsability |
|-------|-----------------|
| Head of data management | Administrative account, only for enabling new resources or modifiying permissions of main roles. |
| System admnistrators of OneProviders | To maintain the availability and preserve the data and metadata stored. |
| Members of standardisation group | To establish data organisation and metadata definition. |
| Country representative/delegate | To authorise or ban local members in the VO. |
| Task coordination delegates | To assure the accurancy of a specific kind of data and metadata automatially (robots) or manually generated (for example the raw data (R*)). |
| PSA members | They must follow the rules of data generation/storing and they must not abuse of the services. |

####  **Costs and potential value of long-term preservation**.

Preservation of data-sets is essential for the sustainability of PSA research. Every active detector should generate XXXXGB/month of raw (R*) data. Currently, due to the number of active detectetors, the PSA network will generate up to XXX TB of raw (R*) data, plus XXX TB of processed (P*) data throughout the year. Data should be replicated, at least, in two locations of a distributed repository (in this case OneData).

Considering an average generation of XXXTB/year, the costs of a 4-years long-term data preservation are related to hardware (two generic RAID servers ~240TB = ~30k€, prices in 2019), consumption (3.68KW max. power for 2 servers, ~ 0.1 €/kWh industrial price average in 2019 = max. 13k€) and human resources (technician: XXXX person/month, scientific: XXXX p/m, ~XXXk€).

## D. Data security

(_Address data recovery as well as secure storage and transfer of sensitive data_). 

There is no sensitive data, thus anonymity and encryption are not required. 

Data recovery should be guaranteed by using replication, at least, in two locations of a distributed repository or filesystem, in this case OneData. Thus, following the classification in tiers, every space supported by an OneProvider must be replicated in any other OneProvider that holds Tier level 1. The backup architecture is described at [https://ciemat-tic.github.io/PSA-DMP/Architecture/](https://ciemat-tic.github.io/PSA-DMP/Architecture/).

## E. Ethical aspects

Data do not contain protected records that could present ethical or security issues. The only personal data included are the required by FAIR policies in metadata, i.e., the name and the identifier of the author of the data-set. On the other hand, there are no issues with reusing previous raw data generated in PSA, as well as the data belonging to the CIEMAT.

## F. Acknowledgment

This PSA Data Management Plan is based on the [LAGO Data Management Plan](https://lagoproject.github.io/DMP/) published under the terms of the Creative Common [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) license. Main authors of the source document are also authors of this DMP, which reserve them the rights for modifying both licenses in the future. 


