---
pagename: Common Examples
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-common-examples.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-common-examples.html
---

The following section shows some common examples for using the LivePerson Functions platform.

- [OAuth 1](#oauth-1)
- [OAuth 2.0](#oauth-20)
- [Working with Conversation Context Service](#working-with-conversation-context-service)

### OAuth 1

OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the login credentials. LivePerson Functions offers the possibility to use the [oauth-1.0a](https://www.npmjs.com/package/oauth-1.0a) package to support the [OAuth 1 authorization flow](https://oauth1.wp-api.org/docs/basics/Auth-Flow.html).

The following code shows an example which performs a `POST` request with Authorization `Header`.

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
        // toHeader() returns the Authorization request header and assigns it to the header using the spread operator
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

LivePerson Functions supports the [Client Credentials](https://oauth.net/2/grant-types/client-credentials/) and [Refresh Token](https://oauth.net/2/grant-types/refresh-token/) as `Grant Type`. 

**Client Credentials**

The Client Credentials are used by clients to obtain an [Access Token](https://auth0.com/docs/glossary?term=access-token) outside of the context of a user.

<img src="img/faas-oauth-client-credentials-flow.jpg" alt="LivePerson Functions OAuth" style="width:50%;"/>

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
    const token = await httpClient(authUrl, {
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

**Refresh Token**

The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired. It's recommended to run a scheduled function which refreshes the access token for the defined expiration time and stores the new access token and refresh token in the [secret storage](liveperson-functions-development-toolbelt.html#secret-storage-client) for further usage in other functions.

<img src="img/faas-common-examples-oauth2-refresh-token.jpg" alt="LivePerson Functions OAuth2 Refresh Token" style="width:40%;"/>

The following reduced code snippet shows an example on how to obtain the refresh and access token.

```javascript
  const client_id = await secretClient.readSecret('clientId');
  const client_secret = await secretClient.readSecret('clientSecret');
  let refreshToken = await secretClient.readSecret('refreshToken');

  // Obtain the new access and refresh token from the authorization server by sending client credentials and refresh token
  const tokenResponse = await httpClient(authUrl, {
      method: 'POST',
      form: {
          client_id: client_id.value,
          client_secret: client_secret.value,
          refresh_token: refreshToken.value,
          grant_type: 'refresh_token'
      },
      json: true,
      simple: true,
      resolveWithFullResponse: false
  })

  // write/update access token to secret storage
  await secretClient.writeSecret({
    key: 'accessToken',
    value: tokenResponse.accessToken
  });

  // write/update refresh token to secret storage
  await secretClient.writeSecret({
    key: 'refreshToken',
    value: tokenResponse.refreshToken
  });
```

### Working with Conversation Context Service

The [Conversation Context Service](conversation-orchestrator-conversation-context-service-conversation-context-service.html) allows you to save the conversation session state data in Conversational Cloud (e.g. agent notes), and then retrieve them later in a different conversation session.

The following steps need to be performed before using the code examples:
* Create a [Developer Key](conversation-orchestrator-conversation-context-service-conversation-context-service.html#developer-key) and save it to the [Secret Storage](liveperson-functions-development-storing-secrets.html)
* Create a [custom namespace](conversation-orchestrator-conversation-context-service-conversation-context-service.html)
* Whitelist the domains `z1.context.liveperson.net`, `z2.context.liveperson.net` or `z3.context.liveperson.net` (depends on your zone).

**Save data**

The following code snippets shows how to save data to the `Conversation Context Service`. 

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

The following code snippets shows how to get data from the `Conversation Context Service`. 

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