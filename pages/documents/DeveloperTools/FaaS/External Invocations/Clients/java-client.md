---
pagename: Java Client
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
permalink: liveperson-functions-java-client.html
indicator: both
redirect_from:
---

This section describes how to set up the Java Client so it is ready to be used for calling LivePerson functions from outside LivePerson's platform.

## Setting up the client
### Step 1: Generate necessary keys for OAuth 2.0 authentication

For our default implementation we use OAuth 2.0 with Client Credentials. Thus you will have to generate a client ID and client secret using [this](https://developers.liveperson.com/liveperson-functions-external-invocations-client-credentials.html) guide.

### Step 2: Add the client as depedency in maven

```
<dependency>
            <groupId>com.liveperson.faas</groupId>
            <artifactId>FaaSClientOpenSource</artifactId>
            <version>1.0.0.0-SNAPSHOT</version>
</dependency>
```

## Provided Methods

The following methods functionality is provided:
*   invokeByUUID which allows to call a function by its specific UUID
*   invokeByEvent which allows to call all functions implementing a given event
*   isImplemented which allows to test whether a method, that implements a given event, exists
*   getLambdasOfAccount which returns all lambdas belonging to a specific user account

More detailed documentation can be found [here.](https://lpgithub.dev.lprnd.net/RnD-Mannheim/faas-client/tree/feature/open-source)


## Exception Handling

LivePerson Functions can raise different kind of exceptions. General exceptions are wrapped in a FaaSException. 
FaaSDetailedExceptions occur when the request has been rejected by the service. 
For instance if the UUID of the lambda for invocation request does not exist. 
In order to get more details we recommend using the getFaaSError method. 
A detailed list of possible errors can be found [here](https://liveperson-functions-error-codes.html). FaaSLambdaException inherits from FaaSDetailedException. 
It is only raised during invocations, if the error is caused by the implementation of the lambda itself. 
For instance if the lambda returns an error on purpose or the lambda has a timeout. 
We recommend to monitor all the exceptions by using e.printStackTrace(), as this provides way more details then the error message alone. 
Alerting should only be done for FaaSExceptions or FaaSDetailedException.

