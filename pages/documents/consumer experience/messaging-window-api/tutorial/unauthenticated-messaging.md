---
title: Unauthenticated Messaging
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: Tutorials

order: 40


permalink: consumer-int-unauth-authentication.html
keywords: oauth2.0 jwt token
indicator: messaging
---

In this tutorial you will learn how to create a token for unathenticated consumers.

### Prerequisites
In order to work with unauthenticated conversation, your account must be provisioned by an LPA (LivePerson Administrator) to enable the ``Messaging.Un_Auth_Messaging`` feature and create a unauthenticated connector (ACR0 Connector). The LPA should supply to you the ``CONNECTOR_ID`` that is required in beginning of the flow.

First, lanuch a shell for your account with the ``CONNECTOR_ID`` supplied by your LPA:

```sh
docker run --env LP_ACCOUNT=__YOUR_ACCOUNT_ID__ --env LP_CONN_ID=__CONNECTOR_ID__ -it lpinc/shell
```

### Step 1 - Create an Unauthenticated External JWT

```sh
LP_EXT_JWT=`curl -X POST -H "Content-Type: application/json" https://$LP_IDP/api/account/$LP_ACCOUNT/anonymous/authorize | jq -r .token`
```


### Step 2 - Exchange the External JWT with internal token

```sh
LP_JWT=`curl -X POST -H "Content-Type: application/json" -d '{"id_token" : "'$LP_EXT_JWT'"}' https://$LP_IDP/api/account/$LP_ACCOUNT/app/$LP_APP_CONN_ID/authenticate?v=3.0 | jq -r .token`
```

### Step 3 - Create a Conversation

Now you can continue the regular flow as documented in the [Getting Started](consumer-int-getting-started.html#step-3---connect-to-the-messaging-service).


### Step 4 - Refresh an External Token
Once the external token is expired (10 minutes by default), you can still refresh it for a certain period of time (24 hours by default) using the following call:

```sh
LP_EXT_JWT=`curl -X POST -H "Content-Type: application/json" -d '{ "id_token":"'$LP_EXT_JWT'" }' https://$LP_IDP/api/account/$LP_ACCOUNT/anonymous/authorize | jq -r .token`
```

Make sure that the ``LP_EXT_JWT`` contains the previous external token you created in step 1. Using the fresh external token you can continue to step 2.

{% include links.html %}
