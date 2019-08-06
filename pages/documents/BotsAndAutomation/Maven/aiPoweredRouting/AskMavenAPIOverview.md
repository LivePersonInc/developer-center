---
pagename: Ask Maven API Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: AI Powered Routing
permalink: maven-ai-powered-routing-ask-maven-api-overview.html
indicator: both
---

### What is the AskMaven API

The AskMaven API is a REST API that allows you and your bots, web sites, and apps to call Maven capabilities programmatically. You can use the API to ask Maven for the next best actions (route to skill, KB article, etc) for a concierge bot/app.

At this time, the API only provides interfaces to read and execute policies. Maven will not provide interfaces for other CRUD operations such as creating or updating an existing policy.

### Use Cases

Use the Ask Maven API to accomplish the following example workflows:

* Channel Switching from Website or App: 
     * A brand wants to provide different channels based on customer and Intent. E.g. “For an order cancellation intent send     conversation to messaging involving a bot, unless it’s a high value customer, in that case have them talk on the phone to a human agent”
     * They configure this policy in Maven hub 
     * They use Ask Maven API to return the which routing decision to make
     * Using the decision that Maven API returns, they provide the right experience to the consumer

 * Get AI Powered Routing Decisions
   * Returns the next action(s) by running all enabled policies in order
   * Inputs: JSON payload of context variables required to run the policies
   * Outputs: List of outcomes by running all enabled policies. Should be list of actions with following info
      * Policy ID
      * Outcome (next action, for example transfer to agent or skill)

Note: This API will run through all enabled policies. The API does not allow a brand to run a specific policy. 

### Typical use of AskMaven from a Bot
This provides a typical implementation of AskMaven API from a bot to handle routing decisions. Please note, that AskMaven may also be used from Apps, Websites, and other entry points in various ways

<img class="fancyimage" style="width:700px" src="img/maven/askmaven2.png">

## Developer Key

To use AskMaven APIs you will need to create and use an API key. To get your unique key:

4. Login to Maven with your LiveEngage credentials and then navigate to **Developer Key**.

5. Copy and paste the key you see in the experience and use it in your API headers. 

6. To generate a new key, click on the **Regenerate Key** button. Please note that this will invalidate the previous key. The key is shared for all Maven APIs and therefore you will have to use the new key wherever the APIs are being called.  

<img class="fancyimage" width="600" src="img/maven/image_47.png">

5. Sample Policies
