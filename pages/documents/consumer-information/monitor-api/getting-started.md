---
title: Getting Started
redirect_from:
  - rt-interactions-monitoring-getting-started.html
level1: Documents
level2: Consumer Information
level3: Monitoring API
order: 10
permalink: monitoring-api-getting-started.html
indicator: messaging
---

### Step 1 - Create an Account

Create an account and save the generated `account_id`.

Make sure that the following features are enabled on your account:

1. Async_Messaging

2. Authenticated_Chat

For sources other than Mobile (e.g Twilio, Facebook etc.) you should also enable the Messaging_Conversation_Sources feature.

In addition, an authentication server should be configured on the LiveEngage account. Refer to the [Authentication Guide - Configuration section](https://developers.liveperson.com/guides-authentication-configuration.html) in the Developer Community for further instructions.

### Step 2 - Login to your Account

* Login to your account and go to campaigns → data sources -> conversation sources tab.

![Data Source](img/monitor_start1.png)

### Step 3 - Create a Mobile App in the LE UI or Develop Your Own Private App

In order to utilize the Monitoring API, you will need, among other parameters, an `AppInstallationId`. In order to do so, you will first need to create an application, either by using the LE UI to create a Mobile App or by developing your own Private App.

**Mobile App in the LE UI**

* Click on Mobile App -> Connect and fill in the details of your application.

![Mobile App](img/monitor_start2.png)

* Click on **create** and copy the generated app key (AKA `AppInstallationId`).

![AppInstallationId](img/monitor_start3.png)

**Developing Your Own Private App**

Please contact your Account Team to create a Private App and retrieve your `AppInstallationId`.

You can now create an engagement with the **Mobile App** or **Private App** source.

Before calling the Monitoring API, you will need to fetch the Monitoring API domain, which is the domain for the "smt" service. Please refer to [this document](https://developers.liveperson.com/agent-domain-domain-api.html#overview) for instructions on how to retrieve the "smt" service domain (aka 'baseURI').

You can now try and get an engagement using the Monitoring API **engagement resource**

```javascript
curl -i \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST -d '{"clientProperties":{"osName": "MAC_OSX","osVersion": "1.2","appVersion": "1.0","deviceFamily": "MOBILE"},"consumerId":"uniqueIdInBrand","engagementAttributes": [{"type": "personal","personal": {"contacts": [{"email":"bbb@test.com","phone":"12345678"},{"email":"aaa@test2.co.il","phone":"98765430"}],"age": {"age":30.0,"year":1985,"month":7,"day":22},"firstname": "test","lastname": "test2","gender": "FEMALE","company": "liveperson"}}]}' \
https://{Monitor-Domain}/api/account/{account-Id}/app/{app-Installation-Id}/engagement?v=1.0
```

The response will look like this:

```json

{
  "sessionId":"stM0CzMWRye4MZgRBAL4UQ",
  "visitorId":"ZjYWZlYzYzNDE5MTE1OWQ5",
  "pageId":"1674628973",
  "engagementDetails":
    [
      {"campaignId":2695999112,
      "engagementId":2696029112,
      "engagementRevision":3,
      "contextId":"1",
      "connectorId":2696029012,
      "status":"expose"
      }
    ]
}
```

You could also report on the **Impression Display Engagement Attribute** once the engagement was displayed by your application with the visitorId and sessionId provided in the response:

```javascript
curl -i \
    -H "Accept: application/json" \
    -H "X-HTTP-Method-Override: PUT" \
    -H "Content-Type: application/json" \
    -X POST -d '{"clientProperties":{"osName": "MAC_OSX","osVersion": "1.2","appVersion": "1.0","deviceFamily": "MOBILE"},"consumerId":"uniqueIdInBrand","engagementAttributes": [{"type":"impDisplay","campaign":2695999112,"engId":2696029112,"revision":3,"eContext":[{"type":"engagementContext","id":"1"}]}]}' \
    https://{Monitor-Domain}/api/account/{account-Id}/app/{app-Installation-Id}/report?v=1.0&vid=A0ZTA5YTVlYTY5NTI1ODYx&sid=Vo13h4lpShW655STQJi9Jg    
```
