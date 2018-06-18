---
title: Engagement Attributes
level1: Documents
level2: Data
level3: Messaging Interactions API

order: 32
permalink: data-messaging-interactions-appendix.html

indicator: messaging
---
Engagement Attributes allow a brand to communicate events, for example, purchases, visitor login, shopping cart backout etc., from the webpage into LiveEngage. This section describes the data retrieved in the response body. All engagement attribute values are of unlimited length (up to 50K chars).

There is ability to pull the engagement attributes based in two versions: 
v1 - will allow to retrieve authenticated engagement attributes only and their attributes type will be alphanumeric.
v2 - will allow to retrieve both authenticated & unauthentictaed engagement atrributes and their types will be "type def".

###  customerInfo

| Name            | Description                        | Type/Value |
| :---------      | :---------------                   | :----------|
| serverTimeStamp | Event time stamp.  | long – epoch time in milliseconds|
| customerStatus  | Customer status- will be matched against customer status entity name. Case insensitive.|alphanumeric|
| customerType    | Customer type - will be matched against customer type entity name. Case insensitive. | alphanumeric|
| balance         | The current balance of the customer. | v1- alphanumeric, v2- double|
| currency        | Currency code. | alphanumeric|
| customerId      | The customer ID. | alphanumeric|
| socialId        | The social ID of your choice: Facebook, Twitter etc. | alphanumeric|
| imei            | Unique phone identifier.   | alphanumeric|
| userName        | Nickname or username of a consumer. | alphanumeric|
| accountName     | Name of the company or account.| alphanumeric|
| role            | Role title of the consumer within their organization. | alphanumeric|
| lastPaymentDate | The customer's last payment date. This consists of 3 integer fields: Year, month, and day. | JSON : { "year": 2011, "month": 3, "day": 21}|
| registrationDate| The customer's registration date. This consists of 3 integer fields: Year, month, and day. | JSON : { "year": 2011, "month": 3, "day": 21}|
| companySize     | The company size. |v1- alphanumeric, v2- int|
| accountName     | A nickname for the account for B2B like the salesforce account name. | alphanumeric|
| companyBranch   | The branch of the company. | alphanumeric | |
| storeZipCode    | The zip code of the store. | alphanumeric|
| storeNumber     | The number of the store.| alphanumeric|
| loginStatus     | Login status. | v1- alphanumeric, v2- int|

###  personalInfo

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| name            | Personal name.         | alphanumeric|
| surname         | Surname.               | alphanumeric|
| gender          | Visitor's gender.      | alphanumeric|
| company         | Visitor's company.     | alphanumeric|
| customerAge     | Year of birth. For calculating age. | alphanumeric|
| contacts        | Container of personalContact| alphanumeric|
| email           | Visitor email.         | alphanumeric|
| phone           | Visitor phone number.  | alphanumeric|
| language        | Visitor language.      | alphanumeric|

### cartStatus (Cart update)

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| total           | Total cart value.      | double |
| currency        | Currency code.         | alphanumeric|
| numItems        | Number of items in cart. | int|
| products        | List of products       | container|
| quantity     | Number of products. | int|
| product        | Contains information about the product| container|
| name           | Product name.     | alphanumeric|
| category           | Product category.  | alphanumeric|
| sku        | Unique product ID identifier in consumer database.    | alphanumeric|
| price        | Product price.    | double|

### purchase (Transaction)

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| total           | Total amount of purchase..      | double |
| currency        | Currency code.         | alphanumeric|
| orderId         | Purchase order ID.| alphanumeric|
| cart            | Information about the cart status (detailed foramt - link to cart status)      | container|

          
### marketingCampaignInfo (Marketing Source)

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| originatingChannel           | Channel which originated the campaign.     | int |
| affiliate        | Affiliate.        | alphanumeric|
| campaignId        |Unique identifier of the campaign.| alphanumeric|

### searchContent (Searched Content)
 
 | Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| keywords           | Array of the search keywords     | array, alphanumeric |

### viewedProduct (viewedProduct)

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| products        | List of products.   | container |
| quantity     | Number of products. | int|
| currency        | Currency code.         | alphanumeric|
| product        | Contains information about the product| container|
| name           | Product name.     | alphanumeric|
| category           | Product category.  | alphanumeric|
| sku        | Unique product ID identifier in consumer database.    | alphanumeric|
| price        | Product price.    | double|

### visitorError 

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| contextId        | Error context ID (from the customer).   | alphanumeric |
| message     | Error message. | alphanumeric|
| code        |Error code.    | alphanumeric|
| level        | Error severity level.| long|
| resolved           | Indication whether the error was resolved.    | boolean|

### lead 

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| topic        | Lead topic.  | alphanumeric |
| value     | Lead value. | double|
| currency        | Currency code.    | alphanumeric|
| leadId        | Unique identifier of the lead in your system.| alphanumeric|

### serviceActivity 

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| topic        | Topic of service activity.  | alphanumeric |
| status     | Status of service activity. | int|
| category        | Category of service activity.   | alphanumeric|
| serviceId        | Unique service identifier.| alphanumeric|
  
 
