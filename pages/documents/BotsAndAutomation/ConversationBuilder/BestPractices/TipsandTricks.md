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

### Suggestions for Bot Builders ahead of launch:

#### 1- "Chaos Monkey" Testing = random, unfamiliar user testing the unhappy paths

* Be as disruptive as possible to try and break the flows you have already built.

* **Find the gaps / cracks in your bot now -** _not when it’s in front of all your customers._

* From within any/all intent dialogs deliberate enter gibberish  messages and see how the fallback plays out from this trigger?

    * are you catching answers that are not expected question responses using * patterns and the repeat question approach we have built?

Consider the following scenario:

- If someone unexpectedly jumps to the fallback mid-dialog flow, do you want to try and recognise this when they hit the fallback and offer them a way back to the previous intent dialog?

    - ***Note*** : doing this would require more conditional logic and some code to track and create this functionality.

- maybe we set a "current_consumer_intent" variable at the top of each dialog?

    - eg "current_consumer_intent" = “CARD_ACTIVATION”

- then if they suddenly enter unrecognised utterances mid-dialog which trigger fallback, your fallback dialog can check this variable before decided what contextual message to show?

*if* **current_consumer_intent** has a value 

*then*  
        
    - jump to fallback contextual message and skip known intents menu

        - "I see you were just in “card activation" but I didn’t understand your last message. Would you like to go back to where you were? Or speak to an agent?”

            - "go back to CARD ACTIVATION"

            - "talk to an agent"

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

### NLU

#### How best to program the intents and entities for compound sentences?

E.g.

##### should entities be used for variations of "don’t" “can’t” “won’t” ? 

Will this benefit the system NLU in anyway? What about "cannot" “will not” “do not” variations?

* You don’t have to define variations. During runtime, we expand sentences and process it. Can’t transforms to Cannot

* Do not include I/We/You..

* NLU takes care of compound phrases. It is good to test and tune the matched status from within the domain before using it in a dialog. Testing and tuning the sentence is a good practice.



#### Avoiding False Positives (How to Optimise / Train NLU Intent Detection)

[UPDATE: New document from Ravi here](https://docs.google.com/document/d/1Dw2sXrMmUPWZd-fkV_3vr3b77altwKfHlJKweVcQtmo/edit?usp=sharing)

##### Beware overuse of entities in training phrases

The greater the number of matching entities in a single training phrase, the higher the score level.

Therefore overuse of entities in training phrases for irrelevant information such as greetings or other general terms, will incorrectly inflate the score and lead to false positives.

E.g

The more entities matched in the intent training phrase, the stronger the match. For example, in the training phrase* "ENT_hello I am going ENT_travelling"* if I match both **"ENT_hello"** AND **"ENT_travelling"** it is a stronger match than if I just match **"ENT_travelling"**. Remove entities that are not indicative of the intent to reduce false positives.

Entity matches increase the intent match strength. Sometimes this can result in false positives because of the strength of the entity match. When I tested using the entity match I got a GOOD match at 71%. When I removed the entity match and just used the word "from" in the training phrases I got a FAIR match at 55%.

Further HSBC specific use cases / examples linked here [https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk](https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk)

[https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk](https://docs.google.com/a/liveperson.com/spreadsheets/d/1CWsDLKIA6kRLuge70nPZjjP_n-YkEu5wbu512RSYPAs/edit?disco=AAAAC4Su_Qk)

##### Training Phrases should be one sentence - not many

In intent "Activate a Card" remove text "I think I need to ENT_activate it." from training phrase 

*"I have been unable to use a new ENT_card linked to this account. **I think I need to ENT_activate it.**".*

Training phrase should be one sentence, not multiple. Multiple sentences increase risk of false positive as they provide more opportunity for a wider range of matching.

##### "Stop" Words and their impact on NLU

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

##### Mitigation

Add minimum 2 second delay to each message in a sequence

* Ensure you have a minimum of 2 seconds delay (2000ms) for each interaction within CB where you care about the order (which is 99% of the time always!)

 * This will mean each message added to the UMS queue *should* be at least 2 seconds apart and not be grouped together in a batch that could be delivered out of order.

#### Long messages are broken up into smaller ones - what is the word limit per single message?

320 characters on a word boundary

If you wish to control exactly where within a large block of text the split occurs you can use the following special syntax within a text interaction.

tag::breakWithDelay=2000 

(example in context…)

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_42.png">

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_43.png">

#### "My Quick Reply question is not showing"

*Quick Replies only show a maximum of **3** options when used inside FB Messenger*

#### *Unmatched Phrases Not Showing in Analytics*

##### Reason

When using a Knowledge Base without using any intents in intent builder, analytics does not track the unmatched phrases.

##### Mitigation

Add the following global function

```javascript
function __initConversation(){

   botContext.setBotVariable('__recordUnMatchedPatternPhrases__',true,true,false);

}
```

This function should be called at the start of every conversation processed by your bot automation. Within this function the code sets the flag to recording unmatched pattern phrases.

### Exporting/Importing Domains

#### Can I export from one domain to another?

Yes - you can now "overwrite" the contents of one domain using the CSV intent / entity export CSV files from any other domain.

{: .important}
This is a complete override of the target with the source data - no merge.

### Exporting/Importing Bot Automations from AWS farm to LPPC

#### Can I export a bot automation from AWS Conversation Builder into LPPC Automation tab Conversation Builder inside LE account?

Yes - however you must consider the following caveats.

* If your automation uses domains for intents and entities **_you MUST export/import the domain first from AWS into LPPC version_**

 * *You ***_MUST_*** ensure the domain name remains the same once imported into LPPC ***_BEFORE_*** you import your automation *- otherwise the import will fail to find its expected domain for all linked dialog response intents and they will become disconnected. 	

 * If you ensure the domain exists with the same name, then the import should be able to find and reconnect dialog conditions to the intent at the new location.

 * If you forget, the imported automation will lose any/all response intent connections and you would have to manually rewire them back up to the relevant intents and entities.

##### Process Guide : 

[https://docs.google.com/document/d/1d9rbMetEX4DRKgi85XWCg7LFTT1EW3GTHEhDR4dZTyg/edit#](https://docs.google.com/document/d/1d9rbMetEX4DRKgi85XWCg7LFTT1EW3GTHEhDR4dZTyg/edit#)

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

