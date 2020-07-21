---
pagename: Appendix
redirect_from:
  - account-configuration-categories-general.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Categories API
permalink: predefined-categories-api-appendix.html
indicator: both
---

This section contains details that are common for every method’s resource and action included in this API.

### Formats

JSON

**Request Headers**

<table>
<thead>
  <tr>
    <td>Header</td>
    <td>Description</td>
</thead>
<tbody>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>Contains token string to allow request authentication and authorization. See the doc for more details.</td>
  </tr>
</tbody>
</table>


### Query Parameters

<table>
<thead>
  <tr>
    <td>Parameter</td>
    <td>Description</td>
    <td>Notes</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>v</td>
    <td>api version number</td>
    <td>Required<br>Type: Double<br>Default Value: 1.0<br>Validation fail error code: 400</td>
  </tr>
</tbody>
</table>


**Response Codes**

|Code | Description |
| :----- | :-------------|
|200 | OK |
| 400 | Bad request |
