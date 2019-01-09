---
pagename: Connect an Integration
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-connect-an-integration.html
indicator: both
---

In the [previous tutorial](conversation-builder-getting-started-building-your-first-intent.html), you used an [intent](conversation-builder-intent-builder-overview.html) to match user input and an [entity](conversation-builder-intent-builder-entities.html) to match a user answer to a question. The user answer entity was stored in a Slot. The bot/automation then accessed the value in the Slot and repeated the user's answer back to them. 

Now, you will use the user answer to query an API and reply back with a relevant image.

### Creating an Integration

Now that you have stored the user answer in a Slot, we can use it in communicating with an API.

Since the bot/automation asks the user if they prefer dog/cat/bird, you will use the https://shibe.online/ API to present an image for the user.

First, you will set up an integration.

Name the API integration "RandomAnimalImage". Set the GET url the `http://shibe.online/api/{$botContext.slot.animal}?count=1&urls=true&httpsUrls=true`. The user answer is accessed from the slot and placed in the URL.

In the custom data fields area, add:

| key | value |
| --- | --- |
| imageURL | {$.api_RandomAnimalImage.data} |

**Reference:**

* Dog GET url: http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true

* Cat GET url: http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true

* Bird GET url: http://shibe.online/api/birds?count=1&urls=true&httpsUrls=true


### Access Integration in an Interaction

In the "ask a question" dialog, add a Bot Integration interaction after the last Bot Statement Text. Link the RandomAnimalImage integration in the interaction.

Then add a Bot Statement Image. Add the following in the Image URL field of the interaction `{$api_RandomAnimalImage.imageURL}`.

The integration interaction will query the API, store the result in a variable, then the image will access to the result variable to display the random image.

Click on the Messaging Client in the Settings Toolbar and test your bot/automation. Type "reset" to create a new session. Say "hello", followed by "ask me something". Respond with something like "I prefer cats". The bot/automation should say "You answered: cats!" and then display a random cat image from the API.
