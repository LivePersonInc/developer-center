---
pagename: Bot Types
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-bot-types.html
indicator:
---

### Overview

While adding a new bot the wizard will first ask what type of bot should be created.
This particular step can't be changed at a later point in time without deleting and recreating the bot.

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/common-choose-bot-type.png">

### Agent Bots
This is the standard type for bots running on Third-Party Bots.
The bot will be online and available for conversations routed to it directly or through the skills assigned to it.

In case of an agent bot are two additional steps that must be configured.

#### Conversation Type

##### Chat

<img style="width:900px" src="img/ThirdPartyBots/agent-conversation-type-chat.png">

<table>
  <thead>
  <tr>
    <th>Setting name</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>Time until warning</td>
      <td>Set up the time span after which the consumer will get an inactivity warning.</td>
    </tr>
    <tr>
      <td>Warning message</td>
      <td>The warning message the chat consumer gets if he reaches the threshold.</td>
    </tr>
    <tr>
      <td>Time until conversation close</td>
      <td>Set up the time duration after which the consumer chat conversation will be closed if the customer is inactive</td>
    </tr>
    <tr>
      <td>Close message</td>
      <td>The message which the consumer will receive prior to closing the conversation</td>
    </tr>
  </tbody>
  </table>

##### Messaging:

<img style="width:900px" src="img/ThirdPartyBots/agent-conversation-type-messaging.png">

##### Welcome Message

By enabling the Welcome Messages option in our Wizard,  Brands will receive a welcome message by the bot immediately after transfer. User will be greeted by the bot. With this feature. It means that the bot will be enabled to greet customers directly after the transfer action.

##### Combine Messages

By enabling the Combine Messages settings you can combine a certain amount of messages into one, before sending it to the bot. If this feature is enabled, the bot only responds to all of the messages once, instead of handling every message as a single intent. Below is a GIF that clarifies the difference between enabled and disabled Combined Messages Feature.

<ul>
  <li>
  Max messages to combine: The maximum amount of messaged that will be connected to one message.
  </li>
  <li>
  Time frame to combine: The time in seconds the system will wait for another message to add before sending it to the bot. If the user types something into that time frame the time will be replaced by the "Time frame after typing", see below.
  </li>
  <li>
  Time frame after typing: The time in seconds the system will wait for another message to add, after the visitor typed something in the text box.
  </li>
</ul>

<figure>
<img style="width:900px" src="img/botconnectordashboard/combine_messages.gif">
    <figcaption>Left: Enabled Combined Messages,  Right: Disabled Combined Messages</figcaption>
</figure>
<br />

##### Engagement Attributes:

Third-Party bots allow the collection of engagement attributes ([documentation](engagement-attributes-types-of-engagement-attributes.html)) if this option is enabled. These attributes are collected only at the **start** of every conversation. These attributes are then passed alongside every message as contextual information. Third-Party bots leverage the LivePerson Visit Information API to collect these engagement attributes.

Further information on the Visit Information API can be found [here](visit-information-api-visit-information.html). Additionally, the original LivePerson event from the chat or messaging API used to start the conversation and send messages is sent along with each request to allow further customization and information.

###### Example lpSdes object for Chat conversations

The authenticated SDEs for Chat conversations have the same format as described [here](chat-agent-api-methods-retrieve-participant-info.html).

```javascript
const lpSdes = {
  unauthenticatedSdes: {
    customerInfo: {
      serverTimeStamp: 1571770965040,
      customerInfo: {
        customerStatus: 'cancelled',
        customerType: 'vip',
        balance: -400.99,
        currency: 'USD',
        customerId: '138766AC',
        lastPaymentDate: {
          year: 2014,
          month: 10,
          day: 15
        },
        registrationDate: {
          year: 2013,
          month: 5,
          day: 23
        },
        loginStatus: null,
        companyBranch: null,
        socialId: '11256324780',
        imei: '3543546543545688',
        userName: 'user000',
        companySize: 500,
        accountName: 'bank corp',
        role: 'broker',
        storeZipCode: '20505',
        storeNumber: '123865'
      },
      contexts: {
        page: {
          id: '561554049'
        }
      }
    },
    cartStatus: {
      serverTimeStamp: 1571770965040,
      total: 11.7,
      currency: 'USD',
      contexts: {
        page: {
          id: '561554049'
        }
      },
      numItems: 6,
      products: [
        {
          product: {
            name: 'prod1',
            category: 'category',
            sku: 'sku',
            price: 7.8
          },
          quantity: 1
        }
      ]
    },
    purchase: {
      serverTimeStamp: 1571770965040,
      total: 11.7,
      orderId: 'DRV1534XC',
      currency: 'USD',
      contexts: {
        page: {
          id: '561554049'
        }
      },
      cart: {
        serverTimeStamp: 0,
        total: null,
        currency: null,
        contexts: {},
        numItems: null,
        products: [
          {
            product: {
              name: 'antivirus pro plan',
              category: 'software',
              sku: 'xyz001',
              price: 7.8
            },
            quantity: 3
          }
        ]
      }
    },
    viewedProduct: {
      serverTimeStamp: 1571770965040,
      currency: 'USD',
      contexts: {
        page: {
          id: '561554049'
        }
      },
      products: [
        {
          product: {
            name: 'red high heel shoe',
            category: 'women shoes',
            sku: 'xyz567',
            price: 77.8
          }
        }
      ]
    },
    marketingCampaignInfo: {
      serverTimeStamp: 1571770965040,
      contexts: {
        page: {
          id: '561554049'
        }
      },
      marketingCampaignInfo: {
        originatingChannel: 1,
        affiliate: 'Yahoo',
        campaignId: 'US coupon campaign'
      }
    },
    personalInfo: {
      serverTimeStamp: 1571770965040,
      personalInfo: {
        name: 'John',
        surname: 'Doe',
        customerAge: {
          customerAgeInYears: 34,
          customerYearOfBirth: 1980,
          customerMonthOfBirth: 4,
          customerDateOfBirth: 15
        },
        contacts: [
          {
            email: 'myname@example.com',
            phone: '+1 212-788-8877',
            phoneType: null,
            address: null,
            preferredContactMethod: null
          }
        ],
        gender: 'MALE',
        company: 'company',
        language: 'en-US'
      },
      contexts: {
        page: {
          id: '561554049'
        }
      }
    },
    lead: {
      serverTimeStamp: 1571770965040,
      contexts: {
        page: {
          id: '561554049'
        }
      },
      lead: {
        topic: 'luxury car test drive 2015',
        value: 22.22,
        ticketId: null,
        leadId: 'xyz123',
        currency: 'USD'
      }
    },
    serviceActivity: {
      serverTimeStamp: 1571770965040,
      serviceActivity: {
        topic: 'order checkbook',
        status: 0,
        category: 'finance',
        serviceId: 'service12'
      },
      contexts: {
        page: {
          id: '561554049'
        }
      }
    },
    visitorError: {
      serverTimeStamp: 1571770965040,
      contexts: {
        page: {
          id: '561554049'
        }
      },
      visitorError: {
        contextId: null,
        message: 'Expiration date missing',
        code: 'er100004',
        level: null,
        resolved: null
      }
    }
  },
  authenticatedSdes: {
    authenticatedParticipantInfo: {
      isUserAuthenticated: true,
      participantId: '55fc1779-83b0-4e8b-8eea-503a8eaf8822',
      balance: -400.99,
      registrationDate: {
        year: 2013,
        month: 5,
        day: 23
      },
      lastPaymentDate: {
        year: 2014,
        month: 10,
        day: 15
      },
      customerId: '57ac-072a-5d10-4506-721f-9ebf',
      customerStatus: 'cancelled',
      customerType: 'vip',
      socialId: '11256324780',
      imei: '3543546543545688',
      userName: 'testuser',
      companySize: 500,
      accountName: 'bank corp',
      role: 'broker'
    },
    authenticatedPersonalInfo: {
      name: 'Test',
      surname: 'User',
      contacts: [
        {
          email: 'testuser@liveperson.com',
          phone: '+1-10-344-3765333'
        }
      ]
    }
  }
};
```

###### Example lpSdes object for Messaging conversations

```javascript
const lpSdes = {
  unauthenticatedSdes: {
    customerInfo: {
      serverTimeStamp: 1571770965040,
      customerInfo: {
        customerStatus: 'cancelled',
        customerType: 'vip',
        balance: -400.99,
        currency: 'USD',
        customerId: '138766AC',
        lastPaymentDate: {
          year: 2014,
          month: 10,
          day: 15
        },
        registrationDate: {
          year: 2013,
          month: 5,
          day: 23
        },
        loginStatus: null,
        companyBranch: null,
        socialId: '11256324780',
        imei: '3543546543545688',
        userName: 'user000',
        companySize: 500,
        accountName: 'bank corp',
        role: 'broker',
        storeZipCode: '20505',
        storeNumber: '123865'
      },
      contexts: {
        page: {
          id: '561554049'
        }
      }
    },
    cartStatus: {
      serverTimeStamp: 1571770965040,
      total: 11.7,
      currency: 'USD',
      contexts: {
        page: {
          id: '561554049'
        }
      },
      numItems: 6,
      products: [
        {
          product: {
            name: 'prod1',
            category: 'category',
            sku: 'sku',
            price: 7.8
          },
          quantity: 1
        }
      ]
    },
    purchase: {
      serverTimeStamp: 1571770965040,
      total: 11.7,
      orderId: 'DRV1534XC',
      currency: 'USD',
      contexts: {
        page: {
          id: '561554049'
        }
      },
      cart: {
        serverTimeStamp: 0,
        total: null,
        currency: null,
        contexts: {},
        numItems: null,
        products: [
          {
            product: {
              name: 'antivirus pro plan',
              category: 'software',
              sku: 'xyz001',
              price: 7.8
            },
            quantity: 3
          }
        ]
      }
    },
    viewedProduct: {
      serverTimeStamp: 1571770965040,
      currency: 'USD',
      contexts: {
        page: {
          id: '561554049'
        }
      },
      products: [
        {
          product: {
            name: 'red high heel shoe',
            category: 'women shoes',
            sku: 'xyz567',
            price: 77.8
          }
        }
      ]
    },
    marketingCampaignInfo: {
      serverTimeStamp: 1571770965040,
      contexts: {
        page: {
          id: '561554049'
        }
      },
      marketingCampaignInfo: {
        originatingChannel: 1,
        affiliate: 'Yahoo',
        campaignId: 'US coupon campaign'
      }
    },
    personalInfo: {
      serverTimeStamp: 1571770965040,
      personalInfo: {
        name: 'John',
        surname: 'Doe',
        customerAge: {
          customerAgeInYears: 34,
          customerYearOfBirth: 1980,
          customerMonthOfBirth: 4,
          customerDateOfBirth: 15
        },
        contacts: [
          {
            email: 'myname@example.com',
            phone: '+1 212-788-8877',
            phoneType: null,
            address: null,
            preferredContactMethod: null
          }
        ],
        gender: 'MALE',
        company: 'company',
        language: 'en-US'
      },
      contexts: {
        page: {
          id: '561554049'
        }
      }
    },
    lead: {
      serverTimeStamp: 1571770965040,
      contexts: {
        page: {
          id: '561554049'
        }
      },
      lead: {
        topic: 'luxury car test drive 2015',
        value: 22.22,
        ticketId: null,
        leadId: 'xyz123',
        currency: 'USD'
      }
    },
    serviceActivity: {
      serverTimeStamp: 1571770965040,
      serviceActivity: {
        topic: 'order checkbook',
        status: 0,
        category: 'finance',
        serviceId: 'service12'
      },
      contexts: {
        page: {
          id: '561554049'
        }
      }
    },
    visitorError: {
      serverTimeStamp: 1571770965040,
      contexts: {
        page: {
          id: '561554049'
        }
      },
      visitorError: {
        contextId: null,
        message: 'Expiration date missing',
        code: 'er100004',
        level: null,
        resolved: null
      }
    }
  },
  authenticatedSdes: {
    customerInfo: {
      type: 'ctmrinfo',
      acr: 'loa1',
      iss: 'https://customerWebSite.com',
      customerInfo: {
        customerStatus: 'cancelled',
        customerType: 'vip',
        balance: -400.99,
        currency: 'USD',
        customerId: '138766AC',
        lastPaymentDate: {
          year: 2014,
          month: 10,
          day: 15
        },
        registrationDate: {
          year: 2013,
          month: 5,
          day: 23
        },
        loginStatus: null,
        companyBranch: null,
        socialId: '11256324780',
        imei: '3543546543545688',
        userName: 'user000',
        companySize: 500,
        accountName: 'bank corp',
        role: 'broker',
        storeZipCode: '20505',
        storeNumber: '123865'
      },
      auth: {}
    },
    personalInfo: {
      type: 'personal',
      acr: 'loa1',
      iss: 'https://customerWebSite.com',
      personalInfo: {
        name: 'John',
        surname: 'Doe',
        customerAge: {
          customerAgeInYears: 34,
          customerYearOfBirth: 1980,
          customerMonthOfBirth: 4,
          customerDateOfBirth: 15
        },
        contacts: [
          {
            email: 'myname@example.com',
            phone: '+1 212-788-8877',
            phoneType: null,
            address: null,
            preferredContactMethod: null
          }
        ],
        gender: 'MALE',
        company: 'company',
        language: 'en-US'
      },
      auth: {}
    }
  }
};
```

###### Example lpEvent object of Messaging API

```javascript
  const lpEvent = {
    sequence: 0,
    originatorClientProperties: {
      type: '.ClientProperties',
      appId: 'webAsync',
      ipAddress: '192.168.226.81',
      deviceFamily: 'DESKTOP',
      os: 'OSX',
      osVersion: '10.14.6',
      integration: 'WEB_SDK',
      integrationVersion: '3.0.29',
      browser: 'CHROME',
      browserVersion: '72.0.3626.121',
      features: [
        'PHOTO_SHARING',
        'CO_BROWSE',
        'QUICK_REPLIES',
        'AUTO_MESSAGES',
        'MULTI_DIALOG',
        'FILE_SHARING',
        'RICH_CONTENT'
      ]
    },
    originatorId:
      '32f23bf295b1420b3a2f3f2f96c54bb2d8455699e5b6edc8add6c27b7b0b50fb',
    originatorMetadata: {
      id: '32f23bf295b1420b3a2f3f2f96c54bb2d8455699e5b6edc8add6c27b7b0b50fb',
      role: 'CONSUMER',
      clientProperties: {
        type: '.ClientProperties',
        appId: 'webAsync',
        ipAddress: '192.168.226.81',
        deviceFamily: 'DESKTOP',
        os: 'OSX',
        osVersion: '10.14.6',
        integration: 'WEB_SDK',
        integrationVersion: '3.0.29',
        browser: 'CHROME',
        browserVersion: '72.0.3626.121',
        features: [
          'PHOTO_SHARING',
          'CO_BROWSE',
          'QUICK_REPLIES',
          'AUTO_MESSAGES',
          'MULTI_DIALOG',
          'FILE_SHARING',
          'RICH_CONTENT'
        ]
      }
    },
    serverTimestamp: 1571816583661,
    event: {
      type: 'ContentEvent',
      message: 'hi',
      contentType: 'text/plain'
    },
    dialogId: '93d1b226-da30-48ca-a04b-dbe071ebd23c',
    __isMe: false,
    conversationContext: {
      skillId: '3417641010',
      campaignId: 3417641610,
      engagementId: 3417642010,
      type: 'MESSAGING',
      visitor: {
        sharkVisitorId: 'Y4NWRmZTYwZmQ1MjM3YTA2',
        sharkSessionId: 'FstLzrE6SvC5NrseUHi48g',
        ipAddress: '192.168.226.81',
        browser: 'CHROME',
        os: 'OSX',
        osVersion: '10.14.6',
        integration: 'WEB_SDK',
        integrationVersion: '3.0.29',
        browserVersion: '72.0.3626.121',
        language: 'en-US',
        features: [
          'PHOTO_SHARING',
          'CO_BROWSE',
          'QUICK_REPLIES',
          'AUTO_MESSAGES',
          'MULTI_DIALOG',
          'FILE_SHARING',
          'RICH_CONTENT'
        ],
        deviceFamily: 'DESKTOP'
      }
    },

  };
```

###### Example lpEvent object of the Chat API

```javascript
  const lpEvent = {
    '@id': '3',
    '@type': 'line',
    time: '2019-10-23T03:46:00.062-04:00',
    textType: 'plain',
    text: 'You are now chatting with dialogflow_v2_chat.',
    by: 'info',
    source: 'system',
    systemMessageId: '3',
    subType: 'REGULAR',
    sequenceId: '2',
    state: 'chatting',
    chatSessionKey:
      'H4127499448709883677-2ea2cecce74a45218dc3e911d25361f2K8404910',
    skillName: 'dialogflow_v2_chat',
    skillId: '3417640810',
    agentName: 'dialogflow_v2_chat',
    agentId: '3417640910',
    startTime: '2019-10-23T03:45:58.344-04:00',
    duration: '0',
    lastUpdate: '2019-10-23T03:45:59.978-04:00',
    chatTimeout: '40',
    visitorId: '2611108340074',
    agentTyping: 'not-typing',
    visitorTyping: 'not-typing',
    visitorName: 'visitor',
    rtSessionId: '4294983598',
    sharkVisitorId: 'Y4NWRmZTYwZmQ1MjM3YTA2',
    sharkSessionId: 'FstLzrE6SvC5NrseUHi48g',
    sharkContextId: '4',
    engagementId: '3417641910',
    campaignId: '3417641610',
    language: 'en-US',
    participantId: 'a2fe6e1e-ab38-47a6-b8b3-f38d573d3603',
    link: [
      {
        '@href':
          'https://XXXXX/api/account/le61911979/agentSession/593497449/chat/H4127499448709883677-2ea2cecce74a45218dc3e911d25361f2K8404910/info',
        '@rel': 'self'
      },
      {
        '@href':
          'https://XXXXX/api/account/le61911979/agentSession/593497449/chat/H4127499448709883677-2ea2cecce74a45218dc3e911d25361f2K8404910/info/visitorName',
        '@rel': 'visitor-name'
      },
      {
        '@href':
          'https://XXXXX/api/account/le61911979/agentSession/593497449/chat/H4127499448709883677-2ea2cecce74a45218dc3e911d25361f2K8404910/info/visitorTyping',
        '@rel': 'visitor-typing'
      },
      {
        '@href':
          'https://XXXXX/api/account/le61911979/agentSession/593497449/chat/H4127499448709883677-2ea2cecce74a45218dc3e911d25361f2K8404910/info/agentTyping',
        '@rel': 'agent-typing'
      },
      {
        '@href':
          'https://XXXXX/api/account/le61911979/agentSession/593497449/participantInfo/a2fe6e1e-ab38-47a6-b8b3-f38d573d3603',
        '@rel': 'participant-info'
      },
      {
        '@href':
          'https://XXXXX/api/account/le61911979/agentSession/593497449/participantExtendedInfo/a2fe6e1e-ab38-47a6-b8b3-f38d573d3603',
        '@rel': 'participant-extended-info'
      }
    ],
    isWelcomeEvent: true,
    conversationContext: {
      skillId: '3417640810',
      campaignId: '3417641610',
      engagementId: '3417641910',
      type: 'CHAT',
      visitor: {
        sharkVisitorId: 'Y4NWRmZTYwZmQ1MjM3YTA2',
        sharkSessionId: 'FstLzrE6SvC5NrseUHi48g',
        ipAddress: null,
        browser: null,
        os: null,
        osVersion: null,
        integration: null,
        integrationVersion: null,
        browserVersion: null,
        language: 'en-US',
        features: null,
        deviceFamily: null
      }
    }
  };
```

#### Error Handling

Configure how the agent bot behaves in the event of an error.
<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/agent-error-handling.png">


<table>
  <thead>
  <tr>
    <th>Setting name</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>Transfer message to Customer</td>
      <td>Default escalation message to the consumer in case the bot encounters an error.</td>
    </tr>
    <tr>
      <td>Transfer message to Agent</td>
      <td>Message to the Agent from the escalating bot which will be provided together with the conversation when it is transferred
  </li>.</td>
    </tr>
    <tr>
      <td>Transfer failure message</td>
      <td>Message to the customer in case the escalation to the default escalation skill did not work.</td>
    </tr>
    <tr>
      <td>Transfer to skill</td>
      <td>Default escalation skill the bot should escalate to in case of any error.</td>
    </tr>
    <tr>
      <td>Enable error-hook</td>
      <td>LivePerson Function which gets triggered when a bot is having an issue .</td>
    </tr>
  </tbody>
  </table>

{: .important}
If no other skills are configured, it might be that the bot will escalate the conversation to itself. In this case only new messages will be processed.





### Survey Bots
This bot type will be listening to new post-conversation surveys (PCS) matching the defined filters
and then send the consumer a series of questions on this survey dialog.

There are several prerequisites which must be fulfilled before the bot will start a survey.
* The account must be configured to support post-conversation surveys
* A profile based on the agent role must exist with the required permissions (`View agents' conversations in group`)
* The conversation must apply to the filters defined in the bot configuration, namely the
  [Application Installation](conversational-cloud-applications-what-is-a-conversational-cloud-application.html)
  that has triggered this survey and the conversation skill that was assigned to the conversation at this moment.

In case of a survey bot the following additional settings must be configured.

##### Survey Configuration

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/survey-configuration.png">

<table>
  <thead>
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>Survey App ID</td>
      <td>ID of the Application Installation that triggers a PCS survey</td>
      <td>a22a6ba2-7a75-412b-b71a-03a8786fe407</td>
    </tr>
    <tr>
      <td>Skills</td>
      <td>List of skills that have the Survey App ID assigned should be handled by this bot</td>
      <td>survey_test</td>
    </tr>
    <tr>
      <td>Error Message</td>
      <td>Message that is shown to the consumer in case of an error before the survey is ended</td>
      <td>Unable to complete the survey due to an error. Goodbye</td>
    </tr>
  </tbody>
</table>


{: .important}
Currently the only supported vendor for Survey Bots is Medallia

{: .important}
Survey Bots are only supported for messaging

{: .important}
If an error occurs during a survey the bot will end the survey.
Details about the error can then be found under conversation errors in the 
[Bot Status Dashboard](third-party-bots-bot-status-dashboard.html).
  