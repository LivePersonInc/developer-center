---
title: Submit Survey Data
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 230
permalink: agent-submit-survey.html

---

This method submits the survey data.

### Request

| Method | URL |
| :--- | :--- |
| PUT | https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/survey?v=1&NC=true | 

*Note: Currently PUT is supported using a POST method with the "X-HTTP-Method-Override=PUT" header.* 

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization| Bearer {bearer-from-login} |
| Content-Type | application/json |
| Accept | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Body Parameters**

The following parameters can be used in the XML body:

| Name | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| question | Contains answer elements for the survey's question with this ID. | | |
| answer | Given answer for the container question. | alphanumeric | If the question is a multiselection type (checkbox) it can contain more than one answer. |

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |


