---
pagename: Auto Escalation
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Bot Groups & Other Techniques
permalink: tutorials-guides-bot-groups-other-techniques-auto-escalation.html
indicator: both
---

### Introduction

Along with disambiguation, every automation should include a way to automatically escalate when a user gets stuck. This often happens when a user is attempting to answer a text question, but their responses are not passing the needed validation. Previously, to implement such a policy required the writing of custom JavaScript to keep track of a user's attempts to answer a question, pointing to an escalation interaction if a threshold is crossed. Now, Conversation Builder provides a special dialog type which takes care of all of this for you without having to write any code.

