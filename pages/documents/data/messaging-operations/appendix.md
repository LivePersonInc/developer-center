---
pagename: Appendix
redirect_from:
  - data-messaging-operations-appendix.html
sitesection: Documents
categoryname: Data
documentname: Messaging Operations API

order: 100
permalink: messaging-operations-api-appendix.html

indicator: messaging
---

This section contains API details that are common to every API’s resource and action.

**Request Headers**

| Header | Description |
| :------ | :------------- |
| Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows to optimize the backend, networking and client resources utilization. |

**Path Parameters**

| Parameter | Description | Type / Value |
| :---------- | :------------- | :-------------- |
| accountId | LP site ID | String  |
