---
pagename: Code
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-code.html
indicator: both
---

### Universal interactions

Is there a cutting-edge interaction in a channel that you want to implement in your bot? Do you want to fast track its usage now, before support is added to the interactions in Conversation Builder? There’s no need to wait. Conversation Builder includes a “Universal” interaction to meet this need.

![Carousel](img/ConvoBuilder/interactions_universal.gif)

The Universal interaction, which is designed for advanced bot developers, is a flexible, channel-agnostic, code-based interaction that you can customize to render any conversational response from the bot. It opens up many opportunities to achieve the exact layout and styling that you require. For example, you might want to use a vertical card layout or perhaps a button question that uses buttons without button labels. In general, if you can code it in JSON according to the [Rich Messaging format](getting-started-with-rich-messaging-introduction.html) for Conversational Cloud, you can achieve it.

<img style="width:600px" src="img/ConvoBuilder/interactions_universal1.png">

{: .important}
Currently, the interaction is supported only in the following channels: Apple Business Chat, Google Business Messages, and Web messaging. Use in other channels isn't supported.<br><br>
The Universal interaction isn’t intended to replace the existing interactions in Conversation Builder. For fast and easy bot development, LivePerson recommends that you always use them whenever they meet your requirements.

#### Adding a Universal interaction
To use this interaction, first add it to the dialog. You'll find the **Universal** interaction in the **Code** section on the interaction palette.

Next, within the interaction, click **+ Enter JSON and preview**.

<img style="width:600px" src="img/ConvoBuilder/interactions_universal2.png">

This opens the editor, which works as follows: 

<img style="width:800px" src="img/ConvoBuilder/interactions_universal3.png">

1. Manually enter the JSON into the editor. You are limited only by what’s supported by the Conversational Cloud, as the JSON must adhere to the Conversational Cloud [Rich Messaging format](getting-started-with-rich-messaging-introduction.html). Otherwise, the interaction won’t render correctly.
2. Use the templates whenever possible to speed up your work. There are JSON templates for common components like a horizontal card, a basic or complex carousel, and more.
3. To use a template, click the **Copy** icon to copy it to your clipboard. Then paste it into the editor.
4. Preview as you work.

    {: .important}
    Preview works as long as the JSON doesn't use variables. If it does use variables, use the bot-level Preview tool instead.

5. Toggle on **JSON Preview** to preview the code in the editor. Toggle it off to preview the code for the currently selected template.

With the exception that you enter JSON code instead of interaction data, a Universal interaction works like any other interaction. This means you can:

* Use bot context and environment variables. Enclose the variable in quotes, like so:

    <img style="width:500px" src="img/ConvoBuilder/interactions_universal5.png">

* [Configure](conversation-builder-interactions-configuration-settings.html) basic settings, for example, specify an interaction delay.
* [Configure](conversation-builder-interactions-configuration-next-action.html) a Next Action, including via custom rules.
* [Configure](conversation-builder-interactions-configuration-custom-code.html) Pre-Process code, Process User Response code, and Post-Process code.

#### Templates
There are templates available [here](https://github.com/LivePersonInc/ConversationBuilder-Samples/tree/main/universal-tile-templates) for various channels. Use these to get up and running quickly.

#### JSON validation
Within the code editor, a validation check is performed to ensure that the code is valid JSON.

<img style="width:400px" src="img/ConvoBuilder/interactions_universal4.png">

However, there is no validation check to ensure that the code adheres to the Conversational Cloud [Rich Messaging format](getting-started-with-rich-messaging-introduction.html). Therefore, take care when entering the JSON. If you use a JSON format that isn't in compliance with the Conversational Could Rich Messaging format, the message will not be rendered at runtime.

#### Testing
To fully test a Universal interaction, use a deployed bot.

The bot-level [Preview](conversation-builder-testing-deployment-previewing.html) tool can only render basic elements, not complex ones like cards or carousels. Additionally, the [Conversation Tester](conversation-builder-testing-deployment-testing-debugging-post-deployment.html) doesn't support the Universal interaction.

#### FAQs

##### When should I use the Universal interaction? And when shouldn't I?

As mentioned above, the Universal interaction isn’t intended to replace the existing interactions in Conversation Builder. For fast and easy bot development, LivePerson recommends that you always use them whenever they meet your requirements.

Use the Universal interaction when you want to render a particular bot response (i.e., layout and styling) that isn't yet supported by one of the Statement or Question interactions. As examples, you can use it instead of the Text, Structured, or Multiple Choice Question interactions.

##### Can I use the Universal interaction to update the conversation’s metadata?
No, this can't be done.

##### How does use of the Universal tile impact analytics?
The Universal interaction is reported in analytics like any other interaction.
