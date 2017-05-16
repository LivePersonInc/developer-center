---
title: Setting Consumer Window
Keywords:

level2: Agent Interactions
level3: Messaging Agent API
level4: Messages

order: 5
permalink: setting-consumer-window.html

---

Another option to use the consumer web messaging window.

### Step 1 - Configure the Authentication Connector
Login to LE and choose the Campaigns -> Data Sources -> Authentication Server -> Configure.

![campaigns](img/campaigns.png)
![datasources](img/datasources.png)

In the connector configuration screen set the following fields:

* Choose from the dropdown ``oAuth 2.0 authentication (implicit)``
* **Authentication Endpoint** : ``https://dummy.com``
* In the ``JWT Public Key`` type: 

`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdlatRjRjogo3WojgGHFHYLugdUWAY9iR3fy4arWNA1KoS8kVw33cJibXr8bvwUAUparCwlvdbH6dvEOfou0/gCFQsHUfQrSDv+MuSUMAe8jzKE4qW+jK+xQU9a03GUnKHkkle+Q0pX/g6jXZ7r1/xAK5Do2kQ+X5xK9cipRgEKwIDAQAB`

* In the ``JS Method Name`` type: ``LPJsMethodName``
* Click ``Save``

![connector](img/connector.png)

### Step 2 - Define Messaging Engagment

Change the default campaign to authenticated messaging.

Move to the campaigns area:

![agent_campaign](img/agent_campaign.png)

Edit the default engagment:

![edit_campaign](img/edit_campaign.png)

Change the settings of the engagment to ``Authenticated Visitors Only`` and ``Messaging``:

![capmaign_settings](img/campaign_settings.png)

Open [consumer test page](assets/html/sitechoose.html)
enter your site id and the following JWT:


`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIrOTcyLTMtNTU1NS01NTUiLCJpc3MiOiJodHRwczovL2lkcC5saXZlcGVyc29uLm5ldCIsImF1ZCI6ImFjYzpxYTU3MjIxNjc2IiwiZXhwIjoxNTM0OTcxOTMwLCJpYXQiOjE0NzE4OTk5NDIsIm5hbWUiOiJFaXRhbiJ9.Fh0sG-iu-VMZRFRbUNK0kEzb7Y1BXtQHOKaHL2y40y_c4mBvmQDCOYNWJ1ZEeayTNuLboYx6L8xEoC5xZIFnVv2N4a36BBU88fNuhe9Em2b5qNdVbdBtIJQoBY5ep5O2geAaCVA7A7oS8ysWVGn9CV4btH_D5sU2jGr3ml8yfJA`

and click submit.

Click the "Live Chat" button:
![consumer-page](img/consumer_page.png)

The conversation window will be shown
![capmaign_settings](img/consumer_window.png)


