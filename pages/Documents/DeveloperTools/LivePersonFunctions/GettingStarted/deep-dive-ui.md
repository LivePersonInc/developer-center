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

It may be that this is your first time entering the Functions UI. In this case, the User Agreement Window greets you. During the Agreement, the provisioning of the account is performed. For more details on what happens, check out [this page](liveperson-functions-provisioning.html). This deep dive will look into how functions can be managed and configured via our web interface. If you want to learn how to interact with the functions platform via our command-line interface, head over to the [deep dive](liveperson-functions-getting-started-deep-dive-cli.html).

### Creation Process

You will need to head to the function management view using the Lambda-Symbol in the side panel on the left-hand side to create new functions. Here you can see all available functions on the account and their current state. A function can behold the following states:

* **Draft:** function is not yet deployed
* **Productive:** function is deployed and does not have any pending modifications
* **Modified:** function is deployed and does have pending modifications
* **Marked Undeployed:** function is currently in the process of being undeployed
* **Build Error:** function was attempted to be deployed, but the building failed
* **Deploy Error:** function was attempted to be deployed, but the deployment failed

To create a new function, you need to press the "Create a Function"-Button displayed next to the header of the functions table.

<img class="fancyimage" alt="Functions: invoke function" src="img/functions/functions_select_invoke.png">

#### Step: Coding Details

On the first page of the stepper, you will see various information related to the coding details. One of the pieces of information that are presented is the NodeJS version used within the function. The editor on the right side will always show you the initial coding generated based on your selections.

You may choose an event to react to from the drop-down. The default value is `No Event`. For an overview of all available events, head over to our [Event Sources](liveperson-functions-event-sources-overview.html). Some of the events may have a variety of templates available to you.

You can see a toggle at the bottom of the page that will activate/deactivate the second step, which allows you to configure a [allowlist](liveperson-functions-foundations-features html#domain-whitelisting) entry.

Suppose you want to ensure that a function is triggered only for specific skills as the logic is not required for every skill. We provide you with the ability to do so. Please note that this functionality is **limited** to the [Automatic Messages](liveperson-functions-event-sources-overview.html#automatic-messages). 

Skills can be selected via the drop-down menu, and it is populated using the skills available in the conversational cloud. By default, the function will respond to all skills. Please be aware that the maximum number of skills is **50**.

<img src="img/functions/functions_select_skill.png" alt="Functions: select multiple skill" style="width:100%;"/>

{: .notice}
The drop-down menu is always disabled if the selected function template is not an Automatic Messages template.

You can create more than one function of the same event if you set different skills for each function. Generally, as long as they are not overlapping, you can create multiple functions for the same event. The following Scenario should highlight the implications:

✅  Function 1 for Event A [Skill 1,2] + Function 2 for Event A [Skill 3,4]
✅  Function 1 for Event A [Skill 1,2] + Function 2 for Event A [Skill 3,4] + Function 3 for Event B [Default-skill]
✅  Function 1 for Event A [Default-skill]
❌  Function 1 for Event A [Skill 1,2] + Function 2 for Event A [Skill 3,4] + [Default-skill]

{: .important}
The above example, "Default-skill", refers to not selecting any skill, the default behaviour.

#### Step: Domain Whitelisting

When adding a domain to the allowlist, you should always consider some common pitfalls. First, make sure your domain is not redirecting because, in this case, you also need to allowlist any domain that is part of the redirection chain. An excellent way to test if your domain redirecting, if you are unsure, is to leverage the following command:

```sh
    $ curl -v -L YOUR_DOMAIN 2>&1 | grep -i "^< location:"
```

Example:

The following example shows that when calling `http://google.com`, a redirection to `http://www.google.com/` is performed.

```sh
    $ curl -v -L http://google.com 2>&1 | grep -i "^< location:"
    < Location: http://www.google.com/
```

Next, ensure that you allow listed the correct domain when working with subdomains. Let's say you are visiting `https://www.liveperson.com` and therefore allow listed `liveperson.com`. Then you fell into the trap because `www.` is a subdomain. Instead, the correct domain to allowlist would be `www.liveperson.com` or `*.liveperson.com`.

Finally, as shown above, we do support the use of wildcards by setting `*`. But you should be aware that we only support one wildcard in the domain, meaning that `*.*.liveperson.com` is not possible, while `*.liveperson.com` is possible.

<img class="fancyimage" alt="Functions: Add whitelist step" src="img/functions/functions_add_whitelist_step.png">

The domain is added by inserting it and clicking the "Add"-button next to the input field. Once it is saved, it will be reflected in the domain list below.

{: .notice}
Please be aware that adding a domain can take up to 5 minutes until being "active"

#### Step: Function Description

In this final step, you will need to provide a name and a description of your function. Usually, the description is meant to inform other users what a function is supposed to do if the name is not already explaining this. Please be aware that names within an account need to be unique so that you may leverage the same function name in multiple accounts. But only once within a single account.

<img class="fancyimage" alt="Functions: name and approve function creation" src="img/functions/functions_name_function.png">

### Deployment Process

The deployment process can be started by pressing on the three dots next to the function you like to deploy. In the context menu, please select "Deploy Function". Once you press the button, you will be presented with the Deployment Approval dialogue. Here you have a final chance to see which code will be deployed.

<img class="fancyimage" alt="Functions: approve deployment" src="img/functions/functions_approve_deployment.png">

As mentioned previously, a deployment can encounter an error either in the build or deployment stage. In both cases, please attempt a retry after a couple of minutes to see if the issue persists.

### Testing your Function

To test your function, you can leverage our test invocation. This page can be reached by pressing the Play-Button next to your deployed function.

<img class="fancyimage" alt="Functions: modify invocation payload" src="img/functions/functions_modify_payload.png">

The displayed payload will be different based on the event you selected initially. You can modify the payload before performing the invocation. This should enable you to test and debug edge cases within your function.

The output of the call will be presented on the "Output"-Area. These can be found in the log section and logs created by the invocation. If you want to learn more about the logs, head over to [here](liveperson-functions-getting-started-monitoring.html#reviewing-logs).

### Development of Functions

Generally speaking, you can leverage the [Environment Variables](liveperson-functions-getting-started-configure.html#environment-variables) and [Secrets](liveperson-functions-getting-started-configure.html#secrets) to make your function code configurable. Please be aware that your function coding will be checked against the following requirements:

* Is your code syntactical correct, or are there syntax errors?
* Does the code exceed 100000 characters?
* Did you implement our function contract
  * Is there a function called `lambda` defined?
  * Is callback defined and called (**Please be aware this check does not consider all possible paths**)?
* Did you use a forbidden expression like `eval`?

In the following chapters, we will look at the Debugger and the Editor, speaking about features and how they can enrich your development experience.

#### Debugger
The debugger allows you to simulate and analyse an invocation within the Functions platform.

Start working with the debugger by navigating the *Debug* tab Functions Editor sidebar. From there, you have several options:

<img class="fancyimage" alt="Functions: debugger overview" src="img/functions/functions_ui_debugger.png">

* **code**: Here, you can set breakpoints and your execution current position.
* **Debug Sidebar**: Change the debug payload and control the debug execution.
* **Log**: Displays all log messages produced during the execution.

Before you start debugging your function, you might want to modify the debug input/payload for your function:

<img class="fancyimage" alt="Functions: debugger overview" src="img/functions/functions_ui_debugger_payload.png">

We supply each event with a default payload that can be used without modification but might not give you deep insights into the behaviour of your functions.

{: .notice}
Payloads are not saved on the server. Make sure to keep your payload locally if you want to reuse it at a later date. The payload is limited to **10.000** characters.

Once you are inside the *debug* tab, you can place breakpoints as you'd expect in any IDE. Breakpoints will halt the debug execution as expected in your local environment. Breakpoints can be set before or during a debugger session by clicking on the space left of the line numbers.

<img class="fancyimage" alt="Functions: debugger sideview" src="img/functions/functions_ui_debugger_sidebar.png">

To start a debugging session, click the *Start Debugger* button. This step will create a debugging session and might take a few moments to finish. Once the debugging session is created, you have four options:

+ **Resume**: continues the execution until the next breakpoint
* **step over**: Will step to the next instruction in your function
* **Restart**: Cancel the execution and start from the top again
* **Stop**: Cancels the debugging session

{: .notice}
Sometimes, the debugging session might be lost due to connectivity errors or the long idling of the debugger. Functions will try to heal this situation automatically. If this is not the case *stopping* the debugging session and starting it will resolve the issue.

During the execution, the easiest way to analyse the state of the execution is using the variable inspector within the debug sidebar. It is a searchable list of all variables and their values currently active in the execution scope.

For additional information, the debug output will print out any ``console`` commands and the invocation result. Unlike an actual invocation, the ``console.debug`` commands will also be logged during a debugging session.

<img class="fancyimage" alt="Functions: debugger sideview" src="img/functions/functions_ui_debugger_output.png">

Once you close the editor, the debugging session will be closed.

#### Editor

Our editor is based on [Monaco](https://microsoft.github.io/monaco-editor/), offering you access to a variety of its features. The context menu is most notable, which will provide you with access to snippets, general code suggestions, and context-aware code suggestions.

<img class="fancyimage" alt="Functions: context menu in action" src="img/functions/functions_editor_context_menu.gif">

You can access a menu that allows basic code navigation and access to replacement/renaming functionality by pressing left-click. You can also leverage this menu to reach the command palette, which offers a variety of features.

<img class="fancyimage" alt="Functions: access command palette" src="img/functions/functions_editor_access_palette.gif">

To Update the skills on an existing function, you will find the skills drop-down menu inside the General information accordion menu on the right side of the code Editor. Updating skills does not require redeployment. The change is reflected within 5 minutes after saving.

<img src="img/functions/functions_select_skill_edit.png" alt="Functions: select multiple skill" style="width:100%;"/>

##### Code Navigation

You can leverage code navigation offered within the editor. Right-Click on functions or variables that allow you to show references or definitions. Further, you can also change all occurrences from here or rename the symbol. Some of the functionalities have shortcuts that are displayed. Please be aware that Mac OS users might need to include the `fn`-Button when using the displayed shortcuts.

<img class="fancyimage" alt="Functions: code navigation menu" src="img/functions/functions_editor_left_click_menu.png">

##### Snippets

We added our snippets to the context service, accessible by typing in `Snippet` and activating the context menu with `Control + Space`. Each available snippet will include everything needed to run it (including the imports). Hence you might want to remove the imports if you have already performed them before. Also important to consider is that if a template is generated with a `try-catch`, you must assume that the coding may throw errors. Meaning you should not forget to handle the error.

<img class="fancyimage" alt="Functions: snippets in action" src="img/functions/functions_editor_snippet.gif">

##### Code documentation & Types

Our internal runtime library, the [Toolbelt](liveperson-functions-foundations-features.html#toolbelt), as well as some of the included [libraries](liveperson-functions-getting-started-configure.html#Dependencies), come with Javascript Docs embedded. This allows you to access the documentation from the editor directly by simply hovering over the function or the object. The docs will provide you with additional parameters and may give you information about the types.
Further, that information is also extended to function, parameters, and objects you specify within your code.

<img class="fancyimage" alt="Functions: code navigation menu" src="img/functions/functions_editor_jsdoc.png">

Please be aware that types are usually derived based on assignments or your definitions, but they are not checked. This implies that having a variable initially assigned a number will not fail if you assign it a string later.