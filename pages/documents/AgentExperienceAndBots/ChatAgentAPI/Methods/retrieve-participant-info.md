---
pagename: Retrieve Participant Info
redirect_from:
  - agent-retrieve-participant-info.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Chat Agent API
subfoldername: Methods

order: 150
permalink: chat-agent-api-methods-retrieve-participant-info.html

indicator: chat
---

This method retrieves information regarding the authenticated visitor within the chat. The information section includes the authentication state and the authenticated consumer SDEs.

### Request

| Method | URL                                                                                       |
|--------|-------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/participantExtendedInfo/{participantId}?v=1&NC=true |

**Request Headers**

| Header                                   | Description      |
|------------------------------------------|------------------|
| Authorization Bearer {bearer-from-login} |                  |
| Content-Type                             | application/json |
| Accept                                   | application/json | 

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

### Response

**Elements in the response**

{  
   "authenticatedParticipantInfo":{  
      "isUserAuthenticated":true,
      "participantId":"55fc1779-83b0-4e8b-8eea-503a8eaf8822",
      "balance":-400.99,
      "registrationDate":{  
         "year":2013,
         "month":5,
         "day":23
      },
      "lastPaymentDate":{  
         "year":2014,
         "month":10,
         "day":15
      },
      "customerId":"57ac-072a-5d10-4506-721f-9ebf",
      "customerStatus":"cancelled",
      "customerType":"vip",
      "socialId":"11256324780",
      "imei":"3543546543545688",
      "userName":"testuser",
      "companySize":500,
      "accountName":"bank corp",
      "role":"broker"
   },
   "authenticatedPersonalInfo":{  
      "name":"Test",
      "surname":"User",
      "contacts":[  
         {  
            "email":"testuser@liveperson.com",
            "phone":"+1-10-344-3765333"
         }
      ]
   }
}

| Name           | Description                                                        | Type              | Notes                     |
|----------------|--------------------------------------------------------------------|-------------------|---------------------------|
| authenticatedParticipantInfo   | The authenticated information sent by the visitor. | Object            |          |
| authenticatedPersonalInfo      | Additional authenticated information sent by the visitor. | Object     | Optional |

**Response Codes**

| Code| Response|
|------|------| 
 |200  |OK |