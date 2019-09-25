---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: LiveIntent
permalink: liveintent-overview.html
indicator: messaging
---

LiveIntent allows you to 

LiveIntent is the engine for tracking intent performance in real-time.

### Getting Started

If you do **not** already have intents created in Intent Builder, there are starter packs available to get up to speed quickly. 

If you **do** have intents already created, [see here](https://developers.liveperson.com/intent-builder-overview.html#enabling-liveintent) for how to link them to LiveIntent.

### Using LiveIntent

When you have intents and they are enabled for LiveIntent, you can view your data in the [LiveIntent dashboard](https://knowledge.liveperson.com/liveintent-dashboard.html).

See [LiveIntent playbooks](https://knowledge.liveperson.com/liveintent-playbooks.html) for some common usage flows and best practices.

### Example User Flows

#### Business Analyst

**Challenge**:
An Airline doesn’t have a real-time way to understand customer contacts by intent. 

**How LiveIntent Helps**: 
The analyst uses LiveIntent to discover, define, and enable the following high impact intents

1. Customer doesn’t understand policy changes
2. Customer can't find their discount code
3. The discount code doesn’t work
4. Customer wants to cancel their account

**Outcome**: 
The analyst enables detailed real-time insight into the problem by defining intents

#### Agent Manager

**Challenge**:
There is Influx in account cancellations related to the policy changes

**How LiveIntent Helps**: 
The Agent Manager uses the LiveIntent dashboard to explore conversations with the intent “Cancel my account.” 

He discovers that some agents are successfully able to redirect the conversation and prevent cancelation by offering a concession. He uses this insight to develop a new policy

**Outcome**: 
The Agent Manager is able to quickly roll out a new training which results in a lower account cancellation rate

#### Bot Builder

**Challenge**:
The Bot Builder wants to use automation to help with influx of messages related to a policy change.

**How LiveIntent Helps**: 
The Bot Builder reviews the LiveIntent dashboard and notices that the “can’t find discount code” intent is, both, a high volume intent and is easily automatable.

She creates a bot in Conversation Builder for handling these requests and creates an intent-based routing rule in Maven that automatically directs customers to the bot.

**Outcome**: 
The company is able to greatly reduce the volume of agent conversations related to the policy change.