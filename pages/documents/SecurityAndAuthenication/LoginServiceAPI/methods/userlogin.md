---
pagename: User Login
redirect_from:
  - agent-user-login.html
Keywords:
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

**Query Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | number| Required | Default Value: 1.3 |

**Headers**

| Header |  Description |
| :--- | :--- |
| Content-Type | Application/JSON |
| Accept | Application/JSON |

**Body**

Example:

```json
    {
        "username": "name",
        "password": "password"
    }
```

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK - Successfully logged in (see note). |
| 400 | Bad request - Problem with body or query parameters. |
| 401  | Unauthorized - Bad Authentication (invalid site or agent). |
| 500 | Internal server error. |

**Response cookies**

| Cookie | Description |
| :--- | :--- |
| Session_id | Login session ID (should be passed to the refresh and logout methods). |

*Note: The Bearer can be found at the bottom of the response.*

Example:

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

*Note: Response contains csrf (should be saved and used in refresh and logout), bearer, wsuk, siteConfig, csdsCollectionResponse, accountData and sessionTTl.*

### Example Code

#### Python 3

```python
#! python3

import requests
import json

account_id = 'xxx'

domain = 'exampleDomain.liveperson.net'

username = 'xxx'
password = 'xxx'

user_login_url = 'https://'+domain+'/api/account/'+account_id+'/login?v=1.3'

user_login_body = {
    'username' : username,
    'password' : password,
}

header = {'content-type': 'application/json'}

client = requests.session()

user_login_response = client.post(url=user_login_url, headers=header, data=json.dumps(user_login_body)).json()

# Use csrf and session_id_cookie in Refresh and Logout methods
csrf = user_login_response['csrf']
session_id_cookie = { 'Session_id' : user_login_response['sessionId'] }

print('csrf='+csrf)
print('Session ID cookie='+str(session_id_cookie))
```
