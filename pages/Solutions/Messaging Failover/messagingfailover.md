---
pagename: Overview
redirect_from:
  - usecases-alternate-messaging-notifications.html
sitesection: Solutions
categoryname: Channels
documentname: Alternate Messaging Notifications

order: 1
level-order: 10
root-link: true
permalink: alternate-messaging-notifications-overview.html
indicator: messaging
---

The Alternate Messaging Notifications Solution is for brands that cannot deploy Mobile App Messaging, but still need a method to remind their visitors when they have a new message from an agent that they haven’t read in a while. Normally, this need is serviced by push notifications; however, since web messaging does not by definition has such notifications, a different solution is needed. The proposed solution aims to retain web messaging visitors by alerting them of any unread messages if they do not come back to the website, whether via an email/SMS (which are configured via the solution UI) or via a badge notification on the website's engagement button.

This document will highlight the features of the Alternate Messaging Notifications Solution as well as the badge notification API layer, as well as steps and requirements for deploying this solution.

### Prerequisites

The below solution assumes the following prerequisites are met:

* Your brand’s website is live with Web Messaging

* Your brand is capable of hosting and maintaining a custom LiveEngage Solution

* LivePerson best practice dictates that any custom solutions are hosted by the brand. The code package that goes along with this document is written as a [https://nodejs.org/en/](Node.js web application)

* Your brand has either a Twilio account (for SMS notifications) or a STMP web server (for email notifications)

### Technical Description

The Alternate Messaging Notifications Solution is comprised of the Reminder Scheduler service, the badge notification API (which uses the Messaging Interactions API), and a front-end UI for configuring notifications. Administrators configure the Reminder Scheduler service using the UI to send out email and/or SMS notifications to visitors that provide email and phone number information configuring when to send such a reminder, how the reminder is phrased and more.

### Deployment Steps

1. Please find and clone the GitHub repository for the node app messagingfailoverle [here](https://github.com/cjames1224/messagingfailoverle)

2. You will need to make a .env file with your environment variables. These include:

* Twilio account credentials (if using SMS alerts)

* SMTP username and password (if using Email alerts)

* LE Account number and API information (for using Messaging Interactions API, Skills API)

Example .env file:

TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
LE_ACCOUNT=
LE_CONSUMER_KEY=
LE_CONSUMER_SECRET=
LE_TOKEN=
LE_TOKEN_SECRET=
PORT=
SMTP_USER=
SMTP_PASS=

{:start="3"}
3. If you wish to set email notifications, you will need to set up a GMAIL account to function as your SMTP server. Set up a new GMAIL account, log into it, then in settings, click on the **Forwarding/IMAP** tab and scroll down to the **IMAP Access** section: IMAP must be enabled in order for emails to be properly copied to your sent folder.

4. Install packages by running `npm install` then Run `node server.js` in your command line. If you navigate to localhost:3000, the main dashboard for manipulating the failover service should now be displaying. From here, you can configure the different settings of the Failover Solution, including the Reminder Scheduler service.

5. You can access the Badge Notification API by making a GET request to the following url:

`https://YOUR_HOSTED_DOMAIN/helpers/msghist/ACCOUNT_NUMBER/CUSTOMER_ID/unreadByConsumer`

This returns a Boolean of whether the consumer has an unread message in an open conversation (true/false). Additional logic needs to be configured by the brand to display a badge notification or change the creative for the web messaging engagement. You could, for example, show a notification on top of your already existing engagement button, or change the icon all together to indicate that a message is pending.

Example front-end usage can be found below. In this example, we call the Badge Notification API to determine the value of `unreadByConsumer`. If the value is true, we use JavaScript to modify the CSS of a chosen class, in this case, display it. Thus, we can control whether a CSS/HTML created notification, icon or badge displays, depending on whether an unread message exists or not, thereby informing the visitor that a message is pending for them.

```javascript
$.get('https://messagingfailover.herokuapp.com/helpers/msghist/' + lpTag.site + '/' + jwt_decode(token).sub + '/unreadByConsumer',
	function(data){
		console.log(data);
		if(data.unreadByConsumer){
			//display badge
		  document.getElementById("new-messages-notification").style.display="table";
		}
});
```

Note that the service is not a complete turnkey solution,  but has baseline functionality for sending reminder messages by polling the Messaging Interactions API for open conversations that are pending consumer response for a certain period of time. These polls can be configured by skill and channel (SMS, Email).
