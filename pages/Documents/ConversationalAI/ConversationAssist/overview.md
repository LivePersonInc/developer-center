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
For some practice with Conversation Assist, complete the [Using Conversation Assist](tutorials-guides-using-agent-assist-overview.html) tutorial.

### What is Conversation Assist?
Conversation Assist is a suite of features that improve the productivity of human agents. Conversation Assist’s key feature is intent-based and skill-based recommendations of knowledge base articles and bots.

### Intent-based recommendations
Within a messaging conversation, Conversation Assist recommends to the agent knowledge base articles and/or bots based on the intent that’s detected in the consumer’s message. The recommendations are presented in real time, inline within the conversation.

<img width="550" src="img/agentassist/example.png">

When presented with a recommended article, the agent can send it to the consumer. The agent can optionally modify the text before sending the message.

When presented with a recommended bot, the agent can use the bot, so it takes over the conversation. The agent stays in the conversation, so they can monitor the bot’s progress and remove the bot if needed.

### Skill-based recommendations
Recommendations aren’t just intent-based, they’re skill-based too.

When Conversation Assist makes a recommendation, it always does so based on not just the consumer’s intent, but also the conversation’s skill. This means you can map a slice of content to desired skills and then recommend Knowledge Base articles and bots based on the intent detected in the consumer utterance.

When you set up Conversation Assist, it’s required that you assign one or more skills to a knowledge base that can be recommended. As a result, during a messaging conversation, if the conversation’s skill matches the knowledge base’s, Conversation Assist will recommend an article therein if the article’s intent matches the consumer’s.

This works the same way for bots: During setup, you must assign one or more skills to a bot that can be recommended. In turn, during a messaging conversation, if the conversation’s skill matches the bot user’s, Conversation Assist will recommend the bot if the bot’s intent matches the consumer’s.

### Multiple recommendations
You can specify the maximum number of recommendations made by Conversation Assist for a detected intent. You can have up to five recommendations for a detected intent.

### How recommendations are made
To make recommendations, Conversation Assist analyzes the available bots and knowledge base articles that match the consumer’s intent, and it finds the best ones. The recommendations are made by choosing those ranked highest by relevance score.

{: .important}
No bot or Knowledge Base article recommendations are made when the consumer’s message is 3 words or fewer, or when the consumer’s message is non-intentful (e.g., a greeting or other phrase like, “Are you still there” or “Give me a minute,” and so on).<br><br>All recommendations that are made based on consumer utterances are cached for 3 hours. Keep this in mind as you update your bots and knowledge bases. If things look stale during testing, try using a slightly different utterance.

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

If the account’s Conversation Assist settings are 1) maximum number of recommendations = 4, and 2) bot confidence threshold = 70%, then the agent receives the following, ordered list of recommendations:

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

If the account’s Conversation Assist settings are 1) maximum number of recommendations = 4, and 2) bot confidence threshold = 70%, then the agent receives the following, ordered list of recommendations:

* knowledge base article 3 = 100%
* knowledge base article 2 = 80%
* knowledge base article 4 = 75%
* knowledge base article 1 = 72%

In this case, the agent doesn’t see any bot recommendations because article recommendations are always included first. The maximum number of recommendations is 4, and there are 4 article recommendations with a relevance score of GOOD or better. 

### Access Conversation Assist

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Conversation Assist**.

    <img width="800" src="img/agentassist/access.png">
