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

Users are granted privileges in Conversation Builder by way of assignment of a role. The application includes the following, predefined roles.

### Bot Builder

This role provides full privileges for creating bots and related resources. More specifically, users with this role can create and work with:

* Bots
* Bot versions and releases
* Integrations
* Global functions
* Credentials
* Knowledge bases and articles
* Domains, intents, and entities

Users with this role can also:

* Activate and train models
* Start and stop agent connectors
* View and download analytics data
* Purge analytics data

Notably, this role doesn't allow the user to deploy agent connectors, nor does it let the user create and work with templates, accounts, or users.

### Bot Builder Lite

This "lite" role is intended for less technical bot builders. As such, it's just like the Bot Builder role with the following exceptions:

* No ability to export and import bots
* No ability to create and work with integrations
* No ability to create and work with credentials

### Content User

This role is for users who create content. More specifically, users with this role can create and work with:

* Knowledge bases and articles
* Domains, intents, and entities

Users with this role can also:

* Activate and train models
* View and download analytics data
* Purge analytics data

### Business User

Users with this role can only do the following:

* View analytics data
* Download analytics data

### API Developer

This is a technical but limited role. Users with this role can only create and work with:

* Integrations
* Credentials

### API Credentials Manager

This is a technical but limited role. Users with this role can only create and work with:

* Credentials

### Import/Export Manager

Users with this role can only do the following:

* Export/import bots
* Export/import knowledge bases

### Template Manager

Users with this role can only create and work with:

* (Bot) templates

### Operations

Users with this role can only do the following:

* Create and deploy agent connectors

### Admin

This is an administrator role. Users with this role have full privileges with the following exceptions:

* No ability to create and work with (bot) templates
* No ability to deploy agent connectors
