---
layout: default
parent: Rights
has_children: true
nav_order: 1
jsonldinhead: lagoCommonRights.1.1.jsonld 
---

# LAGO Data and Metadata Releases, Rights and Disclaimer 1.1
{: .no_toc }

(NOTE: please consult the associated [technical annex](/rights/lagoCommonRightsTechAnnex.1.1/) to correctly link this document) 

|Version | Issued | Updated | Dates |Contributors|
|------------|-----   |-------- |------|------------|
| 1.1 | 2022-05-11 | {{ site.time }} | 2020-06-01 - today | [Hernán Asorey](https://orcid.org/0000-0002-4559-8785) |
|  |  |  |  | [Iván Sidelnik](https://orcid.org/0000-0003-4115-3129) |
|  |  |  |  | for the [LAGO Collaboration](/DMP/defs/lagoCollaboration/) |


By using the data provided by the Latin American Giant Observatory (LAGO), you are accepting the following conditions of release and acknowledging the following disclaimers issued by LAGO.

## Table of contents
{: .no_toc .text-delta }

- TOC
{:toc}

## A. Definitions

### a. The Latin American Giant Observatory
The Latin American Giant Observatory hereinafter referred to as &#8220;LAGO&#8221; or &#8220;the LAGO Observatory&#8221;, is an astroparticle observatory on a global scale, working as an integrated detection network, hereinafter referred to as &#8220;the LAGO detection network&#8221; or simply &#8220;the LAGO network&#8221;, of single or small arrays of detectors, hereinafter referred to as &#8220;the LAGO detectors&#8221;, that are deployed at different geographical locations, hereinafter referred as &#8220;the LAGO sites&#8221;.   

### b. The LAGO Collaboration

The LAGO Collaboration is a non-centralized, distributed and highly collaborative grid of scientific institutions. The main goal of the LAGO Collaboration is the design, installation, commissioning, operation, coordination, maintenance, and, eventually, the decommissioning of the LAGO Observatory.

### c. The LAGO Data Management Plan (DMP) and the FAIR paradigm
To guarantee the long-term sustainability of LAGO, it is mandatory to accomplish the FAIR paradigm, i.e., to assure the Findability, Accessibility, Interoperability, and Reusability of its digital assets. The LAGO Data Management Plan, hereinafter referred to as &#8220;LAGO DMP&#8221; or simply &#8220;DMP&#8221;,  is a living document that will be amended, improved and detailed along the project evolution timeline, and it is used to establish the format of the LAGO data and metadata sets, and to describe how they are generated, stored, accessed, and used internally or externally used. The LAGO DMP is publicly available at https://lagoproject.github.io/DMP/

### d. The LAGO Datasets
During its normal operation and the different maintenance modes of the LAGO network, LAGO produces datasets containing different types of data, hereinafter collectively referred to as &#8220;the LAGO data&#8221; and individually as &#8220;a LAGO dataset&#8221;. All the LAGO datasets follow standardized schemes based on linked data as described in our DMP. 
Any LAGO dataset could be considered within one of these categories:

#### i. Measured data (Ln)
Corresponds to any type of data that was measured in a LAGO site, including measurements of any type of radiation, atmospheric conditions, geomagnetic, solar irradiation, telemetry, and any other type of measurement produced by the LAGO detector and its peripherals. The LAGO measured data includes also any data product derived by any means of the previously described data. All the LAGO measured datasets are hierarchically tagged with the &#8220;Ln&#8221; label, being n a sequential number, starting by 0, that indicates the level of data processing: L0 corresponds to the raw data, L1 is the first level of analysed data, etc.

#### ii. Simulated data (Sn)
A LAGO simulated dataset contains data produced by any means, that were produced by the LAGO Observatory or its members and fellows using any of the LAGO simulation tools, that are intended to emulate any physical processes. All the LAGO measured datasets are hierarchically tagged with the &#8220;Sn&#8221; label, being n a sequential number.

#### iii. Metadata (MLn/MSn)
Every LAGO metadata dataset is associated with the corresponding Ln or Sn dataset following the JSON-LD 1.1(W3C) language syntax, and a reprofiled LAGO vocabulary based on the DCAT2-AP2 standard vocabulary, as described in the corresponding section of the LAGO DMP.

## B. General and specific conditions of data release and acknowledgement

### a. General conditions
The LAGO data, metadata and schema definitions are available by permission of the LAGO Collaboration as the entity in charge of the Latin American Giant Observatory. The use of any LAGO data in publications or any other scientific activity, either digital or hardcopy, must be acknowledged to The Latin American Giant Observatory as well as their authors and referenced through the corresponding PiDs.
The use of any type of LAGO data and metadata is allowed for non-commercial purposes only, and only so long as attribution is given to the creator. Any other usage of the LAGO data without permission is strictly forbidden. The policies of the LAGO data release are defined by the LAGO Collaboration and could change at any moment. 

### b. Specific conditions

#### i. Measured data (Ln)
At the moment of the writing of this document, all the measured LAGO data is non-public. Specific conditions related to the release of the LAGO measured dataset will be informed by the LAGO Collaboration in the future.

#### ii. Simulated data (Sn)
LAGO simulated data (Sn) is licenced under the Creative Commons Attribution  Non-Commercial Share Alike 4.0 International (CC BY-NC-SA 4.0) and is publicly available after an embargo period of one (1) year since the LAGO data catalogue publication at the LAGO public data repository. Any usage of the LAGO measured data should follow the general data acknowledgement and cite these references:

- Christian Sarmiento-Cano, Mauricio Su&aacute;rez-Dur&aacute;n, Rolando Calder&oacute;n-Ardila, Adriana V&aacute;squez-Ram&iacute;rez, Andrei Jaimes-Motta, Luis A. N&uacute;&#241;ez, Sergio Dasso, Iv&aacute;n Sidelnik, Hern&aacute;n Asorey, &#8220;The ARTI Framework: Cosmic Rays Atmospheric Background Simulations&#8221;, DOI:10.48550/arXiv.2010.14591
- A. J. Rubio-Montero, R. Pag&aacute;n-Mu&#241;oz, R. Mayo-Garc&iacute;a, A. Pardo-Diaz, I. Sidelnik and H. Asorey, &quot;A Novel Cloud-Based Framework For Standardized Simulations In The Latin American Giant Observatory (LAGO)&quot; 2021 Winter Simulation Conference (WSC), 2021, pp. 1-12, DOI:10.1109/WSC52266.2021.9715360

#### iii. Medatata data (MLn/MSn)
Measured (Ln) and Simulated (Sn) data have their own metadata, correspondingly, MLn or SLn. Every metadata dataset inherits the specific conditions, acknowledgements, and references from the corresponding LAGO Measured or Simulated dataset.

## C. Disclaimer of Liability
Neither LAGO nor contributors of data to LAGO shall be held liable for any improper or incorrect use or application of the data provided, and assume no responsibility for the use or application of the data or information derived from interpretation of the data. In no event shall the LAGO or its collaborators be liable for any direct, indirect, or incidental damage arising from the use or application of these data. This disclaimer of liability applies to any damages or injury, including but not limited to those caused by any failure of performance, error, omission, defect, delay in operation or transmission, computer virus, alteration, use, application, analysis, or interpretation of data.

## D. Disclaimer of Accuracy of Data
No warranty, expressed or implied, is made regarding the accuracy, adequacy, completeness, reliability, or usefulness of any data provided. These data are provided &quot;as is.&quot; All warranties of any kind, expressed or implied, including but not limited to fitness for a particular use, freedom from computer viruses, and non-infringement of proprietary rights, are disclaimed.

