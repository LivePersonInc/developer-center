# Alias Widget
This is an example widget of how you can get all of the information on the Engagement Attributes and display them. The widget has an example of how you can give an engagement attribute an alias by pulling that variable and then displaying it with a different name.

The widget is built using Bootstrap, JQuery, and the Web App SDK.

You can view a live example here:[Alias Widget](https://scottwestover.herokuapp.com/liveengageWidgets/aliasWidget/)

# Chat Starting Page Widget
This is an example widget of how you can use an Engagement Attribute to pass the chat starting page URL to a Google Spreadsheet and then use that data for a custom report.

In order to use this widget, you will need to have a Google Account, that way you can host a spreadsheet on your Google Drive. Inside the Chat Starting Page Widget folder, you will see instructions on how to set this up.

# File Sharing Widget
This is an example of widget of how you can use the Web App SDK to send Files through chat, and how you can allow visitors to upload files and have the agents view them. The widget allows for you to send a form to the visitor to allow them to upload the file, and once the file is uploaded the widget will display a link to the file. This widget was built using the Google Drive API.

To use the widget, you will need to update the example3.js and index.html files with your Google Drive API client Id. You can read more about the setting up the Drive API here: [Drive API](https://developers.google.com/drive/v2/web/quickstart/js)

You can view a live example here:[File Sharing Widget](https://scottwestover.herokuapp.com/liveengageWidgets/fileSharingWidget/)

# HTML Table Editor Widget
This is an example widget that allows for agent to create, edit, or paste data in a table format, and then send that table through chat. Also, by using the on page CSS, it allows for the client to customize the look of the tables and have them match the branding of their chat window.

You can view a live example here:[HTML Table Editor Widget](https://scottwestover.herokuapp.com/test/ckeditor/jcrew/)

# HTML Table Widget
This is an example widget of how you can send HTML tables through chat, and style them by using on page CSS. By using the on page CSS, it allows for the client to customize the look of the tables and have them match the branding of their chat window.

This widget makes uses the CKEditor (http://ckeditor.com/) web text editor.

You can view a live example here:[HTML Table Widget](https://scottwestover.herokuapp.com/liveengageWidgets/JCrewWidget/)

# Knowledge Base Widget
This is an example widget that shows how you can have a knowledge base of information that an agent can search through, and then send that content to a visitor. 

You can view a live example here:[Knowledge Base Widget](https://scottwestover.herokuapp.com/liveengageWidgets/knowledgeBaseWidget/)

# SC - Knowledge Base Widget 
This is an example widget that was created for the SC team that shows how you can have a knowledge base of information that an agent can search through, and then send that content to a visitor. 

You can view a live example here:[SC - Knowledge Base Widget](https://scottwestover.herokuapp.com/liveengageWidgets/knowledgeBaseWidgetv2/)

### Contribution 
Thank you Anthony Kunjbehari for providing the examples for this widget.

#Lead Gen Send Email Widget
This is an example Node.js widget that shows how you can get information from the pre-chat survey, information on the agent, and the chat transcript and have that data populate a form that you can then send to an email address. This widget uses SendGrid to send the emails.

In order to use this widget you will need to have access to a SendGrid account. You will need to update the index.js file with your SendGride username and password.

You can view a live example here:[Lead Gen Send Email Widget](https://limitless-basin-7395.herokuapp.com/)

# Marketo Example Widget
This is an example Node.js widget of how you can integrate with Marketo by using the prechat survey information to see if a lead exisits in the lead database, and to show how you can create a lead in the lead database. This widget uses the Marketo REST API to connect with the database.

In order to use this widget you will need to have access to a Marketo instance. You will need to update the index.js file with the REST API credentials for your Marketo instance.

You can view a live example here:[Marketo Create Lead Widget](https://powerful-ravine-2208.herokuapp.com)

# Marketo Example Widget 2
This is an example widget of how you can integrate with Marketo by using the prechat survey information from LiveEngage to create a lead in the lead database. This widget uses the Marketo Munchkin code and a xmlhttp POST to send the lead data to Marketo.

In order to use this widget you will need to update the demo.html file with your Marketo information.

### Contribution 
Thank you Mukthesh Saraf for providing this example widget.

# Marketo Example Widget 3
This is an example widget that was created for a client that shows how to pull in prechat survey information and then preview it before sending it to Marketo.

This widget uses Munchkin and thus requires a Munchkin id as well as a Marketo form id. These two values currently need to be hardcoded into the code. 

You can view a live example here:[Marketo Example Widget 3](https://marketo-integration.herokuapp.com/index.html)

### Contribution
Thank you Josh Espinosa for creating this widget example.

# Multi Media Widget
This is an example of widget of how you can use the Web App SDK to send html code, send images, YouTube videos (sends an image of the video through chat that the visitor can click on to be taken to the YouTube video), and file sharing by using the Google Drive API.

To use the widget, you will need to update the example3.js file with your Google Drive API client Id. You can read more about the setting up the Drive API here: [Drive API](https://developers.google.com/drive/v2/web/quickstart/js)

You can view a live example here:[Multi-Media Widget](https://scottwestover.herokuapp.com/liveengageWidgets/MultiMediaWidget/)

# Page Viewer Widget
This is an example widget that was created for a client that shows how you can simulate a page viewer in LiveEngage. While we have the "Page Navigation" built into the agent workspace in LiveEngage, it does not give a visual view of what the customer is seeing. This simple widget allows a visual understanding of where your customers are on your website all in one window.

Note: This does NOT operate the same way as co-browse. You will not be able to see exactly what the visitor is doing.

You can view a live example here:[Page Viewer Widget](https://le-page-viewer.herokuapp.com/index.html)

### Contribution
Thank you Josh Espinosa for creating this widget example.

# Photo Sharing Widget
This is an example of widget of how you can use the Web App SDK to send Images through chat, and how you can allow visitors to upload photos and have the agents view them. The widget allows for you to send a form to the visitor to allow them to upload the image, and once the photo is uploaded the widget will display the image. This widget was built using the Google Drive API.

To use the widget, you will need to update the example3.js and index.html files with your Google Drive API client Id. You can read more about the setting up the Drive API here: [Drive API](https://developers.google.com/drive/v2/web/quickstart/js)

You can view a live example here:[Photo Sharing Widget](https://scottwestover.herokuapp.com/liveengageWidgets/photoSharingWidget/)

# Sample CRM Widget
This is an example Node.js widget that uses the pre chat survey information to see if a lead exists in a database, and then displays that leads information. This widget uses the mongodb that is available from mongolab.

In order to use this widget you will need to have access to a mongolab account, and you will need to edit the index.js file to use your credentials.

You can view a live example here:[Sample CRM Widget](https://rocky-garden-8809.herokuapp.com/helloworld)

# SDK Sample Widget
This is an example widget that shows how you can write chat lines to the agent console, get information from the agent console, and how you can bind data from the agent console.

Note: This sample widget was not created by me. I am sharing the source code here since it is no longer available through the original link.

You can view a live example here:[Sample Widget](https://scottwestover.herokuapp.com/liveengageWidgets/SDKsampleWidget/)

# Tiered Responses Widget 
This is an example widget that was created for a client that shows how you can have a knowledge base of tiered information that an agent can search through and then send that content to a visitor.

This widget uses the CollapsibleLists JS library.

You can view a live example here:[Tiered Responses Widget](https://tiered-responses-widget.herokuapp.com/index.html)

### Contribution 
Thank you [Josh Espinosa](https://github.com/Hauuguu) for creating this widget example.

# Translate Widget
This is an example widget of how you can have the chat lines translated to another language. The widget uses the Bing translator widget to translate the lines. 

The widget checks what skill the current chat is assigned to, and it will then translate the visitor chat lines to the correct language. It will also allow you to translate anything the agent types into the corresponding language.

To use the widget, you will need to have 2 skill groups set up: Russian and Spanish. If the chat is unskilled, then the translator will translate English into Spanish for the visitor, and Spanish into English for the agent.

You can view a live example here:[Translate Widget](https://scottwestover.herokuapp.com/liveengageWidgets/translateWidget/)
