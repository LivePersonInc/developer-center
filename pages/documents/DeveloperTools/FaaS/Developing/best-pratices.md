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

The following section will show some best practices for using the LivePerson Functions platform.

- [OAuth 1](#oauth-1)
- [OAuth 2.0](#oauth-20)
- [Usage of Environment Variables](#usage-of-environment-variables)
- [Error handling in async functions](#error-handling-in-async-functions)
- [Async/Await Functions](#asyncawait-functions)
- [Limitations of Timeouts](#limitations-of-timeouts)

### OAuth 1

LivePerson Functions offers the possibility to use the [oauth-1.0a](https://www.npmjs.com/package/oauth-1.0a) package. 

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

LivePerson Functions supports the Client Credentials as `Grant Type`. The [Client Credentials](https://oauth.net/2/grant-types/client-credentials/) grant type is used by clients to obtain an access token outside of the context of a user. 

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

    // Perform request with token (type may change)
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
  Do not save sensitive data in Environment Variables!
</div>

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

### Error handling in async functions

If an async call has no correct error handling implemented the function will not end in the execution time and the error `Lambda Execution is taking too long` will be thrown.

For [then-catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) promises it is necessary to have a `catch` at the end of a `then`.

```javascript
const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

For [async-await](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/await) a try-catch is necessary. 

```javascript
try {
  await myPromise();
} catch(error) {
  // handle error
} 
```

### Async/Await Functions

It is possible to use the [async/await](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/await) functionality within the LivePerson Functions. It's important to wrap the await in a try/catch, otherwise the function will have some weird behavior and errors will not be catched and displayed correctly.

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

### Limitations of Timeouts

The usage of `setTimeout()` in LivePerson Functions must be handled with care. 
* Functions cannot exceed the runtime of **30 secconds**. The error `Lambda Execution is taking too long` will thrown.
* If you execute multiple functions with a `setTimeout()` implemented, the event loop of the service will fill up and even functions with a lower execution time than 30 seconds will take longer and may reach the max. execution time.
