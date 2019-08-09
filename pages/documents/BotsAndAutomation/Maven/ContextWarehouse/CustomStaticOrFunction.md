---
pagename: Custom Static or Function
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Context Warehouse
permalink: maven-context-warehouse-custom-static-or-function.html
indicator: messaging
---

### Create Static Variable

Static variables are useful for storing constant data or lists that can be used in policies. These are used throughout the lifecycle of the policy, and do not change at runtime. The common use case for this would be creating a list, for example a list of VIPs, and then using the condition (CONTAINS or IS_IN) in a policy. 

1. To create a new static variable login to Maven using your LiveEngage credentials and then navigate to Context Warehouse/Custom

2. Click on the **Static +** button

3. Enter the name and the value of the new variable in the text input area. This example shows how to create a list of VIP emails. 

```javascript
{
    name: "vipList"
    type: "static",
    payload: ["bob@test.com", "tom@test.com", "amy@test.com"]
}
```

4. Click **Save** button to save the new attribute. 

### Create a LivePerson Function Variable

You can create a [LivePerson Function](liveperson-functions-overview.html) to fetch a value of the variable at runtime from an external system or a datasource, for example VIP information from Salesforce CRM database. 

1. To create a new Function variable login to Maven using your LiveEngage credentials and then navigate to Context Warehouse/Custom

2. Click on the **FaaS +** button

3. Enter the name and the payload for the function

```javascript
{
    name: "isVIP"
    type: "faas",
    payload: {
        "faasId": "47ce7285-bde9-437e-8592-09c3aa9fb6d8",
        "appKey": {
            "username": "mavenBot",
            "appKey": "def3d49f788643d084ac483a400e828f",
            "secret": "1f6c5a370cb55380",
            "accessToken": "b7f5d408d68041e88cadcb90b9c0bdaa",
            "accessTokenSecret": "25b2bb285f37c902"
        },
        "includeFields": ["salesforceId"]
    }
}
```

4. Click **Save** button to save the new attribute. 