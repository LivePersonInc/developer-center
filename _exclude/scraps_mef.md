This is for storing segments of doc temporarily until they can be added to the public files...

**Enable Agent Annotations**: The purpose of this setting is to automate more of the steps taken when training the bot, and to make it easier for agents to participate.

    If you enable this setting, unrecognized utterances that aren't handled by the bot are automatically added to a review list in Conversational Cloud. This allows the agent to review the list and mark utterances needing follow-up, with the goal of re-training the domain and/or updating the bot as needed.

    "Unrecognized utterances" are defined as those that trigger the Fallback dialog. If the Fallback dialog employs a knowledge base search, only the utterances that return no results are added to the review list.

    To make use of this setting, the bot must have at least one dialog starter with a specified *intent*.