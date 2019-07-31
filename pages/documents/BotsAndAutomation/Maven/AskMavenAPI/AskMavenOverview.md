---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Maven
subfoldername: AskMaven API
permalink: maven-askmaven-api-overview.html
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
   *Inputs: JSON payload of context variables required to run the policies
   *Outputs: List of outcomes by running all enabled policies. Should be list of actions with following info
      * Policy ID
      * Outcome (next action, for example transfer to agent or skill)

Note: This API will run through all enabled policies. The API does not allow a brand to run a specific policy. 

### Typical use of AskMaven from a Bot
This provides a typical implementation of AskMaven API from a bot to handle routing decisions. Please note, that AskMaven may also be used from Apps, Websites, and other entry points in various ways

<img class="fancyimage" style="width:700px" src="img/maven/askmaven2.png">

### Get Started

* You will need to create and use the API key before using Ask Maven Service. Contact Live Person Support to create your API Key.  Alternately navigate to Ask Maven section of Maven Hub, where the following tasks can be accomplished:
     * Get the Maven API key
     * Links to documentation on how to use API
 

Go to Settings/Developer Keyin the Maven Hub to get the latest key. 
Warning:
Generating new API key overrides the existing value and this would impact any existing integrations using the previous API key. Therefore access to generate/re-generate keys is strictly limited to LP administrators to reduce the risk of brands accidentally calling the “generate API key” service and overriding each other’s API keys!
  
<img class="fancyimage" style="width:750px" src="img/maven/askmaven1.png">

  
Only 1 API key can be active for any given account ID at any given time. The API key will be same for all Maven APIs - Context and Ask Maven. This API key is specific for Maven services and is not for Live Engage services. 

* Get your base URL

    You will use the base URL in all API calls.

    * Americas: https://z1.askmaven.liveperson.net

    * EMEA: https://z2.askmaven.liveperson.net

    * APAC: https://z3.askmaven.liveperson.net

