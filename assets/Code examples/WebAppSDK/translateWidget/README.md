# Translate Widget
This is an example widget of how you can have the chat lines translated to another language. The widget uses the Bing translator widget to translate the chat lines. 

The widget checks what skill the current chat is assigned to, and it will then translate the visitor chat lines to the correct language. It will also allow you to translate anything the agent types into the corresponding language.

You can view a live example here:[Translate Widget](https://scottwestover.herokuapp.com/liveengageWidgets/translateWidget/)

## Background
This widget was built as a proof of concept in regards to how we can translate chat inside LiveEngage.

One of the challenges that came up was when the chat lines are sent from a vistor, extra html elements are present in the chat line, so I had to strip out those html elements that way only the text of the chat line is left.

Another challenge is, when a visitor sends multiple chat lines, the widget will translate them one at a time, which means an agent can miss some of the translated text. To get around this, we would need to store the previous text until an agent enters a chat line. (This needs to be added to the widget).

## Instructions
On your LiveEngage account, you will need to setup 2 skill groups: Russian and Spanish, and you will need to setup a pre chat survey with routing to these 2 skill groups, or you will need an engagements that is tied to these skill groups.

If a chat comes in that is not tied to one of these skill groups, or then the translator widget will translate English into Spanish for the visitor, and Spanish into English for the agent.

## Other Use Cases
This widget could be used with other translating serverices and a basis for virtual agents. 

## Author
Scott Westover 
Email: swestover@liveperson.com