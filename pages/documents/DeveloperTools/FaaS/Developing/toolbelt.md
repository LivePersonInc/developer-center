---
pagename: Toolbelt
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-toolbelt.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-toolbelt.html
---

As mentioned in the [Getting Started document](function-as-a-service-getting-started.html), we offer you access to our `lp-faas-toolbelt` Node.js module, which is a language-specific utility library for lambdas.

Currently, the Toolbelt offers the following methods:

| Method | Description |
| :------- | :----- |
| Toolbelt.SFClient() | Returns a Salesforce Client, that is configured to work with the FaaS Proxy. |
| Toolbelt.HTTPClient() | Returns a HTTP Client, that is configured to work with the FaaS Proxy. |
| Toolbelt.SecretClient() | Returns an Secret Storage Client, that is configured to work with the FaaS Secret Storage. |
| Toolbelt.SMTPClient(config) | Returns an SMTP Client instance, which is configured using the provided config. |
| Toolbelt.ConversationUtil(apiCredentials) | Returns a Conversation Util instance, which is configured using the provided API credentials ([API Key](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html)). |
| Toolbelt.GDPRUtil() | Returns a GDPR Util instance. Provides GDPR related functionality, such as replacing files of a conversation. |

Here are usage example, which are taken out of the official templates:

### Salesforce Client:

Salesforce Client that is based on [jsforce](https://www.npmjs.com/package/jsforce) for connecting LivePerson Functions to any Salesforce system.

```javascript
const { Toolbelt } = require('lp-faas-toolbelt');
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

### HTTP Client:

HTTP Client that is based on [request-promise](https://www.npmjs.com/package/request-promise) for opening external HTTP connections.

```javascript
const { Toolbelt } = require("lp-faas-toolbelt");
//Obtain an HTTPClient instance from the Toolbelt
const httpClient = Toolbelt.HTTPClient(); // For API Docs look @ https:/www.npmjs.com/package/request-promise

const URL = "https://www.liveperson.com/";

httpClient(URL, {
	method: "GET", //HTTP VERB
	headers: {}, //Your headers
	simple: false, //IF true => Status Code != 2xx & 3xx will throw
	json: true, // Automatically parses the JSON string in the response
	resolveWithFullResponse: false //IF true => Includes Status Code, Headers etc.
})
.then(response ==> {
	...
})
```

### LivePerson Client:

The LivePerson (LP) Client is a wrapper for the [HTTP Client](https://developers.liveperson.com/liveperson-functions-development-toolbelt.html#http-client). It simplifies the usage of LivePerson APIs by providing automatic service discovery as well as taking care of the authorization.

 Every LivePerson API has a service name. This is documented in the respective page on [developers.liveperson.com](https://developers.liveperson.com). The [Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-overview.html) for instance has the service name `msgHist`. The LP Client expects the LpService name as the first argument. This can be done by using our `LpServices` enum or by manually providing the service name as a string.
 
Additionally, most of the LivePerson API calls need authorization. The LP Client also takes care of that by automatically creating the respective HTTP headers. Currently, only APIs that use [API Key](https://developers.liveperson.com/guides-gettingstarted.html) authorization are supported. In order to perform this authorization, the API reads credentials from a [secret](https://developers.liveperson.com/liveperson-functions-development-storing-secrets.html). By default, the secret name is `lp-faas-default-app-key`, but it can be overriden by setting `options.appKeySecretName`. 

**Using the LP Client**
In order to use the LP Client you have to execute the following steps:
 1. Create and maintain API Key credentials (see below).
 2. Whitelist `api.liveperson.net`
  * Go to `Settings -> Domain Whitelist`
  * Add `api.liveperson.net`
 3. Whitelist the API you want to use
  * Retrieve the domain for the service you want to use as described [here](https://developers.liveperson.com/agent-domain-domain-api.html).
  * Go to `Settings -> Domain Whitelist`
  * Add the domain

**Create and maintain an API Key**
* Create an API Key as described [here](https://developers.liveperson.com/guides-gettingstarted.html). The [Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-overview.html) for instance needs the permission `Data -> Engagement History / Messaging Interactions`
* Create a new secret of the JSON to save the API Key credentials created before. The JSON has the following structure:

```javascript
{
    "consumerKey": "...", // App Key
    "consumerSecret": "...", // Secret
    "token": "...", // Access token
    "tokenSecret": "...", // Access token secret
}
```

**Sample Usage**

```javascript
const { Toolbelt, LpServices } = require("lp-faas-toolbelt");

// Obtain an LpClient instance from the Toolbelt
const lpClient = Toolbelt.LpClient();

/**
 * Same options as the HTTPClient
 * Additional property "appKeySecretName" that will override the secret name to retrieve credentials.
 * For possible options look @ https://github.com/request/request#requestoptions-callback
 */
const options = {
    method: "POST",
    body: {
        conversationId
    },
    json: true,
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

### Secret Storage Client:

Storage Client that is able to read & update secret values. The following methods exist:

**SecretClient.readSecret**

Searches the secret that belongs to the provided key. Will raise an error if there is no secret for the provided key.

| Parameter | Description |
| :------- | :----- |
| key | Name of the secret |

| Returns | Description |
| :------- | :----- |
| secretEntry | Object with properties `key` & `value` |

**SecretClient.updateSecret**

Updates the secret with the provided update entry.

| Parameter | Description |
| :------- | :----- |
| secretEntry |  Object with properties `key` & `value` |

| Returns | Description |
| :------- | :----- |
| secretEntry | Created entry |

**Sample Usage**

```javascript
// import FaaS Toolbelt
const { Toolbelt } = require('lp-faas-toolbelt');
// obtain SecretClient from Toolbelt
const secretClient = Toolbelt.SecretClient();
// this is how you can access your stored secret
secretClient.readSecret('my_Secret-Key')
.then(mySecret => {
  // Fetching the secret value
  const value = mySecret.value
  // you can also update your secret e.g. if you received a new OAuth2 token
  mySecret.value = 'nEw.oaUtH2-tOKeN!!11!';
  return secretClient.updateSecret(mySecret)
})
.then(_ => {
  callback(null, { message: 'Successfully updated secret' });
})
.catch(err => {
  console.error(`Failed during secret operation with ${err.message}`)
  callback(err, null);
});
```

### SMTP Client:

SMTP Client allows the sending of emails via the SMTP Protocol. It is configured during instance creation. The Client is based on [nodemailer](https://github.com/nodemailer/nodemailer) and shares its interface.

<div class="important">The client will use a unique connection for every email sent. It will close each connection after sending.</div>


**Sample Usage**

```javascript
  // import FaaS Toolbelt
  const { Toolbelt } = require("lp-faas-toolbelt");
  // Create Instance based on providec config
  const client = Toolbelt.SMTPClient({
    host: "your-host",
    port: "1337",
    secure: true, // Use SSL for conection true/false
    auth: {
      user: "user",
      pass: "pass"
    }
  });
  // Validate provided config
  client.verify().then(isValid => {
    /** if isValid === true, then connection could be established */
  });
  // Send email
  client.send({
    sender: "Sender@mail.org",
    to: "receiver@mailier.org",
    bcc: "hidden@mail.org",
    subject: "Awesome Email !",
    text: "You can also send directly a html body by passing it as html."
  })
  .then(response => //TODO: react on the response)
  .catch(err => //TODO: React to error);
```

### Conversation Util:

The Conversation Util allows to perform conversation related methods, which are listed below. Authorization is configured during instance creation.

#### Get Conversation By ID

This method retrieves a conversation from the [Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-methods-get-conversation-by-conversation-id.html). It expects a conversation ID and returns a `Promise` that resolves to a conversation object.

**Sample Usage**

```javascript
  // import FaaS Toolbelt
  const { Toolbelt } = require("lp-faas-toolbelt");

  // set API Key credentials
  const apiCredentials = {
    oauthConsumerKey: '...',
    oauthConsumerSecret: '...',
    oauthAccessToken: '...',
    oauthAccessTokenKey: '...',
  }

  // Create instance with API credentials
  const conversationUtil = Toolbelt.ConversationUtil(
    apiCredentials
  );

  // Get conversation
  conversationUtil.getConversationById(conversationId)
  .then(conversation => //TODO: react on the response)
  .catch(err => //TODO: React to error);
```

#### Scan Conversation For Keywords

This method scans a conversation that has been retrieved with `getConversationById()` (see method above) for messages containing certain keywords. Those keywords can be freely determined and are case insensitive.

**Sample Usage**

```javascript
// import FaaS Toolbelt
const { Toolbelt } = require("lp-faas-toolbelt");

// set API Key credentials
const apiCredentials = {
  oauthConsumerKey: "...",
  oauthConsumerSecret: "...",
  oauthAccessToken: "...",
  oauthAccessTokenKey: "..."
};

// Create instance with API credentials
const conversationUtil = Toolbelt.ConversationUtil(apiCredentials);

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

| Attribute     | Description                                                                          | Type/Value |
| :------------ | :----------------------------------------------------------------------------------- | :--------- |
| message       | The whole message which is containing at least one keyword                           | string     |
| sentTimestamp | Timestamp (Current Unix epoch time in milliseconds) when the message was sent        | number     |
| sentBy        | Who the conversation was sent by                                                     | string     |
| tag           | Tag stating because of which keyword the message is included in the scanner Results. | string     |

```javascript
[
  {
    message: "Will we use Keywords in this conversation?",
    sentTimestamp: 1560764690328,
    sentBy: "Consumer",
    tag: "keywordRef:Keyword"
  },
  {
    message: "We definetely will, because keywords are awesome!",
    sentTimestamp: 1560764734592,
    sentBy: "Agent",
    tag: "keywordRef:Keyword"
  },
  {
    message: "We definetely will, because keywords are awesome!",
    sentTimestamp: 1560764734592,
    sentBy: "Agent",
    tag: "keywordRef:awesome"
  }
];
```

### GDPR Util:

This method provides GDPR related functionality, such as deleting transcripts of a conversation.

#### Replace files of a conversation

<div class="important">This will remove all files and transcripts of a conversation permanently! Contact your Account Manager to get access.</div>

This method replaces all files of a conversation from LivePerson's [file storage](https://developers.liveperson.com/file-sharing-file-sharing-for-web-messaging.html#introduction). It expects a conversation, the credentials for the file storage, a callback for filtering files and replacement image.

**Sample Usage**

```javascript
  // import FaaS Toolbelt
  const { Toolbelt } = require("lp-faas-toolbelt");

  // set API Key credentials
  const apiCredentials = {
    oauthConsumerKey: '...',
    oauthConsumerSecret: '...',
    oauthAccessToken: '...',
    oauthAccessTokenKey: '...',
  }

  // set file storage credentials (get from Account Manager)
  const fileStorageCredentials = {
    username: '...',
    password: '...'
  }

  // Create Conversation Util instance with API credentials
  const conversationUtil = Toolbelt.ConversationUtil(
    apiCredentials
  );

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
