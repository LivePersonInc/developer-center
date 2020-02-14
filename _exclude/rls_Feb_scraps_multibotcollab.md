3 Introduction
3 Automatic transfers via discovery
    4 What's an automatic transfer?
    4 The value of automatic transfers
    4 Managing bot transfer groups
    4 Disabling automatic transfers
3 Manual transfers to specific bots
    4 What's a manual transfer?
    4 Making manual transfers seamless
    4 The value of manual transfers
    4 Overwriting the intent or user message
3 Sharing information between bots
3 FAQs

### Automatic transfers via discovery

#### What's an automatic transfer?

Automatic transfers use a construct called "bot transfer groups" to support the discovery of bots that are qualified to handle requests and accept transfers. A bot can be a member of a single group. As a member, whenever the bot receives a request that it can't handle itself, it automatically checks *within its group* for a bot that can. If the bot discovers a capable bot, the transfer happens automatically.

<img style="width:500px" src="img/ConvoBuilder/bots_collab5.png">

During an automatic transfer, the conversational context information is automatically sent from the sender bot to the receiver bot. This ensures a seamless, "warm" hand-off, allowing the receiver bot to immediately start the appropriate dialog.

<img style="width:500px" src="img/ConvoBuilder/bots_collab4.png">

#### The value of automatic transfers

Automatic transfers are designed to simplify your automation model and make it more robust. Because all bots within a bot transfer group can talk to one another--automatically transferring requests when needed and possible--you don't need a "router" bot for routing user interactions between bots. What's more, you don't need agent escalations within your dialogs to support transfers. The discovery and transfer all happens automatically and seamlessly within a bot transfer group.

There are still some times when you'll need to implement agent escalations:

* You need to transfer a conversation from a bot in one bot transfer group to a bot in a *different* bot transfer group.
* You need to transfer a conversation to a live agent.

#### Managing bot transfer groups

Automatic transfers rely on bot transfer groups to determine which bots can talk to one another and transfer conversations automatically. When you create a custom bot, you have the option of assigning a bot transfer group.

For information on creating and managing groups, see here.

#### Disabling automatic transfers

You can disable automatic transfers on a group-by-group basis. To do this, inactivate the bot transfer group as described here.

### Sharing information between bots

In a transfer from one bot to another, the receiver bot won't have all the context (variables, etc.) that you might have collected in the sender bot. To share this information between bots, use the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).

### FAQs

#### Can you explain more about the discovery process that's used in automatic transfers?

If a consumer's utterance can't be handled in some way by a bot, i.e., there are no dialog starters that match nor a Knowledge Base integration in the fallback dialog that returns a response, the bot checks whether there is another bot within the same group that can handle the request. If there is one, and if it has an active LiveEngage connection, the conversation is transferred automatically to the receiver bot. The receiver bot then takes care of processing the request. If there isn't another bot that can handle the request, the default, built-in fallback response is sent to the consumer.


TO CHANGE IN THE MANUAL DOC
Manual transfer - for if you are already using a LP agent escalation type of integration


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