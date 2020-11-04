---
pagename: Sending Content to Consumers
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-sending-content-to-consumers.html
indicator: both
---

After you’ve added a knowledge base and finalized its content, you can expose its articles to consumers by:

* (Conversation Builder) Adding a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) in a bot
* (Conversation Orchestrator) Adding a Knowledge Base integration as a part of an [Agent Assist](conversation-orchestrator-agent-assist-overview.html) component

If you’re adding a Knowledge Base integration in a bot, send the content to the consumer using the appropriate Conversation Builder interactions in the bot:

* [Text](conversation-builder-interactions-statements.html#text)
* [Image](conversation-builder-interactions-statements.html#image)

Take advantage of these interactions to make the most of your article content, which might include:

* A summary section
* A detail section
* A content URL
* An image URL
* A video URL
* An audio URL

The following serves as an example:

<img style="width:550px" src="img/ConvoBuilder/kb_send_content.png">

{: .important}
Video and Audio [statements](conversation-builder-interactions-statements.html) currently aren’t supported by Conversational Cloud, so they can’t be added to dialogs in Conversation Builder. However, as an alternative for video, you can use a Text statement that includes a video URL as a link.
