title: Create Deletion Request
keywords:
level1: Documents
level2: Admin
level3: Personal Data Deletion API
level4: Methods


order: 30
permalink: personal-data-deletion-delete-request.html

indicator: both
---

This API allows to submit a deletion request. 

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://{domain}/api/account/{site_id}/personal-data-deletion |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |

 **Path Parameters**

  |Parameter|  Description|  Type/Value |
  |:------    |:--------    |:--------|
  |site_id|  LP account id|   String ^[a-zA-Z0-9_]{1,20}$|

 **Request BODY Parameters**


All fields are sent in a JSON format

 | Name | Description | Type / Value | Required | Notes |
 | :---- | :------- | :--------- | :--- | :--- |
 | engagement| Engagement ids for deletion (chat) | list of ids | Optional | Only one of the deletion types can be sent in a single request |
| conversation| Conversation ids for deletion (messaging) | list of  ids | Optional | Only one of the deletion types can be sent in a request |
| consumerId| Consumer ids for deletion | list of ids | Optional | Only one of the deletion types can be sent in a request |

BODY Examples:

{
  "engagement": [1,2,3]
}
{
  "consumer": [11,22,33]
}
{
  "conversation": [111,222,333]
}
