---
layout: default
parent: HowTo's
nav_order: 2
---

# How to Login into LAGO data repositories

## Table of contents
{: .no_toc}

- TOC
{:toc}

## The login process

You **must be enroled into the LAGO Virtual Organisation before** to access the repositories. 

All repositories can be accesed through the a single OneZone instance at [https://datahub.egi.eu](https://datahub.egi.eu), which is provided by EGI.

![Step](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login.png)

Authentication and authorisation in LAGO is based on single-sing-on (SSO) technologies and delegated credentials. Such credentials (roles and permissions) are managed through the eduTEAMs service. Thus, **when you click in the EGI button, **you must select eduTEAMs*** among the available identification providers (IdPs), although your institution or your e-mail provider were also listed in. If you not pass-through eduTEAMs, you will only obtain the access to test repositories for EGI users, but not to the LAGO repositories.

For example, if you had enroled into LAGO VO with a Google account, you will firstly select eduTEAMs service as IdP, and then, within the eduTEAMs screen, search for the Google provider. Therefore, you will sing in Google (if were not already logged in) and Google will authenticate you to eduTEAM, and eduTEAMS add your credentials to EGI, respectively: 

{% for i in (2..6) %} 
  ![Step{{i}}](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login{{i}}.png)
{% endfor %}


## General OneZone View

Depending on the browser and the screen size, menu list on the left can be hidden and the objects change of position:

{% for i in (7..8) %} 
  ![Step{{i}}](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login{{i}}.png)
{% endfor %}


## Get an usable TOKEN

If you wants to mount locally the repositories or to access them through any application, it should be needed to generate a personal OneData token. For this purpose you have to open the TOKENS option in the menu.

As commented, the menu list can appear permanently on the left:

![Step12](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login12.png)

Although it could be a drop-down menu hidden at the top-left corner:

{% for i in (9..11) %} 
  ![Step{{i}}](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login{{i}}.png)
{% endfor %}
