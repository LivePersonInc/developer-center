---
pagename: A Pre-Launch Checklist
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-a-pre-launch-checklist.html
indicator: both
---

### Test the "unhappy" paths

Try and break the flows you have built. Be as disruptive as possible. 
From within each dialog, enter gibberish messages to see how fallback occurs.
Test whether you are catching unexpected answers to questions. If needed, use the * pattern to [keep the consumer in the current dialog](conversation-builder-advanced-use-cases.html#keep-the-consumer-in-the-current-dialog).

### Avoid mismatched intents for unhandled use cases

If there are known phrases or patterns for sensitive consumer intents that you aren't handling in the bot on Day 1, it's recommended that you create "placeholder" dialogs that catch these specific patterns and immediately transfer to a human agent (i.e., [LivePerson agent escalation]((conversation-builder-integrations-liveperson-agent-escalation-integrations.html))).  Doing this prevents the fallback response or a mismatched intent tied to another dialog.

For example, "my partner has passed away" relates to bereavement, and in this case the consumer should be transferred to a live agent immediately. For this, create a dialog with a User Says interaction that listens for the pattern `*passed away*` and other variations, and have this immediately transfer to a human agent.

### Prepare for unmatched intents

Add a dialog that recognizes that the consumer wants help with a popular intent or question that the bot currently can't handle. Build out the dialog steps to explain this and gracefully bring in an agent via transfer, i.e., a [LivePerson agent escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html).

Later, during the retraining downtime of the bot on Day 1, create a new intent from the unmatched intents data, and connect the new intent to this new dialog. You can then quickly go live with this change in round 2 of the bot on Day 1. 

### Prepare for service outages

Consider adding one or more dialogs that refer to incidents regarding specific service outages that might occur while the bot is live. Hook these up to common phrases that consumers might ask in the event of an outage.

If an incident occurs, you can then quickly enable these dialogs on-the-fly to help deflect/contain the consumers who flood the channel during outages.

This can be built before Day 1 and tested based on the knowledge you have about how you communicate service outages when consumers reach agents in those moments.