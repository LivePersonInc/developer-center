---
title: Campaigns for Mobile App Messaging
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Advanced Features

order: 291
permalink: consumer-experience-android-sdk-advanced-campaigns.html

indicator: messaging
---


### Introduction

Campaigns are the cornerstone of LiveEngage - the place where every digital engagement is created and organized.
By using campaigns, brands can target specific audiences in order to achieve their business goals, such as increasing sales or generating leads.

Using the Monitoring APIs, brands can:
* Report on the customer’s journey inside the app
* Get engagements based on the reported SDEs
* Route conversations to a specific skill (based on engagements)

While web messaging allows automatic capturing of events (using the LE Tag), when using campaigns for Mobile App Messaging, it is up to the app to report the various events by using the In-App Monitoring APIs as will be explained in this guide.

### Engagement Attributes (aka SDEs)

Engagement Attributes is the app's method to provide information to LivePerson. Engagement attributes can be used to report on:
* Target audience properties can be used to report on customer information, marketing source, personal information etc.
* In-App user behavior - can be used to report on consumer in-app location, transactions etc.
* Impressions
* Achieved goals


### Monitoring APIs

In order for LivePerson to be able to route to a specific skill the brand's app should report the relevant engagement attribute using the Monitoring APIs.
There are two APIs for reporting engagement attributes and for getting engagements:

* ([sendSDE](https://developers.liveperson.com/android-monitoring_api.html) - Sends engagement attributes to LivePerson. Should be used whenever the app would like to report on an engagement attribute.

* ([getEngagement](https://developers.liveperson.com/android-monitoring_api.html) - In case that there is a matching campaign and engagement, getEngagement will return an engagement. The method can be used to send engagement attributes (as part of the request body) as well.

### Code Samples

**Initialize SDK with Monitoring**

```java
MonitoringInitParams monitoringInitParams = new MonitoringInitParams("AppInstallId");

LivePerson.initialize(context, new InitLivePersonProperties(brandId, appId, monitoringInitParams, new InitLivePersonCallBack() {

  @Override
  public void onInitSucceed() {
    ...
  }

  @Override
  public void onInitFailed(Exception e) {
    ...
  }
}));

```

**Monitoring parameters example**

```java
ArrayList<LPMonitoringIdentity> identityList = new ArrayList<>();
		LPMonitoringIdentity monitoringIdentity = new LPMonitoringIdentity("ConsumerId", "BrandIssuer");
		identityList.add(monitoringIdentity);

		JSONArray entryPoints = new JSONArray();
		entryPoints.put("http://www.liveperson-test.com");
		entryPoints.put("sec://Food");
		entryPoints.put("lang://De");

		JSONArray engagementAttriutes = new JSONArray();
		JSONObject purchase = new JSONObject();
		purchase.put("type", "purchase");
		purchase.put("total", 11.7);
		purchase.put("orderId", "Dx342");

		JSONObject lead = new JSONObject();
		lead.put("leadId", "xyz123");
		lead.put("value", 10500);

		engagementAttriutes.put(purchase);
		engagementAttriutes.put(lead);

		MonitoringParams monitoringParams = new MonitoringParams("PageId", entryPoints, engagementAttriutes);
```


**GetEngagement API**

```java
LivepersonMonitoring.getEngagement(context, identityList, monitoringParams, new EngagementCallback() {
			@Override
			public void onSuccess(@NotNull LPEngagementResponse lpEngagementResponse) {
				...
			}

			@Override
			public void onError(@NotNull MonitoringErrorType errorType, @Nullable Exception exception) {
				...
			}
		});
```

**SendSde API**

```java
LivepersonMonitoring.sendSde(context, identityList, monitoringParams, new SdeCallback() {
  @Override
  public void onSuccess(@NotNull LPSdeResponse lpSdeResponse) {
    ...
  }

  @Override
  public void onError(@NotNull MonitoringErrorType errorType, @Nullable Exception exception) {
    ...
  }
});
```

**Open conversation with CampaignInfo**

```java
ConversationViewParams conversationViewParams = new ConversationViewParams();
CampaignInfo campaignInfo = new CampaignInfo(campaignId, engagementId, engagementContextId, sessionId, visitorId);
conversationViewParams.setCampaignInfo(campaignInfo);

LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.AUTH);
lpAuthenticationParams.setAuthKey(authCode);


LivePerson.showConversation(activity, lpAuthenticationParams, conversationViewParams);

```


### Notes & Best Practices

* Please follow the steps in the ([Campaigns for Messaging guide](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Campaigns/Mobile+App+Engagement+Configuration+Guide.pdf)) **before** adding the implementation to a mobile app.

* In order to start a conversation with a specific engagement, the engagement id should be provided.

* A monitoring session is a 6 hours window. All SDEs which will be reported during the session will be aggregated.

* In case of not reporting any SDEs (idle) for 30 minutes, a new session will be started when reporting the next SDE.
