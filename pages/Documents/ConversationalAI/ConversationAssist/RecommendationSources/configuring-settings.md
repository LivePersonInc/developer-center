---
pagename: Configuring Settings
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
subfoldername: Recommendation Sources
permalink: conversation-assist-recommendation-sources-configuring-settings.html
indicator: messaging
---

The **Settings** page in Conversation Assist contains settings that are shared by all recommendation sources, or by all recommendation sources of a given type (bots or knowledge bases).

### Suspend/Resume recommendations

This setting applies to all recommendation sources.

<img width="600" alt="Suspend setting" src="img/agentassist/settings_general2.png">

When this setting is on (blinking green), Conversation Assist recommends bots and answers inline in conversations. Click the toggle to suspend or resume recommendations globally.

### Max # of recommendations

This setting applies to all recommendation sources.

<img width="600" alt="Max number of recommendations setting" src="img/agentassist/settings_general.png">

Set the maximum number of recommendations (bot and answer) that Conversation Assist offers at one time. The default value is 3.

### Answer confidence

Set the **Answer confidence** if you’re using knowledge bases as recommendation sources.

<img width="400" alt="Answer confidence setting" src="img/agentassist/settings_answerconfidence.png">

The consumer’s intent will be matched to the articles in the knowledge bases, where each match is assigned a score indicating the system’s confidence in the match. Select the minimum confidence score that an article must have for it to be offered as a recommended answer that can be sent to the consumer.

The higher the score, the more relevant the recommendations. To offer more recommendations, try a lower score.

### Bot confidence

Set the **Bot confidence** if you’re using bots as recommendation sources.

<img width="400" alt="Bot confidence setting" src="img/agentassist/settings_botconfidence.png">

The consumer’s intent will be matched to the bots, where each match is assigned a score indicating the system’s confidence in the match. Select the minimum score that a bot must have for it to be offered as a recommended bot that can handle the conversation.

The higher the score, the more relevant the recommendations. To offer more recommendations, try a lower score.

### Bot messages

Customize the **bot messages** if you’re using bots as recommendation sources. The messages are sent to the consumer when the bot is added to and removed from a conversation. They help consumers to understand when a bot is involved in a conversation.

<img width="800" alt="Bot messages settings" src="img/agentassist/settings_botmessages.png">

### On-Demand Recommendations widget

{: .note}
Currently, the On-Demand Recommendations widget is available to a small number of brands. We plan to make it generally available soon, so stay tuned!

Your agents can use this widget to look up bots, knowledge answers, and [predefined content](https://knowledge.liveperson.com/agent-manager-workspace-workspace-configuration-predefined-content-overview.html/) (replies to greetings, closings, etc.) on demand. Turn on this setting to display the widget in the Agent Workspace. (To see the change, you might need to refresh your browser or log in again.)

<img width="800" alt="On-Demand Recommendation on and off setting" src="img/agentassist/settings_ondemandrecs.png">

When recommending bots and answers in the widget, the system respects the configuration of your bots and knowledge bases in support of inline recommendations: Is the bot or knowledge base turned on within Conversation Assist? And what skills are assigned?

If you turn on this widget:

* It’s likely you will want to hide the Predefined Content widget, so it doesn’t appear in the Agent Workspace. This is because the Predefined Content widget also makes available predefined content. Consider the On-Demand Recommendations widget your one-stop shop that assists agents with their conversations.
* Have your Conversational Cloud admin reposition this widget based on the needs of your agents.
