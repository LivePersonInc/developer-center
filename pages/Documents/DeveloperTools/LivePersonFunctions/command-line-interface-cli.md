---
pagename: Command Line Interface (CLI)
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
permalink: liveperson-functions-command-line-interface-cli.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-command-line-interface-cli.html
---

### Overview

The FaaS Command Line Interface (CLI) is an open-source command-line tool provided by LivePerson that enables developers to create, edit and process their functions on their local development machines, in their favorite IDE of their choice. That way it’s very easy to keep the source code under version control in any Source Control Management (SCM).

The CLI offers nearly all functionality from the platfrom (e.g. deploy, undeploy and invoke).

Besides that it offers many commands to support developers during the development of a function (e.g. pull, push and debug).

### Get started

To start and get known to the usage of the CLI please visit [npmjs](https://www.npmjs.com/package/liveperson-functions-cli). Once you have the CLI installed simply use `lpf -h` to peruse the CLI's options.

If you have any suggestions or improvements please let us know under [Issues](https://github.com/LivePersonInc/liveperson-functions-cli/issues).

### Commands

<table style="width: 100%;">
<thead>
  <tr>
    <th style="width: 100px;" >Command</th>
    <th style="width: 276px;">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Init</td>
    <td>Initialize the project with the necessary files.</td>
  </tr>
  <tr>
    <td>Login</td>
    <td>Performs the login with Conversational Cloud Credentials.</td>
  </tr>
  <tr>
    <td>Logout</td>
    <td>Performs the logout.</td>
  </tr>
  <tr>
    <td>Create</td>
    <td>Creates either functions or schedules</td>
  </tr>
  <tr>
    <td>Add</td>
    <td>Adds domains to the currently logged account.</td>
  </tr>
  <tr>
    <td>Pull</td>
    <td>Pulls a function from LivePerson Functions.</td>
  </tr>
  <tr>
    <td>Push</td>
    <td>Pushes a function to LivePerson Functions.</td>
  </tr>
  <tr>
    <td>Deploy</td>
    <td>Deploys a function on LivePerson Functions. If the passed function is already deployed, it will be redeployed.</td>
  </tr>
  <tr>
    <td>Undeploy</td>
    <td>Undeploys a function on LivePerson Functions.</td>
  </tr>
  <tr>
    <td>Invoke</td>
    <td>Invokes a function (remote or local).</td>
  </tr>
  <tr>
    <td>Debug</td>
    <td>Starts a debug port in the range of 30500 - 31000 for a passed function.</td>
  </tr>
  <tr>
    <td>Get</td>
    <td>Gets information about the passed domain. Possible domains are deployments, functions and account.</td>
  </tr>
    <tr>
    <td>Help</td>
    <td>Shows help for the cli and the supported commands.</td>
  </tr>
  <tr>
    <td>Autocomplete</td>
    <td>Displays autocomplete instructions (only supports zsh and bash).</td>
  </tr>
  <tr>
    <td>Version</td>
    <td>Shows the current installed version.</td>
  </tr>
</tbody>
</table>


Example with `login`

<img src="img/faas-cli-login.gif" alt="LivePerson Functions CLI Login">

Example with `pull`

<img src="img/faas-cli-pull.gif" alt="LivePerson Functions CLI Pull">

### SSO Support

Currently, the CLI login is restricted to the [user login](https://developers.liveperson.com/login-service-api-methods-user-login.html) method. To use the login with an SSO enabled account you have to fetch the token and userId from the FaaS UI.

{: .notice}
It is advisable to create a separate account for the CLI, because with each new login on a different page the token expires in the CLI (only one login per account is possible).

To get the token and the userId follow these steps:

1. Open the FaaS UI and log in.
2. Open the developer tools of your browser.
3. Go to the 'Application' tab.
4. Open the session storage with the key 'houston.<accountId>'.
5. Copy token and userId.
   - Token: 'glob'
   - UserId: 'config.userId'

    <img src="img/faas-cli-fetch-token.png" class="fancyimage" width="100%" alt="LivePerson Functions CLI token">

6. Run the login command as follows: `lpf login --token <bearer> --accountId <accountId> --userId <userId>`

{: .notice}
Note: If you get a message that the token is not valid anymore, you have to perform step 1 - 6 again.

### Snippets

Using the `init` command will also create an .idea folder in your project directory. These folders contain the same [snippets](https://developers.liveperson.com/liveperson-functions-developing-with-faas-snippets.html) you'll find in our online UI. We offer these snippets for both vscode and intellij idea/webstorm. The IDEs should automatically detect the snippets files once you open your initialized projects as a workspace. If not you can check out [vscode's](https://code.visualstudio.com/docs/editor/userdefinedsnippets) or [intellij's](https://www.jetbrains.com/help/webstorm/using-live-templates.html) documentations respectively on how to add them manually.