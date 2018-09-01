---
pagename: Engagement Events
redirect_from:
  - lp-tag-engagement.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: LE-Tag
subfoldername: Events

order: 20
permalink: le-tag-events-engagement-events.html

indicator: both
---

These are engagement-related events, including rendering, display and interactions with the engagement.

### START

This event is triggered when the flow to display the engagement has started.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "START" |
| appName | "LP_OFFERS" |

**Event Properties**

| Name | Description | Type / Value | Notes |
| :--- | :--- | :--- | :--- |
| contexts | The engagement and page context ID (impression ID) in the current monitored session. | Array of Objects | Example: <br>[ <br> {"EngagementContext":{"id": "1"}}, <br> {"pageContext":{"id":"173828"}} <br> ] |
| campaignId | The engagement’s campaign ID. | ALPHA_NUMERIC | |
| engagementId | The engagement ID. | ALPHA_NUMERIC | |
| engagementRevision | The engagement revision. | ALPHA_NUMERIC | |
| engagementType | The engagement format. | Numeric | Available values: 0: "Peeling corner", 1: "Overlay", 2: "Toaster", 3: "Slide-out", 5: "Embedded", 6: "Sticky" |
| contextId | The engagement context ID (engagement impression ID) in the current monitored session. | ALPHA_NUMERIC | |
| zoneId | Internal. The engagement zone ID. | ALPHA_NUMERIC | |
| state | The agent's state | Numeric | Available values: 1 - online, 2 – offline, 4 - busy |
| confKey | Internal. CampaignId + EngagementId + Revision. | string | |
| tglName | Internal. The engagement format description. | string | |
| done | If the configuration has finished loading. | Boolean | |
| engagementName | The engagement name as defined in LiveEngage UI. | string | |

*Example:*

```javascript
{
    "contexts": [
        {"EngagementContext": {
                "id": "1"
            }
        },
        {"pageContext": {
                "id": "1738225948"
            }
        }
    ],
    "campaignId": 210599710,//The campaign Id
    "engagementId": 210600710,//The engagement Id
    "engagementRevision": 18,//The revision we are going to show
    "engagementType": 3,//The engagement type
    "contextId": "1",//The context (instance in memory on the backend)
    "zoneId": 471288710, //The zone this is on
    "state": 2, //The current state of the agents (online, offline, busy) , to set the display state
    "confKey": "210599710_210600710_18",
    "tglName": "slider" //The taglet that needs to be downloaded
    "done": true, //If the configuration has finished loading
    "engagementName": "Slide-out chat button" //The description of the engagement
}
```

### OFFER_DISPLAY

This event is triggered when the engagement has been rendered and is going to be displayed on the page.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "OFFER_DISPLAY" |
| appName | "LP_OFFERS" |

**Event Properties**

See [START](lp-tag-engagement.html#start) event.

*Example:*

```javascript
{
    "contexts": [
        {"EngagementContext": {"id": "2"}},
        {"pageContext": {"id": "1738225948"}}
    ],
    "campaignId": 248955910,//The campaign Id
    "engagementId": 248956110,//The engagement Id
    "engagementRevision": 14,//The revision we are going to show
    "engagementType": 6,//The engagement type
    "contextId": "2",//The context (instance in memory on the backend)
    "zoneId": 471288510,//The zone this is on
    "state": 2,//The current state of the agents (online, offline, busy) , to set the display state
    "confKey": "248955910_248956110_14",
    "tglName": "overlay",//The taglet that was downloaded
    "done": true,//If the configuration has finished loading
    "engagementName": "Mine"//The description of the engagement
}
```

### OFFER_IMPRESSION

This event is triggered when the engagement has been displayed on the page.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "OFFER_IMPRESSION" |
| appName | "LP_OFFERS" |

**Event Properties**

See [START](lp-tag-engagement.html#start) event.

###  OFFER_CLICK

This event is triggered when the engagement has been displayed on the page.

**Event information**

| Name | Value |
| :--- | :--- |
| eventName | "OFFER_CLICK" |
| appName | "LP_OFFERS" |

### OFFER_TIMEOUT

This event is triggered when an engagement duration has timed out.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "OFFER_TIMEOUT" |
| appName | "LP_OFFERS" |

**Event Properties**

See [START](lp-tag-engagement.html#start) event.

### OFFER_DECLINED

This event is triggered when an engagement is closed by a user.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "OFFER_DECLINED" |
| appName | "LP_OFFERS" |

**Event Properties**

See [START](lp-tag-engagement.html#start) event.

### OFFER_REMOVE

This event is triggered when an engagement is removed from the DOM (auto or user initiated).

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "OFFER_REMOVE" |
| appName | "LP_OFFERS" |

**Event Properties**

See [START](lp-tag-engagement.html#start) event.
