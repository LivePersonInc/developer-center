---
pagename: Troubleshooting
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Analytics
permalink: bot-analytics-troubleshooting.html
indicator: both
---

Use this page to help you troubleshoot common issues encountered in Bot Analytics.

#### Unmatched phrases aren't shown

If the bot uses a Knowledge Base integration but doesn’t use intents in Intent Builder, the Bot Analytics application doesn’t automatically track unmatched phrases.

To enable the tracking of unmatched phrases, set the `__recordUnMatchedPatternPhrases__` variable to "true" as shown below. Doing this using `__initConversation()` in the bot’s global functions will fire the code at the start of every conversation.

```javascript
function __initConversation() {
   botContext.setBotVariable('__recordUnMatchedPatternPhrases__',true,true,false);
}
```
