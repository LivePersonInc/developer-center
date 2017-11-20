---
title: Develop the Services
level1: Solutions
level2: Rich Media
level3: Video Chat

order: 3

permalink: products-video-chat-develop-the-services.html
indicator:
---

### Video Service

Develop your video service based on your selected vendor technology and take into account the following:

* Integration to LiveEngage using our SDK

Define which parameters you’d like to use from the SDK in order to connect between the two widgets you must utilize similar parameters from both sides of the conversation (both agent workspace SDK and window widget SDK). 

* Collect the following data in runtime from both SDKs:

	* Session ID. Note:
	Agent widget - the session ID is called _rtSessionID_
	Window SDK - the session ID called _sessionID_

	* agent ID & visitor ID 

* To achieve best results it is important to program the ability for the agent to invite consumers to video chat with a start video button. 

    * This invitation should notify the Engagement Window Widget, and if closed, to automatically open and present an html that says accept and starts a session with the agent.

### Customer side elements

Design html elements that will enable your customers to run the video session.

* Invite to video chat - html service that will display in the widget when an agent invites a customer to video chat.  This should include an 'accept’ and 'decline’ capabilities. 

* End Chat - how will you enable your customers to have control and end the video chat at any moment? 

* Invite for group chat (if applicable) - what html elements will allow your customers to add another person to the video? 

* Disable video (if applicable) - button or functionality that will enable customers to disable video and continue a voice only conversation. 

### Agent side elements

Design the agents side service.  The html elements that will display within the Agent workspace widget:

* Start a video chat: what will the agents see in order to invite visitor to video chat? Should include a button to trigger a new session.

* Additional elements for the agents such as add more people to the conversation, end, turn off camera, etc.