### Context Switching

“Context switching” is the term used to describe how Conversation Builder jumps the consumer back and forth between dialogs.

Every time a consumer enters a new utterance in a conversation, there’s a chance that the utterance will match a new intent and “jump” the consumer out of one dialog and into another for the newly matched intent. When this happens, the new dialog is "pushed" to the top of a virtual "stack" of dialogs, and its dialog flow immediately begins. Once it completes, it is "popped" off the stack, and the consumer is returned to the dialog immediately underneath it in the stack. The previous dialog now tops the stack, and the last interaction that was sent by the bot before leaving the dialog is repeated. You can see this context switching behavior in the following conversation:

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/contextSwitching2.png">

Your ability to redirect, restrict, or prevent this behavior depends on whether the consumer is responding to an open-ended statement **(1)** or a question **(2)**.

 <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/contextSwitching1.png">

When a bot sends an open-ended statement, such as, "Please type your query below," it simply *awaits the consumer's response*. Because it's a statement, not a question, no response conditions can be applied to what the consumer inputs next. As a result, whatever the utterance is, it is processed by the NLU engine to try and find a matching intent and dialog. If one is found, it is then "pushed" to the top of a virtual "stack" of dialogs in progress, and its dialog flow immediately begins.

In contrast to open-ended statements that simply await the consumer's response, questions can have response conditions applied to the consumer's response. Because conditions can be used to immediately redirect the conversation flow, in effect, they can restrict or even prevent context switching from occurring.

{: .important}
If the conversation enters the Fallback dialog and then jumps to another dialog, the consumer isn't returned to the Fallback dialog when that other dialog completes.

#### Altering or preventing context switching

In general, context switching means that the system will remove the dialog at the top of the dialog stack when it completes and return the consumer to the dialog underneath it (which now tops the stack). However, there are a couple of things that can alter or prevent this behavior:

* The dialog that tops the stack can close the conversation.

* The dialog that tops the stack contains a question that uses conditional matching that routes the conversation flow to an "end conversation" interaction.

* The dialog that tops the stack contains a Text (open) question with no routing conditions that just continues to the next interaction.

* The dialog that tops the stack contains the following Pre-Process code:

`botContext.setBotVariable('skipPreviousDialog', 'true', true, false);`

As an example, you might want to add this code to an integration interaction that escalates the conversation (transfers the consumer) to a live agent, to prevent the consumer from being returned to an earlier dialog.
