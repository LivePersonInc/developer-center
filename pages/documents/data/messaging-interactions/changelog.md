---
title: Changelog
Keywords:
level1: Documents
level2: Data
level3: Messaging Interactions API
order: 231
permalink: data-messaging-interactions-changelog.html
indicator: messaging
---

<div class="subscribe">Working with this API or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/data-messaging-interactions-changelog.html&mode=web&css=post-content" target="_blank">click here to subscribe to any further changes!</a> When this changelog is updated, you'll get a notification straight to your email of choice!</div>

### September 9th, 2017

Added the following parameters to the [Conversations] method:

*Context Data*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
rawMetadata       | Raw meta data of context information about a consumer message in a json format.   | string|
structuredMetadata       | An array of structured metadata including both context data about a consumer message and an action reason in case of escalation   | Array `<StructuredMetadata>`|

*Structured Metadata*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
botResponse       | Container of structured context data about a consumer message   | container|
actionReason       | Contains information about the action's reason    | container|

*BotResponse*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
externalConversationId       | External platform conversation identifier.   | string|
businessCases       | The topic or business case of the conversation. In WVA this data is stored in capability field.   | Array `<String>`|
intents       | List of intents identified for a consumer message   | Array `<Intent>`|

*Intent*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
id       | Intent id.   | string|
name       | Intent name.   | string|
confidence       | Normalized intent confidence level (low, medium, high).   | string|
confidenceScore       | Intent confidence level value as calculated by the integrated platform.   | double|

*Action Reason*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
reason       | The reason behind an action that was taken by a bot or an agent, currently the action refers to escalation or transfer   | string|
