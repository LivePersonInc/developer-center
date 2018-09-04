---
pagename: Get Shift Status by Skill
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Shift Status API
subfoldername: Methods
indicator: messaging
permalink: shift-status-api-methods-get-shift-status-by-skill.html
---

This API retrieves a skill entity and displays its current shift status. This status is indicated under the `onShift` parameter which is `boolean`.

<div class="important"> If you use the following API while providing a Skill ID which does not exist under the target account, the API will return the Skill's status according to the account level configuration</div>

### Request

 |Method           |        URL |
 |:-------          |       :------     |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/skills/{skillId}/shift-status-skill |

**Request Headers**

 |Header      |             Description |
| :-------       |          :------     |
 |Authorization | Contains token string to allow request authentication and authorization: "Bearer {token (jwt)}". |

**Path Parameters**

| Parameter   |  Description   |   Type / Value  |              
 |:---------- |  :------------- |  :-------------  |            
| accountId |    LivePerson site ID    |   String  |
| skillId |    Skill ID    |   String  |
 

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 500  | Internal Server Error |


**Response Body**

### Entity Structure

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- | :--- |
| skill | Skill unique ID | Long | |
| onShift | Whether the current skill is on shift or not | Boolean | For skills which did not override the account default configuration, the shift status will be taken from the account level |
| nextOn | The start time of the next shift | Long | Epoch time in milliseconds. This value can be null if the shift is 24\7 |
| nextOff | The end time of the next shift | Long | Epoch time in milliseconds. This value can be null if the shift is 24\7 or if the skill has no configuration and it uses an account level configuration which is manual and currently off. |

### Entity Example

```json
    {
        "skill": 326244912,
        "onShift": false,
        "nextOn": 1535979600000,
        "nextOff": 1535997600000
    }    
```
