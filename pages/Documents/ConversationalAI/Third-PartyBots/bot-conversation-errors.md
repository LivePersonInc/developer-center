---
pagename: Bot Conversation Errors
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-bot-conversation-errors.html
indicator: both
---

### Introduction

This document describes possible errors which can be thrown during a conversation.

### connector.messaging
In general this identifies issues reaching the messaging conversation
<br/>
<br/>

#### com.liveperson.bot-connectors-worker.error.connector.messaging.send-message

| Description | A bot message could not be sent to the conversation. |
| Reason      | The reason for this is mostly wrongly formatted structured content. Another issue could be missing url whitelisting for images. |
| Solutions   | Please check [structured content](getting-started-with-rich-messaging-introduction.html) |

#### com.liveperson.bot-connectors-worker.error.connector.messaging.end-conversation

| Description | The bot was not able to close the conversation. |
| Reason      | This usually happens if the conversation was already closed/transferred while the bot is evaluating the response. |
| Solutions   | Check if the customer, a manager or a [Public API](third-party-bots-public-api.html)  call has already closed the conversation. |

#### com.liveperson.bot-connectors-worker.error.connector.messaging.change-ttr

| Description | The bot was not able to change the TTR value for the current conversation. |
| Reason      | Mostly likely, the error indicates a wrong value which is used for the TTL |
| Solutions   | Please choose the right value for your TTR step. See the documentation for the individual vendors on how to set TTR properly |

#### com.liveperson.bot-connectors-worker.error.connector.messaging.transfer-to-skill

| Description | The bot could not transfer the conversation to the desired skill. |
| Reason      | Usually, this happens if there is an issue within the LivePerson APIs. Another reason could be that the customer has already closed the conversation. |
| Solutions   | None |

#### com.liveperson.bot-connectors-worker.error.connector.messaging.conversation-closed

| Description | The bot tried to send a message or command to an already closed conversation. |
| Reason      | Usually, this happens if there is an issue within the Liveperson APIs. Another reason could be that the customer has already closed the conversation. |
| Solutions   | None |

#### com.liveperson.bot-connectors-worker.error.connector.messaging.agent-not-authorized

| Description | This happens if the bot tried to send a command to a conversation which is not assigned to the bot anymore. |
| Reason      | Usually, this happens if there is an issue within the Liveperson APIs. Another reason could be that the customer has already closed the conversation or the conversation was transferred to a new agent in the meantime |
| Solutions   | None |

### connector.chat
In general this identifies issues reaching the chat conversation
<br/>
<br/>

####  com.liveperson.bot-connectors-worker.error.connector.chat.send-message
| Description | A bot message could not be sent to the conversation. |
| Reason      | The reason for this is mostly wrongly formatted structured content. Another issue could be missing url whitelisting for images. |
| Solutions   | Please check [structured content](getting-started-with-rich-messaging-introduction.html) |

#### com.liveperson.bot-connectors-worker.error.connector.chat.end-conversation

| Description | The bot was not able to close the conversation. |
| Reason      | This usually happens if the conversation was already closed/transferred while the bot is evaluating the response. |
| Solutions   | Check if the customer, a manager or a [Public API](third-party-bots-public-api.html)  call has already closed the conversation. |

#### com.liveperson.bot-connectors-worker.error.connector.chat.transfer-to-skill

| Description | The bot could not transfer the conversation to the desired skill. |
| Reason      | For chat conversations, there must be an agent available with the desired skill to transfer and also available slots. |
| Solutions   | If this issue happens frequently, increase the capacity for the desired chat skill |


### pipes
This identifies issues processing an event in the Third-Party Bots service. These errors are not specific to a certain AI vendor.
<br/>
<br/>

#### com.liveperson.bot-connectors-worker.error.pipes.chat-handle-bot-action.transfer-skill-not-existing

| Description | This happens if the provided skill in the action parameters is not valid. |
| Reason      | The skill name provided in the action parameters can not be found on the lp account. |
| Solutions   | Double-check that the skill exists on your account and also check the spelling, it's case sensitive. |

#### com.liveperson.bot-connectors-worker.error.pipes.verify-ai-response.missing-action-and-messages

| Description | This error is thrown if the response of the AI Vendor does not contain any action nor messages. |
| Reason      | Since the bot does not know how to behave without any AI Vendor feedback, we are throwing an error. |
| Solutions   | Make sure that your AI Vendor has a valid response for every user input. |

#### com.liveperson.bot-connectors-worker.error.pipes.verify-ai-response.no-messages-and-not-supported-action

| Description | This error is thrown if the response of the AI Vendor does not contain any messages and the provided actions are not supported by our bot connector. |
| Reason      | Since the bot does not know how to behave without any AI Vendor feedback, we are throwing an error. |
| Solutions   | Make sure that your AI Vendor has a valid response for every user input. |

#### com.liveperson.bot-connectors-worker.error.pipes.verify-ai-response.quick-replies-not-supported

| Description | This happens if the AI Vendor returns a quickReplies response for a chat conversation. |
| Reason      | QuickReplies are only supported for Messaging Conversations |
| Solutions   | Do not send QuickReplies to Chat Conversations |

#### com.liveperson.bot-connectors-worker.error.pipes.conversation-limit-checker.max-conv-limit-reached

| Description | The bot does not accept new conversation anymore and instead error escalates them. |
| Reason      | To ensure the stability of our service, a bot can have a maximum number of 999 open conversations assigned. |
| Solutions   | Add more bots to support handling such kind of load, you can check how to add a bot [here](third-party-bots-getting-started.html) |


### events-queue
Unhandled processing errors
<br/>
<br/>

#### com.liveperson.bot-connectors-worker.error.events-queue.not-catched-pipeline-error

| Description | This error indicates that there is an unknown error while processing the consumer event. |
| Reason      | Mostly likely this indicates an implementation error in Third-Party Bots. |
| Solutions   | Please reach out to LivePerson Support and provide the exact error details. You can do this by clicking copy on the relevant error. |

### aivendor
These errors indicate issues specific to a certain AI vendor.
<br/>
<br/>

#### com.liveperson.bot-connectors-worker.error.aivendor.dialogflowv2.send-query

| Description | Could not send a query to DialogFlow. |
| Reason      | Mostly issues with DialogFlow APIS. |
| Solutions   | Double-check you have enough credits left for your Dialogflow account. Check for any interruption on Dialogflow side. |

#### com.liveperson.bot-connectors-worker.error.aivendor.dialogflowcx.send-request

| Description | Could not send a request to DialogFlow CX. |
| Reason      | Mostly issues with DialogFlow CX APIS. |
| Solutions   | Double-check you have enough credits left for your Dialogflow CX account. Check for any interruption on Dialogflow CX side. |


#### com.liveperson.bot-connectors-worker.error.aivendor.dialogflowcx.parse-message.parser-error

| Description | The Response received from Dialogflow CX could not be parsed |
| Reason      | Validating the response failed. This can indicate issues with the AI service itself or the payload returned by the bot |
| Solutions   | Check the error data. Check if the [structured content](getting-started-with-rich-messaging-introduction.html) is correct |


#### com.liveperson.bot-connectors-worker.error.aivendor.dialogflowcx.parse-message.multiple-actions

| Description | The bot responded with multiple actions |
| Reason      | Currently Third-Party Bots does not support more than one action per bot response |
| Solutions   | Ensure that the bot only provides one action in addition to optional messages |


#### com.liveperson.bot-connectors-worker.error.aivendor.faas.invoke-lambda

| Description | Invoking the LivePerson Function failed. |
| Reason      | This could have multiple reasons: <br/>- Function code non working<br/>- Function invocation was not finished after 30s<br/>- Function Quota limit was reached.  |
| Solutions   | Please verify and ensure that you have enough API calls quota left for FaaS function and make sure that FaaS function is working and invokable. Refer to the [LivePerson Functions Documentation](liveperson-functions-getting-started-development-deep-dive-ui.html#testing-your-function) to understand how to test your function code. Furthermore, please ensure your defined function follow the standard implementation as described in Third-Party bots documentation for [Custom Integration](third-party-bots-custom-integration.html). Failure to do so will result in the erroneous result. |


#### com.liveperson.bot-connectors-worker.error.aivendor.faas.missing-response-body

| Description | No response body was received from the LivePerson Function |
| Reason      | The LivePerson Function callback was invoked without a response body object. |
| Solutions   | Please make sure to provide a response body in the callback, for further information see [the documentation for the LivePerson Function connector](third-party-bots-liveperson-functions-basic-content.html) |


#### com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-hook

| Description | Indicates that a LivePerson Functions hook could not be invoked. |
| Reason      | Implementation errors inside LivePerson Functions hook. |
| Solutions   | Double-check and test the LivePerson Function Hook code. You can refer to the [LivePerson Functions Documentation](liveperson-functions-getting-started-development-deep-dive-ui.html#testing-your-function) to find out how to test your function code. Please also check the dedicated documentation for [Third-Party-Bots Faas Hooks](https://developers.liveperson.com/third-party-bots-hook-configuration.html) |

#### com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-faas-request

| Description | This indicates an issue during FaaS invocation.  |
| Reason      | This could have multiple reasons: function code non working, function invocation was not finished after 30s, Faas Quota limit was reached. |
| Solutions   | Please verify and ensure that you have enough API calls quota left for the function and make sure that the function is working and invokable. Refer to the [LivePerson Functions Documentation](liveperson-functions-getting-started-development-deep-dive-ui.html#testing-your-function) to understand how to test your function code. <br/> Furthermore, please ensure your defined function follow the standard implementation as described in Third-Party bots documentation for [Custom Integration](third-party-bots-custom-integration.html). Failure to do so will result in the erroneous result. If none of these applies and the errors persist, please escalate to LP Support and provide the exact error information by copying it from within the Conversation Errors UI. |

#### com.liveperson.bot-connectors-worker.error.aivendor.lex.composite-format-not-supported

| Description | This error is thrown Lex responds with a composite format. |
| Reason      | Lex response contained a composite format. |
| Solutions   | Do not use the composite format in Lex for Third-Party Bots. |

#### com.liveperson.bot-connectors-worker.error.aivendor.lex.custom-payload-malformed

| Description | The custom format provided by lex is malformed. |
| Reason      | Mostly JSON errors. |
| Solutions   | Please verify your custom JSON payload with a JSON validator of your choice. |

#### com.liveperson.bot-connectors-worker.error.aivendor.lex.custom-payload-no-params

| Description | The custom payload did not contain any params. |
| Reason      | The params object is missing in the custom payload response. |
| Solutions   | Add the params object in the custom payload response. |

#### com.liveperson.bot-connectors-worker.error.aivendor.lex.custom-payload-type-not-supported

| Description | This happens in the payload contains a type which is not supported. |
| Reason      | Custom payload type provided is not supported. |
| Solutions   | Remove the custom payload type from your response. |

#### com.liveperson.bot-connectors-worker.error.aivendor.lex.message-format-not-supported

| Description | This happens if the provided message format is not supported. |
| Reason      | The chosen message format is not integrated into our connector. |
| Solutions   | Only use supported message formats. [Lex](third-party-bots-amazon-lex.html) |

#### com.liveperson.bot-connectors-worker.error.aivendor.lex.parser-crashed

| Description | This indicates an issue during parsing. |
| Reason      | Usually malformed response from Lex. |
| Solutions   | IF this issue happens frequently, please reach out to LP Support with the copied error details. |


#### com.liveperson.bot-connectors-worker.error.aivendor.lex.send-query

| Description | Happens if the query to Lex could not be sent. |
| Reason      | Lex temporarily unavailable. |
| Solutions   | Double-check the credentials for your bot are still valid and you have enough credits left |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.parser.custom.undefined-structured-content

| Description | This error happens if the structured content property is undefined. |
| Reason      | Structured content response is undefined in Watson response |
| Solutions   | Double-check the relevant Watson Payload and also double check the Watson docs [Watson Assistant](third-party-bots-ibm-watson-assistant.html) |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.parser.image.undefined-source

| Description | This error happens if there is no image source property provided on the Image object in the Watson response. |
| Reason      | Since no source is provided, the bot is unable to create the right LP Structured Content Object. |
| Solutions   | Provide the source parameter for your Image.  |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.parser.list.undefined-options

| Description | This error happens because the bot received a list response from Watson, without any options inside. |
| Reason      | The bot doesn't know how to handle an empty list, therefore we assume this is an error. |
| Solutions   | Provide options properties to your Watson List object. |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.message-format-not-supported

| Description | The message format provided by Watson is not supported by our connector. |
| Reason      | You are using a new format which we do not support yet. |
| Solutions   | Please refer to the [Watson Assistant Connector](third-party-bots-ibm-watson-assistant.html) documentation to see what messages we support |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.parser.text-and-custom.undefined-text

| Description | The text property provided in the payload was undefined. |
| Reason      | Undefined text property. |
| Solutions   | Either remove the text property or populate it with a text. |


#### com.liveperson.bot-connectors-worker.error.aivendor.watson.parser.pause.undefined-time
| Description | The provided pause time is not defined. Therefore we don't know what to do. |
| Reason      | Undefined pause time property. |
| Solutions   | Double-check the pause time property is provided |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.parse-message.get-parse-message-failed

| Description | This indicates an issue during message parsing. |
| Reason      | Wrong structure in the JSON payload. |
| Solutions   | Double-check the Watson responses here: [Watson Assistant](third-party-bots-ibm-watson-assistant.html)[Watson AssistantV2](third-party-bots-ibm-watson-assistant-version-2.html) |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.index.generic-parser-crashed

| Description | This happens if there is an issue with parsing the provided Watson response. |
| Reason      | Malformed Watson response. |
| Solutions   | Double-check the Watson responses here: [Watson Assistant](third-party-bots-ibm-watson-assistant.html)[Watson AssistantV2](third-party-bots-ibm-watson-assistant-version-2.html) |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.send-query

| Description | This happens if we could not send a query to Watson.  |
| Reason      | Usually this happens if the quota limit is reached. |
| Solutions   | Increase your Watson Quota to match the expected load. |

#### com.liveperson.bot-connectors-worker.error.aivendor.watson.watson-error

| Description | This error is thrown if Watson had issues processing the consumer event. |
| Reason      | This could have multiple reasons. Mostly is a wrong implementation on Watson side. |
| Solutions   | Check the error logs on your Watson Instance to find out the root cause of the failing bot. |

#### com.liveperson.bot-connectors-worker.error.aivendor.watsonv2.send-query

| Description | This happens if we could not send a query to Watson.  |
| Reason      | Usually, this happens if the quota limit is reached. |
| Solutions   | Increase your Watson Quota to match the expected load. |

#### com.liveperson.bot-connectors-worker.error.aivendor.watsonv2.create-session

| Description | This error happens if we could not create a Watson  session for the conversation. |
| Reason      | Mostly, this would only fail because of a network issue. |
| Solutions   | If this issue happens frequently, please reach out to LP Support with the error details.|

#### com.liveperson.bot-connectors-worker.error.aivendor.watsonv2.invalid-session

| Description | The session id used by the conversation is not valid anymore. |
| Reason      | The lifespan of a conversation state is different in LP and IBM. It could be that an open conversation in LP is already closed in Watson. |
| Solutions   | Increase the lifetime of a Watson conversation. Alternatively, you can also auto close conversations from the LP side remove any stuck conversations. |

#### com.liveperson.bot-connectors-worker.error.aivendor.microsoft.send-query

| Description | Sending query to MS Bot Framework failed. |
| Reason      | This usually happens if the Endpoint is not responding in time. |
| Solutions   | Make sure you send the response in time. Another reason could be an too small Azure instance, try to increase the provisioned resources for your bot. If you are using a custom endpoint, double check it behaves exactly as the one we expect [Microsoft Bots](third-party-bots-microsoft-direct-line-introduction.html) |

#### com.liveperson.bot-connectors-worker.error.aivendor.microsoft.parser-crashed

| Description | The parser could not parse the provided input. |
| Reason      | The bot might has responded with malformed JSON or malformed payload. |
| Solutions   | Double-check the payload and make sure it is same as described [here](third-party-bots-microsoft-direct-line-basic-content.html) and [here](third-party-bots-microsoft-direct-line-advanced-features.html)  |


#### com.liveperson.bot-connectors-worker.error.aivendor.microsoft.response-missing

| Description | There is no response provided by the MS bot. |
| Reason      | Implementation error on the Direct Line bot. |
| Solutions   | Ensure the bot is responding within 15 seconds with at least one activity |


#### com.liveperson.bot-connectors-worker.error.aivendor.microsoft.activity.invalid-type

| Description | The provided activity type is not supported. |
| Reason      | The bot is not capable of handling this activity type. |
| Solutions   | Double-check that you are only using supported activity types as described [here](third-party-bots-microsoft-direct-line-basic-content.html)  |

#### com.liveperson.bot-connectors-worker.error.aivendor.microsoft.activity.invalid-name

| Description | The provided activity name is not supported. |
| Reason      | The bot is not capable of handling this activity name. |
| Solutions   | Double-check that you are only using supported activity names as described [here](third-party-bots-microsoft-direct-line-basic-content.html#bot-actions)  |


### sdes-service
<br/>
<br/>

#### com.liveperson.bot-connectors-worker.error.sdes-service.missing-session-or-visitor-id

| Description | This indicates an issue fetching the SDEs because required properties are missing.  |
| Reason      | Mostly this issue happens because of a wrong integration on customer end where no Visitor Session is created before starting the conversation.   |
| Solutions   | Please ensure that you create a Visitor Session prior to starting the conversation. [Website Monitoring](app-engagement-api-overview.html). |

#### com.liveperson.bot-connectors-worker.error.sdes-service.uauth-sdes-entry-is-empty

| Description | This indicates an issue fetching the SDEs. |
| Reason      | Mostly this issue happens because of a wrong integration on customer end where no Visitor Session is created before starting the conversation. Another reason could be that no SDEs were set. |
| Solutions   | Please ensure that you create a Visitor Session prior to starting the conversation. [Website Monitoring](app-engagement-api-overview.html). Also please check that you set the SDEs correctly. [Engagement Attributes](engagement-attributes-api-engagement-attributes.html) |
