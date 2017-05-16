This is an example of widget of how you can use the Web App SDK to send Files through chat, and how you can allow visitors to upload files and have the agents view them. The widget allows for you to send a form to the visitor to allow them to upload the file, and once the file is uploaded the widget will display a link to the file. This widget was built using the Google Drive API.

You can view a live example here:[File Sharing Widget](https://scottwestover.herokuapp.com/liveengageWidgets/fileSharingWidget/)

## Background
This widget was built as a proof of concept in regards to how an agent can share files with a visitor, and how a visitor can upload files using a form.

To create this widget, I decided to use the Google Drive API since it allows for you to allow other people to upload files to one of your folders, and it allows for you to view those files.

In the current form, this widget is not scalable because all agents would be using the same storage for files, so they would have to check with the client to make sure the right file was sent.

## Instructions
To use the widget, you will need to update the example3.js and index.html files with your Google Drive API client Id. You can read more about the setting up the Drive API here: [Drive API](https://developers.google.com/drive/v2/web/quickstart/js)

You will also need to update line 65 of the index.html file with the Google Folder ID that you are allowing visitors to upload files to. 

You will also need to setup a Google Script to allow other people to upload files to your own Google Drive account. To do this, you can make a copy of this script here: [Google Script] (https://script.google.com/d/1b9coaI9zCMZdBMF8HxLKPodgyy3aovoUlAiJWhxaHOKe8dOXhKtcxbxF/edit?usp=sharing) 

After you make a copy of the script, you just need to publish it as a Web App, which will give you a URL. You will need to put this URL in line 58 of index.html.

## Other Use Cases
This widget could be used as a starting point for other file sharing solutions.  

## Author
Scott Westover 
Email: swestover@liveperson.com