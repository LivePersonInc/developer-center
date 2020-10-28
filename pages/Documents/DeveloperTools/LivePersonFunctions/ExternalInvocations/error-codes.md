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
| '200'           |  Ok   | The request was processed successfully and the result of the request is included in the response.   |
| '202'           | Accepted     | Accepted response status, request has been accepted for processing                     |
| '400'           |  Bad request  | Some validations have failed on the request                                             |
| '401'           | Unauthorized    | Unauthorized,The request cannot be made without valid authentication                   |
| '403'           |	Forbidden    | The request was not carried out because the client was not authorized                 |
| '404'           |  Not Found  | File/Page/Server/lambda Not Found                                                             |
| '405'           |  Method not allowed   | The request was made using wrong HTTP method                  |
| '408'           |  Request timeout | The user opened a connection to the server but did not send any data after a given amount of time.              |
| '429'           |  Too many requests   | The client sent too many requests in a given period of time.                            |
| '499'           |  Client Closed Request   | Lambda execution time limit has exceeded                                               |
| '500'           |  Internal server error   | Internal unexpected server error                                                                  |
| '502'           | Bad gateway    | The server could not fulfill its function as gateway or proxy because it received an invalid response.           |
| '504'           | Gateway timeout    | The server could not fulfill its function as a gateway or proxy because it did not receive a response from the servers or services it was using within a specified period of time. |
| '901'           | Error during lambda execution   | lambda unsuccesfully completed the request due to user defined error                   |