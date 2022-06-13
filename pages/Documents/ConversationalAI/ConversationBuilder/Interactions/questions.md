---
pagename: Questions
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-questions.html
indicator: both
---

Questions present information to the user (a question that expects a reply of some kind, a list of things to pick from, etc.), and they expect and wait for a user response before executing the next action.

With a question, you can take the user’s response, evaluate it against a condition (i.e., does it match a pattern, an intent, a regular expression, or an exact value?), and then act accordingly. For example, if you ask the user for a 7-digit account number, you’ll likely want to perform a check that the user entered exactly 7 numbers. If the user did, you can then safely pass that value into an API call or perform some other action with it. For some practice at this, try the [Intents tutorial](tutorials-guides-getting-started-with-bot-building-intents.html). (You’ll need to complete the [Dialogs and Patterns tutorial](tutorials-guides-getting-started-with-bot-building-dialogs-patterns.html) first, as they build on one another.)

User responses to question interactions can be saved in [variables](conversation-builder-variables-slots.html), making them available for future use.

{: .important}
For information on which question interactions are supported in which channels, see [here](conversation-builder-interactions-interaction-support.html).

### Multiple choice questions
Multiple choice questions let the consumer select an answer from a list of choices.

<img style="width:400px" src="img/ConvoBuilder/questions_mcq1.png">

One powerful feature of multiple choice questions is that the bot can be configured to respond to answers not appearing in the list through the use of [entities](intent-manager-key-terms-concepts.html#entities).

<img style="width:650px" src="img/ConvoBuilder/questions_mcq3.png">

#### Question text

Enter the question to send. The maximum character length is 255.

#### Choices

Enter the answer choices. The number of choices depends on the channel, so check the limitations for the channels in use. (For example, Facebook restricts this to three options.) For each choice, 20 characters or less is recommended.

The user can either enter or select the answers. 

#### Interaction settings

Configure the following settings in the [interaction's settings](conversation-builder-interactions-configuration-settings.html):

- **Display Choices as**: Select whether you want to display the choices as buttons (shown above) or quick reply “chips” (shown below).

<img style="width:350px" src="img/ConvoBuilder/questions_mcq2.png">

- **Choices per Row**: This setting is available when you select to display the choices as quick reply "chips" (in **Display Choices as**). Select the number of answer choices to present in a single row. Example: You have 8 answer choices, and you select "3" here. So, 3 choices will be presented in the first row, 3 in the second row, and the remaining 2 in the last row. Note that a maximum of 3 rows are used; the third row includes all the answer choices not included in the first 2 rows.

- **Text Only Fallback > List Style**: When you deploy your bot to a channel that doesn't support rich content formatting (i.e., SMS, Apple Messages for Business or WhatsApp), a multiple choice question is automatically sent as plain text. Use this setting to select the list style (1. 2. 3. 4. or a. b. c. d.) to use for channels that support only plain text.

- **Enable Indentation**: Affects the display of options in text-only channels. Enable this to indent (with one tab space) the multiple choice options under the question. Disable this to align them under the question without an indent.

#### Notes on Multiple Choice questions

- For the number of buttons that you can add, check the limitations for the channels in use. (For example, while Conversational Cloud doesn't have a limitation here, Facebook's limit is 3 buttons.)

### Text questions

Text questions expect and wait for a text-based response from the consumer.

<img style="width:375px" src="img/ConvoBuilder/questions_text1.png">

With text questions, it’s recommended that you include an example of an expected response, like is done in our example above. This helps to increase the likelihood of a valid response.

<img style="width:650px" src="img/ConvoBuilder/questions_text2.png">

#### Question text

Enter the question to send. The maximum character length is 255.

### Structured questions

Most conversations involve plain text like what you are reading now. However, a structured question lets you send content (images, buttons, maps, quick replies, etc.) to a consumer in a richer, interactive, and structured format.

![Carousel](img/carousel.gif)

Like with any question, a structured question expects and waits for the user response before executing the next action.

{: .important}
Structured questions aren't supported on all channels; see [here](conversation-builder-interactions-interaction-support.html) for a listing of support. Be sure to verify the channel's support before designing your bot. For example, Facebook supports structured questions, but Apple Messages for Business doesn't. Apple Messages for Business offers its list picker instead.

<img style="width:600px" src="img/ConvoBuilder/questions_structured2.png">

#### Tile settings

<img style="width:400px" src="img/ConvoBuilder/questions_structured.png">

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media). | Optional | https://www.mysite.com/images/headphones.jpg |
| ADD IMAGE > Item URL  | The URL of the resource to load when the image is clicked. | Optional | https://www.mysite.com | 
| Title | The title of the message. Enter a maximum of 255 characters, but be aware that the actual maximum length depends on the channel and could be shorter. Check the limitations for the channels in use. | Required | Headphones - It’s our annual, fall sale! |
| Subtitle | The subtitle of the message. Enter a maximum of 255 characters, but be aware that the actual maximum length depends on the channel and could be shorter. Check the limitations for the channels in use. | Optional | And we hope that’s music to your ears. |

#### Button settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Button Label | The button text to be displayed. Conversational Cloud allows for up to 128 characters, but channel-specific restrictions do exist, so the actual maximum could be shorter. (For example, Facebook only allows for up to 20 characters.) | Required | 10% off all headphones |
| Action Type  | If you want the button to be a link that takes the consumer to a URL, select **Web URL**. Then enter the URL in the **Callback** field.<br><br>If you want to use the button to send back to the bot a value as the consumer's message, select **Postback** here. Then enter the message to send back as the payload in the **Callback** field.<br><br>**Postback for Bookmark**, **Phone number**, and **Share** are legacy features that are no longer supported. | Required  | Web URL |
| Webview | This is a legacy feature that's no longer supported. | Not applicable | Not applicable |
| Target | Applies when the Action Type equals “Web URL." Select whether to open the URL in a new window, the current window, or a slideout window. The slideout window "slides out" from the side of the conversation window, which can be an attractive and tightly integrated experience. **Note**: The Slideout option is supported for Web messaging. Additionally, the target URL must be iFrame compatible. Many companies' websites (Google for instance) employ code to prevent their inclusion in an iFrame, so this must be tested. | Required | New Window |
| Callback | Enter the data to send back to the bot. <br><br>If you select "Web URL" for the **Action Type**, this value should be a URL.<br><br>If you select "Postback" for the **Action Type**, this value  should be whatever you want to send back to the bot as the consumer's message. You can enter the value for the button label or a different value (e.g., the number "5" instead of the word "Excellent"). Entering a different value works depending on the channel in use (e.g., there's support in Facebook but not in SMS). Make sure to test and verify on the device or in the application. Entering the same value for both the button label and the callback value will always work. <br><br>If required for your use case, you can use the [enableButtonTextOnPostback](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#enablebuttontextonpostback) custom configuration field in the bot’s agent connector. If you set the field to true, the selected button’s label, not the button’s callback value, is displayed to the consumer as their selected choice. Otherwise, the button’s callback value is displayed instead. | Required | https://www.mysite.com/coupons/headphonesCoupon.html |

#### Populating a Structured question dynamically

You can populate the tiles with static information, or they can be dynamically populated during run time, for example, using data received from an API integration. For more information, see [here](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields).

<img style="width:300px" src="img/ConvoBuilder/questions_structured3.png">

#### Button clicks: Sending metadata back to the bot

In a Structured question, you can set metadata in a button’s configuration. During a conversation, when the consumer clicks the button, that metadata is sent back to the bot in the conversation’s metadata. You can retrieve the metadata using the [getMetadata](conversation-builder-scripting-functions-get-set-session-data.html#get-conversation-metadata) scripting function in the **Process User Response** code of the question.

There are many use cases where this capability can be useful. Here are a few:

* Scenario 1: You have a bot that includes a Structured question that gets populated with products the consumer is interested in. For each product, there’s a “Details on this” button that links to the product’s details page on your website. You add metadata to this button so that, when the consumer clicks the button, the product’s ID is sent back to the bot in the conversation metadata. The bot then retrieves and uses the product ID to determine the next action in the flow. You also track the event for analytics purposes (by [logging a custom event](conversation-builder-best-practices-custom-event-logging.html) that can later be viewed in Bot Analytics, or by posting the data to your external system via an API integration).
* Scenario 2: You have a bot in Facebook that includes a Button question with a button to start direct messaging with an agent. You add metadata to this button so that, when the consumer clicks the button, info on that social messaging event is sent back to the bot in the conversation metadata. The bot then retrieves the event info and uses it to determine the next action in the flow, for example, closure of the bot conversation. Note that Button questions are discussed in-depth elsewhere on this page.

**To send metadata back to the bot when the consumer clicks a button**

1. Add and configure the button’s settings as required. For help with this, see the relevant section that’s farther above on this page.

2. Switch to the **Metadata** tab, and click **Add Metadata**.

    <img style="width:500px" src="img/ConvoBuilder/questions_structured_metadata1.png">

3. Select the type of metadata to add; you can add any of the types described [here](messaging-agent-sdk-conversation-metadata-guide.html#available-metadata). In the Conversation Builder UI, the available choices are named by metadata type.

    <img style="width:500px" src="img/ConvoBuilder/questions_structured_metadata2.png">

4. Enter the JSON. As a help, some default JSON is provided to illustrate the proper format to use.

    <img style="width:500px" src="img/ConvoBuilder/questions_structured_metadata3.png">

    When writing the JSON, ensure it’s well-formed and conforms to the format discussed [here](messaging-agent-sdk-conversation-metadata-guide.html#available-metadata). You can reference botContext variables as well as the custom data fields in API integrations. In our example below, we’re referencing the latter.

    <img style="width:500px" src="img/ConvoBuilder/questions_structured_metadata4.png">

5. Click **Save**.

6. Add more metadata objects if desired. You can add as many as you need. Typically, each is of a unique type, and there are just a few.

##### Example
As an example, let’s break down one of the aforementioned use cases with some more detail.

Assume you have a bot that includes a Structured question that gets populated with products the consumer is interested in. This is accomplished with an API call to your system for the data. In your API integration, you capture the response data in a number of custom data fields:

<img style="width:800px" src="img/ConvoBuilder/questions_structured_metadata5.png">

Back in the dialog, the Structured question looks like this below. For each product, there’s a “Details on this” button that links to the product’s details page on your website.

<img style="width:700px" src="img/ConvoBuilder/questions_structured_metadata6.png">

On the **Settings** tab, the button is configured to use the “Web URL” action type, so the callback is set to the URL to which to take the consumer.

<img style="width:500px" src="img/ConvoBuilder/questions_structured_metadata7.png">

On the **Metadata** tab, there’s one metadata object added: “ExternalId.” This is used to track the consumer’s selection of the “Details on this” button.

<img style="width:500px" src="img/ConvoBuilder/questions_structured_metadata8.png">

The metadata object is configured so that, when the consumer clicks the button, the product’s ID is sent back to the bot in the conversation metadata.

<img style="width:500px" src="img/ConvoBuilder/questions_structured_metadata9.png">

Finally, in the **Process User Response** code of the interaction, the bot retrieves and uses the product ID to log a custom event to track the click event, and to determine the next action in the flow. The code looks like this:

```javascript
var metadata = botContext.getMetadata(“ExternalId”);

if (metadata && metadata.id) {
    botContext.logCustomEvent(metadata.id, 'Selected Product');
    botContext.setTriggerNextMessage('Offer Related Items');
}
```

{: .important} 
Need help understanding custom data field in API integrations? See [here](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields). Wondering when the **Process User Response** code gets invoked in the interaction? See [here](conversation-builder-interactions-interaction-basics.html#order-of-operations).

#### Notes on Structured questions

- You can include a maximum of 10 tiles.
- For the number of buttons that you can add, check the limitations for the channels in use. (For example, while Conversational Cloud doesn't have a limitation here, Facebook's limit is 3 buttons.)
- When multiple items are present in the interaction, they can be displayed vertically--which is the default--or horizontally. To add support for horizontal display, add the "tileDisplay" [custom configuration field](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#custom-configuration-fields) with a value of "horizontal" when you [deploy](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html) your bot. Setting tileDisplay to horizontal can be useful for resolving formatting issues that can occur on specific channels.
- Formatting of text (bold, italics, etc.) isn't supported.


### Button questions

A button question lets you ask a question that expects a simple, short reply and present the consumer with button choices.

<img style="width:400px" src="img/ConvoBuilder/questions_button1.png">

Clicking a button can perform an action defined by you as the bot developer. For example, if the consumer were to click “Sure!” above, they could be taken to the URL for your feedback form.

<img style="width:600px" src="img/ConvoBuilder/questions_button2.png">

#### Question text

Enter the question to send.

#### Button settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Button Label | The button text to be displayed. Conversational Cloud allows for up to 128 characters, but channel-specific restrictions do exist, so the actual maximum could be shorter. (For example, Facebook only allows for up to 20 characters.) | Required | Sure! |
| Action Type  | If you want the button to be a link that takes the consumer to a URL, select **Web URL**. Then enter the URL in the **Callback** field.<br><br>If you want to use the button to send back to the bot a value as the consumer's message, select **Postback** here. Then enter the message to send back as the payload in the **Callback** field.<br><br>**Postback for Bookmark**, **Phone number**, and **Share** are legacy features that are no longer supported. | Required  | Web URL |
| Webview | This is a legacy feature that's no longer supported. | Not applicable | Not applicable |
| Target | Applies when the Action Type equals “Web URL." Select whether to open the URL in a new window, the current window, or a slideout window. The slideout window "slides out" from the side of the conversation window, which can be an attractive and tightly integrated experience. **Note**: The Slideout option is supported for Web messaging. Additionally, the target URL must be iFrame compatible. Many companies' websites (Google for instance) employ code to prevent their inclusion in an iFrame, so this must be tested. | Required | New Window |
| Callback | Enter the data to send back to the bot.<br><br>If you select "Web URL" for the **Action Type**, this value should be a URL.<br><br>If you select "Postback" for the **Action Type**, this value should be whatever you want to send back to the bot as the consumer's message. You can enter the value for the button label or a different value (e.g., the number "5" instead of the word "Excellent"). Entering a different value works depending on the channel in use (e.g., there's support in Facebook but not in SMS). Make sure to test and verify on the device or in the application. Entering the same value for both the button label and the callback value will always work. <br><br>If required for your use case, you can use the [enableButtonTextOnPostback](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#enablebuttontextonpostback) custom configuration field in the bot’s agent connector. If you set the field to true, the selected button’s label, not the button’s callback value, is displayed to the consumer as their selected choice. Otherwise, the button’s callback value is displayed instead. | Required | https://www.surveymonkey.com/mysurvey.html |

#### Button clicks: Sending metadata back to the bot
In a Button question, you can set metadata in a button’s configuration. During a conversation, when the consumer clicks the button, that metadata is sent back to the bot in the conversation’s metadata. You can retrieve the metadata using the [getMetadata](conversation-builder-scripting-functions-get-set-session-data.html#get-conversation-metadata) scripting function in the **Process User Response** code of the question. For more on this, see the discussion in the section on Structured questions on this page. The info is the same, and the same guidelines and rules apply.

### Quick Reply questions

A quick reply question lets you ask a question that expects a simple, short reply and present the consumer with choices from which to select. The response choices appear as “chips” beneath the question.

<img style="width:400px" src="img/ConvoBuilder/questions_quickReply1.png">

And the chips disappear once the consumer selects one:

<img style="width:400px" src="img/ConvoBuilder/questions_quickReply2.png">

Details vary by channel. For example, Apple Messages for Business does not support Quick Reply, but other channels do, and each behaves slightly differently. As one example, in Facebook Messenger, a Quick Reply question can have a maximum of 13 options. Consult the channel-specific documentation that's discussed [here](conversation-builder-interactions-interaction-basics.html#general-guidelines-and-best-practices).

<img style="width:600px" src="img/ConvoBuilder/questions_quickReply3.png">

#### Question text

Enter the question to send.

#### Interaction settings

Configure the following setting in the [interaction's settings](conversation-builder-interactions-configuration-settings.html):

- **Choices per Row**: Select the number of answer choices to present in a single row. Example: You have 8 answer choices, and you select "3" here. So, 3 choices will be presented in the first row, 3 in the second row, and the remaining 2 in the last row. Note that a maximum of 3 rows are used; the third row includes all the answer choices not included in the first 2 rows.

#### Quick Reply settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Title | The label to be displayed. | Required | Awesome! |
| Type  | Always select "Text." <br><br>The "Location" value currently isn't supported. | Required  | Text |
| Payload | Enter the data to send back to the bot.<br><br>If you specify a postback value here, it is sent back to the bot instead of the button label. However, be aware that this depends on the channel in use. Make sure to test and verify on the device or in the application, as use of this field works in some channels (like Facebook) but not in others (like SMS). Entering the same value for both the button label and the postback value will always work. | Optional | Awesome |
| Image URL | Use this field to specify a small image to be displayed to the left of the Quick Reply title. Typically, this setting isn't used unless the image is an emoji or something of a similar nature. | Optional | https://www.mysite.com/images/emoji_smile.jpg |


### Apple List Picker

**For Apple Messages for Business only.**

If your business uses Apple’s Messages for Business service to chat with consumers via the Messages app, you can use the List Picker question interaction to display a list of items (along with information about those items), so the consumer can reply by selecting one or more. Like with any question interaction, a list picker expects and waits for the user response before executing the next action.

You might want to include a list picker so consumers can select from a list of:

- Products in your catalog
- Food items on your menu
- Navigational menu items
- And more

You can create a list picker that displays a static (fixed) list of items that you specify when you create the picker. Or, you can configure the picker so that it gets populated with items dynamically at runtime, passing in values from an earlier API integration call to an external system.

(The interaction has been developed per Apple's List Picker specifications, which you can find [here](https://developer.apple.com/documentation/businesschatapi/messages_sent/interactive_messages/list_picker).)

<img style="width:600px" src="img/ConvoBuilder/questions_listPicker5.png">

<img style="width:600px" src="img/ConvoBuilder/questions_listPicker6.png">

#### Response Message settings

The Response Message settings define how to initially display the list picker to the consumer:

<img style="width:400px" src="img/ConvoBuilder/questions_listPicker1.png">

Response Message settings also provide the text in the header of the actual list picker.

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media). | Optional | https://www.mysite.com/images/flowers.jpg |
| ADD IMAGE > Image Style | The size of the image, either Icon (smallest), Small, or Large. | Optional | Icon | 
| Response Message Title | The title of the message. The maximum length is 85 characters; Apple recommends 30 characters. | Required | Beautiful bouquets |
| Response Message Subtitle | The subtitle of the message. The maximum length is 400 characters; Apple recommends 85 characters. | Optional | Select your favorite |

#### Item settings

Section and item settings define how to display the sections and individual items in the list picker.

<img style="width:400px" src="img/ConvoBuilder/questions_listPicker2.png">

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Section Title | The title of the section. | Required | Birthdays |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media). | Optional | https://www.mysite.com/images/dahlias.jpg |
| ADD IMAGE > Image Style | Select "Default." Only this value is supported. | Optional | Default |
| ADD IMAGE > Identifier  | A unique identifier for the item; this is system-generated. | Not applicable | 32957836-2f95-1e8d-ce4e-aa95e8f844a2 |
| Item Title | The item’s title. | Required | Mixed dahlias |
| Item Subtitle | The item’s subtitle. | Optional | Bright and cheery! |

#### Reply Message settings

The Reply Message settings define how to display the consumer’s reply after the consumer picks one or more items from the list.

<img style="width:300px" src="img/ConvoBuilder/questions_listPicker3.png">

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media). | Optional | https://www.mysite.com/images/flowers.jpg |
| ADD IMAGE > Image Style | The size of the image, either Icon (smallest), Small, or Large. | Optional | Large |
| Reply Message Title | The title of the message. The maximum length is 85 characters; Apple recommends 30 characters. |  Required. Although required, this field is replaced at run time with the title of the user's selection. | Your selection |
| Reply Message Subtitle | The subtitle of the message. The maximum length is 400 characters; Apple recommends 85 characters. | Optional | A great choice! |

#### Interaction Details - Settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Enable Multiple Selection | Enable this setting to let the consumer select multiple items in the list picker. This field is disabled by default. | Optional | \[On\] |

#### Populating a list picker dynamically

Values for many of the settings above can be static, but they can also be populated dynamically at runtime. For example, if the list picker is for selecting items from a product catalog, you’ll likely want to retrieve and use the item information from the catalog. For more information, see [here](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields).

#### Scrolling and sorting

List pickers scroll vertically, and this can’t be changed.

If you’re hard-coding the sections and items, their display order is as you configure it. Alternatively, if they are populated dynamically at runtime, sorting could be done at the API level.

#### The user response to a list picker

Once a user makes their selection in the list picker, the reply is sent back to the bot as "User Selected: " plus the item title. If the user has selected multiple items, they are concatenated with "and."

<img style="width:350px" src="img/ConvoBuilder/questions_listPicker4.png">


### Apple Time Picker
**For Apple Messages for Business only.** 

If your business uses Apple’s Messages for Business service to chat with consumers via the Messages app, you can use the Time Picker question interaction to display an interactive time picker, so the consumer can schedule a meeting or an appointment. (The interaction has been developed per Apple's Time Picker specifications, which you can find [here](https://developer.apple.com/documentation/businesschatapi/messages_sent/interactive_messages/time_picker).)

You can create a time picker that displays a static (fixed) list of time slots that you specify when you create the picker. Or, you can configure the picker so that it gets populated with time slots dynamically at runtime, passing in values from an earlier API integration call to an external system.

<img style="width:600px" src="img/ConvoBuilder/questions_timePicker1.png">

<img style="width:600px" src="img/ConvoBuilder/questions_timePicker12.png">

#### Response Message settings

The Response Message settings define how to display the time picker that’s initially presented to the consumer.

<img style="width:450px" src="img/ConvoBuilder/questions_timePicker2.png">

Response Message settings also provide the text in the header of the actual time picker.

| Setting | Description | Required or Optional | Example |
|---|---|---|---|
| ADD IMAGE > Image URL | The HTTPS URL of the image file to display. The domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media). The file format must be JPG or PNG. The image size is limited to 0.5 MB. | Optional | https://www.mysite/images/clock.jpg |
| ADD IMAGE > Image Style | The size of the image to display, either Icon (smallest), Small, or Large. The default value is Icon. | Optional | Icon |
| Response Message Title | The title of the message. The maximum length is 85 characters; Apple recommends 30 characters.  | Required  | Meet with our technician |
| Response Message Subtitle | The subtitle of the message. The maximum length is 400 characters; Apple recommends 85 characters.  | Optional | Please select your preferred time |

#### Event settings

| Setting  | Description  | Required or Optional | Example  |
|---|---|---|---|
| Event Title  | The title of the calendar meeting.   | Optional  | Technician Visit |
| Event Identifier   | An ID for the event. If you don’t set this, it’s set by the system since it's required by Apple. LivePerson recommends that you set this. If you're populating the time picker with data received from an API call, you can set this with an ID provided in that API result. | Required |   event123 |
| Timezone offset (minutes from GMT) | The number of minutes from GMT, specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location.<br><br>**The offset must be expressed in positive numbers.**<br><br>If the offset is positive, use the formula: (offset in hours * 60).<br><br>If the offset is negative, use the formula: ((24 - offset in hours) * 60).| Optional  | In Central European Summer Time, Mannheim, Germany is GMT+2, which is a positive offset, so 2 * 60 = **120**. <br><br> In Eastern Daylight Time, New York, New York is GMT-4, which is a negative offset, so ((24 - 4) * 60) = **1200**. |

#### Location settings

Location settings support features that play a role after the consumer has selected a time slot and sent the reply. The consumer can tap the reply message bubble to view location information, if available. The consumer can also tap *Add to Calendar* or *Get Directions*. The location name supports the former (*Add to Calendar*); the latitude, the longitude, and the radius support the latter (*Get Directions*).

| Setting  | Description  | Required or Optional | Example  |
|---|---|---|---|
| Location Name | The location’s name; this is shown in the consumer’s calendar after the appointment is added. | Optional | Building One |
| Latitude | The location’s latitude (a numeric double value). | Optional | 49.4872955 |
| Longitude | The location’s longitude (a numeric double value). | Optional | 8.4682869 |
| Radius | The location’s radius in meters (a numeric double value). This setting is ignored if Latitude and Longitude are missing or empty. | Optional | 10 |

#### Time slot settings

<img style="width:250px" src="img/ConvoBuilder/questions_timePicker3.png">

Use the fields below to specify a *static* start date and start time:

<img style="width:350px" src="img/ConvoBuilder/questions_timePicker9.png">

Or, use the field below to specify a *variable* start date and start time:

<img style="width:250px" src="img/ConvoBuilder/questions_timePicker10.png">

You can switch between the two options using the blue link (shown above) beneath the fields. See below for more details.

| Setting  | Description  | Required or Optional | Example  |
|---|---|---|---|
| Start Date  | The date **in GMT** on which the event starts. Used when specifying a *static* date. | Required | 10/03/2020 |
| Start Time  | The time **in GMT** on which the event starts. Used when specifying a *static* time. <br><br>As discussed earlier, the **Timezone offset** determines whether the start time is shown to the customer in a specific time zone or in the customer's time zone. | Required | 1:00 PM |
| Variable Date & Time | The date and time **in GMT** on which the event starts. Used when specifying a *variable* date and time. For more on this (e.g., the format required), see [Populating a time picker dynamically](conversation-builder-interactions-questions.html#populating-a-time-picker-dynamically) below. <br><br>As discussed earlier, the **Timezone offset** determines whether the start time is shown to the customer in a specific time zone or in the customer's time zone. | Required | {Appointment.start} |
| Duration | The duration in minutes of the event. | Required | 30 |
| Timeslot ID | An ID for the time slot. If you don’t set this, it’s set by the system since it's required by Apple. LivePerson recommends that you set this. If you're populating the time picker with data received from an API call, you can set this with an ID provided in that API result. | Required |   time123 |

<img style="width:600px" src="img/ConvoBuilder/questions_timePicker7.png">

#### Populating a time picker dynamically

As mentioned earlier, a time picker can be populated dynamically during run time using variable data received from an [API integration](conversation-builder-integrations-api-integrations.html). As an example, in the image below, we're retrieving a list of appointment dates and times that are returned from an API integration named "Appointment." In the integration, the returned data is stored in a custom data field named "start."

<img style="width:600px" src="img/ConvoBuilder/questions_timePicker11.png">

We can then reference this custom data field in the **Variable Date & Time** field in the time picker, using the following notation (i.e., with `{apiName.variableName}` as discussed [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions)):

<img style="width:300px" src="img/ConvoBuilder/questions_timePicker10.png">

During run time, the time picker iterates over the list and populates the list of start times.

Since the API response defines the date and time together in the received payload, you don't need to specify them separately in two fields in the time picker. However, the data must be in the following format:

`2020-04-30T13:30+0000`

Additionally, all start dates and times must be defined **in GMT**, so depending on the data received from the API call, you might need to do some preprocessing to convert the data.

The Duration field can't be populated dynamically; you must manually specify this value.

{: .important}
For more on processing API results with custom data fields, see [here](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields).

#### Reply Message settings

The Reply Message settings define how to display the consumer’s reply after the consumer picks a time slot.

<img style="width:400px" src="img/ConvoBuilder/questions_timePicker4.png">

| Setting | Description | Required or Optional | Example |
|---|---|---|---|
| ADD IMAGE > Image URL | The HTTPS URL of the image file to display. The domain in the URL must be [whitelisted](conversation-builder-networking-security.html#whitelisting-rich-media). The file format must be JPG or PNG. The image size is limited to 0.5 MB. | Optional | https://www.mysite/images/clock.jpg |
| ADD IMAGE > Image Style | The size of the image to display, either Icon (smallest), Small, or Large. The default value is Icon. | Optional | Icon |
| Reply Message Title | Not used; this is replaced with the selected time.  | Not applicable  | Not applicable |
| Reply Message Subtitle | The subtitle of the message. The maximum length is 400 characters; Apple recommends 85 characters.  | Optional | See you then! |

#### The user response to a time picker

Once a user makes their selection in the time picker, the reply is sent back to the bot as "For" plus the event title, followed by "User Selected: " plus the date and time expressed in GMT.

<img style="width:350px" src="img/ConvoBuilder/questions_timePicker5.png">
