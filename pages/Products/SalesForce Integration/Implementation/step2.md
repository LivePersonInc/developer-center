---
title: Step 2 - Configuring the LiveEngage App in Salesforce
level1: Products
level2: Agent Efficiency
level3: SalesForce Integration
level4: Implementation

order: 20
permalink: products-agent-efficiency-salesforce-integration-step2.html

indicator:
---

### Navigating to the LiveEngage Application in Salesforce

1. Now that you have installed the LiveEngage App in your SalesForce organization, you will want to set it up.

2. Login to Salesforce – click on the application menu in the top right of your screen.

3. Make sure you have the “LiveEngage” application selected.

![SFNavigation](img/sfnavigation.png)

### Verifying Clickjack setting is disabled for required Visualforce Pages

The Clickjack Protection feature in Salesforce is a security enhancement meant to prevent external malicious websites from opening Salesforce webpages within their iFrames and use malicious scripts to steal or change information on those screens.

By default, Salesforce does allow Visualforce pages (like our app’s widget page) to be opened within iFrames. However, you need to validate that setting to make sure the widget can work.

Our Widget includes our own Clickjacking Protection feature, which makes sure that the Visualforce pages of our app can only be opened by websites hosted on official LivePerson domains and servers, so your information is always safe.

1. Go to Salesforce Setup Screen.

2. Choose “Security Controls” on the right-side menu, and then “Session Settings”

3. Make sure the settings are as follows (this is also Salesforce default state):

	* The first three check-boxes can have any value (true/false), however, the 4th “Enable clickjack protection for customer
	Visualforce pages with headers disabled” has to be disabled.

	![Clickjack](img/clickjack.png)

### Set Up Your Account Settings

1. Click on the “Account Settings” tab.

	2. Account Information – Enter the relevant Account ID.

	3. Oauth Key Setup – For this part you would have to get your App Keys from your LiveEngage account. Please refer to [this guide](https://developers.liveperson.com/guides-gettingstarted.html){:target="_blank"} in order to do that.

2. Back to Salesforce: Enter the 4 strings you got into the matching fields on our activation page: Consumer Key, Consumer Secret, Access Token, and Access Token Secret.

3.  Legal Disclaimer – Read the terms of use and check the “I have read and agree to these terms” box.

4. Activation – Click “Activate”.

**Note** 

* You will not be able to access other parts of the application until the Activation is completed.

* When you click on “Deactivate”, you will disable the use of the widget within LiveEngage 2.0 Platform and stop
all periodic sync processes with your account.

### Configuring the App

In this section we will walk you through configuring the app to best fit your organization needs. To get started, click on the "Customization Settings" tab.

### Object Settings

This section sets out the Salesforce objects for which we would like the widget to search, according to data related to the visitor who initiated the chat.

1. From the list of available objects, select those you would like to see in the widget. Select the relevant “Available
Objects” and click “Add” to move them to the “Selected Objects” side or “Remove” to remove them.

![ObjectSettings](img/objectsettings.png)

**Note**! In order to add a Custom Object to the list of “Available Objects”, you will first need to create a Lookup field for your Custom Object on the “Chat Transcript” object. Your Custom Object will only appear under the “Available Objects” section of this page once this field has been created. The “Chat Transcript” object can be found under the Setup menu, “Create” > “Objects” among all custom objects in your Salesforce org.

{:start="2"}
2. To enable the automatic search as the widget loads, verify that “Disable On Load Auto Search” checkbox is unchecked.

3. To pre-populate the search parameters, verify that “Disable Modify Onload Search Params” checkbox is unchecked.

### Skills Settings

1. The LiveEngage Skills are used within the Salesforce Widget. In this section, you will define which Salesforce Objects will be available to each Skill in the Salesforce Widget.

	**Note!** You must have Skills in your LiveEngage account for this package to work. _If you don’t have any Skills configured, please create a default one before continuing forward_. The widget **will not work** without Skills in your LiveEngage account and without enabling them in these settings.

2. From the “Customization Settings” tab, scroll down to the “Skills” section.

3. Select from a list of Available Skills by selecting on relevant “Available Skills”, click the “Add” button to move to the
“Selected Skills” side or “Remove” to remove them.

![SelectedSkills](img/selectedskills.png)

{:start="4"}
4. In order to configure the skills further and define which Objects each skill can view (along with other Skill-specific definitions), click on the “Configure Skills” link under “Advanced Settings”.

5. The full list of the ‘Selected skills’ will be shown (The skills you selected from the previous screen).

6. In order to customize the SFDC widget based on LE Skills, Click “Edit” next to one of the ‘selected skills’:

	* Select which objects the relevant Skill can work with in the SFDC widget.

	* Select the default widget screen: either a Search Type or New Record page.

	The default and recommended option is “People Search” – the “People Search” shows the agent all the Accounts, Contacts & Leads that answer the search criteria, structured in a convenient Tree format. Since the search criteria will usually include info about the visitor, and since any information the agent would like to view or perform actions on is usually related to these objects, this is the recommended option. (Please notice this also depends on the selected “Enabled Objects” for the Skill. For example: if you did not choose “Lead” as one of the selected “Enabled Objects”, the results will include only Accounts & Contacts).

	**Note!**: As a best practice, we recommend using a Search option, since that allows the agent to verify if the record he’s about to create already exists before creating it.

	* If you select a search option as the default page, you can select the relevant search values that should be retrieved. For example, if the default screen selected is “Search Contact” and the selected Search Value is “Pre-Chat Survey Visitor Email”, then once the widget is loading, it will search for any SFDC Contact record which holds an email address matching to the email address filled by the visitor as part of the prechat survey. The available values for search represent the list of available LiveEngage SDK search values. If you are using the Salesforce Service Console, select “Use Service Console”. By selecting this, when you click on the “SF Full View” option within the widget, the Service Console will open with the record’s tab. Otherwise, the standard SF Classic view will open in a new browser tab for each record.

![EditSkills](img/editskills.png)

	

### Chat Transcript Settings

1. From the “Customization Settings” tab, scroll down to the Chat Transcript Settings section of your page.

2. Select from one of the following values in the “Chat Transcript Save Mode” picklist:

	* **Field** – will insert the full transcript of the chat into the ‘Transcript’ field on the Chat Transcript record.

	* **Attachment** – will insert the full transcript of the chat as a related File Attachment on the chat transcript record.

	* **Field and Attachment** – this will save the transcript by both the above methods to the chat transcript record.

3. Click on “Configure field mapping” under ‘Advanced Settings’ to determine the values saved into the Chat
Transcript record. Note the following instructions:

	* Custom fields need to be added to the Chat Transcript object for them to show up in this list.
	Please **map only to those new custom fields you created**, choosing any other previously existing field will
	not work and might cause errors in both the widget and sync process.

	* Custom fields created on the Chat Transcript object for mapping purposes, have to be of type “Text” and with
	maximum length of 255. Other text-type fields (Long Text, Rich Text, etc) should work as well, however
	different field types might cause errors.

	* The default fields that are already available on the Chat Transcript object (and will prepopulate with data) are
	Lookup to standard fields (Account, Contact, Case, Opportunity, Lead) and chat meta data information
	(Example: Chat Number, Chat Start Time, Chat End Time, Status, Transcript).

	* See the following “Enabled Object Settings” section for further explanation on the field mapping screen.
	Notice that “Editability”, “Include in Overview” and “Required” options should remain with their default value
	when adding fields. They are not relevant for the Chat Transcript object as it does not appear in the widget and
	is directly populated by the integration according to the mapping you set.

### Enabled Object Settings

1. After you enabled a standard or custom object in the Customization Settings, the following should be defined (not
all are mandatory, define according to your needs: Field Mapping, Related Lists, and Search Filters).

2. **Exposing the Chat Transcript for an object in Salesforce** - For each object you want to use, and choose to
enable for the widget, if you would like to see the related Chat Transcript on that object’s records in Salesforce, you
need to add the Chat Transcripts related list using Salesforce layout editor for all the Salesforce layouts you want
to include it on.

3. Each enabled object will have a link titled “Configure Field Mapping, Related Lists, and Search Filters” – clicking
this link will direct you to a page where you can define these settings.

**Field Mapping**

These settings allow you to choose which fields of each object will be available. These fields will be available to the agent whenever he views, create or edit records. You may also map LiveEngage values to those fields, so they can pre-populate when creating a new record in the widget.

* Click “Add Field Mapping” to get started.

* Fill out the following fields to complete your field mapping:

	* Choose a SF Field Name

	* Choose ‘Editability’ mode

	**Note!** Editability mode may sometimes be enforced according to your SF settings and permissions.

	* LivePerson Field Name - Choose a LP value only if you want this field to be prepopulated with one. Choose “Other”, to manually configure a specific LP Value not included in the list (PreChat Survey, PostChat Survey, Extra SDEs, etc…) – See Appendix #1 for advanced instructions on how to set this.

	* Include in Overview - within the Choose this is you want the field to appear in the bubble widget (The bubble appears when clicking ‘i’ next to the Account/Contact from the main Search screen of the widget).

	**Note!** Only the first 5 fields will be shown in the bubble

	* Required - Setting the field as mandatory when creating or editing the record.

	* Default Value - Set up a fixed default text value for a field (will be editable by the agent).

	* Click “Save”.

	**Note!** You can Edit or Delete any existing field mapping by clicking on the respective link next to each. 

**Related List Config**

* Select one of the values in the “Related List Object Name” picklist.

* Select from a list of fields you would like to include in your related list – do this by selecting any “Available Fields”, click the “Add” button so that they are moved to the “Selected Fields” side.

**Note!** Only the first 4 fields will be shown on the related list.

* Select one of the values in the “Field to Sort” picklist.

* Select one of the values in the “Number of Records” picklist.

* Select one of the values in the “Sort Direction” picklist.

* Click “Save”.

**Search Filters**

In this section you can define the search filters for the Widget Search Screen. These filters will limit agents to see only records you want them to (this is only on top of existing restrictions on their profiles).

For example: you can use this to limit the Accounts your agents see to Account Type = “Customer” only.

* Click “Add Search Filter” to get started.

* Fill out the following fields to create your new search filter:

	* “Field Name” – The field that you want to filter by (for example: Account Type, Case Origin, etc…).

	* Operation – The operator you want to use for filtering (Make sure it fits the field type).

	* “Value” – The values you want to use.

	**Note!** When filtering by a lookup field (or record type) – you need to put the SF ID of the relevant value.
	For example, for a record type “012000000000jdT”.

* Click “Save”.

### Account Settings

1. Scroll down to the “Account Settings” section of your page.

2. Click on the “Allow Account Creation” checkbox if you permit your LiveEngage users to create a new Account from the LiveEngage SFDC widget (this is only on top of existing restrictions on their profiles).

3. Click on ‘Configure Field Mapping, Related Lists, and Search Filters’ to configure all of settings for the Account object (see the above “Enabled Object Settings” section for further explanation on this screen).

### Contact Settings

1. Scroll down to the “Contact Settings” section of your page.

2. Click on the “Allow Contact Creation” checkbox if you permit your LiveEngage users to create new Contacs from the LiveEngage SFDC widget.

3. Click on ‘Configure Field Mapping, Related Lists, and Search Filters’ to configure all of settings for the Contact object (see the above “Enabled Object Settings” section for further explanation on this screen).

### Lead Settings

1. Scroll down to the “Lead Settings” section of your page.

2. Ensure that the “Use Lead Assignment Rules” checkbox is checked/unchecked according to your need.

	**Note!** _If you have configured Lead assignment rules in your org, then checking this checkbox will uphold those rules when a Lead record is created from within LiveEngage._

3. Ensure that the “User Edit Use Lead Assignment Rules” checkbox is checked/unchecked according to your need.

	**Note!** _Check this checkbox if you want to enable Lead Assignment Rules but want to give your LiveEngage users the ability to decide whether or not they should be upheld when creating a new record in LiveEngage. This is on a case by case basis. Checking this checkbox will add a checkbox to the LiveEngage SFDC Widget interface, indicating whether or not they would like the new record to be assigned using existing sharing rules._

4. Click on ‘Configure Field Mapping, Related Lists, and Search Filters’ to configure all of settings for the Lead object
(see the above “Enabled Object Settings” section for further explanation on this screen).

### Case Settings

1. Scroll down to the “Case Settings” section of your page.

2. Ensure that the “Case Account is Mandatory” checkbox is checked/unchecked according to your need.

	**Note!** Checking this checkbox will require an Account name to be populated when creating a Case record from
	within the widget).

3. Ensure that the “Case Contact is Mandatory” checkbox is checked/unchecked according to your need.

	**Note!** Checking this checkbox will require a Contact name to be populated when creating a Case record from
	within the widget).

4. Ensure that the “Use Case Assignment Rules” checkbox is checked/unchecked according to your need.

	**Note!** _If you have configured Case assignment rules in your org, then checking this checkbox will uphold those rules when a Case record is created from the widget)_

5. Ensure that the “User Edit Use Case Assignment Rules” checkbox is checked/unchecked according to your need.

	**Note!** _Check this checkbox if you want to enable Case Assignment Rules but want to give your LiveEngage usersthe ability to decide whether or not they should be upheld when creating a new record in LiveEngage. This is on acase by case basis. Checking this checkbox will add a checkbox to the LiveEngage SFDC Widget interface, indicating whether or not they would like the new record to be assigned using existing sharing rules)_.

6. Click on ‘Configure Field Mapping, Related Lists, and Search Filters’ to configure all of settings for the Case object (see the above “Enabled Object Settings” section for further explanation on this screen).

	**Note!** The Account and Contact lookup fields have to be included in the Field Mapping list if you want the Cases
	you create using the widget to be attached to them. 

### Opportunity Settings

1. Scroll down to the “Opportunity Settings” section of your page.

2. Ensure that the “Opportunity Account is Mandatory” checkbox is checked/unchecked according to your need.

	**Note!** Checking this checkbox will require an Account name to be populated when creating an Opportunity record
	from within the widget.

3. Click on ‘Configure Field Mapping, Related Lists, and Search Filters’ to configure all of settings for the Opportunity object (see the above “Enabled Object Settings” section for further explanation on this screen).

	**Note!** The Account lookup field has to be included in the Field Mapping list if you want the Opportunity you create
	using the widget to be attached to it.

### Custom Object Settings

1. Scroll down to the “Custom Object” Settings section of your page.

2. Ensure that the “Account is Mandatory” checkbox is checked/unchecked according to your need.

	**Note!** Checking this checkbox will require an Account name to be populated when creating a Custom Object
	record from within the widget.

3. Ensure that the “Contact is Mandatory” checkbox is checked/unchecked according to your need.

	**Note!** Checking this checkbox will require a Contact name to be populated when creating a Custom Object record
	from within the widget.

4. Select from one of the following values in the “Account Field” picklist:

	* Account
	* Any other existing Account Lookup Field(s)

	**Note!** The Account Field list will allow you to choose any of the Account Lookup fields on your custom object, in
	case there are any.

5. Select from one of the following values in the “Contact Field” picklist:

	* Contact
	* Any other existing Contact Lookup Field(s)

	**Note!** The Contact Field list will allow you to choose any of the Contact Lookup fields on your custom object, in
	case there are any.

6. Click on ‘Configure Field Mapping, Related Lists, and Search Filters’ to configure all of settings for the Custom
object (see the above “Enabled Object Settings” section for further explanation on this screen).