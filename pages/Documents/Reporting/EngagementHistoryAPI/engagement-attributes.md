---
pagename: Engagement Attributes
redirect_from:
  - data-engagement-history-appendix.html
sitesection: Documents
categoryname: "Reporting"
documentname: Engagement History API
order: 12
permalink: engagement-history-api-engagement-attributes.html
indicator: chat
---

Engagement Attributes allow a brand to communicate events, for example, purchases, visitor login, shopping cart backout etc., from the webpage into Conversational Cloud. This section describes the data retrieved in the response body. All engagement attribute values are of unlimited length (up to 50K chars).

### CartStatus

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| total | Total cart value. | alphanumeric |
| numItems | Number of items. | alphanumeric |
| quantity | Quantity of the product. | alphanumeric |
| name | Name of product. | alphanumeric |
| category | Product category. | alphanumeric |
| sku | Product stocking unit (unique identifier). | alphanumeric |
| price | Price of this product. | alphanumeric |
| currency | Currency code. | alphanumeric |

Example:

```json
    {
    "sdes": {
      "events": [
        {
          "cartStatus": {
            "serverTimeStamp": "1440412721832",
            "originalTimeStamp": "1440413291351",
            "total": "11.7",
            "currency" : "USD",
            "numItems": "6",
            "products": [
              {
                "quantity": "1",
                "product": {
                  "name": "prod1",
                  "category": "category",
                  "sku": "sku",
                  "price": "7.8"
                }
              }
            ]
          }
        }
      ]
    }
    }
```

### customerInfo

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| customerStatus | Customer status- will be matched against customer status entity name. | alphanumeric | Case insensitive.  |
| customerType | Customer type — will be matched against customer type entity name.  | alphanumeric | Case insensitive. |
| balance | The current balance of the customer. | | |
| customerId | The customer ID. | alphanumeric | |
| socialId | The social ID of your choice: Facebook, Twitter etc. | alphanumeric | |
| imei | Unique phone identifier. | alphanumeric | |
| userName | Nickname or username of a consumer. | alphanumeric | |
| accountName | Name of the company or account. | alphanumeric | |
| role | Role title of the consumer within their organization. | alphanumeric | |
| lastPaymentDate | The customer's last payment date. | JSON: {  <br> "year": 2011, <br> "month": 3, <br> "day": 21} | This consists of 3 integer fields: Year, month, and day. |
| registrationDate | The customer's registration date. | JSON: { <br> "year": 2011, <br> "month": 3, <br> "day": 21} | This consists of 3 integer fields: Year, month, and day. |
| companySize | The company size. | alphanumeric | |
| companyBranch | The branch of the company | alphanumeric | |
| storeNumber | Customer's specific store number. | alphanumeric | |
| storeZipCode | Customer's store zip code. | alphanumeric | |
| currency | Currency code. | alphanumeric | |

Example:

```json
    {
    "sdes": {
      "events": [
        {
          "customerInfo": {
            "serverTimeStamp": "1440412721833",
            "originalTimeStamp": "1440413291351",
            "customerInfo": {
              "customerStatus": "cancelled",
              "customerType": "vip",
              "balance": "-400.99",
              "Currency": "USD",
              "customerId": "138766AC",
              "socialId": 4444,
              "imei": null,
              "userName": null,
              "accountName": null,
              "role": null,
              "companyBranch": "dummyCompanyBranch",
              "storeNumber": "storeNumber13123",
              "storeZipCode": null,
              "lastPaymentDate": {
                "year": "2014",
                "month": "10",
                "day": "15"
              },
              "registrationDate": {
                "year": "2013",
                "month": "5",
                "day": "23"
              },
              "companySize": null
            }
          }
        }
      ]
    }
    }
```

### Lead

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| topic | Topic lead. | alphanumeric |
| value | Value lead. | alphanumeric |
| leadId | Lead ID. | alphanumeric |
| currency | Currency code. | alphanumeric |

Example:

```json
    {
    "sdes": {
      "events": [
        {
          "lead": {
            "lead": {
              "topic": "luxury car test drive 2015",
              "value": "22.22",
              "currency": "USD",
              "leadId": "xyz123"
            },
            "serverTimeStamp": "1440412721836",
            "originalTimeStamp": "1440413291351"
          }
        }
      ]
    }
    }
```

### marketingCampaignInfo

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| originatingChannel | Marketing channel. | alphanumeric | 0-Direct, 1-Search, 2-Social, 3-Email, 4-Referral, 5-Paid Search, 6-Display |
| affiliate | Affiliate name. | alphanumeric | |
| campaignId | Campaign ID. | alphanumeric | |

Example:

```json
    {
    "sdes": {
      "events": [
        {
          "marketingCampaignInfo": {
            "serverTimeStamp": "1440412721833",
            "originalTimeStamp": "1440413291351",
            "marketingCampaignInfo": {
              "originatingChannel": "1",
              "affiliate": "Yahoo",
              "campaignId": "US coupon campaign"
            }
          }
        }
      ]
    }
    }
```

### personalInfo

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| name | Personal name. | alphanumeric  |
| surname | Surname. | alphanumeric |
| gender | Visitor’s gender. | alphanumeric |
| company | Visitor's company. | alphanumeric |
| customerAge | Year of birth. For calculating age. | JSON: <br> {"customerAge": <br> {"customerAgeInYears": "34.0", <br> "customerYearOfBirth": "1980",<br>"customerMonthOfBirth": "4",<br>"customerDateOfBirth": "15"}} | |
| email | Visitor email. | alphanumeric | |
| phone | Visitor phone number. | alphanumeric | |
| language | Visitor's language. | alphanumeric | |

Example:

```json
    {
    "sdes": {
      "events": [
        {
          "personalInfo": {
            "serverTimeStamp": "1440412721833",
            "originalTimeStamp": "1440413291351",
            "personalInfo": {
              "name": "John",
              "surname": "Doe",
              "gender": "MALE",
              "company": "company",
              "language": "English",
              "customerAge": {
                "customerAgeInYears": "34.0",
                "customerYearOfBirth": "1980",
                "customerMonthOfBirth": "4",
                "customerDateOfBirth": "15"
              },
              "contacts": [
                {
                  "personalContact": {
                    "email": "myname@example.com",
                    "phone": "+1 212-788-8877"
                  }
                }
              ]
            }
          }
        }
      ]
    }
    }
```

### Purchase

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| total | Total purchase value. | alphanumeric |
| orderId | Unique order ID. | alphanumeric |
| quantity | Quantity of this product. | alphanumeric |
| total | Total cart value. | alphanumeric |
| name | Name of product. | alphanumeric |
| category | Product category. | alphanumeric |
| sku | Product stocking unit (unique identifier). | alphanumeric |
| price | Product price. | alphanumeric |
| numItems | Number of items. | alphanumeric |
| orderId | Unique order ID. | alphanumeric |
| currency | Currency code. | alphanumeric |

Example:

```json
    {
    "purchase": {
      "total": "11.7",
      "serverTimeStamp": "1434394476705",
      "originalTimeStamp": "1440413291351",
      "cart": {
        "total": "17.8",
        "currency" : "USD",
        "products": [
          {
            "quantity": "3",
            "product": {
              "name": "antivirus pro plan",
              "category": "software",
              "sku": "xyz001",
              "price": "7.8"
            }
          }
        ],
        "numItems": "13"
      },
      "orderId": "DRV1534XC"
    }
    }
```

### serviceActivity

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| topic | The service topic. | alphanumeric | |
| status | Activity status | alphanumeric | 0-Complete, 1-In Progress, 2-Approved, 3-cancelled, 4-Not Approved, 5-Reviewed, 6-Missing Details, 7-Closed, 8-Removed, 9-Assigned, 10-Waiting for Customer Response, 11-Waiting for Response, 12-Pending, 13-Resolved |
| category | Category name. | alphanumeric | |
| serviceId | Service ID. | alphanumeric | |

Example:

```json
    {
    "sdes": {
      "events": [
        {
          "serviceActivity": {
            "serverTimeStamp": "1440412721836",
            "originalTimeStamp": "1440413291351",
            "serviceActivity": {
              "topic": "order checkbook",
              "status": "0",
              "category": "finance",
              "serviceId": "service12"
            }
          }
        }
      ]
    }
  }
```

### VisitorError

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| contextId | Error context. | alphanumeric |
| message | Error message. | alphanumeric |
| code | Error code. | alphanumeric |
| level | Error level. | alphanumeric |
| resolved | Resolution status (false.true). | alphanumeric |

Example:

```json
    {
    "sdes": {
      "events": [
        {
          "visitorError": {
            "serverTimeStamp": "1440412721834",
            "originalTimeStamp": "1440413291351",
            "visitorError": {
              "contextId": null,
              "message": "Expiration date missing",
              "code": "er100004",
              "level": null,
              "resolved": null
            }
          }
        }
      ]
    }
    }
```

### viewedProduct

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| name | Product name. | alphanumeric |
| category | Product category. | alphanumeric |
| sku | Product SKU. | alphanumeric |
| price | Product price. | alphanumeric |
| currency | Currency code. | alphanumeric |
| statusInStock | Product stock status | alphanumeric |
| quantityInStock | Product quantity left in stock | number(int) |

 Example:

```json
    {
    "sdes": {
      "events": [
        {
          "viewedProduct": {
            "serverTimeStamp": "1434394466093",
            "originalTimeStamp": "1440413291351",
            "currency": "RUB",
            "products": [
              {
                "product": {
                  "name": "red high heel shoe",
                  "category": "women shoes",
                  "sku": "xyz567",
                  "price": "77.8",
                  "statusInStock": "Out of stock",
                  "quantityInStock": 0
                }
              }
            ]
          }
        }
      ]
    }
    }
```

### searchContent

| Name |  Description | Type / Value | Notes |
| :----- | :------- | :------ | :------ |
|originalTimeStamp | Event creation time stamp.| long — epoch time in milliseconds|
|serverTimeStamp | Event processing time stamp.| long — epoch time in milliseconds| Default value — event creation time. If processing occurred, the value is updated to the processing time.
| keywords | Array of keywords searched by the visitor. | `array<alphanumeric>` |

Example:

```json
    {
    "sdes": {
            "events": [
              {
                "searchContent": {
                  "serverTimeStamp": "1481111429931",
                  "originalTimeStamp": "1440413291351",
                  "keywords": [
                    "apple",
                    "banana"
                  ]
                }
              }
            ]
          }
    }
```