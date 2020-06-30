---
pagename: Overview
redirect_from:
  - guides-customizedchat.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Customized Chat Windows

permalink: customized-chat-windows-overview.html
root-link: true
level-order: 3
order: 1
indicator: chat
---

{: .notice}
If you're looking to simply customize the default Conversational Cloud window, check out [our Window Customization API](window-customization-api-overview.html). The Customized Chat Windows API should be used for more involved projects where a custom window is built from scratch.

### Introduction

As part of our open platform, Conversational Cloud gives brands the ability to modify consumer interaction windows using APIs. These APIs allow brands to develop and deploy a unique chat experience for their consumers.

The triggering of an API-based consumer chat window is supported by both monitored and unmonitored flows.

Different types of engagements, funnel reporting, consumer authentication flow (oAuth2.0+OpenId Connect) and engagement attributes are supported as part of the solution.

### Flows

#### Monitored

On a monitored flow, once a consumer enters a web page tagged with the Web Tag, a consumer session is created and monitored by the Conversational Cloud monitoring system.

In order to trigger a customized window, an engagement with a dedicated API-based window should be created. Currently, this kind of window can be created manually by a LivePerson Administrator.

Once an engagement is presented and clicked on by the consumer, the engagement will trigger the corresponding chat window.

#### Unmonitored
When the Web Tag is not part of the flow, retrieving an engagement is the responsibility of the Chat API-based window service, using the App Engagement API.

**Engagement retrieval**

In order to display an engagement with an up-to-date availability state, you must access the LivePerson Monitoring system to create a consumer session and retrieve an engagement. This call is made by the `getEngagement()` function of the [App Engagement API](rt-interactions-app-engagement-overview.html) or directly from the [JS Chat API](consumer-experience-javascript-chat-getting-started.html).

**Using the Chat API**

1. Before requesting a chat, the Chat API-based window service can be rechecked for availability.

2. The service will then start a chat flow.
