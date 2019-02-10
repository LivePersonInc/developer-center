---
pagename: Overview
redirect_from:
  - consumer-experience-server-chat-getting-started.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Server Chat API
level-order: 7
order: 1
permalink: server-chat-api-overview.html
root-link: true
indicator: chat
---

### Getting Started with the Server Chat API

In order to use the Server Chat API, please follow the steps below:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

    * conversationVep

2. **Use a Global LivePerson application key**. Please also refer to the authorization segment of each method for an example of how to use the following Global Key:

    * appKey=721c180b09eb463d9f3191c41762bb68

The LiveEngage chat window is based on a browser and will display in any desktop or mobile browser. In order to re-create and build the chat window for integration into non-browser applications, brands can utilize the Server Chat API. Before using the Server Chat API, you'll need to create a visitor session. You can do that by utilizing getEngagement from the [App Engagement API](rt-interactions-app-engagement-overview.html).

{:start="3"}
3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

_Note_ - there is a known limitation with the reporting surrounding this API. The data returned on external engagements (like Abandoned Values or Interactive Chats) will be partial or incorrect. This will be fixed in the future but should be taken into consideration when working with the API currently.


### Use Cases

- Incorporate LiveEngage chat window into a desktop application (gaming app, trading app, etc)

- Add chat into dedicated desktop music application

- Add chat into your mobile app

### Sample Postman Collection

For a sample postman collection for the Server Chat API, click [here](consumer-experience-server-chat-sample.html).
