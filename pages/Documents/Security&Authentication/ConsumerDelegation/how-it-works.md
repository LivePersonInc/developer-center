---
pagename: How It Works
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Consumer Delegation
permalink: consumer-delegation-how-it-works.html
order: 3
indicator: both
---

### Delegated Consumer: Web Code Flow

1.	During a conversation with a Bot, the Bot can trigger a delegate consumer flow

2.	The Bot sends the consumer a link for verifing the consumer identity

3. 	The consumer opens up the link (a pop-up window is being opened)

4. 	The consumer completes the identification with the brand

5.  [Optional] A user consent page is presetned for the consumer to consent an access to to specific resrouces

6. 	Brand is redirecting the consumer to LivePerson. LivePerson validates state and retrieve token and close the pop-up window.

7. 	The Bot present is using the access token to perform the opreation with the Brand's API and respond to the consumer.

[comment]: <> Add a sequence diagram
