---
pagename: Apple Auth Template
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Messages for Business Templates
permalink: apple-messages-for-business-templates-apple-auth-template.html
indicator: messaging
---

### Overview

The Apple Messages for Business messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider.

See the message flow below:

<img style="width:800px" src="img/apple_auth.png" alt="Apple Messages for Business authentication flow">

1. Agent or bot is notified via an engagement attribute if consumer device supports the Apple Auth feature.

2. Send the Apple Auth template via an agent or bot with a Structured Content template.

3. Authentication is done by your OAuth 2.0 provider.

4. Upon successful or failed authentication, Conversational Cloud passes the authentication details back so that you may perform validation.

### Setup

1. Supply your private OAuth 2.0 service details in your Apple management area (register.apple.com).

The required details include:

* Authentication endpoint URL

* Token URL

* Client Identifier

#### Instructions on how to create a free OAuth 2.0 service using [auth0](https://auth0.com/)

If you do not yet have an OAuth 2.0 service or if you need a test service, follow the instructions below:

1. Create a [auth0 account](https://auth0.com/)

2. Create a new Application Machine to Machine

3. Put `https://auth.businesschat.apple.com` in Allowed Callback Urls

4. Put `https://auth.businesschat.apple.com` in Allowed Origins and Allowed Web Origins

5. On the same screen, go to the bottom and select advanced settings → Endpoints

6. Copy Auth URL, Token Url, Client Id (it is at the top) and place them in your register.apple.com portal

7. Go to Grant Types tab in advanced settings and check Authorization Code, Password and other features you want to use. 

### Checking for Apple Auth device compatibility

Before the agent or bot sends an authentication request to a consumer, they will need to know if the consumer device is compatible (that is, using iOS 12 or newer) with Apple Auth.

In an Apple Messages for Business Conversation, the messaging channel will automatically send an authenticated "role" engagement attribute to Conversational Cloud:

* If consumer Apple device supports authentication, this attribute's value will be: "Apple Authentication supported".

* If consumer Apple device does not support authentication, this attribute's value will be: "Apple Authentication not supported".

The agent or bot should read the consumer engagement attributes to check for this engagement attribute before sending the Apple Authentication request to the consumer.

**Note:** If the consumer updates the iOS version from 11 to 12 when still in an active conversation in Conversational Cloud, the conversation will not be updated with the consumer’s new capability — to solve this, the conversation should be closed and opened again in Conversational Cloud.

![role engagement attributes](img/apple_auth_role_sde.png)

### Sending an Apple Authentication Request to a Consumer

You will send two template payloads (Metadata and Body) for the Apple Auth request to the consumer.

See [how to send Structured Content](structured-content-introduction-to-structured-content.html#how-to-send-structured-content-to-the-conversation) for a background on how to send these.

The **body** template will only define how the Apple Auth bubble is displayed in the Conversational Cloud agent workspace. The **metadata** template will define how the bubble is displayed in the consumer's Messages thread.

**Agent sends auth request to consumer via Agent Workspace SDK widget**

![](img/apple_auth_agent1.png)

**Consumer sees auth request bubble. Style here defined by metadata `receivedMessage`.**

![](img/apple_auth_consumer1.png)

**Consumer fills out form from OAuth 2.0 provider**

![](img/apple_auth_consumer2.png)

**Consumer sees request confirmation bubble. Style here defined by metadata `replyMessage`.**

![](img/apple_auth_consumer3.png)

#### Request Metadata

**BusinessChatMessage — receivedMessage and replyMessage bubbles**

The `BusinessChatMessage` object contains the `receivedMessage` and `replyMessage` objects, which define how the Authentication Interactive Message bubbles layout will be displayed when the message is received on the consumer’s device (`receivedMessage`) and once an authentication is submitted by the consumer (`replyMessage`).

**ConnectorAuthenticationRequest**

The `ConnectorAuthenticationRequest` object holds the `requestIdentifier` and `responseEncryptionKey` (public key), which allows you to identify the authentication request and map the OAuth token in the response to the request originator.

{: .note}
The requestIdentifier and responseEncryptionKey is optional, but the responseEncryptionKey is required to view the auth response from an agent widget.

Please use the metadata template with the relevant fields, as presented in the example below:

##### Metadata Template Example

```json
[
  {
    "type": "BusinessChatMessage",
    "receivedMessage": {
      "title": "Sign In to LivePerson",
      "subtitle": "Thank you",
      "imageURL": "https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",
      "style": "small"
    },
    "replyMessage": {
      "title": "You Signed in",
      "subtitle": "Thank you",
      "imageURL": "https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",
      "style": "small"
    }
  },
  {
    "type": "ConnectorAuthenticationRequest",
    "requestIdentifier": "Insert Your Unique Request Key Here",
    "apple": {
      "oauth2": {
        "clientSecret": "A string indicating the secret provisioned by the authorization server.",
        "scope": "Insert your scope here. Ex.['email','profile']",
        "responseType": "A string indicating the type of authentication request"
        "responseEncryptionKey": "Insert your public key here",
        "state": "A string indicating the state of the authentication request."
      }
    }
  }
]
```

##### Metadata Object Properties

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>BusinessChatMessage</td>
    <td>Represents the Business Chat bubbles view objects  </td>
    <td>Object</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>ConnectorAuthenticationRequest</td>
    <td>Represents a Business Chat authentication request </td>
    <td>Object</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

###### `ConnectorAuthenticationRequest` Object Properties

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>requestIdentifier</td>
    <td>Must be unique in every message. Used to identify the authentication request and map the to the request originator.</td>
    <td>string</td>
    <td>N</td>
  </tr>
  <tr>
    <td>apple.oauth2.responseEncryptionKey</td>
    <td>responseEncryptionKey is a public key which will be used to encrypt the oauth2 token. In order to decrypt the token you should have the corresponding private key to decrypt the token. If this is not sent, LivePerson will supply a public key for you. In order to view the auth response in the agent widget you must supply your own key.</td>
    <td>string</td>
    <td>N</td>
  </tr>
   <tr>
    <td>apple.oauth2.scope</td>
    <td>An array of scope items that specifies the scope of the request, gives the exact fields of data that the authentication service provides to client requesting the authentication.</td>
    <td>Array&lt;string&gt;</td>
    <td>Y</td>
  </tr>
    <tr>
    <td>apple.oauth2.clientSecret</td>
    <td>A string indicating the secret provisioned by the authorization server.</td>
    <td>string</td>
    <td>Y</td>
  </tr>
     <tr>
    <td>apple.oauth2.responseType</td>
    <td>A string indicating the type of authentication request.</td>
    <td>string</td>
    <td>Y</td>
  </tr>
     <tr>
    <td>apple.oauth2.state</td>
    <td>A string indicating the type of authentication request.</td>
    <td>string</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

For more about Apple Authentication, see [this document](https://developer.apple.com/documentation/businesschatapi/messages_sent/interactive_messages/authentication).

###### `receivedMessage` Object Properties  

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>Style</td>
    <td>The Style of the authentication interactive message reply bubble. Can be set to icon, small or large. Defaults to icon</td>
    <td>Enum — icon, small, large
</td>
    <td>N</td>
  </tr>
  <tr>
    <td>title</td>
    <td>The title of the bubble </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>Subtitle to be displayed under title</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>imageURL</td>
    <td>Image to be placed in the authentication interactive message received bubble layout</td>
    <td>String</td>
    <td>N</td>
  </tr>
  </tbody>
</table>

###### `replyMessage` Object Properties  

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>style</td>
    <td>The Style of the authentication interactive message reply bubble. Can be set to icon, small or large. Defaults to icon</td>
    <td>Enum — icon, small, large
</td>
    <td>N</td>
  </tr>
  <tr>
    <td>title</td>
    <td>The title of the bubble </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>Subtitle to be displayed under title</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>imageURL</td>
    <td>Image to be placed in the authentication interactive message reply message bubble layout</td>
    <td>String</td>
    <td>N</td>
  </tr>
  </tbody>
</table>

#### Request Body

The request body defines how the Apple Auth bubble looks in the Conversational Cloud Agent Workspace and not how the bubble looks on the consumer device. This Apple Auth structured content template in the Agent Workspace is for conversational context, transcript and historic records, as well as ease of use for agents.

See the [introduction to templates](structured-content-introduction-to-structured-content.html#templates) for information on a basic template that you can send.

##### Body Template Example

A very simple, basic structured content template for Apple Auth would be just an image and text in a horizontal arrangement.

```json
{
  "tag": "authentication", // required
  "type": "horizontal",
  "elements": [
    {
      "type": "image",
      "url": "apple_auth_image_url"
    },
    {
      "type": "text",
      "text": "authentication details"
    }
  ]
}
```

### Receiving an Apple Authentication Response from a Consumer

After the consumer submits their Apple Auth details in the form, the Apple Auth response is delivered back to Conversational Cloud.

If you are authenticating the consumer with a **bot**, you can listen for the auth response via [Conversational Metadata](messaging-agent-sdk-conversation-metadata-guide.html). Conversational Metadata provides a way for developers to pass metadata or context information to a bot built with the [Messaging Agent SDK](messaging-agent-sdk-overview.html). Please see [the Conversational Metadata guide](messaging-agent-sdk-conversation-metadata-guide.html#listen-for-payment-or-authorization-response) for how to listen for Conversational Metadata with the correct Apple Auth response structure.

If you are authenticating the consumer with a **human agent**, you can listen for the auth response in an [Agent Widget](agent-workspace-widget-sdk-overview.html). See the [bind](agent-workspace-widget-sdk-methods.html#bind) method for how to listen for incoming data. Instead of `visitorInfo.visitorName` in the example, the `pathToData` that you will bind to is [metadata.connectorAuthResponse](agent-workspace-widget-sdk-public-model-structure.html#metadataconnectorauthresponse).

{: .note}
If reading the auth response in an Agent Widget, you **must** initially send a public key.

#### Response Metadata

The authentication response metadata is contextual information about the consumer authentication response status. This information should be used to validate the authentication status of the consumer, as well as to report the auth response token back to the OAuth service in order to validate user identity.

##### Example Conversational Metadata response

**Success example response**:

```json
{
    "encrypted"         : true,
    "status"            : true,
    "token"             : "token encrypted string",
    "requestIdentifier" : "Request Identifier Unique Key",
}
```

**Failure example response**:

```json
{
    "encrypted"         : true,
    "status"            : false,
    "requestIdentifier" : "Request Identifier Unique Key",
    "errors"            : [{
        "message" : "Optional Error Message"    
    }]
}
```

**`ConnectorAuthenticationResponse` Object Properties**

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
  </thead>
  <tbody>
  <tr>
    <td>encrypted</td>
    <td>True if you have provided the responseEncryptionKey, False if you have not</td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>status</td>
    <td>Status of the consumer authentication — can be only true (successful) or false (failed) </td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>token</td>
    <td>Token string - will be available only when authentication was successful </td>
    <td>String</td>
  </tr>
  <tr>
    <td>requestIdentifier</td>
    <td>Matches the authentication request that you sent.</td>
    <td>String</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Type of authentication error as received from Apple - will be available only when authentication failed </td>
    <td>Array</td>
  </tr>
  </tbody>
</table>

### Guidelines

#### General Guidelines

* Image URLs must be whitelisted in Conversational Cloud. Images added in the ReceivedMessage and ReplyMessage must be whitelisted in the structured content image whitelisting area. Please contact your LP representative to whitelist images.

#### Consumer received and reply bubble behavior

**If using received bubble with style "icon", “small”, “large”**:

* Received bubble experience: if an image was added, the image in the received bubble will not be presented in the push preview message. Once you tap to view a bubble in the conversation thread, the image will be presented. The size of the received bubble will be defaulted to "icon".

* Reply bubble experience: image will always be defaulted to the "received" bubble image (if configured). If no image was added to the received bubble, no image will be presented in the reply bubble. The size of the reply bubble will be defaulted to “icon”.

* If authentication fails, the Reply bubble text and subtitle configured will be overridden by apple to the following text "Authentication failed".

### Limitations

* Updating the Apple Messages for Business authentication status visually in the LiveEngage UI is planned.
