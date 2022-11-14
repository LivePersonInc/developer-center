---
pagename: Agent Experience
redirect_from:
  - conversation-orchestrator-agent-assist-agent-experience.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
permalink: conversation-assist-agent-experience.html
indicator: messaging
date_updated: 2022/09/29
---

{: .attn-note}
When evaluating the agent experience, keep in mind the [FAQs](conversation-assist-faqs.html).

{: .attn-tip}
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

### Look up bots and answers on demand

Conversation Assist automatically recommends answers and bots to agents, inline in conversations, based on consumer intent and conversation skill. But…sometimes…your agents need more flexibility. Sometimes, they need to be able to look up answers and bots on demand, regardless of what the consumer just said. The On-Demand Recommendations widget in the Agent Workspace meets this need.

<img width="800" alt="An agent using the Bots and Answers tab of the On-Demand Recommendations widget to find bots and answers" src="img/agentassist/ca_widget_botsandanswers.gif">

If you’ve [turned on the display of the widget](conversation-assist-recommendation-sources-configuring-settings.html#on-demand-recommendations-widget), you can use the Bots & Answers tab to ask any question, or enter a phrase, and get back available bots and answers. You can then easily use those recommendations in the current conversation.

<img width="800" alt="The Bots and Answers tab of the On-Demand Recommendations widget" src="img/agentassist/ca_ondemandwidget_botsandanswers.png">

Note the following identified in the image:

1. **Copy answer**: Copy the recommended answer to your clipboard in order to paste it somewhere else.
2. **Edit and send answer**: Copy the recommended answer to the conversation window, where you can edit it before sending it.
3. **Send answer**: Send the recommended answer immediately.
4. **Delegate to bot**: Delegate the conversation to the recommended bot.

As with recommendations that are displayed inline in the conversation, all recommendations shown in the widget depend on the skills assigned within Conversation Assist. For example:

1. The agent picks up a conversation on the “Ordering” skill.
2. The agent uses the widget to search for available answers and bots.
3. The results returned include only answers from knowledge bases assigned the “Ordering” skill and only bots similarly assigned the “Ordering” skill within Conversation Assist.

Other info in the widget is also skill-based. For example, if the agent’s active conversation is on the Ordering skill, the widget’s “Most used by all” list includes only the answers and bots used the most in conversations on the Ordering skill.

### Look up replies on demand

[Predefined content](https://knowledge.liveperson.com/agent-manager-workspace-workspace-configuration-predefined-content-overview.html/) is a set of canned responses (replies) for common use cases: greetings, closings, and so on. Conversational Cloud lets you personalize predefined content, so it reflects your brand’s voice and business needs.

Predefined content is made available on the Replies tab in the On-Demand Recommendations widget.

<img width="800" alt="An agent using the Replies tab of the On-Demand Recommendations widget to find predefined content" src="img/agentassist/ca_widget_predefinedcontent.gif">

If you’ve [turned on the display of the widget](conversation-assist-recommendation-sources-configuring-settings.html#on-demand-recommendations-widget), you can use the tab to search and browse for replies on demand. You can then easily use them in the current conversation.

<img width="800" alt="The Replies tab of the On-Demand Recommendations widget" src="img/agentassist/ca_ondemandwidget_replies.png">

Note the following identified in the image:

1. **Copy reply**: Copy the reply to your clipboard in order to paste it somewhere else
2. **Edit and send reply**: Copy the reply to the conversation window, where you can edit it before sending it.