---
pagename: Appendix
redirect_from:
  - administration-skills-appendix.html
  - aadministration-skills-appendix.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Skills API
order: 100
permalink: skills-api-appendix.html
indicator: both
---

This section contains API details that are common to every API’s resource and action.

### Request Headers

| Header | Description |
| :-------- | :------------ |
| Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows to optimize the backend, networking and client resources utilization. |

### Response Headers

| Header | Description |
| :-------- | :------------ |
| eTag | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.. |
| location | URI Location of the newly created resource. This header is included only when the request created single object. |

**Query Parameters**

| Parameter | Description | Notes | Required |
| :------------ | :------------ | :------- | :--- |
| v | API version number | Type: Double. Default Value: 1.0 (Most updated: v=4.0) | Required |
| select | Dynamic selection of the response fields | Type: YOGA 'gdata' dialect. Non-existing field: no error, blank in response. Supported fields: Any in response body. **yoga GData dialect builder url: https://github.com/skyscreamer/yoga/wiki/Using-the-Selector-Builder-GUI | Optional |
| include_deleted | Whether or not deleted items in the response are included | Default: false | Optional |

### Path Parameters

| Parameter | Description | Type |
| :----------- | :------------  | :----- |
| accountId | LP site ID | String  |
| userId | User ID | Positive long number greater than zero |
| skillId | Skill ID | Positive long number greater than zero |
| agentGroupId | Agent group ID | Positive long number greater than zero |

### Entity Structure

| Attribute | Description | Type/Value | Required | Notes |
| :--------- | :-------------- | :----------- | :--- | :--- |
| id | Account Config object’s unique ID | Long | Read only |  |
| deleted | Whether the item is deleted or not | Boolean | Read only | |
| name | Skill’s unique name | String | Required | |
| description | The skill’s description | String | Optional | |
| skillOrder | The skill’s order | int (number) | Optional | |
| maxWaitTime | The skill’s max wait time. | int (number) |  Optional |  Defaults to 120 |
| defaultPostChatSurveyId | The default post chat survey id | String | Optional | |
| defaultOfflineSurveyId | The default offline chat survey id | String | Optional | |
| defaultAgentSurveyId | The default agent chat survey id | String | Optional | |
| dateUpdated | The last update user change date.  | Date (numbers) | Optional | The format: year-month-date hrs:min:sec |
| skillRoutingConfiguration | For each agent group the parameters of the percentage and priority split routing. | TreeSet | Optional | If priority is not in use, pass 1 as value. |
| agentGroupId | Agent group ID for which we are specifying the priority and splitPercentage. | String | Required | AgentGroupId must already exist in account config. <br> Required if skillRoutingConfiguration specified.  |
| priority | Routing cascading order if agent group is in full capacity, first to priority 1 then to 2 then to 3 then to …. n. | number | Required | Required if skillRoutingConfiguration specified. |
| splitPercentage | Split of chats to provide for each chat center (agent group). | number | Required | Required if skillRoutingConfiguration specified.
| wrapUpTime | The period of time between the end of the chat and until the agent will receive the new chat | Integer | Optional | this feature is within the ACD settings |
| slaDefaultResponseTime | Default response time for all conversations in messaging per skill | Integer | Optional | |
| slaUrgentResponseTime | Urgent response time is after consumer marked a conversation as urgent | Integer | Optional | |
| slaFirstTimeResponseTime | First time response time in first conversation of a new consumer | Integer | Optional | |
| lobIds | The skill's Lines Of Business IDs | List<Long> | Optional |  |
| canTransfer | Whether the skill can transfer to other skills | Boolean  | Optional | Default: true. If false can only transfer to itself (requeue) |
| skillTransferList | The list of Skill ids to which this skill can transfer conversations | List <Long> | Optional | Default: null (i.e. skill can transfer to all skills) |
| workingHoursId | working hours ID | Long | Optional ||
| specialOccasionId | special occasion ID | Long | Optional ||
| postConversationSurveyAppInstallAssociationId | post conversation survey with app install association ID | String | Optional ||
| autoCloseInSeconds | Set auto-close per skill in seconds | Integer | Optional ||
| transferToAgentMaxWaitInSeconds | Maximum wait time for transferred conversation to wait in queue for the assigned agent | Integer | Optional ||
| fallbackSkill | Allowed fallback skill for this skill | Long | Optional ||
| fallbackWhenAllAgentsAreAway | Setting per skill whether or not to use fallback skill when all agents are away | Boolean | Optional | Default: true |
| agentSurveyForMsgTimeoutInMinutes | The time which elapsed between the end of the conversation and the agent survey expiring | Integer | Optional ||
| agentSurveyForMsgId | The agent survey for messaging id this skill is assigned to | Long | Optional ||

### Entity Example

```json
    {
          "id":326244912,
          "skillOrder":0,
          "description":"skillDescription",
          "workingHoursId": 2859745012,
          "specialOccasionId": 2861462812,
          "name":"skillName1448453890425",
          "maxWaitTime":0,
          "deleted":true,
          "dateUpdated":"2015-11-25 14:18:11",
          "canTransfer": true,
          "skillTransferList": [
            2286661812,
            2286661912
          ],
          "lobIds": [
            766661812
          ],
          "skillRoutingConfiguration":[
             {
                "priority":1,
                "splitPercentage":10,
                "agentGroupId":326244812
             },
             {
                "priority":2,
                "splitPercentage":20,
                "agentGroupId":326244812
             }
          ]
        }
```

### Data Revisions

The revision mechanism exists in order to maintain order and save historical data. To use the benefits of the revision mechanism, The developers are asked to add the 'IF-MATCH' request header. The 'IF-MATCH' request header contains data revision as known by the client, In addition, it allows to optimize the backend response and allows concurrent modification backend verification.

Every entity will have only one latest revision and the maximum revision number is a global number by account. Each change/update on one of these entities increases The revision. The developer can call the GET entity API in order to retrieve the latest revision. This revision will be part of the response header under ac-revision header.

When sending the API calls using the 'IF-MATCH' header with a specific revision if there was no change the response will be 304 (Not Modified) response. When using 'IF-MATCH' header with '-1' value you will always get the full response.