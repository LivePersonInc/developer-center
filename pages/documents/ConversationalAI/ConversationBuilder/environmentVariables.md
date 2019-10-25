---
pagename: Environment Variables
redirect_from:  
    - conversation-builder-best-practices-using-environment-variables.html
    - conversation-builder-best-practices-environment-variables.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-environment-variables.html
indicator: both
---

### Introduction

When creating a bot, there might be instances where you need to externalize certain values or constants. Environment variables allow you to create a set of values that are connected to a particular bot instance.

For example, if you have a bot that has both a Sandbox and Production version, 99% of the functionality will be the same, but certain values (like skill IDs for instance) might be different. Defining and storing these values outside of the bot makes them easier to manage.

### System environment variables

Conversation Builder includes several environment variables that you can use to take advantage of associated bot behaviors.

| Environment variable name | Value | Description | 
|----|----|----|
| system_handleIntermediateUserMessage | true | Enables the behavior to catch and ignore "interrupt" messages by the consumer. See [here](conversation-builder-best-practices-useful-techniques.html#block-consumer-interruptions) for when and why to use this variable. | 
| system_intermediateBotMessage | string | Optionally used in conjunction with `system_handleIntermediateUserMessage`. This is the message to send to the consumer if they send an utterance while their messages are blocked, e.g., "Please wait...we are still responding to your last message." See [here](conversation-builder-best-practices-useful-techniques.html#block-consumer-interruptions) for when and why to use this variable. |
| system_intermediateBotResponseTimeout | string | Used in conjunction with `system_handleIntermediateUserMessage`. This is the timeout period in milliseconds (e.g., 15000 = 15 seconds). This value determines how long the bot will wait to send a message before moving on to sending the next message. In other words, if the wait for a message is too long, this instructs the bot to skip it after the specified amount of time. See [here](conversation-builder-best-practices-useful-techniques.html#block-consumer-interruptions) for when and why to use this variable. |

### Add environment variables

If you are using multiple bot instances (e.g., a Sandbox version and a Production version), you would create a Sandbox environment *and* a Production environment and then associate the specific environment with the specific bot.

**To add environment variables**

1. From the Conversation Builder dashboard, click **Manage Bot Environments** in the upper-right corner.
2. Click **Add Environment** in the lower-left corner.
3. Specify the following:

    * **Environment Name**: Enter a descriptive name. For example, you might have Sandbox and Production instances  (e.g., "Router Bot Sandbox").
    * **Environment Values**: Enter the key/value pairs for each variable. Variables *cannot* have spaces or special characters in their names, only letters and numbers.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/bestPractices/env_1.png">

4. Click **Save**.

### Link environment variables to a bot 

Once you’ve created an environment, you need to connect it to your bot.

**To link environment variables to a bot**

1. Open the bot, and click <img style="width:30px" src="img/ConvoBuilder/icon_ellipsis_horizontal.png"> (ellipsis icon) in the upper-right corner.
2. Click **Bot Settings** from the menu that appears.
3. Scroll down, and click **More Settings**.
4. For **Bot Environment**, select the name of the environment.
5. Click **Save**.
 
### Use environment variables

There are two ways you can call environment variables.

For JavaScript, use the following notation: `botContext.getEnvVariable(variableName);`

For example:

```javascript
switch(intent) {
  case "billing":
    transferMessage = "Hold on while I transfer you to someone who can help with your billing";
    skillId = botcontext.getEnvVariable('billing');
    skillName = intent;
    break;
  case "account":
    transferMessage = "Hold on while I transfer you to someone who can help with your account";
    skillId = botcontext.getEnvVariable('account');
    skillName = intent;
    break;
  case "help":
    transferMessage = "Hold on while I transfer you to someone who can help with your issue";
    skillId = botcontext.getEnvVariable('help');
    skillName = intent;
    break;
}
```

To display an environment variable directly in text, use the following notation: `{$env.variableName}`

For example:

<img style="width:700px" src="img/ConvoBuilder/bestPractices/env_6.png">