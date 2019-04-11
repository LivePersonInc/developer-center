---
pagename: Templates Tutorial
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-templates-tutorial.html
indicator: both
---

In this tutorial, you will see the steps involved in using pre-made automation templates with Conversation Builder.

You will choose a template, review what the template includes, configure the items that must be unique to your own deployment, and connect to LiveEngage.

### Create a Bot from a Template

1. Create a new automation

    <img style="width:500px" src="img/ConvoBuilder/libraries/newautomation.png">

2. Fill in the required Bot info. 

    {: .important}
    Builder version must be 2.0

    <img style="width:700px" src="img/ConvoBuilder/libraries/createsettings.png">

3. Choose a template and click SAVE.

    <img style="width:700px" src="img/ConvoBuilder/libraries/choosetemplate.png">

### Review What Has Been Created

4. Select the newly created Bot from the Dashboard.

    <img style="width:600px" src="img/ConvoBuilder/libraries/selectbot.png">

5. Navigate to Automation Settings and Select the appropriate DOMAIN from the drop down for Entity.

    <img style="width:700px" src="img/ConvoBuilder/libraries/selectdomain.png">

### Configure

6. In order to configure Bot integration with services (e.g. Shopify), Click on Integration Settings. <img style="width:200px" src="img/ConvoBuilder/libraries/integrationsettings.png">

    - Select the Bot.
    
    - Provide Authorization info.

    <img style="width:700px" src="img/ConvoBuilder/libraries/provideauth.png">

    - Ensure `client_id parameter` and `header Authorization` are filled in and click SAVE.

    <img style="width:700px" src="img/ConvoBuilder/libraries/fillinauthdetails.png">

7. Add interactions from the left panel. Edit interactions by selecting them.

    <img style="width:700px" src="img/ConvoBuilder/libraries/addinteractions.png">

    - After every change to interactions, be sure to click on the interaction menu and SAVE.

    <img style="width:700px" src="img/ConvoBuilder/libraries/saveinteractions.png">

8. Add intents, entities and responses to the Bot interactions by selecting the Assist functionality.

    <img style="width:700px" src="img/ConvoBuilder/libraries/addintents.png">

9. Test and validate the Bot and user interactions by selecting the Messaging Client on the right panel.

    <img style="width:700px" src="img/ConvoBuilder/libraries/test.png">

### Connect the Bot with a Skill on LiveEngage

1. Create a skill.

    - Select Users tab and click on Skills link. Click on Add skill button to navigate to a new skill creation form.

    <img style="width:600px" src="img/ConvoBuilder/libraries/addskill.png">

    - While filling the Skill info, we recommend matching the Skill name to the Bot name or to the use case it covers. This will help enable agents to also quickly handoff to the appropriate Bots.

    <img style="width:600px" src="img/ConvoBuilder/libraries/skillname.png">

2. Create a user.

    - Once the skill is created, a corresponding user needs to assigned. 

    - Navigate to Users tab and click on Add user button

    <img style="width:500px" src="img/ConvoBuilder/libraries/adduser.png">
   
3. Add the following user info:

    - Select Bot as User type
    - Specify Login name, Nickname and Name (it’s recommended to use the same name)
    - Specify account admin email
    - Select a login method as API key
    - In API key dropdown select to generate new keys or select an existing key
    - In Assignment dropdown select Agent

    <img style="width:500px" src="img/ConvoBuilder/libraries/usersettings.png">

4. In the Skills dropdown list, select the skill created in the previous step

    <img style="width:500px" src="img/ConvoBuilder/libraries/assignskill.png">

5. Click Save and check to ensure that the user is Enabled.

    <img style="width:600px" src="img/ConvoBuilder/libraries/saveuser.png">

6. After configuring the Bot on LiveEngage, the Bot settings will need to be updated in the Conversation Builder.

    - Access the Bot on Conversation Builder and return to Settings.
    Click on Enterprise Integrations.

    <img style="width:500px" src="img/ConvoBuilder/libraries/enterpriseintegrations.png">

    - Select LivePerson from the list.

    <img style="width:500px" src="img/ConvoBuilder/libraries/selectLP.png">

7. Enter your Organization’s name and Click on Add Agent. Provide the following information:

    - LiveEngage account id.
    - LiveEngage login name provided for user.
    - Select role of Assigned Agent.
    - Set Authentication type as ‘OAuth’.
    
    Additional info will be available in LiveEngage User settings.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/libraries/orgdetails.png">

8. Navigate back to User settings in LiveEngage. Copy and paste the following info into the respective fields: 

    - Application key
    - Application secret
    - Access token 
    - Token secret

    <img style="width:500px" src="img/ConvoBuilder/libraries/apikeys.png">
9. Upon filling all the fields, Click SAVE, followed by the Play button.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/libraries/saveplay.png">
