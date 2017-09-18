---
title: Step 4 - Setting up the Widget in LiveEngage
level1: Products
level2: 
level3: SalesForce Integration
level4: Implementation

order: 40
permalink: products-agent-efficiency-salesforce-integration-step4.html

indicator:
---

Now that you’ve configured your LiveEngage App in Salesforce, it’s time to go back to LiveEngage and configure the widget in LiveEngage.

1. Click on ‘Night Vision’ icon on the top.

![NightVision](img/night_vision.png)

{:start="2"}
2. Click on ‘Agent Workspace Configuration’.

3. Click on the “+” next to the existing widget labels (**Note!** The limit is 5 widgets).

4. Choose a name for the Widget (you can use “SF.Widget” to have “SF” as the widget’s label).

5. Choose “Double Widget” size.

6. Enter the following URL:

https://liveengage.**XXXX**.visual.force.com/apex/ChatLink

Replace **XXXX** with your SF domain (for example: “na3”, “ap02”, “eu01” or “cs23” for a sandbox – the farm and
instance is the same as the one you see on your domain when using salesforce: “https://eu2.salesforce.com”).

**Note!**
If your Salesforce org has **My Domain** feature activated, the URL for the widget should include it same as your regular URL does, and should look like this:

https://mydomain--liveengage.XXXX.visual.force.com/apex/ChatLink

Tip: From the Customization Settings tab, you can copy the first part of the URL and add to it the “ChatLink” suffix in order to ensure you are using the correct link:

![CustomizationSettings](img/customizationsettings.png)

{:start="7"}
7. Open the “Advanced settings for LivePerson integration SDK”

	* Define the following URL under ‘In case widget didn't load, display the following link’-
	‘https://login.salesforce.com’ (or ‘https://test.salesforce.com’)

	* “Show link after” – Define 30 seconds, this means that if the agent is not logged in to SF, after 30 seconds he
	will see the message you defined with the link defined above.

**Now you are ready to go, just open the widget on an active chat!
