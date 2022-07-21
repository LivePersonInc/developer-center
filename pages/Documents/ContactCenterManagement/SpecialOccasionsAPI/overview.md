---
pagename: Overview
redirect_from:
  - account-configuration-special-occasions-overview.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Special Occasions API
permalink: special-occasions-api-overview.html
indicator: messaging
---

The Special occasions API allows you to configure specific dates in which there is an exception to the hours of operation defined by the [Workdays API](account-configuration-workdays-overview.html) or through the Conversational Cloud UI. The expected behavior on the visitor side as far as automated messages and time to response is exactly the same as Workdays. Therefore, it is advised to read the Workdays documentation before working with this API.

**Note**: Special occasions **do not** modify hours of operation defined by Workdays but instead, overwrite them. This means that if you set a 09:00-12:00 for Monday, May 15th (for example) workdays object and a special occasion for 16:00-22:00 Monday, May 15th, the hours of operation will be 16:00-22:00 for this date.

**Note**: Use the [Skills API](/administration-skills-appendix.html) to set the specialOccasionId for the skill.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into Conversational Cloud** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key.

3. Note the [API terms of use](https://www.liveperson.com/policies/terms-of-use).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)
