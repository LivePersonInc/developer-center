---
pagename: Monitoring
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Getting Started
permalink: liveperson-functions-getting-started-monitoring.html
indicator: both
---

We will introduce you to all the available monitoring features and tools on this page.

### Email Reporting

Before, we will explain how to configure and enable email reporting for your account. Let's go over some basic information and limitations that need to be considered.
There is the limitation of only one active report and frequency. Where you can choose from the following frequencies:

* None -> Disables email reporting
* Daily -> 01:00 **UTC** each day
* Weekly -> 01:00 **UTC** first day of the week

The email report will contain the following information. The data will be based on the frequency, e.g. `Weekly` will be the data accumulated over the week while `Daily` only includes information of the last 24 hours.

<img class="fancyimage" alt="Functions: Email Report" src="img/functions/functions_reporting_email_report.png">

#### Enable Email Reporting

The Email Reporting can be configured via the "Reporting"-tab inside the "Settings"-Page by a user meeting the required [permissions](liveperson-functions-permission-system.html). You will observe the currently set frequency and the current list of participants on the page, which are limited to 10 emails. We suggest the usage of mailing lists in case you require more than 10 participants. You can choose from `None`, `Daily` and `Weekly` when clicking on the frequency. Where setting it to `None` will disable the email reporting.

<img class="fancyimage" alt="Functions: Email Report" src="img/functions/functions_reporting_email_configure.png">

Insert the valid email address and then hit the `add`-Button to add a new participant.
You may remove users from the list by using the Trash-Button next to the email. You must confirm your action by pressing "Delete Email Address".

<img class="fancyimage" alt="Functions: Email Remove" src="img/functions/functions_reporting_email_delete.png">

### Logs

Within your function code, you can write logs of different levels. Those are then later accessible for analysis and troubleshooting of potential issues. Generally, you can write logs using `console.level` (e.g. `console.info`), where we offer the following levels:

* Debug
* Info
* Warn
* Error

{: .notice}
Please be aware that logs written as part of a [test invocations](liveperson-functions-getting-started-your-first-function.html#test) will not be stored permanently. Further `Debug` logs are never stored and will be only visible as part of [test invocations](liveperson-functions-getting-started-your-first-function.html#test), allowing to debug and verify without the risk of having sensitive data leak into persistent logs.

The following code will show the JavaScript interface along with examples that should highlight the use of optional `extras`:

```javascript
    // Message needs to be a string
    // Extras is optional and can be left out
    // Extras can be any json parsable values like Objects, Numbers or Strings
    console.level(message, extras?);

    // An example using the info level and providing extras
    console.info('Called my backend', { conversationID: '1234-1421-3123', userID: '1234567' });
    // An example using the warn level and providing no extras
    console.warn('Failed to connect to my backend will retry');
```

#### Reviewing Logs

Concerning logging, we must differentiate between persisted logs and non-persisted logs. The latter is related to the test functionality of functions. Those logs can be found in the "Logs" container on the "Invoke your Function"-Page. It sometimes may contain warnings that inform you about potential issues with your logging, as shown in the following screenshot:

<img class="fancyimage" alt="Functions: Test Logs" src="img/functions/functions_reporting_logs_test.png">

You may click on any individual log entry to open up a dialogue that shows you the full logline and allows you to copy it to your clipboard.

<img class="fancyimage" alt="Functions: Test Logs Detail" src="img/functions/functions_reporting_logs_test_detail.png">

You can find all persisted logs either by using the "Logs"-Entry from the context menu in the Functions Overview or by clicking the Logs-Symbol located at the sidebar on the left-hand side.

<img alt="Functions: Logs via Context" src="img/functions/functions_reporting_logs_via_context.png">

If you do not navigate to the "Investigate Function Logs" page using the context menu, you must select the function from the dropdown list. All log levels are included in the search by default, but you can remove unwanted levels. Further, the time window by default is one day from now, but it can be extended up to **7 days** within the **last 30 days**.

<img alt="Functions: Logspage" src="img/functions/functions_reporting_logs.png">

You may tick the "Group By RequestID"-box, which will batch all logs belonging to a specific invocation, ensuring you will not mix up logs belonging to different requests.

<img alt="Functions: Logs Grouped" src="img/functions/functions_reporting_logs_grouped.png">

You may also leverage the download button next to the "Search"-button to download the logs based on your current configuration in the form of a `.csv`. Please be aware that we only allow up to 500 log lines to be exported based on your time window and log quantity. You may not download all available logs. In this case, we suggest adjusting the time window to smaller chunks. The `.csv`-File has the following structure:

```csv
lambdaUUID;requestID;timestamp;level;message;extras
6f91f192-c1df-40e0-94f9-8765fd70fd02;d60d0fce-9970-8d8a-28ed-786c303573b6;Wed, 16 Feb 2022 11:45:35 GMT;Info;Start syncing with my backend;[]
6f91f192-c1df-40e0-94f9-8765fd70fd02;d60d0fce-9970-8d8a-28ed-786c303573b6;Wed, 16 Feb 2022 11:45:35 GMT;Warn;Conversation had wrong information, will update it;"[{""conversationID"":""1234-5678-9000"",""userID"":""12345678""}]"
6f91f192-c1df-40e0-94f9-8765fd70fd02;d60d0fce-9970-8d8a-28ed-786c303573b6;Wed, 16 Feb 2022 11:45:35 GMT;Info;Finished syncing with my backend;[]
```

#### Limitations

Please consider the following limitation that is in place for our current logging system.

* Logs are pushed directly from the function to our services, meaning if a function is crashing or timing out, logs may be lost
* Debug logs are **never** persisted and only displayed while performing [test invocations](liveperson-functions-getting-started-your-first-function.html#test)
* We will allow only ten entries per invocation
* A single log combining `message` + `extra` may not exceed 6000 characters
* All logs (combining `message` + `extra`) together may not exceed 6000 characters

### Activities

Given that multiple developers and users may use a Functions account, it can get hard to keep track of changes and identify users who may have caused issues. To tackle this challenge, we offer our activity stream. This stream is visible on the "Home"-Page/Landing. The displayed data consists of 4 information:

* Date
* User
* Activity
* Description

All activities will be stored for roughly two months and can be reviewed in this time window. For example, some of the activities, `Lambda Update`, come with different subactivities. The Description field usually discloses those. Sticking to our example of the `Lambda Update`, you may see `Lambda deployed` and `Code changed` as potential subactivities.

<img alt="Functions:Activity Stream" src="img/functions/functions_reporting_activities.png"> 

Clicking on an individual activity within the activity stream will bring you to a page based on the content. For example, a `Code changed` activity will bring you to a page comparing the previous and that versions. Things like changes to the allowlisting will get you to the allowlist settings.

<img alt="Functions:Activity Context Action" src="img/functions/functions_reporting_activties_context_action.png"> 
