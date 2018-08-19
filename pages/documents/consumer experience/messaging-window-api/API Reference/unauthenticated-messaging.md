---
title: Unauthenticated Messaging
sitesection:
level2: Consumer Experience
level3: Messaging Window API
level4: Tutorials
order: 40
permalink: consumer-int-unauth-authentication.html
indicator: messaging
---

LiveEngage expects to receive a token for every messaging conversation. These tokens identify unique consumers for LiveEngage and make sure that all consumers appear with their unique details displayed to the agent once they start a conversation. If you would like to have unauthenticated messaging conversations (where the consumer remains "anonymous"), you will need to provide an "unauthenticated" (not containing any details on the consumer) ID Token to LiveEngage. In this tutorial you will learn how to create and use such a token.


### Prerequisites

In order to use unauthenticated tokens, your account must be provisioned by an LPA (LivePerson Administrator) to enable the `Messaging.Un_Auth_Messaging` feature and create an unauthenticated connector (ACR0 Connector). The LPA should supply you with the `CONNECTOR_ID` parameter that is required in the beginning of the flow below.

### Creating and Using a Token for Unauthenticated Messaging Conversations

First, launch a shell for your account with the ``CONNECTOR_ID`` supplied by your LPA:

```sh
docker run --env LP_ACCOUNT=__YOUR_ACCOUNT_ID__ --env LP_CONN_ID=__CONNECTOR_ID__ -it lpinc/shell
```

#### Step 1 - Create an Unauthenticated External JWT

```sh
LP_EXT_JWT=`curl -X POST -H "Content-Type: application/json" https://$LP_IDP/api/account/$LP_ACCOUNT/anonymous/authorize | jq -r .token`
```


#### Step 2 - Exchange the Unauthenticated External JWT with an Internal Token

```sh
LP_JWT=`curl -X POST -H "Content-Type: application/json" -d '{"id_token" : "'$LP_EXT_JWT'"}' https://$LP_IDP/api/account/$LP_ACCOUNT/app/$LP_APP_CONN_ID/authenticate?v=3.0 | jq -r .token`
```

#### Step 3 - Create a Conversation

Now you can continue the regular flow for creating conversations as documented in the [Getting Started](consumer-int-getting-started.html#step-3---connect-to-the-messaging-service), inserting the `LP_JWT` parameter you created in the step above for the token required by the normal flow.


#### Step 4 - Refresh an External Token

Once the external token is expired (10 minutes by default), you can refresh it for a certain period of time (730 hours by default) by using the following call:

```sh
LP_EXT_JWT=`curl -X POST -H "Content-Type: application/json" -d '{ "id_token":"'$LP_EXT_JWT'" }' https://$LP_IDP/api/account/$LP_ACCOUNT/anonymous/authorize | jq -r .token`
```

Make sure that the `LP_EXT_JWT` contains the previous external token you created in step 1. Using the fresh external token you can continue to step 2 and exchange the refreshed token for the LivePerson internal token.

{% include links.html %}
