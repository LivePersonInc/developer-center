---
pagename: JavaScript Client
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
permalink: liveperson-functions-external-invocations-javascript-client.html
indicator: both
redirect_from:
    -
---

This section gives you an overview of the functionality of the JavaScript Functions client. The client includes functionality to retrieve all lambdas and to invoke them via a `lambda UUID` or `event ID`. 

The full documentation can be found in its GitHub repository [here](https://github.com/LivePersonInc/faas-client-node).

## Setting up the client

### Step 1: Set authentication method

For our default implementation we use OAuth 2.0 with Client Credentials. Thus you will have to generate a client ID and client secret using [this](https://developers.liveperson.com/liveperson-functions-external-invocations-client-credentials.html) guide. Alternatively you can provide your own method of authentication. This could come in handy if you want to use the method getLambdas as it does not support our default authentication (OAuth 2.0) yet but still relies on OAuth 1.0. By passing your own implementation to the client you can still generate headers valid for OAuth 1.0.

### Step 2: Install the client

```bash
yarn add @liveperson/functions-client
```

or

```bash
npm install @liveperson/functions-client
```

### Provided Methods

The following methods functionality is provided:

* `invoke` which allows to call a function by its specific UUID or invoke all functions that implement a specific event
* `isImplemented` which allows to test whether a method, that implements a given event, exists
* `getLambdas` which returns all lambdas belonging to the user account specified in the client

More detailed documentation can be found [here.](https://lpgithub.dev.lprnd.net/RnD-Mannheim/faas-client-js/tree/develop)

### Error handling

Errors with the name `FaaSLambdaError` are raised when the invocation fails due to a custom implementation error. The client internally uses [verror](https://github.com/joyent/node-verror). We recommend to log the `stack` in order to get detailed information about the root cause.

```javascript
try {
  // invoke here
  ...
} catch (error) {
  /**
   * LivePerson FunctionsLambdaErrors occur when the lambda fails due to the implementation.
   * These exceptions are not relevant for alerting, because there are no issues with the service itself.
   */
  if (error.name === "FaaSLambdaError") {
    console.info(error.stack, "Error caused by implementation of lambda.");
  } else {
    console.error(error.stack, "Something unexpected happened.");
  }
}
```

More detailed information on errors that can occur can be found [here.](/liveperson-functions-external-invocations-error-codes.html)
