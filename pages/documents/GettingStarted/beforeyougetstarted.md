---
pagename: Considerations and Requirements
sitesection: Documents
categoryname: "Getting Started"
documentname: Before You Get Started
permalink: before-you-get-started-considerations-and-requirements.html
indicator: both
---


Each document has an overview with specific considerations for using the API/SDK listed. However, there are a few considerations and requirements that apply to all resources, which we'll cover here for quick reference. 

#### Account requirements

Many of the APIs configure and manipulate LiveEngage features or capabilities. Therefore, to use these APIs, you must make sure you configure your account to access those features. For example, to use the Agent Messaging SDK to connect a bot, your account must be enabled to support bot users.  To check the enabled features for your account, contact your account team or LivePerson Support. 

<div class="important">
If you do not have a LivePerson account or you're looking for a different one to work on, create a <a href="http://register.liveperson.com/developer/signup">Developer's Account</a> and then contact your account team or LivePerson support to have features enabled. 
</div>

#### Development languages

Most of our APIs and SDKs require you to be fluent in JavaScript (and its iterations, like NodeJS). Since we use a REST model, fluency in the JSON format is also highly recommended (although most JSON payloads tend to be simple, there are exceptions to this rule, like with Structured Content). Our Mobile App Messaging SDKs have both an iOS and an Android version, which require knowledge of Swift and Java, respectively. General knowledge of HTTP calls and responses, REST APIs, server to server communication and web applications is also highly recommended. For our Data APIs, retrieving the information is only the first step and data analysis/research skills are highly recommended.


#### Authentication

Some of our APIs require authentication before using them. This is done via either of two methods: authentication via login (using your regular account credentials) or authentication via an API key (created and retrieved via the LiveEngage UI). Before you start work with our APIs, it's best to make sure you have valid credentials for your account (note that the permission levels for the user you'll use to login are the same permissions your user has in LiveEngage) and a relevant API key. To learn more about the login method, please [see this guide](login-getting-started.html). To learn more about retrieving API keys, [use this guide](guides-gettingstarted.html). For more in-depth information and additional authentication methods, please see the full Authentication Getting Started segment.
