---
title: Automatically Update Predefined Content
level1: Products
level2: Admin
level3: Predefined Content

order: 1
level-order: 1
root-link: true
permalink: products-admin-predefined-content.html
indicator:
---

### Overview

The predefined content tool within LiveEngage is one which agents rely on to provide quick answers to repeating or long questions.  Agents are able to either search for predefined answers and push them directly into the conversations, or utilize hotkeys for quick entries.

![Predefined Content 1](img/predefinedcontent1.png)

Building and maintaining a current and comprehensive set of pre-defined content for your agents is crucial for accuracy and efficiency of agent responses.

**Using the [Predefined Content API](account-configuration-predefined-content-overview.html){:target="_blank"}, brands can automate the upkeep of these important messages.**

### Use Cases

* Automate updating of predefined content such as term changes within an answer or other answers that are dependant on an external system

* Automatically add new predefined content answers from an external database

### Deployment Overview

1. Ensure you generate the API key with ‘write’ permissions (click ‘advanced’) when generating your key.

2. Issue a REST request to create a new predefined content entry

3. View new entry in the predefined content library

### Sample Deployment

**Step 1: generate API key for predefined content API with write permissions.**

1. Go to **Campaigns** > **Data Sources** > **API**

2. Click **Manage** > **Add New**

3. Create a new key with the Predefined Content (Read, Write) permissions,

![Predefined Content 2](img/predefinedcontent2.png)

**Step 2: Issue a REST request**

Issue a REST request to create a new predefined content entry (this example uses POSTMAN)

* Create a new POST request on POSTMAN.

* URL: https://{{accountConfigReadWriteDomain}}/api/account/{{accountId}}/configuration/engagement-window/canned-responses?v=2.0&lang=en-US

_Note: To get the `accountConfigReadWriteDomain` for your account, see the [Getting Started with LiveEngage APIs](guides-gettingstarted.html){:target="_blank"} document._

* Select the OAuth 1.0 Authorization type.

	* Copy the keys created on step 1 into the Authorization header section.
	App key > Consumer Key
	Secret > Consumer secret
	Access token > Token
	Access token secret > Token secret

![Predefined Content 3](img/predefinedcontent3.png)

Set the the new predefined content JSON object into the request's body section.
Example:

```json
{
	"deleted":false,
	"enabled":true,
	"type":0,
	"data":[
{
	"msg":"Test predefined content creation",
	"title":"Testing",
	"lang":"en-US",
	"isDefault":false
}
	],
	"categoriesIds":[
	],
	"skillIds":[
]
}
```

* Send the request. You should get a response with status 201.

![Predefined Content 4](img/predefinedcontent4.png)

**Step 3: View new entry in the predefined content library**

**View new entry in the predefined content library**

Open the predefined content library from the link on the campaigns footnote to view the newly created content entry.

![Predefined Content 5](img/predefinedcontent5.png)
