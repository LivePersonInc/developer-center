STATEMENTS

Statement interactions simply display information and then execute the next action. They don’t expect or wait for a user response.

{: .important}
See [Interaction Basics](conversation-builder-interactions-interaction-basics.html) for important information on whitelisting, guidelines on how to approach channel-specific limitations, and more.

### Text statements
Text statements display the text provided, for example:

<img style="width:300px" src="img/ConvoBuilder/statements_text.png">

Text statements can display dynamic values through the use of variables; for help with using variables, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

### Image statements
Image statements display a single image. A thumbnail is initially presented, which can be clicked to view the larger image.

### Audio statements
Audio statements currently aren't supported due to a limitation regarding the chat window.

### Video statements
Video statements currently aren't supported, so use a text statement that includes the video URL as a link.

### Apple Rich Link statements
**For Apple Business Chat only.**

If your business uses Apple’s Business Chat service to chat with consumers via the Messages app, you can use this type of interaction to send a richer, more interactive and structured message, for example:

<img style="width:450px" src="img/ConvoBuilder/statements_richLink.png">

Apple rich links let consumers directly preview an inline image or video. If you were to use a plain URL for an inline image or video sent through Apple Business Chat, the consumer would have to tap the “Tap to Load Preview” message to load the content. But with an Apple rich link, the content is displayed immediately. (The interaction has been developed per Apple's Rich Link specifications, which you can find [here](https://developer.apple.com/documentation/businesschatapi/messages_sent/sending_rich_link_messages).)

<img style="width:375px" src="img/ConvoBuilder/statements_richLink2.png">

#### Rich link settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- | 
| ADD IMAGE OR VIDEO > Image URL | For an image, this is the URL for the image file. <br><br>For a video, this is the URL for the background image to display beneath the play button/link. Consider using a complementary image from the video itself. <br><br>The domain in the URL must be [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting).<br><br>Keep images fairly small in size \(MB\) and dimension, so they load quickly. | Required | https://www\.mysite\.com/images/myImage\.jpg |
| ADD IMAGE OR VIDEO > URL | For an image, this is the item/business URL to load when the image is clicked. For a video, this is the URL for the video file to play when clicked. | Required | https://www\.mysite\.com/videos/myVideo\.mp4 |
| Title | The title of the rich link. | Required | Flower arranging 101 |

#### Populating an Apple Rich Link statement dynamically

You can populate the statement with static information, or it can be populated dynamically during run time, for example, using data received from an [API integration](conversation-builder-integrations-api-integrations.html).

<img style="width:600px" src="img/ConvoBuilder/statements_richLink3.png">

#### Notes on Apple Rich Link statements
- While LiveEngage supports formatting in Apple rich links, Conversation Builder currently doesn't.

QUESTIONS

Questions present information to the user---a question that expects a reply of some kind, a list of things to pick from, etc.---and they expect and wait for a user response before executing the next action.

With a question, you can take the user’s response, evaluate it against a condition (i.e., does it match a pattern, an intent, a regular expression, or an exact value?), and then act accordingly. For example, if you ask the user for a 7-digit account number, you’ll likely want to perform a check that the user entered exactly 7 numbers. If the user did, you can then safely pass that value into an API call or perform some other action with it. For some practice at this, try the [Intents tutorial](conversation-builder-getting-started-2-intents.html). (You’ll need to complete [Dialogs and Patterns tutorial](conversation-builder-getting-started-1-dialogs-and-patterns.html) first, as they build on one another.)

Question text and answers can display dynamic values through the use of variables; for help with using variables, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

{: .important}
See [Interaction Basics](conversation-builder-interactions-interaction-basics.html) for important information on whitelisting, guidelines on how to approach channel-specific limitations, and more.

### Sample user answers
Many question types provide a field for entering an example of a user's answer to the question.

<img style="width:700px" src="img/ConvoBuilder/questions_sampleUserAnswer.png">

There is no functionality tied to this field. It's meant to serve as a display-only aid to the bot developer during bot development within Conversation Builder.

### Multiple choice questions
Multiple choice questions let the consumer select an answer from a list of choices.

<img style="width:400px" src="img/ConvoBuilder/questions_mcq1.png">

One powerful feature of multiple choice questions is that the bot can be configured to respond to answers not appearing in the list through the use of [entities](intent-builder-entities.html).

**Question text**

Enter the question to send. The maximum character length is 255.

**Choices**

Enter the answer choices. The number of choices depends on the channel, so check the limitations for the channels in use. (For example, Facebook restricts this to three options.) For each choice, 20 characters or less is recommended.

The user can either enter or select the answers. 

**Interaction details - settings**

Configure the following settings in the Interaction Details dialog box:
- **Display choice as**: Select whether you want to display the choices as buttons (shown above) or quick reply “chips” (shown below).

<img style="width:300px" src="img/ConvoBuilder/questions_mcq2.png">

- **Text Only Fallback > List Style**: Select the list style (1. 2. 3. 4. or a. b. c. d.) to use for channels that support only plain text. In our example, the user can select "Sandals," enter "Sandals," or enter "1."

### Text questions

Text questions expect and wait for a text-based response from the consumer.

<img style="width:325px" src="img/ConvoBuilder/questions_text.png">

With text questions, it’s recommended that you include an example of an expected response, like is done in our example above. This helps to increase the likelihood of a valid response.

**Question text**

Enter the question to send. The maximum character length is 255.

### Button questions

A button question lets you ask a question that expects a simple, short reply and present the consumer with button choices.

<img style="width:400px" src="img/ConvoBuilder/questions_button.png">

Clicking a button can perform an action. For example, if the consumer were to click “Sure!” above, they could be taken to the URL for your feedback form.

**Question text**

Enter the question to send.

**Button settings**

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Button Label | The button text to be displayed. LiveEngage allows for up to 128 characters, but channel-specific restrictions do exist, so the actual maximum could be shorter. (For example, Facebook only allows for up to 20 characters.) | Required | Sure! |
| Action Type  | If you want the button to be a link that takes the consumer somewhere else, select **Web URL**.<br><br>If you want to use the button to post back a different value other than the button label's value (for example, to post back the number "5" instead of the word "excellent"), select **Postback** (and then enter the data to post (the payload) in the **Callback** field).<br><br>**Postback for Bookmark**, **Phone number**, and **Share** are legacy features that are no longer in use. | Required  | Web URL |
| Webview | This is a legacy feature that's no longer in use. | Not applicable | Not applicable |
| Target | Applies when the Action Type equals “Web URL." Select whether to open the URL in the current window or a new window. | Required | New Window |
| Callback | Enter the data to send back to the bot.<br><br>If you specify a postback value here, in most channels it is sent back to the bot instead of the button label. However, be aware that this depends on the channel in use. Entering the same value for both the button label and the postback value will always work. | Optional | https://www.surveymonkey.com/mysurvey.html |

### Quick Reply questions

A quick reply question lets you ask a question that expects a simple, short reply and present the consumer with choices from which to select. The response choices appear as “chips” beneath the question.

<img style="width:400px" src="img/ConvoBuilder/questions_quickReply1.png">

And the chips disappear once the consumer selects one:

<img style="width:400px" src="img/ConvoBuilder/questions_quickReply2.png">

Details vary by channel. For example, Apple Business Chat does not support Quick Reply, but other channels do, and each behaves slightly differently. Consult the channel-specific documentation that's discussed [here](conversation-builder-interactions-interaction-basics.html#general-guidelines-and-best-practices).

**Question settings**

Enter the question to send. 

**Quick Reply settings**

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Title | The label to be displayed. | Required | Awesome! |
| Type  | Always select "Text." <br><br>The "Location" value currently isn't supported. | Required  | Text |
| Payload | Enter the data to send back to the bot.<br><br>If you specify a postback value here, in most channels it is sent back to the bot instead of the button label. However, be aware that this depends on the channel in use. Entering the same value for both the button label and the postback value will always work. | Optional | Awesome |
| Image URL | Use this field to specify a small image to be displayed to the left of the Quick Reply title. Typically, this setting isn't used unless the image is an emoji or something of a similar nature. | Optional | https://www.mysite.com/images/emoji_smile.jpg |

### Apple List Picker questions

**For Apple Business Chat only.**

If your business uses Apple’s Business Chat service to chat with consumers via the Messages app, you can use the List Picker question interaction to display a list of items (along with information about those items), so the consumer can reply by selecting one or more. Like with any question interaction, a list picker expect and waits for the user response before executing the next action.

You might want to include a list picker so consumers can select from a list of:

- Products in your catalog
- Food items on your menu
- Navigational menu items
- And more

You can create a list picker that displays a static (fixed) list of items that you specify when you create the picker. Or, you can configure the picker so that it gets populated with items dynamically at runtime (passing in values from an earlier API integration call to an external system). 

**Response Message settings**

The Response Message settings define how to initially display the list picker to the consumer:

<img style="width:400px" src="img/ConvoBuilder/questions_listPicker1.png">

Response Message settings also provide the text in the header of the actual list picker.

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting). | Optional | https://www.mysite.com/images/headphones.jpg |
| ADD IMAGE > Image URL | The HTTPS URL of the image file to display.  | Optional | https://www.mysite.com/images/flowers.jpg | 
| ADD IMAGE > Image Style | The size of the image, either Icon (smallest), Small, or Large. The default value is Icon. | Optional | Icon | 
| Response Message Title | The title of the message. The maximum length is 85 characters; Apple recommends 30 characters. | Required | Beautiful bouquets |
| Response Message Subtitle | The subtitle of the message. The maximum length is 400 characters; Apple recommends 85 characters. | Optional | Select your favorite |

**Item settings**

Section and item settings define how to display the sections and individual items in the list picker.

<img style="width:400px" src="img/ConvoBuilder/questions_listPicker2.png">

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Section Title | The title of the section. | Required | Birthdays |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting). | Optional | https://www.mysite.com/images/headphones.jpg |
| Item Image  > Image URL  | The HTTPS URL of the image file to display.  | Optional | https://www.mysite.com/images/dahlias.jpg |
| Item Image > Image Style | The style of the image, one of Default, Small, or Large. The default value is Default. | Optional | Small |
| Item Image > Identifier  | A unique identifier for the item; this is system-generated. | Not applicable | 32957836-2f95-1e8d-ce4e-aa95e8f844a2 |
| Item Title | The item’s title. | Required | Mixed dahlias |
| Item Subtitle | The item’s subtitle. | Optional | Bright and cheery! |

{: .important}
Values for many of the settings above can be static, but they can also be populated dynamically at runtime. For example, if the list picker is for selecting items from a product catalog, you’ll likely want to retrieve and use the item information from the catalog.

**Reply Message settings**

The Reply Message settings define how to display the consumer’s reply after the consumer picks one or more items from the list.

<img style="width:300px" src="img/ConvoBuilder/questions_listPicker3.png">

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting). | Optional | https://www.mysite.com/images/headphones.jpg |
| ADD IMAGE > Image URL | The HTTPS URL of the image file to display.  | Optional | https://www.mysite.com/images/flowers.jpg |
| ADD IMAGE > Image Style | The size of the message, either Icon, Small, or Large. | Optional | Large |
| Reply Message Title | The title of the message. The maximum length is 85 characters; Apple recommends 30 characters. |  Required. Although required, this field is replaced at run time with the title of the user's selection. | Your selection |
| Reply Message Subtitle | The subtitle of the message. The maximum length is 400 characters; Apple recommends 85 characters. | Optional | A great choice! |

**Interaction Details - Settings**

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Enable Multiple Selection | Enable this setting to let the consumer select multiple items in the list picker. This field is disabled by default. | Optional | \[On\] |

**Scrolling and sorting**

List pickers scroll vertically, and this can’t be changed.

If you’re hard-coding the sections and items, their display order is as you configure it. Alternatively, if they are populated dynamically at runtime, sorting could be done at the API level.

**The user response to a list picker**

Once a user makes their selection in the list picker, the reply is sent back to the bot as "User Selected: " plus the item title. If the user has selected multiple items, they are concatenated with "and."

<img style="width:350px" src="img/ConvoBuilder/questions_listPicker4.png">

INTEGRATIONS

Integration interactions make programmatic (API) calls to retrieve or post data to external systems and/or to perform actions. They perform their work and then execute the next action.

If an integration retrieves data, that data can be stored in custom fields, so you can use it in subsequent interactions. For information on how to display variable data in interactions, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

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

