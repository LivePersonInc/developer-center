---
pagename: Test Conversation Assist
redirect_from:
    - tutorials-guides-using-agent-assist-test-agent-assist.html
keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & guides
subfoldername: Using Conversation Assist
permalink: tutorials-guides-using-conversation-assist-test-conversation-assist.html
indicator: both
---

### Step 8: Test Conversation Assist

With the engagement up and running, we can now test out the functionality of Conversation Assist in a live conversation.

In a separate browser window, navigate to [https://developers.liveperson.com/web-messaging/emulator.html](https://developers.liveperson.com/web-messaging/emulator.html). Here, provide your Conversational Cloud account number, and click **Show Window**. If the Conversation Assist Testing engagement has been set up correctly, there will be a “Message us” call to action button along the right side of the screen.

<img class="fancyimage" style="width:800px" src="img/agentassisttutorial/message_us.png" alt="The Messaging test page">

Click the **Message us** button to start a conversation with the human agent on the account, which should be yourself. Type in any message and send it to see a notification come through on the Conversational Cloud, along with an opportunity to accept the incoming conversation. Click **Accept**.

<img class="fancyimage" style="width:400px" src="img/agentassisttutorial/incoming_message.png" alt="The button in Conversational Cloud to accept an incoming conversation with a consumer">

Once connected, you can now test out Conversation Assist by conversing with yourself as both the consumer and the agent. To start, test the phrase “I want to book a flight” from your consumer. You will see both the Booking Bot and the Knowledge Base article on booking a flight recommended to your agent to help out your consumer.

<img class="fancyimage" style="width:400px" src="img/agentassisttutorial/recommendations_c.png" alt="The consumer side of the conversational experience, which is tested using the Messaging test page">
<img class="fancyimage" style="width:500px" src="img/agentassisttutorial/recommendations.png" alt="The agent side of the conversational experience, which is tested via the Agent Workspace">

Select **Delegate** to bring the Booking Bot into the conversation and immediately start the consumer with the correct, associated dialog.
 
<img class="fancyimage" style="width:450px" src="img/agentassisttutorial/use_bot.png" alt="The conversation as it appears after the Booking Bot has been joined to it">

When the bot has completed the task for the consumer, remove the bot from the conversation by selecting the **Remove bot** button at the top of the messaging window.

Each time the consumer sends a message, Conversation Assist will check to see if the utterance triggers an appropriate response from the connected bots or knowledge bases. Try again by asking, “Are you able to help me upgrade my seat?”

<img class="fancyimage" style="width:450px" src="img/agentassisttutorial/upgrade_seat.png" alt="The conversation as it appears after asking about seat upgrade, which triggers two inline recommendations, a bot and an answer">

This time, select **Use answer** to bring the seating assignment article into the messaging prompt for the agent. This allows the agent to personalize and update the article text to fit the consumer's specific needs.

<img class="fancyimage" style="width:450px" src="img/agentassisttutorial/use_article.png" alt="Using an answer; this copies the answer into the messaging prompt where the agent can customize it if desired">

Congratulations on completing this tutorial!