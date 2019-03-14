---
pagename: Installation
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Apple Business Chat SDK
permalink: apple-business-chat-sdk-installation.html
indicator: messaging
---

### Prerequisites

- Xcode 9.3 and up
- Minimum deployment target iOS 11.3
- Swift 4.2  
- An iMessage App / Extension target

### LE Account Configuration/ Server side installation
 
1.  Make sure you have an ABC biz ID.
2. In houston, ‘App management' use template/custom to create a json stab:
	- Make sure to populate a "client_name". The rest of the json is not needed and could be disposed. 
	- Click “install”, The generated ‘appInstallId’ will show up in the 'Private installed Apps' tab, under the client_name you created.
3. Enable ABC SDK via Houston:
	- go to: Messaging Gateway- Apple
	- Enable SDK enabled flag to ‘true’
	- Paste the 'app install id' from previous step
	- Paste in the 'biz id' from first step
	
4. Make sure site settings enabled with messaging.sdes (set flag to ‘true’)
5. Make sure site setting file sharing is enabled (messaging.file.sharing.enabled) flag is set to ‘true’

### SDK Installation in XCode

See the [SDK code on GitHub](https://github.com/LivePersonInc/lpabcsdk).

1. Copy lpabcsdk.framework to your XCode project, make sure it is included in **Embedded Binaries** section, under **project settings/ General** tab for the iMessageApp Target, and  your App target (if needed ).

2. In project settings, navigate to the Build Phases tab, and click the + button to paste the following:

    `${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPABCSDK.framework/LPABCSDKStrippingScript.sh`

3. For each implementing target, make sure to enable App groups in capabilities section in the info.plist: 
	- create a dictionary with the key `LPABC_PARAMS` and add a key `lpabc_appgroup`  with the value of your app group (same across all targets):  `lpabc_appgroup : <your_app_group_id>`

4. Import lpabcsdk and initialize the SDK  
5. For enabling sde reporting ability, In the iMessage app/extension add the following code in the overrides of

    - override `func didBecomeActive(with conversation: MSConversation)`	 
    - override `func didReceive(_ message: MSMessage, conversation: MSConversation)`  of MSMessagesAppViewController:

    ```swift
        self.lpabcsdk.updateWithIncomingInteractiveMessage(with: conversation, message: message)
    ```
