---
pagename: Product Messages Template
redirect_from:
Keywords: structured content rich messaging whatsapp business messages product messages
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Viber Templates
permalink: whatsapp-business-messages-templates-product-messages-template.html
indicator: messaging
---

### Overview

WhatsApp now supports Product Messaging! Brands can now send single or multiple product messages to their WhatsApp Messenger customers.
This allows the customer to view the product(s), ask questions about given products as well as purchase and complete the order 
all from inside WhatsApp.  (Product Question and Product Order Messages arrive as Simple text messages with the associated metadata attached (examples below))

There however are a few steps a brand must do prior to being able to send product messages and this includes connecting a catalog
to the LivePerson Business Id and connecting the catalog to their WhatsApp Business Account.

### Structure

Its important to note that Product Messages has only one orientation option and that is of type "Vertical"

Single Product Message has the following structure

1. Header (required only if no body & footer are present else the element is ignored)
2. Body (optional)
3. Footer (optional)

_Examples Of WhatsApp Single Product Message:_

![Whatsapp Single Product Message Examples](img/connectors/wa_singleprodmsg.png)

Multiple Product Message has the following structure

1. Header (required)
2. Body (required)
3. Footer (optional)

_Examples Of WhatsApp Multiple Product Message:_

![Whatsapp Multiple Product Message Examples](img/connectors/wa_multiprodmsg.png)

### JSON Template Properties

<table>
  <thead>
  <tr>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  </thead>
  <tr>
    <td>type</td>
    <td>WhatsApp Product Message can only have type of "Vertical"</td>
<td>Enum</td>
<td>Y</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>Tag of template view, must be “generic” for Viber rich content templates.</td>
<td>Enum</td>
<td>Y</td>
  </tr>
  <tr>
    <td>elements
</td>
    <td>Array of elements/templates. By using elements in your structured content template, you can send basic elements, such as header, body, footer</td>
    <td>Elements/Templates</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>text</td>
    <td>The text that will appear in the assigned element. The tag property of this object is what assigns the type of section the text is assigned to. Tag options are
    as followed: "header", "body", and "footer"</td>
    <td>String</td>
    <td>Y</td>
  </tr>
</table>

### METADATA Template Properties

Metadata is required for both Single and Multiple Product messages and contains the required data so that WhatsApp displays
the appropriate products in the desired formatting.

<table>
   <thead>
      <tr>
         <th>Property Name</th>
         <th>Description</th>
         <th>Type</th>
         <th>Required</th>
      </tr>
   </thead>
   <tr>
      <td>type</td>
      <td>Types are either "WhatsAppSingleProduct" or "WhatsAppMultipleProduct"</td>
      <td>Enum</td>
      <td>Y</td>
   </tr>
   <tr>
      <td>catalogId</td>
      <td>The catalog the products being sent belong to.</td>
      <td>string</td>
      <td>Y</td>
   </tr>
   <tr>
      <td>productRetailerId</td>
      <td>The product id to send to the WhatsApp user</td>
      <td>string</td>
      <td>Y (Single Mode Only)</td>
   </tr>
   <tr>
      <td>sections</td>
      <td>An array of section objects</td>
      <td>array</td>
      <td>Y (Multiple Mode Only)</td>
   </tr>
   <tr>
      <td colspan="3">
         section object
      </td>
   </tr>
   <tr>
      <td>title</td>
      <td>The title of the section</td>
      <td>string</td>
      <td>Y</td>
   </tr>
   <tr>
      <td>productIds</td>
      <td>The products ids to be shown under the section</td>
      <td>string[] (30 max length)</td>
      <td>Y</td>
   </tr>
</table>

### Code Examples

#### Single Product Message

```json
{
  "type": "vertical",
  "tag": "generic", 
  "elements": [
    {
      "type": "text",
      "text": "Check out this amazing shoe!",
      "tag": "body"
    },
    {
      "type": "text",
      "text": "Cool Shoes",
      "tag": "footer"
    }
  ]
}
```

#### Single Product Message Metadata

```json
[
   {
      "type":"WhatsAppSingleProduct",
      "catalogId":"7091398035386734",
      "productRetailerId":"kjhjh435"  
   }
]
```

#### Multiple Product Message

```json
{
  "type": "vertical",
  "tag": "generic", 
  "elements": [
    {
      "type": "text",
      "text": "Check out all these products!",
      "tag": "header"
    },
    {
      "type": "text",
      "text": "Take a peek at all these wonderous shoes that we have on sale!!",
      "tag": "body"
    },
    {
      "type": "text",
      "text": "Joshss Amazing Shoes",
      "tag": "footer"
    }
  ]
}
```

#### Multiple Product Message Metadata

```json
[
  {
    "type": "WhatsAppMultipleProduct",
    "catalogId": "7091398035386712",
    "sections": [
      {
        "title": "Shoes",
        "productIds": [
          "retg4gg",
          "dfgfdg87df"
        ]
      },
      {
        "title": "Cheaper Shoes",
        "productIds": [
          "lkdfjgljdsfg",
          "fgfdgdfgfdsg"
        ]
      }
    ]
  }
]
```

### Product Question Message Metadata

```json
[
  {
    "type": "MessageReplyContext",
    "whatsappExternalId": "342334",
    "whatsappReplyToExternalId": "34524234",
    "whatsappReplyToMessageId": "343242",
    "whatsAppProductQuestion": {
      "catalogId": "catalogId",
      "productRetailerId": "productRetailerId"
    }
  }
]
```

### Product Order Message Metadata

```json
[
  {
    "type": "WhatsAppOrder",
    "catalogId": "catalogId",
    "products": [
      {
        "productRetailerId": "productId",
        "quantity": 1,
        "price": "1.99",
        "currencyType": "USD"
      }
    ]
  }
]
```
