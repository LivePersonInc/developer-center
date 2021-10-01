---
pagename: Bot Types
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-bot-types.html
indicator:
---

### Overview

#### Agent Bots
This is the default type for a bot running on Third-Party Bots.
The bot will be online and available for conversations routed to it directly or to the skills assigned to it.

#### Survey Bots
This bot type will listening to new post-conversation surveys (PCS) and handle the survey.

There are several prerequisites which must be fulfilled before the bot will start a survey.
* The account must be configured to support post-conversation surveys
* A profile with the agent group must exist with the required permissions
* The conversation must apply to the filters defined in the bot configuration, namely the
  [Application Installation](conversational-cloud-applications-what-is-a-conversational-cloud-application.html)
  that has triggered this survey and the conversation skill.

#### Limitations

{: .important}
Currently the only supported vendor for Survey Bots is Medallia

{: .important}
If an error occurs during a survey the bot will end the survey.
Details can be found under conversation errors in the dashboard.
  