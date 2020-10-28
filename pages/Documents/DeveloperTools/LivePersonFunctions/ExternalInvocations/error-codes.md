---
pagename: Error Codes
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: External Invocations
permalink: liveperson-functions-external-invocations-error-codes.html
indicator: both
redirect_from:
---

This section describes possible errors that can occur when invoking a lambda from outside LivePerson's platform.

## Error codes

| Error                                               | Description                                                                                                     |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 'com.liveperson.faas.es.general'                    | General error, no specific reason                                                                               |
| 'com.liveperson.faas.es.unavailable'                | Could not reach/access remote system                                                                            |
| 'com.liveperson.faas.es.badinput'                   | Payload was in the wrong format or value was missing                                                            |
| 'com.liveperson.faas.es.notdeployed'                | Lambda that is being invoked, is not deployed                                                                   |
| 'com.liveperson.faas.es.missinglambda'              | Lambda does not exist                                                                                           |
| 'com.liveperson.faas.handler.custom-failure'        | Lambda calls the callback with an Error like callback(new Error('whoops'), null)                                |
| 'com.liveperson.faas.handler.runtime-exception'     | Lambda crashes because of implementation error, such as accessing a variable that is `undefined`.               |
| 'com.liveperson.faas.handler.executiontime-exceeded' | Lambda exceeds execution time (see https://developers.liveperson.com/liveperson-functions-monitoring-logs.html) |
| 'com.liveperson.faas.handler.log-limit-reached'     | Lambda exceeds log limits (see https://developers.liveperson.com/liveperson-functions-monitoring-logs.html)      |
| 'com.liveperson.faas.fm.general'                    | General error, no specific reason                                                                               |
| 'com.liveperson.faas.fm.unavailable'                | Could not reach/access remote system                                                                            |


## Http codes

| Code                                               | name             | Description                                              |
|----------------------------------------------------|-----------------|-----------------------------------------------|
| '200','202'           |  Processed/Accepted   | The request was processed successfully and the result of the request is included in the response.   |
| '400'           |  Bad request  | Some validations have failed on the request                                             |
| '401'           | Unauthorized    | Unauthorized,The request cannot be made without valid authentication                   |
| '403'           |	Forbidden    | The request was not carried out because the client was not authorized                 |
| '404'           |  Not Found  | File/Page/Server/lambda Not Found                                                             |
| '405'           |  Method not allowed   | The request was made using wrong HTTP method                  |
| '408'           |  Request timeout | The user opened a connection to the server but did not send any data after a given amount of time.              |
| '429'           |  Too many requests   | The client sent too many requests in a given period of time.                            |
| '500','502','504'  |  Internal server error   | Internal unexpected server error                                                                  |
| '901'           | Error during lambda execution   | Lambda Execution failed due to an issue with the lambda coding. This can include runtime exception, exceeding processing window & returning of an error by the lambda.                   |