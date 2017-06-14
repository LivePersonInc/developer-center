---
title: OnEngagement
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 200
permalink: consumer-experience-javascript-chat-onengagement.html

indicator: messaging
---

### Request

**Object Properties**

| Attribute                            | Description                                                                                   | Type                                                                | Required                                                            |
|--------------------------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|
| status                               | Availability status                                                                           | enum (‘Available’, ‘NotAvailable’)                                  | Required                                                            |
| engagementDetails                    | The details of an engagement when it is available.                                            | object                                                              | Mandatory when the status is ‘Available’, otherwise is not returned |
| engagementDetails.campaignId         | Number                                                                                        | Mandatory when the status is ‘Available’, otherwise is not returned |                                                                     |
| engagementDetails.engagementId       | Number                                                                                        | Mandatory when the status is ‘Available’, otherwise is not returned |                                                                     |
| engagementDetails.contextId          | string                                                                                        | Mandatory when the status is ‘Available’, otherwise is not returned |                                                                     |
| engagementDetails.windowId           | string                                                                                        | Mandatory when the status is ‘Available’, otherwise is not returned |                                                                     |
| engagementDetails.language           | string                                                                                        | Mandatory when the status is ‘Available’, otherwise is not returned |                                                                     |
| engagementDetails.engagementRevision | number                                                                                        | Mandatory when the status is ‘Available’, otherwise is not returned |                                                                     |
| engagementDetails.validForSeconds    | The period in seconds that the engagement will be valid                                       | number                                                              | Mandatory when the status is ‘Available’, otherwise is not returned |
| engagementDetails.skillId            | number                                                                                        | Optional when the status is ‘Available’                             |                                                                     |
| engagementDetails.skillName          | string                                                                                        | Optional when the status is ‘Available’                             |                                                                     |
| pageId                               | Page identification Id for sending event on the current engagement                            | string                                                              | Mandatory (waiting for client side to fix)                          |
| sessionId                            | The visit session ID. Must be saved in the mobile SDK, for future requests in the same visit. | string                                                              |                                                                     |
| visitorId                            | The visit visitor ID. Must be saved in the mobile SDK, for future requests in the same visit. | string                                                              |                                                                     | 

**Sample Response**

```json
    {
      "status": "Available",
      "sessionId": "abc",
      "visitorId": "xyz",
      "pageId" : "4743822558",
      "engagementDetails": {
        "campaignId": "3346848610",
        "engagementId": "3562981110",
        "contextId": "1",
        "windowId": "3346847910",
        "language": "en-US",
        "engagementRevision": 44,
        "validForSeconds": 900,
        "skillId": 23,
        "skillName":"TestSkill" 
       }
    }
```

```json
{
    "status": "NotAvailable",
    "sessionId": "abc",
    "visitorId": "xyz",
    "pageId": "4743822558"
}
```
    