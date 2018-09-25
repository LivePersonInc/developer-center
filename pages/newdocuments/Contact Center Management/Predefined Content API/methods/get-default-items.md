---
pagename: Get Default Predefined Content Items
redirect_from:
  - account-configuration-predefined-content-get-default-items.html
Keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Content API
subfoldername: Methods

order: 90
permalink: predefined-content-api-methods-get-default-predefined-content-items.html

indicator: both
---

Retrieves default Predefined Content items from a specific account.

### Request

| Method|  URL|
 |:--------|  :-----|
 |GET|  /api/configuration/defaults/engagement-window/canned-responses/ |

### Response

**Response Codes**

 |Code  |Description |
 |:-----|  :--------------|
 |200  |OK |
 |404|  Data Not Found|

**Response Body**

```json

     {
       "templateId": "canned-response-template-1",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Introduction",
           "msg": "Allow me to introduce myself as your chat agent.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-2",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Hello",
           "msg": "Hello, How may I assist you?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-3",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Welcome",
           "msg": "Welcome to our live chat service. My name is $!{operator.nickname} and I am here to assist you.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-4",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Help",
           "msg": "Hello, you're chatting with $!{operator.nickname}. How may I help you?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-5",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Welcome to website",
           "msg": "Welcome to COMPANY name, what brings you to our website today?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-6",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Question",
           "msg": "Is there a specific question I can help you with?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-7",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Staller",
           "msg": "Your patience is appreciated. I will be with you shortly.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-8",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Non Responsive",
           "msg": "Was there something in particular that you were looking for?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-9",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Happy to Help",
           "msg": "I will be happy to help you with that!",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-10",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "One moment please",
           "msg": "Can you please wait for a moment while I find that information for you.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-11",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Thanks for waiting",
           "msg": "Thank you for waiting. I have some information for you.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-12",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Good-bye",
           "msg": "Thank you for chatting. Good-bye.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-13",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Chat Again",
           "msg": "Thank you for visiting. Please contact us at anytime.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-14",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Have I answered all of your questions today?",
           "msg": "Have I answered all of your questions today?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-15",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "FAIR Warning",
           "msg": "I haven't heard from you for a while. Are you still there?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-16",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "FINAL Warning",
           "msg": "Sorry we couldn't finish our chat. As I haven't heard from you for some time, I'm going to close this chat. If you need any help in future, please do not hesitate to chat with us again.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-17",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Goodbye with option to fill survey",
           "msg": "Thank you for chatting with me today. We really value your feedback. Please click the \"Close\" button at top right to answer a few questions about your experience with us. Thanks and have a good day!",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-18",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Transfer to alternate chat group",
           "msg": "I can certainly help you with that. I would be happy to transfer you to the appropriate group so they can answer your question as quickly as possible. Is that OK?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-19",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Transfer to Manager",
           "msg": "I can transfer you to my manager who can better assist you. Is that OK?",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-20",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Abusive Fair Warning",
           "msg": "Our company considers that content and language to be inappropriate. If you continue to send improper messages, I will have to end our chat session.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-21",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Abusive Final Warning",
           "msg": "We will not tolerate the use of inappropriate language. I am required to terminate our chat session immediately.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     },
     {
       "templateId": "canned-response-template-22",
       "templateDeleted": false,
       "deleted": false,
       "enabled": true,
       "data": [
         {
           "title": "Permission Based Service",
           "msg": "This chat service is permission based. Before a chat begins, no data is collected about you beyond the information which websites usually collect. Once an invitation is accepted, all chats are monitored for quality assurance purposes.  Any information gathered is for internal use only.",
           "lang": "en-US",
           "isDefault": true
         }
       ],
       "type": 0
     }
```
