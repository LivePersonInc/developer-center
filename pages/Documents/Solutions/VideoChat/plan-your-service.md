---
pagename: Plan Your Service
redirect_from:
  - products-video-chat-plan-your-service.html
sitesection: Solutions
documentname: Video Chat
order: 2
permalink: video-chat-plan-your-service.html
indicator:
---

### Prerequisites

The following prerequisites are required in order to build a video service on your account:

* Select a video service vendor that can provide you with:

    * External Server to host HTML resources of the widgets and the video service backend.

    * Contact LivePerson directly if you need recommendations on a video vendor.

* Considerations for selecting video technologies should include:

    * Group video needs

    * Should the visitor have the ability to turn off camera and remain with just voice?

    * Should agents have the ability to turn their camera off?

* Service URL must be secure (https)

### Sample Implementation flow

1. Develop your video service (backend + 2 widgets agent and visitor sides)

2. Configure your widget in the agent workspace. [Click here](/agent-workspace-widget-sdk-overview.html) for more instructions on how to do that.

3. Configure your widget in the Engagement window that displays to your visitors (via Conversational Cloud professional services)

### Best practice

In order to define the correct agent permissions, use 'skills’ within Conversational Cloud.

* Create a skill in Conversational Cloud that is dedicated to video agents in order to define what agents can have access to launch video conversations with consumers.  You may not want to offer this capability to all of the agents.

* Assign all agents that should do video to this skill. Even if the original chat is routed to a different skill, as long as the agent also has the video skill, they will be able to do this call.
