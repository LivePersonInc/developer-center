---
pagename: Manage the Context Session Store
redirect_from:
    - conversation-builder-scripting-functions-context-session-store-wrapper.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-manage-the-context-session-store.html
indicator: both
---

The Context Session Store is a cloud-based repository for storing and retrieving session state attributes, so they can be used throughout the conversational journey. This allows for continuity in conversations as context can be transferred between agents and bots, enabling a warm hand-off. The attributes are stored as key/value pairs.

Within the Context Session Store, you can have multiple namespaces for different business use cases. Typically, a namespace groups together related attributes. For example, a namespace might contain customer information like name, email, phone number, and so on. Namespaces are per account.

In Conversation Builder, the following built-in functions for managing the Context Session Store are available. These functions are synchronous, server-side, JavaScript calls that conveniently wrap the APIs in Maven, LivePerson's AI engine.

{: .important}
All update operations return a Boolean status. It is the bot developer's responsibility to ensure the operation was executed successfully.

For a more in-depth introducton to the Context Session Store and details on the Maven API, see [Context Session Store](maven-context-warehouse-context-session-store.html).

{: .important}
New to scripting functions? Please review the [Introduction](conversation-builder-scripting-functions-introduction.html).

### Getting started

#### Set up the Context Session Store

**To enable the Context Session Store API for your account**

1. Access the *Bot Accounts* application, and click the organization name.
2. Click <img style="width:25px" src="img/ConvoBuilder/icon_editAccount.png"> in the upper-right corner.
3. If necessary, click **More Settings** to show additional settings.
4. Beside **Enable Context API**, click the slider to turn it on, i.e., enable the setting.
5. Select one of the following for retrieving the necessary Maven credentials:
    * **Use Conversational Cloud Site Id** (Only available for LivePerson accounts.)
    * **Use Conversation Builder Account Id** (This is your organization ID.)
6. Enter the ID for your selection in step 5.
7. Click **Update Account**.

#### Conversation Builder data scopes

The built-in methods support setting data in the Context Session Store in the following Conversation Builder scopes within a namespace:

- **Global**: Data set in this scope is available to the bot in all conversations.
- **User**: Data set in this scope is available to the user. Once it is set, it is available in all conversations for the same user.
- **Conversation**: Data set in this scope is only available in the current conversation.

### Is the Context API enabled?

The `isContextApiEnabled` method checks whether the Context API is enabled.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `isContextApiEnabled()` | none | Boolean |

#### Example 

```javascript
var success = botContext.isContextApiEnabled();
botContext.printDebugMessage("context api enabled: " + success);
```

### Register a namespace

The `registerContextNamespace` method creates a custom namespace.

{: .important}
If the namespace already exists, this method does not create an additional one. It uses the existing namespace.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `registerContextNamespace(namespace)` | namespace (string) – The name of the namespace | Boolean |

##### Example

```javascript
var success = botContext.registerContextNamespace("airlineTicketingBot");
botContext.printDebugMessage("Register Namespace: " + success);
```

### Delete a namespace

The `deleteContextNamespace` method deletes a custom namespace.

{: .important}
It is not mandatory to delete a previously registered namespace.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `deleteContextNamespace(namespace)` | namespace (string) – The name of the namespace | Boolean |

##### Example

```javascript
var success = botContext.deleteContextNamespace("airlineTicketingBot");
botContext.printDebugMessage("Delete Namespace: " + success);
```

### Set a variable

The following methods set a variable in the Context Session Store at three, different Conversation Builder scopes.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setGlobalContextData(namespace, property, value)` | namespace (string), property (string), value (object) | Boolean |
| `setContextDataForUser(namespace, property, value)` | namespace (string), property (string), value (object) | Boolean |
| `setContextDataForConversation(namespace, property, value)` | namespace (string), property (string), value (object) | Boolean |

#### Examples

```javascript
var success = botContext.setGlobalContextData("airlineTicketingBot", "intentThreshold", 2);
botContext.printDebugMessage("set context data for global scope: " + success);

var success = botContext.setContextDataForUser("airlineTicketingBot", "intentThreshold", 2);
botContext.printDebugMessage("set context data for user scope: " + success);

var success = botContext.setContextDataForConversation("airlineTicketingBot", "intentThreshold", 2);
botContext.printDebugMessage("set context data for conversation scope: " + success);
```

### Get a variable

The following methods get a variable from the Context Session Store at three, different Conversation Builder scopes.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getGlobalContextData(namespace, property)` | namespace (string), property (string) | Object |
| `getContextDataForUser(namespace, property)` | namespace (string), property (string) | Object |
| `getContextDataForConversation(namespace, property)` | namespace (string), property (string) | Object |

#### Examples

```javascript
var value = botContext.getGlobalContextData("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("get context data for conversation scope: " + value);

var value = botContext.getContextDataForUser("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("get context data for user scope: " + value);

var value = botContext.getContextDataForConversation("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("get context data for conversation scope: " + value);
```

### Get all variables

The following methods get all variables in a namespace in the Context Session Store at two, different Conversation Builder scopes.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getContextDataForUser(namespace)` | namespace (string) | Object |
| `getContextDataForConversation(namespace)` | namespace (string) | Object |

#### Examples

```javascript
var valuesMap = botContext.getContextDataForUser("airlineTicketingBot");
botContext.printDebugMessage("get context data for user scope: " + valuesMap);

var valuesMap = botContext.getContextDataForConversation("airlineTicketingBot");
botContext.printDebugMessage("get context data for conversation scope: " + valuesMap);
```

### Delete a variable

The following methods delete a variable from the Context Session Store at three, different Conversation Builder scopes.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `deleteGlobalContextData(namespace, property)` | namespace (string), property (string) | Boolean |
| `deleteContextDataForUser(namespace, property)` | namespace (string), property (string) | Boolean |
| `deleteContextDataForConversation(namespace, property)` | namespace (string), property (string) | Boolean |

#### Examples

```javascript
var success = botContext.deleteGlobalContextData("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("delete context data for user scope: " + success);

var success = botContext.deleteContextDataForUser("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("delete context data for user scope: " + success);

var success = botContext.deleteContextDataForConversation("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("delete context data for user scope: " + success);
```

### Delete all variables

The following methods delete all variables in a namespace from the Context Session Store at two, different Conversation Builder scopes.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `deleteAllContextDataForUser(namespace)` | namespace (string) | Boolean |
| `deleteAllContextDataForConversation(namespace)` | namespace (string) | Boolean |

#### Examples

```javascript
var success = botContext.deleteAllContextDataForUser("airlineTicketingBot");
botContext.printDebugMessage("delete all context data for user scope: " + success);

var success = botContext.deleteAllContextDataForConversation("airlineTicketingBot");
botContext.printDebugMessage("delete all context data for conversation scope: " + success);
```