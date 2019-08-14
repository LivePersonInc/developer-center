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

You can create a FaaS function to fetch information from an external source at runtime, for example retrieving customer information from a Salesforce CRM database. 

#### Setup LivePerson Functions

[Create and deploy a FaaS function](liveperson-functions-getting-started.html). 

Next you need to setup an API user to invoke the function.

1. Create an LE API key

2. Create new LE user, and assign it to the API key for login

3. Grant the FaaS invocation permissions (can re-use Administrator, if desired)

#### Create a FaaS attribute in Maven

Once you have created a Function, you can now use that as an attribute in Context Warehouse to fetch external data at runtime. 

1. To create a new FaaS attribute, login to Maven using your LiveEngage credentials and then navigate to Context Warehouse/Custom

2. Click on the **FaaS +** button

3. Enter the name and the payload for the FaaS function using the user credentials you created. 
    a. Faas ID: Retrieve the ID from the URL of your Function (end part of the URL)
    b. Keys: Retrieve the username, secret, accessToken, and accessTokenSecret from the API key you created before, and copy and paste them in the JSON. 

```javascript	
{
    name: "isVIP"
    type: "faas",
    {
        "payload": {
            "faasId": "47ce7285-bde9-437e-8592-09c3aa9fb6d8",
            "appKey": {
                "username": "mavenBot",
                "appKey": "<enter app key>",
                "secret": "<enter secret>",
                "accessToken": "<enter access token>",
                "accessTokenSecret": "<enter access token secret"
            },
            "body": {
                "headers": [],
                "payload": "{{namespace1.salesforceId}}"
            }
        }
    }
}
```

Click Save button to save the new attribute. 
