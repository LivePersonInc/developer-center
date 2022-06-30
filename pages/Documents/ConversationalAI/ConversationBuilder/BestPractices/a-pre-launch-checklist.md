---
pagename: A Pre-Launch Checklist
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-a-pre-launch-checklist.html
indicator: both
---

This pre-launch checklist presents a series of questions and related "best practice" guidance for use when designing, building, and maintaining your bot. The questions and guidance are designed to ensure an optimal consumer experience.

### Required

| Use case | Description | 
| --- | --- |
| Is the bot transparent about being a bot/automated assistant? | Make sure to greet the consumer and make clear that this is an automated conversation. |
| Are the KPIs and success criteria for the bot well-defined and understood? | This should be defined at the outset of the project so that the appropriate metrics and events can be created. |
| Does the bot set the tone and expectations as to what types of queries it can handle? | Rather than being open-ended ("Ask me anything"), the bot should orient the consumer to manage their expectations and minimize frustration. |
Does the bot answer the main intents with an acceptable level of accuracy? | The main intents/use cases of the bot should be responsive to the consumer (via NLU/patterns) with a satisfactory level of accuracy. This is, of course, subjective and changes over time, but should be a KPI that is under constant scrutiny. |
| Has the knowledge base been trained adequately? | Each Knowledge Base article should have some number of training phrases applied to them to ensure that the articles are returning with accuracy. As with intents, this is a KPI that should be reviewed continually. |
|  Does the bot provide an escalation path? | While there are some brands that do not have agents, there should always be some method of escalating a consumer's conversation to get help. Primarily, escalation should be [to an agent](conversation-builder-interactions-integrations.html#agent-transfer-interactions), but, failing that, email or creating a ticket could be other methods. Linking to an online contact form is also a preferred escalation alternative. Escalation to a live agent is required for some channels like Apple Messages for Business. |
| Does the bot respond to requests for "agent," "representative," "human," etc.? | The bot should be able to respond appropriately to a consumer's request for an agent. This can be done with patterns, intents, or a combination thereof. |
| Does the bot deliver an appropriate transfer message prior to agent escalalation? | When escalating a conversation to an agent, the bot should provide some form of transfer message, e.g., "Hold on while I transfer you to an agent..." or similar. For Agent Transfer best practices, see [here](conversation-builder-interactions-integrations.html#best-practices). |
| Does the bot catch failed transfer attempts? | If a bot attempts to transfer to an agent and the request fails for some reason, the pattern `__agent_escalation_failed__` will be returned to the bot. This should be accounted for as a dialog starter pattern, and an appropriate message supplied. For Agent Transfer best practices, see [here](conversation-builder-interactions-integrations.html#best-practices). |
| Does the live Production bot have at least 2 agent connectors? | Each deployed bot should have at least 2 agent connectors to allow for failover or an increase in traffic. |
| Has the bot been thoroughly tested on each channel for which it will be deployed? | As each channel has its own special objects or behaviors, it is imperative to test the bot on each channel to ensure proper display of rich media objects and overall behavior. This is especially true of Facebook Messenger and Apple Messages for Business. |
| Is the bot copy/style uniform and grammatically correct? | The bot should be uniform in terms of POV, capitalization, positioning of prompts, and use of contractions. It should be free of any grammatical, spelling, and punctuation errors. |
| Does the bot point to Apple Maps when providing location information? | When displaying store location or other mapping information, you must use Apple Maps instead of Google or other mapping solutions.<br><br>**Channels**: Apple Messages for Business |
| Does the bot handle the first consumer message of a messaging conversation gracefully? | Whatever the initial consumer utterance might be (greeting or otherwise), the bot should be able to catch and respond in a way that does not result in a fallback/failure. |
| Does the bot validate consumer input and provide appropriate error handling? | When asking for zip code, email address, phone or account numbers, or other particular content, the bot should perform some level of validation to ensure the quality of the response and prevent issues upon submission. If encountering a malformed input, the consumer should be alerted and potentially reminded of the correct input format. |
| Does the bot have "graceful" error handling upon an API failure? | If an [API call fails](conversation-builder-integrations-api-integrations.html#handling-api-responses), there should be some human, readable error message that allows the consumer to try again (if transactional) or perhaps to rephrase their query (for FAQs). |

### Recommended

| Use case | Description | 
| --- | --- |
| Does the bot provide examples of how to interact? | Showing the consumer examples like, "Ask me about flight status" or "Enter your email address, e.g., jon@smith.com" will encourage interaction and minimize error conditions. | 
| Does the bot pause between consecutive messages? | LivePerson recommends a 2500 ms pause between consecutive bot messages for a "short" pause, and a 5000 ms pause for a "long" pause. The latter should be used when [context switching](conversation-builder-dialogs-dialog-basics.html#context-switching) or when the consumer needs time to process the previous bot message. |
| Does the bot reprompt or ask clarifying questions upon failure? | Rather than just presenting the consumer with a failure message, "Sorry, I didn't understand," it is better to reprompt with further instructions to help them move along successfully, or provide a menu of options, examples of FAQs, etc. | 
| Is the bot personalized to the consumer? | If the consumer is authenticated and the consumer's name or other information is known, it makes for a more trusted and facilitated experience if you don't have to ask for their name or other information. Using the consumer's first name sparingly adds another layer of personalization ("Thanks for ordering with {Brand}, {First name}"). | 
| Is the bot personalized to the brand? | All dialogs of the bot should be uniform in terms of tone and style, and they should mirror the brand voice or bot persona if agreed upon. |
| Does the bot allow for an "escape hatch" within lengthy flows? | When a consumer is within a multi-step flow, they should always be able to exit that flow by entering another intent or utterance. [Context switching](conversation-builder-dialogs-dialog-basics.html#context-switching) does, by default, return them to the flow once their intent has been addressed. | 
| Does the bot limit menu items and buttons to no more than 5? | Due to the limited amount of space provided in most messaging windows and the potential for cognitive overload on the consumers, it is recommended to keep the number of options presented to them to a minimum whenever possible. 3 would be best, but 5 should be the max. |
| Does the bot consider business hours or agent wait time/availability before offering to transfer? | If it is outside of business hours, advise the consumer of the expected time when agents will be back online. If wait times are lengthy, provide appropriate messaging to the consumer prior to or upon escalation. | 
| Does the bot have a READ ME or other documentation on its functions? | When developing a bot, it is recommended to provide some level of READ ME or documentation on the high-level capabilities (at least) and/or more in-depth descriptions of the flows, functions, and integrations (at best). This provides significant value for anyone needing to modify or debug the bot in the future. |
| Does the bot limit consecutive chat bubbles to 3? | Presenting the consumer with more than 3 text bubbles in a row might create a scrolling issue and is almost guaranteed for the consumer not to read the information. This is especially frustrating when the response does not answer their question. Before presenting the consumer with a "wall" of text, it would be better to confirm the intent ("Is this what you mean?"), and if providing a series of steps, give the consumer a STOP or QUIT command to exit the flow. |
| Does the bot have a disambiguation dialog enabled? | When a consumer enters an utterance with multiple intents or vague intents, the bot should be able to handle this via [disambiguation](conversation-builder-dialogs-disambiguation-dialogs.html). |
| Does the bot respond to small talk? | It's strongly recommended that the bot be able to [respond to simple small talk intents](tutorials-guides-bot-groups-other-techniques-meta-intents-knowledge-bases.html) (thank you, greetings, are you a bot, what's your name, curse words, etc.). Additionally, it is advisable to escalate on detection of curse words or other indicators of frustration. |
| Does the bot auto-escalate after some number of failures? | In order to prevent the consumer from getting stuck in a loop, and to prevent added frustration, the bot should escalate to an agent after some number of failures (2-3). **Note**: If using the [Auto Escalate dialog](conversation-builder-dialogs-auto-escalation-dialogs.html), this addresses question interactions only. |
| Is the bot using custom events to track certain milestones or completion events? | It is strongly recommended to [log custom events](conversation-builder-scripting-functions-log-debug.html#log-custom-event) for areas of importance within the bot to better track consumer engagement and containment. | 
| Does the bot ask "Anything else?" or "Did that answer your question?" | Afer a bot provides an answer to a consumer, it is recommended to ask if the response was correct. A yes or no response can trigger feedback or log data, so the bot can improve. Asking "Anything else?" provides an opportunity to continue the conversation or close it. |
| Does the bot respond to global commands for navigation? | It is strongly recommended that the bot be able to handle the user typing "main menu" or "home." Handling of "back" is a nice to have. |
| Does the bot use list pickers for questions with 4+ options? | Apple recommends using [list pickers](conversation-builder-interactions-questions.html#apple-list-picker) when displaying 4 or more options. Anything less should follow a lettered list format.<br><br>**Channels**: Apple Messages for Business | 
| Does the bot use lettered lists to present options? | When presenting options through text, a lettered format should be used: A) B) C) rather than 1) 2) 3). Letters are easier to type since they are the default keyboard on mobile devices.<br><br>**Channels**: Apple Messages for Business, SMS |

### Optional 

| Use case | Description | 
| --- | --- |
| Does the bot handle consumers entering extremely lengthy utterances? | In addition to disambiguation, when encountering extremely long utterances, it might be desirable to escalate when over a certain number of words or characters. |
| Does the bot catch multi-line user input? | Some consumers enter their information in multiple lines, rather than a single, concise entry. The bot can enable a [messageDelay flag](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#messagedelay) to concatenate multiple entries into one to prevent this utterance. |
