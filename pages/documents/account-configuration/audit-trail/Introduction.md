---
title: Introduction
redirect_from:
  - account-configuration-meta-data-introduction.html
sitesection: Documents
level2: Account Configuration
level3: Audit Trail API
permalink: audit-trail-api-introduction.html
root-link: true
level-order: 6
order: 1
indicator: both
---


LiveEngage's Audit Trail feature is a list of all changes made to individual users, profiles, skills, lines of business or agent groups across the whole account. In the product, this is available for view by account administrators in the audit trail for users. This API allows you to access the Audit Trail information directly and export it using an API request.

An activity log will display which element has been changed, when and by whom, as well as displaying both the old and the updated value of the changed element. Changes can include adding new elements or modifying or deleting existing ones.

An audit trail is available for the following elements:

* Users

* Skills

* Agent Groups

* Permissions

* LOBs

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

    * Read only: accountConfigReadOnly

    * Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

    * **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

    * [Follow these instructions](guides-gettingstarted.html), to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

### Authentication

This API supports both LP OAuth1.0 and LP Access Token authentication patterns. More info about LP APIs authentication can be found [here](guides-gettingstarted.html).

### Use Cases

1. Integrate our Audit Trail into your own, company controlled data centers/reporting platforms.
