---
layout: default
#title: Definitions
has_children: false
nav_order: 2
---

# The LAGO Data Management Plan (DMP) document
{: .no_toc }

|Version| Updated | Date |Contributors|
|-------|---------|------|------------|
| 1.1 develop | {{ site.time }} | 2020-06-01 - today | LAGO Collaboration |


## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## A. Data summary

This section presents the main issues on how the project deals with data as established in the LAGO Data Management Plan (DMP).

#### **Purpose of the data collection/generation**.

The [Latin American Giant Observatory (LAGO)](https://lagoproject.net) is an extended cosmic ray observatory composed of a network of water-Cherenkov detectors (WCD) spanning over different sites located at significantly different altitudes and latitudes.

The measurements collected from these detectors are processed and analysed in subsequent steps. Additionally, scientists continuously generate simulated data. The final purpose is to enable the long-term curation and re-use of data within and outside the LAGO Collaboration through a Virtual Observatory.

#### **Relation to the objectives of the project**.

The objective is to enable the long-term curation and re-use of generated data within and outside LAGO Collaboration through a Virtual Observatory, being of interest in areas as HEP, space weather, life sciences, aerospatial security, computer science,...

On the other hand, the European Commission requires open access to the results obtained from their funded projects meanwhile, EOSC-Synergy being a H2020 project (RIA 857647) encourages the implementation of FAIR policies as an additional standard in research. Since LAGO computations are included in the EOSC-Synergy project as one of their Thematic Services, the generated or stored data within the project resources must observe these guidelines, being also beneficial for the success of both initiatives.

#### **Types and formats of generated/collected data**.

Every generated **file** is considered **the minimum data-set** to be linked and processed, while **a collection** of related files is grouped in a **catalog**, which should be referenced with a persistent and unique identifier (PID). As the different LAGO activities generate only one data sub-type, **catalogs will only contain files belonging to one sub-type activity**, with exception of checking or correction procedures.

There are two main kinds of data managed by the LAGO Collaboration. The first one is the data measured (L) by the water-Cherenkov detectors (WCD), and the second is the data obtained from simulations (S).

The measured (raw) data is pipelined for correction and analysis, obtaining the following data sub-types according to their quality and processing level:
  - **L0. Raw data**: data as acquired from detectors. Including onboard telemetry. Data directly acquired and transferred from the LAGO [ACQUA system](https://github.com/lagoproject/acqua).
  - **L1. Preliminary data<sup>*</sup>**: low temporal resolution data processed in almost real-time. Only includes atmospheric pressure corrections. First processing level in the LAGO [ANNA framework](https://github.com/lagoproject/anna).
  - **L2: Quality for Astrophysics<sup>*</sup>**. Ensures quality data to be used by experts from the Astrophysics Community: fixed level scalers by atmospheric parameters and the detector efficiency. This corresponds to the second level of processing in the [ANNA framework](https://github.com/lagoproject/anna).
  - **L3. Quality for the general public<sup>*</sup>**. Ensures high quality data to be used by researchers from other subjects or the general public. Charge histograms of the detectors are also processed/corrected. This is the third level of processing in the [ANNA framework](https://github.com/lagoproject/anna).

On the other hand, users can perform their own simulations of extensive atmospheric showers (EAS), the cascades of secondary particles are produced when a high-energy particle coming from the space interacts with the atmosphere. By using the LAGO [ARTI framework](https://github.com/lagoproject/arti), it is possible to simulate the expected flux on signals at the detector level including different geomagnetic, atmospheric and detector conditions. By using ARTI, users are able to generate different types of hierarchical data-sets:
  - **S0. Plain simulations**: CORSIKA outputs, which are described in the official documentation [D. Heck and T. Pierog, "Extensive Air Shower Simulation with CORSIKA: A User’s Guide". Version 7.7100 from December 17, 2019](https://web.ikp.kit.edu/corsika/usersguide/usersguide.pdf), section 10, page 121.
  - **S1. Analyzed simulations<sup>*</sup>**: ARTI analysis and outputs of the S0 data-set, containing the expected flux of secondary particles at the ground.
  - **S2. Detector response simulations<sup>*</sup>**: ARTI detector simulation module, containing a complete, detailed and adjustable [Geant4](https://geant4.web.cern.ch/) model of the LAGO detectors. The main output is the expected signals in the detector, allowing site characterization and comparison with L2 and L3 data sets at each site.

<sup>*</sup>(_Not supported by EOSC-Synergy. They are added for completeness and future projects._)

#### **Re-used previous data**.

Measurements from WCDs gathered in previous years and relevant simulations stored at the old centralized repository at UIS (Universidad Industrial de Santander, Colombia). This is, ~ 6.6TB, mainly measurements. Additionally, previous simulations performed by users in private clusters will be considered if implies high CPU consumption.

#### **Origin of the data**.

| Data Type | Source |
|-----------|--------|
| Raw (L0) | measurements of Water-Cherenkov detectors (WCDs) |  
| Preliminary (L1) | cleaning raw data (L0) |
| Quality for Astrophysics (L2)| fixed scalers from preliminary data (L1) |  
| Quality for public (L3)| fixed scalers from histograms in quality data (L2) |
| Simulated (S0) | from standalone CORSIKA runs |
| Analyzed (S1) | ARTI analysis of plain simulated data (S0) |
| Analyzed (S2) | ARTI analysis including simulated detector response |

#### **Expected size of the data**.

Minimal data-set is one hour of measurement or simulation:
  - Raw data (L0): ~200MB
  - Preliminary data (L1): ~100MB
  - Quality data (L2, L3): ~ 30 MB
  - Simulated background (S0+S1+S2): ~ 10GB
  - Simulated event (S0+S1+S2): ~ 110GB

Typically, every WCD generates one measurement per hour producing files of ~ 200MB each, this is ~ 150GB of raw data per month for a total of 720 files. These files can originate 70-120GB of cleaned data (L1) and 10-40GB of quality data (L2 and L3). The one-hour interval is kept as the reference unit, resulting in 2160 files (between 2-160MB each). The necessary amount of CPU resources to generate these files is small; around 35 minutes on a Gold 6138 Intel core (2 GHz). However, all data-sets should be preserved for reprocessing if software errors appear in the future.

On the other hand, users can perform their own simulations, which should be re-usable and reproducible by other collaborators. A standard simulation using only CORSIKA (i.e. s background simulation), results in a data-set of 4-10 GB (usually ~ 6 GB), but the simulation of one event could take up to 100 GB. Geant4 files output do not change this estimated figures.

To keep the one-hour convention, both types of simulations are usually split into 60 runs, with an interval lasting from 15 minutes to 10 hours. One task per minute. Thus, the complete workload of a background simulation is over 640 CPU/hours (Gold Intel core, 2 GHz). Additionally, to assure reproducibility, every input and output file of each run should be in the data-set comprising 180 files.

Currently, there are 10 detectors installed (plus 11 planned), that can potentially transfer 18 TB/year of raw data. Members of the Collaboration (~ 85 researchers) are also allowed to run simulations. Thus, the entire collaboration could generate up to 27 TB of raw, cleaned, and analyzed data, plus 12-120 TB of simulated data in one year. Nevertheless, the availability of detectors can be an issue, an active user could submit 10 or 20 simulations per month, but actually researchers do not regularly submit simulations, and even some may only run simulations sporadically. Therefore, a realistic estimation of the storage consumption could be around 3.6 TB/year of L(0-3) data corresponding to 4 WCDs and 2-8 TB/year corresponding to 25 active users.

| Data Type | triggered | Size |
|-----------|--------|------|
| Raw (L0) | Water-Cherenkov detector (WCD) | 150GB/month (per WCD) |
| Preliminary (L1) | robot (mainly) or researcher | 70-120GB/month (per WCD) |
| Quality (L2 and L3)| robot (mainly) or researcher | 10-40GB/month (per WCD) |
| Simulated (S0, S1, and S2)| robot or researcher (mainly) | Estimated per 1 user: 1-4 sim. per month (72-300 GB/year) Max: 120GB/month |

#### **The utility of the data: to whom will they be useful**.

Data are of interest for the Astrophysics community but also for other scientific or industrial areas such as High Energy Physics, Life Sciences, Weather Forecasting, Geophysics, Aero-spatial security or Computer Science, among others, because of the effects of cosmic radiation on natural life, materials, or climate change, or its novel application in Geophysics.

## B. FAIR data

### B.1. Making data findable, including provisions for metadata:

#### **Discoverability of data (metadata provision)**.

The LAGO data repository will be based on [OneData](https://onedata.org). OneData supports storing catalogs and datasets with enriched metadata, as well as publishing catalogs with persistent identifiers (PIDs) to allow gathering by services such as [B2FIND](https://eudat.eu/services/b2find). Thus **the discoverability** will be technically guaranteed, through:
- OneData:
  - for LAGO members: web browser (without search engine), CDMI API, proprietary API and FUSE mount;
  - for the general public: web browser (link to a public PID).
- B2FIND: web interface (with search engine), for LAGO members and the general public.
- Other discovery services: customized CKAN based (for Comprehensive Knowledge Archive Network) could better benefit from metadata provided than B2FIND, and they will be explored in the future. Anyway, when the data become public, any discovery service can gather metadata, even not specific engines such as Google.

Some of these services will be supported by the EOSC infrastructure as they are included in its [marketplace](https://marketplace.eosc-portal.eu/):
- OneData is [provided](https://marketplace.eosc-portal.eu/services/egi-datahub) through the [EGI DataHub service](https://datahub.egi.eu).
- B2FIND is also [offered](https://marketplace.eosc-portal.eu/services/b2find) through an unified [web page](http://b2find.eudat.eu/).

Specific LAGO wrappers execute the processing or simulation and, at a subsequent stage, check every data-set and store them in the LAGO repository, always together with their metadata. These wrappers are packed into Docker images and released at the [official LAGO code repository](https://github.com/lagoproject) in GitHub.

To assure the **metadata provision**, the only way to directly store and publish data-sets in the LAGO repository (by LAGO members) is by making use of these wrappers from the official Docker releases. Any other data to be included in the repository must be supervised and checked by the LAGO organization.

#### **Identifiability of data and standard identification mechanisms (PIDs)**

There are two kinds of standard identifiers:
1. Resolvable IRIs [(IETF RFC 3987)](https://tools.ietf.org/html/rfc3987) that univocally identifies every JSON-LD [(W3C Recomm.)](https://www.w3.org/TR/json-ld11/) object (datasets, catalogs and others) over the Internet. They build the network of standards-based, machine-readable linked-data across websites, actually allowing the provenance and reuse of the data.
2. [Handle.net](http://handle.net) PIDs that only points to catalogs or to repository providers. The first ones are used as shortcuts for publication (as cheaper [DOIs](https://doi.org)), but the second are for assuring the accessibility to the whole data through provider migrations (changes of name/domain), being part of the aforementioned IRIs.

For clarification, the Internationalized Resource Identifier (IRI) is an internet protocol standard [IETF RFC 3987](https://tools.ietf.org/html/rfc3987) that unambiguously identifies an object, but a resolvable IRI corresponds to the one that can be publicly accessed on Internet, preferably through conventional protocols such as HTTP. The basis of JSON-LD syntax [(W3C Recomm.)](https://www.w3.org/TR/json-ld11/) is always to refer to related objects and descriptions with IRIs to discover new data by simply following those links. This creates a metadata grid linking objects. These objects describe datasets, catalogs as well as provenance elements (activities, actors, owners) following a certain vocabulary.

On the other hand, repository providers are physical servers, with certain DNS name/IP. However, these addresses could change through time due to migrations of data,  maintenance or changes of their domains. To preserve the linked grid and the univocal identification, absolute IRIs should use persistent and unique identifiers (PIDs) from [Handle.net](http://handle.net) to resolve these addresses, and even a catalog service. The preferred way to state this in JSON-LD is using the `@base` property in the `@context`, becoming the needed IRIs relative to the `@base` PID.

As commented above, every generated file is considered a dataset, but only collections of related datasets compose the catalogs. Catalogs should be directly referenced with PIDs from Handle.net, but datasets should not. The reason is that there is no necessity for a dataset reference in a publication. For example, an input file without the output. Moreover, every file (i.e. dataset) can also be identified with a relative path to its catalog's PID. When a Catalog is complete and verified, the corresponding PID for being published will be automatically requested by the checker tool to the EOSC B2Handle service.

#### **Naming conventions**.

Any dataset or catalog will be referenced by its absolute IRI, composed by its provider PID, its internal path and its name. Note that a catalog corresponds to a directory and a dataset to a file in the repositories.

In general, files (i.e datasets) generated by WCDs or base software will maintain their names when are stored in repositories, but naming catalogs will follow a different approach. In order to be distinguishable, the catalog name will be based on the data type (L0-L3, S0-S2) by adding meaningful parameters used by the software, splitted by the `_` character.

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
- LAGO members: the aforementioned ones for general public plus, browser whole data repository at [https://datahub.egi.eu](https://datahub.egi.eu) (without search engine),
CDMI API, proprietary API and FUSE mount on a local system of the repository tree.


#### **Methods or software tools needed to access the data**.

(_Is documentation about the software needed to access the data included?_)
(_Is it possible to include the relevant software (e.g. in open source code)?_)

To profit from the published data, researchers should use the CORSIKA tools included in the source code and described in the official documentation in section 10, page 121 at
https://web.ikp.kit.edu/corsika/usersguide/usersguide.pdf

#### **Where the data and associated metadata, documentation and code are deposited**.

As commented above, data and metadata will be stored in providers associated to [EGI DataHub, https://datahub.egi.eu](https://datahub.egi.eu) service (reliying in [OneData](https://onedata.org/) technology), while the documentation and codes:

| Data Type | Docs and code URLs |
|-----------|--------|
| Raw (L0) | [ACQUA](https://github.com/lagoproject/acqua) |
| <sup>*</sup>Preliminary (L1), Quality for Astrophysics (L2) and for public (L3) | [ANNA](https://github.com/lagoproject/anna) |
| Simulated (S0) | [onedataSim](https://github/lagoproject/onedataSim), [ARTI](https://github/lagoproject/arti), [CORSIKA](https://web.ikp.kit.edu/corsika/) |
| <sup>*</sup>Simulated (S1, S2) | [onedataSim](https://github/lagoproject/onedataSim), [ARTI](https://github/lagoproject/arti), [CORSIKA](https://web.ikp.kit.edu/corsika), [GEANT4](https://geant4.web.cern.ch), [ROOT](https://root.cern.ch) and [geant-val](https://geant-val.cern.ch) |

<sup>*</sup>(_Not supported by EOSC-Synergy. They are added for completeness and future projects._)

#### **Specify how access will be provided in case there are any restrictions**.

The data will be only accessible by the author and/or the Collaboration during the embargo period with the corresponding OpenID credentials. These will be obtained after login into the LAGO Virtual Organisation, supported by eduTEAMs (https://eduteams.org/), a service provided by GEANT in Europe and associated with RedClara.

A manual for joining to the LAGO VO is published at:
- [https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO/](https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO/),

while a manual to login into EGI DataHub, visualise datasets and obtain tokens is at:
- [https://lagoproject.github.io/DMP/docs/howtos/how_to_login_OneData/](https://lagoproject.github.io/DMP/docs/howtos/how_to_login_OneData/).


### B.3. Making data interoperable:

####  **Interoperability of data (general vocabularies, standards or methodologies)**

(_Specify what data and metadata vocabularies, standards or methodologies you will follow to facilitate interoperability_)

Metadata:
- Language syntax: [JSON-LD 1.1, W3C](https://json-ld.org/spec/latest/json-ld/)
- Main vocabulary: [DCAT-AP2, European Commission](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe), which is a specific profile of [DCAT2, W3C](https://www.w3.org/TR/vocab-dcat-2/) recommended for repositories, content aggregators or data consumers related to the public sector (goverments, rearch centers, funded projects).
- LAGO vocabulary: It is re-profile of [DCAT-AP2, European Commission](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe), extending the existing classes and adding properties needed for the LAGO computation. The [re-profile](/DMP/schema/) and specific [definitions](/DMP/defs) are available at [https://lagoproject.github.io/DMP/](https://lagoproject.github.io/DMP/).

Data:
- Unfortunately, the generated data follow propietary formats. 
- Interesting parameter or summarised results will be extracted from data-sets and then represented in their metadata using terms belonging LAGO vocabulary.


####  **Inter-disciplinary interoperability**

(_Specify whether you will be using standard vocabulary for all data types present in your data set, to allow inter-disciplinary interoperability? If not, will you provide mapping to more commonly used ontologies?_)

In principle, only supports CORSIKA outputs as described in the official documentation, but translating files to standardised formats in the future can be considered. 

### B.4. Increase data re-use (through clarifying licenses):

####  **How the data will be licensed**.

- Related code: [BSD-3 clause](https://opensource.org/licenses/BSD-3-Clause)
- Documentation (including DMP): [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Metadata specifications: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Data: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Metadata: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Databases derived from metadata or data: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)

####  **When the data will be made available for reuse**.

(_Specify why and for what period a data embargo is needed_).

LAGO Collaboration requires a waiting period similar to the established ones for other large experiments. Such a period should be set not only to properly exploit results by the Consortium before to their availability, but because measured raw data must be pre-processed by the Consortium to make them 'understandable’. Simulations will be available too, but it would be valuable that the waiting period could be set by the user, as the data owner. The recommended embargo period is set as one year in general, but depends on the data type, specifically:

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

The architecture is deeply described at [https://lagoproject.github.io/DMP/Architecture/](https://lagoproject.github.io/DMP/Architecture/).

####  **Costs for making your data FAIR**.

The process of making the data FAIR will be supported by the EOSC-Synergy project. The cost of the management (human resources) will be supported by the LAGO Collaboration and its participating institutions.

####  **Responsibilities for data management in your project**.

Computing as data management will be structured as a Virtual Organization with specific roles for data acquisition and processing.

| Roles |  Responsability |
|-------|-----------------|
| Head of data management | Administrative account, only for enabling new resources or modifiying permissions of main roles. |
| System admnistrators of OneProviders | To maintain the availability and preserve the data and metadata stored. |
| Members of standardisation group | To establish data organisation and metadata definition. |
| Country representative/delegate | To authorise or ban local members in the VO. |
| Task coordination delegates | To assure the accurancy of a spcific kind of data and metadata automatially (robots) or manually generated (for example the raw data (L0)). |
| LAGO members | They must follow the rules of data generation/storing and they must not abuse of the services. |

####  **Costs and potential value of long-term preservation**.

Preservation of data-sets is essential for the sustainability of LAGO. Every active WCD should generate 300GB/month of L0-L3 data. Currently, due to the number of active WCDs, the Collaboration will generate up to 27 TB of L0-L3 data, plus 12-120 TB of simulated data throughout the year. Data should be replicated, at least, in two locations of a distributed repository (in this case OneData).

Considering an average generation of 60TB/year, the costs of a 4-years long-term data preservation are related to hardware (two generic RAID servers ~240TB = ~30k€, prices in 2019), consumption (3.68KW max. power for 2 servers, ~ 0.1 €/kWh industrial price average in 2019 = max. 13k€) and human resources (technician: 1 person/month, scientific: 2 p/m, ~10k€).

## D. Data security

(_Address data recovery as well as secure storage and transfer of sensitive data_). 

There is no sensitive data, thus anonymity and encryption are not required. 

Data recovery should be guaranteed by using replication, at least, in two locations of a distributed repository or filesystem, in this case OneData. Thus, following the classification in tiers, every space supported by an OneProvider must be replicated in any other OneProvider that holds Tier level 1. The backup architecture is described at [https://lagoproject.github.io/DMP/Architecture/](https://lagoproject.github.io/DMP/Architecture/).

## E. Ethical aspects

Data do not contain protected records that could present ethical or security issues. The only personal data included are the required by FAIR policies in metadata, i.e., the name and the identifier of the author of the data-set. On the other hand, there are no issues with reusing previous raw data generated in LAGO, as well as the data belonging to the Collaboration.
