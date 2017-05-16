---
title: Engagement Attributes
level1: Documents
level2: Data
level3: Engagement History API

order: 12
permalink: data-engagement-history-appendix.html

---

Engagement Attributes allow a brand to communicate events, for example, purchases, visitor login, shopping cart backout etc., from the webpage into LiveEngage. This section describes the data retrieved in the response body. All engagement attribute values are of unlimited length (up to 50K chars).

###  CartStatus

| Name |  Description | Type / Value |
| :----- | :------- | :------ | 
| serverTimeStamp | Event time stamp. | long – epoch time in milliseconds |
| total | Total cart value. | alphanumeric |
| numItems | Number of items. | alphanumeric |
| quantity | Quantity of the product. | alphanumeric |
| name | Name of product. | alphanumeric |
| category | Product category. | alphanumeric |
| sku | Product stocking unit (unique identifier). | alphanumeric |
| price | Price of this product. | alphanumeric |
| currency | Currency code. | alphanumeric |
 
Example: 

    {
    "sdes": {
      "events": [
        {
          "cartStatus": {
            "serverTimeStamp": "1440412721832",
            "total": "11.7",
            "currency" : "USD"
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

###  customerInfo

| Name | Description | Type / Value | Notes |
| :---- | :--------- | :---------- | :--- |
| serverTimeStamp | Event time stamp. | long – epoch time in milliseconds | |
| customerStatus | Customer status- will be matched against customer status entity name. | alphanumeric | Case insensitive.  |
| customerType | Customer type - will be matched against customer type entity name.  | alphanumeric | Case insensitive. |
| balance | The current balance of the customer. | | |
| customerId | The customer ID. | alphanumeric | |
| socialId | The social ID of your choice: Facebook, Twitter etc. | alphanumeric | |
| imei | Unique phone identifier. | alphanumeric | |
| userName | Nickname or username of a consumer. | alphanumeric | |
| accountName | Name of the company or account. | alphanumeric | |
| role | Role title of the consumer within their organization. | alphanumeric | |
| lastPaymentDate | The customer's last payment date. | JSON : {  <br> "year": 2011, <br> "month": 3, <br> "day": 21} | This consists of 3 integer fields: Year, month, and day. |
| registrationDate | The customer's registration date. | JSON : { <br> "year": 2011, <br> "month": 3, <br> "day": 21} | This consists of 3 integer fields: Year, month, and day. |
| companySize | The company size. | alphanumeric | |
| storeNumber | Customer's specific store number. | alphanumeric | |
| storeZipCode | Customer's store zip code. | alphanumeric | |

Example:
 

    {
    "sdes": {
      "events": [
        {
          "customerInfo": {
            "serverTimeStamp": "1440412721833",
            "customerInfo": {
              "customerStatus": "cancelled",
              "customerType": "vip",
              "balance": "-400.99",
              "customerId": "138766AC",
              "socialId": 4444,
              "imei": null,
              "userName": null,
              "accountName": null,
              "role": null,
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

 

###  Lead 

| Name | Description | Type / Value |
| :---- | :----------- | :-------- |
| serverTimeStamp | Event time stamp. | long – epoch time in milliseconds |
| topic | Topic lead. | alphanumeric |
| value | Value lead. | alphanumeric |
| leadId | Lead ID. | alphanumeric |
 
Example:
 

    {
    "sdes": {
      "events": [
        {
          "lead": {
            "lead": {
              "topic": "luxury car test drive 2015",
              "value": "22.22",
              "leadId": "xyz123"
            },
            "serverTimeStamp": "1440412721836"
          }
        }
      ]
    }
    }

###  marketingCampaignInfo 
 
| Name | Description | Type / Value | Notes |
| :---- | :-------- | :---------- | :--- |
| serverTimeStamp | Event time stamp. | long – epoch time in milliseconds | |
| originatingChannel | Marketing channel. | alphanumeric | 0-Direct, 1-Search, 2-Social, 3-Email, 4-Referral, 5-Paid Search, 6-Display |
| affiliate | Affiliate name. | alphanumeric | |
| campaignId | Campaign ID. | alphanumeric | |
 
Example:

    {
    "sdes": {
      "events": [
        {
          "marketingCampaignInfo": {
            "serverTimeStamp": "1440412721833",
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

###  personalInfo

| Name | Description | Type / Value |
| :----- | :--------- | :-------- |
| serverTimeStamp | Event time stamp. | long – epoch time in milliseconds |
| name | Personal name. | alphanumeric  |
| surname | Surname. | alphanumeric |
| gender | Visitor’s gender. | alphanumeric |
| company | Visitor's company. | alphanumeric |
| customerAge | Year of birth. For calculating age. | JSON : <br> {"customerAge": <br> {"customerAgeInYears": "34.0", <br> "customerYearOfBirth": "1980",<br>"customerMonthOfBirth": "4",<br>"customerDateOfBirth": "15"}} | |
| email | Visitor email. | alphanumeric | |
| phone | Visitor phone number. | alphanumeric | |
| language | Visitor's language. | alphanumeric | |

Example:
 

    {
    "sdes": {
      "events": [
        {
          "personalInfo": {
            "serverTimeStamp": "1440412721833",
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

 
###  Purchase

| Name | Description | Type / Value |
| :----- | :------- | :------- |
| serverTimeStamp | Event time stamp. | long – epoch time in milliseconds |
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
 

    {
    "purchase": {
      "total": "11.7",
      "serverTimeStamp": "1434394476705",
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

###  serviceActivity

| Name | Description | Type / Value | Notes |
| :------- | :---------- | :-------- | :--- |
| serverTimeStamp | Event time stamp. | long – epoch time in milliseconds | |
| topic | The service topic. | alphanumeric | |
| status | Activity status | alphanumeric | 0-Complete, 1-In Progress, 2-Approved, 3-cancelled, 4-Not Approved, 5-Reviewed, 6-Missing Details, 7-Closed, 8-Removed, 9-Assigned, 10-Waiting for Customer Response, 11-Waiting for Response, 12-Pending, 13-Resolved | 
| category | Category name. | alphanumeric | |
| serviceId | Service ID. | alphanumeric | |
 
Example:
 

    {
    "sdes": {
      "events": [
        {
          "serviceActivity": {
            "serverTimeStamp": "1440412721836",
            "serviceActivity": {
              "topic": "order checkbook",
              "status": "0",
              "category": "finance",
              "serviceId": "service12"
            }
          }
        }
      ]
    }}

###  VisitorError

| Name | Description | Type / Value |
| :----- | :------- | :------ |
| serverTimeStamp | Event time stamp. | long – epoch time in milliseconds |
| contextId | Error context. | alphanumeric |
| message | Error message. | alphanumeric |
| code | Error code. | alphanumeric |
| level | Error level. | alphanumeric |
| resolved | Resolution status (false.true). | alphanumeric |

Example:
 

    {
    "sdes": {
      "events": [
        {
          "visitorError": {
            "serverTimeStamp": "1440412721834",
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

###  viewedProduct

| Name | Description | Type / Value |
| :----- | :------- | :--------- |
| serverTimeStamp | Event timestamp. | long – epoch time in milliseconds |
| name | Product name. | alphanumeric |
| category | Product category. | alphanumeric |
| sku | Product SKU. | alphanumeric |
| price | Product price. | alphanumeric |
| currency | Currency code. | alphanumeric |
 
 Example:
 

    {
    "sdes": {
      "events": [
        {
          "viewedProduct": {
            "serverTimeStamp": "1434394466093",
            "currency" : "RUB",
            "products": [
              {
                "product": {
                  "name": "red high heel shoe",
                  "category": "women shoes",
                  "sku": "xyz567",
                  "price": "77.8"
                }
              }
            ]
          }
        }
      ]
    }
    }

###  searchContent

| Name | Description | Type / Value |
| :----- | :------- | :--------- |
| serverTimeStamp | Event timestamp. | long - epoch time in milliseconds |
| keywords | Array of keywords searched by the visitor. | `array<alphanumeric>` |

Example:

    {
    "sdes": {
            "events": [
              {
                "searchContent": {
                  "serverTimeStamp": "1481111429931",
                  "keywords": [
                    "apple",
                    "banana"
                  ]
                }
              }
            ]
          }
    } 


