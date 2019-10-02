---
pagename: Context Session Store Wrapper
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-context-session-store-wrapper.html
indicator: both
---

The following built-in functions are a convenient wrapper on top of the Maven [Context Session Store](maven-context-warehouse-context-session-store.html) API.

{: .important}
Please see the [Scripting Functions Introduction](conversation-builder-scripting-functions-introduction.html) for more information on Conversation Builder's built-in functions.

### Getting Started

#### Set up the Context Session Store

To enable the Context Session Store API on your account, go to the Edit Account page and Enable Context API.

<img src="img/setupContextSessionStoreCB.png" class="fancyimage" style="width:750px">

LiveEngage Site Id or Organization Id can be used to get the Maven credentials.

#### Conversation Builder Data Scopes

This wrapper supports setting data in the following Conversation Builder scopes:

- Conversation

    - Data set in this scope is only available in the current conversation.

- User

    - Data set in this scope is available to the User. Once it is set, it is available in all the same user's conversations.

- Global

    - Data set in this scope is available to the bot in all conversations.

### Namespaces

#### Register Context Namespace

The register context namespace method allows you to [create a custom namespace](maven-context-warehouse-context-session-store.html#create-a-custom-namespace).

{: .important}
If the namespace already exists, this method will not create an additional one. It will use the existing namespace.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `registerContextNamespace(namespace)` | namespace (string) – The name of the namespace. | Boolean |

##### Example

```javascript
var success = botContext.registerContextNamespace("airlineTicketingBot");
botContext.printDebugMessage("Register Namespace: " + success);
```

#### Delete Context Namespace

The delete context namespace method allows you to [delete a custom namespace](maven-context-warehouse-context-session-store.html#delete-a-custom-namespace).

{: .important}
It is not mandatory to delete a previously registered namespace.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `deleteContextNamespace(namespace)` | namespace (string) – The name of the namespace. | Boolean |

##### Example

```javascript
var success = botContext.deleteContextNamespace("airlineTicketingBot");
botContext.printDebugMessage("Delete Namespace: " + success);
```

### Set Variable

The following methods will [set a variable in the Context Session Store](maven-context-warehouse-context-session-store.html#set-custom-namespace-properties) at three different [Conversation Builder scopes](conversation-builder-scripting-functions-context-session-store-wrapper.html#conversation-builder-data-scopes).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setContextDataForUser(namespace, property, value)` | namespace (string), property (string), value (object) | Boolean |
| `setContextDataForConversation(namespace, property, value)` | namespace (string), property (string), value (object) | Boolean |
| `setGlobalContextData(namespace, property, value)` | namespace (string), property (string), value (object) | Boolean |

#### Examples

```javascript
var success = botContext.setContextDataForUser("airlineTicketingBot", "intentThreshold", 2);
botContext.printDebugMessage("set context data for user scope: " + success);

var success = botContext.setContextDataForConversation("airlineTicketingBot", "intentThreshold", 2);
botContext.printDebugMessage("set context data for conversation scope: " + success);

var success = botContext.setGlobalContextData("airlineTicketingBot", "intentThreshold", 2);
botContext.printDebugMessage("set context data for global scope: " + success);
```

### Get Variable

The following methods will [get a variable from the Context Session Store](maven-context-warehouse-context-session-store.html#get-one-property) at three different [Conversation Builder scopes](conversation-builder-scripting-functions-context-session-store-wrapper.html#conversation-builder-data-scopes).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getContextDataForUser(namespace, property)` | namespace (string), property (string) | Object |
| `getContextDataForConversation(namespace, property)` | namespace (string), property (string) | Object |
| `getGlobalContextData(namespace, property)` | namespace (string), property (string) | Object |

#### Examples

```javascript
var value = botContext.getContextDataForUser("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("get context data for user scope: " + value);

var value = botContext.getContextDataForConversation("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("get context data for conversation scope: " + value);

var value = botContext.getGlobalContextData("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("get context data for conversation scope: " + value);
```

### Get All Variables

The following methods will [get all variables from the Context Session Store](maven-context-warehouse-context-session-store.html#get-all-namespace-variables-or-properties) at two different [Conversation Builder scopes](conversation-builder-scripting-functions-context-session-store-wrapper.html#conversation-builder-data-scopes).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getContextDataForUser(namespace, property)` | namespace (string) | Object |
| `getContextDataForConversation(namespace, property)` | namespace (string) | Object |

#### Examples

```javascript
var valuesMap = botContext.getContextDataForUser("airlineTicketingBot");
botContext.printDebugMessage("get context data for user scope: " + valuesMap);

var valuesMap = botContext.getContextDataForConversation("airlineTicketingBot");
botContext.printDebugMessage("get context data for conversation scope: " + valuesMap);
```

### Delete Variable

The following methods will [delete a variable from the Context Session Store](maven-context-warehouse-context-session-store.html#delete-a-property) at three different [Conversation Builder scopes](conversation-builder-scripting-functions-context-session-store-wrapper.html#conversation-builder-data-scopes).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `deleteContextDataForUser(namespace, property)` | namespace (string), property (string) | Boolean |
| `deleteContextDataForConversation(namespace, property)` | namespace (string), property (string) | Boolean |
| `deleteGlobalContextData(namespace, property)` | namespace (string), property (string) | Boolean |

#### Examples

```javascript
var success = botContext.deleteContextDataForUser("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("delete context data for user scope: " + success);

var success = botContext.deleteContextDataForConversation("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("delete context data for user scope: " + success);

var success = botContext.deleteGlobalContextData("airlineTicketingBot", "intentThreshold");
botContext.printDebugMessage("delete context data for user scope: " + success);
```