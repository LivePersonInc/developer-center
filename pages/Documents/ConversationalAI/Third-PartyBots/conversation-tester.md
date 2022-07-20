---
pagename: Conversation Tester
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-conversation-tester.html
indicator: both
---


### Introduction
By using the Conversation tester, you will be able to test your bot and identify if your bot's response has the right configuration.
The Conversation Tester feature aims to help you to identify possible misconfiguration in your bot. This provides three important components. First, the chat window in which you can start testing your bot. Second, the Logs column in which you will see if your bot response was processed or had an error. And finally, the JSON EDITOR column will help you to identify the error cause.
 
#### Successful Response
When you are testing your bot, and you are getting a `Processed` response, it means that the bot configuration is valid and the bot responded with a valid message. See the image below.
<img style="width:800px" src="img/botconnectordashboard/processed_response.png">
 
#### Error Response
When you are testing your bot, and no valid response is received from the bot you will be shown an error and any data received will be shown in the JSON Editor.
By hovering on the last alert you will see a tooltip that will give you the possible solutions for your error. See the image below.
 
<img style="width:800px" src="img/botconnectordashboard/error_response.png">
 
### Errors

#### common-invalid-structured-content-body

| Description | Unable to parse structured content due to the invalid body |
| Reason      | This error happens when invalid structured content was sent. It can be a wrong parameter, a value, or a missing parameter. Even though it is shown as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue.  |
| Solutions   | Please check [structured content](getting-started-with-rich-messaging-introduction.html) |

#### common-invalid-ai-vendor-response

| Description | Unable to get any response from AI vendor |
| Reason      | This error happens when it was not possible to get any response from the vendor. |
| Solutions   |  |

#### common-invalid-parsed-response

| Description | No parsed messages and actions found form the given AI vendor response |
| Reason      | This error happens when no valid messages and actions could be found in the vendor response.  |
| Solutions   |  |

#### common-no-quick-replies-support-chat

| Description |  Chat bots have no support for quick replies |
| Reason      |  On chat conversation it is not possible to send any quick replies |
| Solutions   |  Change the bot response e.g. to text messages |


#### dialog-flow-v2-action-body

| Description | Unable to parse action due to the invalid body |
| Reason      | This error happens when the bot has an invalid body and the Google Dialog Flow V2 is unable to parse it. It can be a wrong parameter, a value, or a missing parameter. Even though it is shown as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue.  |
| Solutions   | Please check [Dialogflow V2 Bot Actions](third-party-bots-google-dialogflow-es-basic-content.html#bot-actions) |
 
#### dialog-flow-v2-invalid-text-body

| Description | Unable to parse text message due to invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content.  |
| Solutions   |  |
 
#### dialog-flow-v2-invalid-text-with-encoded-metadata-body

| Description | Unable to parse text with metadata due to the invalid body |
| Reason      | This error happens when the bot's configuration has an invalid text message with encoded metadata. It can be that the encodedMetadata property is missing or there is something wrong with the encoded metadata body.  |
| Solutions   | Please check [Sennding Encoded Metadata](third-party-bots-google-dialogflow-es-advanced-features.html#sending-encoded-metadata) |
 
#### dialog-flow-v2-invalid-delay-body

| Description | Unable to parse delay message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that there is a wrong delay value.  |
| Solutions   | Please check [Sending Pause/Delay Message](third-party-bots-google-dialogflow-cx.html#sending-pausedelay-message) |

#### dialog-flow-v2-invalid-private-text-body

| Description | Unable to parse private text message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value. |
| Solutions   | Please check [Sending Private Text Message](third-party-bots-google-dialogflow-es-advanced-features.html#sending-private-text-message) |


### DialogFlow CX
 
## DialogFlow CX Invalid Action Body
## Description
This error happens when the bot has an invalid body and the Google Dialog Flow CX is unable to parse it. It can be a wrong parameter, a value, or a missing parameter. Even though it is shown as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue.

## Transfer Action Error
## Description
This error happens when either one or multiple of the following conditions not met
- `skill` is the required parameter and it has to be provided as a **String**
- `agentId` is an optional parameter and if provided the value must be a **String**

## Change TTR Action Error 
## Description
This error happens when the required parameter `ttrType` is either not provided or if provided the format of the value is not a **String**


## Close Conversation Action Error
## Description
For this action there are no required parameters. When the withoutPcs optional parameter is provided the format should be **Boolean**

## Faas Invocation Action Error
## Description
This error happens when either one or multiple of the following conditions not met
- `lambdaUuid` is a required parameter and it has not being provided as a **String** 
- `payload` is a required parameter and it has not being provided as a **Object** 
- `failOnError` is an optional parameter and it has not being provided as **Boolean**
 
#### Error Solution
Please check [Change Time To Response of Conversation](third-party-bots-google-dialogflow-cx.html#change-time-to-response-of-conversation)
 
## DialogFlow CX Invalid Text Body
## Description
This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content.
 
## DialogFlow CX Invalid Structured Content
## Description
This error happens when the bot's configuration has an invalid content body in its structured content response and the vendor is unable to parse it. It can be a wrong parameter or a value;
 
#### Error Solution
Please check [Sending Rich Content](third-party-bots-google-dialogflow-cx.html#sending-rich-content-structured-content)
 
## DialogFlow CX Invalid Text With Encoded Metadata Body
## Description
This error happens when the bot's configuration has an invalid text message with encoded metadata. It can be that the encodedMetadata property is missing or there is something wrong with the encoded metadata body.
 
#### Error Solution
Please check [Sending Encoded Metadata](third-party-bots-google-dialogflow-cx.html#sending-encoded-metadata)
 
## DialogFlow CX Invalid Delay Body
## Description
This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that there is a wrong delay value.
 
#### Error Solution
Please check [Sending Pause/Delay Message](third-party-bots-google-dialogflow-cx.html#sending-pausedelay-message)
 
## Dialog Flow CX Invalid Private Text Body
## Description
This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value.
 
#### Error Solution
Please check [Sending Private Text Message](third-party-bots-google-dialogflow-cx.html#sending-private-text-message)
 
## Dialog Flow CX Invalid AI Vendor Response
## Description
This error happens when it was not possible to get any response from the vendor.
 
## Dialog Flow CX Invalid Parsed Response
## Description
This error happens when not parsed messages and actions were found from the vendor.

## Dialog Flow CX No Support for Quick Replies in Chat
## Description
Chat connector does not support quick replies.
 
###  Watson Assistant
 
## Watson Assistant Invalid Text Body
## Description
This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content.
 
#### Error Solution
Please check [Text](third-party-bots-ibm-watson-assistant.html#text)
 
 
## Watson Assistant Invalid Structured Content
## Description
This error happens when the bot's configuration has an invalid content body in its structured content response and the vendor is unable to parse it. It can be a wrong parameter or a value;
 
#### Error Solution
Please check [Sending Rich Content](third-party-bots-ibm-watson-assistant.html#sending-rich-content-structured-content)
 
## Watson Assistant Invalid Delay Body
## Description
This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that a wrong delay value.
 
#### Error Solution
Please check [Pause/Delay](third-party-bots-ibm-watson-assistant.html#pausedelay)
 
## Watson Assistant Invalid Private Text Body
## Description
This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value.
 
#### Error Solution
Please check [Sending Private Text Message](third-party-bots-ibm-watson-assistant.html#sending-private-text-message)
 
## Watson Assistant Invalid Message Format
## Description
This error happens when the bot's response has an invalid value in its message and the vendor is unable to parse it. It can be an unknown type or a wrong value.
 
#### Error Solution
Please check [Sending Native Content](third-party-bots-ibm-watson-assistant.html#sending-native-content)
 
## Watson Assistant Invalid Image Body
## Description
This error happens when the bot's response has an invalid property when trying to send an image. The vendor won’t be able to validate the Watson native content image. It can be a wrong parameter or value.
 
#### Error Solution
Please check [Image](third-party-bots-ibm-watson-assistant.html#image)
 
 
## Watson Assistant Invalid Option Body
## Description
This error happens when the bot's response option response type has an invalid body and the vendor is unable to parse it. It can be a wrong parameter or value.
 
#### Error Solution
Please check [List](third-party-bots-ibm-watson-assistant.html#list)
 
## Watson Assistant Invalid Body
## Description
This error happens when the bot's response has an invalid body. It can be a wrong parameter or value.
 
#### Error Solution
Please check [Sending Native Content](third-party-bots-ibm-watson-assistant.html#sending-native-content)
 
## Watson Assistant Invalid AI Vendor Response
## Description
This error happens when there was not possible to get any response from the vendor.
 
## Watson Assistant Invalid Parsed Response
## Description
This error happens when not parsed messages and actions were found from the vendor.

## Watson Assistant No Support for Quick Replies in Chat
## Description
Chat connector does not support quick replies.
 
### Watson Assistant V2
 
## Watson Assistant Invalid Text Body
## Description
This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content.
 
#### Error Solution
Please check [Text](third-party-bots-ibm-watson-assistant-version-2.html#text)
 
## Watson Assistant Invalid Structured Content
## Description
This error happens when the bot's configuration has an invalid content body in its structured content response and the vendor is unable to parse it. It can be a wrong parameter or a value;
 
#### Error Solution
Please check [Sending Rich Content](third-party-bots-ibm-watson-assistant-version-2.html#sending-rich-content-structured-content)
 
## Watson Assistant Invalid Delay Body
## Description
This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that a wrong delay value.
 
#### Error Solution
Please check [Pause/Delay](third-party-bots-ibm-watson-assistant-version-2.html#pausedelay)
 
## Watson Assistant Invalid Private Text Body
## Description
This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value.
 
#### Error Solution
Please check [Pause/Delay](third-party-bots-ibm-watson-assistant-version-2.html#sending-private-text-message)
 
## Watson Assistant Invalid Message Format
## Description
This error happens when the bot's response has an invalid value in its message and the vendor is unable to parse it. It can be an unknown type or a wrong value.
 
#### Error Solution
Please check [Sending Native Content](third-party-bots-ibm-watson-assistant-version-2.html#sending-native-content)
 
## Watson Assistant Invalid Image Body
## Description
This error happens when the bot's response has an invalid property when trying to send an image. The vendor won’t be able to validate the Watson native content image. It can be a wrong parameter or value.
 
#### Error Solution
Please check [Image](third-party-bots-ibm-watson-assistant-version-2.html#image)
 
## Watson Assistant Invalid Option Body
## Description
This error happens when the bot's response option response type has an invalid body and the vendor is unable to parse it. It can be a wrong parameter or value.
 
#### Error Solution
Please check [List](third-party-bots-ibm-watson-assistant-version-2.html#list)
 
## Watson Assistant Invalid Body
## Description
This error happens when the bot's response has an invalid body. It can be a wrong parameter or value.
 
#### Error Solution
Please check [Sending Native Content](third-party-bots-ibm-watson-assistant-version-2.html#sending-native-content)
 
## Watson Assistant Invalid AI Vendor Response
## Description
This error happens when there was not possible to get any response from the vendor.
 
## Watson Assistant Invalid Parsed Response
## Description
This error happens when not parsed messages and actions were found from the vendor.

## Watson Assistant No Support for Quick Replies in Chat
## Description
Chat connector does not support quick replies.
 

###  Lex
## Lex Invalid Action Body
## Description
This error happens when the bot has an invalid action body and Lex is unable to parse it. It can be a wrong parameter, a value, or a missing parameter. Even though it is showing as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue.

## Transfer Action Error
## Description
This error happens when either one or multiple of the following conditions not met
- `skill` is the required parameter and it has to be provided as a **String**
- `agentId` is an optional parameter and if provided the value must be a **String**

## Change TTR Action Error 
## Description
This error happens when the required parameter `ttrType` is either not provided or if provided the format of the value is not a **String**


## Close Conversation Action Error
## Description
For this action there are no required parameters. When the withoutPcs optional parameter is provided the format should be **Boolean**

## Faas Invocation Action Error
## Description
This error happens when either one or multiple of the following conditions not met
- `lambdaUuid` is a required parameter and it has not being provided as a **String** 
- `payload` is a required parameter and it has not being provided as a **Object** 
- `failOnError` is an optional parameter and it has not being provided as **Boolean**

#### Error Solution
Please check [Change Time To Response of Conversation](third-party-bots-amazon-lex.html#change-time-to-response-of-conversation)
 
## Lex Invalid Text Body
## Description
This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content.

#### Error Solution
Please check [Sending Encoded Metadata](third-party-bots-amazon-lex.html#sending-encoded-metadata)
 
## Lex Invalid Structured Content
## Description
This error happens when the bot's configuration has an invalid content body in its structured content response and the vendor is unable to parse it. It can be a wrong parameter or a value;
 
#### Error Solution
Please check [Sending Rich Content](third-party-bots-amazon-lex.html#sending-rich-content-structured-content)
 
 
## Lex Invalid Text With Encoded Metadata Body
## Description
This error happens when the bot's configuration has an invalid text message with encoded metadata. It can be that the encodedMetadata property is missing or the is something wrong with the encoded metadata body.
 
#### Error Solution
Please check [Sending Encoded Metadata](third-party-bots-amazon-lex.html#sending-encoded-metadata)
 
## Lex Invalid Delay Body
## Description
This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that a wrong delay value.
 
#### Error Solution
Please check [Sending Pause/Delay Message](third-party-bots-amazon-lex.html#sending-pausedelay-message)
 
## Lex Invalid Private Text Body
## Description
This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value.
 
#### Error Solution
Please check [Sending Pause/Delay Message](third-party-bots-amazon-lex.html#sending-private-text-message)
 
## Lex Invalid Message Format
## Description
This error happens when the bot's response has an invalid value in its message and the vendor is unable to parse it. It can be an unknown type or a wrong value.
 
## Lex Invalid JSON
## Description
This happens when the bot's response has an invalid JSON and the vendor is unable to parse it. This usually happens when creating a Custom Payload in the bot's response.
 
## Lex Invalid AI Vendor Response
## Description
This error happens when there was not possible to get any response from the vendor.
 
## Lex Invalid Parsed Response
## Description
This error happens when not parsed messages and actions were found from the vendor.

## Lex No Support for Quick Replies in Chat
## Description
Chat connector does not support quick replies.
 
###  Microsoft Bot Framework
 
## Microsoft Bot Framework Invalid Body
## Description
This error happens when the bot's response has an invalid body. It can be a wrong parameter or value.
 
#### Error Solution
Please check [Rich Content](third-party-bots-microsoft-bot-framework.html#rich-content-structured-content)
 
## Microsoft Bot Framework Invalid AI Vendor Response
## Description
This error happens when there was not possible to get any response from the vendor.
 
## Microsoft Bot Framework Invalid Parsed Response
## Description
This error happens when not parsed messages and actions were found from the vendor.

## Microsoft Bot Framework No Support for Quick Replies in Chat
## Description
Chat connector does not support quick replies.
 
###  Faas
 
## Invalid Action Body
## Description
This error happens when the bot has an invalid action body and Faas is unable to parse it. It can be a wrong parameter, a value, or a missing parameter. Even though it is showing as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue.

## Transfer Action Error
## Description
This error happens when either one or multiple of the following conditions not met
- `skill` is the required parameter and it has to be provided as a **String**
- `agentId` is an optional parameter and if provided the value must be a **String**

## Change TTR Action Error 
## Description
This error happens when the required parameter `ttrType` is either not provided or if provided the format of the value is not a **String**


## Close Conversation Action Error
## Description
For this action there are no required parameters. When the withoutPcs optional parameter is provided the format should be **Boolean**

## Faas Invocation Action Error
## Description
This error happens when either one or multiple of the following conditions not met
- `lambdaUuid` is a required parameter and it has not being provided as a **String** 
- `payload` is a required parameter and it has not being provided as a **Object** 
- `failOnError` is an optional parameter and it has not being provided as **Boolean**
 
#### Error Solution
Please check [Change Time To Response of Conversation](third-party-bots-custom-integration.htmll#change-time-to-response-of-conversation)
 
## Faas Invalid Body
## Description
This error happens when the bot's response has an invalid body. It can be a wrong parameter or value.
 
#### Error Solution
Please check [Sending intent information](third-party-bots-custom-integration.htmll#sending-intent-information)
 
 
## Faas Invalid AI Vendor Response
## Description
This error happens when there was not possible to get any response from the vendor.
 
## Faas Invalid Parsed Response
## Description
This error happens when not parsed messages and actions were found from the vendor.

## Faas No Support for Quick Replies in Chat
## Description
Chat connector does not support quick replies.
