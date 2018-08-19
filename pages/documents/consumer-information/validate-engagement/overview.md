---
title: Overview
redirect_from:
  - rt-interactions-validate-engagement-overview.html
sitesection: Documents
level2: Consumer Information
level3: Validate Engagement API

level-order: 5
order: 1
permalink: validate-engagement-api-overview.html
root-link: true
indicator: both
---
### Introduction

The Validate Engagement API was designed to be used as part of a click-to-call solution to provide a way for brands to validate the trigger that was used to start the call was in fact a LivePerson engagement and not a phishing call.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* smt

2. This API requires authorization using API key.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}



### Use cases

LivePerson’s Click to Call solution provides brands with the ability to present an engagement on their website that offers consumers the option to receive a phone call from the brand’s representatives. The voice call is initiated and managed by the brand and the agents handling the call are external to the LivePerson platform.

Example click-to-call invitation from a website:

![ValidateEngagement](img/validateengagement.png)

Please refer to the [Click to Call solution document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/technical+doc/Click+to+Call+in+LE+v1.0.pdf){:target="_blank"} for more information.
