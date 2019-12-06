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

{: .important}
It's recommended that you take advantage of the ability to define conditions based on the *result* of the API integration. In our example below, we've added a condition that checks for a "success" result **(1)**, and we've configured the next step to continue to the next interaction **(2)**. So, if our "Balance" integration succeeds, the user's balance is displayed (and then the interaction ends).

 <img style="width:800px" src="img/ConvoBuilder/integrations_api_success.png">

We've likewise added a second condition that checks for a "failure" result **(1)**, and then we've configured the next step to continue to a "fail" interaction **(2)**. In this case, if our "Balance" integration fails, the user is notified that something went wrong.

 <img style="width:800px" src="img/ConvoBuilder/integrations_api_failure.png">

### File Upload interactions

{: .important}
File Upload interactions are available for Web Messaging, Apple Business Chat, and WhatsApp Business. Additionally, the interactions are only available on the LivePerson cloud platform.

Use a File Upload interaction in a dialog when you need the consumer to upload a file that you require. For example, you might have a bot that handles account creation, where the consumer needs to provide an ID card and a document demonstrating proof of a good credit score.

When you use a File Upload interaction, on the consumer side in the messaging window, the consumer can upload the file by dragging and dropping it onto the window. (For an overview of file sharing in LiveEngage, see [here](https://knowledge.liveperson.com/messaging-channels-rich-messaging-agent-file-sharing-overview.html).)

{: .important}
Some setup of your LiveEngage environment is required before using this feature. Please contact your LivePerson account representative to enable this feature.

**To add a File Upload interaction**

1. Select the interaction just above where you want to add the File Upload interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_fileUpload.png"> (File Upload) on the interactions toolbar.
2. In the File Upload interaction, enter the message to send to the consumer.

    <img style="width:550px" src="img/ConvoBuilder/integrations_fileUpload2.png">

    For the file to be uploaded, in step 4, you'll follow this with an integration interaction that invokes a File integration.

3. In the File Upload interaction, open the **Interaction Details**, click **[Settings]((conversation-builder-interactions-details-settings.html))**, and specify the following under **File Upload Settings**:
    - **Accepted File Types**: Select the types of files that you will accept for upload (PDF, JPEG, PNG, DOCx, etc.). If the consumer attempts to upload a file of any other type, the upload will fail, and the Validation Failure message (below) will be sent to the consumer.
    - **Success message**: Enter the message to send to the consumer if the file upload to your external file share is successful. The default value is, "Successfully processed the file."
    - **Failure message**: Enter the message to send to the consumer if the file upload to your external file share is unsuccessful due to an error. The default value is, "Failed to process the file. Please try again."
    - **Validation Failure message**: Enter the message to send to the consumer if the upload fails because the consumer has attempted to upload a file of an invalid type. If you don't supply a message, the following message is sent, "The file type is invalid. Upload one of these types: {a}, {b}, {c}." To help to avoid validation failures, consider mentioning the acceptable file types in the File Upload message, as we've done in the image above.
    - **In progress message**: Enter the message to send to the consumer when the upload begins. The default value is, "Processing the file..."

4. Immediately after the File Upload interaction, add an Integration interaction ( <img style="width:30px" src="img/ConvoBuilder/icon_integration.png"> ). In the interaction, select the File integration to invoke (Integration type = File).
    
    <img style="width:600px" src="img/ConvoBuilder/integrations_fileUpload4.png">

    The File integration handles upload of the file from LiveEngage to your brand's external file share. If you haven't already done so, [create the File integration](conversation-builder-integrations-file-integrations.html) now, so you can complete this step.

5. Finish configuring the interactions and overall dialog as per your requirements. For information on potential customization points, see the customization section farther below.

#### Notes on File Upload interactions

- The uploaded file can’t be over 5 MB.
- File upload is an asynchronous process, so the bot's conversation with the consumer will continue while the upload is in progress. The consumer will only be advised of success or failure, respectively, once the process is completed or has failed.
- The File Upload interaction can't be tested using the Preview window.

#### Customization points

##### Uploading multiple files

If the dialog flow requires that the consumer upload *multiple* files, you'll need to add a File Upload interaction for every file, and each interaction must be followed by an Integration interaction. You can certainly reuse the [File integration](conversation-builder-integrations-file-integrations.html) that gets called, as we've done below.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/integrations_fileUpload3.png">

##### Routing the conversation based on success or failure

If desired, you can route the conversation to a different dialog flow *based on whether the upload succeeded or failed*.

To do this for the success flow, create a dialog that begins with a User Says interaction that matches the pattern `file_upload_success:{your success message}`, for example:

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/integrations_fileUpload7.png">

*Spaces in the message are permitted.*

Then build out the success dialog flow as desired.

You can create a failure dialog similarly. In this case, the User Says interaction must match the pattern: `file_upload_failed:{your message}`.

If your original dialog involves *multiple* uploads--with different success and failure messages for each upload--but you want to handle the uploads with a *single* success dialog (or failure dialog), use the * wildcard to match all messages like this:

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/integrations_fileUpload8.png">