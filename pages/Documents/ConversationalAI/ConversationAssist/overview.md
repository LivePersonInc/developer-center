---
pagename: Overview
redirect_from:
  - maven-maven-assist-overview.html
  - maven-ai-maven-assist-overview.html
  - conversation-orchestrator-maven-assist-overview.html
  - conversation-orchestrator-agent-assist-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
permalink: conversation-assist-overview.html
indicator: messaging
---

{: .important}
Did you know that LivePerson has a Conversational AI forum for builders? Check it out [here](https://talkyard.livepersonai.com/)!

{: .important}
For some practice with Conversation Assist, complete the [Using Conversation Assist](tutorials-guides-using-conversation-assist-overview.html) tutorial.

### What is Conversation Assist?
Conversation Assist is a suite of features that improve the productivity of human agents. Conversation Assist’s key feature is intent-based and skill-based recommendations of bots and answers (knowledge base articles).

### Intent-based recommendations
Within a messaging conversation, Conversation Assist recommends to the agent bots and answers based on the intent that’s detected in the consumer’s message. The recommendations are presented in real time, inline within the conversation.

<img width="550" src="img/agentassist/example.png">

When presented with a recommended answer, the agent can send it to the consumer. The agent can optionally modify the text before sending the message.

When presented with a recommended bot, the agent can use the bot, so it takes over the conversation. The agent stays in the conversation, so they can monitor the bot’s progress and remove the bot if needed.

### Skill-based recommendations
Recommendations aren’t just intent-based, they’re skill-based too.

When Conversation Assist makes a recommendation, it always does so based on not just the consumer’s intent, but also the conversation’s skill. This means you can map a slice of content to desired skills and then recommend bots and answers based on the intent detected in the consumer utterance.

### Multiple recommendations
You can specify the maximum number of recommendations offered by Conversation Assist for a detected intent. You can have up to five.

### Recommendation sources

* **Using knowledge bases**: During setup, you must assign one or more skills to a knowledge base that can be recommended. In turn, during a messaging conversation, if the conversation’s skill matches the knowledge base’s, and if an article therein has an intent that matches the consumer's, Conversation Assist will recommend the article as an answer.

* **Using bots**: This works like it does for knowledge bases. During setup, you must assign one or more skills to a bot that can be recommended. And during a messaging conversation, if the conversation’s skill matches the bot user’s, and if the bot supports the consumer's intent, Conversation Assist will recommend the bot for use.

### Access Conversation Assist

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Conversation Assist**.

    <img width="800" src="img/agentassist/access.png">
