---
pagename: Getting Started
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-getting-started.html
indicator: both
---

<div class="important">FaaS is currently enabled by LivePerson account teams only. Please contact your account team if you wish to enable the platform. Until you do so, you will not be able to utilize FaaS.</div>

### Accessing the FaaS User Interface

Our FaaS UI allows developers to directly develop, deploy and test new functions.

You can either access this UI via [https://faas.liveperson.net](https://faas.liveperson.net) or
by using the [LivePerson Domain API](https://developers.liveperson.com/retrieve-api-domains-using-the-domain-api.html) to retrieve the corresponding domain of service:
* faasUI

To get access to this page, you'll need to ask your LivePerson account team to enable the correct permissions for your account. Please contact them to do so.

FaaS's UI is divided into three main components. At the top of the UI you can find tab-based navigation which will allow you to navigate these components. The **Develop** tab (see below) is the default page that will be visible.

![](img/faas-menus.png)


The **Develop** tab contains an overview of the functions sorted by their state: *Draft* and *Productive* / *Modified*. This allows for quick access to features surrounding the management of functions. [More information on developing a function can be found here](function-as-a-service-developing-with-faas.html).

The **Deploy** tab provides an overview of the functions that are currently deployed, and allows for quick access to deployment features. Furthermore, it also allows access to a test page, where you can test your function with known, static input. **Note**: If the deployment of a function fails, you can hover over the deployment state to see the cause for the failure. [More information on deploying and testing your functions can be found here](function-as-a-service-deploying-functions.html).

The **Settings** tab provides access to the available settings of FaaS. Currently, users are able to whitelist domains and maintain secrets (i.e. OAuth tokens).

Once you've familiarized yourself with the different sections of the UI, it's time to create your first function.

### Before getting started

#### Set FaaS Permissions

There are 3 user permissions pertaining to FaaS:

* FaaS-Admin - allowed to read `lambdas`, manage the whitelist for external domains and manage secrets.

* FaaS-Developer - allowed to manage `lambdas`, read whitelisted domains and read encrypted secrets.

* FaaS-Invocation - only allowed to invoke lambdas externally.

<table>
<thead>
  <tr>
    <th>Component</th>
    <th>Action</th>
    <th>FaaS-Admin</th>
    <th>FaaS-Developer</th>
    <th>FaaS-Invocation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>lambda</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>create/edit/delete</td>
    <td>-</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>deploy</td>
    <td>-</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>invoke</td>
    <td>-</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>whitelist</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>whitelist</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>read plain</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>read crypted</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
</tbody>
</table>


You can configure these permissions in LiveEngage. More info on adding permissions can be found [here](https://knowledge.liveperson.com/admin-settings-permissions-customize-permissions.html), but the process is simple:

* Click on the users at the top of the LiveEngage UI and then profiles

* Create/Edit a profile and add the permission you want for this profile


#### Function Layout and Framework

In order for your function to work with FaaS seamlessly, it has to follow a certain pattern. This pattern can be viewed below.

<div class="important">Make sure that this declaration stays as shown and is in the first line of your function. Otherwise, the FaaS backend will reject the function.</div>

```javascript
function lambda(input, callback) {
   callback(null,`Hello World`);
}
```

Our runtime is built using NodeJS LTS (Long Term Support), which is currently NodeJs 10. Therefore, you have access to all functionality offered by NodeJS.

As you can see from the example above, during an invocation the function receives an event-specific **input**. Furthermore, we provide a callback in the standard Node JS Signature.

```javascript
function callback(error, result){}
```

If during the runtime of your application no error has occurred, you can provide a **null** value as error. After **30** seconds your function will be killed immediately, regardless of its error state.

In order to get started with a function, start the creation process using the **Create a Function** button that can be found under the **Develop** tab.

![](img/faas-function.png)

This opens the Creation Window. The Creation Window includes a 3 Step process:

1. Choose a template

2. Whitelist a domain (optional)

3. Add function Description

### Step 1: Choose a template

We provide developer templates out of the box. These are pre-made functions which are bound to a specific event. The templates are by default runnable out of the box, allowing you to directly deploy them and see the response. You can see a preview of the template on the right-hand side.

![](img/faas-templates.png)

Please see this document for more information about templates and their associated events.

### Step 2: Whitelist a domain

In order to leverage external domains inside your function(s), you'll need to whitelist them. This can also be done in the **Settings** section. Please see [this document](function-as-a-service-developing-with-faas-whitelisting-domains.html) for more information on whistelisting domains.

### Step 3: Add function description

Finally, you are able to name your function and also provide a short description. It will be useful to provide some context to another developer who might work with the function in the future. After creation, you are automatically forwarded to the editor.

<div class="important">A function name has to be unique in order to avoid naming conflicts under one account.</div>

### Step 4: Develop your function

Once you've reached the editor, it is time to develop the actual function, whether this entails editing the template or using it as is. Please see the [Developing with FaaS document](function-as-a-service-developing-with-faas.html) for more information on this step.

### Step 5: Deploy your function

Once you've developed your function, the last step is to deploy your function to the LivePerson platform. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to do that.
