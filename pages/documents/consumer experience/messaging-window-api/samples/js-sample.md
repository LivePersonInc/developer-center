---
title: JavaScript Sample
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: Samples

order: 90

permalink: consumer-int-js-sample.html
indicator: messaging
---
**Note**: This document is subject to change without notice.

This sample demonstrates the usage of the messaging API from browser JavaScript code.


### Prerequisites
* LivePerson account enabled with two features: ``Async_Messaging`` and ``Authenticated_Chat``. If you are not sure that your account is enabled with these two features, please contact LivePerson Support. 

### Step 1 - Wire the sample to your account.

Open the following [codepen page](https://codepen.io/liveperson/pen/xRzXXd?editors=0010){:target="_blank"}

<p data-height="498" data-theme-id="0" data-slug-hash="xRzXXd" data-default-tab="js" data-user="liveperson" data-embed-version="2" data-pen-title="UMS js example" class="codepen">See the Pen <a href="https://codepen.io/liveperson/pen/xRzXXd/">UMS js example</a> by liveperson (<a href="http://codepen.io/liveperson" target="_blank">@liveperson</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Type in your account ID in the account textbox.

### Step 2 - Create a conversation

In the rendered page area, click the ``connect`` button.
While the ``send`` button is enabled, type a message in the text area and click the send button.

You can disconnect and connect again and see the existing transcript.


### Step 3 - Agent login

Log in as an agent. ``Accept`` the incoming conversation, and then you will be joined to the conversation.
You can close the conversation, and the consumer in the JavaScript window will be notified.


### Further Details

You can fork the codepen and make changes in the code.

The sample code uses sample library that handles the network layer. The sample library can be found [here](https://codepen.io/liveperson/pen/oYyLJr.babel){:target="_blank"}.

{% include links.html %}
