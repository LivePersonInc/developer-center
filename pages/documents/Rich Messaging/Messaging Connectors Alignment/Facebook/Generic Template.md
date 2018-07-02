---
title: Generic Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 60
permalink: rich-messaging-connectors-fb-generic.html
indicator: messaging
---

The [generic template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic) is a simple structured card message that includes:

* Text title
* Text subtitle
* Image
* Up to three buttons with either URL, publish text or navigation button actions.

Brands will be able to share the generic template through Rich Messaging basic elements, while using the Rich Messaging JSON properties.

Below is an example of a generic template with all type of button actions, including a link button and navigation button tap view:

![Facebook Generic Template 1](images/fb-generic-1.jpg)   ![Facebook Generic Template 2](images/fb-generic-2.jpg)   ![Facebook Generic Template 3](images/fb-generic-3.PNG)


Agent view on LiveEngage:
![Agent view on LiveEngage](images/fb-generic-agentview.png)

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Types of basic elements supported by Structured Content framework. Can be “text”, “image” or “button” | Enum | Y |  |
| tag | The tag of the layout view, must be “generic” in order to use the Generic Facebook template. Within basic elements objects, tag will be “title”/”subtitle”, which will indicate what text should rendered in each of those elements (the title and subtitle have default style in Facebook templates) | Enum | Y |  |
| elements | Array of elements. The supported basic Rich Messaging elements for Facebook templates are “text”, “image”, or “button”  | Elements | Y |  |
| text | The message text in a “text” type element | String | Y | 640 (UTF-8-encoded) characters limit in text element for Facebook templates. <br/><br/> 80 characters limitation for “title” or “subtitle” text elements |
| Image | Images in your Facebook template. Supported by sharing a URL that represents the image |  | Y |  |
| url | Image URL in a “image” type element (can be JPG and PNG only) | String | Y |  |
| Button | Simple Button which triggers an action when tapped by a consumer on Facebook Messenger. | Elements | Y | 20 characters limit in button for Facebook templates <br/>Facebook Generic template only supports up to three buttons |
| tooltip | Element tooltip on Agent Workspace. Used also for aira | String | N |  |
| action | Actions are a list of applicative actions on buttons, that will run on the consumer side and will help them to achieve their operation. <br/>Button action for Facebook Generic template can be set to Publish text, Link or Navigate:<br/>**Link** - Open a URL in a Facebook Messenger webview.<br/>**Navigate**- Will open a webview to a Google map of location<br/>**Publish text** - Send a message on behalf of consumer as a response for a button tap <br/><br/>Review the full list of [Rich Messaging actions](rich-messaging-click-ops.html) | Enum - “publishText”, “link”, “navigate” | N |  |


### Example

```json
{
  "type": "vertical",
  "tag": "generic",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          "type": "image",
          "url": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg",
          "tooltip": "Flowers"
        },
        {
          "type": "text",
          "tag": "title",
          "text": "Birthday Bouquet",
          "tooltip": "Title"
        },
        {
          "type": "text",
          "tag": "subtitle",
          "text": "Wild flowers",
          "tooltip": "subtitle"
        },
        {
          "type": "button",
          "tooltip": "publish text example",
          "title": "publish text example",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "published text button tap"
              }
            ]
          }
        },
        {
          "type": "button",
          "tooltip": "URL button example",
          "title": "URL button example",
          "click": {
            "actions": [
              {
                "type": "link",
                "name": "URL button tap",
                "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
              }
            ]
          }
        },
        {
          "type": "button",
          "title": "Navigate",
          "click": {
               "actions": [
              {
                "type": "navigate",
                "lo": 40.7562,
                "la": -73.99861
              }
            ]
          }
        }
      ]
    }]}
```
