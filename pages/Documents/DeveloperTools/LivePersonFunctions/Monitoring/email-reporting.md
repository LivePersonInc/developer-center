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

**Email Reporting** gives brands the option to schedule and maintain an automatic report for their Functions. Once configured, the Scheduler will then periodically send the generated report to a list of configured recipients. The report will contain statistics about the number of (un)successful invocations of your deployed functions. The statistics will reflect the period which is set as the frequency, i.e. daily or weekly.

<img src="img/faas-email-reporting.png" alt="LivePerson Functions - Email Reporting" style="width:100%;"/>

After selecting the **Frequency of the report**, you can add recipients for the report by entering the email addresses of the recipients and clicking on the **Add** button.

To remove a recipient from the list, click on the **trash can** icon displayed next to the email address

<div class="important"> A maximum number of 10 email addresses can be added per account. Should you require more recipients, we would recommend you to use a mailing list.</div>
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
    <td>Every day at 2:00 am UTC</td>
    <td>The report will include the statistics for the day before</td>
  </tr>
  <tr>
    <td style="width:120px">Weekly</td>
    <td>Every monday at 2:00 am UTC</td>
    <td>The report will include the statistics for the week before (Monday to Sunday)</td>
  </tr>
</tbody>
</table>
<div class="important">When you set up the report for the first time, you will receive an initial report on the next full hour (e.g. if the frequency is set as Daily at 9:30 am, the report will arrive at 10:00 am)</div>

### The Report

When you schedule a report, you will receive a report as displayed below:

<img src="img/faas-email-reporting-email.png" alt="LivePerson Functions - Email Reporting - Report" style="width:100%;"/>

In the subject of the email, you can see your account number. The subject also indicates the time range of the data for this report.

The statistics presented in the email are:

- **Total Functions** displays the current number of functions available in the account. This number includes both _draft_ and _deployed_ functions out of 50 which is the maximum number of functions permitted for each account.

- **Deployed Functions** shows the current number of functions with a _productive_/_modified_ state alongside the maximum allowed _productive_ functions for the account.

- **Successful Invocations** represents the total number of _successful_ invocations for the functions of the account during the reporting period.

- **Failed Invocations** represents the total number of _failed_ invocations for the functions of the account during the reporting period. The uncategorized invocation errors are also counted here.

- **Ended with timeout** represents the number of invocations that _failed_ due to a timeout error (execution took more than 30s) for the functions of the account during the reporting period.

- **Function failure** represents the number of invocations that _failed_ due to function coding errors for the functions of the account during the reporting period.

In addition to the total numbers, you can also see **Individual Function Statistics** for each deployed function in your account as a table. The table includes the name, the event associated with the function, **Successful Invocations**, **Failed Invocations**, **Ended with timeout** and **Function failure** for each deployed function (deployed at the time of the report creation).

<div class="important">The numbers in parenthesis on the right of each metric indicate the difference between the current report and the previous.</div>

<div class="important">You will not see any statistics of functions that  were deleted at the time of the report creation</div>
