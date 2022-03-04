---
pagename: Deep Dive CLI
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Getting Started
permalink: liveperson-functions-getting-started-deep-dive-cli.html
indicator: both
---

# Deep Dive CLI
Our Functions CLI tool allows you to bring your local setup to Functions development and automate your interactions with the Functions platform. For a more general overview on the CLI please visit its [Foundations chapter](liveperson-functions-foundations-liveperson-functions-cli.html). You can find its public github repository as well as its documentation [here](https://github.com/LivePersonInc/faas-cli/).

## Login
There are two ways to login to your Functions account using the CLI. One which uses a simple `username` and `password` combination as well as the possibility of using a `bearer token` as a method of authentication. The later method is preferential for automated solutions such as a CI pipeline. More information can be found in our [CI/CD guide](liveperson-functions-foundations-liveperson-functions-cli.html#ExampleCISetup).

To initialize a login either use your `lpf login` and following the command prompt entering `accountId`, `username` and the users `password` in succession:

<img class="fancyimage" alt="Functions: cli login wizard" src="img/functions/functions_cli_login.gif">


Once you have successfully logged in the CLI will save your login information locally for easy access later on. The CLI will retain `accountId` and `username` as well as any valid auth token.

If you want to invalidate the login information a `lpf logout` will do the trick. There are situations where you want to completely delete the login information (e.g. you want to use a different user for the same account). In such a case `lpf logout --delete` will let you completely remove the login information of any account you select from your local machine:

<img class="fancyimage" alt="Functions: cli logout and delete account data" src="img/functions/functions_cli_logout.gif">


## Install & Initialize
**Installation** and **updating** the CLI are both handled using `npm install -g liveperson-functions-cli`. You can also check for updates by using the `lpf version`. Once the CLI has been installed, you can check out the documentation using `lpf help` or head to our [Github Page](https://github.com/LivePersonInc/faas-cli).

Before starting to develop, debug or deploy any function you'll have to *initialize* your environment. This is a mandatory step as it creates all the files for the CLI to work properly. Use it with an empty folder or an existing repository with `lpf init`.

>We are advising against changing the file or folder names or the structure in which they are generated as the CLI might not be able cope with such a change.

We recommend using an `lpf init` before working on an existing repository to keep your repository up-to-date with any updates to the CLI that might have effected the repository's default structure. `lpf init` will create files required by git such as a `README` and a preconfigured `.gitignore` for your convenience. The `settings.json` stores a locally used account configuration which is used by the [debugging](liveperson-functions-getting-started-deep-dive-cli.html#debugging) feature to accurately reproduce the production environment for testing.

## Create

After using `npm init` to initialize your Functions folder. You can use `lpf create:function` to create a function. Similar to `login` or all other commands for this matter, the CLI supports wizards meant for manual creation of functions and inline commands meant for automated processes.

Let's create a function using the inline method. Before we can start we can start use the `lpf get events` command to receive an up-to-date list of all events and their respective Ids:

<img class="fancyimage" alt="Functions: cli shows list of events" src="img/functions/functions_cli_eventIds.png">

You can now either select an event from the list or use `"No Event"` as an Id to create a function which does not react to any event. In this example we will use:

`lpf create:function -n exampleFunction -d "This is an example function" -e "No Event"`

If it does not exist, the CLI will have created *functions* folder wherein the *exampleFunction* and its configuration files are stored.

> The create:function command should always be called in the root folder of your project, i.e. the folder in which you called `lpf init` earlier

Aside from listing the event Ids all steps until now have been executed on your local machine. If you encounter problems such as not being able to retrieve the list of events. Please check if your user has the [Functions Developer Permission](liveperson-functions-permission-system.html) assigned.

If you navigate to the newly created folder of your function you'll find two files:
* **index.js**: Contains the logic of your function
* **config.json**: Contains all meta information and configuration of your function

Both of these files are the only ones relevant from the CLI's and Functions' perspective and as such shouldn't be changed in their location or renamed.

The config.json should look similar to this:

```json
{
    "name": "exampleFunction",
    "event": "No Event",
    "description": "This is an example function",
    "input": {
        "headers": [],
        "payload": {}
    },
    "environmentVariables": [
        {
            "key": "",
            "value": ""
        }
    ]
}
```

The `input` and the `environmentVariables` are important for the [development](liveperson-functions-getting-started-deep-dive-cli.html#development) and [debugging](liveperson-functions-getting-started-deep-dive-cli.html#debugging) of your function.

The **name** property is the unique key that references your local function to a function which might exist on a Functions account. As such *pushing* the exact same version of your function with slightly altered name to the same account will result in two functions on this account. Keep the following restrictions in mind:
* Only alphanumeric characters are allowed (whitespaces forbidden)
* Restricted to 50 characters
* Must be unique for a given account

The **event** contains the event Id. Make sure to select a valid Id with the `lpf get events` command. Once a function has been pushed to an account the event **cannot** be changed. The functions has to be removed and re-pushed in order to change the event.

The **description** is a mutable string and has similar restrictions to the function's name:
* Only alphanumeric characters are allowed (whitepaces allowed)
* Restricted to 100 characters

## Development
The main use case for utilizing the CLI for development rather than the Functions UI is the comfort of using your IDE of choice, sharing code between accounts and building custom scripts (e.g. unit-tests, linters) to improve the quality of your code.

The environment variables still fall under the same [restrictions and limitations](liveperson-functions-getting-started-configure.html#environment-variables) as set by the UI and will be verified during upload to your account:
* Both *name* and *value* of the environment variables need to have less than 200 characters
* Only alphanumeric characters are allowed for the name (whitespaces forbidden)
* The value **has** to be a `String`. `Numbers` and `Objects` are not allowed.

The environment variables are injected at runtime and can be accessed with `process.env['YOUR_ENV']`.

Developing your function is straight forward: we are only allowing javascript code to be run on the Functions platform. Your code will be executed inside a Node.js v14.19.0 runtime and therefore supports most ES2020 language features. Please confer [this chart](https://node.green/) for more information.

### Code Snippets

If your choice of IDE is either [Visual Studio Code](https://code.visualstudio.com/) or an Jetbrains IDE (e.g. [Webstorm](https://www.jetbrains.com/webstorm/)) then we provide Snippets (or *Live Templates* in Jetbrains' case) to speed up your development process.

Your code editor should automatically pickup the `.vscode` and `.idea` folders generated by the `lpf init` command. Within you can find the respective snippets. If your IDE does not automatically import the snippets use [this guide](https://code.visualstudio.com/docs/editor/userdefinedsnippets) for vscode and [this one](https://www.jetbrains.com/help/idea/creating-and-editing-live-templates.html) for your Intellij IDE.

Snippets should be easily activated using the code completion of your IDE like here shown for vscode:

<img class="fancyimage" alt="Functions: snippets in vscode animation" src="img/functions/functions_cli_snippets.gif">

An up-to-date list of all snippets can be found in the CLI's public [github repository](https://github.com/LivePersonInc/faas-cli/blob/master/bin/example/vscode/faas-snippets.code-snippets)

### Debugging

Debugging your function on your local machine can give you valuable information about its behavior. To start the debugging process use the command `lpf debug YOUR_FUNCTION`. This will generate some boilerplate code around your function required by the debugger to mock certain dependencies:

<img class="fancyimage" alt="Functions: use cli debugging in vscode" src="img/functions/functions_cli_debugger.gif">


You can configure your local account setup to reflect that of your production account by changing the `settings.json` that was created during the `lpf init` of your repository. The following properties can be changed:

* **secrets**: An array of key/value pairs which contains a `String`-based secrets.
* **whitelist**: An array of domains which the functions will be allowed to call.

>This information will not be pushed to our services and therefore not be checked for validity. Please read [this](liveperson-functions-getting-started-configure.html#secrets) chapter about the secret/whitelist specifications.

It is important to note that we do not recommend storing real secrets on your local machine as cleartext as this is obviously not a secure method of storing any credential and should be used for testing only.

Once you have used the `lpf debug` command and the debug process has started you can place your breakpoints. To start debugging you have three options:
* **vscode**: Start the "Attach FaaS Debugger" task from the launch.json
* **Intellij IDE**: Start the "Attach FaaS Debugger" task from the top-bar
* Other debuggers: Run `node ../bin/debug.js YOUR_FUNCTION` and

The `lpf debug` command quits after one debug invocation of the functions and will automatically remove the boilerplate code. If there was an unforeseen error and the boilerplate code is not automatically removed you will have to remove any residual code from the `index.js` file manually.

## Deploy
Deployment of your lambda is a two step process:

First you have to upload your function to your account using the `lpf push` method:

<img class="fancyimage" alt="Functions: cli push wizard" src="img/functions/functions_cli_push.gif">

>If your lambda is currently in the process of being (un)deployed we will not allow you to push and update your lambda.

Once it has been pushed you can confirm its location be using the `lpf get functions | grep YOUR_FUNCTIONNAME` command. It should be in `Draft` or `Modified` state depending on whether or not the function has already been deployed in the past on your account. Next use the command `lpf deploy FUNCTION_NAME`. This will cause the function to be (re)deployed. After a short period of time you should receive the confirmation.

<img class="fancyimage" alt="Functions: cli deploy wizard" src="img/functions/functions_cli_deploy.gif">

>The CLI can fail during the deployment process for multiple reasons such as timeouts or network issues. The deployment process does not require continuous connection to your local CLI therefore you should use the `lpf get functions | grep YOUR_FUNCTIONNAME` to check the state of your lambda before retrying.

If you want to undeploy the lambda it is the same process: use the command `lpf undeploy FUNCTION_NAME` to undeploy the lambda. However you cannot delete the function from your account using the CLI once it has been pushed.

## Test

### Invoking a function

The CLI allows you to invoke the lambda remotely if it is in a *productive* state with `lpf invoke YOUR_FUNCTION` or locally which is analogous to a debug invocation with `lpf invoke YOUR_FUNCTION -l`.

>In both instances the `lpf invoke` command will automatically use the **input** property set in your function's config.json as an invocation payload.

### Unit testing a function

There are numerous ways to ensure the continuous quality of your function. One of this is creating unit tests for it.

> The CLI will ignore any file that is not the index.js or the config.json - so do not worry about adding your tools

First we have created this simple function which just returns a custom string for a given input:

```js
function lambda(input, callback) {
  const { customersInQueue } = input.payload;
  callback(null, `There are currently ${customersInQueue} in queue`);
}

module.exports = lambda;
```

The next step is installing [mocha](https://mochajs.org/) (or your preferred testing framework) in your function's folder using `yarn add mocha --dev`. This install the necessary packages as well as a `package.json` specifically for your function.

You can add an `index.test.js` file for your unit tests, such as:

```js
let lambda = require("./index.js");
let assert = require("assert");

describe("the function", function () {
  it("returns correct string of number of customers in queue", function () {
    const input = {
      payload: {
        customersInQueue: 5,
      },
    };
    const callback = (_, data) => {
      assert.equal(data, "There are currently 5 in queue");
    };
    lambda(input, callback);
  });
});
```
In the last step you can add the following lines to your `package.json`:

```json
...
  "scripts": {
    "test": "node_modules/mocha/bin/mocha index.test.js",
    "publish": "node_modules/mocha/bin/mocha index.test.js && lpf push"
  },
...
```

You can now manually test your lambda using `yarn test` or use `yarn publish` to force testing before publishing the lambda on an account.
