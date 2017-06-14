---
title: Refresh
permalink: agent-refresh.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Login Service API
level4: Methods

order: 20

indicator: both
---

### Request

| Method | URL |
| :--- | :--- |
| POST |   https://{domain}/api/account/{accountId}/refresh |

**Headers**

**Request cookies**

| Cookie | Description |
| :--- | :--- |
| Session_id | Login session ID (taken from the Login response cookie). |

| Header | Description |
| :--- | :--- |
| Content-Type | Application/JSON |
| Accept | Application/JSON |

**Body**

| Parameter | Description |
| :--- | :--- |
| csrf | CSRF - Taken from the Login response body. |

Example: 

    {
        "csrf":"87f9c1e535b03494194d0b5e76b48ca8f4497114a8ba20afb22a67f375a29adb"
    }

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK with empty body (see [note](#note)). |
| 401  | Unauthorized - Bad Authentication (invalid site or agent). |
| 500 | Internal server error |

<a name="note">*Note*</a>: *In case csrf is invalid, response code is 401 - Unauthorized with the following body:*

    {
      "error": {
        "time": "Sep 22, 2016 4:10:15 PM",
        "message": "CSRF token invalid! The CSRF token on request does not match the CSRF token on the session",
        "internalCode": 10,
        "responseStatus": "UNAUTHORIZED"
      }

**Cookies**

Session_id containing the login session ID.
