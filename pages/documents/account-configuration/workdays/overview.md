---
title: Overview
redirect_from:
  - account-configuration-workdays-overview.html
keywords:
sitesection:
level2: Account Configuration
level3: Workdays API
level-order: 8
order: 9
permalink: workdays-api-overview.html
root-link: true
indicator: messaging
---

### Introduction

The Workdays API allows you to configure hours of operation for specific days of the week and assign them to specific skills or as the default setting for an account. During the specified hours of operation, consumers will receive the expected time to response message for the skill as defined in the account. Outside of the specified hours of operation, consumers will receive the expected time to response including the time until the next shift begins.

For example, if a skill has a defined time to response of five minutes and a consumer starts a conversation outside of the defined hours of operation, they will receive an automated message with an expected response time of "five minutes + the remaining time to the next shift". This means that if there are three hours until the next shift, they will receive an expected response time of three hours and five minutes.

It is important to understand that this API creates a "workdays" object which is then assigned to specific skills. If a "workdays" object is not assigned to any skills, it will not affect any consumers. So, for example: two different "workdays" objects can be created. **Object A** defines a regular, US hours business week. **Object B** defines a short, six hour work week. You can then assign Object A to example skills *Support* and *Billing* while assigning Object B to example skill *Sales*. Object A will affect only the skills assigned to it (Support and Billing) and Object B will only affect the skill assigned to it (Sales).

**Note**: the Workdays feature relies on automatic messages in order to inform the visitor of the expected time to response. If the automatic messages feature is disable for an account, the Workdays feature will not work as expected.

**Note**: Use the [Skills API](/administration-skills-appendix.html) to set the workingHoursId for the skill.

### Use Cases

1. Set hours of operation for different teams working on different schedules. For example, your support team might be available 24/7, while your sales are working US business hours. If a consumer starts a conversation with your sales team outside of US business hours, they'll receive an updated and correct expected response time. If they start a conversation with your support team, they'll receive the current time to response for that skill.

2. Set hours of operation for different days of the week, taking into account weekends, weekly team meetings, and other regular offline hours.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}
