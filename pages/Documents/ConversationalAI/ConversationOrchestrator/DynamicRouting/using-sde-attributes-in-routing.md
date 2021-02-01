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

### Introduction

[Structured Data Entities](engagement-attributes-types-of-engagement-attributes.html) (SDEs) are for brands to report/include business, user, and context data in campaigns when conversations are initiated. SDEs provide a valuable way for brands to include additional context information to the conversation when the conversation is initiated. This type of context can then allow brands to provide more personalized conversational journeys for consumers. This topic describes how to use SDEs with Conversation Orchestrator routing.

Some SDEs are directly available in the dynamic routing interface and can be used to create policies, but for others LivePerson Functions need to be used.
 
### Create policies using SDEs that are automatically available for routing
 
The following SDEs are already available in the dynamic routing interface and can be directly used for creating policies:
 
* sde.visitorinfo.customerinfo.ctype
* sde.visitorinfo.customerinfo.cstatus
* sde.visitorinfo.customerinfo.balance
* sde.visitorinfo.customerinfo.customerid
* sde.visitorinfo.customerinfo.socialid
* sde.visitorinfo.customerinfo.imei
* sde.visitorinfo.customerinfo.username
* sde.visitorinfo.customerinfo.companysize
* sde.visitorinfo.customerinfo.companybranch
* sde.visitorinfo.customerinfo.accountname
* sde.visitorinfo.customerinfo.role
* sde.visitorinfo.customerinfo.lastpaymentdate
* sde.visitorinfo.customerinfo.registrationdate
* sde.visitorinfo.customerinfo.loginstatus
* sde.visitorinfo.personalinfo.age
* sde.visitorinfo.personalinfo.gender
* sde.visitorinfo.personalinfo.language
* sde.visitorinfo.personalinfo.company

**Note:** Three of the SDEs are objects. Please use the appropriate [SDE attribute names](engagement-attributes-types-of-engagement-attributes.html) for these:
 
* **sde.visitorinfo.customerinfo.lastpaymentdate**
* sde.visitorinfo.customerinfo.lastpaymentdate.day
* sde.visitorinfo.customerinfo.lastpaymentdate.month
* sde.visitorinfo.customerinfo.lastpaymentdate.year
 
* **sde.visitorinfo.customerinfo.registrationdate**
* sde.visitorinfo.customerinfo.registrationdate.day
* sde.visitorinfo.customerinfo.registrationdate.month
* sde.visitorinfo.customerinfo.registrationdate.year
 
* **sde.visitorinfo.customerinfo.age**
* sde.visitorinfo.customerinfo.age.age
* sde.visitorinfo.customerinfo.age.day
* sde.visitorinfo.customerinfo.age.month
* sde.visitorinfo.customerinfo.age.year

**To use the above SDEs for routing**
 
**Step 1: Enable SDEs for routing**

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/convorchestrator/icon_ai_menu.png"> icon.
2. In the Conversational AI dashboard, click **Conversation Orchestrator**.
3. Under **Conversation Context Service**, click **Structured Data Entities**.
4. Scroll down to **Enable Context Service to store SDE values**, and turn on the **enabled** setting.
  <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_sdemenuitem.png">

**Step 2: Create a policy**

1. In the Conversation Orchestrator, navigate to **Intent and Context Policies**.
2. Click **Add Policy** to create a new routing policy.
3. Name the policy.
4. Under **Conditions**, select any of the available SDE attributes. 
       
   Example: sde.visitorinfo.customerinfo.companybranch
   <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_managepolicies.png">
5. Select an operator from the available list of operators. 
       
    Example: “=” (EQUALS)
6. Select the data type.

    Example: string
7. In the **Enter a value** field, enter a value, for example, “Sales Branch.” This should be the same as the value of the SDE you will be sending through the messaging client.
8. In **Actions**, select “Transfer to Skill.”
9. Select the skill you want to route to.
10. Save your policy.
11. Enable the policy for it to start routing.
 
### Create policies using SDEs that are not automatically available for routing
 
#### High-level process
 
1. Write a function to retrieve the SDE and add it to the Conversation Context Service.
2. Make the SDE available in the dynamic routing interface.
3. Create the policy.
 
#### Detailed process
 
**Step 1: Create a function to pull the SDE to the Conversation Context Service**

1. Log in to Conversational Cloud, and navigate to **Functions** from the waffle menu in the lower-left corner.
  <img class="fancyimage" width="500" src="img/convorchestrator/co_dr_functionsmenuitem.png">
2. Click **Create a function**.
3. In the **Select an event to see its available responses** dropdown, select “No Event.”
4. In the **Select a template to start your implementation** dropdown, select “Greeting Template.”
5. Click **Continue**.
6. Do not whitelist any additional URLs; click **Continue**.
7. Add a name and description to your Lambda, and save.

   Example Name: Set_SDE_StoreNumber_for_Dynamic_Routing

   Example Description: Sets authenticated SDE StoreNumber in Conversation Context Service for routing
8. Click **Create function**.
  <img class="fancyimage" width="500" src="img/convorchestrator/co_dr_createfunction.png">
9. In the editor, delete any existing code, and add the code in the snippet below.

```javascript
  // import FaaS Toolbelt
const { Toolbelt, ConversationContentTypes } = require('lp-faas-toolbelt');
   
// Create SDE/Conversation-Util instance
const conversationUtil = Toolbelt.ConversationUtil();
const sdeUtil = Toolbelt.SDEUtil();
   
const sdeType = 'customerInfo';
const sdeKey = 'storeNumber';
   
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

Save the changes. Then, in the **Actions** column, deploy the function.

**Step 2: Create the Conversation Context Service attribute in the Dynamic Routing interface**

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/convorchestrator/icon_ai_menu.png"> icon.
2. In the Conversational AI dashboard, click **Conversation Orchestrator**.
3. Under **Conversation Context Service**, navigate to the **Custom** option.
4. Select **Add New** to create a new custom context attribute.
5. Name the attribute “storeNumber.”
6. Under **Type**, select "Function."
7. In the **Function** dropdown, select the Lambda name that you created in the previous step.
8. In the parameters dropdown, select “attribute.”
9. In **Choose an Attribute**, select “conversation.conversationId.”
10. Save the custom attribute.

**Step 3: Create the routing policy**

1. In the Conversation Orchestrator, navigate to **Intent and Context Policies**.
2. Click **Add Policy** to create a new routing policy.
3. Name the policy.
4. Under **Conditions**, select the “custom.storeNumber” attribute you created in the previous step.
5. Add the operator “=” (EQUALS).
6. Select the data type.

    Example: string
7. In the **Enter a value** field, enter a value, for example, “12131.” This should be the same as the value of the SDE you will be sending through the messaging client.
8. In **Actions**, select “Transfer to Skill.”
9. Select the skill you want to route to.
10. Save your policy.
11. Enable the policy for it to start routing.
