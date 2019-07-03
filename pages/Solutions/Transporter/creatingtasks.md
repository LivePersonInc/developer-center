---
pagename: Creating Report Tasks
redirect_from:
sitesection: Solutions
documentname: Transporter
permalink: transporter-creating-report-tasks.html
indicator: Both
---

The main functionality of the Transporter is to create reporting tasks. These tasks will query LivePerson APIs on your behalf, in a secure and private manner, and retrieve the information you need, without requiring a large amount of effort on your behalf.

### Available Reports

From the REPORTS section in the Navigation bar, select a report from the available catalogue.  You can choose from:

* **Messaging Reports**

* **Chat Reports**

* **Admin Reports**

Messaging and Chat reports are broken down into the following categories:

1. **Business Reports**: these are reports that have been formatted in some way to be more immediately useful for business use-cases, such as for import into Excel or other reporting tools that accept flat-file structures.

2. **Historical Data Integration**: these are reports based on Engagement History / Messaging Interactions and provide a raw feed of the source data (in JSON format).

3. **Real-time Data Integration**: these are reports based on the Operational Realtime / Messaging Operations APIs and provide a raw feed of the source data (in JSON format).

**Admin type reports** can provide a recurrent list of Skills, Agents and Agent Groups.

In the future, additional reports will be added - have an idea for a report? [Let us know](https://github.com/LivePersonInc/developers-community/issues).


### Create Report Options

After selecting a report, you will need to configure the following report options and then click Create Task.

* **Description**: a 2-3 word description about the report / task.

* **Format**: the output file format (from a list of available options).

* **Frequency**: Weekly, Daily or Interval

	* For weekly, also choose the day and time to run (timeframe = last 7 days).

	* For daily, also choose the time of day to run (timeframe = last 24 hours).

	* For interval, also choose the time frequency to run (timeframe will include the same amount of time as the time frequency selected).

* **Delay**: in some cases, API source data may be delayed in its completeness - where data completeness is strictly important, choose an option to delay the report from executing, to make sure you receive complete data. For example, you may select:

`Daily at 12:00am with a delay of 6 hours`

In this case, your report will run at 6:00 AM each day and include the data from 12:00 AM to 11:59 PM of the previous day

* **LiveEngage**: the LiveEngage data source.

* **Destination**: See below.

For some reports, you may also have the option to select additional report parameters - if this option exists, it will be presented to you on the report creation screen.

After all options are completed, you can click **Create task** to save the task - it will begin running at the next scheduled time.

### Task Destinations

1. LP Cloud - secure storage on LP servers (provided for you).

2. SFTP - securely deliver to your own SFTP server (you provide restricted user/pass).

3. Amazon - AWS S3 bucket storage (you provide IAM keys).

4. Google - Google Cloud Storage (you provide IAM keys).

#### LP Cloud

This option allows you to securely save files to our existing LP servers - to retrieve files saved here, you must login to Transporter and download the completed reports from the HISTORY section - files saved to this destination will automatically be removed after 28 days.

#### SFTP

This option allows you to securely save files to your own SFTP server having provided restricted user credentials in the form of a username/password along with the server details.

#### Amazon / Google

Securely upload files to your AWS S3 or Google Cloud Storage bucket.

<div class="important">For these destinations, when providing your authorization credentials in the relevant section of Transporter, LivePerson strongly recommends to use [IAM (Identity & Access Management)](https://cloud.google.com/iam/docs/overview) based authorization keys.</div>

### Editing Report Tasks

After you have selected your options, your report will be created and will run at the next scheduled time according to the frequency you selected.
You can edit an existing report from either the TASKS section in the Navigation bar, or from where you created the report. Find the task you’d like to edit and click the pencil icon.

The interface will show that you are currently editing the task - update any of the available options and click Update task. In addition to editing the task, you may also:

* Disable the task using the toggle switch.

* Select many tasks and disable or delete them.

* Find that tasks history via the history icon.

### Task History

#### Downloading tasks

After a report task has completed, you can view the history from the HISTORY section via the Navigation menu. This will show you information on when the task ran as well as other useful information on it.

To download the report to your browser, simply click the download icon.

<div class="important">If you see a lock next to the download icon, this means you have not entered and verified your Private Key during this browsing session.
<br>
Whilst your Private Key is not needed to download the encrypted file, if it is not provided, , the file will not be decrypted after download and you will need to decrypt it yourself.</div>

### Limitations

1. Files sent to Amazon, Google, or SFTP will be encrypted - it is up to the user to decrypt these files with their Private Key (there are many options to decrypt using PGP/GPG software).

2. Each account is limited by a maximum number of tasks - speak to your account manager to discuss task limitation options.
