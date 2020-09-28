---
pagename: Auto Escalation
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Bot Groups & Other Techniques
permalink: tutorials-guides-bot-groups-other-techniques-auto-escalation.html
indicator: both
---

### Introduction

Along with disambiguation, every automation should include a way to automatically escalate when a user gets stuck. This often happens when a user is attempting to answer a text question, but their responses are not passing the needed validation. Previously, to implement such a policy required the writing of custom JavaScript to keep track of a user's attempts to answer a question, pointing to an escalation interaction if a threshold is crossed. Now, Conversation Builder provides a special dialog type which takes care of all of this for you without having to write any code.

### Step 7: Create the Auto Escalation dialog

Prior to this step, make sure that you have captured the skill ID associated with your Human skill. This should be the same ID that you are using in the escalation dialog in your Small Talk Bot. Once you have this ID, navigate to your Order Bot in Conversation Builder.

1. Select the **Add Dialog** button from the lower-left corner of Conversation Builder and fill the resulting **Add Dialog** form with the following:

    * **Dialog Name**: Auto Escalate
    * **Dialog Type**: Auto Escalation Dialog
    * **Auto Escalation Skill**: Your human skill ID
    * **Auto Escalation Threshold**: 2

    The threshold refers to how many times a user can fail a validation prior to offering escalation. We’ll keep it at 2 for the purpose of demonstration, which will escalate at the 3rd failure. In practice, it is recommended to escalate sooner than later when a user hits a roadblock.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/advtutorial/add_dialog.png"> 

    Select **Save**.

2. The resulting dialog will be generated with two interactions:

    * A Multiple Choice interaction to confirm that a user wants to be escalated to an agent
    * The corresponding escalation

    **Note:** Because the user has not explicitly asked to be transferred to an agent, it’s good practice to confirm that this is what they would like to do.

3. Modify the content of the multiple choice interaction to match the voice of your brand. Note that two rules have been automatically created to match the ‘yes’ and ‘no’ responses, so they will need to be updated should you change the response options.

4. In the escalation interaction, click on the settings wheel in the upper right corner and navigate to the Advanced section to confirm that your Agent Skill ID has been properly added.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/advtutorial/auto_esc_mcq.png">

5. To test this new functionality, navigate back to the [demo deployment site](https://vx-lp.github.io/v2/lpwm/) and enter your account number. After being greeted by the Greeter Bot, trigger the Order Status intent by messaging “I want to know my order status”. Order Bot will recognize the intent and trigger the associated dialog, prompting for an order number. 

6. The question to capture the order number has a validation to ensure that it meets the A001001 format. Type in a message that intends to fail this validation to receive a re-prompt of the question.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/preview_auto_esc_1.png">

7. Follow this up with additional messages to fail the validation. On the 3rd failure, the auto escalation dialog will trigger and provide the user with the option to escalate to an agent. Select ‘Yes’ to confirm that the escalation has been implemented correctly.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/preview_auto_esc_2.png">

8. If set to the proper skill ID, you should hear a ring from the Conversational Cloud and see an option to accept the incoming conversation.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/auto_esc_cc.png">
