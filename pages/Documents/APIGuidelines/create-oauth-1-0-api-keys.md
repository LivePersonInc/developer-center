---
pagename: Create OAuth 1.0 API keys
sitesection: Documents
categoryname: "API Guidelines"
permalink: create-oauth-1-0-api-keys.html
indicator: both
redirect_from:
    - essential-resources-create-api-keys.html
    - common-resources-create-api-keys.html
    - api-guidelines-create-api-keys.html
---


### Create an OAuth 1.0 API key

API keys are security tokens that you use to access Conversational Cloud services. The API key gets installed automatically and assumes the security settings granted to the associated user in Conversational Cloud.

{:.notice}
You use the API key when you create bots, access our APIs programmatically and authorize Conversational Cloud Applications. You can create up to 100 keys per account. The API key is issued on behalf of the site and not for the user (server to server) which means you don't need a bearer (no need to be logged in) when using an API key.

1. Log into Conversational Cloud with Administrator or Campaign Manager permissions and along the top open the **Campaign Builder** area.

2. In the footnote click **Data Sources**.

3. Open the API tab and click **Add new**.

{:.notice}
Alternatively, you can click on an existing key to edit its privileges rather than create a new one.

{:start="4"}
4. Provide the name of the application and the developer name. Optionally you can provide a description of the app by clicking the **Add description** link below the Application name field.

5. Select the relevant category for your API, check the relevant checkbox for selecting API permissions and then click **Save**.  
 
    {:.important}
   For bots logins, you will need to select the **Agent Interactions** category and check the **User Login** API permission
 
   ![](/img/APIKeyCreation.png)

{:start="6"}
6. Once the API key has been successfully created, the authentication details display for four AUTH request values, which you use in the request body of this API:

   - App key

   - Secret

   - Access token

   - Access token secret

   ![](/img/apikeycreation1.png)

{:start="7"}
7. If the window does not close automatically, click the **X** in the top right to close the window.

   ![](/img/close-window.png)

   {:.important}
   Currently, we do not support deleting an API key.

8. Using the authentication details, generate an OAuth header according to the [OAuth Specification Section 9](https://oauth.net/core/1.0/#signing_process).

{:.notice}
The API key best practices correspond to general oAuth1 best practices. For example, usually, the API key is generated per application/implementation, to make sure that environments have their own unique key.

**Example:**

| **Header Name** | **Authorization** |
| --- | --- |
| Header Value | OAuth<br>oauth_signature="JA0PvBbTAxmtLmzIWINpSVLshrY%3D", <br>oauth_version="1.0",<br>oauth_nonce="c1c04ec4-3125-44cf-9c39-cccb9343541b", <br>oauth_consumer_key="d392e7ff2e204d6c802e38fd775563d1", <br>oauth_signature_method="HMAC-SHA1", <br>oauth_token="61adad31204a4e6fab68d560f1ffb594", <br>oauth_timestamp="1261039670" <br><br>**Note:** The authorization should be contained on a single line. New lines have been inserted for clarity. |

<p><br></p>
---
<p></p>
