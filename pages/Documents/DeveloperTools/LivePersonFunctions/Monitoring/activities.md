---
pagename: Activities
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Monitoring
permalink: liveperson-functions-monitoring-activities.html
indicator: both
---

### Overview

When multiple persons develop and deploy functions on your account it can become hard to track and comprehend changes. These changes or `activities` are stored in a log and can be reviewed on your account's Functions home screen. All major activities to an account are saved for 30 days period. This will allow you to backtrack any changes to your account related to Functions.

### Account wide activities

<img src="img/faas-activities-account.png" alt="LivePerson Functions activities of account" style="width:100%;"/>

Each log entry contains the item upon which was acted, the date, the person and the type of action itself.

Topics for activities include:

- Lambdas
    - Changes to code and environment variables
    - Deployment changes
- Schedules
    - Creation and deletion of schedules
- Secrets
    - Creation and deletion of secrets
- Domain Whitelist
    - Addition and removal of domains from the whitelist
- Reporting
    - Addition and removal of emails from the reporting list
    - Changes to the reporting frequency

### Lambda activities and version comparison

A list of activities related to a specific lambda can be found within its respective function's details screen.

<img src="img/faas-lambda-activities.png" alt="LivePerson Functions activities of account" style="width:100%;"/>

Clicking activity log entries related to lambda changes (i.e. code and Environment variable changes) will result in a comparison between the version of the lambda at the time of the log entry with its previous version. Please note that lambda version will be stored longer than the 30 days of the activity logs.

<img src="img/faas-version-compare.png" alt="LivePerson Functions activities of account" style="width:100%;"/>


