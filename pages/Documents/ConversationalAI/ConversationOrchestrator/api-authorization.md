---
pagename: API Authorization
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
permalink: conversation-orchestrator-api-authorization.html
indicator: messaging
---

### Introduction

Server-to-server authentication is required to use Conversation Orchestrator APIs, including the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) and the [Next Actions API](conversation-orchestrator-next-actions-api-overview.html).The authentication mechanism differs between version 1 (v1) and version 2 (v2).

{: .important}
To understand the differences between v1 and v2, see [here](conversation-orchestrator-conversation-context-service-overview.html#api-versions). To know which version you are on (v1 or v2), please visit the **API Authorization** page within the Conversation Orchestrator application and consult the following information in this topic.

### API Authorization for v1

Version 1 APIs are dependent on an API authorization key. To get your unique key:

1. **Access the API Authorization page**: Access Conversation Orchestrator and then navigate to "API Authorization." This page displays an API key that you can use.

    <img width="800" src="img/convorchestrator/api_auth1.png" alt="">

2. **Use the API key**: Copy and paste the key provided, and use it in your API headers.

    To generate a new key, click the **Regenerate Key** button. This invalidates the previous key. The key is shared for all Conversation Orchestrator APIs; therefore, you must use the new key wherever the APIs are being called.

### API Authorization for v2

Version 2 APIs are secured with authentication based on the OAuth 2.0 Client Credentials grant flow. To use this flow, you will generate a bearer token from the authorization server and use that for subsequent API calls.

1. **Launch the API Authorization page**: Access Conversation Orchestrator and then navigate to "API Authorization." If you have been upgraded to v2, you will see the screen below.

    <img width="800" src="img/convorchestrator/api_auth2.png" alt="">

    The page has three sections:

    * **Token for testing the v2 APIs**: You can use this secure access token for testing the Context Service API v2 or Next Actions API v2 using API testing tools, such as Postman. This token is temporary and expires in 24 hours. This token should **not** be used in your code.
    * **Credentials for using the v2 APIs in your code**: This section has a user ID and password that you can use to generate your secure access token. Please see the next step for details.
    * **API key for v1 APIs**: Users who have been upgraded to v2 will have access to the v1 API key until December 31, 2022.

2. **Generate your OAuth2.0 secure access token using the credentials**: Your user ID and password are already generated. To leverage the Conversation Orchestrator v2 APIs, you need to generate an OAuth 2.0 secure access token through the login endpoint:

    **<https://{domain}/v2/authenticate/login>**

    Domain URL per environment:
    * AMERICAS : <https://z1.context.liveperson.net>
    * EMEA: <https://z2.context.liveperson.net>
    * APAC: <https://z3.context.liveperson.net>

    You will need to authorize the header with the pattern “Basic” followed by a space and a base64-encoded string username:password. For example, to authorize demo / p@55w0rd you would need to send
    Basic ZGVtbzpwQDU1dzByZA==

    **Note:** Because base64 is easily decoded, Basic authentication should only be used together with other security mechanisms such as HTTPS/SSL.

    This endpoint returns 200 ok with the OAuth2.0 secure token if the username and password are valid.

3. **Use the OAuth2.0 secure token in your API calls**: Pass the token in the authorization header while making API calls.

Example:

```
https://{domain}/v2/config/create?access_token=eyJraWQiOiJcL1NadEV5N2ZZaDFtdjBjTUxWeG0xQTNFQUVTRTRndnlDc255Z1pscEtTbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZTlhNDNkMC1hZjMxLTQzNmYtYTQ2My03ODcxMzEyZDM0NWQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJvZmlsZSI6IntcInJvbGVcIjpcImFjY291bnRcIixcInRlbmFudElkXCI6XCI2NzAwNTM2MVwiLFwicGVybWlzc2lvbnNcIjp7fX0iLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9XT0ZhRXdhcTIiLCJjb2duaXRvOnVzZXJuYW1lIjoiNjcwMDUzNjEiLCJhdWQiOiJ0azVwYnFsM3ZpZDBpcDhzcDQybTJhMWVpIiwiZXZlbnRfaWQiOiJlMzc5ZjhmMy03NTdkLTQ2ZGQtOGU0ZS1jY2FlYmJhNTZhZmQiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYxOTcwMzQzMiwibmFtZSI6IjY3MDA1MzYxIiwiZXhwIjoxNjE5Nzg5ODMyLCJpYXQiOjE2MTk3MDM0MzIsImVtYWlsIjoiNjcwMDUzNjFAbGl2ZXBlcnNvbi5jb20ifQ.ZykjZHWrSjWc3Zg5oSOnoXn8CjuQo1yPqeS0iiP2bLHp40IqB9erdTRj9FrVtvYRWDR1xigxJubQKpssIO05bevcBo7eYMGcYK_UrzfsT6l3LNowjvT4jszSvzB3M4MKU1SOjOcUShiubMAWivXqm9iPQKG0Fho3_0rzpkRyJ3act5TdjoUWcPdXNGds7DS8fvo6ey5lMiHpF_K_8It58stcC6befTb8pRgQ87MHgSXU7iMCyIH72ERPzMtHKXZx4QVwbCtN1P4CNAibyewx-ED18bYdX1NV-65YI3Dr7PeDAOGEJJ4WBcXIyi-Hrkde9ObwdGGaYg1Eb5PQYvxSWw
```
