---
layout: default
parent: HowTo's
nav_order: 1
---

# How to Join to LAGO Virtual Organisation

## Table of contents
{: .no_toc}

- TOC
{:toc}


## Introduction

https://wiki.geant.org/display/eduTEAMS/Services

## Registering as a new user on the eduTEAMS Service
*(This subsection is copied from the work of Christos Kanellopoulos as eduTEAMs responsible at  [https://wiki.geant.org/display/eduTEAMS/Registering+as+a+new+user+on+the+eduTEAMS+Service](https://wiki.geant.org/display/eduTEAMS/Registering+as+a+new+user+on+the+eduTEAMS+Service))*.

Before joining LAGO you must register in eduTeams. The procedure is as follows:

{% assign i = 0 %}

1.  To get started with eduTEAMS, all users, regardless of their role, need to register on the eduTEAMS Service at [https://www.eduteams.org/#join](https://www.eduteams.org/#join).{% assign i = i | plus: 1 %}![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

1.  When you click the "JOIN" button, you will be presented with a screen on which you will have to select your organisation's Identity Provider where you will be authenticated. If your organisation is not listed, you might want to search/choose "ORCID" or "Google".{% assign i = i | plus: 1 %}![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

1.  You will be redirected to the Identity Provider you have selected. After you have been successfully authenticated, you will be redirected to the eduTEAMS Registration Form, where you have to fill the data. The fields Name and E-mail are pre-filled, based on your account attributes. The field Username should be added and will be used as eduTEAMS nickname.{% assign i = i | plus: 1 %}![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)
  
1.  Read carefully the Acceptable Usage Policy. To register on eduTEAMS Service you have to click on the "I agree" checkbox and on the "Submit" button.{% assign i = i | plus: 1 %}![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

1.  Congratulations! You have successfully registered on the eduTEAMS Service. Click on the "Continue" button and you will be redirected to your eduTEAMS Profile page. You can access your profile page on the eduTEAMS Service at any time by visiting [https://mms.eduteams.org/profile/](https://mms.eduteams.org/profile/)
{% assign i = i | plus: 1 %}
![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)


Now, you are registered on the eduTEAMS Service, but to access the LAGO services **you must also join some group in the LAGO Virtual Organization**. See the next section.

## Applying to a LAGO group

Every collaborator should belong to some LAGO scientific group. To apply for one you should follow the link:

``https://mms.eduteams.org/fed/registrar/?vo=LAGO-AAI&group=<GROUP>``

The collaborations are mainly distributed by countries, where every person corresponds to one group:
{% assign countries = "argentina, bolivia, brazil, chile, colombia, ecuador, guatemala, mexico, peru, spain" | split: ", " %}
{% for c in countries %}
  - "{{c}}" : [https://mms.eduteams.org/fed/registrar/?vo=LAGO-AAI&group={{c}}](https://mms.eduteams.org/fed/registrar/?vo=LAGO-AAI&group={{c}})
{% endfor %}


For example, after following the corresponding link, you must accept the AUP clauses of LAGO collaboration (also updated on this [page](/DMP/rights/AUP/)):

{% assign i = i | plus: 1 %}
![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

Then, eduTEAMS informs you that the application was sent and is waiting for approval:

{% assign i = i | plus: 1 %}
![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

You can also see that there are two pending registrations, one for the main LAGO-AAI virtual organisation (VO) and other for the group for which you have applied:

{% assign i = i | plus: 1 %}
![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)


The result (accepted or not) will be notified by email.


