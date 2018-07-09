---
title: Schema
level1: Documents
level2: Data
level3: Data Access API (BETA)
level4: Methods
order: 60
permalink: data-access-api-(beta)-methods-schema.html

indicator: chat
---

The Schema is the JSON format blueprint for creating Data Access files. Specific and history schemas are retrievable.

### Request

| Method | URL |
| :------ | :------- |
| GET | `https://<domain>/data_access_le/account/{accountID}/le/schema?schemaId=<schemaId>` |

**URL Parameters**

Required:

| Parameter | Description | Type / Value |
| :--------- | :------------ | :------------ |
| schemaId | The schema ID to retrieve. To retrieve a specific schema, specify its number or 'latest’ as the newest available schema. | alphanumeric |

### Response

JSON format of the requested LE data access schema.