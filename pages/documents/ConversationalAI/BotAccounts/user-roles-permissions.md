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

Users are granted privileges in Conversation Builder by way of assignment of a role. The application includes the following, predefined roles:

* Bot Builder
* Bot Builder Lite
* Content User
* API Developer
* API Credentials Manager
* Template Manager
* Import/Export Manager
* Business User
* Operations
* Super Admin
* Admin
* Admin (Read Only)

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

Notably, this role doesn't allow the user to deploy agent connectors, nor does it let the user create and work with templates, accounts, users, servers, jobs, or logs.

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

### API Developer

This is a technical but limited role. Users with this role can only create and work with:

* Integrations
* Credentials

### API Credentials Manager

This is a technical but limited role. Users with this role can only create and work with:

* Credentials

### Template Manager

Users with this role can only create and work with:

* (Bot) templates

### Import/Export Manager

Users with this role can only do the following:

* Export/import bots
* Export/import knowledge bases

### Business User

Users with this role can only do the following:

* View analytics data
* Download analytics data

### Operations

Users with this role can only do the following:

* Create and deploy agent connectors

### Super Admin

Users with this role have full privileges without exception. A user should have this role if they own the entire brand's automation project.

### Admin

This is a more limited administrator role than Super Admin. Users with this role can do everything a Super Admin can do with the following exceptions:

* No ability to deploy agent connectors
* No ability to create and work with servers, view and work with jobs, or view logs.
* No ability to create and work with (bot) templates.

### Admin (Read Only)

This is a read-only/view-only role. Users with this role can only view the following:

* Bots
* Integrations
* Global functions
* Knowledge bases
* Domains, intents, and entities
* Accounts
* Users

Users with this role can also:

* Start and stop agent connectors
* View analytics data
* Download analytics data