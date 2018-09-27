---
pagename: Basic Layout JSON Template
redirect_from:
  - rich-messaging-connectors-abc-listpicker-layout.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
subfoldername: List Picker
order: 30
permalink: apple-business-chat-templates-list-picker-basic-layout-json-template.html
indicator: messaging
---

In order to comply with the Apple Business Chat JSON structure, the below LiveEngage structured content JSON schema must be applied to any List Picker template.

Each List Picker template has the following mandatory sections:

1. [Business Chat Message](rich-messaging-connectors-abc-listpicker-metadata.html): multi selection, Received bubble, Reply bubbles (part of the [metadata JSON](rich-messaging-connectors-abc-listpicker-metadata.html))

2. [List Picker header](rich-messaging-connectors-abc-listpicker-body-header.html): title and subtitle (part of the [JSON body](rich-messaging-connectors-abc-listpicker-body.html))

3. [List Picker list items](rich-messaging-connectors-abc-listpicker-body-item.html): title, subtitle and an optional image (part of the [JSON body](rich-messaging-connectors-abc-listpicker-body.html))



The following JSON metadata and body structures are templates for any List Picker object:

### Metadata JSON template

```json
[
  {
    "type": "BusinessChatMessage",
    "multipleSelection": TRUE/FALSE,
    "receivedMessage": {
      "style": "icon",
      "subtitle": "THIS IS THE SUBTITLE",
      "title": "THIS IS THE TITLE",
      "secondarySubtitle": "SECONDARY SUBTITLE",
      "tertiarySubtitle": "TERTIARY SUBTITLE"
    },
    "replyMessage": {
      "style": "icon",
      "subtitle": "THIS IS THE SUBTITLE",
      "title": "THIS IS THE TITLE",
      "secondarySubtitle": "SECONDARY SUBTITLE",
      "tertiarySubtitle": "TERTIARY SUBTITLE"
    }
  }
]
```


### Body JSON Template

```json
{
  "type": "vertical",
  "tag": "list",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          ///START TITLE OF SECTION HEADER
		  "type": "text",
          "text": "HEADER TITLE TEXT",
          "Tag": "title",
          "tooltip": "TITLE TOOLTIP",
          "style": {
            "bold": true,
            "size": "large"
          }
        },
        {
          ///START SUBTITLE OF SECTION HEADER
		  "type": "text",
          "text": "HEADER SUBTITLE TEXT",
          "Tag": "subtitle",
          "tooltip": "SUBTITLE TOOLTIP"
        },
        {
          ///FIRST ITEM IN THE LIST
		  "type": "horizontal",
          "elements": [
            {
              ///LIST ITEM IMAGE ELEMENT (OPTIONAL)
			  "type": "image",
              "url": "IMAGE URL",
              "tooltip": "IMAGE TOOLTIP"
            },
            {
              ///LIST ITEM TITLE, SUBTITLE AND BUTTON ACTION.
              ///WILL ALWAYS BE IN A VERTICAL LAYOUT
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "tag": "title",
                  "text": "LIST ITEM TITLE",
                  "tooltip": "TITLE TOOLTIP",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "tag": "subtitle",
                  "text": "LIST ITEM SUBTITLE",
                  "tooltip": "SUBTITLE TOOLTIP"
                },
                {
                  "type": "button",
                  "tooltip": "BUTTON TOOLTIP",
                  "title": "LIST ITEM BUTTON",
                  "click": {
                    "actions": [
                      {
                        "type": "publishText",
                        "text": "ON-CLICK PUBLISHED TEXT"
                      }
                    ],
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "ON-CLICK EXTERNAL ID"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }//END OF LIST PICKER ITEM #1,
        {
          ///SECOND ITEM IN THE LIST
        },
        {
          ///THIRD ITEM IN THE LIST
        },
        ///ETC
      ]
    }
  ]
}
```
