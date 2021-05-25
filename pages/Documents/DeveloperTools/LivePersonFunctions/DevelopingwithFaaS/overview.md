---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-overview.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-overview.html
  - liveperson-functions-development-overview.html
  - function-as-a-service-developing-with-functions.html
  - liveperson-functions-development-overview.html#environment-variables
---


After successfully creating a `lambda` (using the [Getting Started guide](function-as-a-service-getting-started.html)) you will find yourself in the editor, the heart of the LivePerson Functions UI. Here you can develop the function itself.

<img src="img/faas-editor.png" alt="LivePerson Functions Editor" style="width:100%;"/>


### Code Completion / Context Menu

While typing, the editor will offer you suggestions based on types, if inferable. You can also utilize this feature when using `require` to import dependencies to your `lambda`. Requiring `lp-faas-toolbelt`, for example, will give you type suggestions for the FaaS Toolbelt. This works for all dependencies which are listed in the “environment” section of the editor sidebar (see below for more information).

By right-clicking inside the editor area, you're able to open the context menu, which provides you access to additional functionality, the most notable being the **Format Document** feature, which will reformat your code.

### Code Validation

The code of each lambda is parsed and syntax validated to reduce the amount of possible errors. These checks ensure that not only compliance with technical requirements (e.g. ECMAScript compliance) are met, but also restrictions mandated by the Functions platform (e.g. <100,000 characters per lambda) are upheld.   

### Editor Sidebar

By pressing the marked button you are able to hide or show the sidebar. This sidebar offers you access to three tabs (Settings, Debug and Payload, see below for more information). On smaller screens it will be hidden by default. On larger screens, it is shown by default.

<img class="fancyimage" src="img/faas-sidebar.png" alt="LivePerson Functions Editor Sidebar">

#### Settings Tab

The Settings Tab shows you general information, including the date of the last change made to the function, but also things like **Event** (which shows the event to which the function is bound) and **Description** (which shows the function description). Furthermore, it provides an up-to-date list of the available dependencies and the versions. You can click on the info icon to see the official documentation for each dependency.

In the bottom section you can manage the environment variables.
**Please be aware** that we have a set of reserved environment variables. The UI will inform you if you attempt to use them.

#### Payload Tab

The Payload Tab shows the example payload, which highlights the structure of the event-specific payload sent to the function. If the payload is larger than the view window, it will be collapsed automatically. It is also generally possible to collapse and expand the payload manually.

**Please be aware** that the payload is read-only, you are not able to modify it. We have put it there to help you in the development process by understanding what you can use/make reference to as part of the function code.

### Environment Variables

Using the relevant button from the Settings tab, you are able to add new Environment variables. Clicking the button will open a dialogue window where you can provide a name and a value for your new variable.

You can access the variable during runtime by using `process.env['YOUR_ENV']`. **Please be aware** that the value will be available in the form of a string. If the value is a number, you will have to parse it prior to using it. By using the trash icon, you can delete unwanted variables.

**Developer discretion is advised**, please be sure not to use confidential data such as credentials or secrets in the environment variables as these are saved and available in text form to anyone with access to the account. Functions has a secret storage service that can be leveraged for this purpose.

**Note**, there are certain reserved variables, that are used by the platform and therefore they are not available to the consumer. The UI will inform you if you attempt to use them.

See also [Making Functions configurable](liveperson-functions-development-best-practices.html#making-functions-configurable).


### Next steps

After you've developed your function, you'll need to deploy to the LivePerson infrastructure in order for it to run. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to do so.
