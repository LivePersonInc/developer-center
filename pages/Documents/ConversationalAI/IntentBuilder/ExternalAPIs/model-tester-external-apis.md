---
pagename: Model Tester External APIs
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
subfoldername: External APIs
permalink: intent-builder-external-apis-model-tester-external-apis.html
indicator: both
---

### Overview
There are two external Model Tester APIs for exporting test reports:

* **Test Reports**: Use this API to retrieve the domain IDs and associated test report names for the domains in a specific account. This information is then used when calling the Export Test Report API.
* **Export Test Report**: Use this API to retrieve CSV files for all the test reports for a domain ID, or to retrieve a CSV file for a specific test report.

These APIs let you automate test report retrieval. You can call these APIs, and then use the data from the Export Test Report API to run statistical functions that benchmark the performance of your bot’s NLU model.

### Requirements

* A permanent token provided by LivePerson. Contact your LivePerson representative to obtain this.
* Your account (brand) ID in Conversational Cloud.

{: .important}
To integrate a second account using these APIs, you must obtain a different permanent token. Each token is valid for only one account.

### Test Reports API

Use this API to retrieve the domain IDs and associated test report names for the domains in a specific account. This information is then used when calling the Export Test Report API.

#### Request

| Method | URL |
| --- | --- |
| GET | /external/api/model_tester/accounts/{leAccountId}/test_reports |

##### Request headers

| Header | Description | Type | Required? |
| --- | --- | --- | --- | --- |
| Authorization | A permanent token provided by LivePerson | string | Required |

##### Path and query parameters

{: .important}
All path and query parameters must be URL-encoded.

| Name | Description | Type/Value | Required? | Notes |
| --- | --- | --- | --- | --- | --- |
| le_account_id | Path parameter. The Conversational Cloud account ID for which to retrieve the data. | string | Required | |
| domain_name | Query parameter. The name of the domain for which to retrieve the domain ID and associated test report names. | string | Optional | This parameter filters out all the domains in the account that have a different name. If you are interested in the test reports for just one domain, set this parameter. |

#### Example

```
curl -L -X GET 'https://<region>.bc-nlu.liveperson.net/platform/external/api/model_tester/accounts/<le_account_id>/test_reports?domain_name=hii%20test%20v2' -H 'Authorization: <token>' -H 'Accept: application/json'
```

#### Response

##### Response codes

| Code | Description |
| --- | --- |
| 200 | OK |
| 400 | Bad request |
| 401 | User is not authenticated to perform the request |
| 500 | Internal server error (unexpected exceptions) |

##### Response body

```
{
   "success": true,
   "successResult": {
       "domain_test_reports": {
           "hii test v2": [
               {
                   "domainId": "39301012-0c7e-4727-bc37-67b30561f8d5",
                   "domainName": "hii test v2",
                   "testReportName": "1900"
               },
               {
                   "domainId": "39301012-0c7e-4727-bc37-67b30561f8d5",
                   "domainName": "hii test v2",
                   "testReportName": "1900-1"
               },
               {
                   "domainId": "39301012-0c7e-4727-bc37-67b30561f8d5",
                   "domainName": "hii test v2",
                   "testReportName": "1900-2"
               },
               {
                   "domainId": "39301012-0c7e-4727-bc37-67b30561f8d5",
                   "domainName": "hii test v2",
                   "testReportName": "1900-3"
               },
               {
                   "domainId": "39301012-0c7e-4727-bc37-67b30561f8d5",
                   "domainName": "hii test v2",
                   "testReportName": "1900-nlu-client"
               },
               {
                   "domainId": "39301012-0c7e-4727-bc37-67b30561f8d5",
                   "domainName": "hii test v2",
                   "testReportName": "1900-nlu-client-fixed"
               },
               {
                   "domainId": "39301012-0c7e-4727-bc37-67b30561f8d5",
                   "domainName": "hii test v2",
                   "testReportName": "1950 test cases"
               },
               {
                   "domainId": "39301012-0c7e-4727-bc37-67b30561f8d5",
                   "domainName": "hii test v2",
                   "testReportName": "8"
               }
           ]
       }
   },
   "message": "Success"
}
```

#### Troubleshooting

Typically, the automation for your use case should always use the domain_name query parameter to filter the results by domain name. However, to troubleshoot, you can remove it and “work backwards” to identify the issue: 

1. Remove the domain_name query parameter.
2. Call this API and retrieve the test report name for the report you want.
3. Retest the second API (Export Test Report), making sure to URL encode the path and query parameters.

### Export Test Report API

Use this API to retrieve CSV files for all the test reports for a domain ID, or to retrieve a CSV file for a specific test report.

#### Request

| Method | URL |
| --- | --- |
| GET | /external/api/model_tester/accounts/{leAccountId}/domains/{domain_id}/export_test_report |

##### Request headers

| Header | Description | Type | Required? |
| --- | --- | --- | --- | --- |
| Authorization | A permanent token provided by LivePerson | string | Required |

##### Path and query parameters

{: .important}
All path and query parameters must be URL-encoded.

| Name | Description | Type/Value | Required? | Notes |
| --- | --- | --- | --- | --- | --- |
| le_account_id | Path parameter. The Conversational Cloud account ID for which to retrieve the data. | string | Required | |
| domain_id | Path parameter. The ID of the domain for which to retrieve the test reports. | string | Required | |
| report_name | Query parameter. The name of the test report to retrieve. | string | Optional | This parameter filters out all the test reports in the domain that have a different name. If you are interested in just one test report, set this parameter. |

#### Example

```
curl -L -X GET 'https://<region>.bc-nlu.liveperson.net/platform/external/api/model_tester/accounts/<le_account_id>/domains/39301012-0c7e-4727-bc37-67b30561f8d5/export_test_report?report_name=1900' -H 'Authorization: <token>’ -H 'Accept: text/csv'
```

#### Response

##### Response codes

| Code | Description |
| --- | --- |
| 200 | Model Test Report CSV |
| 400 | Bad request |
| 401 | User is not authenticated to perform the request |
| 500 | Internal server error (unexpected exceptions) |

##### Response body

The response is a CSV file.