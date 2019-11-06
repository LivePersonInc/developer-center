---
pagename: Permissions per Role
redirect_from:
    - conversation-builder-accounts-user-role-permissions.html
    - bot-accounts-user-role-permissions.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Accounts
permalink: bot-accounts-permissions-per-role.html
indicator: both
---

Users are granted privileges in Conversation Builder by way of assignment of a Conversation Builder role.

In LiveEngage, assign a Conversation Builder role to a user based on the user's type of participation in your automation project. As you assign roles, be mindful of the user's assigned LiveEngage role. For example, a LiveEngage administrator doesn't have to be a Conversation Builder administrator too, although this can be done.

The following Conversation Builder roles are available.

### Primary roles

#### Admin

This is an administrator role. Users with this role have full privileges, including the ability to create, deploy and manage agent connectors at the bot level within Conversation Builder.

Users with this role do have the following limitations:

* No ability to create and manage (bot) templates
* No access to the Bot Status application, which is the operations area where bot deployments for the entire organization can be managed

#### Bot Builder

This role provides full privileges for creating bots and related resources. More specifically, users with this role can create and manage:

* Bots
* Bot versions and releases
* Integrations
* Global functions
* Credentials
* Knowledge bases and articles
* Domains, intents and entities

Users with this role can also:

* Activate and train models
* Create, deploy and manage agent connectors at the bot level within Conversation Builder
* View and download analytics data

This role doesn't allow the user to create and manage (bot) templates, accounts or users. Also, this role doesn't allow the user access to the Bot Status application, which is the operations area where bot deployments for the entire organization can be managed.

#### Bot Builder Lite

This "lite" role is intended for *less technical* bot builders. As such, it's just like the Bot Builder role with the following, additional limitations:

* No ability to create and work with integrations
* No ability to create and work with credentials
* No ability to export and import bots

{: .important}
Use one or more add-on roles in conjunction with this role, as per your requirements.

#### Content User

This role is for users who create content. More specifically, users with this role can create and manage:

* Knowledge bases and articles
* Domains, intents and entities

Users with this role can also:

* Activate and train models
* View and download analytics data

#### Template Manager

Users with this role can only create and manage:

* (Bot) templates

#### Business User

Users with this role can only do the following:

* View and download analytics data

#### Operations

Users with this role can only do the following:

* Create, deploy and manage agent connectors for the entire organization in the Bot Status application

### Add-on roles

The roles below are *add-on* roles. That is, they're intended to be assigned in conjunction with the Bot Builder Lite role as per your requirements.

#### API Developer

Users with this role can only create and manage:

* Integrations

#### API Credentials Manager

Users with this role can only create and manage:

* Credentials

{: .important}
Whenever you assign this role, also assign Bot Builder Lite *and* API Developer.

#### Import/Export Manager

Users with this role can only do the following:

* Export/import bots
* Export/import knowledge bases

{: .important}
Users with this role can't export/import domains.