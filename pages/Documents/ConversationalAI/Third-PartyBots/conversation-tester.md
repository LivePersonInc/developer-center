---
pagename: Conversation Tester
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-conversation-tester.html
indicator: both
---


### Introduction
By using the Conversation Tester, you will be able to evaluate the conversational flow of your bot identify issues with any responses sent by the bot.
The Conversation Tester feature aims to help you to identify possible misconfiguration in your bot. This provides three important components. First, the chat window in which you can start testing your bot. Second, the Logs column in which you will see if your bot response was processed or had an error. And finally, the JSON EDITOR column will help you to identify the error cause.

#### Successful Response
When you are testing your bot, and you are getting a `Processed` response, it means that the bot configuration is valid and the bot responded with a valid message. See the image below.
<img style="width:800px" src="img/botconnectordashboard/processed_response.png">

#### Error Response
When you are testing your bot, and no valid response is received from the bot you will be shown an error and any data received will be shown in the JSON Editor.
By hovering on the last alert you will see a tooltip that will give you the possible solutions for your error. See the image below.

<img style="width:800px" src="img/botconnectordashboard/error_response.png">

### Limitations

{: .important}
The Conversation Tester will only show the direct responses of the connected bot. No configured [Hooks](third-party-bots-hook-configuration.html) or [Public API](third-party-bots-public-api.html) calls will be computed by the Conversation Tester.

{: .important}
The Medallia Survey vendor is not supported by the Conversation Tester since survey messages on this vendor are exclusively received via the [Public API](third-party-bots-public-api.html).


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


#### dialog-flow-es-action-body

| Description | Unable to parse action due to the invalid body |
| Reason      | This error happens when the bot has an invalid body and the Google Dialog Flow V2 is unable to parse it. It can be a wrong parameter, a value, or a missing parameter. Even though it is shown as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue.  |
| Solutions   | Please check [Dialogflow V2 Bot Actions](third-party-bots-google-dialogflow-es-basic-content.html#bot-actions) |

#### dialog-flow-es-invalid-text-body

| Description | Unable to parse text message due to invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content.  |
| Solutions   |  |

#### dialog-flow-es-invalid-text-with-encoded-metadata-body

| Description | Unable to parse text with metadata due to the invalid body |
| Reason      | This error happens when the bot's configuration has an invalid text message with encoded metadata. It can be that the encodedMetadata property is missing or there is something wrong with the encoded metadata body.  |
| Solutions   | Please check [Sennding Encoded Metadata](third-party-bots-google-dialogflow-es-advanced-features.html#sending-encoded-metadata) |

#### dialog-flow-es-invalid-delay-body

| Description | Unable to parse delay message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that there is a wrong delay value.  |
| Solutions   | Please check [Sending Pause/Delay Message](third-party-bots-google-dialogflow-es-advanced-features.html#sending-pausedelay-message) |

#### dialog-flow-es-invalid-private-text-body

| Description | Unable to parse private text message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value. |
| Solutions   | Please check [Sending Private Text Message](third-party-bots-google-dialogflow-es-advanced-features.html#sending-private-text-message) |

#### dialog-flow-cx-invalid-text-body

| Description | Unable to parse text message due to invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content.  |
| Solutions   |  |

#### dialog-flow-cx-invalid-action-body

| Description | Unable to parse action due to the invalid body |
| Reason      | This error happens when the bot has an invalid body and the Google Dialog Flow CX is unable to parse it. It can be a wrong parameter, a value, or a missing parameter. Even though it is shown as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue.  |
| Solutions   | [Dialogflow CX Bot Actions](third-party-bots-google-dialogflow-cx-basic-content.html#bot-actions) |

#### dialog-flow-cx-invalid-private-text-body

| Description | Unable to parse private text message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value. |
| Solutions   | Please check [Sending Private Text Message](third-party-bots-google-dialogflow-cx-advanced-features.html#sending-private-text-message) |

#### dialog-flow-cx-invalid-text-with-encoded-metadata-body

| Description | Unable to parse text with encoded metadata due to the invalid body |
| Reason      | This error happens when the bot's configuration has an invalid text message with encoded metadata. It can be that the encodedMetadata property is missing or there is something wrong with the encoded metadata body. |
| Solutions   | Please check [Sending Encoded Metadata](third-party-bots-google-dialogflow-cx-advanced-features.html#sending-encoded-metadata) |

#### dialog-flow-cx-invalid-delay-body

| Description | Unable to parse delay message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that there is a wrong delay value. |
| Solutions   | Please check [Sending Pause/Delay Message](third-party-bots-google-dialogflow-cx-advanced-features.html#sending-pausedelay-message) |


#### watson-assistant-invalid-text-body

| Description |  Unable to parse text message due to invalid body |
| Reason      |  This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content. |
| Solutions   |  Please check [Text](third-party-bots-ibm-watson-assistant-basic-content.html#text) |

#### watson-assistant-invalid-delay-body

| Description | Unable to validate watson native delay due to invalid body |
| Reason      | This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that a wrong delay value. |
| Solutions   | Please check [Pause/Delay](third-party-bots-ibm-watson-assistant-basic-content.html#pausedelay) |

#### watson-assistant-invalid-private-text-body

| Description | Unable to parse private text message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value. |
| Solutions   | Please check [Sending Private Text Message](third-party-bots-ibm-watson-assistant-basic-content.html#sending-private-text-message) |

#### #watson-assistant-message-format

| Description | Unable to validate body because of invalid message format |
| Reason      | This error happens when the bot's response has an invalid value in its message and the vendor is unable to parse it. It can be an unknown type or a wrong value. |
| Solutions   | Please check [Sending Native Content](third-party-bots-ibm-watson-assistant-basic-content.html#sending-native-content)|

#### watson-assistant-invalid-image-body

| Description | Unable to validate watson native content image due to invalid body |
| Reason      |  This error happens when the bot's response has an invalid property when trying to send an image. The vendor won’t be able to validate the Watson native content image. It can be a wrong parameter or value.|
| Solutions   | Please check [Sending Native Image Content](third-party-bots-ibm-watson-assistant-basic-content.html#image) |

#### watson-assistant-invalid-options-body

| Description | Unable to validate watson native options list due to invalid body |
| Reason      | This error happens when the bot's response option response type has an invalid body and the vendor is unable to parse it. It can be a wrong parameter or value. |
| Solutions   | Please check [Sending Native List Content](third-party-bots-ibm-watson-assistant-basic-content.html#list) and [Watson: Response Type option](https://cloud.ibm.com/docs/assistant?topic=assistant-api-dialog-responses#api-dialog-responses-optionå) |

#### watson-assistant-invalid-body

| Description | Unable to validate body because of invalid content |
| Reason      | This error happens when the bot's response has an invalid body. It can be a wrong parameter or value. |
| Solutions   | Please check [Sending Native Content](third-party-bots-ibm-watson-assistant-basic-content.html#sending-native-content) |


#### lex-invalid-message-format

| Description | Unable to validate body because of invalid message format |
| Reason      | This error happens when the bot's response has an invalid value in its message and the vendor is unable to parse it. It can be an unknown type or a wrong value. |
| Solutions   |  |

#### lex-invalid-json

| Description | Unable to parse body due to bad JSON response |
| Reason      | This happens when the bot's response has an invalid JSON and the vendor is unable to parse it. This usually happens when creating a Custom Payload in the bot's response. |
| Solutions   |  |

#### lex-invalid-action-body

| Description | Unable to parse action due to the invalid body |
| Reason      | This error happens when the bot has an invalid action body and Lex is unable to parse it. It can be a wrong parameter, a value, or a missing parameter. Even though it is showing as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue. |
| Solutions   | Please check [Sending Native Content](third-party-bots-amazon-lex-basic-content.html#bot-actions) |

#### lex-invalid-text-with-encoded-metadata-body

| Description | Unable to parse text with encoded metadata due to the invalid body |
| Reason      | This error happens when the bot's configuration has an invalid text message with encoded metadata. It can be that the encodedMetadata property is missing or the is something wrong with the encoded metadata body. |
| Solutions   | Please check [Sending Encoded Metadata](third-party-bots-amazon-lex-advanced-features.html#sending-text-message-with-encoded-metadata)  |

#### lex-invalid-delay-body

| Description | Unable to parse delay message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid delay value and the vendor is unable to parse it. It can be that a wrong delay value. |
| Solutions   | Please check [Sending Pause/Delay Message](third-party-bots-amazon-lex-advanced-features.html#sending-pausedelay-message) |

#### lex-invalid-private-text-body

| Description | Unable to parse private text message due to the invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its private text message and the vendor is unable to parse the content. It can be a missing property or a wrong parameter or value. |
| Solutions   | Please check [Sending Pause/Delay Message](third-party-bots-amazon-lex-advanced-features.html#sending-private-text-message) |

#### lex-invalid-text-body

| Description | Unable to parse text message due to invalid body |
| Reason      | This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content. |
| Solutions   |  |


#### microsoft-bot-framework-invalid-body

| Description | Unable to validate body because of invalid content |
| Reason      | This error happens when the bot's response has an invalid value in its text message and the vendor is unable to parse the content. |
| Solutions   | Please check  [Basic DirectLine Content](third-party-bots-microsoft-direct-line-basic-content.html) |

#### liveperson-functions-invalid-body

| Description | Unable to validate body because of invalid content |
| Reason      | This error happens when the bot's response has an invalid body. It can be a wrong parameter or value. |
| Solutions   | Please check [Basic LivePerson Function Content](third-party-bots-liveperson-functions-basic-content.html) |


#### liveperson-functions-invalid-action-body

| Description | Unable to parse action due to the invalid body |
| Reason      | This error happens when the bot has an invalid action body Third-Party Bots is unable to parse it. It can be a wrong parameter, a value, or a missing parameter. Even though it is showing as an error in the Third Party Bots, the bot gently ignores unknown actions and the conversation will continue.  |
| Solutions   | Please check [Basic LivePerson Function Actions](third-party-bots-liveperson-functions-basic-content.html#bot-actions) |

#### custom-endpoint-invalid-body

| Description | Unable to validate body because of invalid content |
| Reason      | This error happens when the bot's response has an invalid body. It can be a wrong parameter or value. |
| Solutions   | Please check [Basic LivePerson Function Content](third-party-bots-custom-endpoint-basic-content.html) |

#### ebot7-invalid-body

| Description | Unable to validate body because of invalid content |
| Reason      | This error happens when the bot's response has an invalid body. It can be a wrong parameter or value. |
| Solutions   | Please check [Basic Ebot7 Content](third-party-bots-ebot7-basic-content.html) |