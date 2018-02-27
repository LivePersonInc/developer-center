---
title: User Query Delta
keywords:
level1: Documents
level2: Admin
level3: Users API
level4: Methods


order: 100
permalink: administration-user-query-delta.html

indicator: both
---

This API queries changes in user data.

### Request

|Method    |  URL  |
|-------- | ---  |
|POST | https://{domain}/api/account/configuration/le-users/users/query |

**Request Headers**

 |Header      |   Description  |
 |:------    |    :--------  |
 |Authorization | Contains token string to allow request authentication and authorization.  |

**Request Body**

There are 3 types of query:

- Delta (type 0): Returns the active revision for a site.
- All changes (type 1): Returns a range of revision data.
- Snapshot (type 2): Returns the current snapshot of each site.

Delta:
 

    {
        "type":0,
        "parameters":[
            {
              "site": "qa34649454",
              "revision": 211
             }
        ]
    }

All changes:

    {
        "type":1,
        "parameters":[
            {
              "site": "qa34649454",
              "from": 0,
              "to": 3
             }
        ]
    }
    }

Snapshot:

    {
        "type":2,
        "parameters":[
            {
              "site": "qa34649454"
             },
            {
              "site": "qa72268737"
             }
    
        ]
    }

**Query Parameters**

| Parameter | Description  |Type/Value  |Required | Notes |
 |:------   | :--------  |  :--------| :--- | :--- |
 |v | API version number |  Double.  |Required  |Default Value: 2.0 |
 |select|  Dynamic selection of the response fields | YOGA 'gdata' dialect. | Optional | Non-existing field: no error, blank in response. <br> Supported fields: any in response body |

### Response

**Response Body for Delta Query**

    {
      "appDataList": [
        {
          "appName": "le-users",
          "appApiVersion": 2,
          "accountList": {
            "accountList": [
              {
                "siteId": "qa34649454",
                "itemsCollection": {
                  "items": [
                    {
                      "id": 277084112,
                      "deleted": false,
                      "loginName": "1234wallacom",
                      "fullName": "first last name",
                      "nickname": "agent1",
                      "isEnabled": true,
                      "maxChats": 4,
                      "isActive": true,
                      "passwordSh": "<<slt>>1000:1e7b3e56b84d2ca9a5777bf806478e207efc9c5dfa3fc16c:38cbf5e917f22fea7f0fcf2a1c74144ede53f788ba6dc86d",
                      "email": "aaaa@a.com",
                      "skillIds": [
                        
                      ],
                      "permissionGroups": [
                        1
                      ],
                      "agentGroups": [
                        {
                          "agentGroupId": 276942712,
                          "roleId": 5,
                          "assignmentDate": "Jun 25, 2015 11:36:45 AM"
                        }
                      ]
                    },
                    {
                      "id": 277084212,
                      "deleted": false,
                      "loginName": "1234w\u4e2d\u6587allacom",
                      "fullName": "first last name",
                      "nickname": "agent1",
                      "isEnabled": true,
                      "maxChats": 4,
                      "isActive": true,
                      "passwordSh": "<<slt>>1000:01a08d0f30e60fb932bbd19e4aa67e2ca397567cfa5aaeaa:167aa6c03f6715a3df124939dbb163083e444a82fe1c6b7d",
                      "email": "aaaa@a.com",
                      "skillIds": [
                        
                      ],
                      "permissionGroups": [
                        1
                      ],
                      "agentGroups": [
                        {
                          "agentGroupId": 276942712,
                          "roleId": 5,
                          "assignmentDate": "Jun 25, 2015 11:37:05 AM"
                        }
                      ]
                    }
                  ],	
                  "revision": 213
                }
              }
            ]
          }
        }
      ]
    }

**Response Body for All Changes Query**

    {
      {
        "siteId": "qa34649454",
        "revisionsCollection": [
          {
            "revision": 1,
            "revisionDate": "Jun 24, 2015 1:53:14 PM",
            "items": [
              {
                "id": 276941512,
                "deleted": false,
                "loginName": "unifgfsdrqueg29@walla.com",
                "fullName": "first last name",
                "nickname": "agent1",
                "isEnabled": true,
                "maxChats": 4,
                "isActive": true,
                "passwordSh": "<<slt>>1000:f0b06d4fc207a5bd8e869a3cafdcf02187143d258cdf2dc1:3b15714a6b301e616853b6e5282c317ef3f9205b610a63e7",
                "email": "aaaa@a.com",
                "skillIds": [
                  
                ],
                "permissionGroups": [
                  1
                ],
                "agentGroups": [
                  {
                    "agentGroupId": 276941112,
                    "roleId": 5,
                    "assignmentDate": "Jun 24, 2015 1:53:01 PM"
                  }
                ]
              }
            ]
          },
          {
            "revision": 2,
            "revisionDate": "Jun 24, 2015 1:53:49 PM",
            "items": [
              {
                "id": 276941612,
                "deleted": false,
                "loginName": "unifgfsdrsdqueg29@walla.com",
                "fullName": "first last name",
                "nickname": "agent1",
                "isEnabled": true,
                "maxChats": 4,
                "isActive": true,
                "passwordSh": "<<slt>>1000:f97de18c8f0a4ddd0f9c45c41199d18b33cc809456d6d381:8b3606637bfcb8a9cec817a0dcdeb8e4370c70ddc3cc9ea7",
                "email": "aaaa@a.com",
                "skillIds": [
                  
                ],
                "permissionGroups": [
                  1
                ],
                "agentGroups": [
                  {
                    "agentGroupId": 276941112,
                    "roleId": 5,
                    "assignmentDate": "Jun 24, 2015 1:53:47 PM"
                  }
                ]
              }
            ]
          },
          {
            "revision": 3,
            "revisionDate": "Jun 24, 2015 1:57:58 PM",
            "items": [
              {
                "id": 276941712,
                "deleted": false,
                "loginName": "unifgfsdrsdq829@walla.com",
                "fullName": "first last name",
                "nickname": "agent1",
                "isEnabled": true,
                "maxChats": 4,
                "isActive": true,
                "passwordSh": "<<slt>>1000:9f770440630b382489122bf94c90731fc55d3f1571f3c9aa:3be4f22cd5e32965031d93ba1539663ceba3016a61b29134",
                "email": "aaaa@a.com",
                "skillIds": [
                  
                ],
                "permissionGroups": [
                  1
                ],
                "agentGroups": [
                  {
                    "agentGroupId": 276941112,
                    "roleId": 5,
                    "assignmentDate": "Jun 24, 2015 1:57:54 PM"
                  }
                ]
              }
            ]
          }
        ]
      }
    }

**Response Body for Snapshot Query**

    {
      {
        "revision": 306,
        "siteId": "qa34649454",
        "collection": [
          {
            "permissionGroups": [
              1
            ],
            "isActive": true,
            "id": 294935712,
            "managerOf": [
              
            ],
            "skillIds": [
              
            ],
            "email": "aaaa@a.com",
            "nickname": "agent1",
            "maxChats": 4,
            "fullName": "first last name",
            "lastPwdChangeDate": "2015-08-16 13:42:20",
            "deleted": false,
            "isEnabled": true,
            "loginName": "unique29@walla.com"
          },
          {
            "permissionGroups": [
              1
            ],
            "isActive": true,
            "id": 294936212,
            "managerOf": [
              
            ],
            "skillIds": [
              
            ],
            "email": "aaaa@a.com",
            "nickname": "agent1",
            "maxChats": 4,
            "fullName": "first last name",
            "lastPwdChangeDate": "2015-08-16 13:43:28",
            "deleted": false,
            "isEnabled": true,
            "loginName": "unique30@walla.com"
          },
          {
            "permissionGroups": [
              1
            ],
            "isActive": true,
            "id": 294936312,
            "managerOf": [
              
            ],
            "skillIds": [
              294297012
            ],
            "email": "aaaa@a.com",
            "nickname": "agent1",
            "maxChats": 4,
            "fullName": "first last name",
            "lastPwdChangeDate": "2015-08-16 13:44:20",
            "deleted": false,
            "isEnabled": true,
            "loginName": "unique31@walla.com"
          },
          {
            "permissionGroups": [
              1
            ],
            "isActive": true,
            "id": 294936412,
            "managerOf": [
              
            ],
            "skillIds": [
              294297012
            ],
            "email": "aaaa@a.com",
            "nickname": "agent1",
            "maxChats": 4,
            "fullName": "first last name",
            "lastPwdChangeDate": "2015-08-16 13:44:54",
            "deleted": false,
            "isEnabled": true,
            "loginName": "unique32@walla.com"
          },
          {
            "permissionGroups": [
              1
            ],
            "isActive": true,
            "id": 294936512,
            "managerOf": [
              
            ],
            "skillIds": [
              294297012
            ],
            "email": "aaaa@a.com",
            "nickname": "agent1",
            "maxChats": 4,
            "fullName": "first last name",
            "lastPwdChangeDate": "2015-08-16 13:45:17",
            "deleted": false,
            "isEnabled": true,
            "loginName": "unique33@walla.com"
          },
          {
            "permissionGroups": [
              1
            ],
            "isActive": true,
            "id": 294936812,
            "managerOf": [
              
            ],
            "skillIds": [
              294297012
            ],
            "email": "aaaa@a.com",
            "nickname": "agent1",
            "maxChats": 4,
            "fullName": "first last name",
            "lastPwdChangeDate": "2015-08-16 13:46:13",
            "deleted": false,
            "isEnabled": true,
            "loginName": "unique34@walla.com"
          },
          {
            "managerOf": [
              
            ],
            "skillIds": [
              294297012
            ],
            "nickname": "agent1",
            "memberOf": {
              "assignmentDate": "2015-08-16 13:55:50",
              "agentGroupId": 272208512
            },
            "deleted": false,
            "isEnabled": true,
            "id": 294937312,
            "isActive": true,
            "permissionGroups": [
              1
            ],
            "email": "aaaa@a.com",
            "maxChats": 4,
            "fullName": "first last name",
            "lastPwdChangeDate": "2015-08-16 13:55:50",
            "loginName": "unique35@walla.com"
          },
          {
            "managerOf": [
              {
                "assignmentDate": "2015-08-16 13:56:26",
                "agentGroupId": 272208512
              }
            ],
            "skillIds": [
              294297012
            ],
            "nickname": "agent1",
            "memberOf": {
              "assignmentDate": "2015-08-16 13:56:26",
              "agentGroupId": 272208512
            },
            "deleted": false,
            "isEnabled": true,
            "id": 294937412,
            "isActive": true,
            "permissionGroups": [
              1
            ],
            "email": "aaaa@a.com",
            "maxChats": 4,
            "fullName": "first last name",
            "lastPwdChangeDate": "2015-08-16 13:56:26",
            "loginName": "unique36@walla.com"
          }
        ]
      }
    }
