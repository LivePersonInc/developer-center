# Marketo Example Widget
This is an example Node.js widget of how you can integrate with Marketo by using the prechat survey information to see if a lead exisits in the lead database, and to show how you can create a lead in the lead database. This widget uses the Marketo REST API to connect with the Marketo database.

You can view a live example here:[Marketo Create Lead Widget](https://powerful-ravine-2208.herokuapp.com)

## Background
This widget was built as a proof of concept in regards to how we can create a lead in Marketo based off the pre chat survey, and how we can see lead information if that lead already exists in Marketo.

To create this widget, I decided to use the Heroku Nodejs project skeleton since they offer free hosting.

## Instructions
On your LiveEngage account, you will need to setup an engagement that uses the default pre chat survey. 

To use this widget you will need to have access to a Marketo instance. You will need to update the index.js file with the REST API credentials for your Marketo instance.

For the widget, if you would like to see if a lead exists then you will need to use this URL: https://powerful-ravine-2208.herokuapp.com/leads.

## Other Use Cases
This widget could be used as a starting point for connecting to another CRM.

## Author
Scott Westover 
Email: swestover@liveperson.com