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
To support developers in analysing `lambdas` we support logging in functions
<div class="important">
<ul>
<li>This function allows you to log sensitive information since there's no sanitation or limitations on the string you pass to the method! Please be considerate with what is logged and don't pass any sensitive information to this function, e.g a token or password.</li>
<li>Logs are only persistet without <b>Debug</b> level on external invocation.</li>
<li>Logs with <b>Debug</b> level will only be shown on manual invocation</li>
<li>Logs on external invocation are limited to 10 entries with a overall maximum of 5000 chars per lambda invocation. If this limit is exceeded, only one error log with the exceed information with the reason of the limit exceeding will be persisted</li>
<li>Logs are only persisted for 30 days. Older logs will be deleted.</li>
</ul>
</div>

### Logging Function behavior

[Missing Screenshot]: <> (Let's add a screenshot of the IyF log result screen here.)

The different log-levels are: debug, info, warn and error. All functions take a string as a log message and, as an optional parameter, objects which can be displayed when inspecting an individual log item. An example for a function which is logged can be found in the [LivePerson Functions Templates](function-as-a-service-templates.html) (under "*Logging Template*").

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


The LivePerson Functions' Logs allows you to see the produced logs of your `lambdas`.

### Accessing persistet Logs

Our LivePerson Functions User Interface allows developers to investigate `lambda` logs.

The logs can be accessed via the **Functions** section by clicking on the logs icon, or directly on the **Logs** section in the navigation bar (see second picture below). 

![](img/faas-functions.png)

The picture below shows the **Logs** section

![](img/faas-logs.png)

To see the logs the following parameters must be set:

1. **Function**: The `lambda` the logs should be displayed for
2. **Log Levels**: The **log levels** you want to see (selecting no **log level will display you all levels)
3. **Start Date**: The timestamp from which the logs will be shown (only the last 7 days can be selected)
4. **End Date**: The timestamp to which the logs will be shown (must be after **Start Date**)

After selecting the parameters, a click on the **REFRESH** button will show you the logs for the parameters set.
