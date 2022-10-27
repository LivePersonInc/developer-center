---
pagename: Form Message Template
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Messages for Business Templates
permalink: apple-messages-for-business-templates-form-message-template.html
indicator: messaging
---

### Overview

[Messages for Business Forms](https://register.apple.com/resources/messages/msp-rest-api/type-interactive#form-message) allow you to create rich, multi-page interactive flows for users on iOS and iPadOS devices using a single JSON payload.
This allows brands to collect large amounts of information from customers using a seamless interface that is contained within the Apple Messaging Interface. This can allow for a wide range of interactivity without requiring the consumer to leave the conversation.

Sending the structured content templates (body and metadata) explained in this document will allow you to send Business Forms to the consumer device.

Below is an image of a Business Forms:

<img  style="width:350px" src="img/form_message_1.PNG">
<img  style="width:350px" src="img/form_message_2.PNG">
<img  style="width:350px" src="img/form_message_3.PNG">
<img  style="width:350px" src="img/form_message_4.PNG">
<img  style="width:350px" src="img/form_message_5.PNG">
<img  style="width:350px" src="img/form_message_6.PNG">
<img  style="width:350px" src="img/form_message_7.PNG">
<img  style="width:350px" src="img/form_message_8.PNG">
<img  style="width:350px" src="img/form_message_9.PNG">
<img  style="width:350px" src="img/form_message_10.PNG">

### Pages
Following Types of pages are supported

**splash** : An introduction page that includes a title, description, action button and an image.

**select** : A page that features either a single “True/False” selection or multiple select. The page also supports image assets with each selection.

**picker** : A page that features a single select from multiple options.

**datePicker** : Provides Apple’s standard Date Picker with the ability to change the date format and set maximum/minimum dates.

**input** :  A page that can feature various input fields to collect strings of information.

**Every page has following properties**

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
    <td>A Bool value placed on the pages to denote the end page of the form. Since multiple pages can act as an end page, this object can be set on multiple pages.(must be provided on last page)
</td>
    <td>Bool</td>
    <td>N</td>
  </tr>
    <tr>
    <td>options</td>
    <td>Dictionary containing optional values for the input field. Some of which are required, keyboardType,inputType, maximumCharacterCount etc. 
</td>
    <td>JSON</td>
    <td>Y</td>
  </tr>
  </tbody>
  </table>

  **Page Specific Properties**
  <table>
  <thead>
    <td>Page Type</td>
    <td>Field</td>
    <td>Description</td>
  </thead>
  <tbody>
  <tr>
    <td>select</td>
    <td>multipleSelection</td>
    <td>A Bool value that defaults to false or singleSelect. Set to true to enable multipleSelection on the page.</td>
  </tr>
  <tr>
    <td></td>
    <td>pageItems</td>
    <td>An array of objects defining the user experience.

- **title**: Localized string value for display.

- **value**: A string value of the object itself.

- **identifier**: A unique identifier for the item.

- **imageIdentifier**: A string containing the image identifier, from the imageItem dictionary. For more information about sending an image, see ImageItem dictionary.
- **nextPageIdentifier**: A unique page identifier to show the next page. Set this value only when multipleSelection is not defined or set to false.</td>
  </tr>
   <tr>
    <td>picker</td>
    <td>pickerTitle</td>
    <td>A string value representing optional text shown next to the picker text field. This value defaults to an empty string. When empty the picker text field centers to the page</td>
  </tr>
   <tr>
    <td></td>
    <td>selectedItemIndex</td>
    <td>A zero-indexed number identifying the item in the picker wheel should be selected by default. Defaults to item at index 0.</td>
  </tr>
  <tr>
    <td></td>
    <td>pageItems</td>
    <td>An array of objects defining the user experience.

    - **title**: Localized string value for display. 
    - **value**: A string value of the object itself.
    - **identifier**: A unique identifier for the item.</td>
  </tr>
   <tr>
    <td>datePicker</td>
    <td>hintText</td>
    <td>A string representing optional text to give the user more input context that displays below the Date field.</td></tr>
    <tr>
    <td></td>
    <td>options</td>
    <td>Dictionary containing optional values for the Date Picker element.

    - **dateFormat**: A string representing the date format on the page. Defaults to MM/dd/yyyy. Unless this property is explicitly set.
    - **startDate**: A string representing the date displayed by the date picker. Defaults to current date.
    - **maximumDate**: A string representing the maximum date that a date picker can show. Defaults to current date.
    - **minimumDate**: A string representing the minimum date that a date picker can show.
    - **labelText**: A string representing the text string to be shown next to date field. Defaults to text 'Date'.</td></tr>
    <tr>
    <td>input</td>
    <td>hintText</td>
    <td>A string representing optional text to give the user more input context that displays below the Input field.</td></tr>
     <tr>
    <td></td>
    <td>options</td>
    <td>	Dictionary containing optional values for the input field.

    - **regex**: A string representing a JSON encoded regular expression (regex) string to limit the type of input for input field to use. An example is when you want to limit input to only have proper decimal values provide a regex string: ^\\d*\\.?\\d?\\d?$. JSON encode all regex strings.
    - **placeholder**: A text string used when there is no other text in the input text field. Default value are Required or Optional.
    - **required**: A Boolean value that defaults to false. When set to true, the next button on page is disabled until the user provides input.
    - **inputType**: A string value that defaults to singleline. Other values are multiline or singleline.
    - **labelText**: A string value representing a text label shown to identify the input field. This value defaults to an empty string. Only applies to inputType : singleline.
    - **prefixText**: A string value representing optional text shown next to the text field. This value defaults to an empty string. For example, you can set this value to denote the $ character for the field. Only applies to inputType : singleline.
    - **maximumCharacterCount**: An integer value representing the field size in characters for singleline and multiline. The field size defaults to 30 characters for singleline and 300 characters for multiline.
    - **keyboardType**: Optional string value. Type of keyboard to be shown. Possible values:
      - **default**: Default value. Specifies the default keyboard for the current input method.
      - **asciiCapable**: Specifies a keyboard that displays standard ASCII characters.
      - **numbersAndPunctuation**: Specifies the numbers and punctuation keyboard.
      - **URL**: Specifies a keyboard optimized for URL entry. This keyboard type prominently features the period (.), forward slash (/) characters, and the .com string.
      - **numberPad**: Specifies a numeric keypad designed for PIN entry. This keyboard type prominently features the numbers 0 through 9. This keyboard type does not support autocapitalization.
      - **phonePad**: Specifies a keypad designed for entering telephone numbers. This keyboard type prominently features the numbers 0 through 9 and the asterisk (*) and hash tag (#) characters.
      - **namePhonePad**: Specifies a keypad designed for entering a person’s name or phone number. This keyboard type does not support auto-capitalization.
      - **emailAddress**: Specifies a keyboard optimized for entering email addresses. This keyboard type prominently features the at (@), period (.), and space characters.
      - **decimalPad**: Specifies a keyboard with numbers and a decimal point.
      - **UIKeyboardTypeTwitter**: Specifies a keyboard optimized for Twitter text entry, with easy access to the at (@) and hash tag (#) characters.
      - **webSearch**: Specifies a keyboard optimized for web search terms and URL entry. This keyboard type prominently features the space and period (.) characters.
      - **textContentType**: A string value representing the keyboard and system information about the expected semantic meaning for the content that users enter. Supported values are name, namePrefix, givenName, middleName, familyName, nameSuffix, nickname, jobTitle, organizationName, location, fullStreetAddress, streetAddressLine1, streetAddressLine2, addressCity, addressState, addressCityAndState, sublocality, countryName, postalCode, telephoneNumber, emailAddress, URL, creditCardNumber, username, password, newPassword, and oneTimeCode. </td></tr>
</tbody>
  </table>

  For all possible options for page configuration check Apple Documentation [here](https://register.apple.com/resources/messages/msp-rest-api/type-interactive#form-message).

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

### Example Metadata Template

The structured content metadata will allow you to define pages and visual appreance of the form.
The Metadata template consists of two sections
* BusinessFormEvent
* BusinessChatMessage

**Metadata Properties (BusinessFormEvent)**

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
    <td>String</td>
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


**Metadata Properties (BusinessChatMessage)**

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

**ReceivedMessage** 

A dictionary with information telling the Messages app what content and how to display it in the received message bubble.

<table>
  <thead>
    <td>Property Name</td>
    <td>Description</td>
    <td>Type</td>
    <td>Required</td>
  </thead>
  <tbody>
  <tr>
    <td>title</td>
    <td>The main title that the Messages app shows in the header of the recieved message</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>The subtitle that appears under the main title in the recieved message bubble.</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>style</td>
    <td>A style that controls the size of the view rendered by Live Layout. The default is icon</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>imageIdentifier</td>
    <td>The identifier for one of the images specified in images array under BusinessFormEvent</td>
    <td>String</td>
    <td>Y</td>
  </tr>
 </tbody>
 </table>

**ReplyMessage**

A dictionary with information telling Messages how and what to display in the reply message bubble.

When the user’s device receives a Business Form, the Messages app uses the ReplyMessage dictionary to set the style, content, and images for the reply message bubble that the Messages app displays after the user makes their selection and returns a reply to the business.

<table>
  <thead>
    <td>Property Name</td>
    <td>Description</td>
    <td>Type</td>
    <td>Required</td>
  </thead>
  <tbody>
  <tr>
    <td>title</td>
    <td>The main title that the Messages app shows in the header of the reply message bubble. When the user taps the reply message bubble, the Messages app replaces the title with the user’s selection. Limited to 512 characters.</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>The subtitle that appears under the main title in the reply message bubble. When the user taps the reply message bubble, the Messages app displays the subtitle in the header. Limited to 512 characters.</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>style</td>
    <td>A style that controls the size of the view rendered by Live Layout. The default is icon</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>imageIdentifier</td>
    <td>The identifier for one of the images specified in images array under BusinessFormEvent</td>
    <td>String</td>
    <td>Y</td>
  </tr>
 </tbody>
 </table>

 **The possible string values for the received and reply message style are:**
  **icon**: Indicates a message bubble size of 280 x 65 points at @3x scale (840 x 195 pixels).
  **small**: Indicates a message bubble size of 280 x 85 points at @3x scale (840 x 255 pixels).
  **large**: Indicates a message bubble size of 280 x 210 pixels at @3x scale (840 x 630 pixels).

 **NOTE**
 Always provide @3x images at 72 dpi. The system downscales @3x images to generate @2x and @1x versions for use on lower-resolution devices.

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