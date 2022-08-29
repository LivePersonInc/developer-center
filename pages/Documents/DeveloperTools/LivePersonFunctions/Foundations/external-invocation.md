---
pagename: External Invocation
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-external-invocation.html
indicator: both
---

This chapter will focus on the ability to directly call functions, also referred to as external invocation. This gives the users of our platform the ability to [trigger](liveperson-functions-foundations-concepts.html#triggers) their functions externally through their systems.

### Authentication

For invocation flows, we allow the usage of a bearer token from users, given that users have the [necessary privileges](liveperson-functions-permission-system.html), or OAuth 2.0. LivePerson services may leverage additionally OAuth 1.0.

We support the following [grant types](https://oauth.net/2/grant-types/) out of the OAuth 2.0 specification:

1. [Client Credentials](https://oauth.net/2/grant-types/client-credentials/): This is the preferred way to authorize machine-to-machine communication. Choose this option if you want to call functions from an external system.
2. [Authorization Code](https://oauth.net/2/grant-types/authorization-code/): This is a redirect based flow. Use this grant type if you want to call Functions on behalf of a Conversational Cloud user such as an Agent or Administrator.

If you want to learn more about OAuth 2.0, [learn more about it in this YouTube-Video](https://www.youtube.com/watch?v=CPbvxxslDTU).
### Authorization Process

#### Generation of client_id and client_secret

The generation of `client_id` and `client_secret` happens during the [App Installation](conversational-cloud-applications-installing-conversational-cloud-applications.html) process. Reach out to your account representative to perform this action, since there is no self-service available for this procedure. You need to provide a JSON that can be based on the following templates:

```json
{
  "client_name": "YOUR APP NAME",
  "description": "A short description",
  "grant_types": [
    "client_credentials"
  ],
  "response_types": ["token"],
  "scope": "faas.lambda.invoke"
}
```

```json
{
  "client_name": "YOUR APP NAME",
  "description": "A short description",
  "grant_types": [
    "authorization_code"
  ],
  "response_types": ["code"],
  "scope": "faas.lambda.invoke",
  "redirect_uris": [
    "http://{YOUR_APPLICATION_DOMAIN}/{CALLBACK_PATH}"
  ]
}
```

#### Get Domain of the Invocation Gateway

The Invocation Gateway is the main entry point to the LivePerson Functions platform for the invocation flow. It can be consumed via a RESTful API. The recommended way of dynamically discovering your account-specific domain is to leverage the [Service-Discovery API](domain-api.html), where you look for the `faasGW`-entry. It currently is one of the following:

* **APAC**: sy.faasgw.liveperson.net
* **EMEA**: lo.faasgw.liveperson.net
* **US**:   va.faasgw.liveperson.net

#### Get Domain of the Authorization Server

The Authorization Server will consume `client_id` and `client_secret` to generate the necessary `access_token` to access our Invocation Gateway. We recommend the [Service-Discovery API](domain-api.html) to identify your domain. Look for the `sentinel`-entry. It currently is one of the following:

* **APAC:** sy.sentinel.liveperson.net
* **EMEA:** lo.sentinel.liveperson.net
* **US:**   va.sentinel.liveperson.net

#### Performing Authentication

Using the information collected from the previous paragraphs, you can now follow the following steps for the different grant types:

{: .notice}
The **Access Token** has a fixed lifespan. To extend it, you will need to refresh it using the **Refresh Token** with the [Refresh API](authorizing-conversational-cloud-applications-methods-refresh-request.html)

Client Credentials:

1. Request an Access Token and Refresh Token using the [Token API](authorizing-conversational-cloud-applications-methods-token-request.html), and `sentinel domain`, `client_id` and `client_secret`. Please make sure to set the proper grant_type (`client_credentials`). Also, you do not need to provide a `code`, as this is required for the below-described grant type.
2. Now, you can leverage the **Access Token** as long as it has not expired using either the [Java Client](#java-client) or [JavaScript Client](#javascript-client)

Authorization Code:

1. Perform a [Authorization Request](authorizing-conversational-cloud-applications-methods-authorization-request.html) using `sentinel domain`, `client_id` and `client_secret`. You can ignore the `redirect_uri` field if you have configured it in your app installation. Otherwise, you have to provide in this step.
2. A user with FaaS-Invocation privilege needs to log in. He will be redirected automatically to a Login UI.
3. Exchange the received **Authorization Code** into an **Access Token** and **Refresh Token** using the [Token API](authorizing-conversational-cloud-applications-methods-token-request.html).
4. Now, you can leverage the **Access Token** as long as it has not expired using either the [Java Client](#java-client) or [JavaScript Client](#javascript-client)

{: .important}
You might want to check out this [example application](authorizing-conversational-cloud-applications-samples-application-login-sample-app.html) that highlights the `Authorization Code`-Flow in JavaScript.

### Function UUID

When you perform an external invocation, you need to pass the function UUID in the request URL. To retrieve the UUID of the function that should be invoked, you can retrieve it by navigating to the Deployments section in the UI and opening the [invoke screen](liveperson-functions-getting-started-development-deep-dive-ui.html#testing-your-function). The Function UUID will be displayed there.

### API

To interact with our systems, we provide libraries for JavaScript and Java. Those allow you to interact with our API stably and securely. This chapter will explore how to leverage them and what functionalities they offer. Make also sure to check out our [Error Codes & HTTP Responses](liveperson-functions-foundations-error-codes.html).

#### Java Client

Our client is available within Maven Central. To get the latest version, you can head over [to the Maven repository](https://mvnrepository.com/artifact/com.liveperson.faas/functions-client) to get the latest version. Then you can add it to your existing setup using the below XML snippet:

```xml
<dependency>
            <groupId>com.liveperson.faas</groupId>
            <artifactId>Functions-client</artifactId>
            <version>x.x.x.x</version>
</dependency>
```

{: .notice}
The default authentication method is OAuth 2.0 with grant type `client_credentials`. Please read the [chapter above](#authorization-process) for more information.

You can leverage the following method that the client exposes:

* `invokeByUUID` allows invoking a productive function by its UUID. You may check the `isImplemented` flag if the function is productive.
* `invokeByEvent` allows invoking all productive functions listening to the specified event. Use `isImplemented` to check if the event is implemented.
* `isImplemented` this method allows checking if an event or a specific UUID is implemented, i.e. has a productive function attached to it. It is a best practice to verify this before invoking.
* `getLambdas` this method will return all functions and their states that belong to a specified account

{: .important}
A more detailed version of the documentation can be found inside our [GitHub repository](https://github.com/LivePersonInc/faas-client-jdk). We welcome feature requests or bug reports via our (GitHub issue tracker)[https://github.com/LivePersonInc/faas-client-jdk/issues].

**Error Handling:**

LivePerson Functions can raise different kinds of exceptions during invocation. Generally, exceptions are wrapped in a `FaaSException` Object.
`FaaSDetailedException` occurs when the Functions service has rejected the request. For instance, if the UUID of the function for invocation request does not exist.
To get more details, we recommend using the `getFaaSError`-method. A detailed list of possible errors can be found [here](liveperson-functions-foundations-error-codes.html). `FaaSLambdaException` inherits from `FaaSDetailedException`. It is only raised during invocations if the error is caused by implementing the function, for instance, if the function returns an error on purpose or has a timeout. We recommend monitoring all the exceptions by using `e.printStackTrace()`, as this provides way more details than the error message alone. Alerting should only be done for `FaaSExceptions` or `FaaSDetailedException`.

#### JavaScript Client

Our client is available within NPM. To get the latest version, visit the NPM page of the [`@liveperson/functions-client`](https://www.npmjs.com/package/liveperson-functions-client) to get the latest version. Install the package using either npm or yarn:

```bash
$ yarn add @liveperson/functions-client
# or
$ npm install @liveperson/functions-client
```

{: .notice}
The default authentication method is OAuth 2.0 with grant type `client_credentials`. Please read the [chapter above](#authorization-process) for more information.

The client exposes the following methods:

* `invoke` this method allows to invoke a productive function by its UUID. Or all productive functions are listening to a specific event.
* `isImplemented` allows checking if an event or a specific UUID is implemented. It is a best practice to check this before invoking.
* `getLambdas` this method will return all functions and their respective states that belong to the specified account.

{: .important}
A more detailed version of the documentation can be found inside our [GitHub repository](https://github.com/LivePersonInc/faas-client-node). If you experience an issue or have a feature request, please [create a GitHub issue](https://github.com/LivePersonInc/faas-client-node/issues).

**Error Handling:**

Errors with the name `FaaSLambdaError` are raised when the invocation fails due to a custom implementation error. The client internally uses [verror](https://github.com/joyent/node-verror). We recommend logging the `stack` to get detailed information about the root cause. A list of available error causes can be found [here](liveperson-functions-foundations-error-codes.html).

```javascript
try {
  // invoke here
  …
} catch (error) {
  /**
   * LivePerson FunctionsLambdaErrors occur when the function fails due to the implementation.
   * These exceptions are not relevant for alerting because there are no issues with the service itself.
   */
  if (error.name === "FaaSLambdaError") {
    console.info(error.stack, "Error caused by implementation of function.");
  } else {
    console.error(error.stack, "Something unexpected happened.");
  }
}
```
