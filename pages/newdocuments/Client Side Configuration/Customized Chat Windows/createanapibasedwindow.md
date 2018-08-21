---
pagename: Create an API-based Window
redirect_from:
  - guides-customizedchat-create-an-api-based-window.html
sitesection: Documents
categoryname: Guides
documentname: Customized Chat Windows

permalink: customized-chat-windows-create-an-api-based-window.html
order: 2
indicator: chat
---

**An “API-based” engagement window must be configured in LiveEngage.**

* On a monitored flow
	Attach the API-based window to the relevant web engagement/campaign.

* On an unmonitored flow
	Attach the API-based window to the relevant external engagement.



**On create campaign flow and after setting up the Engagement you will need to choose or create a window.**

### Step 1 - Create an API based window
**In the window gallery page click the top right “Action” dropdown menu and select “Add API-based window”.**

![Apibasedwindow1](img/apibasedwindow1.png)

### Step 2 - initialization settings
**Fill in the necessary properties:**

![Apibasedwindow2](img/apibasedwindow2.png)

**Mandatory fields**

* Name: the window name

* JS method name: the Javascript method name, under which your API-based window code is located on your web page, which will be triggered by the LiveEngage Tag to initiate the window.

**Optional fields**

* JS context: the Javascript context where the jsMethodName is located.
Default value: “window”

[Read more about Javascript’s context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call){:target="_blank"}.

### Step 3 - confirmation
**Save your settings and choose the API Based Window you have just created.**

![Apibasedwindow3](img/apibasedwindow3.png)
