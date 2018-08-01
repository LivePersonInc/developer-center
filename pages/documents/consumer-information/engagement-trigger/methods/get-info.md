---
title: getEngagementInfo
redirect_from:
  - trigger-getinfo.html
level1: Documents
level2: Consumer Information
level3: Engagement Trigger API
level4: Methods
order: 20
permalink: engagement-trigger-api-methods-getengagementinfo.html

indicator: both
---

This method receives an engagement ID and returns the engagement information if it exists on the page, or an empty object if it does not.

**Syntax**

  `lpTag.taglets.rendererStub.getEngagementInfo(engagementId);`

**Parameters**

| Name | Description |
| :--- | :--- |
|engagementId | The ID of the engagement to get information about. |

*Example*


```javascript

    if(lpTag && lpTag.taglets && lpTag.taglets.rendererStub){
       var info =   
            lpTag.taglets.rendererStub.getEngagementInfo(12356454);
    }

```


**Return value**

The method returns a JSON with the engagement information.

*Example*

```json
    {  
  "campaignId":1547868510,
  "confKey":"1547868510_1547904110_21",
  "contextId":"1",
  "contexts":[  
     {  
        "EngagementContext":{  
           "id":"1"
        }
     },
     {  
        "pageContext":{  
           "id":"2203783087"
        }
     }
  ],
  "conversationType":0,
  "engagementId":1547904110,
  "engagementName":"Engagement 1",
  "engagementRevision":21,
  "engagementType":2,
  "instantiated":true,
  "renderingType":0,
  "state":1,
  "tglName":"toaster",
  "zoneId":1346149610
}
```

**Elements in the response**

| Name | Description | Type / Value |
| :--- | :--- | :--- |
| campaignId  | The engagement’s campaign ID. | ALPHA_NUMERIC |
| confKey | Internal. CampaignId + EngagementId + Revision. | string |
| contextId  | The engagement context ID (engagement impression ID) in the current monitored session. | ALPHA_NUMERIC |
| contexts | The engagement and page context ID (impression ID) in the current monitored session.  <br> Example: <br> ```[``` <br> ```{"EngagementContext":{"id": "1"}},``` <br> ```{"pageContext":{"id":"173828"}}``` <br> ```]``` | array of Objects |
| conversationType | An enum representing the conversation type to be initiated (0 - Chat, 1 - Messaging). | numeric |
| engagementId | The engagement ID. | ALPHA_NUMERIC |
| engagementName | The engagement name. | string |
| engagementRevision | The engagement revision. | numeric |
| engagementType | The engagement format. Available values: 0: "Peeling corner", 1: "Overlay", 2: "Toaster", 3: "Slide-out", 5: "Embedded", 6: "Sticky" | numeric |
| instantiated | Internal.  | Boolean |
| renderingType | Internal.  | numeric |
| state | The engagement state (defined by the availability of agents within the skill group)*. Available values: 1 - online, 2 - offline | numeric |
| tglName | Internal. The engagement format description. | string |
| zoneId | Internal. The engagement zone ID. | ALPHA_NUMERIC  |
