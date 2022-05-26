---
pagename: Error Codes
sitesection: Documents
categoryname: Reporting
documentname: Net Handle Time API
permalink: net-handle-time-api-error-codes.html
indicator: both
---

| Error Code | Description | Follow Up |
| --- | --- | --- |
| 400 | Bad request due to client error | Do not retry. Fix the issues specified in `causes` |
| 401 | Unauthorized | Do not retry. Verify your API key is valid and has the correct permissions (See [overview](actual-handle-time-api-overview.html)) |
| 429 | Too many requests | Retry after at least 1 second |
| 500 | Internal server error | Retry 3 times with increasing pause between retries of at least 5, 10, and 15 seconds |
| 503 | Service unavailable | Retry 3 times with increasing pause between retries of at least 5, 10, and 15 seconds |
