---
pagename: Retry Policy Recommendations
Keywords:
sitesection: Documents
categoryname: "API Guidelines"
level-order: 11
order: 10
permalink: retry-policy-recommendations.html
root-link: true
indicator: both
redirect_from:
    - guides-retry-policy.html
    - retry-and-keepalive-best-practices-overview.html
    - essential-resources-retry-policy-recommendations.html
    - common-resources-retry-policy-recommendations.html
    - api-guidelines-retry-policy-recommendations.html
---

Each component in a network can return an error; whether it’s your local environment or in the cloud, applications can fail. These failures can result from a maintenance activity, a service incident, or a random network hiccup on the server or client side.

For increased reliability and stability of an application, add a retry mechanism for API calls.  If an error returns, the mechanism makes sure that the application makes another attempt to retrieve the relevant information.

Below you can find LivePerson best practices to handle errors:

### API error codes and retry recommendation

| Error code   |      Meaning      |  Recommendation |
|:-------------|:------------------|:----------------|
| 4xx          | Client side error | Do not retry, need to fix the problem in the code |
| 429          | Too many requests | Retry after at least 1 second; avoid bursts of requests |
| 5xx          | Error on server side  | Retry 3 times with 5, 10, 15 second pause between retries |

In addition to the table above, in order to make sure the application can recover from more than 3 consecutive failed requests, as in the case of a service incident or a maintenance activity with a few minutes of downtime, another retry should be introduced for login/socket close/etc.

The retry should be with a longer interval than the previous one, for example every 2 minutes or you can use Exponential Backoff. This means that the application waits a short time before the first retry, and then exponentially increases times between each subsequent retry. For example, it may retry the operation after 2 minutes, 4 minutes, 8 minutes, and so on.

An example for Exponential Backoff retry in JavaScript can be found [here](https://jsfiddle.net/orenkatz/xqhxy8x4/).

Too short intervals or too many retries can have an adverse effect on the target resource or service. This may prevent the resource or service from recovering from its overloaded state, and it will continue to block or refuse requests. This results in a vicious cycle where more and more requests are sent to the resource or service, and consequently its ability to recover is further reduced. Therefore, make sure you do not define intervals which are too short, to give the application time to recover and retry.

If you receive a `429` response code, this means that your request is being throttled due to rate-limiting. If you encounter this behavior, it is recommended that you provide a window of at least 1 second in between subsequent request retries. Clients who submit "bursty" traffic patterns to UMS may face rate-limiting issues, so it is recommended to smoothen traffic to a more distributed pattern whenever possible.

### KeepAlive

Some services require you to send periodic requests in order to keep your session alive.

Below you will find the recommended intervals for KeepAlive per product:

| Product   |      Method Name      |  KeepAlive interval |
|:----------|:-------------|:------|
| Chat Agent API | [refresh](agent-refresh.html) | Every 5 minutes |
| Messaging Agent SDK |   getClock   | Every 30 seconds |
|  Messaging Window API |    GetClock  | Every 30 seconds  |
| Server Chat API |   [Retrieve Chat Information](consumer-experience-server-chat-retrieve-chat-information.html)   |  Every 30 seconds |

### Testing and logs

Once you’ve implemented a retry mechanism, it’s important to test and make sure it works as expected.

It’s also recommended that the application should log the details of faults and failing operations. This information is useful later for troubleshooting the root cause of a failure.
