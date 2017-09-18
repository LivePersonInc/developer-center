---
title: Step 3 - Configuring the App’s Sync Process Settings
level1: Products
level2: 
level3: SalesForce Integration
level4: Implementation

order: 30
permalink: products-agent-efficiency-salesforce-integration-step3.html

indicator:
---

### Overview

In addition to the widget integration which creates chat transcripts records when the chat start, an extra offline sync process was built into this package to sync between Salesforce and LiveEngage Servers.

This process is used to preserve data integrity and to make sure the Chat Transcript Information saved in Salesforce is full, accurate and up to date.

The sync process includes 4 sync options:

1. **Periodic Sync** - captures and update information of the last 6 hours, every 3 hours (8 times a day in total).

2. **Daily Sync** - captures information from the last 48 hours (In order to keep with LivePerson’s Data SLA of up to 24 hours for full data).

3. **Manual Sync** - allows the admin to choose a past period of time to manually sync into Salesforce (Due to various reasons: server issues, agent wasn’t logged in, errors etc...).

4. **“Sync Chat”** Button on the Chat Transcript Record - allows on-demand sync with LE servers for a specific Chat Transcript record.

**Note!** These sync processes are one sided, from LiveEngage to Salesforce only, no information is transferred from
Salesforce to LiveEngage.

The following sections will walk you through the different sync options:

### Schedule a Periodic Sync Job

This will sync chats in a batch every 3 hours.

1. Scroll down to "Perioidc Sync Job".

2. Click "Schedule a Perioidic Job" to activate.

### Schedule a Daily Sync Job

Daily Sync Jobs will sync any chats that may encountered errors during the time the periodic sync jobs ran.

Daily Sync Jobs allow you to select the hour that your job will run.

1. Scroll down to “Daily Sync Job”.

2. “Select Hour” that the job will run.

3. Click “Schedule Daily Job” to activate.

### Run a Manual Job

In case the periodic or daily sync did not capture a chat due to any reason (Errors etc.), you can run a manual job.

1. Scroll down to the “Manual Sync Job” section.

2. Select “Start Time”.

3. Select “End Time”.

4. Click “Schedule Manual Job”.

**Note!** The limitation for the ‘Manual job’ is 30 Days. 

### “Sync Chat” Button on Chat Transcript Record

After the chat transcript has been created in Salesforce, and only when the chat already ended, you may update it by clicking on “Sync Chat” button at the top of the record page. 

![SyncChat](img/syncchat.png)

### "Event Log" Tab

The “Event Log” includes information about any sync errors that may have occurred. Click on the dropdown list, select the “Callout Errors” list view and view any errors that occurred during the sync.