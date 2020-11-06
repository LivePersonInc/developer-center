---
pagename: PVA
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Microsoft Direct Line
permalink: third-party-bots-microsoft-direct-line-pva.html
indicator:
---

### Power Virtual Agents - Overview

[Power Virtual Agents](https://powervirtualagents.microsoft.com) is a platform provided by Microsoft for codeless 
chatbot development.
This platform therefore can be used instead of creating a bot with the Microsoft Bot Framework.
Please read the 
[Microsoft documentation](https://docs.microsoft.com/en-us/power-virtual-agents/fundamentals-what-is-power-virtual-agents) 
on a more detailed guide.
Throughout this document we refer to the platform as "PVA".

### Usage
The Direct Line secret necessary to add the bot on Third Party Bots can be found in the Manage Section of the PVA bot.

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/microsoft-secret-pva.png">

Adding this bot to Third Party Bots will already enable you to leverage most of the bot functionality.
For certain features of the PVA platform however you should also mark the bot as a PVA bot in the bot configuration.

TODO: configuration screenshot

This will generate a native welcome event on a new conversation instead of the custom one described under 
`Basic Content`. On the PVA platform this lead to the System Topic "Greeting" being triggered.

* How to enable the bot
Since a PVA bot is by default reachable on the DirectLine API there are no additional steps 

### Support

Currently Third Party Bots supports the following:
TODO:

