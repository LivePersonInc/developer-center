---
pagename: Best Practices
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-best-practices.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-best-practices.html
  - liveperson-functions-development-best-practices.html
  - liveperson-functions-development-best-practices.html#making-functions-configurable
---

The following section shows some best practices for using the LivePerson Functions platform.

- [Using Async/Await in Functions](#using-asyncawait-in-functions)
- [Making Functions configurable](#making-functions-configurable)

### Using Async/Await in Functions

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It's recommended to use this notation, because it provides more readable code and bypasses `then..catch`-chains. It’s surprisingly easy to understand and use. The word `async` before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically. The keyword `await` makes JavaScript wait until that promise settles and returns its result.

It is possible to use the [async/await](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/await) functionality within LivePerson Functions. Proper error handling is important when using this. If an async call inside of a LivePerson function has no proper error handling, it could be executed longer than the maximum execution time. In such a case a `Lambda Execution is taking too long` error will be thrown.

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

### Making Functions configurable

It's suggested to use Environment Variables to make a function more configurable. With this approach you can separate static variables and configurations from the code, to make it more clean and readable.

For example if you have a function which is triggered by the `Messaging Conversation End`-Event and you want to process the code only if the `closeReason` is equal to `AGENT` or `CONSUMER` then it's a good use case to save this configuration to an Environment Variable (e.g. `['AGENT', 'CONSUMER']`).

```javascript
function lambda(input, callback) {
  const conversation = input.payload;
  const closeReason = conversation.end.closeReason
  if (process.env['CUSTOM_CLOSE_REASON'].includes(closeReason)) {
    // Some processing...
  }
  callback(null, "OK");
}
```

<div class="important">
  <ul>
    <li></li>
    <li>After changing the value of an Environment Variable the functions must to be redeployed.</li>
    <li>Do not save sensitive data in Environment Variables!</li>
    <li>Environment Variables will be served as <code>String</code>. If you save any other type of data, you have to parse it properly.</li>
  </ul>
</div>

See [Environment Variables](liveperson-functions-development-overview.html#environment-variables) for more information about it.

### Design your Lambda for idempotency

When creating Liveperson Functions an [at least once](https://en.wikipedia.org/wiki/Reliability_(computer_networking)) approach to invocations was chosen. This means that every invocation should be guaranteed to run at a minimum one time but can also run multiple times. In certain edge cases when the invocation of a lambda fails (e.g. a network corruption occurs) automatic retries can occur. These retries can manifest in multiple invocations with the same payload.

Therefore you should always try to design your lambda in an [idempotent](https://en.wikipedia.org/wiki/Idempotence) manner. Multiple invocations with the same payload should not change the result of the invocation beyond its initial try. Failing to do so can lead to errors, unwanted side effects, and bad performance.

One way to mitigate this issue is using the [Context Session Store](liveperson-functions-developing-with-faas-data-storage.html). Saving payload identifiers (e.g. the ``convId``) to the context store and later retrieving it at the start of an invocation can help mitigate problems with duplicate invocations.

```javascript
async function lambda(input, callback) {
    const { Toolbelt } = require('lp-faas-toolbelt');
    const contextClient = Toolbelt.ContextServiceClient({ apiKey: 'YOUR_DEVELOPER_KEY', accountId: 'YOUR_ACCOUNT_ID' });

    const conversationId = input.payload.general.convId
    let hasConversationIdBeenServed = false;

    // Read from context session store if conversationId was already served
     try {
        hasConversationIdBeenServed = await contextClient.getPropertyInSession(
            'PastInvocations',
            'hasBeenServed',
            conversationId
        );
        console.info(`conversationId ${conversationId} has been served: ${hasConversationIdBeenServed}`);
    } catch (error) {
        console.error('Could not fetch property from the context store');
    }

    if (hasConversationIdBeenServed) {
        callback(null, "Duplicate invocation")
    }

    // Regular invocation logic here ...


    // Save converstionId to store
    try {
        // If no sessionId is passed, it will take the __default__ session.
        await contextClient.updatePropertiesInNamespace(
            'PastInvocations',
            {
                hasBeenServed: true,
            },
            conversationId
        );
    } catch (error) {
        console.error('Could not update properties in the context store');
    }

    callback(null, `Done`);
}
```