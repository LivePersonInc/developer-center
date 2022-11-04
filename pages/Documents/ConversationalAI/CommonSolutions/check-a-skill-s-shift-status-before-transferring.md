---
pagename: Check a Skill's Shift Status before Transferring
sitesection: Documents
categoryname: "Conversational AI"
documentname: Common Solutions
permalink: common-solutions-check-a-skill-s-shift-status-before-transferring.html
indicator: both
date_updated: 2022/11/14
---

### Use case

In a Conversation Builder bot, you’re implementing a flow to transfer the consumer to a human agent. You need to know whether the skill to which you want to transfer is *on shift*, so you can fork the dialog’s logic and only perform the transfer if this is the case.

### Products involved

* [Conversation Orchestrator](conversation-orchestrator-overview.html) (specifically, its [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) or CCS)
* [Conversation Builder](conversation-builder-overview.html)
* [LivePerson Functions](liveperson-functions-overview.html)

### Workflow

#### Step 1: Create a bot agent to retrieve the bearer token required by the shift status API

To retrieve shift status info for all skills for an account, the [Shift Status by Account API](shift-status-api-methods-get-shift-status-by-account.html) requires a bearer token that’s retrieved from a logged-in bot agent user. So you need to create a bot agent user and store its credentials using LivePerson Functions `secretClient` methods. This lets you use a function to periodically perform the following:

1. Call the Login API with the bot user’s credentials to ensure you have a current, valid bearer token.
2. Retrieve the shift status info.

##### Create the bot agent user

In the User Management section of Conversational Cloud, create a new bot agent. For example, you might create one with a login name of “login-api-faas.”

When specifying the login method, make sure to select “API key,” generate a new key, and record this info somewhere (you’ll need it later):

* Login name
* App key
* Secret
* Access token
* Access token secret

After recording the info, assign the agent the role of “Agent,” and save the bot agent user. You don’t need to assign a skill to the user.

##### Save the login credentials in the Secret Storage within LivePerson Functions

In LivePerson Functions, access the Secret Storage, and create a new secret with the following:

* **Key**: loginCredentials
* **Type**: JSON
* **Value**: *See below*

For the value, insert a JSON object with the info you previously retrieved from the bot agent user:

```json
{
 "username": "<<login name>>",
 "appKey": "<<bot app key>>",
 "secret": "<<bot secret>>",
 "accessToken": "<<bot access token>>",
 "accessTokenSecret": "<<bot access token secret>>"
}
```

{: .attn-alert}
Omit the << and >> brackets when entering the JSON.

#### Step 2: Get your developer key

In Conversation Orchestrator:

* Copy your developer key (Maven API key), so you can use it in calls to the CCS.

#### Step 3: Create a function that retrieves the shift status info and sends it to the CCS

{: .attn-note}
Before completing this step, verify the Conversation Context Service is [turned on in Bot Accounts](conversation-builder-scripting-functions-manage-the-conversation-context-service.html#getting-started).

Back in LivePerson Functions:

1. Save your developer key (Maven API key) to your Secret Storage.
2. Create a function that retrieves the shift status info at scheduled intervals and updates a namespace in the CCS with this info. This should be a “No Event” function. You might name it “currentShiftStatus.”

    You need to ensure that the CCS URL is accessible from the function. So, in the function’s Coding Details, give access to external domains. Then add *.context.liveperson.net. Or, whitelist the domain on the settings page.

3. Add the code that gets the shift status info using the [Shift Status by Account API](shift-status-api-methods-get-shift-status-by-account.html) and updates the CCS with this info.

    {: .attn-note}
    [Sample code](https://github.com/LivePersonInc/ConversationBuilder-Samples/blob/entityreplace/faas-samples/shift-status/shiftStatus.js) is available in our Conversation Builder repository in GitHub.

4. Save and deploy the function.
5. Test: Invoke the function to ensure it’s working. Then, verify using an API client (e.g., Postman) that the namespace and session are updated in the CCS.
6. Schedule the function to run every 15 minutes (or as per your requirements) so that the shift status info remains fresh.

    At this point, you now have a collection of keys in global scope within the CCS.  The keys map to the skill IDs currently in the account. Additionally, you have a timestamp, so you can see when the values were last updated.

#### Step 4: In the bot, retrieve the shift status info from the CCS and use it as desired

Within an interaction in the bot, query the CCS for the skill’s shift status info, and perform the transfer if appropriate.

### Deep dive

Interested in this use case? Want more details? Join the LivePerson Developer Forum and visit [this post](https://talkyard.livepersonai.com/-24/caching-shift-status-api-data-w-faas-conversation-context-service).