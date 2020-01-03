
QUESTIONS

Questions present information to the user---a question that expects a reply of some kind, a list of things to pick from, etc.---and they expect and wait for a user response before executing the next action.

With a question, you can take the user’s response, evaluate it against a condition (i.e., does it match a pattern, an intent, a regular expression, or an exact value?), and then act accordingly. For example, if you ask the user for a 7-digit account number, you’ll likely want to perform a check that the user entered exactly 7 numbers. If the user did, you can then safely pass that value into an API call or perform some other action with it. For some practice at this, try the [Intents tutorial](conversation-builder-getting-started-2-intents.html). (You’ll need to complete [Dialogs and Patterns tutorial](conversation-builder-getting-started-1-dialogs-and-patterns.html) first, as they build on one another.)

Question text and answers can display dynamic values through the use of variables; for help with using variables, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

{: .important}
See [Interaction Basics](conversation-builder-interactions-interaction-basics.html) for important information on whitelisting, guidelines on how to approach channel-specific limitations, and more.

### Sample user answers
Many question types provide a field for entering an example of a user's answer to the question.

<img style="width:700px" src="img/ConvoBuilder/questions_sampleUserAnswer.png">

There is no functionality tied to this field. It's meant to serve as a display-only aid to the bot developer during bot development within Conversation Builder.

### Multiple choice questions
Multiple choice questions let the consumer select an answer from a list of choices.

<img style="width:400px" src="img/ConvoBuilder/questions_mcq1.png">

One powerful feature of multiple choice questions is that the bot can be configured to respond to answers not appearing in the list through the use of [entities](intent-builder-entities.html).

#### Question text

Enter the question to send. The maximum character length is 255.

#### Choices

Enter the answer choices. The number of choices depends on the channel, so check the limitations for the channels in use. (For example, Facebook restricts this to three options.) For each choice, 20 characters or less is recommended.

The user can either enter or select the answers. 

#### Interaction Details settings

Configure the following settings in the Interaction Details dialog box:
- **Display choice as**: Select whether you want to display the choices as buttons (shown above) or quick reply “chips” (shown below).

<img style="width:300px" src="img/ConvoBuilder/questions_mcq2.png">

- **Text Only Fallback > List Style**: Select the list style (1. 2. 3. 4. or a. b. c. d.) to use for channels that support only plain text. In our example, the user can select "Sandals," enter "Sandals," or enter "1."

### Text questions

Text questions expect and wait for a text-based response from the consumer.

<img style="width:325px" src="img/ConvoBuilder/questions_text.png">

With text questions, it’s recommended that you include an example of an expected response, like is done in our example above. This helps to increase the likelihood of a valid response.

#### Question text

Enter the question to send. The maximum character length is 255.

### Button questions

A button question lets you ask a question that expects a simple, short reply and present the consumer with button choices.

<img style="width:400px" src="img/ConvoBuilder/questions_button.png">

Clicking a button can perform an action. For example, if the consumer were to click “Sure!” above, they could be taken to the URL for your feedback form.

#### Question text

Enter the question to send.

#### Button settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Button Label | The button text to be displayed. LiveEngage allows for up to 128 characters, but channel-specific restrictions do exist, so the actual maximum could be shorter. (For example, Facebook only allows for up to 20 characters.) | Required | Sure! |
| Action Type  | If you want the button to be a link that takes the consumer somewhere else, select **Web URL**.<br><br>If you want to use the button to post back a different value other than the button label's value (for example, to post back the number "5" instead of the word "excellent"), select **Postback** (and then enter the data to post (the payload) in the **Callback** field).<br><br>**Postback for Bookmark**, **Phone number**, and **Share** are legacy features that are no longer in use. | Required  | Web URL |
| Webview | This is a legacy feature that's no longer in use. | Not applicable | Not applicable |
| Target | Applies when the Action Type equals “Web URL." Select whether to open the URL in the current window or a new window. | Required | New Window |
| Callback | Enter the data to send back to the bot.<br><br>If you specify a postback value here, in most channels it is sent back to the bot instead of the button label. However, be aware that this depends on the channel in use. Entering the same value for both the button label and the postback value will always work. | Optional | https://www.surveymonkey.com/mysurvey.html |

### Quick Reply questions

A quick reply question lets you ask a question that expects a simple, short reply and present the consumer with choices from which to select. The response choices appear as “chips” beneath the question.

<img style="width:400px" src="img/ConvoBuilder/questions_quickReply1.png">

And the chips disappear once the consumer selects one:

<img style="width:400px" src="img/ConvoBuilder/questions_quickReply2.png">

Details vary by channel. For example, Apple Business Chat does not support Quick Reply, but other channels do, and each behaves slightly differently. As one example, in Facebook Messenger, a Quick Reply question can have a maximum of 13 options. Consult the channel-specific documentation that's discussed [here](conversation-builder-interactions-interaction-basics.html#general-guidelines-and-best-practices).

#### Question settings

Enter the question to send. 

#### Quick Reply settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- |
| Title | The label to be displayed. | Required | Awesome! |
| Type  | Always select "Text." <br><br>The "Location" value currently isn't supported. | Required  | Text |
| Payload | Enter the data to send back to the bot.<br><br>If you specify a postback value here, in most channels it is sent back to the bot instead of the button label. However, be aware that this depends on the channel in use. Entering the same value for both the button label and the postback value will always work. | Optional | Awesome |
| Image URL | Use this field to specify a small image to be displayed to the left of the Quick Reply title. Typically, this setting isn't used unless the image is an emoji or something of a similar nature. | Optional | https://www.mysite.com/images/emoji_smile.jpg |
