---
pagename: Email Reporting
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Monitoring
permalink: liveperson-functions-monitoring-email-reporting.html
indicator: both
---

**Email Reporting** gives brands the option to schedule and maintain an automatic report for their Functions. Once configured, the Scheduler will then periodically send the generated report to a list of configured recipients. The report will contain statistics about the amounts of (un)successful invocations of your current functions. The statistics will reflect the period of time you set the frequency to, i.e. daily or weekly.

<img src="img/faas-email-reporting.png" alt="LivePerson Functions - Email Reporting" style="width:100%;"/>

After selecting the **Frequency of the report**, you can add recipients for this report by entering the email addresses of the recipients and clicking on **add**.

To remove a recipient from the list, just click on the trashcan beside the recipient.

<div class="important">The number of recipients is currently restricted to a <b>maximum of 10</b></div>
### Frequencies
<table style="width: 100%;">
<thead>
  <tr>
    <th style="width: 120px;" >Frequency</th>
    <th style="width: 276px;">Send at</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td style="width:120px">None</td>
    <td>-</td>
    <td>No report will be sent - you can use this for pausing the schedule of the report</td>
  </tr>
  <tr>
    <td style="width:120px">Daily</td>
    <td>Every day at 1am UTC</td>
    <td>The report will include the statistics for the day before</td>
  </tr>
  <tr>
    <td style="width:120px">Weekly</td>
    <td>Every monday at 1am UTC</td>
    <td>The report will include the statistics for the week before (Monday to Sunday)</td>
  </tr>
</tbody>
</table>
<div class="important">If you're setuping the report for the first time, it will be sent to you on the next full hour (e.g. 10:00am)</div>

### The Report
If you scheduled a report, you will receive a report like this:

<img src="img/faas-email-reporting-email.png" alt="LivePerson Functions - Email Reporting - Report" style="width:100%;"/>

In the subject of the email you can see your account number. The subject also indicates the timerange for the data of this report.

The statistics in the email are:

- **Total Functions** displays the current number of functions on the account. This number includes *draft* and *productive* functions and also shows the maximum allowed functions of the account.

- **Deployed Functions** shows the current number of functions with a *productive* state alongside the maximum allowed *productive* functions for the account.

- **Successful Invocations** represents the total number of *successful* invocations for the current functions of the account since the beginning of the current month. 

- **Failed Invocations** represents the total number of *failed* invocations for the current functions of the account since the beginning of the current month.

In addition to the total you can see **Individual Function Statistics** for each function currently in your account, as a table.

The table includes the name and the `UUID` associated with the function and also **Successful Invocations** and **Failed Invocations** for the function.

<div class="important">You will not see any statistics of functions that are deleted at the time of the report creation</div>
