---
pagename: Retry Policy
redirect_from:
  - webhooks-retrypolicy.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Connector API
subfoldername: Webhooks
order: 40
indicator: messaging
permalink: connector-api-webhooks-retry-policy.html
---

* Upon its registration to the WH service, an application can be configured to require a “retry send” of failed notification requests.

* It is possible to choose between 0 to 5 retries (the default is: 0, meaning “no retires”).

* The interval between retries is 30 seconds.
