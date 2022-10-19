---
pagename: Impression Events Body Example
redirect_from:
  - rt-interactions-example.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: App Engagement API
order: 22
permalink: app-engagement-api-impression-events-body-example.html
indicator: both
---

ImpressionAcceptEvent, ImpressionDisplayEvent

```json
     {
      "pageId": "4743822558",
      "impAttributes": [
        {
          "type": "impAccept",
          "campaign": 3115242510,
          "engId": 3115242810,
          "revision": 537,
          "eContext": [
            {
              "type": "engagementContext",
              "id": "1"
            }
          ]
        },
        {
          "type": "impDisplay",
          "campaign": 3115242510,
          "engId": 3115242810,
          "revision": 537,
          "eContext": [
            {
              "type": "engagementContext",
              "id": "1"
            }
          ]
        }
      ]
    }
```

ImpressionExpandedEvent:

```json
    {
          "type": "impExpanded",
          "expanded": null,
          "userInit": null,
          "actionableItems": null,
          "campaign": 3115242510,
          "engId": 3115242810,
          "revision": 537
        }
```

ImpressionTimeoutEvent:

```json
    {
      "type": "impTimeout",
      "campaign": 3115242510,
      "engId": 3115242810,
      "revision": 537
    }
```

ImpressionCloseEvent:

```json
    {
      "type": "impClose",
      "campaign": 3115242510,
      "engId": 3115242810,
      "revision": 537
    }
```

ImpressionCloseEvent:

```json
    {
      "type": "impClose",
      "campaign": 3115242510,
      "engId": 3115242810,
      "revision": 537
    }
```
