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

A common use case for the Knowledge AI interaction is within a [Fallback dialog](conversation-builder-dialogs-fallback-dialogs.html), where you want to direct a consumer utterance that didn’t match a dialog starter into a knowledge base search. If an appropriate search result is found, it can be displayed. If no result is found, you might then display a "sorry" message or transfer the conversation to a human agent.

Alternatively, you might have an FAQ bot that is driven by a knowledge base full of articles.

Powering bots with intelligent answers can increase containment: It helps to ensure that the conversation stays between the bot and the consumer and that the consumer's need is resolved by the bot.

#### How the Knowledge AI search works

* **The search phrase** - The Knowledge AI interaction always passes the consumer’s most recent message into the search as the search phrase.
* **The search** - When performing the search, the search mode is always “Intents.” This cannot be changed. For information on this search mode, see [here](knowledgeai-using-intents-with-kbs.html#search-modes).
* **The results** - The answers that are returned must meet or exceed the confidence score that you specify within the interaction’s configuration. This minimum threshold can be VERY GOOD, GOOD or FAIR PLUS.

#### How the answers are rendered

When you configure a Knowledge AI interaction, you specify an **Answer layout** for the answers, i.e., one of these:

<img style="width:400px" src="img/ConvoBuilder/knowledge_ai_answerlayout.png">

The first two options are *rendered automatically*, and each uses a particular layout. With these options, there's no need to follow the Knowledge AI interaction with subsequent interactions that display the answers. The Knowledge AI interaction handles it all: both the knowledge base search and the rendering of the answers. When it meets your needs, one of these options is the simpler choice.

If you require control over the article content and layout that's used, you can choose to use a custom answer layout instead of auto rendering. In this case, you must follow the Knowledge AI interaction with subsequent interactions that display the answers.

Select an answer layout based on the target channels and your requirements. For more on this interaction’s channel-level support, see [here](conversation-builder-interactions-interaction-support.html).

#### The "Auto render, rich" answer layout

This layout looks like this:

<img style="width:600px" src="img/ConvoBuilder/knowledge_ai_rich.png">

With this layout:

* Anywhere from one to three results are returned based on the maximum number of answers that you've specified in the interaction.
* The results degrade gracefully to the "Auto render, plain" layout when the channel in use doesn't support the carousel.

#### The "Auto render, plain" answer layout

This layout doesn’t include rich elements like images. If the channel is Web messaging, which supports `href` tags, the output looks like this:

<img style="width:600px" src="img/ConvoBuilder/knowledge_ai_plain.png">

On all other channels, it looks like this:

<img style="width:700px" src="img/ConvoBuilder/knowledge_ai_plain2.png">

With this layout:

* Only a single, best result is returned regardless of the maximum number of answers that you've specified in the interaction.
* Any HTML in the article's content is **not** removed. (Take note of the formatting applied to **Cancel Flight** in the image above.) Use HTML in your source knowledge base only when your target channels support it.

#### Add a Knowledge AI interaction

1. Select the interaction just above where you want to add the Knowledge AI interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_knowledge_ai.png"> (Knowledge AI) on the interactions toolbar.
2. In the interaction, select the knowledge base to search.

    <img style="width:600px" src="img/ConvoBuilder/knowledge_ai_add.png">

3. In the upper-right corner of the interaction, click <img style="width:20px" src="img/ConvoBuilder/icon_settings.png"> (Settings icon).
4. On the Basic tab, specify the following:
    * **Message when results not found**: Enter the message to send to the consumer when there is no response returned from the knowledge base search. This might be due to no articles being found or due to a failed search. This message is sent regardless of whether you’ve defined a custom rule for the "KB Match Not Found" match type (discussed below). If you don't want this message to be sent, enter "BLANK_MESSAGE".
5. Review the rest of the basic settings, and make any changes desired. For help with these, see [here](conversation-builder-interactions-configuration-settings.html#basic-settings).
6. Switch to the Advanced tab, and specify the following:

    <img style="width:600px" src="img/ConvoBuilder/knowledge_ai_settings.png">

    * **Min confidence score for answers**: Select the minimum score that a result must have in order to be returned, either VERY GOOD, GOOD, or FAIR PLUS. If you downgrade this to FAIR PLUS, be sure to test whether the quality of the results meets your expectations. It's generally recommended to keep the quality above FAIR PLUS. For more on confidence scores, see [here](knowledgeai-using-intents-with-kbs.html#scoring-and-thresholds).

        This field isn't shown if you've selected an [external knowledge base that doesn't use LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-without-liveperson-ai.html). In this case, the results are simply those returned by the call to the external CMS.

    * **Max number of answers**: Select the maximum number of answers to return from the knowledge base, anywhere from one to three. The default value is one.
    * **Answer layout**: Select "Auto render, rich," "Auto render, plain," or "No auto rendering" based on your requirements. These layout options are discussed farther above.
    * **Link text for content URL**: This setting is available when you select an "auto rendering" option for the **Answer layout**. Enter the "learn more" text to use. You can enter a botContext or environment variable here, e.g., {$botContext.\<name\>}. When the "Auto render, rich" layout is used, and when the "Auto render, plain" layout is used and the channel is Web messaging, this is the text for the `href` link to the article's content URL. When the "Auto render, plain" layout is used in any other channel, this value is sent as static text: [this value] + [article's content URL in shortened form], for example, "Learn more at www.mysite.com/abc." For illustrations, see the images earlier in this topic.
    * **Default image URL**: This optional setting is available only when you select "Auto render, rich" for the **Answer layout**. If you enter an image URL, then when an article doesn't have an image URL within the knowledge base, this image is used in the rich output. This presents a uniform consumer experience across all articles, even when some articles have images but others don't. You might specify a company logo. Remember to whitelist the image URL, as discussed [here](conversation-builder-networking-security.html#whitelisting-rich-media). You can also enter a botContext or environment variable here, e.g., {$botContext.\<name\>}.
    * **Response data variable**: This setting is available only when you select "No auto rendering" for the **Answer layout**. Enter the name of the response data variable that will store the answer results. The default variable name is "kb_search."
7. Click **Save**.
8. Configure rules that direct the conversation flow based on the search results; this is described below. If you’ve selected "No auto rendering" for the **Answer layout** setting, you’ll also need to add the interactions that display the answers.

{: .important}
You might be familiar with implementing a knowledge base search using an Integration interaction that itself uses a specified [KnowledgeAI integration](conversation-builder-integrations-knowledgeai-integrations.html) to perform the search. That approach is still supported, but it is considered a legacy approach. The Knowledge AI interaction is a simpler alternative because it doesn’t need an associated KnowledgeAI integration.

#### No auto rendering: Using a custom answer layout

Choose the "No auto rendering" answer layout when you require control over how the answers are rendered. With this option, you must manually add the interactions that display the article content.

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

    * **Agent Id**: Optional. Used for bot-to-human transfers only. Specify the ID of the human agent to which to transfer the conversation. (You can obtain the ID from the address bar when the user profile is displayed in Conversational Cloud.) For Messaging, specify the agent ID as `<account ID>.<agent ID>`. For Live Chat, specify just the `<agent ID>`. Transfer of the conversation to this agent ID only occurs if the agent is assigned to the skill ID that you specify and is available; otherwise, transfer to the skill ID occurs instead.
    
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

4. Immediately after the File Upload interaction, add an Integration interaction <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_integration.png">. In the Integration interaction, select the File integration to invoke (Integration type = File).
    
    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload4.png">

    The File integration handles upload of the file from Conversational Cloud to your brand's external file share. If you haven't already done so, [create the File integration](conversation-builder-integrations-file-integrations.html) now, so you can complete this step.

5. Finish configuring the interactions and overall dialog as per your requirements. For information on potential customization points, see the customization section farther below.

#### Notes on File Upload interactions

- The uploaded file can’t be over 5 MB.
- File upload is an asynchronous process, so the bot's conversation with the consumer will continue while the upload is in progress. The consumer will only be advised of success or failure, respectively, once the process is completed or has failed.
- The File Upload interaction can't be tested using the Preview window.

#### Customization points

##### Uploading multiple files

If you require that the consumer upload *multiple* files, use different dialogs to accomplish this so that there is only one File Upload interaction in a single dialog. You can certainly reuse the [File integration](conversation-builder-integrations-file-integrations.html) that gets called.

##### Routing the conversation based on success or failure

If desired, you can route the conversation to a different dialog flow *based on whether the upload succeeded or failed*.

To do this for the success flow, create a dialog that begins with a Dialog Starter interaction that matches the pattern `file_upload_success:{your success message}`, for example:

`file_upload_success:Receipt of file is successful`

*Spaces in the message are permitted.*

Then build out the success dialog flow as desired.

You can create a failure dialog similarly. In this case, the Dialog Starter interaction must match the pattern: `file_upload_failed:{your failure message}`.

If your original dialog involves *multiple* uploads--with different success and failure messages for each upload--but you want to handle the uploads with a *single* success dialog (or failure dialog), use the * wildcard character to match all messages like this:

`file_upload_success:*`

### Dynamic Routing interactions

Dynamic Routing is the intelligent routing of consumer conversations to the most qualified agents -- bot or human -- based on intent data and other contextual data: consumer inputs, past interactions, loyalty tier, and other attributes. Dynamic routing makes possible highly personal consumer journeys and routing at scale. It is a key architectural component of Conversation Orchestrator, one of LivePerson’s Conversational AI applications. For an in-depth introduction to Dynamic Routing, see [here](conversation-orchestrator-dynamic-routing-overview.html).

Conversation Builder includes a **Dynamic Routing interaction** that significantly simplifies the usage of the Dynamic Routing capability. While there are other methods of implementing Dynamic Routing, using this interaction instead is recommended for its ease of use and lack of code. 

{: .important}
The Dynamic Routing interaction is only available to brands who log in with single sign-on via Conversational Cloud. It isn’t available if you log into Conversation Builder directly. <br><br>
This section provides basic information on Conversation Builder’s Dynamic Routing interaction. For detailed information on using this interaction, see the Conversation Orchestrator getting started documentation that’s [here](conversation-orchestrator-dynamic-routing-getting-started.html).

#### How the interaction works

A Dynamic Routing interaction does the following:

1. It automatically performs an `askMaven` call to get the next routing actions for the current conversation.

    [askMaven](conversation-builder-scripting-functions-askmaven.html) is the Conversation Builder JavaScript function that conveniently wraps Conversation Orchestrator’s Next Actions API. You don’t need to manually add this call; the Dynamic Routing interaction automates the logic.

2. It sets the following in the Conversation Orchestrator namespace:

    * **orchestrator.channel**: The channel in use
    * **orchestrator.userMessage**: The most recent user message
    * **orchestrator.intent**: The ID of the most recently matched Dialog Starter intent

3. It iterates through the next actions returned by the `askMaven` call and automatically performs all the actions in the order they were returned. For example, it might send a message to the consumer, and then transfer the conversation to a particular skill. A next action can be one of:

    * Send a message
    * Route to skill
    * Route to agent

    **Note**: If the next action returned by the `askMaven` call is just to send a message, the bot does this and then transfers to the fallback skill specified in the interaction. If a fallback skill isn't specified, the conversation flow continues to the next action in the dialog.

#### Prerequisites

Before using the Dynamic Routing interaction, make sure that Conversation Orchestrator’s Conversation Context Service is enabled for your account, as described [here](conversation-builder-scripting-functions-manage-the-conversation-context-service.html#getting-started). If your account is relatively new, it’s likely that this was done automatically for you by LivePerson when your account was set up. However, brands with older accounts will need to enable this manually.

Enabling the Conversation Context Service for your account is necessary because when the Dynamic Routing interaction performs the `askMaven` call, the CCS is used to store and pass some information.

#### Add a Dynamic Routing interaction

1. Select the interaction just above where you want to perform the dynamic routing, and click <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_dynrouting.png"> (Dynamic Routing) on the interactions toolbar.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_dynrouting.png">

2. In the interaction, click **Manage routing policies**. As a convenience, this link takes you to Conversation Orchestrator, where you can define and prioritize your routing policies if you haven’t done so already. For help with this step, see [here](conversation-orchestrator-dynamic-routing-managing-routing-policies.html). 
3. In the upper-right corner of the interaction, click <img style="width:20px" src="img/ConvoBuilder/icon_settings.png"> (Settings icon).
4. On the **Basic** tab, specify the following:

    * **Fallback skill id**: If the `askMaven` call returns just a next action of “send message,” doesn’t return any next actions, returns an error, or fails for some reason, this is the ID of the agent skill to which the conversation is transferred. You can specify the ID using a bot context variable like {botContext.skillId}, or you can enter a direct, numeric value. If this setting isn’t set, the conversation flow continues to the next action in the dialog.
    * **Fallback skill name**: Enter the name of the agent skill that you specified in the **Fallback skill id** setting. Entering the name provides you with something display-friendly and “readable” by which to readily understand which skill is being used (since the skill ID is a number).

5. Select the **Advanced** tab, and specify the following:

    * **Escalation message**: This is the message to send to the consumer before transferring the conversation as determined by the next actions, for example, “Hold on while I connect you with a suitable agent who can assist you.” You can enter static text, use a variable, or both. If you need to insert a new line, use an escape character like so: \\\\n.

6. Click **Save**.

    Optionally, you can add Pre-Process or Post-Process code to the interaction to override standard behaviors. For example, you might want to direct the flow to a different interaction, not to the Dynamic Routing interaction, based on certain conditions. You could do this in the Pre-process Code.

#### Using the Dynamic Routing bot

If you are setting up a new routing or concierge bot, it might be helpful to use the Dynamic Routing bot. The bot already includes the Dynamic Routing interactions and additional, out-of-the-box functionality, such as routing by intent. For more on this, see [here](conversation-orchestrator-dynamic-routing-getting-started.html).

#### FAQs

**How many Dynamic Routing interactions can I add within a bot?**

You can add just one.

**How does disambiguation work when a Dynamic Routing interaction is used?**

Disambiguation is the responsibility of the bot, so if you want to let the consumer clarify their intent before the flow moves to the Dynamic Routing interaction, implement a [Disambiguation dialog](conversation-builder-dialogs-disambiguation-dialogs.html).

**Why can’t I add custom rules to the interaction?**

As mentioned above, the end result of this interaction is always a transfer. Custom rules that control the next action can’t be specified because the transfer happens asynchronously.

**Can I alter the behavior of the askMaven call that’s performed by the Dynamic Routing interaction?**

No, this can’t be done. If you’d like to do this, the Dynamic Routing interaction isn’t the best solution. Use one of the more manual methods described [here](conversation-orchestrator-dynamic-routing-getting-started-legacy.html).


### Apple Pay interactions

**For Apple Business Chat only.**

If your business uses Apple’s Business Chat service to chat with consumers via the Messages app, you can use the Apple Pay integration interaction to let the consumer make a payment for goods and services using Apple Pay. (The interaction has been developed per Apple's Apple Pay specifications, which you can find [here](https://developer.apple.com/documentation/businesschatapi/messages_sent/interactive_messages/apple_pay_in_business_chat).)

#### Prerequisite setup steps

1. Review and follow LivePerson’s Apple Business Chat setup guide that’s [here](https://knowledge.liveperson.com/messaging-channels-apple-business-chat-setup-guide.html).
2. As a part of the setup for Apple Pay in specific, you’ll need to create and set up your merchant account and the services needed to use Apple Pay, and you’ll need to provide your Merchant ID in Apple Business Register. These steps are covered [here](https://developer.apple.com/documentation/businesschatapi/messages_sent/interactive_messages/apple_pay_in_business_chat/initiating_apple_pay) on Apple’s developer site. Contact your LivePerson representative for help with this if needed.
3. Implement your own merchant session endpoint, which is discussed [here](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/requesting_an_apple_pay_payment_session) on Apple’s developer site.

Once this setup is completed, you can add the Apple Pay integration to your bot and configure it as described below.

#### Interaction configuration

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_applepay1.png">
<br>
<img style="width:400px" src="img/ConvoBuilder/integrations_applepay3.png">
<br>
<img style="width:450px" src="img/ConvoBuilder/integrations_applepay4.png">

##### Tile settings

| Setting | Description | Required? | Example |
| --- | --- | --- | --- |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media). If used, specify an image that’s appropriate for the overall pay experience. | Optional | https://www.mysite/images/mylogo.jpg |
| ADD IMAGE > Image Style | The size of the image, either Icon (smallest), Small, or Large. | Optional | Icon |
| Title | The title of the Apple Pay bubble. | Required | Your order |
| Item name | A short description of the item. You can specify a botContext or integration variable name. You can also express these using an array enumerator, i.e., specify the variable using “i” as the index. | Required | {applePayData.lineItems[i]} |
| Item price | The amount of the item. You can specify a botContext or integration variable name. You can also express these using an array enumerator, i.e., specify the variable using “i” as the index. | Required | {applePayData.itemPrices[i]} |
| Total | The total amount for all items, in effect, the subtotal (minus tax). You can specify a botContext or integration variable name. | Required | {$botContext.total} |

##### Advanced interaction settings

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_applepay2.png">

**Merchant Information**

* **Merchant Identifier**: The unique identifier that represents you as a merchant for Apple Pay.
* **Merchant Name**: The canonical name for your store, suitable for display and consisting of 64 or fewer UTF-8 characters.
* **Country**: Your two-letter ISO 3166 country code as a merchant.
* **Currency**: The three-letter ISO 4217 currency code for the payment.
* **Merchant Session**: A unique token representing the transaction between the consumer and you as the merchant. This token is used by Apple to confirm that the pay session was created by a valid merchant and that it is being used within the time bounds allowed by Apple. Create an integration that points to your merchant session endpoint, and provide the response received from the endpoint here. You can specify a botContext or integration variable name.
* **Account Signature**: This field allows for the account signature to be generated and added as a part of the request, for extra validation. The field stores a signed hash of the merchant session payload. The hash is sent as a part of the structured content request to the connector, which validates it and rejects it if invalid. You can enter an alphanumeric string or specify a botContext or integration variable name. This field is optional and only needed for accounts using this sign/validate flow. For more on the Apple Pay signature flow, see [here](apple-business-chat-templates-apple-pay-template.html#apple-pay-signature-flow). Note that opting in to this additional verification requires some internal account configuration; please contact your LivePerson representative for help with setting this up.
* **Request Identifier**: This field stores the unique identifier representing the merchant session request. The request identifier is a consistent ID throughout the lifetime of the pay session, and it’s used by LivePerson APIs and services to track the pay session from start to finish. You can enter an alphanumeric string or specify a botContext or integration variable name.

**Shipping Methods**

You can add a list of available shipping methods. For each shipping method, specify:

* **Name**: A short description of the shipping method.
* **Shipping Cost**: The cost associated with the shipping method.
* **Description**: An additional description of the shipping method.
* **ID**: (Optional) A value that you provide to identify the shipping method.

{: .important}
The shipping method fields can be updated dynamically via an API call, i.e., you can specify a botContext or integration variable name in these fields.<br><br>The first shipping method that you add is used as the default method.

**Additional Fields & Payment Capabilities**

* **Required Billing Fields**: Select the billing contact fields required to process the transaction. Tip: Select only the fields that are needed to process the payment. Selecting unnecessary fields adds complexity to the transaction; this can increase the chances of the customer canceling the payment request.
* **Required Shipping Fields**: Select the shipping contact fields required to fulfill the order. For example, if you need the customer’s email address or phone number, select these.
* **Merchant Capabilities**: Specify the payment capabilities supported by you as the merchant. You must include “3DS.”
* **Supported Networks**: Specify one or more of the payment networks supported by you as the merchant.

**Endpoint URLs**

Only the **Payment Gateway URL** is required. This URL is called by Apple Pay to process the payment through the payment provider. 

The optional endpoint URLs are for receiving and managing any updates a customer might make before confirming the payment. These include:

* **Payment Method Update URL**: Called by Apple Pay when the customer changes the payment method.
* **Shipping Method Update URL**: Called by Apple Pay when the customer changes the shipping method.
* **Shipping Contact Update URL**: Called by Apple Pay when the customer changes their shipping address information.
* **Fallback URL**: A URL that opens in a web browser so the customer can complete the purchase if their device is unable to make payments using Apple Pay.
* **Order Tracking URL**: Called by Apple Business Chat after completing the order; provides you with an opportunity to update the order information in your system.

For more on these endpoints, see [here](https://developer.apple.com/documentation/businesschatapi/applepayendpoints) on the Apple developer site.