---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
permalink: liveperson-functions-overview.html
indicator: both
redirect_from:
  - function-as-a-service-overview.html
---

{: .notice}
The platform can be a powerful tool to customize your accounts. Therefore please have a look at our [Terms of Use](https://knowledge.liveperson.com/developer-tools-liveperson-functions-terms-of-use.html).

[LivePerson Functions](https://faas.liveperson.net) is a Function as a Service (FaaS) platform which enables brands to develop custom behaviors within LivePerson’s conversational cloud, to better tailor the system to their specific needs. By offering these capabilities, Functions enables developers to write a simple function, deploy it to LivePerson's infrastructure and make it available to their LivePerson account in minutes. This allows you to create custom logic inside the LivePerson Conversational Cloud platform.

* Extend the Conversational Cloud to integrate your existing services like CRMs and ticketing systems using LivePerson Functions.
* Run custom solutions on reliable and scalable infrastructure without the need to manage it
* Leverage scheduled invocations for custom recurring tasks
* Trigger custom workflows from Conversational Commands
* Easy access to conversation related information from your code
* Built-in security ensures that your secrets remain safe

## How it works

You can select from a set of possible events, that are [triggered](liveperson-functions-foundations-concepts.html#Triggers) by different services ([Event Sources](liveperson-functions-event-sources-overview.html)), [schedules](liveperson-functions-foundations-features.html#scheduling) and [external triggers](liveperson-functions-foundations-concepts.html#external-invocation). Those events contain event-specific data, which allows the creation of custom logic. Further based on the event source you may also interact with it actively influencing processes happening on the platform.
In that coding, you may leverage external services or LivePerson APIs. The below infographic visualizes this flow from the original event source to the lambda coding and back.

<img src="img/faas-overview.png" alt="LivePerson Functions Overview" style="width:100%;"/>

<div class="card-container">
    <a  class="welcome-card"  href="/liveperson-functions-getting-started-your-first-function.html" style="flex: 0 95%;">
      <img class="container-image" src="img/functions/ic_functions_first_fn.svg"/>
      <h5 class="welcome-title">Develop your first function in under 10 minutes</h5>
    </a>
      <a  class="welcome-card"  href="/liveperson-functions-getting-started-deep-dive-ui.html">
      <img class="container-image" src="img/functions/ic_functions_ui.svg"/>
      <h5 class="welcome-title">Dive into our webinterface</h5>
    </a>
    <a  class="welcome-card"  href="/liveperson-functions-getting-started-deep-dive-cli.html">
      <img class="container-image" src="img/functions/ic_functions_cli.svg"/>
      <h5 class="welcome-title">Dive into our commandline interface</h5>
    </a>
</div>