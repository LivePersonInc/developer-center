---
pagename: Appendix
redirect_from:
  - data-data-access-appendix.html
sitesection: Documents
categoryname: "Reporting"
documentname: Data Access API
order: 63
permalink: data-access-api-appendix.html
indicator: chat
---

This section contains API details that are common to every API’s resource and action.

### Request Headers

| Header | Description |
| :------ | :----- |
| Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows to optimize the backend, networking and client resources utilization. |

### Path Parameters

| Parameter | Description | Type / Value |
| :------ | :-------- | :------ |
| accountId | LP site ID. | String  |