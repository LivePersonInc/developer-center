---
pagename: Java Client
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: External Invocations
permalink: liveperson-functions-external-invocations-java-client.html
indicator: both
redirect_from:
    -
---

This section gives you an overview of the functionality of the Java Functions client. This client includes functionality to retrieve all lambdas and to invoke them via a `lambda UUID` or `event ID`.

The full documentation can be found in its GitHub repository [here](https://github.com/LivePersonInc/faas-client-jdk).

### Setting up the client

## Step 1: Set authentication method

For our default implementation we use OAuth 2.0 with Client Credentials. Thus you will have to generate a client ID and client secret using [this](https://developers.liveperson.com/liveperson-functions-external-invocations-client-credentials.html) guide. Alternatively you can provide your own method of authentication. This could come in handy if you want to use the method `getLambdas` for example, as it does not support our default authentication (OAuth 2.0) yet but still relies on OAuth 1.0. By passing your own implementation to the client you can still generate headers valid for OAuth 1.0.

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

* `invokeByUUID` which allows to call a function by its specific UUID
* `invokeByEvent` which allows to call all functions implementing a given event
* `isImplemented` which allows to test whether a method, that implements a given event, exists
* `getLambdas` which returns all lambdas belonging to the user account specified in the client

More detailed documentation can be found [here.](liveperson-functions-development-overview.html)

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