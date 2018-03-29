---
title: Campaigns for In-App Messaging
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Advanced Features

order: 291
permalink: consumer-experience-ios-sdk-advanced-campaigns.html

indicator: messaging
---


### Introduction

Campaigns are the cornerstone of LiveEngage - the place where every digital engagement is created and organized. By using campaigns, brands can target specific audiences in order to achieve their business goals, such as increasing sales or generating leads.

Using the  SDK's Monitoring APIs, brands can:

* Report on the customer’s journey inside the app

* Get engagements based on the reported SDEs

* Route conversations to a specific skill (based on engagements)

While web messaging allows automatic capturing of events (using the LE Tag), when using campaigns for In-App Messaging, it is up to the app to report the various events by using the In-App SDK's Monitoring APIs, as will be explained in this guide.

### Engagement Attributes (aka SDEs)

Engagement Attributes is the app's method to provide information to LivePerson. Engagement attributes can be used to report on:

* Target audience properties can be used to report on customer information, marketing source, personal information etc.
* In-App user behavior - can be used to report on consumer in-app location, transactions etc.
* Impressions
* Achieved goals


### Monitoring APIs

In order for LivePerson to be able to route to a specific skill, the brand's app should report the relevant engagement attribute using the Monitoring APIs.

There are two APIs for reporting engagement attributes and for getting engagements:

* sendSDE ([Android](https://developers.liveperson.com/android-monitoring_api.html#sendsde), [iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-monitoring-methods.html#sendsde)) - Sends engagement attributes to LivePerson. Should be used whenever the app would like to report on an engagement attribute.
* getEngagement ([Android](https://developers.liveperson.com/android-monitoring_api.html#getengagement), [iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-monitoring-methods.html#getengagement)) - In case that there is a matching campaign and engagement, getEngagement will return an engagement. The method can be used to send engagement attributes (as part of the request body) as well.

### Notes & Best Practices

* In order to start a conversation with a specific engagement, the engagement id should be provided
* A monitoring session is a 6 hours window. All SDEs which will be reported during the session will be aggregated.
* In case of not reporting any SDEs (idle) for 30 minutes, a new session will be started when reporting the next SDE
* In order to have a clear funnel, all flow steps should be reported
* Use sendSDE to report SDEs
