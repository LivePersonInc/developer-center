---
pagename: Appendix
redirect_from:
  - administration-profiles-appendix.html
  - aadministration-profiles-appendix.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Profiles API

order: 101
permalink: profiles-api-appendix.html

indicator: both
---

This section contains API details that are common to every API’s resource and action.

### Considerations

| Title | Description |
| :--------   | :--- |
| Update attribute | Cannot update a single requested attribute. Need to add a body full of other attributes and if certain attributes are missing from the body, they will be deleted. |

### Request Headers

| Header        | Description | Notes |
| :------       | :--------   | :--- |
| Authorization | Contains token string to allow request authentication and authorization. | |
| X-LP-Last-Modified | Contains timestamp data of last modified action. | Allows optimization of the backend resources utilization. |

### Response Headers

| Header        | Description | Notes |
| :------       | :--------   |  :--- |
| X-LP-Last-Modified | Contains timestamp data of last modified action. | Allows optimization of the backend resources utilization. |

### Query Parameters

| Header   | Description         | Type/Value                       | Required       | Notes |
| :------  | :--------           | :----------                      | :---           | :--- |
| v        | API version number  | Double. | v=4.0 | Required |
| select | Dynamic selection of the response fields | Type: YOGA 'gdata' dialect. Non-existing field: no error, blank in response. Supported fields: Any in response body. **yoga GData dialect builder url: https://github.com/skyscreamer/yoga/wiki/Using-the-Selector-Builder-GUI | Optional |
| include_deleted | Whether or not deleted items in the response are included | Default: false | Optional |

### Path Parameters

| Parameter | Description  | Type/Value |
| :------   | :--------    | :-------- |
| accountId | LP site ID | String  |
| profileId | Profile ID | Positive long number greater than zero |

### Entity Structure

| Attribute | Description  | Type/Value | Required | Notes |
| :------   | :--------    | :-------- | :--- | :--- |
| id | Account Config object’s unique ID | Long | Read only |  |
| deleted | Whether the item is deleted or not | Boolean | Read only | |
| name | Profile’s unique name | String | Required | |
| description | The profile’s description | String | Optional | |
| roleTypeId | The profile role type ID | Integer | Required | 1-Admin, 2-Agent, 3-Agent Manager, 4-Campaign Manager, 5-LPA |
| dateUpdated | The last update profile change date  | Date (numbers) | Read only | The format: year-month-date hrs:min:sec |
| numOfAssignedUsers | How many users assigned to the specific profile | Long | Read only | |
| permissionPackages | List of permission packages | List of type PermissionsPackageDto | Required | Please see below the [table](administration-profiles-appendix.html#packages-id) that lists all packages, their description and their ID |
| permissions | Set of all permissions of specific profile | Set of Integers | Required | |
| isAssignedToLPA | Whether the profile assigned to LPA user or not | Boolean | Required | |

### Entity Example

```json
   {
  "id": 2338395712,
  "isAssignedToLPA": false,
  "roleTypeId": 1,
  "roleTypeName": "Administrator",
  "description": "",
  "name": "new",
  "permissions": [
    3,
    5,
    1737,
    1738
  ],
  "permissionPackages": [
    {
      "id": 10006,
      "isDisplayed": true,
      "featureKeys": [
        "Common.Api_key_management"
      ],
      "isEnabled": true
    }
    {
      "id": 10015,
      "isDisplayed": true,
      "featureKeys": [
        "Common.AuditTrail"
      ],
      "isEnabled": true
    }
    {
  "deleted": false,
  "dateUpdated": "2017-09-19 16:29:28"
  }]},
```

### Packages ID

| Package ID | Name |Description       |
|------------|----------|---------------|
| 10000      | Administrator core permissions  | Core permissions that are included with the Admin role and cannot be disabled. |
| 10001      | User administration  | Create, edit and delete users and configure theirassignments.    |
| 10002      | Profile administration    | Create, edit and delete profiles (including customizing permissions). |
| 10003      | Skill administration | Create, edit and delete Skills.    |
| 10004      | Agent Groups administration   | Create, edit, restructure or delete Agent Groups.          |
| 10006      | API key administration    | For brands who have enabled the API key management feature, this permission allows the Campaign Manager to view API keys used by the brand.|
| 10007      | Night Vision (advanced configuration) | Make advanced configurations within Night Vision.     |
| 10008      | Lines of Business administration   | For brands who have enabled the Lines of Business feature, this permission allows Administrators to create, edit and delete individual Lines of Business within their Conversational Cloud account.|
| 10009      | View account billing details   | Access to billing details and online invoices.   |
| 10010      | View support cases in theConnection Area   | View open and closed support cases from the Connection Area.     |
| 10011      | Create support cases from theConnection Area | For brands who have enabled Support cases creation feature, this permission allows to create support cases from the Connection Area.       |
| 10015      | View and export audit trail   | For brands with the audit trail feature enabled, this permission allows admins to view and export audit trail data.     |
| 10016      | Contact LivePersonsupport within the Connection Area | Chat with the LivePerson support team.   |
| 10017      | View Connection Area Content    | View relevant content from the Connection Area per journey.      |
| 10018      | Configure shift status       | For brands who have enabled the Messaging feature, this permission allows an admin to configure the shift status.                          |
| 10027      | Configure skill workdays       | View a list of skills and assign and edit Schedule and Special Occasion items associated with them.                          |
| 10030      | FaaS Invocation  | Allows to invoke LivePerson Functions (FaaS)|
| 10031      | FaaS Admin       | Allows to administrate LivePerson Functions (FaaS) Settings |
| 10032      | FaaS Developer   | Allows to develop LivePerson Functions (FaaS) |
| 10033 | Conversation Builder: Administrator | Grants the user full privileges in Conversation Builder with a few exceptions: Users can't create and manage (bot) templates or access the Bot Status application. |
| 10034 | Conversation Builder: Content User | Grants the user privileges in Conversation Builder to create and manage knowledge bases, articles, domains, intents and entities; to activate and train models; and to view and download analytics data. |
| 10035 | Conversation Builder: Business User | Grants the user privileges in Conversation Builder to view and download analytics data. |
| 10036 | Conversation Builder: Bot Status Access | Grants the user access to the Bot Status application, where the user can create, deploy, and manage connectors for the entire organization. |
| 10037 | Conversation Builder: Bot Builder | Grants the user full privileges in Conversation Builder for creating bots and related resources (versions, releases, integrations, global functions, etc.). For more details, see [here](bot-accounts-permissions.html). |
| 10038      | Configure messaging agent survey on skill   | Allow admins to assign skills to agent survey, as well as override agent survey timeout |
| 10040 | Conversation Builder: API Credentials Manager | An [add-on permission](bot-accounts-permissions.html#add-on-permissions). Grants the user privileges in Conversation Builder to only create and manage credentials. If you grant this, also grant Bot Builder Lite (10041) and API Developer (10043). |
| 10041 | Conversation Builder: Bot Builder Lite | Grants the user privileges in Conversation Builder to create and manage bots, but with no ability to create and work with integrations or credentials, and with no ability to export or import bots. For more details, see [here](bot-accounts-permissions.html). |
| 10042 | Conversation Builder: Import/Export Manager | An [add-on permission](bot-accounts-permissions.html#add-on-permissions). Grants the user privileges in Conversation Builder to only export and import bots and knowledge bases. Grant this along with Bot Builder Lite (10041) as per your requirements. |
| 10043 | Conversation Builder: API Developer | An [add-on permission](bot-accounts-permissions.html#add-on-permissions). Grants the user privileges in Conversation Builder to only create and manage integrations. Grant this along with Bot Builder Lite (10041) as per your requirements. |
| 10054      | Data Transporter: access enabled                               | User can access Data Transporter   |
| 10055      | Data Transporter: manage account settings                      | User can edit Data Transporter Account settings   |
| 10056      | Data Transporter: view and download history                    | User can view and download historical reports   |
| 10057      | Data Transporter: manage destinations                          | User can create, update and delete destinations   |
| 10058      | Data Transporter: manage data sources                          | User can create, update and delete data sources   |
| 10059      | Data Transporter: manage tasks                                 | User can create, update and delete tasks   |
| 10060      | Performance Optimizer: access enabled                          | User can access Performance Optimizer   |
| 10061      | Performance Optimizer: manage lines of business                | User can create, update and delete LOBs   |
| 10062      | Staff Forecaster: access enabled                               | User can access Staff Forecaster   |
| 10063      | Staff Forecaster: manage skill groups                          | User can create, update and delete skill groups   |
| 20000      | Agent core permissions  | Core permissions that are included with the Agent role and cannot be disabled.              |
| 20001      | Join Agents' conversations  | Join a conversation handled by another Agent within their Group  |
| 20002      | View Agents' conversations | View conversations handled by other Agents within their Group    |
| 20003      | View Agent List | View full list of Agents within their Group                      |
| 20004      | Use secure form within a conversation        | For brands who have enabled the secure forms feature, this permission allows the Agent to use the form within a conversation               |
| 20007      | Initiate CoBrowse view-only session, with scroll control       | Invite consumer to join a CoBrowse session, with the ability to view their screen with scroll control.        |
| 20008      | Initiate CoBrowse view-only session     | Invite consumer to join a CoBrowse session, with the ability to view their screen.          |
| 20009      | Initiate CoBrowse shared control session   | Invite consumer to join a CoBrowse session, with the ability to control actions on their screen  |
| 20010      | View support cases in theConnection Area     | View open and closed support cases from the Connection Area.     |
| 20011      | Create support cases from theConnection Area     | For brands who have enabled Support cases creation feature, this permission allows to create support cases from the Connection Area.       |
| 20012      | Contact LivePersonsupport within the Connection Area  | Chat with the LivePerson support team.                           |
| 20013      | Handle messaging conversations and access All Conversations List | For brands who have enabled the Messaging feature, this permission allows an agent to handle messaging conversations and view all resolved conversations handled by agents               |
| 20014      | View Connection Area Content      | View relevant content from the Connection Area per journey.      |
| 20015      | Handle messaging conversations  | For brands who have enabled the Messaging feature, this permission allows an agent to handle messaging conversations                       |
| 20017      | Set manual SLA  | Allows agents to manually configure the response time in a conversation.                    |
| 20020      | Update consumer profile via API. | Allow agent and agent managers to update consumer profile via API   |
| 20040      | View previously submitted messaging agent surveys | Allow agents to view all agent surveys submitted for the current conversation  |
| 30000      | Agent Manager core permissions     | Core permissions that are included with the Agent Manager role and cannot be disabled.      |
| 30001      | Join Agents' conversations                                     | Join a conversation handled by any Agent within their Group(s) or Sub-group(s)              |
| 30002      | View Agents' conversations                                     | View conversations handled by Agents within their Group(s) or Sub-group(s)                  |
| 30003      | Edit Agent users| Create, edit or delete users with an Agent role within their Group(s) or Sub-group(s)       |
| 30004      | Edit Agent Manager users  | Create, edit or delete users with an Agent Manager role within their Group(s) or Sub-group(s)   |
| 30005      | Edit Agent profile   | Create, edit or delete Agent role profiles                       |
| 30006      | Edit Agent Manager profile                                     | Create, edit or delete Agent Manager role profiles               |
| 30007      | Agent Groups administration                                    | Create, edit, restructure or delete their Agent Groups or Sub-groups  |
| 30008      | Export users    | Export the list of Agent or Agent Manager users in their groups or sub-groups; this will also export the list of skills, profiles and the groups and sub-groups managed by the Agent Managers |
| 30009      | View Conversation History                                      | View all engagements handled by Agents within their Group(s) or Sub-group(s)                |
| 30010      | View Agent List | View full list of Agents within their Group                      |
| 30011      | Night Vision (advanced configuration)                          | Make advanced configurations within Night Vision                 |
| 30012      | View secure form responses in Conversation History             | For brands who have enabled the secure forms feature, this permission allows the Agent Manager to view all secure form responses in the Conversation History                               |
| 30013      | Edit Skills     | Create, edit or delete Skills                                    |
| 30015      | View All Conversations List                                    | For brands who have enabled the Messaging feature, this permission allows viewing of all resolved conversations handled by Agents          |
| 30018      | View support cases in theConnection Area                       | View open and closed support cases from the Connection Area.     |
| 30019      | Create support cases from theConnection Area                   | For brands who have enabled Support cases creation feature, this permission allows to create support cases from the Connection Area.       |
| 30020      | Contact LivePersonsupport within the Connection Area           | Chat with the LivePerson support team.                           |
| 30021      | View Connection Area Content                                   | View relevant content from the Connection Area per journey.      |
| 30022      | View reports in Operational BI                                 | View reports in the Operational BI dashboard                     |
| 30023      | Configure shift status                                         | For brands who have enabled the Messaging feature, this permission allows an agent manager to configure the shift status                   |
| 30035      | Configure skill workdays                                       | Access users module, view a list of skills and assign and edit Schedule and Special Occasion items associated with them.    |
| 30056      | Configure messaging agent survey                               | Allow agent managers to configure agent surveys and assign them to skills   |
| 30057      | View previously submitted messaging agent surveys              | Allow agent managers to view all agent surveys submitted for the current conversation   |
| 30058      | Submit messaging agent survey                                  | Allow agent managers to submit agent surveys on behalf of their agents   |
| 30088      | Data Transporter: access enabled                               | User can access Data Transporter   |
| 30089      | Data Transporter: manage account settings                      | User can edit Data Transporter Account settings   |
| 30090      | Data Transporter: view and download history                    | User can view and download historical reports   |
| 30091      | Data Transporter: manage destinations                          | User can create, update and delete destinations   |
| 30092      | Data Transporter: manage data sources                          | User can create, update and delete data sources   |
| 30093      | Data Transporter: manage tasks                                 | User can create, update and delete tasks   |
| 30094      | Performance Optimizer: access enabled                          | User can access Performance Optimizer   |
| 30095      | Performance Optimizer: manage lines of business                | User can create, update and delete LOBs   |
| 30096      | Staff Forecaster: access enabled                               | User can access Staff Forecaster   |
| 30097      | Staff Forecaster: manage skill groups                          | User can create, update and delete skill groups   |
| 40000      | Campaign Manager core permissions                              | Core permissions that are included with the Campaign Manager role and cannot be disabled.   |
| 40001      | Edit campaigns  | Create and modify campaigns                                      |
| 40002      | Publish campaigns    | Control the publishing of campaigns                              |
| 40003      | Configure predefined content                                   | Add and edit Predefined Content in the Agent Workspace           |
| 40004      | Configure automatic messages                                   | Add and edit Automatic Messages in the Agent Workspace           |
| 40005      | Configure engagement attributes                                | Add and edit Engagement Attributes used in Campaigns             |
| 40006      | Import and export predefined content                           | Import and export Predefined Content to and from Conversational Cloud      |
| 40007      | Export predefined content                                      | Export Predefined Content from Conversational Cloud                        |
| 40008      | View API keys   | For brands who have enabled the API key management feature, this permission allows viewing of API keys used by the brand                   |
| 40012      | Configure authentication server                                | For brands who have enabled the authentication conversation feature, this permission allows users to configure the authentication server   |
| 40014      | View support cases in theConnection Area                       | View open and closed support cases from the Connection Area.     |
| 40015      | Create support cases from theConnection Area                   | For brands who have enabled Support cases creation feature, this permission allows to create support cases from the Connection Area.       |
| 40016      | Contact LivePersonsupport within the Connection Area           | Chat with the LivePerson support team.                           |
| 40017      | View Connection Area Content                                   | View relevant content from the Connection Area per journey.      |
| 40018      | Edit skills     | Edit skills and configure default survey for skill change        |
| 40019      | View reports in Campaign BI                                    | View reports in the Campaign BI dashboard                        |
| 40021      | View reports in Operational BI                                 | View reports in the Operational BI dashboard                     |
| 40028      | Configure Schedule and Special Occasion library items          | View and edit Schedule and Special Occasion library items       |
| 40046      | Data Transporter: access enabled                               | User can access Data Transporter   |
| 40047      | Data Transporter: manage account settings                      | User can edit Data Transporter Account settings   |
| 40048      | Data Transporter: view and download history                    | User can view and download historical reports   |
| 40049      | Data Transporter: manage destinations                          | User can create, update and delete destinations   |
| 40050      | Data Transporter: manage data sources                          | User can create, update and delete data sources   |
| 40051      | Data Transporter: manage tasks                                 | User can create, update and delete tasks   |
| 40052      | Performance Optimizer: access enabled                          | User can access Performance Optimizer   |
| 40053      | Performance Optimizer: manage lines of business                | User can create, update and delete LOBs   |
| 40054      | Staff Forecaster: access enabled                               | User can access Staff Forecaster   |
| 40055      | Staff Forecaster: manage skill groups                          | User can create, update and delete skill groups   |

### Data Revisions

The revision mechanism exists in order to maintain order and save historical data. To use the benefits of the revision mechanism, The developers are asked to add the 'IF-MATCH' request header. The 'IF-MATCH' request header contains data revision as known by the client, In addition, it allows to optimize the backend response and allows concurrent modification backend verification.

Every entity will have only one latest revision and the maximum revision number is a global number by account. Each change/update on one of these entities increases The revision. The developer can call the GET entity API in order to retrieve the latest revision. This revision will be part of the response header under ac-revision header.

When sending the API calls using the 'IF-MATCH' header with a specific revision if there was no change the response will be 304 (Not Modified) response. When using 'IF-MATCH' header with '-1' value you will always get the full response.