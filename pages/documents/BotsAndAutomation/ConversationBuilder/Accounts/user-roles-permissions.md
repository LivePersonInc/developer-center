---
pagename: User Role Permissions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-accounts-user-role-permissions.html
indicator: both
---

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

### Role Permissions Comparison

| Policy                                               | Content User | Bot Builder | Business User  | Operations | Admin | Super Admin | Template Manager |
|------------------------------------------------------|--------------|-------------|----------------|------------|-------|-------------|------------------|
| Bot Builder \(Read Own & Account Bot\)               | Yes          | Yes         | No             | No         | Yes   | Yes         | No               |
| Bot Builder \(Write Own & Account Bot\)              | No           | Yes         | No             | No         | Yes   | Yes         | No               |
| Bot Builder \(Read All Bots In Account\)             | No           | No          | No             | No         | Yes   | Yes         | No               |
| Bot Builder \(Write All Bots In Account\)            | No           | No          | No             | No         | Yes   | Yes         | No               |
| Bot Builder \(Read All Bots In All Accounts\)        | No           | No          | No             | No         | No    | Yes         | No               |
| Bot Builder \(Write All Bots In All Accounts\)       | No           | No          | No             | No         | No    | Yes         | No               |
| Knowledge base \(Read Own & Account KBs\)            | Yes          | Yes         | No             | No         | Yes   | Yes         | No               |
| Knowledge base \(Write Own & Account KBs\)           | Yes          | Yes         | No             | No         | Yes   | Yes         | No               |
| Knowledge base \(Read All KBs In Account\)           | No           | No          | No             | No         | Yes   | Yes         | No               |
| Knowledge base \(Write All KBs In Account\)          | No           | No          | No             | No         | Yes   | Yes         | No               |
| Knowledge base \(Read All KBs In All Accounts\)      | No           | No          | No             | No         | No    | Yes         | No               |
| Knowledge base \(Write All KBs In All Accounts\)     | No           | No          | No             | No         | No    | Yes         | No               |
| Intent Builder \(Read Own & Account Domains\)        | Yes          | Yes         | No             | No         | Yes   | Yes         | No               |
| Intent Builder \(Write Own & Account Domains\)       | Yes          | Yes         | No             | No         | Yes   | Yes         | No               |
| Intent Builder \(Read All Domains In Account\)       | No           | No          | No             | No         | Yes   | Yes         | No               |
| Intent Builder \(Write All Domains in Account\)      | No           | No          | No             | No         | Yes   | Yes         | No               |
| Intent Builder \(Read All Domains In All Accounts\)  | No           | No          | No             | No         | No    | Yes         | No               |
| Intent Builder \(Write All Domains in All Accounts\) | No           | No          | No             | No         | No    | Yes         | No               |
| Analytics \(Read Own & Account Bots\)                | Yes          | Yes         | Yes            | No         | Yes   | Yes         | No               |
| Analytics \(Read All Bots In Account\)               | No           | No          | No             | No         | Yes   | Yes         | No               |
| Analytics \(Read All Bots In All Accounts\)          | No           | No          | No             | No         | No    | Yes         | No               |
| Accounts \(Read Own Accounts\)                       | No           | No          | No             | No         | Yes   | Yes         | No               |
| Accounts \(Write Own Accounts\)                      | No           | No          | No             | No         | Yes   | Yes         | No               |
| Accounts \(Read All Accounts\)                       | No           | No          | No             | No         | No    | Yes         | No               |
| Accounts \(Write All Accounts\)                      | No           | No          | No             | No         | No    | Yes         | No               |
| Operations \(Read Own & Account Bot Agents\)         | No           | No          | No             | Yes        | No    | Yes         | No               |
| Operations \(Write Own & Account Bot Agents\)        | No           | No          | No             | Yes        | No    | Yes         | No               |
| Operations \(Read All Bot Agents In Account\)        | No           | No          | No             | No         | No    | Yes         | No               |
| Operations \(Write All Bot Agents In Account\)       | No           | No          | No             | No         | No    | Yes         | No               |
| Operations \(Read All Bot Agents In All Accounts\)   | No           | No          | No             | No         | No    | Yes         | No               |
| Operations \(Write All Bot Agents In All Accounts\)  | No           | No          | No             | No         | No    | Yes         | No               |
| Operations \(Read All Servers\)                      | No           | No          | No             | No         | No    | Yes         | No               |
| Operations \(Write All Servers\)                     | No           | No          | No             | No         | No    | Yes         | No               |
| Download Data \- Bulk                                | No           | No          | No             | No         | No    | No          | No               |
| Template \(Write & Read\)                            | No           | No          | No             | No         | No    | Yes         | Yes              |
