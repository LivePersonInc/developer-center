---
title: Overview
level1: Documents
level2: Real Time Interactions
level3: App Engagement API

level-order: 1
order: 1
permalink: app-engagement-api-overview.html
root-link: true
indicator: both
---
### Introduction

When implementing an API based chat windows in non-monitored flow (When the LiveEngage LpTag is not part of the flow), getting the Engagement is within the responsibility of the Chat API Based window Service.

In order to present a "Click to Chat" button with an updated state of availability, you must access the LP Monitoring system to create a visitor session and get an engagement. This call can be made by the getEngagement() function by the App Engagement API. _Note_: whenever you call this method, a new visitor will be created in the Visitor List. To avoid creating unnecessary load, it is advisable to use this method sparingly.

The App Engagement API exposes an eligibility and availability check for engagements for any specific consumer from an external application. This API enables you to start a session, and update the session with SDEs.

**Note**: This API works for engagements only of the MSDK or EXTERNAL type. If you do not have an engagement of either of these types, this API **will not work**. If you attempt to use this API on other types of engagements (for example, offsite or website engagements), the API calls will fail.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* msdkgw

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}



### Use Cases

* Incorporate LiveEngage chat window into a desktop application (gaming app, trading app, etc)

* Add chat into dedicated desktop music application

* Add chat into your mobile app
