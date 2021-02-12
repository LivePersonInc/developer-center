---
pagename: Permissions
redirect_from:
    - conversation-builder-accounts-user-role-permissions.html
    - bot-accounts-user-role-permissions.html
    - bot-accounts-permissions-per-role.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Accounts
permalink: bot-accounts-permissions.html
indicator: both
---

Users are granted privileges in Conversation Builder by way of assignment of Conversation Builder permissions.

Conversation Builder's permission model is built on Conversational Cloud’s. You can use Conversational Cloud’s four roles (Agent, Agent manager, Campaign manager, Admin) as the basis from which to create custom profiles to suit your organization's needs. You can then assign those [profiles](https://knowledge.liveperson.com/admin-settings-permissions-profiles.html) to users.

As an example, in Conversational Cloud, you might want to create a profile that grants (turns on) all Conversation Builder permissions, naming it something like, "CB - All Permissions," as we've done below.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/permissions2.png">

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/permissions3.png">

You can then assign this profile to users like so:

<img class="fancyimage" style="width:650px" src="img/ConvoBuilder/permissions4.png">

As shown above, a profile contains a set of permissions. Conversation Builder supports two categories of permissions:

* **Primary permissions**: These are stand-alone permissions that govern the primary functionality of Conversation Builder. "Stand-alone" means you could assign just one of these to a Conversation Builder user.
* **Granular Permissions**: These are designed to give you more flexibility regarding the restrictions that you want to put into place. This is achieved through the use of "add-on" roles.

### Primary permissions

#### Conversation Builder: Administrator

Users with this permission can view and edit public bots and their own private bots.

Additionally, users with this permission have full privileges (with exceptions noted below), including the ability to create, deploy and manage agent connectors at the bot level within Conversation Builder.

Users with this permission do have the following limitations:

* No ability to create and manage (bot) templates
* No access to the Bot Status application, which is the operations area where bot deployments for the entire organization can be managed

#### Conversation Builder: Bot Builder

Users with this permission can view and edit public bots and their own private bots.

This permission provides full privileges for creating bots and related resources. More specifically, users with this permission can create and manage:

* Bots
* Bot groups
* Dialogs and dialog templates
* Integrations
* Global functions
* Credentials
* Knowledge bases and articles
* Domains, intents and entities

Users with this permission can also:

* Activate and train models
* Create, deploy and manage agent connectors at the bot level within Conversation Builder
* Use the Conversation Tester
* View versions and releases (For privileges to create and manage these, add on the "Release Creator" and/or "Release Acceptor" granular permissions, discussed farther below.)
* View and download analytics data

This permission doesn't allow the user to create and manage (bot) templates, accounts or users. Also, this permission doesn't allow the user access to the Bot Status application, which is the operations area where bot deployments for the entire organization can be managed.

#### Conversation Builder: Content User

This permission is for users who create content. More specifically, users with this permission can create and manage:

* Knowledge bases and articles
* Domains, intents and entities

Users with this permission can also:

* Activate and train models
* View and download analytics data

#### Conversation Builder: Business User

Users with this permission can only do the following:

* View and download analytics data

#### Conversation Builder: Bot Status Access

Users with this permission can only do the following:

* Create, deploy and manage agent connectors for the entire organization in the Bot Status application

### Granular permissions

As a business, you might want to provide basic Conversation Builder development capabilities to some users, with restrictions regarding certain capabilities like access to API integrations, for example. You can achieve this using combinations of the roles discussed below.

#### Conversation Builder: Bot Builder Lite

This "lite" permission is just like the Bot Builder permission with the following, additional limitations:

* No ability to create and work with integrations
* No ability to create and work with credentials
* No ability to export and import bots

Use one or more add-on permissions (below) along with this permission, as per your requirements. This allows you to selectively enable access to specific functions. For example, if you want to provide a bot developer with access to API integrations, grant the Bot Builder Lite and API Developer permissions, as shown below.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/permissions1.png">

#### Add-on permissions

##### Conversation Builder: API Developer

Users with this permission can only create and manage integrations.

##### Conversation Builder: API Credentials Manager

Users with this permission can only create and manage credentials.

{: .important}
Whenever you assign this permission, also assign Bot Builder Lite *and* API Developer.

##### Conversation Builder: Import/Export Manager

Users with this permission can only do the following:

* Export/import bots
* Export/import knowledge bases

##### Conversation Builder: Release Creator

Users with this permission can only do the following:

* Create and delete versions
* Create releases

Use this permission with the Bot Builder or Bot Builder Lite permission as you require.

##### Conversation Builder: Release Acceptor

Users with this permission can only do the following:

* Create versions
* Accept releases, i.e., upgrade bots

Use this permission with the Bot Builder or Bot Builder Lite permission as you require.