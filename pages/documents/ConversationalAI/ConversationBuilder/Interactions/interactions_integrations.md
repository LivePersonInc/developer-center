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

1. Select the interaction just above where you want to add the integration, and click <img style="width:35px" src="img/ConvoBuilder/icon_integration.png"> (Integration) on the interactions toolbar.
2. In the interaction, select the name of the integration to invoke.

    <img class="fancyimage" style="width:550px" src="img/ConvoBuilder/integrations_api.png">

3. Finish configuring the interaction as desired, and click **Save**.

### File Upload integration interactions

Use a File Upload integration interaction in a dialog flow when you need the consumer to upload a file that you require. As examples, you might want to do this when the consumer needs to provide an ID card or a document demonstrating proof of a good credit score.

In the chat window, the consumer can upload the file by either dragging and dropping it into the window, or selecting the upload icon and following the prompts.

(consumer-side image)

The following are some important notes:

- The uploaded file can’t be over 5 MB.
- While LivePerson temporarily stores exchanged files for the duration of the conversation, it does not provide for their permanent storage. You'll need to follow a *File Upload* integration interaction--which uploads the file to the LiveEngage environment--with an *Integration* interaction that posts the file to your external file share or system. More on this below.
- Exchanged content must obey LivePerson’s Terms & Conditions, and the brand itself is responsible for checking exchanged files for malicious content.

**To add a File Upload integration interaction**

1. Select the interaction just above where you want to add the File Upload interaction, and click <img style="width:35px" src="img/ConvoBuilder/icon_fileUpload.png"> (File Upload) on the interactions toolbar.
2. In the File Upload interaction, enter the message to send to the consumer.

    <img class="fancyimage" style="width:550px" src="img/ConvoBuilder/integrations_fileUpload2.png">

3. Still in the File Upload interaction, open the **Interaction Details**, click **Settings**, and specify the following in the **File Upload Settings**:
    - **Accept File Types**: Select the types of files that will be accepted for upload (PDF, JPEG, PNG, DOCx, and so on). You might want to include mention of the acceptable file types in the message that's sent to the consumer, as we've done in the image above.
    - **Success message**: Enter the message that’s displayed to the consumer if the upload is successful.
    - **In progress message**: Enter the message that’s displayed to the consumer while the upload is in progress.
4. Finish configuring the interaction as desired, and click **Save**.
    
{: .important}
The steps above complete the process of adding the File Upload interaction, but it only handles upload of the file to the LiveEngage environment. Now you need to immediately follow with an Integration interaction that handles passing the file to your external system.

<img class="fancyimage" style="width:550px" src="img/ConvoBuilder/integrations_fileUpload3.png">

For details on adding the Integration interaction, see the section farther [above](conversation-builder-interactions-integrations.html#integration-interactions). And for details on creating the integration itself, which must be of type File, see [File Integrations](conversation-builder-integrations-file-integrations.html).