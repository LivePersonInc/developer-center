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

### General

<img width="600" src="img/agentassist/settings_general.png">

* **Max # of recommendations**: Specify the maximum number of bot and answer recommendations that Conversation Assist offers at one time. The default value is 3.
* **Suspend/Resume**: When this setting is on (blinking green), Conversation Assist recommends bots and answers inline in conversations. Use this **Suspend**/**Resume** toggle to turn on and off recommendations globally.

### Answer confidence

<img width="400" src="img/agentassist/settings_answerconfidence.png">

Set the **Answer confidence** if you’re using knowledge bases as recommendation sources.

The consumer’s intent will be matched to the articles in the knowledge bases, where each match is assigned a score indicating the system’s confidence in the match. Select the minimum confidence score that an article must have for it to be offered as a recommended answer that can be sent to the consumer. 

The higher the score, the more relevant the recommendations. To offer more recommendations, try a lower score.

### Bot confidence

Set the **Bot confidence** if you’re using bots as recommendation sources.

The consumer’s intent will be matched to the bots, where each match is assigned a score indicating the system’s confidence in the match. Select the minimum score that a bot must have for it to be offered as a recommended bot that can handle the conversation.

The higher the score, the more relevant the recommendations. To offer more recommendations, try a lower score.

### Bot messages

Customize the **bot messages** if you’re using bots as recommendation sources. The messages are sent to the consumer when the bot is added to and removed from a conversation. They help consumers to understand when a bot is involved in a conversation.
