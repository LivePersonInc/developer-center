---
title: disposeVisitor
redirect_from:
  - consumer-experience-javascript-chat-disposevisitor.html

Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 192

permalink: javascript-chat-sdk-methods-disposevisitor.html
indicator: chat
---

Clears the chat session from memory, so on refresh it will not be automatically resumed. Will trigger onVisitorDisposed event.

**Sample Code**

```javascript
chat.disposeVisitor();
```