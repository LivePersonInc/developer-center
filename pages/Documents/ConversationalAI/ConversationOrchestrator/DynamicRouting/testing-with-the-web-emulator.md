---
pagename: Testing with the Web Emulator
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-testing-with-the-web-emulator.html
indicator: messaging
---

Once you’ve set up the Dynamic Routing interaction and created some policies, you can begin testing on our web emulator. To quickly set up your test environment, complete the following steps:

1. Add an agent connector to your routing bot.
2. Configure a Dynamic Routing engagement.
3. Use our [web messaging test site](https://developers.liveperson.com/web-messaging/emulator.html) to test your bot.

### Add an agent connector
To deploy a bot with an agent connector, follow [this documentation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html).

### Configure a dynamic routing engagement
To create a dynamic routing engagement, follow [this documentation](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html#step-12-create-an-engagement), replacing the routing skill with your dynamic routing bot’s skill.

If you already have at least one web messaging engagement deployed for your account, you might want to create a separate engagement for this test.

1. Create your campaign, and choose “Interact with customers” as the goal. Also add a web engagement and make it direct traffic to the skill mapped to the Dynamic Routing bot.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_test1.png">

2. Continue configuring the rest of the engagement as you normally would. Stop at Entry points.
3. While configuring entry points for the engagement, click **+ Add new**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_test2.png">

4. Give your new entry point a name, for example, "Dynamic Routing.”

5. In your entry point definition, leave the dropdown as *Contains* and add "dynamic-routing". You can choose any name.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_test3.png">

    {: .important}
    The skill name will be referenced as part of the URL of our testing page. Ensure to not have any spaces.

6. Save the entry point, and continue following the provided documentation to publish your engagement.

### Test the bot

1. Once you’re fully deployed, navigate to our [web messaging test site](https://developers.liveperson.com/web-messaging/emulator.html) to start a conversation with your bot.

2. Enter your account number into the provided field, and click **Show Window**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_test4.png">

3. Add a new query parameter to the URL to show your engagement. After the account number, add “&skill=” and your skill name. For example: `https://developers.liveperson.com/web-messaging/emulator.html?site=xxxxxxxx&skill=dynamic-routing`

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_test5.png">

    Press **Enter** to reload the page with the referenced skill name.

    {: .important}
    Once you’ve added the skill to the URL, don't click **Show Window**, as that will refresh the page without the added skill.

4. Once the page has reloaded, select the engagement, and start a conversation with your dynamic routing bot.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_test6.png">
