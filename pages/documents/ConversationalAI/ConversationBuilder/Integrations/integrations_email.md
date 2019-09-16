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

Use an Email integration when you want the bot to send an email in a dialog flow. For example, if a consumer completes a survey, you might want to follow that with a thank you email that includes a coupon for a future purchase.

**To add an email integration**

1. Open the bot, and click Integrations in the upper-right corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select **Email**.
    - **To**: Enter the email address to which the email will be sent.
    - **Reply To**: Enter the email address to which reply emails will be sent.
    - **Subject**: Enter the subject of the email.
    - **Body**: Enter the body of the email.
    - **Html Email**: Select this to send the email in HTML format. Otherwise, it will be sent in plain text format.
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see Transform an API result farther below.
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields as described here.
3. Click **Save**.