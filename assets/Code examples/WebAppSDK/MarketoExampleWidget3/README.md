# Marketo-Integration-Widget
This is an example widget that was created for a client that shows how to pull in prechat survey information and then preview it before sending it to Marketo.

This widget uses Munchkin and thus requires a Munchkin id as well as a Marketo form id. These two values currently need to be hardcoded into the code. 

You can view a live example here:[Marketo Example Widget 3](https://marketo-integration.herokuapp.com/index.html)

### Contribution 
Thank you Muktheshwar Saraf for lending some tools to use as a base for this widget.

## Background
This widget was built to send prechat survey information to Marketo from within the Agent Workspace.

One of the challenges with this widget is to bypass the CORS (cross-domain) error. Currently there is an error that appears in the console yet the data still passes through to Marketo. Mukthesh and I have tried some troubleshooting and haven't been able to make the error disappear. A server side language would probably be better. However, since it works it accomplishes it's purpose as a POC widget.

Current limitations include the above as well as not being able to edit the Munchkid id and Marketo form id data on-the-fly.

## Other Use Cases
This widget could be modified to dynamically add additional fields and edit data on-the-fly. A Marketo form would have to be created with a large enough size to compensate for this.

## Instructions
* Make a Marketo form while noting the Munchkin id and Form id. 
* Make a prechat survey that mirrors your form setup. 
* In the code, enter your Munchkin id where it says ENTER_MUNCHKIN_ID_HERE and enter your Form id where it says ENTER_FORM_ID_HERE. 
* Host the code as a webapp on your servers. 
* Copy the URL into the LiveEngage "add new widget" section through Night Vision. 
* Take a chat and fill out the prechat survey.
* Click "Send to Marketo" and verify that it appears in Marketo.

## Author
Joshua Espinosa

Email: jespinosa@liveperson.com

Github: https://github.com/Hauuguu
