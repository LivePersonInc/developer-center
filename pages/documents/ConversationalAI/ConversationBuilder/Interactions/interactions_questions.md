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

- **Structured Content**. Most conversations involve plain text like what you are reading now. However, sometimes you might want to send content (images, buttons, maps, quick replies, etc) to a consumer in a richer, more interactive, and more structured format. *You can show up to 10 of these items in a horizontally scrolling carousel.*

![Carousel](img/carousel.gif)

- **Button**. An object that allows you to show a simple text question with an associated button action. A click of the button results in an action pre-configured by you (like navigation to a link, for example).

- **Quick Reply**. A question with a series of pre-configured replies that appear as a list of chips at the bottom of the interaction and disappear once the user has selected one.

- **Listpicker**. **For Apple Business Chat only.** This allows the user to make a selection in response to a simple text question from a list of items.

- **Time Picker**. **For Apple Business Chat only.** This allows the user to make a selection in response to a simple text question from a list of event times, like an appointment. See below for more details.

User responses to question interactions can be saved in [variables](conversation-builder-variables-slots.html), making them available for future use.

### Apple Time Picker questions
**For Apple Business Chat only.** 

If your business uses Apple’s Business Chat service to chat with consumers via the Messages app, you can use the Time Picker question interaction to display an interactive time picker, so the consumer can schedule a meeting or an appointment.

You can create a time picker that displays a static (fixed) list of time slots that you specify when you create the picker. Or, you can configure the picker so that it gets populated with time slots dynamically at runtime, passing in values from an earlier API integration call to an external system.

<img style="width:300px" src="img/ConvoBuilder/questions_timePicker1.png">

**Response Message settings**

The Response Message settings define how to display the time picker that’s initially presented to the consumer.

<img style="width:450px" src="img/ConvoBuilder/questions_timePicker2.png">

Response Message settings also provide the text in the header of the actual time picker.

| Setting | Description | Required or Optional | Example |
|---|---|---|---|
| ADD IMAGE > Image URL | The HTTPS URL of the image file to display. The file format must be JPG or PNG. The image size is limited to 0.5 MB. | Optional | https://www.mysite/images/clock.jpg |
| ADD IMAGE > Image Style | The size of the image to display, either Icon (smallest\, Small, or Large. The default value is Icon. | Optional | Icon |
| Response Message Title | The title of the message. The maximum length is 85 characters; Apple recommends 30 characters.  | Required  | Meet with our technician |
| Response Message Subtitle | The subtitle of the message. The maximum length is 400 characters; Apple recommends 85 characters.  | Optional | Please select your preferred time |

**Event settings**

| Setting  | Description  | Required or Optional | Example  |
|---|---|---|---|
| Event Title  | The title of the calendar meeting.   | Required  | Technician Visit |
| Event Identifier   | An ID for the event; if you don’t set this, it’s set by the system.             | Optional |    |
| Timezone offset (minutes from GMT) | Represents the number of minutes from GMT, while specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location. | Optional  | 120  |


**Location settings**

Location settings support features that play a role after the consumer has selected a time slot and sent the reply. The consumer can tap the reply message bubble to view location information, if available. The consumer can also tap *Add to Calendar* or *Get Directions*. The location name supports the former; the latitude, the longitude, and the radius support the latter.

| Setting  | Description  | Required or Optional | Example  |
|---|---|---|---|
| Location Name | The location’s name; this is shown in the consumer’s calendar after the appointment is added. | Optional | Building One |
| Latitude | The location’s latitude (a numeric double value). | Optional | 49.4872955 |
| Longitude | The location’s longitude (a numeric double value). | Optional | 8.4682869 |
| Radius | The location’s radius in meters (a numeric double value). This setting is ignored if Latitude and Longitude are missing or empty. | Optional | 10 |

**Time slot settings**

| Setting  | Description  | Required or Optional | Example  |
|---|---|---|---|
| Start Date  | The date on which the event starts based on the location’s time zone. | Required        | 09/05/2019 |
| Start Time  | The time at which the event starts based on the location’s time zone. | Required       | 4:00 PM |
| Duration | The duration in minutes of the event. | Required  | 30 |
| Timeslot ID | An ID for the time slot; if you don’t set this, it’s set by the system. | Optional         |   |

**Reply Message settings**

These settings are read-only and unused; you can skip over them.

**Dynamically populating a time picker**

You can dynamically populate the time picker using data received from an API integration. For example, you might set the Start Time field with something like:

`{$.api_myScheduler.interactiveData.data.event.timeslots[i].startTime}`

**The user response to a time picker**

Once a user makes their selection in the time picker, the reply is sent back to the bot as....

{ image }

You might want to use an API integration to pass that data back to a scheduling application.
