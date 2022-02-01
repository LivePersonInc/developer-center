---
pagename: API
redirect_from:
  - ConnectToMessaging.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connect To Messaging
permalink: connect-to-messaging-api.html
indicator: messaging
---

### Introduction

Connect To Messaging (C2M) is a product offering from LivePerson allowing brands to offer consumers an option to deflect to messaging when they call into their IVR. C2M API serves as an intermediary between the brand’s IVR System and LivePerson Conversational Cloud, ensuring that the consumer is invited to join a conversation with an agent via eligible messaging channels. Once a consumer responds to a message from that channel, C2M ensures that the conversation is routed to an agent of the appropriate skill specified by the brands.


### Getting Started

1. Onboarding to C2M is a mandatory process before running APIs.
2. Brand’s system should integrate with two C2M API endpoints, which are <strong><i>Eligibility</i></strong> and <strong><i>Invite</i></strong>. 
  * <strong><i>Eligibility:</i></strong> Brands call this endpoint to check whether a consumer is reachable via a messaging channel.
  * <strong><i>Invite:</i></strong> Brands call this endpoint to send a messaging invitation to transfer the customer from IVR to one of their supported channels.


### API Specifications
## C2M Domain

C2M is deployed in three regions. **North America**, **EMEA**(Europe, Middle East and Africa), **APAC**(Asia Pacific). Use the [Domain API](api-guidelines-domain-api.html) to identify the zone of C2M API for an account with <b>connectToMessagingDomain</b> as Service Name.

### Eligibility API

Click [**Eligibility**](https://connect-to-messaging.z1.fs.liveperson.com/api/api-docs/?api=c2m#/default/post_account__accountId__eligibility) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountId}/eligibility?v={version}

**Path/Query Parameters**

| Name  | Description | Value/Example |
| :--- | :--- | :--- |
| domain | C2M Domain | va.connect-to-messaging.liveperson.net |
| accountId | Site ID | 12345678 |
| version | API Version | 2.0 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [API key](api-guidelines-create-api-keys.html) or [APP JWT](connector-api-send-api-authorization-and-authentication.html#get-appjwt). Details can be found [here](connect-to-messaging-api.html#details-on-authorization). | API key or Bearer «APP_JWT» |

**Request Body Parameters**

| Name | Datatype | Required | Definition |
| :--- | :--- | :--- |:--- |
| skill | string | yes | Engagement skill |
| consumerPhoneNumber | string | yes | Consumer’s phone number(E.164 format with leading "+") |
| handoffId | string | yes | C2M handoff Id |
| sdes | array | no | Array of [customer info](engagement-attributes-types-of-engagement-attributes.html#customer-info) and/or [personal info](engagement-attributes-types-of-engagement-attributes.html#personal-info) SDEs. This parameter is only applicable for SMS and WA.
| templateVariables | object | no | Key-value pairs of variables for the template. This parameter is only applicable for SMS and WA channels. |
| ivrNumber | string | no | The ivrNumber that brands want to use. Some brands have more than 1 ivrNumber and this field clears the ambiguity. |
| consumerId | string | no | The consumerId which is used in the app as a user name field. This parameter is mandatory for only INAPP channel. |

**Request Body Example - JSON Payload**

SMS, WA
```json
{
    "consumerPhoneNumber": "+12061234567",
    "handoffId": "H123456789",
     // You can pass multiple variable values for SMS and WA.
    "templateVariables": {
        "1": "John Doe",
        "2": "New York"
    },
    "skill": "support",
    "ivrNumber": "180000",
    "sdes": [{
        "type": "personal",
        "info": {
            "firstname": "Smith",
            "lastname": "John",
            "age": {
                "age": 31,
                "year": 1990,
                "month": 1,
                "day": 11
            },
            "contacts": [{
                "email": "test@example.com",
                "phone": "+18004444444",
                "address": {
                    "country": "United States",
                    "region": "NA"
                }
            }],
            "gender": "MALE",
            "language": "en-US",
            "company": "LP"
        }
    },
    {
        "type": "ctmrinfo",
        "info": {
            "cstatus": "VIP",
            "ctype": "Gold",
            "customerId": "138766AC",
            "balance": -200.99,
            "currency": "EUR",
            "socialId": "11256324780",
            "imei": "3543546543545688",
            "userName": "user000",
            "companySize": 500,
            "companyBranch": "East Village",
            "accountName": "Bank corp",
            "role": "Marketing manager",
            "lastPaymentDate": {
                "day": 15,
                "month": 10,
                "year": 2016
            },
            "registrationDate": {
                "day": 23,
                "month": 5,
                "year": 2015
            },
            "loginStatus": 1
        }
    }]
}

```

INAPP
```json
{
    "consumerPhoneNumber": "+12061234567",
    "handoffId": "H123456789",    
    "skill": "support",
    "ivrNumber": "180000",
    "consumerId": "james"
}

```

**Response Body Parameters / Success / HTTP Status Code 200**

| Name | Datatype | Required | Definition |
| :--- | :--- |:--- | :--- |
| availableChannels | array | true | list of channels that business can send messages from, can be empty |
| recommendedChannelName | string | true | recommended channel for sending a message based on channel priorities, can be empty |
| eligible | boolean | true | true if consumer is eligible for messaging, otherwise false |
| callId | string<<uuid v4>> | true | the uuid associated with this call |
| recommendedChannelName | string | true | recommended channel for sending a message based on channel priorities, can be empty |

**Response Body Parameters / Failure / HTTP Status Code 4xx/5xx**

| Name | Datatype | Required | Definition |
| :--- | :--- |:--- | :--- |
| errorCode | number | false | C2M API specific error code, not same as the HTTP Status Code |
| errorMessage | string | false | Error message description |

**Response Example**

```json
{
    "availableChannels": [
        "sms","wa" 
    ],
    "recommendedChannelName": "sms",
    "eligible": true,
    "callId": "b52403dc-b140-45cc-a9ca-d749a39b1b56"
}

```

### Invite API

Click [**Invite**](https://connect-to-messaging.z1.fs.liveperson.com/api/api-docs/?api=c2m#/default/post_account__accountId__invite) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountId}/invite?v={version}

**Path/Query Parameters**

| Name  | Description | Value/Example |
| :--- | :--- | :--- |
| domain | C2M Domain | va.connect-to-messaging.liveperson.net |
| accountId | Site ID | 12345678 |
| version | API Version | 2.0 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [API key](api-guidelines-create-api-keys.html) or [APP JWT](connector-api-send-api-authorization-and-authentication.html#get-appjwt). Details can be found [here](connect-to-messaging-api.html#details-on-authorization). | API key or Bearer «APP_JWT» |

**Request Body Parameters**

| Name | Datatype | Required | Definition |
| :--- | :--- | :--- |:--- |
| callId | string<<uuid v4> | yes | Correlates to eligibility response |
| overrideChannel | string | no | Override Channel to send the message through. 'sms' and 'twilio' are interpreted as the same thing. |
| overrideMessage | string | no | Override the message sent through SMS only. The maximum length is set to 1600 as it is the maximum limit set by Twilio. |
| overrideSkill | string | no | Overrides the current skill which will be used in routing the messages. If the new skill is not present in handoff, an error will be sent. |

**Request Body Example - JSON Payload**

```json
{
    "callId":"ec88bd52-3d1e-40a7-a2fc-95565a528258"
}
```

**Response Body Parameters / Success / HTTP Status Code 200**

| Name | Datatype | Required | Definition |
| :--- | :--- |:--- | :--- |
| callId | string<<uuid v4> | true | the uuid associated with this call |

**Response Body Parameters / Failure / HTTP Status Code 4xx/5xx**

| Name | Datatype | Required | Definition |
| :--- | :--- |:--- | :--- |
| errorCode | number | false | C2M API specific error code, not same as the HTTP Status Code |
| errorMessage | string | false | Error message description |

**Response Example**

```json
{
    "callId":"ec88bd52-3d1e-40a7-a2fc-95565a528258"
}
```

### Common Error Responses

```json
{  
  "errorMessage":"Not Found",
  "errorCode":1004
}
```

| HTTP Status | Error Code | Error Message | 
| :--- | :--- | :--- |
| 400 | 1000 | Invalid request |
| 400 | 1001 | Invalid customerPhoneNumber |
| 400 | 1002 | Invalid version |
| 400 | 1200 | No internal user is available |
| 400 | 1201 | No internal app is available |
| 400 | 1300 | No engagement found for skill <<skill>> |
| 400 | 1400 | Message cannot be sent |
| 400 | 1500 | No handoff is available |
| 400 | 1501 | No handoff channel is available |
| 400 | 1600 | No setting is available |
| 400 | 1900 | Overridden channel is not available |
| 400 | 1901 | No engagement provided for the overridden skill |
| 401 | 1100 | Invalid Bearer token |
| 403 | 1101 | Not enough privilege to perform this operation |
| 404 | 1004 | Not Found |
| 405 | 1005 | Method Not Allowed |
| 415 | 1015 | Unsupported Media Type |
| 429 | 1029 | Rate limit hit |
| 500 | 5000 - 7000 | Internal Server Error |

### Details on Authorization

**How to generate <b>Authorization</b> header for API key**

1. Retrieve the appKey, secret, accessToken, accessTokenSecret from [API key](api-guidelines-create-api-keys.html)
2. Retrieve a domain from [Domain API](api-guidelines-domain-api.html) and API endpoint path.
3. Use following code snippet(Nodejs, Java) to generate OAuth string programmatically.
4. Insert generated OAuth string to <b>Authorization</b> header.

```javascript
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const siteObject = {
  appKey: 'your appkey',
  secret: 'your secret',
  accessToken: 'your accessToken',
  accessTokenSecret: 'your accessTokenSecret',
};
// the domain retrieved from domain API
const domain = 'your domain';
// insert whole path such as: '/api/account/:accountId/eligibility?v=2.0'
const path = 'your path'; 
const method = 'POST';

function getOauthToHeaders(siteObject, url, method) {
  const key = siteObject.appKey;
  const secret = siteObject.secret;
  const oauth = OAuth({
    consumer: {key, secret},
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, currentKey) {
      return crypto
        .createHmac('sha1', currentKey)
        .update(base_string)
        .digest('base64');
    },
  });
  const token = {
    key: siteObject.accessToken,
    secret: siteObject.accessTokenSecret,
  };
  const requestData = {url, method};
  return oauth.toHeader(oauth.authorize(requestData, token));
}

function run() {
  try {
    const headers = getOauthToHeaders(siteObject, `https://${domain}${path}`, method);
    console.log(headers.Authorization);
  } catch (error) {
    console.log('error', error);
  }
}
run();

```

```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URLEncoder;
import java.util.*;

public class OAuthAuthenticator {
    private String domain;
    private String path;
    private String appKey;
    private String secret;
    private String accessToken;
    private String accessTokenSecret;

    public static void main(String[] args) {
        String domain = "your domain";
        // Insert the path without the query string: "/api/account/:accountId/eligibility"
        String path = "your path";
        String appKey = "your appkey";
        String secret = "your secret";
        String accessToken = "your accessToken";
        String accessTokenSecret = "your accessTokenSecret";
        // Insert query string as an array
        String[] parameterList = {"v=2.0"};
        OAuthAuthenticator generator = new OAuthAuthenticator(domain, path, appKey, secret, accessToken, accessTokenSecret);
        String result = generator.generateOauthHeader("POST", parameterList);
        System.out.println(result);
    }

    public OAuthAuthenticator(String domain,
                              String path,
                              String appKey,
                              String secret,
                              String accessToken,
                              String accessTokenSecret) {
        this.domain = domain;
        this.path = path;
        this.appKey = appKey;
        this.secret = secret;
        this.accessToken = accessToken;
        this.accessTokenSecret = accessTokenSecret;
    }

    public String generateOauthHeader(String method,
                                      String[] additionalParameters) {
        long timestamp = new Date().getTime() / 1000;
        String nonce = getNonce();

        ArrayList<String> parameters = new ArrayList<String>();
        parameters.add("oauth_consumer_key=" + appKey);
        parameters.add("oauth_nonce=" + nonce);
        parameters.add("oauth_signature_method=HMAC-SHA1");
        parameters.add("oauth_timestamp=" + timestamp);
        if (accessToken != null) {
            parameters.add("oauth_token=" + accessToken);
        }
        parameters.add("oauth_version=1.0");
        if (additionalParameters != null) {
            for (String additionalParameter : additionalParameters) {
                parameters.add(additionalParameter);
            }
        }
        Collections.sort(parameters);
        StringBuffer parametersList = new StringBuffer();
        for (int i = 0; i < parameters.size(); i++) {
            parametersList.append(((i > 0) ? "&" : "") + parameters.get(i));
        }
        String signatureString =
                method + "&" +
                        URLEncoder.encode("https://" + domain + path) + "&" +
                        URLEncoder.encode(parametersList.toString());
        String signature = null;
        try {
            SecretKeySpec signingKey = new SecretKeySpec((secret + "&"
                    + (accessTokenSecret == null ? "" : accessTokenSecret)
            ).getBytes(), "HmacSHA1");
            Mac mac = Mac.getInstance("HmacSHA1");
            mac.init(signingKey);
            byte[] rawHMAC = mac.doFinal(signatureString.getBytes());
            signature = Base64.getEncoder().encodeToString(rawHMAC);
        } catch (Exception e) {
            System.err.println("Unable to append signature");
            System.exit(0);
        }
        String authorizationLine =
                "OAuth " +
                        "oauth_consumer_key=\"" + appKey + "\", " +
                        "oauth_nonce=\"" + nonce + "\", " +
                        "oauth_timestamp=\"" + timestamp + "\", " +
                        "oauth_signature_method=\"HMAC-SHA1\", " +
                        "oauth_signature=\"" + URLEncoder.encode(signature) + "\", " +
                        "oauth_version=\"1.0\"";
        if (accessToken != null) {
            authorizationLine += ", oauth_token=\"" + accessToken + "\"";
        }
        return authorizationLine;
    }

    public String getNonce() {
        int leftLimit = 48;
        int rightLimit = 122;
        int targetStringLength = 10;
        Random random = new Random();
        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }
}

```

**How to generate <b>Authorization</b> header for APP JWT**

1. Retrieve the APP_JWT from [APP JWT](connector-api-send-api-authorization-and-authentication.html#get-appjwt)
2. Insert to <b>Authorization</b> header as Bearer «APP_JWT».

### Frequently Asked Questions

<strong>1. What is the rate limit for the API?</strong>

Eligibility/Invite endpoints: 30 requests per second per API.

<strong>2. What is the recommended action from brands for 429 responses?</strong>

We recommend a request be retried (3 attempts with exponential retry with delay of 5 sec) when witnessing 429 status code.

<strong>3. Which channels are supported as of now?</strong>

C2M supports SMS-Twilio, WA, and INAPP channels.

<strong>4. Is there a throughput limitation for the data that gets passed from Twilio to LP?</strong>

C2M does not have any limitations on the message size while sending messages to twilio or other channels. 
 
<strong>5. Does C2M 2.0 API provide a report?</strong>

Yes, it does. See details [here](outbound-reporting-api-overview.html).

<strong>6. What’s the lookback period?</strong>
- Lookback period is how long will LP services maintain context (like campaign info, skill etc) for a reply of a message that is sent to the recipient/consumer.  
- Lookback period can be pre-configured up to 30 days. Current maximum lookback period is 30 days from when messages are sent using C2M API. Example: When a message is sent to consumer using C2M API and if consumer replies within 30 days from when message was sent, the response will be redirected to LE agent according to specified skill. A response after 30 days will not be treated as a conversation. Please note, if a consumer has an existing active conversation with a brand in any channel, the outbound message won’t be delivered.

<strong>7. How do we know which field is optional or required?</strong>

Refer to each API's <strong>Request Body Parameters</strong> or [swagger](https://connect-to-messaging.z1.fs.liveperson.com/api/api-docs/?api=c2m).

<strong>8. What's the restriction on request body parameters?</strong>

| Field Name | Limitation |
| :--- | :--- |
| consumerPhoneNumber | 15 char max length |
| skill | 255 char max length |
| overrideMessage | 1600 char max length |
| handoffId | 16 char max length |
