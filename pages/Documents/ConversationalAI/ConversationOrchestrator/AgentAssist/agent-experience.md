---
pagename: Agent Experience
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Agent Assist
permalink: conversation-orchestrator-agent-assist-agent-experience.html
indicator: messaging
---

**Tip:** To train your agents, you can start by enabling recommendations for a single skill.

### Use a recommended bot or article
In Conversational Cloud, bot and/or article recommendations are displayed inline within the conversation.

<img width="550" src="img/agentassist/use_recs.png">

**To use a recommended bot**

* Click **Use bot** to join a bot to the conversation, so the bot takes over. You stay in the conversation, so you can monitor the bot’s progress and remove the bot if needed.

    <img width="550" src="img/agentassist/use_bot.png">

    **Tip**: As shown in the image above, a system message announces when the bot joins the conversation. You can customize this message by changing the bot user's nickname.

**To use a recommended article**

* Click **Use Article** to copy the article’s text to the agent’s text input area. You can edit the text before sending it to the consumer.

    <img width="550" src="img/agentassist/use_article.png">

### Vote up or down to train the model
To provide feedback on a recommendation, click the **Thumbs up** button or the **Thumbs down** button. 

<img width="550" src="img/agentassist/vote.png">

“Thumbs up” tells the underlying Conversation Orchestrator model that it was a relevant recommendation, while “thumbs down” tells it that it’s not. The relevance score is calibrated against this feedback so that Conversation Orchestrator can continuously improve its recommendations and provide the most relevant content to agents.
