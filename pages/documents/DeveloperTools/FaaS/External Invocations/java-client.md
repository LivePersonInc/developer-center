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

This section gives you an overview of the functionality of the Java functions client. This client includes functionality to retrieve all lambdas and to invoke them via a `lambda UUID` or `event ID`.

The full documentation for the client can be found in its GitHub repository [here](https://github.com/LivePersonInc/faas-client-jdk).

## Setting up the client

### Step 1: Set authentication method

For our default implementation we use OAuth 2.0 with Client Credentials. Thus you will have to generate a client ID and client secret using [this](https://developers.liveperson.com/liveperson-functions-external-invocations-client-credentials.html) guide. Alternatively you can provide your own method of authentication. This could come in handy if you want to use the method getLambdas as it does not support our default authentication(OAuth 2.0) yet but still relies on OAuth 1.0. By passing your own implementation to the client you can still generate headers valid for OAuth 1.0.

### Step 2: Add the client as depedency in Maven

```xml
<dependency>
            <groupId>com.liveperson.faas</groupId>
            <artifactId>functions-client</artifactId>
            <version>1.0.0</version>
</dependency>
```

### Provided Methods

The following methods are provided:

* `invokeByUUID` which allows calling a function by its specific UUID
* `invokeByEvent` which allows calling all functions implementing a given event
* `isImplemented` which allows testing of whether a method, which implements a given event, exists
* `getLambdas` which returns all lambdas belonging to the user account specified in the client

More detailed documentation can be found [here](https://github.com/LivePersonInc/faas-client-jdk).
