---
title: Chat States
redirect_from:
  - consumer-experience-javascript-chat-chat-states.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Javascript Chat SDK

order: 2
permalink: javascript-chat-sdk-chat-states.html

indicator: chat
---

This is the list of chat states that are published throughout the lifetime of the chat.  
All chat states are published on the event listeners triggers or you can retrieve the current state by calling the `getState` method. 

Some of the chat states are also published on separate listeners to which you can bind.  
The states are there to help indicate the state of the chat API.  
 
The enumeration for the states are exposed via `lpTag.taglets.ChatOverRestAPI.prototype.chatStates`.

| State	| ENUM	| Listener/s to bind	| Description |
| :--- | :--- | :--- | :--- |
| resume	| RESUMING	| onLoad - appears as a state property <br> onState - regular state event	| Chat instance is trying to resume a chat session. This occurs automatically if you create an instance of a chat already in progress. |
| initialised |	INITIALISED |	onState - regular state event	| Chat basic functionality exists. |
| uninitialised	| UNINITIALISED	| onLoad - appears as a state property |	Created a new chat object that does not yet have a state or any functionality. |
| waiting |	WAITING	| onState - regular state event	| The visitor is queued and waiting for chat. |
| chatting	| CHATTING	| onStart - chat started event <br> onState - regular state event | Agent has accepted the chat. |
| ended	| ENDED | onStop - chat stopped event <br> onState - regular state event | Chat session has ended. |
| notfound	| NOTFOUND	| onState - regular state event.| An attempt to resume chat has failed. <br> The chat was not found on the server. <br> There is no way to request this chat's data via the API. <br> For a new chat use requestChat again. |

