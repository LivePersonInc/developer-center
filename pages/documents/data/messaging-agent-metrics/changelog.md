---
title: Changelog
Keywords:
level1: Documents
level2: Data
level3: Agent Metrics API
order: 231
permalink: data-messaging-agent-metrics-changelog.html
indicator: messaging
---

<div class="subscribe">Working with this API or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/data-messaging-agent-metrics-changelog.html&mode=web&css=post-content" target="_blank">click here to subscribe to any further changes!</a> When this changelog is updated, you'll get a notification straight to your email of choice!</div>

### September 9th, 2017

Several parameters added to the [Agent Status method](data-messaging-interactions-methods-agent-status.html):

| Name   |      Description      |  Type/Value |
|----------|-------------|------|
| currentStatusStartTime | Timestamp for the time the current status was last updated.  |   alphanumeric (yyyyMMddThh:mm:ss.SSS+time zone) |
| currentStatusStartTimeL | Timestamp for the time the current status was last updated.  | Longnumeric |
| currentStatusReasonStartTime | Timestamp for the time the reason for the "AWAY" status was last updated.  |   alphanumeric (yyyyMMddThh:mm:ss.SSS+time zone) |
| currentStatusReasonStartTimeL | Timestamp for the time the reason for the "AWAY" status was last updated.  | Longnumeric |
| agentNickname | The agent's nickname | alphanumeric  |
| currentStatusDuration | The duration of the current status (in Milliseconds) |    Longnumeric  |
| currentStatusReason| The id of the reason for the agent’s "AWAY" status |    alphanumeric  |
| currentStatusReasonDuration | The duration of the reason for the "AWAY" status (in Milliseconds) |    Longnumeric  |
