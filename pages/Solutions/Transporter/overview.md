---
pagename: Overview
redirect_from:
sitesection: Solutions
documentname: Transporter
permalink: transporter-overview.html
indicator: Both
---

The Transporter 2.0 enable brands and internal users alike to schedule raw and formatted data report exports from LiveEngage Data APIs - each report can be setup on a recurring frequency, including but not limited to weekly, daily, and hourly, and the report will be delivered to a destination of the users choice, including internal LiveEngage storage, Amazon S3, Google Cloud, or SFTP.

### Why Should I Use the Transporter?

Many brands seek to regularly receive data from and integrate with our Data APIs, especially raw non-aggregated data such as messaging interactions or chat engagement history.  However, often these types of API integration projects can be costly, difficult and time consuming since the Data APIs retrieve large and varied amounts of information. In addition, security is paramount when making these API calls and developing encryption or working with our out of the box solutions can be challenging.

Transporter 2.0 solves this problem by providing the connection to the Data APIs without the need to develop on top of them - a user will log-in with their secure credentials, select the report they wish to receive, and pick the destination. The task will then run on the selected schedule and provide the user with a log of the calls made, their responses, and the ability to retrieve the file with the data in it right within the interface.

<div class="important">For more information on how to setup and configure the Transporter, please see the <a href="transporter-getting-started.html">Transporter Getting Started document</a>.</div>

### Features Overview

**Access data from the following APIs**:

* Messaging Interactions API

* Messaging Operations API

* Engagement History API

* Operational Realtime API

* Users API

* Skills API

* Agent Groups API

**Send files to the following destinations**:

* LE Store (internal storage on LP production servers, encrypted at rest, deleted after 28 days)

* Amazon S3

* Google Cloud

* SFTP

**Mandatory encryption to ensure the security of your data**:

* Bring your own Public/Private keys or generate them from the application

**Flexible report scheduling capability**:

* Weekly, choose a day and time

* Daily, choose a time of day

* Interval, half-hourly, hourly, 3 hours, 6 hours, 12 hours

**Secure**:

* Log-in with your LiveEngage credentials

* Mandatory two-factor authentication
