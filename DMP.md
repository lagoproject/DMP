---
layout: default
#title: Definitions
has_children: false
nav_order: 2
---

# The LAGO Data Management Plan (DPM) document
{: .no_toc }

|Version|Date|Contributors|
|-------|----|------------|
| 1.1 develop | 2020-06-01 - today | LAGO Collaboration|

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## A. Data summary

Provide a summary of the data addressing the following issues:

#### **Purpose of the data collection/generation**. 

The Latin American Giant Observatory (LAGO) is an extended cosmic ray observatory 
composed of a network water-Cherenkov detectors (WCD) spanning over different sites 
located at significantly different altitudes and latitudes. 

The measurements collected from these detectors are posteriorly processed and analysed. 
Additionally, scientists continuously generate simulated data. The final purpose is to
enable the long-term curation and re-use of data within and outside the LAGO Collaboration
through a Virtual Observatory.

#### **Relation to the objectives of the project**. 

The objective is to enable the long-term curation and re-use of generated data within 
and outside LAGO Collaboration through a Virtual Observatory, being of interest in areas as HEP, 
space weather, life sciences, aerospatial security, computer science,... 

On the other hand, European Commision requires open access to the results obtained from their funded 
projects, meanwhile EOSC-Synergy is a H2020 project (RIA 857647) that encourages the implementation 
of FAIR policies as another standard in research. Since the LAGO computation is included in the 
EOSC-Synergy as one of their Thematic Services, generated or stored data in its resources must observe 
these guidelines, being also beneficial for the success of both initiatives.

#### **Types and formats of data generated/collected**. 

Every **file** generated is considered **the minimum data-set** to be data-linked and processed, while **a collection** of related files 
is grouped in a **catalog**, which should be referenced with a persistent and unique identifier (PID). 
As the different LAGO activities generate only one data sub-type, **catalogs will only 
contain files belonging to one sub-type an activity**, with exception of checking or correction procedures.

There are two main kinds of data managed by LAGO Collaboration. The first is the data measured (L) by 
water-Cherenkov detectors (WCD), and the second is the simulations (S).

The measured data (raw) is pipelined for correction, obtainig these data sub-types that corresponds 
with their quality level:
  - **L0. Raw data**.
  - **L1. Preliminary data**. low resolution but the atmospheric pressure is corrected.
  - **L2: Quality for Astrophysics**. Ensures data quality to be used by experts from Astrophysics Community: fixed scalers by
atmospheric parameters and the efficiency of the detector.
  - **L3. Quality for public**. Ensures high quality to be used by researchers from other subjects or general public: the
histograms are also corrected.

On the other hand, users can perform their own simulations of rains, generating two sub-types of data-sets: 
  - **S0. Plain simulations**. CORSIKA outputs, which are described in the official documentation [D. Heck and T. Piero, "Extensive Air Shower Simulation with CORSIKA: A
User’s Guide". Version 7.7100 from December 17, 2019](https://web.ikp.kit.edu/corsika/usersguide/usersguide.pdf), section 10, page 121. (Available at
https://web.ikp.kit.edu/corsika/usersguide/usersguide.pdf ) 
  - **S1. Analysed simulations**. ARTI outputs.

#### **Re-used previous data**. 

Measurements from WCDs gathered in previous years and relevant simulations stored at the old centralised repository at UIS (Universidad Industrial de Santander, Colombia). This is, ~ 6.6TB, mainly measurements. Additionally, previous simulations performed by users in private clusters be will considered if implies high CPU consumption. 

#### **Origin of the data**.

| Data Type | Source |
|-----------|--------|
| Raw (L0) | measurements of Water-Cherenkov detectors (WCDs) |  
| Preliminary (L1) | cleaning raw data (L0) |
| Quality for Astrophysics (L2)| fixing scalers in preliminary data (L1) |  
| Quality for public (L3)| fixing histograms in quality data (L2) | 
| Simulated (S0) | from standalone CORSIKA runs |
| Anaysed (S1) | ARTI analisys of plain simulated data (S0) |


#### **Expected size of the data**. 

Minimal data-set is one hour of measurement or simulation:
  - Raw data (L0): ~200MB
  - Preliminary data (L1): ~100MB
  - Quality data (L2, L3): ~ 30 MB
  - Simulated background (S0+S1): ~ 10GB
  - Simulated event (S0+S1): ~ 100GB

Typically, every WCD generates one measurement per hour producing ~ 200 MB files each, this is ~ 150
GB of raw data per month with a total of 720 files. These files can originate 70-120GB of cleaned (L1) and 10-40GB of
quality data (L2 and L3). The one hour interval is kept as unit, resulting in 2160 files (between 2-160
MB each). The necessary amount of CPU resources to generate these files is small; around 35 mins on a
Gold 6138 Intel core (2 GHz). However, all data-sets should be preserved for reprocessing if software
errors can appear in the future. 

On the other hand, users can perform their own simulations, which should be re-usable and
reproducible with other collaborators. A standard simulation using only CORSIKA (i.e. background
simulation), results in a data-set of 4-10 GB (usually ~ 6 GB), but an event simulation could take 100 GB.
In order to keep the 1 hour convention, both types of simulation are usually split into 60 runs, with an
interval lasting from 15 mins to 10 hours, one task per minute. Thus, the complete workload of a
background simulation is over 640 CPU/hours (Gold Intel core, 2 GHz). Additionally, to assure
reproducibility, every input and output file of every run should be in the data-set comprising 180 files.

Currently, there are 10 detectors installed (plus 11 planned), that can potentially transfer 18 TB/year of
raw data. Members of the Collaboration (~ 85 researchers) are also allowed to make simulations. Thus, the 
entire collaboration could generate up to 27 TB of raw, cleaned, and analysed data, plus 12-120 TB
of simulated data in one year. Nevertheless, the availability of detectors can be an issue, an active user 
could submit 10 or 20 simulations per month, but actually researchers do not regularly submit simulations, 
and even some may only run simulations sporadically. Therefore, a realistic estimation of the storage consumption 
could be around 3.6 TB/year of L(0-3) data corresponding to 4 WCDs and 2-8 TB/year corresponding to 25 active users.

| Data Type | triggered | Size |
|-----------|--------|------|
| Raw (L0) | Water-Cherenkov detector (WCD) |  150GB/month (per WCD) |
| Preliminary (L1) | robot (mainly) or researcher | 70-120GB/month (per WCD) |
| Quality (L2 and L3)| robot (mainly) or researcher | 10-40GB/month (per WCD) |
| Simulated (S0 and S1)| robot or researcher (mainly) | Estimated per 1 user: 1-4 sim. per month (72-300 GB/year) Max: 120GB/month |

#### **Data utility: to whom will it be useful**. 

Data are of interest for the Astrophysics community but also for other scientific or industrial areas such as
High Energy Physics, Life Sciences, Weather Forecasting, Aerospatial security or Computer Science, among others,
because the effects of cosmic radiation on natural life, materials, or climate change.

## B. FAIR data

### B.1. Making data findable, including provisions for metadata:

#### **Discoverability of data (metadata provision)**. 

LAGO data repository will be based on OneData. OneData supports storing catalogs and datasets with enriched metadata, as well as publishing catalogs with persistent identifiers (PIDs) to allow gathering by services such as B2FIND. Thus **the discoverability** will be technically guaranteed, through:
- OneData: 
  - for LAGO mebers: web browser (without search engine), CDMI API, propietary API and FUSE mount;
  - for general public: web browser (link to a public PID).
- B2FIND: web interface (with search engine), for LAGO members and general public.
- Other discovery services: customised CKAN based could better benefit from metadata provided than B2FIND, and they will be explored in the future. Anyway, when the data become public, any discovery service can gather metadata, even not specific engines such as Google.

Specific LAGO wrappers execute the processing or simulation and they posteriorly check every data-set and will store them in the LAGO repository,
always with their metadata. These wrappers will be packed into Docker images and published as releases at LAGO code repository at GitHub. 

To assure the **metadata provision**, the only allowed way to directly store and publish data-sets in the LAGO repository by LAGO members will be making use of these wrappers in official Docker releases. Other inclusion of data must be supervised and checked by LAGO responsibles. 


#### **Identifiability of data and standard identification mechanisms (PIDs)**

There are two kinds of standard identifiers:
1. Resolvable IRIs [(IETF RFC 3987)](https://tools.ietf.org/html/rfc3987) that univocally idenfies every JSON-LD [(W3C Recomm.)](https://www.w3.org/TR/json-ld11/) object (datasets, catalogs and others) over the Internet. They build the network of standards-based, machine-readable linked-data across Web sites, actually allowing the provenance and reuse of the data. 
2. [Handle.net](http://handle.net) PIDs that only points to catalogs or to repository providers. The first ones are used as shortcuts for publication (as cheaper [DOIs](https://doi.org)), but the second are for assure the accessibility of whole data through provider migrations (changes of name/domain), being part of aforementioned IRIs.

As explanation, the Internationalized Resource Identifier (IRI) is an internet protocol standard [IETF RFC 3987](https://tools.ietf.org/html/rfc3987) that unambiguously identifies an object, but a resolvable IRI corresponds to the one that can be publicy accessed in Internet, prefereabily through conventional protocols such as HTTP. The basis of JSON-LD syntax [(W3C Recomm.)](https://www.w3.org/TR/json-ld11/) is always to refer related objects and descriptions with IRIs in order to to discover new data by simply following those links. This creates a metadata grid linking objects. These objects describe datasets, catalogs as well as provenance elements (activities, actors, owners) following certain vocabulary. 

On the other hand, repository providers are physical servers, with certain DNS name/IP. However, these addresses could change through the time due to migrations of data,  maintenance or change of their domain. To preserve the linked grid and the univocally identification, absolute IRIs should use persistent and unique identifiers (PIDs) from [Handle.net](http://handle.net) to resolve these addresses, and even a catalog service. The prefered way to state this in JSON-LD is using the `@base` propierty in the `@context`, becoming the needed IRIs into relative to the `@base` PID.

As commented above, every file generated is considered a dataset, but only collections of related datasets compose the catalogs. Catalogs should be directly referenced with  PIDs from Handle.net, but datasets should not. This is so because have not sense to reference for publication, for example, an input file without the output, overall when every file (i.e. dataset) can also be identified with relative path to their catalog' PID. When a Catalog was complete and verified, the corresponding PID for being publised will automatically requested by the checker tool to EOSC B2Handle service. 


#### **Naming conventions used**. 

Any dataset or catalog will be referenced by its absolute IRI, composed by its provider PID, its internal path and its name. Note that a calalog correspond to a directory and a dataset to a file in repositories.

In general, files (i.e datasets) generated by WCDs or base software will maintain their names when are stored in repositories,
but naming catalogs will follow different approach. In order to be distinguisables, the catalog name will based on adding meaningful parameters used by the software, 
splited by `_` character. 

| Data Type | Source | Catalog Name |
|-----------|--------|------|
| Raw (L0) | Water-Cherenkov detector (WCD) | _TBD. (`raw_<site name>`)_ |
| Preliminary (L1) | Raw data from WCD | _TBD. (`pre_<site name>`)_ |
| Quality (L2) | Cleaned data from WCD | _TBD_ |
| Quality (L3) | Cleaned data from WCD | _TBD_ |
| Simulated (S0) | researchers | `<site>_<flux time>_<altitude>_ <CORSIKA version>_<HE model>[_volu][_flat][_Cherenk][_HEcuts]` |
| Analysed (S1) | researchers | _TBD_ |

Versioning (the same generation of files) only is allowed if corrections have made done to the generator sofware. It will be declared adding a `_v<number>` to the end of name, where it is the consecutive number of version, beggining by 2.

#### **Approach towards search keywords**. 

Searching should be based on any metadata value, but we are aware of the technical limitations in descovery services (i.e. B2FIND) and repositories (i.e OneData).
Therefore, the main search keywords that enable minimal SPARQL queries are the ones related to:
- the location (virtual or real) of the site: name, mangetic field, observation level and GPS coordinates;
- the period measured or the flux time simulated.

#### **Approach for clear versioning**. 

It should be based on the metadata An approach for
clear versioning is being discussed.

#### **Standards for metadata creation (in your discipline)**.

(**If there are no standards in your discipline describe what metadata will be created and how**)

| Data Type | previous metadata | new metadata specification |
|-----------|--------|--------|
| Raw (L0) | _TBD_ | _TBD_ |  
| Preliminary (L1) | _TBD_ | _TBD_ |
| Quality for Astrophysics (L2) | _TBD_ | _TBD_ |  
| Quality for public (L3) | _TBD_ | _TBD_ | 
| Simulated (S0) | _TBD_ | _TBD_ |
| Anaysed (S1) | _TBD_ | _TBD_ |


### B.2. Making data openly accessible:

#### **Which data will be made openly available**.

(_If some data is kept closed provide rationale for doing so_). 

Data will be made publicly available after a variable waiting (embargo)
period similar to the established ones for other large experiments.

#### **Specify how the data will be made available**. 

Consolidated datasets (grouped by catalogs) will be exposed together with their metadata through the [EGI DataHub, https://datahub.egi.eu](https://datahub.egi.eu) service to be gathered by discovery services such as B2FIND, thus:  

- General public: B2FIND web interface at [http://b2find.eudat.eu](http://b2find.eudat.eu) (search engine of metadata published), web browser to the page of some published catalog (link to a public PID). Aditionally, as metadata follow a linked-data syntaxsis and standars, other discovery services, even Google could expose them.
- LAGO mebers: the aforementioned ones for general public plus, browser whole data repositry at [https://datahub.egi.eu](https://datahub.egi.eu) (without search engine),
CDMI API, propietary API and FUSE mount on local system of the repository tree.


#### **Methods or software tools needed to access the data**. 

(_Is documentation about the software needed to access the data included?_) 

Is it possible to include the relevant software (e.g. in open source code)? . 

To take advantage of the data published, researchers
should use the CORSIKA tools included in the source code and described in the official
documentation in section 10, page 121 at
https://web.ikp.kit.edu/corsika/usersguide/usersguide.pdf

#### **Where the data and associated metadata, documentation and code are deposited**.

As commented above, whole data and metadata will be stored in providers associated to [EGI DataHub, https://datahub.egi.eu](https://datahub.egi.eu) service (reliying in [OneData](https://onedata.org/) technology), while the documentation and code:

| Data Type | Docs and code URLs |
|-----------|--------|
| Raw (L0) | _TBD_ |
| Preliminary (L1) | _TBD_ | 
| Quality for Astrophysics (L2) | _TBD_ | 
| Quality for public (L3) | _TBD_ |
| Simulated (S0, S1) | - onedataSim:  https://github/lagoproject/onedataSim - ARTI: https://github/lagoproject/onedataSim - CORSIKA: https://web.ikp.kit.edu/corsika/ |




#### **Specify how access will be provided in case there are any restrictions**. 

The data will be only accessible by the author and/or the Collaboration during embargo period with the corresponding OpenID credentials. These will be obtained after login into the LAGO Virtual Organisation, supported by eduTEAMs (https://eduteams.org/), a service provided by GEANT in Europe but associated with RedClara.

A manual for joining to the LAGO VO is published at:
- [https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO/](https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO/), 
while a manual to login into EGI datahub, visualise datasets and obtain tockens is at:
- [https://lagoproject.github.io/DMP/docs/howtos/how_to_login_OneData/](https://lagoproject.github.io/DMP/docs/howtos/how_to_login_OneData/). 


### B.3. Making data interoperable:

####  **Interoperability of data (general vocabularies, standards or methodologies)** 

(_Specify what data and metadata vocabularies, standards or methodologies you will follow to facilitate interoperability_)

Metadata:
- Language syntax: [JSON-LD 1.1, W3C](https://json-ld.org/spec/latest/json-ld/)
- Main vocabulary: [DCAT-AP2, European Commision](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe), which is an specific profile of [DCAT2, W3C](https://www.w3.org/TR/vocab-dcat-2/) recommended for repositories, content aggregators or data consumers related to public sector (governement, rearcher centers, founded projects).
- LAGO vocabulary: It is re-profile of [DCAT-AP2, European Commision](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe), extending the existent classes and adding properties needed for LAGO computation.

Data:
- TBD.


####  **Inter-disciplinary interoperability**

(_Specify whether you will be using standard vocabulary for all data types present in your data set, to allow inter-disciplinary interoperability? If not, will you provide mapping to more commonly used ontologies?_) 

In principle, only support CORSIKA outputs as described in the
official documentation, but we can consider translating files to standardised formats in the
future.

### B.4. Increase data re-use (through clarifying licenses):

####  **How the data will be licenced**. 

- Related code: BSD-3 clause
- Documentation (including DPM): [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Metadata specifications: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Data: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Metadata: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
- Databases derived from metadata or data: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)


####  **When the data will be made available for reuse**.

(_Specify why and for what period a data embargo is needed_). 

LAGO Collaboration requires a waiting period similar to the
established ones for other large experiments. Such a period should be set not only to properly
exploit results by the Consortium prior to their availability, but because raw data measured
must be pre-processed by the Consortium to make them 'understandable’. Simulations will be
available too, but it would be valuable that the waiting period could be set by the user, because
he is the owner of the data. The embargo period is set for a year in general, but depends of the
data type, specifically:

| Data Type | embargo period |
|-----------|--------|
L0, L1 | private while quality data (L2,L3) are not publicly available.
L2, L3 | a year.
S0, S1 | a year maximum, the owner can decide to open the data before the end of this period.

####  **Usability by third parties (restricted data)**.

(_Specify whether the data produced and/or used in the project is usable by third parties, in
particular after the end of the project? If the re-use of some data is restricted, explain why_).

There is no restriction after the embargo period with exception of [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) clauses.

####  **Data quality assurance processes**. 

Only the data measured by WCDs or generated
using software versions officially released by LAGO will be stored and exposed in repositories.
Previously to the publication, a robot of the Virtual Organization will check the minimal accuracy
of data.

####  **Length of time for which the data will remain re-usable**. 

Indefinitely after the
waiting period.

## C. Allocation of resources

Explain the allocation of resources, addressing the following issues:

####  **Costs for making your data FAIR**.

The process of making the data FAIR will be supported by the EOSC-Synergy project. The human
cost of the management will be supported by LAGO Collaboration.

####  **Responsibilities for data management in your project**. 

Computing as data management will be structured as a Virtual Organization with specific roles for data acquisition
and processing.

Roles - TBD.

####  **Costs and potential value of long term preservation**. 

Preservation of data-sets is
essential for the sustainability of LAGO. Every active WCD should generate 300GB/month of
L0-L3 data. Currently, due to the number of active WCDs, the Collaboration will generate up to
27 TB of L0-L3 data, plus 12-120 TB of simulated data throughout the year. Data should be
replicated, at least, in two locations of a distributed repository (in this case OneData).
Considering an average generation of 60TB/year, the costs of long-term preservation for 4 years
are the hardware (two generic RAID servers ~240TB = ~30k€, prices in 2019), the consumption
(3.68KW max. power for 2 servers, ~ 0.1 €/kWh industrial price average in 2019 = max. 13k€)
and human resources (technician: 1 person/month, scientific: 2 p/m, ~10k€).

## D. Data security

Address data recovery as well as secure storage and transfer of sensitive data. There is no sensitive
data, thus anonymization and encryption of the data is not required. Data recovery should be
guaranteed by means of replication, at least, in two locations of a distributed repository or filesystem (in
this case OneData).

## E. Ethical aspects

Data do not contain protected records that could present ethical or security issues. The only personal
data included is the required by FAIR policies in metadata, this is, the name and identifier of the author
of the data-set. On the other hand, there are no issues with reusing previous raw data generated in
LAGO, as well as the data belonging to the Collaboration.


