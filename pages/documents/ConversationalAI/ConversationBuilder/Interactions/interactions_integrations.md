---
pagename: Integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-integrations.html
indicator: both
---

Integration interactions make programmatic calls to retrieve or post data to external systems and/or to perform actions. They perform their work and then execute the next action.

If an integration retrieves data, that data can be stored in custom fields, so you can use it in subsequent interactions. For information on how to display variable data in interactions, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

Integrations are similar to questions in that you can define conditions that each perform different next actions (based on which condition is met). One common use for this is to check whether the integration call was a success or failure and then to execute a next action that’s appropriate.

### Integration interactions

{: .important}
Before you can add an Integration interaction, you need to create the integration itself. For details on this, see [here](conversation-builder-integrations-integration-basics.html#integration-types).

**To add an Integration interaction**

1. Select the interaction just above where you want to add the integration, and click <img style="width:30px" src="img/ConvoBuilder/icon_integration.png"> (Integration) on the interactions toolbar.
2. In the interaction, select the name of the integration to invoke.

    <img style="width:550px" src="img/ConvoBuilder/integrations_api.png">

3. Finish configuring the interaction as desired, and click **Save**.

### File Upload interactions

Use a File Upload (integration) interaction in a dialog when you need the consumer to upload a file that you require. For example, you might have a bot that handles account creation, where the consumer needs to provide an ID card and a document demonstrating proof of a good credit score.

When you use a File Upload interaction, on the consumer side in the chat window, the consumer can upload the file by dragging and dropping it onto the window.

**To add a File Upload interaction - high-level process**

1.  Add a *File Upload interaction*. This handles upload of the file to LiveEngage.
2. Add an *Integration interaction* beneath the File Upload interaction. This interaction must invoke a [File integration](conversation-builder-integrations-file-integrations.html) that handles upload of the file from LiveEngage to your brand's external file share or system.
3. Create a *dialog* that a) gets triggered when the upload succeeds, and b) handles the "success" flow.
4. Create a *dialog* that a) gets triggered when the upload fails, and b) handles the "failure" flow.

**To add a File Upload interaction - detailed process**

1. Select the interaction just above where you want to add the File Upload interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_fileUpload.png"> (File Upload) on the interactions toolbar.
2. In the File Upload interaction, enter the message to send to the consumer.

    <img style="width:550px" src="img/ConvoBuilder/integrations_fileUpload2.png">

    The File Upload interaction handles upload of the file to LiveEngage. 

3. Immediately after the File Upload interaction, add an Integration interaction ( <img style="width:30px" src="img/ConvoBuilder/icon_integration.png"> ). In the interaction, select the File integration to invoke (Integration type = File). The File integration handles upload of the file from LiveEngage to your brand's external file share or system. If you haven't already done so, [create the File integration](conversation-builder-integrations-file-integrations.html) now, so you can complete this step.

    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload4.png">

4. Return to the File Upload interaction, open the **Interaction Details**, click **Settings**, and specify the following in the **File Upload Settings**:
    - **Accept File Types**: Select the types of files that you will accept for upload (PDF, JPEG, PNG, DOCx, and so on). If the consumer attempts to upload a file of any other type, the upload will fail, and the interaction's fallback message will be sent. You might want to include mention of the acceptable file types in the initial message that's sent to the consumer, as we've done in the image above.
    - **Success Message**: Enter the message that will trigger the dialog that handles the conversation flow when the upload to your external system is successful. This message will be sent by the system to the bot if the *Integration interaction* is successful. As an example, you might enter, "File Upload Successful."
    - **Failure Message**: Enter the message that will trigger the dialog that handles the conversation flow when the upload to your external system has failed. This message will be sent by the system to the bot if the *Integration interaction* fails. As an example, you might enter, "File Upload Failed."
    - **In Progress Message**: Enter the message that will be sent to the consumer if upload *to the LiveEngage environment* is successful. This message will be sent by the bot to the consumer if the *File Upload interaction* is successful. As an example, you might enter, "Just a moment while we upload your file..." because what follows next is the actual upload to your external system.
6. Finish configuring the interactions as desired, and save your changes.
7. Create a dialog that gets triggered when the upload succeeds. You can accomplish this with a User Says interaction that matches the pattern for the message you specified in the **Upload Success Message**. That message is sent from the system to the bot, and it will trigger this dialog just like a consumer response does.

    <img style="width:800px" src="img/ConvoBuilder/integrations_fileUpload6.png">
8. Build out the "success" dialog (as little or as much) as needed to handle the "success" flow.

    In our image below, we've simply set the Next Step in the User Says interaction to be a Text interaction in the original dialog.

    <img style="width:800px" src="img/ConvoBuilder/integrations_fileUpload7.png">

    Here's that Text interaction in the original dialog:

    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload8.png">

9. Create a "failure" dialog along the same lines as the "success" dialog. It should be triggered when the upload fails, and it should handle the "failure" flow as per your requirements.
    
#### Notes on File Upload interactions

- The uploaded file can’t be over 5 MB.
- While LivePerson temporarily stores exchanged files for the duration of the conversation, it does not store them permanently.
- Exchanged content must obey LivePerson’s Terms & Conditions, and the brand itself is responsible for checking exchanged files for malicious content.
- If the dialog flow requires that the consumer upload *multiple* files, you'll need to add a File Upload interaction for every file, and each interaction must be followed by an Integration interaction. You can certainly reuse the [File integration](conversation-builder-integrations-file-integrations.html) that gets called, as we've done below.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_fileUpload3.png">
