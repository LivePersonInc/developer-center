---
pagename: Key Terms & Concepts
redirect_from:
    - bot-analytics-key-terms-concepts.html
sitesection: Documents
categoryname: Hidden
documentname: Hidden
permalink: hidden-key-terms-concepts.html
layout: hidden-layout
indicator: Messaging
---

### Introduction
Throughout the Bot Analytics application, valuable metrics are provided, giving you insight into the success/failure, quality, and activity of your bot conversations. These metrics are defined here.

### Containment of bot conversations

#### Bot disengaged
This metric is the number of conversations where the consumer was left hanging past the [bot session timeout](conversation-builder-bots-bot-basics.html#configure-bot-settings) because the bot never responded to their last message.

A bot can become disengaged for a variety of reasons. For example, there might be a long delay in the response from a call to a third-party system.

The system calculates this metric as follows:

`# Bot Disengaged = (Bot session has timed out) AND (Conversation isn’t closed) AND (Conversation isn’t transferred) AND (Last message is from the consumer)`

#### Consumer disengaged
This metric is the number of conversations where the bot was left hanging past the [bot session timeout](conversation-builder-bots-bot-basics.html#configure-bot-settings) because the consumer never responded to its last message.

The system calculates this metric as follows:

`# Consumer Disengaged = (Bot session has timed out) AND (Conversation isn’t closed) AND (Conversation isn’t transferred) AND (Last message is from the bot but isn’t a form of “bye”)`

Be aware that this metric can include conversations where the consumer’s need was resolved. For example, consider the scenario where the consumer asks a question, and the bot sends a response, such as a link to an FAQ or a product listing. In this case, the consumer might not respond to the bot’s last message because their need was resolved. The system still considers such a conversation as one where the consumer disengaged.

#### Transfers
Previously called “Escalations”. This metric is the total number of conversations intentionally or unintentionally (auto escalated) transferred to a human agent.

#### Intended transfers
This metric is the number of conversations transferred from the bot to a human agent as designed, e.g., via an [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) or a [LivePerson Agent Escalation integration](conversation-builder-integrations-liveperson-agent-escalation-integrations.html). For example, you might want to transfer to a human agent for the purpose of collecting credit card information from the consumer.

{: .important}
This metric doesn’t include bot-to-bot transfers [performed within a bot group](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group) but does include bot-to-bot transfers to a specific skill.

You can use this metric to identify missed opportunities for automation.

#### Unintended transfers
This metric is the number of conversations transferred from the bot to a human agent due to an [automatic escalation](conversation-builder-dialogs-auto-escalation-dialogs.html). If the number is high, evaluate whether the bot was equipped with all the resources needed to satisfy the consumer’s intent.

{: .important}
This metric doesn’t include bot-to-bot transfers [performed within a bot group](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group) but does include bot-to-bot transfers to a specific skill.

#### Bot contained
This metric is the number of conversations that were received and handled by the bot, where the conversation was never transferred to a human agent, and where neither the bot nor the consumer disengaged.

The system calculates this metric as follows:

`# Contained = # Total Conversations - (# Intended Transfers + # Unintended Transfers + # Bot Disengaged + # Consumer Disengaged)`

### Quality of bot conversations

#### MACS
A Meaningful Automated Conversation Score (MACS) is a measure of the quality of bot conversation.

LivePerson has found through research that consumer effort is a key determiner in how the consumer perceives the quality of a conversational experience. Given this, MACS is calculated by identifying and quantifying this using proprietary LivePerson AI logic. Issues within the bot conversation’s structure are detected and used to derive a score for example:

* Did the bot understand  the consumer’s question?
* Was the consumer stuck in an endless loop?

Based on the issues detected, the conversation is classified with a MACS 1 (below average), 2 (average), or 3 (good). Use the MACS to understand the perceived consumer experience.

{: .important}
For an in-depth introduction to MACS, its benefits, its scoring, and more, see [here](https://knowledge.liveperson.com/data-reporting-meaningful-automated-conversation-score-(macs).html) in the Knowledge Center. For information on using MACS within Bot Analytics, see [here](bot-analytics-macs.html) in this Developer Center.

#### Intent Match Rate
This metric is the percentage of consumer questions that were matched with intents, patterns, Regex, exact value matches, evaluated options, or Knowledge Base articles. Be aware that the system doesn’t make a determination as to whether a match was a false positive.

### Volume of bot conversations

Volume metrics help you to understand and compare volume. Use them to discover trends, for example, daily trends of traffic patterns during business hours and off hours, and so on.

#### Bot Sessions
This metric is the total number of bot sessions, which gives you insight into how many sessions on average your conversations go through.

#### Conversations
This metric is the total number of Conversational Cloud conversations in which the bot participated. Includes closed and open conversations; excludes those performed in [Preview](conversation-builder-testing-deployment-previewing.html).

This metric gives you insight into how many conversations are automated by bots.

#### Messages
This metric is the total number of messages sent by the consumer and received by the bot.

#### Users
This metric is the total number of unique users that were connected to the bot.
