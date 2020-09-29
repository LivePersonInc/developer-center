---
pagename: Meta Intents
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Bot Groups & Other Techniques
permalink: tutorials-guides-bot-groups-other-techniques-meta-intents.html
indicator: both
---

### Introduction

<img style="width:600px" src="img/ConvoBuilder/advtutorial/ib_metaintents_diagram.png">

In order to maintain an optimal user experience, automations should handle not only business focused intents, but should strive to respond intelligently to small talk from the user. User’s asking “how are you” or “are you a bot” should receive a more intelligent response than simply hitting a fallback message. One intelligent solution for handling these types of utterances is by using a Knowledge Base to access and read back responses to a variety of small talk. However, simply pushing all of your KB searches in your Fallback Dialog can complicate your bot design with too many integration calls in one dialog. This final section of this guide will detail creating a Small Talk meta intent and a Small Talk Knowledge Base, each of which to be implemented in our Small Talk bot.