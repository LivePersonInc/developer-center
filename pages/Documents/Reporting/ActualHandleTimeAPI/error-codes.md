---
pagename: Error Codes
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
permalink: actual-handle-time-api-error-codes.html
indicator: both
---

| Error Code | Description | Follow Up |
| --- | --- | --- |
| 400 | Bad request due to client error | Do not retry. Fix the issues specified in `causes` |
| 401 | Unauthorized | Do not retry. Verify your API key is valid and has the correct permissions (See [overview](actual-handle-time-api-overview.html)) |
| 429 | Too many requests | Retry after at least 1 second |
| 500 | Internal server error | Retry 3 times with increasing pause between retries of at least 5, 10, and 15 seconds |
| 503 | Service unavailable | Retry 3 times with increasing pause between retries of at least 5, 10, and 15 seconds |

### Example Responses

#### Error Code 400

```json
{
	"causes": [
		"offset: must be greater than or equal to 0",
		"limit: must be less than or equal to 100"
	],
	"message": "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax). Please fix the issues detailed in `causes` and try again"
}
```

#### Error Code 401

```json
{
    "reason": "oauth_problem=token_rejected&oauth_problem_advice=the oauth_token is unacceptable to the Service Provider",
    "message": "The server will not process the request because it is unauthorized. This attempt has been logged"
}
```

#### Error Code 500

```json
{
    "internalCode": "8d2cbf2e-b864-491e-9583-e617ba266af4",
    "message": "The server encountered an unexpected condition that prevented it from fulfilling the request"
}
```
