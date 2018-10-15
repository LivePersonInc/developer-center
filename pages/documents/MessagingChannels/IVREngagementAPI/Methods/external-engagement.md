---
pagename: External Engagement
redirect_from:
  - rt-interactions-ivr-engagement-external engagement.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: IVR Engagement API
subfoldername: Methods
order: 10
permalink: ivr-engagement-api-methods-external-engagement.html

indicator: chat
---

This method exposes a short-term, one-time, non-cacheable URL for starting the engagement.

### Request

| Method | URL |
| :--- | :--- |
| POST | https://<domain>/api/account/{accountId}/external/engagement?v=1.0 |

**URL Parameters**

| Name | Description | Type/Value | Required |
| :--- | :--- | :--- |:--- |
| v | API version number | double. <br> Supported Value: 1.0 | Required |

**BODY/POST Parameters**

| Name | Description | Type/Value | Required |
| :--- | :--- | :--- | :--- |
| appType | External system type | string <br> Supported Values: IVR | Required |
| consumerSections | An array of List of locations in the external system relevant for the engagement | `Array<string>` | Optional |
| engagementAttributes | An Array of engagement attributes | `Array<Engagement Attribute>` | Optional |
| externalWaitTimeSeconds | Current wait time (in seconds) in the external system. For future use. | integer | Optional |

Example:

```json
{
  "appType":	"IVR",
  "consumerSections":	["Support","English","Other"],
  "engagementAttributes":	[
  {"type":"personal","personal":{"contacts":{"phone":"22222222222222"}}}
  ],
  "externalWaitTimeSeconds":300
}
```

### Response

Example:
```json
{
  "status":	"Available",
  "engagementDetails":	{
    "urlToChat":	"https://www.mybrand.com/?someQueryParams",
    "validForSeconds":	300,
    "expectedWaitTimeSeconds":120,
    "queueSize":	9
  }
}
```

**Elements in the Response**

| Name | Description | Type/Value |
| :--- | :--- | :--- |
| status | Availability status. | enum ('Available’, 'Not Available’) |
| engagementDetails | The details of an engagement when it is available. Returned when the status is Available. | container |
| expectedWaitTimeSeconds | Expected wait time (in seconds). Returned when the status is Available. | integer |
| queueSize | Current queue size. Returned when the status is Available. | integer |
| urlToChat | URL link for chat initiation. Returned when the status is Available. | |
| validForSeconds | The period in seconds that the urlToChat will be valid. Returned when the status is Available | integer |

Sample error response:

```json
{
  "time":"2015-07-02T10:29:19.890-04:00",
  "message":"Illegal	Version",
  "internalCode":"33"
}
```

**Elements in the Error Response**

| Name | Description | Type/Value |
| :--- | :--- | :--- |
| time Error time | timestamp |
| message | Error message | string |
| internalCode | Error code | string |
