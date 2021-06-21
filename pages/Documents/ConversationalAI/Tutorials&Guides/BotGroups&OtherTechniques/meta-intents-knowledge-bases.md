---
pagename: Meta Intents & Knowledge Bases
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Bot Groups & Other Techniques
permalink: tutorials-guides-bot-groups-other-techniques-meta-intents-knowledge-bases.html
indicator: both
---

Brands often have static content, such as frequently asked questions, that can be addressed through bots and delivered with Conversation Builder. As opposed to creating individual interactions to handle these use cases, the Conversational Cloud provides Knowledge Base support to provide a seamless experience in delivering this content. To best work within the Collaborative Bot Group structure, we will create an FAQ meta intent to capture all FAQ questions and present them to our user within the **Service Bot**.

### Step 8: Create the FAQ meta intent

A meta intent is a wrapper for a grouping of related intents.

<img style="width:500px" src="img/ConvoBuilder/advtutorial/meta_intents_diagram.png">

Using meta intents, you can funnel a variety of intents into a single dialog for processing. A meta intent can have many standard intents, and standard intents can belong to one meta intent. Another way to think about this relationship is as a parent-children model, with the meta intent being the parent and all its standard intents as its children. Additional information about meta intents can be found [here](intent-manager-key-terms-concepts.html#meta-intents).

1. From the **Conversational AI** section of the Conversational Cloud, navigate to **Intent Manager**, and select the "LP_Cross-vertical" domain.
2. Create a meta intent by selecting **Add Intent** and completing with the following:

	* Intent name: FAQ
	* Intent Display Name: FAQ
	* Intent type: Meta intent
	* Intents > Select intent to add:
		* ask about shipping or pick up
		* reset password
		* cancel account

	When finished, click **Save**.
	
	If created correctly, you should see your standard intents displayed underneath the FAQ meta intent.

	<img style="width:300px" src="img/ConvoBuilder/advtutorial/meta_intents_list.png">

3. Once saved, you will need to re-train your domain for your changes to take effect. Click **Train** in the upper-right corner.
4. After training, test to make sure both intents and meta intents are being triggered by your training phrases. In the **Test User Input** panel on the right, select your newly trained model from the **Model version** dropdown, turn on the **Search in domain** setting, and keep the default "All" in the resulting dropdown. Test out a few phrases that you would expect to match the newly created intents. If set up correctly, you should see both the standard intent and its parent meta intent triggered with the same confidence score.

	<img style="width:400px" src="img/ConvoBuilder/advtutorial/test_user_input.png">	

5. With a newly created meta intent in hand, activate the new model version, so the changes are reflected in your bot.

	The next step will be to create a new knowledge base. 

### Step 9: Create the FAQ knowledge base

In this step, you’ll create a new FAQ knowledge base and add FAQ articles to it.

1. From the **Conversational AI** section of the Conversational Cloud, navigate to the **Knowledge Base** section.

2. Click **Add Knowledge Base** in the upper-right corner.

3. On the **AI Enabled** tab of the window that appears, select **Internal Knowledge Base**.

4. Give the knowledge base the name "Getting Started KB," and set the language to English. Here, you have the option of uploading a CSV or Google Sheet of your Knowledge Base articles. Leave the **Upload** field blank, as you will create articles from scratch.

	From the Domain dropdown, select our "LP_Cross-vertical" domain. Click **Save**.

	{: .important}
	Internal knowledge bases leverage LivePerson NLU domains when surfacing articles.

	<img style="width:800px" src="img/ConvoBuilder/advtutorial/add_kb.png">

5. The next step is to add the FAQ articles that will be triggered by intents from our LP_Cross-vertical domain. Click **Add New** in the upper-right corner to create your first article. Complete the **Add Article** form with the following information:

	* **Title**: Password reset
	* **Intent**: reset password
		* The intent dropdown contains all of the intents within your associated domain. Use the search field or scroll down the list of intents to select the intent you want to surface this article.
	* **Summary**: Password resets can be done through the login screen. Please select “Forgot Password” to receive an email with instructions on how to reset your password.

	After completing these fields, click **Save** to create your article.

	<img style="width:800px" src="img/ConvoBuilder/advtutorial/edit_article.png">

6. Back in our Getting Started KB page, repeat this process to add additional articles with the following information: 

	* **Title**: Shipping costs
	* **Intent**: ask about shipping or pickup
	* **Summary**: We offer free ground shipping on all orders within the United States. Please allow 3-5 business days for all ground orders.

	* **Title**: Cancel my account
	* **Intent**: cancel account
	* **Summary**: If you would like to delete your account, this can be done from your “Account Profile” page, accessible by clicking the “My Account” link in the upper-right after logging in. Scroll to the bottom for the link and instructions to delete your account from our server.

7. Back in the **Getting Started KB** menu, confirm that the newly created articles are present in your list of articles. Note the **Inactive** designation, as all newly created articles need to be enabled prior to being accessible.

	<img style="width:800px" src="img/ConvoBuilder/advtutorial/article_list.png">

8. For each article, click the article title, scroll down to the **Enable Article** setting, and turn it on. Click **Save**.

	The knowledge base has now been created. Navigating back to Conversation Builder, next you will use the Knowledge AI interaction to access and display this content.

### Step 10: Create the FAQs dialog

In our **Service Bot**, we will now create a FAQs dialog which will be triggered by our FAQ meta intent. 

1. Navigate to **Conversation Builder**, and select the Service Bot, which at this point only includes the Escalation dialog.

2. Add a new standard dialog. Click **Add Dialog** in the lower-left corner, and give the dialog a name of "FAQs".

3. Using the Assist tool, associate the dialog starter with the LP_Cross-vertical and the FAQ meta intent. As you do, note the asterisk next to the FAQ intent, which serves to signify that it is a meta intent.

	<img style="width:800px" src="img/ConvoBuilder/advtutorial/assist1.png">
	<img style="width:800px" src="img/ConvoBuilder/advtutorial/assist2.png">

	This ensures that any of the intents within the FAQ meta intent will trigger this dialog.

4. From the **New Interaction** menu, select the **Knowledge AI** interaction. Once created, use the **Select knowledge base** dropdown to select the Getting Started KB. 

	<img style="width:600px" src="img/ConvoBuilder/advtutorial/kai_tile.png">

5. In the Knowledge AI interaction, select the **Settings** icon and navigate to the **Advanced** menu. The Knowledge AI offers several options in how to display the article contents. For this example, select the **Simple** option from the **Answer layout** dropdown. This will ensure that the results are displayed in the same conversational fashion as our other interactions. Keep all other fields as their defaults and select the **Save** button.

	<img style="width:600px" src="img/ConvoBuilder/advtutorial/kai_tile_2.png">

6. Test by opening the Preview tool, resetting your session, and typing in a variety of phrases to trigger the intents contained in your FAQ meta intent. If successful, you will receive different responses for each intent despite the fact that you have a single meta intent that triggers this dialog.

	<img style="width:350px" src="img/ConvoBuilder/advtutorial/kai_tile_output.png">

	This is successful because, while the meta intent triggers the process, we are sending the user’s message to our knowledge base. Each of the articles within the knowledge base are triggered by individual standard intents. Adding additional FAQ responses simply requires nesting new intents under the FAQ meta intent and creating a corresponding Getting Started KB article. No additional dialogs will be required.

	Congratulations on completing this tutorial series!
