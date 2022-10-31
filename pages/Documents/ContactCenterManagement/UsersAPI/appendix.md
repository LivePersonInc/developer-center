---
pagename: Appendix
redirect_from:
  - administration-users-appendix.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Users API
order: 101
permalink: users-api-appendix.html
indicator: both
---

This section contains API details that are common to every API’s resource and action.

### Considerations

| Title | Description |
| :--------   | :--- |
| Update attribute | Cannot update a single requested attribute. Need to add a body full of other attributes and if certain attributes are missing from the body, they will be deleted. |
| API User | A User which is created as an API User doesn't have a password |
| User profile role change from Agent | When changing the role of a user from Agent to another role, the relevant user fields associated with agent role are reset: 'maxChats', 'maxAsyncChats', 'memberOf', 'skillIds' |
| User profile role change from Agent Manager | When changing the role of a user from Agent Manager to another role, the 'managerOf' field associated with agent manager role is reset |

### Request Headers

| Header        | Description | Notes |
| :------       | :--------   | :--- |
| Authorization | Contains token string to allow request authentication and authorization.  | |
| If-Match      | Contains data revision as known by the client. | Allows optimization of the backend, networking and client resources utilization. |

### Response Headers

| Header        | Description | Notes |
| :------       | :--------   |  :--- |
| eTag | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.  |  |
| location      | URI Location of the newly created resource. | Included only when the request created single object. |

### Query Parameters

| Header   | Description         | Type/Value                       | Required       | Notes |
| :------  | :--------           | :----------                      | :---           | :--- |
| v        | API version number  | Double. |  Required      |  Default Value: 2.0 (Most updated: v=4.0) |
| select   | Dynamic selection of the response fields  | YOGA 'gdata' dialect.  | Optional | Non-existing field: no error, blank in response supported fields: any in response body <br> yoga GData dialect builder url: https://github.com/skyscreamer/yoga/wiki/Using-the-Selector-Builder-GUI |
| include_deleted | Whether or not deleted items in the response are included | boolean | Optional | Default: false |

### Path Parameters

| Parameter | Description  | Type/Value |
| :------   | :--------    | :-------- |
| accountId | LP site ID   | string  |
| userId    | User ID      | Positive long number greater than zero |
| skillId   | Skill ID     | Positive long number greater than zero |
| agentGroupId  | Agent group ID  | Positive long number greater than zero |
| profileId | Profile ID   | Positive long number greater than zero |

### Entity Structure

| Attribute | Description  | Type/Value | Required | Notes |
| :------   | :--------    | :-------- | :--- | :--- |
| id | Account Config object’s unique ID. | long number | Read only | Required only on update. |
| pid | A user's process id. | unique string | Optional | |
| deleted   | Indicates whether or not the item is deleted. | Boolean | Read only | |
| loginName | A user's unique login name. | unique string | Required | |
| fullName    | A user's full name.  | unique string | Required | In order to avoid exposing potentially personal information, this field will return an empty value|
| nickname | A user’s nickname. | string | Required | |
| isEnabled  | Indicates whether the user is enabled or not.  | Boolean | Required | |
| maxChats | The maximum number of chats a user can take. | number | Required | |
| skillIds   | The user’s skill IDs. | array of longs | Optional | |
| email   | The user's email | string | Required | |
| memberOf   | The agent group that the agent is a member of.  | An object with the properties agentGroupId (number) and assignmentDate (date, read only)  |  Required | Required only if the user is an agent. |
| managerOf | The user’s agent groups as a manager. | An array of memberOf objects  | Optional |  Optional if the user is an agent. Only an agent manager can manage agent groups. |
| changePwdNextLogin | Flag that forces user to change password on next login. | Boolean | Optional | |
| passwordSh    | A user’s password. | string | Required | Required only on add. On edit, to update a password, change passwordSh else — send null. |
| oldPassword | A user’s previous password. | string | Required | Required only when a user updates their own password. |
| confirmPassword | A user’s confirmation password. | string | Required | Required only when a user updates their own password. |
| lastPwdChangeDate | The last password change date.  | Date (numbers) | Optional | The format: year-month-date hrs:min:sec |
| dateUpdated | The last update user change date.  | Date (numbers) | Optional | The format: year-month-date hrs:min:sec |
| permissionGroups | The user’s permission groups. | array of numbers | Optional | |
| pictureId | The picture ID. | string | Optional | |
| pictureUrl | The picture URL. | string | Optional | |
| disabledManually | Indicates whether or not the user was disabled by an administrator. | Boolean | Optional | If isEnabled is changed and disabledManually is not provided, disabledManually will automatically be set to the opposite of isEnabled. |
| description | The description of the user. | string| Optional | |
| mobileNumber | The mobile phone number of the user. | string | Optional | |
| employeeId | The external employee ID of the user. | string| Optional | In order to avoid exposing potentially personal information, this field will return an empty value |
| backgndImgUri | The background image URI. | string| Optional | |
| pnCertName | The mobile app ID. | string | Optional | |
| maxAsyncChats | The maximum number of open messaging conversations a user can take. | number | Optional | If null, the user will inherit the account’s default value.  |
| profileIds  | The user’s profile IDs. | array of longs| Required | |
| isApiUser | Indicates whether the user is an API user (not a real user/ bot)  | Boolean | Optional (Default: false) | It has the ability to login via API (instead of username and password) |
| userTypeId | The user's type  | integer number | Optional | 0 — system; 1 — human; 2 — bot; (Default: 1) |
| allowedAppKeys | The API user's application keys | string | Required (for API user) |
| lobIds | The user’s LOB IDs | array of numbers | Optional |  ||

### Entity Example

```json
    {
       "id": "987654321",
       "deleted": "false",
       "loginName": "unique@gmail.com",
       "fullName": "",
       "nickname": "agent1",
       "passwordSh": "pppppp",
       "isEnabled": "true",
       "maxChats": "4",
       "email": "myEmail@gmail.com",
       "disabledManually": false,
       "skillIds": [
            2359235912,
            2359235922
       ],
       "profileIds": [
           2359273612,
           2359273512
       ],
       "lobIds": [
           6549273612
       ],
       "changePwdNextLogin": false,
       "memberOf": {"agentGroupId": "1", "assignmentDate": "2015-06-22 19:20:03"},
       "managerOf": [{"agentGroupId": "1", "assignmentDate": "2015-06-22 19:20:03"}],
       "permissionGroups": ["1"],
       "description": "user’s description",
       "mobileNumber": "0542-123456",
       "employeeId": "",
       "maxAsyncChats": "10",
       "backgndImgUri": "/pictures/image.jpg",
       "pnCertName": "lpMobileApp-123",
       "dateUpdated": "year-month-date hrs:min:sec",
       "lastPwdChangeDate": "year-month-date hrs:min:sec",
       "isApiUser": false,
       "userTypeId": 1

    }
```

### Data Revisions

The revision mechanism exists in order to maintain order and save historical data. To use the benefits of the revision mechanism, The developers are asked to add the 'IF-MATCH' request header. The 'IF-MATCH' request header contains data revision as known by the client, In addition, it allows to optimize the backend response and allows concurrent modification backend verification.

Every entity will have only one latest revision and the maximum revision number is a global number by account. Each change/update on one of these entities increases The revision. The developer can call the GET entity API in order to retrieve the latest revision. This revision will be part of the response header under ac-revision header.

When sending the API calls using the 'IF-MATCH' header with a specific revision if there was no change the response will be 304 (Not Modified) response. When using 'IF-MATCH' header with '-1' value you will always get the full response.