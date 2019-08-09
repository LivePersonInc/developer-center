---
pagename: Methods
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: AskMaven
permalink: maven-askmaven-methods.html
indicator: messaging
---

Every API call to the AskMaven service requires the following Auth Headers to be accepted

`Content-Type : application/json`

`maven-api-key : <INSERT YOUR API KEY HERE>`

#### Base URL per environment

QA URL: http://lp-mavencontext-app-qa.dev.lprnd.net

Alpha URL: https://va-a.context.liveperson.net 

Production URLs: 

AMERICAS : https://z1.context.liveperson.net  
EMEA: https://z2.context.liveperson.net  
APAC: https://z3.context.liveperson.net  

### Query Parameters

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>conversationId</td>
            <td>string</td>
            <td>Optional - The conversation ID of the current conversation</td>
        </tr>
         <tr>
            <td>userId</td>
            <td>string</td>
            <td>Optional - LivePerson consumer ID of the current conversation</td>
        </tr>
        <tr>
            <td>groupId</td>
            <td>string</td>
            <td>Optional - The group ID associated with the session store variable call to set values.  If no groupId is specified, then the conversationId will be used to associate with the session store variables.
</td>
        </tr>
    </tbody>
</table>

### Get Next Actions

Get maven routing decision based on maven configured policies

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/v1/account/{accountId}/next-actions</td>
            <td>Get Maven routing decision based on Maven configured policies</td>
        </tr>
    </tbody>
</table>

Example calls:

CURL command:

```bash

curl --request GET \
 --url https://z1.askmaven.liveperson.net/v1/account/55884191/next-actions \
 --header 'maven-api-key:  7egGDDqV7V9oSj6AIDEWW6yQfUwAyuwH'
 ```
 
 How to call in JavaCcript:
 
```bash
fetch('https://z1.askmaven.liveperson.net/v1/account/55884191/next-actions', {
       method: 'GET',
       cache: 'no-cache',
       headers: {
           'Content-Type': 'application/json',
           'maven-api-key': '7egGDDqV7V9oSj6AIDEWW6yQfUwAyuwH',
       }
   })




```

