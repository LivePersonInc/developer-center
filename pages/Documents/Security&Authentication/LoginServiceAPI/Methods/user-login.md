---
pagename: User Login
redirect_from:
  - agent-user-login.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Login Service API
subfoldername: Methods
order: 10
permalink: login-service-api-methods-user-login.html
indicator: both
---

### Request

| Method | URL |
| :--- | :--- |
| POST |  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/login?v=1.3 |

#### Query parameters

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | Number | Required | Default Value: 1.3 |

#### Headers

| Header |  Description |
| :--- | :--- |
| Content-Type | Application/JSON |
| Accept | Application/JSON |

#### Body

Example:

```json
  {
    "username": "name",
    "password": "password"
  }
```

### Response

#### Response codes

| Code | Response |
| :--- | :--- |
| 200 | OK — Successfully logged in |
| 400 | Bad request — Problem with body or query parameters |
| 401  | Unauthorized — Bad Authentication (invalid site or agent) |
| 500 | Internal server error |

#### Response cookies

| Cookie | Description |
| :--- | :--- |
| Session_id | Login session ID (should be passed to the refresh and logout methods) |

{: .attn-note}
The Bearer can be found at the bottom of the response.

Example:

```json
{
  "csrf": "d5d07326cfe2240b9453e19e8092c59844921dcdc6ebb105c55fea9ed45c9d77",
  "wsuk": "766900772095619056",
  "config": {
    "loginName": "name",
    "userId": "3705342610",
    "userPrivileges": [
      100,
      101,
      1730,
      1731,
      1732,
      1733,
      1734,
      1735
    ],
    "serverCurrentTime": 1474549184722,
    "timeDiff": -25200000,
    "serverTimeZoneName": "Europe/Athens",
    "serverTimeGMTDiff": 10800000,
    "isLPA": false,
    "isAdmin": true,
    "accountTimeZoneId": "Europe/Athens"
  },
  "csdsCollectionResponse": {
    "baseURIs": [
      {
        "account": "123456",
        "baseURI": "domain.domain.net",
        "service": "smt"
      },
      {
        "account": "123456",
        "baseURI": "domain.domain.net",
        "service": "agentVep"
      }
    ]
  },
  "accountData": {
    "agentGroupsData": {
      "items": [
        {
          "id": -1,
          "deleted": false,
          "name": "Main Group"
        }
      ],
      "revision": 1
    }
  },
  "sessionTTl": "28800000",
  "bearer": "9cf6ee24b6a1031e202f292a0ad20c8f52bfd9f01abc8b9489365995052c6603"
}
```

{: .attn-note}
The response contains csrf (should be saved and used in refresh and logout), bearer, wsuk, siteConfig, csdsCollectionResponse, accountData and sessionTTl.