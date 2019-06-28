---
pagename: Domain API
redirect_from:
  - agent-domain-domain-api.html
  - retrieve-api-domains-using-the-domain-api.html
Keywords:
sitesection: Documents
categoryname: "Getting Started"
documentname: Essential Resources
permalink: essential-resources-domain-api.html
root-link: true
indicator:
---
<br>
A read-only API that returns the base domain of LivePerson and used in the LivePerson APIs.

{:.notice}
The different service names can be found in the relevant documentation for the API you're looking to use. They can be found in each document's Overview page. Service names are *case sensitive*. Please make sure to input serviceName as it is provided in each document's overview.

###  Request

The GET method used returns the base URI for the specified account ID and serviceName.

| Method | URL |
| :--- | :--- |
| GET | http://api.liveperson.net/api/account/{accountId}/service/{serviceName}/baseURI.json?version=1.0 |

**URL Parameters**

| Name | Description | Type / Value | Required |
| :--- | :--- | :--- | :--- |
| account | LivePerson account ID | string | Required |
| service | Service name according to the relevant API | string | Required |

###  Response

JSON Example:

```json
{
    "baseURIs": [
        {
            "service": "liveEngageUI",
            "account": "EXAMPLE123",
            "baseURI": "lo.le1.liveperson.net"
        },
        {
            "service": "visitorFeed",
            "account": "EXAMPLE123",
            "baseURI": "lo.v-feed.liveperson.net"
        },
        {
            "service": "etool",
            "account": "EXAMPLE123",
            "baseURI": "z2.etool.liveperson.net"
        },
```


**Optional Response Status Codes**

| Status | Description |
| :--- | :--- |
| 200 OK | Successfully retrieved the data. |
| 400 Bad Request | Problem with body or query parameters. |
| 401 Unauthorized | Bad Authentication (invalid site or agent). |
