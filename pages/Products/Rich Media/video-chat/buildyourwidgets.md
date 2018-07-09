---
title: Build Your Widgets
level1: Solutions
level2: Rich Media
level3: Video Chat

order: 4

permalink: video-chat-build-your-widgets.html
indicator:
---


Once you have the video service and accompanying html elements in place, you are ready to build the two LiveEngage widgets for your video call: the agent side widget and the customer side widget.

### Agent side widget

**To create your agent side widget, you will need:**

* [Agent Workspace Widget SDK](/agent-workspace-sdk-overview.html){:target="_blank"}

* [Add widget to the agent workspace](/guides-agent-workspace-widget.html){:target="_blank"}

The Agent Workspace Widget is an iframe-based service that loads your web application according to a URL configured in the LiveEngage Workspace. 

It is comprised of the following:

**Web service**

Your agent web application which is used to search and send rich media content to the consumer.

**Agent Workspace Widget SDK**

Hosted in the web service resources. Used only to bind on session data in order to get the session ID. The session ID is required to send data to the engagement window widget in the session context.

### Engagement Window Widget (consumer side window)

To create your consumer side widget you will need:

* [Engagement Window Widget](/rt-interactions-window-sdk-overview.html){:target="_blank"}

* Help from your LivePerson contact to integrate

The Engagement Window Widget is an iframe-based service that loads the content received from the agent widget.  

Recommendations:

* Status of the request needs to be accepted

* The widget (slider to the right of the window) opens when you trigger the widget 'start state’.  This should trigger based on the acceptance of the request the agent sends. 

**Implement the window application**

Contact your LivePerson representative and request to deploy your window application code into LiveEngage taglet manager

**Test your application**

We recommend to test your new window application before publishing it. Simply create a campaign that is located only on one of your test pages. Trigger your new app, ensure that it is functioning correctly, and then publish it on your live campaigns.
