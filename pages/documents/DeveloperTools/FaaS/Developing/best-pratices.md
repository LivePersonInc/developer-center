---
pagename: "Best Practices"
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-best-practices.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-best-practices.html
---

The following section shows some best practices for using the LivePerson Functions platform.

- [OAuth 1](#oauth-1)
- [OAuth 2.0](#oauth-20)
- [Usage of Environment Variables](#usage-of-environment-variables)
- [Async/Await Functions](#asyncawait-functions)
- [Error handling in async functions](#error-handling-in-async-functions)
- [Working with Context Session Store](#working-with-context-session-store)

### OAuth 1

OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization.

LivePerson Functions offers the possibility to use the [oauth-1.0a](https://www.npmjs.com/package/oauth-1.0a) package to support the [OAuth 1 authorization flow](https://oauth1.wp-api.org/docs/basics/Auth-Flow.html).

The following code shows an example which performs a `POST` request with `Header`-Authorization.

<div class="important">
  It's recommended to store the <code>consumerKey</code>, <code>consumerSecret</code>, <code>tokenKey</code> and <code>tokenSecret</code> in the <a href="liveperson-functions-development-toolbelt.html#secret-storage-client">secret storage</a>
</div>

```javascript
async function lambda(input, callback) {
  const { Toolbelt } = require('lp-faas-toolbelt');
  const httpClient = Toolbelt.HTTPClient();
  const secretClient = Toolbelt.SecretClient();
  const OAuth = require('oauth-1.0a');
  const crypto = require('crypto');

  try {
    // Get key and secret from secret storage
    const consumerKey = await secretClient.readSecret('consumerKey');
    const consumerSecret = await secretClient.readSecret('consumerSecret');

    // Note: The token is optional for some requests
    const tokenKey = await secretClient.readSecret('tokenKey');
    const tokenSecret = await secretClient.readSecret('tokenSecret');

    const oauth = OAuth({
      consumer: { key: consumerKey.value, secret: consumerSecret.value },
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return crypto.createHmac('sha1', key).update(base_string).digest('base64');
      },
    });

    // All request data have to been passed to the authorize method. So it's useful to have all in one object
    const request_data = {
      url: 'www.mywebsite.com/request',
      method: 'POST',
      body: ...,
    };

    const response = await httpClient(request_data.url, {
      method: request_data.method,
      headers: {
        ...oauth.toHeader(oauth.authorize(request_data, { key: tokenKey.value, secret: tokenSecret.value })),
        'Content-Type': 'application/json',
      },
      body: request_data.body,
      simple: false,
      resolveWithFullResponse: true,
    });

    callback(null, response);
  } catch (err) {
    callback(err, null);
  }
}
```

### OAuth 2.0

[OAuth 2.0](https://tools.ietf.org/html/rfc6749) is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts the user account, and authorizing third-party applications to access the user account. OAuth 2 provides authorization flows for web and desktop applications, and mobile devices. To get access OAuth 2.0 supports several different grant types. 

LivePerson Functions supports the [Client Credentials](https://oauth.net/2/grant-types/client-credentials/) as `Grant Type`. The Client Credentials are used by clients to obtain an [Access Token](https://auth0.com/docs/glossary?term=access-token) outside of the context of a user.

<img src="img/faas-oauth-client-credentials-flow.jpg" alt="LivePerson Functions OAuth" style="width:60%;"/>

<div class="important">
  It's recommended to store the <code>clientId</code> and <code>clientSecret</code> in the <a href="liveperson-functions-development-toolbelt.html#secret-storage-client">secret storage</a>
</div>

```javascript
async function lambda(input, callback) {
  const { Toolbelt } = require("lp-faas-toolbelt");
  const httpClient = Toolbelt.HTTPClient(); 
  const secretClient = Toolbelt.SecretClient();

  try {
    const authUrl = 'www.mywebsite.com/auth';
    const URL = 'www.mywebsite.com/request';

    // Get clientId and clientSecret from secret storage
    const client_id = await secretClient.readSecret('clientId');
    const client_secret = await secretClient.readSecret('clientSecret');

    // Obtain the token from the authorization server
    const token = await hpptClient(authUrl, {
        method: 'POST',
        form: {
            client_id: client_id.value,
            client_secret: client_secret.value,
            grant_type: 'client_credentials'
        },
        json: true,
        simple: true,
        resolveWithFullResponse: false
    })

    // Perform request with token (type may change) to the resource server
    const response = await httpClient(URL, {
      method: "GET", 
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      simple: false,
      resolveWithFullResponse: true
    });
    
    callback(null, token);
  } catch (err) {
    callback(err, null)
  }
}
```

### Usage of Environment Variables

The Environment Variables are used to save configurations for a specific lambda. With this approach you can separate static variables from the code.

<div class="important">
  <ul>
    <li></li>
    <li>After changing the value of an environment variable the functions must to be redeployed.</li>
    <li>Do not save sensitive data in Environment Variables!</li>
  </ul>
</div>

Environment Variables are created in the sidebar of the editor. Just unfold the tab "Environment Variables", click on "Set variable", set the desired name and value (will be of type `String`) and click on "Set".

<img src="img/faas-env-variabel.jpg" alt="LivePerson Functions Editor" style="width:80%;"/>

```javascript
async function lambda(input, callback) {
  const { Toolbelt } = require("lp-faas-toolbelt");
  const httpClient = Toolbelt.HTTPClient();

  try {
    const response = await httpClient(process.env['CUSTOMER_URL'], {
      method: "GET", 
      headers: {}, 
      simple: false,
      resolveWithFullResponse: true
    });
      
    const { statusCode, body } = response;
    if(statusCode === 200) {
      callback(null, process.env['SUCCESS_MESSAGE']);
    } else {
      callback(null, process.env['ERROR_MESSAGE']);
    }
  } catch (err) {
    callback(err, null)
  }
}
```

See [Environment Variables](liveperson-functions-development-overview.html#environment-variables) for more information about it. 

### Async/Await Functions

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use. The word `async` before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically. The keyword `await` makes JavaScript wait until that promise settles and returns its result.

It is possible to use the [async/await](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/await) functionality within LivePerson Functions. Proper error handling is important when using this.

<div class="important"> 
  To use async/await and LivePerson Functions correctly together, it is mandatory that the function is completed with a callback. Please note that the callback is always the last execution within a function. Everything afterwards is ignored and can lead to a malfunction of the function.
</div>

The example shows the HTTP-Template with async/await.

```javascript
async function lambda(input, callback) {
  // Importing the FaaS Toolbelt
  const { Toolbelt } = require("lp-faas-toolbelt");
  // Obtain an HTTPClient Instance from the Toolbelt
  const httpClient = Toolbelt.HTTPClient(); // For API Docs look @ https://www.npmjs.com/package/request-promise

  const URL = "https://www.liveperson.com";

  try {
    const response = await httpClient(URL, {
      method: "GET", // HTTP VERB
      headers: {}, // Your Headers
      simple: false, // IF true => Status Code != 2xx & 3xx will throw
      resolveWithFullResponse: true //IF true => Includes Status Code, Headers etc.
    });
      
    const { statusCode, body } = response;
    // Perform Action based on Status Code
    switch (statusCode) {
      case 200: 
        return callback(null, statusCode);
      // If not Whitelisted Proxy will reject with 403. Body contains also a message indicating that
      case 403:
        return callback(new Error("Domain is not whitelisted"), null);
      default:
        return callback(
          new Error(`Recieved unexpected status code ${statusCode}`)
        );
    }
  } catch (err) {
    callback(err, null)
  }
}
```

### Error handling in async functions

If an async call inside of a LivePerson function has no proper error handling, it could be executed longer than the maximum execution time. In such a case a `Lambda Execution is taking too long` error will be thrown. Therefore proper error handling best practices as the following are vital.

For [then-catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) promises it is necessary to have a `catch` at the end of a `then`.

```javascript
const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  // Handle error or pass it to the callback
  .catch(error => callback(error, null));
```

If a promise resolves normally, then `await` promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line. In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.

We can catch that error using `try..catch`, the same way as a regular `throw`:

```javascript
try {
  await myPromise();
} catch(error) {
  // Handle error or pass it to the callback
  callback(error, null)
} 
```

### Working with Context Session Store

The [Context Session Store](conversation-orchestrator-context-warehouse-context-session-store.html) allows you to save the conversation session state data in Conversational Cloud (e.g. agent notes), and then retrieve them later in a different conversation session.

The following steps needs to be performed before using the code examples:
* Create a [Developer Key](conversation-orchestrator-context-warehouse-context-session-store.html#developer-key) and save it to the [Secret Storage](liveperson-functions-development-storing-secrets.html)
* Create a [custom namespace](conversation-orchestrator-context-warehouse-context-session-store.html)
* Whitelist the domains `z1.context.liveperson.net`, `z2.context.liveperson.net` or `z3.context.liveperson.net` (depends on your zone).

**Save data**

The following code snippets shows how to save data to the `Context Session Store`. 

To save data to a specific sessionId you have to adjust the URL, e.g. `https://z1.context.liveperson.net/v1/account/{accountId}/faas-demo-namespace/{sessionId}/properties`. Otherwise it will use the `__default__` sessionId.

```javascript
async function lambda(input, callback) {
  const { Toolbelt } = require('lp-faas-toolbelt');
  const HttpClient = Toolbelt.HTTPClient();
  const SecretStorage = Toolbelt.SecretClient();

  // Uses the default sessionId "__default__"
  // For a specific session the url have to be "../faas-demo-namespace/{sessionId}/properties"
  const mavenApi = `https://z1.context.liveperson.net/v1/account/${process.env['accountId']}/faas-demo-namespace/properties`;

  // Data you want to save
  const body = {
    ...
  };

  try {
    // Get your maven-api-key from the secret storage
    const mavenApiKey = await SecretStorage.readSecret('mavenApiKey');

    // Perform the request to the Context Session Storage and pass a body
    await HttpClient(mavenApi, {
      method: 'PATCH',
      headers: {
        'maven-api-key': mavenApiKey.value,
      },
      simple: false,
      json: true,
      resolveWithFullResponse: false,
      body,
    });

    callback(null, null);
  } catch (error) {
    callback(error, null);
  }
}
```

**Get data**

The following code snippets shows how to get data from the `Context Session Store`. 

To get data from a specific sessionId you have to adjust the URL, e.g. `https://z1.context.liveperson.net/v1/account/{accountId}/faas-demo-namespace/{sessionId}/properties`. Otherwise it will use the `__default__` sessionId.

```javascript
async function lambda(input, callback) {
  const { Toolbelt } = require('lp-faas-toolbelt');
  const HttpClient = Toolbelt.HTTPClient();
  const SecretStorage = Toolbelt.SecretClient();

  // Uses the default sessionId "__default__"
  // For a specific session the url have to be "../faas-demo-namespace/{{sessionId}}/properties"
  const mavenApi = `https://z1.context.liveperson.net/v1/account/${process.env['accountId']}/faas-demo-namespace/properties`;

  try {
    // Get your maven-api-key from the secret storage
    const mavenApiKey = await SecretStorage.readSecret('mavenApiKey');

    // Perform the request to access the Context Session Storage
    const response = await HttpClient(mavenApi, {
      method: 'GET',
      headers: {
        'maven-api-key': mavenApiKey.value,
      },
      simple: true,
      json: true,
      resolveWithFullResponse: false,
    });

    callback(null, response);
  } catch (error) {
    callback(error, null);
  }
}
```