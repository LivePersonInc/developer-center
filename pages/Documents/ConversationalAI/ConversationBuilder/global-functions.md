---
pagename: Global Functions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-global-functions.html
indicator: both
---

### Introduction
Global functions are functions that you define in the Global Functions area of a bot.

<img class="fancyimage" width="800" src="img/ConvoBuilder/gf_example.png">

Global functions have two key benefits:
* Code reuse 
* Initialization of the conversation

First, any function that you define in Global Functions can be called from anywhere else in the bot, i.e., from any interaction in any dialog. This allows you to easily reuse code.

Second, a bot’s Global Functions includes an empty `initConversation` function by default.

<img class="fancyimage" width="800" src="img/ConvoBuilder/gf_initconversation.png">

`initConversation` is run immediately when the conversation begins, so it’s a good place to do anything that needs to be done at that time, for example, to run a function or to initialize variables that you’ll need later.

Often, bot developers try to initialize variables just in time, which can sometimes be too late in the execution flow. For example, it’s recommended that you obtain the bearer token needed for an API call at the conversation’s start instead of in the Pre-Process code of the Integration interaction. Using initConversation for this kind of work ensures the variable is available when you need it.

Take care when writing JavaScript for global functions. Errors might not be thrown in all, true error cases. So, when you experience erroneous bot behavior, sometimes it can be difficult to diagnose a problematic global function as the root cause.

### Global Helper Functions dialog template
LivePerson offers a Global Helper Functions dialog template that aggregates and makes available many capabilities using global functions. You can import this template into your bot to “add in” the global functions that are included.

<img class="fancyimage" width="600" src="img/ConvoBuilder/gf_dialogtemplate.png">

The helper global functions are based on years of experience with bot building, and they’re designed to speed up and simplify your bot code. There are a numerous global functions defined based on commonly used botContext scripting functions, for example:

```javascript
function goNext(arg){botContext.setTriggerNextMessage(arg);} // navigate to an interaction
function getUserMessage(){return botContext.getCurrentUserMessage();} // return what user just said
function getIntent(){return botContext.getDialogStarterIntent();} // return the name of the matched dialog intent
```

Global functions like these make it faster and easier to code elsewhere in your bot, and they make your code less verbose.

Also, the initConversation method that’s included initializes numerous, commonly used variables, for example:

```javascript
currentSkill: botContext.getLPEngagementAttribute("currentSkillId"),
previousSkill: botContext.getLPEngagementAttribute("previousSkillId"),
bearerToken: botContext.getLPEngagementAttribute("BearerToken"),
conversationId: botContext.getConversationId(),
customerId: botContext.getLPCustomerInfo().customerId,
```

With these variables initialized at the start of the conversation, they are available whenever you need them in the bot.

In short, take advantage of the Global Helper Functions dialog template. Since much of the Global Functions work is done for you, you can import the template to speed up and streamline your code elsewhere in your bot.

{: .important}
LivePerson recommends that you import the template into a bot **before** you start building your bot. This is because, if you have existing, defined global functions, there might be naming conflicts. Therefore, it’s a good idea to check the functions after the import.

### Global Helper Functions bot template
In addition to the Global Helper Functions dialog template, there exists a Global Helper Functions bot template. The bot template is intended for educational purposes. You can create a new test bot that’s based on the template, and then explore the example dialogs therein. There are several dialogs that illustrate using global functions in various ways.

<img class="fancyimage" width="800" src="img/ConvoBuilder/gf_bottemplate.png">