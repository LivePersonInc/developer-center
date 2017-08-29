---
title: Get Messages 
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: Tutorials

order: 10
permalink: consumer-int-cobrowse.html

indicator: messaging
---

This tutorial explains how to start a CoBrowse session on consumer side using the Messaging Window and CoBrowse APIs.

### Prerequisites
* This guide is for Web-CoBrowsing only. The Messaging Window API must be used in a browser environment and the website must be tagged with lpTag. 
* LivePerson account must be enabled with CoBrowse feature: ``Cobrowse.Cobrowse_Integration`` (enabled by default) and Site-Setting ``coapp.enabled``. If you are not sure that your account is enabled with these two features, please contact LivePerson Support.

### Step 1 - Set CoBrowse Feature in Client Properties

In your [initConnection](/consumer-int-msg-init-con.html) request, make sure you add a ``features`` property to the clientProperties that contain the ``CO_BROWSE`` feature. An example initConnection request that enables CoBrowse would look like this:

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

### Step 2 - Start a conversation and trigger a CoBrowse invitation
Start a messaging conversation with an agent by following the steps described in the previous tutorials. The important part is to subscribe to [Conversation Metadata](/consumer-int-conversation-md.html) since the CoBrowse invitation is sent as part of the metadata.
If your account is set up correctly, you should see the following button inside the Agent Workspace that allows you to send a CoBrowse invitation:

![agent_invitation](img/agent_cobrowse_invitation.png)

### Step 3 - Handle CoBrowse event on Consumer side
Once the agent sends an invitation, you should see a new event of type ``cqm.ExConversationChangeNotification``. Inside the event, there is a ``conversationDetails`` object containing two dialogs. The first one is the existing messaging dialog, the second one is a new dialog with ``channelType=COBROWSE``:

```json
{
    "dialogId": "COAPP",
    "participants": [
        "cc05f2b9-916b-496e-89fe-66a46d975ae2",
        "le83624296:356285412"
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

The relevant fields in this dialog are ``channelType`` and inside ``metaData`` the ``serviceId``, ``mode`` and ``sessionState`` fields. ``channelType`` always equals ``COBROWSE`` and can be used to check if the new dialog is a CoBrowse dialog. The ``serviceId`` is used to match Consumer and Agent and needs to be passed to the CoBrowse API on the website. ``mode`` is equal to the CoBrowse mode the Agent selected. For CoBrowse, the possible values are ``shared`` for shared CoBrowse, ``view`` for view-only CoBrowse where the agent is able to scroll the visitor's view and ``follow`` for view-only without scroll permissions for the agent.

After the invitation has been received, the following event should be triggered on consumer side using the ``lpTag.events.publish`` function.

```js
lpTag.events.publish("lpUnifiedWindow", "cobrowseOffered", {
 	serviceId: "<ServiceId from the dialog>", 
 	agentId: "<Agent ID>",
 	visitorName: "<Name of the Visitor>",
 	//optional parameters:
 	ssid: "<Monitoring Session ID>", 
 	svid: "<Monitoring Visitor ID>", 
 	scid: "<Monitoring Context ID>", 
 	cid: "<Engagement Context ID>", 
 	eid: "<Engagement ID>"
 }
);
```

### Step 4 - Accept/Reject CoBrowse invitation
If the consumer decides to accept the invitation, the following event should be triggered in order to start the CoBrowse session:

```js
lpTag.events.publish("lpUnifiedWindow", "cobrowseAccepted", {
 	serviceId: "<ServiceId from the dialog>", 
 	agentId: "<Agent ID>",
 	visitorName: "<Name of the Visitor>",
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
lpTag.events.publish("lpUnifiedWindow", "cobrowseDeclined", {
 	serviceId: "<ServiceId from the dialog>", 
 	agentId: "<Agent ID>",
 	visitorName: "<Name of the Visitor>",
 	//optional parameters:
 	ssid: "<Monitoring Session ID>", 
 	svid: "<Monitoring Visitor ID>", 
 	scid: "<Monitoring Context ID>", 
 	cid: "<Context ID>", 
 	eid: "<Engagement ID>"
 }
);
```

### Cancelled invitation and expiry
A CoBrowse invitation can be cancelled by the agent or expires after 2 minutes if not cancelled, accepted or rejected. In case of cancelation or expiry, a new ``cqm.ExConversationChangeNotification`` event is triggered with ``CLOSED`` as ``sessionState`` property.

```json
{
	"dialogId": "COAPP",
	"dialogType": "OTHER",
	"channelType": "COBROWSE",
	"metaData": {
		"sessionState": "CLOSED"
	}
}
```



{% include links.html %}
