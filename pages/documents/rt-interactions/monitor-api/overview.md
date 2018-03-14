
### Introduction

The "Monitor API" is meant to serve the consumer monitoring and engaging flows. In order to present a "Click to Engage" button (an engagement) with an updated state of availability, the LivePerson monitoring system must be accessed in order to create a monitor session and reply with an engagement. By doing so, the monitoring system tracks the consumer activity within the brand's system and engages the consumer based on campaign definitions.   

### Terminology
* consumer - TBD
* `consumerId` - the brand's identifier for the consumer (e.g, email, telephone number or a generated unique id)
* consumer device - TBD
* monitor session - the server-side state of the current consumer device session
* `visitorId` - the LivePerson identifier to the current consumer device 
* `sessionId` - the LivePerson identifier to the current monitor session of this consumer device
* `appInstallationId` - TBD
* campaign - TBD
* engagement - TBD


### A sample flow:
1. The consumer device sends a request to the [Engagement Resource](rt-interactions-engagement.html){:target="_blank"}. 
** the above request can be added with the following information regarding consumer activity within the brand's system -  `consumerId`, entry points, engagement attributes, client properties, etc'...
2. The monitoring system creates a monitor session for this consumer device and replies with an eligible engagement, including the `visitorId` and a `sessionId` in the response.
3. The consumer device sends a request to the [Report Resource](rt-interactions-report.html){:target="_blank"}, specifying the `visitorId` and a `sessionId` in the request, in order to report about the status of the engagement usage - displayed, clicked, etc'... 


### Notes (!)
The "Monitor API" is a **stateful API**. This (server-side) state is the monitor session, identified by a pair of 2 parameters - `visitorId` and a `sessionId`. In order to maintain consistency, maintain a proper funnel and avoid unnecessary load, it is highly (!) advisable to provide the `sessionId` and `visitorId`, that are created in the first request for a consumer device monitor session, in all subsequent requests to all resources of the "Monitor API":

* A response code of **200 (OK)** 		- means that the values of the `visitorId` and a `sessionId` that were provided are valid - the pair represents a valid monitor session.
* A response code of **201 (CREATED)** 	- means that no values were provided for the `visitorId` and/or `sessionId` query parameters, or the values provided are otherwise invalid - therefore, a new monitor session was created (the new `visitorId` and  `sessionId` appear in the response body).


### Protocols
* HTTP based - All information (both client to server and server to client) will be passed using an HTTP request-response model
* HTTPS only - Only **secured** (SSL) requests will be handled
* JSON based - All data (both directions) will be passed using a valid JSON. **Note** - clients should not rely on a closed set of attributes since the format is JSON ("Forward Compatibility").


### Authentication and Authorization
This API is public. When specifying `appInstallationId` and `accountId`, it does not require any further authentication or authorization only simple id validation.


### Usage, Capping and Error handling
* In order to avoid unnecessary load, **it is highly (!) advisable to provide the `sessionId` and `visitorId` of the consumer device** in all subsequent requests (e.g. the 2nd request onwards) spanning the current monitor session.
* Not complying to the above usage of the `sessionId` and `visitorId` parameters may lead to an exceptional (abnormal) rate of monitor sessions' creation which will eventually be capped and will result in erroneous 5XX responses.    


#### Response Errors
| Status code | Internal code | Description | Notes |
| :--- | :--- | :--- | :--- |
| 400 | 33 | illegal API version requested | |
| 400 | 5 | request data is missing or invalid | request body is not a valid JSON ; input does not meet validation requirements; input cannot be parsed ... |
| 404 | 37 | invalid visitorId | |
| 404 | 39 | invalid sessionId | |
| 404 | 18 | invalid appInstallationId | |
| 500 | 20 | account not loaded or request timed out | |
| 500 | 18 | internal server error | an unexpected server error occurred |

### Use Cases 
** Sivan **
