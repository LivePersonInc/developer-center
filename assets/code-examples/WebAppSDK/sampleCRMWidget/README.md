# Sample CRM Widget
This is an example Node.js widget that uses the pre chat survey information to see if a lead exists in a database, and then displays that leads information. This widget uses the mongodb that is available from mongolab.

You can view a live example here:[Sample CRM Widget](https://rocky-garden-8809.herokuapp.com/helloworld)

## Background
This widget was built as a proof of concept in regards to how we could pull information from a CRM based on the pre chat survey information. 

To create this widget, I decided to use the Heroku Nodejs project skeleton since they offer free hosting, and offered free hosting of the online database that is used to act as our CRM.

## Instructions
On your LiveEngage account, you will need to use the default pre-chat survey for when a visitor comes to chat. The widget will pull the visitor's name from the pre-chat survey, and then will query your user database to see if that name exists. If it does, it will then pull that customers information.

To use the widget, you will need to create a mongolab account, and update line 11 in the index.js file to use your mongolab credentials for your database. Once your account is setup, you will need to create a Collection that is called 'userlist'. You can find an example of what the record should look like here: [Sample Record](https://gist.github.com/scottwestover/bf50e85b20153570058b4ae5d913b680) 

## Other Use Cases
This widget could be used as a starting point for connecting to other databases, or CRMS.  

## Author
Scott Westover 
Email: swestover@liveperson.com