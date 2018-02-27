---
title: Add Your Own Widgets to the Agent Workspace
level1: Documents
level2: Guides
level3: Add Agent Widgets

permalink: guides-agent-workspace-widget.html
root-link: true
level-order: 3
order: 1
indicator: both
---

Agents often need to access external systems while they are working in the agent workspace, and to do so, they need to open additional tabs or browsers. Now, you can
integrate external systems right into the agent workspace, allotting them their own widget next to the standard widgets.

The integration allows you to transfer information directly from the Visit Info to external web pages and applications, and to open relevant records in your system. For example, add a SalesForce widget to view your visitor’s Salesforce records.

In addition, external web page fields can be pre-populated with visitor information, for example, you can pass the Visitor’s name and email parameters from the pre-chat survey
into the application to pre-populate specific fields.

The agent workspace default view has five equally-sized widgets, to the right of the chat pane (see a sample in the screenshot below) - Visit Info, Predefined Content, Page Navigation, Agent Survey, and Engagement History. In the example, three of the default widgets are selected and display with the default width. Two more default widgets are unselected and at the end, we can see two custom widgets that have been added. Users can scroll right and left to see all five of the default widgets.

![AgentWorkspaceScreenshot](img/agentworkspacewidget1.png)

Let’s say that your agents use a knowledgebase or an external CRM such as SalesForce, while they are chatting. Up until now they have had to access it in a separate window. Now, you can add a widget that displays Salesforce right next to the existing widgets, allowing agents to quickly view and utilize the information they need at any given moment. You can configure parameters to be passed from LiveEngage to your external system.

You can even define the width of the new widget; it can be the same width as each of the standard widgets or it can be the width of two, three or four widgets combined. You can add as many as five additional widgets to the agent workspace.

To ensure your Agents are focused on the tools most relevant for them, Admins have the option of assigning widgets to one or more skill. The widget will subsequently only appear to Agents handling chats associated with that skill. Widgets not assigned to specific skills will still appear to all Agents handling any chat.

### Creating a New Widget

**To create new widgets that open external web pages and/or systems**:

1. On the Visitors screen, click the **Night Vision** button (at the top of the screen). A transparent overlay screen displays on top of the Visitors screen, allowing you to choose which features you wish to configure.

	![NightVision](img/night_vision.png)

2. Click **Agent Workspace configuration.**

	![ConfigurationArrow](img/configurationarrow.png)

3. Look for **Edit Widgets** where you can add, remove, and edit widgets. Click the **+ icon.** The **Integration widget** opens.

	![EditWidgets](img/edit_widgets.png)

4. Enter the name of the new widget. The widget icon is automatically generated and displays the initials of the name you’ve chosen.

5. Select the desired width of the new widget; **single** (the same width as the default widgets), **double**, **triple**, or **quadruple**, so your widget is compatible to the external webpage that you want to display.

6. If you would like the widget to appear alongside chats associated with a specific skill or skills, select the relevant option(s) from the **Assigned Skills field**. If no skill is assigned, the widget will appear to all chats.

7. Enter the **URL** of the webpage or external application that you wish to display within the widget.

8. If you want to add more parameters to the URL, click **Add Visit Info Parameters**. The **Visit info parameters** window will open.

9. Add visit info parameters:

	a. In the **Parameter** name field, enter the query string identifier you wish to bind the value.

	b. From the **Map to field**, select the LiveEngage parameter that you want to transfer.

	c. Click the + icon to add this parameter. You can keep adding parameters in this way.

10. Click **Save parameters**. The complete URL, including visitor parameters will appear in the Complete URL field. This action maps which information will be transferred from LiveEngage to the external webpage.

<img src="img/integration_widget.png" alt="IntegrationWidget" width="717" height="900">

<img src="img/visit_info_parameters.png" alt="VisitInfoParameters" width="596" height="790">

### using the data in the widget
In order to use the data sent to the widget, you can query the page **URL QueryString** using the [URLSearchParams API](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) or analaysing the window **location** property manually.

### Edit an Existing Widget

To edit one of your existing widgets, click the widget icon and choose what you want to do from the drop-down menu. You can edit, hide, remove or set the widget to **Manager view**, which means that only admins and agent managers see the new widget during the testing period. If the widget is in **Manager view**, its icon has a striped pattern as shown below. In contrast, no one can see a hidden widget. To test your new widget before going live with it, apply the **Manager view**.

Once you’ve reached the maximum number of supported widgets, you’ll get a message notifying you, and the + icon will be disabled.

![EditExistingWidget](img/edit_existing_widget.png)

Your new widget will now be displayed as an additional icon next to the existing widget icons at the top of the agent workspace, and you can show your agents how to use the integrated webpage from inside the agent workspace.

![AgentWorkspaceSalesforce](img/agent_workspace_salesforce.png)

**For a succesful integration, please note:**

* **The application must be able to open within an iFrame:** Some applications prevent themselves from opening within an iFrame (These are known as 'Frame Busters’). If you try to integrate such an application within an Agent Workspace widget, you will get a blank widget, or an error message in the widget (depending on your browser).

* **Internet Explorer support:** Custom widgets are supported on Internet Explorer 10 and higher only.

* **The application must be hosted over SSL:** **S**ecure **S**ockets **L**ayer is a protocol that provides network security and privacy. SSL uses trusted certificates to perform client and server authentication. This means your application must be hosted on a valid SSL certificate site and, as part of the application, the URL must begin with **https**.

* **Automatic focus management may be problematic:** Applications with focus stealing can cause issues in the user interface of the Agent Workspace.

**Note**: To integrate with your **Salesforce** application, open a ticket to Salesforce support and request the removal of the X-Frame option from your organization’s Salesforce pages. This will allow you to open Salesforce in the widget. Agents must log into Salesforce in a separate browser tab (or through SSO) prior to accepting chats.
