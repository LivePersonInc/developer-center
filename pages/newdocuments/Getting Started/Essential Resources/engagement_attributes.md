---
pagename: Getting Started with Engagement Attributes
sitesection: Documents
categoryname: "Getting Started"
documentname: Essential Resources
permalink: essential-resources-getting-started-with-engagement-attributes.html
order: 20
indicator: both
---

LiveEngage provides out-of-the-box basic information about your visitors. For example, the visitor’s geolocation, the amount of time they spent on a page, and which pages they viewed. For

In order to collect more in-depth, specific information such as product viewed, purchase information, errors the visitor encountered, and search results, you can send this information to LiveEngage by using Engagement Attributes (otherwise known as a Standard Data Entity - an SDE). An SDE is a JSON format expected by LivePerson APIs. This format standardizes how visitor traits, behaviors and paths are communicated to LiveEngage. These are in practice data snippets which contain information on the consumer in JSON format.

Information collected using Engagement Attributes can be used to achieve the following:

* Create specific and advanced targeting of visitors.

* Empower agents with relevant information during conversations with consumers.

* Receive a comprehensive view of visitor Engagement History.

* Measure and track campaign goals.

To view all supported SDE types, please [refer to this document](engagment-attributes-overview.html).

### Use Cases

By using our SDEs, you can enrich your use of our APIs with more data from your website, from third party applications (such as a CRM) or from an internal database. Here are a few examples:

* Using our Agent Workspace Widget SDK and a few other APIs, you've built a customized widget for your agents to use. Passing SDEs with the APIs used, will allow you to create a more enriched widget with additional information on your consumers that the agents can benefit from.

* Using our Monitoring API, you can build programmatic logic which displays certain engagements to specific visitors, based on their SDEs.

* Using our Data APIs, you're looking to search through your LiveEngage history for specific users or behaviors. You can use SDEs to filter and analyze the returned data according to diverse set types and categories. This allows you to build your own reporting using these APIs.

### Using SDEs

1) Map the consumer info which you are interested in according to the list of SDEs supported by LivePerson. For example, your CRM system has information on the invoices the consumer has paid in the last month, transactions, their balance and so forth. You could take the consumer's balance and map it into the `balance` key found in the Customer Info SDE or to map the consumer's status (like account closed or overdue) to the `type` key.

2) Once we've mapped our different data sets into LivePerson SDEs, we have two choices:

  * You can start feeding real time data into these SDEs from your website. A good way to do that is to develop code on your site for example, which will send information via SDEs to LiveEngage programmatically. For example, if a user adds a certain product to their cart, the code should translate this action into an SDE format and send it to LiveEngage via the LiveEngage Tag. More documentation on how to use the tag to do so can be found [here](engagement-attributes-setting-up.html).

  * You can also start feeding real time data into these SDEs from various sources using our APIs. These APIs use different methods in order to accomplish this. Each API has its own methods to handle passing and receiving SDEs. In the Monitoring API for example, this is achieved via [the Report method](rt-interactions-monitoring-methods-report.html).

3) Now that you have a list of properly populated SDEs, you need to handle them in some way. There are two main uses for populated SDEs:

  * Some of our SDEs are automatically displayed in the Agent Workspace. These are displayed in the Visitor Info widget. You may also decide to build your own display or pass them to third party applications to disaply them.

  * Building engagement logic around SDEs. Note, that while you _can_ build your own logic around these SDEs (when to display a certain engagement to a certain visitor or on a certain part of your application), LiveEngage also includes many automatic rules which make it easier to configure campaigns and engagements according to these SDEs. These automatic rules are more scalable and are easier to use so you should use them where possible. For more information on these automatic rules and how LiveEngage uses them, please refer to [this document about Campaigns and how they work](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=about-campaigns).
