---
pagename: Orchestration Functions
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-orchestration-functions.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-orchestration-functions.html
---

Orchestration Functions allow you to call other LivePerson functions. This might be useful if you want to perform multiple actions for certain events or organize your functions in a more modular fashion.

### Invoking functions from inside a function

There are a few things to consider when using orchestrator functions.

```javascript
    const { Toolbelt, ErrorStrategy } = require("lp-faas-toolbelt");
    const client = Toolbelt.OrchestratorClient();
    const invocations = [
        { 
            uuid: "your_function_uuid",
            payload: {},
            headers: {}
        },
    ];
    const responses = await client.invoke(
        invocations,
        25000
    );
    const response = responses[0];
    console.info(response.uuid);
    console.info(response.body);
    console.info(response.headers);
    console.info(response.statusCode);
    console.info(response.error);

```

The ```invoke``` method from the ```OrchestratorClient``` has three different parameters:

<table style="width: 100%;">
<thead>
<tr>
<th>Parameter</th>
<th>Required?</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<col width="20%">
<col width="15%">
<col width="50%">
<col width="15%">
<tbody>
<tr>
<td>invocations</td>
<td>yes</td>
<td>Every function you want to invoke with its payload</td>
<td>IOrchestratorInvocation array</td>
</tr>
<tr>
<td>deadline</td>
<td>yes</td>
<td>Maximum time the orchestrator function is waiting for a response <b>(maximum 25000)</b></td>
<td>number (in ms)</td>
</tr>
<tr>
<td>options</td>
<td>no</td>
<td>More options to further configure the orchestration</td>
<td>IOrchestratorOptions</td>
</tr>
</tbody>
</table>

The object of type ```IOrchestratorInvocation``` necessary for the first ```invoke``` parameter has following properties:


<table style="width: 100%;">
<thead>
<tr>
<th>Property</th>
<th>Required?</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<col width="20%">
<col width="15%">
<col width="50%">
<col width="15%">
<tbody>
<tr>
<td>uuid</td>
<td>yes</td>
<td>the uuid of the function you want to invoke</td>
<td>string</td>
</tr>
<tr>
<td>headers</td>
<td>no</td>
<td>invocation headers</td>
<td>{ [key: string]: string }</td>
</tr>
<tr>
<td>payload</td>
<td>yes</td>
<td>invocation payload</td>
<td>unknown</td>
</tr>
<tr>
<td>retries</td>
<td>no</td>
<td>default amount of retries for failed invocations is 3.</td>
<td>number</td>
</tr>
<tr>
<td>retryFunction</td>
<td>no</td>
<td>This function is used to determine if a received status code/error should be retried or aborted.<br>The default tactic is to retry on following status codes: 429, 500, 502, 504.<br>Following network errors will also trigger a retry by default: ENOTFOUND, ECONNRESET, ETIMEDOUT, ESOCKETTIMEDOUT. This excludes retries on errors raised by the function.</td>
<td>retryFunction(statusCode: number, errorCode: string): boolean</td>
</tr>
</tbody>
</table>

Example with retry functionality, invocations executed in parallel:

```javascript
    const { Toolbelt, ErrorStrategy } = require("lp-faas-toolbelt");
    const client = Toolbelt.OrchestratorClient();
    const RETRIABLE_NETWORK_ERRORS = ['ENOTFOUND', 'ECONNRESET', 'ETIMEDOUT', 'ESOCKETTIMEDOUT'];
    const RETRIABLE_ERROR_CODES = [500, 502, 504];
    // only retry on some 5xx status codes and network errors
    const retryFunction = (statusCode, error) => {
        return RETRIABLE_ERROR_CODES.includes(statusCode) || RETRIABLE_NETWORK_ERRORS.includes(error.cause.code);
    }
    const invocations = [
        { 
            uuid: "your_first_function_uuid",
            payload: {},
            headers: {},
            retries: 3,
            retryFunction
        },
        { 
            uuid: "your_second_function_uuid",
            payload: {},
            headers: {},
            retries: 3,
            retryFunction
        },
    ];
    const responses = await client.invoke(
        invocations,
        25000,
        {
            timeout: 10000,
            // both invocations will be executed in parallel
            invokeParallel: true,
            errorStrategy: ErrorStrategy.CONTINUE_ON_ERROR
        }
    );
    const response = responses[0];
    console.info(response.uuid);
    console.info(response.body);
    console.info(response.headers);
    console.info(response.statusCode);
    console.info(response.error);
```

It is also possible to further configure the orchestrator by passing the optional third ```IOrchestratorOptions``` parameter to the ```invoke``` function.

<table style="width: 100%;">
<thead>
<tr>
<th>Property</th>
<th>Required?</th>
<th>Description</th>
<th>Type/Value</th>
</tr>
</thead>
<col width="20%">
<col width="15%">
<col width="50%">
<col width="15%">
<tbody>
<tr>
<td>timeout</td>
<td>yes</td>
<td>Request timeout for each invocation. By default, this is calculated by <code>Math.floor(deadline/number of lambdas)</code>. If set you should check that all of the combined timeouts are not exceeding the deadline</td>
<td>number</td>
</tr>
<tr>
<td>errorStrategy</td>
<td>no</td>
<td>Defines the strategy to follow in case of error.</b></td>
<td>ErrorStrategy.EXIT_ON_ERROR, ErrorStrategy.CONTINUE_ON_ERROR</td>
</tr>
<tr>
<td>invokeParallel</td>
<td>no</td>
<td>If true, it will execute all passed invocations in parallel</td>
<td>boolean</td>
</tr>
</tbody>
</table>

<b>BE CAREFUL</b> to not create semantic loops with orchestrator functions calling other functions. This <b>will</b> result in high invocation counts. It is also possible that the called functions are outrunning the orchestrator. Meaning that if the called function exceeds the provided deadline, the response will never reach the orchestrator. So make sure to set the deadline high enough for your use case.

Debugging of orchestrator functions is supported. However, it is not possible to step inside the called functions, only to see the response of their invocation. Called functions must be debugged individually.
