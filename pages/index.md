---
pagename: Welcome Developers!
sitesection: Documents
categoryname: "Welcome"
permalink: index.html
indicator: both
---

{: .important}
At the end of Q1 2019, **LivePerson plans to deprecate all support for TLS 1.0 and 1.1**. If you still use these protocols, an upgrade to TLS 1.2 or higher on your end is required to ensure continued support of all LivePerson services.

The LiveEngage platform offers a messaging solution that you can harness and enhance by integrating LiveEngage with your native app, customizing LiveEngage reports or creating new reports, and building or integrating workspace widgets. This can be achieved using our various APIs and SDKs.  

Our APIs configure and manipulate LiveEngage features and capabilities. To use these APIs, you must make sure to configure your LiveEngage account to access these features. For example, if you want to use the Agent Messaging SDK to connect a bot, then your account must support bot users. Therefore, before working with any of the below documentation, it's best to contact your account team or LivePerson Support to check that the prerequisite features are enabled for your account.

Most user actions within LiveEngage can be performed programmatically using the REST API. Some of the key categories are:

- **[Domain API](essential-resources-domain-api.html)** for returning the base domain for your LivePerson account, which is used in conjunction with the other APIs outlined in the documentation.

- **[Login Service API](login-service-api-overview.html)** for logging into LiveEngage as a user with credentials or as an application with an API key. After logging in, you receive a session token (Bearer) to use for other related API calls.

- **[Engagement attributes](essential-resources-engagement-attributes.html)** for collecting specific information about the visitor such as product viewed, purchase information, errors the visitor encountered, and search results. LiveEngage provides out-of-the-box information for the visitor’s geolocation, the amount of time spent on a page, and the pages they viewed, among other parameters.

- **[Data APIs](essential-resources-data-apis.html)** for retrieving your contact center’s information such as types of conversations, load, and messaging transcripts.

- **[Bot connectors](bot-connectors-getting-started.html)** for integrating third-party messaging platforms and LiveEngage.  Bot connectors send/receive text messages, send structured content, transfer the conversation to other skills, change Time To Response, and close a conversation.


<p style="text-align: right">
<a href="before-you-get-started-let-s-get-started.html"><img src="../img/btn-lets-get-started.png"></a></p>

<p><br></p>
---
<p></p>

### Common use cases

To better understand our documentation, APIs, and the LiveEngage platform, we’ve listed our common use cases as entry points into the documentation to help you start building an API client. If, however, you can’t find the project you had in mind, reach out to LivePerson Support for guidance.

<p><br></p>

#### Integrate LiveEngage with your native app

You can integrate your native iOS or Android app with LiveEnage using the Mobile Messaging SDK.  When you implement this SDK and its APIs, brands can create and manage digital engagements that start in your native app.  This allows customers to communicate with the brand's agents through their channel of choice. For more information, refer to the Mobile Messaging SDK for [Android](mobile-app-messaging-sdk-for-android-overview.html) or [iOS](mobile-app-messaging-sdk-for-ios-overview.html).

<p><br></p>

#### Customize LiveEngage reports or create new ones

Working with historical data APIs, brands can address specific goals and KPIs by accessing their entire raw data.  Brands can use this data in data warehouse systems as well as create customized reports.  

Some of the key use cases are:

- **Retrieve up to 13 months of historical conversations**, both metadata and content for a specific consumer using the [Consumer Messaging History API](https://developers.liveperson.com/consumer-messaging-history-api-overview.html). This API is based on the REST architecture and supports the HTTPS GET protocol. All retrieved data is returned in JSON format. This API supports CORS which enables cross-domain data transfers.

- **Retrieve agent activity data per region and review agent utilization** using the [Data Access API](https://developers.liveperson.com/data-access-api-overview.html). The brand can integrate the data with specific regional information from their workforce management system. This API is based on the REST architecture style and supports the HTTPS GET protocol (data retrieval), all retrieved data is returned in JSON format.

- **Search, filter and keep copies of chat transcripts and related data**, for example surveys, using the [Engagement History API](https://developers.liveperson.com/engagement-history-api-overview.html). You can integrate and further analyze this data with third-party tools like DWH and CRM systems. This API is based on the REST architecture style.

- **Retrieve the most up-to-date information available about contact center messaging interactions** using the [Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-overview.html). This API makes it possible to search, filter and analyze data and transcripts of open and closed conversations. This API supports the HTTP POST functionality (data retrieval), and all data is returned in JSON format.

- **Comply with the GDPR** and permanently delete any personal data that the consumer requests to be deleted using the [Personal Data Deletion API](https://developers.liveperson.com/personal-data-deletion-api-overview.html). Once the data has been deleted there is no way to restore it. This API is not meant for massive deletion of data, there is an internal mechanism which will protect the system from such misuse of the API.

<p><br></p>

#### Build or integrate workspace widgets

You can integrate your application with the LiveEngage Agent Workspace using the [Agent Workspace Widget SDK](agent-workspace-widget-sdk-overview.html), which is a lightweight, client-side communication package. The Agent Workspace Widget connects with visitors and handles multiple concurrent connections from one central console, by opening applications directly within the Agent Workspace.

When you implement this SDK, and its APIs, you can achieve two-way communication between LiveEngage and external applications. This allow you to receive more in-depth information about your visitors, so you can assist them more effectively and efficiently. Brands can also send conversation lines directly from the application, and develop the ability to transfer the conversation transcript automatically to the external application.

You can also use the [Engagement Window Widget SDK](engagement-window-widget-sdk-overview.html) with the Agent Workspace Widget SDK. This allows sharing of rich media between the customer and the agent. An external platform facilitates a direct connection between the two SDKs using unique session IDs, providing a seamless widget integration framework.


<p><br></p>
---
<p></p>

### Major Flows

These "flows" demonstrate how certain key APIs work with and inform other APIs. The three APIs listed below are essential for working with our platform. For example, if you're looking to use the Messaging Window API to rebuild our engagement window, you could also employ the Monitoring API listed below to track visitors, pass information about them to the agent and update their information depending on the conversation's result. Similarly, if you're looking to build custom applications, you'll need to authenticate them using our Authentication methods.

These are just same of the uses for these APIs. Since they provide entry points into our platform or the ability to more closely track and maintain visitor information, they have numerous use cases when used in conjunction with our other APIs.

#### Login

The Login Service API provides endpoints to manage the User Session in LiveEngage, such as User Login, Application Login, Logout and Refresh. Use this API to log into LiveEngage as a user with credentials or an application with an API key. After logging in, you receive a session token (Bearer) to use for other related API calls.

<p style="text-align: right">
<a href="login-service-api-overview.html" center><img src="../img/btn-view-login-service-api.png" class="center"></a></p>

<p><br></p>

#### Authentication

All authenticated information is encrypted and transferred over SSL, using the OAuth 2.0 and OpenID Connect standards, via a JSON Web Token.  Encryption ensures that your customer's data stays safe and unable to be manipulated.

<p style="text-align: right">
<a href="essential-resources-authentication.html" center><img src="../img/btn-view-auth-docs.png"></a></p>

<p><br></p>

#### Monitoring

The Monitoring API enables consumer monitoring and engagement flows.  When you combine monitoring capabilities with our Campaigns feature, you display tailored engagements to the right consumer at the right time.   If you're looking to build your own customized mobile experience in conjunction with our other APIs, you can enrich those APIs with monitoring. If you're already using other LivePerson APIs to build custom solutions, you'd need to work with this API directly to enable communication with those custom solutions.

<p style="text-align: right">
<a href="monitoring-api-overview.html" center><img src="../img/btn-view-monitoring-api-docs.png"></a></p>
