---
title: Integrate your LivePerson data into any system for analytics
redirect_from:
  - products-data-integration-and-analysis-overview.html
sitesection: Solutions
level2: Data
level3: Data Integration & Analysis

order: 1
level-order: 1
root-link: true
permalink: data-integration-&-analysis-integrate-your-liveperson-data-into-any-system-for-analytics.html
indicator:
---

### Overview

Customize your reporting & analysis by utilizing LiveEngage operational and transcripts data within your analytics tools or databases.

Benefits:

* Own all transcript and accompanying data indefinitely (beyond the 13 months kept within LivePerson)
* Run any reporting or analytics on your data
* Integrate and compare LiveEngage data with other channels or sources

### Step 1: Identify the goal for your data integration.  Some examples of goals include:

* **Run custom analysis on your data:**

	* Understand causes for low MCS or CSAT

	* Analyze chats with Long duration to understand topics causing delays

	* Identify topics driving transfers between agents or channels

* **Compare service channels:**

	* Compare CSAT with voice conversations

	* Compare duration of chats vs. voice calls on a particular topic

	* Difference amongst agent efficiency on voice vs. messaging or chat

* **Keep records of your data**

	* Integrate into any CRM to obtain a full view of the customer's interactions with your brand.  Add to any customer repository to track conversations as part of the customer records.

	* Comply with data storage regulations

### Step 2: Design your integration

If your brand is using Live Chats - utilize the Engagement History API.
For brands using messaging (in-app, sms, facebook, web), utilize the Messaging Interactions API.

Considerations:

* Determine how often you’d like to extract your data

* How much data do you want to extract each time? (1 day, month, max 13 months)

* Do you want to extract all data that is offered in the API? Or particular filtered sets of data?

* Error handling: how will your service react in case of an error? What will be your retry mechanism?

* **Determine how to store your data**

	* What will you be your storage layer? Oracle, mysql, vertica, etc?

	* Map LivePerson data points to the attributes in your database.  

