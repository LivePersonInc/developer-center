---
pagename: Clearing the Recommendations Cache
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
subfoldername: Recommendation Sources
permalink: conversation-assist-recommendation-sources-clearing-the-recommendations-cache.html
indicator: messaging
---

### Introduction

To enhance performance, bots and answers that have been offered as recommendations are stored in memory for 24 hours. For example, if the consumer asks, *“What’s my balance?”* triggering article A, article B, and bot X to be offered as recommendations, this “utterance-recommendations pair” is stored in memory. If the same question is asked again, the system uses the same recommendations.

Clear the recommendations cache whenever you make any changes that alter what is recommended. For example, clear the cache if you:

* Enable or disable a bot or knowledge base in Conversation Assist
* Change the assigned skills for a bot or knowledge base in Conversation Assist
* Change other Conversation Assist settings, such as the maximum number of recommendations or the bot confidence threshold
* Change the dialog starter in a bot in Conversation Builder so that it uses a different intent
* Delete an article in a knowledge base in KnowledgeAI
* Change the training phrases for an intent in Intent Manager

{: .notice}
If you don’t clear the cache when appropriate, your agents might not receive the right recommendations.

### Clear the recommendations cache

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist), and click **Settings**.
2. Scroll down to **Invalidate recommended action cache**, and click **Invalidate cache**.

    <img width="800" alt="Button on Settings page for clearing recommendations cache" src="img/agentassist/clear_recommendations_cache.png">
