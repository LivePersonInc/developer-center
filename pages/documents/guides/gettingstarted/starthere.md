---
title: Start Here
level1: Documents
level2: Guides
level3: Getting Started with LiveEngage APIs
permalink: start-here.html
root-link: true
level-order: 1
order: 1
indicator: both
---

### What is the Developer's Community?

Welcome to LivePerson's Developer's Community! This site's purpose is to provide you with in-depth documentation on LivePerson APIs and SDKs. This documentation will cover the basic information on every API (like its calls, methods, data structures and more) as well as more complex flows and applications. If you find any issue with the documentation, please don't hesitate to [visit the site's GitHub repository](hub.com/LivePersonInc/developers-community) and let us know!

If you're looking for support with any of the documents or APIs on the site, please don't hesitate to contact our Dev Support team directly. They are fully versed in the documentation published on this site and will be happy to assist you with any issue which you might encounter.

### Common Use Cases and Where You Should Get Started

Below you'll find a full description of each section of the Developer's Community. Such an overview can help you better understand what our documentation and APIs can help you do on top of the LiveEngage Open Platform. However, if you already have a project in mind and would simply like to start building, we've included a list of common use cases and which documents are a good entry point to start from. If you can't find the project you had in mind below, please don't hesitate to read the full description of the site below or reaching out to Dev Support for more guidance!

* Integrating LiveEngage with your Native App - simply refer to our Mobile App Messaging SDKs, [for iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-overview.html) or [for Android](https://developers.liveperson.com/android-overview.html). These include everything you need to know in order to integrate LiveEngage with mobile applications.

* Customizing LiveEngage Reporting or Creating New Reports - this use case would involve work with our Data APIs, specifically our [Data Access API](https://developers.liveperson.com/data-data-access-overview.html). It would also require developing some sort of UI if you'd like to display these reports. For more information, you can also refer to our [Custom Dashboard solution document](https://developers.liveperson.com/products-data-custom-dashboard-overview.html).

* Building or Integrating a New Workspace Widget - LiveEngage gives you the ability to add third party service widgets into the agent workspace for quick reference. For example, you could add your CRM to the agent workspace, allowing your agents to submit or update leads right from LiveEngage. To achieve this, please refer to the [Agent Workspace Widget SDK](https://developers.liveperson.com/agent-workspace-sdk-overview.html).

* Looking for more use cases? Check out the Major Flows document, a part of this Getting Started guide, for more advanced examples of how to use our APIs to build on top of our Open Platform.

**If you don't have a specific use case in mind, simply browse the Community to find out more about our API capabilities and features. The Developer's Community is comprised of the following sections:**

* Guides - this section includes general guides to using our APIs and SDKs. These work across all of our APIs except where otherwise mentioned. In this section you can find documents like Authentication, how to retrieve API keys, using Engagement Attributes and more.

* Consumer Experience - this section includes documentation pertaining to features which impact, manipulate or influence the consumer experience (i.e. the interface with which a consumer starts an interaction with your brand). This section includes useful documentation like our Mobile App Messaging SDK (used to integrate messaging right into your native application), the Messaging Window API (used to customize and create messaging windows) and the Connector API (used to build connector applications which integrate LiveEngage with many third party messaging platforms).

* Agent Interactions - this section includes documentation pertaining to agent behavior, workspace and features. Important documents include the Messaging Agent SDK (which enables bots as agents and handles sending messages to and from those bots), the Chat Agent API (which allows you to control how chat messages get sent to and from your agents) and the Agent Workspace Widget SDK (which allows you to create and integrate custom widgets into the LiveEngage agent workspace).

* Data - this section includes documentation pertaining to LivePerson's data storage, analysis and reporting capabilities. These documents allow you to poll LivePerson servers yourself, retrieving various data types yourselves for use in your own reporting tools. Main documents include the Data Access API (which allows you access to your account's data across all segments), the Messaging Operations API (which retrieves useful information at the contact center level, allowing agent managers to make their call centers more efficient) and the Engagement History API (which focuses on retrieving messaging interaction history and transcripts).

* Real Time Interactions - this section includes documentation pertaining to events which are fired or information that is passed during a conversation. These documents include the Engagement Window Widget SDK (which allows you to integrate third party web services to the engagement window, extending its functionality), the Engagement Attributes API (which allows you to pass and receive engagement attributes which provide further information on a visitor) and the Visit Information API (which allows you to retrieve information about the visitor in real time).

* Account Configuration - this section includes documentation pertaining to APIs which allow you to configure your LiveEngage account via REST calls. This allows you to perform bulk actions with greater ease on your account or configure it programmatically, according to rules which you determine. These documents include the Predefined Content API (which allows you to retrieve, create and compare predefined content on your account), the Automatic Messages API (which allows you to retrieve, create and compare automatic messages on your account) and the Agent Status Reason API (which allows you to retrieve, create and compare status reasons on your account).

* Admin - this section includes documentation pertaining to APIs which allow you to configure various administration features on your account, such as creating new skills, agent groups and more. Much like the Account Configuration documents, this allows you to perform bulk actions with greater ease on your account or configure it programmatically, according to rules which you determine. These documents include the Skills API (which allows you to retrieve, create and compare skills on your account), the Users API (which allows you to retrieve, create and compare users on your account) and the Profiles API (which allows you to retrieve, create and compare profiles on your account).

### Before You Get Started - Considerations and Requirements

Because this Community includes a host of diverse documents, encompassing the considerations and the requirements for all of them in this document is challenging. Therefore, each document has its own overview, where specific considerations for using the API/SDK are listed. However, there are a few considerations and requirements which are true for all resources on this sit and we'll cover them here for quick reference.

* Account requirements - many of the APIs documented on this site configure and manipulate LiveEngage features or capabilities. Therefore, in order to use these APIs, you need to first make sure your account is configured to access those features. A good example would be using the Agent Messaging SDK to connect a bot as an agent to LiveEngage; if your account is not enabled to support bot users, you won't be able to use this SDK. **The best way to check if certain features are enabled for your account or not is to directly contact your account team or LivePerson Support**. Doing this before you start developing will save you more work and frustration down the line.

* **If you do not currently have a LivePerson account or you're looking for a different one to work on, you can simply create a Developer's Account by clicking here. Please note that in order to get all the relevant features enabled for this account, you'll need to contact your account management team or LivePerson Support.**

* Development languages - most of our APIs and SDKs require your developers to be fluent in JavaScript (and its iterations, like NodeJS). Since we use a REST model, fluency in the JSON is also highly recommended (although most JSON payloads tend to be simple, there are exceptions to this rule, like with Structured Content). Our Mobile App Messaging SDKs have both an iOS and an Android version, which require knowledge of Swift and Java, respectively. General knowledge of HTTP calls and responses, REST APIs, server to server communication and web applications is also highly recommended. For our Data APIs, retrieving the information is only the first step and data analysis/research skills are highly recommended.

* Authentication - some of our APIs require authentication before using them. This is done via either of two methods: authentication via login (using your regular account credentials) or authentication via an API key (created and retrieved via the LiveEngage UI). Before you start work with our APIs, it's best to make sure you have valid credentials for your account (note that the permission levels for the user you'll use to login are the same permissions your user has in LiveEngage) and a relevant API key. To learn more about the login method, please [see this guide](https://developers.liveperson.com/login-getting-started.html). To learn more about retrieving API keys, [use this guide](https://developers.liveperson.com/guides-gettingstarted.html). For more in-depth information and additional authentication methods, please see the full Authentication Getting Started segment.

### How to Read LivePerson Documents
