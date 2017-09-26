---
title: Appendix
keywords:
level1: Documents
level2: Admin
level3: Profiles API


order: 101
permalink: administration-profiles-appendix.html

indicator: both
---

This section contains API details that are common to every API’s resource and action.

### Considerations:

| Title | Description |
| :--------   | :--- |
| Update attribute | Cannot update a single requested attribute. Need to add a body full of other attributes and if certain attributes are missing from the body, they will be deleted. |


### Request Headers

| Header        | Description | Notes |
| :------       | :--------   | :--- |
| Authorization | Contains token string to allow request authentication and authorization. | |
| X-LP-Last-Modified | Contains timestamp data of last modified action. | Allows optimization of the backend resources utilization. | 

### Response Headers

| Header        | Description | Notes |
| :------       | :--------   |  :--- |
| X-LP-Last-Modified | Contains timestamp data of last modified action. | Allows optimization of the backend resources utilization. | 


### Query Parameters

| Header   | Description         | Type/Value                       | Required       | Notes |
| :------  | :--------           | :----------                      | :---           | :--- |
| v        | API version number  | Double. | v=4.0 | Required |
| select | Dynamic selection of the response fields | Type: YOGA 'gdata' dialect. Non-existing field: no error, blank in response. Supported fields: Any in response body. **yoga GData dialect builder url: https://github.com/skyscreamer/yoga/wiki/Using-the-Selector-Builder-GUI | Optional |
| include_deleted | Whether or not deleted items in the response are included | Default: false | Optional |


### Path Parameters

| Parameter | Description  | Type/Value |
| :------   | :--------    | :-------- |
| accountId | LP site ID | String ^[a-zA-Z0-9_]{1,20}$ |
| profileId | Profile ID | Positive long number greater than zero |

### Entity Structure

| Attribute | Description  | Type/Value | Required | Notes |
| :------   | :--------    | :-------- | :--- | :--- |
| id | Account Config object’s unique ID | Long | Read only |  |
| deleted | Whether the item is deleted or not | Boolean | Read only | |
| name | Profile’s unique name | String | Required | |
| description | The profile’s description | String | Optional | |
| roleTypeId | The profile role type ID | Integer | Required | 1-Admin, 2-Agent, 3-Agent Manager, 4-Campaign Manager, 5-LPA |
| dateUpdated | The last update profile change date  | Date (numbers) | Read only | The format: year-month-date hrs:min:sec |
| numOfAssignedUsers | How many users assigned to the specific profile | Long | Read only | |
| permissionPackages | List of permission packages | List of type PermissionsPackageDto | Required | |
| permissions | Set of all permissions of specific profile | Set of Integers | | |
| isAssignedToLPA | Whether the profile assigned to LPA user or not | Boolean | Required | |

 

### Entity Example

```json
   {
  "id": 2338395712,
  "isAssignedToLPA": false,
  "roleTypeId": 1,
  "roleTypeName": "Administrator",
  "description": "",
  "name": "new",
  "permissions": [
    3,
    5,
    1737,
    1738
  ],
  "permissionPackages": [
    {
      "id": 10006,
      "isDisplayed": true,
      "featureKeys": [
        "Common.Api_key_management"
      ],
      "isEnabled": true
    },
    {
      "id": 10015,
      "isDisplayed": true,
      "featureKeys": [
        "Common.AuditTrail"
      ],
      "isEnabled": true
    }
  "deleted": false,
  "dateUpdated": "2017-09-19 16:29:28"
  }  
```
