---
pagename: Voice and Video Calls
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: Tutorials

order: 89
permalink: messaging-window-api-tutorials-calls.html

indicator: messaging
---

This tutorial explains how to start a Voice or Video Call on consumer side using the Messaging Window API.

### Prerequisites
* This guide is for web only. The Messaging Window API must be used in a browser environment and the website must be tagged with lpTag.
* LivePerson account must be enabled with LiveVoice and/or LiveVideo features: ``LiveVoice.LiveVoice_Integration``, ``LiveVoice.LiveVoice_Integration``	and Site-Setting ``coapp.enabled``. If you are not sure that your account is enabled with these two features, please contact LivePerson Support.

### Important information
The Voice & Video Call feature leverages WebRTC and tries to establish a peer to peer connection between agent and the consumer. To support calls on different devices and networks, additional video relay infrastructure is required to cover scenarios in which a peer to peer connection is not possible. It is recommended to work with the LivePerson support team to verify that your network infrastructure can support peer to peer connections. On the consumer side, this can not be guaranteed and calls might require an additional relay (TURN) server. For testing purposes, LivePerson will provide such a server using a 3rd party. For production deployments, brands can set up their own infrastructure. Your LivePerson representative can assist you with that step and also outline alternatives to hosting your own infrastructure. LivePerson keeps the right to change the use case of this service at any time in the future.  


### Step 1 - Set required Feature in Client Properties

In your [initConnection](/consumer-int-msg-init-con.html) request, make sure you add a ``features`` property to the clientProperties that contain the ``CO_BROWSE`` feature. An example initConnection request that enables the feature would look like this:

```json
{
   "id":"0",
   "type":"InitConnection",
   "headers":[
      {
         "type":".ams.headers.ClientProperties",
         "deviceFamily":"DESKTOP",
         "os":"WINDOWS",
         "features":[
            "CO_BROWSE"
         ]
      },
      {
         "type":".ams.headers.ConsumerAuthentication",
         "jwt":"..."
      }
   ]
}
```

### Step 2 - Start a conversation and trigger a call invitation
Start a messaging conversation with an agent by following the steps described in the previous tutorials. The important part is to subscribe to [Conversation Metadata](/consumer-int-conversation-md.html) since the call invitation is sent as part of the metadata.
If your account is set up correctly, you should see the following button inside the Agent Workspace that allows you to voice and video calls:

![agent_invitation](img/agent_call_invitation.png)

### Step 3 - Handle call invitation event on Consumer side
Once the agent sends an invitation, you should see a new event of type ``cqm.ExConversationChangeNotification``. Inside the event, there is a ``conversationDetails`` object containing two dialogs. The first one is the existing messaging dialog, the second one is a new dialog with ``channelType=COBROWSE``:

```json
{
    "dialogId": "c26b9d3b-e943-42af-8047-aba830de64ea",
    "participants": [
        "cc05f2b9-916b-496e-89fe-66a46d975ae2",
        "le83624296.356285412"
    ],
    "dialogType": "OTHER",
    "channelType": "COBROWSE",
    "metaData": {
        "serviceId": "cc05f2b9-916b-496e-89fe-66a46d975ae2#7904fffd-fc68-4d93-b611-4dc06ab26bf4",
        "mode": "shared",
        "expires": 1.502893131855E9,
        "sessionState": "INVITED",
        "permissions": "audio,screen,control",
        "host": "https://coapp.dev.lprnd.net",
        "uid": "le83624296:356285412__cc05f2b9-916b-496e-89fe-66a46d975ae2_1502893040466_1502893041854",
        "channel": "le83624296:356285412__cc05f2b9-916b-496e-89fe-66a46d975ae2_1502893040466",
        "token": "...",
        "role": "visitor"
    },
    "state": "OPEN",
    "creationTs": 1502893041905,
    "metaDataLastUpdateTs": 1502893041905
}
```

The relevant fields in this dialog are ``channelType`` and inside ``metaData`` the ``serviceId``, ``mode`` and ``sessionState`` fields. ``channelType`` always equals ``COBROWSE`` and can be used to check if the new dialog has the correct type. The ``serviceId`` is used to match Consumer and Agent and needs to be passed to the CoBrowse API on the website. ``mode`` is equal to the mode that the Agent selected. Possible modes are ``VOICE_CALL`` for voice calls and ``VIDEO_CALL`` for video calls.

After the invitation has been received, the following event should be triggered on consumer side using the ``lpTag.events.publish`` function.

```js
lpTag.events.publish("lpCoBrowse", "cobrowseOffered", {
 	serviceId: "<ServiceId from the dialog>",
 	agentId: "<Agent ID>",
 	visitorName: "<Name of the Visitor>",
 	mode: "<Mode from the dialog>",
 	//optional parameters:
 	ssid: "<Monitoring Session ID>",
 	svid: "<Monitoring Visitor ID>",
 	scid: "<Monitoring Context ID>",
 	cid: "<Engagement Context ID>",
 	eid: "<Engagement ID>"
 }
);
```

### Step 4 - Accept/Reject call
If the consumer decides to accept the call, the following event should be triggered in order to start the call:

```js
lpTag.events.publish("lpCoBrowse", "cobrowseAccepted", {
 	serviceId: "<ServiceId from the dialog>",
 	agentId: "<Agent ID>",
 	visitorName: "<Name of the Visitor>",
 	mode: "<Mode from the dialog>",
 	//optional parameters:
 	ssid: "<Monitoring Session ID>",
 	svid: "<Monitoring Visitor ID>",
 	scid: "<Monitoring Context ID>",
 	cid: "<Context ID>",
 	eid: "<Engagement ID>"
 }
);
```

In case the consumer rejects the invitation, you can trigger the following event to reject the invitation:

```js
lpTag.events.publish("lpCoBrowse", "cobrowseDeclined", {
 	serviceId: "<ServiceId from the dialog>",
 	agentId: "<Agent ID>",
 	visitorName: "<Name of the Visitor>",
 	mode: "<Mode from the dialog>",
 	//optional parameters:
 	ssid: "<Monitoring Session ID>",
 	svid: "<Monitoring Visitor ID>",
 	scid: "<Monitoring Context ID>",
 	cid: "<Context ID>",
 	eid: "<Engagement ID>"
 }
);
```

### Step 5 - Prepare UI
The voice or video call UI will be rendered into a container on the website. The website developer is responsible to create a container, e.g. a ``<div>`` element on the website with a classname called ``lp_cobrowse_callscreen_container`` after the invitation has been accepted.


### Resuming calls after reloading the page
The voice and video call application will store information in the browser's storage that allows it to detect and resume active calls after reloading the page or navigating to another tagged page. An event will be triggered when an active call was detected:
```js
lpTag.events.bind({
    appName: "cobrowse",
    eventName: "sessionResume",
    func: onSessionResume
});
```

Upon receiving this event, the call UI container should be created and the following event sent in response:
```js
lpTag.events.publish("lpCoBrowse", "sliderOpened");
```

### Handling errors
In case there is a problem establishing the connection or the browser is not supported, an error event is triggered. Please use the following code to listen for error events:
```js
lpTag.events.bind({
    appName: "cobrowse",
    eventName: "sessionError",
    func: onError
});
```

The payload of the ``sessionError`` event contains:
* ``msg`` A localized message that describes the problem and can be shown to the user.
* ``id`` The error ID. Please see below possible errors.

Error IDs:
* ``UNABLE_TO_CONNECT`` There was a problem establishing the WebRTC connection
* ``BROWSER_NOT_SUPPORTED`` The browser does not support WebRTC based video and voice calls
* ``NO_CAMERA_ACCESS`` The application can't access the user's camera
* ``AGENT_DISCONNECTED`` The agent got disconnected


### Handling hanging-up, cancelled invitation and expiry
A call invitation can be cancelled by the agent or expires after 2 minutes if not cancelled, accepted or rejected. In case of cancelation or expiry, a new ``cqm.ExConversationChangeNotification`` event is triggered with ``CLOSED`` as ``sessionState`` property.
The same event is triggered when the call ended.

```json
{
	"dialogId": "c26b9d3b-e943-42af-8047-aba830de64ea",
	"dialogType": "OTHER",
	"channelType": "COBROWSE",
	"metaData": {
		"sessionState": "CLOSED"
	}
}
```



{% include links.html %}
