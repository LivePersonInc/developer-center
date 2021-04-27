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

The Universal interaction, which is designed for advanced bot developers, is a flexible, code-based interaction that opens up many opportunities to achieve the exact layout and styling that you require. For example, you might want to use a vertical card layout or perhaps a button question that uses buttons without button labels. In general, if you can code it in JSON according to the [Conversational Cloud Rich Messaging format](getting-started-with-rich-messaging-introduction.html), you can achieve it.

<img style="width:600px" src="img/ConvoBuilder/interactions_universal1.png">

{: .important}
The Universal interaction isn’t intended to replace the existing interactions in Conversation Builder. For fast and easy bot development, LivePerson recommends that you always use them whenever they meet your requirements.

#### Adding a Universal interaction
To use this interaction, add it to the dialog, and click **+ Universal** within the interaction.

<img style="width:600px" src="img/ConvoBuilder/interactions_universal2.png">

This opens the editor, which works as follows: 

<img style="width:800px" src="img/ConvoBuilder/interactions_universal3.png">

1. Manually enter the JSON into the editor.
2. Use the templates whenever possible, to speed up your work. There are JSON templates for common components like horizontal card, carousel, and so on.
3. To use a template, click the **Copy** icon to paste it to your clipboard. Then paste it into the editor.
4. Preview as you work.

    {: .important}
    Preview works as long as the JSON doesn't use variables. If it does use variables, use the bot-level Preview tool instead.

5. Toggle on **JSON Preview** to preview the code in the editor. Toggle it off to preview the code for the currently selected template.

When using a Universal interaction, you are limited only by what’s supported by the Conversational Cloud, as the JSON must adhere to the [Conversational Cloud Rich Messaging format](getting-started-with-rich-messaging-introduction.html). Otherwise, the interaction won’t render correctly.

With the exception that you enter JSON code instead of interaction data, a Universal interaction works like any other interaction. This means you can:

* Use bot context and environment variables.
* [Configure](conversation-builder-interactions-configuration-settings.html) basic settings, for example, specify an interaction delay or a fallback response (questions only).
* [Configure](conversation-builder-interactions-configuration-next-action.html) a Next Action, including via custom rules. Take care to select an appropriate choice, as all options are available.
* [Configure](conversation-builder-interactions-configuration-custom-code.html) Pre-Process code, Process User Response code, and Post-Process code.

#### JSON validation
Within the code editor, a validation check is performed to ensure that the code is valid JSON.

<img style="width:400px" src="img/ConvoBuilder/interactions_universal4.png">

However, there is no validation check to ensure that the code adheres to the [Conversational Cloud Rich Messaging format](getting-started-with-rich-messaging-introduction.html). Therefore, take care when entering the JSON. You cannot use another JSON format.

#### Testing
To fully test a Universal interaction, use the [Conversation Tester](conversation-builder-testing-deployment-testing-debugging-post-deployment.html) or a Web client. Support for [Preview](conversation-builder-testing-deployment-previewing.html) is limited.
