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

In this tutorial you will learn how to initiate an unauthenticated conversation using a [JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519){:target="_blank"}.

### Prerequisites
See [Prerequisites](consumer-int-get-msg.html#prerequisites){:target="_blank"}.
In order to work with unauthenticated conversation, your account must be provisioned by an LPA (LivePerson Administrator) according to [these instructions](consumer-int-account-provision.html){:target="_blank"}.
Also, an LPA should provision the following feature: Messaging.Un_Auth_Messaging.
Lastly, an LPA should create un aunthenticated connector through Houston.


### Step 1 - Create an Unauthenticated Conversation JWT

### Step 2 - Create an Authenticated Token

In order to create an authenticated token, you should supply a JWT with the identity of the user signed by your identity provider. For this tutorial you can use the JWT below. Its signature can be validated using the public key we configured in the previous step. To create your own external JWT, see [Further Testing](#further-testing).

```sh
UNAUTH_JWT=curl -X POST -H "Content-Type: application/json" http://$LP_IDP/api/account/$LP_ACCOUNT/anonymous/authorize| jq -r .jwt`
```
This will generate an external identity token for the unauthenticated conversation.
We will now ask to create a token based on this identity:

```sh
LP_EXT_JWT=`curl -X POST -H "Content-Type: application/json" -d '{"authCode" : "'$UNAUTH_JWT'"}' https://$LP_IDP/api/account/$LP_ACCOUNT/authenticate | jq -r .jwt`
```

This will request to create LP identity based on the external identity. The command then extracts the ``JWT`` from the response and sets it as a variable called ``LP_AUTH_JWT`` in your shell. We will use it in our next steps.

To check the value inside the ``LP_AUTH_JWT``, type the following:

```sh
> echo $LP_AUTH_JWT
eyJraWQiOiIwMDAwMSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2MTBjZDc3YWY4NDM2NDM2OGQzNDgyNmFiNDlmMWI4YWM5Nzg2MzhlNmE2OGY3OTEyNGQzNzM4NGUzZWQ0YTc2IiwiYXVkIjoiYWNjOnFhNTcyMjE2NzYiLCJpc3MiOiJodHRwczpcL1wvaWRwLmxpdmVwZXJzb24ubmV0IiwibHAuZXh0Ijp7InN1YiI6Iis5NzItMy01NTU1LTU1NSIsImlzcyI6Imh0dHBzOlwvXC9pZHAubGl2ZXBlcnNvbi5uZXQiLCJscF9zZGVzIjoiZTJmNzk1OGJiNjU3ZGFjOGEyY2NiMGE1OGNiNGRkYjQ1ZGZiYmZmMzg0MzM1ZGJkYmMwMGNmNWM2YmFlZmNlMjQ5YWI3NDQ4YTQxMmIxZmQyNWYyMmU0YjY0YmZjYTEyMDQyMzFjZGE4NDI2ZGFmOGY3ZDYzZjk5NTM2ODA5YzNlZGZhOWVkMDQ2YmMxMjgyMDNkMTZmZTU3ZGNmNDcwYWVlYWE1NDQwZjYzMmVjZmY5MjY2YjFmOGVhYzI0NjA4In0sImV4cCI6MTUzNDk3MTkzMCwiaWF0IjoxNDcxODk5OTQyfQ.it83vkbhAZqSE-H6c87WnU38Cxh-K_uxsTkWvKRBbSxSQYrlK0Hi267OE4EGhr0CIsf8bRbaiwa3gQEYGY43alRWQiGZ1zR30okxFVUjQVvaWGjzF-aB5FEjWFBdbWsyZ28xR1i971ydB4-iMYgMWDvG8KkB9rFaY-gsoK5LXE0
```

### Step 3 - Create a Conversation
We will now be able to open a WebSocket connection. This time we will use the identity encoded in the ``LP_AUTH_JWT``:

```sh
wscat -k 60 -H "Authorization:jwt $LP_AUTH_JWT" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Using this connection, send a request to create a new conversation:

```json
{"kind":"req","id":1,"type":"cm.ConsumerRequestConversation"}
```

Open the Agent Workspace and click the ``Accept`` button. The conversation will be opened, and in the consumer info section you will  see authenticated information such as the consumer's phone number:
![](img/consumer_info.png)

Close the conversation.

### Further Testing
You can try changing the external JWT properties using a JWT encoder, for example ([jwt.io](http://jwt.io)). Use the ``RS256`` algorithm with the following keys:

```
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdlatRjRjogo3WojgGHFHYLugdUWAY9iR3fy4arWNA1KoS8kVw33cJibXr8bvwUAUparCwlvdbH6dvEOfou0/gCFQsHUfQrSDv+MuSUMAe8jzKE4qW+jK+xQU9a03GUnKHkkle+Q0pX/g6jXZ7r1/xAK5Do2kQ+X5xK9cipRgEKwIDAQAB
-----END PUBLIC KEY-----  
```
```
-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQDdlatRjRjogo3WojgGHFHYLugdUWAY9iR3fy4arWNA1KoS8kVw33cJibXr8bvwUAUparCwlvdbH6dvEOfou0/gCFQsHUfQrSDv+MuSUMAe8jzKE4qW+jK+xQU9a03GUnKHkkle+Q0pX/g6jXZ7r1/xAK5Do2kQ+X5xK9cipRgEKwIDAQABAoGAD+onAtVye4ic7VR7V50DF9bOnwRwNXrARcDhq9LWNRrRGElESYYTQ6EbatXS3MCyjjX2eMhu/aF5YhXBwkppwxg+EOmXeh+MzL7Zh284OuPbkglAaGhV9bb6/5CpuGb1esyPbYW+Ty2PC0GSZfIXkXs76jXAu9TOBvD0ybc2YlkCQQDywg2R/7t3Q2OE2+yo382CLJdrlSLVROWKwb4tb2PjhY4XAwV8d1vy0RenxTB+K5Mu57uVSTHtrMK0GAtFr833AkEA6avx20OHo61Yela/4k5kQDtjEf1N0LfI+BcWZtxsS3jDM3i1Hp0KSu5rsCPb8acJo5RO26gGVrfAsDcIXKC+bQJAZZ2XIpsitLyPpuiMOvBbzPavd4gY6Z8KWrfYzJoI/Q9FuBo6rKwl4BFoToD7WIUS+hpkagwWiz+6zLoX1dbOZwJACmH5fSSjAkLRi54PKJ8TFUeOP15h9sQzydI8zJU+upvDEKZsZc/UhT/SySDOxQ4G/523Y0sz/OZtSWcol/UMgQJALesy++GdvoIDLfJX5GBQpuFgFenRiRDabxrE9MNUZ2aPFaFp+DyAe+b4nDwuJaW2LURbr8AEZga7oQj0uYxcYw==
-----END RSA PRIVATE KEY-----  
```

In the payload, put something similar to the below:

```json
{
  "sub": "+972-3-5555-555",
  "iss": "https://idp.liveperson.net",
  "aud": "acc:qa57221676",
  "exp": 1534971930,
  "iat": 1471899942,
  "given_name": "Eitan"
}
```

For a full list of values that can be passed here, please refer to the [Authentication](https://developers.liveperson.com/guides-authentication-detailedapi.html) document.

{% include links.html %}
