---
pagename: Apple Pay Template
redirect_from:
  - payment-apple-business-chat-template.html
  - payment-apple-business-chat-apple-pay.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
permalink: apple-business-chat-templates-apple-pay-template.html
indicator: messaging
---

### Overview

The Apple Business Chat messaging channel now supports a new Rich Message type that allows you to submit payment requests to consumers using **Apple Pay**. The consumers can then respond to the payment request using their preferred Apple Pay payment methods.

See the general message flow below:

<img style="width:800px" src="img/apple_pay.png" alt="apple pay overview">

1. Send the Apple Pay template via an agent or bot with the Structured Content framework and configuration (similar to list and time picker).

2. Payment transactions will be performed by your payment gateway.

3. Upon successful or failed payment, LiveEngage will support passing the payment details back to LiveEngage Conversational Metadata (via the [Agent SDK](messaging-agent-sdk-conversation-metadata-guide.html)) in order to allow you to perform validation on the payment information against the Apple Pay account

### Setup

1. The first step is to [configure your Apple developer account for Apple Pay](https://developer.apple.com/videos/play/tutorials/configuring-your-developer-account-for-apple-pay/).

2. Register a Merchant Identifier (Merchant ID) in your Apple Developer Account to enable Apple Pay payments in Messages. For more information on creating your merchant ID, see [Configuring Your Environment.](https://developer.apple.com/library/content/ApplePay_Guide/Configuration.html#//apple_ref/doc/uid/TP40014764-CH2)

3. Then, create a private Apple Pay account and supply your Apple Pay Merchant ID in your Apple management area [register.apple.com](register.apple.com).

You will use your Merchant ID in the `merchantIdentifier` properties of the Apple Pay Request metadata template below so save it somewhere you can easily access.

### Sending an Apple Pay Request to a Consumer


You will send a metadata template and a body template for the Apple Pay request to the consumer.

See [how to send Structured Content](structured-content-introduction-to-structured-content.html#how-to-send-structured-content-to-the-conversation) for more information on how to send these.

The **body** template will only define how the Apple Pay bubble is displayed in the LiveEngage agent workspace. The **metadata** template will define how the bubble is displayed in the consumer's Messages thread.

<img style="width:300px" src="img/apple_pay_consumer1.png"> <img style="width:300px" src="img/apple_pay_consumer2.png">

_Agent/bot sends Apple Pay Interactive Message to consumer_

<img style="width:400px" src="img/apple_pay_agentworkspace2.png">

_Agent views Apple Pay Request in LiveEngage Agent Workspace_

#### Request Metadata

**BusinessChatMessage - receivedMessage bubbles**

The `BusinessChatMessage` object holds the received message, which defines how the bubble element will be displayed when a message is received on the consumer’s device. The Apple Pay reply message on the consumer device is not configurable.

**ConnectorPaymentRequest**

The payment request holds the full Apple Pay transaction details (details of purchased services, payment capabilities, shipping methods, and transaction amounts). You can also request billing and shipping methods in this request.

To edit the `ConnectorPaymentRequest` and `BusinessChatMessage` metadata template, please use the relevant properties, as presented in the example JSON below.

##### Request Metadata example

```json
[
  {
    "type": "BusinessChatMessage",
    "receivedMessage": {
      "style": "icon",
      "subtitle": "Buy now for $1",
      "title": "iPhone XS Max",
      "imageURL":"https://i.pinimg.com/280x280_RS/96/7f/ab/967fab3e38860638878f86b26bd756e3.jpg"
    }
  },
  {
    "type": "ConnectorPaymentRequest",
    "signature":"<SIGNATURE>",
    "apple": {
      "data": {
        "version": "1.0",
        "payment": {
          "paymentRequest": {
            "applePay": {
              "merchantIdentifier": "<MERCHANTIDENTIFIER>",
              "merchantCapabilities": [
                "supports3DS",
                "supportsCredit",
                "supportsDebit"
              ],
              "supportedNetworks": [
                "amex",
                "visa",
                "mastercard"
              ]
            },
            "lineItems": [
              {
                "label": "iPhone",
                "amount": "1",
                "type": "pending"
              }
            ],
            "total": {
              "label": "iPhone",
              "amount": "1",
              "type": "pending"
            },
            "countryCode": "US",
            "currencyCode": "USD",
            "supportedCountries": [
              "US"
            ],
            "shippingMethods": [
              {
                "label": "Free Shipping",
                "detail": "Arrives in 5 to 7 days",
                "amount": "0.00",
                "identifier": "FreeShip"
              },
              {
                "label": "Paid Shipping",
                "detail": "Arrives in 2 to 3 days",
                "amount": "9.00",
                "identifier": "Paid"
              }
            ]
          },
          "endpoints": {
            "paymentGatewayUrl": "https://<DOMAIN>/paymentGateway",
            "fallbackUrl": "https://<DOMAIN>/paymentGateway"
          },
          "merchantSession": {
            "epochTimestamp": 1538086871973,
            "expiresAt": 1538094071973,
            "merchantSessionIdentifier": "MERCHANTSESSIONIDENTIFIER ENCODED",
            "nonce": "ee020db9",
            "merchantIdentifier": "MERCHANTIDENTIFIER ENCODED",
            "displayName": "Vikram Bhatt /Jayshree Bhatt",
            "signature": "SESSIONSTRING",
            "initiative": "messaging",
            "initiativeContext": "https://<DOMAIN>/paymentGateway",
            "signedProperties": [
              "merchantIdentifier",
              "merchantSessionIdentifier",
              "initiative",
              "initiativeContext",
              "displayName",
              "nonce"
            ]
          }
        },
        "requestIdentifier": "<UUID>"
      }
    }
  }
]
```

##### Request Metadata Properties

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
    <td>ConnectorPaymentRequest</td>
    <td>Represents a Business Chat apple pay request </td>
    <td>Object</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

##### `BusinessChatMessage` Object Properties

**`receivedMessage` Object Properties**

This object defines how the Apple Pay template is displayed on the consumer device and not how it is displayed in the Agent Workspace.

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
    <td>The Style of the apple pay Rich Message reply bubble. Can be set to icon, small or large. Defaults to icon</td>
    <td>Enum - icon, small, large</td>
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
    <td>Image to be placed in the apple pay Rich Message received bubble template</td>
    <td>String</td>
    <td>N</td>
  </tr>
  </tbody>
</table>

##### `ConnectorPaymentRequest` Object Properties

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
   <tr>
    <td>signature</td>
     <td>This is where you specify the "signature" value. For more information, see <a href="#apple-pay-signature-flow">Apple Pay Signature Flow Guide</a></td>
    <td>String</td>
    <td>N</td>
   </tr>
   <tr>
    <td>apple</td>
    <td>This is where you specify the "data" object  </td>
    <td>object</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

**`apple` Object Properties**

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>Data</td>
    <td>This is where you specify the "requestIdentifier", "payment" and the "version". </td>
    <td>object</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

**`data` Object Properties**

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>requestIdentifier </td>
    <td>A UUID for the request. Business Chat includes the identifier in its response to LiveEngage - this is an important property which allows you to correlate the payment response with your backend payment service  </td>
    <td>string</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>payment</td>
    <td>A dictionary with information about the payment request. For the full details list of the payment dictionary keys, see Apple’s Payment Request Dictionary.</td>
    <td>object</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>version</td>
    <td>The version number of the message extension schema; the version should be 1.0.</td>
    <td>string</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

**`payment` Object Properties**

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>paymentRequest</td>
    <td>This is where you specify the - apple pay identifiers, line items, total amount, country code, currency code, supported countries, shipping methods</td>
    <td>object</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>merchantSession</td>
    <td>Containing the payment session provided by Apple Pay after requesting a new payment session. For more information, see <a href="https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/requesting_an_apple_pay_payment_session">Requesting an Apple Pay Payment Session</a>.</td>
    <td>object</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>endpoints</td>
    <td>The endpoints dictionary contains a list of URLs that Apple Pay calls during the payment process. Apple Pay requires the paymentGatewayUrl endpoint for use in asking the payment provider to process the payment; all other endpoints are optional.</td>
    <td>object</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

#### Request Body

The request body is standard structured content. The template is sent to LiveEngage and defines how the Apple Pay bubble looks in the LiveEngage Agent Workspace and not how the bubble looks on the consumer device (which is determined by the objects described above). This request body template is useful for conversational context, transcript and historical records, as well as ease of use for agents.

See the [introduction to templates](structured-content-introduction-to-structured-content.html#templates) for information on a basic template that you can send.

##### Example

A very simple, basic structured content template for Apple Pay would be an image and text in a horizontal arrangement.

```json
{
  "type": "horizontal",
  "elements": [
    {
      "type": "image",
      "url": "apple_pay_image_url"
    },
    {
      "type": "text",
      "text": "Your Order"
    }
  ]
}
```

#### Apple Pay Signature Flow

{: .important}
In order to use the Signature enhanced security flow, you must contact your account manager.

The Apple Pay Signature Flow is an extra layer of validation for Apple Pay transactions. In the Request Metadata payload, there is a "signature" property that you can include. This signature is set on the account level. The Apple Business Chat connector takes the signature value that you sent and validates that with the signature attached to your account. If the validation fails, agents will see a red warning icon in the conversation window next to the message.

The signature flow provides an extra layer of security before sending the payment request to Apple, but it is optional. 

If you would like to opt in for this additional verification, contact your LivePerson account manager. 

**How to generate the signed payload to include in the Apple Pay payload for verification:**

1. Generate signature value
    1. Generate the Apple Pay payload
    2. Generate SHA1 Hash of the payload from step A
    3. Generate the signature, sign the generated hash from step B using the secret key & preferred algorithm required during onboarding to opt in with this verification flow
2. Add signature to payload
    1. Add “signature” property and the value generated from step 1C to [the original payload](#connectorpaymentrequest-object-properties)


### Receiving an Apple Pay Response from a Consumer

After the consumer submits their Apple Pay details in the form, the Apple Pay response is delivered back to LiveEngage.

If you are sending a payment request with a **bot**, you can listen for the payment response via [Conversational Metadata](messaging-agent-sdk-conversation-metadata-guide.html). Conversational Metadata provides a way for developers to pass metadata or context information to a bot built with the [Messaging Agent SDK](messaging-agent-sdk-overview.html). Please see [the Conversational Metadata guide](messaging-agent-sdk-conversation-metadata-guide.html#listen-for-payment-or-authorization-response) for how to listen for Conversational Metadata with the correct Apple Pay response structure.

If you are sending a payment request with a **human agent**, you can listen for the payment response in an [Agent Widget](agent-workspace-widget-sdk-overview.html). See the [bind](agent-workspace-widget-sdk-methods.html#bind) method for how to listen for incoming data. Instead of `visitorInfo.visitorName` in the example, the `pathToData` that you will bind to is [metadata.connectorPaymentResponse](agent-workspace-widget-sdk-public-model-structure.html#metadataconnectorpaymentresponse).


#### Response Metadata

Apple Pay response metadata is contextual information about the consumer payment status and details. You will receive the payment response inside the `requestIdentifier` parameter that was sent with the initial request. This `requestIdentifier` parameter should then be used to allow the bot to validate the payment against your payment backend.

##### Successful payment response example:

```json
{  
  "type":"ConnectorPaymentResponse",
  "status":true,
  "requestIdentifier":"b0bbb054-6f71-4de1-831a-9f93ddc93968"
}
```

##### Failed payment response example:

```json
{  
  "type":"ConnectorPaymentResponse",
  "status":false,
  "requestIdentifier":"16238516-02a2-4b19-bd0b-d98c144f3b3f"
}
```

**`ConnectorPaymentResponse` Object Properties**

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
  </thead>
  <tbody>
  <tr>
    <td>Status</td>
    <td>Status of the payment response</td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>requestIdentifier</td>
    <td>UUID of the payment response. This information should be used to allow the bot to validate the payment against your payment backend.</td>
    <td>String</td>
  </tr>
  </tbody>
</table>

### Guidelines

#### General guidelines

* Upon payment response from consumer - it is very important that you perform validation on the payment response against your payment backend using the request identifier.

* Each Apple Pay merchant session will be available for only 5 minutes (based on Apple standards) - if the consumer will not reply to the payment request within that time frame the session will end, and you will need to perform another payment request to allow the consumer to pay.

#### Consumer received and reply bubble behavior

**If using received bubble with style "icon"**:
  * Received bubble experience - the image in the received bubble will only be presented in the push preview message. Once you tap to view the bubble in the conversation thread, the image will not be presented (only the default Apple Pay logo) and the size will be set to "icon" as the  default view.  

  * Reply bubble experience - image in the reply bubble will not be presented, but only the payment details in text. The size of the reply bubble will be defaulted to "icon".  

**If using received bubble with style "small"**:

  * Received bubble experience - the image in the bubble will only be presented in the push preview message. Once the you tap to view the bubble in the conversation thread, the image will not be presented (only the default Apple Pay logo) and the size will be set to "icon" as the  default view.

  * Reply bubble experience - image in the reply bubble will not be presented, but only the payment details in text. The size of the reply bubble will be defaulted to "icon".

**If using received bubble with style "large"**:

  * Received bubble experience - the image in the bubble will be presented in the push message preview as well as in the conversation thread bubble. The size of the bubble will stay "large" as set in the SC request.

  * Reply bubble experience - the image in the reply bubble will be displayed, with the same image that was set in the received bubble. The size of the bubble will stay "large" as set in the received bubble in the SC request.

<div class="important"> The URL passed in `ImageURL` of the received bubble must be whitelisted in LiveEngage. The image added in the RecievedMessage must be whitelisted in the structured content image whitelisting area. Contact your LP representative to whitelist images.</div>


