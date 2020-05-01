---
pagename: Email integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-email-integrations.html
indicator: both
---

Use an Email integration when you want Conversation Builder to send an email as the result of a bot's dialog flow. For example, if the consumer completes a survey, you might want to send a thank you email to the consumer or send the survey results to a moderator or administrator for collection.

**To add an email integration**

1. Open the bot, and click **Integrations** in the upper-right corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select **Email**.
    - **To**: Enter the comma-separated list of email addresses to which the email will be sent.
    - **Reply To**: Enter the comma-separated list of email addresses to which reply emails will be sent.
    - **Subject**: Enter the subject of the email.
    - **Body**: Enter the body of the email. If you also select the **Html Email** check box (discussed below), you can enter HTML formatting in the body.

        {: .important}
        In the Subject and Body fields, you can use data that's available in the bot runtime if it's stored in botContext variables. For help with setting and getting values in bot variables, see [here](conversation-builder-scripting-functions-get-set-contextual-data.html#get-and-set-bot-variable).

    - **Html Email**: Select this to send the email in HTML format. Otherwise, it will be sent in plain text format.
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields as described [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).
3. Click **Save**.