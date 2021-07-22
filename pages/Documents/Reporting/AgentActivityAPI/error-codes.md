---
pagename: ErrorCodes
sitesection: Documents
categoryname: Reporting
documentname: Agent Activity API
permalink: agent-activity-api-error-codes.html
indicator: both
---

| Error Code | Description | Follow Up |
| --- | --- | --- |
| 400 | Bad request due to client error | Fix the issues specified in `causes`, and try again |
| 401 | Unauthorized | Check if your API key is valid and has the correct permissions (See [overview](overview.html)), then try again. If the issue persists, open a support ticket |
| 429 | Too many requests | Try again later |
| 500 | Internal server error | Try again later. If the issue persists, open a support ticket and include the `internalCode` from the response |
| 503 | Service unavailable | Try again later. If the issue persists, open a support ticket |

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
