---
pagename: Conversation Context Service
redirect_from:
  - maven-context-warehouse-context-session-store.html
  - maven-ai-context-warehouse-context-session-store.html
  - conversation-orchestrator-context-warehouse-context-session-store.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Conversation Context Service
permalink: conversation-orchestrator-conversation-context-service-conversation-context-service.html
indicator: messaging
---

### Overview

The Conversation Context Service API is a REST interface to a cloud based repository for storing and retrieving session state attributes that can be carried over and used throughout the conversational journey. This allows continuity in conversations as context can be transferred between agents and bots enabling a true warm handoff. The Conversation Context Service can be used for several purposes. For example:

1. Save the conversation session state data in Conversational Cloud (e.g. agent notes), and then retrieve them later in a different conversation session with a different agent.

2. Save contextual attributes in a concierge bot (e.g. intents or customer information) and carry this context over to another bot or human skill. 

The Conversation Service Context APIs are part of Conversation Orchestrator, LivePerson’s AI engine, that allows brands to store, retrieve, and manage custom attributes programmatically. The context store provides a system of hierarchically organizing your data.

<img class="fancyimage" width="600" src="img/maven/image_37.png">

Each brand can have multiple **namespaces** for different business use cases. Typically a namespace may group together related attributes, for example customer information such as name, email, phone number etc. which are stored as **Key-Value Pairs.** Brands can define as many attributes they need per namespace. To group together the attributes in a namespace for example a conversation session brands can use the **Session ID**. Each object in the hierarchical structure (Namespace, Session ID, KVPs) comes with CRUD (Create, Read, Update, Delete) operations using the REST APIs. 

<!--
{: .important}
If you want to use the Conversation Context Service with Conversation Builder, please use the convenient [API wrapper functions](conversation-builder-scripting-functions-context-session-store-wrapper.html).
-->
### Example Use Cases

* Passing context (intent, customer info) and customer routing / escalation path between bots.

<img class="fancyimage" width="600" src="img/maven/image_38.png">

* Use shared context across different agents in a single conversation

<img class="fancyimage" width="600" src="img/maven/image_39.png">

* Carry over attributes and information collected in a multi-step conversational journey for continuity and warm handoffs between bots and human agents. 

<img class="fancyimage" width="600" src="img/maven/image_40.png">

### Developer Key

To use Conversation Context Service APIs you will need to create and use an API key. To get your unique key:

1. Login to Conversation Orchestrator with your Conversational Cloud credentials and then navigate to **Developer Key**.

2. Copy and paste the key you see in the experience and use it in your API headers. 

3. To generate a new key, click on the **Regenerate Key** button. Please note that this will invalidate the previous key. The key is shared for all Conversation Orchestrator APIs and therefore you will have to use the new key wherever the APIs are being called.  

<img class="fancyimage" width="750" src="img/maven/devkey.png">

### Methods

Every API call to the Conversation Orchestrator's Conversation Context Service requires the following Auth Headers to be accepted

`Content-Type : application/json`

`maven-api-key : <INSERT YOUR API KEY HERE>`

#### Base URL per environment

AMERICAS : https://z1.context.liveperson.net  
EMEA: https://z2.context.liveperson.net  
APAC: https://z3.context.liveperson.net  


#### Create a custom namespace

To use the Conversation Orchestrator Context API, you will first need to create a Namespace.

You will use the namespace value that is returned in the response in all other Context API methods.

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/v1/account/{accountId}</td>
            <td>Create a custom namespace</td>
            <td>{
              "name": "someCustomNamespace"
            }
            </td>
            <td>Empty body; status code = 204
            </td>
        </tr>
    </tbody>
</table>

##### Example: 
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash
curl --request POST \

  --url https://z2.context.liveperson.net/v1/account/577089 \

  --header 'content-type: application/json' \

  --header 'maven-api-key: CEl7KSCf59IQEAFTQ1H2uCGv0yr4Hxyz' \

  --data '{

    "name": "myCoolNamespace"

}'
```

#### Set custom namespace properties

This will override the value if an existing key is used. If a new key is used then it will be added. If a key is omitted it will not be removed.


<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PATCH</td>
            <td>/v1/account/{accountId}/{customNamespace}/properties</td>
            <td>Set custom namespace properties </td>
            <td>JSON object of properties and values:

{"a":1,"b":"hello","c":true}</td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

##### Example:
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash
curl --request PATCH \

  --url https://z3.context.liveperson.net/v1/account/739483/myCoolNamespace/properties \

  --header 'content-type: application/json' \

  --header 'maven-api-key: CEl7KSCf59IQEAFTQ1H2uCGv0yr4Hxyz' \

  --data '{

    "minutesSinceLastConversation": 720,

    "salesforceId": "xyz@test.com",

    "isSomething": true

}'
```

#### Set custom namespace properties within a session

This will override the value if an existing key is used. If a new key is used then it will be added. 

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PATCH</td>
            <td>/v1/account/{accountId}/{customNamespace}/{sessionId}/properties</td>
            <td>Set custom namespace properties </td>
            <td>JSON object of properties and values:

{"a":1,"b":"hello","c":true}</td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

Example:
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash
curl --request PATCH \
  --url https://z3.context.liveperson.net/v1/account/739483/myCoolNamespace/session100/properties \
  --header 'content-type: application/json' \
  --header 'maven-api-key: LkhR5UPv03zP4xrwacy6wx7LYCverxyz' \
  --data '{
	"a": 720,
	"b": "jeff@test.com",
	"c": true
}'

```
#### Get list of namespaces created

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/v1/account/:accountId</td>
            <td>List of namespaces created</td>
            <td></td>
            <td>[{"name":"myCoolNamespace","createdAt":"2019-08-02T19:41:52.017Z"},{"name":"myTestNamepsace","createdAt":"2019-08-08T06:12:23.204Z"}</td>
        </tr>
    </tbody>
</table>

##### Example: 

Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated
```bash

curl --request GET \
  --url https://z2.context.liveperson.net/v1/account/362095 \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9Uxyz'

```

#### Get all namespace variables or properties

This will get all Key/value pairs for all requested properties that are available, prefixed with the namespace.

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/v1/account/{accountId}/{customNamespace}/properties</td>
            <td>Get all Key/value pairs for all requested properties that are available </td>
            <td></td>
            <td>{"a":1000,"b":"mm@virtuoz.com","c":false,"d":1000}
            </td>
        </tr>
    </tbody>
</table>

##### Example:
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash
curl --request GET \
  --url https://z3.context.liveperson.net/v1/account/739483/myCoolNamespace/properties \
  --header 'maven-api-key: LkhR5UPv03zP4xrwacy6wx7LYCverxyz'

```

#### Get all sessionIds

Customer can generate multiple sessionIds under one namespace. The APIs described here are to show a list of sessionIds generated under one namespace. We provide two APIs, the first is to return the SessionIds, and the other is to return the properties with SessionIds.

Because the number of sessions can be quite large, the API supports pagination. There are two optional parameters for this:

* page
  * This sets the index of the page to be returned. Index starts at 0. 
  * Type: int
  * Default value: 0
  * Range: A number greater than or equal to zero.
* perPage
  * This sets the number of rows returned per page
  * Type: int
  * Default value : 100
  * Range: A number between 1 and 1000

##### Pagination examples

```
http://url.liveperson.net/v1/account/{accountId}​/{namespace}/session-ids?perPage=1000
http://url.liveperson.net/v1/account/{accountId}​/{namespace}/session-ids?page=1&perPage=200
http://url.liveperson.net/v1/account/{accountId}​/{namespace}/session-properties?page=0
http://url.liveperson.net/v1/account/{accountId}​/{namespace}/session-properties?page=1&perPage=300
```


<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/v1​/account​/{accountId}​/{customNamespace}​/session-ids</td>
            <td>Get all sessionIds under a namespace</td>
            <td></td>
            <td>
            [
            "testSessionId01",
            "testSessionId02"
            ]
            </td>
        </tr>
        <tr>
            <td>GET</td>
            <td>​/v1​/account​/{accountId}​/{customNamespace}​/session-properties</td>
            <td>Get all sessionIds with properties under a namespace</td>
            <td></td>
            <td>
                [
                    {
                        "sessionId": "testSessionId01",
                        "properties": {
                        "testProperty01": "testValue01",
                        "testProperty02": "testValue02",
                        "testProperty03": "testValue03"
                        }
                    },
                    {
                        "sessionId": "testSessionId02",
                        "properties": {
                        "testProperty11": "testValue11",
                        "testProperty12": "testValue12"
                        }
                    }
                ]
            </td>
        </tr>
    </tbody>
</table>

##### Examples

```bash
curl --request GET \
  --url http://lo.mavencontext.int.liveperson.net/v1/account/44078251/testNamespace/session-ids?perPage=100 \
  --header 'maven-api-key: hD2kGFmLPwNDQwNzgyNTE='
```

```bash
curl --request GET \
  --url http://lo.mavencontext.int.liveperson.net/v1/account/44078251/testNamespace/session-properties?perPage=100 \
  --header 'maven-api-key: hD2kGFmLPwNDQwNzgyNTE='
```


#### Get all properties within a session

We recommend to use Namespace to group related attributes (KVPs), and use the sessionID to store as a session state variable. You can put anything you want in the sessionId. If you want to put consumer and conversation data in the same namespace, you can as long as the sessionIDs are unique across the two. And it's optional – if omitted, the system will use a default sessionId of `__default__`

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/v1/account/{accountId}/{customNamespace}/{sessionId}/properties/</td>
            <td>Get all properties
            </td>
            <td></td>
            <td>{"a":1000,"b":"mm@virtuoz.com","c":false,"d":1000}</td>
        </tr>
    </tbody>
</table>

##### Example: 
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash

curl --request GET \
  --url https://z2.context.liveperson.net/v1/account/362095/myCoolNamespace/session100/properties \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9Uxyz'

```

#### Get one property 

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td> /v1/account/{accountId}/{customNamespace}/{sessionId}/properties/{propertyName}</td>
            <td>Get one property</td>
            <td></td>
            <td>{"d":1000}</td>
        </tr>
    </tbody>
</table>

##### Example: 
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash
curl --request GET   --url https://z2.context.liveperson.net/v1/account/90233/myCoolMamespace2/properties/{propertyName}   --header 'maven-api-key:  BEnAcoA2p4OTAyMzM1Nxyz'


```

#### Update multiple properties within a session group

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Request Payload Example</th>
            <th>Response Payload Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PATCH</td>
            <td>/v1/account/{accountId}/{customNamespace}/{sessionId}/properties/
            </td>
            <td>Update multiple properties
            </td>
            <td>{
	"a": 1,
	"b": 2,
	"c": 3
}</td>
            <td></td>
        </tr>
    </tbody>
</table>

##### Example: 
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash

curl --request PATCH \
  --url https://z2.context.liveperson.net/v1/account/362095/myCoolNamespace/session100/properties \
  --header 'content-type: application/json' \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9Uxyz' \
  --data '{
	"a": 1,
	"b": 2,
	"c": 3
}'


```

#### Pass multiple propertyName to the GET properties	

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET </td>
            <td>/v1/brand/{accountID}/{customNamespace}/{sessionId}/properties?include=prop1,prop2,prop3</td>
            <td>pass multiple propertyName to the GET properties</td>
        </tr>
    </tbody>
</table>

##### Example: 
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash

curl --request GET \
  --url https://z2.context.liveperson.net/v1/account/362095/myCoolNamespace/properties?include=minutesSinceLastConversation,salesforceId \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9Uxyz'

```


#### Delete a sessionID (Group of properties)

Delete sessionID would be used if brands wants to delete a set of session attributes within a namespace. For instance after the attributes have been used in a conversational journey they may decide to delete the values at the logical end of the conversation. 


<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>DELETE</td>
            <td>/v1/account/{accountId}/{customNamespace}/{sessionId}/properties</td>
            <td>Delete a group of properties </td>
        </tr>
    </tbody>
</table>

##### Example: 
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash

curl --request DELETE \
 --url https://z2.context.liveperson.net/v1/account/362095/myCoolNamespace/session100/properties \
 --header 'maven-api-key: 04UQXk21ZDmKdN9jTwP8ty1sSoTLFxyz'

```
#### Delete a property


<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>DELETE</td>
            <td>/v1/account/{accountId}/{customNamespace}/properties/{propertyName}</td>
            <td>Delete a property</td>
        </tr>
    </tbody>
</table>

##### Example: 
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash
curl --request DELETE \
  --url https://z2.context.liveperson.net/v1/account/362095/myCoolNamespace/properties/isSomething \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9Uxyz'

```
#### Delete a custom namespace

Delete namespace may be used if brand wants to retire a namespace. This would really be quite rare, and may happen if entire set of attributes are not used any more, such as an entire use case is being retired.

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>DELETE</td>
            <td>/v1/account/{accountId}/{customNamespace}</td>
            <td>Delete a custom namespace</td>
        </tr>
    </tbody>
</table>

##### Example: 
Note: the accountId and API key in these examples are fake - please replace it with your accountID and developer key that you generated

```bash
curl --request DELETE \
  --url https://z2.context.liveperson.net/v1/account/362095/myCoolNamespace \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9Uxyz'

```
