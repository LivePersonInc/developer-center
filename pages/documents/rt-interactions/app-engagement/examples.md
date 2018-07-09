---
title: Impression Events Body Example
level1: Documents
level2: Real Time Interactions
level3: App Engagement API

order: 22
permalink: app-engagement-api-impression-events-body-example.html

indicator: both
---

ImpressionAcceptEvent, ImpressionDisplayEvent

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

ImpressionExpandedEvent:

    {
          "type": "impExpanded",
          "expanded": null,
          "userInit": null,
          "actionableItems": null,
          "campaign": 3115242510,
          "engId": 3115242810,
          "revision": 537
        }

ImpressionTimeoutEvent:

    {
      "type": "impTimeout",
      "campaign": 3115242510,
      "engId": 3115242810,
      "revision": 537
    }

ImpressionCloseEvent:

    {
      "type": "impClose",
      "campaign": 3115242510,
      "engId": 3115242810,
      "revision": 537
    }

ImpressionCloseEvent:

    {
      "type": "impClose",
      "campaign": 3115242510,
      "engId": 3115242810,
      "revision": 537
    }
