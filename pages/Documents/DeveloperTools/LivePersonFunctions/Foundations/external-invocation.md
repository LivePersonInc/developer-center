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

In this chapter we will focus a bit more on the ability to directly call a functions, which is also refer to as external invocation. This gives the users of our platform the ability to [trigger](liveperson-functions-foundations-concepts.html#triggers) there functions externally through their own systems.

### Authentication

For invocation flows we allow the usage of bearer from an users, given he has the [necessary privileges](liveperson-functions-permission-system.html), or OAuth 2.0. LivePerson services may leverage additionally OAuth 1.0.

We support the following [grant types](https://oauth.net/2/grant-types/) out of the OAuth 2.0 specification. If you want to learn more about OAuth 2.0 check out [this video](https://www.youtube.com/watch?v=CPbvxxslDTU):

1. [Client Credentials](https://oauth.net/2/grant-types/client-credentials/): This is the preferred way to authorize for machine-to-machine communication. Choose this option if you want to call functions from an external system.
2. [Authorization Code](https://oauth.net/2/grant-types/authorization-code/): This is a redirect based flow. Use this grant type if you want to call Functions on behalf of a Conversational Cloud user such as an Agent or Administrator.

### Authorization Process

#### Generation of client_id & client_secret

The generation of the `client_id` & `client_secret` happens during the [App Installation](conversational-cloud-applications-installing-conversational-cloud-applications.html) process. Please be aware that this process is only performable by internal teams at the moment. You simply need to provide a JSON which can be based on the following templates:

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

#### Get Domain of our Invocation Gateway

The Invocation Gateway is the main entry-point to our platform for the invocation flow. It can be consumed via a RESTful API. The recommended way of dynamically discovering your account specific domain is to leverage the [Service-Discovery API](domain-api.html), where you are looking for the `faasGW`-entry. It is usually one of the following:

* **APAC**: sy.faasgw.liveperson.net
* **EMEA**: lo.faasgw.liveperson.net
* **US**:   va.faasgw.liveperson.net

#### Get Domain of the Authorization Server

The Authorization Server will consume the `client_id` & `client_secret` to generate the necessary `access_token` to access our Invocation Gateway. In order to identify your domain we recommend the [Service-Discovery API](domain-api.html), where you are looking for the `sentinel`-entry. It is usually one of the following:

* **APAC:** sy.sentinel.liveperson.net
* **EMEA:** lo.sentinel.liveperson.net
* **US:**   va.sentinel.liveperson.net

#### Performing Authentication

Using the information collected from the previous paragraphs you may now follow the following steps for the different grant types:

{:.notice}
The **Access Token** has a fixed lifespan in order to extend it you will need to refresh it, using the **Refresh Token** with the [Refresh API](authorizing-conversational-cloud-applications-methods-refresh-request.html)

Client Credentials:

1. Request an Access Token & Refresh Token using the [Token API](authorizing-conversational-cloud-applications-methods-token-request.html) using the `sentinel domain`, `client_id` & `client_secret`. Please make sure to set the proper grant_type (`client_credentials`). Also you don't need to provide a `code`, as this is required for the below described grant type.
2. Now you can leverage the **Access Token** as long as it has not expired using either the [Java Client](#java-client) or [Javascript Client](#javascript-client)

Authorization Code:

1. Perform a [Authorization Request](authorizing-conversational-cloud-applications-methods-authorization-request.html) using the `sentinel domain`, `client_id` & `client_secret`. Please be aware if you provided the `redirect_uri` in your app installation, you don't need to provide it here. If you did not do that, you have to provide it here.
2. User with FaaS-Invocation needs to login, he should be redirected automatically to a Login UI.
3. Exchange the received **Authorization Code** into an **Access Token** & **Refresh Token** using the [Token API](authorizing-conversational-cloud-applications-methods-token-request.html).
4. Now you can leverage the **Access Token** as long as it has not expired using either the [Java Client](#java-client) or [Javascript Client](#javascript-client)

{:.important}
You might want to check out this [example application](authorizing-conversational-cloud-applications-samples-application-login-sample-app.html) that highlights the `Authorization Code`-Flow in JavaScript.

### API

In order to interact with our systems we are providing libraries for javascript and java. Those allow you interact with our API in a stable and secure way. Within this chapter we will explore how to leverage them and what functionalities they offer. Make also sure to checkout our [Error Codes & HTTP Responses](liveperson-functions-foundations-error-codes.html).

#### Java Client

Our client is available within Maven Central. You can head over [here](https://mvnrepository.com/artifact/com.liveperson.faas/functions-client) to get the latest version. Than you can add it to your existing setup using the below xml snippet:

```xml
<dependency>
            <groupId>com.liveperson.faas</groupId>
            <artifactId>Functions-client</artifactId>
            <version>x.x.x.x</version>
</dependency>
```

{:.notice}
The default Authentication method is OAuth 2.0 with grant type `client_credentials`. Please check the [above chapter](#authorization-process) on the necessary steps

You can leverage the following method that are exposed by the client:

* `invokeByUUID` this method allows to invoke a productive function by it's UUID. You may leverage `isImplemented` to check if the function is productive
* `invokeByEvent` this method allows to invoke all productive functions listening to the specified event. Make sure to leverage `isImplemented` to check if the event is implemented
* `isImplemented` this method allows to check if an event or a specific uuid is implemented. It is a best practice to check this prior to invoking
* `getLambdas` this method will return all functions and there states that belong to specified account

{:.important}
A more detailed version of the documentation can be found inside our [github repository](https://github.com/LivePersonInc/faas-client-jdk). If you experience an issue or have a wish, please create a github issue.

**Error Handling:**

LivePerson Functions can raise different kind of exceptions. General exceptions are wrapped in a `FaaSException`.
`FaaSDetailedExceptions` occur when the request has been rejected by the service. For instance if the UUID of the lambda for invocation request does not exist.
In order to get more details we recommend using the `getFaaSError`-method. A detailed list of possible errors can be found [here](liveperson-functions-foundations-error-codes.html). `FaaSLambdaException` inherits from `FaaSDetailedException`. It is only raised during invocations, if the error is caused by the implementation of the function itself.
For instance if the function returns an error on purpose or the function has a timeout. We recommend to monitor all the exceptions by using e.printStackTrace(), as this provides way more details then the error message alone. Alerting should only be done for `FaaSExceptions` or `FaaSDetailedException`.

#### JavaScript Client

Our client is available within NPM. You can head over [here](https://www.npmjs.com/package/liveperson-functions-client) to get the latest version. Than you can leverage either npm or yarn to install it as a dependency:

```bash
$ yarn add @liveperson/functions-client

$ npm install @liveperson/functions-client
```

{:.notice}
The default Authentication method is OAuth 2.0 with grant type `client_credentials`. Please check the [above chapter](#authorization-process) on the necessary steps

You can leverage the following method that are exposed by the client:

* `invoke` this method allows to invoke a productive function by it's UUID. Or all productive function listening to an specific event.
* `isImplemented` this method allows to check if an event or a specific uuid is implemented. It is a best practice to check this prior to invoking
* `getLambdas` this method will return all functions and there states that belong to specified account

{:.important}
A more detailed version of the documentation can be found inside our [github repository](https://github.com/LivePersonInc/faas-client-node). If you experience an issue or have a wish, please create a github issue.

**Error Handling:**

Errors with the name `FaaSLambdaError` are raised when the invocation fails due to a custom implementation error. The client internally uses [verror](https://github.com/joyent/node-verror). We recommend to log the `stack` in order to get detailed information about the root cause. A list of available error causes can be found [here](liveperson-functions-foundations-error-codes.html).

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
