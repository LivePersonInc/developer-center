---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Context API
permalink: maven-context-api-overview.html
indicator: both
---

### What is the Context API

The Context Services API is a REST interface to a cloud based repository for storing and retrieving session state attributes that can be carried over and used throughout the conversational journey.

This allows continuity in conversations because context can be transferred between agents and bots enabling a true warm handoff. The context service can be used for several purposes. For example:

- Save the conversation session state data in LiveEngage (e.g. agent notes), and then retrieve them later in a different conversation session with a different agent.

- Save contextual attributes in a concierge bot (e.g. intents or customer information) and carry this context over to another bot or human skill. 

The Context API is part of Maven, LivePerson’s AI engine, that allows brands to store, retrieve, and manage custom attributes programmatically. The context store provides a system of hierarchically organizing your data.

<img class="fancyimage" style="width:500px" src="img/maven/context-data-store.png">

Each brand can have multiple **namespaces** for different business use cases. Typically a namespace may group together related attributes, for example customer information (name, email, phone number, etc.), which are stored as **Key-Value Pairs**. Brands can define as many attributes they need per namespace. 

To group together the attributes in a namespace, for example a conversation session, brands can use the **GroupID**. Each object in the hierarchical structure (Namespace, GroupID, KVPs) comes with CRUD (Create, Read, Update, Delete) operations using the REST API.

### Who is the Context API for

The Context API is part of the Maven AI solution which can now be used as a standalone service. You may want to use the Context API to retrieve and send values between bots. You may use the Context API to store information related to conversations.

### Example Use Cases

* Passing context (intent, customer info) and customer routing / escalation path between bots.

  <img class="fancyimage" style="width:800px" src="img/maven/context-use-case1.png">

* Use shared context across different agents in a single conversation

  <img class="fancyimage" style="width:800px" src="img/maven/context-use-case2.png">

* Carry over attributes and information collected in a multi-step conversational journey for continuity and warm handoffs between bots and human agents. 

  <img class="fancyimage" style="width:800px" src="img/maven/context-use-case3.png">

### Getting Started

1. Get your API Key

    You will need to create and use the API key before using Context Service. Contact LivePerson Support to create your API Key. Only 1 API key can be active for any given account ID at any given time.

2. Get your base URL

    You will use the base URL in all API calls.

    * Americas: https://z1.context.liveperson.net

    * EMEA: https://z2.context.liveperson.net

    * APAC: https://z3.context.liveperson.net

3. [Create your namespace](maven-context-api-methods.html#create-a-custom-namespace)
