---
pagename: Context API Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Context Warehouse
permalink: maven-context-warehouse-context-api-overview.html
indicator: both
---

## Overview

The Context Services API is a REST interface to a cloud based repository for storing and retrieving session state attributes that can be carried over and used throughout the conversational journey. This allows continuity in conversations as context can be transferred between agents and bots enabling a true warm handoff. The context service can be used for several purposes. For example:

1. Save the conversation session state data in LiveEngage (e.g. agent notes), and then retrieve them later in a different conversation session with a different agent.

2. Save contextual attributes in a concierge bot (e.g. intents or customer information) and carry this context over to another bot or human skill. 

The Context APIs are part of Maven, LivePerson’s AI engine, that allows brands to store, retrieve, and manage custom attributes programmatically. The context store provides a system of hierarchically organizing your data.

<img class="fancyimage" width="600" src="img/maven/image_37.png">

Each brand can have multiple **namespaces** for different business use cases. Typically a namespace may group together related attributes, for example customer information such as name, email, phone number etc. which are stored as **Key-Value Pairs.** Brands can define as many attributes they need per namespace. To group together the attributes in a namespace for example a conversation session brands can use the **Session ID**. Each object in the hierarchical structure (Namespace, Session ID, KVPs) comes with CRUD (Create, Read, Update, Delete) operations using the REST APIs. 

## Example Use Cases

* Passing context (intent, customer info) and customer routing / escalation path between bots.

<img class="fancyimage" width="600" src="img/maven/image_38.png">

* Use shared context across different agents in a single conversation

<img class="fancyimage" width="600" src="img/maven/image_39.png">

* Carry over attributes and information collected in a multi-step conversational journey for continuity and warm handoffs between bots and human agents. 

<img class="fancyimage" width="600" src="img/maven/image_40.png">

## Developer Key

To use Context Session store APIs you will need to create and use an API key. To get your unique key:

1. Login to Maven with your LiveEngage credentials and then navigate to **Developer Key**.

2. Copy and paste the key you see in the experience and use it in your API headers. 

3. To generate a new key, click on the **Regenerate Key **button. Please note that this will invalidate the previous key. The key is shared for all Maven APIs and therefore you will have to use the new key wherever the APIs are being called.  

<img class="fancyimage" width="600" src="img/maven/image_41.png">

3. [Create your namespace](maven-context-api-methods.html#create-a-custom-namespace)
