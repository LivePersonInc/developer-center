---
pagename: Multiple Checklist Template
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Mobile SDK and Web Templates
permalink: mobile-sdk-and-web-templates-multiple-checklist-template.html
indicator: messaging
---

The Multiple Checklist Template for the Web Messaging channel enables human or bot agents to share a list of items, while allowing the consumer to select multiple items and reply back with the selection. 

<img class="fancyimage" src="img/multipleChecklist.png">

### Overview 

The template includes the following customizable structured content elements:

- **Header** - a simple plain text message.
- **Body** - the checkbox items, as simple plain text. Each checkbox item will include the checkbox text and a tooltip.
- **Button** - the button will trigger a Publish Text action and Metadata once clicked.
- (Optional) **action buttons** - to provide the consumer alternatives to the checkbox list. Once clicked, it will trigger a [Publish Text action](getting-started-with-rich-messaging-introduction.html#actions) and [Metadata](getting-started-with-rich-messaging-introduction.html#metadata) and the checkbox list selection will be ignored.

#### Consumer experience

The consumer will select their choices and will click on the action button in order to submit them. Once submitted, the consumer's selections will be sent as a message on behalf of the consumer and this message will appear in the conversation transcript.

The consumer selections will be displayed as plain text, with a comma separator between each selection.

In order to prevent the consumer from re-using the checkbox and re-submitting their selection, the Multiple select checkbox will be removed from the transcript and only its header will be displayed (similar to the [Quick Replies template](mobile-sdk-and-web-templates-quick-replies-template.html)).

#### Bot experience

The consumer selection will be published as part of the conversation metadata. Using [Messaging Agent SDK](messaging-agent-sdk-conversation-metadata-guide.html) the BOT can get the conversation metadata and analyse the consumer selections.

#### Agent experience

The consumer selections will be displayed as a consumer message in the agent workspace as part of the conversation transcript.

### Template JSON Structure

```javascript
{
  "type": "list",
  "elements": [
    // Header of the checklist 
    {
      "type": "text", 
      "text": "Which messaging channels are you specifically looking for?"
    },
    // Body of the checklist 
    //   The sectionList must have at least one section element
    {
      "type": "sectionList",
      "elements": [
        // Section of the body 
        //   The section is the component that wraps different types of lists that are supported, so in our case, it would be checklist
        //   Each section must have an attribute sectionID. The sectionID is a unique identifier that differentiates each section. This can be the category of the checklist you are creating.
        {
          "type": "section",
          "sectionID": "channels",
          "elements": [
            // Subheader of the checklist
            {
              "type": "text", 
              "text": "&#x1F449; choose all that apply"
            },
            // Checklist
            //   This element is what wraps each checklist item. This element can only have checkboxes.
            {
              "type": "checklist",
              "elements": [
                // Checkbox
                //   This is the actual checkbox element.
                {
                  "type": "checkbox", 
                  "text": "WhatsApp", // the content that is shown when the structured content is rendered 
                  "borderLine": true, // border line between each checkbox item
                  "borderColor": "#d4d4d5", // color of the border line between each checkbox item
                  "click": { // This is similar to the existing button element. One key difference is that the actions that are supported for the checkbox item is the action "checked". The publishText attribute that is in the "checked" action is the content that will be displayed after the user has checked all the desired items and submits. No change to the metadata structure has been made.
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "ANOTHER_ONE_35"
                      }
                    ],
                    "actions": [
                      {
                        "type": "checked",
                        "publishText": "WhatsApp"
                      }
                    ]
                  }
                },
                {
                  "type": "checkbox",
                  "text": "Facebook",
                  "borderLine": true,
                  "borderColor": "#d4d4d5",
                  "click": {
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "ANOTHER_ONE_32"
                      }
                    ],
                    "actions": [
                      {
                        "type": "checked",
                        "publishText": "Facebook"
                      }
                    ]
                  }
                },
                {
                  "type": "checkbox",
                  "text": "Apple Business Chat",
                  "borderLine": true,
                  "borderColor": "#d4d4d5",
                  "click": {
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "ANOTHER_ONE_36"
                      }
                    ],
                    "actions": [
                      {
                        "type": "checked",
                        "publishText": "Apple Business Chat"
                      }
                    ]
                  }
                },
                {
                  "type": "checkbox",
                  "text": "Google RBM",
                  "borderLine": true,
                  "borderColor": "#d4d4d5",
                  "click": {
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "ANOTHER_ONE_36"
                      }
                    ],
                    "actions": [
                      {
                        "type": "checked",
                        "publishText": "Google RBM"
                      }
                    ]
                  }
                },
                {
                  "type": "checkbox",
                  "text": "All of the above",
                  "borderLine": true,
                  "borderColor": "#d4d4d5",
                  "click": {
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "ANOTHER_ONE_36"
                      }
                    ],
                    "actions": [
                      {
                        "type": "checked",
                        "publishText": "All of the above"
                      }
                    ]
                  }
                },
                {
                  "type": "checkbox",
                  "text": "None of the above",
                  "borderLine": true,
                  "borderColor": "#d4d4d5",
                  "click": {
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "ANOTHER_ONE_36"
                      }
                    ],
                    "actions": [
                      {
                        "type": "checked",
                        "publishText": "None of the above"
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
    // buttonList
    //   This is the element that holds the submit button and an existing button. Inside this element, the user must have a  submitButton. 
    //   The second button is just an existing button that the user can add optionally depending on their needs. 
    {
      "type": "buttonList",
      "elements": [
        // submitButton
        //   The submitButton is the element that is used to submit the checked items.
        {
          "type": "submitButton",
          "title": "Continue", // the text that is shown on the button
          "disabled": false, // the user can decide to have the submit button disabled or not initially
          "click": { // This is similar to the existing button element. One key difference is that the actions that are supported for the submitButton is the action "submitAsText". The submit attribute that is in the "submitAsText" action is used to indicate that the checked items will be submitted as text with each item seperated by a comma (this new text becomes part of the transcript). The metadata structure has not been changed.
            "metadata": [
              {
                "type": "ExternalId",
                "id": "submissionID"
              }
            ],
            "actions": [
              {
                "type": "submitAsText",
                "submit": true
              }
            ]
          }
        },
        // button
        //   This is just a regular existing button.
        {
          "type": "button",
          "title": "Back",
          "click": {
            "metadata": [
              {
                "type": "ExternalId",
                "id": "ANOTHER_ONE_20"
              }
            ],
            "actions": [
              {
                "type": "publishText",
                "text": "Back"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

### Limitations

Please note current limitations: 

- This feature is not available for the enhanced agent workspace
- It is supported for the web messaging channel only.
- If the new structured content is wrapped with other structured content, the the multiple checklist will be removed from the transcript and its header will not be displayed.
