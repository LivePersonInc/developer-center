---
pagename: Deep Dive UI
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Getting Started
permalink: liveperson-functions-getting-started-deep-dive-ui.html
indicator: both
---

It may be that this your very first time entering the Functions UI, in this case you are greeted by the User Agreement Window. During the Agreement also the provisioning of the account is performed, for more details on what exactly happens check out [this page](liveperson-functions-provisioning.html). In this deep dive we will look into how functions can be managed and configured via our webinterface. If you want to learn how to interact with the functions platform via our commandline interface head over to the [deep dive](liveperson-functions-getting-started-deep-dive-cli.html) for it.

### Creation Process

In order to create new functions you will need to head to the function management view by using the Lambda-Symbol in the sidepannel on the left-hand side. Here you can see all available functions on the account and there current state, the following states can be hold by a function:

* **Draft:** Function is not yet deployed
* **Productive:** Function is deployed and does not have any pending modifications
* **Modified:** Function is deployed and does have pending modifications
* **Marked Undeployed:** Function is currently in the process of being undeployed
* **Build Error:** Function was attempted to be deployed, but the building failed
* **Deploy Error:** Function was attempted to be deployed, but the deployment failed

In order to create a new function you need to press the "Create a Function"-Button displayed next to the header of the functions table.

<img class="fancyimage" alt="Functions: invoke function" src="img/functions/functions_select_invoke.png">

#### Step: Coding Details

On the first page of the stepper you will see various information related to the coding details. One of the information that are presented is the NodeJS version used within the function. The editor on the right side will always show you the initial coding that will be generated based on your selections.

You may choose a event to react to from the dropdown, the default value is `No Event`. For a overview of all available events head over to our [Event Sources](liveperson-functions-event-sources-overview.html). Some of the events may have a variety of Templates available to you.

At the bottom of the page you can see a toggle that will activate/deactivate the second step, that allows you to configure a [whitelist](liveperson-functions-foundations-features.html#domain-whitelisting) entry.

// TODO: Consider speaking about Skills here, but that should also be mentioned at the event source article.

#### Step: Domain Whitelisting

When adding a domain to the whitelist you should always consider some common pitfalls. First make sure your domain is not redirecting, because in this case you also need to whitelist any domain that is part of the redirection chain. A good way to test if your domain redirecting, if you are unsure, is to leverage the following command:

```sh
    $ curl -v -L YOUR_DOMAIN 2>&1 | grep -i "^< location:"
```

Example:

The following example shows that when calling `http://google.com` a redirection to `http://www.google.com/` is performed.

```sh
    $ curl -v -L http://google.com 2>&1 | grep -i "^< location:"
    < Location: http://www.google.com/
```

Next make sure when working with subdomains that you whitelisted the correct domain. Lets say you are visiting `https://www.liveperson.com` and therefore whitelisted `liveperson.com`. Than you fell into the trap, because `www.` is a subdomain, instead the correct domain to whitelist would be `www.liveperson.com` or `*.liveperson.com`.

Finally as shown above we do support the use of wildcards by setting `*`. But you should be aware that we only support one wildcard in the domain meaning that `*.*.liveperson.com` is not possible, while `*.liveperson.com` is possible.

<img class="fancyimage" alt="Functions: Add whitelist step" src="img/functions/functions_add_whitelist_step.png">

The domain is added by inserting it and then clicking the "Add"-Button next to the input field. Once it is saved it will be reflected in the domain list below.

{: .notice}
Please be aware that adding a domain can take up to 5 minutes until being "active"

#### Step: Function Description

In this final step you will need to provide a name and a description for your function. Usually the description is meant to inform other users what a function is supposed to do, if the name is not already explaining this. Please be aware that names within an account need to be unique, so you may leverage the same function name in multiple accounts. But only once within a single account.

<img class="fancyimage" alt="Functions: name and approve function creation" src="img/functions/functions_name_function.png">

### Deployment Process

The deployment process can be started by pressing on the three dots next to the function you like to deploy. In the context menu please select "Deploy Function". Once you pressed the button you will be presented with the Deployment Approval dialog, here you have a final chance to see which code will be deployed.

<img class="fancyimage" alt="Functions: approve deployment" src="img/functions/functions_approve_deployment.png">

As mentioned previously a deployment can encounter an error either in the build or deployment-stage. In both cases please attempt a retry after a couple of minutes to see if the issue is persisting.

### Testing your Function

In order to test your function you can leverage our test invocation. This page can be reached by pressing the Play-Button next to the function you deployed.

<img class="fancyimage" alt="Functions: modify invocation payload" src="img/functions/functions_modify_payload.png">

The displayed payload will be different based on the event you selected initially. You are able to modify the payload prior to performing the invocation. This should enable you to test and debug edge-cases within your function.

The output of the call will be presented on the "Output"-Area. Along with logs created by the invocation, these can be found in the log section. If you want to learn more about the logs head over to [here](liveperson-functions-getting-started-monitoring.html#reviewing-logs).

### Development of Functions

Generally speaking you can leverage the [Environment Variables](liveperson-functions-getting-started-configure.html#environment-variables) and [Secrets](liveperson-functions-getting-started-configure.html#secrets) to make your function code configurable. Please be aware that your function coding will be checked against the following requirements:

* Is your code syntactical correct or are there syntax errors ?
* Does the code exceed 100000 characters ?
* Did you implement our function contract
  * Is there a function called `lambda` defined ?
  * Is callback defined and called (**Please be aware this check does not consider all possible paths**)?
* Did you use a forbidden expression like `eval` ?

In the following chapters we will take a look at the Debugger and the Editor, speaking about features and how it can enrich your development experience.

#### Debugger
The debugger allows you to simulate and analyse an invocation within the Functions platform.

To start working with the debugger by navigating the *Debug* tab Functions Editor sidebar. From there you have several options:

<img class="fancyimage" alt="Functions: debugger overview" src="img/functions/functions_ui_debugger.png">

* **Code**: Here you can set breakpoints and your executions current position.
* **Debug Sidebar**: Change the debug payload and control the debug execution.
* **Log**: Displays all log messages produced during the execution.

Before you start debugging your function you might want to modify the debug input/payload for your function:

<img class="fancyimage" alt="Functions: debugger overview" src="img/functions/functions_ui_debugger_payload.png">

We supply each event with a default payload which can be used without modification but might not give you deep insights into your functions behavior.

{: .notice}
Payloads are not saved on the server. Make sure to save your payload locally if you want to reuse it at a later date. The payload is limited to **10.000** characters.

Once you are inside the *debug* tab you can place breakpoints as you'd expect in any IDE. Breakpoints will halt the debug execution as you would expect in your local environment. Breakpoints can be set before or during a debugger session by clicking on the space left of the line numbers.

<img class="fancyimage" alt="Functions: debugger sideview" src="img/functions/functions_ui_debugger_sidebar.png">

To start a debugging session click the *Start Debugger* button. This step will create a debugging session and might take a few moments to finish. Once the debugging session is created you have four options:

+ **Resume**: continues the execution until the next breakpoint
* **Step over**: Will step to the next instruction in your function
* **Restart**: Cancel the execution and start from the top again
* **Stop**: Cancels the debugging session

{: .notice}
Sometimes due to connectivity errors or long idling of the debugger the debugging session might be lost. Functions will try to heal this situation automatically. If this is not the case *stopping* the debugging session and starting it will resolve the issue.

During the execution the easiest way to analyse the state of the execution is using the variable inspector within the debug sidebar. It is a searchable list of all variables and their values currently active in the scope of the execution.

For additional information the debug output will print out any ``console`` commands as well as the invocation result. Unlike an actual invocation, during a debugging session the ``console.debug`` commands will also be logged.

<img class="fancyimage" alt="Functions: debugger sideview" src="img/functions/functions_ui_debugger_output.png">

Once you close the editor the debugging session will be closed as well.

#### Editor

Our editor is based on [Monaco](https://microsoft.github.io/monaco-editor/), offering you access to a variety of it's features. Most notable here is the context menu, which will offer you access to snippets, general code suggestion and context aware code suggestion.

<img class="fancyimage" alt="Functions: context menu in action" src="img/functions/functions_editor_context_menu.gif">

By pressing left-click you are able to access a menu that allows basic code navigation and access to replacement/renaming functionality. You can also leverage this menu to reach the command palette which offers a variety of features.

<img class="fancyimage" alt="Functions: access command palette" src="img/functions/functions_editor_access_palette.gif">

##### Code Navigation

You are able to leverage code navigation offered within the editor. Right-Click on functions or variables allow you to either show references or definition. Further you are also able to change all occurrence from here or rename the symbol. Some of the functionalities have short-cuts which are displayed. Please be aware that Mac OS users might need to include the `fn`-Button when using the displayed shortcuts.

<img class="fancyimage" alt="Functions: code navigation menu" src="img/functions/functions_editor_left_click_menu.png">

##### Snippets

We added our own snippets to the context service, which are accessible by typing in `Snippet` and activating the context menu with `Control + Space`. Each of the available snippet will include everything needed to run it (including the imports). Hence you might want to remove the imports if you already performed them before. Also important to consider is that if a template is generated with a `try-catch` you have to assume that the coding may throw errors. Meaning you should not forget to handle the error.

<img class="fancyimage" alt="Functions: snippets in action" src="img/functions/functions_editor_snippet.gif">

##### Code documentation & Types

Our internal runtime library the [Toolbelt](liveperson-functions-foundations-features.html#toolbelt) as well as some of the included [libraries](liveperson-functions-getting-started-configure.html#Dependencies), come with Javascript Docs embedded. This allow you to access the documentation from the editor directly by simply hovering over the function or the object. The docs will provide you with additional parameters and may provide you information about the types.
Further those information are also extended to function, parameter and objects that you specify within your code.

<img class="fancyimage" alt="Functions: code navigation menu" src="img/functions/functions_editor_jsdoc.png">

Please be aware that types are usually derived based on assignments or your definitions, but they are not checked. This implies having a variable initially assigned a number, will not fail if you assign it a string later on.
