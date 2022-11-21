---
pagename: Visit Information
redirect_from:
  - rt-interactions-visit-information-visit-information.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: Visit Information API
order: 2
permalink: visit-information-api-visit-information.html
indicator: chat
---

### Request

| Method | URL |
| :------ | :------- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/monitoring/visitors/{visitorId}/visits/current/state |

This API allows access to visitor data only when the session is active and exists in memory. After a maximum of 6 hours, the session will expire and be removed from memory, so a 404 response (internal code 12) will be returned.

#### OAuth

This API supports OAuth 1.0 authentication patterns and requires SSL protocol. Please see [this document’s overview](rt-interactions-visit-information-overview.html) for more information on how to retrieve your API keys.

#### Path parameters

| Parameter | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| accountId | LP site ID | String | Required |
| visitorId | Visitor ID | String | Required |

#### Query parameters

| Name | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| filter | Set to "agent" | String | Optional |
| v | API version | string | Required |
| sid | Session ID | string | Required |

{: .attn-note}
The **visitorId** and the **sid** parameters referenced above are retrieved from the Web Tag. Each visitor receives from the Tag their own **visitorId** (also called **vid**) and **sid** (also called **Session ID**) which you can then retrieve and pass to this API. For more information on these events, please see the Tag documentation [here](/lp-tag-engagement-window.html).

{: .attn-note}
**This method of retrieving the parameters is relevant to monitored sessions only**. If you’re trying to retrieve information on unmonitored sessions (for example, chat windows you built using our APIs and not the default Conversational Cloud window), you’ll need to use the [App Engagement API](/rt-interactions-app-engagement-overview.html) instead, specifically the Create Session method which returns both of these parameters.

#### Request example

```
https://lo.v.liveperson.net/api/account/12345678/monitoring/visitors/cyNGViYjc4MmU2MzEzZThm/visits/current/state?v=1&filter=agent&sid=qCsUrTldTh0UEWLjLCGqkQ
```

### Response

See [JSON example](#json-example).

#### Elements in the response

| Name | Description | Type/Value |
| :------ | :------- | :-------- |
| id | Monitoring session ID | String |
| engagements | Array of engagements displayed to the consumer | Array |
| pages | Array of the pages visited by the consumer | Array |
| userAgent | Consumer browser’s user agent | String |
| deviceOS | Consumer’s operating system | String |
| deviceFamily | Consumer’s device | String |
| lpv4 | Consumer’s IP| String |
| geo | Consumer’s Geo information (country, state, city etc.) | Object |
| externalReferrer | Referrer page | String |
| events | Engagement Attributes events reported during the session | Array |

#### Response codes

| Code | Internal code | Description |
| :------ | :------- | :-------- |
| 200 | — | OK; Operation performed successfully |
| 400 | 33 | Bad Request; problem with body or query parameters |
| 401 | 10 | Unauthorized (no permissions) |
| 404 | 6 | Invalid Account ID |
| 404 | 37 | Invalid Visitor ID |
| 404 | 39 | Invalid Session ID |
| 404 | 12 | Requested session not found; check if you are trying to access a session that started more than 6 hours ago |
| 500 | — | Internal Server Error |

#### JSON example

```json
{
  "id": "jnPABZYjQcOS2Uk5fp_HnA.c524460e4432e9f93cf700af590f16ef181f20e6",
  "appSessions": [
    {
      "engagements": [
        {
          "engagement": {
            "state": 1,
            "zoneId": 493911912,
            "pageId": "1899669462",
            "firstFollowMeEngagementContextId": null,
            "campaignControl": "TEST",
            "campaignEntity": {
              "revision": 232,
              "id": 554983412,
              "goalId": 554983512,
              "campaignEventSequence": null,
              "activeVPs": {
                "493914412": {
                  "revision": 7
                }
              }
            },
            "engagementEntity": {
              "revision": 193,
              "id": 555008112,
              "channel": 1,
              "type": 6,
              "isOffsiteEngagement": false,
              "activeVBs": {
                "493914512": {
                  "revision": 11
                }
              },
              "activeOSLs": {
                "493914612": {
                  "revision": 8
                }
              },
              "engagementSkill": {
                "skillName": "*!@NULL*!@",
                "skillId": -1
              },
              "surveySkills": [

              ],
              "availabilityPolicy": 0,
              "renderingType": 0,
              "conversationType": 0
            },
            "goalEntity": {
              "revision": 4,
              "id": 554983512,
              "type": 5,
              "indicatorType": 5
            }
          },
          "id": "1"
        },
        {
          "engagement": {
            "state": 1,
            "zoneId": 493911612,
            "pageId": "1899669462",
            "firstFollowMeEngagementContextId": null,
            "campaignControl": "TEST",
            "campaignEntity": {
              "revision": 232,
              "id": 554983412,
              "goalId": 554983512,
              "campaignEventSequence": null,
              "activeVPs": {
                "493914412": {
                  "revision": 7
                }
              }
            },
            "engagementEntity": {
              "revision": 193,
              "id": 555008212,
              "channel": 1,
              "type": 6,
              "isOffsiteEngagement": false,
              "activeVBs": {
                "493914512": {
                  "revision": 11
                }
              },
              "activeOSLs": {
                "493914612": {
                  "revision": 8
                }
              },
              "engagementSkill": {
                "skillName": "*!@NULL*!@",
                "skillId": -1
              },
              "surveySkills": [

              ],
              "availabilityPolicy": 0,
              "renderingType": 0,
              "conversationType": 0
            },
            "goalEntity": {
              "revision": 4,
              "id": 554983512,
              "type": 5,
              "indicatorType": 5
            }
          },
          "id": "2",
          "impressionAccepted": [
            {
              "activityTime": 1475675334770,
              "pageId": "1899669462"
            }
          ]
        }
      ],
      "personalInfo": {
        "personalInfo": {
          "name": "John",
          "surname": "Doe",
          "customerAge": {
            "customerAgeInYears": 34.0,
            "customerYearOfBirth": 1980,
            "customerMonthOfBirth": 4,
            "customerDateOfBirth": 15
          },
          "contacts": [
            {
              "email": "myname@example.com",
              "phone": "+1 212-788-8877"
            }
          ],
          "gender": "MALE",
          "company": "company",
          "language": null
        }
      },
      "revActiveVPs": {
        "493914412": {
          "revision": 7
        },
        "1249882912": {
          "revision": 7
        }
      },
      "serviceActivity": [
        {
          "topic": "order checkbook",
          "status": 0,
          "category": "finance",
          "serviceId": "service12",
          "serviceSeqId": "1",
          "repeatedServiceActivity": false
        }
      ],
      "revAllVPs": {
        "493914412": {
          "revision": 7
        },
        "1249882912": {
          "revision": 7
        }
      },
      "customerInfo": {
        "customerInfo": {
          "customerStatus": "cancelled",
          "customerType": "vip",
          "balance": -400.99,
          "customerId": "138766AC",
          "lastPaymentDate": {
            "year": 2014,
            "month": 10,
            "day": 15
          },
          "registrationDate": {
            "year": 2013,
            "month": 5,
            "day": 23
          },
          "loginStatus": null,
          "companyBranch": null,
          "socialId": null,
          "imei": null,
          "userName": null,
          "companySize": null,
          "accountName": null,
          "role": null,
          "storeZipCode": null,
          "storeNumber": null
        }
      },
      "mobileDeviceInfo": {
        "mobile": false,
        "detected": true
      },
      "revActiveVBs": {
        "493914512": {
          "revision": 11
        },
        "522493012": {
          "revision": 11
        }
      },
      "cart": {
        "cartStatus": {
          "total": 11.7,
          "numItems": 6,
          "products": [
            {
              "product": {
                "name": "prod1",
                "category": "category",
                "sku": "sku",
                "price": 7.8
              },
              "quantity": 1
            }
          ]
        },
        "lastTotalChange": 11.7
      },
      "geo": {
        "country": "Israel",
        "countryCode": "IL",
        "state": "Tel Aviv",
        "city": "Tel Aviv",
        "isp": "LivePerson",
        "org": "LivePerson"
      },
      "viewedProduct": [
        {
          "product": {
            "name": "red high heel shoe",
            "category": "women shoes",
            "sku": "xyz567",
            "price": 77.8
          }
        }
      ],
      "ipv4": "195.62.30.20",
      "startTime": 1475675316327,
      "id": "jnPABZYjQcOS2Uk5fp_HnA.c524460e4432e9f93cf700af590f16ef181f20e6",
      "revAllOSLs": {
        "493914612": {
          "revision": 8
        }
      },
      "visitorError": [
        {
          "contextId": null,
          "message": "Expiration date missing",
          "code": "er100004",
          "level": null,
          "resolved": null
        }
      ],
      "marketingCampaignInfo": {
        "marketingCampaignInfo": {
          "originatingChannel": 1,
          "affiliate": "Yahoo",
          "campaignId": "US coupon campaign"
        }
      },
      "searchEngine": {
        "searchEngine": "",
        "keywords": ""
      },
      "purchases": [
        {
          "repeatedOrderId": false,
          "purchaseSeqId": "1",
          "total": 11.7,
          "orderId": "DRV1534XC",
          "cart": {
            "total": null,
            "numItems": null,
            "products": [
              {
                "product": {
                  "name": "antivirus pro plan",
                  "category": "software",
                  "sku": "xyz001",
                  "price": 7.8
                },
                "quantity": 3
              }
            ]
          }
        }
      ],
      "deviceOS": "MAC_OSX",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
      "deviceFamily": "DESKTOP",
      "leads": [
        {
          "topic": "luxury car test drive 2015",
          "value": 22.22,
          "ticketId": null,
          "leadId": "xyz123",
          "leadSeqId": "1",
          "repeatedLeadId": false
        }
      ],
      "revAllVBs": {
        "493914512": {
          "revision": 11
        },
        "522493012": {
          "revision": 11
        }
      },
      "siteControlGroup": "NA",
      "externalReferrer": "",
      "pages": [
        {
          "referrer": null,
          "pageBasic": {
            "url": "https://testfile.com",
            "startTime": 1475675316326,
            "referrer": null,
            "title": "Test Page",
            "sections": null
          },
          "pageTitle": "Test Page",
          "revActiveOSLs": {
            "493914612": {
              "revision": 8
            }
          },
          "startTime": 1475675316326,
          "timeOnPage": 21482,
          "id": "1899669462",
          "pageLoaded": true,
          "url": "testfile.com"
        }
      ],
      "events": [
        {
          "marketingCampaignInfo": {
            "serverTimeStamp": 1475675316326,
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            },
            "marketingCampaignInfo": {
              "originatingChannel": 1,
              "affiliate": "Yahoo",
              "campaignId": "US coupon campaign"
            }
          }
        },
        {
          "lead": {
            "serverTimeStamp": 1475675316326,
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            },
            "lead": {
              "topic": "luxury car test drive 2015",
              "value": 22.22,
              "ticketId": null,
              "leadId": "xyz123"
            }
          }
        },
        {
          "cartStatus": {
            "serverTimeStamp": 1475675316326,
            "total": 11.7,
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            },
            "numItems": 6,
            "products": [
              {
                "product": {
                  "name": "prod1",
                  "category": "category",
                  "sku": "sku",
                  "price": 7.8
                },
                "quantity": 1
              }
            ]
          }
        },
        {
          "purchase": {
            "serverTimeStamp": 1475675316326,
            "total": 11.7,
            "orderId": "DRV1534XC",
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            },
            "cart": {
              "serverTimeStamp": 0,
              "total": null,
              "contexts": {

              },
              "numItems": null,
              "products": [
                {
                  "product": {
                    "name": "antivirus pro plan",
                    "category": "software",
                    "sku": "xyz001",
                    "price": 7.8
                  },
                  "quantity": 3
                }
              ]
            }
          }
        },
        {
          "viewedProduct": {
            "serverTimeStamp": 1475675316326,
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            },
            "products": [
              {
                "product": {
                  "name": "red high heel shoe",
                  "category": "women shoes",
                  "sku": "xyz567",
                  "price": 77.8
                }
              }
            ]
          }
        },
        {
          "customerInfo": {
            "serverTimeStamp": 1475675316326,
            "customerInfo": {
              "customerStatus": "cancelled",
              "customerType": "vip",
              "balance": -400.99,
              "customerId": "138766AC",
              "lastPaymentDate": {
                "year": 2014,
                "month": 10,
                "day": 15
              },
              "registrationDate": {
                "year": 2013,
                "month": 5,
                "day": 23
              },
              "loginStatus": null,
              "companyBranch": null,
              "socialId": null,
              "imei": null,
              "userName": null,
              "companySize": null,
              "accountName": null,
              "role": null,
              "storeZipCode": null,
              "storeNumber": null
            },
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            }
          }
        },
        {
          "personalInfo": {
            "serverTimeStamp": 1475675316326,
            "personalInfo": {
              "name": "John",
              "surname": "Doe",
              "customerAge": {
                "customerAgeInYears": 34.0,
                "customerYearOfBirth": 1980,
                "customerMonthOfBirth": 4,
                "customerDateOfBirth": 15
              },
              "contacts": [
                {
                  "email": "myname@example.com",
                  "phone": "+1 212-788-8877"
                }
              ],
              "gender": "MALE",
              "company": "company",
              "language": null
            },
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            }
          }
        },
        {
          "serviceActivity": {
            "serverTimeStamp": 1475675316326,
            "serviceActivity": {
              "topic": "order checkbook",
              "status": 0,
              "category": "finance",
              "serviceId": "service12"
            },
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            }
          }
        },
        {
          "visitorError": {
            "serverTimeStamp": 1475675316326,
            "contexts": {
              "page": {
                "id": "1899669462"
              }
            },
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
  ]
}
```