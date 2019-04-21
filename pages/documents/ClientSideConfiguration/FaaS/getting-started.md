---
pagename: Getting Started
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-getting-started.html
indicator: both
---

<div class="important">FaaS is currently enabled by LivePerson account team's only. Please contact your account team if you wish to enable the platform. Until you do so, you will not be able to utilize FaaS.</div>

### Using the External UI

To grant external developers access to FaaS, we created an External UI with the same capabilities that we allow internal LivePerosn developers.

You can access this UI via (the base domain is: `faasUI`):

* **Alpha**: [https://va-a.faasui.liveperson.net](https://va-a.faasui.liveperson.net)

* **APAC**: [https://sy.faasui.liveperson.net](https://sy.faasui.liveperson.net)

* **EMEA**: [https://lo.faasui.liveperson.net](https://lo.faasui.liveperson.net)

* **US**: [https://va.faasui.liveperson.net](https://va.faasui.liveperson.net)

However, it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name `faasUI` **dynamically**

To get access to this page, you need at least one of these permissions enabled on your user: **LPA**, **FaaS-Admin**, **FaaS-Developer**. These permissions are described in detail below.

FaaS's UI is divided into three main components. [Please see this document](function-as-a-service-using-the-external-ui.html) to learn more about how to access it as an external developer. At the top of the UI you can find tab-based navigation which will allow you to navigate these components. The **Develop** tab (see below) is the default page that will be visible.

The **Develop** tab contains an overview of the functions sorted by their state: *Draft* and *Productive* / *Modified*. This allows for quick access to features surrounding the management of functions.

A detailed guide on how to create a new function can be found in the section Create a Javascript Function, below.

The **Deploy** tab provides an overview of the functions that are currently deployed. It also allows quick access to deployment features. Furthermore, it also allows access to a test page, where you can test your function with known, static input. **Note**: if the deployment of a function fails, you can hover over the deployment state to see the cause for the failure. [More information on deploying and testing your functions can be found here](function-as-a-service-deploying-functions.html).

The **Settings** tab provides access to the available settings for FaaS. Currently, this is limited to the whitelisting of domains. A detailed explanation of the Whitelisting Process can be in the document below.

Once you've familiarized yourself with the different sections of the UI, it's time to create your first function!

### Before getting started

#### Set FaaS Permissions

There are 3 permissions pertaining to FaaS:

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
<tbody>
</table>

You can configure these permission in LiveEngage:

* Click on the Users at the top of the LiveEngage UI and then Profiles

* Create/Edit a profile and add the permission you want for this profile:


#### Function Layout and Framework

In order for your function to work with FaaS seamlessly, it has to follow a certain pattern. This pattern can be viewed below.

<div class="important">Make sure that this declaration stays as shown and is in the first line of your function. Otherwise, the FaaS backend will reject the function.</div>

```javascript
function lambda(input, callback) {
   callback(null,`Hello World`);
}
```

Our runtime is built using NodeJS LTS (Long Term Support), which is currently NodeJs 10. Therefore, you have access to all functionality offered by NodeJS. However be aware that the overall user rights are limited. We also provide access to the following dependencies, which can be `required` on demand:

* [Request](https://www.npmjs.com/package/request/v/2.87.0): HTTP Library (Callback based API)

* [Request-promise-native](https://www.npmjs.com/package/request-promise-native/v/1.0.5): HTTP Library (Promise based API)

* Lp-faas-toolbelt: Utility Library which provides access to convenience functions, developed by LivePerson

As you can see from the example above, during an invocation the function receives an event-specific **input**. Furthermore, we provide a callback in the standard Node JS Signature.

```javascript
function callback(error, result){}
```

If during the runtime of your application no error has occurred, you can provide a **null** value as error. After 30 Seconds your function will be killed immediately, regardless of its error state.

<div class="important">When creating a function, you can choose from templated functions that are associated with available invocation events. In order to avoid unwanted side effects, we do allow updating the selected template. However, we also use some environment variables for configuration. As a result, these variables reserved and can not be used by the function developer. The UI will notify you if your chosen variable is reserved.</div>

In order to get started with  a function, start the creation process using the **Create a Function** button that can be found under the **Develop** tab. This opens the Creation Window which currently includes a 3 Step process:

1. Choose a template

2. *Optional* whitelist a domain

3. Function Description

### Step 1: Choose a template

We provide developer templates out of the box. These are pre-made functions which are bound to a specific event. The templates are by default runnable out of the box, allowing you to directly deploy them and see the response. You can see a preview of the template on the right-hand side.

* Each of these pre-bound events also has an event specific payload associated with it. This will be used during the testing but is also visible during development in the "Payload" tab.

* Other systems might invoke functions based on events, not only function, e.g. a LivePerson internal server will invoke functions that have the Event: "Chat Post Survey E-Mail Transcript"

After choosing the desired template, you'll need to whitelist any external domains you might want to use in order to perform an HTTP call to an external system. If this is not required, just deactivate the toggle and skip the next step.

### Step 2: Whitelist a domain

In order to leverage external domains inside your function(s), you'll need to whitelist them. This can also be done in the **Settings** section. We have a proxy in place which will check incoming requests from functions and see if the requested URL is whitelisted.

Within the `Lp-faas-toolbelt`, we provide a method that generates the required headers for the communication with the proxy. A detailed explanation on the usage is shown [here](function-as-a-service-deploying-functions.html#toolbelt).

Please make sure to whitelist the **fully qualified domain name**. E.g. If you visit [https://liveperson.com](https://liveperson.com) the server will actually redirect to [https://www.liveperson.com](https://www.liveperson.com), which means the domains you need to whitelist would be **www.liveperson.com**** **and** **liveperson.com**.

Generally, we will prevent the double whitelisting of a domain. The UI will also indicate that this occurred using a dedicated error message. We also perform validation on the provided domain in order to ensure it is a valid domain name. For now, we do not support the whitelisting of subdomains such as **.example.com**.

**Please be aware** that it might take up to **5 minutes** until the whitelisted domain becomes active on the Proxy.

### Step 3: Function description

Finally, you are able to name your function and also provide a short description. It will be useful to provide some context to another developer who might work with the function in the future. After creation, you are automatically forwarded to the Editor.

<div class="important">A function name has to be unique in order to avoid naming conflicts under one account.</div>

### Step 4: Develop your function

Once you've reached the Editor, it is time to develop the actual function, whether this entails editing the template or using it as is. Please see the [Developing with FaaS document](function-as-a-service-developing-with-faas.html) for more information on this step.

### Step 5: Deploy your function

Once you've developed your function, the last step is to deploy your function to the LivePerson platform. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to do that.
