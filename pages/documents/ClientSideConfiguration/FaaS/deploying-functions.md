---
pagename: Deploying Functions
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-deploying-functions.html
indicator: both
---
Now that you have created and edited the function, let's talk about how you can deploy it. We offer two deployment methods, although the second is simply a shortcut for the first.

1. Using the "Create deployment" button in the **Deployment** tab allows you to start deployment. Proceed by selecting a function you'd like to deploy. If you start typing the function's name, you'll leverage the filter functionality which will automatically search the available functions and find the one you need.

2. The shortcut alternative to this process is to deploy from the context menu in the `lambda` itself, in the **Develop** tab (more info on this menu can be found [here](function-as-a-service-developing-with-faas.html#code-completion--context-menu)). The `lambda` will directly forward you to the deployment menu.

![](img/faas-deploy.png)

After choosing a function for deployment, you will have a final chance to review the code which will be deployed and also see information on Environment Variables and Runtime. If the displayed information is correct, you can start the deployment by pressing the button "Approve & Deploy".

### Deployment States

The deployment will then proceed through the following states:

1. Build Start

2. Build Finish

3. Deploy Start

4. Deploy Finish

There are also two types of **error states**:

1. Build Error

2. Deploy Error

If an error occurs, you can hover over the Build State to receive insight on the cause for the error. Some issues are temporary and can be resolved by redeploying the affected function.

### Toolbelt

As mentioned in the [Getting Started document](function-as-a-service-getting-started.html), we offer you access to our Toolbelt, which is a language-specific utility library. Right now it offers access to a preconfigured Salesforce client, based on [JSForce](https://jsforce.github.io/), and an HTTP Client based on [request-promise](https://www.npmjs.com/package/request-promise). Please click on the links to see the API Documentations for the different functions offered.

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

Here are usage example, which are taken out of the official templates:

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

**HTTP client:**

```javascript
const { Toolbelt } = require("lp-faas-toolbelt");
//Obtain an HTTPClient instance from the Toolbelt
const httpClient = Toolbelt.HTTPClient(); // For API Docs look @ https:/www.npmjs.com/package/request-promise

const URL = "https://fancycssl.hbeock.de/";

httpClient(URL, {
	method: "GET", //HTTP VERB
	headers: {}, //Your headers
	simple: false, //IF true => Status Code != 2xx & 3xx will throw
	resolveWithFullResponse: true //IF true => Includes Status Code, Headers etc.
})
	.then(response ==> {

	})
```

### Testing your Function

To the right of the "Deployment state" field, you will find the “Actions” field. You will be able to invoke your `lambda` function by pressing “Invoke” and then pressing “Invoke” again in the newly opened tab. Invoking your function allows you to test its payload and behavior and make sure it works as expected.

![](img/faas-actions.png)

However, please note that you can only invoke functions that have been successfully deployed. When you’re in the "Develop" tab, this is indicated by the status of the function displaying as “Productive”. When in the “Deploy” tab, this will be indicated by the deployment state showing “Deployment successful”.

Pressing the Invoke button will lunch the Invoke your Fuction screen (IyF).

The IyF screen contains three major items:

The **Input** item contains the parameters with which your function will be called. By default it uses a payload appropriate for your function’s event. It can be manually edited to suit your testing scenario. These changes are not permanent and will be removed when reloading the FaaS website.

The **Output** renders whatever your function produces during an invocation, be it a String, JSON or an exception. Like the Input, the Output is not permanently saved.

The **Logs** display any logging you have included in your function. It can display messages and their importance (error versus info for example) as well as additional information declared by the user. Once a function has been invoked, any logs will displayed corresponding to their log-level declared inside the functions source code.

![](img/faas-invoke.png)

### Logging Function behavior

The different log-levels are: debug, info, warn and error. All functions take a String as a log message and, as an optional parameter, objects which can be displayed when inspecting an individual log-item. An example for a function which is logged can be found at the [FaaS Templates](function-as-a-service-templates.html) (under "*Logging Template*").

<div class="important">This function allows you to log sensitive information since there's no sanitation or limitations on the string you pass to the method! Please considerate with what is logged and don't pass any sensitive information to this function, e.g a vault secret or password!</div>

The template for the logging functions is as follows:

```javascript
console.<log-level>(<message> [, extras])
```

<table>
<thead>
	<tr>
		<th>Component</th>
		<th>Type</th>
		<th>Notes</th>
	</tr>
</thead>
<tbody>
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
</tbody>
</table>
