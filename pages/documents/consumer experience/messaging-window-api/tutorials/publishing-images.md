---
title: Publish Images

level2: Consumer Experience
level3: Messaging Window API
level4: Tutorials

order: 89
permalink: messaging-window-api-tutorials-publish-images.html

indicator: messaging
---

In this tutorial we will publish images to a conversation.

###  Prerequisites
See [Prerequisites](consumer-int-get-msg.html#prerequisites){:target="_blank"}.

### Step 1 - Enable Image Sharing

In order to publish images in your account, you should first enable the feature. Insert your account admin username and password and type the following:

```sh
LP_USER=__AGENT_USERNAME__
LP_PASS=__AGENT_PASSWORD__
LP_BEARER=`curl -c cookies -X POST -H "Content-Type: application/json" -H "Accept: application/json" -H "Cache-Control: no-cache" -d '{"username": "'$LP_USER'","password":"'$LP_PASS'"}' "https://$LP_AGENTVEP/api/account/$LP_ACCOUNT/login?v=1.1"  jq -r .bearer`
./set_site_property.sh $LP_BEARER true messaging.file.sharing.enabled
```

Now download an example image file to your shell:

```sh
wget http://www.liveperson.com/sites/default/files/LP_LOGO_1.png
```

We will further publish this image to the messaging service.

### Step 2 - Create a Conversation

Open a connection to the messaging service.

```sh
wscat -k 60 -H "Authorization:jwt $LP_JWT" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Then ask to create a new conversation:

```json
{"kind":"req","id":1,"type":"cm.ConsumerRequestConversation"}
```

In response, you will get a conversation ID that will be used in the next steps.

### Step 3 - Upload an image

Now, ask the service to create an upload URL.

```json
{"kind":"req","id":"3","body":{"fileSize":1000,"fileType":"PNG"},"type":"ms.GenerateURLForUploadFile"    }
```

In response you will get the following message:

```json
{"kind":"resp","reqId":"3","code":200,"body":{"relativePath":"/v1/AUTH_async-images/qa57221676/8a66a22f-81ee-4447-b92f-78e9c3ecc819.PNG","queryParams":{"temp_url_sig":"6f52625b7f148325071c2518c714109134acd7a3","temp_url_expires":"1474973420"}},"type":"ms.BaseGenerateURLResponse"}
```

We will extract the ``relativePath``, ``temp_url_sig`` and ``temp_url_expires`` from this response, and use this value in the upload call. Close the WebSocket connection using ``Ctrl+C`` and type the following commands with the values you extracted from the previous response.

```sh
LP_REL_PATH=__relativePath__
LP_TUS=__temp_url_sig__
LP_TUE=___temp_url_expires__
curl -i "https://${LP_SWIFT}$LP_REL_PATH?temp_url_sig=$LP_TUS&temp_url_expires=$LP_TUE" --upload-file LP_LOGO_1.png
```

This call should upload the image file you have on your disk to LivePerson object storage.

### Step 4 - Publish the Conversation

Reestablish the connection using:


```sh
wscat -k 60 -H "Authorization:jwt $LP_JWT" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Then publish the image with the ``conversationId`` from Step 2, and the ``relativePath`` from Step 3.

```json
{"kind":"req","id":"22","body":{"dialogId":"__CONVERSATION_ID__","event":{"type":"ContentEvent","message":{"caption":"LivePerson logo","relativePath":"__relative_path__","fileType":"PNG","preview":"data:image/png;base64,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"},"contentType":"hosted/file"}},"type":"ms.PublishEvent"}
```

**(Not Available yet in production)**: Now log into the Agent Workspace, accept the open conversation, and you should see the image that has been published by the consumer.

### Step 5 - Download the image from the Conversation

In order to download an image that was published to the conversation, follow these steps.

Paste the following message to the open connection using the ``relative_path`` from Step 4:

```json
{"kind":"req","id":"33","body":{"relativePath":"__relative_path__"},"type":"ms.GenerateURLForDownloadFile"}
```

In response, you will get the URL details:

```json
{"kind":"resp","reqId":"3","code":200,"body":{"relativePath":"/v1/AUTH_async-images/qa57221676/8a66a22f-81ee-4447-b92f-78e9c3ecc819.PNG","queryParams":{"temp_url_sig":"6f52625b7f148325071c2518c714109134acd7a3","temp_url_expires":"1474973420"}},"type":"ms.BaseGenerateURLResponse"}
```

We will extract the ``relativePath``, ``temp_url_sig`` and ``temp_url_expires`` from this response and use this value in the upload call. Close the WebSocket connection using ``Ctrl+c`` and type the following commands with the values you extracted from the previous response.

```sh
LP_REL_PATH=__relativePath__
LP_TUS=__temp_url_sig__
LP_TUE=___temp_url_expires__
curl -i "https://${LP_SWIFT}$LP_REL_PATH?temp_url_sig=$LP_TUS&temp_url_expires=$LP_TUE" --output my.png
```

{% include links.html %}
