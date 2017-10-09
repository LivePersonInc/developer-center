---
title: Overview

level1: Solutions
level2: 
level3: SalesForce Integration

order: 1
level-order: 2
root-link: true
permalink: products-agent-efficiency-salesforce-integration.html

indicator:
---

The LiveEngage Salesforce Widget will allow viewing of SFDC information inside the LiveEngage Platform, as well as creating records and attaching chat transcripts to them. In addition, the wdiget will include back-end setup that will allow the SFDC admin to customize the default settings of his organization. 

This guide will walk you through the steps to Install, Configure, and start working with the LiveEngage Salesforce Widget. Following the below configuration and implementation, you may start working with the new widget. This will allow you to accept a chat, click on the SF widget and view and create any SF record directly from
LiveEngage.

### Use Cases

1. Creating an Account from LiveEngage 

	1. In case you want to create a new Account record, click the “Actions” button on the Default Search Page. 

	2. Select “New Account”

	3. Fill in all of the relevant fields in the form

	4. Click “Save & Link”.

This will save the Account record in SF and link the existing chat to this Account.

![NewAccount](img/newaccount.png)

{:start="2"}
2. Creating a Contact from LiveEngage

	1. In case you want to create a new contact record, click the “Actions” button on the Default Search Page (you can also do it when viewing an Account record).

	2. Select “New Contact”.

	3. Fill in all of the relevant fields in the form.

	4. Click “Save & Link”.

	This will save the Contact record in SF and link the existing chat to this Contact.

3. Creating a Lead from LiveEngage

	1. In case you want to create a new Lead record, click the “Actions” button on the Default Search Page. 

	2. Select “New Lead”.

	3. Fill in all of the relevant fields in the form.

	4. Click “Save & Link”.

	This will save the Lead record in SF and link the existing chat to this Lead.

4. Creating an Opportunity from LiveEngage

	1. In case you want to create a new Opportunity record, click the “Actions” button on the Default Search Page (you can also do it when viewing an Account record). 

	2. Select “New Opportunity”.

	3. Fill in all of the relevant fields in the form.

	4. Click “Save & Link”.

	This will save the Opportunity record in SF and link the existing chat to this Opportunity and Account.

5. Creating a Case from LiveEngage

	1. In case you want to create a new Case record, click the “Actions” button on the Default Search Page (you can also do it when viewing an Account record). 

	2. Select “New Case”.

	3. Fill in all of the relevant fields in the form.

	4. Click “Save & Link”.

	This will save the Case record in SF and link the existing chat to this Case, Account and Contact.

6. Creating a Custom Object Record from LiveEngage

	1. In case you want to create a new Custom Object record, click the “Actions” button on the Default Search Page. 

	2. Select “New [Custom Object Name]”.

	3. Fill in all of the relevant fields in the form.

	4. Click “Save & Link”.

	This will save the Custom Object record in SF and link the existing chat to this Custom Object.

	**Note!** If the ‘Custom Object’ has lookup fields for Account and/or Contact in Salesforce, and the Admin also defined this in the apps admin settings, the chat will be linked to the Account/Contact as well. 

7. Linking a chat to an existing Salesforce Record

	1. In case the chat is related to an existing Case/Opportunity (or any other object depending on the business process), you can link the chat to that relevant record in Salesforce.

	2. Click on the "i" icon next to the relevant Contact, the “Info Bubble” will open and present the data from Salesforce.

	3. Look for the relevant Case/Opportunity in the bubble, click ‘Link Chat’

	![IIcon](img/iicon.png)

	{:start="4"}
	4. Another option to do so is to view the record in the widget, click "Actions", and then "Link Chat"

	![LinkChat](img/linkchat.png)

	{:start="5"}
	5. Once the chat is linked to the record, the ‘Quick Links’ icon will become Orange. By clicking on it you will be
	able to view the relevant records the chat is linked to.

	6. In case you mistakenly linked the chat to the wrong record, you may always ‘Unlink’, Click on ‘Actions’ menu from the record page and choose ‘Unlink Chat’. 

