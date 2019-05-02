---
pagename: External Invocations
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-external-invocations.html
indicator: both
---

To give brands the option to call their FaaS functions from outside of LivePerson's platform, we provide an API for External Invocation. With this API they can call their functions externally, secured by OAuth2.

[Missing picture]: <> (Please ensure to add the picture with the "clouds" here)

Further information about OAuth2 and how we use it:

* OAuth2 introduction video: [link](https://www.youtube.com/watch?v=CPbvxxslDTU)

* Official Liveperson OAuth2 flow documentation: [link](authorizing-liveengage-applications-overview.html)

### Step 1: Generate client-id & client-secret:

* Execute the **App Installation** process in order to generate a `client-id` and `client_secret` for the oAuth2.0 flow. This can be done by your LivePerson account team, so you should contact them for more assistance (you can also see [this](https://developers.liveperson.com/guides-le-applications-installing.html) guide for more detailed information).

### Step 2: Create User

Create a LiveEngage user with [FaaS-Invocation permission](function-as-a-service-getting-started.html#before-getting-started). This user will be used by the external invoker to authenticate while calling FaaS.

* Click on USERS and then Profiles.

* Create a new profile and make sure it has the FaaS Invocation permission.

[Missing picture]: <> (Let's add a screenshot of the profile page here.)

[Missing note]: <> (Let's make sure that ACFeature FaaS.FaaS needs to be enabled first before the FaaS permission is visible in the profile.)

* Then, add the profile you created to the user you'd like to use for the external invocation.

* Lastly, note the `userId` of the created user from the URL of the user's page.

![](img/faas-userid.png)

### Step 3: Retrieve domains of the FaaS Invocation Gateway

The FaaS Invocation Gateway is the main entry-point for invoking `lambdas` in FaaS via its RESTful API. You can use the following hosts for external invocation (the base domain is: `faasGW`):

* **APAC**: [sy.faasgw.liveperson.net](http://sy.faasgw.liveperson.net/)

* **EMEA**: [lo.faasgw.liveperson.net](http://lo.faasgw.liveperson.net/)

* **US**: [va.faasgw.liveperson.net](http://va.faasgw.liveperson.net/)

However, instead of hardcoding the domain, it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name `faasGW` and retrieving the domain **dynamically**.

### Step 4: Retrieve the domain of the authorization server.

You'll also need to pass your `client-id` and `client-secret` to one of our authorization servers for authentication. Depending on your account, you can use the following servers (the base domain is: `sentinel`):

* **APAC:** sy.sentinel.liveperson.net

* **EMEA:** lo.sentinel.liveperson.net

* **US:** va.sentinel.liveperson.net

However, instead of hardcoding the authorization server, it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name `sentinel` and retrieving the host address **dynamically**.

### Step 5: Get the **lambda UUID** from FaaS

Use the FaaS-UI to retrieve the lambda UUID of the function that should be invoked. Do so by navigating to the **Deploy** tab and opening the Invoke your Function screen by clicking "Invoke" on the function.

![](img/faas-invokeuuid.png)

The function's UUID is then displayed at the top of the page which opens, beneath your function's name. Note it down.

![](img/faas-uuid.png)

### Step 6: Generate oAuth2.0 token

Together with the retrieved domain of the authorization server and the `client-id` + `client-secret`, we can now generate an access-token to authenticate against our FaaS Invocation Gateway.

Please follow the steps described [here](https://developers.liveperson.com/authorizing-liveengage-applications-overview.html#getting-started) to better understand how to generate oAuth2.0 tokens via the authoriation server.

In the following example, [Postman](https://www.getpostman.com/) will be used to better illustrate how external applications can authenticate against the authorization server and execute an invocation. Feel free to import this ([Postman Collection](https://raw.githubusercontent.com/LivePersonInc/developers-community/master/assets/FaaS.postman_collection.json)) to execute the same steps within your local machine:

![](img/faas-postman.png)

1. In your request-tab under your function click on **Authorization**

2. Select type oAuth 2.0

3. Click on **Get New Access Token**

4. In the appearing dialog fill out the form:

![](img/faas-token.png)

  1. **Token Name**: The name of the token.

  2. **Grant Type**: Select grant type **Authorization Code**

  3. **Callback URL**: 	The Application’s callback URL that was registered during [App Installation](https://developers.liveperson.com/guides-le-applications-installing.html)

  4. **Auth URL**: The relevant LivePerson authorization server for your account (see above for more information). For example: https://va-a.sentinel.liveperson.net/sentinel/api/account/2065377/authorize?v=1.0

  5. **Access Token URL**: The endpoint for the server, which exchanges the authorization code for an access token. For example: https://va-a.sentinel.liveperson.net/sentinel/api/account/2065377/token?v=2.0

  6. **Client ID**: the generated `client_id` you received from the [App Installation](https://developers.liveperson.com/guides-le-applications-installing.html) (provided by your LivePerson account team)

  7. **Client Secret**: the generated `client_secret` you received from the [App Installation](https://developers.liveperson.com/guides-le-applications-installing.html) (provided by your LivePerson account team)

  8. **Client Authentication**: Select **header** instead of **body**

5. Click on **Request Token** to send the request and retrieve your token.

6. Now the oAuth2.0 flow is triggered and you will first be forwarded to the LiveEngage login page. There you need to provide the credentials of the user that will be used for invocation, which you created earlier.

7. On the following screen you can see your generated **Access Token**. You'll use this token to perform the invocation. The access-token will be sent with every FaaS invocation.

[Missing Screenshot with generated Access Token]: <> (See INTERNAL User Guide). EK - this screenshot is unnecessary. The screen is clearly labelled.

8. Below is also the **refresh_token** you need for refreshing your Access Token

9. If you click **Use Token**, the Access Token will be used for your Postman call

[Missing information]: <> (See INTERNAL User Guide.)

### Step 7: Calling the invocation API

First, check that all prerequisites have been performed and you have all the following information:

  * **AccountId** is available.

  * **LambdaUUID** is available.

  * **UserId** is available of the system-user invoking FaaS.

  * **Username + password** of the system-user invoking FaaS.

  * **Client-Id + Client-Secret** is available after App-Installation.

  * **Callback-URL** of oAuth flow is available and accessible.

  * **Sentinel + FaaS - domain** is available.

To show how the invocation API can be called, we will use the same Postman collection which was linked above. This collection **first** uses the oAuth2.0 flow to retrieve a valid **access-token,** and **second** executes the FaaS **invocation**, providing the retrieved access-token within the headers.
