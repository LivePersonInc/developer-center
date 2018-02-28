
### Introduction

When implementing an API based ???

In order to present a "Click to Chat" button with an updated state of availability, you must access the LP Monitoring system to create a visitor session and get an engagement. This call can be made by the getEngagement() function by the Monitor API. 

???

**Note**: This API works for engagements only of the APP_INSTALL type. If you do not have an engagement of either of these types, this API **will not work**. If you attempt to use this API on other types of engagements (for example, offsite or website engagements), the API calls will fail.

### Important Disclaimer

The "Monitor API" is a **stateful API**. The identifier of the API's state (AKA - session / context) is a pair of 2 parameters - 'vid' and 'sid'. It is highly (!) recommended to provide a valid value to both these parameters when accessing this resource:
- A response code of **200 (OK)** 		- means that the values of the 'vid' and 'sid' query parameters that were provided are valid - the pair represents a valid state.
- A response code of **201 (CREATED)** 	- means that no values were provided for the 'vid' and/or the 'sid' query parameters, or the values provided are otherwise invalid - therefore, a new state was created, which is represented by the 'vid' and 'sid' pair that appears in the response body.

### High Level Concepts
* HTTP based - All information (both client to server and server to client) will be passed using an HTTP request-response model
* HTTPS only - Only **secured** (SSL) requests will be handled
* JSON based - All data (both directions) will be passed using a valid JSON
* Same URL Path - All HTTP requests will be sent with the same URL path (query params may be different) 


### Assumptions 
* There are three separate identifiers - consumerId (authenticated), lpConsumerId (unauthenticated) and the visitorId (shark vid). There can be several visitorIds for the same consumerId/lpConsumerId and vice versa. 

### Forward Compatibility
* Clients should not rely on a closed set of attributes since the format is JSON (no exceptions on marshaling objects).

### Authentication and Authorization
This API is public and doesn’t require authentication or authorization.

### Use Cases / Guidelines
???
* Note the updated data that is returned in the response and use it - pageId, visitorId & sessionId 
* How frequent should they query? 

### Capping / System Protection
???

### Validation
???

### Error handling
Any http error or timeout must be handled by a client as general error and retry according to its retry policy.
In case of unsuccessful http response (not 2xx code) the client must read all messages and handle errors according to the following definitions:
* Error may be sent from a server at any point. 
* First number in the error code defines the general meaning of the error. 4 meaning for client error, and 5 meaning of server error.

#### Error categories
1. session - The session is closed/not created. Need handshake in order to start new one. normally retry = false.
1. request - The whole request was not processed. May retry sending the same request again (normally retry= true). for example: account not loaded.
1. application - Applicative issue. Normally should not retry. Useful for debugging and informing the application developer that something is logically wrong. The server is not tolerant to partially invalid data and all the data will be ignored.  for example if some events can’t be parsed by server, the rest of the events will not be processed too.

#### Response Errors
| Status code | Internal code | Description | Notes |
| :--- | :--- | :--- | :--- |
| 400 | 33 | Illegal API version | |
| 400 | 5 | Mandatory data is missing or invalid, parsing error | Request body is not a valid JSON, one or more SDE’s cannot be parsed, input validation errors |
| 404 | 37 | Invalid or unknown visitor id | Visitor ID must be valid for PUT method |
| 404 | 39 | Invalid or unknown session id | Session ID must be valid for PUT method |
| 404 |  | App installation Id | App installation id must be valid |
| 500 | 20 | Account not loaded or request timed out | First request for new account |
| 500 | 18 | Internal Server Error | Unexpected server error |




