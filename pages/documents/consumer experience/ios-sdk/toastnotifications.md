---
title: Customizing Toast Notifications
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS

order: 16
permalink: consumer-experience-ios-sdk-toastnotifications.html

indicator: messaging
---

This guide was written for SDK v2.8.3.0, iOS 11.0, and Swift 4.

_**Note**: once your app is capable of receivinging Push Notifications, you can customize the way In-App notifications are displayed, and their behavior._

### Step 0: Adding Push Notifications (Optional)

1. if you need to Configure the Push Notifications follow this [Guide](https://lpgithub.dev.lprnd.net/dvillacis/SwiftSDK2.8#step-4-configuring-app-for-push-notifications)

### Step 1: LPMessagingSDK Notification Delegate

1. On your AppDelegate declaration, add the **LPMessagingSDKNotificationDelegate**

```swift
class AppDelegate: UIResponder, UIApplicationDelegate, LPMessagingSDKNotificationDelegate {
```

2. Locate the **didRegisterForRemoteNotificationsWithDeviceToken** method, and add the following method:

```swift
// Register Token on LPMesssaging Instance
LPMessagingSDK.instance.registerPushNotifications(token: deviceToken, notificationDelegate: self)
```

Note: if you were using the **LPMessagingSDK.instance.registerPushNotifications(token: deviceToken)**, you'll need to change your method to match this one.

3. Implementing the **LPMessagingSDKNotificationDelegate**, gives you access to the following methods:

```swift

  /// Will handle custom behavior if LP Push Notification was touched
  ///
  /// - Parameter notification: LP Notification ( text, user: Agent(firstName, lastName, nickName, profileImageURL, phoneNumber, employeeID, uid), accountID , isRemote: Bool)
  func LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification) {}

  /// Override SDK - In-App Push Notification
  /// Behavior for tapping In-App Notification should be handled, when using a custom view no behavior is added, LPMessagingSDKNotification(notificationTapped) can't be used
  ///
  /// - Parameter notification: LP Notification ( text, user: Agent(firstName, lastName, nickName, profileImageURL, phoneNumber, employeeID, uid), accountID , isRemote: Bool)
  /// - Returns: Custom View
  func LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView {}

  /// This method is overridden when using a Custom View for the In-App Notification (LPMessagingSDKNotification(customLocalPushNotificationView)
  /// Add Custom Behavior to LPMessaging Toast View being tapped
  ///
  /// - Parameter notification: LP Notification ( text, user: Agent(firstName, lastName, nickName, profileImageURL, phoneNumber, employeeID, uid), accountID , isRemote: Bool)
  func LPMessagingSDKNotification(notificationTapped notification: LPNotification) {}

  /// This method will hide/show the In-App Push Notification
  ///
  /// - Parameter notification: LP Notification ( text, user: Agent(firstName, lastName, nickName, profileImageURL, phoneNumber, employeeID, uid), accountID , isRemote: Bool)
  /// - Returns: true for showing Push Notifications/ false for hidding In-App Push Notification
  func LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification) -> Bool {}
  
```

### Step 2: Implementing LPMessagingSDK Notification Delegate

#### Using **LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification)**

- This method gives you the ability to handle custom behavior if received Push Notification via the LPMessagingSDKNotification Delegate

```swift
func LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification) {
}
```

#### Using **LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification)**

- This method gives you the ability to Hide or Show the Push Notifications for the LPMessagingSDK

```swift
func LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification) -> Bool {
  // Return false if you don't want to show Push Notification
  return true
}
```

#### Using **LPMessagingSDKNotification(notificationTapped notification: LPNotification)`**

- This method gives you the ability to handle the action when a User taps on the Local Notification (Toast)

  - Lets suppose you want to take the user to a specific ViewController when they tap on the Toast. In order to do that, you will need to add this code:

```swift
func LPMessagingSDKNotification(notificationTapped notification: LPNotification) {
  // Get Storyboard
  let storyboard = UIStoryboard(name: "Main", bundle: nil)
  // Get Messaging View Controller
  let destinationViewController = storyboard.instantiateViewController(withIdentifier:"YOUR_VIEW_CONTROLLER_ID") as? YOUR_VIEW_CONTROLLER
  // Get Navigation Controller
  let navigationController = self.window?.rootViewController as! UINavigationController
  // Push MessagingView to Navigation Controller
  navigationController.pushViewController(destinationViewController!, animated: true)
}
```

_Note: For you to be able to use the method **storyboard.instantiateViewController(withIdentifier:)**, your ViewController needs to have a Storyboard ID on the **Identity Inspector**_

  <p align="center">
    <img src="https://lpgithub.dev.lprnd.net/storage/user/634/files/211f0c9e-b585-11e7-873f-6ba4178093a7" width="45%" height="45%">
  </p>

#### Using **LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView**

- This method gives you the ability to override the LPMessagingSDK Local Push Notification View to one that suits your needs

1. Create a new CocoaTouch Class that is subclass of UIView,

2. On your new Class, create a new method that returns a **UIView** and takes a String as an argument, this will be the Message shown on the Toast,

3. On your method, add this code:

```swift
// Get Device Screen Size
let screenSize = UIScreen.main.bounds
// Create new Toast View
let view = UIView(frame: CGRect(x: 0, y: 0, width: screenSize.width, height: 100.0))
// Set Toast View - Frame Origin (top-left)
view.frame.origin = CGPoint(x: 0, y: 0)
// Set New Toast View Background Color
view.backgroundColor = UIColor(red:0.04, green:0.00, blue:0.00, alpha:0.8)
// Label Hieght
let labelHeight = view.frame.height-10
// Label Width
let labelWidth = view.frame.width-10
// Create new Label
let label = UILabel(frame: CGRect(x: 0, y: 0, width: labelWidth, height: labelHeight))
// Set Label Origin - Relative to the UIView
label.frame.origin = CGPoint(x: view.frame.origin.x+10, y: view.frame.origin.y+10)
// Create new Text for Notification
let notificationText = NSAttributedString(string:message, attributes: [
  // Set Text Color for Label
  NSAttributedStringKey.foregroundColor : UIColor.white,
  // Set Text Font & Size for Label
  NSAttributedStringKey.font : UIFont(name: "System Font Regular", size: 15.0)!,
  ]
)
// Set Notification Text
label.attributedText = notificationText
// Set Text Alignment
label.textAlignment = .center
// Set Line Break
label.lineBreakMode = NSLineBreakMode.byWordWrapping
// Set Number of Lines
label.numberOfLines = 3
// Add Label to View
view.addSubview(label)
// Return View
return view
```

  - To change the background color of the Toast:

```swift
view.backgroundColor = UIColor(red:0.04, green:0.00, blue:0.00, alpha:0.8)
```

**Note**: you can select a color from the available ones on the UIColor [Library](https://developer.apple.com/documentation/uikit/uicolor), or you can use UIColor(red:green:blue:alpha:) to create your own.

  - To change the color of the Text shown on the Toast:

```swift
// Set Text Color for Label
NSAttributedStringKey.foregroundColor : UIColor.white,
```

**Note**: you can select a color from the available ones on the UIColor [Library](https://developer.apple.com/documentation/uikit/uicolor), or you can use UIColor(red:green:blue:alpha:) to create your own.

  - To change the Font or Size of the Text shown on the Toast:

```swift
// Set Text Font & Size for Label
NSAttributedStringKey.font : UIFont(name: "System Font Regular", size: 15.0)!,
```

4. Now on your **AppDelegate**, on the **LPMessagingSDKNotification(customLocalPushNotificationView)** method, add the following:

```swift
// Get new Toast View
let toast = Toast().getView(message: notification.text)
// Return new Toast View
return toast
```

**Note**: Toast() is the CocoaTouch class used to create the new View, you should use the name of the class you created. The LPNotification object gives you access to the following properties:

- **text** -> Actual Push Message, this one is the text typed by the Agent on LiveEngage

- **accountID** -> Account Number

- **isRemote** -> if it is a Push Notification

You will need to use -> notification.text to populate your Toast UILabel


### Step 3: Adding a Gesture Recognizer to Custom Local Push Notification View (Optional)

if you're using the **LPMessagingSDKNotification(customLocalPushNotificationView notification:)** method, it is important to consider that the **LPMessagingSDKNotification(notificationTapped notification:)** method will be disabled by the SDK and you will need to handle the Tap action yourself. We'll handle that one next.

1. On the class you created for the custom view, before returning the view, add this:

```swift
// Enable Touch
view.isUserInteractionEnabled = true
// Add Tag to View
view.tag = 0xDEADBEEF
```

**Note:** with this action, we are performing two things: we enable the UIView for user interaction, and we give the UIView a tag so we can reference it later.

2. On your **AppDelegate** locate the **LPMessagingSDKNotification(customLocalPushNotificationView notification:** method and before your return statement add the following:

```swift
// Create Gesture Recognizer
let gesture = UITapGestureRecognizer()
// Add Number of Taps Need to trigger Action
gesture.numberOfTapsRequired = 2
// Add Action to Gesture
gesture.addTarget(self, action: #selector(toastTapped(_:)))
// Add Gesture to UIView
toast.addGestureRecognizer(gesture)
```

**Note:**
    - First, we create a new UITapGestureRecognizer,
    - Second, we set the gesture to require two taps to respond,
    - Third, we add a target action name **toastTapped(_:)**,
    - Last, we add the gesture to our UIView

At the end your method should look like this:

```swift
func LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView {
  // Get View
  let toast = Toast().getView(message: notification.text)
  // Create Gesture Recognizer
  let gesture = UITapGestureRecognizer()
  // Add Number of Taps Need to trigger Action
  gesture.numberOfTapsRequired = 2
  // Add Action to Gesture
  gesture.addTarget(self, action: #selector(toastTapped(_:)))
  // Add Gesture to UIView
  toast.addGestureRecognizer(gesture)
  // Return new View
  return toast
}
```

3. Now on your **AppDelegate** create a new method call **toastTapped**, this will handle the User Interaction

```swift
@objc func toastTapped(_ gesture : UITapGestureRecognizer){
  // Get Toast View
  if let toast = self.window?.viewWithTag(0xDEADBEEF) {
    // Remove toast when tapped
    toast.removeFromSuperview()
  }
  // Get Storyboard
  let storyboard = UIStoryboard(name: "Main", bundle: nil)
  // Get Messaging View Controller
  let destinationViewController = storyboard.instantiateViewController(withIdentifier:"YOUR_VIEW_CONTROLLER_ID") as? YOUR_VIEW_CONTROLLER
  // Get Navigation Controller
  let navigationController = self.window?.rootViewController as! UINavigationController
  // Push MessagingView to Navigation Controller
  navigationController.pushViewController(destinationViewController!, animated: true)
}
```

**Notes:**

 - First, the **@objc** prefix will let this method be used as a **#selector**,

 - Second, we use **self.window?.viewWithTag(tag:int)** to get our View,

 - Third, if our UIView is different from  **nil** , we will remove it from the main view, so when we move the user to the Messaging View Controler the Toast is not there,

 - Last, use the same code we had on the method **LPMessagingSDKNotification(notificationTapped notification:)** to take the user to the Messaging Screen
