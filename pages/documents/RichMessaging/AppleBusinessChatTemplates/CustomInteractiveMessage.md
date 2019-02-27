---
pagename: Custom Interactive Message Template
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
permalink: apple-business-chat-templates-custom-interactive-message-template.html
indicator: messaging
---

### Overview

The Custom Interactive Message Template for App Business Chat allows you to invoke an iOS iMessage app / extension on the consumer device. This app can allow for a wide range of interactivity without requiring the consumer to leave the conversation.

Sending the structured content templates (body and metadata) explained in this document will allow you to send the iMessage app / extension to the consumer device. 

For how to create an iMessage app / extension, see the Apple documentation [here](https://developer.apple.com/imessage/).

### Body Template

The structured content body will allow you to define the layout of the bubble representation in the agent workspace transcript as structured content basic elements.

Please note that the structured content body layout will **not** be represented on the consumer device. The body will help you to create a visual representation in LiveEngage for conversational context, transcript and historic records, as well as ease of use for agents.

In order to allow you to report on the number of times an iMessage app was sent from an agent widget during a conversation, make sure to add a unique identifier in the structured content body for each type of iMessage app you use. This will allow you to search transcripts and track how many times a specific app was sent.

For the structured content body fields descriptions and different layout options please refer to [Getting Started with Structured Content.](getting-started-with-rich-messaging-introduction.html)

### Metadata Template

The structured content metadata will allow you to define which iMessage app / extension should be sent to the consumer and which custom data to pass into the iMessage app / extension when it loads.

Using Metadata, you can also control the visual appearance of the bubble that displays to the consumer. This is done with the `receivedMessage` object within the metadata.

#### Metadata Properties

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
    <td>Type of metadata.                              Must be BusinessChatCustomMessage </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>appId</td>
    <td>The App Store identifier of the custom                                 Messages framework extension </td>
    <td>Integer</td>
    <td>N</td>
  </tr>
  <tr>
    <td>appName</td>
    <td>The name of the custom Messages                               framework extension.</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>bid</td>
    <td>Identifies the Messages framework extension that the customer interacts with while using Messages. It is composed along with the extension bundleID, and teamID </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>sessionIdentifier</td>
    <td>Valid UUID string, you must generate. This could represent a message or a group or messages that identifies the session or transaction</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>useLiveLayout</td>
    <td>A flag that determines if Live Layout is enabled. The default is false.</td>
    <td>Boolean</td>
    <td>N</td>
  </tr>
  <tr>
    <td>receivedMessage</td>
    <td>Bubble displayed when interactive message is received and LiveLayout is set to false</td>
    <td>Object</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>The URL to the data that is sent to the Messages framework extension. Should be sent encoded</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>


#### Received Message Properties

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
    <td>The title of the bubble</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>Subtitle to be displayed under title in bubble </td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>secondarySubtitle</td>
    <td>Title that is aligned right</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>tertiarySubtitle</td>
    <td>Subtitle that is aligned right</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>imageTitle</td>
    <td>The title of the image attachment.</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>image Subtitle</td>
    <td>The subtitle of the image attachment.</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>imageURL</td>
    <td>Image to be placed in the iMessage app bubble layout. Will be presented when LiveLayout is disabled or when consumer does not have your app installed on iPhone / latest version is not updated with iMessage app / extension</td>
    <td>String</td>
    <td>N</td>
  </tr>
  </tbody>
</table>


#### Example Metadata Template

```json
[{
    "type": "BusinessChatCustomMessage",
    "appId": 1234,
    "appName": "productselection",
    "bid": "com.apple.messages.MSMessageExtensionBalloonPlugin:yourTEAMID:yourextensionbundleID",
    "sessionIdentifier": "",
    "useLiveLayout": true,
    "receivedMessage": {
      "imageURL":"https://s3.amazonaws.com/lp-mobile-apps/WelcomeMessagePOC/Welcome-02-web-version.jpg",
      "title": "Welcome!",
      "style": "icon",
      "subtitle": "Lots to accomplish together.",
      "secondarySubtitle": "",
      "tertiarySubtitle": "",
      "imageTitle": "",
      "imageSubtitle": ""
    },
    "URL": "<YOUR_CUSTOM_URI_ENCODED_URL>”
}]
```

#### Sending Custom Data to App Extension

The value of the `URL` metadata property will be passed to Apple's [MSMessage](https://developer.apple.com/documentation/messages/msmessage) object in the [`url`](https://developer.apple.com/documentation/messages/msmessage/1649739-url) property. When recieved in your iMessage app / extension, you can parse the URL and do anything with it.

#### Metadata Guidelines

* General recommendation for the URL field is to use an URI encoded data object which will represent the URL 

* Please note! The URL should be lean as possible as described in the example above, and should not replace or attempt to act as the app model. 

* The AppID, Extension Bundle ID and Team ID (which are part of the Bid field) must be part of the SC metadata JSON! Without them your iMessage app will not be delivered to the consumer. 

* RecivedBubble image URL - If consumer does not have the extension installed on device, or if consumer has the extension installed but does not use LiveLayout (set to false) then the recivedBubble will default to the imageURL set in the recievedBubble object.  If imageURL was not added to the SC schema defined, the layout view will be an empty frame! Always include an imageURL! 

* ImageURL MUST be whitelisted - to whitelist images for Structured Content contact your LiveEngage account representative

* SessionIdentifier - Any interactive message that is sent to ABC has a UUID - either you can set it through this field, or if not set Apple will generate a UUID for the interactive message. We recommend you set the UUID for each interactive message sent from the agent, in order to maintain referencing and correlating between interactions, for grouping messages,  funnel tags and more. 

* Images placed in the image used in imageURL field should be whitelisted in account Houston - Site Setting messaging.rich.content.valid.urls

* When no app exists on the receiving device that can consume the message, if this URL is a HTTP(S) url, it will be loaded in a web browser.

* The root object of the JSON in the URL field should be a dictionary (key:value) and not an array ( {} and not [] ).

#### Metadata Limitations

* URL characters limit is 64bit - you should create URLs to accommodate this limitation (An option to overcome this limitation is to create a static JSON in an S3 type environment which you can call in the message URL)

* Character limit - The limitation is currently 5000 characters, you should recognize this limitation and build URLs to accommodate this limitation


### Reply Message from Consumer to Agent

You can send text messages *to* the LiveEngage conversation *from* the iMessage app / extension that you sent to the consumer.

In order to do this, all code is handled from within your Apple iMessage app / extension code.

1. Create the message you want to display by replacing `YOUR_CUSTOM_TEXT` in the below JSON:
    ```json
    {
        "lpData": {
          "interactive" : {
            "response" : {
              "text": "YOUR_CUSTOM_TEXT" 
            }
          }
        }
    }
    ```

2. Encode the JSON

3. Create a URL by adding the encoded JSON on a query parameter `data` like the following: `?data=`

4. Set the [url](https://developer.apple.com/documentation/messages/msmessage/1649739-url) property of the [MSMessage](https://developer.apple.com/documentation/messages/msmessage) object to the URL that you constructed. 

5. [Send](https://developer.apple.com/documentation/messages/msconversation/2909036-send) the MSMessage object from your iMessage app / extension.

LiveEngage will recieve this message and display the text in the LiveEngage conversation.

### Some Notes About Custom iMessage App Support

1. General recommendation for the URL field is to use an encoded data object which will represent the URL

3. Custom iMessage app response bubble - the connector currently does not capture reply bubble response from the consumer to the iMessage app. However, the transaction that occurred in the iMessage app by the consumer can be captured by yourself and updated in the Agent Widget SDK. (The response will be captured in the LE transcript line in future version).

4. Reporting - in order to allow you to report on the number of times an iMessage app was sent from an agent widget during a conversation, make sure to add a unified indication in the structured content message body for each type of iMessage app you use. This will allow you to then track how many times a specific iMessage app was sent via a transcript search.
