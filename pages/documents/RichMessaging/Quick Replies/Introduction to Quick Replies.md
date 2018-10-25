---
pagename: Introduction to Quick Replies
redirect_from:
  - rich-messaging-quick-replies-overview.html
Keywords: quick replies rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Quick Replies
permalink: quick-replies-introduction-to-quick-replies.html
root-link: true
indicator: messaging
---

### What are Quick Replies

Many conversations require asking questions with a limited number of possible responses. Quick Replies are a group of possible responses (**chips**) that temporarily appear as part of the conversation.

Once a consumer clicks on one of these chips, a pre-rendered message is sent to the conversation without the consumer having to type it out and the chips disappear. This saves the consumer precious time and creates an easy way to enrich the consumer’s experience.

![Quick Replies](images/quick-replies.gif)

One common use case for Quick Replies is when a bot is attempting to provide a direction for conversations using Quick Replies (eg. routing a consumer to a specific LiveEngage skill). Because these answers are pre-formatted, it enables a bot to continue the conversation freely and smoothly, "channeling" the consumer towards pre-specific directions.

Quick Replies are different from Structured Content in that they are temporary in the conversation, not styled, and not content for promotion.

### How to send Quick Replies to the Conversation

```javascript
{
    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };

    var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
    var data = {
      text: "Some question",
      quickReplies: {
        "type": "quickReplies",
        "itemsPerRow": 8,
        "replies": [
          {
            "type": "button",
            "tooltip": "yes i do",
            "title": "yes",
            "click": {
              "actions": [
                {
                  "type": "publishText",
                  "text": "yep"
                }
              ],
              "metadata": [
                {
                  "type": "ExternalId",
                  "id": "Yes-1234"
                }
              ]
            }
          },
          {
            "type": "button",
            "tooltip": "No!",
            "title": "No!",
            "click": {
              "actions": [
                {
                  "type": "publishText",
                  "text": "No!"
                }
              ],
              "metadata": [
                {
                  "type": "ExternalId",
                  "id": "No-4321"
                }
              ]
            }
          }
        ]
      }
    };

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
}
```

### Quick Reply Templates

LivePerson provides different Quick Reply templates for each compatible, unique messaging channel.
