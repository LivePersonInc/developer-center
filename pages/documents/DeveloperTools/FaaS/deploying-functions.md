---
pagename: Deployment
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
permalink: liveperson-functions-deployment.html
indicator: both
redirect_from:
  - function-as-a-service-deploying-functions.html
---
Now that you have created and edited the function, let's talk about how you can deploy it. We offer two deployment methods, although the second is simply a shortcut for the first.

1. Using the "Create deployment" button in the **Deployments** section allows you to start deployment. Proceed by selecting a function you'd like to deploy. If you start typing the function's name, the filter functionality will automatically search the available functions and find the one you need.

2. The shortcut alternative to this process is to deploy from the context menu in the `lambda` itself, in the **Functions** section (more info on this menu can be found [here](function-as-a-service-developing-with-faas-overview.html#code-completion--context-menu)). The `lambda` will directly forward you to the deployment menu.

![](img/faas-deploy.png)

After choosing a function for deployment, you will have a final chance to review the code which will be deployed and also see information on Environment Variables and Runtime. If the displayed information is correct, you can start the deployment by pressing the button "Approve & Deploy".

### Deployment States

The deployment will then proceed through the following states:

1. Build Start

2. Build Finish

3. Deploy Start

4. Deploy Finish

There are also two types of **error states**:

1. Build Error

2. Deploy Error

If an error occurs, you can hover over the Build State to receive insight on the cause for the error. Some issues are temporary and can be resolved by redeploying the affected function.

### Testing your Function

To the right of the "Deployment state" field, you will find the “Actions” field. You will be able to invoke your `lambda` function by pressing “Invoke” and then pressing “Invoke” again in the newly opened tab. Invoking your function allows you to test its payload and behavior and make sure it works as expected.

![](img/faas-actions.png)

**Please note** that you can only invoke functions that have been successfully deployed. When you’re in the "Develop" tab, this is indicated by the status of the function displaying as “Productive”. When in the “Deploy” tab, this will be indicated by the deployment state showing “Deployment successful”.

Pressing the Invoke button will launch the 'Invoke your Function' (IyF) screen.

The IyF screen contains three main items:

The **Input** item contains the parameters with which your function will be called. By default it uses a payload appropriate for your function’s event. This payload can be manually edited to suit your testing scenario. These changes are not permanent and will be removed when reloading the LivePerson Functions website.

The **Output** renders whatever your function produces during an invocation, be it a string, JSON or an exception. Like the Input, the Output is not permanently saved.

The **Logs** display any logging you have included in your function. It can display messages and their importance (error versus info for example), as well as additional information declared by the user. Once a function has been invoked, any logs will be displayed corresponding to their log-level declared inside the function's source code. (To learn more about logging visit [LivePerson Functions Monitoring Logs](liveperson-functions-monitoring-logs.html))

![](img/faas-invoke.png)

