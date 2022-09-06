---
pagename: File Integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-file-integrations.html
indicator: both
---

File integrations support the ability of consumers to upload files that you require.

In a dialog, a [File Upload](conversation-builder-interactions-integrations.html#file-upload-interactions) interaction begins the upload process. It's immediately followed with an [Integration](conversation-builder-interactions-integrations.html#integration-interactions) interaction that invokes a *File integration* in particular (Integration type = File). It's the File integration that uploads the file to your external file share.

{: .important}
The response body of an API request via a File integration can’t be retrieved like it can for one via an API integration. Instead, use the [getFileCaption](conversation-builder-scripting-functions-get-integration-data.html#get-file-name) function to retrieve the filename of the original file that’s uploaded, and use [getFileType](conversation-builder-scripting-functions-get-integration-data.html#get-file-type) function to retrieve the file’s type.

**To add a File integration**

1. Open the bot, and click **Integrations** in the upper-left corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select **File**.
    - **Method**: Select the type of HTTP request method. PUT and POST are industry standards and commonly used.
    - **URL**: Enter the request target, i.e., the URL for your external upload service that can accept the file stream.
    - **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authentication if applicable. The bot will automatically enhance the request based on the credential's type and data.
    - **Request Headers**: Add any message headers to include in the request.
    - **Request Parameters**: Add the request parameters to pass in the URL’s query string.
    - **Post Body**: Enter the payload to send.
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields. For more on this, see [here](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields).
3. Click **Save**.