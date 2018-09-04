---
pagename: Get Shift Status by Account
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Shift Status API
subfoldername: Methods
indicator: both
permalink: shift-status-api-methods-get-shift-status-by-account.html
---

This API retrieves a list of skills of a specific account, and displays for each skill it's current shift status (on/off).

### Request

 |Method           |        URL |
 |:-------          |       :------     |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/shift-status |

**Request Headers**

 |Header      |             Description |
| :-------       |          :------     |
 |Authorization | Contains token string to allow request authentication and authorization: "Bearer {token (bearer)}". |

**Path Parameters**

| Parameter   |  Description   |   Type / Value  |              
 |:---------- |  :------------- |  :-------------  |            
| accountId |    LP site ID    |   String  |
 

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
| onShift | Whether the current skill is on shift or not | Boolean | For skills who did not override the account default workdays, the shift status will be taken from the account level |
| nextOn | When does the next shift starts  | Long | Epoch time in milliseconds. This value can be null if the shift is 24\7 |
| nextOff | When does the current\next shift ends | Long | Epoch time in milliseconds. This value can be null if the shift is 24\7 or if the skill has no configuration and it uses the account level, which is manual and currently off. |

### Entity Example

```json
    [
        {
            "skill": 326244912,
            "onShift": false,
            "nextOn": 1535979600000,
            "nextOff": 1535997600000
        },
        {  
            "skill": 326244932,
            "onShift": true,
            "nextOn": 1535997600000,
            "nextOff": 1535997600000
        },
        {  
            "skill": 326244952,
            "onShift": true
        },
        {  
            "skill": 326244972,
            "onShift": true,
            "nextOn": 1535997600000     
        }
    ]
```