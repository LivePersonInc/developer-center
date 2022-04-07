---
pagename: Service Implementation
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Custom Endpoint
permalink: third-party-bots-custom-endpoint-service-implementation.html
indicator:
---

### Custom Endpoint Service Methods

The Custom Endpoint vendor has a public [GitHub Repository](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
which contains the [OpenAPI Specification](https://swagger.io/specification)
any service needs to implement in order to connect to Third-Party Bots via the Custom Endpoint Vendor
contracts/interface in the format of a swagger file that needs to be implemented by brands.
Following are the methods defined by the specification:

- **Get Bot Environments**: This endpoint fetches the list of environments defined for the passed `botId`
- **Get Bot State**: This endpoint is called on test connection. It should response with the bot state and
  the bot version. Every state besides 'online' will let the test connection fail.
- **Send Conversation Events**: This API sends bot responses on the passed consumer messages.
- **Create Conversation**: This API creates a conversation instance for the given conversation
  (`convId`) for a given `botId`

Please refer to the [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
for detailed information on Request and Response bodies created or expected by the Third-Party Bot connector.

### Authorization and Authentication

Third-Party Bot connector uses [App-JWT OAuth 2.0](accessing-liveperson-apis.html#oauth-20-app-jwt) authentication
mechanism for a server to server interaction. Third-Party Bots uses the provided
`Client ID` and `Client Secret` of an App Installation in the vendor configuration to generate bearer tokens.
More information on the Sentinel API can be found [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt).

Third-Party Bots sends the bearer token inside the `Authorization` on all requests
to the Custom Endpoint service. The brands need to ensure the request is authorised, e.g.
if the account the request is coming from is allowed to access the addressed bot
Custom Endpoint service endpoints.

### Custom Endpoint Service Flows

This section will describe some of the common interaction flows. We will highlight which endpoints
that are described in the [service methods](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
section will be called by the Third-Party Bot connector.

{: .important}
Please note brands needs to store information/session about the Conversation and Bot on their Custom Endpoint
service so that information can be used in subsequent calls.

- Test Connection
- Consumer Message

#### Test Connection

Test connection flow is executed in two different scenarios:

- When a user while creating a Custom Endpoint Bot uses the feature of Test Connection
- When a user starts a bot and Third-Party Bot connector verifies the connection to the Custom Endpoint service

In both scenarios Figure 2.2 shows the sequence of interactions with the involved services
service is called

{: .important}
More information on the Request body and Responses expected by or received from the Custom Endpoint service are available
in [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

<img class="fancyimage" src="img/customendpoint/test-connection-flow.png">
Figure 2.2 showing the happy test connection flow

1. Test Connection Caller calls the Third-party Bots Connector/API
2. Third-Party Bots Connector/API gets Sentinel Bearer by using the credentials provided
   in vendor configuration
3. Response from Sentinel API is sent back with the access token that can be used as a bearer
4. [Get Bot State](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
   endpoint of Custom Endpoint service is called with the bearer token received
   from Sentinel API
5. Response from the [Get Bot State](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
   endpoint is received by Third-Party Bots Connector/API
6. Response of success or failure is sent back based on the response of the Get Bot State endpoint

#### Consumer Message

The consumer message flow is executed once the Third-Party Bot connector receives a consumer message
notification from Universal Message Service (UMS) of Conversational Cloud. Figure 2.3 shows
the sequence diagram of which endpoints in the Custom Endpoint service are called

{: .important}
More information on the Request body and Responses expected by or received from the Custom Endpoint service are available
in [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

<img class="fancyimage" src="img/customendpoint/consumer-message-flow.png">
Figure 2.3 showing the happy consumer message flow

1. Consumer Message notification is received by the Third-party Bots Connector from UMS
2. If Sentinel bearer does not exist Third-Party Bots Connector/API get Sentinel Bearer from
   Sentinel API by using the credentials provided in vendor configuration
3. If the received Consumer Message context does not contain a conversation id or a new conversation
   received then call [Create Conversation](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
   method of the Custom Endpoint service. This call will include [SDES](third-party-bots-custom-endpoint-basic-content.html#engagement-attributes-sdes)
   information and LivePerson context
4. After the creation of the conversation, Third-Party Bot Connector sends a consumer message with the
   Conversation Context to the [Get Conversation Events](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
   method of the Custom Endpoint service
5. After receiving the bot response, Third-Party Bot Connector parse and validate it and send back
   parsed bot response

**Please Note**: In the Consumer Message flow if the Third-Party bot connector receives HTTP 404
response on getting the [Get Conversation Events](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
method call, the Retry mechanism from Step 3 onward will be tried one time more to send the
consumer message to the Custom Endpoint service.
