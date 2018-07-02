---
title: Best Practices
Keywords:
level1: Documents
level2: Rich Messaging
level3: Quick Replies
order: 40
permalink: rich-messaging-quick-replies-best-practices.html
indicator: messaging
---


1. A Quick Replies bundle does not exist on its own. An agent sends a message to the consumer (a question, a remark or even a Structured Content message) followed by a Quick Replies bundle.
When designing the Quick Replies bundle, you should also design the coupled message assigned to it.

2. Use Quick Replies to prompt for specific next steps, or use them as answers for surveys or conversational forms.

3. Use short texts in the chip's content - be brief and precise.

4. If you wish the agent to be able to follow on the consumer's clicks, we recommend adding publish text click-event to each chip.
The publish-text click-event will add a message to the transcript on behalf of the consumer, which will be available for the agent to follow.

5. Don't use Quick Replies if you wish to let consumers use them more than once.
Quick Replies disappear after a chip was clicked (or consumer made another action in the conversation window).
Use [Structured Content templates](rich-messaging-structured-content-card.html) instead as they stay persistent in the conversation.
