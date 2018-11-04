---
pagename: Guidelines and Limitations
redirect_from:
  - rich-messaging-apple-business-chat-templates-guidelines-and-limitations.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: Apple Business Chat Templates
order: 400
permalink: structured-content-apple-business-chat-templates-guidelines-and-limitations.html
indicator: messaging
---

### General limitations

* Time Picker and List Picker selections will be sent to the agent as text lines with the items that were chosen by the consumer (future capabilities will enable the brand to map the consumer selection/s to External ID via [conversational metadata](guides-conversation-metadata-guide.html)).

* ImageURL must be whitelisted - Images added in the List Picker template, ReceivedMessage or ReplyMessage must be whitelisted. All domains must be HTTPS secure. To add images to the whitelist please contact your LivePerson representative.

### Error conditions

The following conditions will receive an error when sending a template via the LiveEngage Agent Workspace:

* Time Picker and List Picker with no **title** will be **rejected** by Apple - make sure to add a title to Time Picker and List Picker templates.
* Time Picker sent with past dates will be rejected by Apple.
