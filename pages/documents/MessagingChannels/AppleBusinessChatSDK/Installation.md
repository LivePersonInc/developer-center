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
- An iMessage App / Extension

### LE Account Configuration/ Server side installation

1. Enable SDK via Houston:  Messaging Gateway- Apple, set SDK Enabled flag to ‘true’
2. Enable App installation and obtain appinstallID in houston/Messaging Gateway/Apple
3. Make sure site settings enabled with messaging.sdes
4. Make sure site setting file sharing isset to 'true'

### XCode Installation

See the [SDK code on GitHub](https://github.com/LivePersonInc/lpabcsdk).

1. Copy `lpabcsdk.framework` to your XCode project, make sure it is included in Embedded Binaries section, under project settings / General tab for the iMessageApp Target, and your App target (if needed).
    
2. In project settings, navigate to the Build Phases tab, and paste the following:

    `${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPABCSDK.framework/LPABCSDKStrippingScript.sh`
   
3. In the `info.plist` of each implemented targets, create a dictionary with the key `LPABC_PARAMS` and add a key: `lpabc_appgroup` with the value of your app group:

    `lpabc_appgroup : <your_app_group_id>`

4. Import `lpabcsdk` and initialize the SDK

5. For enabling sde reporting ability, In the iMessage app/extension -  add the following code in the overrides of
	- override func `didBecomeActive(with conversation: MSConversation)` AND
	- override func `didReceive(_ message: MSMessage, conversation: MSConversation)`  of MSMessagesAppViewController: `self.lpabcsdk.updateWithIncomingInteractiveMessage(with: conversation, message: message)`
