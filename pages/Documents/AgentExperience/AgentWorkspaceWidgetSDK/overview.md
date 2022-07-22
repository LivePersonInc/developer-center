---
pagename: Overview
redirect_from:
  - agent-workspace-sdk-overview.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience"
documentname: Agent Workspace Widget SDK

level-order: 5
order: 10
permalink: agent-workspace-widget-sdk-overview.html
root-link: true
indicator: both
---
### Introduction

The Agent Workspace Widget SDK is a lightweight, client-side package for communicating with the Conversational Cloud Agent Workspace. Using this SDK, Agent Managers can add custom widgets to Conversational Cloud, making it possible to integrate applications into the Agent Workspace.

With the SDK, brands will find two-way communication between LivePerson and external applications, more in-depth information about the visitor and the engagement, the ability to send conversation lines directly from the application, and the ability to transfer the conversation transcript automatically to the external application.

Instead of flipping between browser tabs, use the Agent Workspace Widget to connect with visitors and handle multiple concurrent connections from one central console, by opening applications directly within the Agent Workspace. The Agent Workspace Widget SDK allows brands to receive more information about their visitors so they can assist them more effectively and efficiently.

**The main features of the SDK:**

* Allows external applications to communicate with LivePerson.

* Allows you to populate chat lines in the chat window from information provided elsewhere.

* Agent Workspace can receive updates on parameters as requested from the application.

* Chat transcript can be passed to the application during the chat or upon its conclusion.

* All attributes and parameters will be available through the SDK.

* Integration.

![AgentWorkspaceSDK](img/agentworkspace.png)

### Getting Started

3. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

Follow the steps below to integrate the application you developed using the client.

1. Reference the [Client SDK](https://lpcdn.lpsnmedia.net/webagent/client-SDK.min.js).
2. In your Conversational Cloud account, define a new custom widget with the URL of your web application (which uses the client-SDK). [Learn more](guides-agent-workspace-widget.html).

All public properties and methods can be found in the namespace `lpTag.agentSDK`.

**Note**: The project is called the client-SDK as it is the client-side of our SDK. However, since you use it to communicate with the agent, the code you write acknowledges the fact that you are communicating with the Agent Workspace.

### Use Cases

* Through integration with the Engagement Window Widget SDK, allow rich media to be shared between the consumer and the agent. Using unique session IDs, an external platform facilitates a direct connection between the two SDKs, providing a seamless widget integration framework.

* Knowledge based integration to provide agents with up to date and comprehensive answers

* Video chat integration

* Integrate CRM directly into the Agent Workspace
