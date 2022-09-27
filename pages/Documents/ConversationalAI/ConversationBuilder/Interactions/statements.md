---
pagename: Statements
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-statements.html
indicator: both
---

Statement interactions simply display information and then execute the next action. They don’t expect or wait for a user response.

### Text

Text statements display the text provided, for example:

<img style="width:300px" src="img/ConvoBuilder/statements_text.png" alt="An example of a Text statement as it appears in the Preview tool">

Text statements can [display dynamic values through the use of variables](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

### Image

Image statements display a single image.

<img style="width:250px" src="img/ConvoBuilder/statements_image.png" alt="An example of an image as it appears in the Preview tool">

#### Image settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Image URL | The URL for the image file. The URL must start with HTTP or HTTPS and use a valid format, be a bot environment variable, be a bot context variable, or be a combination thereof.<br><br>When specifying a URL, the domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media).<br><br>Keep images fairly small in size \(MB\) and dimension, so they load quickly. | Required | https://www\.mysite\.com/images/bikes\.jpg |

### Audio

Audio statements currently aren't supported by Conversational Cloud.

### Video

Video statements currently aren't supported by Conversational Cloud. As an alternative, use a Text statement that includes the video URL as a link.

### Apple Rich Link

**For Apple Messages for Business only.**

{: .note}
Use of Apple rich links for video is not supported at this time.

If your business uses Apple’s Messages for Business service to chat with consumers via the Messages app, you can use this type of interaction to send a richer, more interactive and structured message, for example:

<img style="width:450px" src="img/ConvoBuilder/statements_richLink.png" alt="An example of an Apple rich link as it appears in the Preview tool, and what the various parts are">

Apple rich links let consumers directly preview an inline image or video. If you were to use a plain URL for an inline image or video sent through Apple Messages for Business, the consumer would have to tap the “Tap to Load” message to load the content. But with an Apple rich link, the content is displayed directly. (The interaction has been developed per [Apple's Rich Link specifications](https://developer.apple.com/documentation/businesschatapi/messages_sent/sending_rich_link_messages).)

<img style="width:500px" src="img/ConvoBuilder/statements_richLink2.png" alt="The default configuration of an Apple rich link">

#### Rich Link settings

{: .note}
Use of Apple rich links for video is not supported at this time.

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| ADD IMAGE OR VIDEO → Image URL | For an image, this is the URL for the image file. <br><br>For a video, this is the URL for the background image to display beneath the play button/link. Consider using a complementary image or one from the video itself. <br><br>The domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media).<br><br>Keep images fairly small in size \(MB\) and dimension, so they load quickly. | Required | https://www\.mysite\.com/images/myImage\.jpg |
| ADD IMAGE OR VIDEO → URL | For an image, this is the item/business URL to load when the image is clicked. For a video, this is the URL for the video file to play when clicked. | Required | https://www\.mysite\.com/videos/myVideo\.mp4 |
| Title | The title of the rich link. | Required | Flower arranging 101 |

#### Populating an Apple Rich Link dynamically

You can populate the statement with static information, or it can be populated dynamically during run time, for example, using data received from an [API integration](conversation-builder-integrations-api-integrations.html).

<img style="width:600px" src="img/ConvoBuilder/statements_richLink3.png" alt="An example of well-formed syntax for populating a rich link dynamically">

#### Notes on Apple Rich Links

- While Conversational Cloud supports formatting in Apple rich links, Conversation Builder currently doesn't.

### Private message

#### What’s a private message?

Private messages are messages that are visible to all conversation participants *except* the consumer.

Human agents can send private messages within a conversation. This allows agents to privately seek guidance from managers. In turn, it also allows managers to provide that guidance privately. More on this [in our Knowledge Center](https://knowledge.liveperson.com/contact-center-management-messaging-operations-private-messages-overview.html/).

Bots can send private messages too. You can design a bot to send a private message at any time in the conversation flow. Typically though, you'll want to do this just before a transfer to a human agent.

<img style="width:450px" src="img/ConvoBuilder/statements_privatemsg1.png" alt="An example of a private message as it appears in the Preview tool">

#### Why use a private message?

There are several scenarios where private messages sent by bots can be useful:

- **Provide important information**: Assume, for example, that the bot detected a “financial hardship” intent from the consumer. The bot can send a private message containing special instructions on how to handle the situation. If the conversation is then transferred to a human agent, the agent has this information available.

    <img style="width:450px" src="img/ConvoBuilder/statements_privatemsg2.png" alt="Another example of a private message as it appears in the Preview tool">

- **Provide contextual information**: As a consumer converses with a bot, the bot gathers useful contextual information about the consumer and their intent (e.g., name, order number, and so on). Just before transferring the conversation to a human agent, the bot can send a private message summarizing this information.

- **Notify the human agent when the bot leaves the conversation**: If you’re using [Conversation Assist](conversation-assist-overview.html), you might be recommending bots to handle conversations with your consumers. If so, it can be a challenge for the agent to know when the bot has finished its work. The agent must check back repeatedly on the bot’s progress. A private message sent by the bot when it’s finished handling the consumer’s request can solve this. It can tell the agent what action has been taken, and let them know that it’s time for them to rejoin the conversation to close things out with the consumer.

    <img style="width:450px" src="img/ConvoBuilder/statements_privatemsg3.png" alt="Another example of a private message as it appears in the Preview tool">

    Or, perhaps you have a manager bot that’s a participant in all conversations with human agents. If a conversation needs to be escalated to a human manager, the manager bot can send a private message to the human agent to let them know why the conversation is being taken from their workspace.

- **Mark a point in a conversation**: If you want to set “markers” at specific points in a conversation flow, you can send a private message to do this. A human agent that picks up the conversation can use these to search for a specific topic in the conversation.

#### User experiences

- **Human agents**: In an actual conversation with a consumer, a private message [appears inline in the conversation area](https://knowledge.liveperson.com/contact-center-management-messaging-operations-private-messages-overview.html/) (with a “Private” badge) in the human agent’s view within Conversational Cloud.
- **Consumers**: The consumer never sees private messages.

#### Add a Private Message interaction

1. Add the interaction.
2. Enter the message to send. Essentially, the interaction is a Statement interaction that isn’t sent to the consumer. So, the guidelines for other Statement interactions apply: You can enter plain and [formatted text](conversation-builder-interactions-interaction-basics.html#format-text). You can also enter botContext variables and environment variables.

    <img style="width:600px" src="img/ConvoBuilder/statements_privatemsg4.png" alt="The default configuration of a private message interaction">

#### FAQs

**Can I use a private message to send contextual info from one bot to another?**

No, in a bot-to-bot transfer, you should transfer contextual info as discussed in [this section](conversation-builder-bots-bot-to-bot-transfers.html).

**Can I see private messages within the Preview tool in Conversation Builder?**

Yes, private messages are visible within [Preview](conversation-builder-testing-deployment-previewing.html), so you can easily test them. They are displayed with a “Private” indicator.

<img style="width:450px" src="img/ConvoBuilder/statements_privatemsg1.png" alt="An example of a private message as it appears in the Preview tool">

**Are private messages included in a conversation transcript?**

Yes. However, there’s an important exception: Conversation transcripts that are sent to consumers (e.g., by way of a post-conversation survey bot) don’t include private messages.

**Can both agent and manager bots send private messages?**

Yes, they can.

**In which types of dialogs can a private message be sent?**

You can send a private message in any type of dialog.

**Are there any associated scripting functions?**

Yes, there's the [sendPrivateMessage](conversation-builder-scripting-functions-send-messages.html#send-private-message-to-agent) function.
