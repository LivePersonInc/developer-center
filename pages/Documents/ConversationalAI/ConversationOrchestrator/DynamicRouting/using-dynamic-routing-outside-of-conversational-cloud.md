---
pagename: Using Dynamic Routing Outside of Conversational Cloud
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-using-dynamic-routing-outside-of-conversational-cloud.html
indicator: messaging
---

{: .important}
This topic assumes you are familiar with linking third-party bots to Conversational Cloud. If you aren't, we strongly suggest that you read the documentation [here](third-party-bots-getting-started.html).

### Introduction
Once your third-party bot is ready, you can [set up routing policies](conversation-orchestrator-dynamic-routing-creating-routing-policies.html) on Dynamic Routing and leverage the [Next Actions API](conversation-orchestrator-next-actions-api-overview.html) to receive routing recommendations. You need to handle transfers appropriately within your third-party bot in the appropriate channel. Third-party bots can use the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) to read or write contextual information that can be leveraged for dynamic routing or even bot-to-bot communication.
 
Please see the representation below.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_outsidecc1.png"> 

### Example using the Next Actions API from Google DialogFlow

#### High-level flow
1. Get the conversation ID.
2. Set the routing variable in the Conversation Context Service.
3. Call the Next Actions API with the conversation ID.

#### Detailed flow

##### Step 1 - Get the conversation ID

The conversation ID is required for using the Next Actions APIs. This ID is used by the policy to retrieve conversation and Conversation Context Service parameters.

Inside Dialogflow Fulfillment, modify the sample code for the event handler for each request.

Inside the request event handler function (i.e., the `functions.https.onRequest`), you can get the conversationId as the last part of the `request.body.session` string after the last /.

In the following `request.body.session` example string, ea15cd3f-561d-4acf-90ae-5eb14145d38d is the conversationId.

`projects/appointmentscheduler-69117/agent/sessions/ea15cd3f-561d-4acf-90ae-5eb14145d38d`

You can get the Conversational Cloud conversationId with this line of JavaScript code:

`request.body.session.substring(request.body.session.lastIndexOf("/") + 1);`
 
For debugging, you can see the logs by clicking the link **View execution logs in the Firebase console** inside the Dialogflow Fulfillment page.

##### Step 2 - Call the Conversation Context Service APIs
Click `package.json` to include your favorite Node.js HTTP library. In the example, we include the axios HTTP library.

The Conversation Context Service is useful for storing any context information gathered in a bot that you might want to use in a routing policy. For instance, you might want to set the intent detected by a bot and then use it for any routing policy.

```javascript
const contextUrl = 'https://z1.context.liveperson.net/v1/account/55884191/namespace1/' + conversationId + '/properties';
 
var data = {
   'key1': 'val1',
   'key2': 'val2',
   'time': Date.now()
};

axios.patch(
   contextUrl, 
   data, 
   { headers: { 'Content-Type': 'application/json', 'maven-api-key': <MAVEN_API_KEY> } }
);
```

{: .important}
The snippet above uses Context Service V1. For Context Service V2 methods, see [here](conversation-orchestrator-conversation-context-service-methods-v2.html).
 
##### Step 3 - Call the Next Actions API
Now that you have the conversation ID, use it to call the Next Actions API as follows:

```javascript
const askMavenUrl = 'https://z1.askmaven.liveperson.net/v1/account/55884191/next-actions';
 
axios.get(
   askMavenUrl, 
   { headers: { 'Content-Type': 'application/json', 'maven-api-key': <MAVEN_API_KEY> } }
).then(function(response){
   const rule = response.rule;
   if (rule && rule.actions) {
      // You can inspect the actions and do something according to the actions
      //   e.g. transfer to an agent or skill, or send back a message.  
      //        Here we just log the actions to the console.
      console.log(rule.actions); 
   }
});
```

{: .important}
The snippet above uses Next Actions V1. For Next Actions V2 methods, see [here](conversation-orchestrator-next-actions-api-methods-v2.html). 
 
For more information on using the Next Actions API, see [here](conversation-orchestrator-next-actions-api-overview.html).
