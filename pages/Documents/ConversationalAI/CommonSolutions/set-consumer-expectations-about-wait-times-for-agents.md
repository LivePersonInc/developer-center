---
pagename: Set Consumer Expectations about Wait Times for Agents
sitesection: Documents
categoryname: "Conversational AI"
documentname: Common Solutions
permalink: common-solutions-set-consumer-expectations-about-wait-times-for-agents.html
indicator: both
date_updated: 2022/11/14
---

### Use case

In a Conversation Builder bot, you’re implementing a flow to transfer the consumer to a human agent. You need info on the status of the agent queue, so you can properly set the consumer’s expectations regarding how long the wait time is to message with an agent (and/or to properly route the consumer based on the queue status).

### Products involved

* [Conversation Orchestrator](conversation-orchestrator-overview.html) (specifically, its [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) or CCS)
* [Conversation Builder](conversation-builder-overview.html)
* [LivePerson Functions](liveperson-functions-overview.html)

### Workflow

#### Step 1: Create a namespace in the CCS to store the queue health info

{: .attn-note}
Before completing this step, verify the Conversation Context Service is [turned on in Bot Accounts](bot-accounts-account-details.html).

In Conversation Orchestrator:

1. In the Conversation Context Service (CCS) module, create a namespace to store the queue health info.
2. Copy your developer key (Maven API key) in the Developers module, so you can use it in calls to the CCS.

#### Step 2: Create a function that retrieves the queue health info and sends it to the CCS

In LivePerson Functions:

1. Save your developer key (Maven API key) to your Secret Storage.
2. Create a function that retrieves the current queue info at scheduled intervals and updates the namespace in the CCS with this info. This should be a “No Event” function. You might name it “currentQueueHealth.”

    You need to ensure that the CCS URL is accessible from the function. So, in the function’s Coding Details, give access to external domains. Then add `*.context.liveperson.net`. Or, whitelist the domain on the settings page.

3. Add the code that gets the queue health info using the [Messaging Current Queue API](messaging-operations-api-methods-messaging-current-queue-health.html) and updates the CCS with this info.

    {: .attn-note}
    [Sample code](https://github.com/LivePersonInc/ConversationBuilder-Samples/blob/entityreplace/faas-samples/current-queue-health/currentQueueHealth.js) is available in our Conversation Builder repository in GitHub.

4. Save and deploy the function.

5. Test: Invoke the function to ensure it’s working. Then, verify using an API client (e.g., Postman) that the namespace and session are updated in the CCS.

6. Schedule the function to run every 15 minutes (or as per your requirements) so that the queue health info remains fresh.

    At this point, you now have a session within the CCS that’s updated with a reasonable approximation of the current queue health, including info on the estimated wait time.

#### Step 3: In the bot, retrieve the queue health info from the CCS and use it as desired

Within an interaction in the bot, query the CCS for the queue health info, and send the consumer a message to set their expectations on wait times accordingly. Sample code is below.

##### Sample code

Add the following code to the interaction’s Pre-Process Code. In the `botContext.getGlobalContextData` method below, replace “messaging-operations-api” with the namespace value from your LivePerson function:

```javascript
var e = botContext.getGlobalContextData('messaging-operations-api', 'skillsMetrics');
 var skillId = botContext.getBotVariable('skillId');
 var awt = e[skillId].avgWaitTimeForAgentAssignment_AfterTransferFromAgent;
 botContext.setBotVariable('awt', awt, true, false);
```

### Constraints

LivePerson provides a number of APIs that are designed to be used with reporting dashboards to inform users about queue status, shift status of agents, etc. However, these APIs are not intended for use at conversational scale. Doing so could be detrimental to the stability of our platform.

This use case demonstrates a viable and responsible alternative to using these APIs directly in every conversation. In this solution, several Conversational Cloud services work together to regularly cache the needed data. The info is then made accessible via the CCS, which is a service that can properly handle a large volume of API calls across a large number of conversations.

### Deep dive

Interested in this use case? Want more details? Join the LivePerson Developer Forum and visit [this post](https://talkyard.livepersonai.com/-18/caching-current-queue-health-apis-w-faas-the-context-session-store).