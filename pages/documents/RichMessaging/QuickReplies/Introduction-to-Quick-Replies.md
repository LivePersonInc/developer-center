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

Many conversations require asking questions with a limited number of possible responses. Quick Replies are a group of actionable, automatic responses that temporarily appear as part of the conversation.

Once a consumer clicks on one of the replies, a pre-rendered message is sent to the conversation without the consumer having to type it out. The quick replies then disappear after having been clicked. This saves the consumer precious time and creates an easy way to enrich the consumer’s experience.

![Quick Replies](images/quick-replies.gif)

One common use case for Quick Replies is when a bot is attempting to direct the conversation outcome (eg. routing a consumer to a specific LiveEngage skill). Because these possible responses are pre-formatted, it enables a bot to continue the conversation freely and smoothly.

Quick Replies are different from Structured Content in that they are temporary in the conversation and not intended for content for promotion.

### How to send Quick Replies to the Conversation

Quick Replies are very similar in implementation to Structured Content. For this reason, see [How to Send Structured Content to the Conversation](structured-content-introduction-to-structured-content.html#how-to-send-structured-content-to-the-conversation) for more information. 

The primary difference between Structured Content and Quick Replies is that, for the agent widget implementation, you will use the `write` command instead of the `writeSC` command.

#### Agent Widget Code Example

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

Similar to Structured Content, Quick Reply **templates** are composed of **elements**. Each quick reply element in the template has the same specification as a [button](structured-content-introduction-to-structured-content.html#button) structured content element. Each messaging channel limits a different maximum of replies per one template.

In the above example code, you will notice then that a Quick Reply template contains an array of button elements, each with their own [click action](structured-content-introduction-to-structured-content.html#element-click-operations). Quick Replies will typically use the `publishText` click action.

When you are comfortable with the information presented here, proceed to the desired channel's template document.
