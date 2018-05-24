---
title: Methods
level1: Documents
level2: Data
level3: Engagement History API

order: 2
permalink: data-engagement-history-methods.html
indicator: chat
---

The LiveEngage Engagement History API includes one method, Retrieve Engagement List by Criteria.

### Retrieve Engagement List by Criteria

This returns a list of engagements with all their metadata and related transcripts, based on a given filter, for example, time range, skill/s, keywords, etc.

## Request

| Method | URL |
| :------- | :---------- |
| POST | `https://<domain>/interaction_history/api/account/{accountID}/interactions/search?<url_parameters>` |

**URL Parameters**

| Name | Description | Type / Value | Required | Notes |
| :----- | :--------- | :--------- | :--- | :--- |
| offset | The offset from where to retrieve the chat. | numeric | Optional | Default is 0.  |
| limit | Max chats to be received in the response.  | numeric | Optional | Default is 50. Max value is 100. The remaining chats can be obtained using pagination (using offset, in a subsequent request). |
| sort | Sort the results in a predefined order. | string | Optional | Example: start:des will order chats by descending value of the start time. start:asc,duration:desc will orders chat by ascending value of start time AND then by descending value of duration. <br> Valid values: "start", "end", "duration", "visitor", "engagementId", "interactive", "visitor", "agentId", "skillId"(multiple values are valid). Order:[asc/des] |

**BODY/POST Parameters**

Filter is sent in the POST data with the following JSON structure.

| Name | Description | Type / Value | Required | Notes |
| :---- | :------- | :--------- | :--- | :--- |
| start {from, to} | Chat timeframe. | long - epoch time in milliseconds. | Required | From/to value is rounded to the last/next round 10 minutes respectively. The maximum time interval is one month. Larger intervals will be rejected. The limitation applies when searching by specific visitor ID, engagement ID. |
| keyword_search_area | Area of keyword lookup. | | Required | Valid values: chatLine, surveyAnswer, surveyQuestion, visitorInfo, ea.purchase, ea.viewedProduct, ea.cartStatus, ea.serviceActivity, ea.visitorError, ea.lead, ea.customerInfo, ea.marketingCampaignInfo, ea.personalInfo, mcs |
| skillIds | An array of skill IDs represented as numbers. | `Array<skillID>` | Optional | |
| agentIds | An array of agent IDs represented as numbers. | `Array<agentID>` | Optional | |
| agentGroupIds | An array of agent group IDs represented as numbers. | `Array<agentGroupID>` | optional | |
| duration {from, to} | Range of engagement length in seconds. | numeric, numeric | Optional | If passed, then from and to are both mandatory. |
| interactive | True or false. | Boolean | Optional | Only interactive=true is supported |
| keyword | Keyword or phrases to search in the selected areas. | alphanumeric | Optional | In order to search for a phrase, wrap the phrase with quotation marks. Multiple phrases are not supported. |
| visitor | Visitor ID. | alphanumeric | Optional | When used, all time limitations are ignored. |
| channel | Engagement channel ID. | Integer representing one of the following options: UNKNOWN(-1)WEB(1), VOICE(2); | Optional | |
| engagementId | Engagement ID. | numeric | Optional | When used, all time limitations are ignored. The format should be the account id + chat id (same as the engagementId returned in the response). |
| alertedMcsValues | Alerted MCS of the chat. | Array `<alertedMCS>` | Optional | Valid values: "-1", "0", "1" |
| chatMCS {from,to} | Range of Meaningful Connection Score in a particular chat (including the boundaries).  | numeric, numeric| Optional | Either “from” or “to” fields are mandatory. In case one of the fields is missing, its value will be set to the minimal or maximal possible values of MCS, respectively. |
| hasCoBrowse | Indication whether a CoBrowse session occurred during the chat | Boolean | Optional |  |
| hasInteractiveCoBrowse | Indication whether an interactive CoBrowse session occurred during the chat | Boolean | Optional |  |
| coBrowseDuration {from,to} | Range of CoBrowse session duration in seconds | numeric, numeric| Optional | If passed, then from and to are both mandatory. |
| lineContentTypes | The type of the chat line | Array `<String>` | Optional | Valid values: RICH_CONTENT


**Request Example 1:**

Simple Chat Search by time range

In the example below, we ask for chats that occurred between the 1st of June and the 30th of June 2015.

```json
    {
      "interactive": true,
      "ended": true,
      "start": {
        "from": 1433140200000,
        "to": 1435645800000
      }
    }
```

**Request Example 2:**

Keyword Search: Chat Search by time range and keyword

In the example below, we ask for chats that occurred between the 1st of June and the 30th of June 2015, which contain the word 'iPad’ within the text available for lookup.


```json
    {
            "interactive":true,
            "ended":true,
            "start":{
                 "from":1433140200000,"to":1435645800000
             },
       	   “keyword”: “ipad”,
       "keyword_search_area": {
           "types": [
               "chatLine",
               "surveyAnswer",
               "surveyQuestion",
               "ea.purchase",
               "ea.viewedProduct",
               "ea.cartStatus",
               "ea.serviceActivity",
               "ea.visitorError",
               "ea.lead",
               "ea.customerInfo",
               "ea.marketingCampaignInfo",
               "ea.personalInfo"
           ]
       }
    }
```


**Request example 3:**

In this example, we reduce the previous search, and require that the skill matches the skill IDs {14, 17, 18} that were conducted by agentID 109 or 169, where the duration was between 0 and 180 seconds, and focus only on the transcript.  


```json
    {
       "interactive": true,
       "ended": true,
       "start": {
           "from": 1437054059354,
           "to": 1437661693023
       },
       "skillIds": [
           "14",
           "17",
           "18"
       ],
       "agentIds": [
           "109",
           "169"
       ],
       "duration": {
           "from": 0,
           "to": 180
       },
       "keyword": "ipad",
    "keyword_search_area": {"types": ["chatLine" ] }
    }
```

**Request example 4:**

Chat Search by time range and MCS.

In this example, we are searching for chats that have a positive MCS.


```json
     {
        "interactive": true,
        "ended": true,
        "start": {
            "from": 1437054059354,
            "to": 1437661693023
        },
        "keyword_search_area": {"types": ["mcs"]},"mcs": 1
    }
```

## Response

Example:

```json
    {
     "_metadata": {
       "count": 9870,
       "next": {
         "rel": "next",
         "href": "http://localhost:8080/interaction_history/api/account/qa84481505/interactions/search?limit=50&offset=50"
       },
       "last": {
         "rel": "last",
         "href": "http://localhost:8080/interaction_history/api/account/qa84481505/interactions/search?limit=50&offset=9850"
       },
       "self": {
         "rel": "self",
         "href": "http://localhost:8080/interaction_history/api/account/qa84481505/interactions/search?limit=50&offset=0"
       },
       "shardsStatusResult": {
         "failureShards": 0,
         "totalShards": 6,
         "partialResult": false
       }
     },
     "interactionHistoryRecords": [
       {
         "info": {
           "startTime": "2015-05-28 04:46:23.209+0000",
           "startTimeL": 1432788383209,
           "endTime": "2015-05-28 04:46:23.410+0000",
           "endTimeL": 1432788383410,
           "duration": 0,
           "visitorId": "ozimnjlwddrzbhnfhjkdao",
           "visitorName": "Joe",
           "engagementId": "qa844815054294982965",
           "isInteractive": true,
           "accountId": "qa84481505",
           "agentId": "3",
           "agentName": "Greg",
           "agentLoginName": "greg@liveperson.com",
           "skillId": -1,
           "skillName": "marketing",
           "channel": 1,
           "startReason": "0",
           "startReasonDesc": "Visitor request",
           "endReason": "210",
           "endReasonDesc": "Visitor closed chat",
           "engagementSet": 0,
           "engagementSequence": 0,
           "agentGroupId": -1,
           "agentGroupName": "NA",
           "mcs": null,
           "ended": true,
           "chatDataEnriched": false,
         },
         "transcript": {
           "lines": [
             {
               "time": "2015-05-28 04:46:19.147+0000",
               "timeL": 1432788379147,
               "controlType": 4,
               "text": "Thank you for choosing to chat with us.  An agent will be with you shortly.",
               "by": "info",
               "source": "system",
               "subType": "REGULAR",
               "textType": "plain",
               "cannedAnswerType": 0,
               "lineSeq": "78"
             },
             {
               "time": "2015-05-28 04:46:23.176+0000",
               "timeL": 1432788383176,
               "controlType": 3,
               "text": "You are now chatting with hotopic@liveperson.com",
               "by": "info",
               "source": "system",
               "subType": "REGULAR",
               "textType": "plain",
               "cannedAnswerType": 0,
               "lineSeq": "80"
             },
             {
               "time": "2015-05-28 04:46:23.411+0000",
               "timeL": 1432788383411,
               "controlType": 5,
               "text": "Thank you for chatting with us.",
               "by": "info",
               "source": "system",
               "subType": "REGULAR",
               "textType": "plain",
               "cannedAnswerType": 0,
               "lineSeq": "81"
             }
           ]
         },
         "lineScores": [
        {
          "lineSeq": "78",
          "lineRawScore": 0,
          "mcs": 0
        },
        {
          "lineSeq": "80",
          "lineRawScore": 0,
          "mcs": 0
        },
        {
          "lineSeq": "81",
          "lineRawScore": 0,
          "mcs": 0
        },
      ]
         "campaign":{
           "campaignEngagementId": "1759631410",
           "campaignEngagementName": "Dummy1",
           "campaignId": "1340122410",
           "campaignName": "Live Chat on your site",
           "goalId": "1340122310",
           "goalName": "Interact with visitors",
           "visitorBehaviorId": "1340122110",
           "visitorBehaviorName": "Any behavior",
           "visitorProfileId": "1340122010",
           "visitorProfileName": "All visitors"
           "lobId": "-1",
           "lobName": "NA"
         },
        "visitorInfo": {
          "country": "United States",
          "state": "California",
          "city": "San Jose",
          "isp": "Comcast",
          "org": "Amazon",
          "device": "DESKTOP",
          "ipAddress": "192.168.13.209",
          "browser": "Chrome 47.0.2526.111",
          "operatingSystem": "WINDOWS"
        },
        "coBrowseSessions": {
            "coBrowseSessionsList": [
              {
                "sessionId": "ffc41057-70fe-4a10-ab3e-6065a89dac64",
                "startTime": "2017-03-02 10:16:39.842+0000",
                "startTimeL": 1488449799842,
                "endTime": "2017-03-02 10:16:39.842+0000",
                "endTimeL": 1488449799842,
                "endReason": "SERVER",
                "duration": 29873,
                "interactive": false
              },
              {
                "sessionId": "d44796ae-4f3e-4b20-a2c8-eba5a4f20928",
                "startTime": "2017-03-02 10:24:51.510+0000",
                "startTimeL": 1488450291510,
                "endTime": "2017-03-02 10:24:51.510+0000",
                "endTimeL": 1488450291510,
                "interactiveTime": "2017-03-02 10:18:07.634+0000",
                "interactiveTimeL": 1488449887634,
                "endReason": "SERVER",
                "duration": 485279,
                "interactive": true
              }
            ]
          },
         "sdes": {
           "events": [
             {
               "cartStatus": {
                 "serverTimeStamp": "1435764972045",
                 "total": "11.7",
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
             },
             {
               "customerInfo": {
                 "serverTimeStamp": "1436258709564",
                 "customerInfo": {
                   "customerStatus": "cancelled",
                   "customerType": "vip",
                   "balance": "-400.99",
                   "customerId": "138766AC",
                   "lastPaymentDate": {
                     "year": "2014",
                     "month": "10",
                     "day": "15"
                   },
                   "registrationDate": {
                     "year": "2013",
                     "month": "5",
                     "day": "23"
                   }
                 }
               }
             },
             {
               "lead": {
                 "lead": {
                   "topic": "luxury car test drive 2015",
                   "value": "22.22",
                   "leadId": "xyz123"
                 },
                 "serverTimeStamp": "1435780135906"
               }
             },
             {
               "marketingCampaignInfo": {
                 "serverTimeStamp": "1436703809351",
                 "marketingCampaignInfo": {
                   "originatingChannel": "1",
                   "affiliate": "Yahoo",
                   "campaignId": "US coupon campaign"
                 }
               }
             },
             {
               "personalInfo": {
                 "serverTimeStamp": "1436436923641",
                 "name": "ELI",
                 "surname": "leibovitz",
                 "gender": "MALE",
                 "company": "company",
                 "customerAge": {
                   "customerAgeInYears": "35.0",
                   "customerYearOfBirth": "1978",
                   "customerMonthOfBirth": "7",
                   "customerDateOfBirth": "25"
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
             },
             {
               "purchase": {
                 "total": "11.7",
                 "serverTimeStamp": "1434394476705",
                 "cart": {
                   "total": "17.8",
                   "serverTimeStamp": null,
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
             },
             {
               "serviceActivity": {
                 "serverTimeStamp": "1435780135922",
                 "serviceActivity": {
                   "topic": "order checkbook",
                   "status": "0",
                   "category": "finance",
                   "serviceId": "service12"
                 }
               }
             },
             {
               "viewProduct": {
                 "serverTimeStamp": "1434394466093",
                 "products": [
                   {
                     "quantity": null,
                     "product": {
                       "name": "red high heel shoe",
                       "category": "women shoes",
                       "sku": "xyz567",
                       "price": "77.8"
                     }
                   }
                 ]
               }
             },
             {
               "formFillingError": {
                 "serverTimeStamp": "1435764972047",
                 "visitorError": {
                   "contextId": "context.id",
                   "message": {
                     "string": "Expiration date missing"
                   },
                   "code": {
                     "string": "er100004"
                   },
                   "level": "2",
                   "resolved": "true"
                 }
               }
             }
           ]
         }
       }
     ]
    }
```


**Request example 5:**

Chat Search by time range and chatMCS.

In this example, we are searching for chats that have mcs between 30 to 60.


```json
     {
        "interactive": true,
        "ended": true,
        "start": {
            "from": 1437054059354,
            "to": 1437661693023
        },
        "chatMCS": {"from":"30", "to": "60"}
    }
```

## Response


```json
    {
      "_metadata": {
        "count": 1,
        "self": {
          "rel": "self",
          "href": "https://localhost:8080/api/account/qa35931557/interactions/search?limit=50&offset=0"
        },
        "shardsStatusResult": {
          "partialResult": false
        }
      },
      "interactionHistoryRecords": [
        {
          "info": {
            "startTime": "2017-02-01 17:11:59.916+0000",
            "startTimeL": 1485969119916,
            "endTime": "2017-02-01 17:26:47.735+0000",
            "endTimeL": 1485970007735,
            "duration": 887,
            "visitorId": "UwYzRjYzJhMzQ0YTRlYzcz",
            "visitorName": "You",
            "engagementId": "qa359315574294967901",
            "sharkEngagementId": "qa35931557_xMzD21hMRaOLuOl27h9yaw_1",
            "isInteractive": true,
            "accountId": "qa35931557",
            "agentId": "213185812",
            "agentNickName": "liorr@liveperson.com",
            "agentLoginName": "liorr@liveperson.com",
            "agentFullName": "liorr@liveperson.com",
            "skillId": -1,
            "skillName": "Unassigned",
            "isAgentSurvey": false,
            "isPostChatSurvey": false,
            "isPreChatSurvey": false,
            "channel": 1,
            "startReason": "0",
            "startReasonDesc": "Visitor request",
            "endReason": "201",
            "endReasonDesc": "Rep stopped chat",
            "engagementSet": 0,
            "engagementSequence": 0,
            "agentGroupId": -1,
            "agentGroupName": "Main Group",
            "mcs": 1,
            "chatMCS": 60,
            "chatRequestedTime": "2017-02-01 17:11:55.781+0000",
            "chatRequestedTimeL": 1485969115781,
            "chatStartUrl": "http://hc1d.dev.lprnd.net/smt.jsp?siteid=qa35931557",
            "chatStartPage": "LE 2.0 Test Page",
            "isPartial": false,
            "interactive": true,
            "ended": true,
            "chatDataEnriched": false
          },
          "transcript": {
            "lines": [
              {
                "time": "2017-02-01 17:11:55.981+0000",
                "timeL": 1485969115981,
                "controlType": 4,
                "text": "Thank you for choosing to chat with us.  An agent will be with you shortly.",
                "by": "info",
                "source": "system",
                "subType": "REGULAR",
                "textType": "plain",
                "cannedAnswerType": 0,
                "agentId": 0
              },
              {
                "time": "2017-02-01 17:11:59.913+0000",
                "timeL": 1485969119913,
                "controlType": 3,
                "text": "You are now chatting with liorr@liveperson.com.",
                "by": "info",
                "source": "system",
                "subType": "REGULAR",
                "textType": "plain",
                "cannedAnswerType": 0,
                "agentId": 0
              },
              {
                "time": "2017-02-01 17:12:03.246+0000",
                "timeL": 1485969123246,
                "controlType": 0,
                "text": "hello",
                "by": "liorr@liveperson.com",
                "source": "agent",
                "subType": "REGULAR",
                "textType": "html",
                "cannedAnswerType": 0,
                "agentId": 213185812
              },
              {
                "time": "2017-02-01 17:12:16.179+0000",
                "timeL": 1485969136179,
                "controlType": 0,
                "text": "I love your service",
                "by": "You",
                "source": "visitor",
                "subType": "REGULAR",
                "textType": "plain",
                "cannedAnswerType": 0,
                "agentId": 0
              },
              {
                "time": "2017-02-01 17:13:11.491+0000",
                "timeL": 1485969191491,
                "controlType": 0,
                "text": "I love your service very much",
                "by": "You",
                "source": "visitor",
                "subType": "REGULAR",
                "textType": "plain",
                "cannedAnswerType": 0,
                "agentId": 0
              },
              {
                "time": "2017-02-01 17:16:11.501+0000",
                "timeL": 1485969371501,
                "controlType": 0,
                "text": "I'm sorry for the delay. I'll be right with you.",
                "by": "liorr@liveperson.com",
                "source": "agent",
                "subType": "REGULAR",
                "textType": "plain",
                "cannedAnswerType": 0,
                "agentId": 213185812
              },
              {
                "time": "2017-02-01 17:19:11.502+0000",
                "timeL": 1485969551502,
                "controlType": 0,
                "text": "Thank you for waiting. I'll be with you in just a moment.",
                "by": "liorr@liveperson.com",
                "source": "agent",
                "subType": "REGULAR",
                "textType": "plain",
                "cannedAnswerType": 0,
                "agentId": 213185812
              },
              {
                "time": "2017-02-01 17:19:13.252+0000",
                "timeL": 1485969553252,
                "controlType": 0,
                "json": {
                    "type": "vertical",
                    "elements": [{
                        "type": "image",
                        "url": "http://cdn.bgr.com/2016/08/iphone-8-concept.jpg",
                        "tooltip": "image tooltip",
                        "click": {
                            "actions": [{
                                "type": "navigate",
                                "id": "98446950-2f54-4594-b89b-1d60a9fdda49",
                                "name": "Navigate to store via image",
                                "lo": 23423423,
                                "la": 2423423423
                            }]
                        }
                    }, {
                        "type": "text",
                        "text": "IPhone 8",
                        "tooltip": "brand new iphone 8",
                        "style": {
                            "bold": true,
                            "size": "large"
                        }
                    }, {
                        "type": "text",
                        "text": "Now on sale!"
                    }, {
                        "type": "text",
                        "text": "$155.99",
                        "tooltip": "155.99"
                    }, {
                        "type": "button",
                        "title": "Add to cart",
                        "click": {
                            "actions": [{
                                "type": "link",
                                "id": "febf3237-f7d9-44bc-a17f-fc8abdfb0f25",
                                "name": "add to cart",
                                "uri": "http://www.google.com"
                            }]
                        }
                    }, {
                        "type": "horizontal",
                        "elements": [{
                            "type": "button",
                            "title": "Buy",
                            "tooltip": "store is the thing",
                            "click": {
                                "actions": [{
                                    "type": "navigate",
                                    "id": "98446950-2f54-4594-b89b-1d60a9fdda49",
                                    "name": "Navigate to store",
                                    "lo": 23423423,
                                    "la": 2423423423
                                }]
                            }
                        }, {
                            "type": "button",
                            "title": "Find",
                            "tooltip": "store is the thing",
                            "click": {
                                "actions": [{
                                    "type": "navigate",
                                    "id": "98446950-2f54-4594-b89b-1d60a9fdda49",
                                    "name": "Navigate to store",
                                    "lo": 23423423,
                                    "la": 2423423423
                                }]
                            }
                        }]
                    }, {
                        "type": "button",
                        "title": "Navigate to store",
                        "tooltip": "store is the thing",
                        "click": {
                            "actions": [{
                                "type": "navigate",
                                "id": "98446950-2f54-4594-b89b-1d60a9fdda49",
                                "name": "Navigate to store",
                                "lo": 23423423,
                                "la": 2423423423
                            }]
                        }
                    }, {
                        "type": "button",
                        "title": "More details",
                        "click": {
                            "actions": [{
                                "type": "link",
                                "id": "15ffab70-de0e-42df-9576-290c2249aa24",
                                "uri": "http://www.google.com",
                                "name": "open browser"
                            }]
                        }
                    }]
                },
                "by": "liorr@liveperson.com",
                "source": "agent",
                "subType": "REGULAR",
                "textType": "rich-content",
                "cannedAnswerType": 0,
                "agentId": 213185812
              },
              {
                "time": "2017-02-01 17:20:45.197+0000",
                "timeL": 1485969645197,
                "controlType": 0,
                "text": "fgdfdf",
                "by": "liorr@liveperson.com",
                "source": "agent",
                "subType": "REGULAR",
                "textType": "html",
                "cannedAnswerType": 0,
                "agentId": 213185812
              },
              {
                "time": "2017-02-01 17:26:47.735+0000",
                "timeL": 1485970007735,
                "controlType": 5,
                "text": "Thank you for chatting with us.",
                "by": "info",
                "source": "system",
                "subType": "REGULAR",
                "textType": "plain",
                "cannedAnswerType": 0,
                "agentId": 0
              }
            ]
          },
          "campaign": {
            "campaignEngagementId": "213185212",
            "campaignEngagementName": "Sticky chat button",
            "campaignId": "213185112",
            "campaignName": "Live Chat on your site",
            "goalId": "213184812",
            "goalName": "Interact with visitors",
            "visitorBehaviorId": "213184912",
            "visitorBehaviorName": "Any behavior",
            "visitorProfileId": "213184712",
            "visitorProfileName": "All visitors",
            "lobId": -1,
            "lobName": "NA"
          },
          "visitorInfo": {
            "country": "",
            "countryCode": "",
            "state": "",
            "city": "",
            "isp": "",
            "org": "",
            "device": "DESKTOP",
            "ipAddress": "192.168.20.237",
            "browser": "Chrome 49.0.2623.87",
            "operatingSystem": "MAC_OSX"
          },
          "coBrowseSessions": {
                  "coBrowseSessionsList": [
                    {
                      "sessionId": "ffc41057-70fe-4a10-ab3e-6065a89dac64",
                      "startTime": "2017-03-02 10:16:39.842+0000",
                      "startTimeL": 1488449799842,
                      "endTime": "2017-03-02 10:16:39.842+0000",
                      "endTimeL": 1488449799842,
                      "endReason": "SERVER",
                      "duration": 29873,
                      "interactive": false
                    },
                    {
                      "sessionId": "d44796ae-4f3e-4b20-a2c8-eba5a4f20928",
                      "startTime": "2017-03-02 10:24:51.510+0000",
                      "startTimeL": 1488450291510,
                      "endTime": "2017-03-02 10:24:51.510+0000",
                      "endTimeL": 1488450291510,
                      "interactiveTime": "2017-03-02 10:18:07.634+0000",
                      "interactiveTimeL": 1488449887634,
                      "endReason": "SERVER",
                      "duration": 485279,
                      "interactive": true
                    }
                  ]
                },
          "sdes": {
            "events": [
              {
                "purchase": {
                  "total": "77.0",
                  "currency": null,
                  "serverTimeStamp": "1485969113673",
                  "cart": {
                    "total": null,
                    "serverTimeStamp": null,
                    "products": [

                    ],
                    "numItems": null
                  },
                  "orderId": "Test123"
                },
                "serverTimeStamp": "1485969113673",
                "sdeType": "PURCHASE",
                "isAuthenticated": false
              },
              {
                "purchase": {
                  "total": "77.0",
                  "currency": null,
                  "serverTimeStamp": "1485970063032",
                  "cart": {
                    "total": null,
                    "serverTimeStamp": null,
                    "products": [

                    ],
                    "numItems": null
                  },
                  "orderId": "Test123"
                },
                "serverTimeStamp": "1485970063032",
                "sdeType": "PURCHASE",
                "isAuthenticated": false
              }
            ]
          }
        }
      ]
    }
```

**Request example 6:**

Chat Search by time range and alertedMCS.

In this example, we are searching for chats that have a positive MCS.

```json
    {
      "start": {
        "from": "1485330205108",
        "to": "1485942798000"
      },
      "alertedMcsValues": [
        "1"
      ]
    }
```


## Response

Example:


```json
   {
	"_metadata": {
		"count": 1,
		"self": {
			"rel": "self",
			"href": "https://localhost:8080/api/account/qa35931557/interactions/search?limit=50&offset=0"
		},
		"shardsStatusResult": {
			"partialResult": false
		}
	},
	"interactionHistoryRecords": [
		{
			"info": {
				"startTime": "2017-02-01 17:11:59.916+0000",
				"startTimeL": 1485969119916,
				"endTime": "2017-02-01 17:26:47.735+0000",
				"endTimeL": 1485970007735,
				"duration": 887,
				"visitorId": "UwYzRjYzJhMzQ0YTRlYzcz",
				"visitorName": "You",
				"engagementId": "qa359315574294967901",
				"sharkEngagementId": "qa35931557_xMzD21hMRaOLuOl27h9yaw_1",
				"isInteractive": true,
				"accountId": "qa35931557",
				"agentId": "213185812",
				"agentNickName": "liorr@liveperson.com",
				"agentLoginName": "liorr@liveperson.com",
				"agentFullName": "liorr@liveperson.com",
				"skillId": -1,
				"skillName": "Unassigned",
				"isAgentSurvey": false,
				"isPostChatSurvey": true,
				"isPreChatSurvey": true,
				"channel": 1,
				"startReason": "0",
				"startReasonDesc": "Visitor request",
				"endReason": "201",
				"endReasonDesc": "Rep stopped chat",
				"engagementSet": 0,
				"engagementSequence": 0,
				"agentGroupId": -1,
				"agentGroupName": "Main Group",
				"mcs": 1,
				"alertedMCS": 1,
				"chatMCS": 60,
				"chatRequestedTime": "2017-02-01 17:11:55.781+0000",
				"chatRequestedTimeL": 1485969115781,
				"chatStartUrl": "http://hc1d.dev.lprnd.net/smt.jsp?siteid=qa35931557",
				"chatStartPage": "LE 2.0 Test Page",
				"isPartial": false,
				"ended": true,
				"interactive": true,
				"chatDataEnriched": false
			},
			"transcript": {
				"lines": [
					{
						"time": "2017-02-01 17:11:55.981+0000",
						"timeL": 1485969115981,
						"controlType": 4,
						"text": "Thank you for choosing to chat with us.  An agent will be with you shortly.",
						"by": "info",
						"source": "system",
						"subType": "REGULAR",
						"textType": "plain",
						"cannedAnswerType": 0,
						"agentId": 0
					},
					{
						"time": "2017-02-01 17:11:59.913+0000",
						"timeL": 1485969119913,
						"controlType": 3,
						"text": "You are now chatting with liorr@liveperson.com.",
						"by": "info",
						"source": "system",
						"subType": "REGULAR",
						"textType": "plain",
						"cannedAnswerType": 0,
						"agentId": 0
					},
					{
						"time": "2017-02-01 17:12:03.246+0000",
						"timeL": 1485969123246,
						"controlType": 0,
						"text": "hello",
						"by": "liorr@liveperson.com",
						"source": "agent",
						"subType": "REGULAR",
						"textType": "html",
						"cannedAnswerType": 0,
						"agentId": 213185812
					},
					{
						"time": "2017-02-01 17:12:16.179+0000",
						"timeL": 1485969136179,
						"controlType": 0,
						"text": "I love your service",
						"by": "You",
						"source": "visitor",
						"subType": "REGULAR",
						"textType": "plain",
						"cannedAnswerType": 0,
						"agentId": 0
					},
					{
						"time": "2017-02-01 17:13:11.491+0000",
						"timeL": 1485969191491,
						"controlType": 0,
						"text": "I love your service very much",
						"by": "You",
						"source": "visitor",
						"subType": "REGULAR",
						"textType": "plain",
						"cannedAnswerType": 0,
						"agentId": 0
					},
					{
						"time": "2017-02-01 17:16:11.501+0000",
						"timeL": 1485969371501,
						"controlType": 0,
						"text": "I'm sorry for the delay. I'll be right with you.",
						"by": "liorr@liveperson.com",
						"source": "agent",
						"subType": "REGULAR",
						"textType": "plain",
						"cannedAnswerType": 0,
						"agentId": 213185812
					},
					{
						"time": "2017-02-01 17:19:11.502+0000",
						"timeL": 1485969551502,
						"controlType": 0,
						"text": "Thank you for waiting. I'll be with you in just a moment.",
						"by": "liorr@liveperson.com",
						"source": "agent",
						"subType": "REGULAR",
						"textType": "plain",
						"cannedAnswerType": 0,
						"agentId": 213185812
					},
					{
						"time": "2017-02-01 17:20:45.197+0000",
						"timeL": 1485969645197,
						"controlType": 0,
						"text": "fgdfdf",
						"by": "liorr@liveperson.com",
						"source": "agent",
						"subType": "REGULAR",
						"textType": "html",
						"cannedAnswerType": 0,
						"agentId": 213185812
					},
					{
						"time": "2017-02-01 17:26:47.735+0000",
						"timeL": 1485970007735,
						"controlType": 5,
						"text": "Thank you for chatting with us.",
						"by": "info",
						"source": "system",
						"subType": "REGULAR",
						"textType": "plain",
						"cannedAnswerType": 0,
						"agentId": 0
					}
				]
			},
			"surveys": {
				"preChat": [
					{
						"scope": "Session",
						"source": "Pre-Chat",
						"displayName": "Name",
						"value": "Irena",
						"values": [
							"Irena"
						],
						"name": "Pre-Chat Survey",
						"time": "2017-02-01 17:11:55.700+0000",
						"timeL": 1485969115981,
						"questionID": 1,
						"surveyID": 195991
					},
					{
						"scope": "Session",
						"source": "Pre-Chat",
						"displayName": "Email",
						"value": "irena@gmail.com",
						"values": [
							"irena@gmail.com"
						],
						"name": "Pre-Chat Survey ",
						"time": "2017-02-01 17:11:55.700+0000",
						"timeL": 1485969115981,
						"questionID": 2,
						"surveyID": 195991
					}
				],
				"postChat": [
					{
						"scope": "Session",
						"source": "Exit",
						"displayName": "How was the visit ?",
						"value": "It was good",
						"values": [
							"It was good"
						],
						"name": "Post-chat Survey v2 (All Channels)",
						"time": "2017-02-01 17:26:55.700+0000",
						"timeL": 1485969115981,
						"questionID": 9,
						"surveyID": 222726
					},
					{
						"scope": "Session",
						"source": "Exit",
						"displayName": "Will you recommentd us ?",
						"value": "Yes",
						"values": [
							"Yes"
						],
						"name": "Post-chat Survey v2 (All Channels)",
						"time": "2018-02-07 17:26:55.429+0000",
						"timeL": 1485969115981,
						"questionID": 14,
						"surveyID": 222726
					}
				]
			},
			"campaign": {
				"campaignEngagementId": "213185212",
				"campaignEngagementName": "Sticky chat button",
				"campaignId": "213185112",
				"campaignName": "Live Chat on your site",
				"goalId": "213184812",
				"goalName": "Interact with visitors",
				"visitorBehaviorId": "213184912",
				"visitorBehaviorName": "Any behavior",
				"visitorProfileId": "213184712",
				"visitorProfileName": "All visitors",
				"lobId": -1,
				"lobName": "NA"
			},
			"visitorInfo": {
				"country": "",
				"countryCode": "",
				"state": "",
				"city": "",
				"isp": "",
				"org": "",
				"device": "DESKTOP",
				"ipAddress": "192.168.20.237",
				"browser": "Chrome 49.0.2623.87",
				"operatingSystem": "MAC_OSX"
			},
			"coBrowseSessions": {
				"coBrowseSessionsList": [
					{
						"sessionId": "ffc41057-70fe-4a10-ab3e-6065a89dac64",
						"startTime": "2017-03-02 10:16:39.842+0000",
						"startTimeL": 1488449799842,
						"endTime": "2017-03-02 10:16:39.842+0000",
						"endTimeL": 1488449799842,
						"endReason": "SERVER",
						"duration": 29873,
						"interactive": false
					},
					{
						"sessionId": "d44796ae-4f3e-4b20-a2c8-eba5a4f20928",
						"startTime": "2017-03-02 10:24:51.510+0000",
						"startTimeL": 1488450291510,
						"endTime": "2017-03-02 10:24:51.510+0000",
						"endTimeL": 1488450291510,
						"interactiveTime": "2017-03-02 10:18:07.634+0000",
						"interactiveTimeL": 1488449887634,
						"endReason": "SERVER",
						"duration": 485279,
						"interactive": true
					}
				]
			},
			"sdes": {
				"events": [
					{
						"purchase": {
							"total": "77.0",
							"currency": null,
							"serverTimeStamp": "1485969113673",
							"cart": {
								"total": null,
								"serverTimeStamp": null,
								"products": [],
								"numItems": null
							},
							"orderId": "Test123"
						},
						"isAuthenticated": false,
						"serverTimeStamp": "1485969113673",
						"sdeType": "PURCHASE"
					},
					{
						"purchase": {
							"total": "77.0",
							"currency": null,
							"serverTimeStamp": "1485970063032",
							"cart": {
								"total": null,
								"serverTimeStamp": null,
								"products": [],
								"numItems": null
							},
							"orderId": "Test123"
						},
						"isAuthenticated": false,
						"serverTimeStamp": "1485970063032",
						"sdeType": "PURCHASE"
					}
				]
			}
		}
	]
}
```

**Elements in the Response**

| Name | Description | Type / Value | Notes |
| :----- | :-------- | :----------- | :--- |
| _metadata | Metadata about the whole response. | container | |
| rel | Name of a link to be used in the next request. | alphanumeric (256) | |
| href | A specific link to be used in the next request. | alphanumeric (256) | |
| count | Number of sessions for the current query/filter. | numeric | |
| info | Information about a specific chat. | container | |
| isInteractive | The chat was interactive (at least one visitor line). | Boolean | |
| engagementId | Real-time Session ID that represents the chat. | alphanumeric (256) | This Id is the accountID combined with the real time ID. |
| sharkEngagementId | *ID for internal use only* | alphanumeric (256) | |
| chatRequestedTime | The timestamp of the visitor’s first request to chat. Also, the time that the visitor entered the queue. | alphanumeric | Format: yyyy-MM-ddThh:mm:ss.SSS+timezone |
| chatRequestedTimeL | The timestamp of the visitor’s first request to chat. Also, the time that the visitor entered the queue. | long - numeric | |
| startTime | Engagement start time. | alphanumeric | Format: yyyy-MM-ddThh:mm:ss.SSS+timezone |
| startTimeL | Engagement start time (in UTC) | long - numeric | |
| endTime | Engagement end time | alphanumeric  | Format: yyyy-MM-ddThh:mm:ss.SSS+timezone |
| endTimeL | Engagement end time (in UTC) | long - numeric | |
| duration | Measurement of the duration of the engagement (in seconds). Amount of time the visitor is connected to an agent until the Engagement Window is closed. | numeric | |
| visitorId | Visitor ID. | alphanumeric (256) | |
| visitorName | The visitor’s name. | alphanumeric | |
| agentId | Agent ID. | numeric | |
| agentName | The agent’s nickname. | alphanumeric (256) | |
| agentLoginName | The agent’s login name. | alphanumeric (256) | |
| agentFullname | The agent’s full name. | alphanumeric (256) | |
| agentDeleted | Indicates whether agent was deleted. | Boolean | |
| agentGroupId | Agent group ID. | numeric | |
| agentGroupName | Name of the group the agent belongs to. | alphanumeric (256) | |
| skillId | Skill ID. | numeric | |
| skillName | The skill name. | alphanumeric (256) | |
| isAgentSurvey | Was there an agent survey in the engagement? | Boolean | |
| isPostChatSurvey | Was there a post chat survey in the engagement? | Boolean | |
| isPreChatSurvey | Was there a pre chat survey in the engagement? | Boolean | |
| channel | Engagement channel. Only chat is supported. | numeric | |
| engagementSet | Counter for split engagements within one visit session. | numeric | |
| engagementSequence | Counter for number of transferred engagements within one visit session. | numeric | |
| transcript | Transcript data of the chat. | container | |
| startReason | Code indicates the reason the chat started. | numeric | |
| startReasonDesc | Description of reason the chat started. | alphanumeric | |
| start reason options | Start reason options. |  | 0 - Visitor request, 1 – Transfer (agent transfer), 2 - Transfer failed, 3 - ACD attempt, 4 - ACD no assignment, 5 - Operator assignment, 6 - Skill reassign (skill transfer), 7 - Rep request, 8 - A2A reassign |
| endReason | Code indicates the reason the chat ended. | numeric | |
| endReasonDesc | Description of reason the chat ended. | alphanumeric | |
| End reason options | End reason options. | | 101 - Transfer - rep stopped chat (rep transferred chat to another rep), 106 - Transfer - Reassignment to skill (rep transferred chat to skill, 201 – Rep stopped chat, 202 - Rep disconnected, 205 - Visitor disconnected, 208 - Visitor was no longer in chat, 210 - Visitor closed chat |
| mcs | Divides the Meaningful Connection Score into 3 groups: Positive, Neutral, Negative. This field is deprecated. Use alertedMCS instead| int | Values: -1, 0, 1 |
| alertedMCS | Divides the chatMCS score into 3 groups: Positive, Neutral, Negative. | int | Values: -1, 0, 1 |
| chatMCS | Meaningful Connection Score of the chat.  | int| Range: 0-100. |
| chatDataEnriched | Indication whether chat was enriched with final data (including sdes data). | Boolean | If true, the enrichment process occurred. |
| isPartial | Indicates whether the chat’s data is partial. | Boolean | In case isPartial is true - use the same method with EngagementId parameter in order to retrieve the full chat data. |
| ended | Indicates whether the chat has ended | Boolean | The API returns only ended chats. |
| chatStartUrl | The page’s URL from which the chat started. | alphanumeric | |
| chatStartPage | The page’s title from which the chat started. | alphanumeric | |
| campaign | Campaign data of the chat | container | |
| campaignEngagementId |  ID of the campaign's engagement. | numeric (long) | |
| campaignEngagementName | Name of the campaign's engagement. | alphanumeric (50) | |
| campaignId | ID of the campaign. | numeric (long) | |
| campaignName | Name of the campaign. | alphanumeric (50) | |
| goalId | ID of the campaign's goal. | numeric | |
| goalName | Name of the campaign's goal. | alphanumeric (50) | |
| engagementAgentNote | Note to the Agent specified for the campaign's engagement. | alphanumeric  | |
| visitorBehaviorId | ID of the visitor behavior defined for the campaign's engagement. | numeric (long) | |
| visitorBehaviorName | Name of the visitor behavior defined for the campaign's engagement. | alphanumeric (50) | |
| visitorProfileId | ID of the visitor profile defined for the campaign. | numeric | |
| visitorProfileName | Name of the visitor profile defined for the campaign. | alphanumeric | (50) |  |
| lobId | ID of the line of business of the campaign. | alphanumeric | |
| lobName | Name of the line of business of the campaign. | alphanumeric | |
| lines | Lines of a specific chat. | container | |
| lineScores | Contains information about hte line's score, including line raw score and aggregated score up until this line. | container | |
| time | Time when the chat line took place. | alphanumeric | Format: yyyy-MM-ddThh:mm:ss.SSS+timezone |
| timeL | Time when the chat line took place, in long format | alphanumeric | long |
| textType | Type of text. | alphanumeric  | Valid formats: plain, html, url, rich-content |
| text | The actual text in the chat line. | alphanumeric | |
| json | The payload of the rich-content. | container | Relevant for lines of textType `rich-content` |
| by | Name of the visitor or the agent’s nickname. | alphanumeric | |
| source | Source of line. | alphanumeric | Valid values: "visitor", "agent", "system" |
| controlType | ??? | alphanumeric | ??? |
| lineSeq | Sequence of line in that chat | alphanumeric |  |
| subType | Visibility of line - to all or agent only. | alphanumeric  | Valid values: "REGULAR", ONLY_TO_REP" |
| cannedAnswerType | Type of canned answer (Predefined Content). | numeric | |
| agentId | ID of agent who sent the line.  | numeric | In case it is not an agent line, the value is 0. |
| country | The country indicated by the visitor’s IP address. | alphanumeric | |
| countryCode | The country code indicated by the visitor’s IP address. | alphanumeric | |
| state | The state indicated by the visitor’s IP address. | alphanumeric | |
| city | The city indicated by the visitor’s IP address. | alphanumeric | |
| isp | The internet service provider indicated by the visitor’s IP address. | alphanumeric | |
| org | The organization indicated by the visitor’s IP address.| alphanumeric | |
| device | The device the visitor used to chat. | alphanumeric | Valid values: "DESKTOP", "TABLET", "MOBILE", "NA" |
| ipAddress | The visitor’s IP address. | alphanumeric | |
| browser | The browser the visitor used to chat. | alphanumeric | |
| operatingSystem | The operating system the visitor used to chat. | alphanumeric |  Valid values: "NA", "WINDOWS", "MAC_OSX", "LINUX", "IOS", "ANDROID" |
| browserType | The type of the browser the visitor used to chat | alphanumeric |  Valid values: e.g CHROME or FIREFOX |
| coBrowseSessions | The CoBrowse data | container | |
| coBrowseSessionsList | List of CoBrowse sessions | container | |
| sessionId | CoBrowse session id | alphanumeric | |
| startTime | CoBrowse session start time | alphanumeric | Format: yyyy-MM-ddThh:mm:ss.SSS+timezone |
| startTimeL | CoBrowse session start time in milliseconds | numeric | |
| endTime | CoBrowse session end time | alphanumeric | Format: yyyy-MM-ddThh:mm:ss.SSS+timezone |
| endTimeL | CoBrowse session end time in milliseconds | numeric | |
| interactiveTime | The time when the CoBrowse session became interactive | alphanumeric | Format: yyyy-MM-ddThh:mm:ss.SSS+timezone |
| interactiveTimeL | The time when the CoBrowse session became interactive in milliseconds | numeric | |
| endReason | The reason for the session end | alphanumeric | Valid values: "UNKOWN", "SERVER", "VISITOR", "AGENT", "TIMEOUT" |
| duration | The duration of the CoBrowse session in milliseconds | numeric | |
| interactive | Indication whether the CoBrowse session is interactive | Boolean | |
| surveys | Survey data from the chat. | container | |
| preChat | Pre chat survey. | container | |
| postChat | Post chat survey. | container | |
| operator | Agent survey. | container | |
| scope | Survey scope. Support session scope only; meaning, the survey values may change per session.  | alphanumeric | Example: The answer may change with the same visitor on different occasions. |
| source | Survey type. | alphanumerics | Valid values: "pre-chat", "post-chat", "operator" |
| display name | This survey’s questions. | alphanumeric (1000) | |
| value | The visitor’s answer to the survey question. | alphanumeric (1000) | |
| name | This survey’s name. | alphanumeric (256) | |
| time | This survey’s submitted event time. | alphanumeric | Format: yyyy-MM-ddThh:mm:ss.SSS+timezone |
| timeL | This survey’s time in milliseconds. | numeric | |
| questionId | The question's id that is displayed in the survey (id is generated by the system). | numeric | |
| surveyId | The survey's id (id is generated by the system). | numeric | |
| sdes | List of Engagement Attributes. | container | See [Appendix](data-engagement-history-appendix.html) |
