---
title: Best Practices
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 110
permalink: rich-messaging-connectors-fb-best-practices.html
indicator: messaging
---

**Finding the common denominator for the Structured Content layout between In-App Messaging, Web Messaging and Facebook Messenger.**

In order to make it easier to create multi source type Rich Messaging layouts, we recommend finding the common denominator between the sources that are using Rich Messaging as part of your agents and bots conversational flow.

Here are the basic rules for creating unified Rich Messaging layouts and experience across mobile messaging, web messaging and Facebook Messenger:

### Unified Layout for Facebook's Generic and Button templates
To create unified layouts when looking to use the Generic and Button Messenger templates, please use these limitations guidelines to create layouts with common denominator:

| Element | Facebook Limit | LiveEngage Limit |
| :--- | :--- | :--- |
| Button element | 3 buttons (sending more buttons will cause rendering the top 3 only) | no limit |
| Button Text | 20 characters | 128 characters |
| Text element | 640 characters | 5000 characters |
| Navigation action | renders a link to Google map (with exact location rendered by Structured Content coordinates) | in-app and web messaging will render the map inline conversation |

### Unified Layout for Facebook's List template
To create unified layouts when looking to use the List Messenger templates, please use these limitations guidelines to create layouts with common denominator:

| Element | Facebook Limit | LiveEngage Limit |
| :--- | :--- | :--- |
| List items minimum | 2 | no minimum |
| List items maximum | 4 (sending more items will cause rendering the top 4 only) | no maximum |
| Button element | 1 | no limit |
| Button text | 20 characters | 128 characters |
| Title/Sub-Title text | 80 characters | 5000 characters |
| Title element | either one or both: image URL, subtitle | no restrictions |
| Navigation action | renders a link to Google map (with exact location rendered by Structured Content coordinates) | in-app and web messaging will render the map inline conversation |
