### OLD DOC ABOUT PHASE 2

What's multi-bot collaboration?

When developing bots, it's considered a best practice to develop specialized bots that automate specific business tasks. If you're a large, enterprise company with well-demarcated functional areas, this practice also makes practical sense and lets you scale your automation footprint more easily. Within a business function, bot developers can specialize, and they can implement, maintain, and extend bots efficiently.

However, while you might have multiple–even many–bots that automate business tasks, a single bot might not be able to handle all of a consumer's requests. The consumer's requests might require the support of multiple bots. And to the consumer, this should not only be possible, it should happen seamlessly. For example, if a consumer is conversing with a personal banking bot about personal banking matters but suddenly asks a question about professional banking, the personal banking bot should understand the question (not send a fallback response), know if there's a bot that's qualified to handle it (the professional banking bot), and gracefully hand over the conversation. These capabilities can be achieved with multi-bot collaboration.

Multi-bot collaboration is an implementation design whereby participating bots deployed in the same environment are aware of each others' runtime contexts. This awareness means that if one bot receives a request that it can't handle itself, the bot can determine if another bot is capable of doing so. If one can, the first bot can transfer the request to the second. This collaboration among bots is sometimes called the "bot tango."

How multi-bot collaboration works
Participating = ???

Workflow 1

1. Bot A receives a request that it can't handle. That is, Bot A doesn't have a dialog with an intent that matches the consumer's utterance.
2. Bot A checks whether a participating bot is capable of handling the request. It identifies Bot B as having a matching intent.
3. Bot A transfers the conversation to Bot B and sends to Bot B the following:

    * The user message that triggered the intent match
    * The intent that was matched

4. Bot B examines the received intent and triggers its associated dialog. Or, if the intent is null, Bot B examines the user message and handles it as designed.

Workflow 2

1. Bot A receives a request that it can't handle. That is, Bot A doesn't have a dialog with an intent that matches the consumer's utterance.
2. Bot A checks whether a participating bot is capable of handling the request. It doesn't identify one.
3. Bot A sends a fallback response.

FOR NEW BOTS > AUTOMATIC BOT-TO-BOT TRANSFERS PAGE

{: .important}
Use of automatic, bot-to-bot transfers is only available to customers who log into Conversation Builder via single sign-on from LiveEngage.

### Introduction

When developing bots, it's considered a best practice to develop specialized bots that automate specific business tasks. If you're a large, enterprise company with well-demarcated functional areas, this practice also makes practical sense and lets you scale your automation footprint more easily. Within a business function, bot developers can specialize, and they can implement, maintain, and extend bots efficiently.

However, while it's advantageous to have multiple–even many–bots that automate business tasks, this also means that a single bot might not be able to handle all of a consumer's requests. The consumer's requests might require the support of multiple bots, and this means that a bot-to-bot transfer of the conversation is required.

### About automatic transfers

Automatic transfers use "bot transfer groups" to support the discovery of bots that are qualified to handle requests. A bot can be a member of a single group. As a member, when the bot receives a request that it can't handle, it checks within the group for a bot that can. If it finds one, the transfer happens automatically.


### Automatic versus manual transfers


### Create a bot transfer group

**To create a bot transfer group**
1. From the bots dashboard that lists your bots, click **Bot Transfer Groups** in the upper-left corner.
2. Click **New Group**.
3. Specify the following:

    * **Group name**: Enter a group name that's concise and clear.
    * **Bots**: Select each bot to add it to the group. 

4. Click **Save**.

### Inactivate or activate a bot transfer group

**To inactivate or activate a bot transfer group**

1. From the bots dashboard that lists your bots, click **Bot Transfer Groups** in the upper-left corner.
2. In the left panel, select the group.
3. In the right panel, click the **Status** slider. To activate the group, turn it on; to inactivate the group, turn it off.
4. Click **Save**.

### Delete a bot transfer group

**To delete a bot transfer group**

2. In the left panel, click the icon and select **Delete**.
3. confirm step.

FOR UPDATE ON PERMISSIONS PAGE

These 3 permissions can create/manage bot transfer groups:
* Bot Builder
* Bot Builder Lite
* Admin

FOR UPDATE ON BOTS > CUSTOM BOTS PAGE

* **Transfer Group**: to be added

FOR UPDATE ON BOTS > BOT BASICS > CONFIGURE BOT SETTINGS PAGE

* **Transfer Group**: to be added