---
pagename: Using Environment Variables
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-using-environment-variables.html
indicator: both
---

### Introduction

When creating your automation, there may be instances where you need to externalize certain values or constants. Environment Variables allow you to create a set of values that are connected to a particular automation instance.

For example, if you have an automation that has both a Sandbox and Production version, 99% of the functionality will be the same, but certain values (like skillIds for instance) may be different. Having these values resident outside the automation makes them easier to manage.

### How do I create Environment Variables?

Because Environment Variables are specific to a bot, we access them from the Conversation Builder dashboard. Tap on the Manage Automation Environments link.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/bestPractices/env_0.png">

Give your environment a name, in this case we’ll apply our environment variables to a router bot, so we’ll call ours "Router Bot". Add key/value pairs for your variables and hit save.

If you are using multiple bot instances (eg: Sandbox and Production) you would create a Sandbox environment AND a Production environment and associate the specific environment with the specific bot.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/bestPractices/env_1.png">

Keep in mind, these variables **cannot** have spaces or special characters in their names, only letters and numbers.

Once you’ve created your environment, you need to connect it to your bot. Open your bot and go to your Automation Settings. Tap More Settings and under Automation Environment, select the environment you created and hit Save.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/bestPractices/env_2.png">

You’re all set to use your variables!

### How do I use Environment Variables?

There are 2 ways you can call them.

For JavaScript, use the following notation: `botContext.getEnvVariable(variableName);`

Here’s how we’re calling the variables we set up:

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

If you want to display the environment variable directly in text, use the following notation: `{$env.variableName}`

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/bestPractices/env_4.png">

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/bestPractices/env_5.png">
