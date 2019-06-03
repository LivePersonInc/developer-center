---
pagename: Authorization Code
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-external-invocations-authorization-code.html
indicator: both
---

This section describes how to call FaaS functions from outside of LivePerson's platform via the OAuth2.0 grant type [Authorization Code](https://oauth.net/2/grant-types/authorization-code/)). Use this grant type if you want to call FaaS on behalf a LiveEngeage user such as an Agent or Administrator.

**Note**: This grant type is redirection based. Only use this if a real user like an Agent is involved.

### Step 1: Generate client-id & client-secret:

Begin by executing the **App Installation** process in order to generate a `client-id` and `client_secret` for the OAuth 2.0 flow. This can be done by your LivePerson account team, so you should contact them for more assistance (you can also see [this](https://developers.liveperson.com/guides-le-applications-installing.html) guide for more detailed information).

### Step 2: Create User

Create a LiveEngage user with the [FaaS-Invocation permission](function-as-a-service-getting-started.html#before-getting-started). This user will be used by the external invoker to authenticate while calling FaaS.

* Click on USERS and then Profiles.

* Create a new profile and make sure it has the FaaS Invocation permission.

![](img/faas-permission.png)

* Then, add the profile you created to the user you'd like to use for the external invocation.

* Lastly, note the `userId` of the created user from the URL of the user's page.

![](img/faas-userid.png)

### Step 3: Retrieve domains of the FaaS Invocation Gateway

The FaaS Invocation Gateway is the main entry-point for invoking `lambdas` in FaaS via its RESTful API. You can use the following hosts for external invocation (the base domain is: `faasGW`):

* **APAC**: sy.faasgw.liveperson.net

* **EMEA**: lo.faasgw.liveperson.net

* **US**:   va.faasgw.liveperson.net

However, instead of hardcoding the domain, it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name `faasGW` and retrieving the domain **dynamically**.

### Step 4: Retrieve the domain of the authorization server.

You'll also need to pass your `client-id` and `client-secret` to one of our authorization servers for authentication. Depending on your account, you can use the following servers (the base domain is: `sentinel`):

* **APAC:** sy.sentinel.liveperson.net

* **EMEA:** lo.sentinel.liveperson.net

* **US:**   va.sentinel.liveperson.net

However, instead of hardcoding the authorization server, it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name `sentinel` and retrieving the host address **dynamically**.

### Step 5: Get the **lambda UUID** from FaaS

Use the FaaS UI to retrieve the `lambda UUID` of the function that should be invoked. Do so by navigating to the **Deploy** tab and opening the Invoke your Function screen by clicking "Invoke" on the function.

![](img/faas-invokeuuid.png)

The function's `UUID` is then displayed at the top of the page which opens, beneath your function's name. Note it down.

![](img/faas-uuid.png)

### Step 6: Generate OAuth 2.0 token

Together with the retrieved domain of the authorization server and the `client-id` + `client-secret`, we can now generate an access-token to authenticate against our FaaS Invocation Gateway.

Please follow the steps described [here](https://developers.liveperson.com/authorizing-liveengage-applications-overview.html#getting-started) to better understand how to generate OAuth 2.0 tokens via the authorization server.

In the following example, [Postman](https://www.getpostman.com/) will be used to better illustrate how external applications can authenticate against the authorization server and execute an invocation. Feel free to import this ([Postman Collection](https://raw.githubusercontent.com/LivePersonInc/developers-community/master/assets/FaaS.postman_collection.json)) to execute the same steps within your local machine:

![](img/faas-postman.png)

1. In your request-tab under your function click on **Authorization**

2. Select type OAuth 2.0

3. Click on **Get New Access Token**

4. In the appearing dialog fill out the form:

![](img/faas-token.png)

  1. **Token Name**: The name of the token.

  2. **Grant Type**: Select grant type **Authorization Code**.

  3. **Callback URL**: 	The Application’s callback URL that was registered during [App Installation](https://developers.liveperson.com/guides-le-applications-installing.html).

  4. **Auth URL**: The relevant LivePerson authorization server for your account (see above for more information). For example: https://va-a.sentinel.liveperson.net/sentinel/api/account/2065377/authorize?v=1.0.

  5. **Access Token URL**: The endpoint for the server, which exchanges the authorization code for an access token. For example: https://va-a.sentinel.liveperson.net/sentinel/api/account/2065377/token?v=2.0.

  6. **Client ID**: the generated `client_id` you received from the [App Installation](https://developers.liveperson.com/guides-le-applications-installing.html) (provided by your LivePerson account team).

  7. **Client Secret**: the generated `client_secret` you received from the [App Installation](https://developers.liveperson.com/guides-le-applications-installing.html) (provided by your LivePerson account team).

  8. **Client Authentication**: Select **header** instead of **body**.

  9. Click on **Request Token** to send the request and retrieve your token.

  10. Now the OAuth 2.0 flow is triggered and you will first be forwarded to the LiveEngage login page. There you need to provide the credentials of the user that will be used for invocation, which you created earlier.

  11. On the following screen you can see your generated **Access Token**. You'll use this token to perform the invocation. The access-token will be sent with every FaaS invocation.

  12. Below is also the **refresh_token** you need for refreshing your access token.

  13. If you click **Use Token**, the Access Token will be used for your Postman call.

### Step 7: Calling the invocation API directly from your systems

After executing the above steps you should have all data needed to execute calls against FaaS from your own systems.

Retrieved data:

  * **AccountId** is available.

  * **LambdaUUID** is available.

  * **UserId** is available of the system-user invoking FaaS.

  * **Username + password** of the system-user invoking FaaS.

  * **Client-Id + Client-Secret** is available after App-Installation.

  * **Callback-URL** Application’s callback URL is available and accessible.

  * **Authorization-Server + FaaS - domain** is available.

While calling FaaS with the access-token, you should also make sure to refresh the token before it expires. During **Step 6** you retrieved not only an access-token but also a refresh-token. Please follow [this](https://developers.liveperson.com/authorizing-liveengage-applications-methods-refresh-request.html) guide to execute a refresh request for your token.
