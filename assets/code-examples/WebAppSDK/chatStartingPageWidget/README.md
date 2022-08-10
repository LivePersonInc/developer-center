# Chat Starting Page Widget
This is an example widget of how you can use an Engagement Attribute to pass the chat starting page URL to a Google Spreadsheet and then use that data for a custom report.

## Background
This widget was built for a client that wanted a way to track which pages a chat was coming from. Currently in LiveEngage, the chat starting page URL is not included in the transcripts, so the only way to track this in the platform would be to create a seperate location for each page.

One idea was to tie the chat starting page to an engagement attribute, and then pass that information to LiveEngage. The issue we had at the time was that the engagement attributes where not available in the transcripts or the APIs. So, I came up with the solution to pass these attributes to another source, Google Sheets.

## Instructions
In order to use this widget, you will need to have a Google Account, that way you can host a spreadsheet on your Google Drive. 

Please see this PDF for instructions on how to set up the Google Spreadsheet and the Google Script.

## Other Use Cases
This widget could be used as a starting point for sending engagement attribute data to another platform in real time.

## Author
Scott Westover 
Email: swestover@liveperson.com