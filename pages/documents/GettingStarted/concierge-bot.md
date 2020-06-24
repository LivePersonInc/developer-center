---
pagename: Concierge Bot
sitesection: Documents
categoryname: "Getting Started"
permalink: concierge-bot.html
indicator: both
---

# Exploring your Concierge Bot

When you are ready to start getting to know your bot, you can check out your Concierge Bot through Conversation Builder by:
1. Make sure you are logged in.
2. On the left sidebar, click the bot icon ("Manage conversational AI and bots").
3. In the Conversational AI dashboard, click Conversation Builder.
4. Click on Concierge Bot

Then you will see a screen like this:

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">
From here you can test your bot by clicking Preview and click on the dialog headers for ‘Welcome’, ‘Open Hours’, 
‘Contact’, etc. to see your bot from behind the scenes.

## Customize your Concierge Bot
Now it’s time to make this bot your own. With LivePerson’s Conversational AI platform, you can fully customize what your bot says and does through our powerful tools and integrations. Here we will focus on customizing your bot in 3 ways: (1) personalizing what your bot says to align to your brand, (2) improving what your bot can understand, and (3) completing your bot’s ability to collect customer information after-hours or when your agents aren’t available.


## Personalize what your bot says

The Conversation Builder lets you easily update and change what your bot says. Let’s start by getting your bot to greet people using your brand name:

1. Load up your Concierge Bot in Conversation Builder
2. Click on the ‘Welcome’ dialog to expand it1
<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

3. Click on the text in WELCOME_BODY to select and edit that statement

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

4. Replace [Brand] with your company’s name and click Save.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

5. Test your changes using Preview.

You can update any other dialog in this bot as you see fit the same way! 

TIP: We recommend that you update the ‘Open Hours’ dialog to accurately represent your hours of operation, removing the ‘new user tips’ in the ‘Open Hours’ and ‘Fallback’ dialogs.

## Improve what your bot can understand

Your bot can understand some messages from your customers out-of-the-box.  For example, if a customer asks for an agent, they will be escalated to a human agent (if available). Let’s start by updating your welcome dialog starter to improve how your bot understands greetings from visitors:

1. Open your Concierge Bot in Conversation Builder
2. Click on the ‘Welcome’ dialog to expand it
<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

3. Click on Pattern
<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

4. Add ‘hey’ and ‘aloha’ to the pattern then click Save.
<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

5. Test your changes using Preview.

You can update the dialog starters for each of the dialogs in this bot in the same way.

TIP: You can use Intent Builder to further improve your bot’s ability to accurately understand and respond to customers. 

### Complete the ‘Contact’ dialog 
Your Concierge Bot’s ‘Contact’ dialog allows it to gather information from a customer and send it to you as an email. To complete this dialog so that you can receive this email from your bot, you need to update your bot’s Email Integration.

1. Open your Concierge Bot in Conversation Builder
2. Click on Integrations

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

3. Select ‘Send_Email’
<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

4. Update the ‘To’ and ‘Reply To’ fields with your desired email addresses.   Update ‘Subject’ with your desired email subject line.
<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

5. Click Save.
6. Test your changes using Preview.

Next Steps:
Connect to a Mobile Channel
Continue learning about Conversational AI
Get started with Intents
