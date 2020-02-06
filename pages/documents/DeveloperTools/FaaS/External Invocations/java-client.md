---
pagename: Java Client
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
permalink: liveperson-functions-external-invocations-java-client.html
indicator: both
redirect_from:
    -
---

This section describes how to set up the Java Client so it is ready to be used for calling LivePerson functions from outside LivePerson's platform. It offers functionality to retrieve all lambdas and to invoke them via lambda UUID or event ID.

### Setting up the client

## Step 1: Set authentication method

For our default implementation we use OAuth 2.0 with Client Credentials. Thus you will have to generate a client ID and client secret using [this](https://developers.liveperson.com/liveperson-functions-external-invocations-client-credentials.html) guide. Alternatively you can provide your own method of authentication. This is needed if you want to use the client to get all lambdas as it still relies on OAuth 1.0.

More detailed documentation can be found [here.](https://lpgithub.dev.lprnd.net/RnD-Mannheim/faas-client/tree/develop)

## Step 2: Add the client as depedency in maven

```xml
<dependency>
            <groupId>com.liveperson.faas</groupId>
            <artifactId>Functions-client</artifactId>
            <version>1.0.0.0</version>
</dependency>
```

## Provided Methods

The following methods functionality is provided:

* invokeByUUID which allows to call a function by its specific UUID
* invokeByEvent which allows to call all functions implementing a given event
* isImplemented which allows to test whether a method, that implements a given event, exists
* getLambdas which returns all lambdas belonging to the user account specified in the client

More detailed documentation can be found [here.](https://lpgithub.dev.lprnd.net/RnD-Mannheim/faas-client/tree/develop)

## Exception Handling

LivePerson Functions can raise different kind of exceptions. General exceptions are wrapped in a FaaSException.
FaaSDetailedExceptions occur when the request has been rejected by the service.
For instance if the UUID of the lambda for invocation request does not exist.
In order to get more details we recommend using the getFaaSError method.
A detailed list of possible errors can be found [here](liveperson-functions-external-invocations-error-codes.html). FaaSLambdaException inherits from FaaSDetailedException.
It is only raised during invocations, if the error is caused by the implementation of the lambda itself.
For instance if the lambda returns an error on purpose or the lambda has a timeout.
We recommend to monitor all the exceptions by using e.printStackTrace(), as this provides way more details then the error message alone.
Alerting should only be done for FaaSExceptions or FaaSDetailedException.
