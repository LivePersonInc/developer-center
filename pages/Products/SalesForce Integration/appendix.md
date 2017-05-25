---
title: Appendix
level1: Products
level2: Agent Efficiency
level3: SalesForce Integration

order: 52
permalink: products-agent-efficiency-salesforce-integration-appendix.html

---

### Mapping Your Own LiveEngage Fields

**Note**: This section is very technical, please contact your AM/CVM/TAM or our Technical Support in case of a problem or if
you’re not sure about any step.

Using each object’s Field Mapping, you can choose to map LiveEngage fields/parameters to Salesforce Fields, both for Pre-Population of new record forms, or for saving information to the Chat Transcript record itself.

When adding a Field Mapping, you can choose to use one of LiveEngage predefined parameters, or you can choose “Other” for when you want to map custom parameters of yours like the PreChat Survey Custom Questions, PostChat Survey Questions, Agent Survey or different SDEs.

To use “Other”, you need to manually populate two fields: one is the address of your parameter in our LivePerson SDK Field (The API used on the widget/client side of our package) and one is our LivePerson API Field (The API used on the back-end sync process of our package).

The complete structure of the data in the “WebApp SDK” and “Engagement History API” is described in their own documents which update all the time and you can find through the Connection Panel on your LiveEngage Account.

In order to make this a simple as possible for you, we’ve included a few examples for how to build these addresses for your different parameters:

### Survey Questions (PreChat, PostChat, Agent)

To get one of the standard out-of-the-box PreChat Survey Questions the access is easy using the list of predefined values. However, you will need an “Other” value for any custom questions you have. On that type of survey or others, the address you’ll build will use the Display Name of the question. Below are a few examples.

1. For a Custom PreChat Survey Question with the text “What is your Account Number?” use the following:

	* LivePerson SDK Field:

	surveyQuestions.preChat.customizedQuestions[displayName=What is your Account Number?].value

	* LivePerson API Field:

	surveys.preChat[displayName=What is your Account Number?].value

2. For a Custom PostChat Survey Question with the text “How would you rate us?” use the following:

	* LivePerson SDK Field:

	surveyQuestions.postChat[displayName=How would you rate us?].value

	* LivePerson API Field:

	surveys.postChat[displayName=How would you rate us?].value

3. For a Custom Agent Survey Question with the text “Was the customer satisfied?” use the following:

	* LivePerson SDK Field:

	surveyQuestions.agentSurvey[displayName=Was the customer satisfied?].value

	* LivePerson API Field:

	surveys.operator[displayName=Was the customer satisfied?].value

### SDEs (Customer Details, Personal Info, Marketing Source, etc…) and others

LiveEngage has a wide (and constantly growing) list of parameters for different uses, which our customers can use for to transfer information about the visitor and his journey on their website, and into LiveEngage.

Those fields are arranged in a hierarchical structure described on both WebApp SDK and Engagement History API documents (there are slight differences in those structures but most of the content is similar).

Each parameter/sub-section is like a property of the upper section, to which you can refer by a dot (“.”). For example, if you want to get your account id from the main info section, you can use “info.accountId” on the Engagement History API or “chatInfo.accountId” on the WebApp SDK.

Some of those are actually arrays of objects, which you can either turn to by a locator “[1]” search in by their properties.

These are just a few examples meant to demonstrate how to write these “addresses”, but rest assured, all of these, along with more than 55 (!) other LiveEngage parameters are available to you on the predefined list.

1. For a the **Chat Start Time** value:

	* LivePerson SDK Field:

	chatInfo.chatStartTime

	* LivePerson API Field:

	info.startTime

2. For a **Customer Type** value:

	* LivePerson SDK Field:

	SDE.customerDetails.type

	* LivePerson API Field:

	sdes.events[sdeType=CUSTOMER_INFO].customerInfo.customerInfo.customerType

3. For the **Visitor’s Name** value:

	* LivePerson SDK Field:

	SDE.personalInfo.name

	* LivePerson API Field:

	sdes.events[sdeType=PERSONAL_INFO].personalInfo.personalInfo.name

4. For the **Goal Name** value:

	* LivePerson SDK Field:

	campaignInfo.goalName

	* LivePerson API Field:

	campaign.goalName

5. For the **Visitor Browser** value:

	* LivePerson SDK Field:

	visitorInfo.browser

	* LivePerson API Field:

	visitorInfo.browser

6. For the **Marketing Affiliate** value:

	* LivePerson SDK Field:

	SDE.marketingSource.affiliate

	* LivePerson API Field:

	sdes.events[sdeType=MARKETING_CAMPAIGN_INFO].marketingCampaignInfo.marketingCampaignInfo.affiliate

### Basic Troubleshooting Q&A

1. **Why does the Salesforce Widget not load and the agent only gets a blank screen?**

The agent has to be logged in to Salesforce in order for the widget to load. Make sure the agent logs in to Salesforce on the same browser session as LiveEngage (the same browser and not in incognito mode).

2. **Why are the Configuration Settings grayed out?**

Make sure you activate the integration package using the Account Settings tab before you try to use the configuration or the widget itself.

3. **Why is the Search box not pre-populated with values (Names, Email, etc')?**

Please verify the following:

* On the Customization Settings tab, you chose Selected Skills, and that under Advanced Settings > Configure Skills, you selected the parameters you want to prepopulate the search for each of them.

* The parameters you selected to pre-populate with indeed exist for your chat (use Visitor Info widget to check).

* Check that “Disable On Load Auto Search” is unchecked in the on the top part of the Customization Settings

4. **Why are the creation options missing on the Actions menu for some of my objects?**

While on the widget Search window, the Actions Menu will show creation options for all the allowed objects. This relies on the configuration set on the Configuration Settings Tab in Salesforce (“Allow Account Creation”) and on a user’s profiles permissions. If an agent is not allowed to create an object according to his Salesforce Profile, he won’t be shown the option for that object.

5. **Why aren’t I able to use the widget and get an error: “The Skill is missing. Contact your system administrator”?**

Please verify the following:

* Your LiveEngage Account has at least one Skill and the campaign you’re using directs to a Skill.

* Your Chat is assigned to a Skill (easily check using the “Visitor Info” widget to verify that).

* Your Chat’s Skill is one of “Enabled Skills” for the widget (check the “Customization Settings” tab in Salesforce).

6. **I don’t see any Skills in my “Available Skills” list. Why?**

Verify you created Skills on your LiveEngage Account. If you’re sure you have Skills available but don’t see them, turn to your LivePerson Support or Account Manager to make sure your LiveEngage Account is on AC Users.

7. **Why don’t I see any of my Salesforce Custom Objects on the “Available Objects” list?**

For a Custom Object to appear in the list, you need to first create a lookup field connecting it to the Chat Transcript object (see Object Settings section).

8. **Why can’t I find the field I’m looking for when creating a new field mapping for an object?**

* Some field names might appear differently on this list than on Salesforce (for example, Account Name or Contact Name on the Case object, might appear as Account ID or Contact ID, respectively, as well as other lookup fields).

* There are special fields on Salesforce that Salesforce does not expose outside their standard pages due to complex functionality on them. For example: Campaign field on the Lead object will not be available.

9. **I used the widget’s search, chose an Account / Contact and clicked on the Case / Opportunity icon next to it, but after saving the Opportunity / Case I created isn’t linked to them in Salesforce. Why?**

Please verify that the Case / Opportunity settings has the Account and Contact lookup fields included in the fieldmapping. If you have more than one lookup field to Account /Contact on the object, make sure you include the standard one from Salesforce (they are called “Account ID” and “Contact ID” on the field mapping list).

10. Why does the sync process doesn’t happen on the exact hour I chose for it, but slightly after? 

The daily sync process will happen in an offset of minutes, but within the hour, of the time you chose for it, which might change between different orgs. The periodic sync will happen every 3 hours, but at an offset as well.

