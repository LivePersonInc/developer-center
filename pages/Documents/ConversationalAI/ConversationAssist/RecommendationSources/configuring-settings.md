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

<img width="600" src="img/agentassist/settings_general2.png">

When this setting is on (blinking green), Conversation Assist recommends bots and answers inline in conversations. Click the toggle to suspend or resume recommendations globally.

### Max # of recommendations

This setting applies to all recommendation sources.

<img width="600" src="img/agentassist/settings_general.png">

Set the maximum number of recommendations (bot and answer) that Conversation Assist offers at one time. The default value is 3.

### Answer confidence

Set the **Answer confidence** if you’re using knowledge bases as recommendation sources.

<img width="400" src="img/agentassist/settings_answerconfidence.png">

The consumer’s intent will be matched to the articles in the knowledge bases, where each match is assigned a score indicating the system’s confidence in the match. Select the minimum confidence score that an article must have for it to be offered as a recommended answer that can be sent to the consumer. 

The higher the score, the more relevant the recommendations. To offer more recommendations, try a lower score.

### Bot confidence

Set the **Bot confidence** if you’re using bots as recommendation sources.

<img width="400" src="img/agentassist/settings_botconfidence.png">

The consumer’s intent will be matched to the bots, where each match is assigned a score indicating the system’s confidence in the match. Select the minimum score that a bot must have for it to be offered as a recommended bot that can handle the conversation.

The higher the score, the more relevant the recommendations. To offer more recommendations, try a lower score.

### Bot messages

Customize the **bot messages** if you’re using bots as recommendation sources. The messages are sent to the consumer when the bot is added to and removed from a conversation. They help consumers to understand when a bot is involved in a conversation.

<img width="800" src="img/agentassist/settings_botmessages.png">