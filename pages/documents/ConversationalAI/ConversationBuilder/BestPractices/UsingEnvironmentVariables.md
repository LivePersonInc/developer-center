---
pagename: Using Environment Variables
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-using-environment-variables.html
indicator: both
---

### Introduction

When creating a bot, there might be instances where you need to externalize certain values or constants. Environment variables allow you to create a set of values that are connected to a particular bot instance.

For example, if you have a bot that has both a Sandbox and Production version, 99% of the functionality will be the same, but certain values (like skill IDs for instance) might be different. Defining and storing these values outside of the bot makes them easier to manage.

### Create environment variables

If you are using multiple bot instances (e.g., a Sandbox version and a Production version), you would create a Sandbox environment *and* a Production environment and then associate the specific environment with the specific bot.

**To create environment variables**

1. From the Conversation Builder dashboard, click **Manage Bot Environments** in the upper-right corner.
2. On the Add Environment page, specify the following:

    * **Environment Name**: Enter a descriptive name. For example, you might have Sandbox and Production instances  (e.g., "Router Bot Sandbox").
    * **Environment Values**: Enter the key/value pairs for each variable. Variables *cannot* have spaces or special characters in their names, only letters and numbers.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/bestPractices/env_1.png">

3. Click **Save**.

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