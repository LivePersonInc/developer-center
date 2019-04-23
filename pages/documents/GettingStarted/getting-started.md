---
pagename: Let's Get Started
sitesection: Documents
categoryname: "Welcome"
documentname: Get Started
permalink: get-started-let-s-get-started.html
indicator: both
---
<br>
[intro to the getting started page: what is on this page, what are the outcomes, and so on]

### Prerequisites

If you have not already done so:

1. Read the [API Terms of Use](https://www.liveperson.com/policies/apitou). 
2. Read the [Systems Requirements and Language Support](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) guide.


### Step 1. Create a LiveEngage Account
Before you can use LiveEngage, you must first sign up for a [developer’s account](http://register.liveperson.com/developer/signup).    

When creating an account, does it automatically select the Administrator as the permissions?  What is the best account type for the developer: Administrator or Campaign Manager?  

### Step 2. Retrieve your domain
A read-only API that returns the base domain of LivePerson and used in the LivePerson APIs.

{:.notice}
The different service names can be found in the relevant documentation for the API you're looking to use. They can be found in each document's Overview page. Service names are *case sensitive*. Please make sure to input serviceName as it is provided in each document's overview.

#### Request

| Method | URL |
| --- | --- |
| GET | http://api.liveperson.net/api/account/{accountId}/service/{serviceName}/baseURI.json?version=1.0 |

##### URL Parameters

| Name | Description | Type / Value | Required |
| :--- | :--- | :--- | :--- |
| account | LivePerson account ID | string | Required |
| service | Service name according to the relevant API | string | Required |

#### Response
##### JSON Example

```json
{
 "service": "agentVep",
 "account": "1234",
 "baseURI": "exampleDomain.liveperson.net"
}
```
##### Elements in the Response

| Name | Description  | Type / Value |
| --- | --- | --- |
| service | AgentVep | string |
| account | LivePerson Account ID | string |
| baseURI | LivePerson domain to be used in the APIs outlined in this document | string |

##### Optional Response Status Codes

| Status | Description |
| --- | --- |
| 200 OK | Successfully retrieved the data. |
| 400 Bad Request | Problem with body or query parameters. |
| 401 Unauthorized | Bad Authentication (invalid site or agent). |


### Step 3. Create an API key 
Application Keys are security tokens that can be used to log into LiveEngage. The application key gets installed automatically and assumes the security settings granted to the associated user in LiveEngage.

1. Log into LiveEngage with Administrator or Campaign Manager permissions and along the top open the **Campaigns** area.

1. In the footnote, click **Data Sources**.

1. Open the API tab and click **Add new**.
 
   **TIP:** Alternatively, you can click on an existing key to edit its privileges.

1. Provide the name of the application and the developer name. Optionally you can provide a description of the app by clicking the **Add description** link below the Application name field.

1. Select the **Agent Interactions** category, click the **User Login** check box to select it, and then click **Save**.  

   ![Create API key - Agent Interactions/User Login](../../../img/APIKeyCreation.png)

1. Once the API key has been successfully created, the authentication details display for four AUTH request values, which you use in the request body of this API:

   - App key

   - Secret

   - Access token

   - Access token secret

   ![Create API key - Authentication details](../../../img/apikeycreation1.png)             

1. After you have saved the API key, the window does not close automatically.  Click the X in the top right to close the window. 

   ![Create APY key - close window](../../../img/close-window.png)

1. Using the authentication details, generate an OAuth header according to the [OAuth Specification Section 9](https://oauth.net/core/1.0/#signing_process).

   *Example:*

   | Header Name | Authorization |
   | --- | --- |
   | Header Value | OAuth   oauth_signature="JA0PvBbTAxmtLmzIWINpSVLshrY%3D", <br> oauth_version="1.0", <br> oauth_nonce="c1c04ec4-3125-44cf-9c39-cccb9343541b", <br> oauth_consumer_key="d392e7ff2e204d6c802e38fd775563d1", <br> oauth_signature_method="HMAC-SHA1", <br> oauth_token="61adad31204a4e6fab68d560f1ffb594", <br> oauth_timestamp="1261039670" <br> *Note: The Authorization should be contained on a single line. New lines have been inserted for clarity.* |


### Step 4. Create a Bot user 


### Step 5. Add the Retry and KeepAlive mechanism


### Step 6. Select the login method

