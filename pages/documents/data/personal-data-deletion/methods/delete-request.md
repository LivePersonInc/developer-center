---
title: Delete
level1: Documents
level2: Data
level3: Personal Data Deletion API
level4: Methods
order: 10
permalink: personal-data-deletion-delete-request.html
indicator: messaging
---

This method allows to delete a list of conversation ids, engagement ids, consumer ids.
Each request can consists of one of the types.

### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
POST   | https://{domain}.....

**URL Parameters**

Name   | Description                                                  | Type/Value | Required | Notes
:----- | :----------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
offset | The offset specifies from which record to retrieve the chat. | numeric    | Required | Default is 0\. Example: Of 100 records, the first 20 have already been retrieved. Thus, in the next request will be specified with offset 21.
limit  | Max amount of conversations to be received in the response.  | numeric    | Required | Default is 50\. Max value is 100\. The remaining conversations can be obtained using pagination (using offset, in a subsequent request).
sort   | Sort the results in a predefined order.                      | string     | Required | Example: start:desc will order conversations by descending value of the start time. Valid values include: start, end. Order:[asc/desc]

**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.

|Name  | Description | Type/Value  | Required | Notes|
|:---- | :---------- | :---------- | :------- | :---|
|start {from, to}    | Conversation's start time range.                                                              | long - epoch time in milliseconds. | Required | Including bounds. From/to value is rounded to the last/next 10 minutes, respectively. The maximum time interval is three months. Larger intervals will be rejected.
|end {from, to}    | Conversation's end time range.                                                              | long - epoch time in milliseconds. | Optional | Including bounds. From/to value is rounded to the last/next 10 minutes, respectively. The maximum time interval is three months. Larger intervals will be rejected.
|status              | Latest status of the conversation.                                                            | Array `<status>`                   | Optional
### Response

**Elements in the Response**

**JSON Example**

```
