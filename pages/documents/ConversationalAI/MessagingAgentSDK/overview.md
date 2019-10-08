---
pagename: Overview
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Messaging Agent SDK
permalink: messaging-agent-sdk-overview.html
indicator: messaging
---

### Overview

The Messaging Agent SDK (Node.JS) was built to provide a fully custom way of programmatically building a bot with LivePerson. This SDK provides access to an [Agent Messaging API](https://developers.liveperson.com/agent-int-api-reference.html) and enables the bot to handle consumer conversations, escalate to a human when needed, and perform all agent actions.

[Here are the API terms of use](https://www.liveperson.com/policies/apitou).

### Disclaimer

Currently the API behind this SDK starts sending *MessagingEventNotification*s immediately upon connection, but this subscription will exclude some notifications.

A new version of the API will be released soon in which there is no automatic subscription, and you must explicitly subscribe to these events for each conversation in order to receive them.

In order to guarantee compatibility with future versions of the API, and to ensure that no notifications are missed even with the current API version, it is highly recommended that your bot explicitly subscribe to *MessagingEventNotification*s for all relevant conversations, as demonstrated in the [Agent-Bot](https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples/agent-bot) example's [MyCoolAgent.js](https://github.com/LivePersonInc/node-agent-sdk/blob/master/examples/agent-bot/MyCoolAgent.js).

### Getting Started

#### Install

- **Option 1 - npm install (does not include sample apps)**

   ```sh
   npm i node-agent-sdk --save
   ```

- **Option 2 - Clone this repository (includes sample apps)**

    ```sh
    git clone https://github.com/LivePersonInc/node-agent-sdk.git
    ```
    Run the [greeting bot](https://github.com/LivePersonInc/node-agent-sdk/blob/master/examples/greeting-bot/greeting-bot.js) example (see how in [Running The Sample Apps](https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples)).

#### Agent class

```javascript
new Agent({
    accountId: String,  // required
    username: String,  // required for username/password authentication and OAuth1 authentication
    password: String,  // required for username/password authentication
    appKey: String, // required for OAuth1 authentication
    secret: String, // required for OAuth1 authentication
    accessToken: String, // required for OAuth1 authentication
    accessTokenSecret: String, // required for OAuth1 authentication
    token: String, // required for token authentication
    userId: String, // required for token authentication
    assertion: String, // required for SAML authentication
    csdsDomain: String, // override the CSDS domain if needed
    requestTimeout: Number, // default to 10000 milliseconds
    errorCheckInterval: Number, // defaults to 1000 milliseconds
    apiVersion: Number // Messaging API version - defaults to 2 (version 1 is not supported anymore)
});
```

#### Authentication

The Agent Messaging SDK support the following authentication methods:
- Username and password as `username` and `password`
- Bearer token as `token` with user id as `userId`
- SAML assertion as `assertion`
- OAuth1 with `username`, `appkey`, `secret`, `accessToken`, and `accessTokenSecret`

#### agentId

You can get your agentId from the SDK using `agent.agentId`.

### Quick Start Example

#### Create `index.js`

```javascript
const Agent = require('node-agent-sdk').Agent;

const agent = new Agent({
    accountId: process.env.LP_ACCOUNT,
    username: process.env.LP_USER,
    password: process.env.LP_PASS
});

agent.on('connected', () => {
    console.log(`connected...`);

    // subscribe to all conversations in the account
    agent.subscribeExConversations({
        'convState': ['OPEN']
    }, (err, resp) => {
        console.log('subscribed successfully', err, resp);
    });
});

// log all conversation updates
agent.on('cqm.ExConversationChangeNotification', notificationBody => {
    console.log(JSON.stringify(notificationBody));
})
```

#### Run it:

###### Unix Shell

```sh
LP_ACCOUNT=(YourAccountNumber) LP_USER=(YourBotUsername) LP_PASS=(YourBotPassword) node index.js
```

###### Windows Shell

```sh
set LP_ACCOUNT=(YourAccountNumber)
set LP_USER=(YourBotUsername)
set LP_PASS=(YourBotPassword)
node index.js
```

[Running the Sample Apps](https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples)