---
pagename: Toolbelt
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
subfoldername: Developing with FaaS
permalink: function-as-a-service-developing-with-faas-toolbelt.html
indicator: both
---

As mentioned in the [Getting Started document](function-as-a-service-getting-started.html), we offer you access to our Toolbelt, which is a language-specific utility library. The toolbelt offers access to a preconfigured set of capabilities such as a Salesforce client, based on [JSForce](https://jsforce.github.io/), and an HTTP Client based on [request-promise](https://www.npmjs.com/package/request-promise). Please click on the links to see the API Documentations for the different functions offered.

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
