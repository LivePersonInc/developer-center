---
pagename: Reply Button Template
redirect_from:
  - structured-content-whatsapp-business-messages-templates-reply-button-template.html
Keywords: structured content rich messaging whatsapp business messages reply button card template
sitesection: Documents
categoryname: "Rich Messaging"
documentname: WhatsApp Business Messages Templates
permalink: whatsapp-business-messages-templates-reply-button-template.html
indicator: messaging
---

### Overview

In WhatsApp Business Messages, a Reply Button Message has the following structure:

1. Image Header (optional)
2. Title
3. Subtitle
4. Footer (optional)
5. Buttons (between 1 and 3)

**Note:** We only support image headers and text headers (Title element).

**Examples of WhatsApp Reply Button**

![Whatsapp Reply Button Examples](img/connectors/wa_replybutton.png)

### Reply Button

The Reply Button is the container that holds the information that should be displayed by the connector.

| Property Name | Description                                   |                  Type | Required |
|----------------------------------------------------------------------------------------------------|
| type          | Type of container                               | Enum                  | Y        |
| tag           | Tag of template view must be **generic**        | Enum                  | Y        |
| elements      | Array of elements/templates that contains the actual content of the reply button. The elements must be in the following order: <br>  1) Image header <br> 2) Title <br> 3) Subtitle <br> 4) Footer <br> 5) Button <br> The description and at least a button is required.| Array(Element) | Y |

#### JSON Representation Card

```json
{
  "type": "vertical",
  "tag": "generic",
  "elements": [Image, Title, Description, Button, Button, Button]
}
```

### Image Header

A image can be used as an header and it will be displayed at the top of the Reply Button.
The image size should be under 5MB.

| Property Name | Description | Type | Required |
| ---  | --- | --- | --- |
| type | Must be "image". Identifies the element as an object of type image.  | Enum | Y |
| url  |  The URL of the image that will be sent to Facebook. The domain where the image is being stored must be whitelisted before it can be used.  | String | Y |

#### JSON Representation

```json
{
  "type": "image",
  "url": "https://d1hryyr5hiabsc.cloudfront.net/web2020/img/resources/rep-great-ai-divide@1x.jpg"
}
```

### Title

Title is a textual header for the reply message. Since the title is part of the body message, using an image and
a title (header) at the same time is supported. Furthermore the title length is not limited to the length of header described in
the [Meta documentation](https://developers.facebook.com/docs/whatsapp/on-premises/reference/messages#header-object)

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "text". Identifies the element as an object of type text.  | Enum | Y |
| tag | Must be "title". If missing, the first text element in the template will be set as the card text.  | Enum | Y |
| text |  The actual text of the headline. The text can not be longer than 1024 characters shared with the subtitle.  | String | Y |

#### JSON Representation

```json
{
  "type": "text",
  "tag": "title",
  "text": "The great AI divide"
}
```

### Subtitle

The text of the rich card.

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "text". Identifies the element as an object of type text.  | Enum | Y |
| tag | Must be "subtitle". If missing the first text element in the template will be set as the card text.  | Enum | Y |
| text |  The description text. The text can not be longer than 1024 characters shared with the title.  | String | Y |

### Footer

Footer of the card.

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "text". Identifies the element as an object of type text.  | Enum | Y |
| tag | Must be "footer".  | Enum | Y |
| text |  The description text. The text can not be longer than 60 characters shared with the title.  | String | Y |

#### JSON Representation

```json
{
  "type": "text",
  "text": "Will be processed in 1 working day",
  "tag": "footer"
},
```

### Button

A button at the bottom of a rich card.

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "button". Identifies the element as an object of type button.  | Enum | Y |
| title |  The text of the button. Please refer to the [Meta documentation](https://developers.facebook.com/docs/whatsapp/on-premises/reference/messages#action-object) for the text length.  | String | Y |
| click |  The click operations that should be executed when the customer clicks the button. These click operations must contain at least one action. The WhatsApp only supports the publishText  | ClickOperations | Y |

```json
{
  "type": "button",
  "title": "Retry same address",
  "click": ClickOperations
}
```

### Full Template

```json
{
  "type": "vertical",
  "tag": "generic",
  "elements": [
    {
      "type": "image",
      "url": "https://d1hryyr5hiabsc.cloudfront.net/web2020/img/resources/rep-great-ai-divide@1x.jpg"
    },
    {
      "type": "text",
      "text": "Package delivery update",
      "tag": "title"
    },
    {
      "type": "text",
      "text": "Hi! It was not possible to deliver your package on the 16th of August 2021. Please select a desired delivery location.",
      "tag": "subtitle"
    },
    {
      "type": "text",
      "text": "Will be processed in 1 working day",
      "tag": "footer"
    },
    {
      "type": "button",
      "title": "Retry same address",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "Retry same address"
          }
        ]
      }
    },
    {
      "type": "button",
      "title": "Pickup point",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "Pickup point"
          }
        ]
      }
    },
    {
      "type": "button",
      "title": "Post office",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "Post office"
          }
        ]
      }
    }
  ]
}
```