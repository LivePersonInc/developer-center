---
pagename: Function as a Service User Guide
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Agent Groups API
permalink: function-as-a-service-user-guide.html
indicator: both
---
### Overview

Function as a Service (FaaS) is an internal LivePerson project enabling brands to develop custom behaviors within the LiveEngage platform. It enables integrations of services and hosting these services on LivePerson’s infrastructure. It’s simple, automatically deployed and integrated into LivePerson services. By doing so, FaaS enables you to just write a simple function (otherwise known as ‘Lambda’), deploy it and your solution will be available in minutes.

When using FaaS, there are three main components that a developer should consider:

#### Function

Functions (‘Lambdas’) are code snippets that are responsible for performing certain needed tasks. Using Javascript, a developer can write custom code that will run upon being triggered by the invoker (see below for more information on invocations). The payload that is passed into the function can also be used within the function. Developers can use the data from the payload as part of the function logic.

#### Invocation

Functions are triggered by services that have integrations with the FaaS infrastructure. Depending on the type of function that is used, different triggers will be needed. These triggers can be an internal LivePerson event for example, such as a conversation state change, or an external service action (for example, when a message is received on an external platform, trigger a LiveEngage conversation as well). As part of the invocation, the integrated invokers can pass a payload into the function when the invocation occurs. This payload is specific to the invocation method. This means that depending on the invoker, the function will have different available data in the payload.

To see the available invocation methods and integrations with FaaS, please review the FaaS Integrations Section of this document.

#### Response / Action

Functions also have the ability to respond back to the invoker if needed. The invoker can then perform an action based on the response of the function. For example, if Denver invokes a function which triggers a chat, the response from the function could tell Denver to send out an email transcript of the chat.

Functions also have the ability to leverage both LivePerson APIs as well as external ones. This allows developers to extend the brand’s LiveEngage platform with custom integrations. Because the FaaS infrastructure resides inside the LivePerson cloud and adheres to the security, stability and scalability measures as offered by the LP private cloud, these custom integrations will enjoy the same robustness as other LiveEngage services. For example, the platform self-monitors the activity and scales in a self-sufficient manner based on resource demand. This means that if a certain function is experiencing high load during peak hours, the infrastructure scales automatically to provide it with more resources and to ensure performance.

For further technical details about the FaaS platform, see also [https://docs.dev.lprnd.net/display/MPE/Architecture+Overview](https://docs.dev.lprnd.net/display/MPE/Architecture+Overview).

### Getting Started

<div class="important">FaaS is currently enabled via LivePerson account team's only. Please contact your account team if you wish to enable the platform. Until you do so, you will not be able to utilize FaaS.</div>

FaaS's UI is divided into three main components. At the top of the UI you can find a tab-based navigation bar which will allow you to navigate these components. The **Develop** space (see below) is the default page that will be visible.

**Develop** contains an overview of the functions sorted by their state: *Draft* and *Productive* / *Modified*. This allows quick access to features surrounding the management of functions. **Note**: the develop page will show a special message when there are no functions available in the account.

A detailed guide on how to create a new function can be found in the section Create a Javascript Function.

**Deploy** provides the overview of functions that are currently deployed. It allows quick access to deployment features. Furthermore, it also allows access to a test page, where you can test the function with known, static input. **Note**: that if the deployment of a function fails, you can hover over the deployment state to see the cause for the failure.

Detailed information on the deployment process/flow can be found in the section Deployment Process. A guide on testing using the provided test page can be found in the section Testing your Function.

**Settings** provides access to available settings. Currently, this is limited to the whitelisting of domains. A detailed explanation of the Whitelisting Process can be found at Whitelisting Domains.

Once you've familiarized yourself with the different sections of the UI, it's time to create your first function!

### Create a JavaScript Function

#### General

In order for your function to work with FaaS seamlessly, it has to follow a certain pattern. This template can be viewed below.

<div class="important>Make sure that this declaration stays like shown and is in the first line. Otherwise, the backend will reject the function.</div>

```javascript
function lambda(input, callback) {   callback(null,`Hello World`);}
```

Our runtime is built using NodeJS LTS, which is currently NodeJs 10. The function developer has access to functionality offered by NodeJS. However be aware that the overall user rights are limited. We also provide access to the following dependencies, which can be `required` on demand:

* [Request](https://www.npmjs.com/package/request/v/2.87.0): HTTP Library (Callback based API)

* [Request-promise-native](https://www.npmjs.com/package/request-promise-native/v/1.0.5): HTTP Library (Promise based API)

* Lp-faas-toolbelt: Utility Library which provides access to convenience functions

During an invocation, the function receives an event-specific **input**. Furthermore, we provide a callback in the standard Node JS Signature.

```javascript
function callback(error, result){}
```

If during your application no error has occurred you can provide a **null** value as error. After 30 Seconds your function will be killed immediately.

<div class="important">When creating a function, you can choose from templated functions that are associated with available invocation events. In order to avoid unwanted side effects, we do allow updating the selected event after creation. Within the platform we use some environment variables for configuration, these are reserved and can not be used by the function developer. The UI will notify you if your chosen variable is reserved.</div>

#### Creation Process

Now we will have a look at the actual process of creating a new function.

You can start the creation process using the **Create a Function** button that can be found under the **Develop** section. This opens the Creation Window which is currently a 3 Step process:

1. Choose a template

2. *Optional* whitelist a domain

3. Function Description

##### Step 1: Choose a template

We provide developer templates, which are bound to a specific event. The templates are by default runnable out of the box, allowing you to directly deploy them and see the response. You can see a preview of the template on the right-hand side.

**Further notes on the events**:

* Each Event also has an event specific payload associated with it. This will be used during the testing but is also visible during development in the "Payload" tab.

* Other Systems might invoke functions based on events, e.g. Denver will invoke functions that have the Event: "Chat Post Survey E-Mail Transcript"

After choosing the desired template, you might want to whitelist a domain in order to perform an HTTP call to an external system. If this is not required, just deactivate the toggle and skip the next step.

##### Step 2: Whitelist a domain

You are able to whitelist the domains you want to leverage inside your function(s). This can also be done in the **Settings** section. We have a proxy in place which will check incoming requests from functions and see if the requested URL is whitelisted.

Within the `Lp-faas-toolbelt`, we provide a method that generates the required headers for the communication with the proxy. A detailed explanation on the usage is shown here.

Please make sure to whitelist the **fully qualified domain name**. E.g. If you visit [https://liveperson.com](https://liveperson.com) the server will actually redirect to [https://www.liveperson.com](https://www.liveperson.com), which means the domains you need to whitelist would be **www.liveperson.com**** **and** **liveperson.com**. [As shown in the screenshot below]

Generally, we will prevent the double whitelisting of a domain. The UI will also indicate this using a dedicated error message.

We also perform validation on the provided domain in order to ensure it is a valid domain name. For now, we do not support the whitelisting of subdomains in the format **.example.com**.

**Please be aware** that it might take up to **5 minutes** until the whitelisted domain becomes active on the Proxy.

##### Step 3: Function description

Finally, you are able to name your function and also provide a short description. It will be useful to provide some context to another developer who might work with the function in the future. After creation, you are automatically forwarded to the Editor. More details on the Editor and it’s functionality can be found here.

**Please be aware** that a function name has to be unique within a brand in order to avoid naming conflicts under one account.

### Development

After successfully creating a `lambda` you should be finding yourself in the Editor, the heart of the FaaS UI. Here you can develop the function itself. The Editor is based on the Monaco Editor (which is the code editor that powers VS Code) and provides you with a similar experience.

**Note:** When choosing a template function linked to events, you can only develop a function with an unused event.

#### Code Completion / Context Menu

While typing, the editor will offer you suggestions based on types, if inferable. You can also utilize this feature when using `require` to import dependencies to your `lambda`. Requiring `lp-faas-toolbelt` for example will give you type suggestions for the FaaS Toolbelt. This works for all dependencies which are listed in the “environment” section of the sidebar.

By right-clicking inside the editor area, you're able to open the context menu, which provides you access to additional functionality, the most notable being the **Format Document**, which will reformat the code.

#### Editor Sidebar

By pressing the marked button you are able to hide or show the sidebar which offers you access to two tabs (Settings & Payload). On smaller screens it will be hidden by default, on larger screens, it is shown by default.

#### Settings Tab

The Settings Tab shows you general information, including the date of the last change, but also things like **Event** and **Description**. Furthermore, it provides an up to date list of the available dependencies and the versions. You can click on the Info Icon to see the official documentation over at `npm`.

In the lower section you can manage the environment variables. As mentioned here, we have a set of reserved environment variables. The UI will inform you when you attempt to use them.

#### Payload Tab

The Payload Tab shows the example payload, which highlights the structure of the event-specific payload. If the payload is larger it will be collapsed automatically. It is generally possible to collapse and expand the payload.

**Please be aware** that the payload is read-only, you are not able to modify it.  

#### Environment Variables

Using the relevant button from the Settings tab you are able to add new Environment variables. Clicking the button will open a dialogue window where you can provide a name and a value for your new variable. As mentioned here, we have a set of reserved environment variables. The UI will inform you when you attempt to use them.

You can access the variable during runtime by using `process.env['YOUR_ENV']`. **Please be aware** that the value will be available in form of a string. If the value is a number, you will have to parse it prior to using it. By using the trash icon, you can delete unwanted variables.

### Deployment Process

Once we've created and edited the function, let's talk about how you can deploy it. We offer two deployment methods although the second is simpy a shortcut for the first.

1. Using the "Create deployment" button on the Deployment section allows you to start deployment. Proceed by selecting a function you'd like to deploy. If you start typing the function name, you'll leverage the filter functionality which will automatically search the available functions and find the one you need.

2. The shortcut alternative to this process is to deploy from the context menu on the `lambda` itself, in the Develop section. The `lambda` will directly forward you to the deployment inspection menu.

After choosing a function for deployment, you will have a final chance to review the code which will be deployed and also see information on Environment Variables and Runtime. If the displayed information is correct, you can start the deployment by pressing the button "Approve & Deploy".

#### Deployment States

The deployment will then proceed through the following states:

1. Build Start

2. Build Finish

3. Deploy Start

4. Deploy Finish

Error States:

{:start="5"}
5. Build Error

6. Deploy Error

If an error occurs, you can hover over the Build State to receive insight on the cause for the error. Some issues are temporary and can be resolved by redeploying the affected function.

#### Toolbelt

We offer the function developer access to our Toolbelt, which is a language-specific utility library. Right now it offers access to a preconfigured Salesforce client, based on [JSForce](https://jsforce.github.io/), and an HTTP Client based on [request-promise](https://www.npmjs.com/package/request-promise). Please click on the links to see the API Documentations for the different functions offered.

```javascript
export declare class Toolbelt {
	/*
	* Returns a Salesforce Client, that is configured to work with the proxy.
	*/

	0 references | Complexity is 1 Everything is cool!
	static SFClient(): {
		connectToSalesforce: typeof connectToSalesforce;
	};
	/*
	* Returns an HTTP Client, that is configured to work with the proxy.
	* It is based on request-promise-native and shares the same interface.
	*/
	0 references | Complexity is 2 Everything is cool!
	static HTTPClient(): any;
}
```

**Here are usage example, which are taken out of official templates:**

**Salesforce:**

```javascript
const { Toolbet } = require('lp-faas-toolbelt');
const sfClient = Toolbelt.SFClient(); // for API docs look @ hhtps://jsforce.github.io/

//This will establish a connection with SF. And leverage Access Token / Refresh Token to login
const con = sfClient.connectToSalesforce({
	loginUrl: "https://test.salesforce.com",
	accessToken: "PROVIDE_YOUR_ACCESS_TOKEN", //Obtain it from Secret Store
	refreshToken: "PROVIDE_YOUR_REFRESH_TOKEN" // Obtain it from Secret Store
});

con.query(query, function(err, queryResult) {

});
```

**HTTP:**

```javascript
const { Toolbelt } = require("lp-faas-toolbelt");
//Obtain an HTTPClient instance from the Toolbelt
const httpClient = Toolbelt.HTTPClient(); // For API Docs look @ https:/www.npmjs.com/package/request-promise

const URL = "https://fancycssl.hbeock.de/";

httpClient(URL, {
	method: "GET", //HTTP VERB
	headers: {}, //Your Headers
	simple: false, //IF true => Status Code != 2xx & 3xx will throw
	resolveWithFullResponse: true //IF true => Includes Status Code, Headers etc.
})
	.then(response ==> {

	})
```

### Testing your Function

You can only invoke functions that have been successfully deployed. When you’re in the "Develop" tab, this is indicated by the status of the function displaying as “Productive”. When in the “Deploy” tab, this will be indicated by the deployment state showing “Deployment successful”.

To the right of the "Deployment state" field, you will find the “Actions” field. You will be able to invoke your `lambda` function by pressing “Invoke” and then pressing “Invoke” again in the newly opened tab. Invoking your function allows you to test its payload and behavior and make sure it works as expected.

#### Invoking and logging Function behavior

Invoking your function can be done from the "Invoke your Function" (IyF) view which can be reached by pressing the “Invoke” button next to a deployed function.

The IyF screen contains three major items:

The **Input** item contains the parameters with which your function will be called. By default it uses a payload appropriate for your function’s event. It can be manually edited to suit your testing scenario. These changes are not permanent and will be removed when reloading the FaaS website.

The **Output** renders whatever your function produces during an invocation, be it a String, JSON or an exception. Like the Input, the Output is not permanently saved.

The **Logs** display any logging you have included in your function. It can display messages and their importance (error versus info for example) as well as additional information declared by the user. Once a function has been invoked, any logs will displayed corresponding to their log-level declared inside the functions source code:

The different log-levels are: debug, info, warn and error. All functions take a String as a log message and ,as an optional parameter ,Objects which can be displayed when inspecting an individual log-item. An example for a function which is logged can be found at the FaaS Templates (under "*Logging Template*").

**Attention**: This function allows you to log sensitive information e.g. a vault secret. So be considerate with what is logged!

The template for the logging functions are as follows:

```javascript
console.<log-level>(<message> [, extras])
```

<table>
  <tr>
    <td>log-level</td>
    <td>Method</td>
    <td>Method names correspond to the different log-levels and influence in which way the logs are displayed within FaaS. Current levels are:
console.debug(), console.info(), console.warn() and console.error()</td>
  </tr>
  <tr>
    <td>message</td>
    <td>String</td>
    <td>message defines the message to be displayed in the logs.</td>
  </tr>
  <tr>
    <td>extras</td>
    <td>Any</td>
    <td>An object which will then be wrapped in an Array and displayed in the log for additional information.</td>
  </tr>
</table>


### External Invocation

To provide brands the possibility to call their FaaS-Functions from outside of LivePerson's platform, we provide an API for External Invocation. With this API they can call their functions externally, secured by OAuth2.

Further information about OAuth2:

* OAuth2 introduction video: [link](https://www.google.com/url?q=https://www.youtube.com/watch?v%3DCPbvxxslDTU&sa=D&ust=1553694587073000&usg=AFQjCNFNPT4j-oFDYWoEDG9t4022J-lYZQ)

* Official Liveperson OAuth2 flow documentation: [link](https://www.google.com/url?q=https://developers.liveperson.com/authorizing-liveengage-applications-overview.html&sa=D&ust=1553694587088000&usg=AFQjCNEF1e5El3Tvj6CHqtytk3xEKSUMwQ)

#### Prerequisites for external invocation:

* Execute the **App Installation** in order to generate a `client-id` & `client-secret` for the oAuth2.0 flow. This can be done by LivePerson's account team so you should contact them for more assistance. (also see [this](https://developers.liveperson.com/guides-le-applications-installing.html) guide).

Depending on your account, you can use the following hosts for external invocation (CSDS-Domain: **faasGW**):

* **Alpha**: va-a.faasgw.liveperson.net

* **APAC**: [sy.faasgw.liveperson.net](http://sy.faasgw.liveperson.net/)

* **EMEA**: [lo.faasgw.liveperson.net](http://lo.faasgw.liveperson.net/)

* **US**: [va.faasgw.liveperson.net](http://va.faasgw.liveperson.net/)

However it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name **faasGW **dynamically**.

##### Retrieve the domain of the oAuth server.

Depending on your account, you can use the following oAuth servers (CSDS-Domain: **sentinel**):

* **Alpha**: va-a.sentinel.liveperson.net

* **APAC:** sy.sentinel.liveperson.net

* **EMEA:** lo.sentinel.liveperson.net

* **US:** va.sentinel.liveperson.net

However it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name **sentinel **dynamically**.

##### Get the **lambda UUID** from FaaS that should be invoked by the external invocation

* An **oauth2 token** generated by this user before the FaaS lambda invocation (refer to [this](https://developers.liveperson.com/authorizing-liveengage-applications-overview.html) guide)

    * An access token is valid for 8 hours only. Its validity can be extended by calling a refresh endpoint. In order to refresh an existing access token, the application should use a refresh request as mentioned [here](https://developers.liveperson.com/authorizing-liveengage-applications-methods-refresh-request.html). It is recommended that the refresh request be made every 30 minutes to ensure that the access token does not expire.

    * Here is an example-app for executing the OAuth 2 flow: [link](https://www.google.com/url?q=https://github.com/LivePersonInc/sample-app-authorization&sa=D&ust=1553728159528000&usg=AFQjCNE_pGdbrcvT8_h1R5agIsQE3ySGMw)

    * If you use [Postman](https://www.getpostman.com/) you can use this template to retrieve your token ([Postman Collection](https://drive.google.com/a/liveperson.com/file/d/1oMcXM3wH4toUWxn5mEu_uLz2adbeRZLi/view?usp=sharing)):

1. In your request-tab click on **Authorization**

2. Select type OAuth 2.0

3. Click on **Get New Access Token**

4. In the appearing dialog fill out the form:

    1. **Token Name**: how you want the token to be named

    2. **Grant Type**: **Authorization Code**

    3. **Callback URL**: the redirect-uri you set in the JSON of the App Installation ([http://localhost/callback](http://localhost/callback))

    4. **Auth URL**: https://va-a.sentinel.liveperson.net/sentinel/api/account/2065377/authorize?v=1.0

    5. **Access Token URL**: https://va-a.sentinel.liveperson.net/sentinel/api/account/2065377/token?v=2.0

    6. **Client ID**: the generated **client_id** of your App Installation

    7. **Client Secret**: the generated **client_secret** of your App Installation

    8. **Client Authentication**: **Send client credentials in Body**

5. Click on **Request Token**

6. Now you need to login with the user you created with the permission **FaaS Invocation** - the generated token will have the same permissions as the user you used for login

7. In this dialog you can see your generated **Access Token** that you can use to perform the invocation

2. This is the **refresh_token** you need for refreshing your Access Token

3. If you click **Use Token**, the Access Token will be used for your Postman call

#### Steps for calling the invocation API:

1. All prerequisites have been finished

    * **AccountId** is available.

    * **LambdaUUID** is available.

    * **UserId** is available of the system-user invoking FaaS.

    * **Username + password** of the system-user invoking FaaS.

    * **Client-Id + Client-Secret** is available after App-Installation.

    * **Callback-URL** of oAuth flow is available and accessible.

    * **Sentinel + FaaS - domain** is available.

In next step we will use a Postman-Collection that **first** uses the oAuth2.0 flow to retrieve a valid **access-token** and **second** will execute the FaaS **invocation** providing the retrieved access-token within the headers.

1. Download [Postman Collection](https://drive.google.com/a/liveperson.com/file/d/1oMcXM3wH4toUWxn5mEu_uLz2adbeRZLi/view?usp=sharing)

2. Import collection into your local postman

3. The collection contains one POST-request.

4. The main call is to our invocation endpoint and has the following structure:

`https://{faasGW_domain}/api/account/{accountId}/lambdas/{lambdaUUID}/invoke?v=1&userId={userId}`

Parameters of the URL:

* **faasGW_domain**: domain used for FaaS invocation

* **accountId**: your accountId

* **lambdaUUID**: uuid for the lambda

* **userId**: user-Id from user that created the Oauth2 token.

with body (content type: application/json):

```json
{
	"timestamp": 0,
	"headers": [
		{
			"key": "string",
			"value": "string"
		}
	],
	"payload": {}
}
```

5. The body is similar to the values sent via the FaaS invocation UI. Additionally, each invocation needs to provide a timestamp in unix-epoch time format.

6. However, before the main call can be executed we need to retrieve the access-token. This is done via the oAuth host. Therefore the following configuration needs to be done in Postman. Please refer to [this](https://developers.liveperson.com/authorizing-liveengage-applications-overview.html) guide, for deeper insights about how the oAuth host and its APIs work.

    * In your request-tab click on **Authorization**

    * Select type OAuth 2.0

    * Click on **Get New Access Token**

    * In the appearing dialog fill out the form and click request token:

        1. **Token Name**: how you want the token to be named

        2. **Grant Type**: **Authorization Code**

        3. **Callback URL**: the redirect-uri you set in the JSON of the App Installation (**[http://localhost/callbac**k](http://localhost/callback))

        4. **Auth URL**: https://va-a.sentinel.liveperson.net/sentinel/api/account/2065377/authorize?v=1.0

        5. **Access Token URL**: https://va-a.sentinel.liveperson.net/sentinel/api/account/2065377/token?v=2.0

        6. **Client ID**: the generated **client_id** of your App Installation

        7. **Client Secret**: the generated **client_secret** of your App Installation

        8. **Client Authentication**: **Send client credentials in Body!!!**

    * Now the oAuth2.0 flow is triggered and you will first be forwarded to the LE-Login page. There you need to provide the credentials of the system-user that will be used for invocation.

    * After you logged in with valid credentials you should see the following screen.

    * You got a access-token + refresh-token. The access-token will be sent with every FaaS invocation. The refresh-token needs to be used in order to get a next access-token after the TTL of the current access-token is reached.

        * An access token is valid for 8 hours only. Its validity can be extended by calling a refresh endpoint. In order to refresh an existing access token, the application should use a refresh request as mentioned [here](https://developers.liveperson.com/authorizing-liveengage-applications-methods-refresh-request.html). It is recommended that the refresh request is made every 30 minutes to ensure that the access token does not expire.

    * If you click **Use Token**, the access-token will be used for your Postman call.

**Hint:** You can also use [this](https://github.com/LivePersonInc/sample-app-authorization) sample app, in case the Postman oAuth2.0 does not work for you. Please make sure that the callback-url in the App-Installation is set to **http://localhost:3000/callback**.

7. Now the main call can be executed with the retrieved access-token

Example invocation in Postman:

* Fill out the required Post-body

* Press **Send**

* As a response you should see the result of your lambda

### External UI

To grant external developers access to FaaS, we created an External UI with the same possibilities you have currently within the LivePerson internal version of FaaS.

You can access this UI via (CSDS-Domain: faasUI):

* **Alpha**: [https://va-a.faasui.liveperson.net](https://va-a.faasui.liveperson.net)

* **APAC**: [https://sy.faasui.liveperson.net](https://sy.faasui.liveperson.net)

* **EMEA**: [https://lo.faasui.liveperson.net](https://lo.faasui.liveperson.net)

* **US**: [https://va.faasui.liveperson.net](https://va.faasui.liveperson.net)

However, it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name `faasUI` **dynamically**

To get access to this page, you need at least one of these permissions: **LPA**, **FaaS-Admin**, **FaaS-Developer**

FaaS Permissions are described in the section below.

### FaaS Permissions

There are 3 permissions for FaaS

* FaaS-Admin

* FaaS-Developer

* FaaS-Invocation

As **FaaS-Admin** you are allowed to read lambdas, manage the whitelist for external domains and manage secrets.

As **FaaS-Developer** you are allowed to manage lambdas, read whitelisted domains and read encrypted secrets.

As **FaaS-Invoker** you are only allowed to invoke lambdas externally.

<table>
  <tr>
    <td></td>
    <td></td>
    <td>FaaS-Admin</td>
    <td>FaaS-Developer</td>
    <td>FaaS-Invocation</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>create/edit/delete</td>
    <td>-</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>deploy</td>
    <td>-</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>invoke</td>
    <td>-</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>whitelist</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>whitelist</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>read plain</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>read crypted</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
</table>


You can configure these permission in LiveEngage:

    * Click on USERS and then Profiles

    * Create/Edit a profile and add the permission you want for this profile:

### FaaS template integrations

[Conditioned-Based Email Transcript via LiveEngage Chat](https://docs.google.com/document/d/17XAu-iF38U_Tr3eW9Pm1NdntTUZZo5YgHAeNMgkX0O0/edit#heading=h.6nowu7h8lkfe)

This integration lets you trigger functions following the submission of a Post Chat Survey. The contents of the chat survey is passed into the `lambda` as a payload. You can then create conditions and send a response back to Denver (the application server that handles chats) with a command to send a transcript of the chat to an email configured in the Lambda.

[Messaging Conversations with Faas](https://docs.google.com/document/d/1nseVvHXhmkdQUFWR0-oihCAUAqwtx_ZOLS4dI3a7aXE/edit#heading=h.6nowu7h8lkfe)

FaaS can be invoked by a set of standard Messaging conversational state changes. A state change analyser, listens to the conversation events and invokes functions that are subscribed to those events. This allows for custom logic to be created around the state of the conversation.
