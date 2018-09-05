---
pagename: Overview
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
subfoldername: Time Picker
order: 80
permalink: rich-messaging-connectors-abc-timepicker.html
indicator: messaging
---

[Business Chat Time Picker](https://developer.apple.com/documentation/businesschat/enhancing_the_customer_s_user_experience/sending_a_time_picker) enables human or automated agents to send available time slots when consumers are looking to schedule an appointment with the brand’s various services. Time picker allows the consumer to select the relevant time slot, and reply back with the time selected.

The following capabilities are supported:

1. **receivedMessage and replyMessage** bubbles style structures (which are the layouts for the bubbles that are received by the consumer and then sent back by the consumer). This allows the brand to create a Time Picker with bubbles containing title, subtitle, style size and image.

2. **Timeslots** - Enables the agent to generate an array of time slots for the consumer’s options.

3. **Time zone offset** - Represents the number of minutes from GMT, while specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location.

4. **Location** - Enables the brand to add a describer to the appointment location, allowing the consumer to immediately see the location once an appointment is saved in the calendar.

By Using the using metadata fields, the brand can also define the received and reply bubble structures.

Below is an example image of a Business Chat time picker:

![Apple Business Chat Time Picker Main](images/abc-timepicker-1.jpg)   ![Apple Business Chat Time Picker list](images/abc-timepicker-2.PNG)
