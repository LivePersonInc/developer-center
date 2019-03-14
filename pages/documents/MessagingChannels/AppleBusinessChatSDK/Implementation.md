---
pagename: Implementation
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Apple Business Chat SDK
permalink: apple-business-chat-sdk-implementation.html
indicator: messaging
---

### Initializing the SDK

This method initializes the SDK. 

```swift
LPABCSDK.initializeSDK() // default minimumLogLevel will be .info and enableLog will be true

LPABCSDK.initializeSDK(minimumLogLevel: .trace, enableLog: false)
```

### Update the SDK with Incoming CIM 

Upon an agent sending a [Custom Interactive Message (CIM)](apple-business-chat-templates-custom-interactive-message-template.html) to the consumer, this method will update the SDK with a payload that will enable SDE reporting to LiveEngage.

```swift
self.lpabcsdk.updateWithIncomingInteractiveMessage(with: conversation, message: message)
```

Should be implemented from both override functions:
- `didBecomeActive(with conversation: MSConversation)`
- `didReceive(_ message: MSMessage, conversation: MSConversation)`

in the iMessage extension `MSMessagesAppViewController`

See [step 6 of Installation for more](apple-business-chat-sdk-installation.html#sdk-installation-in-xcode).

### Create SDEs

When you create one or more SDEs, they get added to a Stack that the framework manages for you.

The `createSDE` function generates an SDEBase object.

Pass in the [SDE type](engagement-attributes-types-of-engagement-attributes.html) that you want, and it will return an sdeBase object with reference to the relevant sde template.

Inside of the completion callback, on the sde setup method, it is required to define the relevant params to initiate the sde.

Example 1: 

```swift
lpabcsdk.createSDE(sdeType: .visitorError) { (sdeBase) in
    sdeBase.visitorError?.setup(
        contextId: "<CONTEXID>",
        message: "<MESSAGE>",
        code: "<CODE>",
        level: 0,
        resolved: true
    )
}
```

Example 2:

```swift
lpabcsdk.createSDE(sdeType: .cartUpdate) { (sdeBase) in
    //Create a product:
    let product = SDEProduct.init(
        name: "<>", 
        category: "<>", 
        sku: "<>", 
        price: 100, 
        quantity: 3
    )
    
    //Setup the sde:
    sdeBase.cartUpdate?.setup(
        total: 100, 
        currency: "<>", 
        numItems: 1, 
        products: [product]
    )
}
```

The sde `.setup` could be also be created with a **json** string or **Dictionary** object:
	  
Example:

```swift
sdeBase.setupWithJson("{\"type\":\"ctmrinfo\"}")
sdeBase.setupWithJson(["type":"cart"])
```

#### Auto Send When Idle

The optional `autoSendWhenIdle` parameter, when set to true, will add the sde to the **idleStack** which will get sent automatically once the [stack idle timeout](#Idle-SDE-Stack-Timeout) is met. Default is 5 sec but could be anything between 0-15 sec. See `setSDEStackIdleInterval(interval:)`

Example:

```swift
lpabcsdk.createSDE(sdeType: .customerInfo, autoSendWhenIdle: true) { (sdeBase) in
    sdeBase.customerInfo?.setup(
        cstatus: "<cstatus>",
        ctype: "<ctype>",
        balance: 10,
        currency: "<currency>",
        socialId: "<socialId>",
        imei: "<imei>",
        userName: "<userName>",
        companySize: 30,
        companyBranch: "<companyBranch>",
        accountName: "<accountName>",
        role: "<role>",
        loginStatus: 0,
        storeZipCode: "<storeZipCode>",
        storeNumber: "<storeNumber>",
        lastPaymentDate: SDEDate.init(
            day: 23, 
            month: 4, 	
            year: 2019
        ),
        registrationDate: nil
    )
}
```

### Sending SDE

In order to **manually** send the SDE Stack, use the following:

```swift
lpabcsdk.sendSDEStack()

// or using completion callbacks:
lpabcsdk.sendSDEStack(onSuccess: { (success) in
    // success block
}) { (error) in
    // error block
}
```

### Idle SDE Stack Timeout

This will setup an Idle timeout interval for auto sending the idle SDE stack (optional). Default is 5 seconds and Max is 15.

```swift
lpabcsdk.setSDEStackIdleInterval(interval:15)
```

See the [Auto Send When Idle](#Auto-Send-When-Idle) optional parameter in [Create SDEs](#create-sdes).

### Idle SDE Stack Send Completion Closure

If you want to execute code whenever the Idle SDE Stack send completes, implement the `idleSDEStackCompletion` closure:

```swift
lpabcsdk.idleSDEStackCompletion = {  completion, error in
    // debug code
}

```

### Implicit Event Callback

Some consumer actions can trigger an implicit SDE flow (eg. a new conversation starts). If you would like to send an SDE upon one of these events triggering, you can do so by implenting the `implicitSDEClosure` method.

```swift
lpabcsdk.implicitSDEClosure = { implicitEventCallbackType in 
    // implement 
}
```

- `ImplicitEventCallbackType` - Indicates the type of implicit event that is being called back from the implicitSDEClosure. 

- `implicitSDEClosure` - Invoked when a qualifying event is met, and callback the type of that event 


You can set the desired SDEs to express your custom reporting for the  event triggered. 

**Supported Event Types**:
    - `newConversation` - Receiving a new, first time CIM - per conversation.

Example:

```swift
lpabcsdk.implicitSDEClosure = { implicitType in 
    switch implicitType {
        case .newConversation:
            // Create and send desired SDE
    }
}
```

### Reply CIM from Consumer to Agent

An agent can recieve back from the consumer a Custom Interactive Message with contextual text. This text can be displayed to the agent in the LiveEngage workspace.

For example, if the consumer selects a product inside of your iMessage app, the Agent can see which product they selected via the `textContent` of this method.

```swift
// create MSMessage object

lpabcsdk.appendReplayMessagePayload(message: MSMessage, textContext: String)

// send MSMessage object
```

Pass in the initiated MSMessage object, and the desired textual String. 
