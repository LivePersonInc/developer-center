---
pagename: Appendix
redirect_from:
  - administration-lobs-appendix.html
  - aadministration-lobs-appendix.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: LOBs API

order: 100
permalink: lobs-api-appendix.html

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
| select | Dynamic selection of the response fields | Type: YOGA 'gdata' dialect. Non-existing field: no error, blank in response. Supported fields: Any in response body. YOGA GData dialect builder url: https://github.com/skyscreamer/yoga/wiki/Using-the-Selector-Builder-GUI | Optional |
| include_deleted | Whether or not deleted items in the response are included | Default: false | Optional |

### Path Parameters

| Parameter | Description | Type |
| :----------- | :------------  | :----- |
| accountId | LP site ID | String  |
| userId | User ID | Positive long number greater than zero |
| skillId | Skill ID | Positive long number greater than zero |
| agentGroupId | Agent group ID | Positive long number greater than zero |
| lobId | LOB ID | Positive long number greater than zero |

### Entity Structure

| Attribute | Description | Type/Value | Required | Notes |
| :--------- | :-------------- | :----------- | :--- | :--- |
| id | Lines of business unique ID | long number | Read only |  |
| deleted | Whether the item is deleted or not | Boolean | Read only | |
| name | Lines of business's unique name | string | Required | |
| description | The lines of business's description | string | Optional | |
| dateUpdated | The last update lines of business change date  | Date (numbers) | Optional | The format: year-month-date hrs:min:sec |

### Entity Example

```json
    {
      "id":2398413012,
      "name":"test",
      "deleted":false,
      "dateUpdated":"2017-10-26 18:29:22"
    }
```

### Data Revisions

The revision mechanism exists in order to maintain order and save historical data. To use the benefits of the revision mechanism, The developers are asked to add the 'IF-MATCH' request header. The 'IF-MATCH' request header contains data revision as known by the client, In addition, it allows to optimize the backend response and allows concurrent modification backend verification.

Every entity will have only one latest revision and the maximum revision number is a global number by account. Each change/update on one of these entities increases The revision. The developer can call the GET entity API in order to retrieve the latest revision. This revision will be part of the response header under ac-revision header.

When sending the API calls using the 'IF-MATCH' header with a specific revision if there was no change the response will be 304 (Not Modified) response. When using 'IF-MATCH' header with '-1' value you will always get the full response.
