---
pagename: Deploying Functions
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
permalink: functions-deploying-functions.html
indicator: both
redirect_from:
  - function-as-a-service-deploying-functions.html
---
Now that you have created and edited the function, let's talk about how you can deploy it. We offer two deployment methods, although the second is simply a shortcut for the first.

1. Using the "Create deployment" button in the **Deployment** tab allows you to start deployment. Proceed by selecting a function you'd like to deploy. If you start typing the function's name, the filter functionality will automatically search the available functions and find the one you need.

2. The shortcut alternative to this process is to deploy from the context menu in the `lambda` itself, in the **Develop** tab (more info on this menu can be found [here](function-as-a-service-developing-with-faas-overview.html#code-completion--context-menu)). The `lambda` will directly forward you to the deployment menu.

![](img/faas-deploy.png)

After choosing a function for deployment, you will have a final chance to review the code which will be deployed and also see information on Environment Variables and Runtime. If the displayed information is correct, you can start the deployment by pressing the button "Approve & Deploy".

### Deployment States

The deployment will then proceed through the following states:

1. Build Start

2. Build Finish

3. Deploy Start

4. Deploy Finish

There are also two types of **error states**:

1. Build Error

2. Deploy Error

If an error occurs, you can hover over the Build State to receive insight on the cause for the error. Some issues are temporary and can be resolved by redeploying the affected function.

### Testing your Function

To the right of the "Deployment state" field, you will find the “Actions” field. You will be able to invoke your `lambda` function by pressing “Invoke” and then pressing “Invoke” again in the newly opened tab. Invoking your function allows you to test its payload and behavior and make sure it works as expected.

![](img/faas-actions.png)

**Please note** that you can only invoke functions that have been successfully deployed. When you’re in the "Develop" tab, this is indicated by the status of the function displaying as “Productive”. When in the “Deploy” tab, this will be indicated by the deployment state showing “Deployment successful”.

Pressing the Invoke button will launch the 'Invoke your Function' (IyF) screen.

The IyF screen contains three main items:

The **Input** item contains the parameters with which your function will be called. By default it uses a payload appropriate for your function’s event. This payload can be manually edited to suit your testing scenario. These changes are not permanent and will be removed when reloading the LivePerson Functions website.

The **Output** renders whatever your function produces during an invocation, be it a string, JSON or an exception. Like the Input, the Output is not permanently saved.

The **Logs** display any logging you have included in your function. It can display messages and their importance (error versus info for example), as well as additional information declared by the user. Once a function has been invoked, any logs will be displayed corresponding to their log-level declared inside the function's source code.

![](img/faas-invoke.png)

### Logging Function behavior

[Missing Screenshot]: <> (Let's add a screenshot of the IyF log result screen here.)

The different log-levels are: debug, info, warn and error. All functions take a string as a log message and, as an optional parameter, objects which can be displayed when inspecting an individual log item. An example for a function which is logged can be found in the [LivePerson Functions Templates](function-as-a-service-templates.html) (under "*Logging Template*").

<div class="important">This function allows you to log sensitive information since there's no sanitation or limitations on the string you pass to the method! Please be considerate with what is logged and don't pass any sensitive information to this function, e.g a token or password.

In addition, logs are currently not persistent and are therefore only for debugging purposes in the Functions UI. We're planning on adding log-storage with an analysis screen in the near future.</div>

The template for the logging functions is as follows:

```javascript
console.<info/debug/warn/error>(<message> [, extras])
```

<table>
<thead>
	<tr>
		<th>Component</th>
		<th>Type</th>
		<th>Notes</th>
	</tr>
</thead>
<tbody>
  <tr>
    <td>log-level</td>
    <td>Method</td>
    <td>Method names correspond to the different log-levels and influence in which way the logs are displayed within FaaS. Current levels are:
console.debug(), console.info(), console.warn() and console.error()</td>
  </tr>
  <tr>
    <td>message</td>
    <td>String</td>
    <td>Message defines the message to be displayed in the logs.</td>
  </tr>
  <tr>
    <td>extras</td>
    <td>Any</td>
    <td>An object which will then be wrapped in an Array and displayed in the log for additional information.</td>
  </tr>
</tbody>
</table>

**Example code for logging a function**:

```javascript
function lambda(input, callback) {
	console.debug('This is a simple debug message', {
		'bugs': 'none!'
	});

	console.info('Informing you about important news', new Date(), Number.MAX_SAFE_INTEGER);

	try {
		console.warn('Starting a non-existent function');
		nonExistentFunction();
	} catch (e) {
		console.error('You cannot call what you did not create');
	}

	callback(null, 'Function has finished...');
}
```
