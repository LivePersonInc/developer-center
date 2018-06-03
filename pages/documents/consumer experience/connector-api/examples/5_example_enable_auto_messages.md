---
title: How to enable a feature
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 64
indicator: both
permalink: enable-feature-example.html

---

The following example illustrates how to enable the auto messages feature upon conversation opening. The Json payload is the same one used to create a new conversation but pay attention to the additional request header.

**Note**: Make sure to pass the required "Client-Properties" request header as per the below example.

### How to enable AUTO_MESSAGES

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Additional Request Header**

| Header | Description | Example |
| :--- | :--- | --- |
| Client-Properties | A JSON string for the client properties which activates AUTO_MESSAGES | { "type": ".ClientProperties", "features": ["AUTO_MESSAGES"] } |

**Example Request Body - JSON Payload - Creating a new conversation**

```json
[
  {
		"kind": "req",
		"id": "1,",
		"type": "userprofile.SetUserProfile",
		"body": {
			"authenticatedData": {
				"lp_sdes": [{
						"type": "ctmrinfo",
						"info": {
							"socialId": "1234567890",
							"ctype": "vip"
						}
					},
					{
						"type": "personal",
						"personal": {
							"firstname": "John",
							"lastname": "Doe",
							"gender": "MALE"
						}
					}
				]
			}
		}
	},
	{
		"kind": "req",
		"id": "2,",
		"type": "cm.ConsumerRequestConversation",
		"body": {
			"ttrDefName": "NORMAL",
			"channelType": "MESSAGING",
			"brandId": "{accountid}"
		}
	}
]
```
