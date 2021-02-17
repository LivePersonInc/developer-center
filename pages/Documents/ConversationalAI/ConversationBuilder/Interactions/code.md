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

### "Universal" JSON interactions

Is there a cutting-edge interaction in a channel that you want to implement in your bot? Do you want to fast track its usage now, before support for it is added to the Statement and Question interactions in Conversation Builder? There’s no need to wait. Conversation Builder includes a “universal” JSON interaction to meet this need.

The JSON interaction, which is designed for advanced bot developers, is powerful because it opens up many opportunities to achieve the exact layout and styling that you require. For example, you might want a vertical card layout or perhaps a button question that uses just buttons (images) without button labels (text). If you can code it (according to the [Conversational Cloud messaging format](getting-started-with-rich-messaging-introduction.html)), you can implement it.



{: .important}
The JSON interaction isn’t intended to replace the Statement and Question interactions in Conversation Builder. For fast and easy bot development, LivePerson recommends that you always use them whenever they meet your requirements.

#### Adding a JSON interaction
To use this code interaction, add it to your bot, and enter the appropriate JSON code within it. 



You are limited only by what’s supported by the Conversational Cloud, as the JSON must adhere to the [Conversational Cloud messaging format](getting-started-with-rich-messaging-introduction.html). Otherwise, the interaction won’t render correctly.

With the exception that you enter JSON code instead of interaction data, a JSON interaction is just like any other interaction. This means you can:

* Use bot context and environment variables.
* [Configure](conversation-builder-interactions-configuration-settings.html) basic settings, for example, specify an interaction delay or a fallback response.
* [Configure](conversation-builder-interactions-configuration-next-action.html) a Next Action, including via custom rules. Take care to select an appropriate choice, as all options are available.
* [Configure](conversation-builder-interactions-configuration-custom-code.html) Pre-Process code, Process User Response code, and Post-Process code.

While it’s technically possible to implement dialog starters and integration interactions using JSON, LivePerson recommends that you use a JSON interaction only in place of Statement and Question interactions, for the purpose of achieving required layout and styling not yet supported by those interactions.

#### JSON validation
A validation check is performed to ensure that the code is valid JSON. However, there is no validation check to ensure that the code adheres to the [Conversational Cloud messaging format](getting-started-with-rich-messaging-introduction.html). Therefore, take care when entering the JSON. You cannot use another JSON format.

#### Testing
To fully test a JSON interaction, use the [Conversation Tester](conversation-builder-testing-deployment-testing-debugging-post-deployment.html) or a Web client.
