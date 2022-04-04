---
pagename: Toolbelt
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-toolbelt.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-toolbelt.html
  - liveperson-functions-development-toolbelt.html
  - liveperson-functions-development-toolbelt.html#http-client
  - liveperson-functions-development-toolbelt.html#mtls-client
  - liveperson-functions-development-toolbelt.html#get-conversation-by-id
---

As mentioned in the [Getting Started document](function-as-a-service-getting-started.html), we offer you access to our `lp-faas-toolbelt` Node.js module, which is a language-specific utility library for lambdas.

Currently, the Toolbelt offers the following methods:

| Method | Description |
| :------- | :----- |
| Toolbelt.SFClient() | Returns a Salesforce Client, that is configured to work with the FaaS Proxy. |
| Toolbelt.HTTPClient() | Returns a HTTP Client, that is configured to work with the FaaS Proxy. |
| Toolbelt.MTLSClient() | Returns a MTLS Client, that needs to be configured with cert & key. Please be aware that both certificate and key need to be in the `PEM`-Format. The `Toolbelt.MTLSClient()` can yield an error if the certificate is malformed, so please make sure to catch it. Further the MTLS Client is configured to work with the FaaS Proxy. |
| Toolbelt.LpClient() | Returns the LivePerson (LP) Client. This is a wrapper for the HTTP Client. It simplifies the usage of LivePerson APIs by providing automatic service discovery as well as taking care of the authorization. |
| Toolbelt.SecretClient() | Returns an Secret Storage Client, that is configured to work with the FaaS Secret Storage. |
| Toolbelt.OrchestratorClient() | Returns the Orchestrator Client. Provides functionality in order to invoke a function from inside another function |
| Toolbelt.ConversationUtil() | Returns a Conversation Util instance. |
| Toolbelt.GDPRUtil() | Returns a GDPR Util instance. Provides GDPR related functionality, such as replacing files of a conversation. |
| Toolbelt.SDEUtil() | Returns a SDE Util instance. Provides SDE related functionality, such as setting/ updating SDEs for an Engagement. |
| Toolbelt.ContextServiceClient() | Returns a Context Service Client instance. Provides functionality to interact with the [Context Session Store](conversation-orchestrator-conversation-context-service-overview.html).|

Here are usage example, which are taken out of the official templates:

### Salesforce Client

Salesforce Client that is based on [jsforce](https://www.npmjs.com/package/jsforce) for connecting LivePerson Functions to any Salesforce system.

```javascript
const { Toolbelt } = require("lp-faas-toolbelt");
const sfClient = Toolbelt.SFClient(); // for API docs look @ https://jsforce.github.io/

//This will establish a connection with SF. And leverage Access Token / Refresh Token to login
const con = sfClient.connectToSalesforce({
  loginUrl: "https://test.salesforce.com",
  accessToken: "PROVIDE_YOUR_ACCESS_TOKEN", //Obtain it from Secret Store
  refreshToken: "PROVIDE_YOUR_REFRESH_TOKEN" // Obtain it from Secret Store
});

con.query(query, function(err, queryResult) {});
```

### HTTP Client

HTTP Client that is based on [request-promise](https://www.npmjs.com/package/request-promise) for opening external HTTP connections.

```javascript
  // Importing the FaaS Toolbelt
  const { Toolbelt } = require("lp-faas-toolbelt");
  // Obtain an HTTPClient Instance from the Toolbelt
  const httpClient = Toolbelt.HTTPClient(); // For API Docs look @ https://www.npmjs.com/package/request-promise
  httpClient("https://github.com/", {
    method: "GET", // HTTP VERB
    headers: {}, // Your Headers
    simple: false, // IF true => Status Code != 2xx & 3xx will throw
    resolveWithFullResponse: true //IF true => Includes Status Code, Headers etc.
  })
.then(response => {
	...
})
.catch(err => {
  ...
})
```

<div class="important">
  <ul>
    <li>Please beware of the following restrictions:</li>
    <li>If the domain is not whitelisted the proxy will close the connection yielding a `Socket is closed`-Error.</li>
    <li>Max. 20 requests/sec (all beyond that are rejected with <code>429 - Too Many Requests.</code>)</li>
  </ul>
</div>

### MTLS Client

```javascript
  // Importing the FaaS Toolbelt
  const { Toolbelt } = require("lp-faas-toolbelt");
  // Configure MTLSClient with cert & key bundle in PEM format. 
  // Optional you can provide CA-Cert (PEM-Format) in case upstream cert is self-signed 
  // Also a soft format check is performed, which will throw an error if failing. Make sure to catch it.
  const mtlsClient = Toolbelt.MTLSClient({cert: 'cert-string', key: 'key-string'});
  mtlsClient.post('https://your-mtls-endpoint.com', { header: 'test'}, null, {
    json: true, // If true will attempt to parse response body to JSON
    timeout: 10000, // Deadline for request to finish by in MS
    allowSelfSigned: false, // Allow the upstream cert to be self-signed
    })
  .then(response => {
    ...
  })
  .catch(err => {
    ...
  })
```

<div class="important">
  <ul>
    <li>Please beware of the following restrictions:</li>
    <li>If the domain is not whitelisted the proxy will close the connection yielding a `Socket is closed`-Error.</li>
    <li>Max. 20 req/sec (all beyond that are rejected with <code>429 - Too Many Requests</code>).</li>
    <li>The expiration date of cert is not tracked, that is something you are responsible for.</li>
    <li>Both key and cert need to be in PEM-Format.</li>
    <li>The provided cert and key is checked for its format and will raise an error if malformed.</li>
  </ul>
</div>


### LivePerson Client

The LivePerson (LP) Client is a wrapper for the [HTTP Client](liveperson-functions-development-toolbelt.html#http-client). It simplifies the usage of LivePerson APIs by providing automatic service discovery as well as taking care of the authorization.

 Every LivePerson API has a service name. This is documented in the respective page on [developers.liveperson.com](https://developers.liveperson.com). The [Messaging Interactions API](messaging-interactions-api-overview.html) for instance has the service name `msgHist`. The LP Client expects the LpService name as the first argument. This can be done by using our `LpServices` enum or by manually providing the service name as a string. Each of the API-domains related to the `LpServices` enum is whitelisted in LivePerson Functions by default. (s. [Whitelisted Domains](liveperson-functions-development-whitelisting-domains.html#domains-whitelisted-by-default) for more information)

Additionally, most of the LivePerson API calls need authorization. The LP Client takes care of that by automatically creating the respective HTTP headers. In order to perform this authorization, the LP Client uses credentials from an API-key. Each account using Liveperson Functions has an API-key called `lp-faas-default` by default, which is visible in Live Engage. This API-key is able to authenticate to the following APIs:

<table style="width: 100%;">
<thead>
<tr>
<th>API</th>
<th>Read/ Write access?</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="data-access-api-overview.html">Data Access API</a></td>
<td>Yes</td>
</tr>
<tr>
<td><a href="messaging-interactions-api-overview.html">Messaging Interactions API</a></td>
<td>Yes</td>
</tr>
<tr>
<td><a href="operational-realtime-api-overview.html">Operational Realtime API</a></td>
<td>Yes</td>
</tr>
<tr>
<td><a href="personal-data-deletion-api-overview.html">Personal Data Deletion API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="users-api-overview.html">Users API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="skills-api-overview.html">Skills API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="agent-groups-api-overview.html">Agent Groups API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="profiles-api-overview.html">Profiles API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="lobs-api-overview.html">LOBs API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="workdays-api-overview.html">Workdays API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="visit-information-api-overview.html">Visit Information API</a></td>
<td>Yes</td>
</tr>
<tr>
<td><a href="engagement-attributes-api-overview.html">Engagement Attributes API</a></td>
<td>Yes</td>
</tr>
<tr>
<td><a href="validate-engagement-api-overview.html">Validate Engagement API</a></td>
<td>Yes</td>
</tr>
<tr>
<!-- <td><a href="ivr-engagement-api-overview.html">IVR Engagement API</a></td>
<td>Yes</td>
</tr>
<tr> -->
<td><a href="predefined-content-api-overview.html">Predefined Content API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="automatic-messages-api-overview.html">Automatic Messages API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="predefined-categories-api-introduction.html">Predefined Categories API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="unified-automatic-messages-api-overview.html">Unified Automatic Messages API</a></td>
<td>Read only</td>
</tr>
<tr>
<td><a href="agent-status-reason-api-overview.html">Agent Status Reason API</a></td>
<td>Read only</td>
</tr>
</tbody>
</table>


Currently, only APIs that use [API Key](guides-gettingstarted.html) authorization are supported.

#### Using APIs not covered in default API-key/Whitelisting

If you need to access an API which is not covered by the default API-key/Whitelisting, you need to perform the following steps:
 1. Create and maintain the API Key credentials
 * Create an OAuth 1.0 API Key as described [here](guides-gettingstarted.html). (the [Messaging Interactions API](messaging-interactions-api-overview.html) for instance needs the permission `Data -> Engagement History / Messaging Interactions`)
 * Create a new [secret](liveperson-functions-development-storing-secrets.html) of the type JSON to save the API Key credentials. The JSON has to have the structure as displayed below. Provide the name of the created secret when using the LP Client (see Sample Usage below for an example).

    ```javascript
    {
        "consumerKey": "...", // App Key
        "consumerSecret": "...", // Secret
        "token": "...", // Access token
        "tokenSecret": "...", // Access token secret
    }
    ```

 2. Whitelist the API you want to use
  * Retrieve the domain for the service you want to use as described [here](agent-domain-domain-api.html).
  * Go to `Settings -> Domain Whitelist`
  * Add the domain

**Sample Usage**

```javascript
const { Toolbelt, LpServices } = require("lp-faas-toolbelt");

// Obtain an LpClient instance from the Toolbelt
const lpClient = Toolbelt.LpClient();

/**
 * Same options as the HTTPClient
 * For possible options look @ https://github.com/request/request#requestoptions-callback
 */
const options = {
    method: "POST",
    body: {
        conversationId
    },
    json: true,
    /** insert the name of your custom authentication secret here - Use only
    *   if you want to bypass the default API-key and understand the ramifications.
    */
    appKeySecretName: 'my-custom-secret-name'
}

lpClient(
  LpServices.MSG_HIST, // LP service name
  `/messaging_history/api/account/${process.env.BRAND_ID}/conversations/conversation/search`, // endpoint of the service
  options // options
)
.then(response => {
	...
})
```

### Secret Storage Client

Storage Client that is able to read & update secret values. The following methods exist:

**SecretClient.readSecret**

Searches the secret that belongs to the provided key. Will raise an error if there is no secret for the provided key.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >key</td>
<td >Name of the secret</td>
</tr>
</tbody>
</table>

<table style="width: 100%;">
<thead>
<tr>
<th >Returns</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >secretEntry</td>
<td >Object with properties <code>key</code> &amp; <code>value</code></td>
</tr>
</tbody>
</table>

**SecretClient.updateSecret**

Updates the secret with the provided update entry.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >secretEntry</td>
<td >Object with properties <code>key</code> &amp; <code>value</code></td>
</tr>
</tbody>
</table>

<table style="width: 100%;">
<thead>
<tr>
<th >Returns</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >secretEntry</td>
<td >Created entry</td>
</tr>
</tbody>
</table>

**Sample Usage**

```javascript
// import FaaS Toolbelt
const { Toolbelt } = require("lp-faas-toolbelt");
// obtain SecretClient from Toolbelt
const secretClient = Toolbelt.SecretClient();
// this is how you can access your stored secret
secretClient
  .readSecret("my_Secret-Key")
  .then(mySecret => {
    // Fetching the secret value
    const value = mySecret.value;
    // you can also update your secret e.g. if you received a new OAuth2 token
    mySecret.value = "nEw.oaUtH2-tOKeN!!11!";
    return secretClient.updateSecret(mySecret);
  })
  .then(_ => {
    callback(null, { message: "Successfully updated secret" });
  })
  .catch(err => {
    console.error(`Failed during secret operation with ${err.message}`);
    callback(err, null);
  });
```

### Orchestrator Client

Orchestration Functions allow you to call other LivePerson functions. This might be useful if you want to perform multiple actions for certain events or organize your functions in a more modular fashion.

**Invoking functions from inside a function**

```javascript
    const { Toolbelt } = require("lp-faas-toolbelt");
    const client = Toolbelt.OrchestratorClient();
    const invocations = [
        { 
            uuid: "your_function_uuid",
            payload: {},
            headers: {}
        },
    ];
    const responses = await client.invoke(
        invocations,
        25000
    );
    const response = responses[0];
    console.info(response.uuid);
    console.info(response.body);
    console.info(response.headers);
    console.info(response.statusCode);
    console.info(response.error);

```

The ```invoke``` method from the ```OrchestratorClient``` has three different parameters:

<table style="width: 100%;">
<thead>
<tr>
<th>Parameter</th>
<th>Required?</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<col width="20%">
<col width="15%">
<col width="50%">
<col width="15%">
<tbody>
<tr>
<td>invocations</td>
<td>yes</td>
<td>Every function you want to invoke with its payload</td>
<td>IOrchestratorInvocation array</td>
</tr>
<tr>
<td>deadline</td>
<td>yes</td>
<td>Maximum time the orchestrator function is waiting for a response <b>(maximum 25000)</b></td>
<td>number (in ms)</td>
</tr>
<tr>
<td>options</td>
<td>no</td>
<td>More options to further configure the orchestration</td>
<td>IOrchestratorOptions</td>
</tr>
</tbody>
</table>

The object of type ```IOrchestratorInvocation``` necessary for the first ```invoke``` parameter has following properties:


<table style="width: 100%;">
<thead>
<tr>
<th>Property</th>
<th>Required?</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<col width="20%">
<col width="15%">
<col width="50%">
<col width="15%">
<tbody>
<tr>
<td>uuid</td>
<td>yes</td>
<td>the uuid of the function you want to invoke</td>
<td>string</td>
</tr>
<tr>
<td>headers</td>
<td>no</td>
<td>invocation headers</td>
<td>{ [key: string]: string }</td>
</tr>
<tr>
<td>payload</td>
<td>yes</td>
<td>invocation payload</td>
<td>unknown</td>
</tr>
<tr>
<td>retries</td>
<td>no</td>
<td>default amount of retries for failed invocations is 3.</td>
<td>number</td>
</tr>
<tr>
<td>retryFunction</td>
<td>no</td>
<td>This function is used to determine if a received status code/error should be retried or aborted.<br>The default tactic is to retry on following status codes: 429, 500, 502, 504.<br>Following network errors will also trigger a retry by default: ENOTFOUND, ECONNRESET, ETIMEDOUT, ESOCKETTIMEDOUT. This excludes retries on errors raised by the function.</td>
<td>retryFunction(statusCode: number, errorCode: string): boolean</td>
</tr>
</tbody>
</table>

Example with retry functionality, invocations executed in parallel:

```javascript
    const { Toolbelt, ErrorStrategy } = require("lp-faas-toolbelt");
    const client = Toolbelt.OrchestratorClient();
    const RETRIABLE_NETWORK_ERRORS = ['ENOTFOUND', 'ECONNRESET', 'ETIMEDOUT', 'ESOCKETTIMEDOUT'];
    const RETRIABLE_ERROR_CODES = [500, 502, 504];
    // only retry on some 5xx status codes and network errors
    const retryFunction = (statusCode, error) => {
        return RETRIABLE_ERROR_CODES.includes(statusCode) || RETRIABLE_NETWORK_ERRORS.includes(error.cause.code);
    }
    const invocations = [
        { 
            uuid: "your_first_function_uuid",
            payload: {},
            headers: {},
            retries: 3,
            retryFunction
        },
        { 
            uuid: "your_second_function_uuid",
            payload: {},
            headers: {},
            retries: 3,
            retryFunction
        },
    ];
    const responses = await client.invoke(
        invocations,
        25000,
        {
            timeout: 10000,
            // both invocations will be executed in parallel
            invokeParallel: true,
            errorStrategy: ErrorStrategy.CONTINUE_ON_ERROR
        }
    );
    const response = responses[0];
    console.info(response.uuid);
    console.info(response.body);
    console.info(response.headers);
    console.info(response.statusCode);
    console.info(response.error);
```

It is also possible to further configure the orchestrator by passing the optional third ```IOrchestratorOptions``` parameter to the ```invoke``` function.

<table style="width: 100%;">
<thead>
<tr>
<th>Property</th>
<th>Required?</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<col width="20%">
<col width="15%">
<col width="50%">
<col width="15%">
<tbody>
<tr>
<td>timeout</td>
<td>yes</td>
<td>Request timeout for each invocation. By default, this is calculated by <code>Math.floor(deadline/number of lambdas)</code>. If set you should check that all of the combined timeouts are not exceeding the deadline</td>
<td>number</td>
</tr>
<tr>
<td>errorStrategy</td>
<td>no</td>
<td>Defines the strategy to follow in case of error.</td>
<td>ErrorStrategy.EXIT_ON_ERROR, ErrorStrategy.CONTINUE_ON_ERROR</td>
</tr>
<tr>
<td>invokeParallel</td>
<td>no</td>
<td>If true, it will execute all passed invocations in parallel</td>
<td>boolean</td>
</tr>
</tbody>
</table>

There are a few things to consider when using orchestrator functions:
<br>
<b>BE CAREFUL</b> to not create semantic loops with orchestrator functions calling other functions. This <b>will</b> result in high invocation counts. It is also possible that the called functions are outrunning the orchestrator. Meaning that if the called function exceeds the provided deadline, the response will never reach the orchestrator. So make sure to set the deadline high enough for your use case.

Debugging of orchestrator functions is supported. However, it is not possible to step inside the called functions, only to see the response of their invocation. Called functions must be debugged individually.

### Conversation Util

The Conversation Util allows conversation related methods to be performed, which are listed below.

#### Get Conversation By ID

This method retrieves a conversation from the [Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-methods-get-conversation-by-conversation-id.html). It requires a conversation ID and accepts an optional Array to define which contents should be retrieved. It returns a `Promise` that resolves to a conversation object.

<table style="width: 100%;">
<thead>
<tr>
<th>Parameter</th>
<th>Required?</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<col width="20%">
<col width="15%">
<col width="50%">
<col width="15%">
<tbody>
<tr>
<td>conversationId</td>
<td>yes</td>
<td>The ID of the conversation that should be retrieved</td>
<td>string</td>
</tr>
<tr>
<td>contentToRetrieve</td>
<td>no</td>
<td>An array which can be used to define the content that should be retrieved. Use the <b>ConversationContentTypes</b> for an overview of which content types can be retrieved (s. Sample Usage below)</td>
<td>array</td>
</tr>
</tbody>
</table>


**Sample Usage**

```javascript
  // import FaaS Toolbelt
  const { Toolbelt, ConversationContentTypes } = require("lp-faas-toolbelt");

  // Create instance
  const conversationUtil = Toolbelt.ConversationUtil();

  // Define Parameters
  const conversationId = "c911f008-4761-4f43-95445-6948017eace5"
  const contentToRetrieve = [
    ConversationContentTypes.SDES,
    ConversationContentTypes.UNAUTH_SDES
  ]

  // Get conversation
  conversationUtil.getConversationById(conversationId, contentToRetrieve)
  .then(conversation => {}) //TODO: react to the response
  .catch(err => {}); //TODO: React to error
```

#### Scan Conversation For Keywords

This method scans a conversation that has been retrieved with `getConversationById()` (see method above) for messages containing certain keywords. Those keywords can be freely determined and are case insensitive.

**Sample Usage**

```javascript
// import FaaS Toolbelt
const { Toolbelt } = require("lp-faas-toolbelt");

// Create instance
const conversationUtil = Toolbelt.ConversationUtil();

// Get conversation
const conversation = await conversationUtil.getConversationById(conversationId);

// Determine Keywords
const keywords = ["Keyword", "awesome"];

// Scan Conversation for Keywords
const scannerResult = conversationUtil.scanConversationForKeywords(
  conversation,
  keywords
);
```

**Sample Result**

The method collects every message which contains a keyword in an array. It retrieves a timestamp, information on who sent the message and adds a tag detailing the keyword for which the message has been selected. If one message contains more than one keyword it will appear as often in the array. (see example underneath)

<table style="width: 100%;">
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>message</td>
<td>The whole message which is containing at least one keyword</td>
<td>string</td>
</tr>
<tr>
<td>sentTimestamp</td>
<td>Timestamp (Current Unix epoch time in milliseconds) when the message was sent</td>
<td>number</td>
</tr>
<tr>
<td>sentBy</td>
<td>Who the conversation was sent by</td>
<td>string</td>
</tr>
</tbody>
</table>

```javascript
[
  {
    message: "Will we use Keywords in this conversation?",
    sentTimestamp: 1560764690328,
    sentBy: "Consumer",
    tag: "keywordRef:Keyword"
  },
  {
    message: "We definitely will, because keywords are awesome!",
    sentTimestamp: 1560764734592,
    sentBy: "Agent",
    tag: "keywordRef:Keyword"
  },
  {
    message: "We definitely will, because keywords are awesome!",
    sentTimestamp: 1560764734592,
    sentBy: "Agent",
    tag: "keywordRef:awesome"
  }
];
```

### GDPR Util

This method provides GDPR related functionality, such as replacing files in a conversation. This Util works for **Messaging-Use Cases only**!

#### Replace files of a conversation

<div class="important">This will replace all files in a conversation permanently! Contact your Account Manager to get access.</div>

This method replaces all files of a conversation from LivePerson's [file storage](file-sharing-file-sharing-for-web-messaging.html#introduction). It expects a conversation, the credentials for the file storage, a callback for filtering files and replacement image.

**Sample Usage**

```javascript
// import FaaS Toolbelt
const { Toolbelt } = require("lp-faas-toolbelt");

// set file storage credentials (get from Account Manager)
const fileStorageCredentials = {
  username: '...',
  password: '...'
}

// Create instance
const conversationUtil = Toolbelt.ConversationUtil();

// Create GDPR Util instance
const gdprUtil = Toolbelt.GDPRUtil();
const shouldReplace = (filePath) => ... // filter here by returning boolean
const replacementFile = {
  body: Buffer.from('...', 'base64'), // create file from base64
  contentType: 'image/png',
};

// Get conversation and replace files
conversationUtil.getConversationById(conversationId)
  .then(conversation => gdprUtil.replaceConversationFiles(
        conversation,
        fileStorageCredentials,
        shouldReplace, //(optional) defaults to (path) => true
        replacementFile, //(optional) defaults to a black 1px*1px png
  ))
  .then(replacedFiles => //TODO: react on the response)
  .catch(err => //TODO: React to error);
```

### SDE Util

The SDE Util allows SDE related methods to be performed, which are listed below.

#### Add SDEs
This method adds/ updates SDEs to an Engagement via the [Engagement Attributes API](https://developers.liveperson.com/engagement-attributes-api-overview.html). It requires the session ID and the visitor ID where the SDEs should be added and the SDEs themselves. It returns a `Promise` that resolves when the SDEs have been successfuly set/ updated.

**Parameters**

<table style="width: 100%;">
<thead>
<tr>
<th>Parameter</th>
<th>Required?</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<col width="20%">
<col width="15%">
<col width="50%">
<col width="15%">
<tbody>
<tr>
<td>sdes</td>
<td>yes</td>
<td>Array of SDEs which should be added to an engagement. For more information about the available Engagement Attributes, refer to the <a href="engagement-attributes-overview.html">Engagement Attributes Overview</a>. Also use the <b>SDETypes</b> for suggestions for which types of engagement attributes can be added. (s. sample usage below)</td>
<td>array</td>
</tr>
<tr>
<td>visitorId</td>
<td>yes</td>
<td>The ID of the Visitor you want to add the SDEs to. (Sometimes is included in the faas-event payload, if not use the conversation ID with the <a href="liveperson-functions-development-toolbelt.html#get-conversation-by-id">Conversation Util</a> to retrieve)</td>
<td>string</td>
</tr>
<tr>
<td>sessionId</td>
<td>yes</td>
<td>The ID of the Session you want to add the SDEs to. (Sometimes is included in the faas-event payload, if not use e.g. the conversation ID with the <a href="liveperson-functions-development-toolbelt.html#get-conversation-by-id">Conversation Util</a> to retrieve)</td>
<td>string</td>
</tr>
</tbody>
</table>



**Sample Usage**

```javascript
  // import FaaS Toolbelt
  const { Toolbelt, SDETypes } = require("lp-faas-toolbelt");

  // Create instance
  const sdeUtil = Toolbelt.SDEUtil();

  // Define parameters
  const visitorId = "YyY2RlZGY3NzZjYoJhZGQx";
  const sessionId = "bjfYkPt-SYCqqZWDHNwSKQ";
  const sdes = [
    {
        type: SDETypes.PERSONAL_INFO,
        personal: {
            contacts: [
                {
                    email: "john.doe@example.com"
                }
            ]
        }
    }
  ];

  // Add SDEs
  sdeUtil.addSDEs(sdes, visitorId, sessionId)
  .then(response => {}) //TODO: react to the response
  .catch(err => {}); //TODO: React to error

```

#### Get SDEs from Conversation

The method extracts the SDEs from a conversation that has been retrieved fromt the [Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-overview.html). (e.g via the [ConversationUtil](#conversation-util)) Before returning them, it sorts the contained SDE-Events in ascending order.

**Sample Usage**

```javascript
  // import FaaS Toolbelt
  const { Toolbelt, ConversationContentTypes } = require("lp-faas-toolbelt");

  // Create SDE/Conversation-Util instance
  const conversationUtil = Toolbelt.ConversationUtil()
  const sdeUtil = Toolbelt.SDEUtil();

  // Define parameters
  const conversationId = "c944f008-4761-4f43-9536-6948017eace5";
  const contentToRetrieve = [
    ConversationContentTypes.SDES,
    ConversationContentTypes.UNAUTH_SDES
  ]

  // Get Conversation and extract SDEs
  conversationUtil.getConversationById(conversationId, contentToRetrieve)
  .then(conversation => {
    // TODO: define how to procede with the SDEs
    const sdes = sdeUtil.getSDEsFromConv(conversation);
  })
  .catch(err => {}); //TODO: React to error
```

**Sample Result**

If there were no errors, the result is an object which allways contains an array of SDE-Events for authenticated SDEs (`sdes`) and an array for unauthanticated SDEs. (`unAuthSdes`) Those arrays are sorted in ascending order, meaning the last event is the most current one.

```javascript
{
        sdes: {
            events: [
                {
                    customerInfo: {
                      ...
                    },
                    serverTimeStamp: 1569572377158,
                    sdeType: 'CUSTOMER_INFO',
                },
                {
                    personalInfo: {
                      ...
                    },
                    serverTimeStamp: 1569572377270,
                    sdeType: 'PERSONAL_INFO',
                },
            ],
        },
        unAuthSdes: {
            events: [
                {
                    customerInfo: {
                        ...
                    },
                    serverTimeStamp: 1569574433640,
                    sdeType: 'CUSTOMER_INFO',
                },
                {
                    customerInfo: {
                        ...
                    },
                    serverTimeStamp: 1569574433640,
                    sdeType: 'CUSTOMER_INFO',
                },
                {
                    personalInfo: {
                        ...
                    },
                    serverTimeStamp: 1569574433865,
                    sdeType: 'PERSONAL_INFO',
                },
            ],
        },
    }
```

### Context Service Client
The Context Service Client can be used to easily interact with the [Context Session Store](conversation-orchestrator-conversation-context-service-overview.html). This is especially useful for storing data between function calls.

After all [prerequisites for using the context session store](liveperson-functions-developing-with-faas-data-storage.html#prerequisitesinstallation) have been set up successfully, the client can be instantiated as follows.

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    // creating a secretClient instance
    const secretClient = Toolbelt.SecretClient();
    
    try {
      // retrieving your developer key from the secret storage
      const { value: apiKey } = await secretClient.readSecret('YOUR_DEVELOPER_KEY_SECRET_NAME');
      // retrieving your account ID via e.g. env variable
      const accountId = process.env.BRAND_ID
      const config = {accountId, apiKey}

      // using the config to instantiate the contextServiceClient
      const contextClient = Toolbelt.ContextServiceClient(config);
    } catch(error) {
      // Handle error based on your integration by providing a legit fallback operation.
      console.error(`received following error message: ${error.message}`);
    }


```

#### Methods
**ContextServiceClient.createNamespace**

Creates a custom namespace with the specified name for the provided account. Given the namespace exists it will not recreate it or throw an error.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
<th >Example</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
<td >-</td>
</tr>
<tr>
<td >options</td>
<td >No</td>
<td >options that should be applied to the namespace. For example Time to Live in seconds. If not provided/defined TTL will be permanent.</td>
<td >{ ttl: 120 }</td>
</tr>
</tbody>
</table>

**ContextServiceClient.deleteNamespace**

Deletes a custom namespace with the specified name. Given the namespace was already deleted it will not throw an error.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
</tbody>
</table>

**ContextServiceClient.getListOfNamespaces**

Returns a list containing all custom namespaces for the account the client was initialised for. Please be aware that built-in namespaces won't show up with exception to the default namespace.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >-</td>
<td >-</td>
<td >function has no parameters</td>
</tr>
</tbody>
</table>

**ContextServiceClient.setPropertiesInNamespace ([Code Snippet](liveperson-functions-developing-with-faas-snippets.html#create-context-session-store))**

Will set properties on the specified session in the defined namespace. Given no session was provided it will fallback to the default session of the namespace. All values will be stored in their JSON serialized version. Given a property/properties does exist they will be updated.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
<tr>
<td >properties</td>
<td >Yes</td>
<td >object containing the properties that should be set</td>
</tr>
<tr>
<td >sessionId</td>
<td >No</td>
<td >if not provided will use default session</td>
</tr>
</tbody>
</table>

**ContextServiceClient.updatePropertiesInNamespace ([Code Snippet](liveperson-functions-developing-with-faas-snippets.html#update-context-session-store))**

Will update properties on the specified session in the defined namespace. Given no session was provided it will fallback to the default session of the namespace. All values will be stored in their JSON serialized version. Given a property/properties does not exist they will be created.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
<tr>
<td >properties</td>
<td >Yes</td>
<td >object containing the properties that should be updated</td>
</tr>
<tr>
<td >sessionId</td>
<td >No</td>
<td >if not provided will use default session</td>
</tr>
</tbody>
</table>

**ContextServiceClient.getAllPropertiesInSession**

Returns the specified session containing all of it's properties. Given no session was provided it will fallback to the default session of the namespace.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
<tr>
<td >sessionId</td>
<td >No</td>
<td >if not provided will use default session</td>
</tr>
</tbody>
</table>


**ContextServiceClient.getSelectedPropertiesInSession**

Returns the specified session containing all of the defined properties. Given a property does not exist it will be ignored. Given no session was provided it will fallback to default session of the namespace.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
<tr>
<td >propertyNames</td>
<td >Yes</td>
<td >names of the desired properties in a string array</td>
</tr>
<tr>
<td >sessionId</td>
<td >No</td>
<td >if not provided will use default session</td>
</tr>
</tbody>
</table>

**ContextServiceClient.getPropertyInSession ([Code Snippet](liveperson-functions-developing-with-faas-snippets.html#read-context-session-store))**

Get the value of the specified property on the defined session. Given no session was provided it will fallback to default session of the namespace.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
<tr>
<td >propertyName</td>
<td >Yes</td>
<td >name of the desired property</td>
</tr>
<tr>
<td >sessionId</td>
<td >No</td>
<td >if not provided will use default session</td>
</tr>
</tbody>
</table>

**ContextServiceClient.deletePropertyInSession ([Code Snippet](liveperson-functions-developing-with-faas-snippets.html#delete-context-session-store))**

Deletes the specified property on the defined session. Given no session was provided it will fallback to default session of the namespace. Given the property was already deleted it will not throw an error.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
<tr>
<td >propertyName</td>
<td >Yes</td>
<td >name of the property that should be deleted</td>
</tr>
<tr>
<td >sessionId</td>
<td >No</td>
<td >if not provided will use default session</td>
</tr>
</tbody>
</table>


**ContextServiceClient.deleteSession**

Deletes the specified session in the defined namespace. Given no session was provided it will fallback to default session of the namespace. Given the session was already deleted it will not throw an error.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
<tr>
<td >sessionId</td>
<td >Yes</td>
<td >ID of the session that should be deleted</td>
</tr>
</tbody>
</table>

**ContextServiceClient.getListOfSessions**

Returns a list containing all session in the specified namespaces.

<table style="width: 100%;">
<thead>
<tr>
<th >Parameter</th>
<th >Required?</th>
<th >Description</th>
</tr>
</thead>
<tbody>
<tr>
<td >namespace</td>
<td >Yes</td>
<td >Name of the namespace</td>
</tr>
</tbody>
</table>