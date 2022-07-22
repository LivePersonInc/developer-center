---
pagename: Your First Function
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Getting Started
permalink: liveperson-functions-getting-started-your-first-function.html
indicator: both
---

If this is the first time you visit the LivePerson Function platform, you are greeted by the User Agreement Window. In the background, the [provisioning](liveperson-functions-provisioning.html) of the account is automatically performed. In this small walk-through, you will create a function that takes a name as input and use it to greet the caller.

{: .notice}
When you use the LivePerson Functions platform for the first time please make sure that you are using a Conversational Cloud Admin account to ensure that the [provisioning](liveperson-functions-provisioning.html) of the account succeeds.

{: .important}
As this is a quick guide, we will not go into details on all the available options for this. Please refer to the [configure page](liveperson-functions-getting-started-configuration.html) or the [deep dive UI](liveperson-functions-getting-started-development-deep-dive-ui.html).

### Create

Let's start setting up your very first function and deploying it to the LivePerson Functions platform.
1. After logging into the FaaS Functions platform, the overview page is shown. Navigate to the function management view to create a function by clicking on the "Lambda" icon on the left-hand side.
 <img class="fancyimage" alt="Functions: Home screen" src="img/functions/functions_home.png">
2. This view shows you all created functions on your account. Click on the "Create a Function"-button to get started.
 <img class="fancyimage" alt="Functions: initial function overview" src="img/functions/functions_initial_create_function.png">
3. To keep it simple, we proceed with the default selection "No Event" and "Greeting Template". On the right-hand side, you see the code that is generated based on your selection. Toggle the "Access to external domains required" switch to "No", as we will not use external resources in this walk-through.
 <img class="fancyimage" alt="Functions: first step creating function" src="img/functions/functions_first_step_create_function.png">
4. Now, you can provide a name and description for your function. The description field allows you to inform others what this function is supposed to do. Enter both a name and description of your liking, e.g. `greeter` as name and description reading `This function greets the caller`.
 <img class="fancyimage" alt="Functions: name and approve function creation" src="img/functions/functions_name_function.png">
5. Create the function by clicking on "Create Function".
6. After the function creation, an editor with the function code is displayed. For details on the shown elements, refer to the [deep dive UI](liveperson-functions-getting-started-development-deep-dive-ui.html). We will only focus on the displayed code for now.
7. A function is getting a payload containing the Event Source / Trigger information. We will leverage this payload to obtain the `name` of the caller to adjust the greeting message.
8. Make the following adjustments:
    * In the editor modify the existing line `callback` to be ``callback(null, `Hello ${input.payload.name}`);``.
    * In the editor, add a new line before the callback line with the following content ``console.info(`I was called by ${input.payload.name}`);``.
 <img class="fancyimage" alt="Functions: modify lambda code" src="img/functions/functions_modify_code.png">
9. Notice how there is a message next to the "Save"-button reading "Unsaved changes". This informs you if there are any pending changes to the code.
10. Go ahead and save the modified code by pressing "Save"-button.
11. During the save process, you will see a short notification that it succeeded. Further, the message next to the "Save"-button now reads "No changes to Save".
12. Now, you can leave the editor by pressing the "Close"-button.
13. Head to the [Deployment section](#deploy) as you finish creating and adjusting your first function.

### Deploy

1. Select the context menu by clicking on the three dots button next to the function you just created.
2. Select "Deploy Function".
 <img class="fancyimage" alt="Functions: deploy function" src="img/functions/functions_deploy_function.png">
3. You are shown a short dialogue that displays the code that gets deployed. For now, click on the "Approve & Deploy"-button.
 <img class="fancyimage" alt="Functions: approve deployment" src="img/functions/functions_approve_deployment.png">
4. Wait until the function status changes to `Productive`. Please be aware that this can take some time.
5. Head to the [Test section](#test), as you finish deploying your first function.

### Test

1. To test your function, you can leverage our test invocation. This page can be reached by pressing the "Play"-button next to your deployed function.
 <img class="fancyimage" alt="Functions: invoke function" src="img/functions/functions_select_invoke.png">
2. The test page comes with the basic payload structure. To provide the `name`-parameter to the function, you want to add a new attribute to `payload` with a name of your liking.
 <img class="fancyimage" alt="Functions: modify invocation payload" src="img/functions/functions_modify_payload.png">
3. Now, you can test your function by pressing the "Invoke"-button.
4. After the invocation is finished, you can see that the output and logs section is populated with the data from your test invocation:
    * In the output section, you can see `Hello YOURNAME`.
    * In the logs section, you can see an entry with the message reading `I was called by YOURNAME`.
 <img class="fancyimage" alt="Functions: invocation result" src="img/functions/functions_invocation_result.png">
5. You may now close the testing page by pressing the "Close"-button.
6. Head to the [Cleanup section](#cleanup), as you finished testing your first function.

### Cleanup

1. Select the context menu by clicking on the "three dots"-button next to the function you just tested.
2. Click on "Undeploy Function" in the dialogue and confirm the dialogue by pressing "Undeploy now".
 <img class="fancyimage" alt="Functions: undeploy function" src="img/functions/functions_undeploy_function.png">
3. Wait until the status of the function is changed to "Draft". This may take a while.
4. Select the context menu by clicking on the "three dots"-button next to the function you just undeployed.
5. Click on "Remove Function" in the dialogue and confirm the dialogue by pressing "Remove now".
 <img class="fancyimage" alt="Functions: delete function" src="img/functions/functions_delete_function.png">
6. You just finished your first walk-through..

> During the walk-through, you created a new function based on the default settings and modified the generated code. Then, you deployed it. You tested the function by performing a test invocation and observed the output of the invocation. Finally, you first undeployed your function and then removed it, cleaning up your account.
