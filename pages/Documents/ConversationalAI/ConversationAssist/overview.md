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

### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/677425411" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>

### What is Conversation Assist?
Conversation Assist offers recommended bots and answers to your human agents inline in their conversations with consumers.

<img width="400" src="img/agentassist/example2.gif" align="left" style="margin: 0px 25px 0px 0px;">

When your agents take advantage of these just-in-time recommendations, they become more efficient and save time. What's more, their conversational outcomes are improved and more consistent. Conversation Assist can even help to reduce the time to onboard new agents.

You can set up bot and answer recommendations in just a few clicks.

On the **Home** page of Conversation Assist, you'll find a dashboard of rich analytics, which you can use to continuously monitor and tune recommendation performance. Use this valuable data to understanding the impact that your solution is having on your agent operations.

<img width="800" src="img/agentassist/dashboard.png">

{: .important}
Just getting started? Complete the [Using Conversation Assist](tutorials-guides-using-conversation-assist-overview.html) tutorial.

### Intent-based recommendations
Within a messaging conversation, Conversation Assist recommends bots and answers based on the intent that’s detected in the consumer’s message. The recommendations are presented in real time, inline within the conversation.

<img width="550" src="img/agentassist/example.png">

When offered a recommended answer, the agent can send it to the consumer. The agent can optionally modify it before sending it.

When offered a recommended bot, the agent can delegate the conversation to the bot, so it takes over. The agent stays in the conversation, so they can monitor the bot’s progress and remove the bot if needed.

### Skill-based recommendations
Recommendations aren’t just intent-based, they’re skill-based too.

When Conversation Assist offers a recommendation, it always does so based on not just the consumer’s intent, but also the conversation’s skill. This means you can map a slice of content to desired skills, and then recommend bots and answers based on the consumer's intent.

### Multiple recommendations
You can specify the maximum number of recommendations offered by Conversation Assist at a given time. You can offer up to five.

### Recommendation sources

Recommendation sources include knowledge bases and bots:

* **Using knowledge bases**: During [setup](conversation-assist-recommendation-sources-setting-up-knowledge-bases.html), you must assign one or more skills to the knowledge base whose articles can be recommended. In turn, during a messaging conversation, if the conversation’s skill matches the knowledge base’s, and if an article therein has an intent that matches the consumer's, Conversation Assist will recommend the article as an answer.

* **Using bots**: This works similarly. During [setup](conversation-assist-recommendation-sources-setting-up-bots.html), you must assign one or more skills to the bot that can be recommended. And during a messaging conversation, if the conversation’s skill matches the bot user’s, and if the bot supports the consumer's intent, Conversation Assist will recommend the bot for use.

### Access Conversation Assist

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Conversation Assist**.

    <img width="800" src="img/agentassist/access.png">