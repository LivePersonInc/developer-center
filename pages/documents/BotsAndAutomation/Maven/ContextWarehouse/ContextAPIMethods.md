---
pagename: Context API Methods
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Context Warehouse
permalink: maven-context-warehouse-context-api-methods.html
indicator: both
---

Every API call to the Maven Context service requires the following Auth Headers to be accepted

`Content-Type : application/json`

`maven-api-key : <INSERT YOUR API KEY HERE>`

### Create a custom namespace

To use the Maven Context API, you will first need to create a Namespace.

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

Example:

```bash
curl --request POST \

  --url https://z2.context.liveperson.net/v1/account/le57708964 \

  --header 'content-type: application/json' \

  --header 'maven-api-key: CEl7KSCf59IQEAFTQ1H2uCGv0yr4HUtH' \

  --data '{

    "name": "myCoolNamespace"

}'
```

### Delete a custom namespace

{: .important}
Only do this if you want to delete the namespace

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
            <td>DELETE</td>
            <td>/v1/account/{accountId}/{customNamespace}</td>
            <td>Delete a custom namespace</td>
            <td>
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

Example:

```bash
curl --request DELETE \
  --url https://z2.context.liveperson.net/v1/account/36209512/namespace1 \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9U2xf'
```
### Get all namespace variables

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
            <td>Get all Key/value pairs for all requested properties that are available, prefixed with the namespace</td>
            <td></td>
            <td>{"accountID":"le57708964","a":1,"b":"hello","c":true}
            </td>
        </tr>
    </tbody>
</table>

Example:

```bash
curl --request GET \

  --url http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le57708964/myCoolNamespace/properties \

  --header 'maven-api-key: CEl7KSCf59IQEAFTQ1H2uCGv0yr4HUtH'
```

### Set custom namespace properties

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
            <td>/v1/account/{accountId}/{customNamespace}/properties</td>
            <td>Set custom namespace properties [this will override the value if an existing key is used; if a new key is used then it will be added)]</td>
            <td>JSON object of properties and values:

{"a":1,"b":"hello","c":true}</td>
            <td>{"cas":"1560823737328336896"}
            </td>
        </tr>
    </tbody>
</table>

Example:

```bash
curl --request PATCH \

  --url http:///lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le57708964/myCoolNamespace/properties \

  --header 'content-type: application/json' \

  --header 'maven-api-key: CEl7KSCf59IQEAFTQ1H2uCGv0yr4HUtH' \

  --data '{

    "minutesSinceLastConversation": 720,

    "salesforceId": "jeff@virtuoz.com",

    "isSomething": true

}'
```

### Delete a property

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
            <td>DELETE</td>
            <td>/v1/account/{accountId}/{customNamespace}/properties/{propertyName}</td>
            <td>Delete a property</td>
            <td>
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>

Example:

```bash
curl --request DELETE \
  --url https://z2.context.liveperson.net/v1/account/36209512/namespace1/properties/isSomething \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9U2xf'

```

### List of namespaces created

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
            <td></td>
        </tr>
    </tbody>
</table>

Example:

```bash

curl --request GET \
  --url https://z2.context.liveperson.net/v1/account/36209512 \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9U2xf'

```

### Get all properties

You can put anything you want in the entityId. If you want to put consumer and conversation data in the same namespace, you can as long as the entityIDs are unique across the two. And it's optional – if omitted, the system will use a default entityId of `__default__`

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
            <td>/v1/account/{accountId}/{customNamespace}/{entityId}/properties/</td>
            <td>Get all properties
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

Example:

```bash

curl --request GET \
  --url https://z2.context.liveperson.net/v1/account/36209512/namespace1/100/properties \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9U2xf'

```

### Get one property

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
            <td> /v1/account/{accountId}/{customNamespace}/{entityId}/properties/{propertyName}</td>
            <td>Get one property</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

Example:

```bash



```

### Update multiple properties within an entity (group)

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
            <td>/v1/account/{accountId}/{customNamespace}/{entityId}/properties/
            </td>
            <td>Update multiple properties
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

Example:

```bash

curl --request PATCH \
  --url https://z2.context.liveperson.net/v1/account/36209512/namespace2/200/properties \
  --header 'content-type: application/json' \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9U2xf' \
  --data '{
	"a": 1,
	"b": 2,
	"c": 3
}'


```

### pass multiple propertyName to the GET properties

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
            <td>GET </td>
            <td>/v1/brand/{accountID}/{customNamespace}/{entityId}/properties?include=prop1,prop2,prop3</td>
            <td>pass multiple propertyName to the GET properties</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

Example:

```bash

curl --request GET \
  --url https://z2.context.liveperson.net/v1/account/36209512/namespace1/properties?include=minutesSinceLastConversation,salesforceId \
  --header 'maven-api-key: DigxAZB4lO9M0XCaW1DphiwW4Tz9U2xf'

```
