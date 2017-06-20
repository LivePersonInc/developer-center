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

###  customerInfo

| Name            | Description                        | Type/Value |
| :---------      | :---------------                   | :----------|
| serverTimeStamp | Event time stamp.  | long – epoch time in milliseconds|
| customerStatus  | Customer status- will be matched against customer status entity name. Case insensitive.| alphanumeric|
| customerType    | Customer type - will be matched against customer type entity name. Case insensitive. | alphanumeric|
| balance         | The current balance of the customer. | alphanumeric|
| customerId      | The customer ID. | alphanumeric|
| socialId        | The social ID of your choice: Facebook, Twitter etc. | alphanumeric|
| imei            | Unique phone identifier.   | alphanumeric|
| userName        | Nickname or username of a consumer. | alphanumeric|
| accountName     | Name of the company or account.| alphanumeric|
| role            | Role title of the consumer within their organization. | alphanumeric|
| lastPaymentDate | The customer's last payment date. This consists of 3 integer fields: Year, month, and day. | JSON : { "year": 2011, "month": 3, "day": 21}|
| registrationDate| The customer's registration date. This consists of 3 integer fields: Year, month, and day. | JSON : { "year": 2011, "month": 3, "day": 21}|
| companySize     | The company size. | alphanumeric|
| accountName     | A nickname for the account for B2B like the salesforce account name. | alphanumeric|
| storeZipCode    | The zip code of the store. | alphanumeric|
| storeNumber     | The number of the store.| alphanumeric|
| loginStatus     | Login status. | alphanumeric|

###  personalInfo

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| name            | Personal name.         | alphanumeric|
| surname         | Surname.               | alphanumeric|
| gender          | Visitor's gender.      | alphanumeric|
| company         | Visitor's company.     | alphanumeric|
| customerAge     | Year of birth. For calculating age. | alphanumeric|
| email           | Visitor email.         | alphanumeric|
| phone           | Visitor phone number.  | alphanumeric|
| language        | Visitor language.      | alphanumeric|


