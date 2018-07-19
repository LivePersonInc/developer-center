---
title: Overview
level1: Documents
level2: Guides
level3: Customized Chat Windows

permalink: customized-chat-windows-overview.html
root-link: true
level-order: 3
order: 1
indicator: chat
---

### Introduction

As part of our open platform, LiveEngage gives brands the ability to modify consumer interaction windows using APIs. These APIs allow brands to develop and deploy a unique chat experience for their consumers.

The triggering of an API-based consumer chat window is supported by both monitored and unmonitored flows.

Different types of engagements, funnel reporting, consumer authentication flow (oAuth2.0+OpenId Connect) and engagement attributes are supported as part of the solution.

### Flows

#### Monitored

On a monitored flow, once a consumer enters a web page tagged with the LiveEngage Tag, a consumer session is created and monitored by the LiveEngage monitoring system.

In order to trigger a customized window, an engagement with a dedicated API-based window should be created. Currently, this kind of window can be created manually by a LivePerson Administrator.

Once an engagement is presented and clicked on by the consumer, the engagement will trigger the corresponding chat window.

#### Unmonitored
When the LiveEngage Tag is not part of the flow, retrieving an engagement is the responsibility of the Chat API-based window service, using the App Engagement API.

**Engagement retrieval**

In order to display an engagement with an up-to-date availability state, you must access the LivePerson Monitoring system to create a consumer session and retrieve an engagement. This call is made by the `getEngagement()` function of the [App Engagement API](rt-interactions-app-engagement-overview.html){:target="_blank"} or directly from the [JS Chat API](consumer-experience-javascript-chat-getting-started.html){:target="_blank"}.

**Using the Chat API**

1. Before requesting a chat, the Chat API-based window service can be rechecked for availability.

2. The service will then start a chat flow.
