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

Integration interactions make programmatic (API) calls to retrieve or post data to external systems and/or to perform actions. They perform their work and then execute the next action.

If an integration retrieves data, that data can be stored in custom fields, so you can use it in subsequent interactions. For information on how to display variable data in interactions, see here.

Integrations are similar to questions in that you can define conditions that each perform different next actions (based on which condition is met). One common use for this is to check whether the integration call was a success or failure and then to execute a next action that’s appropriate.

When you add an integration interaction, you need to select the API integration that the interaction should invoke. And then you can configure the rest of the interaction details the way you do for any interaction.

<img class="fancyimage" style="width:550px" src="img/ConvoBuilder/integrations_api.png">

### File Upload integrations

Use a File Upload integration in a dialog flow when you need the consumer to upload a file that you require. As examples, you might want to do this when the consumer needs to provide an image of their bill or receipt, an ID card, or a PDF demonstrating proof of a good credit score. 

The following are some important notes:

- The uploaded file can’t be over 5 MB.
- Exchanged content must obey LivePerson’s Terms & Conditions.
- While LivePerson temporarily stores exchanged files for the duration of the conversation, it does not provide for their permanent storage.
- The brand itself is responsible for checking exchanged files for malicious content.

The upload is performed by either dragging and dropping the files into the chat window, or selecting the upload icon and following the prompts.

(consumer-side image)

**To add a File Upload integration**

1. Select the interaction just above where you want to add the integration, and click <img style="width:25px" src="img/ConvoBuilder/icon_fileUpload.png"> on the interactions toolbar.
2. In the interaction, enter the message to send to the consumer.

    <img class="fancyimage" style="width:550px" src="img/ConvoBuilder/integrations_fileUpload2.png">

3. Open the **Interaction Details**, click **Settings**, and specify the following in the **File Upload Settings**:
    - **Accept File Types**: Select the types of files that will be accepted for upload.
    - **Success message**: Enter the message that’s displayed to the consumer if the upload is successful.
    - **In progress message**: Enter the message that’s displayed to the consumer while the upload is in progress.

**Passing the uploaded file to an API integration**

TBA
