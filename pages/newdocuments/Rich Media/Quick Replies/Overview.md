---
pagename: Overview
redirect_from:
  - rich-messaging-quick-replies-overview.html
Keywords:
sitesection: Documents
categoryname: "Rich Media"
documentname: Quick Replies

level-order: 3
order: 10
permalink: quick-replies-overview.html
root-link: true
indicator: messaging
---

Quick Replies are a group of actionable items (chips) that appear as part of the conversation, making it easier to have an automated conversation with consumers. Once a consumer clicks on one of these chips, a pre-rendered message is sent to a bot, without the consumer having to type it out. This saves the consumer precious time and creates an easy way to enrich the consumer’s experience and provide a direction for conversations using bot interactions. Because these answers are pre-formatted, it enables a bot to continue the conversation freely and smoothly.

LiveEngage enables creating and displaying up to 24 Quick Replies chips per message (that is, a consumer will have up to 24 chips to choose from per message they'll send).

Each chip can have:

* **Title:** up to 25 characters (above 25, LiveEngage's default client like the Mobile App SDK will insert an ellipsis after 22 and obscure the rest of the text. If you're building your own client, you can handle this as you'd like, defining your own character limit)

* **Click operation:** with actions and metadata

* **Styling elements:** for full branding and styling needs

When a Quick Reply chip is tapped, the rest of the chips are dismissed. The agent can see the entirety of the Quick Replies group at all times, even if it is no longer visible to the consumer (after they click on a chip for example).

![Quick Replies](images/quick-replies.gif)

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Must be `quickReplies`| String | Y | |
| itemsPerRow | Number of items per row | Number| Y | 8 items |
| replies | A list of chips | Array | Y | 24 items |


### Chip

A Quick Reply chip has the same specification as a [button](rich-messaging-basic-elements-button.html):

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. Must be 'button' | Enum | Y |  |
| title  | chip title | String | Y  | 25 chars  |
| click | On-click operation (included metadata and/or actions clauses) |  | Y | |
| tooltip | Chip tooltip, used also as aria | String | N | 256 chars |
| style | Styling elements for the chip.  | Container | N | |

For the 'click' field, please see the [Click Operations](rich-messaging-click-ops.html) section.

For the 'style' field of a chip, please see the [Quick Replies Styling](rich-messaging-quick-replies-styling.html) section.

### Example

```json
{
  "type": "quickReplies",
  "itemsPerRow": 8,
  "replies": [
    {
      "type": "button",
      "tooltip": "yes i do",
      "title": "yes",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "yep"
          }
        ],
        "metadata": [
          {
            "type": "ExternalId",
            "id": "Yes-1234"
          }
        ]
      },
      "style": {
        "color": "#fff",
        "border-color": "#444",
        "background-color": "#333",
        "border-radius": 25,
        "bold": true
      }
    },
    {
      "type": "button",
      "tooltip": "No!",
      "title": "No!",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "No!"
          }
        ],
        "metadata": [
          {
            "type": "ExternalId",
            "id": "No-4321"
          }
        ]
      }
    }
  ]
}
```
