---
title: Transfer a Chat
redirect_from:
  - agent-transfer-chat.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 210
permalink: chat-agent-api-methods-transfer-a-chat.html

indicator: chat
---

This method transfers a chat from an agent to a specific skill or agent.

**Note: before using this method, it is recommended to use the [Retrieve Available Skills method](agent-chat-agent-retrieve-skills.html){:target="_blank"}. This will allow you to make sure that you're transferring the chat to a skill that's currently available. Transferring the chat to a skill that is not available, will result in an error**.

### Request

| Method | URL |
| :--- | :--- |
| POST | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/transfer?v=1&NC=true  |

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

You must pass either agent ID or skill ID to transfer the chat.

*Note: If both parameters are stated, the agent ID will be used, and the skill ID will be ignored.*

The following parameters can be used in the XML body:

| Name | Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| skill | The skill ID to which the chat will be transferred. | numeric | |
| agent | The agent ID to which the chat will be transferred. | numeric | |
| text | Optional message from the current agent. | alphanumeric | These lines are only available to an agent to whom the chat was transferred and will not be seen by the visitor. |

Request body example for JSON (skill):

    {
        "transfer": {
            "skill":
                    {
                      "id": 2
                  }
              ,
        "text" : "I think this person needs some help from you."
        }
    }

Request body example for JSON (agent):

    {
          "transfer": {
                "agent":
                          {
                              "id": 6
                          }
                ,
                "text" : "I think this person needs some help from you."
                }
    }

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |
