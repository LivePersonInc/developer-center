---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Context Warehouse
permalink: maven-context-warehouse-overview.html
indicator: both
---

# Context Warehouse

1. Overview

The context warehouse is a centralized repository of various context attributes used by the Maven AI engine. Maven provides three types of Context Attributes:

1. Use Inbox System Attributes (e.g. user, conversation history, and operational context)

2. Define custom attributes with static data or external system integrations with [Functions](liveperson-functions-overview.html)

3. Use APIs to store and retrieve session attributes to carry over custom context throughout the conversational journeys

<img class="fancyimage" width="600" src="img/maven/image_34.png">

	Context warehouse attributes can be used in several ways. Some examples include:

1. Save conversation session state info in LiveEngage (e.g. agent notes), and retrieve them later in a different conversation session.

2. Save contextual attributes in concierge bot (e.g.) intents and carry over context to another bot or human skill.

3. Use intents and entities from a bot, and use them in conjunction with system inbox attributes, or custom static or [LivePerson Function](liveperson-functions-overview.html) to create complex routing policies. Please see section on AI Powered Routing to learn more how to create such policies. 

2. Inbox System Attributes

Inbox system attributes are available out of the box from the LivePerson platform. To view the list of available attributes, please login to Maven using your LiveEngage credentials, and then navigate to Context Warehouse>Conversation. 

These attributes can be used in building routing policies. To use them in a policy please copy and paste the name from the list and use in policy. Please see section on AI Powered Routing to learn more how to create such policies.

<img class="fancyimage" width="600" src="img/maven/image_35.png">

## Setup LiveEngage for Maven to access attributes

For Maven to have access to the system variables, please select these options in LiveEngage

1. Login to LiveEngage using your admin credentials

3. Custom Static or [Function](liveperson-functions-overview.html) Attributes

Maven allows you to create custom static data, or connection to LivePerson Functions. 

<img class="fancyimage" width="600" src="img/maven/image_36.png">

## Create Static Variable

Static variables are useful for storing constant data or lists that can be used in policies. These are used throughout the lifecycle of the policy, and do not change at runtime. The common use case for this would be creating a list, for example a list of VIPs, and then using the condition (CONTAINS or IS_IN) in a policy. 

1. To create a new static variable login to Maven using your LiveEngage credentials and then navigate to Context Warehouse/Custom

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

## Create a LivePerson Function Variable

You can create a [LivePerson Function](liveperson-functions-overview.html) to fetch a value of the variable at runtime from an external system or a datasource, for example VIP information from Salesforce CRM database. 

1. To create a new Function variable login to Maven using your LiveEngage credentials and then navigate to Context Warehouse/Custom

2. Click on the **FaaS +** button

3. Enter the name and the payload for the function

```javascript
{

name: "isVIP"

type: "faas",

payload: {

"faasId": "47ce7285-bde9-437e-8592-09c3aa9fb6d8",

"appKey": {

"username": "mavenBot",

"appKey": "def3d49f788643d084ac483a400e828f",

"secret": "1f6c5a370cb55380",

"accessToken": "b7f5d408d68041e88cadcb90b9c0bdaa",

"accessTokenSecret": "25b2bb285f37c902"

},

"includeFields": ["salesforceId"]

}

}
```

4. Click **Save** button to save the new attribute. 

4. Context Session Store And APIs