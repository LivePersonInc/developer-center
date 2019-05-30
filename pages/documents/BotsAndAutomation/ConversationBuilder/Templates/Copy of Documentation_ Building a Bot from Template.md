---
pagename: Getting Started Tutorial2
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Conversation Templates
permalink: conversation-builder-conversation-templates-getting-started-tutorial2.html
indicator: both
---

## Create Bot from Template

1. Create new automation![image alt text](image_1.png)

2. Fill in the required info, builder version should be 2.0 :
![image alt text](image_2.png)

3. Choose template and click SAVE button ![image alt text](image_3.png)

4. The bot now appears in Bot Builder dashboard and can now be edited.
![image alt text](image_4.png)

5. You can change bot name in Automation Settings

![image alt text](image_5.png)

- and click SAVE button to save changes

![image alt text](image_6.png)

6. In the integration settings, choose CHECK_ORDER_STATUS integration and fill client_id parameter, header Authorization and click SAVE button.![image alt text](image_7.png)![image alt text](image_8.png)

7. You can edit texts in bot messages![image alt text](image_9.png)

   	

* Change text and click save

![image alt text](image_10.png)

![image alt text](image_11.png)

## Integrate with Skill on LiveEngage

8. To enable your bot to pick up the conversation correctly, you need to integrate it to LiveEngage platform. To do this, login to your LE account first.

9. Select Users tab and click on Skills link

10. Down there click on Add skill button to navigate to a new skill creation form.

![image alt text](image_12.png)

11. Specify Skill name, Skill description and click on Save button. The skill routes to your bot, so it is recommended to name it properly to match the main purpose of your bot or bot name, i.e. the bot that gives the information about the shop promotions can have BotAgent skill. Such explicit skill names will help to quickly differentiate many skills in the list.![image alt text](image_13.png)

12. Now when the skill is created, it should have a corresponding user. 

13. Navigate to Users tab and click on Add user button![image alt text](image_14.png)

14. In the creation form, add the following user info:

* Select Bot as User type

* Specify Login name, Nickname and Name (it’s recommended to use the same name)

* Specify account admin email

* Select a login method as API key

* In API key dropdown select to generate new keys or select existing

* In Assignment dropdown select Agent

![image alt text](image_15.png)

* In Skills dropdown select the skill created in the previous step

![image alt text](image_16.png) 

- Click on Save button and check enabled switcher position

![image alt text](image_17.png)

15. After you have set up the LE integration for your bot, navigate to your bot in Conversation Builder account and click on Enterprise integrations link that you can found in the Settings.![image alt text](image_18.png)

16. Select LivePerson in the dropdown

![image alt text](image_19.png)

17. Select your Organization name and click on Add Agent

![image alt text](image_20.png)

18. In pop up provide the following  information:

* Your LE account id

* LE login name provided for user

* Select role of Assigned Agent

* Set Authentication type as OAuth

* Navigate to user settings in LE to copy and paste into pop up fields: Application key, Application secret, Access token and Token secret![image alt text](image_21.png)

 

* Click Save button and then Play button

![image alt text](image_22.png)

