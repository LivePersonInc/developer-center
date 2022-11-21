---
pagename: Refresh
redirect_from:
  - agent-refresh.html
permalink: login-service-api-methods-refresh.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Login Service API
subfoldername: Methods
order: 20
indicator: both
---

{: .attn-note}
It is best to call this method every 3–5 minutes to make sure the Login Service stays refreshed.

### Request

| Method | URL |
| :--- | :--- |
| POST |   https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/refresh |

#### Headers

| Header | Description |
| :--- | :--- |
| Content-Type | Application/JSON |
| Accept | Application/JSON |

#### Request cookies

| Cookie | Description |
| :--- | :--- |
| Session_id | Login session ID (taken from the Login response cookie) |

#### Body

| Parameter | Description |
| :--- | :--- |
| csrf | CSRF — Taken from the Login response body |

Example:

```json
{
  "csrf":"87f9c1e535b03494194d0b5e76b48ca8f4497114a8ba20afb22a67f375a29adb"
}
```

### Response

#### Response codes

| Code | Response |
| :--- | :--- |
| 200 | OK with empty body |
| 401  | Unauthorized — Bad Authentication (invalid site or agent) |
| 500 | Internal server error |

{: .attn-note}
In case csrf is invalid, the response code is “401 Unauthorized” with the following body:

```json
{
  "error": {
    "time": "Sep 22, 2016 4:10:15 PM",
    "message": "CSRF token invalid! The CSRF token on request does not match the CSRF token on the session",
    "internalCode": 10,
    "responseStatus": "UNAUTHORIZED"
  }
}
```

#### Cookies

Session_id containing the login session ID.