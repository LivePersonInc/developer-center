---
title: Overview
Keywords:
level1: Documents
level2: Account Configuration
level3: Predefined Content API

level-order: 2
order: 9
permalink: account-configuration-predefined-content-overview.html
root-link: true
indicator: both
---

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

    * Read only: accountConfigReadOnly
    
    * Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology. 

    * **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

    * [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use){:target="_blank"}.

### Introduction

The predefined content API gives brands the tools to find, create, modify and delete predefined content items, developing canned responses that accurately reflect the brand’s voice and business needs. 

The predefined content tool is one which agents rely on to provide quick answers to repetitive or long questions.  Agents are able to either search for predefined answers and push them directly into the conversations, or utilize hotkeys for quick entries.  

![PredefinedContent](img/predefinedcontent.png)

Building and maintaining a current and comprehensive set of pre-defined content for your agents is crucial for accuracy and efficiency of agent responses.


The API is based on the REST architecture style.

[Click here](products-admin-predefined-content.html){:target="_blank"} to see further guidance and an example of deploying this API.

**Tips for creating predefined content**

You want your agents to be able to successfully address customers’ most pressing needs as quickly as possible. Creating predefined phrases for your agents equips them with a consistent company "voice" which reflects its values and needs, and a tool which saves them time and energy.

To help agents sell or provide a service, create phrases that can be used in a "talk track" to follow while chatting, enabling them to control the conversation, set the tone and engage the customer. Group the phrases under categories that reflect the desired flow of the chat, such as Introduction, Conversational, Overcoming Objections, and Closings.

**Types of Predefined Content**: 

Predefined Content can be broadly grouped into three main types:

1. Standard phrases and questions which cover specific situations that can speed up the conversation.

    * I can help you with that.

    * Which option do you prefer?

    * I’d be happy to transfer you to the appropriate agent.

2. Product-related phrases that help agents describe the products and special, relevant offers, including links and product-related responses that ensure they give accurate information.

    * Let me send you a link to the product page.

    * The RX-100 is one of our most popular models.

    * We carry this model in blue and grey.

3. Guiding the Customer through the chat experience, such as:

    * Click here for information about our Signature Mortgage.

    * Were you able to navigate to the shopping cart page?

    * Did the link give you the information you need?

**Choose Your Terminology** 

When you create predefined responses, take into consideration what kind of phrases your agents use frequently. They probably need relevant business terminology and other common greeting and closing phrases. Create a variety of responses to minimize a mechanical tone of voice. Keep fine-tuning your predefined content and ensure that agents can use it effectively.



