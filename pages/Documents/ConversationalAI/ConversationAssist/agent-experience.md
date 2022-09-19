---
pagename: Agent experience
redirect_from:
    - conversation-orchestrator-agent-assist-agent-experience.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
permalink: conversation-assist-agent-experience.html
indicator: messaging
---

{: .note}
When evaluating the agent experience, keep in mind the [FAQs](conversation-assist-faqs.html).

### Tip
To train your agents, start by enabling recommendations for a single skill.

### Use a recommended bot or article

In Conversational Cloud, bot and article recommendations are displayed inline within the conversation.

<img width="550" alt="Two recommendations being offered to the agent inline in the conversation" src="img/agentassist/use_recs.png">

**To use a recommended bot**

* Click **Delegate** to join a bot to the conversation, so the bot takes over. You stay in the conversation, so you can monitor the bot’s progress and remove the bot if needed.

    <img width="550" alt="The conversation flow when a bot is joined to the conversation" src="img/agentassist/use_bot.png">

    **Tip:** As shown in the image above, a system message announces when the bot joins the conversation. You can [customize this message](conversation-assist-recommendation-sources-configuring-settings.html#bot-messages).

**To use a recommended article**

* Click **Use Answer** to copy the article’s text to the agent’s text input area. You can edit the text before sending it to the consumer.

    <img width="550" alt="Use answer button for using a recommended answer" src="img/agentassist/use_article.png">
    <img width="550" alt="The conversation flow after a recommended answer has been used" src="img/agentassist/use_article2.png">

### Remove or replace the current bot

After you have joined a bot to a conversation, you can remove or replace it if desired:

* To remove the current bot, click **Remove bot** at the top of the messaging panel. The agent can then take over.
* To replace the current bot, click **Replace bot** beside the bot you want to substitute into the conversation. The selected bot joins the conversation, taking over for the previous bot. (Only one bot can be joined to a conversation at a time.)

    <img width="550" alt="Remove bot and Replace bot options that are available when a bot is a part of the conversation" src="img/agentassist/remove_replace_bot.png">

### Notify the agent when the bot has finished

If you’re recommending bots to your agents, it can be a challenge for the agent to know when the bot has finished its work. The agent must check back repeatedly on the bot’s progress. To solve this, the bot can send a [private message](conversation-builder-interactions-statements.html#private-message) when it’s finished handling the consumer’s request. The private message can tell the agent what action has been taken, and let them know that it’s time for them to rejoin the conservation to close things out with the consumer.
