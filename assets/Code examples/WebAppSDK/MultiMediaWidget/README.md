# Multi Media Widget
This is an example of widget of how you can use the Web App SDK to send html code, send images, YouTube videos (sends an image of the video through chat that the visitor can click on to be taken to the YouTube video), and file sharing by using the Google Drive API.

This widget was built using Angular.

You can view a live example here:[Multi-Media Widget](https://scottwestover.herokuapp.com/liveengageWidgets/MultiMediaWidget/)

## Background
This widget was built as a proof of concept in regards to how we can send HTML, images, and share files in LiveEngage by using the Web App SDK. To build the widget, I decided to use Google Drive for the file sharing because it is free and their APIs have a high qouta.

One of the challenges that came up was when I was trying to send videos through the chat window, the size of the window prevented the user from having a good visitor experience. So, as a work around, I made it so you could post the URL of the video, and instead it would send an image that was a link to that video, that way the vistor could click on it and have it open the website, or the YouTube app if they were on a mobile device.

## Instructions
In order to use the file sharing portion of the widget, you will need to have a Google Developer account, and a Google Drip API client Id. You can read more about the setting up the Drive API here: [Drive API](https://developers.google.com/drive/v2/web/quickstart/js)

## Author
Scott Westover 
Email: swestover@liveperson.com