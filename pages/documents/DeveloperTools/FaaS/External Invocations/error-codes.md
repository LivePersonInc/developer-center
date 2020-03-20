---
pagename: Error Codes
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
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
| #com.liveperson.faas.handler.executiontime-exceeded' | Lambda exceeds execution time (see https://developers.liveperson.com/liveperson-functions-monitoring-logs.html) |
| 'com.liveperson.faas.handler.log-limit-reached'     | Lambda exceeds log limits (see https://developers.liveperson.com/liveperson-functions-monitoring-logs.html)      |
| 'com.liveperson.faas.fm.general'                    | General error, no specific reason                                                                               |
| 'com.liveperson.faas.fm.unavailable'                | Could not reach/access remote system                                                                            |
