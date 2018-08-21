---
pagename: Before You Get Started
sitesection: Documents
categoryname: Guides
documentname: Getting Started with LiveEngage APIs
permalink: getting-started-with-liveengage-apis-before-you-get-started.html
indicator: both
---

### Considerations and Requirements

Because this site includes a host of diverse documents, encompassing the considerations and the requirements for all of them in this document is challenging. Therefore, each document has its own overview, where specific considerations for using the API/SDK are listed. However, there are a few considerations and requirements which are true for all resources on this sit and we'll cover them here for quick reference.

* **Account requirements** - many of the APIs documented on this site configure and manipulate LiveEngage features or capabilities. Therefore, in order to use these APIs, you need to first make sure your account is configured to access those features. A good example would be using the Agent Messaging SDK to connect a bot as an agent to LiveEngage; if your account is not enabled to support bot users, you won't be able to use this SDK. **The best way to check if certain features are enabled for your account or not is to directly contact your account team or LivePerson Support**. Doing this before you start developing will save you more work and frustration down the line.

* **If you do not currently have a LivePerson account or you're looking for a different one to work on, you can simply create a Developer's Account by clicking here. Please note that in order to get all the relevant features enabled for this account, you'll need to contact your account management team or LivePerson Support.**

* **Development languages** - most of our APIs and SDKs require your developers to be fluent in JavaScript (and its iterations, like NodeJS). Since we use a REST model, fluency in the JSON is also highly recommended (although most JSON payloads tend to be simple, there are exceptions to this rule, like with Structured Content). Our Mobile App Messaging SDKs have both an iOS and an Android version, which require knowledge of Swift and Java, respectively. General knowledge of HTTP calls and responses, REST APIs, server to server communication and web applications is also highly recommended. For our Data APIs, retrieving the information is only the first step and data analysis/research skills are highly recommended.

* **Authentication** - some of our APIs require authentication before using them. This is done via either of two methods: authentication via login (using your regular account credentials) or authentication via an API key (created and retrieved via the LiveEngage UI). Before you start work with our APIs, it's best to make sure you have valid credentials for your account (note that the permission levels for the user you'll use to login are the same permissions your user has in LiveEngage) and a relevant API key. To learn more about the login method, please [see this guide](login-getting-started.html). To learn more about retrieving API keys, [use this guide](guides-gettingstarted.html). For more in-depth information and additional authentication methods, please see the full Authentication Getting Started segment.
