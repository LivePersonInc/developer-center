---
pagename: disposeVisitor
redirect_from:
  - consumer-experience-javascript-chat-disposevisitor.html

Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Javascript Chat SDK
subfoldername: Methods

order: 192

permalink: javascript-chat-sdk-methods-disposevisitor.html
indicator: chat
---

Clears the chat session from memory, so on refresh it will not be automatically resumed. Will trigger onVisitorDisposed event.

**Sample Code**

```javascript
chat.disposeVisitor();
```