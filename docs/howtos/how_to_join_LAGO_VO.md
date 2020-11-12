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

Before to join LAGO you must register in eduTeams. Te procedure is as follows:

{% assign i = 0 %}

1.  In order to get started with eduTEAMS, all users, regardless of their role need to register on the eduTEAMS Service at [https://www.eduteams.org/#join](https://www.eduteams.org/#join).{% assign i = i | plus: 1 %}![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

1.  When you click the "JOIN" button, you will be presented with a screen on which you will have to select your organisation's Identity Provider where you will authenticate. If your organisation is not listed, you might want to search/choose "ORCID" or "Google".{% assign i = i | plus: 1 %}![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

1.  You will be redirected to the Identity Provider you have selected in order to authenticate. After you have successfully authenticated, you will be redirected to the eduTEAMS Registration Form. Fill in the form. The Fields Name and E-mail are prefilled, based on the account attributes. The field Username should be added and it will be used as eduTEAMS nickname.{% assign i = i | plus: 1 %}![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)
  
1.  Read carefully the Acceptable Usage Policy. In order to register on eduTEAMS Service you have to click on the "I agree" checkbox and click the submit button.{% assign i = i | plus: 1 %}![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

1.  Congratulations! You have succesfully registered on the eduTEAMS Service. Click the "Continue" button and you will be redirected to your eduTEAMS Profile page. You can access your profile page on the eduTEAMS Service at any time by visiting [https://mms.eduteams.org/profile/](https://mms.eduteams.org/profile/)
{% assign i = i | plus: 1 %}
![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)


Now that you are registered on the eduTEAMS Service, but to access the LAGO services **you must also join to some group in the LAGO Virtual Organization**. See the next section.

## Applying to a LAGO group

Every collaborator should belong to some LAGO scientific group. To apply for someone you should follow the link:

``https://mms.eduteams.org/fed/registrar/?vo=LAGO-AAI&group=<GROUP>``

The collaboration are mainly distributed by countries, every one correspond to a one group:
{% assign countries = "argentina, colombia, spain" | split: ", " %}
{% for c in countries %}
  - {{c}} : [https://mms.eduteams.org/fed/registrar/?vo=LAGO-AAI&group={{c}}](https://mms.eduteams.org/fed/registrar/?vo=LAGO-AAI&group={{c}})
{% endfor %}


For example, after following the corresponding link, you must accept the AUP clauses of LAGO collaboration (also updated at this [page](/DMP/rights/AUP/)):

{% assign i = i | plus: 1 %}
![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

Then, eduTEAMS informs you that the application was sent and it is waiting for approval:

{% assign i = i | plus: 1 %}
![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)

You can also see that has two pending registration, one for the main LAGO-AAI virtual organisation (VO) and other for the group for which you were applied:

{% assign i = i | plus: 1 %}
![https://lagoproject.github.io/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png](/DMP/docs/howtos/how_to_join_LAGO_VO_img/RegistrationLAGO{{i}}.png)


The result (the acceptance or not) will be notified by email.


