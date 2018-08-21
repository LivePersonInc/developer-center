---
pagename: Enable Messaging Features
redirect_from:
  - consumer-int-account-provision.html

categoryname: Consumer Experience
documentname: Messaging Window API

order: 3
permalink: messaging-window-api-enable-messaging-features.html

folder: Introduction
indicator: messaging
---

**Prerequisites**: The provisioning is currently not self service and can only be done internally by LivePerson.

Go to the LiveEngage login page and click on the Live Chat button. Ask LivePerson Support to enable the following features in your account:

  * Common.Async_Messaging
  * Common.Authenticated_Chat

If you have internal LPA (admin) credentials, you can enable these features by following the steps below:

* hc1d > serverCommands > Account Config features
  * Choose the server.
      + QA - hc1.dev.lprnd.net
      + US - server.iad.liveperson.net
      + EMEA - server.lon.liveperson.net
      + APAC - server.sy.liveperson.net
  * Paste your account ID at the end of the path.
  * Click Go.
  * Type your LPA credentials.
* Turn on the following features:
  * Common.Async_Messaging
  * Common.Authenticated_Chat


{% include links.html %}
