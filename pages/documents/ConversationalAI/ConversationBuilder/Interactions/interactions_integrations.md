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

Use a File Upload (integration) interaction in a dialog when you need the consumer to upload a file that you require. As examples, you might want to do this when the consumer needs to provide an ID card or a document demonstrating proof of a good credit score.

In the chat window, the consumer can upload the file by dragging and dropping it onto the window.

**To add a File Upload interaction**

1. Select the interaction just above where you want to add the File Upload interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_fileUpload.png"> (File Upload) on the interactions toolbar.
2. In the File Upload interaction, enter the message to send to the consumer.

    <img style="width:550px" src="img/ConvoBuilder/integrations_fileUpload2.png">

    The File Upload interaction only handles upload of the file to LiveEngage. 
    
    Next you need to add an interaction that takes the file from LiveEngage and uploads it to your external file share or system.

3. Immediately after the File Upload interaction, add an Integration interaction ( <img style="width:30px" src="img/ConvoBuilder/icon_integration.png"> ). In the interaction, select the *File integration* to invoke. (If you haven't already done so, [create the File integration](conversation-builder-integrations-file-integrations.html) now, so you can complete this step.)

    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload4.png">

    *The File Upload and Integration interactions work together.* Every File Upload interaction must be followed by an Integration interaction whose selected integration is of type "File."

4. Return to the File Upload interaction, open the **Interaction Details**, click **Settings**, and specify the following in the **File Upload Settings**:
    - **Accept File Types**: Select the types of files that you will accept for upload (PDF, JPEG, PNG, DOCx, and so on). If the consumer attempts to upload a file of any other type, the upload will fail, and the interaction's fallback message will be sent. You might want to include mention of the acceptable file types in the initial message that's sent to the consumer, as we've done in the image above.
    - **Success message**: Enter the message that’s sent to the consumer if the upload *to your external system* is successful. In other words, this is the message that is sent if the subsequent *Integration interaction* is successful.
    - **In progress message**: Enter the message that’s sent to the consumer if upload *to the LiveEngage environment* is successful. You might want to set this to something like, "Just a moment while we upload your file..." because what follows is the actual upload to your external system.
5. In the **Interaction Details** of both the File Upload and Integration interactions, click the **Next Actions** tab and enter a fallback message under **Advanced Responses**. If the upload fails in either interaction, the interaction's fallback message will be sent.
6. Finish configuring the interactions as desired, and save your changes.
    
#### Notes on File Upload interactions

- The uploaded file can’t be over 5 MB.
- While LivePerson temporarily stores exchanged files for the duration of the conversation, it does not store them permanently.
- Exchanged content must obey LivePerson’s Terms & Conditions, and the brand itself is responsible for checking exchanged files for malicious content.
- If the dialog flow requires that the consumer upload *multiple* files, you'll need to add a File Upload interaction for every file, and each interaction must be followed by an Integration interaction. You can certainly reuse the File integration that gets called.

    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload3.png">
