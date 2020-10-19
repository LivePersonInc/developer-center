---
pagename: Getting Started
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
permalink: liveperson-functions-getting-started.html
indicator: both
redirect_from:
  - function-as-a-service-getting-started.html
---


### Before getting started

#### Provisioning
In order to easily integrate LivePerson Functions we will allow Conversational Cloud Admins to provision your account when entering LivePerson Functions. Provisioning will be triggered after you agree to our terms of use:

<img src="img/faas-terms-of-use.png" alt="FaaS Terms of Use" style="width:100%;"/>

Once agreed, we will automatically set up your account to easily integrate with the rest of the LivePerson ecosystem including:

* Activating the LivePerson Functions feature on your account
* [Installing secrets](liveperson-functions-development-storing-secrets.html) you will need to interact with other LivePerson APIs
* [Whitelisting domains](liveperson-functions-development-whitelisting-domains.html) of internal LivePerson APIs


#### Set User Permissions

<div class="notice">
Users with an Administrator profile automatically have all the relevant Function Permissions as is described below. If users who do not have an Administrator based role require any of the Functions related permissions below, please manage the user profile permission from the User Management tab in your LivePerson account. 
</div>

There are 3 user permissions pertaining to Functions:

* FaaS-Admin - allowed to read `lambdas`, manage the whitelist for external domains and manage secrets. This permission is by default set to 'ON' for all admins on the account. It is however possible to limit your admin's access as well. You can create a separate permission group for developers you wish to have part of the admin profile permissions and assign them with the relevant permissions as needed, by creating a custom profile.

* FaaS-Developer - allowed to manage `lambdas`, read whitelisted domains and read encrypted secrets.

* FaaS-Invocation - only allowed to invoke lambdas externally. This permission is granted to a user dedicated to external invocations. When an external system needs to invoke a Functions `lambda`, the external system needs to use an account user with this permission <strong>enabled</strong> to access the LivePerson platform.

<table class="thinner" style="width: 100%">
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
    <td>✅</td>
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
    <td>read (value is obfuscated)</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>schedule</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>schedule</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>emailReport settings</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>emailReport recipients</td>
    <td>create/delete</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>emailReport</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
   <tr>
    <td>logs</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>logs</td>
    <td>create</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>reporting</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</tbody>
</table>


You can configure these permissions in Conversational Cloud. More info on adding permissions can be found [here](https://knowledge.liveperson.com/admin-settings-permissions-profiles.html), but the process is simple:

* Click on the users tab at the top of the Conversational Cloud UI and then click profiles

* Create/Edit a profile and add the relevant FaaS-* permission to it

#### Configure SSO unified login

In case the [single sign-on (SSO) unified login feature](https://knowledge.liveperson.com/security-regulations-login-sso-unified-login.html) is enabled for your account, then the normal login flow cannot be used to login into LivePerson Functions.

Please follow these steps in order to get SSO unified login working with LivePerson Functions:

* Contact your LivePerson account representative to get SSO Unified Login feature enabled for your account.

* Once SSO Unified Login is enabled for your account, you can use `https://faas.liveperson.net/api/sso/login?accountId=<accountId>` to login into LivePerson Functions for Production Environments. Please use `https://va-a.faasui.liveperson.net/api/sso/login?accountId=<accountId>` for Alpha Environments. Moreover you can also use the [LivePerson Domain API](https://developers.liveperson.com/retrieve-api-domains-using-the-domain-api.html) to retrieve the corresponding domain per environment, by providing the service `faasUI` to the Domain API.

<div class="important">Make sure to be logged into Conversational Cloud before accessing LivePerson Functions from your account.</div>

### Configure your firewall

Please follow [this](https://knowledge.liveperson.com/security-regulations-security-configuring-your-firewall.html) document to whitelist LivePerson IP ranges for any APIs that will be used within `lambdas`.

### Accessing the LivePerson Functions User Interface

Our Functions UI allows developers to directly develop, deploy and test new functions.

You can either access this UI via [https://faas.liveperson.net](https://faas.liveperson.net) or
by using the [LivePerson Domain API](https://developers.liveperson.com/retrieve-api-domains-using-the-domain-api.html) to retrieve the corresponding domain by providing the service `faasUI` to the Domain API.

To get access to this page, you'll need to ask your LivePerson account team to enable the correct permissions for your account. Please contact them to do so.

<div class="notice">Functions currently supports the latest versions of <strong>Firefox</strong>, <strong>Edge 86+</strong>  and <strong>Chrome</strong>.</div>

The Functions UI is divided into six components. On the left hand side of the UI, you can see the navigation bar which allows you to navigate through these components. The **Home** screen (see below) is the default page that will be visible.

<img src="img/faas-home.png" alt="FaaS Landing" style="width:100%;"/>

The **Home** section serves as the landing page of LivePerson Functions. Here you can inspect the basic metrics of your Functions Account such as the total number of lambdas or the number of invocations since the beginning of the month.

The **Functions** section contains an overview of the functions sorted by their state: *Draft* and *Productive* / *Modified*. This allows for quick access to features surrounding the management of functions. [More information on developing a function can be found here](function-as-a-service-developing-with-faas-overview.html).

The **Deployments** section provides an overview of the functions that are currently deployed, and allows for quick access to deployment features. Furthermore, it also allows access to a test page where you can test your function with known, static input. **Note**: if the deployment of a function fails, you can hover over the deployment state to see the cause for the failure. [More information on deploying and testing your functions can be found here](function-as-a-service-deploying-functions.html).

The **Schedules** section allows to define a time-based execution of lambdas via Cron expressions. [More information on scheduling a function can be found here](liveperson-functions-scheduled-invocations.html)

The **Logs** section is for analysing your functions' past invocations by searching through the logs you defined. [More information on logging your function can be found here](function-as-a-service-developing-with-faas-overview.html).


The **Settings** section provides access to the available settings of Functions. Currently, users are able to whitelist domains, set up email reporting and maintain secrets (e.g. OAuth tokens).

Once you've familiarized yourself with the different sections of the UI, it's time to create your first function.

### Creating Your First Function

In order to get started with a function, start the creation process using the **Create a Function** button that can be found at the **Functions** section.

<img src="img/faas-function.png" alt="LivePerson Functions Function Overview" style="width:100%;"/>

This opens the Creation Window. The Creation Window includes a 3 Step process:

1. Choose a template

2. Whitelist a domain (optional)

3. Add a function description

### Step 1: Choose a template

We provide developer templates out of the box. These are pre-made functions which are bound to a specific event. The templates are by default runnable out of the box, allowing you to directly deploy them and see the response. You can see a preview of the template on the right-hand side.

<img src="img/faas-templates.png" alt="LivePerson Functions Function Templates" style="width:100%;"/>

Please see [this document](function-as-a-service-templates.html) for more information about templates and their associated events.

### Step 2: Whitelist a domain

In order to leverage external domains inside your function(s), you'll need to whitelist them. This can also be done in the **Settings** section. Please see [this document](function-as-a-service-developing-with-faas-whitelisting-domains.html) for more information on whitelisting domains.

### Step 3: Add function description

Finally, you are able to name your function and also provide a short description. It will be useful to provide some context for another developer who might work with the function in the future. After creation, you are automatically forwarded to the editor.

<div class="important">A function name has to be unique in order to avoid naming conflicts under one account.</div>

### Step 4: Develop your function

Once you've reached the editor, it is time to develop the actual function, whether this entails editing the template or using it as is. Please see the [Developing with Functions document](function-as-a-service-developing-with-faas-overview.html) for more information on this step.

#### Function Layout and Framework

Our runtime is built using NodeJS LTS (Long Term Support), which is currently NodeJS 12. Therefore, you have access to all functionality offered by NodeJS.

In order for your function to work with LivePerson Functions seamlessly it has to follow a certain pattern. This pattern can be viewed below.

<div class="important">Make sure that the following declaration stays as shown and is in the first line of your function. Otherwise, the FaaS backend will reject the function.</div>

```javascript
function lambda(input, callback) {
   callback(null,`Hello World`);
}
```

As you can see from the example above, during an invocation the function receives an event-specific **input**. Furthermore, we provide a callback in the standard Node JS Signature.

```javascript
function callback(error, result){}
```

If during the runtime of your application no error has occurred, you can provide a **null** value as error. After a **30** second timeout, your function's execution will be terminated immediately, regardless of its error state.

Errors are only forwarded based on the concrete event source and they react differently to errors, some events repeat the invocation while others they do not repeat the invocation. 

### Step 5: Deploy your function

Once you've developed your function, the last step is to deploy it to the LivePerson platform. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to do that.
