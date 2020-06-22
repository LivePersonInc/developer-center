---
pagename: Implementing the Shift Status & Current Queue Health APIs
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Tutorials & Guides
permalink: conversation-builder-tutorials-guides-implementing-the-shift-status-current-queue-health-apis.html
indicator: both
---

### Overview

At LivePerson, we’ve provided a variety of APIs that you can call from Conversation Builder to improve the user experience of your bots. Two of these are the [Shift Status](shift-status-api-methods-get-shift-status-by-account.html) and [Current Queue Health](messaging-operations-api-methods-messaging-current-queue-health.html) APIs, which return data about the availability of your agents and current wait times that users are experiencing when connecting to those agents. This guide will serve as a walkthrough of the implementation of these APIs within an Agent Escalation dialog.

### Setup needed

For the purpose of configuring these APIs, we will need the following:

- Bearer token
- Bot account number
- A deployed bot (demo or production)
- Site settings configuration
- URL domains for each API call

#### Bearer token retrieval

For authorization purposes, these API requires that a bearer token be passed along in an authorization header. To retrieve this bearer token, we'll take advantage of the [getLPEngagementAttribute](conversation-builder-scripting-functions-get-set-contextual-data.html#get-current-and-previous-skills) scripting function. Insert the following code within the `__initConversation()` function inside of **Global Functions**.

```javascript
// Bearer Token Needed for Messaging Queue Health & Shift Status APIs
var bearerToken = botContext.getLPEngagementAttribute("BearerToken");
botContext.setBotVariable("bearerToken", bearerToken, true, false);
```

The bearer token is only generated for a deployed bot; therefore, simply testing with Conversation Builder's Preview tool will not be sufficient for these APIs.

#### Bot account number

You likely used an account number to log into LiveEngage, but, for awareness, your account number can be found in the URL of the LiveEngage platform, shown below.

<img class="fancyimage" style="width:550px" src="img/ConvoBuilder/guideShiftStatus_botAccountNumber.png">

Taking advantage of the [getLPAccountId](conversation-builder-scripting-functions-get-set-contextual-data.html#get-lp-account-id) function, we're able to bring this account value into our bot and set it as the bot variable ‘botAccountNumber’.

```javascript
//LE account number, needed for api calls
var botAccountNumber = botContext.getLPAccountId();
botContext.setBotVariable('botAccountNumber', botAccountNumber, true, false);
```

#### Site setting configuration

To enable use of the Shift Status and Current Queue Health APIs, LivePerson must enable them for your account. Please contact your LivePerson account manager to request this.

#### URL domains

These APIs use different base URIs, which differ based on the account and the service being accessed. To retrieve the specific base domain for each resource, take advantage of our [Domain API](common-resources-domain-api.html). Best practices for domain retrieval have us calling this API from within the bot to guard against the unlikely situation of the domains changing. To keep this document simple, we'll be hard coding in these values instead.

Using [Postman](https://www.postman.com/), include the account number and the service name in your API call to retrieve that service’s domain. The service names for these APIs can be found in their respective ‘Overview’ sections in the documentation; however, to simplify things, here are the service names you'll need to use:

- Shift Status: asyncMessagingEnt
- Current Queue Health: leDataReporting

For example, the URI for retrieving the Shift Status domain is:
`http://api.liveperson.net/api/account/34274562/service/asyncMessagingEnt/baseURI.json?version=1.0`

Calls to this URI return an object with a “baseURI” value that you'll want to store to a variable within Global Functions. 

```javascript
// variables needed for Shift Status and Queue Health APIs
botContext.setBotVariable('shiftStatusDomain', 'va.msg.liveperson.net', true, false);
botContext.setBotVariable('queueHealthDomain', 'va.data.liveperson.net', true, false);
```

### Building the integrations

#### Setting the skill ID

Prior to calling on the Shift Status API, you'll need to set the skill ID that is being escalated to. This is typically done with a switch statement within a function defined in Global Functions, setting variables based on a user’s intent. An example of this function can be found in our [Simple Router template](conversation-builder-bot-templates-simple-router.html) and is as follows:

```javascript
// FILL IN THE APPROPRIATE SKILL & INTENT INFORMATION
function transfer(intent){
 var transferMessage = '';
 var skillId = '';
 var skillName = '';
 // check for which intent
 switch(intent){
   case "billing":
     transferMessage = "Hold on while I transfer you to someone who can help with your billing issue...";
     skillId = '1234567890';
     skillName = intent;
     break;
   case "account":
     transferMessage = "Hold on while I transfer you to someone who can help with your account issue...";
     skillId = '2345678901';
     skillName = intent;
     break;
   case "help":
     transferMessage = "Hold on while I transfer you to someone who can help with your issue...";
     skillId = '3456789012';
     skillName = intent;
     break;
   default:
     transferMessage = "Hold on while I transfer you to someone who can help with your issue...";
     skillId = '4567890123';
     skillName = 'default';
     break; 
 }     
 botContext.setBotVariable("transferMessage", transferMessage, true, false);
 botContext.setBotVariable("skillId", skillId, true, false);
 botContext.setBotVariable("skillName", skillName, true, false);
}
```

Prior to calling our Shift Status API, we will call this function to provide us with the relevant skill ID. With the skill ID now saved in a bot variable, we can work with the results of the API calls.

#### Constructing the Shift Status integration

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/guideShiftStatus_integrShiftStatus.png">

Having previously done our setup, we're able to quickly interpolate the variable values into the API URL and authorization header to retrieve data from this API.

```javascript
// GET URL
'https://{$botContext.shiftStatusDomain}/api/account/{$botContext.botAccountNumber}/shift-status'
// Request Headers
'Authorization': 'Bearer {$botContext.bearerToken}'
```

As seen from the [documentation](shift-status-api-methods-get-shift-status-by-account.html), the result of this call will be an array of JavaScript objects. Each object will have a skill and a corresponding `onShift` status. To ensure that the skill we are escalating to has an agent to receive the call, we'll want to iterate through our array of objects until we can locate the desired skill and check its `onShift` Boolean value. This work will be done within the **Transform Result Script** section of the integration.

```javascript
// Retrieve json data and parse
var shiftStatusData = botContext.getBotVariable('api_Shift_Status');
var shiftStatusJsonResponse = JSON.parse(shiftStatusData.jsonData);
var jsonResponse = shiftStatusJsonResponse.api_Shift_Status;
 
// iterate through all skills returned by shift status to see if the user's intent can be fulfilled.
var skillId = getVariable('botAgentSkillId');
for (var i = 0; i < jsonResponse.length; i++) {
 if (skillId == jsonResponse[i].skillId) {
   setBotVariable('agentsAvailable', jsonResponse[i].onShift, true, false);
 }
}
```

Resulting from this call, we will have an `agentsAvailable` bot variable with a Boolean value indicating if agents with that skill are currently on shift. This will be of use in our Agent Escalation dialog later.

#### Constructing the Current Queue Health integration

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/guideShiftStatus_integrQueueHealth.png">

Initial setup of the Current Queue Health API integration is very similar to what we have done for the Shift Status API. Again, we will interpolate our variable data into the URL and Authorization Headers values to form the call.

```javascript
// GET URL
'https://{$botContext.queueHealthDomain}/operations/api/account/{$botContext.botAccountNumber}/msgqueuehealth/current/?v=1'
// Request Headers
'Authorization': 'Bearer {$botContext.bearerToken}'
```

As shown in the [documentation](messaging-operations-api-methods-messaging-current-queue-health.html), the result of this call provides a fair amount of data and metrics that you can use to modify your user’s conversation and set appropriate expectations. Which metrics you deem to be important in adjusting your conversations can vary depending on the brand or situation, so we don't make any prescription here as to what you should be using. For demonstration purposes, we'll capture the `avgWaitTimeForAgentAssignment_NewConversation` and `waitTimeForAgentAssignment_90thPercentile` values for use within our escalation dialog.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/guideShiftStatus_customDataFields.png">

### Implementation

<img class="fancyimage" style="width:650px" src="img/ConvoBuilder/guideShiftStatus_botImpl.png">

We will call these APIs within our Agent Escalation dialog to customize and further improve the flow of the conversation. 

#### Shift Status

Prior to the shift status call, you'll need to make use of the `transfer` function we defined to identify the skill ID we are getting the status for. If you have not already called this function when you are ready to check the shift status, the pre-process code for this API call is an appropriate place to do so.

After successful completion of the Shift Status API call and with the `agentsAvailable` bot variable in hand, we are able to direct the conversation based on its value. If the value is `false`, explaining that agents are unavailable and directing to alternative methods for resolution is appropriate as shown above. If `true`, we'll want to bypass that message to then make our call to the Current Queue Health API. For this demonstration, we’ve inserted the following code into the pre-process code of the question following the shift status check:

```javascript
var agentsAvailable = getVariable('agentsAvailable');
if (agentsAvailable) {
 botContext.setTriggerNextMessage('CurrentQueueHealth');
}
```

#### Current Queue Health

We can similarly direct the conversation based on the values we receive back from the Current Queue Health API. Previously, we had set our integration to save values for the average wait time and the 90% percentile wait time. Our goal is to modify the messaging in the case that our agents are seeing exceptionally high volume. To do so, we'll take advantage of these bot variables in the pre-process code of the interaction immediately following this API call. We'll perform a comparison between the two values, and, if the average wait time is higher than our 90% value, we'll direct to an alternative message:

```javascript
var avgWaitTime = parseInt(getVariable('Current_Queue_Health.avgWaitTime'));
var upperThreshold = parseInt(getVariable('Current_Queue_Health.90pctAvgWaitTime'));
if (avgWaitTime > upperThreshold) {
 botContext.setTriggerNextMessage('extended wait warning');
}
```

### Conclusion

Proper communication and expectation setting is vitally important to the user experience of your bot users. Automations should be instrumented to handle excessive loads and off-hours usage, both of which can be addressed with this guide. These APIs can be used together or separately to ensure that you are providing relevant and important information to your users.