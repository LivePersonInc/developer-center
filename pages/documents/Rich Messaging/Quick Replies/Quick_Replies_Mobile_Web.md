---
pagename: Mobile SDK & Web Template
Keywords: quick replies rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Quick Replies
permalink: quick-replies-mobile-sdk-web-template.html
root-link: true
indicator: messaging
---

### Overview

LiveEngage enables creating and displaying up to 24 Quick Replies chips per message (that is, a consumer will have up to 24 chips to choose from per message they'll send).

Each chip can have:

* **Title:** up to 25 characters (above 25, LiveEngage's default client like the Mobile App SDK will insert an ellipsis after 22 and obscure the rest of the text. If you're building your own client, you can handle this as you'd like, defining your own character limit)

* **Click operation:** with actions and metadata

* **Styling elements:** for full branding and styling needs

When a Quick Reply chip is tapped, the rest of the chips are dismissed. The agent can see the entirety of the Quick Replies group at all times, even if it is no longer visible to the consumer (after they click on a chip for example).

![Quick Replies](images/quick-replies.gif)

### Template Properties

| Property Name | Description             | Type   | Required | Size Limit |
| :------------ | :---------------------- | :----- | :------- | :--------- |
| type          | Must be `quickReplies`  | String | Y        |            |
| itemsPerRow   | Number of items per row | Number | Y        | 8 items    |
| replies       | A list of chips         | Array  | Y        | 24 items   |


### Chip Element

| Property Name | Description                                                   | Type      | Required | Size Limit |
| :------------ | :------------------------------------------------------------ | :-------- | :------- | :--------- |
| type          | Type of element. Must be 'button'                             | Enum      | Y        |            |
| title         | chip title                                                    | String    | Y        | 25 chars   |
| click         | On-click operation (included metadata and/or actions clauses) |           | Y        |            |
| tooltip       | Chip tooltip, used also as aria                               | String    | N        | 256 chars  |
| style         | Styling elements for the chip.                                | Container | N        |            |

For the 'click' property, you will want to use the `publishText` action.

For the 'style' property of a chip, please see the [Styling](#Styling) section.

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
        "color": "###fff",
        "border-color": "###444",
        "background-color": "###333",
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

### Styling

Each Quick Reply chip can have its own style elements.
<br/>
Additional styling configuration is available for Mobile SDK: [Android](android-attributes.html###quick-replies) | [iOS](consumer-experience-ios-sdk-attributes.html###quick-reply)

#### Properties

| Property Name    | Description                            | Type                      |
| :--------------- | :------------------------------------- | :------------------------ |
| bold             | Whether the text is bold or not        | Boolean                   |
| italic           | Whether the text is in italics or not  | Boolean                   |
| color            | Defines the chip's color               | String - hex color        |
| border-color     | Defines the chip's background color    | String - hex color        |
| border-radius    | Defines the element's background color | Number                    |
| background-color | Defines the element's background color | String - hex color        |
| size             | Defines the element's size             | Enum - small/medium/large |

#### Example

```json
"style": {
	"bold": true,
	"italic": true,
	"color": "###453533",
	"border-color": "###000000",
	"border-radius": 5,
	"background-color": "###3E47A0",
	"size": "small"
}
```

### Best Practices

1. A Quick Replies bundle does not exist on its own. An agent sends a message to the consumer (a question, a remark or even a Structured Content message) followed by a Quick Replies bundle. For example, a message such as "In which color would you like this product?" would be followed by a bundle of chips with "Red", "Black", "Blue" etc. as possible chips. When designing the Quick Replies bundle, you should also design the coupled message assigned to it.

2. Use Quick Replies to prompt for specific next steps, or use them as answers for surveys or conversational forms.

3. Use short texts in the chip's content - be brief and precise.

4. If you wish the agent to be able to follow the consumer's clicks, we recommend adding a publish text click-event to each chip. The publish-text click-event will add a message to the transcript on behalf of the consumer, which will be available for the agent to follow and record for later use.

5. Don't use Quick Replies if you wish to let consumers use them more than once in a conversation (like a menu a consumer can go back to). Quick Replies disappear after a chip was clicked (or consumer made another action in the conversation window). Use [Structured Content templates](structured-content-mobile-sdk-web-templates-card-template.html) instead as they stay persistent in the conversation.

### Limitations

* Once a max chips per row is set (max 8), the number of rows is calculated automatically (up to 3 rows). If the number of chips exceeds max chips per row times 3, then extra chips will be added to the last row.
* A chip’s title is set to have a maximum of 25 characters. If more are set, then the first 22 characters will be used with ellipsis.
* If a consumer decided to type the text of the chip, instead of clicking on it, then no click-operation will be executed (no action or metadata will be sent to the server). If your bot depends on such data, consider "teaching" the bot to accept typed-replies, and not just clicked-replies.
