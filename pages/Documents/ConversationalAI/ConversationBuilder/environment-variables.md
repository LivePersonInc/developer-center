---
pagename: Environment Variables
redirect_from:
    - conversation-builder-best-practices-using-environment-variables.html
    - conversation-builder-best-practices-environment-variables.html
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

Conversation Builder includes a number of environment variables that you can use to take advantage of associated bot behaviors:

#### Variables for customizing disambiguation
You can use these environment variables to [customize how disambiguation works](conversation-builder-dialogs-disambiguation-dialogs.html#customization-points):
- `system_groupConsecutiveIntentRanksInDisambiguation`
- `system_useIntentsOnlyWithDialogStartersInDisambiguation`

#### Variables for preventing consumer interruptions
These environment variables work together to [prevent consumer interruptions while the bot is responding to the consumer](conversation-builder-best-practices-prevent-consumer-interruptions.html):
- `system_handleIntermediateUserMessage`
- `system_intermediateBotMessage`
- `system_intermediateBotResponseTimeout`

### Add environment variables

If you are using multiple bot instances (e.g., a Sandbox version and a Production version), you would create a Sandbox environment *and* a Production environment and then associate the specific environment with the specific bot.

**To add environment variables**

1. From the dashboard that lists your bots, click **Bot Environments** in the upper-left corner.
2. Click **Add Environment** in the lower-left corner.
3. Specify the following:

    * **Environment Name**: Enter a descriptive name. For example, you might have Sandbox and Production instances  (e.g., "Router Bot Sandbox").
    * **Environment Values**: Enter the key/value pairs for each variable. Variables *cannot* have spaces or special characters in their names, only letters and numbers.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/bestPractices/env_1.png" alt="The Add Environment window">

    You can add the key/value pairs one by one using the fields provided. Alternatively, click the **Bulk Add** link and enter them in key=value format in the text box provided. The text box also lets you copy the values from another source and paste them in.

4. Click **Save**.

### Link environment variables to a bot

Once you’ve created an environment, you need to connect it to your bot.

**To link environment variables to a bot**

1. Open the bot, and click <img style="width:30px" src="img/ConvoBuilder/icon_ellipsisVertical.png" alt="Three-doct icon"> (3-dot icon) in the upper-left corner, just to the right of the menu bar.
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
    skillId = botContext.getEnvVariable('billing');
    skillName = intent;
    break;
  case "account":
    transferMessage = "Hold on while I transfer you to someone who can help with your account";
    skillId = botContext.getEnvVariable('account');
    skillName = intent;
    break;
  case "help":
    transferMessage = "Hold on while I transfer you to someone who can help with your issue";
    skillId = botContext.getEnvVariable('help');
    skillName = intent;
    break;
}
```

To display an environment variable directly in text, use the following notation: `{$env.variableName}`

For example:

<img style="width:700px" src="img/ConvoBuilder/bestPractices/env_6.png" alt="An example of using an environment variable in a Text statement, and a view of how it renders to the consumer">

### Export environment variables to a CSV file

Exporting a set of environment variables is useful when you need to "move" the values from one environment to another, e.g., from Development to Staging, or from Staging to Production. You can export the variables and then use the Bulk Add feature (and copy/paste) to add them to the new environment.

**To export environment variables to a CSV file**

1. From the dashboard that lists your bots, click **Bot Environments** in the upper-left corner.
2. In the left panel, select the environment.
3. In the right panel, under **More Options**, click <img style="width:25px" src="img/ConvoBuilder/icon_envVariables_download.png" alt="Download icon"> (Download icon) beside **Export Environment Variables**.
4. Follow the browser prompts to access and save the CSV file to a location of your choice.