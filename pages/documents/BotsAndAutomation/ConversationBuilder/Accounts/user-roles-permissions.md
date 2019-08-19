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

### Admin

A user should have this role if they own the entire bot business project. All permissions are included.

#### Included Permissions

* Create Bots
* Edit Bot Logic and Bot settings
* Export bots
* Import bots
* Create a new Release version for a bot
* Accept a new Release version for a bot
* Connect Bot with LiveEngage use Bot Agent User
* Create NLU Domains
* Edit NLU Domains
* Create Intents
* Edit Intents by adding Training Phrases
* Create Entities
* Edit Entities
* Delete Entities
* Create Knowledge Base
* Edit Knowledge Base settings
* Add Articles 
* Edit / Delete Articles
* Create new Users
* Edit roles for each User
* View Analytics

### Admin Read Only

A read only version of the [Admin](#admin) role. This role cannot create or edit data.

### Conversation Builder

A user should have this role if they are responsible for setting up or editing an automation.

#### Included Permissions

* Create Bots
* Edit Bot Logic and Bot settings
* Export bots
* Import bots
* Create a new Release version for a bot
* Connect Bot with LiveEngage use Bot Agent User
* Create NLU Domains
* Edit NLU Domains
* Create Intents
* Edit Intents by adding Training Phrases
* Create Entities
* Edit Entities
* Delete Entities
* Create Knowledge Base
* Edit Knowledge Base settings
* Add Articles 
* Edit / Delete Articles
* View Analytics

### Content User

A user should have this role if they are responsible for maintaining the business logic and use cases that are relevant to automations. 

#### Included Permissions

* Create NLU Domains
* Edit NLU Domains
* Create Intents
* Edit Intents by adding Training Phrases
* Create Entities
* Edit Entities
* Delete Entities
* Create Knowledge Base
* Edit Knowledge Base settings
* Add Articles 
* Edit / Delete Articles
* View Analytics

### Operation

A user should have this role if they are a system admin that is responsible for maintaining long running processes like bots.

#### Included Permissions

* Stop / Pause a connector
* Start a Connector

### Business User

A user should have this role if they are a business analyst that is responsible for reporting on success of an automation.

#### Included Permissions

* View Analytics

### Role Permissions Comparison

| Permission | Admin | Conversation Builder | Content User | Business User | Operation |
|----|---------|-----------------|-----------------------|-------------|----------|
| Create Bots                                    | Yes                                      | Yes                                      | No                                       | No              | No         |
| Edit Bot Logic and Bot settings                | Yes                                      | Yes                                      | No                                       | No              | No         |
| Export bots                                    | Yes                                      | Yes                                      | No                                       | No              | No         |
| Import bots                                    | Yes                                      | Yes                                      | No                                       | No              | No         |
| Create a new Release version for a bot         | Yes                                      | Yes                                      | No                                       | No              | No         |
| Accept a new Release version for a bot         | Yes                                      | No                                       | No                                       | No              | No         |
| Connect Bot with LiveEngage use Bot Agent User | Yes                                      | Yes                                      | No                                       | No              | No         |
| Stop / Pause a connector                       | No                                       | No                                       | No                                       | No              | Yes        |
| Start a Connector                              | No                                       | No                                       | No                                       | No              | Yes        |
| Create NLU Domains                             | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Edit NLU Domains                               | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Create Intents                                 | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Edit Intents by adding Training Phrases        | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Delete Intents                                 | No / Only owner of the Domain can delete | No / Only owner of the Domain can delete | No / Only owner of the Domain can delete | No              | No         |
| Create Entities                                | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Edit Entities                                  | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Delete Entities                                | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Create Knowledge Base                          | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Edit Knowledge Base settings                   | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Add Articles                                   | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Edit / Delete Articles                         | Yes                                      | Yes                                      | Yes                                      | No              | No         |
| Create new Users                               | Yes                                      | No                                       | No                                       | No              | No         |
| Edit roles for each User                       | Yes                                      | No                                       | No                                       | No              | No         |
| View Analytics                                 | Yes                                      | Yes                                      | Yes                                      | Yes             | No         |
