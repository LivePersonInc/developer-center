This is an example of widget of how you can use the Web App SDK to send Images through chat, and how you can allow visitors to upload photos and have the agents view them. The widget allows for you to send a form to the visitor to allow them to upload the image, and once the photo is uploaded the widget will display the image. This widget was built using the Google Drive API.

You can view a live example here:[Photo Sharing Widget](https://scottwestover.herokuapp.com/liveengageWidgets/photoSharingWidget/)

## Background
This widget was built as a proof of concept in regards to how an agent can share photos with a visitor, and how a visitor can upload images using a form.

To create this widget, I decided to use the Google Drive API since it allows for you to allow other people to upload files to one of your folders, and it allows for you to view those files.

## Instructions
To use the widget, you will need to update the example3.js and index.html files with your Google Drive API client Id. You can read more about the setting up the Drive API here: [Drive API](https://developers.google.com/drive/v2/web/quickstart/js)

You will also need to update line 83 of the index.html file with the Google Folder ID that you are allowing visitors to upload files to. 

You will also need to setup a Google Script to allow other people to upload files to your own Google Drive account. To do this, you can make a copy of this script here: [Google Script] (https://script.google.com/d/1b9coaI9zCMZdBMF8HxLKPodgyy3aovoUlAiJWhxaHOKe8dOXhKtcxbxF/edit?usp=sharing) 

After you make a copy of the script, you just need to publish it as a Web App, which will give you a URL. You will need to put this URL in line 76 of index.html.

## Other Use Cases
This widget could be used as a starting point for other file sharing solutions.  

## Author
Scott Westover 
Email: swestover@liveperson.com