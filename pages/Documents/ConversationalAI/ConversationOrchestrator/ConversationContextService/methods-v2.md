---
pagename: Methods v2
redirect_from: 
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Conversation Context Service
permalink: conversation-orchestrator-conversation-context-service-methods-v2.html
indicator: messaging
---

There are two ways to manage properties in the Conversation Context Service (CCS). 

* REST APIs can directly access the CCS outside Conversational Cloud. Use the REST APIs when you want to retrieve information from external data sources.
* A Javascript function wraps the REST API for easy use within Conversational Cloud. If you want to save and delete properties in Conversation Builder, use the Javascript wrapper functions.

### JavaScript wrapper
For information on this, see [here](conversation-builder-scripting-functions-manage-the-conversation-context-service.html) in the Conversation Builder documentation.

### REST APIs overview

The APIs can be called as shown below. Every API call requires the secure token
{domain}/{api}?access_token=<Token> 

Domain URL per environment:
* AMERICAS : https://z1.context.liveperson.net
* EMEA: https://z2.context.liveperson.net
* APAC: https://z3.context.liveperson.net

{: .important}
For information on generating the secure token, see [here](conversation-orchestrator-api-authorization.html#api-authorization-for-v2).

### REST API - Save Properties

This API can be used to add new properties or update existing properties. This API requires accountId, namespace, session (optional) and time to live as parameters. This API overwrites existing properties and inserts non-existing properties.

| Method | Path | 
| --- | --- |
| POST | /v2/context/document/create |

#### Request payload example
```
{
  "accountId": "le17036892",
  "nameSpace": "myNamespace",
  "sessionId": "mySessionId",
  "ttlSeconds": 3600,
  "payload": { 
    "property1": 100,
    "Property2": "abc" 
  }
}
```

#### Request example
```bash
curl -X POST "https://{domain}/v2/context/document/create?access_token={Token}" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"accountId\":\"le17036892\",\"nameSpace\":\"myNamespace\",\"sessionId\":\"mySessionId\",\"ttlSeconds\":3600,\"payload\":{\"property1\":100,\"Property2\":\"abc\"}}"
```

#### Response payload example
```
{
  "documentKey": "le17036892:myNamespace:mySessionId",
  "tenantId": "le17036892",
  "success": true
}
```

status code = 201

### REST API - Read Properties

#### Retrieve all properties wihtin a namespace

This API requires accountId and namespace as input. In its response, it returns all properties within the namespace.

| Method | Path | 
| --- | --- |
| GET | /v2​/context​/document​/{accountId}​/{nameSpace} |

##### Request payload example
N/A

##### Request example
```bash
curl -X GET "https://{domain}/v2/context/document/le17036892/myNamespace?access_token={Token}" -H  "accept: application/json"
```

##### Response payload example
```
{
  "accountId": "le17036892",
  "documentKey": "le17036892:myNamespace:",
  "documentType": "CONTEXT",
  "nameSpace": "myNamespace",
  "payload": {
    "Property2": "abc",
    "property1": 100
  },
  "tenantId": "le17036892",
  "ttl": "2021-05-11T22:37:39.176Z"
}
```

status code = 200

#### Retrieve all properties within a session
This API requires accountId, namespace and sessionId as inputs. In its response, it returns all properties within the session.

| Method | Path |
| --- | --- |
| GET | /v2​/context​/document​/{accountId}​/{nameSpace}​/{sessionId} |

##### Request payload example
N/A

##### Request example
```bash
curl -X GET "https://{domain}/v2/context/document/le17036892/myNamespace/mySessionId?access_token={Token}" -H  "accept: application/json"
```

##### Response payload example
```
{
  "accountId": "le17036892",
  "documentKey": "le17036892:myNamespace:mySessionId",
  "documentType": "CONTEXT",
  "nameSpace": "myNamespace",
  "payload": {
    "Property2": "abc",
    "property1": 100
  },
  "sessionId": "mySessionId",
  "tenantId": "le17036892",
  "ttl": "2021-05-11T22:37:39.176Z"
}
```

status code = 200

#### Read specific properties
This API requires accountId, namespace and sessionId (optional) and properties as inputs. In its response, it returns all values for those properties.

| Method | Path |
| --- | --- |
| POST | /v2​/context​/document​/properties |

##### Request payload example
```
{
  "accountId": "le17036892",
  "nameSpace": "myNamespace",
  "sessionId": "mySessionId",
  "filter": [
    "myNamespace.property1",
    "myNamespace.property2"
  ]
}
```

##### Request example
```bash
curl -X POST "https://{domain}/v2/context/document/properties?access_token={Token}" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"accountId\":\"le17036892\",\"nameSpace\":\"myNamespace\",\"sessionId\":\"mySessionId\",\"filter\":[\"myNamespace.property1\",\"myNamespace.property2\"]}"
```

##### Response payload example
```
{
  "myNamespace.property1": 100,
  "myNamespace.property2": "abc"
}
```

status code = 200

### REST API - Delete Properties

There are three ways to delete properties:
* By setting the TTL
* By namespace or session
* By removing specific properties

#### Delete properties within a namespace or session
This API takes namespace, session (optional) and properties as parameters and deletes those specific properties.

| Method | Path |
| --- | --- |
| DELETE | /v2​/context​/document​/property​/delete |

##### Request payload example
```
{
  "accountId": "le17036892",
  "nameSpace": "myNamespace",
  "sessionId": "mySessionId",
  "propertyToDelete": [
    "property1"
  ]
}
```

##### Request example
curl -X DELETE "https://{domain}/v2/context/document/delete?access_token={Token}" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"accountId\":\"le17036892\",\"nameSpace\":\"myNamespace\",\"sessionId\":\"mySessionId\"}"

##### Response payload example
```
{
  "documentKey": "le17036892:myNamespace:mySessionId",
  "tenantId": "le17036892",
  "success": true
}
```

status code = 200

#### Delete all properties within a namespace or session
This API takes namespace and session (optional) and deletes all properties within the namespace or session.

| Method | Path | 
| --- | --- |
| DELETE | /v2​/context​/document​/property​/delete |

##### Request payload example
```
{
  "accountId": "le17036892",
  "nameSpace": "myNamespace",
  "sessionId": "mySessionId"
}
```

##### Request example
```bash
curl -X DELETE "https://{domain}/v2/context/document/property/delete?access_token={Token}" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"accountId\":\"le17036892\",\"nameSpace\":\"myNamespace\",\"sessionId\":\"mySessionId\",\"propertyToDelete\":[\"property1\"]}"
```

##### Response payload example
```
{
  "documentKey": "le17036892:myNamespace:mySessionId",
  "tenantId": "le17036892",
  "success": true
}
```

status code = 200

