---
pagename: Starting with your Concierge Bot
sitesection: Documents
categoryname: "Getting Started"
permalink: starting-with-your-concierge-bot.html
indicator: both
---


### What is a Concierge Bot?

Your Conversational Cloud free trial account comes preloaded with a Concierge Bot, which is designed to get your brand up and running on our Conversational AI platform quickly. This bot is pre-wired to use our powerful platform components like the Conversation Builder and Conversation Orchestrator. You can use this bot as a starting point to build out more advanced conversational automation.

This bot provides basic information and contact options to your consumers. If you don’t have an agent available, it can also collect consumer contact information and then send it to an email address that you provided so you can respond later. This means you can engage with your consumers 24/7 without needing a 24-hour support staff.

<div class="container-note">
    <div class="important" style="width:100%">
    <b> Prerequisites</b> To use this guide, please create a 45-day trial account <a  target="_blank" href="https://developers.liveperson.com/register.html" alt="Trial Registration"> here</a>.
  </div>
</div>

### Exploring your Concierge Bot

When you are ready to start getting to know your bot, you can check out your Concierge Bot through Conversation Builder by:

1. Make sure you are <a  target = "_blank" href="https://authentication.liveperson.net/login.html" alt="LiveEngage URL"> logged in</a>.
2. On the left sidebar, click the bot icon ("Manage conversational AI and bots").
3. In the Conversational AI dashboard, click <b> Conversation Builder</b>.
4. Click on <i> Concierge Bot</i>

Then you will see a screen like this:

<img class="fancyimage" style="width:700px; margin-left: 16px;" src="img/conciergeBot/Concierge-bot-1.jpeg">
From here you can test your bot by clicking <b>Preview</b> and click on the dialog headers for <i>‘Welcome’ </i>, <i> ‘Open Hours’ </i>,
<i> ‘Contact’ </i>, etc. to see your bot from behind the scenes.

### Customize your Concierge Bot

Now it’s time to make this bot your own. With LivePerson’s Conversational AI platform, you can fully customize what your bot says and does through our powerful tools and integrations. Here we will focus on customizing your bot in 3 ways: (1) personalizing what your bot says to align to your brand, (2) improving what your bot can understand, and (3) completing your bot’s ability to collect customer information after-hours or when your agents aren’t available.

#### Personalize what your bot says

The Conversation Builder lets you easily update and change what your bot says. Let’s start by getting your bot to greet people using your brand name:

1. Load up your Concierge Bot in Conversation Builder
2. Click on the <i>‘Welcome’</i> dialog to expand it
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-2.jpeg">
3. Click on the text in <i> WELCOME_BODY</i> to select and edit that statement
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-3.jpeg">
4. Replace [Brand] with your company’s name and click <b>Save</b>.
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-4.jpeg">
5. Test your changes using <b>Preview</b>.

You can update any other dialog in this bot as you see fit the same way!

TIP: We recommend that you update the <i>‘Open Hours’</i> dialog to accurately represent your hours of operation, removing the <i>‘new user tips’</i> in the <i>‘Open Hours’</i> and <i>‘Fallback’</i> dialogs.

#### Improve what your bot can understand

Your bot can understand some messages from your customers out-of-the-box.  For example, if a customer asks for an agent, they will be escalated to a human agent (if available). Let’s start by updating your welcome <a  href="/conversation-builder-interactions-dialog-starter.html" alt="Dialog starter"> dialog starter </a> to improve how your bot understands greetings from visitors:

1. Open your Concierge Bot in Conversation Builder
2. Click on the <i> ‘Welcome’ </i>dialog to expand it
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-5.jpeg">
3. Click on <b> Pattern </b>
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-6.jpeg">
4. Add <i> ‘hey’ </i> and <i> ‘aloha’ </i> to the pattern then click <b>Save</b>.
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-7.jpeg">
5. Test your changes using <b> Preview</b>.

You can update the dialog starters for each of the dialogs in this bot in the same way.

TIP: You can use [Intent Manager](intent-manager-overview.html) to further improve your bot’s ability to accurately understand and respond to customers.

#### Complete the ‘Contact’ dialog

Your Concierge Bot’s ‘Contact’ dialog allows it to gather information from a customer and send it to you as an email. To complete this dialog so that you can receive this email from your bot, you need to update your bot’s <b> Email Integration </b>.

1. Open your Concierge Bot in Conversation Builder
2. Click on <b> Integrations</b>
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-8.jpeg">
3. Select <i>‘Send_Email’</i>
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-9.jpeg">
4. Update the  <i>‘To’</i> and <i>‘Reply To’</i> fields with your desired email addresses.   Update  <i>‘Subject’</i> with your desired email subject line.
<img class="fancyimage" style="width:700px" src="img/conciergeBot/Concierge-bot-10.jpeg">
5. Click <b>Save</b>.
6. Test your changes using <b>Preview</b>.

<div class="whole-external-link">
      <div class="next-steps-container">
          <div id="LEFeatures" class="header-lp4-external">
            <h3>Next Steps</h3>
              <div class="link-padding" style="margin-top:24px">
                <a  target="_blank" href="https://knowledge.liveperson.com/getting-started-quick-start-guides-twilio-sms-quick-start.html">
                       Connect to a Mobile Channel
                </a>
              </div>
              <div class="link-padding" >
                <a target="_blank" href="https://knowledge.liveperson.com/ai-bots-automation-conversational-ai.html">
                       Continue learning about Conversational AI
                </a>
              </div>
              <div class="link-padding" >
                <a  target="_blank" href="/intent-manager-key-terms-concepts.html#intents">
                       Get started with Intents
                </a>
              </div>
            </div>
        </div>
</div>
