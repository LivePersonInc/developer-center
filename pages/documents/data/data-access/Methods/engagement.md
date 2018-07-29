---
title: Engagement
redirect_from:
  - data-data-access-engagement.html
level1: Documents
level2: Data
level3: Data Access API
level4: Methods
order: 40
permalink: data-access-api-methods-engagement.html

indicator: chat
---


Engagement retrieves all engagement data in .zip format files. The engagement data consists of information about the different engagements the visitor was involved with. This includes conversation metadata (start/end time, start/end reason etc.), transcript, MCS, transfer information, and more.

### Request

| Method | URL |
| :------ | :-------- |
| GET | `https://<domain>/data_access_le/account/{accountID}/le/engagement?startTime=<startTime>&endTime=<endTime>` |

**URL Parameters**

Required:

| Parameter | Description | Type / Value |
| :------ | :------------- | :------------- |
| startTime | Start time in milliseconds, refers to the start time boundary of the range the files were generated. Should be used as an incremental timestamp. | numeric |
| endTime | End time in milliseconds, refers to the start time boundary of the range the files were generated. Should be used as an incremental timestamp. | numeric |

### Response

**JSON Example**

Request for account 75555851:

    {
        "dataAccessFiles": {
            "@id": "75555851",
            "link": {
                "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/engagement",
                "@rel": "self"
            },
            "file": [
                {
                    "@name": "Engagement.1467853200000.1467856800000.part-00000-0.gz",
                    "@scopeStartDate": "2016-07-06T21:00:00-04:00",
                    "@scopeEndDate": "2016-07-06T22:00:00-04:00",
                    "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/engagement/Engagement.1467853200000.1467856800000.part-00000-0.gz"
                },
                {
                    "@name": "Engagement.1469610000000.1469613600000.part-00000-0.gz",
                    "@scopeStartDate": "2016-07-27T05:00:00-04:00",
                    "@scopeEndDate": "2016-07-27T06:00:00-04:00",
                    "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/engagement/Engagement.1469610000000.1469613600000.part-00000-0.gz"
                }
            ]
        }
    }
    {
        "dataAccessFiles": {
            "@id": "75555851",
            "link": {
                "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/engagement",
                "@rel": "self"
            },
            "file": [
                {
                    "@name": "Engagement.1467853200000.1467856800000.part-00000-0.gz",
                    "@scopeStartDate": "2016-07-06T21:00:00-04:00",
                    "@scopeEndDate": "2016-07-06T22:00:00-04:00",
                    "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/engagement/Engagement.1467853200000.1467856800000.part-00000-0.gz"
                },
                {
                    "@name": "Engagement.1469610000000.1469613600000.part-00000-0.gz",
                    "@scopeStartDate": "2016-07-27T05:00:00-04:00",
                    "@scopeEndDate": "2016-07-27T06:00:00-04:00",
                    "@href": "https://va-a.da.liveperson.net/data_access_le/account/75555851/le/engagement/Engagement.1469610000000.1469613600000.part-00000-0.gz"
                }
            ]
        }
    }

**Elements in the Response**

| Parameter | Description | Type / Value |
| :---------- | :-------- | :------------ |
| id | LivePerson account number. | string |
| file | List of files. | array container |
| name | Name of file. | string |
| scopeStartDate | Start time of the automated process that generates the file. | ISO standard |
| scopeEndDate | End time of the automated process that generates the file. | ISO |standard |
| href | URI to retrieve the file. | string |

**Data Structure**

JSON Example

    {
        "dataType": {
            "com.liveperson.dataaccess.DataTypeEnum": "Engagement"
        },
        "metaData": {
            "accountId": {
                "string": "75555851"
            },
            "schemaVersion": "1.0.0.22",
            "startTime": {
                "long": 1469469281856
            },
            "endTime": {
                "long": 1469469906147
            }
        },
        "recordCollection": [
            {
                "body": {
                    "com.liveperson.dataaccess.EngagementData": {
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
                        "engagements": {
                            "array": [
                                {
                                    "com.liveperson.dataaccess.Conversation": {
                                        "type": {
                                            "com.liveperson.dataaccess.ConversationType": "LIVE_CHAT"
                                        },
                                        "conversationId": {
                                            "string": "755558514295264942"
                                        },
                                        "conversationStartTime": {
                                            "long": 1469469281856
                                        },
                                        "interactionStartTime": {
                                            "long": 1469469368565
                                        },
                                        "conversationEndTime": {
                                            "long": 1469469894169
                                        },
                                        "consumerId": null,
                                        "isInteractive": {
                                            "boolean": false
                                        },
                                        "sourceOrigin": {
                                            "string": "Web"
                                        },
                                        "sourceDevice": null,
                                        "endReasonId": {
                                            "int": 205
                                        },
                                        "campaignData": null,
                                        "skills": {
                                            "array": [
                                                3
                                            ]
                                        },
                                        "startReasonId": {
                                            "int": 0
                                        },
                                        "startPage": null,
                                        "startUrl": null,
                                        "transcripts": {
                                            "array": [
                                                {
                                                    "text": {
                                                        "string": "Welcome to LivePerson! A representative will be with you shortly."
                                                    },
                                                    "timestamp": {
                                                        "long": 1469469281857
                                                    },
                                                    "by": {
                                                        "string": "info"
                                                    },
                                                    "type": {
                                                        "string": "2"
                                                    },
                                                    "controlType": {
                                                        "string": "4"
                                                    },
                                                    "agentId": {
                                                        "string": "0"
                                                    },
                                                    "contentFormat": {
                                                        "string": "Text"
                                                    },
                                                    "messageId": {
                                                        "string": "S4uqCX7MQuWB1_Y1GjsVjQ"
                                                    },
                                                    "dialogId": null,
                                                    "fileData": null,
                                                    "linkData": null,
                                                    "mcs": null
                                                }
                                            ]
                                        },
                                        "transfers": {
                                            "array": []
                                        },
                                        "secureForms": {
                                            "array": []
                                        },
                                        "mcs": null,
                                        "queueStartTime": {
                                            "long": 1469469281856
                                        },
                                        "queueEndTime": {
                                            "long": 1469469368565
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

**Header**

| Parameter | Description | Type / Value |
| :----------- | :------------ | :------------- |
| visitId | Unique visitor session identifier. | string |
| visitorId | Unique visitor identifier. | string |
| contextId | Context ID. | string |

The following table describes the information that is available for engagement data:

| Parameter | Description | Type / Value |
| :--------- | :-------------- | :------------ |
| engagements | List of conversation / content entities. | array container |

###  Conversation

| Parameter | Description | Type / Value |
| :------ | :---------- | :----------- |
| type | Type of conversation, can be one of the following: LIVE_CHAT, MESSAGING. | conversation Type |
| conversationId | Unique conversation identifier. | string |
| conversationStartTime | Start time of the conversation (enter queue time). | long |
| interactionStartTime | Interaction start time (connection time). | long |
| conversationEndTime | End time of the conversation. | long |
| consumerId | Unique consumer identifier. | string |
| isInteractive | Indication whether the conversation is interactive (visitor wrote a line). | boolean |
| sourceOrigin | Source of conversation. | string |
| sourceDevice | Source device of the conversation, can be one of the following: NA, DESKTOP, TABLET, MOBILE. | DeviceType |
| endReasonId | Conversation end reason ID, can be any of the following: <br> 101 - Transfer - rep stopped chat (rep transferred chat to another rep) <br> 106 - Transfer - Reassignment to skill (rep transferred chat to skill)<br>201 - Rep stopped chat<br>202 - Rep disconnected <br>205 - Visitor disconnected<br>208 - Visitor was no longer in chat<br>210 - Visitor closed chat | int |
| campaignData | Contains information about the conversation. | container |
| agentId | Unique Identifier of the conversation’s last agent. | string |
| skillID | Unique Identifier of the conversation’s last skill. | long |
| StartReasonId | Conversation’s start reason ID, can be one of the following: 0 - visitor request, 2 - transfer, 3 - transfer failed. | int |
| startPage | The page title from which the conversation started. | string |
| startUrl | The page URL from which the conversation started. | string |
| transcripts | Transcript data of the conversation. | array[Message] |
| transfers | List of transfers in the conversations. | array[Transfer] |
| secureForms | List of secure forms in the conversation. | array[SecureForm] |
| mcs | Contains information about MCS (Meaningful Connection Score) of the conversation. | MCS |
| queueStartTime | Time when visitor requested to start conversation. | long |
| queueEndTime | Time when visitor connected to an agent. | long |

###  Message

| Parameter | Description | Type / Value |
| :------- | :----------- | :---------- |
| text | The text content of the message. | string |
| timestamp | Time when the message was published. | long |
| by | The name of the entity that published the message. Name of the visitor, agent’s nickname or "info" in case it is a control message. | string |
| type | The type of message. Can be one of the following: 0-VISITOR_LINE, 1 - REP_LINE, 2 -CONTROL_LINE, 3 - REP_URL_LINE, 4 - REP_HTML_LINE, 5 - REP_COMMENT_LINE. | string |
| controlType | Type of predefined content. | string |
| agentId | The ID of the agent who published the message. | string |
| contentFormat | Message content type. Possible options: NA, TEXT_PLAIN, IMG, TEXT_HTML, LINK, HOSTED_FILE. | string |
| messageId | Unique message identifier. | string |
| dialogId | ID of the dialog within the conversation. | string |
| fileData | Contains information about file data. | Container- FileData |
| linkData | Contains information about link data. | Container - LinkData |
| mcs | Contains information about MCS of the message. | Container - MCS |

###  CampaignData

| Parameter | Description | Type / Value |
| :--------- | :------------- | :-------------- |
| campaignId | Unique campaign identifier. | long |
| campaignEngagementId | Unique campaign engagement identifier. | long |

###  FileData (relevant for messaging - not supported)

| Parameter | Description | Type / Value |
| :--------- | :------------- | :----------- |
| caption | Optional explanatory text attached to the file | string |
| fileType | Type of file. Supported types: JPG, PNG, GIF, TXT, PDF | string |

###  LinkData (relevant for messaging - not supported)

| Parameter | Description | Type / Value |
| :-------- | :------------ | :------------ |
| externalFileLink | File location on the web. | string |
| fileType | Type of file, supported types: JPG, PNG, GIF, TXT, PDF. | string |
| caption | Optional free text attached to the file. | string |

###  Transfer

| Parameter | Description | Type / Value |
| :-------- | :------------- | :------------ |
| timestamp | Timestamp of the transfer. | string |
| skillId | ID of the current skill. | long |
| targetSkillId | ID of the target skill ID. | long |
| agentId | ID of the current agent. | string |
| targetAgentId | ID of the target agent ID. | string |
| agentId | The ID of the agent who published the message. | string |
| reason | Reason for the transfer. | long |
| queueStartTime | Enter queue time (in transfer). | long |
| queueEndTime | Exit queue time (in transfer). | long |
