---
pagename: Command Line Interface (CLI)
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-command-line-interface-cli.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-command-line-interface-cli.html
---

### Overview

The FaaS Command Line Interface (CLI) is an open-source command-line tool provided by LivePerson that enables developers to create, edit and process their functions on their local development machines, in their favorite IDE of their choice. That way it’s very easy to keep the source code under version control in any SCM.

The CLI offers nearly all functionality from the platfrom (e.g. deploy, undeploy and invoke). 

Besides that it offers many commands to support developers during the development of a function (e.g. pull, push and debug).

#### Commands

<table style="width: 100%;">
<thead>
  <tr>
    <th style="width: 100px;" >Command</th>
    <th style="width: 276px;">Description</th>
  </tr>
</thead>
<tbody>
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
  <tr>
    <td>Init</td>
    <td>Initialize the project with the necessary files. If the project is already initialised it will add a new function.</td>
  </tr>
  <tr>
    <td>Login</td>
    <td>Performs the login with LiveEngage Credentials.</td>
  </tr>
  <tr>
    <td>Logout</td>
    <td>Performs the logout.</td>
  </tr>
  <tr>
    <td>Deploy</td>
    <td>Deploys a function on the LivePerson functions platform. If the passed function is already deployed, it will be redeployed.</td>
  </tr>
  <tr>
    <td>Undeploy</td>
    <td>Undeploys a function on the LivePerson functions platform.</td>
  </tr>
  <tr>
    <td>Pull</td>
    <td>Pulls a function from the LivePerson functions platform.</td>
  </tr>
  <tr>
    <td>Push</td>
    <td>Pushes a function to the LivePerson functions platform.</td>
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
    <td>Get information about the passed domain. Possible domains are deployments, functions and account.</td>
  </tr>
</tbody>
</table>


Example with `login`

<img src="img/faas-cli-login.gif" alt="LivePerson Functions CLI Login"> 

Example with `pull`

<img src="img/faas-cli-pull.gif" alt="LivePerson Functions CLI Pull"> 

### Get started

To start and get known to the usage of the CLI please visit [npmjs](https://www.npmjs.com/package/liveperson-functions-cli).

If you have any suggestions or improvements please let us know under [Issues](https://github.com/LivePersonInc/liveperson-functions-cli/issues).



