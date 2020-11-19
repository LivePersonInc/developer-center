---
pagename: Custom Static or Function
redirect_from:
  - maven-context-warehouse-custom-static-or-function.html
  - maven-ai-context-warehouse-custom-static-or-function.html
  - conversation-orchestrator-context-warehouse-custom-static-or-function.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Conversation Context Service
permalink: conversation-orchestrator-conversation-context-service-custom-static-or-function.html
indicator: messaging
---

Conversation Orchestrator allows you to create custom static data, or use LivePerson Functions to connect to external data sources. 

<img class="fancyimage" width="750" src="img/maven/conversationContextService-custom.png">

### Create Static Variable

Static variables are useful for storing constant data or lists that can be used in policies. These are used throughout the lifecycle of the policy, and do not change at runtime. The common use case for this would be creating a list, for example a list of VIPs, and then using the condition (CONTAINS or IS_IN) in a policy. 

1. To create a new static variable login to Conversation Orchestrator using your Conversational Cloud credentials and then navigate to Conversation Context Service / Custom

2. Click on the **Static +** button

3. Enter the name and the value of the new variable in the text input area. This example shows how to create a list of VIP emails. 

    ```javascript
    {
        name: "vipList"
        type: "static",
        payload: ["bob@test.com", "tom@test.com", "amy@test.com"]
    }
    ```

4. Click **Save** button to save the new attribute. 

### Create a LivePerson Function Variable

You can create a FaaS function to fetch information from an external source at runtime, for example retrieving customer information from a Salesforce CRM database. 

#### Setup LivePerson Functions

[Create and deploy a FaaS function](liveperson-functions-getting-started.html). 

Next you need to setup an API user to invoke the function.

1. Create an LE API key

    <img class="fancyimage" width="500" src="img/maven/Create FaaS API 1.png">

    <img class="fancyimage" width="500" src="img/maven/Create FaaS API 2.png">

    <img class="fancyimage" width="500" src="img/maven/Create FaaS API 3.png">

2. Create new LE user, and assign it to the API key for login

    <img class="fancyimage" width="500" src="img/maven/Create FaaS User.png">

3. Grant the FaaS invocation permissions (can re-use Administrator, if desired)

    <img class="fancyimage" width="500" src="img/maven/Faas invocation permissions 1.png">

    <img class="fancyimage" width="500" src="img/maven/Faas invocation permissions 2.png">


#### Create a FaaS attribute in Conversation Orchestrator

Once you have created a Function, you can now use that as an attribute in Conversation Context Service to fetch external data at runtime. 

1. To create a new FaaS attribute, login to Conversation Orchestrator using your Conversational Cloud credentials and then navigate to Conversation Context Service / Custom

2. Click on the **FaaS +** button

3. Enter the name and the payload for the FaaS function using the user credentials you created. 
    1. Faas ID: Retrieve the ID from the URL of your Function (end part of the URL)
        <img class="fancyimage" width="500" src="img/maven/Get FaasID.png">

    2. Keys: Retrieve the username, secret, accessToken, and accessTokenSecret from the API key you created before, and copy and paste them in the JSON. 
        <img class="fancyimage" width="500" src="img/maven/Faas keys.png">

{% raw %}
```javascript	
{
    name: "isVIP"
    type: "faas",
    {
        "payload": {
            "faasId": "47ce7285-bde9-437e-8592-09c3aa9fb6d8",
            "appKey": {
                "username": "mavenBot",
                "appKey": "<enter app key>",
                "secret": "<enter secret>",
                "accessToken": "<enter access token>",
                "accessTokenSecret": "<enter access token secret"
            },
            "body": {
                "headers": [],
                "payload": "{{namespace1.salesforceId}}"
            }
        }
    }
}
```
{% endraw %}

Click Save button to save the new attribute. 
