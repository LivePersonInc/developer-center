---
pagename: Custom Event Logging
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-custom-event-logging.html
indicator: both
---

### Overview

This topic provides a guide for implementing custom event logging to provide a more detailed analytics experience for your bot. It walks you through a use case of adding custom events to a FAQ bot to assist with recording successful knowledge base queries and identifying false positives.

### Custom Events

Custom events originate from a scripting function that is written in either the Pre/Post-Process Code or the Process User Response section of any dialog interaction. Details on the structure of the scripting function can be found [here](conversation-builder-scripting-functions-log-debug.html#log-custom-event). Custom events are more flexible than our default analytics, allowing you to specify when and what data is captured for analytic or tracking purposes. We'll cover where to access and how to read these captured events later in this guide, but to start let’s look at our bot and write some custom events.

### Bot Configuration

When using a [knowledge base](knowledge-base-overview.html), it might be desirable to know if a result was displayed successfully and whether the user was satisfied with the result. Having this information in hand is important when training and tuning your knowledge base intents. To achieve this, we're going to include two custom events in our fallback dialog:

* A custom event to log when we have a successful response from our FAQ knowledge base
* A custom event that is triggered from a user response indicating the correctness of the returned article

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/bp_eventLogging1.png">

Our first custom event tracks successful knowledge base queries. We'll include the following code in the **Pre-Process Code** section of the interaction that displays our FAQ article. As this interaction is only displayed on a successful API response, we can capture and log information here. 

```javascript
var articleTitle = botContext.getBotVariable('FAQ.title');
var kbQuery = botContext.getCurrentUserMessage();
botContext.setBotVariable('kbQuery', kbQuery, true, false);
botContext.logCustomEvent('User Message: ' + kbQuery, 'KB article returned', 'Returned article: ' + articleTitle);
```

Our custom event is called with three arguments:

* Custom event title (‘KB article returned’) 
* The user message (’User Message: ‘ + `kbQuery`) 
* Any optional, additional details we’d like to include (’Returned article: ‘ + `articleTitle`)

With this in place, we will fire off a new event every time this interaction is displayed. We’ll look at the result of this after we include the second custom event.

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/bp_eventLogging2.png">

For our second event, we want to identify and record user responses to determine if we have false positives or mismatched intents. In the example below, our user has been presented with incorrect information, despite the fact that their message was picked up by one of our KB intents.

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/bp_eventLogging3.png">

This interaction will register as a matched intent in Bot Analytics. We want to ensure that we are logging this interaction with the appropriate data to ensure that we can address false positives. To do so, we will include the following code snippet in the **Process User Response** section of the multiple choice question interaction.

```javascript
var kbQuery = botContext.getBotVariable('kbQuery');
var articleTitle = botContext.getBotVariable('FAQ.title');
var response = botContext.getCurrentUserMessage();
botContext.logCustomEvent('Original user message: ' + kbQuery, 'Question answered? - ' + response, 'Returned article: ' + articleTitle);
```

Once again, our custom event is called with three arguments:

* Custom event title (‘Question answered? - ‘ + `response`) 
* The user message (’Original user message: ‘ + `kbQuery`) 
* Any optional, additional details we’d like to include (’Returned article: ‘ + `articleTitle`)

By using the user's response in the custom event title, we have effectively created two new custom events, “Question answered? - Yes” and “Question answered? - No”. This will provide benefits when looking at our Bot Analytics by allowing us to quickly see the proportion of “Yes” responses to “No” responses.

### Bot Analytics

Within Bot Analytics, let's navigate to **Custom Events** by using the three-dot menu. 

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/bp_eventLogging4.png">

We are first greeted by a graph showing the occurrences of all our created custom events. While we are not yet seeing all the details from our events, we can quickly see the number of KB article searches against the number of false positives from those searches. We already have some benefits by including the custom logs simply by seeing how accurate our matched intents are.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/bp_eventLogging5.png">

From the Event Menu, you can select the individual custom events to gain specific information about what triggered that event.

Download Event Details will provide you with a CSV file that includes all the details that we passed to the `logCustomEvent` function for each interaction, using the following columns:

* eventName (custom event title)
* platform (channel the event originated from)
* eventDetails (additional details)
* userText (user message)
* eventCreationTime (timestamp of event)
* conversationId (unique ID for the conversation)

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/bp_eventLogging6.png">

This information allows you to see where your bot isn't performing as expected and is valuable to train and tune your knowledge base intents. All user-reported, mismatched intents for this knowledge base will show here and provide a window into where you can make improvements.

Custom events provide a powerful way to add functionality to your reporting workflow. Adding them to your bot developer's toolset will enhance the content of your analytics in a number of different scenarios.
