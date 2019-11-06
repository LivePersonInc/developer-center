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

{: .important}
File Upload interactions are supported in Web Messaging, not Chat.

Use a File Upload (integration) interaction in a dialog when you need the consumer to upload a file that you require. For example, you might have a bot that handles account creation, where the consumer needs to provide an ID card and a document demonstrating proof of a good credit score.

When you use a File Upload interaction, on the consumer side in the messaging window, the consumer can upload the file by dragging and dropping it onto the window.

{: .important}
Some setup of your LiveEngage environment is required before using this feature. Please contact your LivePerson account representative to enable this feature.

**To add a File Upload interaction**

1. Select the interaction just above where you want to add the File Upload interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_fileUpload.png"> (File Upload) on the interactions toolbar.
2. In the File Upload interaction, enter the message to send to the consumer.

    <img style="width:550px" src="img/ConvoBuilder/integrations_fileUpload2.png">

    The File Upload interaction handles upload of the file to LiveEngage. 

3. Immediately after the File Upload interaction, add an Integration interaction ( <img style="width:30px" src="img/ConvoBuilder/icon_integration.png"> ). In the interaction, select the File integration to invoke (Integration type = File).
    
    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload4.png">

    The File integration handles upload of the file from LiveEngage to your brand's external file share or system. If you haven't already done so, [create the File integration](conversation-builder-integrations-file-integrations.html) now, so you can complete this step.

4. Return to the File Upload interaction, open the **Interaction Details**, click **Settings**, and specify the following in the **File Upload Settings**:
    - **Accept File Types**: Select the types of files that you will accept for upload (PDF, JPEG, PNG, DOCx, and so on). If the consumer attempts to upload a file of any other type, the upload will fail, and the following default error message is sent to the consumer: "The file type is invalid. Upload one of these types: {A}, {B}, {C}." To help to avoid this, you might want to include mention of the acceptable file types in the message to the consumer, as we've done in the image above.
    - **Success Message**: Enter the message to send to the consumer if the file upload is successful, e.g., "Receipt of the file was successful." If you don't enter a message, the following default message is sent, "ABC."
    - **Failure Message**: Enter the message to send to the consumer if the file upload is unsuccessful due to an error, e.g., "Receipt of the file was unsuccessful." If you don't enter a message, the following default message is sent, "DEF."
    - **In Progress Message**: Enter the message to send to the consumer if upload *to the LiveEngage environment* is successful. As an example, you might enter, "Just a moment while we upload your file..." because what follows next is the integration interaction that uploads the file to your external file share.
6. Finish configuring the interactions as desired, and save your changes.

#### Customization

There are a few customization points to highlight:

* You can change the error message sent to the consumer when they upload an invalid type of file. To do this, create a context variable. ....MORE TO COME....

* You can route the conversation to a flow that's dependent on the success or failure of the upload. To do this, create a dialog that begins with a User Says interaction that matches the pattern `__FileShare_Success_*`, where the * is the success message you're using. Then build out the dialog per your requirements. You can route to a failure flow similarly, by creating a dialog that matches the pattern `__FileShare_Fail_*`, where the * is the failure message you're using. *Spaces in the message are permitted.*

#### Notes on File Upload interactions

- The uploaded file can’t be over 5 MB.
- File upload is an asynchronous process, so the bot's conversation with the consumer will continue while the upload is in progress. The consumer will be advised of success or failure, respectively, once the process is completed or has failed.
- While LivePerson temporarily stores exchanged files for the duration of the conversation, it does not store them permanently.
- Exchanged content must obey LivePerson’s Terms & Conditions, and the brand itself is responsible for checking exchanged files for malicious content.
- If the dialog flow requires that the consumer upload *multiple* files, you'll need to add a File Upload interaction for every file, and each interaction must be followed by an Integration interaction. You can certainly reuse the [File integration](conversation-builder-integrations-file-integrations.html) that gets called, as we've done below.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_fileUpload3.png">
