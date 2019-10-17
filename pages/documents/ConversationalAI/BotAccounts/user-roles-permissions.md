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

In order to view or edit user permissions, you must click on the Organization, then click on Users in the top nav bar.

### Bot Builder

As its name suggests, this role provides full privileges for creating bots and related resources like intents and entities. More specifically, users with this role can create and work with:

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

### Super Admin

A user should have this role if they own the entire brand's automation project.

#### Included Permissions

The Super Admin has the following permissions **in addition to all permissions that the [Admin](#admin) role has.**

* Bot Builder (Read All Bots In All Accounts)
* Bot Builder (Write All Bots In All Accounts)
* Knowledge base (Read All KBs In All Accounts)
* Knowledge base (Write All KBs In All Accounts)
* Intent Builder (Read All Domains In All Accounts)
* Intent Builder (Write All Domains in All Accounts)
* Analytics (Read All Bots In All Accounts)
* Accounts (Read All Accounts)
* Accounts (Write All Accounts)
* Operations (Read Own & Account Bot Agents)
* Operations (Write Own & Account Bot Agents)
* Operations (Read All Bot Agents In Account)
* Operations (Write All Bot Agents In Account)
* Operations (Read All Bot Agents In All Accounts)
* Operations (Write All Bot Agents In All Accounts)
* Operations (Read All Servers)
* Operations (Write All Servers)
* Template (Write & Read)

### Admin

A user should have this role if they own a segment of the brand's automation project.

#### Included Permissions

* Bot Builder (Read Own & Account Bot)
* Bot Builder (Write Own & Account Bot)
* Bot Builder (Read All Bots In Account)
* Bot Builder (Write All Bots In Account)
* Knowledge base (Read Own & Account KBs)
* Knowledge base (Write Own & Account KBs)
* Knowledge base (Read All KBs In Account)
* Knowledge base (Write All KBs In Account)
* Intent Builder (Read Own & Account Domains)
* Intent Builder (Write Own & Account Domains)
* Intent Builder (Read All Domains In Account)
* Intent Builder (Write All Domains in Account)
* Analytics (Read Own & Account Bots)
* Analytics (Read All Bots In Account)
* Accounts (Read Own Accounts)
* Accounts (Write Own Accounts)

### Bot Builder

A user should have this role if they are responsible for creating or maintaining an automation.

#### Included Permissions

* Bot Builder (Read Own & Account Bot)
* Bot Builder (Write Own & Account Bot)
* Knowledge base (Read Own & Account KBs)
* Knowledge base (Write Own & Account KBs)
* Intent Builder (Read Own & Account Domains)
* Intent Builder (Write Own & Account Domains)
* Analytics (Read Own & Account Bots)

### Content User

A user should have this role if they are responsible for maintaining the business logic and use cases that are relevant to automations. 

#### Included Permissions

* Bot Builder (Read Own & Account Bot)
* Knowledge base (Read Own & Account KBs)
* Knowledge base (Write Own & Account KBs)
* Intent Builder (Read Own & Account Domains)
* Intent Builder (Write Own & Account Domains)
* Analytics (Read Own & Account Bots)

### Operations

A user should have this role if they are a system admin that is responsible for maintaining long running processes like bots.

#### Included Permissions

* Operations (Read Own & Account Bot Agents)
* Operations (Write Own & Account Bot Agents)

### Business User

A user should have this role if they are a business analyst that is responsible for reporting on success of an automation.

#### Included Permissions

* Analytics (Read Own & Account Bots)

### Template Manager

A user should have this role if they want to create and maintain bot templates that are useful for their business domain.

#### Included Permissions

* Template (Write & Read)
