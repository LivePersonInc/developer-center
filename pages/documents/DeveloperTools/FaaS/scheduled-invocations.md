---
pagename: Scheduled Invocations
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
permalink: liveperson-functions-scheduled-invocations.html
indicator: both
---

To give brands the option to call their functions on a regular basis, we developed time-based scheduling for LivePerson Functions. Similar to Cron on Unix systems, we allow to define recurring invocations via Cron expression for functions that are not connected to any events (functions that are connected to events don't need scheduling, since they are invoked whenever the event is fired).

![](img/faas-schedule.png)

In order to schedule a new function invocation, simply navigate to the **Schedules** section and start the process using the **Create a Schedule** button.

![](img/faas-newschedule.png)

In the **Create a Scheduled Invocation** dialog you are prompted to select an already deployed function and enter a Cron expression for scheduling the execution.

There are tools that help constructing your cronjobs. You might find [crontab.guru](https://crontab.guru) helpful to create your Cron expression. Please be aware that the highest execution interval for functions is **1 minute**, which means that our Cron expression are limited to 5 digits instead of 6.

When specifying your cron values please make sure that your values fall within the following ranges:

* Minutes: 0-59
* Hours: 0-23
* Day of Month: 1-31
* Months: 0-11 (Jan-Dec)
* Day of Week: 0-6 (Sun-Sat)

<div class="important">Only deployed <b>NO-EVENT</b> functions will be scheduled. Please note that during undeployment the function schedule will not be removed but marked as warning.</div>
