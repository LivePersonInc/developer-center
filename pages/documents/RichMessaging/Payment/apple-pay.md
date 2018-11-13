---
pagename: Apple Business Chat Template
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Payment
order: 20
permalink: payment-apple-business-chat-template.html
indicator: messaging
---

### Overview

The Apple Business Chat messaging channel now supports a new Rich Message type that allows you to submit payment requests to consumers using **Apple Pay**. The consumers can then respond to the payment request using their preferred Apple Pay payment methods.

You submit an Apple Pay request to the consumer (similar to sending a [structured content template](structured-content-apple-business-chat-templates-introduction.html)), and the consumer replies with their payment response.

See the message flow below:

<img class="zoomimg" style="width:800px" src="img/apple_pay.png" alt="apple pay overview">

1. Send the Apple Pay template via an agent or bot with the Structured Content framework and configuration (similar to list and time picker).
2. Payment transactions will be performed by your payment gateway
3. Agents and bots on LiveEngage will get real-time updates upon a consumer payment response
4. Upon successful or failed payment, LiveEngage will support passing the payment details back to LiveEngage Conversational Metadata (via the [Agent SDK](messaging-agent-sdk-conversation-metadata-guide.html)) in order to allow you to perform validation on the payment information against their Apple Pay account

### Setup

Register a Merchant Identifier (Merchant ID) in your Apple Developer Account to enable Apple Pay payments in Messages. For information on creating your merchant ID, see [Configuring Your Environment.](https://developer.apple.com/library/content/ApplePay_Guide/Configuration.html#//apple_ref/doc/uid/TP40014764-CH2)

Then create a private Apple Pay account and supply your Apple Pay Merchant ID on your Apple management area (register.apple.com).

You will use your Merchant ID in the `merchantIdentifier` properties of the Metadata JSON.

### Sending an Apple Pay Request to a Consumer

Similar to [Apple structured content templates](structured-content-apple-business-chat-templates-introduction.html), you will send two template payloads (Metadata and Body) for the Apple Pay request to the consumer.

Different from Apple structured content templates, the **body** template will only define how the Apple Pay bubble is displayed in the LiveEngage agent workspace (for conversational context, transcript and historic records, as well as ease of use for agents). The **metadata** template will define how the bubble is displayed in the consumer's Messages thread.

For full instructions on the structured content body property descriptions and different template options please refer to the [structured content guide in our dev community.](structured-content-introduction-to-structured-content.html)

_Agent/bot generates Apple Pay Interactive Message to consumer (using structured content on LiveEngage)_
![](img/apple_pay_consumer1.png) ![](img/apple_pay_consumer2.png)

_Consumer completes payment process and receives the reply message bubble with the payment status_

_Agent views Apple Pay Request in LiveEngage Agent Workspace_
![](img/apple_pay_le.png)

#### Request Metadata

**BusinessChatMessage - receivedMessage and replyMessage bubbles**

The Business Chat Message holds the received and reply message, which defines how the bubble element will be displayed when a message is received on the consumer’s device and submits back on the consumer device.

**ConnectorPaymentRequest**

The payment request holds the full Apple Pay transaction details (details of purchased services, payment capabilities, shipping methods, and transaction amounts). You can also request billing and shipping methods in this request.

To edit the Connector Payment Request and Business Chat Message (with received and reply bubble) via Structured Content, please use the metadata template with the relevant properties, as presented in the example JSON below.

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

##### `"type": "BusinessChatMessage"` Object Properties

###### `receivedMessage` Object Properties  

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

##### `"type": "ConnectorPaymentRequest"` Object Properties

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </thead>
  <tbody>
  <tr>
    <td>Apple</td>
    <td>This is where you specify the "data" object  </td>
    <td>object</td>
    <td>Y</td>
  </tr>
  </tbody>
</table>

###### `apple` Object Properties

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

###### `data` Object Properties

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
    <td>An identifier for the request. Business Chat includes the identifier in its response to LiveEngage - this is an important property which allows you to correlate the payment response with their backend payment service  </td>
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

###### `payment` Object Properties

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
    <td>Containing the payment session provided by Apple Pay after requesting a new payment session. For more information, see Requesting an Apple Pay Payment Session.</td>
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

The request body defines how the Apple Pay bubble looks in the LiveEngage Agent Workspace and not how the bubble looks on the consumer device. See the [introduction to templates](structured-content-introduction-to-structured-content.html#templates) for information on a basic template that you can send.

##### Example

A very simple, basic structured content template would be just an image and text in a horizontal arrangement.

```json
{
  "type": "horizontal",
  "elements": [
    // image and text elements here
  ]
}
```

### Recieving an Apple Pay Response from a Consumer

After the consumer submits their Apple Pay details in the form, the Apple Pay response is delivered to LiveEngage using [Conversational Metadata](messaging-agent-sdk-conversation-metadata-guide.html).

Conversational Metadata provides a way for developers to pass metadata or context information to a bot using the Messaging Agent SDK.

#### Response Metadata

Apple Pay response metadata is context information about the consumer payment status and details. This information should be used to allow the bot to validate the payment against your payment backend, as well as to enable the bot to continue with next steps per the payment details (fetch order confirmation and share with the consumer, remove item for backend inventory systems, etc).

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

###### `"type": "ConnectorPaymentRequest"` Object Properties

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
    <td>Identifier of the payment response. Will enable you to correlate between the payment request and response. </td>
    <td>String</td>
  </tr>
  </tbody>
</table>

### Guidelines

#### General guidelines

* Upon payment response from consumer - It is very important that you perform validation on the payment response against your payment backend using the request identifier.
* Each Apple Pay merchant session will be available for only 5 minutes (based on Apple standards) - if the consumer will not reply to the payment request within that time frame the session will end, and you will need to perform another payment request to allow the consumer to pay.

#### Received and reply bubble behavior 

* If using received bubble with style "icon" -
  * Received bubble experience - the image in the received bubble will only be presented in the push preview message. Once you tap to view the bubble in the conversation thread, the image will not be presented (only the default Apple Pay logo) and the size will be set to "icon" as the  default view.  
  * Reply bubble experience - image in the reply bubble will not be presented, but only the payment details in text. The size of the reply bubble will be defaulted to "icon".  
* If using received bubble with style "small"-  
  * Received bubble experience - the image in the bubble will only be presented in the push preview message. Once the you tap to view the bubble in the conversation thread, the image will not be presented (only the default Apple Pay logo) and the size will be set to "icon" as the  default view.
  * Reply bubble experience - image in the reply bubble will not be presented, but only the payment details in text. The size of the reply bubble will be defaulted to "icon".
* If using received bubble with style "large"-  
  * Received bubble experience - the image in the bubble will be presented in the push message preview as well as in the conversation thread bubble. The size of the bubble will stay "large" as set in the SC request
  * Reply bubble experience - the image in the reply bubble will be displayed, with the same image that was set in the received bubble. The size of the bubble will stay "large" as set in the received bubble in the SC request
* ImageURL of the received bubble must be whitelisted in LiveEngage
  * Images added in the RecievedMessage and ReplyMessage must be whitelisted in the structured content image whitelisting area. Contact your LP representative to whitelist images.

### Limitations

* In the current version of the Apple Pay template, only a bot in LiveEngage (using the Agent SDK) will be able to receive the payment response (using the Conversation Metadata). 
  * A Human Agent is currently not exposed to these events. Adding UI indication in the LiveEngage Workspace is planned for Q4, 2018
