---
title: Appendix
keywords:
level1: Documents
level2: Admin
level3: Agent Groups API

order: 110
permalink: administration-agent-groups-appendix.html

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
| eTag | Account config object type collection revision |
| location | URI Location of the newly created resource. This header is included only when the request created single object. |

### Query Parameters

Required:

| Parameter | Description | Notes |
| :----------- | :------------- | :-------- |
| v | API version number | Type: Double. Default Value: 1.0 (Most updated: v=4.0). Validation fail error code: 400 |

Optional:

| Parameter | Description | Notes |
| :----------- | :------------ | :------- |
| select | Dynamic selection of the response fields | YOGA 'gdata' dialect. Non-existing  field: No error, blank in response. Supported fields: any in response body. **yoga GData dialect builder URL: https://github.com/skyscreamer/yoga/wiki/Using-the-Selector-Builder-GUI. There is a known issue with merging nested properties like hotkey(prefix),hotkey(suffix), the result is only hotkey(suffix) and not both. See https://github.com/skyscreamer/yoga/issues/242 |
| include_deleted | Whether to include deleted items in the response or not | Default: false |

### Path Parameters

| Parameter | Description | Type |
| :----------- | :------------- | :----- |
| accountId | LP site ID | String ^[a-zA-Z0-9_]{1,20}$ |
| userId | user ID | Positive long number greater than zero |
| skillId | skill ID | Positive long number greater than zero |
| agentGroupId | agent group ID | Positive long number greater than zero |

### Entity Structure

Read only:

| Attribute | Description | Type/Value |
| :--------- | :------------- | :------------ |
| id | Account Config object’s unique ID.| long number |
| deleted | Whether or not the item is deleted | boolean |

Required:

| Attribute | Description | Type/Value |
| :---------- | :------------- | :------------ |
| name | The agent group’s unique name. | string |
| parentGroupId | The agent group’s parent group. | Root agent group is the only group that has null parentGroupId. Note: Required if at least 1 agent group exists. | number |
| isEnabled | Whether or not the agent group is enabled. | boolean |

Optional:

| Attribute | Description | Type/Value |
| :--------- | :-------------- | :------------ |
| description | The agent group’s description. | string |
| dateUpdated | The last update user change date.  | Date (numbers) | Optional | The format: year-month-date hrs:min:sec |

### Entity Example

```json
    {
        "id": "1231234",
        "deleted": "false",
        "name": "newAgentGroup1",
        "description": "a new group of agents",
        "parentGroupId": "1",
        "isEnabled": "true"
     }
```