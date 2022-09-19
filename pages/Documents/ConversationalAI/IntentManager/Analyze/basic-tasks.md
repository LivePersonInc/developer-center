---
pagename: Basic Tasks
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Analyze
permalink: intent-manager-analyze-basic-tasks.html
indicator: both
---

This topic explains how to perform basic tasks when using the charts and graphs on the **Analyze** tab.

### Autorefresh

Use the Autorefresh setting to set how often the dashboard is refreshed. Setting it to the lowest time of 15 seconds gives you a live view into your intents.

### Search

Use the search bar above the data shown in the charts and graphs. You can search for keywords in messages or for metadata like conversation IDs. When searching, you can use special operators like AND, OR, and AND NOT.

Example: "This message" AND "that intent" AND NOT "some other text"

### Time Range

You have three options to select a time range to filter your intent data:

* “Quick Select” provides you with the most common time ranges.
* “Relative” gives you a rolling window of time.
* “Absolute” lets you use the Analyze tab as historical reporting.

### Filters

Filters provide you with increased flexibility and the ability to cover more granular use cases, including detailed analysis of the bot/human tango. Exclude and compound filter options make it faster to drill into specific data views. You can even save filters for ease of use.

**To add a filter**

1. Click the **Add Filter** button in the top-left corner.
2. Choose a filter property from the dropdown list and add constraints based on your needs.
3. Optionally, click **Save** to save the filter.

**To find a pattern or theme in the messages**

1. Go to the **Analyze** tab, and filter by “undefined.”
2. Click the **Add Filter** button at the top left of **Intent Trends**.

    <img class="fancyimage" style="width:800px" alt="Add Filter button in upper-left corner of Intent Trends tab on the Analyze page" src="img/ConvoBuilder/im_analyze_filters1.png">

3. In the pop-up window, select “Intents” as your filter type on the left, and then select “unclassified” from the dropdown on the right.

    <img class="fancyimage" style="width:800px" alt="An example of defining a filter where intents includes unclassified" src="img/ConvoBuilder/im_analyze_filters2.png">

#### Rule-based power filters

You can save and manage complex filters that let you surface and track specific insights on exact topics. You can use regular expressions to instantly mine and query up to 13 months of conversation data that matches specific criteria. This functionality is complementary to machine learning-powered intents and allows you to cover analysis use cases that don’t work within the intent taxonomy.

<img class="fancyimage" style="width:800px" alt="The load/edit search filters window" src="img/ConvoBuilder/im_analyze_filters3.png">

#### Filters and REGEX

An example use case for using a [REGEX](https://www.elastic.co/guide/en/elasticsearch/reference/current/regexp-syntax.html) is if an airline wants to search for each time a reservation number comes up. They can search in addition to intents if you want to find all messages.
