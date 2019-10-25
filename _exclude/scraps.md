


### Keep the consumer in the current dialog

**DRAFT - please skip this section**
At branching points within a dialog, the consumer is asked to answer questions or make choices about how to proceed. Depending on the goal of the bot, you might need to ensure that the consumer's next utterance doesn't jump the consumer out into another dialog due to the NLU matching the utterance to another intent. Sometimes jumping to another dialog is desirable, but other times it isn't. For example, you might need the consumer to answer a specific question, so you need a way to keep the consumer in the current dialog until that's done.

You can help to keep the consumer in the current dialog by offering predefined options in a menu of buttons or predefined choices to a multiple-choice question. However, there's no guarantee that the consumer won't ignore these and type a response of their own. This means you need a way to handle any other response.

To solve this problem, you can create a second Response Match & Actions set....

**TO BE ADDED**