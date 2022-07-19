#Lead Gen Send Email Widget
This is an example Node.js widget that shows how you can get information from the pre-chat survey, information on the agent, and the chat transcript and have that data populate a form that you can then send to an email address. This widget uses SendGrid to send the emails.

You can view a live example here:[Lead Gen Send Email Widget](https://limitless-basin-7395.herokuapp.com/)

## Background
This widget was built as a proof of concept for a client that need to send lead information immideatly after chat through email. The client wanted the ability to choose who they would send this email to, and they wanted it to include the chat transcript, the pre-chat survey information, and information on the agent that took the chat.

To create this widget, I decided to use the Heroku Nodejs project skeleton since they offer free hosting, and to use Send Grid since it allows you to send a large number of emails for free.

## Instructions
On your LiveEngage account, you will need to setup an engagement with the default pre chat survey.

To use the widget, you will need to have access to a SendGrid account. You will need to update the index.js file with your SendGride username and password.

## Other Use Cases
This widget could be used as starting point for sending the chat transripts to a database or a CRM, or as a way to send notifications of when a customer selects a low CSAT answer.

## Author
Scott Westover 
Email: swestover@liveperson.com