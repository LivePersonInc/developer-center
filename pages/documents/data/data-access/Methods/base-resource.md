---
title: Base Resource
level1: Documents
level2: Data
level3: Data Access API
level4: Methods
order: 10
permalink: data-access-api-methods-base-resource.html

indicator: chat
---


This is the base resource that retrieves the list of available Data Access Uniform Resource Identifiers (URIs) for an account. A dedicated URI is used as the access point to retrieve each of the four types of Data Access supported data listed above: agent activity, web session, engagement and survey. 

### Request

| Method | URL |
| :------- | :----- |
| GET | `https://<domain>/data_access_le/account/{accountID}/le` |

### Response

**JSON Example**

Request for account 28045150:

    {
      "le": {
        "@accountId": "28045150",
        "link": [
          {
            "@href": "https://va-a.da.liveperson.net/data_access_le/account/28045150/le",
            "@rel": "self"
          },
          {
            "@href": 
    "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/agentActivity",
            "@rel": "agentActivity"
          },
          {
            "@href": 
    "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/webSession",
            "@rel": "webSession"
          },
          {
            "@href": 
    "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/engagement",
            "@rel": "engagement"
          },
          {
            "@href": "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/survey",
            "@rel": "survey"
          },
          {
            "@href": "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/schema",
            "@rel": "schema"
          }
        ]
      }

**Elements in the Response**

| Parameter | Description | Type / Value |
| :--------- | :-------------- | :--------------- |
| id | LivePerson account number. | string |
| link | Contains list of available URIs. | container |
| agent Activity | URI to retrieve agent activity data. | link relationship |
| webSession | URI to retrieve web session data. |
| link relationship | engagement |
| URI to retrieve engagement data. | link relationship |
| survey | URI to retrieve survey data. |
| link relationship | schema |
| URI to retrieve schema structure of the data (latest or for specific version). | link relationship |
