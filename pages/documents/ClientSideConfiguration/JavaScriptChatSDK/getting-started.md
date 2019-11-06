---
pagename: Overview
redirect_from:
  - consumer-experience-javascript-chat-getting-started.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK

level-order: 6
order: 1
permalink: javascript-chat-sdk-overview.html
root-link: true
indicator: chat
---

### Introduction

LiveEngage offers a chat window for desktop and mobile web out of the box, and brands can customize the window behavior and look and feel.

For complete control over the chat window look, behavior and implementation source, utilize the Javascript Chat Window SDK to create your window from scratch.

The JavaScript Chat SDK is a wrapper for the Server Chat API. For this reason, before starting to work with the JavaScript Chat SDK, we recommend you refer to the [Server Chat API documentation](consumer-experience-server-chat-getting-started.html) and follow the guidelines.

The JavaScript Chat SDK supports chat from a browser on the LiveEngage platform. The SDK is designed to help simplify chat on the browser with modern UI behavior. In addition to chat, this SDK also supports LiveEngage Pre-chat, Exit and Offline surveys.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve the SDK**. The SDK path is located [here](https://lpcdn.lpsnmedia.net/api/chat/public/lpChat.min.js).

2. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* conversationVep

3. This SDK implements and uses LivePerson's Global key:

	* appKey=721c180b09eb463d9f3191c41762bb68

4. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

5. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

### Use Cases

* Create a chat window experience that is completely different than the out of the box window LIveEngage offers - for example - a window that takes up the entire screen.

* Utilize a different platform to manage the user view of the chat and integrate LiveEngage window logic

* Control and manage the window resources on your systems


Example of an implementation of an embedded customized chat window using this API:

![JavascriptOverview](img/jsoverview1.png)

![JavascriptOverview](img/jsoverview2.png)

The JavaScript Chat SDK is a wrapper for the Server Chat API. For this reason, before starting to work with the JavaScript Chat SDK, we recommend you refer to the [Server Chat API documentation](consumer-experience-server-chat-getting-started.html) and follow the guidelines.

The JavaScript Chat SDK supports chat from a browser on the LiveEngage platform. The SDK is designed to help simplify chat on the browser with modern UI behavior. In addition to chat, this SDK also supports LiveEngage Pre-chat, Exit and Offline surveys.
