---
pagename: Get and Set User Data and Variables
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-get-and-set-user-data-and-variables.html
indicator: both
---

The following built-in functions, can be used to get/set user and variable data.

{: .important}
Please see the [Scripting Functions Introduction](conversation-builder-scripting-functions-introduction.html) for more information on Conversation Builder's built-in functions.

### Get and Set Bot Variable

The **Set** Bot Variable function is used for setting a value to the botVariable so that it can be used in further code and it returns a string data types to the results. These botVariables are available throughout the entire bot.

The **Get** Bot Variable function is used for getting the bot variable. Bot Variables that are not set will return NULL.

{: .important}
botVariables are strings. Whatever the data type of your input, it will be converted to a string. If you set a botVariable to an integer (ie: 10) it will be converted to “10”. When called using `getBotVariable()`, to be used as an integer again, you would need to convert it back to an integer (ie: 10*1).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getBotVariable(name)` | name (string) – The name for the variable. | The object defined by `name` |
| `setBotVariable(name, value, persistForSession, persistForever)` | <em>name (string)</em> – The name for the variable. Used to retrieve the variable in getBotVariable()<br><br> <em>value (object)</em> – The value to be stored, retrieved with getBotVariable() <br><br> <em>persistForSession (bool)</em> – If true, the variable persists for the current user session. Otherwise, the variable expires at the end of the current session (approximately 10 minutes). <br><br> <em>persistForever (bool)</em> – If true, the variable persists for the user indefinitely.| None |

#### Example

In the below example, we are using `getBotVariable` to retrieve a string and an integer which may need to be handled slightly differently, depending on your situation.

```javascript
// retrieving an integer
var count = botContext.getBotVariable('Howmanyitems');
count = count*1;
if (count > 10) {
      botContext.sendMessage('You have more than 10 items!');
} else {
  botContext.setBotVariable('Howmanyitems',0,true,false);
  botContext.sendMessage('Sorry, you dont have any items with you... ');
}
```

### Get Conversation ID

The Get Conversation ID function will retrieve the conversation ID for the current conversation.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getConversationId()` | None | Conversation ID (string) |

#### Example

The following example will store the conversation ID in a variable inside your current pre/post process code call "convId". It will then save this value in a bot session variable.

```javascript
// store the conversation id in a variable inside your current pre/post process code
var convId = botContext.getConversationId();

// save this in a bot session variable 
botContext.setBotVariable("conversationId", convId, true, false);
```

The bot session variable can then be accessed inside subsequent interactions or integrations using the following syntax:

`{$botContext.conversationId}`

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_0.png">

### Get Current and Previous Skills

Used to add previous and current skillIds to the botContext. If the conversation was transferred to the bot, you can track the previous skill Id that the consumer came from.

{: .important}
Previous Skill Id only works for Messaging. If used in a Chat conversation, it will be set to the same ID as the current Skill ID.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getLPEngagementAttribute()` | `"currentSkillId"`, `"previousSkillId"` | skillID (string) |

#### Example

The following example shows how to access current skill and previous skill IDs and set them to a botContext variable.

```javascript
var currentSkill = botContext.getLPEngagementAttribute("currentSkillId");
var previousSkill = botContext.getLPEngagementAttribute("previousSkillId");

botContext.setBotVariable("currentSkill", currentSkill, true, false);
botContext.setBotVariable("previousSkill", previousSkill, true, false);
```

**Messaging Connector Requirements:**
- Ensure that the bot is set up with API OAuth login rather than password login
- Ensure that the OAuth keys have permission to Engagement History

<img class="fancyimage" style="width:500px;" src="img/ConvoBuilder/previousSkillSetupMessaging.png">

### Get Authenticated Customer Info

There are two built in methods to return authenticated customer information. You can attempt to see if either of these 2 methods return true or not.  If the visitor is authenticated, (typically they would set personal or customer info being logged in) you can access the Personal Info or Customer Info object array.

Each function refers to its corresponding [authenticated engagement attribute object](essential-resources-authentication.html#messaging-consumer-authentication-and-identification).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getLPUserPersonalInfo()` | See below for accessing attributes | [personal info](engagement-attributes-types-of-engagement-attributes.html#personal-info) object or nothing |
| `getLPCustomerInfo()` | See below for accessing attributes | [customer info](engagement-attributes-types-of-engagement-attributes.html#customer-info) object or nothing |

#### Personal Info Example

This is an example JSON object for the Personal Info. Keep in mind that not all fields may be available for your conversation. In addition, one of the following fields (firstname, lastname, company) must be populated for this object to return, otherwise it will be null.

```json
{
    "type": "personal",
    "personal": {
        "firstname": "John",
        "lastname": "Doe",
        "age": {
            "age": 34,
            "year": 1980,
            "month": 4,
            "day": 1
        },
        "contacts": [
            {
                "email": "myname@example.com",
                "phone": "+1 555-333-7777"
            }
        ],
        "gender": "MALE",
        "language": "en-US",
        "company": "company"
    }
}
```

Here is how you might use the `getLPUserPersonalInfo()` method in JavaScript to check for a user’s first and last name.

```javascript
var personalInfo = botContext.getLPUserPersonalInfo();
botContext.printDebugMessage('PERSONAL INFO:'+personalInfo);
if(personalInfo){
    var fullName = personalInfo.firstname+" "+personalInfo.lastname;
    botContext.printDebugMessage('Full Name: '+fullName);
    botContext.setBotVariable("fullName",fullName,true,false);
}
```

#### Customer Info Example

Here is an example JSON object for the Customer Information.

```json
{
    "type": "ctmrinfo",
    "info": {
        "companyBranch": "test",
        "ctype": "vip",
        "customerId": "138766AC",
        "balance": -400.99,
        "currency": "USD",
        "socialId": "11256324780",
        "imei": "99887766554433",
        "userName": "user000",
        "companySize": 500,
        "accountName": "bank corp",
        "role": "broker",
        "lastPaymentDate": {
            "day": 15,
            "month": 10,
            "year": 2014
        },
        "registrationDate": {
            "day": 23,
            "month": 5,
            "year": 2013
        },
        "storeNumber": "123865",
        "storeZipCode": "20505"
    }
}
```

Here is how you might use the `getLPCustomerInfo()` method in JavaScript to check for a user’s customerId.

```javascript
var customerInfo = botContext.getLPCustomerInfo();
if(customerInfo){
    var customerId = customerInfo.customerId;
    botContext.printDebugMessage('customerId: '+customerId);
    botContext.setBotVariable("customerId",customerId,true,false);
}
```

### Get Environment Variable

Used for getting an environment variable. Environment Variables that are not set will return NULL.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getEnvVariable(name)` | name (string) – The name for the variable. | The object defined by `name` |

#### Example

In the below example, we are using `getEnvVariable` to retrieve a string which will provide for us the correct skillId for routing depending upon the environment that the bot is currently in.

```javascript
switch(intent){
case "billing":
    transferMessage = "Hold on while I transfer you to someone who can help with your billing issue...";
    skillId = botContext.getEnvVariable('billing');
    skillName = intent;
    break;
case "account":
    transferMessage = "Hold on while I transfer you to someone who can help with your account issue...";
    skillId = botContext.getEnvVariable('account');
    skillName = intent;
    break;
case "help":
    transferMessage = "Hold on while I transfer you to someone who can help with your issue...";
    skillId = botContext.getEnvVariable('help');
    skillName = intent;
    break;  
}      
```

### Get Channel

Returns the platform channel the user is currently communicating on. This function returns - lp_sms, lp_web, lp_inapp, sms, web, inapp. lp_ prefix indicates the LivePerson platform.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getChannel()` | None | lp_sms, lp_web, lp_inapp, sms, web, inapp |

#### Example

```javascript
var channel = botContext.getChannel();
botContext.printDebugMessage("channel used by the user is: " + channel);
```

### Get API Integration Results Count

Most commonly used to check whether an API integration returned any results at all, and how many. If no results are returned, you should display an error message or redirect to a failover message.

For example, imagine you are using the KnowledgeBase feature to create an FAQ bot. If the user’s query doesn’t return any results, you may want to respond with another message that provides some guidance.

#### Example

In the below example, `faqIntegration` is the name of the API integration, `title` is the custom data field mapping name, and `count` is the parameter that gives you the actual count.

```javascript
var results = botContext.getBotVariable(faqIntegration.title.count);
if (results < 1) {
      botContext.sendMessage('Sorry, I was not able to find any notes for this contact.');
}
```

### Get User Location

When you create a Required Context of type Location, a Location object is created.

You can retrieve this object with `getUserLocation()`, and access the properties of the location object by assigning it to a local variable and then calling several `get` methods on the object.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserLocation()` | None | location object |

#### Example

```javascript
var location = botContext.getUserLocation();
var city = location.getState(); // two-letter state abbreviation
var lat = location.getLatitude();
var lon = location.getLongitude();
var zip = location.getZipCode(); // postal code
```

You can also access the location information with the {$location} variable, for instance:

- City: {$location.city}
- State: {$location.state}
- ZipCode: {$location.zip}
- Latitude: {$location.lat}
- Longitude: {$location.lng}
- combined Lat,Lng {$location.latlng}.

### Get and Set UserName

The get UserName and set UserName functions are used to get (and set) the value of a permanent variable, dedicated to the user’s name. Having this dedicated variable makes it easy to consistently set the user’s information.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserName()` | None | string |
| `setUserName(name)` | name (string) | None |

#### Example

```javascript
// retrieve the username and test
var username = botContext.getUserName();
if(username != null){
  botContext.printDebugMessage('User Name = ' + username);
  botContext.sendMessage('Hi'  + username + '! Thanks for coming');
}else{
  // if it doesn’t exist, set it
  botContext.setUserName('Fred');
}
```

### Get and Set User Email Address

The get Email and set Email functions are used to get (and set) the value of a permanent variable, dedicated to the user’s email address. Having this dedicated variable makes it easy to consistently set the user’s information.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getEmail()` | None | string |
| `setEmail(address)` | address (string) | None |

#### Example

```javascript
// retrieve the user’s email address and test
var email = botContext.getEmail();
if (email != null) {
  botContext.printDebugMessage('User Email Address = ' + email);
  botContext.sendMessage('Looks like your email address is ' + email);
} else {
  // if it doesn’t exist, set it
  botContext.setEmail('fred@fred.net');
}
```

### Get user Platform ID and platform Type

The Get User Platform Id and Get User Platform Type are the functions that are used to get the user’s unique platform ID and their platform type (eg: FACEBOOK, HTMLCLIENT, etc).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserPlatformId()` | None | string: unique User platform ID |
| `getUserPlatformType()` | None | string: User platform type |

#### Example

```javascript
// get the user’s platform ID
var userId = botContext.getUserPlatformId();
// gets the user’s platform type
var platformType = botContext.getUserPlatformType();
// display the results...
botContext.printDebugMessage('The userPlatformId = ' + userId + 'and the userPlatformType = ' + platformType);
```

### Get Web View Variables

These functions retrieve session-scoped variables that were set via the [Web View API](conversation-builder-integrations-web-view-integration-api.html).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getWebViewVariable(variableName)` | _variableName_ - the name of the variable to retrieve | string |
| `getWebViewVariables()` | none | object:list of strings |

#### Example

```javascript
    botContext.getWebViewVariable('name'); // This returns the value as PaymentId
    botContext.getWebViewVariable('PaymentStatus'); // This returns the value as PROCESSED
```
For the corresponding curl example, see the [Web View API](conversation-builder-integrations-web-view-integration-api.html) documentation.
