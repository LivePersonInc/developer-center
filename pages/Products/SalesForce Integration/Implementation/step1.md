---
title: Step 1 - Installing the LiveEngage App for Salesforce
level1: Products
level2: Agent Efficiency
level3: SalesForce Integration
level4: Implementation

order: 10
permalink: products-agent-efficiency-salesforce-integration-step1.html

---

Here are the steps in order to install the LiveEngage App in Salesforce:

1. Contact LivePerson to receive the installation URL.

	Note: if you would like to install the app in a Sandbox environment, you will need to choose the relevant installation
	URL as follows:

	* [Installation on production](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t15000000pN6J){:target="_blank"}
	

	* [Installation on sandbox](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t15000000pN6J){:target="_blank"}

{:start="2"}
2. Navigate to the URL in order to install the application.

3. Enter your Salesforce credentials and log in.

4. Select "Install for All Users", click "Install". When you complete the installation, make sure to limit the app and tabs
only to the relevant authorized profiles, so the agents will not be able to modify the app configuration and setup
(Admin, Management).

5. "Approve Third-Party Access" - The App will ask you to install "Remote Site Settings", mark the checkbox "Yes,
grant access to these third party web sites" and click continue, to allow communication to LivePerson Servers (this
is mandatory for the app to work).

![ApproveThirdPartyAccess](img/approvethirdpartyaccess.png)