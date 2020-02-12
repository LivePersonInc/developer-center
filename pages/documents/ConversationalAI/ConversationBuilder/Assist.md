---
pagename: NLU Assist
redirect_from:
    - conversation-builder-conversation-builder-assist.html
    - conversation-builder-assist.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-nlu-assist.html
indicator: both
---

NLU Assist is a helper tool that "listens" to your dialog as you build it, interaction by interaction, and suggests intents, entities, patterns, and more that can be added to each interaction.

<img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_suggestion.png">

### Adding a domain

When you create your first interaction, NLU Assist will automatically pop up on the right hand side of an interaction. You'll be prompted to add a domain from the list of domains you have set up (to learn more about setting up domains, please see [here](intent-builder-domains.html)). If you have not configured a domain yet, you will not be prompted to add one.

Select one of your domains from the list and click on it. From then on, for this dialog, NLU Assist will recommend using intents and entities from this domain, using NLU to identify areas where they might be relevant. In essence, it recognizes keywords that you use in an interaction *and* an intent or entity, offering you to link between the two.

### Assigning an intent to an interaction

When you start typing out a *user interaction*, NLU Assist will check the message/question you are creating and run it against your domain's list of existing intents. Using the same NLU engine that will later be used by the bot in real time, it will attempt to suggest relevant intents that you might want to associate with the user's question.

Once you choose an intent, NLU Assist will set it for the user's message, and the bot will trigger the dialog or the next interaction when the intent is found in a conversation. For example, if your first message is "Hello, I need to check my order status", NLU Assist might find an "order_status" intent. Depending on the training questions you associate with the intent (see the link above for more information on how do to that), the bot will trigger not only for that specific sentence but also for something like "Hey! What's my order status?"

### Assigning an entity and slots to an interaction

When you create an *bot interaction*, such as a multiple choice question, NLU Assist will listen to the different answers you create for this interaction. It will attempt to find an [entity](conversation-builder-intent-builder-entities.html) that contains these different answers and suggest that you set it for this interaction. If no entity is found, it will prompt you to create one and populate it with the different answers you've configured.

Once you've chosen an entity, NLU Assist will also prompt you to assign or create a [slot](conversation-builder-conversation-builder-variables-slots.html#slots) for this interaction. This will allow you to store the specific answer that the user will choose from out of the members of the assigned entity.
