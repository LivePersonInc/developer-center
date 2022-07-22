# Tiered Responses Widget 
This is an example widget that was created for a client that shows how you can have a knowledge base of tiered information that an agent can search through and then send that content to a visitor.

This widget uses the CollapsibleLists JS library.

You can view a live example here:[Tiered Responses Widget](https://tiered-responses-widget.herokuapp.com/index.html)

### Contribution 
Thank you Scott Westover for lending some tools to use as a base for this widget. Thank you Christian James and Cale Short for your help with some stylization.

## Background
This widget was built for a client to use in order to allow them to manipulate their predefined responses in a legacy-style, tiered, format.

One of the challenges with this widget is that since it exists in an iframe it does not have the same hotkey functionality as the Predefined Content in LiveEngage 2.x. Also another thing due to it exiting within an iframe is that the hilighting color does not dynamically update according to the color in the agent workspace and instead remains as a static blue. Lastly, to modify the set of predefined content you would have to re-parse the excel file.

## Other Use Cases
This widget could be modified to pull the content from some type of database, or to allow agents add new content on the fly. Additionally, it could be modified to dynamically inject information based on Engagement Attributes.

## Instructions
Instructions for collecting the information and organizing it so that it is compatible with this widget can be found in the comments of the parser.html. Additionally, I've included an example spreadsheet--"Example_Tiered Responses.csv"--for how the responses should be formatted.

Once the information is parsed, you can copy the information from the window and use that as your index.html.

## Author
Joshua Espinosa

Email: jespinosa@liveperson.com

Github: https://github.com/Hauuguu
