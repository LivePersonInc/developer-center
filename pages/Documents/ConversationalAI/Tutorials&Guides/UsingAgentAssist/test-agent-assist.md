---
pagename: Test Agent Assist
keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Using Agent Assist
permalink: tutorials-guides-using-agent-assist-test-agent-assist.html
indicator: both
---

### Step 8: Test Agent Assist

With the engagement up and running, we can now test out the functionality of Agent Assist in a live conversation.

In a separate browser window, navigate to [https://developers.liveperson.com/web-messaging/emulator.html](https://developers.liveperson.com/web-messaging/emulator.html). Here, provide your Conversational Cloud account number, and click **Show Window**. If the Agent Assist Testing engagement has been set up correctly, there will be a “Message us” call to action button along the right side of the screen.

<img class="fancyimage" style="width:800px" src="img/agentassisttutorial/message_us.png">

Click the **Message us** button to start a conversation with the human agent on the account, which should be yourself. Type in any message and send it to see a notification come through on the Conversational Cloud, along with an opportunity to accept the incoming conversation.

<img class="fancyimage" style="width:400px" src="img/agentassisttutorial/incoming_message.png">

Once connected, you can now test out Agent Assist by conversing with yourself as both the consumer and the agent. To start, test the phrase “I need some help booking a flight” from your user. You will see both the Booking Bot and the Knowledge Base article on booking a flight recommended to your agent to help out your user.

<img class="fancyimage" style="width:800px" src="img/agentassisttutorial/recommendations.png">
<img class="fancyimage" style="width:450px" src="img/agentassisttutorial/recommendations_b.png">

Here, selecting **Use bot** will bring the Booking Bot into the conversation and immediately start the user with the correct, associated dialog.
 
<img class="fancyimage" style="width:450px" src="img/agentassisttutorial/use_bot.png">

When the bot has completed the task for the user, remove the bot from the conversation by selecting the **Remove bot** button at the top of the messaging window.

<img class="fancyimage" style="width:450px" src="img/agentassisttutorial/remove_bot.png">

Each time the user sends a message, Agent Assist will check to see if the utterance triggers an appropriate response from the connected bots or knowledge bases. Try again by asking “Are you able to help me upgrade my seat?”

<img class="fancyimage" style="width:450px" src="img/agentassisttutorial/upgrade_seat.png">

Agent Assist also allows human agents to train and tune the recommendations in real time. Use the **Thumbs up** and **Thumbs down** buttons to signify when a recommendation is appropriate to improve the NLU over time.

This time, select **Use article** to bring the Seating assignment article into the messaging prompt for the agent. This allows the agent to personalize and update the article text to fit the user's specific needs.

<img class="fancyimage" style="width:450px" src="img/agentassisttutorial/use_article.png">
