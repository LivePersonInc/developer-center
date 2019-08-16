---
pagename: Tips & Tricks
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-tips-tricks.html
indicator: both
---

This document is a collection of useful information, tips and tricks accumulated over many months of using conversation builder.

There is no set order to the document - each heading is meant to be a single defined topic taken on its own.

### Interactions

#### How do I show a variable inside a text interaction?

* `{}` used for inserting dynamic values inside text interactions

  * Bot Variable: `{$botContext.variableName}`

  * Slot Variable: `{$botContext.slot.slotName}`

  * Environment Variable: `{$env.variableName}`

  * API Integration custom data values: `{apiName.variableName}`

Normal Variable = `{$botContext.VARIABLE_NAME_GOES_HERE}`

Slot Variable = `{$botContext.slot.SLOT_VARIABLE_NAME_GOES_HERE}`

Environment Variable = `{$env.ENV_VARIABLE_NAME_GOES_HERE}`

#### How do I add line breaks inside text interaction?

CTRL+ENTER command

**_Note_**: does not render when using the the Preview tool inside CBuilder. You will not see line breaks in the preview tool.

#### What is the character limit on a single text interaction before it gets split into 2 parts?

320 characters on word boundary

#### How to specify the break point within a large block of text

Add the following special tag inline inside your text interaction to force a break into 2 separate blocks of text.

The delay value is in milliseconds = 1000 = 1 second.

tag::breakWithDelay=1000

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_8.png">

### Accessing Data

#### How do I get the conversation id?

```javascript
var convId = botContext.getConversationId();
```

Will store the conversation id in a variable inside your current pre/post process code call "convId".

You can then save this in a bot session variable using the following code…

```javascript
botContext.setBotVariable("conversationId", convId, true, false);
```

Which can then be accessed inside subsequent interactions or integrations using the following syntax:

`{$botContext.conversationId}`

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_0.png">

#### How do I get previous/current skill id information?

[https://developers.liveperson.com/conversation-builder-conversation-builder-scripting-functions.html#get-current-and-previous-skills](https://developers.liveperson.com/conversation-builder-conversation-builder-scripting-functions.html#get-current-and-previous-skills)

*****NOTE*** Previous Skill Id does not work in ****Chat**** for now, it is set to the same ID as the current Skill ID.**

**Messaging Bot Agent API Key / Connector Requirements:**

Insure that the bot is setup with API OAuth login rather than PW, and the OAuth keys have permission to *Engagement History*

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_1.png">

*If you apply these changes to an existing bot already logged in, you will need to restart the bot agent(s) to make these changes take effect and then be able to access previousSkill information inside your dialogs.*

##### [Walkthrough: How to build a bot that returns the conversation to the previous agent skill dynamically](https://drive.google.com/file/d/1mUaSyJI9DD-Ifa7oHXqLrNlGjBh0ESQG/view?usp=sharing)

#### How do I capture/use consumer response to a question?  

The following special syntax can be used to capture consumer submissions to last asked question into a variable:

`{$query}`

This is special syntax - used during **Response Conditions** for a question where you want to save the response from the consumer into a variable.

#### How do I access authenticated customer info?

There are two built in methods to return this information - *if it exists!*

```javascript
botContext.getLPUserPersonalInfo();

botContext.getLPCustomerInfo();
```

You can attempt to see if either of these 2 methods return true or not.  If the visitor is authenticated, which typically they would set personal or customer info being logged in, you can access the Personal Info or Customer Info object array.

#### How do I capture the user response to a question in a variable?

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_7.png">

Would store whatever the user response was to a question in this variable name.

### Conversation Flow

#### How do I get the bot to close the conversation?

Create text interaction with the special string "LP_CLOSECONVERSATION"

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_2.png">

#### How to: Create Reusable "yes" and “no” intents to reuse across dialogs

Rather than having to constantly enter and re-enter patterns inside response conditions  for variations of "yes" or “no”, I recommend building out two specific intents which encompass these.

* Affirmation

* Negative Affirmation

You can wrap all variations that encompass "yes" or “no”. Once done you can create response conditions that match “Response Intents” linked to these and never have to re-enter the same patterns again for these types of questions!

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_3.png"><img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_4.png">

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_5.png"><img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_6.png">



### Suggestions for Bot Builders ahead of launch:

#### 1- "Chaos Monkey" Testing = random, unfamiliar user testing the unhappy paths

 

* Be as disruptive as possible to try and break the flows you have already built.

* **Find the gaps / cracks in your bot now - ****_not when it’s in front of all your customers._**

* From within any/all intent dialogs deliberate enter gibberish  messages and see how the fallback plays out from this trigger?

            - are you catching answers that are not expected question responses using * patterns and the repeat question approach we have built?

 

            Consider the following scenario:

            - If someone unexpectedly jumps to the fallback mid-dialog flow, do you want to try and recognise this when they hit the fallback and offer them a way back to the previous intent dialog?

                        - ***Note*** : doing this would require more conditional logic and some code to track and create this functionality.

                        - maybe we set a "current_consumer_intent" variable at the top of each dialog?

                        eg "current_consumer_intent" = “CARD_ACTIVATION”

                        - then if they suddenly enter unrecognised utterances mid-dialog which trigger fallback, your fallback dialog can check this variable before decided what contextual message to show?

                        *if* **current_consumer_intent** has a value 

                        *then *

*                                    ->* jump to fallback contextual message and skip known intents menu

                                    -> "I see you were just in “card activation" but I didn’t understand your last message. Would you like to go back to where you were? Or speak to an agent?”

                                                "go back to CARD ACTIVATION"

                                                "talk to an agent"

#### 2- Anticipate how you will react to unmatched intents on day 1

* pre-build a dialog flow which recognises the customer wants help with a popular intent / question that the bot cannot currently handle

* build out the dialog steps where you explain this and gracefully bring in an agent via transfer

* then during the retraining downtime of the bot on day 1, you just need to create a new intent from the unmatched intents data, and connect it to this dialog.

* you can then quickly put this live for round 2 of the bot on day 1 and quickly demonstrate how quickly you can *learn* from what customers are asking you.

* extending this concept, you could also pre-build some dialogs which refer to incidents around specific service outages that might occur whilst the BOT is live - again hooking them up to common phrases people might ask in the event of an outage.

* You can then quickly enable these dialogs on the fly should an incident occur as a way to help deflect / contain people who flood the channel during outages / issues.

* Again, this can all be pre-built and tested ahead of the go-live based on the knowledge you have on how you respond / communicate service outages when customers come into agents at the moment.

#### Avoid mismatched intents for unhandled use cases

If there are known phrases / patterns for sensitive customer intents that you are not handling in the bot for launch, the recommendation is to create placeholder dialogs that target these specific patterns and immediately transfer to a human agent.

This avoids the bot trying and failing to respond with the appropriate tone for something the customer says which you have not anticipated.

E.g.

"My partner has passed away" relates to bereavement and should be transferred immediately. 

Create a dialog with the pattern for the User Says interaction of  "*passed away*" and other variations and have this immediately transfer to agent.

This prevents hitting the fallback or mismatched intent with another dialog.

### How best to program the intents and entities for compound sentences?

E.g.

#### should entities be used for variations of "don’t" “can’t” “won’t” ? 

Will this benefit the system NLU in anyway? What about "cannot" “will not” “do not” variations?

* You don’t have to define variations. During runtime, we expand sentences and process it. Can’t transforms to Cannot

* Do not include I/We/You..

* NLU takes care of compound phrases. It is good to test and tune the matched status from within the domain before using it in a dialog. Testing and tuning the sentence is a good practice.

### Creating a single "resolve and close" dialog

#### Why? 

*- *to avoid having to repeatedly design and build the following sequence of questions within every dialog/intent flow

Did that resolve your question?

* Yes

* No

Yes = send goodbye message and close conversation

No = Ask for user input and match intent etc.

#### How? - 

1- Create a new dialog inside your bot called "Confirm Resolution and Close"

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_9.png">

2 - Setup the following interactions

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_10.png">

3 - Ask for confirmation of resolution

4 - Setup Affirmation and Negative Affirmation response intents to capture their answer

Affirmation goes to your interaction where you ask them to enter the next question. In my example that interaction is named "wait for next utterance"

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_11.png">

Negative Affirmation goes to the "happy to help message" which then goes to the **LP_CLOSECONVERSATION** code to end the conversation.

5 - Wire up all your other existing intents to this one dialog flow when they have reached their logical end and you want to ask for confirmation the problem has been resolved.

In my example bot I have two separate intents: billing and balance.

At the end of both these dialogs, the "next interaction" of the final steps directly links to the new “confirm resolution and close” dialog we just built.

E.g.

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_12.png">

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_13.png">

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_14.png">

#### Demo

In my example bot I will start the billing flow…

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_15.png">

I say Yes and then after answer is sent from the billing flow, I am pushed into the "confirm resolution" dialog…

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_16.png">

If I say "yes" I can type my utterance for triggering “balance” intent

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_17.png">

Once I complete balance, I send the consumer back to the confirm resolution dialog…

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_18.png">

**Note**: the red line is added to show the end of balance and below is back in the confirm resolution 

Now I can type another utterance and allow the system to match me against another known intent and repeat the sequence again…

Or say "no" and we close the conversation

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_19.png">

### How to keep people inside a single dialog flow

#### Why?

Depending on the use case, it might be needed to ensure users do not jump out into other dialogs due to the next utterance, reply matching another intent within the NLU.

At various branching points within certain dialogs, users are asked to answer questions or make choices on how to proceed.

Whilst effort can be made to help them pick certain predefined options, there is always a possibility that users will just type their needs separately and not pick from menus of buttons or multi-choice answers.

Unless these types of input are caught, they could allow the user to jump from the current flow into the next dialog. 

Whilst this may be an OK experience for certain dialogs, others may have specific questions and answers to collect and therefore we need a way to contain them in the current dialog until we have collected answers we need.

#### How?

When asking questions (pink) that specifically await user input, this allows the opportunity to define specific "response conditions" that can either allow/deny non-expected input to jump out into other dialogs.

As an example, this Balance dialog has 2 sequential questions: account number and email address. Both have specific conditions defined to validate the input.

6 digits and valid email address respectively.

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_20.png">

However, because no "catch all other" condition has been added, if the user types anything other than valid responses, the utterance is evaluated against NLU for matching intents which could jump dialogs. In the below example, nothing matches the response so the **fallback** dialog is invoked. Because **fallback **does not wait for any input, it immediately drops out of the bottom and returns them to the previous dialog…

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_21.png"><img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_22.png">

If you wanted to prevent this behaviour, the following condition could be added to each question:

Using the * pattern match as **the final condition **will catch any other responses to that question which do not match any of the previous conditions defined.

You can use this condition to repeat the same question if you desire or redirect anywhere else within the automation if you desire.

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_23.png">

### How does CB handle jumping between different intents and dialogs?

#### Background:

Every time the user enters a new utterance in the conversation, this has the chance of matching a new intent and "jumping" you out of one dialog and into another one for the newly matched intent.

**Note**: Depending on if the user’s utterance is in response to 

A) open-ended statement 

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_24.png">

… or ...

B) specific question type 

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_25.png">

will affect your ability to restrict, redirect or prevent this behaviour.

Let’s first look at the scenario A):

In this situation, the bot has presented a text statement: "please type your question" variation and awaits the user’s input.

Because this not being captured in response to a specific (pink) question type, no response conditions can be applied what the user types - **_whatever the utterance is, will be processed by the NLU engine to try and find a matching intent and dialog flow._**

Therefore if a new matching dialog flow is detected, this will be "pushed" onto the top of a virtual “stack” of dialogs in progress…

Take the following bot automation where there are 2 defined intents - balance and billing question.

1. In the first step, the user types an utterance ("balance") to trigger the first intent and dialog...

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_26.png">

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_27.png">*This represents the "stack" of dialogs being tracked by CB. Newest matched intent / dialogs are on the top - removed after completion of the final step *

2) Mid Balance Enquiry dialog, the user types "billing question" utterance This matches the Billing Question intent and dialog, which is immediately **pushed to the top of the stack **The user then sees the steps for that intent...

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_28.png">

3) Once the billing question dialog flow ends, the user is returned to the next dialog still on the stack in this case : Balance... 

**Note**: The last interaction to be presented before leaving is shown again - in this case the "provide email address" question.

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_29.png">

Note: This behaviour allows for many dialogs to stack and then pop as they are completed. In the following example, we start with Balance, then trigger Billing Question and then a specific answer in Billing Question routes us to "Sub Billing" Dialog. After that completes it is removed from the stack, then Billing Question is removed and finally we return to the Balance dialog and see the same interaction before we branched out.

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_30.png"><img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_31.png">

#### How can I prevent / alter this behaviour?

* If one of the dialogs added to the stack **ends the conversation** - this should prevent the system falling back to the dialog underneath in the stack.

* If one of the stacked dialogs contains a question type that uses conditional matching to route to an end conversation interaction.

* (TBC) an open question type with no routing conditions that just continues to next interaction, *appears* to block the NLU detection and dialog jumping behaviour - more testing required to confirm 100%

Apart from that, the system will remove any stacked dialogs as they complete and return you to the previous one.

**NOTE**: From March 15th there should be a fix in Production which prevents the above behaviour from happening if you ever trigger the fallback dialog. *Therefore if you jump from fallback to another intent dialog, you should ***_NOT_*** then be dropped back into fallback once the intent dialog is complete.*

Add the following pre-process code to your escalation / transfer to agent action to prevent the above behaviour

```javascript
botContext.setBotVariable('skipPreviousDialog', 'true',true,false);
```

##### Demo

[https://youtu.be/vcCuewGgvVE](https://youtu.be/vcCuewGgvVE)

### How to ignore customer responses whilst the bot is sending out instructions before the next question is asked.

A common scenario is having the bot present several text interactions of information with small delays between each interaction (to aid accessibility issues). After these interactions have been sent in sequence, the bot asks the user a question to help decide the next course of action.

However, there is nothing stopping the consumer from typing utterances whilst the bot is still in the process of sending its sequence of text interactions. 

In this situation, an utterance would be processed for any matching intents/patterns to dialogs and potentially "jump" the user into another dialog, fallback or be treated as a response to an upcoming question in the current dialog.

#### Solution:

By setting the following Automation Environment Variables at Bot Automation level, the bot can be set to "ignore" utterances sent by the consumer within a dialog until the next logical branching option is reached - e.g. a question with conditions that allow you jump out to other dialogs.

<table>
 <tr>
 <td>Environment Variable Name</td>
 <td>Value</td>
 <td>Description</td>
 </tr>
 <tr>
 <td>system_handleIntermediateUserMessage</td>
 <td>true</td>
 <td>Enables the behaviour to catch intermediate user messages mid dialog flow</td>
 </tr>
 <tr>
 <td>system_intermediateBotMessage</td>
 <td>(Optional) Message String to respond with if triggered
E.g.
"Please wait...we are still responding to your last message"</td>
 <td>The message the bot will respond with if the feature is triggered by the user sending an utterance.
If this value is not set then the bot will simply not respond with anything should the ignore feature be enabled.</td>
 </tr>
 <tr>
 <td>system_intermediateBotResponseTimeout</td>
 <td>Time Out period in milliseconds
E.g 15000 = 15 seconds</td>
 <td>If for some reason, bot is waiting on Message #1 and the wait is way too long, then it should timeout and move on to Message #2, instead of waiting for message #1 to complete.</td>
 </tr>
</table>


*If you have an existing set of Automation Variables assigned to your bot already, please ***_append_*** these variables to that existing set to enable this feature. *

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_32.png">

*Otherwise, create a new automation environment set to store these settings inside and assign them to your bot automation…*

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_33.png"><img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_34.png">

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_35.png">

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_36.png">

Essentially, you will be "locked" to the current dialog and be shown the system_intermediateBotMessage text each time you try and interrupt the bot mid-flow

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_37.png">

### Agent to Bot Transfer Scenarios

#### Use case: Offer consistent greeting regardless of last utterance prior to transfer to the bot

Agent hands-off conversation to a bot to perform some automated process.

#### Why is this a problem?

When the conversation hits the bot, it will attempt to match the last message in the conversation with a given intent.

However, this cannot be guaranteed to always be consistent. Whilst the agent may send a predefined message telling the consumer they are about to be transferred to a bot, there is nothing stopping the consumer responding into the conversation with an acknowledgement such as "OK" before the agent completes the transfer in LE.

In this situation, the first message the bot receives would be "OK" utterance - which is likely to trigger the fallback dialog and we are already off to a poor start customer experience and conversation wise.

#### Solution: [How to respond to transfer into a bot with custom Fallback dialog routing](https://docs.google.com/document/d/1SjzCsHOhLK6QRbZRsLOCveQpG53_oESlpkhBsuQqPLg/edit?usp=sharing)

This document steps through how to create logic in your fallback and welcome/greeting dialogs to always offer a consistent greeting when the bot receives a transfer from human agent when the last utterance does not match a known intent/pattern dialog within the bot.

[https://docs.google.com/document/d/1SjzCsHOhLK6QRbZRsLOCveQpG53_oESlpkhBsuQqPLg/edit?usp=sharing](https://docs.google.com/document/d/1SjzCsHOhLK6QRbZRsLOCveQpG53_oESlpkhBsuQqPLg/edit?usp=sharing)

### IP Login Policy

If a LiveEngage account has ip login restrictions in place, you must add the below IP addresses to the login policy in legacy backend. There are two sets that need whitelisting, depending on whether CB is hosted in AWS or LP Cloud.

#### AWS:

```
13.52.0.0-13.52.255.255
13.56.0.0-13.56.255.255
13.57.0.0-13.57.255.255
18.144.0.0-18.145.255.255
50.18.0.0-50.18.255.255
52.8.0.0-52.8.255.255
52.9.0.0-52.9.255.255
52.52.0.0-52.53.255.255
52.92.48.0-52.92.51.255
52.93.34.56-52.93.34.56
52.93.34.57-52.93.34.57
52.93.37.222-52.93.37.222
52.93.37.223-52.93.37.223
52.94.12.0-52.94.12.255
52.94.72.0-52.94.75.255
52.94.198.0-52.94.198.15
52.119.176.0-52.119.183.255
52.144.194.192-52.144.194.255
52.219.20.0-52.219.23.255
52.219.24.0-52.219.31.255
54.231.232.0-54.231.239.255
54.239.0.16-54.239.0.31
54.240.198.0-54.240.198.255
54.240.212.0-54.240.215.255
176.32.112.0-176.32.119.255
204.246.160.0-204.246.163.255
205.251.228.0-205.251.231.255
52.94.248.128-52.94.248.143
52.94.249.80-52.94.249.95
52.95.246.0-52.95.246.255
52.95.255.96-52.95.255.111
54.67.0.0-54.67.255.255
54.151.0.0-54.151.127.255
54.153.0.0-54.153.127.255
54.176.0.0-54.177.255.255
54.183.0.0-54.183.255.255
54.193.0.0-54.193.255.255
54.215.0.0-54.215.255.255
54.219.0.0-54.219.255.255
54.241.0.0-54.241.255.255
184.72.0.0-184.72.63.255
184.169.128.0-184.169.255.255
204.236.128.0-204.236.191.255
216.182.236.0-216.182.237.255
```

#### LP Cloud:

```
52.124.128.0-52.124.255.255
54.230.0.0-54.230.255.255
54.239.128.0-54.239.191.255
99.84.0.0-99.84.255.255
205.251.192.0-205.251.223.255
54.239.192.0-54.239.223.255
70.132.0.0-70.132.63.255
13.32.0.0-13.33.255.255
13.224.0.0-13.227.255.255
13.35.0.0-13.35.255.255
204.246.172.0-204.246.173.255
204.246.164.0-204.246.167.255
204.246.168.0-204.246.171.255
71.152.0.0-71.152.127.255
216.137.32.0-216.137.63.255
205.251.249.0-205.251.249.255
99.86.0.0-99.86.255.255
52.46.0.0-52.46.63.255
52.84.0.0-52.85.255.255
64.252.64.0-64.252.127.255
204.246.174.0-204.246.175.255
64.252.128.0-64.252.191.255
205.251.254.0-205.251.254.255
143.204.0.0-143.204.255.255
205.251.252.0-205.251.253.255
204.246.176.0-204.246.191.255
13.249.0.0-13.249.255.255
54.240.128.0-54.240.191.255
205.251.250.0-205.251.251.255
52.222.128.0-52.222.255.255
54.182.0.0-54.182.255.255
54.192.0.0-54.192.255.255
```


### Debugging login failures

If the bot connector is online but the LE connection status is not up, there is likely a login issue.

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_38.png">

You can glean some information from Kibana by using this query param: 

{{Account Id}} AND "Login Failed" AND {{Bot login name}}

### Avoiding False Positives (How to Optimise / Train NLU Intent Detection)

#### [UPDATE: New document from Ravi here](https://docs.google.com/document/d/1Dw2sXrMmUPWZd-fkV_3vr3b77altwKfHlJKweVcQtmo/edit?usp=sharing)

#### Beware overuse of entities in training phrases

The greater the number of matching entities in a single training phrase, the higher the score level.

Therefore overuse of entities in training phrases for irrelevant information such as greetings or other general terms, will incorrectly inflate the score and lead to false positives.

E.g

The more entities matched in the intent training phrase, the stronger the match. For example, in the training phrase* "ENT_hello I am going ENT_travelling"* if I match both **"ENT_hello"** AND **"ENT_travelling"** it is a stronger match than if I just match **"ENT_travelling"**. Remove entities that are not indicative of the intent to reduce false positives.

Entity matches increase the intent match strength. Sometimes this can result in false positives because of the strength of the entity match. When I tested using the entity match I got a GOOD match at 71%. When I removed the entity match and just used the word "from" in the training phrases I got a FAIR match at 55%.

Further HSBC specific use cases / examples linked here [https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk](https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk)

[https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk](https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk)

#### Training Phrases should be one sentence - not many

In intent "Activate a Card" remove text "I think I need to ENT_activate it." from training phrase 

*"I have been unable to use a new ENT_card linked to this account. **I think I need to ENT_activate it.**".*

Training phrase should be one sentence, not multiple. Multiple sentences increase risk of false positive as they provide more opportunity for a wider range of matching.

#### "Stop" Words and their impact on NLU

Below is the stop word list. When we use training sentences these words may not carry weight in comparison to words that are not in this list.

```
"a","about","again","against","all","am","an","and","any","are","aren't","as","at","be","because","been","being","both","but","by","can't","can", "cannot","could","couldn't","did","didn't","do","does","doing","don't","during","each","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","of","on","once","only","or","other","ought","our","ours","ourselves","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves”
```

The following words have recently been **_removed_** from the list of stop words that are ignored within training phrases in the NLU intents.

```
"above","after","before","below","between","down","few","off","out","over","own","same","under","until","up”
```

If you have/had training phrases which contain any of these words **_they will be now be counted towards the matching score for an utterance_** - where they would have been previously ignored. **_We suggest testing your Intents and training phrases to check everything still works as expected_** and that these stop word changes have not had any major impact on your intent matching phrases.

### Troubleshooting

#### Known issues

##### *Messages are delivered out of order*

###### Why is this? 

* UMS processes messages in its queue on a rolling 2 second loop.

* Any messages queued when the next loop runs will all be attempted to be "put on the wire" simultaneously.

* This means **_there is no guarantee what order they will be delivered to the consumer_**

###### Mitigation = Add minimum 2 second delay to each message in a sequence

* Ensure you have a minimum of 2 seconds delay (2000ms) for each interaction within CB where you care about the order (which is 99% of the time always!)

 * This will mean each message added to the UMS queue *should* be at least 2 seconds apart and not be grouped together in a batch that could be delivered out of order.

##### Long messages are broken up into smaller ones - what is the word limit per single message?

320 characters on a word boundary

If you wish to control exactly where within a large block of text the split occurs you can use the following special syntax within a text interaction.

tag::breakWithDelay=2000 

(example in context…)

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_42.png">

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_43.png">

##### "My Quick Reply question is not showing"

###### *Quick Replies only show a maximum of **3** options when used inside FB Messenger*

##### *Unmatched Phrases Not Showing in Analytics*

###### Reason = When using a Knowledge Base without using any intents in intent builder, analytics does not track the unmatched phrases.

###### Mitigation = Add the following global function

```javascript
function __initConversation(){

   botContext.setBotVariable('__recordUnMatchedPatternPhrases__',true,true,false);

}
```

This function should be called at the start of every conversation processed by your bot automation. Within this function the code sets the flag to recording unmatched pattern phrases.

### Exporting/Importing Domains

#### Can I export from one domain to another?

Yes - you can now "overwrite" the contents of one domain using the CSV intent / entity export CSV files from any other domain.

**PLEASE NOTE: **This is a complete override of the target with the source data - no merge.

### Exporting/Importing Bot Automations from AWS farm to LPPC

#### Can I export a bot automation from AWS Conversation Builder into LPPC Automation tab Conversation Builder inside LE account?

Yes - however you must consider the following caveats.

* If your automation uses domains for intents and entities **_you MUST export/import the domain first from AWS into LPPC version_**

 * *You ***_MUST_*** ensure the domain name remains the same once imported into LPPC ***_BEFORE_*** you import your automation *- otherwise the import will fail to find its expected domain for all linked dialog response intents and they will become disconnected. 	

 * If you ensure the domain exists with the same name, then the import should be able to find and reconnect dialog conditions to the intent at the new location.

 * If you forget, the imported automation will lose any/all response intent connections and you would have to manually rewire them back up to the relevant intents and entities.

##### Process Guide : 

[https://docs.google.com/document/d/1d9rbMetEX4DRKgi85XWCg7LFTT1EW3GTHEhDR4dZTyg/edit#](https://docs.google.com/document/d/1d9rbMetEX4DRKgi85XWCg7LFTT1EW3GTHEhDR4dZTyg/edit#)

### Roles and Permissions

The following document provides a table of the different CB roles and the actions they can perform within CB tool.

[https://docs.google.com/spreadsheets/d/1C-SXlGbGzs9Pj7sM6r2sDP-pNzqyH6_wRN7qJ-Zk2oI/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1C-SXlGbGzs9Pj7sM6r2sDP-pNzqyH6_wRN7qJ-Zk2oI/edit?usp=sharing)

In the past, everyone who got CB access was given admin access. However now, if a profile does not have any permissions associated, user will not have access to CB. Please update user permission. SSO Permissions guide here: [https://docs.google.com/document/d/1OQVtt2Rl5qrfUPI59ASH2HCR25IHELnGk5kac-vB0lg/edit?usp=sharing](https://docs.google.com/document/d/1OQVtt2Rl5qrfUPI59ASH2HCR25IHELnGk5kac-vB0lg/edit?usp=sharing)

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_44.png">

(via [https://docs.google.com/document/d/1OQVtt2Rl5qrfUPI59ASH2HCR25IHELnGk5kac-vB0lg/edit](https://docs.google.com/document/d/1OQVtt2Rl5qrfUPI59ASH2HCR25IHELnGk5kac-vB0lg/edit))

### Undocumented Custom Configurations that impact bot agent behaviour

Within CB when adding an "Enterprise Integration" to connect your automation to a LE bot agent user, there is a UI section at the bottom of the screen where credentials are entered called 

**_"Custom Configurations"_**

This allows key/value pairs to set/change various settings that can have a massive impact on your bot automation and the behaviour.

**This causes potentially many issues as it allows for human error when connecting the bot "brain" to an agent “body”.** These custom, undocumented flags allow for fundamental changes in bot behaviour *outside* of the design of the automation and are injected at the point of connecting a bot automation to an agent on a 1:1 basis!

**_Example: _***Should you forget/mis-configure these settings for 1 of your 3 duplicate bot agents all running the same "automation" you will get different behaviour between the bots within an account!*

If you have specialist bot automations receiving conversations from routing bots where you enabled the [skipAgentMessage](#heading=h.ki1xdn1y3r25) setting on 2 of the 3 bot agents, they will not behave the same when receiving conversations! 

#### skipAgentMessage

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_45.png">

This setting impacts the way bots "see" incoming conversations transferred to them by another bot within the account.

By default, when a bot receives a conversation it sees the last utterance in the conversation history - **_regardless who sent it (agent or consumer)_**. This can make it difficult to predict or control what the incoming utterance will be for a receiving bot in order to react appropriately.

Setting skipAgentMessage to true will mean even if the last message in the conversation history is from a bot agent/human agent, it will be ignored - and the receiving bot will "see" the last **_consumer message_** as the first utterance for processing.

This is often used when you have a routing bot passing off the conversation to a specialist bot and you do not want the transfer message sent from the routing bot to be seen by the specialist bot when it receives the conversation.

##### Example:

**Consumer**: I would like to pay my bill

*(Routing bot receives conversation and matches intent to bill payment bot - sends transfer message as part of the transfer to the bill payment bot)*

**Routing Bot**: Let me transfer you to our specialist bill payment bot

*(***_skipAgentMessage_*** = ***_true_*** setting has been enabled)*

*(Conversation is transferred to the Bill Payment Bot)*

*(Bill Payment bot sees the following utterance : "**I would like to pay my bill**" and ignores the message from the routing bot even though that is the last utterance before the transfer)*

**Bill Payment Bot**: I can help you pay your bill ...

#### tileDisplay = horizontal

This settings changes the display formatting of carousels when used with the structured content type and API responses.

This is NOT the default value for this property (default = vertical) which means you must remember to enable this setting on every bot agent you connect a relevant automation to in order to resolve this issue.

Setting **tileDisplay** = **horizontal** is required to resolve the formatting issues seen in the  following slack threads [https://nation.slack.com/archives/C5R1ZBUVD/p1559126077022500](https://nation.slack.com/archives/C5R1ZBUVD/p1559126077022500)

[https://nation.slack.com/archives/CJ5R0GULU/p1558447366042000](https://nation.slack.com/archives/CJ5R0GULU/p1558447366042000)

#### Applying these settings

**Note**: when making additions/edits/deletions of these properties to your existing bot agent connections, you MUST restart the bot for the changes to take effect! This means stopping and then starting the bot again via the Operations role in Conversation Builder or via the Enterprise integrations section of an individual bot automation.

