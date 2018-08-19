---
pagename: Engagement Attributes
redirect_from:
  - data-messaging-interactions-appendix.html
sitesection: Documents
categoryname: Data
documentname: Messaging Interactions API

order: 32
permalink: messaging-interactions-api-engagement-attributes.html

indicator: messaging
---
Engagement Attributes allow a brand to communicate events, for example, purchases, visitor login, shopping cart abandonment etc., from the webpage into LiveEngage. This section describes the data retrieved in the response body. All engagement attribute values are of unlimited length (up to 50K chars).

The two versions of this API support Engagement Attributes in different ways:

v1 - will allow to retrieve authenticated engagement attributes only and their attribute type will be alphanumeric.

v2 - will allow to retrieve both authenticated & unauthenticated engagement attributes and their type will be the defined type for the engagement attribute in question.

###  customerInfo

| Name            | Description                        | Type/Value |
| :---------      | :---------------                   | :----------|
| serverTimeStamp | Event time stamp.  | long – epoch time in milliseconds|
| customerStatus  | Customer status- will be matched against customer status entity name. Case insensitive.|alphanumeric|
| customerType    | Customer type - will be matched against customer type entity name. Case insensitive. | alphanumeric|
| balance         | The current balance of the customer. | v1- alphanumeric, v2- double|
| currency        | Currency code. | alphanumeric|
| customerId      | The customer ID. | alphanumeric|
| socialId        | The social ID of your choice: Facebook, Twitter etc. | alphanumeric|
| imei            | Unique phone identifier.   | alphanumeric|
| userName        | Nickname or username of a consumer. | alphanumeric|
| accountName     | Name of the company or account.| alphanumeric|
| role            | Role title of the consumer within their organization. | alphanumeric|
| lastPaymentDate | The customer's last payment date. This consists of 3 integer fields: Year, month, and day. | JSON : { "year": 2011, "month": 3, "day": 21}|
| registrationDate| The customer's registration date. This consists of 3 integer fields: Year, month, and day. | JSON : { "year": 2011, "month": 3, "day": 21}|
| companySize     | The company size. |v1- alphanumeric, v2- int|
| accountName     | A nickname for the account for B2B like the salesforce account name. | alphanumeric|
| companyBranch   | The branch of the company. | alphanumeric | |
| storeZipCode    | The zip code of the store. | alphanumeric|
| storeNumber     | The number of the store.| alphanumeric|
| loginStatus     | Login status. | v1- alphanumeric, v2- int|

###  personalInfo

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| name            | Personal name.         | alphanumeric|
| surname         | Surname.               | alphanumeric|
| gender          | Visitor's gender.      | alphanumeric|
| company         | Visitor's company.     | alphanumeric|
| customerAge     | Year of birth. For calculating age. | alphanumeric|
| contacts        | Container of personalContact| alphanumeric|
| email           | Visitor email.         | alphanumeric|
| phone           | Visitor phone number.  | alphanumeric|
| language        | Visitor language.      | alphanumeric|

### cartStatus (Cart update)

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| total           | Total cart value.      | double |
| currency        | Currency code.         | alphanumeric|
| numItems        | Number of items in cart. | int|
| products        | List of products       | container|
| quantity     | Number of products. | int|
| product        | Contains information about the product| container|
| name           | Product name.     | alphanumeric|
| category           | Product category.  | alphanumeric|
| sku        | Unique product ID identifier in consumer database.    | alphanumeric|
| price        | Product price.    | double|

### purchase (Transaction)

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| total           | Total amount of purchase..      | double |
| currency        | Currency code.         | alphanumeric|
| orderId         | Purchase order ID.| alphanumeric|
| cart            | Information about the cart status (detailed format - link to cart status)      | container|


### marketingCampaignInfo (Marketing Source)

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| originatingChannel           | Channel which originated the campaign.     | int |
| affiliate        | Affiliate.        | alphanumeric|
| campaignId        |Unique identifier of the campaign.| alphanumeric|

### searchContent (Searched Content)

 | Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| keywords           | Array of the search keywords     | array, alphanumeric |

### viewedProduct (viewedProduct)

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| products        | List of products.   | container |
| quantity     | Number of products. | int|
| currency        | Currency code.         | alphanumeric|
| product        | Contains information about the product| container|
| name           | Product name.     | alphanumeric|
| category           | Product category.  | alphanumeric|
| sku        | Unique product ID identifier in consumer database.    | alphanumeric|
| price        | Product price.    | double|

### visitorError

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| contextId        | Error context ID (from the customer).   | alphanumeric |
| message     | Error message. | alphanumeric|
| code        |Error code.    | alphanumeric|
| level        | Error severity level.| long|
| resolved           | Indication whether the error was resolved.    | boolean|

### lead

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| topic        | Lead topic.  | alphanumeric |
| value     | Lead value. | double|
| currency        | Currency code.    | alphanumeric|
| leadId        | Unique identifier of the lead in your system.| alphanumeric|

### serviceActivity

| Name            | Description            | Type/Value |
| :---------      | :---------------       | :----------|
| serverTimeStamp | Event time stamp.      | long – epoch time in milliseconds|
| topic        | Topic of service activity.  | alphanumeric |
| status     | Status of service activity. | int|
| category        | Category of service activity.   | alphanumeric|
| serviceId        | Unique service identifier.| alphanumeric|


**JSON Example (including engagement attributes)**

```

 {
	"_metadata": {
		"count": 1,
		"self": {
			"rel": "self",
			"href": "https://localhost:8082/messaging_history/api/account/qa51680169/conversations/search?limit=50&offset=0"
		},
		"shardsStatusResult": {
			"partialResult": false
		}
	},
	"conversationHistoryRecords": [
		{
			"info": {
				"startTime": "2016-08-29 14:30:24.565+0000",
				"startTimeL": 1472481024565,
				"endTime": "undefined",
				"endTimeL": -1,
				"duration": 78970,
				"conversationId": "e5c58e49-e4a5-40a8-8a18-d6580d1d5630",
				"brandId": "qa26409991",
				"latestAgentId": "3677470410",
				"latestAgentNickname": "michal@lp.com",
				"latestAgentFullName": "michal@lp.com",
				"latestAgentLoginName": "michal@lp.com",
				"agentDeleted": false,
				"latestSkillId": -1,
				"latestSkillName": "Unassigned",
				"source": "APP",
				"closeReason": "AGENT",
				"closeReasonDescription": "MANUAL_CLOSE",
				"mcs": 67,
				"alertedMCS": 1,
				"status": "OPEN",
				"firstConversation": false,
				"csatRate": 5,
				"device": "undefined",
				"browser": "chrome",
				"operatingSystem": "NA",
				"latestAgentGroupId": -1,
				"latestAgentGroupName": "Unassigned",
				"latestQueueState": "ACTIVE",
				"isPartial": false
			},
			"campaign": {
				"campaignEngagementId": "2330596212",
				"campaignEngagementName": "Engagement-123",
				"campaignId": "2266771712",
				"campaignName": "Live_Chat_on_your_site",
				"goalId": "2266719412",
				"goalName": "Interact with visitors",
				"engagementAgentNote": "agent-note-test-messaging",
				"engagementSource": "WEB_SITE",
				"visitorBehaviorId": "2379540212",
				"visitorBehaviorName": "someVisitorBehavior",
				"engagementApplicationId": "28879660-84fd-4cd8-a1d7-ba3247bdb252",
				"engagementApplicationName": "Some Mobile App Test",
				"engagementApplicationTypeId": "92274cfd-29e7-4d94-a013-0646212d8075",
				"engagementApplicationTypeName": "Mobile App",
				"visitorProfileId": "2286779312",
				"visitorProfileName": "All visitors",
				"lobId": 2389848512,
				"lobName": "lob_123",
				"locationId": "2266779612",
				"locationName": "Entire site",
				"profileSystemDefault": true,
				"behaviorSystemDefault": false
			},
			"messageRecords": [
				{
					"type": "TEXT_PLAIN",
					"messageData": {
						"msg": {
							"text": "Hi there #4"
						}
					},
					"messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
					"seq": 0,
					"dialogId": "undefined",
					"participantId": "f92c9890-2c95-428b-8a32-083528620d31",
					"source": "APP",
					"time": "2016-08-29 15:14:19.564+0000",
					"timeL": 1472483659564,
					"device": "undefined",
					"sentBy": "Consumer"
				},
				{
					"type": "TEXT_PLAIN",
					"messageData": {
						"msg": {
							"text": "Hi there, dear consumer!"
						}
					},
					"messageId": "ms::conv:e5c58e49-e4a5-4038-8b18-d6580d1d5630::msg:0",
					"seq": 1,
					"dialogId": "undefined",
					"participantId": "3677470410",
					"source": "APP",
					"time": "2016-08-29 15:14:20.569+0000",
					"timeL": 1472483659564,
					"device": "undefined",
					"sentBy": "Agent",
					"contextData": {
						"rawMetadata": "[{\"type\":\"BotResponse\",\"intents\":[{\"id\":\"some intent identifier\",\"confidence\":\"MEDIUM\",\"confidenceScore\":0.753}],\"externalConversationId\":\"conversation identifier\",\"businessCases\":[\"business case name\"]},{\"type\":\"ActionReason\",\"reason\":\"some reason\",\"reasonId\":\"some reason Id\"}]",
						"structuredMetadata": [
							{
								"botResponse": {
									"externalConversationId": "conversation identifier",
									"businessCases": [
										"business case name"
									],
									"intents": [
										{
											"id": "some intent identifier",
											"confidence": "MEDIUM",
											"confidenceScore": 0.753
										}
									]
								}
							},
							{
								"actionReason": {
									"reason": "some reason"
								}
							}
						]
					}
				},
				{
					"type": "TEXT_PLAIN",
					"messageData": {
						"msg": {
							"text": "I love your service"
						}
					},
					"messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:2",
					"seq": 2,
					"dialogId": "undefined",
					"participantId": "f92c9890-2c95-428b-8a32-083528620d31",
					"source": "APP",
					"time": "2016-08-29 15:15:42.568+0000",
					"timeL": 1472483742568,
					"device": "undefined",
					"sentBy": "Consumer"
				},
				{
					"type": "RICH_CONTENT",
					"messageData": {
						"richContent": {
							"content": "{\"type\":\"vertical\",\"elements\":[{\"type\":\"image\",\"url\":\"https://media.giphy.com/media/3oKGzayyPJGE7xuytO/giphy.gif\",\"tooltip\":\"image tooltip\",\"click\":{\"metadata\":[{\"type\":\"ExternalId\",\"id\":\"123\"}],\"actions\":[{\"type\":\"navigate\",\"lo\":-73.9654,\"la\":40.7829},{\"type\":\"publishText\",\"text\":\"Manhaten\"}]}},{\"type\":\"text\",\"text\":\"Now on sale!\"},{\"type\":\"image\",\"url\":\"https://media.giphy.com/media/xT9IgsjDkpectclUI0/giphy.gif\",\"tooltip\":\"image tooltip\",\"click\":{\"metadata\":[{\"type\":\"ExternalId\",\"id\":\"123\"}],\"actions\":[{\"type\":\"navigate\",\"lo\":-73.9654,\"la\":40.7829},{\"type\":\"publishText\",\"text\":\"Manhaten\"}]}}]}"
						}
					},
					"messageId": "ms::conv:cd5926e0-5b57-4c82-85c5-9c95f88263a1::msg:8",
					"seq": 3,
					"dialogId": "undefined",
					"participantId": "2198186612",
					"source": "APP",
					"time": "2017-10-24 10:24:52.962+0000",
					"timeL": 1508840692962,
					"device": "undefined",
					"sentBy": "Agent"
				}
			],
			"agentParticipants": [
				{
					"agentFullName": "michal@lp.com",
					"agentNickname": "michal@lp.com",
					"agentLoginName": "michal@lp.com",
					"agentId": "3677470410",
					"userType": "1",
					"userTypeName": "Human",
					"role": "AGENT",
					"agentGroupName": "Unassigned",
					"agentGroupId": -1,
					"time": "2016-08-29 15:14:05.005+0000",
					"timeL": 1472483645005,
					"permission": "ASSIGNED_AGENT"
				}
			],
			"consumerParticipant": [
				{
					"participantId": "f92c9890-2c95-428b-8a32-083528620d31",
					"firstName": "Visitor",
					"lastName": "Test",
					"token": "undefined",
					"email": "undefined",
					"phone": "0",
					"avatarURL": "undefined",
					"time": "2016-08-29 14:30:24.573+0000",
					"timeL": 1472481024573,
					"consumerName": "Visitor"
				}
			],
			"transfers": [
				{
					"timeL": 1498127364726,
					"time": "2017-06-22 10:29:24.726+0000",
					"assignedAgentId": "null",
					"targetSkillId": 2,
					"targetSkillName": "cats",
					"reason": "Skill",
					"by": "196875613",
					"sourceSkillId": -1,
					"sourceSkillName": "Unassigned",
					"sourceAgentId": "196875613",
					"sourceAgentFullName": "michal1",
					"sourceAgentLoginName": "michal1",
					"sourceAgentNickname": "michal1"
				},
				{
					"timeL": 1498127562332,
					"time": "2017-06-22 10:32:42.332+0000",
					"assignedAgentId": "null",
					"targetSkillId": 3,
					"targetSkillName": "lpsocial",
					"reason": "Skill",
					"by": "7",
					"sourceSkillId": 2,
					"sourceSkillName": "cats",
					"sourceAgentId": "7",
					"sourceAgentFullName": "michal",
					"sourceAgentLoginName": "michal@lp.com",
					"sourceAgentNickname": "michal"
				}
			],
			"interactions": [
				{
					"assignedAgentId": "3677470410",
					"assignedAgentFullName": "michal@lp.com",
					"assignedAgentLoginName": "michal@lp.com",
					"assignedAgentNickname": "michal@lp.com",
					"interactionTimeL": 1472483644999,
					"interactionTime": "2016-08-29 15:14:04.999+0000",
					"interactiveSequence": 1
				}
			],
			"messageScore": [
				{
					"messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
					"messageRawScore": 0,
					"mcs": 0,
					"time": "2016-08-29 15:14:26.314+0000",
					"timeL": 1472483666314
				},
				{
					"messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:2",
					"messageRawScore": 0,
					"mcs": 0,
					"time": "2016-08-29 15:15:49.225+0000",
					"timeL": 1472483749225
				}
			],
			"messageStatuses": [
				{
					"messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
					"seq": 0,
					"time": "2016-08-29 15:14:19.626+0000",
					"timeL": 1472483659626,
					"participantId": "3677470410",
					"participantType": "Agent",
					"messageDeliveryStatus": "ACCEPT"
				},
				{
					"messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:2",
					"seq": 2,
					"time": "2016-08-29 15:15:42.609+0000",
					"timeL": 1472483742609,
					"participantId": "3677470410",
					"participantType": "Agent",
					"messageDeliveryStatus": "ACCEPT"
				},
				{
					"messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
					"seq": 0,
					"time": "2016-08-29 15:15:58.272+0000",
					"timeL": 1472483758272,
					"participantId": "3677470410",
					"participantType": "Agent",
					"messageDeliveryStatus": "READ"
				}
			],
			"conversationSurveys": [
				{
					"surveyType": "Satisfaction",
					"surveyStatus": "FILLED",
					"surveyData": [
						{
							"question": "Confirm Resolution",
							"answer": "Yes"
						}
					]
				}
			],
			"coBrowseSessions": {
				"coBrowseSessionsList": [
					{
						"sessionId": "22207277:37084513__1d165aa8-9d37-4e40-baf8-06f5e80f6cd2_1506325721990",
						"startTime": "2017-09-25 07:48:42.000+0000",
						"startTimeL": 1506325722000,
						"endTime": "2017-09-25 07:50:01.789+0000",
						"endTimeL": 1506325801789,
						"endReason": "AGENT",
						"duration": 79789,
						"type": "inApp",
						"agentId": "37084513",
						"interactive": true
					},
					{
						"sessionId": "22207277:37084513__1d165aa8-9d37-4e40-baf8-06f5e80f6cd2_1506326147649",
						"startTime": "2017-09-25 07:55:58.000+0000",
						"startTimeL": 1506326158000,
						"endTime": "2017-09-25 07:56:53.422+0000",
						"endTimeL": 1506326213422,
						"endReason": "VISITOR",
						"duration": 55422,
						"type": "inApp",
						"capabilities": [
							"CONSUMER_VIDEO_CONNECTION",
							"CONSUMER_VOICE_CONNECTION",
							"AGENT_APP_CONTROL"
						],
						"agentId": "37084513",
						"interactive": true
					}
				]
			},
			"sdes": {
				"events": [
					{
						"customerInfo": {
							"serverTimeStamp": "1497871291351",
							"customerInfo": {
								"customerId": "12345678",
								"companyBranch": "dummyCompanyBranch"
							}
						},
						"sdeType": "CUSTOMER_INFO",
						"serverTimeStamp": "1497871291351"
					},
					{
						"personalInfo": {
							"serverTimeStamp": "1497871291351",
							"personalInfo": {
								"name": "dummyName",
								"surname": "dummySurename",
								"contacts": [
									{
										"personalContact": {
											"email": "dummy@mail.com",
											"phone": "12345678"
										}
									}
								]
							}
						},
						"sdeType": "PERSONAL_INFO",
						"serverTimeStamp": "1497871291351"
					}
				]
			},
			"unAuthSdes": {
				"events": [
					{
						"cartStatus": {
							"serverTimeStamp": "1528628536879",
							"total": "11.7",
							"currency": "USD",
							"numItems": "6",
							"products": [
								{
									"quantity": "1",
									"product": {
										"name": "prod1",
										"category": "category",
										"sku": "sku",
										"price": "7.8"
									}
								}
							]
						},
						"serverTimeStamp": "1528628536879",
						"sdeType": "CART_STATUS",
						"isAuthenticated": false
					},
					{
						"marketingCampaignInfo": {
							"serverTimeStamp": "1528628536880",
							"marketingCampaignInfo": {
								"originatingChannel": "1",
								"affiliate": "Yahoo",
								"campaignId": "US coupon campaign"
							}
						},
						"serverTimeStamp": "1528628536880",
						"sdeType": "MARKETING_CAMPAIGN_INFO",
						"isAuthenticated": false
					},
					{
						"customerInfo": {
							"serverTimeStamp": "1528628536880",
							"isAuthenticated": false,
							"customerInfo": {
								"customerStatus": "cancelled",
								"customerType": "vip",
								"balance": "-400.99",
								"currency": "USD",
								"customerId": "customerId",
								"socialId": "socialid",
								"imei": "imeiID",
								"userName": "username",
								"accountName": "nameacount",
								"role": "rollleeee",
								"companyBranch": "companyBranch",
								"storeNumber": "storeNumber13123",
								"storeZipCode": "2342221",
								"lastPaymentDate": {
									"year": "2014",
									"month": "10",
									"day": "15"
								},
								"registrationDate": {
									"year": "2013",
									"month": "5",
									"day": "23"
								},
								"companySize": "2222"
							}
						},
						"serverTimeStamp": "1528628536880",
						"sdeType": "CUSTOMER_INFO",
						"isAuthenticated": false
					},
					{
						"personalInfo": {
							"serverTimeStamp": "1528628536880",
							"isAuthenticated": false,
							"personalInfo": {
								"name": "John",
								"surname": "Doe",
								"gender": "MALE",
								"company": "company",
								"language": "Russian",
								"customerAge": {
									"customerAgeInYears": "34.0",
									"customerYearOfBirth": "1980",
									"customerMonthOfBirth": "4",
									"customerDateOfBirth": "15"
								},
								"contacts": [
									{
										"personalContact": {
											"email": "myname@example.com",
											"phone": "+1 212-788-8877"
										}
									}
								]
							}
						},
						"serverTimeStamp": "1528628536880",
						"sdeType": "PERSONAL_INFO",
						"isAuthenticated": false
					},
					{
						"searchContent": {
							"serverTimeStamp": "1528628536881",
							"keywords": [
								"word"
							]
						},
						"serverTimeStamp": "1528628536881",
						"sdeType": "SEARCH_CONTENT",
						"isAuthenticated": false
					},
					{
						"viewedProduct": {
							"serverTimeStamp": "1528628536881",
							"products": [
								{
									"quantity": 3,
									"product": {
										"name": "red high heel shoe",
										"category": "women shoes",
										"sku": "xyz567",
										"price": "77.8"
									}
								}
							],
							"currency": "USD"
						},
						"serverTimeStamp": "1528628536881",
						"sdeType": "VIEWED_PRODUCT",
						"isAuthenticated": false
					},
					{
						"visitorError": {
							"serverTimeStamp": "1528628536881",
							"visitorError": {
								"contextId": "contextId",
								"message": "Expiration date missing",
								"code": "er100004",
								"level": null,
								"resolved": null
							}
						},
						"serverTimeStamp": "1528628536881",
						"sdeType": "VISITOR_ERROR",
						"isAuthenticated": false
					},
					{
						"lead": {
							"lead": {
								"topic": "luxury car test drive 2015",
								"value": "22.22",
								"currency": null,
								"leadId": "xyz123"
							},
							"serverTimeStamp": "1528628536882"
						},
						"serverTimeStamp": "1528628536882",
						"sdeType": "LEAD",
						"isAuthenticated": false
					},
					{
						"purchase": {
							"total": "78.0",
							"currency": null,
							"serverTimeStamp": "1528628536882",
							"cart": {
								"total": null,
								"serverTimeStamp": null,
								"products": [],
								"numItems": null
							},
							"orderId": "Test123"
						},
						"serverTimeStamp": "1528628536882",
						"sdeType": "PURCHASE",
						"isAuthenticated": false
					},
					{
						"serviceActivity": {
							"serverTimeStamp": "1528628536882",
							"serviceActivity": {
								"topic": "order checkbook",
								"status": "0",
								"category": "finance",
								"serviceId": "service12"
							}
						},
						"serverTimeStamp": "1528628536882",
						"sdeType": "SERVICE_ACTIVITY",
						"isAuthenticated": false
					}
				]
			},
			"summary": {
				"text": "summary",
				"lastUpdatedTime": 1482333795318
			}
		}
	]
}
```
