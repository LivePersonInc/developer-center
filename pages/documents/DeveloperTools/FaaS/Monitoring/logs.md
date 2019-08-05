---
pagename: Logs
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Monitoring
permalink: liveperson-functions-monitoring-logs.html
indicator: both
redirect_from:
  - function-as-a-service-monitoring-logs.html
---

### Overview

To support developers in analyzing `lambdas` as they work, we support logging functions. This feature gives you the ability to add logs to your `lambdas`, in order to monitor the execution & behaviour of your function.

These logs will be stored after every `lambda` invocation (except [manual invocations](liveperson-functions-deployment.html#testing-your-function)) for 30 days. You are able to view these logs in the [LivePerson Functions UI](#logs-section). How to log is described in the next chapter below [Logging Function behavior](#logging-function-behavior).

### Logging Function behavior

[Missing Screenshot]: <> (Let's add a screenshot of the IyF log result screen here.)

The different log-levels are: `debug`, `info`, `warn` and `error`. All functions take a string as a log message and multiple extras parameter. The extras parameters, are JavaScript object, providing further insights about the runtime execution. An example for a function which is logged can be found in the [LivePerson Functions Templates](function-as-a-service-templates.html) (under "*Logging Template*").

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
    <td>Method names correspond to the different log-levels and influence in which way the logs are displayed within LivePerson Functions. Current levels are:
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

After [deployment](liveperson-functions-deployment.html), you should be able to [manually invoke](liveperson-functions-deployment.html#testing-your-function) your `lambda` and see the logs written at the `Logs` section. 

![](img/faas-invoke.png)

**Note:** Be aware that logs written during manual test invocation will not written into the storage.

**Note:** Logs with a <b>Debug</b> level will only be shown on manual test invocation and not written into the storage.

<div class="important">
<ul>
<li>This feature allows you to log sensitive information, since there's no sanitation or limitations on the logged parameters! Please be considerate over your logged values and don't pass any sensitive information to this function, e.g a token or password.</li>
<li>Logs written during invocation are limited to 10 entries, with an overall maximum of 5000 characters per lambda invocation. If this limit is exceeded, only 1 error log will be stored.</li>
</ul>
</div>

### Accessing Logs Storage

LivePerson Functions allows developers to investigate `lambda` logs.

Logs of a certain function can be accessed during development & deployment via the button on the right side. Moreover our left-hand sidebar allows also to directly navigate to the `Investigate Function Logs` screen.

![](img/faas-functions.png)

When navigating to the `Investigate Function Logs` screen from a selected function, the search parameters should be pre-defined.
In case the left-hand sidebare is used the relevant `lambda` needs to be selected from the dropdown.

![](img/faas-logs.png)

To fine-tune the selected `lambda` logs the following search parameters can be adjusted:

1. **Function**: The `lambda` the logs should be displayed for
2. **Log Levels**: The **log levels** you want to see (selecting no **log level will cause all levels to be displayed**)
3. **Start Date**: The timestamp from which the logs will be shown (only the last 30 days can be selected)
4. **End Date**: The timestamp to which the logs will be shown (must be after **Start Date**)

After selecting the parameters, a click on the **SEARCH** button will show you the logs for the parameters set.

<div class="important">the maximum timespan between <b>Start Date</b> and <b>End Date</b> is restricted to 7 days</div>
