---
pagename: Recommended Actions for Knowledge Base
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Maven Assist
permalink: maven-maven-assist-recommended-actions-for-knowledge-base.html
indicator: both
---

### Setup Recommended Actions - Knowledge Base

#### 1. Enable Recommended Actions Widget in Live Engage

You will first need to enable the feature in LiveEngage. Please call LivePerson support or your LivePerson customer representative to enable this feature. 

#### 2. Create Knowledge Base articles in Conversation Builder

Before Maven can start recommending articles in the widget you need to create some content. You may continue to add more content at any time after the setup, but it is suggested to create at least one article so you can verify that your setup was completed. 

1. Login to [LiveEngage](https://server.iad.liveperson.net/hc/web/public/pub/ma/lp/login.jsp?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~) and select the **Automation Tab**

2. Select the **Build and manage bots** link from the left hand menu

3. Click the **Knowledge Base** button on this page

    <img class="fancyimage" width="600" src="img/maven/image_27.png">

4. Add or Edit a Knowledge Base from here (Create a Source and Article)

5. Click the Approve button on the Article

    <img class="fancyimage" width="600" src="img/maven/image_28.png">

6. Once you have created one, go back to the main screen

7. Click on the **User Icon** in the top right corner, and select **Settings**

8. **Copy** the **API Access Key**, as you will need this in the next set of steps

#### 3. Configure Maven to use Knowledge base articles

1. Login to Maven with your LiveEngage credentials and then navigate to Maven Assist > Recommended Actions - KB. 

2. Paste the API access key that you copied in the previous step in the API Access Key text field, and then click save. Once you save, you should expect to see the Knowledge base you created previously. 

    <img class="fancyimage" width="600" src="img/maven/image_29.png">

### Using Recommended Actions - KB

#### 1. Get relevant KB suggestions

1. Start a new messaging conversation from the consumer side

2. Open LiveEngage and accept the conversation. This will open the conversation window

3. Check to see if Recommended Actions Widget is visible

    <img class="fancyimage" width="600" src="img/maven/image_30.png">

4. From the consumer side enter a message that is relevant to a KB article you want to be triggered. In this example the user is asking about how to cancel an order

    <img class="fancyimage" width="600" src="img/maven/image_31.png">

#### 2. Use suggestion in a conversation

1. Click the **Use Article** button to copy the text to the agent’s text input area. You may choose to edit the text before sending it to the consumer

    <img class="fancyimage" width="600" src="img/maven/image_32.png">

#### 3. Use Up/Down voting buttons to actively train the model

1. Click the **Vote up **or **Vote down **buttons to provide feedback on the suggestions. Voting up tells the model that it was a relevant suggestion, while voting down tells it that it’s not. The relevance score is calibrated against this feedback so that Maven can continuously improve it’s recommendations and provide the most relevant content to agents.  

    <img class="fancyimage" width="600" src="img/maven/image_33.png">