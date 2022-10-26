---
pagename: Form Message Template
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Messages for Business Templates
permalink: apple-messages-for-business-templates-custom-interactive-message-template.html
indicator: messaging
---

### Overview

[Messages for Business Forms](https://register.apple.com/resources/messages/msp-rest-api/type-interactive#form-message) allow you to create rich, multi-page interactive flows for users on iOS and iPadOS devices using a single JSON payload.
This allows brands to collect large amounts of information from customers using a seamless interface that is contained within the Apple Messaging Interface. This can allow for a wide range of interactivity without requiring the consumer to leave the conversation.

Sending the structured content templates (body and metadata) explained in this document will allow you to send Business Forms to the consumer device.

### Pages
Following Types of pages are supported

**splash** : An introduction page that includes a title, description, action button and an image.

**select** : A page that features either a single “True/False” selection or multiple select. The page also supports image assets with each selection.

**picker** : A page that features a single select from multiple options.

**datePicker** : Provides Apple’s standard Date Picker with the ability to change the date format and set maximum/minimum dates.

**input** :  A page that can feature various input fields to collect strings of information.

Every page has following properties

<table>
  <thead>
    <td>Property Name</td>
    <td>Description</td>
    <td>Type</td>
    <td>Required</td>
  </thead>
  <tbody>
  <tr>
    <td>pageIdentifier</td>
    <td>A unique identifier, as a string, for the page being shown, that is less than 20 characters in length. Do not reuse. Ex: "firstNamePage" or "0001".</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>type</td>
    <td>Defines Type of page. Use one of the following values: select, picker, datePicker, or input.</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>title</td>
    <td>If set this displays the title in bold on the page.</td>
    <td>String</td>
    <td>N</td>
  </tr>
   <tr>
    <td>subtitle</td>
    <td>Use this object to display the question for the page.</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>nextPageIdentifier</td>
    <td>except for single select option page, where you specify the nextPageIdentifier within each of the item objects. If a page does not have a nextPageIdentifier set on it, the client assumes the current page to be the final page and proceeds to send or provides a summary page based on the data. This is a unique page identifier to show the next page.</td>
    <td>String</td>
    <td>Y</td>
  </tr>
    <tr>
    <td>submitForm</td>
    <td>A Bool value placed on the pages to denote the end page of the form. Since multiple pages can act as an end page, this object can be set on multiple pages.
</td>
    <td>Bool</td>
    <td>N</td>
  </tr>
    <tr>
    <td>options</td>
    <td>Dictionary containing optional values for the input field. Some of which are required, keyboardType,inputType, maximumCharacterCount  
</td>
    <td>JSON</td>
    <td>Y</td>
  </tr>
  </tbody>
  </table>

#### Example Page Template

```json
{
    "pageIdentifier": "1",
    "type": "input",
    "nextPageIdentifier": "2",
    "title": "Your email address",
    "subtitle": "Enter your email address",
    "options": {
        "required": true,
        "inputType": "singleline",
        "maximumCharacterCount": 250,
        "keyboardType": "emailAddress",
        "textContentType": "emailAddress"
    }
}
```

### Example Body Template
The structured content body will allow you to define spalsh screen of the Business Form. 

Following Properties must be included in Body template
* type
* tag
* elements

Every splash screen contains title, subtitle and button, these must be included in elements section.

#### Example Metadata Template

```json
{
    "type": "vertical",
    "tag": "form",
    "elements": [
        {
            "type": "text",
            "text": "Shipping Information",
            "tag": "title",
            "style": {
                "bold": true,
                "size": "large"
            }
        },
        {
            "type": "text",
            "tag": "subtitle",
            "text": "For Courier Shipping, all information must be provided."
        },
        {
            "type": "button",
            "title": "Continue"
        }
    ]
}
```

### Metadata Template

The structured content metadata will allow you to define pages and visual appreance of the form.
The Metadata template consists of two sections
* BusinessFormEvent
* BusinessChatMessage

#### Metadata Properties (BusinessFormEvent)

<table>
  <thead>
    <td>Property Name</td>
    <td>Description</td>
    <td>Type</td>
    <td>Required</td>
  </thead>
  <tbody>
  <tr>
    <td>type</td>
    <td>Type of metadata. Must be BusinessFormEvent </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>startPageIdentifier</td>
    <td>Start page identifier defaults to 0 </td>
    <td>Integer</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>showSummary</td>
    <td>Defaults to false. If set to true then it shows the summary of all the selections made within the form</td>
    <td>Boolean</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>array of page elements and there needs to be at least be one page to trigger the Form experience.</td>
    <td>Array&lt;JSON&gt;</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>images</td>
    <td>Array of images to be displayed on form</td>
    <td>Array&lt;JSON&gt;</td>
    <td>N</td>
  </tr>
  </tbody>
</table>


#### Metadata Properties (BusinessChatMessage)

<table>
  <thead>
    <td>Property Name</td>
    <td>Description</td>
    <td>Type</td>
    <td>Required</td>
  </thead>
  <tbody>
  <tr>
    <td>type</td>
    <td>Type of metadata. Must be BusinessChatMessage </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>receivedMessage</td>
    <td>Define how the Form Message will be displayed when the message is received on the consumer’s device</td>
    <td>JSON</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>replyMessage</td>
    <td>Define how the Form Message will be displayed when the Form is submitted by consumer on the consumer’s device</td>
    <td>JSON</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

#### Example Metadata Template

```json
[
    {
        "type": "BusinessFormEvent",
        "startPageIdentifier": "0",
        "showSummary": true,
        "title": "Enter sender information.",
        "pages": [
            {
                "pageIdentifier": "0",
                "nextPageIdentifier": "1",
                "type": "input",
                "title": "Full Name",
                "subtitle": "Enter your Full Name.",
                "options": {
                    "placeholder": "Full Name",
                    "labelText": "Full Name",
                    "required": true,
                    "inputType": "singleline",
                    "maximumCharacterCount": 250,
                    "keyboardType": "UIKeyboardTypeTwitter",
                    "textContentType": "name"
                }
            },
            {
                "pageIdentifier": "1",
                "type": "input",
                "nextPageIdentifier": "2",
                "title": "Your email address",
                "subtitle": "Enter your email address",
                "options": {
                    "required": true,
                    "inputType": "singleline",
                    "maximumCharacterCount": 250,
                    "keyboardType": "emailAddress",
                    "textContentType": "emailAddress"
                }
            },
            {
                "pageIdentifier": "2",
                "type": "input",
                "title": "Address",
                "subtitle": "Enter your address",
                "nextPageIdentifier": "3",
                "options": {
                    "required": true,
                    "inputType": "multiline",
                    "maximumCharacterCount": 300,
                    "keyboardType": "UIKeyboardTypeTwitter",
                    "textContentType": "fullStreetAddress"
                }
            },
            {
                "pageIdentifier": "3",
                "type": "select",
                "title": "City",
                "subtitle": "Select your city",
                "multipleSelection": false,
                "nextPageIdentifier": "4",
                "pageItems": [
                    {
                        "title": "Berlin",
                        "value": "Berlin",
                        "identifier": "001",
                        "nextPageIdentifier": "4",
                        "imageIdentifier": "1"
                    },
                    {
                        "title": "Munich",
                        "value": "Munich",
                        "identifier": "002",
                        "nextPageIdentifier": "4",
                        "imageIdentifier": "2"
                    }
                ]
            },
            {
                "pageIdentifier": "4",
                "type": "input",
                "title": "Zip/postal code",
                "subtitle": "Enter your Zip/postal code",
                "nextPageIdentifier": "5",
                "options": {
                    "required": true,
                    "inputType": "singleline",
                    "maximumCharacterCount": 5,
                    "keyboardType": "numberPad",
                    "textContentType": "postalCode"
                }
            },
            {
                "pageIdentifier": "5",
                "type": "input",
                "title": "Phone",
                "subtitle": "Enter your phone number",
                "nextPageIdentifier": "6",
                "options": {
                    "required": false,
                    "inputType": "singleline",
                    "maximumCharacterCount": 12,
                    "keyboardType": "numberPad",
                    "textContentType": "telephoneNumber"
                }
            },
            {
                "pageIdentifier": "6",
                "type": "datePicker",
                "title": "Preferred shipping date",
                "subtitle": "Select preferred shipping date",
                "nextPageIdentifier": "7",
                "hintText": "Select preferred shipping date",
                "options": {
                    "startdate": "2020-07-01",
                    "maximumdate": "2020-12-31",
                    "minimumdate": "2020-07-01",
                    "dateFormat": "MM/dd/yyyy"
                }
            },
            {
                "pageIdentifier": "7",
                "type": "picker",
                "title": "Pick preferred time-slot",
                "subtitle": "Select preferred time-slot",
                "pickerTitle": "Select time-slot",
                "pageItems": [
                    {
                        "title": "01-02",
                        "value": "01-02",
                        "identifier": "001"
                    },
                    {
                        "title": "02-03",
                        "value": "02-03",
                        "identifier": "002"
                    }
                ],
                "submitForm": true
            }
        ],
        "images": [
            {
                "imageUrl": "https://picsum.photos/500?grayscale",
                "id": "0"
            },
            {
                "imageUrl": "https://picsum.photos/200/300?random=1",
                "id": "1"
            }
        ]
    },
    {
        "type": "BusinessChatMessage",
        "receivedMessage": {
            "title": "Free Shipping",
            "subtitle": "Easy shipping for individuals",
            "style": "small",
            "imageIdentifier": "0"
        },
        "replyMessage": {
            "title": "Tap to view your response.",
            "subtitle": "",
            "style": "small",
            "imageIdentifier": "0"
        }
    }
]
```