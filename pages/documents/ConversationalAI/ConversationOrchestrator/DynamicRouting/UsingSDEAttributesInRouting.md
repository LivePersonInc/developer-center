---
pagename: Using SDE attributes in Routing
Keywords:
redirect_from:
  - maven-ai-ai-powered-routing-using-sde-attributes-in-routing.html
  - maven-ai-dynamic-routing-using-sde-attributes-in-routing.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-using-sde-attributes-in-routing.html
indicator: messaging
---

[SDEs](engagement-attributes-types-of-engagement-attributes.html) are Structured Data Entities, for brands to report/include business, user, and context data in campaigns when conversations are initiated. SDEs provide a valuable way for brands to include additional context information to the conversation when the conversation is initiated. This type of context can then allow brands to provide more personalized conversational journeys for the consumers. This document describes how to use SDEs with Maven Routing. 

SDEs will be supported as an attribute in the Context Warehouse in future. However, we can use a LivePerson function to get an SDE and then use it in a policy. In the following example we are going to use the Company Branch SDE variable. 

## Create a Function to pull the SDE (unauth and/or auth) to the context warehouse

1. Login to LiveEngage and and navigate to Functions from the waffle menu in the bottom left corner 

   <img class="fancyimage" width="450" src="img/maven/live-engage-launcher.png"/>

2. Click “Create a Function”

   <img class="fancyimage" width="450" src="img/maven/faas-create-function-button.png"/>

3. In the “Select and event to see its available responses” drop down, select “No Event”
4. In the “Select a template to start your implementation” drop down select “Greeting Template” 
5. Click Continue
6. Do not whitelist any additional URLs, click Continue
7. Add a name and description to your Lambda and save.

   a. Example Name: Set_SDE_CustomerBranch_for_Dynamic_Routing

   b. Example Description: Sets authenticated SDE CustomerBranch in Context Warehouse for use in dynamic routing policies.

   c. Click the Create function button. 

8. In the editor, delete any existing code and add the code in the snippet below. 

   ```javascript
   // import FaaS Toolbelt
   const { Toolbelt, ConversationContentTypes } = require('lp-faas-toolbelt');
   
   // Create SDE/Conversation-Util instance
   const conversationUtil = Toolbelt.ConversationUtil();
   const sdeUtil = Toolbelt.SDEUtil();
   
   const sdeType = 'customerInfo';
   const sdeKey = 'companyBranch';
   
   
   
   async function getAuthCustomerInfo(conversationId) {
   // Parameters for authSDEs
   const contentToRetrieve = [
      ConversationContentTypes.SDES,
   ];
   
   // Get Conversation and extract SDEs
   const conversation = await conversationUtil.getConversationById(conversationId, contentToRetrieve);
   // sde interface https://developers.liveperson.com/liveperson-functions-development-toolbelt.html
   const sdes = sdeUtil.getSDEsFromConv(conversation);
   
   // Get certain type of array
   return sdes.sdes.events.filter(item => item.hasOwnProperty(sdeType));
   }
   
   
   async function getUnAuthCustomerInfo(conversationId) {
   // Parameters for unAuthSDEs
   const contentToRetrieve = [
      ConversationContentTypes.UNAUTH_SDES,
   ];
   
   // Get Conversation and extract SDEs
   const conversation = await conversationUtil.getConversationById(conversationId, contentToRetrieve);
   const sdes = sdeUtil.getSDEsFromConv(conversation);
   
   // Get certain type of array
   return sdes.unAuthSdes.events.filter(item => item.hasOwnProperty(sdeType));
   }
   
   
   async function getSdeValue(arrayOfCustomerInfo) {
   const sortedDescendingArrayOfCustomerInfo = arrayOfCustomerInfo.sort((a, b) => b.customerInfo.originalTimeStamp - a.customerInfo.originalTimeStamp);
   
   if (sortedDescendingArrayOfCustomerInfo
      && sortedDescendingArrayOfCustomerInfo[0]
      && sortedDescendingArrayOfCustomerInfo[0][sdeType]
      && sortedDescendingArrayOfCustomerInfo[0][sdeType][sdeType]
      && sortedDescendingArrayOfCustomerInfo[0][sdeType][sdeType][sdeKey]
      && sortedDescendingArrayOfCustomerInfo[0][sdeType][sdeType][sdeKey].length) {
      return sortedDescendingArrayOfCustomerInfo[0][sdeType][sdeType][sdeKey];
   }
   return '';
   }
   
   
   async function lambda(input, callback) {
   const conversationId = input.payload;
   try {
      // You can select and use one of the following two functions depending on your purpose.
      // * getAuthCustomerInfo : Reads data from auth SDE
      // * getUnAuthCustomerInfo : Reads data from unAuth SDE
      const arrayOfCustomerInfo = await getAuthCustomerInfo(conversationId);
      const sdeVal = await getSdeValue(arrayOfCustomerInfo);
   
      console.info(`Fetched following SDE ${sdeVal} for ${conversationId}`);
      callback(null, sdeVal);
   } catch (e) {
      console.error(`Received ${error.message} during obtaining SDE's for ${conversationId}`);
      callback(e, null);
   }
   }
   ```

9. Save the changes

10. In the actions column, Deploy the function.


## Create the Context Warehouse Attribute

1. Access the Conversation Orchestrator area of Conversational Cloud 

2. Navigate to the Custom option under Context Warehouse 

3. Select Add New to create a new custom context attribute

4. Name the attribute CustomerBranch

5. Under Type, select Function 

6. In the Function drop down select the Lambda name that you created in the previous step.

7. In parameters dropdown select “attribute”.

8. In “Choose an Attribute” select “conversation.conversationId”

9. Save the custom attribute


## Create the routing policy

1. In the Conversation Orchestrator Navigate to Intent and Context Policies

2. Click Add Policy to create a new routing policy

3. Name the policy 

4. Under Conditions, select the “custom.CustomerBranch” attribute you created in the previous step

5. Add operator “=” (EQUALS)

6. In the Enter a Value space, enter for example “Sales Branch” - note this should be the same as the value of the SDE you will be sending through the messaging client.

7. In Actions, select “Transfer to Skill”

8. Select the skill you want to route to. 

9. Save your policy

10. Enable the policy for it to start routing.