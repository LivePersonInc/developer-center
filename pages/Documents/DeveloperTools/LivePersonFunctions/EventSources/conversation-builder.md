---
pagename: Conversation Builder
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-conversation-builder.html
indicator: both
---

Users who are tasked with creating bots in Conversation Builder can easily integrate Functions within their dialog flows. Adding this kind of [interaction](conversation-builder-integrations-liveperson-functions-integrations.html) to a dialog in a bot works just like adding any other type of integration interaction.

As part of the invocation, the bot can pass event meta-data into the function. This event payload is specific to the triggered bot interaction. Depending on the interaction, the function will have different data available as an input.

### Configuration

You must have a user account for the Conversational Cloud and Conversation Builder platforms. If that's not the case reach out to your account manager in order to create one.

#### Step 1 - Create a new Function

Create a new function **without event**. There aren't templates for this integration since this is a customizable bot where every payload will be unique to each case.

#### Step 2 - Edit the Function

Edit and configure your function with the custom logic that you need for your use cases. see below an example. Please see our [deep dive UI Creation Process](liveperson-functions-getting-started-deep-dive-ui.html#creation-process) section or as alternative [deep dive CLI Create](liveperson-functions-getting-started-deep-dive-cli.html) section for further information.

#### Step 3 - Deploy the Function

Just like any other function, this function must be deployed before it can be used.  Please see our [deep dive UI Deployment Process](liveperson-functions-getting-started-deep-dive-ui.html#deployment-process) section or as alternative [deep dive CLI Deploy](liveperson-functions-getting-started-deep-dive-cli.html) section for more information on how to deploy your function.
#### Step 4 - Configure the integration in Conversation Builder

Please follow this [step by step guide](tutorials-guides-advanced-integrations-using-liveperson-functions-with-a-bot.html#conversation-builder---configure-the-integration) for configuring you custom integration.

### Example

The following example function takes item and price from the input object, and, based on the value of its price, it decides which sentence to send back to the bot. This sentence is subsequently displayed in the conversation.

```javascript
function lambda(input, callback) {
    const price = input.payload.price;
    const item = input.payload.item;

    const tooMuch = price + "$ is way too much for a " + item + "!"
    const tooLittle = price + "$ is for a " + item + "? Nice deal!"

    if( price > 100) {
      callback(null, tooMuch); 
    }

    callback(null, tooLittle); 
};
```
