---
pagename: Deployment History
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Monitoring
permalink: liveperson-functions-monitoring-deployment-history.html
indicator: both
---

### Overview

Similarly to the [activities](liveperson-functions-monitoring-activities.html), we also record and store the most recent deployments of your lambda.

### Deployment History

The deployment history can be accessed when inspecting the details of a lambda.

<img src="img/faas-deployment-history.png" alt="LivePerson Functions lambda deployment history" style="width:100%;"/>

Each item listed is tied to a (past) deployment status, the respective dates, and the user responsible for the deployment. Clicking an item will forward you to the lambda comparison page where you can compare and restore the code and metadata of this specific lambda version. Note that restoring a version does not automatically trigger a redeployment of the lambda with the restored code. This has to be done manually.

### Limitations & Restrictions

Please visit the [Limitations & Restrictions](liveperson-functions-developing-with-faas-limitations-restrictions.html#deployment-history) section.


