---
pagename: Your page title here
redirect_from:
  - a-link-which-will-redirec-to-this-page.html
sitesection: Documents
categoryname: The sidebar category the document will appear under
documentname: If this page appears under a sub-title, this is where you put that sub-title
subfoldername: If this page appears further down the sidebar, under another sub-title, this is where you put that sub-title
permalink: see-readme-for-link-structure.html
indicator: accepts "messaging" "chat" or "both"
---

**When writing your documentation, you should keep our [Style Guide](https://docs.google.com/document/d/1X5zDTx3-weS5aEvLOEhSNa1ZtA3R5IdqiFfbPsUggTs/edit?usp=sharing) in mind**

The purpose of the overview is to give potential users of the API a general idea of what they can achieve using the API and what prerequisites might exist to use the API. A user should be able to read the overview and decide whether the API is a good fit for what they're trying to achieve.

### Introduction

The API overview begins with an introduction to the main functionalities of the API. This section should cover the main components of the API, the primary goal it is trying to achieve, and any context needed to understand the API. Such context, for example, could include whether the API relies on or enables other LivePerson services, external third-party data or any other general context needed to understand how the API works.

This section should also include any prerequisites that are needed to start working with the API. Is knowledge of a specific (non-generic) coding library required (like OpenGL for example)? Are certain data points required(like special unique identifiers or third-party authentication)? Are there LiveEngage configurations which must take place before the API can be used (like permissions)?

### Getting started

This section always follows the same format, seen below:

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* Add any relevant service names for the API here.

2. This API requires authorization using _either_ a login or an API key methodology. **If your API supports only one method of authentication, leave only the relevant one in this section**.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html), to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

5. If there are any other steps that the user has to perform in order to use your API, include them here. This could include preparing certain parameters (like an account number) or certain datasets (like a timeframe they're interesting in looking at or a list of users to be created).

### Use cases

This section should include two-three use cases for the API. Try to focus on complete products that might incorporate your API or on specific solutions built using the API rather than on simple uses of the API. For example, you could include a use case which mentions an automated user management system that relies on this API rather than "this API can be used to automate user management". The former paints a broader picture of what can be achieved while the latter simply describes a function of the API a second time (this should be covered in the introduction instead).
