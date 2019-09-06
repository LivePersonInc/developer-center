---
pagename: Tutorial
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: AI Powered Routing
permalink: maven-ai-powered-routing-tutorial.html
indicator: messaging
---

### Introduction

This document walks through an example to create a policy using Maven Workspace and using it for routing to a skill. 

The examples provided here start with a simple implementation, using static attributes (hard coded values), and then add more complexity such as using the session store, LivePerson functions, and Conversation Builder integration. This tutorial will help you understand the high level concepts and create basic building blocks on which you will be able to create more complex solutions. 

#### Example Policy

Let’s start with a policy we want to build. 

"Route a VIP customer to a VIP skill, and a regular customer to a general skill" 

#### Context Attributes

To build this policy you will need to use certain context attributes. The primary one used in this example is a customer identifier to detect whether a customer is a VIP or not. For this we will use customer phone number as the identifier to check for VIP status. 

### Create a simple policy using Static Context Attributes

When starting to build your first policy, it is often easy to use static attributes at first. This is much like hard coding some logic writing your first Hello World example. Once you have been able to execute this using hard coded values, then we will replace them with programmatically retrieved attributes. 

In this example we will create and use static attributes. To check if a customer is a VIP we will use a list of phone numbers, and see if the customer’s number is in that list. 

#### Create Context Attributes

1. Login to Maven Workspace using your LPA or Admin Credentials, and then navigate to Context Warehouse/Custom. 

    <img class="fancyimage" width="750" src="img/maven/maven_ai_routing_tut_image_0.png">

2. Click on Add Static and copy paste the following JSON into the text field, and then hit save. This creates a static list of VIP phone numbers

    ```json
    {
        "name": "vipPhoneNumberList",
        "type": "static",
        "payload": ["55501", "55502", "55503"]
    }
    ```

3. Click on Add Static and copy paste the following JSON into the text field, and then hit save. This creates a static list regular customer phone numbers. 

    ```json
    {
        "name": "regularCustomerList",
        "type": "static",
        "payload": ["55505", "55506", "55507"]
    }
    ```

4. Click on Add Static and copy paste the following JSON into the text field and then hit save. This is an instance of a VIP customer phone number we will use in policy. 

    ```json
    {
        "name": "vipCustomer",
        "type": "static",
        "payload": ["55501"]
    }
    ```

5. Click on Add Static and copy paste the following JSON into the text field and then hit save. This is an instance of regular customer phone number we will use in policy. 

    ```json
    {
        "name": "regularCustomer",
        "type": "static",
        "payload": ["55506"]
    }
    ```

#### Create Routing Policy

"If customer phone number is in the allow list, send them to vipSkill in LiveEngage".  

1. Navigate to Intent and Context Policies 

    <img class="fancyimage" width="750" src="img/maven/maven_ai_routing_tut_image_1.png">

2. Click Add Policy, and then Copy and Paste this JSON and then click save. This policy checks if customer phone number is in the list of VIP customer phone numbers, and if true sends then to a VIP Skill (12345).

    {% raw %}
    ```json
    {
        "name": "VipRule_Static",
        "conditions": [
            {
                "property": "custom.vipCustomer",
                "type": "IS_IN",
                "value": "{{custom.vipPhoneNumberList}}"
            }
        ],
        "actions": [
            {
                "payload": {
                    "skillId": "12345"
                },
                "type": "TRANSFER_TO_SKILL"
            }
        ]
    }
    ```
    {% endraw %}

3. Click Add Policy, and then Copy and Paste this JSON and then click save. This policy checks if customer phone number is in the list of regular customer phone numbers, and if true sends then to a regular Skill (67890).

{% raw %}
```json
{
    "name": "RegularCustomerRule_Static",
    "conditions": [
        {
            "property": "custom.regularCustomer",
            "type": "IS_IN",
            "value": "{{custom.regularCustomerList}}"
        }
    ],
    "actions": [
        {
            "payload": {
                "skillId": "67890"
            },
            "type": "TRANSFER_TO_SKILL"
        }
    ]
}
```
{% endraw %}

As you may have noticed, we have created two policies, one for VIP customer, and one for a regular customer. In this example we evaluate both using static variables. In later sections we will retrieve the customer phone number from a session.  

#### Use AskMaven to test policy

AskMaven is a REST interface that allows you to get a policy outcome programmatically. It is also a great way to independently test if policy is working. 

##### Test VIP policy

1. In the policy list in Maven Workspace, click on the toggle switch and enable the **VipRule_Static** policy. 

2. Navigate to Developer Key in Maven workspace, create a new key, and copy the key to use later. 

3. Use the following CURL command in Bash to call AskMaven

    1. Replace the account ID field with your Live Person account ID

    2. Replace the Maven API key you previously copied from the Developer Key section

    ```bash
    curl --request GET \

    --url https://z1.askmaven.liveperson.net/v1/account/<accountID>/next-actions \

    --header 'maven-api-key:  <API Key>'
    ```

4. Here is the sample JSON output you should see

    ```json
    {
        "rule": {
            "id": "<some UUID>",
            "name": "VipRule_Static",
            "actions": [
                {
                    "type": "TRANSFER_TO_SKILL",
                    "payload": {
                        "skillId": "12345"
                    }
                }
            ]
        }
    }
    ```

##### Test Regular policy

{:start="5"}
5. In the policy list in Maven Workspace, click on the toggle switch and now disable the **VipRule_Static** policy, and enable the **RegularCustomerRule_Static**

6. Navigate to Developer Key in Maven workspace, create a new key, and copy the key to use later. 

7. Use the following CURL command in Bash to call AskMaven

    1. Replace the account ID field with your Live Person account ID

    2. Replace the Maven API key you previously copied from the Developer Key section

    ```bash
    curl --request GET \

    --url https://z1.askmaven.liveperson.net/v1/account/<accountID>/next-actions \

    --header 'maven-api-key:  <API Key>'
    ```

8. Here is the sample JSON output you should see

```json
{
    "rule": {
        "id": "<some UUID>",
        "name": "RegularCustomerRule_Static",
        "actions": [
            {
                "type": "TRANSFER_TO_SKILL",
                "payload": {
                    "skillId": "67890"
                }
            }
        ]
    }
}
```

Congratulations! You have just executed your first Policy. 

### Create a simple policy using Session Store Attribute

In the previous example we used Static attributes for everything. While this is a great way to test, in the real world, you will need to use attributes that are dynamically retrieved. In this example we will pass the phone number using the [context session store](maven-context-warehouse-context-session-store.html), and then check if the phone number is in a static list.

#### Create Context Attributes

We will be using the Context Session store to store a phone number, and then use it in a policy. To learn more about the session store please see [developer documentation](maven-context-warehouse-context-session-store.html). 

##### Create a New NameSpace

First you need to create a new NameSpace in the session store to store the phone number. 

1. Copy the maven-api-key from the Developer Key section of Maven Workspace

2. Copy and paste this CURL command in Bash to create this namespace. Replace the account id, and API key fields

    ```bash
    curl --request POST \

    --url https://z1.context.liveperson.net/v1/account/<accountid> \

    --header 'content-type: application/json' \

    --header 'maven-api-key: <API Key>' \

    --data '{

        "name": "myNamespace"

    }'
    ```

##### Store customer phone numbers in a session state

Here, we will go ahead and store the phone numbers for both types of customers (Vip and regular) in two separate sessions. We will then use AskMaven to get the policy outcome for each session. 

1. Copy and paste the following CURL command - This is for the VIP customer

    1. Please replace with appropriate account id, and API Key values for your brand

    2. This command stores the phone number for a session (100). Any value for the session is accepted. In a production implementation, we recommend using the conversation ID, for this example, this value is fine

    ```bash
    curl --request PATCH \

    --url https://z1.context.liveperson.net/v1/account/<account id>/myNamespace/100/properties \

    --header 'content-type: application/json' \

    --header 'maven-api-key: <API Key>' \

    --data '{

        "phoneNumber": 55501

    }'
    ```

2. Copy and paste the following CURL command - This is for the Regular customer

    1. This command stores the phone number (55507) for a session (200). 

    ```bash
    curl --request PATCH \

    --url https://z1.context.liveperson.net/v1/account/<account id>/myNamespace/200/properties \

    --header 'content-type: application/json' \

    --header 'maven-api-key: <API Key>' \

    --data '{

        "phoneNumber": 55507

    }'
    ```

#### Create Policies

1. Disable all policies you have previously created by switching off the toggle switch in Maven Workspace. 

2. Create a new VIP policy by clicking Add Policy and then copy and paste this JSON. 

    1. This policy is similar to the one we created using static variables, but instead of getting the phone number from a static attribute, we are retrieving this value from a session attribute (myNameSpace.phoneNumber), that we created earlier. 

    {% raw %}
    ```json
    {
        "name": "VipRule_Session",
        "conditions": [
            {
                "property": "myNameSpace.phoneNumber",
                "type": "IS_IN",
                "value": "{{custom.vipPhoneNumberList}}"
            }
        ],
        "actions": [
            {
                "payload": {
                    "skillId": "12345"
                },
                "type": "TRANSFER_TO_SKILL"
            }
        ]
    }
    ```
    {% endraw %}

3. Create a new regular customer policy by clicking add policy and then copy paste this JSON

    {% raw %}
    ```json
    {
        "name": "RegularCustomerRule_Session",
        "conditions": [
            {
                "property": "myNameSpace.phoneNumber",
                "type": "IS_IN",
                "value": "{{custom.regularCustomerList}}"
            }
        ],
        "actions": [
            {
                "payload": {
                    "skillId": "67890"
                },
                "type": "TRANSFER_TO_SKILL"
            }
        ]
    }
    ```
    {% endraw %}

4. Enable both policies by clicking on the toggle switches. 

#### Use AskMaven to test policy

We will now use AskMaven to check the policy in action

##### Test VIP policy

Use the following CURL command in Bash to call AskMaven 

1. Replace with appropriate account ID and API - Key

2. Note: we are using the conversation ID (100). We previously used this as the session ID in the Session Store for the VIP customer session

3. In this session the phone number is 55501, so the VIP Policy (VipRule_Session) will execute, since it will satisfy the conditions in that policy

```bash
curl --request GET \

 --url https://z1.askmaven.liveperson.net/v1/account/<accountID>/next-actions?conversationId=100 \

 --header 'maven-api-key:  <API Key>'
```

Here is the sample JSON output you should see

```json
{
    "rule": {
        "id": "<some UUID>",
        "name": "VipRule_Session",
        "actions": [
            {
                "type": "TRANSFER_TO_SKILL",
                "payload": {
                    "skillId": "12345"
                }
            }
        ]
    }
}
```

##### Test Regular policy

Use the following CURL command in Bash to call AskMaven 

1. Replace with appropriate account ID and API - Key

2. Note: we are using the conversation ID (200). We previously used this as the session ID in the Session Store

3. In this session the phone number is 55507, the Regular Policy (RegularCustomerRule_Session) will execute, since it will satisfy the conditions in that policy

```bash
curl --request GET \

 --url https://z1.askmaven.liveperson.net/v1/account/<accountID>/next-actions?conversationId=200 \

 --header 'maven-api-key:  <API Key>'
```

Here is the sample JSON output you should see

```json
{
    "nextActionId": "some UUID", 
    "rule": {
        "id": "12345",
        "name": "RegularCustomerRule_Session",
        "actions": [
            {
                "type": "TRANSFER_TO_SKILL",
                "payload": {
                    "skillId": "67890"
                }
            }
        ]
    }
}
```

### Using a LivePerson Functions to check VIP Status

In the previous example we checked for the phone number in a static list. Maintaining such a list is obviously cumbersome. We could also use FaaS to check for VIP status - for example a function that calls a CRM backend to check the phone number at run time. 

1. Create and deploy a new LivePerson function that takes a phone number as an input, and then returns true or false for whether the phone number is of a VIP customer. 

    1. The Function may internally call a CRM backend to check this status. 

    2. Note: creating and deploying a FaaS function is beyond the scope of this document and hence not covered.

2. In Maven Workspace navigate to Context Warehouse/Static, and then click Add Function

3. Copy and Paste the following JSON

    3. Use the session attribute for phone number (myNameSpace.phoneNumber) as the input for the FaaS function. 

    4. Please provide the appropriate keys as described in [documentation](maven-context-warehouse-custom-static-or-function.html#create-a-liveperson-function-variable)

    {% raw %}
    ```json
    {
        "name": "isVipFaaS",
        "payload": {
            "faasId": "",
            "appKey": {
                "username": "",
                "appKey": "",
                "secret": "",
                "accessToken": "",
                "accessTokenSecret": ""
            },
            "body": {
                "headers": [],
                "payload": "{{myNameSpace.phoneNumber}}"
            }
        }
    }
    ```
    {% endraw %}

##### Create Policy to use the FaaS Function

1. Create the VIP policy

    ```json
    {
        "name": "VipRule_Session_FaaS",
        "conditions": [
            {
                "property": "custom.isVipFaaS",
                "type": "EQUALS",
                "value": true
            }
        ],
        "actions": [
            {
                "payload": {
                    "skillId": "12345"
                },
                "type": "TRANSFER_TO_SKILL"
            }
        ]
    }
    ```

2. Create the regular customer policy

    ```json
    {
        "name": "RegularCustomerRule_Session_FaaS",
        "conditions": [
            {
                "property": "custom.isVipFaaS",
                "type": "EQUALS",
                "value": false
            }
        ],
        "actions": [
            {
                "payload": {
                    "skillId": "67890"
                },
                "type": "TRANSFER_TO_SKILL"
            }
        ]
    }
    ```

You can now test the policies using steps described [here](#use-askmaven-to-test-policy).

### Using a Policy with Conversation Builder

We have so far just used AskMaven and Context Session Store API calls in policies. This is still a great way to troubleshoot and investigate issues independently. 

This section briefly describes how to use Maven policies with a routing bot. 

<img class="fancyimage" width="750" src="img/maven/maven_ai_routing_tut_image_2.png">

The basic flow of steps is similar to what we did with CURL commands, but this time all session attributes and actual transfer to skill is done inside the bot. 

The steps are as follows:

1. Gather all session attributes you need for policy, for example conversation ID, intent, or phone number as variables inside conversation builder

    1. Phone number can be retrieved as a context variable inside Conversation builder if available (for example if the conversation starts in whatsapp, and phone number can be passed through the connector)

2. Use an API integration inside conversation builder to store the session attributes 

    1. Use the conversationID as the session attribute. 

3. Use an API integration inside conversation builder to call AskMaven

    1. Pass the same conversationID in the AskMaven call. This allows Maven to retrieve the session attributes stored in the previous step in a policy

4. Parse the JSON that is returned from AskMaven (e.g. skillID to transfer to), and then Transfer to the specific skill. 

#### Get Conversation id 

[See here](conversation-builder-conversation-builder-scripting-functions.html#get-conversation-id) for how to get and store a conversation ID in a bot session variable.

Please use the variable `{$botContext.conversationId}` while calling the Context Session Store API (SessionID) and AskMaven API (ConversationID). 

#### Transfer to an Agent or Bot

Once you have retrieved the JSON response for a routing decision using AskMaven, you will need to parse the JSON to extract the skill to transfer to. To learn how to enable this please see documentation [Transfer to Agent or Bot](conversation-builder-best-practices-transfer-to-an-agent-or-bot.html). 

