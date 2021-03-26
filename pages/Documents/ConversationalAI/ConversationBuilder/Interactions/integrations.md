---
pagename: Integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-integrations.html
indicator: both
---

Integration interactions make programmatic calls to retrieve or post data to external systems and/or to perform actions. They perform their work and then execute the next action.

If an integration retrieves data, that data can be stored in custom fields, so you can use it in subsequent interactions. For information on how to display variable data in interactions, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

Integrations are similar to questions in that you can define conditions that each perform different next actions (based on which condition is met). Common uses for this include checking whether the integration call was a success or failure, having a condition triggered by the value of an API response, and having these events direct the flow of the conversation in a desired manner.

### Integration interactions

{: .important}
Before you can add an Integration interaction, you need to create the integration itself. For details on this, see [here](conversation-builder-integrations-integration-basics.html#integration-types).

**To add an Integration interaction**

1. Select the interaction just above where you want to add the integration, and click <img style="width:30px" src="img/ConvoBuilder/icon_integration.png"> (Integration) on the interactions toolbar.
2. In the interaction, select the name of the integration to invoke.

    <img style="width:550px" src="img/ConvoBuilder/integrations_api.png">

3. Finish configuring the interaction as desired, and click **Save**.

#### Order of invocation

When an integration interaction is processed, the order of invocation is as follows:

1. Pre-process code
2. Integration call, e.g., API call
3. Post-process code
4. Next action

#### Defining rules based on the result of the API integration

{: .important}
It's recommended that you take advantage of the ability to define rules based on the *result* of the API integration.

In our example below, we've added a rule that checks for a "success" result, and we've configured the next step to continue to the next interaction...

 <img style="width:700px" src="img/ConvoBuilder/integrations_api_rule1.png">

...so, if our "Balance" integration succeeds, the user's balance is displayed (and then the interaction ends). We've likewise added a second rule that checks for a "failure" result, and then we've configured the next step to continue to a "fail" interaction. In this case, if our "Balance" integration fails, the user is notified that something went wrong.

 <img style="width:550px" src="img/ConvoBuilder/integrations_api_rule2.png">

### Knowledge AI interactions

Use a Knowledge AI interaction in a bot when you want to search a knowledge base for articles. This interaction always performs the search using the consumer’s most recent message as the search phrase.

![Carousel](img/ConvoBuilder/knowledge_ai.gif)

A common use case for the Knowledge AI interaction is within a Fallback dialog, where you want to direct a consumer utterance that didn’t match a dialog starter into a knowledge base search. If an appropriate search result is found, it can be displayed. If no result is found, you might then display a "sorry" message or transfer the conversation to a human agent.

#### How the Knowledge AI search works

* **The search phrase** - The Knowledge AI interaction always passes the consumer’s most recent message into the search as the search phrase.
* **The search** - When performing the search, the search mode is always “Intents.” For information on search modes, see [here](knowledge-base-using-intents-with-kbs.html#search-modes).
* **The results** - The answers that are returned must meet or exceed the confidence score that you specify within the interaction’s configuration. This minimum threshold can be VERY GOOD, GOOD or FAIR PLUS.

#### How the answers are rendered

When you configure a Knowledge AI interaction, you specify an **Answer layout** for the answers, one of:

* Structured
* Simple
* Custom 

Both the Structured and Simple layouts are *rendered automatically*, and each uses a particular layout. With these options, there's no need to follow the Knowledge AI interaction with subsequent interactions that display the answers. The Knowledge AI interaction handles it all: both the knowledge base search and the rendering of the answers. When it meets your needs, one of these options is the simpler choice.

If you require control over the article content and layout that's used, you can choose to use a Custom answer layout. In this case, you must follow the Knowledge AI interaction with subsequent interactions that display the answers.

Select an answer layout based on the target channels and your requirements. For more on this interaction’s channel-level support, see [here](conversation-builder-interactions-interaction-support.html).

#### The Structured answer layout

The Structured layout looks like this:

<img style="width:500px" src="img/ConvoBuilder/knowledge_ai_rich.png">

With the Structured layout:

* Anywhere from one to three results are returned based on the maximum number of answers that you've specified in the interaction.
* The results degrade gracefully to the Simple layout when the channel in use doesn't support the carousel.

#### The Simple answer layout

The Simple layout doesn’t include rich elements like images and URLs. It looks like this:

<img style="width:500px" src="img/ConvoBuilder/knowledge_ai_plain.png">

With the Simple layout:

* Only a single, best result is returned regardless of the maximum number of answers that you've specified in the interaction.
* Any HTML in the article's content is **not** removed. (Take note of the formatting applied to **Cancel Flight** in the image above.) Use HTML in your source knowledge base only when your target channels support it.

#### The Custom answer layout

Choose the Custom answer layout when you require control over how the answers are rendered. With this option, you must manually add the interactions that display the article content.

To display a single, best result, use the syntax below, where "variableName" is the response data variable name that you specified in the Knowledge AI interaction's settings:

`{$.api_variableName.results[0].title}`<br>
`{$.api_variableName.results[0].summary}`<br>
`{$.api_variableName.results[0].detail}`<br>
`{$.api_variableName.results[0].imageURL}`<br>
`{$.api_variableName.results[0].contentURL}`<br>

For example:

<img style="width:600px" src="img/ConvoBuilder/knowledge_ai_result1.png">

To iterate over and display multiple results, use the syntax below in a similar manner:

`{$.api_variableName.results[i].title}`<br>
`{$.api_variableName.results[i].summary}`<br>
`{$.api_variableName.results[i].detail}`<br>
`{$.api_variableName.results[i].imageURL}`<br>
`{$.api_variableName.results[i].contentURL}`<br>

For example:

<img style="width:600px" src="img/ConvoBuilder/knowledge_ai_result2.png">

#### Add a Knowledge AI interaction

1. Select the interaction just above where you want to add the Knowledge AI interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_knowledge_ai.png"> (Knowledge AI) on the interactions toolbar.
2. In the interaction, select the knowledge base to search.

    <img style="width:600px" src="img/ConvoBuilder/knowledge_ai_add.png">

3. In the upper-right corner of the interaction, click <img style="width:20px" src="img/ConvoBuilder/icon_settings.png"> (Settings icon).
4. On the Basic tab, specify the following:
    * **Message when results not found**: Enter the message to send to the consumer when there is no response returned from the knowledge base search. This might be due to no articles being found or due to a failed search. This message is sent regardless of whether you’ve defined a custom rule for the "KB Match Not Found" match type (discussed below). If you don't want this message to be sent, enter "BLANK_MESSAGE".
5. Review the rest of the basic settings, and make any changes desired. For help with these, see [here](conversation-builder-interactions-configuration-settings.html#basic-settings).
6. Switch to the Advanced tab, and specify the following:
    * **Min confidence score for answers**: Select the minimum score that a result must have in order to be returned, either VERY GOOD, GOOD, or FAIR PLUS. If you downgrade this to FAIR PLUS, be sure to test whether the quality of the results meets your expectations. It's generally recommended to keep the quality above FAIR PLUS. For more on confidence scores, see [here](knowledge-base-using-intents-with-kbs.html#scoring-and-thresholds).

        This field isn't shown if you've selected an [external knowledge base that doesn't use LivePerson AI](knowledge-base-external-knowledge-bases-external-kbs-without-liveperson-ai.html). In this case, the results are simply those returned by the call to the external CMS.

    * **Max number of answers**: Select the maximum number of answers to return from the knowledge base, anywhere from one to three. The default value is one.
    * **Answer layout**: Select "Structured," "Simple," or "Custom" based on your requirements. These layout options are discussed farther above.
    * **Link text for content URL**: This setting is available only when you select "Structured" for the **Answer layout**. Enter the label to use for the link to the article's content URL, e.g., "Learn more." The link will open the URL in a new window. You can enter a botContext or environment variable here, e.g., {$botContext.\<name\>}.
    * **Default image URL**: This optional setting is available only when you select "Structured" for the **Answer layout**. If you enter an image URL, then when an article doesn't have an image URL within the knowledge base, this image is used in the Structured output. This presents a uniform consumer experience across all articles, even when some articles have images but others don't. You might specify a company logo. Remember to whitelist the image URL, as discussed [here](conversation-builder-networking-security.html#whitelisting-rich-media). You can also enter a botContext or environment variable here, e.g., {$botContext.\<name\>}.
    * **Response data variable**: This setting is available only when you select "Custom" for the **Answer layout**. Enter the name of the response data variable that will store the answer results. The default variable name is "kb_search."
7. Click **Save**.
8. Configure rules that direct the conversation flow based on the search results; this is described below. If you’ve selected "Custom" for the **Answer layout** setting, you’ll also need to add the interactions that display the answers.

{: .important}
You might be familiar with implementing a knowledge base search using an Integration interaction that itself uses a specified [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) to perform the search. That approach is still supported, but it is considered a legacy approach. The Knowledge AI interaction is a simpler alternative because it doesn’t need an associated Knowledge Base integration.

#### Direct the conversation flow based on the result

By default, a Knowledge AI interaction includes two custom rules: one rule for when the knowledge base search returns an answer and the other rule for when the search doesn’t.

<img style="width:600px" src="img/ConvoBuilder/knowledge_ai_flow1.png">

Within each rule, the condition specifies the particular search result, either "Found" or "Not Found."

<img style="width:800px" src="img/ConvoBuilder/knowledge_ai_flow2.png">

Configure the **Next Action** for each of these rules based on the direction in which the conversation should flow in each case.

<img style="width:600px" src="img/ConvoBuilder/knowledge_ai_flow3.png">

### Agent Transfer interactions

Use an Agent Transfer interaction in a dialog when you want to transfer a conversation from a bot to a live agent, or from a bot in one bot group to a bot in a *different* group.

For some practice with this interaction type, complete the [Escalate to an Agent tutorial](tutorials-guides-getting-started-with-bot-building-escalate-to-an-agent.html).

{: .important}
There are two ways to implement a transfer: You can add an Agent Transfer interaction, *as discussed here*. Or, you can add an Integration interaction that uses a supporting [LivePerson Agent Escalation integration](conversation-builder-integrations-liveperson-agent-escalation-integrations.html). There is no difference between the two approaches when it comes to performance. However, use of the Agent Transfer interaction is a simpler, more convenient approach because you specify all necessary information in the interaction itself. If you use an Agent Transfer interaction, you *don't* need to create a supporting integration.

{: .important}
Implementing a bot-to-bot transfer? See [here](conversation-builder-bots-bot-to-bot-transfers.html#manual-transfers) for more information.

#### Add an Agent Transfer interaction

**To add an Agent Transfer interaction**

1. Select the interaction just above where you want to add the transfer, and click <img style="width:30px" src="img/ConvoBuilder/icon_agentTransfer.png"> (Agent Transfer) on the interactions toolbar.
2. In the interaction, enter the message to send to the user prior to being transferred, something like, “Hold on while I connect you with an agent.” You can enter either static text, use a variable, or a combination of both. If you need to insert a new line, use an escape character like so: \\\n. 

    This field is required, so if you don't want to send a message, enter "BLANK_MESSAGE" here. That satisfies the underlying, system requirement for a message, but it doesn't actually send one. The default value is, "Transferring to an agent..."

    <img style="width:600px" src="img/ConvoBuilder/interactions_agentTransfer.png">

3. In the upper-right corner of the interaction, click <img style="width:20px" src="img/ConvoBuilder/icon_settings.png"> (Settings icon).
4. Select the **Advanced** tab, and specify the following:

    * **Agent Id**: Optional. Used for bot-to-human transfers only. Specify the ID of the human agent to which to transfer the conversation. (You can obtain the ID from the address bar when the user profile is displayed in Conversational Cloud.) Transfer of the conversation to this agent ID only occurs if the agent is assigned to the skill ID that you specify and is available; otherwise, transfer to the skill ID occurs instead.
    
    * **Agent Skill ID**: Specify the ID of the skill to which to transfer the conversation. The skill is defined in Conversational Cloud. Here you can specify the ID using a bot context variable like `{$botContext.skillId}`, or you can enter a direct, numeric value.

        When the transfer is attempted, the Agent Skill Id is evaluated; if it isn't numeric, the fallback message is sent to the user. If the value is numeric, but the bot doesn't respond for more than 3 minutes (e.g., the chat server becomes overloaded and drops the message), an attempt is made to transfer to the fallback skill ID *if one is specified in the [agent connector](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#add-an-agent-connector)*. Otherwise, the transfer fails. For information on handling failures, see below.

    * **Transfer Bot Context**: Used for [manual, bot-to-bot transfers](conversation-builder-bots-bot-to-bot-transfers.html#manual-transfers) only. Select this to *automatically* pass the user's intent and/or message from the sender bot to the receiver bot. This lets the receiver bot know the appropriate dialog to start after the transfer.

4. Click **Save**.

{: .important}
If, given your use case, you need to prevent context switching from occurring during the transfer (e.g., messages are sent after the transfer that shouldn't be), you can do this as described [here](conversation-builder-dialogs-dialog-basics.html#preventing-context-switching).

#### Best practices

##### Send a transfer message

When transferring the consumer to a live agent, it's customary to send some form of message to the user like, "Hold on while I connect you with an agent" (see step 2 above). You might want to send this as a Text statement in the dialog. However, supplying the message as a part of the interaction's configuration guarantees the message is the last one seen by the consumer prior to the transfer (because the message is sent as a part of the post body in the underlying Transfer API).

In the interaction, you don't have to supply a message, but if you don't, you'll need to set the field to `BLANK_MESSAGE` to satisfy the system requirement for a value.

##### Add a time delay to the transfer if needed

If you're sending one or more text responses prior to the transfer, it's recommended that you add to the Agent Transfer interaction an interaction delay that accounts for each response you need to send. This gives the bot sufficient time to send the messages before transferring the conversation. For example, if you're sending 3 text messages prior to the transfer, you might add a 6000 millisecond delay to the Agent Transfer interaction (3 messages x 2000 millisecond delay per message = an aggregate 6000 millisecond delay). Specify the delay in the **Interaction Delay** field in the Agent Transfer interaction's settings.

##### Handle transfer failures

First, if an immediate error occurs when calling the transfer API, a failure response will be returned. You can catch and handle these errors by adding a custom rule to the interaction that checks for a “failure” result. For an example of this, see farther above in the *Integration interactions* section in this article.

Second, most often in Chat, but occasionally with Messaging, it can happen that the transfer API call is successful, but an attempt at transferring to a skill will fail after some time. When this happens, the platform sends the message `__agent_escalation_failed__` to the bot. If you don’t have a dialog set up to catch this pattern, the bot will treat it like any other consumer message. In most cases, it will go to the Fallback dialog.

Setting up a dialog to catch the `__agent_escalation_failed__` pattern allows you to send an appropriate message to the consumer, e.g., "Sorry, we're unable to perform the transfer at this time. Please try again later."

If the `__agent_escalation_failed__` message is sent 3 times to the bot, and the 4th attempt also fails, the escalation stops, and the following default response is sent to the consumer, "Not able to transfer to Agent at this time. Please try later." Alternatively, if you've specified a "default user-friendly response" (for when errors and exceptions occur) in [Bot Settings](conversation-builder-bots-bot-basics.html#configure-bot-settings), that response is sent instead.

### File Upload interactions

{: .important}
File Upload interactions are available for Web Messaging, Apple Business Chat, and WhatsApp Business. Additionally, the interactions are only available on the LivePerson cloud platform.

Use a File Upload interaction in a dialog when you need the consumer to upload a file that you require. For example, you might have a bot that handles account creation, where the consumer needs to provide an ID card and a document demonstrating proof of a good credit score.

When you use a File Upload interaction, on the consumer side in the messaging window, the consumer can upload the file by dragging and dropping it onto the window. (For an overview of file sharing in Conversational Cloud, see [here](https://knowledge.liveperson.com/messaging-channels-rich-messaging-agent-file-sharing-overview.html).)

{: .important}
Some setup of your Conversational Cloud environment is required before using this feature. Please contact your LivePerson account representative to enable this feature.

**To add a File Upload interaction**

1. Select the interaction just above where you want to add the File Upload interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_fileUpload.png"> (File Upload) on the interactions toolbar.
2. In the File Upload interaction, enter the message to send to the consumer.

    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload2.png">

    For the file to be uploaded, in step 4, you'll follow this with an integration interaction that invokes a File integration.

3. In the File Upload interaction, in the upper-right corner click <img style="width:25px" src="img/ConvoBuilder/icon_settings.png"> (Settings icon). Select the **Advanced** tab. Then specify the following under **File Upload Settings**:
    - **Accepted File Types**: Select the types of files that you will accept for upload (PDF, JPEG, PNG, DOCx, etc.). If the consumer attempts to upload a file of any other type, the upload will fail, and the Validation Failure message (below) will be sent to the consumer.
    - **Success message**: Enter the message to send to the consumer if the file upload to your external file share is successful. The default value is, "Successfully processed the file."
    - **Failure message**: Enter the message to send to the consumer if the file upload to your external file share is unsuccessful due to an error. The default value is, "Failed to process the file. Please try again."
    - **Validation Failure message**: Enter the message to send to the consumer if the upload fails because the consumer has attempted to upload a file of an invalid type. If you don't supply a message, the following message is sent, "The file type is invalid. Upload one of these types: {a}, {b}, {c}." To help to avoid validation failures, consider mentioning the acceptable file types in the File Upload message, as we've done in the image above.
    - **In progress message**: Enter the message to send to the consumer when the upload begins. The default value is, "Processing the file..."

4. Immediately after the File Upload interaction, add an Integration interaction ( <img style="width:30px" src="img/ConvoBuilder/icon_integration.png"> ). In the interaction, select the File integration to invoke (Integration type = File).
    
    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload4.png">

    The File integration handles upload of the file from Conversational Cloud to your brand's external file share. If you haven't already done so, [create the File integration](conversation-builder-integrations-file-integrations.html) now, so you can complete this step.

5. Finish configuring the interactions and overall dialog as per your requirements. For information on potential customization points, see the customization section farther below.

#### Notes on File Upload interactions

- The uploaded file can’t be over 5 MB.
- File upload is an asynchronous process, so the bot's conversation with the consumer will continue while the upload is in progress. The consumer will only be advised of success or failure, respectively, once the process is completed or has failed.
- The File Upload interaction can't be tested using the Preview window.

#### Customization points

##### Uploading multiple files

If the dialog flow requires that the consumer upload *multiple* files, you'll need to add a File Upload interaction for every file, and each interaction must be followed by an Integration interaction. You can certainly reuse the [File integration](conversation-builder-integrations-file-integrations.html) that gets called, as we've done below.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_fileUpload3.png">

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_fileUpload9.png">

##### Routing the conversation based on success or failure

If desired, you can route the conversation to a different dialog flow *based on whether the upload succeeded or failed*.

To do this for the success flow, create a dialog that begins with a Dialog Starter interaction that matches the pattern `file_upload_success:{your success message}`, for example:

`file_upload_success:Receipt of file is successful`

*Spaces in the message are permitted.*

Then build out the success dialog flow as desired.

You can create a failure dialog similarly. In this case, the Dialog Starter interaction must match the pattern: `file_upload_failed:{your failure message}`.

If your original dialog involves *multiple* uploads--with different success and failure messages for each upload--but you want to handle the uploads with a *single* success dialog (or failure dialog), use the * wildcard character to match all messages like this:

`file_upload_success:*`