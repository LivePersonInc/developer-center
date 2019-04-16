---
pagename: Welcome!
categoryname: "Welcome"
permalink: index.html
---

{: .important}
At the end of Q1 2019, **LivePerson plans to deprecate all support for TLS 1.0 and 1.1**. If you still use these protocols, an upgrade to TLS 1.2 or higher on your end is required to ensure continued support of all LivePerson services.

The LiveEngage platform offers a messaging solution that you can harness and enhance by integrating LiveEngage with your native app, customizing LiveEngage reports or creating new reports, and building or integrating workspace widgets.   For more details, see the [Common use cases](#common-use-cases) section below.

Since we use a REST model, we recommend you be fluent in:

- JavaScript, and its iterations like Node.JS, as well as JSON. Although most JSON payloads tend to be simple, there are exceptions to this rule, like with Structured Content.
- Swift and Java, respectively, for Mobile App Messaging SDKs for iOS and Android.
- HTTP calls and responses, REST APIs, server to server communication and web applications.
- Retrieving information and data analysis/research for the Data APIs.

--- 

### Building an API client
Our APIs configure and manipulate LiveEngage features and capabilities. To use these APIs, you must make sure to configure your LiveEngage account to access these features. For example, if you want to use the Agent Messaging SDK to connect a bot, then your account must support bot users.  Contact your account or LivePerson Support to check the enabled features of your account.  

Most user actions within LiveEngage can be performed programmatically using the REST API; some of the key categories are:

- **Login Service API** for logging into LiveEngage as a user with credentials or an application with an API key. After logging in, you receive a session token (Bearer) to use for other related API calls.
  
- **Domain API** for returning the base domain of LivePerson, which is used in the APIs outlined in the documentation.

- **Retry and KeepAlive** for sending period requests to keep your session alive. When you add a retry mechanism for API calls, you increase the reliability and stability of your application. 

- **Engagement attributes** for collecting specific information such as product viewed, purchase information, errors the visitor encountered, and search results. LiveEngage provides out-of-the-box information for the visitor’s geolocation, the amount of time spent on a page, and the pages they viewed. 

- **Data APIs** for retrieving your contact center’s information, types of conversations, and messaging transcripts. 

- **Bot connectors** for integrating third-party messaging platforms and LiveEngage.  Bot connectors send/receive text messages, send structured content, transfer the conversation to other skills, change Time To Response, and close a conversation. 

---  

### Prerequisites before you build an API client

Before you can use our APIs, you must do a few things first: 

1. Create a [LiveEngage account](https://register.liveperson.com/checkout/104139/order_information).  
1. Retrieve your domain using the [Domain API](https://developers.liveperson.com/retrieve-api-domains-using-the-domain-api.html).
1. Create an application key in LiveEngage. For details, refer to [Create a new API key](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html). 
1. Create a Bot user in LiveEngage. 
1. (Optional, but recommended) Add the [Retry and KeepAlive mechanism](https://developers.liveperson.com/retry-and-keepalive-best-practices-overview.html). 
1. Select either the User Login or Application Login method from the [Login Service API](https://developers.liveperson.com/login-getting-started.html).

{:.important}
Also, make sure to read the API Terms of Use and the Systems Requirements and Language Support guide, if you have not already done so. 



[Let’s Get Started >](/lets-get-started.html)

---  

### Common use cases
To better understand our documentation, APIs, and LiveEngage platform, we’ve listed our common use cases with entry points into the documentation to help you start building an API client. If, however, you can’t find the project you had in mind, reach out to Dev Support for guidance. 

- Integrate LiveEnage with your native app 
- Customize LiveEngage reports or create new ones
- Build or integrate workspace widgets

#### Integrate LiveEngage with your native app
You can integrate LiveEnage with iOS and Android apps. 

[I need a new overview topic for the Mobile SDK, currently it’s marketing material.]

Campaigns for mobile app messaging allow brands to create and manage digital engagements.  For these engagements to work correctly, you must implement the Mobile Messaging SDK for either iOS or Android, and the SDK's Monitoring APIs.

#### Customize LiveEngage reports or create new ones


#### Build or integrate workspace widgets


---  

### Major Flows

#### Login 

#### Authentication
All authenticated information is encrypted and transferred over SSL, using the OAuth 2.0 and OpenID Connect standards, via a JSON Web Token.  Encryption ensures that your customer's data stays safe and unable to be manipulated.


[View Authentication for details >]()

#### Monitoring


#### Analytics


#### Login 

