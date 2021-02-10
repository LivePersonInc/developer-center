---
pagename: Overview
redirect_from:
  - maven-maven-assist-overview.html
  - maven-ai-maven-assist-overview.html
  - conversation-orchestrator-maven-assist-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Agent Assist
permalink: conversation-orchestrator-agent-assist-overview.html
indicator: messaging
---

{: .important}
For some practice with Agent Assist, complete the [Using Agent Assist](tutorials-guides-using-agent-assist-overview.html) tutorial.

### What is Agent Assist?
Conversation Orchestrator’s Agent Assist is a suite of features that improve the productivity of human agents. Agent Assist’s key features include:

* Intent-based and skill-based recommendations of knowledge base articles and bots
* Agent feedback

### Intent-based recommendations
Within a messaging conversation, Agent Assist recommends to the agent knowledge base articles and/or bots based on the intent that’s detected in the consumer’s message. The recommendations are presented in real time, inline within the conversation.

<img width="550" src="img/agentassist/example.png">

When presented with a recommended article, the agent can send it to the consumer. The agent can optionally modify the text before sending the message.

When presented with a recommended bot, the agent can use the bot, so it takes over the conversation. The agent stays in the conversation, so they can monitor the bot’s progress and remove the bot if needed.

### Skill-based recommendations
Recommendations aren’t just intent-based, they’re skill-based too.

When Agent Assist makes a recommendation, it always does so based on not just the consumer’s intent, but also the conversation’s skill. This means you can map a slice of content to desired skills and then recommend Knowledge Base articles and bots based on the intent detected in the consumer utterance.

When you set up Agent Assist, it’s required that you assign one or more skills to a knowledge base that can be recommended. As a result, during a messaging conversation, if the conversation’s skill matches the knowledge base’s, Agent Assist will recommend an article therein if the article’s intent matches the consumer’s.

This works the same way for bots: During setup, you must assign one or more skills to a bot that can be recommended. In turn, during a messaging conversation, if the conversation’s skill matches the bot user’s, Agent Assist will recommend the bot if the bot’s intent matches the consumer’s.

### Multiple recommendations
You can specify the maximum number of recommendations made by Agent Assist for a detected intent. You can have up to five recommendations for a detected intent.

### How recommendations are made
To make recommendations, Agent Assist analyzes the available bots and knowledge base articles that match the consumer’s intent, and it finds the best ones. The recommendations are made by choosing those ranked highest by relevance score, after calibrating the score against agent feedback about the historical performance.

The rules for how the recommendations are made and ordered are as follows:

1. **Which recommendations to include?** First, include all article recommendations. Second, include all bot recommendations. This means that articles are included before bots even when the article scores are lower than that of the top bot recommendation.

    Included articles must have a relevance score of GOOD (70%) or higher. The scores for included bots must meet the confidence threshold, which is configurable during setup.

2. **How to order the recommendations?** Within each subgroup of recommendations (articles, bots), sort the recommendations by relevance score in descending order so that the higher the score, the higher the recommendation.

As an example, assume that you have set up 2 knowledge bases and 3 bots. They get called for recommendations, and the following scores are returned:

* knowledge base article 1 = 90%
* knowledge base article 2 = 60%
* bot 1 = 100%
* bot 2 = 80%
* bot 3 = 0%

If the account’s Agent Assist settings are 1) maximum number of recommendations = 4, and 2) bot confidence threshold = 70%, then the agent receives the following, ordered list of recommendations:

* knowledge base article 1 (90%)
* bot 1 (100%)
* bot 2 (80%)

Knowledge base 2 has been filtered out because its relevance score isn’t GOOD or better (70% or higher). Bot 3 has been filtered out because its score didn’t meet the confidence threshold for bots.

As a second example, assume that you have set up 4 knowledge bases and 2 bots. They get called for recommendations, and the following scores are returned:

* knowledge base article 1 = 72%
* knowledge base article 2 = 80%
* knowledge base article 3 = 100%
* knowledge base article 4 = 75%
* bot 1 = 100%
* bot 2 = 100%

If the account’s Agent Assist settings are 1) maximum number of recommendations = 4, and 2) bot confidence threshold = 70%, then the agent receives the following, ordered list of recommendations:

* knowledge base article 3 = 100%
* knowledge base article 2 = 80%
* knowledge base article 4 = 75%
* knowledge base article 1 = 72%

In this case, the agent doesn’t see any bot recommendations because article recommendations are always included first. The maximum number of recommendations is 4, and there are 4 article recommendations with a relevance score of GOOD or better. 

### Agent feedback
Agents can provide feedback on a recommended action by clicking either the **Thumbs up** button or the **Thumbs down** button displayed inline in the recommendation.

<img width="550" src="img/agentassist/feedback.png">

“Thumbs up” tells the underlying Conversation Orchestrator model that it was a relevant recommendation, while “thumbs down” tells it that it’s not. The relevance score is calibrated against this feedback so that Agent Assist can continuously improve its recommendations and provide the most relevant content to agents.

### Access Conversation Orchestrator’s Agent Assist
**To access Conversation Orchestrator’s Agent Assist application**

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Conversation Orchestrator**. Here’s where you can configure Agent Assist.

    <img width="800" src="img/agentassist/access.png">
