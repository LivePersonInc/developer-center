---
pagename: Creating a New FAQ Bot
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Conversation Builder
subfoldername: FAQ Bot Use Case
permalink: conversation-builder-faq-bot-use-case-creating-a-new-faq-bot.html
indicator: both
---

### Importing the Template

In the Conversation Builder, tap on the NEW BOT icon and give your bot a unique name and description. Then select FAQ Bot from the template area below and hit Save.

### Initial Bot Setup

**Before you do anything else**, we need to "Publish" the bot to your Organization. (For those with multiple Org access, the bot will default to your “Home Org”, which is why we want to change it.)

* Tap the gear icon in the lower right and then Bot Settings. Scroll down and tap "More Settings".

* Where it says "Publish Bot" change to the appropriate Org and hit Save.

<img src="img/faqbot/image_12.png" style="width:600px">

### Connecting to the Knowledge Base

Your automation will use an API integration to connect to the Knowledge Base. Setting up the API is straight forward.

<img src="img/faqbot/image_13.png" style="width:600px">

You will need the source id for the Knowledge Base you’re using. Navigate to your KB and launch it. In the browser address bar, select the source id (see above) and copy it. We’ll be using it shortly.

Return to the Conversation Builder and in the upper left corner of the Conversation Builder, tap on the API Integration <img src="img/faqbot/image_14.png" style="width:40px"> icon.

* In the left integration list, tap on the "FAQs" integration and verify the following:

* The Integration Name: FAQs

* The Response Data Variable Name: FAQs

* The Method: GET

* The URL: https://botbuilder2-dataservice.botcentralapi.com/knowledge-0.1/articles/phraseSearch

* **Request Parameters:**



<table>
  <tr>
    <td>Key</td>
    <td>Value</td>
  </tr>
  <tr>
    <td>source</td>
    <td>Paste in your KB source id</td>
  </tr>
  <tr>
    <td>phrases</td>
    <td>{$query}</td>
  </tr>
  <tr>
    <td>mode</td>
    <td>intents</td>
  </tr>
  <tr>
    <td>threshold</td>
    <td>good</td>
  </tr>
</table>


* **Custom Data Fields:**

<table>
  <tr>
    <td>Key</td>
    <td>Value</td>
  </tr>
  <tr>
    <td>article</td>
    <td>{$.api_FAQs.successResult.success[i].summary}</td>
  </tr>
</table>


* After you have reviewed, and tweaked, hit Save

### Testing Your Bot

Let’s test our connection to the Knowledge Base. Return to the dialog editor by tapping on the <img src="img/faqbot/image_15.png" style="width:40px"> icon in the upper left. Tap on the Chat preview on the right sidebar

<img src="img/faqbot/image_16.png" style="width:400px">

Type "**restart**", hit enter. Then type “hi” to trigger the initial Welcome message. Restart clears all variables to start fresh.

Now, type an intent that should match an article in the Knowledge Base. You should be seeing your knowledge base response. Tapping/typing "yes" will respond with “Glad I could help.” Typing/tapping “no” will escalate.

If you enter an utterance that is not recognized by your Knowledge Base, you will see the "fail" dialog.
