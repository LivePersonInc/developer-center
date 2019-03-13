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

```	LPABCSDK.initializeSDK() - default: log level will be .info, enable = true
	LPABCSDK.initializeSDK(minimumLogLevel: .trace, enableLog: true)
```

### Update the SDK upon recieving a new CIM

```
	self.lpabcsdk.updateWithIncomingInteractiveMessage(with: conversation, message: message)

```

Updating SDK with an incoming CIM for caching SDE reporting ability relevant payload. 

Should be implemented from both override functions:
- `didBecomeActive(with conversation: MSConversation)`
- `didReceive(_ message: MSMessage, conversation: MSConversation)`

in the iMessage extension `MSMessagesAppViewController`

### Create SDEs

**createSDE** function Generates an SDEBase object as a template reference to the relevant [SDE type](engagement-attributes-types-of-engagement-attributes.html) that passed in parameter, as a completion closure.

A setup call on the callback sde is required in order to initiate the sde with all relevant params, and add it to a stack. 

Example 1: 

```
	lpabcsdk.createSDE(sdeType: .visitorError) { (sdeBase) in

            	sdeBase.visitorError?.setup(contextId: "<CONTEXID>",
                                              message: "<MESSAGE>",
                                    		 code: "<CODE>",
                                   		level: 0,
                                             resolved: true)
        }
```

Example 2:

```
  	lpabcsdk.createSDE(sdeType: .cartUpdate) { (sdeBase) in
          
            //Create a product:
            let product = SDEProduct.init(name: "<>", category: "<>", sku: "<>", price: 100, quantity: 3)
           
            //Setup the sde:
            sdeBase.cartUpdate?.setup(total: 100, currency: "<>", numItems: 1, products: [product])
        }
```


 Setup sde could be also be created with a **json** string or **Dictionary** object:
	  
Example:
```  
	sdeBase.setupWithJson("{\"type\":\"ctmrinfo\"}")
	sdeBase.setupWithJson(["type":"cart"])
```
### Sending SDE

For sending SDE Stack,  use

```  
	lpabcsdk.sendSDEStack()  

	//Using completion callbacks:
	lpabcsdk.sendSDEStack(onSuccess: { (success) in
         	   	 
        		}) { (error) in
          		 
      	 	 }
```  

* optional - autoSendWhenIdle, when set to true, the sde will be added to the idleStack which will get sent automatically once the stack idele timeout is met. Default is 5 sec but could be anything between 0-15 sec. see `setSDEStackIdleInterval(interval:)`

Example:


```

 	lpabcsdk.createSDE(sdeType: .customerInfo, autoSendWhenIdle: true) { (sdeBase) in
            
         	  	 sdeBase.customerInfo?.setup(cstatus: "<cstatus>",
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
                                   	     lastPaymentDate: SDEDate.init(day: 23, 
						       month: 4, 	
						        year: 2019),
                                            registrationDate: nil)
        }

```
	 
### Setting auto idle SDE Stack Time Interval

`setSDEStackIdleInterval(interval:15)`

This will setup an Idle timeout interval for auto sending the idle SDE stack (optional). Default is 5 seconds and Max is 15.


### Closure Executed upon SDE Send Completion

For getting idle stack sent completion callback, you can implement 'idleSDEStackCompletion' closure:

 	lpabcsdk.idleSDEStackCompletion = {  completion, error in
          
        }

### Implicit Event Callback: 

Some actions will trigger an implicit SDE flow. This will be in a form of a dedicated callback closure returning the type of flow - ImplicitSDEType)

- `ImplicitEventCallbackType` - Indicates the type of implicit event that is being call back from the implicitSDEClosure. 

- `implicitSDEClosure` - Invoked when a qualifying event is met, and callback the type of that event 


Then you can set the desired SDEs to express your custom reporting for the  event triggered. 
Currently the only event expressing this is upon receiving a new, first time CIM - per conversation.

The type will be called back as follow:

```   
    lpabcsdk.implicitSDEClosure = { implicitType  in 

	switch implicitType {
		case  case .newConversation:
			<YOUR CUSTOM CODE HERE i.e sendCustomerInfoSDE()>
		}
   }
```

### Textual context for an outgoing CIM (consumer to Agent) implement

`appendReplayMessagePayload(message: MSMessage, textContext: String)`

With the initiated MSMessage object, and the desired textual String. 
