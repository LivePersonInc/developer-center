---
pagename: Interaction Basics
redirect_from:
  - conversation-builder-conversation-builder-interactions.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-interaction-basics.html
indicator: both
---

### Interaction categories
There are four, general categories of interactions: 

- **User Says**: User Says interactions are how dialogs are initially triggered, so most dialogs start with a User Says interaction (fallback dialogs work differently). The user starts things off by supplying some user input - a message or a question. In response, the bot tries to match the user input with a pattern or intent that’s specified in a User Says interaction in one of its dialogs. If a match is found, that dialog is triggered, and its flow begins. User Says interactions are sometimes called “dialog starters.” For more on User Says, see [here](conversation-builder-interactions-user-says.html).

- **Statements**: Statements simply display information and then execute the next action. They don’t expect or wait for a user response. For more on statements, see [here](conversation-builder-interactions-statements.html). 

- **Questions**: Questions present information to the user (a text-based question, a list of things to pick from, etc.), and they expect and wait for a user response before executing the next action. In a question interaction, you can define conditions that evaluate the user’s response against a set of criteria. If a condition is met, its next action is then performed. For example, if the user enters a valid email address, then an email could be sent. For more on questions, see [here](conversation-builder-interactions-questions.html).

- **Integrations**: Integrations make programmatic (API) calls to retrieve or post data to external systems and/or to perform actions. Integrations simply perform their work and then execute the next action. However, if the integration retrieves data, that data can be stored in custom fields, so you can use it in subsequent interactions. Integrations are similar to questions in that you can define conditions that each perform different next actions (based on which condition is met). One common use for this is to check whether the integration call was a success or failure and then to execute a next action that’s appropriate. For more on integrations, see [here](conversation-builder-interactions-integrations.html).

### Whitelisting
The domains in all URLs for images, videos, audio files, and button links used in interactions must be whitelisted. Contact your LivePerson representative to assist with this.

For Facebook in particular, whitelisting must be done in two places: on the LivePerson side and within Facebook itself. The latter must be performed by the owner of the Facebook page.

### General guidelines and best practices
One of the goals and challenges in developing interactions is creating a unified implementation and consumer experience across channels. When working with structured content in particular, LivePerson recommends that you find the "common denominator" across mobile messaging, web messaging, and Facebook Messenger with respect to a given element's attributes. For example, in a [Structured question](conversation-builder-interactions-questions.html#structured-questions), LiveEngage allows up to 128 characters for the button label, but Facebook does not allow more than 20 characters. Depending on your implementation, constraints like this might play a role.

*For details on constraints like this*, see the best practices information that's found [here](https://developers.liveperson.com/facebook-messenger-templates-best-practices.html) in the Rich Messaging section of this LivePerson developers' site, and refer to the [Messaging channels](https://knowledge.liveperson.com/messaging-channels-messaging-connectors-overview.html) section in the LivePerson Knowledge Center.

{: .important}
Your implementation should meet LiveEngage requirements and those of the specific channels in use.

#### Images

As long as the image is [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting), it will be sent to the consumer. Provide high-resolution images in the appropriate format: JPEG for photos, PNG for bitmap/raster artwork. Make sure the images are interesting and aesthetically pleasing, and verify their quality before use. Keep the images as small in size as possible, so they load quickly.

The Apple developers' site provides some good, general guidelines regarding resolution, size, optimization, and more; you can find this [here](https://developer.apple.com/design/human-interface-guidelines/business-chat/interactive-messages/about-interactive-messages/#images).

### Limitations

The types of text that you can send in a Conversation Builder interaction vary depending if you are building a bot for **chat** or for **messaging**.

**Messaging** only allows plain text to be sent.

**Chat** allows for plain text as well as a subset of HTML limited to the anchor, paragraph and linebreak tags.

* `<a href=""></a>`
* `<p></p>`
* `<br>`

### Add an interaction
**To add a new interaction to the end of the dialog**

- Click <img style="width:100px" src="img/ConvoBuilder/btn_newInteraction.png"> , which appears below the last interaction, and then select the interaction icon from the toolbar that appears.

    This adds the interaction as the last unless you added a User Says interaction, which is always inserted at the start of the dialog.

**To add a new interaction between two interactions**

- Select the interaction that should precede the one you want to add (to highlight it), and then select the appropriate icon in the Interactions panel on the left.

    This inserts the interaction after the one you selected unless you inserted a User Says interaction, which is always inserted at the start of the dialog.

### Display variables in interactions

* `{}` is used for inserting dynamic values inside of interactions

  * [Bot Variable](conversation-builder-variables-slots.html#variables): `{$botContext.botVariableName}`

  * [Slot Variable](conversation-builder-variables-slots.html#slots): `{$botContext.slot.slotName}`

  * [Environment Variable](conversation-builder-best-practices-using-environment-variables.html): `{$env.envVariableName}`

  * [API Integration](conversation-builder-integrations-api-integrations.html) custom data values: `{apiName.variableName}`

### Format text
#### Line Breaks
CTRL+ENTER - Hold control and hit enter/return.

{: .important}
This does not render when using the the Preview tool inside Conversation Builder. You will not see line breaks in the preview tool.

#### Character Limit

One single text interaction has a limit of 320 characters on word boundary before it gets split into 2 parts.

#### Break point within a large block of text

Add the following special tag inline inside your text interaction to force a break into 2 separate blocks of text.

`tag::breakWithDelay=1000`

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_8.png">

{: .important}
The delay value is in milliseconds. 1000 = 1 second.

### Save changes
Some but not all changes are automatically saved after you make them. As a general rule, always do a manual save after making changes.

**To save changes to an interaction**

1. Select the interaction.
2. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> in its upper-right corner, and select **Save** from the menu that appears.

### Move an interaction
You can move any type of interaction except a User Says interaction. User Says interactions always stay at the start of dialogs.

**To move an interaction within a dialog**

1. Select the interaction.
2. Move your mouse over its upper-left corner until <img style="width:20px" src="img/ConvoBuilder/icon_interactionMove.png"> (Move icon) appears.
    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/interaction_moveExample.png">
3. Click, drag, and drop the interaction in the desired location.

**To move an interaction to a new dialog**

1. Select the interaction.
2. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> in its upper-right corner, and select **Move** from the menu that appears.
3. In the dialog box, select the destination dialog.
    Selecting the current dialog moves the interaction to its end. Selecting a different dialog moves it to the end of that dialog.

### Copy an interaction
You can copy any type of interaction except a User Says interaction. A dialog can only have one User Says interaction.

**To copy an interaction**

1. Select the interaction.
2. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> in its upper-right corner, and select **Copy** from the menu that appears.
    The copy is added directly beneath the original. (You can [move](conversation-builder-interactions-interaction-basics.html#move-an-interaction) it if desired.) The copy is given the same name as the original but with “_copy” appended.
3. Change the name of the copy as appropriate.

### Disable an interaction
A disabled interaction is ignored in a dialog flow. Consider disabling an interaction as an alternative to deleting it (deletion is non-recoverable). Disabling can be particularly useful during testing, for example, when testing two different variants of an interaction.

**To disable an interaction**

1. Select the interaction, and click <img style="width:30px" src="img/ConvoBuilder/icon_interactionDetails.png"> (Interaction Details).
    This displays the Interaction Details dialog box.
2. Click the **Settings** tab, and then click the **Enabled** slider to turn it to the off position.

### Delete an interaction
Deleting an interaction is a non-recoverable action, so consider disabling the interaction as an alternative.

**To delete an interaction**

1. Select the interaction.
2. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> in its upper-right corner, and select **Delete** from the menu that appears.
3. Click **Continue** to confirm the deletion.