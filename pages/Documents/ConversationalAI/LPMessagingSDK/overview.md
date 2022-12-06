---
pagename: Overview
sitesection: Documents
categoryname: "Conversational AI"
documentname: Liveperson Messaging SDK
permalink: lp-messaging-sdk-overview.html
indicator: messaging
---

Liveperson Messaging SDK
========================

An SDK to support interactions with Liveperson's Messaging Platform (UMS).

For more information about specific classes, functions, or enums see the [API Reference](https://l1905.gitlab.io/conversational-cloud-engineering/conversation-exchange-services/lp-messaging-sdk/).

Liveperson Messaging SDK has replaced [Messaging Agent SDK](messaging-agent-sdk-overview.html) (aka Node Agent SDK) 
as the recommended method for interacting with UMS from a node.js application (which usually consist of a bot or 
collection of e2e tests).

Table of Contents
-----------------

* [How To Install](#how-to-install)
* [Quick Start](#quick-start)
    * [A simple consumer conversation](#a-simple-consumer-conversation)
    * [A simple agent conversation listener bot](#a-simple-agent-conversation-listener-bot)
* [Advanced Topics](#advanced-topics)
    * [Background Process Errors](#background-process-errors)
    * [Connection Maintenance](#connection-maintenance)
    * [Notification Subscriptions](#notification-subscriptions)
        * [The Default Subscription](#the-default-subscription)
        * [Creating manual subscriptions](#creating-manual-subscriptions)
    * [Conversation Events](#conversation-events)
    * [Auth Token Processes](#auth-token-processes)
    * [Client Properties](#client-properties)
    * [Features Not yet supported](#features-not-yet-supported)
* [Converting a Node Agent Sdk project to Messaging SDK](#converting-a-node-agent-sdk-project-to-messaging-sdk)


How To Install
--------------

To install as a dependency, run the following from a terminal window:

`npm install lp-messaging-sdk`


Quick Start
-----------

### A simple consumer conversation ###
```
const lpm = require("lp-messaging-sdk");

const connection = lpm.createConnection({
    appId: 'quick_start',
    accountId: '12345678',
    userType: lpm.UserType.CONSUMER
});

// connect & open conversation
await connection.open();

// optionally set the consumer's name information
await connection.setUserProfile({firstName: 'firstName', lastName: 'lastName', nickName: 'nickName'});

// create conversation
const conversation = await connection.createConversation();

// setup a message notification listener
conversation.on('message', message => {
    console.log(JSON.stringify(message.body));
});

// send a message
await conversation.sendMessage('test');

// close the main dialog
await conversation.close();

// close the connection
await connection.close();
```

### A simple agent manager conversation listener bot ###
```
const lpm = require("lp-messaging-sdk");

// define the auth data
const accountId = '12345678';
const authData = {
    username: 'bot1',
    appKey: '1a804df636f347bgcb4974a1ea3e2a91',
    secret: 'e15d540710838b40',
    accessToken: 'ccf8gf5bb346f3a95245e9b4798695f2',
    accessTokenSecret: '876c7425f81c5160'
};

// create the connection object
const connection = lpm.createConnection({
    appId: 'quick_start',
    accountId,
    userType: lpm.UserType.BRAND,
    authData
});

// setup the conversation event
// this event will fire whenever the bot is informed of a new conversation
connection.on('conversation', async conversation => {

    // join the conversation as "AGENT" role
    await conversation.join(lpm.ParticipantRole.AGENT);
    
    // listen for messages from the consumer
    conversation.on('message', message => {
        
        // ignore all messages not from the consumer
        if (message.participant.role !== lpm.ParticipantRole.CONSUMER) return;
        
        console.log(message.body);
        
        // send a simple response
        conversation.sendMessage('hello');
    });
    
    // listen for the close event
    conversation.on('close', () => {
        console.log('conversation closed');
    });
    
});

// make the connection
await connection.open();
```



Advanced Topics
---------------

### Background Process Errors ###
There are many active processes running under the hood of the SDK, sometimes these will encounter an error scenario.
They will do their best to recover, but it is advised that applications watch and log the error event. To do this,
simply add an event watcher to the connection and log the error as you would any other error in the application.
If you get any unexpected errors that you can't resolve on your own, please reach out to us or the greater UMS team
for assistance.
```
connection.on('error', err => {
   console.error(err);
});
```

---

### Agent Routing ###

Most bots are configured for the role of manager and receive conversations by virtue of being subscribed to
all conversations, and thus they will get their conversations through the connection.on('conversation') event.

Agents and agent-type bots, on the other hand, get notified that they should handle a certain conversation through a
process called "agent routing". In this process, the bot must indicate it is open to accepting routing tasks
otherwise known as "rings" by setting their agent state to "online" and creating a routingTaskSubscription, which
will then emit routingTask events as they assigned to that agent by the service.

When a ring is received, the agent has the option to either accept or reject the ring. Accepting the ring will add
the agent as a participant on the conversation with the role of "assigned agent".

#### Receiving and Acting upon Rings/Routing Tasks ####

```
// connect as admin for brand
const connection = lpm.createConnection({userType: lpm.UserType.BRAND, accountId, authData});
await connection.open();

// agent state must be "ONLINE" in order to receive rings
await connection.setAgentState({agentState: lpm.AgentState.ONLINE});

// subscribe to routing tasks (rings)
const taskRoutingSubscription = await connection.createRoutingTaskSubscription();

// process the rings as they arrive
connection.on('ring', async ring => {
    
    // ignore old rings
    if (ring.ringState !== lpm.RingState.WAITING) return;
    
    // accept the ring
    // full conversation will appear from the connection.on('conversation') event (for now)
    await ring.accept();
    
    // or reject the ring
    // await ring.reject();
});

connection.on('conversation', conversation => {
    console.log('agent has been added to the conversation');
});
```

---

### Connection Maintenance ###

Communication with UMS happens primarily over a websocket, the SDK takes responsibility for maintaining this
connection and in the event of a connection loss it will attempt to reconnect.
The SDK will do this by default, no additional configuration is required.
This happens behind the scenes and requires no intervention by the consuming application, which should be written
as though no disconnect is possible.

While disconnected, any requests will be queued up and will execute when the connection is re-established.
The SDK will also attempt to recreate any subscriptions, including the default subscription.

If the auth token has become invalid during the time in which the connection was down, the SDK will attempt to
generate a new one.

---

### Notification Subscriptions ###

There are three different kinds of messages used in communicating with UMS: Request, Response, and Notification.

In general, when you use the SDK to issue a command to UMS, it sends a Request to UMS, the request is processed and
UMS returns a Response which then triggers the awaited promise to resolve. So, Response messages are only ever
received in response to a Request. Notification messages, on the other hand, are UMS's method of communicating with
clients asynchronously, without a request from the client.

There are three types of Notifications that UMS can send:
1. a message event, containing message text from a participant, the status of a participant (typing, away, etc.)
2. a conversation state notification containing information about a conversation's state (whether it is open or
   closed, or which users are participants, etc.)
3. A routing event, aka a Ring, indicating that routing has chosen the current user to handle a conversation.

In order to receive these notifications there are certain conditions which must be met:
1. To receive messages events for a conversation, an agent simply needs to be a participant in the conversation.
   Consumers, on the other hand, must create a subscription for the conversation before they will receive these
   notifications. **The SDK creates and maintains these subscriptions automatically**, there is no need to create them
   manually.
2. To receive conversation state notifications, a conversation subscription is required whose query encompasses that
   conversation. **The SDK creates and maintains these subscriptions automatically**, there is usually no need to
   create them manually, unless you want to see closed conversations on a brand connection, which does not apply to
   most users.
3. Routing events are not currently supported by the SDK. They will be available in a future version.

#### The default subscription ####

By default, after connecting the SDK will automatically create a single subscription per connection.
This subscription is available on the connection object, if you want to log all notifications that subscription
receives you can do so with this code:
```
connection.defaultSubscription.on('notification', notification => {
    console.log(JSON.stringify(notification));
});
```

Each type of connection has a different default query that is used to create its default subscription:
* Brand connections use this query: ```{stage:["OPEN"]}```
* Consumer connections use this query: ```{stage:["OPEN", "CLOSE"]}```

You can also provide a different query that will be used to create the default subscription, for example if you want
your bot to only monitor conversations on a specific skill, you would create your connection like this:
```
const connection = lpm.createConnection({
    appId: 'quick_start',
    accountId,
    userType: lpm.UserType.BRAND,
    authData,
    defaultSubscriptionQuery: {stage:["OPEN"], skillId:'123456'}
});
```

If you don't want the SDK to create the default subscription, you can disable it by passing
createDefaultSubscription as false when creating the connection:
```
const connection = lpm.createConnection({
    appId: 'quick_start',
    accountId,
    userType: lpm.UserType.BRAND,
    authData,
    createDefaultSubscription: false
});
```

#### Creating manual subscriptions ####

In the event that you want to create a conversation subscription manually, use the "createConversationSubscription"
function. Please note that conversation objects are shared between subscriptions, in the sense that the SDK will use
any notifications from all active subscriptions to update conversation objects.
```
const query = {stage:["OPEN"], skillId:'123456'};
const waitForFirstNotification = false;
const sub = await connection.createConversationSubscription(query, waitForFirstNotification);
```

---

### Auth Token Process ###

As part of the .connect() function for brand connections, the SDK will use the authData to create a bearer token by
making a request to an internal service called "agentVep". This token is used to authenticate with UMS when making a
websocket connection or rest api request. To remain valid, a refresh request must be made once in every ten minutes
back to agentVep, the SDK does this by default.

If a token becomes invalid for any reason, the SDK will automatically attempt to create a new one. In general, any
websockets established will not lose connection if their token becomes invalid, so there is no risk of service
interruption, but the new token will be required before any new http requests can be made.

If an application creates another token for the same user, the first token will become invalid. So it is therefore
important that applications do not create two connections with the same authData, this will cause them to
continually generate new tokens and put a strain on Liveperson's services.

If an application needs to use a connection's token to make http requests to other Liveperson services that are not
supported directly by the SDK, you can access the bearer token with the following property after the connect()
finishes: ```connection.token```

---

### Client Properties ###

ClientProperties is an object that contains information about the client that a consumer uses to connect to UMS.
This includes not only device and browser information, but also information about the specific messaging features
supported by the particular UI client they are connected through.

Example:
```
const clientProperties = lpm.createClientProperties({
    deviceFamily: lpm.DeviceFamily.DESKTOP,
    deviceManufacturer: 'Apple',
    deviceModel: 'MacBook Pro',
    os: lpm.OS.OSX,
    osName: 'macOS',
    osVersion: '11.6.8',
    ipAddress: '127.0.0.1',
    browser: 'CHROME',
    browserVersion: '47.0',
    timeZone: 'America/Los_Angeles',
    features: [lpm.Features.AUTO_MESSAGES, lpm.Features.PHOTO_SHARING]
});

const consumerConnection = lpm.createConnection({
    appId: 'quick_start',
    accountId: '123456',
    userType: UserType.CONSUMER,
    clientProperties
});

await consumerConnection.open();
```

---

### Application Tracking ###

In order to help us provide the best support, we request that you choose an id for your application. This
should be passed in the createConnection function along with the version of your application if available.
```
const consumerConnection = lpm.createConnection({
    appId: 'quick_start',
    appVersion: '1.6.2',
    accountId: '123456',
    userType: UserType.CONSUMER
});
```

---

### Features Not yet supported ###
- Authenticated Consumer Connections (including step up)
- SendAPI

Converting a Node Agent Sdk project to Messaging SDK
----------------------------------------------------

The old SDK (node-agent-sdk) will continue to work after the new SDK has launched, and we will continue to support it for some time for existing applications, but, we will highly encourage conversion to the new sdk. We are planning on documenting two methods of conversion:

**Partial conversion** - node-agent-sdk applications must consume raw json results returned from UMS and construct json requests. This is still possible with the new sdk, though not recommended, but it does make for an easy conversion and the application would get several benefits of the new SDK, such as the reconnection logic. The code must still be converted over to use async/await and a few other minor changes, but we were able to do this partial conversion on controller bot with a few days of dev time.

**Full conversion** - This will be our recommendation for new projects, in this conversion, the application would use all of the new objects and methods created as an interface for the UMS websocket api. For simple applications this can be done quickly, but for larger projects, this may involve removing a bit of code whose job is now done inside the sdk. In order to use rest api through the SDK, applications will need this type of conversion.

For example in node-agent-sdk, to send a message, the code looks like this:

```
connection.publishEvent({
    dialogId: 'MY_DIALOG_ID',
    event: {
        type: 'ContentEvent',
        contentType: 'text/plain',
        message: 'hello world!'
    }
}, callbackFunc);
```

For partial conversion you can still send the json, but it must be sent as "body" and the request type must now be specified in the request instead of being implied by the function name. Also, the function should now be **await**ed:

```
await connection.send({
    type: '.ams.ms.PublishEvent',
    body: {
        dialogId: 'MY_DIALOG_ID',
        event: {
            type: 'ContentEvent',
            contentType: 'text/plain',
            message: 'hello world!'
        }
    }
});
```

For full conversion, the code would simply be:
```
await conversation.sendMessage('hello world');
```


