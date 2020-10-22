---
layout: default
parent: HowTo's
nav_order: 2
---

# How to Login into LAGO data repositories

You **must be enroled into the LAGO Virtual Organisation before** to access the repositories. 

All repositories can be accesed through the a single OneZone instance at [https://datahub.egi.eu](https://datahub.egi.eu), which is provided by EGI.

![Step](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login.png)

Authentication and authorisation in LAGO is based on single sing on (SSO) and delegated credentials. Such credentials (roles and permissions) are managed through the eduTEAMs service. Thus, when you click in the EGI button, *you must select **eduTEAMs*** among the available identification providers (IdPs), although your institution or your e-mail provider were also listed in.

For example, if you had enroled a Google account into LAGO VO, you will firstly select eduTEAMs service as IdP, and then, within the eduTEAMs screen, search for the Google provider. Therefore, you will sing in Google (if were not already logged in) and Google will delegate the credentials to eduTEAM, and eduTEAMS to EGI, adding your permissions, respectively.

{% for i in (2..5) %} 
  ![Step{{i}}](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login{{i}}.png)
{% endfor %}

## Get a usable TOKEN

{% for i in (6..12) %} 
  ![Step{{i}}](/DMP/docs/howtos/how_to_login_into_OneData_img/datahub.egi.eu_login{{i}}.png)
{% endfor %}
