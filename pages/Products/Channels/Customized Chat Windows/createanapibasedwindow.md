---
title: Create an API-based Window Using the Chat API
level1: Products
level2: Channels
level3: Customized Chat Windows

permalink: guides-customizedchat-create-an-api-based-window.html
order: 2
---

### Configure the Engagement Window

An “API-based” engagement window must be configured in LiveEngage.

Mandatory fields:

* Name: the window name

*jsMethodName: the Javascript method name, under which your API-based window code is located on your web page, which will be triggered by the LiveEngage Tag to initiate the window.

Optional fields:

* jsContext: the Javascript context where the jsMethodName is located.
Default value: “window”

[Read more about Javascript’s context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call){:target="_blank"}.

### On a monitored flow 

* Attach the above API-based engagement window to the relevant web engagement/campaign. 

### On an unmonitored flow

1. Attach the above API-based engagement window to the relevant external engagement.
