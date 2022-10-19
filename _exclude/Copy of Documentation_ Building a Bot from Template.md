---
pagename: Getting Started Tutorial2
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Templates
permalink: conversation-builder-conversation-templates-getting-started-tutorial2.html
indicator: both
---

## Create Bot from Template

1. Create a new automation: ![](image_1.png)

2. Fill in the required info, builder version should be 2.0: ![](image_2.png)

3. Choose template and click the “Save” button: ![](image_3.png)

4. The bot now appears in Bot Builder dashboard and can now be edited: ![](image_4.png)

5. You can change bot name in Automation Settings: ![](image_5.png)

- and click the “Save” button to save changes: ![](image_6.png)

6. In the integration settings, choose CHECK_ORDER_STATUS integration and fill client_id parameter, header Authorization and click the “Save” button: ![](image_7.png)![](image_8.png)

7. You can edit texts in bot messages: ![](image_9.png)

* Change text and click save:

![](image_10.png)

![](image_11.png)

## Integrate with Skill on LiveEngage

8. To enable your bot to pick up the conversation correctly, you need to integrate it to LiveEngage platform. To do this, login to your LE account first.

9. Select Users tab and click on Skills link

10. Down there click on the “Add skill” button to navigate to a new skill creation form.

![](image_12.png)

11. Specify Skill name, Skill description and click on the “Save” button. The skill routes to your bot, so it is recommended to name it properly to match the main purpose of your bot or bot name, i.e. the bot that gives the information about the shop promotions can have BotAgent skill. Such explicit skill names will help to quickly differentiate many skills in the list. ![](image_13.png)

12. Now when the skill is created, it should have a corresponding user.

13. Navigate to Users tab and click on the “Add user” button: ![](image_14.png)

14. In the creation form, add the following user info:

* Select Bot as User type

* Specify Login name, Nickname and Name (it’s recommended to use the same name)

* Specify account admin email

* Select a login method as API key

* In API key dropdown select to generate new keys or select existing

* In Assignment dropdown select Agent: ![](image_15.png)

* In Skills dropdown select the skill created in the previous step: ![](image_16.png) 

- Click on the “Save” button and check enabled switcher position: ![](image_17.png)

15. After you have set up the LE integration for your bot, navigate to your bot in Conversation Builder account and click on Enterprise integrations link that you can find in the Settings: ![](image_18.png)

16. Select LivePerson in the dropdown: ![](image_19.png)

17. Select your Organization name and click on Add Agent: ![](image_20.png)

18. In pop up provide the following  information:

* Your LE account id

* LE login name provided for user

* Select role of Assigned Agent

* Set Authentication type as OAuth

* Navigate to user settings in LE to copy and paste into pop up fields: Application key, Application secret, Access token and Token secret: ![](image_21.png)

* Click the “Save” button and then the “Play” button: ![](image_22.png)
