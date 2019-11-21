---
pagename: Error Codes
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
permalink: liveperson-functions-error-codes.html
indicator: both
redirect_from:
---

This section describes possible errors that can occur when invoking a lambda from outside LivePerson's platform.

## Error codes

```
export const ErrorCodes = {
   Eventsource: { 
   General: 'com.liveperson.faas.es.general', // General error, no specific reason 
   Unavailable: 'com.liveperson.faas.es.unavailable', // Could not reach/access remote system 
   BadInput: 'com.liveperson.faas.es.badinput', // Payload was in the wrong format or value was missing
   NotDeployed: 'com.liveperson.faas.es.notdeployed', // Lambda that is being invoked, is not deployed 
   MissingLambda: 'com.liveperson.faas.es.missinglambda', // Lambda does not exist 
   }
    
   Function: { 
   CustomFailure: 'com.liveperson.faas.handler.custom-failure', // Lambda calls the callback with an Error like callback(new Error('whoops'), null) 
   RuntimeException: 'com.liveperson.faas.handler.runtime-exception', // Lambda crashes because of implementation error, such as accessing a variable that is `undefined`.
   ExecutionWindowExceeded: 'com.liveperson.faas.handler.executiontime-exceeded', // Lambda exceeds execution time (see https://developers.liveperson.com/liveperson-functions-monitoring-logs.html) 
   LogLimitReached: 'com.liveperson.faas.handler.log-limit-reached', // Lambda exceeds log limits (see https://developers.liveperson.com/liveperson-functions-monitoring-logs.html) 
   }
    
   FunctionManager: { 
   General: 'com.liveperson.faas.fm.general', // General error, no specific reason 
   Unavailable: 'com.liveperson.faas.fm.unavailable', // Could not reach/access remote system 
   }
```