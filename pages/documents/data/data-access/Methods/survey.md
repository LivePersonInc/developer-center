---
title: Survey
level1: Documents
level2: Data
level3: Data Access API (BETA)
level4: Methods
order: 50
permalink: data-access-api-(beta)-methods-survey.html

indicator: chat
---

Survey retrieves all the survey data in .zip format files. The survey data consists of information about the different surveys that occur during the visitor session. It can be all viewed or submitted pre/post/offline surveys as well as the operator survey that the agent viewed or submitted. 

### Request

| Method | URL |
| :----- | :------- |
| GET | `https://<domain>/data_access_le/account/{accountID}/le/survey?startTime=<startTime>&endTime=<endTime>`|

**URL Parameters**

Required:

| Parameter | Description | Type / Value |
| :-------- | :------------ | :----------- |
| startTime | Start time in milliseconds, refers to the start time boundary of the range the files were generated. Should be used as an incremental timestamp. | numeric |
| endTime | End time in milliseconds, refers to the start time boundary of the range the files were generated. Should be used as an incremental timestamp. | numeric |

### Response

**JSON Example**

Request for account 75555851:

    {
      "dataAccessFiles": {
        "@id": "75555851",
        "link": {
          "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/survey",
          "@rel": "self"
        },
        "file": [
          {
            "@name": "Survey.1467853200000.1467856800000.part-00000-0.gz",
            "@scopeStartDate": "2016-07-06T21:00:00-04:00",
            "@scopeEndDate": "2016-07-06T22:00:00-04:00",
            "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/survey/Survey.1467853200000.1467856800000.part-00000-0.gz"
          },
          {
            "@name": "Survey.1467856800000.1467860400000.part-00000-0.gz",
            "@scopeStartDate": "2016-07-06T22:00:00-04:00",
            "@scopeEndDate": "2016-07-06T23:00:00-04:00",
            "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/survey/Survey.1467856800000.1467860400000.part-00000-0.gz"
          }
        ]
      }
    }

**Elements in the Response**

| Parameter | Description | Type / Value |
| :------ | :-------- | :--------- |
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
           "com.liveperson.dataaccess.DataTypeEnum": "Survey"
       },
       "metaData": {
           "accountId": {
               "string": "75555851"
           },
           "schemaVersion": "1.0.0.22",
           "startTime": {
               "long": 1468274129221
           },
           "endTime": {
               "long": 1468274129228
           }
       },
       "recordCollection": [
           {
               "body": {
                   "com.liveperson.dataaccess.SurveyData": {
                       "header": {
                           "com.liveperson.dataaccess.VisitorHeader": {
                               "visitId": {
                                   "string": ""
                               },
                               "visitorId": {
                                   "string": ""
                               },
                               "contextId": {
                                   "string": ""
                               }
                           }
                       },
                       "surveys": {
                           "array": [
                               {
                                   "id": {
                                       "long": 275331
                                   },
                                   "type": {
                                       "int": 3
                                   },
                                   "viewTime": null,
                                   "conversationId": {
                                       "string": "755558514295254843"
                                   },
                                   "contents": {
                                       "array": [
                                           {
                                               "question": {
                                                   "string": "Chat Result"
                                               },
                                               "answer": {
                                                   "string": "No Real Chat ('Ghost Chat')"
                                               },
                                               "answerSubmitTime": {
                                                   "long": 1468274129221
                                               },
                                               "surveyName": {
                                                   "string": "SalesNew"
                                               },
                                               "answerType": {
                                                   "int": 4
                                               },
                                               "csatThreshold": {
                                                   "double": -1
                                               }
                                           },
                                           {
                                               "question": {
                                                   "string": "Salesforce Survey Submitted"
                                               },
                                               "answer": {
                                                   "string": "Yes"
                                               },
                                               "answerSubmitTime": {
                                                   "long": 1468274129221
                                               },
                                               "surveyName": {
                                                   "string": "SalesNew"
                                               },
                                               "answerType": {
                                                   "int": 2
                                               },
                                               "csatThreshold": {
                                                   "double": -1
                                               }
                                           },
                                           {
                                               "question": {
                                                   "string": "Salesforce Survey Submitted"
                                               },
                                               "answer": {
                                                   "string": "Yes"
                                               },
                                               "answerSubmitTime": {
                                                   "long": 1468274129228
                                               },
                                               "surveyName": {
                                                   "string": "SalesNew"
                                               },
                                               "answerType": {
                                                   "int": 2
                                               },
                                               "csatThreshold": {
                                                   "double": -1
                                               }
                                           },
                                           {
                                               "question": {
                                                   "string": "Chat Result"
                                               },
                                               "answer": {
                                                   "string": "No Real Chat ('Ghost Chat')"
                                               },
                                               "answerSubmitTime": {
                                                   "long": 1468274129228
                                               },
                                               "surveyName": {
                                                   "string": "SalesNew"
                                               },
                                               "answerType": {
                                                   "int": 4
                                               },
                                               "csatThreshold": {
                                                   "double": -1
                                               }
                                           }
                                       ]
                                   }
                               }
                           ]
                       }
                   }
               }
           }
       ]
    }

**Header**

| Parameter | Description  | Type / Value |
| :------ | :---------- | :--------- |
| visitId | Unique visitor session identifier. | string |
| visitorId | Unique visitor identifier. | string |
| contextId | Context ID. | string |

The following table describes the information that is available for survey data:

| Parameter | Description | Type / Value |
| :------ | :--------- | :-------- |
| surveys | List of surveys. | array container |
| id | Unique survey identifier. | long |
| type | Survey type, can be one of the following: 1- pre-chat, 2 - exit , 3 - agent, 4 – offline. | int |
| viewTime | The time for which the survey was displayed to the visitor. | long |
| conversationId | Conversation unique identifier. | string |
| contents | List of contents of this survey. | SurveyContent - array |

###  SurveyContent 

| Parameter | Description | Type / Value |
| :------- | :--------- | :----------- |
| question | The question text. | string |
| answer | The answer text. | string |
| answerSubmitTime | The time when the survey was submitted by the visitor. | long |
| surveyName | The name of the survey. | string |
| answerType | The answer type. | int |
| csatThreshold | The customer satisfaction rating threshold. | double |
