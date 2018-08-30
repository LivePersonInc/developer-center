---
pagename: getEngagementState
redirect_from:
  - trigger-getstate.html
sitesection: Documents
categoryname: Consumer Information
documentname: Engagement Trigger API
subfoldername: Methods
order: 30
permalink: engagement-trigger-api-methods-getengagementstate.html

indicator: both
---


This method receives an engagement ID and returns the engagement state if it exists on the page, or an empty object if it does not.

**Syntax**

```javascript
lpTag.taglets.rendererStub.getEngagementState(engagementId);
```

### Parameters

| Name | Description |
| :--- | :--- |
| engagementId | The ID of the engagement to get information about. |

*Example*

```javascript
    if(lpTag && lpTag.taglets && lpTag.taglets.rendererStub){
       var info =   
            lpTag.taglets.rendererStub.getEngagementState(12356454);
    }
```

### Return value

The method returns a JSON with the engagement information.

*Example*

``json
{
  "state" : 0,
  "desc" : "NA",
  "engagementId" : 123
}
```

**Elements in the response**

| Name | Description | Type / Value |
| :--- | :--- | :--- |
| state  | The engagement state (defined by the availability of agents within the skill group). Available value: 0 - NA, 1 - online, 2 - offline | numeric |
| desc | State description (matching ENUM state): "NA", "online", "offline" | string |
| engagementId | The engagement ID. | ALPHA_NUMERIC |
