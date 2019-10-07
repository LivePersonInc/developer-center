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

A question interaction is interactive and meant to be answered by the user. The different types of question interactions available are:

- **Multiple Choice**. A simple and standard multiple choice question allowing the user to select from a list of predefined answers (although the automation can be configured to respond to answers not appearing in the list through the use of [entities](intent-builder-entities.html)).

- **Text**. A simple textual question.

- **Structured Content**. Most conversations involve plain text like what you are reading now. However, sometimes you might want to send content (images, buttons, maps, quick replies, etc) to a consumer in a richer, more interactive, and more structured format.

- **Button**. An object that allows you to show a simple text question with an associated button action. A click of the button results in an action pre-configured by you (like navigation to a link, for example).

- **Quick Reply**. A question with a series of pre-configured replies that appear as a list of chips at the bottom of the interaction and disappear once the user has selected one.

- **Listpicker**. **For Apple Business Chat only.** This allows the user to make a selection in response to a simple text question from a list of items.

- **Time Picker**. **For Apple Business Chat only.** This allows the user to make a selection in response to a simple text question from a list of event times, like an appointment. See below for more details.

User responses to question interactions can be saved in [variables](conversation-builder-variables-slots.html), making them available for future use.


### Structured questions

Most conversations involve plain text like what you are reading now. However, a structured question lets you send content (images, buttons, maps, quick replies, etc.) to a consumer in a richer, interactive, and structured format.

![Carousel](img/carousel.gif)

Like with any question, a structured question expect and waits for the user response before executing the next action.

{: .important}
Structured questions aren't supported on all channels; be sure to verify the channel's support before designing your bot. For example, Facebook supports the carousel, but Apple Business Chat doesn't. Apple Business Chat offers its list picker instead.

<img style="width:400px" src="img/ConvoBuilder/questions_structured2.png">

#### Tile settings

<img style="width:400px" src="img/ConvoBuilder/questions_structured.png">

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| ADD IMAGE > Image URL | The URL of the image to display. The domain in the URL must be [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting). | Optional | https://www.mysite.com/images/headphones.jpg |
| ADD IMAGE > Item URL  | The URL of the resource to load when the image is clicked. | Optional | https://www.mysite.com | 
| Title | The title of the message. Enter a maximum of 255 characters, but be aware that the actual maximum length depends on the channel and could be shorter. Check the limitations for the channels in use. | Required | Headphones - It’s our annual, fall sale! |
| Subtitle | The subtitle of the message. Enter a maximum of 255 characters, but be aware that the actual maximum length depends on the channel and could be shorter. Check the limitations for the channels in use. | Optional | And we hope that’s music to your ears. |

#### Button settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Button Label | The button text to be displayed. LiveEngage allows for up to 128 characters, but channel-specific restrictions do exist, so the actual maximum could be shorter. (For example, Facebook only allows for up to 20 characters.) | Required | 10% off all headphones |
| Action Type  | If you want the button to be a link that takes the consumer somewhere else, select **Web URL**.<br><br>If you want to use the button to post back a different value other than the button label's value (for example, to post back the number "5" instead of the word "excellent"), select **Postback** (and then enter the data to post (the payload) in the **Callback** field.<br><br>**Postback for Bookmark**, **Phone number**, and **Share** are legacy features that are no longer in use. | Required  | Web URL |
| Webview | This is a legacy feature that's no longer in use. | Not applicable | Not applicable |
| Target | Applies when the Action Type equals “Web URL." Select whether to open the URL in the current window or a new window. | Required | New Window |
| Callback | Enter the data to send back to the bot. <br><br>If you select "Web URL" for the **Action Type**, this value should be a URL. If you selected "Postback" for the **Action Type**, this value  should be whatever value you want to send to the bot. <br><br>If you specify a postback value here, in most channels it is sent back to the bot instead of the button label. However, be aware that this depends on the channel in use. Entering the same value for both the button label and the postback value will always work. | Optional | https://www.mysite.com/coupons/headphonesCoupon.html |

#### Populating a Structured question dynamically

You can populate the tiles with static information, or they can be dynamically populated during run time, for example, using data received from an [API integration](conversation-builder-integrations-api-integrations.html).

<img style="width:250px" src="img/ConvoBuilder/questions_structured3.png">

#### Notes on Structured questions

- You can include a maximum of 10 tiles.
- For the number of buttons that you can add, check the limitations for the channels in use. (For example, while LiveEngage doesn't have a limitation here, Facebook's limit is 3 buttons.)
- When multiple items are present in the interaction, they can be displayed vertically--which is the default--or horizontally. To add support for horizontal display, add the "tileDisplay" [custom configuration field](conversation-builder-testing-deployment-deploying-to-liveengage.html#custom-configuration-fields) with a value of "horizontal" when you [deploy](conversation-builder-testing-deployment-deploying-to-liveengage.html) your bot. For a horizontally-scrolling carousel to appear correctly, you must have **at least** 3 tiles.
- Formatting of text (bold, italics, etc.) isn't supported.

### Apple Time Picker questions
**For Apple Business Chat only.** 

If your business uses Apple’s Business Chat service to chat with consumers via the Messages app, you can use the Time Picker question interaction to display an interactive time picker, so the consumer can schedule a meeting or an appointment. (The interaction has been developed per Apple's Time Picker specifications, which you can find [here](https://developer.apple.com/documentation/businesschatapi/messages_sent/interactive_messages/time_picker).)

You can create a time picker that displays a static (fixed) list of time slots that you specify when you create the picker. Or, you can configure the picker so that it gets populated with time slots dynamically at runtime, passing in values from an earlier API integration call to an external system.

<img style="width:300px" src="img/ConvoBuilder/questions_timePicker1.png">

#### Response Message settings

The Response Message settings define how to display the time picker that’s initially presented to the consumer.

<img style="width:450px" src="img/ConvoBuilder/questions_timePicker2.png">

Response Message settings also provide the text in the header of the actual time picker.

| Setting | Description | Required or Optional | Example |
|---|---|---|---|
| ADD IMAGE > Image URL | The HTTPS URL of the image file to display. The domain in the URL must be [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting). The file format must be JPG or PNG. The image size is limited to 0.5 MB. | Optional | https://www.mysite/images/clock.jpg |
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

| Setting  | Description  | Required or Optional | Example  |
|---|---|---|---|
| Start Date  | The date **in GMT** on which the event starts. | Required | 09/05/2019 |
| Start Time  | The time **in GMT** on which the event starts. (The timezone offset determines whether the start time is in a specific time zone or in the customer's time zone.) | Required | 1:00 PM |
| Duration | The duration in minutes of the event. | Required | 30 |
| Timeslot ID | An ID for the time slot. If you don’t set this, it’s set by the system since it's required by Apple. LivePerson recommends that you set this. If you're populating the time picker with data received from an API call, you can set this with an ID provided in that API result. | Required |   time123 |

<img style="width:600px" src="img/ConvoBuilder/questions_timePicker7.png">

#### Reply Message settings

The Reply Message settings define how to display the consumer’s reply after the consumer picks a time slot.

<img style="width:400px" src="img/ConvoBuilder/questions_timePicker4.png">

| Setting | Description | Required or Optional | Example |
|---|---|---|---|
| ADD IMAGE > Image URL | The HTTPS URL of the image file to display. The domain in the URL must be [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting). The file format must be JPG or PNG. The image size is limited to 0.5 MB. | Optional | https://www.mysite/images/clock.jpg |
| ADD IMAGE > Image Style | The size of the image to display, either Icon (smallest), Small, or Large. The default value is Icon. | Optional | Icon |
| Reply Message Title | Not used; this is replaced with the selected time.  | Not applicable  | Not applicable |
| Reply Message Subtitle | The subtitle of the message. The maximum length is 400 characters; Apple recommends 85 characters.  | Optional | See you then! |

#### Populating a Time Picker question dynamically

You can populate the Time Picker fields with static information, or they can be dynamically populated during run time using data received from an [API integration](conversation-builder-integrations-api-integrations.html).

<img style="width:400px" src="img/ConvoBuilder/questions_timePicker8.png">

As indicated earlier in this topic, start dates and times must be **in GMT**, so depending on the data received from the API call, you might need to do some preprocessing to convert the times.

The Duration field can't be populated dynamically; you must manually specify this value.

#### The user response to a time picker

Once a user makes their selection in the time picker, the reply is sent back to the bot as "For" plus the event title, followed by "User Selected: " plus the date and time expressed in GMT.

<img style="width:350px" src="img/ConvoBuilder/questions_timePicker5.png">
