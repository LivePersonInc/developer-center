---
pagename: clearHistory
redirect_from:
  - consumer-experience-ios-sdk-clearhistory.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 110
permalink: mobile-app-messaging-sdk-for-ios-methods-clearhistory.html

indicator: messaging
---

This API may be used only when there is no active conversation. This API clears the local database. The history is still available on the server, but won’t be retrieved from the specific device unless a fresh installation is made. 

`func clearHistory(_ conversationQuery: ConversationParamProtocol) throws`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |