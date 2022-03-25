---
pagename: Examples
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
permalink: liveperson-functions-examples.html
indicator: both
---

# Examples
When programming Functions, you will often come across similar use cases. Here we will show you some common examples for such use cases and how you could solve them.

## OAuth 1
OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the login credentials. LivePerson Functions offers the possibility to use the [oauth-1.0a](https://www.npmjs.com/package/oauth-1.0a) package to support the [OAuth 1 authorization flow](https://oauth1.wp-api.org/docs/basics/Auth-Flow.html).

The following code shows an example that performs a `POST` request with Authorization `Header`.

{: .notice}
  It's recommended to store the `consumerKey`, `consumerSecret`, `tokenKey` and `tokenSecret` in the [secret storage](liveperson-functions-toolbelt-documentation-secret-client.html)

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
## OAuth 2

[OAuth 2.0](https://tools.ietf.org/html/rfc6749) is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts the user account and authorizing third-party applications to access the user account. OAuth 2 provides authorization flows for web and desktop applications and mobile devices. To get access OAuth 2.0 supports several different grant types.

LivePerson Functions supports the [Client Credentials](https://oauth.net/2/grant-types/client-credentials/) and [Refresh Token](https://oauth.net/2/grant-types/refresh-token/) as `Grant Type`.

**Client Credentials**

Clients use the Client Credentials to obtain an [Access Token](https://auth0.com/docs/glossary?term=access-token) outside of the context of a user.

<img src="img/functions/functions_examples_oauth.png" alt="LivePerson Functions OAuth" class="fancyimage"/>

{: .notice}
It's recommended to store the `clientId` and `clientSecret` in the [secret storage](liveperson-functions-development-toolbelt.html#secret-storage-client)


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

Clients use the Refresh Token grant type to exchange a refresh token for an access token when the access token has expired. We recommend refreshing the token using a scheduled function. Refreshed details are written back to the [secret storage](liveperson-functions-development-toolbelt.html#secret-storage-client) for further usage in other functions.

<img src="img/functions/functions_examples_oauth2_refresh_token.png" alt="LivePerson Functions OAuth2 Refresh Token" class="fancyimage"/>

The following reduced code snippet shows how to obtain the refresh and access token.

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
### Caching inside lambdas
A simple way to make your function more performant and more reliable is caching requested data outside of the context of your function. In the following example, we use caching to improve the interaction with the secret store. Caching the secret makes your code highly reliable against problems that might arise from network congestion. Additionally, it enhances the performance of your functions since you omit unnecessary network calls. The following code uses an environment variable `TTL` to indicate how long to keep the data in memory.

{: .notice}
This cache is in-memory. If your function is down-scaled due to inactivity, data in the cache will be lost. Likewise, if your function is upscaled to multiple instances, there is no mechanism to synchronize the caches.

```javascript
const { Toolbelt } = require('lp-faas-toolbelt');
const secretClient = Toolbelt.SecretClient();

class CacheController {
        constructor() {
                this.cache = new Map();
        }
        setValue(key, value, ttl = 5000) {
                this.cache[key] = {
                        value: value,
                        _expiry: Date.now() + ttl,
                };
        }
        getValue(key) {
                const entry = this.cache[key]
                if (!entry)
                        return;
                if (entry._expiry < Date.now()) {
                        this.cache.delete(key)
                        return
                } else {
                        return entry.value
                }
        }
}

let cache = new CacheController();

async function lambda(input, callback) {
        const secret = await getSecret("YOUR_SECRET");
        // YOUR CODE WHICH NEEDS SECRET
        callback(null, secret);
}

async function getSecret(key) {
        try {
                const secret = cache.getValue(key);
                if (secret) {
                        console.info("Secret taken from cache")
                        return secret;
                } else {
                        let secret = await secretClient.readSecret(key);
                        cache.setValue(key, secret, process.env['TTL'])
                        return secret
                }
        } catch (error) {
                console.error(`received following error message: ${error.message}`);
        }
}
```
### Inform customers about the maximum wait time
The lambda listens to the *Messaging Conversation Routing* event in this simple example. We extract the `skillId` from the `payload` and use it to find available agents for this skill. If we do not find one, we communicate this to the customer. If at least one agent is available, we query the LivePerson *Message Queue Health* API to receive an approximate wait time. This information is lastly communicated to the customer.

```javascript
const { Toolbelt, LpServices } = require('lp-faas-toolbelt');
const lpClient = Toolbelt.LpClient();

const getMaximumWaitTime = async (skillId) => {
        try {
                const options = {
                        method: 'GET',
                        json: true,
                        appKeySecretName: 'API_KEYS'
                };

                const response = await lpClient(
                        LpServices.LE_DATA_REPORTING,
                        `/operations/api/account/${process.env.BRAND_ID}/msgqueuehealth/current/?skillIds=${skillId}&v=1`,
                        options
                );
                if (
                        response &&
                        response.skillsMetrics &&
                        response.skillsMetrics[skillId]
                ) {
                        return Math.ceil(response.skillsMetrics[skillId]
                                .waitTimeForAgentAssignment_90thPercentile / 60000);
                }

                return false;

        } catch (error) {
                console.error(`Received following error message: ${error.message}`);
                return false;
        }

};

const isAgentAvailable = async (skillId) => {
        try {
                const options = {
                        method: 'POST',
                        json: true,
                        appKeySecretName: 'API_KEYS',
                        body: { skillIds: [skillId] }
                };

                const response = await lpClient(
                        LpServices.MSG_HIST,
                        `/messaging_history/api/account/${process.env.BRAND_ID}/agent-view/status`,
                        options
                );

                if (!response.agentStatusRecords.length > 0) {
                        return false;
                }

                return response.agentStatusRecords.some(({ currentStatus }) => currentStatus === 'ONLINE');
        } catch (error) {
                console.error(`Received following error message: ${error.message}`);
                return false;
        }

};

async function lambda(input, callback) {
        const { routing: { newSkillId } } = input.payload;
        try {
                const isAgentAvailable = await isAgentAvailable(newSkillId);
                if (!isAgentAvailable) {
                        return callback(null, [{ type: 'systemMessage', text: "We will get back to you as soon as possible" }]);
                }
                const wait = await getMaximumWaitTime(newSkillId);
                if (wait && wait >= process.env['THRESHOLD']) {
                        return callback(null, [{ type: 'systemMessage', text: `We are currently busy. We'll get back to you in ${wait}min` }]);
                } else {
                        return callback("Failed to receive wait time", null);
                }
        } catch (err) {
                return callback(err, null);

        }
}
```
