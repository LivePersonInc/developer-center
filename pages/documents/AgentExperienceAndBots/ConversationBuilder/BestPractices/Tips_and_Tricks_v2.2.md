---
pagename: Tips and Tricks
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Best Practices
permalink:
indicator: both
---

### How do I show a variable inside a text interaction?

* `{}` used for inserting dynamic values inside text interactions
  * Bot Variable
    * `{$botContext.variableName}`
  * Slot Variable
    * `{$botContext.slot.slotName}`
 * Environment Variable
    * `{$env.variableName}`
 * API Integration custom data values
    * `{apiName.variableName}`

Normal Variable = `{$botContext.**VARIABLE_NAME_GOES_HERE**}`

Slot Variable = `{$botContext.slot.**SLOT_VARIABLE_NAME_GOES_HERE**}`

Environment Variable = `{$env.**ENV_VARIABLE_NAME_GOES_HERE**}`

### How do I add line breaks inside text interaction?

CTRL+ENTER command

**_Note_**: does now when using the the Preview tool inside CBuilder

### What is {$query} for again?

It is special syntax - used during **Response Conditions** for a question where you want to save the response from the consumer into a variable.

### How do I get the bot to close the conversation?

Create text interaction with the special string "LP_CLOSECONVERSATION"

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_0.png">

### How to: Create Reusable "yes" and “no” intents to reuse across dialogs

Rather than having to constantly enter and re-enter patterns inside response conditions  for variations of "yes" or “no”, I recommend building out two specific intents which encompass these.

* Affirmation

* Negative Affirmation

You can wrap all variations that encompass "yes" or “no”. Once done you can create response conditions that match “Response Intents” linked to these and never have to re-enter the same patterns again for these types of questions!

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_1.png"><img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_2.png">

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_3.png"><img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_4.png">

### How do I capture the user response to a question in a variable?

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_5.png">

Would store whatever the user response was to a question in this variable name.

### What is the character limit on a single text interaction before it gets split into 2 parts?

320 characters on word boundary

### Suggestions for Bot Builders ahead of launch:

#### 1- "Troll" the bot! = test the unhappy paths

* Be as disruptive as possible to try and break the flows you have already built.

* **Find the gaps / cracks in your bot now** - _not when it’s in front of all your customers._

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

      -> * jump to fallback contextual message and skip known intents menu

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

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_6.png">

2 - Setup the following interactions

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_7.png">

3 - Ask for confirmation of resolution

4 - Setup Affirmation and Negative Affirmation response intents to capture their answer

Affirmation goes to your interaction where you ask them to enter the next question. In my example that interaction is named "wait for next utterance"

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_8.png">

Negative Affirmation goes to the "happy to help message" which then goes to the **LP_CLOSECONVERSATION** code to end the conversation.

5 - Wire up all your other existing intents to this one dialog flow when they have reached their logical end and you want to ask for confirmation the problem has been resolved.

In my example bot I have two separate intents: billing and balance.

At the end of both these dialogs, the "next interaction" of the final steps directly links to the new “confirm resolution and close” dialog we just built.

E.g.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_9.png">

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_10.png">

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_11.png">

#### Demo

In my example bot I will start the billing flow…

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_12.png">

I say Yes and then after answer is sent from the billing flow, I am pushed into the "confirm resolution" dialog…

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_13.png">

If I say "yes" I can type my utterance for triggering “balance” intent

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_14.png">

Once I complete balance, I send the consumer back to the confirm resolution dialog…

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_15.png">

**Note**: the red line is added to show the end of balance and below is back in the confirm resolution

Now I can type another utterance and allow the system to match me against another known intent and repeat the sequence again…

Or say "no" and we close the conversation

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_16.png">

### How to keep people inside a single dialog flow

#### Why?

Depending on the use case, it might be needed to ensure users do not jump out into other dialogs due to the next utterance, reply matching another intent within the NLU.

At various branching points within certain dialogs, users are asked to answer questions or make choices how to proceed.

Whilst effort can be made to help them pick certain pre-defined options, there is always a possibility that users will just type their needs separately and not pick from menus of buttons or multi-choice answers.

Unless these types of input are caught, they could allow the user to jump from the current flow into the next dialog.

Whilst this may be an OK experience for certain dialogs, others may have specific questions and answers to collect and therefore we need a way to contain them in the current dialog until we have collected answers we need.

#### How?

When asking questions (pink) that specifically await user input, this allows the opportunity to define specific "response conditions" that can either allow/deny non-expected input to jump out into other dialogs.

As an example, this Balance dialog has 2 sequential questions: account number and email address. Both have specific conditions defined to validate the input.

6 digits and valid email address respectively.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_17.png"><img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_18.png">

However, because no "catch all other" condition has been added, if the user types anything other than valid responses, the utterance is evaluated against NLU for matching intents which could jump dialogs. In the below example, nothing matches the response so the **fallback** dialog is invoked. Because **fallback **does not wait for any input, it immediately drops out of the bottom and returns them to the previous dialog…

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_19.png">

If you wanted to prevent this behaviour, the following condition could be added to each question:

Using the * pattern match as **the final condition **will catch any other responses to that question which do not match any of the previous conditions defined.

You can use this conditon to repeat the same question if you desire or redirect anywhere else within the automation if you desire.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_20.png">

### How does CB handle jumping between different intents and dialogs?

#### Background:

Every time the user enters a new utterance in the conversation, this has the chance of matching a new intent and "jumping" you out of one dialog and into another one for the newly matched intent.

**Note**: Depending on if the user’s utterance is in response to

A) open-ended statement

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_21.png">

… or ...

B) specific question type

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_22.png">

will affect your ability to restrict, redirect or prevent this behaviour.

Let’s first look at the scenario A):

In this situation, the bot has presented a text statement: "please type your question" variation and awaits the user’s input.

Because this not being captured in response to a specific (pink) question type, no response conditions can be applied what the user types - **_whatever the utterance is, will be processed by the NLU engine to try and find a matching intent and dialog flow._**

Therefore if a new matching dialog flow is detected, this will be "pushed" onto the top of a virtual “stack” of dialogs in progress…

Take the following bot automation where there are 2 defined intents - balance and billing question.

1. In the first step, the user types an utterance ("balance") to trigger the first intent and dialog...

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_23.png">

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_24.png">*This represents the "stack" of dialogs being tracked by CB. Newest matched intent / dialogs are on the top - removed after completion of the final step *

2) Mid Balance Enquiry dialog, the user types "billing question" utterance This matches the Billing Question intent and dialog, which is immediately **pushed to the top of the stack **The user then see's the steps for that intent...

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_25.png">

3) Once the billing question dialog flow ends, ithe user is returned to the next dialog still on the stack in this case : Balance...

**Note**: The last interaction to be presented before leaving is shown again - in this case the "provide email address" question.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_26.png">

Note: This behaviour allows for many dialogs to stack and then pop as they are completed. In the following example, we start with Balance, then trigger Billing Question and then a specific answer in Billing Question routes us to "Sub Billing" Dialog. After that completes it is removed from the stack, then Billing Question is removed and finally we return to the Balance dialog and see the same interaction before we branched out.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_27.png"><img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_28.png">

#### How can I prevent / alter this behaviour?

* If one of the dialogs added to the stack **ends the conversation** - this should prevent the system falling back to the dialog underneath in the stack.

* If one of the stacked dialogs contains a question type that uses conditional matching to route to an end conversation interaction.

* (TBC) an open question type with no routing conditions that just continues to next interaction, *appears* to block the NLU detection and dialog jumping behaviour - more testing required to confirm 100%

Apart from that, the system will remove any stacked dialogs as they complete and return you to the previous one.

**NOTE**: From March 15th there should be a fix in Production which prevents the above behaviour from happening if you ever trigger the fallback dialog. *Therefore if you jump from fallback to another intent dialog, you should ***_NOT_*** then be dropped back into fallback once the intent dialog is complete.*

Add the following pre-process code to your escalation / transfer to agent action to prevent the above behaviour

botContext.setBotVariable('skipPreviousDialog', 'true',true,false);

#### Demo

[https://youtu.be/vcCuewGgvVE](https://youtu.be/vcCuewGgvVE)

### Agent to Bot Transfer Use Cases

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
13.52.0.0/16 - 13.52.0.0-13.52.255.255
13.56.0.0/16 - 13.56.0.0-13.56.255.255
13.57.0.0/16 - 13.57.0.0-13.57.255.255
18.144.0.0/15 - 18.144.0.0-18.145.255.255
50.18.0.0/16 - 50.18.0.0-50.18.255.255
52.8.0.0/16 - 52.8.0.0-52.8.255.255
52.9.0.0/16 - 52.9.0.0-52.9.255.255
52.52.0.0/15 - 52.52.0.0-52.53.255.255
52.92.48.0/22 - 52.92.48.0-52.92.51.255
52.93.34.56/32 - 52.93.34.56
52.93.34.57/32 - 52.93.34.57
52.93.37.222/32 - 52.93.37.222
52.93.37.223/32 - 52.93.37.223
52.94.12.0/24 - 52.94.12.0-52.94.12.255
52.94.72.0/22 - 52.94.72.0-52.94.75.255
52.94.198.0/28 - 52.94.198.0-52.94.198.15
52.119.176.0/21 - 52.119.176.0-52.119.183.255
52.144.194.192/26 -  52.144.194.192-52.144.194.255
52.219.20.0/22 - 52.219.20.0-52.219.23.255
52.219.24.0/21 - 52.219.24.0-52.219.31.255
54.231.232.0/21 - 54.231.232.0-54.231.239.255
54.239.0.16/28 - 54.239.0.16-54.239.0.31
54.240.198.0/24 - 54.240.198.0-54.240.198.255
54.240.212.0/22 -  54.240.212.0-54.240.215.255
176.32.112.0/21 - 176.32.112.0-176.32.119.255
204.246.160.0/22 - 204.246.160.0-204.246.163.255
205.251.228.0/22 - 205.251.228.0-205.251.231.255
52.94.248.128/28 - 52.94.248.128-52.94.248.143
52.94.249.80/28 - 52.94.249.80-52.94.249.95
52.95.246.0/24 -  52.95.246.0-52.95.246.255
52.95.255.96/28 - 52.95.255.96-52.95.255.111
54.67.0.0/16 - 54.67.0.0-54.67.255.255
54.151.0.0/17 - 54.151.0.0-54.151.127.255
54.153.0.0/17 - 54.153.0.0-54.153.127.255
54.176.0.0/15 - 54.176.0.0-54.177.255.255
54.183.0.0/16 - 54.183.0.0-54.183.255.255
54.193.0.0/16 - 54.193.0.0-54.193.255.255
54.215.0.0/16 -  54.215.0.0-54.215.255.255
54.219.0.0/16 - 54.219.0.0-54.219.255.255
54.241.0.0/16 - 54.241.0.0-54.241.255.255
184.72.0.0/18 - 184.72.0.0-184.72.63.255
184.169.128.0/17 - 184.169.128.0-184.169.255.255
204.236.128.0/18 - 204.236.128.0-204.236.191.255
216.182.236.0/23 - 216.182.236.0-216.182.237.255
```


#### LP Cloud:
```
52.124.128.0/17
54.230.0.0/16
54.239.128.0/18
99.84.0.0/16
205.251.192.0/19
54.239.192.0/19
70.132.0.0/18
13.32.0.0/15
13.224.0.0/14
13.35.0.0/16
204.246.172.0/23
204.246.164.0/22
204.246.168.0/22
71.152.0.0/17
216.137.32.0/19
205.251.249.0/24
99.86.0.0/16
52.46.0.0/18
52.84.0.0/15
64.252.64.0/18
204.246.174.0/23
64.252.128.0/18
205.251.254.0/24
143.204.0.0/16
205.251.252.0/23
204.246.176.0/20
13.249.0.0/16
54.240.128.0/18
205.251.250.0/23
52.222.128.0/17
54.182.0.0/16
54.192.0.0/16
```

#### Debugging login failures

If the bot connector is online but the LE connection status is not up, there is likely a login issue.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/BestPractices/image_29.png">

You can glean some information from Kibana by using this query param:

`&#123;&#123;Account Id&#125;&#125; AND "Login Failed" AND &#123;&#123;Bot login name&#125;&#125;&#125;&#125;`

### Avoiding False Positives (How to Optimise / Train NLU Intent Detection)

#### Beware overuse of entities in training phrases

The greater the number of matching entities in a single training phrase, the higher the score level.

Therefore overuse of entities in training phrases for irrelevant information such as greetings or other general terms, will incorrectly inflate the score and lead to false positives.

E.g

The more entities matched in the intent training phrase, the stronger the match. For example, in the training phrase* "ENT_hello I am going ENT_travelling"* if I match both **"ENT_hello"** AND **"ENT_travelling"** it is a stronger match than if I just match **"ENT_travelling"**. Remove entities that are not indicative of the intent to reduce false positives.

Entity matches increase the intent match strength. Sometimes this can result in false positives because of the strength of the entity match. When I tested using the entity match I got a GOOD match at 71%. When I removed the entity match and just used the word "from" in the training phrases I got a FAIR match at 55%.

Further HSBC specific use cases / examples linked here [https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk](https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk)

[https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk](https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk)

#### Training Phrases should be one sentence - not many

In intent "Activate a Card" remove text "I think I need to ENT_activate it." from training phrase "I have been unable to use a new ENT_card linked to this account. I think I need to ENT_activate it.".

Training phrase should be one sentence, not multiple. Multiple sentences increase risk of false positive as they provide more opportunity for a wider range of matching.

#### "Stop" Words and their impact on NLU

Below is stop word list. When we use training sentences these words may not carry weight in comparison to words that are not in this list.  

```
"a"
"about"
"above"
"after"
"again"
"against"
"all"
"am"
"an"
"and"
"any"
"are"
"as"
"at"
"be"
"because"
"been"
"before"
"being"
"below"
"between"
"both"
"but"
"by"
"I"
"can"
"cannot"
"could"
"did"
"do"
"does"
"doing"
"down"
"during"
"each"
"few"
"for"
"from"
"further"
"had"
"has"
"have"
"having"
"he"
"her"
"here"
"here's"
"hers"
"herself"
"him"
"himself"
"his"
"how"
"how's"
"i"
"if"
"in"
"into"
"is"
"isn't"
"it"
"its"
"itself"
"me"
"more"
"most"
"my"
"myself"
"no"
"nor"
"of"
"off"
"on"
"once"
"only"
"or"
"other"
"ought"
"our"
"ours
"ourselves"
"out"
"over"
"own"
"same"
"she"
"should"
"so"
"some"
"such"
"than"
"that"
"the"
"their"
"theirs"
"them"
"themselves"
"then"
"there"
"these"
"they"
"this"
"those"
"through"
"to"
"too"
"under"
"until"
"up"
"very"
"was"
"we"
"were"
"what"
"when"
"where"
"which"
"while"
"who"
"whom"
"why"
"with"
"would"
"you"
"your"
"yours"
"yourself"
"yourselves"
```


### Exporting/Importing Domains

#### Can I export from one domain to another?

Yes - you can now "overwrite" the contents of one domain using the CSV intent / entity export CSV files from any other domain.

**PLEASE NOTE:** This is a complete override of the target with the source data - no merge.

### Exporting/Importing Bot Automations from AWS farm to LPPC

#### Can I export a bot automation from AWS Conversation Builder into LPPC Automation tab Conversation Builder inside LE account?

Yes - however you must consider the following caveats.

* If your automation uses domains for intents and entities **_you MUST export/import the domain first from AWS into LPPC version_**

* You _MUST_ ensure the name remains the same once imported into LPPC ***_BEFORE_*** you import your automation *- otherwise the import will fail to find its expected domain for all linked dialog response intents and they will become disconnected.

* If you ensure the domain exists with the same name, then the import should be able to find and reconnect dialog conditions to the intents at the new location.

* If you forget, the imported automation will loose any/all response intent connections and you would have to manually rewire them back up to the relevant intents and entities.

### Process Guide :

[https://docs.google.com/document/d/1d9rbMetEX4DRKgi85XWCg7LFTT1EW3GTHEhDR4dZTyg/edit#](https://docs.google.com/document/d/1d9rbMetEX4DRKgi85XWCg7LFTT1EW3GTHEhDR4dZTyg/edit#)

### Roles and Permissions

[https://docs.google.com/spreadsheets/d/1C-SXlGbGzs9Pj7sM6r2sDP-pNzqyH6_wRN7qJ-Zk2oI/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1C-SXlGbGzs9Pj7sM6r2sDP-pNzqyH6_wRN7qJ-Zk2oI/edit?usp=sharing)
