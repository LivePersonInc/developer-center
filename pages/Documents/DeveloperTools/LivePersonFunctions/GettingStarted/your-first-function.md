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

It may be that this your very first time entering the Functions UI, in this case you are greeted by the User Agreement Window. During the Agreement also the provisioning of the account is performed, for more details on what exactly happens check out [this page](liveperson-functions-provisioning.html). In this small walk-through you will create a function that is taking a name as input and using it to greet the caller.

{: .notice}
As this is a quick guide we won't go into details on all the available options, for this please refer to the [configure page](liveperson-functions-getting-started-configure.html) or the [deep dive UI](liveperson-functions-getting-started-deep-dive-ui.html).

### Create

Let's start the process for setting up your very first function and deploying it to the LivePerson Functions platform.
1. After logging into the FaaS Functions platform you will be shown the overview-page. However, in order to create function we need to go the function management view. This can be achieved by clicking on the Lambda-Symbol on the left-hand side
 <img class="fancyimage" alt="Functions: Home screen" src="img/functions/functions_home.png">
2. This view will show you all created function on your account. Given you did not create any functions yet, a button inviting your to create your first function will be displayed. Please click on the "Create a Function"-Button next to the table header
 <img class="fancyimage" alt="Functions: initial function overview" src="img/functions/functions_initial_create_function.png">
3. To keep it simple we will leave the default selection, which are "No Event" and "Greeting Template". On the right-hand side you will see the code that is generated based on your selection
 <img class="fancyimage" alt="Functions: first step creating function" src="img/functions/functions_first_step_create_function.png">
4. Before we "Continue" to the next step, go ahead and toggle the button below "Access to external domains required", as we will not use external resources in this walk-through
5. Now you are able to provide a name and description for your function, the description field allows you not inform others what this function is supposed to do. Please go ahead and enter both a name and description of your liking e.g. `greeter` as name and description reading `This functions greets the caller`
 <img class="fancyimage" alt="Functions: name and approve function creation" src="img/functions/functions_name_function.png">
6. Please go ahead and create the function by clicking on "Create Function"
7. After the function creation an editor with the function coding should be displayed. For details on the shown elements please refer to the [deep dive UI](liveperson-functions-getting-started-deep-dive-ui.html). We will only focus on the displayed coding for now.
8. A function is getting a payload containing information provided from the Event Source/ Trigger. We will leverage this payload to obtain the `name` of the caller. In order to adjust the greeting message
9. Please go ahead and make the following adjustments
    * In the editor modify the existing line `callback` to be ``callback(null, `Hello ${input.payload.name}`);``
    * In the editor add a new line before the callback line with the following content ``console.info(`I was called by ${input.payload.name}`);``
 <img class="fancyimage" alt="Functions: modify lambda code" src="img/functions/functions_modify_code.png">
10. Notice how there is a message next to the "Save"-Button reading "Unsaved changes", this will inform you if there are any pending changes to the coding
11. Go ahead and save the modified coding by pressing "Save"-Button
12. During the save process you will see a short notification that it succeeded. Further the message next to the "Save"-Button should now read "No changes to Save"
13. Now you can leave the editor by pressing the "Close"-Button
14. Please head to the [Deployment section](#Deploy), as you finished creating and adjusting your first function

### Deploy

1. Select the context menu by clicking on the three dots button next to the function you just created
2. Select "Deploy Function"
 <img class="fancyimage" alt="Functions: deploy function" src="img/functions/functions_deploy_function.png">
3. You will be shown a short dialog that display the code that will be deployed. For now please click on "Approve & Deploy"-Button
 <img class="fancyimage" alt="Functions: approve deployment" src="img/functions/functions_approve_deployment.png">
4. Wait until the function status changes to `Productive`, please be aware this can take some time
5. Please head to the [Test section](#Test), as you finished deploying your first function

### Test

1. In order to test your function you can leverage our test invocation This page can be reached by pressing the Play-Button next to the function you deployed.
 <img class="fancyimage" alt="Functions: invoke function" src="img/functions/functions_select_invoke.png">
2. The test page comes with the basic payload structure, in order to provide the `name`-parameter to the function you want to add a new attribute to `payload` with a name of your liking
 <img class="fancyimage" alt="Functions: modify invocation payload" src="img/functions/functions_modify_payload.png">
3. Now you are able to test your function by pressing the "Invoke"-Button
4. After the invocation is finished you should be seeing that the output and logs section is populated with the data from your test invocation
    * In the output section you should see `Hello YOURNAME`
    * In the logs section you should see a entry with the message reading `I was called by YOURNAME`
 <img class="fancyimage" alt="Functions: invocation result" src="img/functions/functions_invocation_result.png">
5. You may now close the testing page by pressing the "Close"-Button
6. Please head to the [Cleanup section](#Cleanup), as you finished testing first function

### Cleanup

1. Select the context menu by clicking on the three dots button next to the function you just tested
2. Click on "Undeploy Function" in the dialog and confirm the dialog by pressing "Undeploy now"
 <img class="fancyimage" alt="Functions: undeploy function" src="img/functions/functions_undeploy_function.png">
3. Wait until the status of the function changed to "Draft", this may take a while
4. Select the context menu by clicking on the three dots button next to the function you just undeployed
5. Click on "Remove Function" in the dialog and confirm the dialog by pressing "Remove now"
 <img class="fancyimage" alt="Functions: delete function" src="img/functions/functions_delete_function.png">
6. You just finished your first walk-through.

> During the walk-through you create a new function based on the default settings and modified the generated coding. Than you deployed it. You tested the function by performing a test invocation and observed the output of the invocation. Finally you first undeployed your function and than removed it, cleaning up your account.
