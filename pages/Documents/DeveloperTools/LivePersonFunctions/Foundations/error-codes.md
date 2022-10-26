---
pagename: Error Codes
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-error-codes.html
indicator: both
---

{% comment %}

THIS IS USED IN FUNCTION'S LOG MESSAGE AS https://developers.liveperson.com/liveperson-functions-foundations-error-codes.html#error-codes
IF YOU CHANGE THE NAME, MAKE SURE THAT THERE'S A REDIRECT TO THIS URL.

{% endcomment %}

This chapter will highlight all potential error codes and HTTP responses that our RESTful APIs can return. This is especially relevant for the [external invocation](liveperson-functions-foundations-external-invocation.html).

### Error Codes

| Error                                                | Description                                                                                                     |
|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| com.liveperson.faas.es.general                     | This is a general error with no specific/known reason                                                           |
| com.liveperson.faas.es.unavailable                 | Could not reach/access remote system                                                                            |
| com.liveperson.faas.es.badinput                    | Payload was in the wrong format or value was missing                                                            |
| com.liveperson.faas.es.notdeployed                 | Function that was invoked is not deployed                                                                       |
| com.liveperson.faas.es.missinglambda               | Function that was invoked does not exist                                                                        |
| com.liveperson.faas.handler.custom-failure         | Function called the callback with an Error like `callback(new Error('whoops'), null)`                           |
| com.liveperson.faas.handler.runtime-exception      | Function crashed because of implementation error such as accessing a property on `undefined`.                   |
| com.liveperson.faas.handler.executiontime-exceeded | Function exceeds execution time. It can have multiple origins: forgetting to call the callback, external calls, or blocking code|
| com.liveperson.faas.handler.log-limit-reached      | Function exceeds log limits. See [here](liveperson-functions-getting-started-monitoring.html#limitations)       |
| com.liveperson.faas.fm.general                     | This is a general error with no specific/known reason                                                           |
| com.liveperson.faas.fm.unavailable                 | Could not reach/access remote system                                                                            |

### HTTP Response Codes

| Code          | name                                  | Description                                                                                        |
|---------------|---------------------------------------|----------------------------------------------------------------------------------------------------|
| 200,202       |   Success                             | Request was successfully accepted/processed                                                        |
| 400           |   Bad Request                         | The request is either not correct or malformed                                                     |
| 401,403       |   Unauthorized                        | Missing authentication or missing privileges                                                       |
| 404           |   Not Found                           | Service did not find the requested resource. For a function, this can also mean it was not deployed|
| 405           |   Method Not Allowed                  | The request was using the wrong HTTP method                                                        |
| 408           |   Request Timeout                     | Server did not receive the complete request by the client within the read limit                    |
| 429           |   Ratelimit                           | The client exceeded the rate-limit, which is based on a per-account level                          |
| 500,502,504   |   Internal Server Error               | Unexpected Server Error, which can be temporary                                                    |
| 901           |   Error during lambda execution       | Function Execution failed due to an issue with the function's code. This can include runtime exception, exceeding processing window and returning of an error by the lambda|
