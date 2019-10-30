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
3. Create a *dialog* that is triggered when the upload succeeds and responds accordingly to the consumer.
4. Create a *dialog* that is triggered when the upload fails and responds accordingly to the consumer.

**To add a File Upload interaction - detailed process**

1. Select the interaction just above where you want to add the File Upload interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_fileUpload.png"> (File Upload) on the interactions toolbar.
2. In the File Upload interaction, enter the message to send to the consumer.

    <img style="width:550px" src="img/ConvoBuilder/integrations_fileUpload2.png">

    The File Upload interaction handles upload of the file to LiveEngage. 

3. Immediately after the File Upload interaction, add an Integration interaction ( <img style="width:30px" src="img/ConvoBuilder/icon_integration.png"> ). In the interaction, select the File integration to invoke (Integration type = File). The File integration handles upload of the file from LiveEngage to your brand's external file share or system. If you haven't already done so, [create the File integration](conversation-builder-integrations-file-integrations.html) now, so you can complete this step.

    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload4.png">

4. Return to the File Upload interaction, open the **Interaction Details**, click **Settings**, and specify the following in the **File Upload Settings**:
    - **Accept File Types**: Select the types of files that you will accept for upload (PDF, JPEG, PNG, DOCx, and so on). If the consumer attempts to upload a file of any other type, the upload will fail, and the interaction's failure message (described below) will be sent. You might want to include mention of the acceptable file types in the initial message that's sent to the consumer, as we've done in the image above.
    - **Success Message**: Enter the success message, such as, "File upload is successful." Since file upload to your external system is an asynchronous operation, if the process is successful, this message is sent to the bot to inform it. You'll create a dialog to match this message and respond accordingly to the consumer.
    - **Failure Message**: Enter the failure message, such as, "File upload is is unsuccessful; please try again." This message is used in 2 ways: 1) If there's an internal failure while processing the upload (the file's type isn't accepted, upload to LiveEngage fails, etc.), the bot will respond directly to the consumer with this message. 2) Like with the success message, since file upload to your external system is an asynchronous operation, if an external failure occurs (your brand's service is down, your file share can't be accesssed, etc.), this message is sent to the bot to inform it. You'll create a dialog to match this message and respond accordingly to the consumer.
    - **In Progress Message**: Enter the message that will be sent by the bot to the consumer if upload *to the LiveEngage environment* is successful. As an example, you might enter, "Just a moment while we upload your file..." because what follows next is the actual upload to your external system.
6. Finish configuring the interactions as desired, and save your changes.
7. Create a dialog that is triggered when the upload succeeds and that responds accordingly to the consumer. You can accomplish this with a User Says interaction that *exactly* matches the pattern for the message you specified in the **Success Message** field in the File Upload interaction (**1 below**). Follow that with the message to send to the consumer (**2 below**).

    <img style="width:800px" src="img/ConvoBuilder/integrations_fileUpload6.png">

8. Create a "failure" dialog along the same lines as the "success" dialog. The first interaction should be a User Says interaction that *exactly* matches the pattern for the message you specified in the **Failure Message** field in the File Upload interaction. Follow that with the message to send to the consumer.

{: .important}
It's recommended that you keep the success and failure dialogs simple and short, returning the flow to your original dialog as quickly as possible.
    
#### Notes on File Upload interactions

- The uploaded file can’t be over 5 MB.
- While LivePerson temporarily stores exchanged files for the duration of the conversation, it does not store them permanently.
- Exchanged content must obey LivePerson’s Terms & Conditions, and the brand itself is responsible for checking exchanged files for malicious content.
- If the dialog flow requires that the consumer upload *multiple* files, you'll need to add a File Upload interaction for every file, and each interaction must be followed by an Integration interaction. You can certainly reuse the [File integration](conversation-builder-integrations-file-integrations.html) that gets called, as we've done below.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_fileUpload3.png">
