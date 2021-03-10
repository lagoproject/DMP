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

You **must be enrolled in the LAGO Virtual Organisation before** accessing the repositories. 

All repositories can be accessed through the single OneZone instance at [https://datahub.egi.eu](https://datahub.egi.eu), which is provided by EGI.

![Step](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login.png)

Authentication and authorisation in LAGO are based on single-sign-on (SSO) technologies and delegated credentials. Such credentials (roles and permissions) are managed through the eduTEAMs service. Thus, **when you click on the EGI button, **you must select eduTEAMs*** among the available identification providers (IdPs), although your institution or your e-mail provider might be also listed. If you do not select eduTEAMs, you will only obtain access to the test repositories for EGI users, but not to the LAGO repositories.

For example, if you enrolled in LAGO VO with a Google account, you will firstly select eduTEAMs service as IdP, and then, within the eduTEAMs screen, you will have to search for the Google provider. Therefore, you will sign in Google (if not already logged in) to be authenticated in eduTEAMS, and eduTEAMS will add your credentials to EGI, respectively: 

{% for i in (2..6) %} 
  ![Step{{i}}](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login{{i}}.png)
{% endfor %}


## General OneZone View

Depending on the browser and the screen size, the menu list on the left can be hidden and the objects at a different position:

{% for i in (7..8) %} 
  ![Step{{i}}](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login{{i}}.png)
{% endfor %}


## Get a usable TOKEN

If you want to mount locally the repositories or to access them through any application, is needed to generate a personal OneData token. For this purpose, you have to open the TOKENS option in the menu.

As previously indicated, the menu list can appear permanently on the left:

![Step12](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login12.png)

Although, it could be a drop-down menu hidden at the top-left corner:

{% for i in (9..11) %} 
  ![Step{{i}}](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login{{i}}.png)
{% endfor %}
