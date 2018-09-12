---
pagename: Guidelines and Limitations
redirect_from:
  - rich-messaging-apple-business-chat-templates-guidelines-and-limitations.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
order: 400
permalink: apple-business-chat-templates-guidelines-and-limitations.html
indicator: messaging
---

* Time Picker and List Picker selections will be sent to the agent as text lines with the items that were chosen by the consumer (future capabilities will enable the brand to map the consumer selection/s to External ID via [conversational metadata](guides-conversation-metadata-guide.html)).

* ImageURL must be whitelisted - Images added in the List Picker layout, ReceivedMessage or ReplyMessage must be whitelisted. All domains must be HTTPS secure. To add images to the whitelist please contact your LivePerson representative.

* Time Picker and List Picker with no **title** will be **rejected** by Apple (and will receive an error when sending a Rich Messaging message via the LiveEngage Agent Workspace) - make sure to add a title to Time Picker and List Picker layouts.

* Time Picker sent with past dates will be rejected by Apple (and will receive an error when sending the message on Agent Workspace).
