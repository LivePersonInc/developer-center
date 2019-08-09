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

### SDK Requirements

- Xcode 9.3 and up, (XCode version 10.2.1 and up is highly recommended)
- Minimum deployment target iOS 11.3 (iOS 12.1 and up is highly recommended).
- Swift 4.2 and up
- An iMessage App / Extension target
- App Groups configured and enabled in 'Capabilities'

### Apple and LivePerson Configuration

1. Make sure you have an Apple Business Chat business ID.
2. Contact your LivePerson account representative to enable this SDK on the backend server.

### SDK Installation in XCode

#### Manual installation

See the [SDK code on GitHub](https://github.com/LivePersonInc/lpabcsdk).

Copy the `LPABCSDK.framework` to your XCode project, make sure it is included in the **Embedded Binaries** section, under the **project settings/General** tab in the main app target, and in the **Linked Frameworks and Libraries** in the iMessageApp Target, as well as in **Linked Binary With Libraries** under **Build Phases** of each implementing target.

#### CocoaPods installation

Install CocoaPods:

  ```bash
  sudo gem install cocoapods
  ```

Navigate to your project folder and create a Podfile for your project:

  ```bash
  pod init
  ```

Open the Podfile.

  ```bash
  open -a Xcode Podfile
  ```

Add the LPABCSDK pod to integrate it into your Xcode project. Make sure you change the target name to **your** target name:

  ```ruby
  target '<Your Target Name>' do
      platform :ios, '11.3'
      use_frameworks!
      pod 'LPABCSDK'
  end
  ```

### SDK Integration

1. In project settings of host app target, navigate to the Build Phases tab, and click the + button to paste the following:

   `bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPABCSDK.framework/framework-strip.sh"`

   This script removes unused architectures from the binary. This is pointing to the actual script available in the SDK framework.

2. For each implementing target, make sure to enable **App groups** in the capabilities section in XCODE.

3. In the `info.plist` file of each implementing target, create a dictionary with the key `LPABC_PARAMS` and add a key-value pair of `lpabc_appgroup : <your_app_group_id>`

    {: .important}
    Your app group id should be the same across all implementing targets.

4. Add `import LPABCSDK` to the relevant class files and [initialize the SDK](apple-business-chat-sdk-implementation.html#initializing-the-sdk).

5. In the iMessage app/extension's `MessagesViewController` class, please make sure to override the following methods:

- `override func didBecomeActive(with conversation: MSConversation)`
- `override func didSelect(_ message: MSMessage, conversation: MSConversation)`
- `override func didReceive(_ message: MSMessage, conversation: MSConversation)`

For passing in references to the SDK (optional), please and use `SDKParams` to reference elements such as `MSMessagesAppViewController`, etc. See the override of `viewDidLoad()` in the example below.

In the implementation of these methods, add the appropriate `update()` methods for each, seen in the example below.

#### Example

```swift
import LPABCSDK

class MessagesViewController : MSMessagesViewController {

    var lpabcsdk = LPABCSDK.initializeSDK()
    var sdkParams: SDKParams?

    override func viewDidLoad() {
        super.viewDidLoad()

        self.sdkParams =
        SDKParams(messagesViewController: self,
            secureFormReplyImagee: <Reference to a `UIimage` used for s secure form reply message MSMessageLayout image>,
            secureFormReplyText: `<Contextual text for you secure form reply message in Live Engage>`)
    }

    override func didBecomeActive(with conversation: MSConversation) {
        lpabcsdk.update(with: conversation, sdkParams: sdkParams)
    }

    override func didReceive(_ message: MSMessage, conversation: MSConversation) {
        lpabcsdk.update(with: conversation, message: message)
    }

    override func didSelect(_ message: MSMessage, conversation: MSConversation) {
        lpabcsdk.update(with: conversation, message: message, sdkParams: sdkParams)

    }

}
```

This will enable the SDK to send SDEs ([Engagement Attributes](engagement-attributes-types-of-engagement-attributes.html)) to LiveEngage.
