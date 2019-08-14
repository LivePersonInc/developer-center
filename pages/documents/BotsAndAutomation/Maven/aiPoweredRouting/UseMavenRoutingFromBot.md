---
pagename: Use Maven with Your Bot
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: AI Powered Routing
permalink: maven-ai-powered-routing-use-maven-with-your-bot.html
indicator: messaging
---

If you want more control and customization on your conversational experience, you may use the [AskMaven APIs](maven-askmaven-overview.html) from a concierge bot or LOB app to ask Maven about the next best action for a set of conditions. This is appropriate if:

- You already have a concierge bot that handles branded greetings, intents, and dialogs

- You want to route by Intents, entities, and other attributes from a concierge bot

- You have deeper customization needs to use Maven capabilities at runtime

This method is usually used alongside Context Session Store APIs to send intents and attributes. 

**Example**:

The following example shows how to use [AskMaven](maven-askmaven-overview.html) and [Context session store](maven-context-warehouse-context-session-store.html) APIs from a concierge bot.

1. A concierge bot handles branded greetings and intents. 

2. It uses the Context Session Store APIs to store the value of the intent in the store

3. The bot then calls AskMaven APIs to get a routing decision. Because the intent has been set, Maven can now use this information to evaluate a routing policy. 

<img class="fancyimage" width="750" src="img/maven/image_48.png">

### AskMaven from Conversation Builder

#### Get The Conversation ID

The conversation id is required for using the AskMaven APIs. This ID is used by the policy to retrieve conversation and session store parameters. 

The variable can be used anywhere in conversation builder using the following variable name: 

{$botContext.conversationId}
 

#### Call Session Store APIs

The session store is useful in storing any context information gathered in a bot, that you may want to use in a routing policy. For instance you may want to set the intent detected by a bot and then use it for any routing policy.

#### Call AskMaven APIs

AskMaven APIs can be used in a Conversation Builder bot using [Integrations](conversation-builder-conversation-builder-integrations.html).

1. Add API Integration to Conversation Builder

   <img class="fancyimage" width="500" src="img/maven/image_49.png">

2. Edit Integration Settings for AskMaven APIs

   * **URL**: Use the appropriate URL based on your location
      1. Americas: https://z1.askmaven.liveperson.net
      2. EMEA: https://z2.askmaven.liveperson.net
      3. APAC: https://z3.askmaven.liveperson.net

   
   * **Maven API key** is retrieved from Maven workspace.

   * **AccountID**: use your LiveEngage account ID. If you are not sure please contact support or your customer representative to get the account ID.

   * **Conversation ID**: This allows Maven routing policy to retrieve conversation attributes to evaluate the policy. 

   <img class="fancyimage" width="700" src="img/maven/image_50.png">

3. Use response from AskMaven API to execute a transfer to Skill task

### AskMaven from Google DialogFlow

#### Get The Conversation ID

The conversation id is required for using the AskMaven APIs. This ID is used by the policy to retrieve conversation and session store parameters. 

Inside **Dialogflow Fulfillment**, modify the sample code for the event handler for each request. 

Inside the request event handler function (i.e. the `functions.https.onRequest`), you can get the conversationId as the last part of the `request.body.session` string after the last `/`.  

In the following `request.body.session` example string, `ea15cd3f-561d-4acf-90ae-5eb14145d38d` is the conversationId.

* `projects/appointmentscheduler-69117/agent/sessions/ea15cd3f-561d-4acf-90ae-5eb14145d38d`

You can get the LiveEngage conversationId with this line of code:

```javascript
request.body.session.substring(request.body.session.lastIndexOf("/") + 1);
```

For debugging, you can see the logs by clicking the link **“View execution logs in the Firebase console”** inside the Dialogflow Fulfillment page.

#### Call Session Store APIs

Click `package.json` to include your favorite Node.js HTTP library. In the example, we include the axios HTTP library.

The session store is useful in storing any context information gathered in a bot that you may want to use in a routing policy. For instance you may want to set the intent detected by a bot and then use it for any routing policy. 

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

#### Call AskMaven API

Now that you have the conversation id, use it to call the AskMaven API as follows. 
 
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
