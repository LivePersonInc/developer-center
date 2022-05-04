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

[LivePerson Functions](https://faas.liveperson.net) is a Function as a Service (FaaS) platform which enables brands to develop custom behaviours within LivePerson's Conversational Cloud to better tailor the system to their specific needs. The Functions platform allows developers to write a simple function, deploy it to LivePerson's infrastructure, and make it available to their LivePerson account in minutes. Functions enable you to create custom logic inside the LivePerson Conversational Cloud platform.

* Extend the Conversational Cloud to integrate your existing services like CRMs and ticketing systems using LivePerson Functions.
* Run custom solutions on reliable and scalable infrastructure without the need to manage it
* Leverage scheduled invocations for custom recurring tasks
* Trigger custom workflows from Conversational Commands
* Easy access to conversation related information from your code
* Built-in security ensures that your secrets remain safe

## How it works

Select an event that suits your needs, implement the code of your function and deploy it to the LivePerson Functions platform.

There are three basic types of events: [Triggered](liveperson-functions-foundations-concepts.html#triggers) by different services ([Event Sources](liveperson-functions-event-sources-overview.html)), [schedules](liveperson-functions-foundations-features.html#scheduling) and [external triggers](http://localhost:4000/liveperson-functions-foundations-external-invocation.html). Those events contain event-specific data, which allows the creation of custom logic. Depending on the event source, you can also interact with it, actively influencing processes happening on the platform.
You may leverage external services or LivePerson APIs in your function. The below infographic visualizes this flow from the original event source to the function code and back.

<img src="img/functions/functions_overview.png" alt="LivePerson Functions Overview" style="width:100%;"/>

<div class="card-container">
    <a  class="welcome-card"  href="/liveperson-functions-getting-started-your-first-function.html" style="flex: 0 100%;">
      <img class="container-image" src="img/functions/ic_functions_first_fn.svg"/>
      <h5 class="welcome-title">Develop your first function in under 10 minutes</h5>
    </a>
      <a  class="welcome-card"  href="/liveperson-functions-getting-started-development-deep-dive-ui.html">
      <img class="container-image" src="img/functions/ic_functions_ui.svg"/>
      <h5 class="welcome-title">Dive into developing functions with our webinterface</h5>
    </a>
    <a  class="welcome-card"  href="/liveperson-functions-getting-started-development-deep-dive-cli.html">
      <img class="container-image" src="img/functions/ic_functions_cli.svg"/>
      <h5 class="welcome-title">Dive into developing functions with our commandline interface</h5>
    </a>
</div>