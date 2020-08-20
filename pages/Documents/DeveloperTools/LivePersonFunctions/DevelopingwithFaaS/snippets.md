---
pagename: Snippets
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-snippets.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-snippets.html
---

Snippets allow you to easily paste often-used code into your functions. Simply hit `CTRL` + `Spacebar` while writing `snippet` allows you to select a range of snippets from the list below.

- [Conversation Util](#conversation-util)
- [GDPR Util](#gdpr-util)
- [HTTP](#http)
- [Read Secret](#read-secret)
- [Update Secret](#update-secret)
- [Salesforce](#salesforce)
- [SDE Util](#sde-util)
- [Create Context Session Store](#create-context-session-store)
- [Read Context Session Store](#read-context-session-store)
- [Update Context Session Store](#update-context-session-store)
- [Delete Context Session Store](#delete-context-session-store)

### Conversation Util

```javascript
    const { Toolbelt, ConversationContentTypes } = require('lp-faas-toolbelt');
    const conversationUtil = Toolbelt.ConversationUtil();
    
    // Define parameters
    const conversationId = 'YOUR_CONVERSATION_ID';
    // Optional Filters
    const contentToRetrieve = [
      ConversationContentTypes.SDES,
      ConversationContentTypes.UNAUTH_SDES
    ];
    
    try {
      // Get conversation
      const conversation = await conversationUtil.getConversationById(conversationId, contentToRetrieve);
      // Determine Keywords
      const keywords = ['Keyword', 'awesome'];
      // Scan conversation for keywords, result is an array of objects in form { message, sentTimestamp, sentBy }
      const scannerResult = conversationUtil.scanConversationForKeywords(
        conversation,
        keywords
      );
    } catch(error) {
      // Handle error based on your integration by providing a legit fallback operation.
      console.error(`received following error message: ${error.message}`);
    }
```

### GDPR Util

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    
    // set file storage credentials (get from Account Manager)
    const fileStorageCredentials = {
      username: 'YOUR_USERNAME',
      password: 'YOUR_PASSWORD'
    }
    
    const gdprUtil = Toolbelt.GDPRUtil();
    // (optional) defaults to (filePath) => true
    const shouldReplace = (filePath) => true // filter here by returning boolean
    // (optional) defaults to a black 1px*1px png
    const replacementFile = {
      body: Buffer.from('YOUR_FILE_PATH', 'base64'), // create file from base64
      contentType: 'image/png',
    };
    
    try {
      const replacedFiles = await gdprUtil.replaceConversationFiles(
        // fetch conversation before (using Toolbelts ConversationUtil())
        YOUR_CONVERSATION,
        fileStorageCredentials,
        shouldReplace,
        replacementFile,
      );
      // handle response
      console.info(replacedFiles);
    } catch(error) {
      // Handle error based on your integration by providing a legit fallback operation.
      console.error(`received following error message: ${error.message}`);
    }
```

### HTTP

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    // Obtain an HTTPClient Instance from the Toolbelt
    // For API Docs look @ https://www.npmjs.com/package/request-promise
    const httpClient = Toolbelt.HTTPClient();
    const URL = 'https://www.liveperson.com';
    
    try {
      const { statusCode, body } = await httpClient(URL, {
        method: 'GET', // HTTP VERB
        headers: {}, // Your Headers
        simple: false, // IF true => Status Code != 2xx & 3xx will throw
        resolveWithFullResponse: true // IF true => Includes Status Code, Headers etc.
      });
      switch (statusCode) {
          case 200:
            console.info(body);
          // If not Whitelisted Proxy will reject with 403. Body contains also a message indicating that
          case 403:
            console.error('Domain is not whitelisted');
          default:
            console.error(`Recieved unexpected status code `);
      }
    } catch(error) {
      // Handle error based on your integration by providing a legit fallback operation.
      console.error(`received following error message: ${error.message}`);
    }
```

### Read Secret

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    const secretClient = Toolbelt.SecretClient();
    
    try {
      // secrets will be obtained from the Secret Store every time, they will not be cached
      const { key, value } = await secretClient.readSecret('YOUR_SECRET');
    } catch(error) {
      // Handle error based on your integration by providing a legit fallback operation.
      console.error(`received following error message: ${error.message}`);
    }
```

### Update Secret

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    const secretClient = Toolbelt.SecretClient();
    
    try {
      const updatedSecret = { key: 'YOUR_SECRET', value: 'some updated secret' };
      await secretClient.updateSecret(updatedSecret);
    } catch(error) {
      // Handle error based on your integration by providing a legit fallback operation.
      console.error(`received following error message: ${error.message}`);
    }
```

### Salesforce

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    const { payload } = input;
    const sfClient = Toolbelt.SFClient(); // For API Docs look @ https://jsforce.github.io/  // Recommended: Leverage accessToken (non expiring)
    const con = sfClient.connectToSalesforce({
      instanceUrl: 'https://test.salesforce.com',
      accessToken: 'PROVIDE_YOUR_ACCESS_TOKEN', // Obtain it from Secret Store
    }); // Alternative: Leverage Username + password (Not recommended)
    const userCon = sfClient.connectToSalesforce({
      loginUrl: 'https://test.salesforce.com',
    });
    userCon
      .login(process.env.USER, process.env.PASS)
      .then((_) => {
        /* Proceed once logged in */
      })
      .catch((error) => {
        console.error(`received following error message: ${error.message}`);
      });
    const filterName = payload.filterName || 'cars';
    const query = `SELECT id, LPSiteID1__c, Name, Website, Phone, Type, Industry, Description FROM Account WHERE Name like '%%'`;
    con.query(query, function (error, queryResult) {
      if (error) {
        console.error(`received following error message: ${error.message}`);
      }
      const [firstRecord] = queryResult.records;
      const result = {
        totalSize: queryResult.totalSize,
        firstRecord: firstRecord,
      };
      console.info(result);
    });
```

### SDE Util

```javascript
    const { Toolbelt, SDETypes } = require('lp-faas-toolbelt');
    const sdeUtil = Toolbelt.SDEUtil();
    
    // Define parameters
    const visitorId = 'YOUR_VISITOR_ID';
    const sessionId = 'YOUR_SESSION_ID';
    const sdes = [
      {
          type: SDETypes.PERSONAL_INFO,
          personal: {
              contacts: [
                  {
                      email: 'john.doe@example.com'
                  }
              ]
          }
      }
    ];
    
    try {
      const response = await sdeUtil.addSDEs(sdes, visitorId, sessionId);
      // Handle response
      console.info(response);
      // You can also extract SDEs from a conversation you fetched before (using Toolbelts ConversationUtil())
      const sdes = sdeUtil.getSDEsFromConv(YOUR_CONVERSATION);
      // Handle SDEs
      console.info(sdes);
    } catch(error) {
      // Handle error based on your integration by providing a legit fallback operation.
      console.error(`received following error message: ${error.message}`);
    }
```

### Create Context Session Store

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    const contextClient = Toolbelt.ContextServiceClient('YOUR_DEVELOPER_KEY');

    const accountId = process.env['BRAND_ID'];
    const sessionId = 'YOUR_SESSION_ID';
    const namespace = 'YOUR_NAMESPACE';
    const properties = {
      // data to store
    };

    try {
      // If no sessionId is passed, it will take the __default__ session.
      const sessionProperties = await contextClient.setPropertiesInNamespace(
        accountId,
        namespace,
        properties,
        sessionId
      );
      console.info(sessionProperties);
    } catch (error) {
      console.error('Could not set properties in the context store');
    }
```

### Read Context Session Store

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    const contextClient = Toolbelt.ContextServiceClient('YOUR_DEVELOPER_KEY');

    const accountId = process.env['BRAND_ID'];
    const sessionId = 'YOUR_SESSION_ID';
    const namespace = 'YOUR_NAMESPACE';
    const property = 'YOUR_PROPERTY';

    try {
      // If no sessionId is passed, it will take the __default__ session.
      const sessionProperty = await contextClient.getPropertyInSession(accountId, namespace, property, sessionId);
      console.info(sessionProperty);
    } catch (error) {
      console.error('Could not fetch property from the context store');
    }
```

### Update Context Session Store

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    const contextClient = Toolbelt.ContextServiceClient('YOUR_DEVELOPER_KEY');

    const accountId = process.env['BRAND_ID'];
    const sessionId = 'YOUR_SESSION_ID';
    const namespace = 'YOUR_NAMESPACE';
    const properties = {
      // data to update
    };

    try {
      // If no sessionId is passed, it will take the __default__ session.
      const sessionProperties = await contextClient.updatePropertiesInNamespace(
        accountId,
        namespace,
        properties,
        sessionId
      );
      console.info(sessionProperties);
    } catch (error) {
      console.error('Could not update properties in the context store');
    }
```

### Delete Context Session Store

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    const contextClient = Toolbelt.ContextServiceClient('YOUR_DEVELOPER_KEY');

    const accountId = process.env['BRAND_ID'];
    const sessionId = 'YOUR_SESSION_ID';
    const namespace = 'YOUR_NAMESPACE';
    const property = 'YOUR_PROPERTY';

    try {
      // If no sessionId is passed, it will take the __default__ session.
      await contextClient.deletePropertyInSession(
        accountId,
        namespace,
        property,
        sessionId
      );
      console.info('Property deleted');
    } catch (error) {
      console.error('Could not delete property from the context store');
    }
```