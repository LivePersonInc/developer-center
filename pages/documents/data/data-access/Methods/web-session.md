---
title: Web Session
redirect_from:
  - data-data-access-web-session.html
level1: Documents
level2: Data
level3: Data Access API
level4: Methods
order: 30
permalink: data-access-api-methods-web-session.html

indicator: chat
---


Web session retrieves the list of files in zip format of the visitor’s web session data.

This data contains information about the vistor’s web journey. The web session data is calculated from the time the visitor enters the website till the time he leaves it. The data includes geo (country, city etc.), navigation (referrer URL etc.), eligible campaigns, engagement attributes and more.

**Use case example**: If you have customer membership programs, you can learn whether your premium members are indeed the heaviest buyers. You can use the order value variable from LivePerson against your own customer membership data and compare the Average Order Value for each membership segment.

### Request

**URL Parameters**

| Method | URL |
| :------ | :------- |
| GET | `https://<domain>/data_access_le/account/{accountID}/le/webSession?startTime=<startTime>&endTime=<endTime>` |

Required:

| Parameter | Description | Type / Value |
| :--------- | :------------- | :------------ |
| startTime | Start time in milliseconds, refers to the start time boundary of the range the files were generated. Should be used as an incremental timestamp. | numeric |
| endTime | End time in milliseconds, refers to the start time boundary of the range the files were generated. Should be used as an incremental timestamp. | numeric |

### Response

**JSON Example**

Request for account 75555851:

    {
      "dataAccessFiles": {
        "@id": "75555851",
        "link": {
          "@href":
    "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/webSession",
          "@rel": "self"
        },
        "file": [
          {
            "@name": "WebSession.1464778800000.1464782400000.part-00000-0.gz",
            "@scopeStartDate": "2016-06-01T07:00:00-04:00",
            "@scopeEndDate": "2016-06-01T08:00:00-04:00",
            "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/webSession/WebSession.1464778800000.1464782400000.part-00000-0.gz"
          },
          {
            "@name": "WebSession.1467043200000.1467046800000.part-00000-0.gz",
            "@scopeStartDate": "2016-06-27T12:00:00-04:00",
            "@scopeEndDate": "2016-06-27T13:00:00-04:00",
            "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/webSession/WebSession.1467043200000.1467046800000.part-00000-0.gz"
          }
        ]
      }
    }

**Elements in the Response**

| Parameter | Description | Type / Value |
| :----- | :--------- | :--------- |
| id | LivePerson account number. | string |
| file | List of files. | array container |
| name | Name of file. | string |
| scopeStartDate | Start time of the automated process that generates the file. | ISO standard |
| scopeEndDate | End time of the automated process that generates the file. | ISO standard |
| href | URI to retrieve the file. | string |

**Data Structure**

JSON Example

    {
       "dataType": {
           "com.liveperson.dataaccess.DataTypeEnum": "WebSession"
       },
       "metaData": {
           "accountId": {
               "string": "75555851"
           },
           "schemaVersion": "1.0.0.22",
           "startTime": {
               "long": 1467291704468
           },
           "endTime": null
       },
       "recordCollection": [
           {
               "body": {
                   "com.liveperson.dataaccess.WebSessionEngAttrsData": {
                       "header": {
                           "com.liveperson.dataaccess.VisitorHeader": {
                               "visitId": {
                                   "string": "AjvT6hLKTEi3AXgGnYu_mQ.606c99c686cbe0d422d558a5005b3ec2275dc20a"
                               },
                               "visitorId": {
                                   "string": "pKytlMTwSPCwpJS-RQqtlQ"
                               },
                               "contextId": null
                           }
                       },
                       "engagementAttributes": {
                           "array": [
                               {
                                   "timestamp": {
                                       "long": 1467291718263
                                   },
                                   "data": {
                                       "com.liveperson.dataaccess.CustomerInfo": {
                                           "customerStatus": {
                                               "string": "agentManager"
                                           },
                                           "customerType": null,
                                           "balance": null,
                                           "customerId": {
                                               "string": "Account: 89995382"
                                           },
                                           "socialId": null,
                                           "imei": null,
                                           "userName": null,
                                           "companySize": null,
                                           "accountName": null,
                                           "role": null,
                                           "storeZipCode":null,
                                           "storeNumber":null,
                                           "lastPaymentDate": null,
                                           "registrationDate": null
                                       }
                                   }
                               },
                               {
                                   "timestamp": {
                                       "long": 1467291718494
                                   },
                                   "data": {
                                       "com.liveperson.dataaccess.PersonalInfo": {
                                           "name": null,
                                           "surname": {
                                               "string": "BrookeR@blinds.com"
                                           },
                                           "gender": null,
                                           "company": null,
                                           "customerAge": null,
                                           "contacts": {
                                               "array": [
                                                   {
                                                       "email": null,
                                                       "phone": null
                                                   }
                                               ]
                                           }
                                       }
                                   }
                               }
                           ]
                       }
                   }
               }
           },
           {
               "body": {
                   "com.liveperson.dataaccess.WebSessionNavigationData": {
                       "header": {
                           "com.liveperson.dataaccess.VisitorHeader": {
                               "visitId": {
                                   "string": "AjvT6hLKTEi3AXgGnYu_mQ.606c99c686cbe0d422d558a5005b3ec2275dc20a"
                               },
                               "visitorId": {
                                   "string": "pKytlMTwSPCwpJS-RQqtlQ"
                               },
                               "contextId": null
                           }
                       },
                       "navigationData": {
                           "array": [
                               {
                                   "timestamp": {
                                       "long": 1467291704525
                                   },
                                   "url": {
                                       "string": "https://authentication.liveperson.net/login.html"
                                   },
                                   "referrerUrl": {
                                       "string": ""
                                   },
                                   "sections": {
                                       "array": [
                                           "loginPages"
                                       ]
                                   }
                               },
                               {
                                   "timestamp": {
                                       "long": 1467291714765
                                   },
                                   "url": {
                                       "string": "https://z1.le.liveperson.net/a/89995382/#wa!webagent"
                                   },
                                   "referrerUrl": {
                                       "string": "https://authentication.liveperson.net/login.html"
                                   },
                                   "sections": {
                                       "array": []
                                   }
                               },
                               {
                                   "timestamp": {
                                       "long": 1467308703041
                                   },
                                   "url": {
                                       "string": "https://authentication.liveperson.net/login.html?lpservice=liveEngage&servicepath=a%2F%7E%7Eaccountid%7E%7E%2F%23%2C%7E%7Essokey%7E%7E"
                                   },
                                   "referrerUrl": {
                                       "string": "https://z1.le.liveperson.net/a/89995382/"
                                   },
                                   "sections": {
                                       "array": [
                                           "loginPages"
                                       ]
                                   }
                               }
                           ]
                       }
                   }
               }
           },
           {
               "body": {
                   "com.liveperson.dataaccess.WebSessionGoalAchievedData": {
                       "header": {
                           "com.liveperson.dataaccess.VisitorHeader": {
                               "visitId": {
                                   "string": "AjvT6hLKTEi3AXgGnYu_mQ.606c99c686cbe0d422d558a5005b3ec2275dc20a"
                               },
                               "visitorId": {
                                   "string": "pKytlMTwSPCwpJS-RQqtlQ"
                               },
                               "contextId": null
                           }
                       },
                       "achievedGoals": {
                           "array": [
                               {
                                   "id": {
                                       "string": "0b5f9655-7bcb-4143-960b-7a5b08195167"
                                   },
                                   "timestamp": {
                                       "long": 1467291714594
                                   },
                                   "campaignGoalRevision": {
                                       "long": 13
                                   },
                                   "campaignGoalId": {
                                       "long": 153250510
                                   },
                                   "campaignGoalType": {
                                       "int": 1
                                   },
                                   "goalMetaData": {
                                       "com.liveperson.dataaccess.ReduceAbandonmentGoalMetadata": {
                                           "numberOfPages": {
                                               "int": 2
                                           }
                                       }
                                   }
                               }
                           ]
                       }
                   }
               }
           },
           {
               "body": {
                   "com.liveperson.dataaccess.WebSessionEligibilityData": {
                       "header": {
                           "com.liveperson.dataaccess.VisitorHeader": {
                               "visitId": {
                                   "string": "AjvT6hLKTEi3AXgGnYu_mQ.606c99c686cbe0d422d558a5005b3ec2275dc20a"
                               },
                               "visitorId": {
                                   "string": "pKytlMTwSPCwpJS-RQqtlQ"
                               },
                               "contextId": null
                           }
                       },
                       "eligibilityData": {
                           "array": [
                               {
                                   "eligibleCampaigns": {
                                       "array": [
                                           {
                                               "campaign": {
                                                   "com.liveperson.dataaccess.Campaign": {
                                                       "id": {
                                                           "long": 129082910
                                                       },
                                                       "visitorProfiles": {
                                                           "array": [
                                                               {
                                                                   "id": {
                                                                       "long": 156579410
                                                                   },
                                                                   "revision": {
                                                                       "long": 111
                                                                   }
                                                               }
                                                           ]
                                                       }
                                                   }
                                               },
                                               "engagements": {
                                                   "array": [
                                                       {
                                                           "channel": {
                                                               "string": "1"
                                                           },
                                                           "type": {
                                                               "string": "5"
                                                           },
                                                           "visitorBehaviors": {
                                                               "array": [
                                                                   {
                                                                       "id": {
                                                                           "long": 126225110
                                                                       },
                                                                       "revision": {
                                                                           "long": 33
                                                                       }
                                                                   }
                                                               ]
                                                           },
                                                           "skillId": {
                                                               "int": 11
                                                           },
                                                           "skillName": {
                                                               "string": "Tier1"
                                                           },
                                                           "surveySkills": null,
                                                           "isOffsiteEngagement": {
                                                               "boolean": false
                                                           },
                                                           "availabilityPolicy": {
                                                               "string": "1"
                                                           },
                                                           "interactionType": {
                                                               "int": 5
                                                           },
                                                           "renderingType": null
                                                       }
                                                   ]
                                               },
                                               "goal": {
                                                   "com.liveperson.dataaccess.Goal": {
                                                       "id": {
                                                           "long": 126222610
                                                       },
                                                       "type": {
                                                           "int": 4
                                                       },
                                                       "indicatorType": {
                                                           "int": 3
                                                       }
                                                   }
                                               },
                                               "controlGroupType": {
                                                   "com.liveperson.dataaccess.ControlGroupEnum": "NA"
                                               }
                                           }
                                       ]
                                   },
                                   "timestamp": {
                                       "long": 1467291704571
                                   }
                               },
                               {
                                   "eligibleCampaigns": {
                                       "array": [
                                           {
                                               "campaign": {
                                                   "com.liveperson.dataaccess.Campaign": {
                                                       "id": {
                                                           "long": 626105510
                                                       },
                                                       "visitorProfiles": {
                                                           "array": [
                                                               {
                                                                   "id": {
                                                                       "long": 286374810
                                                                   },
                                                                   "revision": {
                                                                       "long": 111
                                                                   }
                                                               }
                                                           ]
                                                       }
                                                   }
                                               },
                                               "engagements": {
                                                   "array": [
                                                       {
                                                           "channel": {
                                                               "string": "100"
                                                           },
                                                           "type": {
                                                               "string": "1"
                                                           },
                                                           "visitorBehaviors": {
                                                               "array": [
                                                                   {
                                                                       "id": {
                                                                           "long": 126225110
                                                                       },
                                                                       "revision": {
                                                                           "long": 33
                                                                       }
                                                                   }
                                                               ]
                                                           },
                                                           "skillId": {
                                                               "int": -1
                                                           },
                                                           "skillName": null,
                                                           "surveySkills": null,
                                                           "isOffsiteEngagement": {
                                                               "boolean": false
                                                           },
                                                           "availabilityPolicy": null,
                                                           "interactionType": {
                                                               "int": 1
                                                           },
                                                           "renderingType": null
                                                       }
                                                   ]
                                               },
                                               "goal": {
                                                   "com.liveperson.dataaccess.Goal": {
                                                       "id": {
                                                           "long": 126222610
                                                       },
                                                       "type": {
                                                           "int": 4
                                                       },
                                                       "indicatorType": {
                                                           "int": 3
                                                       }
                                                   }
                                               },
                                               "controlGroupType": {
                                                   "com.liveperson.dataaccess.ControlGroupEnum": "NA"
                                               }
                                           }
                                       ]
                                   },
                                   "timestamp": {
                                       "long": 1467291718265
                                   }
                               }
                           ]
                       }
                   }
               }
           },
           {
               "body": {
                   "com.liveperson.dataaccess.WebSessionImpressionData": {
                       "header": {
                           "com.liveperson.dataaccess.VisitorHeader": {
                               "visitId": {
                                   "string": "AjvT6hLKTEi3AXgGnYu_mQ.606c99c686cbe0d422d558a5005b3ec2275dc20a"
                               },
                               "visitorId": {
                                   "string": "pKytlMTwSPCwpJS-RQqtlQ"
                               },
                               "contextId": null
                           }
                       },
                       "impressions": {
                           "array": [
                               {
                                   "engagementInstanceId": {
                                       "string": "1"
                                   },
                                   "impressionType": {
                                       "string": "Show"
                                   },
                                   "state": {
                                       "string": "1"
                                   },
                                   "engagement": {
                                       "com.liveperson.dataaccess.Engagement": {
                                           "channel": {
                                               "string": "1"
                                           },
                                           "type": {
                                               "string": "5"
                                           },
                                           "visitorBehaviors": {
                                               "array": [
                                                   {
                                                       "id": {
                                                           "long": 126225110
                                                       },
                                                       "revision": {
                                                           "long": 33
                                                       }
                                                   }
                                               ]
                                           },
                                           "skillId": {
                                               "int": 11
                                           },
                                           "skillName": {
                                               "string": "Tier1"
                                           },
                                           "surveySkills": null,
                                           "isOffsiteEngagement": {
                                               "boolean": false
                                           },
                                           "availabilityPolicy": {
                                               "string": "1"
                                           },
                                           "interactionType": {
                                               "int": 5
                                           },
                                           "renderingType": null
                                       }
                                   },
                                   "campaign": {
                                       "com.liveperson.dataaccess.Campaign": {
                                           "id": {
                                               "long": 129082910
                                           },
                                           "visitorProfiles": {
                                               "array": [
                                                   {
                                                       "id": {
                                                           "long": 156579410
                                                       },
                                                       "revision": {
                                                           "long": 111
                                                       }
                                                   }
                                               ]
                                           }
                                       }
                                   },
                                   "goal": {
                                       "com.liveperson.dataaccess.Goal": {
                                           "id": {
                                               "long": 126222610
                                           },
                                           "type": {
                                               "int": 4
                                           },
                                           "indicatorType": {
                                               "int": 3
                                           }
                                       }
                                   }
                               },
                               {
                                   "engagementInstanceId": {
                                       "string": "2"
                                   },
                                   "impressionType": {
                                       "string": "Show"
                                   },
                                   "state": {
                                       "string": "0"
                                   },
                                   "engagement": {
                                       "com.liveperson.dataaccess.Engagement": {
                                           "channel": {
                                               "string": "100"
                                           },
                                           "type": {
                                               "string": "1"
                                           },
                                           "visitorBehaviors": {
                                               "array": [
                                                   {
                                                       "id": {
                                                           "long": 126225110
                                                       },
                                                       "revision": {
                                                           "long": 33
                                                       }
                                                   }
                                               ]
                                           },
                                           "skillId": {
                                               "int": -1
                                           },
                                           "skillName": null,
                                           "surveySkills": null,
                                           "isOffsiteEngagement": {
                                               "boolean": false
                                           },
                                           "availabilityPolicy": null,
                                           "interactionType": {
                                               "int": 1
                                           },
                                           "renderingType": null
                                       }
                                   },
                                   "campaign": {
                                       "com.liveperson.dataaccess.Campaign": {
                                           "id": {
                                               "long": 626105510
                                           },
                                           "visitorProfiles": {
                                               "array": [
                                                   {
                                                       "id": {
                                                           "long": 286374810
                                                       },
                                                       "revision": {
                                                           "long": 111
                                                       }
                                                   }
                                               ]
                                           }
                                       }
                                   },
                                   "goal": {
                                       "com.liveperson.dataaccess.Goal": {
                                           "id": {
                                               "long": 126222610
                                           },
                                           "type": {
                                               "int": 4
                                           },
                                           "indicatorType": {
                                               "int": 3
                                           }
                                       }
                                   }
                               },
                               {
                                   "engagementInstanceId": {
                                       "string": "2"
                                   },
                                   "impressionType": {
                                       "string": "Close"
                                   },
                                   "state": {
                                       "string": "0"
                                   },
                                   "engagement": {
                                       "com.liveperson.dataaccess.Engagement": {
                                           "channel": {
                                               "string": "100"
                                           },
                                           "type": {
                                               "string": "1"
                                           },
                                           "visitorBehaviors": {
                                               "array": [
                                                   {
                                                       "id": {
                                                           "long": 126225110
                                                       },
                                                       "revision": {
                                                           "long": 33
                                                       }
                                                   }
                                               ]
                                           },
                                           "skillId": {
                                               "int": -1
                                           },
                                           "skillName": null,
                                           "surveySkills": null,
                                           "isOffsiteEngagement": {
                                               "boolean": false
                                           },
                                           "availabilityPolicy": null,
                                           "interactionType": {
                                               "int": 1
                                           },
                                           "renderingType": null
                                       }
                                   },
                                   "campaign": {
                                       "com.liveperson.dataaccess.Campaign": {
                                           "id": {
                                               "long": 626105510
                                           },
                                           "visitorProfiles": {
                                               "array": [
                                                   {
                                                       "id": {
                                                           "long": 286374810
                                                       },
                                                       "revision": {
                                                           "long": 111
                                                       }
                                                   }
                                               ]
                                           }
                                       }
                                   },
                                   "goal": {
                                       "com.liveperson.dataaccess.Goal": {
                                           "id": {
                                               "long": 126222610
                                           },
                                           "type": {
                                               "int": 4
                                           },
                                           "indicatorType": {
                                               "int": 3
                                           }
                                       }
                                   }
                               }
                           ]
                       }
                   }
               }
           }
       ]
    }

###  GEO

Information about visitor geolocation.

**Header**

| Parameter | Description | Type / Value |
| :------- | :----------- | :---------- |
| visitId | Unique identifier of the visitor’s session. | string |
| visitorId | Unique identifier of the visitor. | string |
| contextId | Context ID. | string |

The following table describes the information that is available in the geo data:

| Parameter | Description | Type / Value |
| :-------- | :---------- | :------------ |
| iPV4 | IP V4 address. | string |
| iPV6 | IP V6 address. | string |
| country | Country name. | string |
| city | City name. | string |
| state | State name. | string |
| org | Organization name. | string |
| isp | Internet service provider. | string |
| countryCode | Country code. | string |

###  Navigation

Information about the navigated pages by the visitor on the brand’s website. The navigation is mainly based on the pages being monitored by the Monitor Tag. If a customer has non-monitored pages it will not be reflected in the data displayed here.

**Header**

| Parameter | Description | Type / Value
| :----- | :------------ | :---------- |
| visitId | Unique visitor session identifier. | string |
| visitorId | Unique visitor identifier of the visitor. | string |
| contextId | Context ID. | string |

The following table describes the information that is available in the navigation data:

| Parameter | Description | Type / Value |
| :------ | :------ | :----- |
| timestamp | The time the visitor has first entered the page (in this particular visit). In format: UTC YYY-MM-DDThh:mm:ss | string |
| url | The URL representation of the visited page. | string |
| referrerUrl | The URL representation of the last page the visitor visited. | string |
| sections | A list of the sections/tabs of the page the visitor visited. | string |

###  Session Info

Information about the visitor’s browsing session.

**Header**

| Parameter | Description | Type / Value |
| :------- | :----------- | :----------- |
| visitId | Unique visitor session identifier. | string |
| visitorId | Unique visitor identifier of the visitor. | string |
| contextId | Context ID. | string |

The following table describes the information that is available in the session info data:

| Parameter | Description | Type / Value |
| :------ | :--------- | :-------- |
| sessionStartTime | Visitor session’s start time. | long |
| userAgent | User agent. | string |
| deviceOS | Device OS type, can be one of the following: NA, WINDOWS, MAC_OS,LINUX, IOS, ANDROID. | string |
| deviceFamily | Device type, can be one of the following: NA, DESKTOP, TABLET, MOBILE. | string |
| siteControlGroup | Site control group, can be one of the following: NA, CONTROL, TEST. | string |
| search Engine | Search engine. Exist only if the visitor started a session after searching a known search engine. It is extracted from the referrer URL. | string |
| search EngineKey | Keywords used to search through the search engine prior to the session starting point. It is taken from the referrer URL. | string |

###  EligibilityData

Information about the campaigns that are eligible for the visitor during his session.

**Header**

| Parameter | Description | Type / Value |
| :--------- | :----------- | :--------- |
| visitId | Unique visitor session identifier. | string |
| visitorId | Unique visitor identifier. | string |
| contextId | Context ID. | string |

The following table describes the information that is available in the eligibility data:

| Parameter | Description | Type / Value |
| :----------- | :------------ | :------------ |
| eligibleCampaigns | List of campaigns the visitor is eligible for. | array container |
| timestamp | The time that the assessment is made regarding which campaign is relevant to the visitor. | long |

### EligibleCampaign

| Parameter | Description | Type / Value |
| :------ | :------- | :------ |
| campaign | Contains campaign information. | container |
| engagements | List of engagements. | array container |
| goal | Contains goal information. | container |
| controlGroupType | Type of the campaign control groups. Can be one of the following: NA, TEST, CONTROL. | ControlGroupEnum |

### Campaign

| Parameter | Description | Type / Value |
| :------- | :-------- | :--------- |
| id | Campaign ID | long |
| visitorProfiles | Contains visitor profile (target audience) information| container |

### Visitor Profiles

| Parameter | Description | Type / Value |
| :------- | :-------- | :--------- |
| id | Visitor profile (target audience) unique identifier (LP ID). | long |
| revision | Revision in visitor profile ID. | long |

### Engagement

| Parameter | Description | Type / Value |
| :------- | :----------- | :----------- |
| id | Engagement ID. | long |
| channel | Channel type. | string |
| type | Engagement type. | string. Values: <br> peeling corner = 0 <br> overlay = 1 <br> toaster = 2 <br> slide-out = 3 <br> embedded = 5 <br> sticky = 6 |
| visitorBehaviors | List of visitor behaviors. | container |
| skillId | Engagement skill ID (in case a skill was defined for it). | int |
| skillName | Engagement skill name (in case a skill was defined for it). | string |
| surveySkills | List of skills defined for the survey. | container |
| isOffsiteEngagement | Indication of offsite engagement. | boolean |
| availabilityPolicy | Policy which changes the engagement availability. | string |
| interactionType | The engagement type. Can be either chat or messaging. | int |
| renderingType | Determines the way the engagement will be showed. | int |

### Visitor Behavior

| Parameter | Description | Type / Value |
| :------ | :-------- | :--------- |
| id | Visitor behavior unique identifier (LP ID). | long |
| revision | Revision in visitor behavior ID. | long |

### Skill

| Parameter | Description | Type / Value |
| :------- | :---------- | :---------- |
| id | Unique skill identifier. | long |
| name | Skill name. | string |

### Goal

| Parameter | Description | Type / Value |
| :------- | :----------- | :---------- |
| id | Unique goal identifier. | long |
| type | Goal type. | int |
| indicatorType | Goal indicator type. | int |

### Impression

Information about impressions that the visitor was exposed to during their session.

**Header**

| Parameter | Description | Type / Value |
| :------- | :------ | :------- |
| visitId | Unique visitor session identifier. | string |
| visitorId | Unique visitor identifier. | string |
| contextId | Context ID. | string |

The following table describes the information available in the impression data:

| Parameter | Description | Type / Value |
| :------- | :-------- | :--------- |
| timestamp | Time that the impression occurred. | Long |
| engagementInstanceId | User agent. | string |
| impressionType | Type of impression, can be one of the following: Show, Accept, Close, Timeout. | string |
| state | Impression state, can be one of the following: content, chatonline, chatoffline. | string |
| engagement | Contains information about the engagement. | container |
| campaign | Contains information about the campaign. | container |
| goal | Contains information about the goal. | container |

###  GoalAchieved

Information about the goals that were achieved during the visitor session.

**Header**

| Parameter | Description | Type / Value |
| :--------- | :------------- | :------------- |
| visitId | Unique visitor session identifier. | string |
| visitorId | Unique visitor identifier. | string |
| contextId | Context ID. | string |

The following table describes the information available in the goal achieved data:

| Parameter | Description | Type / Value |
| :-------- | :----------- | :------------ |
| id | Unique ID for achieved goal. | string |
| timestamp | Time when goal was achieved. | long |
| campaignGoalId | Campaign goal ID. | long |
| campaignGoalRevision | Revision of campaign goal ID. | long |
| campaignGoalType | Goal type. | int |
| goalMetaData | Contains goal metadata, can be one of the following:  UrlGoalMetadata, PurchaseMetadata, ReduceAbandonmentGoalMetadata, LeadMetadata, ServiceActivityMetadata. | container |

### UrlGoalMetadata

| Parameter | Description | Type / Value |
| :----- | :----------- | :------------- |
| url | Unique ID for goal achieved event. | string |

### PurchaseMetadata

| Parameter | Description | Type / Value |
| :---- | :------ | :--------- |
| total | Total purchase. | double |
| orderId | Purchase order ID. | string |
| cartStatus | Cart status information. | container |

### ReduceAbandonmentGoalMetadata

| Parameter | Description | Type / Value |
| :------- | :--------- | :----------- |
| numberOfPages | Number of pages viewed. | int |

### IncreaseInteractionGoalMetadata

| Parameter | Description | Type / Value |
| :------- | :---------- | :----------- |
| engagement | Contains engagement information. | container |
| campaign | Contains campaign information. | container |

### LeadMetaData

| Parameter | Description | Type / Value |
| :------ | :----------- | :--------- |
| topic  | Lead topic. | string |
| leadId | Unique identifier of the lead in your system. | string |
| value | Lead value. | double |

### ServiceActivityMetaData

| Parameter | Description | Type / Value |
| :-------- | :-------- | :----------- |
| topic | Topic of service activity. | string |
| status | Status of service activity. | int |
| category | Category of service activity. | string |
| serviceId | Unique service identifier. | string |

###  Engagement Attributes

Engagement attributes are standardized attributes defined by LivePerson that enable our customers to get more specific information about their visitors and pass it on via LiveEngage. **note** - some differences may exist in the naming conventions between this API and the [general Engagement Attributes document](https://developers.liveperson.com/engagement-attributes-overview.html). The general Engagement Attributes name appears in brackets next to the Attribute Type name, even if it is identical to the API name.

**Header**

| Parameter | Description | Type / Value |
| :------- | :----------- | :------------ |
| visitId | Unique visitor session identifier. | string |
| visitorId | Unique visitor identifier. | string |
| contextId | Context ID. | string |

Here is a description of the data structure of the existing engagement attributes in the system:

### Engagement Attribute Type - Purchase (Transaction)

| Parameter | Description | Type / Value |
| :--------- | :----------- | :--------- |
| total | Total amount of purchase. | double |
| orderId | Purchase order ID. | string |
| cart | Contains cart information. | container |

#### cart

| Parameter | Description | Type / Value |
| :------- | :--------- | :----------- |
| total | Total cart value. | double |
| numItems | Number of items in cart. | int |
| products | List of products (productContainer). | container |

#### productContainer

| Parameter | Description | Type / Value |
| :------ | :----- | :--------- |
| quantity | Number of products. | int |
| product | Contains product information. | container |

#### product

| Parameter | Description | Type / Value |
| :-------- | :---------- | :---------- |
| name | Product name. | string |
| category | Product category. | string |
| sku | Unique product ID identifier in consumer database. | string |
| price | Product price. | double |

### Engagement Attribute Type - Lead (Lead)

| Parameter | Description | Type / Value |
| :------- | :--------- | :---------- |
| topic | Lead topic. | string |
| leadId | Unique system lead identifier. | string |
| value | Lead value. | double |

### Engagement Attribute Type - Customer Info

| Parameter | Description | Type / Value |
| :--------- | :---------- | :---------- |
| isAuthenticated | Indication whether the customer was authenticated (default is null). | boolean |
| authenticatedConversationId | The identifier of the conversation that the authenticated customer took part in. | string |
| customerStatus | Customer status. | string |
| customerType | Customer type. | string |
| balance | Customer balance. | double |
| customerId | Unique identifier of the customer. | string |
| socialId | The unique identifier of the user in the social network. | string |
| imei | The user’s phone (used as identifier for a telco company). | string |
| userName | User nickname or display name. | string |
|companySize | Business targeting for B2B. | int |
| accountName | The account name. | string |
| role | User role in the organization. | string |
| lastPaymentDate | User’s last payment date (in YMDDate format). | Date |
| registrationDate | User’s registration date (in YMDDate format). | Date |
| storeNumber | The store's number | String |
| storeZipCode |The store's zip code | String |


#### YMDDate

| Parameter | Description | Type / Value |
| :--------- | :----------- | :---------- |
| year | Year representation. | int |
| month | Month representation. | int |
| day | Day representation. | int |

### Engagement Attribute Type - Personal Info

| Parameter | Description | Type / Value |
| :--------- | :----------- | :------------ |
| isAuthenticated | Indication whether the customer was authenticated (default is null). | boolean |
| authenticatedConversationId | The identifier of the conversation that the authenticated customer took part in. | string |
| name | Customer name. | string |
| surname | Customer surname. | string |
| gender | Customer gender. | string |
| company | Customer company. | string |
| customerAge | Customer age. | container |
| contacts | List of contacts. | container |

#### customerAge

| Parameter | Description | Type / Value |
| :--------- | :----------- | :------------ |
| customerAgeInYears | Customer age (in years). | int |
| customerYearOfBirth | Customer year of birth. | int |
| customerMonthOfBirth | Customer month of birth. | int |
| CustomerDateOfBirth | Customer date of birth. | int |

#### Contact

| Parameter | Description | Type / Value |
| :--------- | :----------- | :------------ |
| email | Contact email. | string |
| phone | Contact phone number. | string |

### Engagement Attribute Type - CartStatus (Cart update)

| Parameter | Description | Type / Value |
| :-------- | :----------- | :----------- |
| total | Total cart value. | double |
| numItems | Number of items in cart. | int |
| products | List of products. | container |

#### ProductContainer

| Parameter | Description | Type / Value |
| :------- | :---------- | :----------- |
| quantity | Number of products. | int |
| product| Contains product information. | container |

#### product

See above for [Product](#product) parameters.

### Engagement Attribute Type - ViewedProduct (ViewedProduct)

| Parameter | Description | Type / Value |
| :------- | :---------- | :----------- |
| products | List of viewed products. | Product container |

#### Product

See above for [Product](#product) parameters.

### Engagement Attribute Type - ServiceActivity (Service Activity)

| Parameter | Description | Type / Value |
| :------- | :----------- | :----------- |
| topic | Topic of service activity. | string |
| status | Status of service activity. | int |
| category | Category of service activity. | string |
| serviceId | Service unique identifier. | string |

### Engagement Attribute Type - VisitorError (Visitor Error)

| Parameter | Description | Type / Value |
| :--------- | :----------- | :----------- |
| contextId | Error context ID (from the customer). | string |
| message | Error message. | string |
| code | Error code. | long |
| level | Error severity level. | long |
| resolved | Indication whether the error was resolved. | boolean |

### Engagement Attribute Type - MarketingCampaignInfo (Marketing Source)

| Parameter | Description | Type / Value |
| :------ | :---------- | :---------- |
| OriginatingChannel | Channel which originated the campaign. | int |
| affiliate | Affiliate. | string |
| campaignId | Unique identifier of the campaign. | string |
