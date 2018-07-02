---
title: List Picker
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Apple Business Chat
order: 20
permalink: rich-messaging-connectors-abc-listpicker.html
indicator: messaging
---

[Business Chat List Picker](https://developer.apple.com/documentation/businesschat/enhancing_the_customer_s_user_experience/sending_a_list_picker) enables human or automated agents to share a list of items and information about the items while allowing the consumer to select multiple items and reply back with the selection. The following capabilities are supported :

* Define items information - item name, description, image.
* Items sections - divide your list of items to section based on the product categories
* Multi-selection - Allow the consumer to select multiple items
* receivedMessage and replyMessage bubbles style structures - define the layouts for the bubbles that are received by the consumer on the Business Chat thread, and replied to.

Brands are able to share the List Picker interactive message through Rich Messaging elements while using Rich Messaging JSON properties to define the list layout structure while using metadata fields in order to define the received and reply bubble structures and multi-selection enablement.

Below is an image example of a Business Chat List Picker with multi-selection turned on:

![Apple Business Chat List Picker Main](images/abc-listpicker-1.jpg)   ![Apple Business Chat List Picker list](images/abc-listpicker-2.PNG)

### Fields

#### Metadata Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of metadata. Must be BusinessChatMessage | Enum | Y |  |
| multipleSelection | Value that indicates if the customer can make multiple selections. Defaults to false. | Boolean | N |  |
| receivedMessage | Defines how the bubble layout displayed when message is received.  | Object | Y |  |
| replyMessage | Defines how the bubble displayed when message is sent back by the consumer. | Object | Y |  |
| Style | Defines the size of the bubble. <br/>Can be set to icon, small or large. <br/>Defaults to icon. | String | N |  |
| title | The title of the bubble | String | Y |  |
| Subtitle | Subtitle to be displayed under title of the bubble | String | N |  |
| imageURL | Image to be placed in the List Picker received and reply message bubble layout (can be JPG and PNG only) | String | N | Up to 0.5Mb of total images size in the list picker |

#### Body Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Types of basic elements supported by Structured Content framework. <br/>Can be “text”, “image” or “button” | Enum | Y |  |
| tag | The tag of the layout view, must be “list” in order to use the Business Chat List Picker interactive message. <br/>Within basic elements objects, tag will be “title”/”subtitle”, which will indicate what text should rendered in each of those elements (the title and subtitle have default style in Business Chat List Picker) | Enum | Y |  |
| elements | Array of elements. <br/>The supported basic Rich Messaging elements for Business Chat List Picker are “text”, “image”, or “button”  | Elements | Y |  |
| text | The message text in a “text” type element | String | Y |  |
| Image | Images in your List Picker. <br/>Supported by sharing a URL that represents the image |  | Y |  |
| url | Image URL in a “image” type element (can be JPG and PNG only) | String | Y |  |
| Button | Simple button which triggers an publish text action when selected and tapped by a consumer on Business Chat. | Elements | Y |  |
| tooltip | Element tooltip on Agent Workspace. <br/>Used also for aira | String | N |  |
| action | Actions are a list of applicative actions on buttons, that will run on the consumer side and will help them to achieve their operation. <br/>Button action for Business Chat List Picker can be set only to “Publish text”. <br/>This will make sure that upon consumer selection of items, the selection will be posted back as text to the agent. <br/><br/>Review the full list of [Rich Messaging actions](rich-messaging-click-ops.html) |  |  |  |


### Examples

#### List Picker Metadata

```json
[
    {
        "type": "BusinessChatMessage",
        "multipleSelection": true,
        "receivedMessage": {
            "style": "icon",
            "subtitle": "This is the subtitle",
            "title": "This is the title",
            "secondarySubtitle": "secondary subtitle",
            "tertiarySubtitle": "tertiarySubtitle"
        },
        "replyMessage": {
            "style": "icon",
            "subtitle": "Subtitle",
            "title": "Title",
            "secondarySubtitle": "secondarySubtitle",
            "tertiarySubtitle": "tertiarySubtitle"
        }
    }
]
```

#### List Picker Body
```json
{  
  "type":"vertical",
  "tag":"list",
  "elements":[  
    {  
      "type":"vertical",
      "elements":[  
        {  
          "type":"text",
          "text":"iPhones",
          "tooltip":"text tooltip",
          "style":{  
            "bold":true,
            "size":"large"
          }
        },
        {  
          "type":"horizontal",
          "elements":[  
            {  
              "type":"image",
              "url":"https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg",
              "tooltip":"iPhone X"
            },
            {  
              "type":"vertical",
              "elements":[  
                {  
                  "type":"text",
                  "tag":"title",
                  "text":"iPhone X",
                  "tooltip":"Title",
                  "style":{  
                    "bold":true,
                    "size":"large"
                  }
                },
                {  
                  "type":"text",
                  "tag":"subtitle",
                  "text":"Black",
                  "tooltip":"Black"
                },
                {  
                  "type":"button",
                  "tooltip":"Add to cart",
                  "title":"Add to cart",
                  "click":{  
                    "actions":[  
                      {  
                        "type":"publishText",
                        "text":"iPhone X Added"
                      }
                    ],
                    "metadata":[  
                      {  
                        "type":"ExternalId",
                        "id":"iPhone X"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {  
          "type":"horizontal",
          "elements":[  
            {  
              "type":"vertical",
              "elements":[  
                {  
                  "type":"text",
                  "tag":"title",
                  "text":"iPhone 8",
                  "tooltip":"iPhone 8",
                  "style":{  
                    "bold":true,
                    "size":"large"
                  }
                },
                {  
                  "type":"text",
                  "tag":"subtitle",
                  "text":"Rose Gold",
                  "tooltip":"Rose Gold"
                },
                {  
                  "type":"button",
                  "tooltip":"Add to cart",
                  "title":"Add to cart",
                  "click":{  
                    "actions":[  
                      {  
                        "type":"publishText",
                        "text":"iPhone 8 Added"
                      }
                    ],
                    "metadata":[  
                      {  
                        "type":"ExternalId",
                        "id":"iPhone 8"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {  
      "type":"vertical",
      "elements":[  
        {  
          "type":"text",
          "text":"iPads",
          "tooltip":"iPads",
          "style":{  
            "bold":true,
            "size":"large"
          }
        },
        {  
          "type":"horizontal",
          "elements":[  
            {  
              "type":"vertical",
              "elements":[  
                {  
                  "type":"text",
                  "tag":"title",
                  "text":"iPad Pro",
                  "tooltip":"iPad Pro",
                  "style":{  
                    "bold":true,
                    "size":"large"
                  }
                },
                {  
                  "type":"text",
                  "tag":"subtitle",
                  "text":"Space Grey",
                  "tooltip":"Space Grey"
                },
                {  
                  "type":"button",
                  "tooltip":"Add to cart",
                  "title":"Add to cart",
                  "click":{  
                    "actions":[  
                      {  
                        "type":"publishText",
                        "text":"iPad Pro Added"
                      }
                    ],
                    "metadata":[  
                      {  
                        "type":"ExternalId",
                        "id":"iPad Pro"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
