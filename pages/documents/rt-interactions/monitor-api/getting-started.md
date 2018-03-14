### Getting Started

Create an account and save the generated `account_id`
Have Async_Messaging and Messaging_Conversation_Sources features enabled

Login to your account and go to campaigns → data sources -> conversation sources tab
![Data Source](img/monitor_start1.png)

Click on Mobile App -> Connect and fill in the details of your application
![Mobile App](img/monitor_start2.png)

Click on **create** and copy the generated app key (aka app install id)
![AppInstallationId](img/monitor_start3.png)

You can now create an engagement with the **Mobile App** source
Fetch the monitoring API domain using the following instructions: https://developers.liveperson.com/agent-domain-domain-api.html#overview
You can now try and get an engagement using the monitoring API **engagement resource**
```javascript
curl -i \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST -d '{"clientProperties":{"osName": "MAC_OSX","osVersion": "1.2","appVersion": "1.0","deviceFamily": "MOBILE"},"consumerId":"uniqueIdInBrand","engagementAttributes": [{"type": "personal","personal": {"contacts": [{"email":"bbb@test.com","phone":"12345678"},{"email":"aaa@test2.co.il","phone":"98765430"}],"age": {"age":30.0,"year":1985,"month":7,"day":22},"firstname": "test","lastname": "test2","gender": "FEMALE","company": "liveperson"}}]}' \
https://{Monitor-Domain}/api/account/{account-Id}/app/{app-Installation-Id}/engagement?v=1.0
```

The response will look like this:
```javascript
HTTP/1.1 201 Created
Date: Thu, 08 Mar 2018 11:54:35 GMT
Content-Type: application/octet-stream
Transfer-Encoding: chunked
Connection: keep-alive
Server: ws
Access-Control-Allow-Methods: GET, POST, PATCH
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, X-HTTP-Method-Override, LP-DOMAIN-REFERER, LP-URL, ETag, ac-revision, X-LP-Last-Modified, If-Match, Authentication-Method, Credit-Card-Ref, Automation-Secret, Email-Token
Access-Control-Allow-Credentials: true
 
{"sessionId":"stM0CzMWRye4MZgRBAL4UQ","visitorId":"ZjYWZlYzYzNDE5MTE1OWQ5","pageId":"1674628973","engagementDetails":[{"campaignId":2695999112,"engagementId":2696029112,"engagementRevision":3,"contextId":"1","connectorId":2696029012,"status":"expose"}]}
```

You should report on **Impression Display SDE** once the engagement was displayed by your application with the visitorId and sessionId provided in the response:
```javascript
curl -i \
    -H "Accept: application/json" \
    -H "X-HTTP-Method-Override: PUT" \
    -H "Content-Type: application/json" \
    -X POST -d '{"clientProperties":{"osName": "MAC_OSX","osVersion": "1.2","appVersion": "1.0","deviceFamily": "MOBILE"},"consumerId":"uniqueIdInBrand","engagementAttributes": [{"type":"impDisplay","campaign":2695999112,"engId":2696029112,"revision":3,"eContext":[{"type":"engagementContext","id":"1"}]}]}' \
    https://{Monitor-Domain}/api/account/{account-Id}/app/{app-Installation-Id}/report?v=1.0&vid=A0ZTA5YTVlYTY5NTI1ODYx&sid=Vo13h4lpShW655STQJi9Jg    
```
    
