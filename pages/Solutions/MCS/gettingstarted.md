---
pagename: Getting Started
redirect_from:
  - products-mcs-gettingstarted.html
sitesection: Solutions

documentname: MCS Toolkit

order: 10
permalink: mcs-toolkit-getting-started.html
indicator:
---

<div class="important">Please <a href="https://knowledge.liveperson.com/data-reporting-meaningful-connection-score-(mcs)-accessing-the-toolkit.html">see this page</a> for updated information on how to access the MCS Toolkit</div>

### Authentication

Security and privacy are important considerations when developing any solution - to ensure the MCS Toolkit complied with the necessary standards, we took advantage of the Login Service API that enables users to:

* Authenticate with LiveEngage services with an existing LiveEngage user account.

* Adhere to existing LiveEngage user permissions (ensuring a user can / cannot access certain data from LiveEngage data APIs, for example).

### Considerations

The data APIs used in the development of the MCS Toolkit are primarily concerned with raw engagement level information.  This means that to provide useful insights, raw data needs to be aggregated by the appropriate attributes, such as timeframe (i.e. by day), or agent, for example.

Performing data aggregation on the fly does impact the speed at which data can be consumed - in addition, since the MCS Toolkit does not store or retain the data that has been consumed, this information resides in memory on the authenticated user’s browser and thus carries with it the cost of a limit to the amount of data that can be transformed and held in any single browser session.

Other solutions might involve extracting the data on a regular basis, performing aggregations in the background, and then storing the data in a secure internal database (such as SQL, for example).  The benefit of this approach is that pre-aggregated data can be retained and queried on demand by the user. However it does necessitate development of a data warehouse solution that may increase the scope / scale / cost of the project.

The benefit of a completely stateless solution, such as MCS Toolkit, is that no data storage solution is required, and once the data is downloaded to the authenticated user’s browser memory, on-the-fly local filtering is a rapid alternative to having to query a database for the various permutations of analysis that may be required.


### Prerequisites

Developing with the LivePerson APIs requires at least a basic understanding of how to _request_ data from a RESTful API and manage the _response_.

Common programming languages used to query a RESTful API services include, but are not limited to:

* Java

* Javascript

* Python

In addition, since several of the APIs are concerned with raw engagement level data, working with pagination is a key dependency to extracting a large amount of data based on a specific time-period or filter.

Essentially, pagination involves making multiple *requests* to LivePerson APIs, much like you would turn the page of a book - each page turn (request) returns a new set of data (response) for a given criteria and it is the responsibility of the programmer to develop the necessary logic to return all of the matching data.

Otherwise, the prerequisites for extracting data from the APIs can be as simple as knowing:

* The method to use: i.e. 'POST’ / 'GET’

* The API URL is, including the associated domain for your LiveEngage account

* The Query Strings that are supported and the appropriate convention

* The Body parameters are supported and the appropriate convention

* The schema of the *response* in order to anticipate the data structure, and

* How to handle the *response* in order to aggregate, summarize or simply present the data to a user

The API documentation on the LivePerson developer portal provides all the necessary information to get started.
