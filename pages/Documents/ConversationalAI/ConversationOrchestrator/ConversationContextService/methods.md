---
pagename: Methods
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Conversation Context Service
permalink: conversation-orchestrator-conversation-context-service-methods.html
indicator: messaging
---

There are two ways to manage properties in the Conversation Context Service (CCS): 

* REST APIs can directly access the CCS outside of Conversational Cloud. Use the REST APIs when you want to retrieve information from external data sources.
* A Javascript function wraps the REST API for easy use within Conversational Cloud. If you want to save and delete properties in Conversation Builder, use the Javascript wrapper functions.

### JavaScript wrapper

For information on this, see [here](conversation-builder-scripting-functions-manage-the-conversation-context-service.html) in the Conversation Builder documentation.

### REST APIs - Overview

If the Conversation Context Service(CCS) is summarized in one sentence, it is a service that manages properties in a key-value relationship. So, most APIs are for storing, reading, and deleting properties, and there are some additional APIs.

Every API call to the CCS requires the following auth headers to be accepted:
  
* content-Type : application/json  
* maven-api-key : {YOUR API KEY}

Base URL per environment:

* AMERICAS : https://z1.context.liveperson.net
* EMEA: https://z2.context.liveperson.net
* APAC: https://z3.context.liveperson.net

{: .important}
The accountId and API key in these examples are fake; please replace them with your accountID and the developer key that you generated.

### REST APIs - Property API

#### Save properties

#### Save namespace properties
This is an API for saving one or several namespace properties. This API overwrites existing properties and inserts non-existing properties.

| Method | Path |
| --- | --- |
| PATCH | /v1​/account​/{accountId}​/{customNamespace}​/properties |

Request payload example:<br>
{ "myProperty1": "myValue1", "myProperty2": 2, "myProperty3": { "name": "myValue3" } }

Example:
```bash
curl -X PATCH "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/properties" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw==" -H  "Content-Type: application/json" -d "{\"myProperty1\":\"myValue1\",\"myProperty2\":2,\"myProperty3\":{\"name\":\"myValue3\"}}"
```

Response payload example:<br>
Empty body; status code = 204

#### Save a namespace property
This is an API for saving one namespace property. This API overwrites an existing property and inserts a non-existing property.

| Method | Path | 
| --- | --- |
| PUT | /v1​/account​/{accountId}​/{customNamespace}​/properties​/{property} | 

Request payload example:<br>
"value4"

Example:
```bash
curl -X PUT "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/properties/myProperty4" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw==" -H  "Content-Type: application/json" -d "\"value4\""
```

Response payload example:<br>
Empty body; status code = 204

#### Save session properties
This is an API for saving one or several session properties. This API overwrites existing properties and inserts non-existing properties.

| Method | Path | 
| --- | --- |
| PATCH | ​/v1​/account​/{accountId}​/{customNamespace}​/{sessionId}​/properties | 

Request payload example:<br>
{ "myProperty1": ["value1", "value2", "value3"] }

Example:
```bash
curl -X PATCH "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/mySessionId/properties" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw==" -H  "Content-Type: application/json" -d "{\"myProperty1\":[\"value1\",\"value2\",\"value3\"]}"
```

Response payload example:<br>
Empty body; status code = 204

#### Save a session property
This is an API for saving one session property. This API overwrites an existing property and inserts a non-existing property.

| Method | Path | 
| --- | --- |
| PUT | /v1​/account​/{accountId}​/{customNamespace}​/{sessionId}​/properties​/{property} | 

Request payload example:<br>
{ "name": "value2", "items": ["A", "B", "C"] }

Example:
```bash
curl -X PUT "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/mySessionId/properties/myProperty2" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw==" -H  "Content-Type: application/json" -d "{\"name\":\"value2\",\"items\":[\"A\",\"B\",\"C\"]}"
```

Response payload example:<br>
Empty body; status code = 204

#### Read properties

#### Read namespace properties
This API takes a namespace as a parameter and returns all properties belonging to the namespace.

| Method | Path | 
| --- | --- |
| GET | /v1​/account​/{accountId}​/{customNamespace}​/properties | 

Request payload example:<br>
N/A

Example:
```bash
curl -X GET "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/properties" -H  "accept: application/json" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
```
{
  "myProperty1": "myValue1",
  "myProperty2": 2,
  "myProperty3": {
    "name": "myValue3"
  }
}
```

#### Read a namespace property
This API takes a namespace and a property as a parameter and returns the value of the namespace property.

| Method | Path | 
| --- | --- |
| GET | /v1​/account​/{accountId}​/{customNamespace}​/properties​/{property} | 

Request payload example:<br>
N/A

Example:
```bash
curl -X GET "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/properties/myProperty1" -H  "accept: application/json" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
myValue1

#### Read session properties
This API takes a namespace and a session as a parameter and returns all session properties belonging to the namespace and session.

| Method | Path | 
| --- | --- |
| GET | /v1​/account​/{accountId}​/{customNamespace}​/{sessionId}​/properties | 

Request payload example:<br>
N/A

Example:
```bash
curl -X GET "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/mySessionId/properties" -H  "accept: application/json" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
```
{
  "myProperty1": [
    "value1",
    "value2",
    "value3"
  ]
}
```

#### Read a session property
This API takes a namespace, a session and a property as a parameter and returns the value of the session property.

| Method | Path | 
| --- | --- |
| GET | /v1​/account​/{accountId}​/{customNamespace}​/{sessionId}​/properties​/{property} | 

Request payload example:<br>
N/A

Example:
```bash
curl -X GET "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/mySessionId/properties/myProperty1" -H  "accept: application/json" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
```
[
  "value1",
  "value2",
  "value3"
]
```

#### Delete properties

There are three ways to delete properties. First, it is automatically deleted by setting the TTL. Second, all properties belonging to the Namespace or Session are deleted at once by specifying the Namespace and Session. Third, explicitly designate and delete specific properties.

#### Delete all namespace properties belonging to the namespace with TTL setting
This API takes a namespace as a parameter and deletes all namespace properties belonging to the namespace. It also removes the TTL applied to the namespace.

| Method | Path | 
| --- | --- |
| DELETE | /v1​/account​/{accountId}​/{customNamespace} | 

Request payload example:<br>
N/A

Example:
```bash
curl -X DELETE "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
Empty body; status code = 204

#### Delete all properties belonging to Namespace without TTL setting

{: .important}
Currently, this feature is not supported.

#### Delete all properties belonging to Session with TTL setting
This API takes a namespace and a session as a parameter and deletes all session properties belonging to the namespace and session. It also removes the TTL applied to the session.

| Method | Path | 
| --- | --- |
| DELETE | ​/v1​/account​/{accountId}​/namespace​/{customNamespace}​/session​/{sessionId} | 

Request payload example:<br>
N/A

Example:
```bash
curl -X DELETE "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/namespace/myNamespace/session/mySessionId" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
Empty body; status code = 204

#### Delete all properties belonging to Session without TTL setting
This API takes a namespace and a session as a parameter and deletes all session properties belonging to the namespace and session. However, it does not remove the TTL applied to the session.

| Method | Path | 
| --- | --- |
| DELETE | /v1​/account​/{accountId}​/{customNamespace}​/{sessionId}​/properties | 

Request payload example:<br>
N/A

Example:
```bash
curl -X DELETE "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/mySessionId/properties" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
Empty body; status code = 204

#### Delete a namespace property
This API takes a namespace and a property name as a parameter and deletes the namespace property.

| Method | Path | 
| --- | --- |
| DELETE | /v1​/account​/{accountId}​/{customNamespace}​/properties​/{property} | 

Request payload example:<br>
N/A

Example:
```bash
curl -X DELETE "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/properties/myProperty1" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
Empty body; status code = 204

#### Delete a session property
This API takes a namespace, a session and a property name as a parameter and deletes the session property.

| Method | Path | 
| --- | --- |
| DELETE | /v1​/account​/{accountId}​/{customNamespace}​/{sessionId}​/properties​/{property} | 

Request payload example:<br>


Example:
```bash
curl -X DELETE "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/myNamespace/mySessionId/properties/myProperty1" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>

#### Get all variables
The APIs described here are to show a list of sessionIds that have any properties. There are two APIs: The first is to return the SessionIds, and the second is to return the properties with SessionIds.

Because the number of sessions can be quite large, the API supports pagination. There are two optional parameters for this:

page 
* This sets the index of the page to be returned. Index starts at 0. 
* Type: int 
* Default value: 0 
* Range: A number greater than or equal to zero. 

perPage 
* This sets the number of rows returned per page 
* Type: int 
* Default value : 100 
* Range: A number between 1 and 1000

#### Get all sessionIds
| Method | Path | 
| --- | --- |
| GET | /v1​/account​/{accountId}​/{customNamespace}​/session-ids | 

Request payload example:<br>
N/A

Example:
```bash
curl -X GET "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/ns1/session-ids?page=0&perPage=100" -H  "accept: application/json" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
```
[
   "__default__",
  "mySessionId",
   ...
]
```

#### Get all properties within a session
| Method | Path | 
| --- | --- |
| GET | /v1​/account​/{accountId}​/{customNamespace}​/session-properties | 

Request payload example:<br>
N/A

Example:
```bash
curl -X GET "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/ns1/session-properties?page=0&perPage=100" -H  "accept: application/json" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
```
[
  {
    "sessionId": "ss1",
    "property": {
      "key1": "val1",
      "key2": "val2",
    }
  },
  ...
]
```

### REST APIs - TTL API

#### Set TTL on Namespace
This API takes a namespace and ttlSeconds as parameters, and then sets the TTL of the namespace to ttlSeconds. The TTL of all namespace properties created or updated afterwards has the value of ttlSeconds automatically. One thing to note is that the TTL of an existing namespace property does not change until it is updated.

| Method | Path | 
| --- | --- |
| POST | /v1/account/{accountId}?ttlSecond={ttlSecond} | 

Request payload example:<br>
{ "name": "someCustomNamespace" }

Example:
```bash
curl --request POST \
--url http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475?ttlSecond=100 \
--header 'content-type: application/json' \
--header 'maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw==' \
--data '{
  "name": "myNamespace"
  }'
```

Response payload example:<br>
Empty body; status code = 204

#### Set TTL on Session
This API takes a namespace, session and ttlSeconds as parameters, and then sets the TTL of the session to ttlSeconds. The TTL of all session properties created or updated afterwards has the value of ttlSeconds automatically. One thing to note is that the TTL of an existing session property does not change until it is updated.

| Method | Path | 
| --- | --- |
| POST | /v1/account/{accountId}/namespace/{customNamespace}/session?ttlSecond={ttlSecond} | 

Request payload example:<br>
{ "sessionId": "someSessionId" }

Example:
```bash
curl -X POST 'http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/namespace/myNamespace/session?ttlSecond=100' -H  "accept: */*" -H  'maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw==' -H  'Content-Type: application/json' -d '{"sessionId":"mySessionId"}'
```

Response payload example:<br>
Empty body; status code = 204

#### Get TTL list on Namespaces
You can use this API to retrieve the list of TTLs applied to a namespace. Please note that this API is not intended to look up all namespaces in use. Even if you are actively using namespaces, they will be excluded from the list unless you have set the TTL.

| Method | Path | 
| --- | --- |
| GET | ​/v1​/account​/{accountId} | 

Request payload example:<br>
N/A

Example:
```bash
curl -X GET "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475" -H  "accept: application/json" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
```
[
  {
    "name": "myNamespace",
    "createdAt": "2021-02-26T02:46:38.220Z",
    "ttlSecond": 100
  },
  ...
]
```

#### Get TTL list on Sessions
You can use this API to retrieve the list of TTLs applied to the session. Please note that this API is not intended to look up all sessions in use. Even if you are actively using sessions, they will be excluded from the list unless you have set the TTL.

| Method | Path | 
| --- | --- |
| GET | ​/v1​/account​/{accountId}​/namespace​/{customNamespace}​/session | 

Request payload example:<br>
N/A

Example:
```bash
curl -X GET "http://lp-mavencontext-app-qa.dev.lprnd.net/v1/account/le63071475/namespace/myNamespace/session" -H  "accept: application/json" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
```

Response payload example:<br>
```
[
  {
    "sessionId": "mySessionId",
    "createdAt": "2021-02-26T07:42:13.868Z",
    "ttlSecond": 100
  },
  ...
]
```
