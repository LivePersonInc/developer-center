# PV - Page Viewer Widget 
This is an example widget that was created for a client that shows how you can simulate a page viewer in LiveEngage. While we have the "Page Navigation" built into the agent workspace in LiveEngage, it does not give a visual view of what the customer is seeing. This simple widget allows a visual understanding of where your customers are on your website all in one window.

Note: This does NOT operate the same way as co-browse. Whereas on co-browse you can view exactly what the visitor is doing, this widget only allows you to see what page they are on and visit the same page as if you were another visitor. This essentially simulates copy-pasting what appears in the "Page Navigation" into your browser.

You can view a live example here:[PV - Page Viewer Widget](https://le-page-viewer.herokuapp.com/index.html)

## Background & Limitations
This requires the visitor to be on a page with HTTPS (SSL) to prevent mixed content.
The page must be accessible from the public without authentication. I.e. this will not work on pages that require a login (unless you are logged in with your own credentials already and the URLs are identical).

Additionally, this widget uses the Agent Workspace Widget SDK and binds to the URL of the visitor. As a result, like other agent workspace widgets, the information is refreshed every 20-30. This creates a problem for viewing page updates in real time. As compensation, a refresh countdown timer has been added to notify the agent how long they must wait. This can be toggled off.

Currently the tooltip on the copy button has a slight bug where it might not appear as consistently. The copy function still operates as expected.

## Instructions
* Host the widget on your servers (or use the live demo provided)
* Login to LiveEngage as an admin
* Go to Night Vision (icon next to your name at the far top-right) > Agent Workspace > "+" > Add a new widget
* Enter URL for widget from your servers (or use this [URL of the demo](https://le-page-viewer.herokuapp.com/index.html))
* Start a chat with a visitor
* You should now be able to see the page they are on

## Author
Joshua Espinosa

Email: jespinosa@liveperson.com

Github: https://github.com/Hauuguu