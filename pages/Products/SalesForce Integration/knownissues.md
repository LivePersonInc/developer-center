---
title: Known Issues and Limitations
level1: Products
level2: Agent Efficiency
level3: SalesForce Integration

order: 51
permalink: products-agent-efficiency-salesforce-known-issues.html

---

### Known Issues

1. **Issue**: SF widget will not load.

![WillNotLoad](img/willnotload.png)

Possible Causes/Solutions:

* User was not logged-in to Salesforce with the same browser.

* Wrong widget URL in LE: missing “ChatLink” wording.

* Wrong widget URL in LE: installed in SandBox but URL refers to production.

* Missing SF configuration - skill is not associated with an object

{:start="2"}
2. **Issue**:  “Waiting to initialize session” appears in the Salesforce widget, and the widget doesn’t load.

![WaitingSession](img/waitingsession.png)

Steps for resolving the issue:

* Make sure that there is a skill already defined in the LE account. If there is no skill, create one. There should be at least one skill configured.

* Assign the skill to the engagement via one of the following methods:

	1. Via the engagement studio: Campaign engagement studio.

	2. Create a pre chat survey question with a routing based question.

{:start="3"}
3. **Issue**: Salesforce widget does not load followed by an error message.

![SalesforceError](img/salesforceerror.png)

Steps for resolving the problem:

1. Login using a SF admin user. If this works, that means a permission is missing for the SF user profile.

2. Within SF you must grant access to the relevant objects:
	
	* Create a new ‘modify all’ permission set to the relevant SF object (in this example – Opportunities) and assign it to the user who encountered the problem.

{:start="4"}
4. **Issue**: Chat transcripts are not synced to SF

Possible causes:
	
* Scheduled sync jobs need to be defined.

* Job is defined, but the SF user is inactive.

### Known Limitations

1. The SF feature ‘Person accounts’ is not supported: Person accounts is a SF feature which stores information about individual consumers (Account = Contact).

2. The transcript for converted leads is not accessible.

General Recommendation:

* Verify that the latest SFDC integration package is installed (link in the Connection Area).