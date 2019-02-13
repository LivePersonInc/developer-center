---
pagename: Getting Started - 4
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Tutorials
permalink: conversation-builder-tutorials-getting-started-part-4.html
indicator: both
---

To connect to a LiveEngage account for Agent handoff, we need to configure an API Integration. 

### Step 7: LiveEngage Escalation API Integration

From the Conversation Builder, navigate to the Integrations area.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_19.png">

From here we will create a new API with the following parameters. 

* Integration Name: Escalation

* Response Data Variable Name: Escalation

* Method: POST

* URL: 

  1. For US: https://platformservice.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

  2. For EU: https://platformservice-eu.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

  3. For APAC: https://platformservice-ap.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

* Request Headers:

  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Value (hit Enter after each field is added)</th>
    </tr>
    </thead><tbody>
    <tr>
      <td>Authorization</td>
      <td>YOUR PERMANENT API ACCESS KEY<br>
        This is found under your profile settings here:<br>
        <img style="width:300px" src="img/ConvoBuilder/helloworld/apiaccess.png"><br>
        Then tap on the API tab and copy the API Access Key<br>
        <img style="width:300px" src="img/ConvoBuilder/helloworld/permapikey.png">
      </td>
    </tr>
    </tbody>
  </table>


* Post Body:

  ```json
  {

  "userPlatformId" : "{$chatBotUserPlatformId}",

  "chatBotId": "{$chatBotId}",

  "message": "{$botContext.transferMessage}",

  "conversationId": "{$botContext.convId}",

    "agentSkillName": "<<ENTER SKILL NAME HERE>>",

    "agentSkillId": "<<ENTER SKILL ID HERE>>"

  }
  ```
	

**Save** the API settings.

Now we can return to the Dialog editor by tapping the Interactions icon.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_20.png">

To handle the flow for the Agent Handoff we need to create a new dialog and call it "Agent Handoff" or similar.

We can add a User Says interaction, with sample intent "I want to speak to an agent". In the Interaction Details > Settings we can create a pattern with alternates for keywords like `(agent|representative|help|human)`.

Next, we need to add our Integration interaction and select "Escalation" from the drop down. For this next part, we will need to leverage some JavaScript code to set some variables. While selected on the Integration interaction, tap on the CODE tab in the interaction details and then tap on the **+** icon next to Pre-Process Code. This will launch a JavaScript code window. 

<img style="width:300px" src="img/ConvoBuilder/helloworld/selectescalation.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/preprocesscode.png">


In order to guarantee that we provide an outgoing message to the user prior to handoff, we supply a message as part of the API called the transferMessage. The problem is, since we’re previewing in HTML (not a LiveEngage client), the escalation to LiveEngage won’t get called, so we need to provide a message to us for testing purposes. We can do this by adding the following JavaScript:

```javascript
var channel = botContext.getChannel();

var msg = "Hold on while I transfer you to an agent.";

if(channel == "web"){

  botContext.sendMessage(msg);

}else{

  botContext.setBotVariable('transferMessage',msg,true,false);

}
```