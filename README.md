---
layout: default
title: Contributing
has_children: false
nav_order: 8
---

## Description of this repository

This repository contains the Data Management Plan (DMP) for [Latin American Giant Observatory (LAGO)](http://lagoproject.net/) Collaboration. It is a dynamic document that describes data, metadata, and how they are produced, accessed and managed:

[https://lagoproject.github.io/DMP/](https://lagoproject.github.io/DMP/)

## Release policy & preserving linking

### Tagging policy & the main release

The common numbering used for software versioning (`Major.Minor.Patch`) are also used in this repository:
- Major release: identifies deep changes in definitions. As usual, migrating between major releases (i.e. *1.y.z -> 2.y.z*) will not provide backward compatibility.
- Minor release: identifies improvements in definitions. Upgrading through minor releases (i.e. *x.1.z -> x.2.z*) implies compatibility.
- Patch release: indicates admendements and corrections but without relevant changes.

However, in order to simplify and reduce the number of files in the repository:
- The filename of the linkable documents & definitions will contain only the `Major.Minor` number, just before their extension.
- GitHub Tagging will also contain the patching, being the `Major.Minor.Patch`. 

Thus, the `Major.Minor` is considered the **main release** or **version** on wich the development orbit around and the reference identifier of every version. Meanwhile, the `Major.Minor.Patch` is the **tag release** used in GitHub for consolidating patches. 

### Repository organization 

This [repository](https://github.com/lagoproject/DMP/) follows a fixed directory structure to preserve linking to definitions through the time:
- `*DMP/*`: contains all the formal DMP documents improved and extended; 
- `*schema/*`: all releases of the schema for LAGO data and metadata;
- `*defs/*`: the different referenciable definitions of LAGO items (sites, institutions, harware,...) for a certain LAGO schema;
- `*rights/*`: disclaimers and specific rights on the date when certain LAGO datasets are published;
- `*notes/*`: release notes of every main release.

The linkable documents in these folders are distinguised with their `Major.Minor` release number (i.e. their main release number). Therefore:
- The web page will always show the last updated definitions for a `Major.Minor` release, for example: [https://lagoproject.github.io/DMP/schema/lagoSchema.1.1/](https://lagoproject.github.io/DMP/schema/lagoSchema.1.1/)
- The [*master* branch](https://github.com/lagoproject/DMP/) will show the confirmed updates and the history of the patches.
- Metadadata can link documents fixed in a `Major.Minor.Patch` release: [https://raw.githubusercontent.com/lagoproject/DMP/1.1.0/rights/lagoCommonRights.1.1.jsonld](https://raw.githubusercontent.com/lagoproject/DMP/1.1/rights/lagoCommonRights.1.1.jsonld)

### Current release & visualisation

The **current release** (`Major.Minor`) will be stated at first web page at [https://lagoproject.github.io/DMP/](https://lagoproject.github.io/DMP/), likewise the definitions for this current release will be shown in the default root of every aforementioned directories. 

Independently of how the links preserved and documents stored, [https://lagoproject.github.io/DMP/](https://lagoproject.github.io/DMP/) will enable additional shortcuts and classifications. The most important are the virtual folders in the aforementioned fixed structure, which clasifies in developing versions (*Dev*) or outdated versions (*Old*).


## Contributing

The procedure depends on the role of the contributor:
- All LAGO members can contribute to the *dev* branch of DMP through pull requests.
- Members of standardisation group can authorise pull requests to the *dev* branch, but not `merge` their own modifications to the *master* branch without an additional authorisation.
- Only managers or administrators of the repository can directly `merge` the contribution to the *master* branch and publish stable releases.

Restrictions:
- Changing the current release is only allowed for managers.
- `Minor` changes in *Old* definitions are strictly forbidden.


## License

All contents of this repository are under the terms of the Creative Common [CC BY-NC-SA 4.0](./LICENSE) license, with exception of some code needed for rendering the web page, which has its own license declared at the head of the code.  
