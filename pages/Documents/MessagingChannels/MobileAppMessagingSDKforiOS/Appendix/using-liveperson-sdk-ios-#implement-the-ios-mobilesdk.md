---
pagename: Using LivePerson SDK - iOS #Implement the iOS MobileSDK
redirect_from:
  - consumer-experience-ios-sdk-sampleapp.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Resources

order: 246
permalink: mobile-app-messaging-sdk-for-ios-resources-using-liveperson-sdk-ios.html

indicator: messaging
---

### Prerequisites
It is important that you have followed the [Quick Start guide](/mobile-app-messaging-sdk-for-ios-quick-start.html).  If not, make sure to install the LivePerson Mobile App Messaging SDK before proceeding. 



### Step 1: Customize the messaging screen
You can customize the messaging screen by adding more options to the LPMessagingSDK menu, such as **Mark as urgent**, **Clear history**, and **Resolve the conversation**.

{:.important}
You must customize your messaging screen before initializing a conversation (calling **LPMessagingSDK.instance.showConversation()**).

1. Add options to the messaging menu:

   ```swift
   // Call LPMessagingSDK Menu
   LPMessagingSDK.instance.toggleChatActions("Your Account Number")
   ```

2. Get the object containing the default configurations:

   ```swift
   // Configuration instance
   let configuration = LPConfig.defaultConfiguration
   ```

3. Call the predefined customization methods:

   ```swift
   // Set Agent User Bubble Background Color
   configuration.remoteUserBubbleBackgroundColor = UIColor.lightGray
   // Set Agent User Bubble Border Color
   configuration.remoteUserBubbleBorderColor = UIColor.lightGray
   // Set Agent Avatar Silhouette Color
   configuration.remoteUserAvatarIconColor = UIColor.white
   // Set Agent Avatar Background Color
   configuration.remoteUserAvatarBackgroundColor = UIColor.lightGray
   // Set User Bubble Background Color
   configuration.userBubbleBackgroundColor = UIColor.white
   // Set User Bubble Border Color
   configuration.userBubbleBorderColor = UIColor.lightGray
   // Set User Bubble Border Width
   configuration.userBubbleBorderWidth = 1.0
   // Set User Text Color
   configuration.userBubbleTextColor = tangerine
   // Set Scroll to Bottom Button Background Color   
   configuration.scrollToBottomButtonBackgroundColor = tangerine
   ```

4. Print the configurations:

   ```swift
   // Print Configurations
   LPConfig.printAllConfigurations()
   ```

For more details on the different attributes you are able to customize, refer to [Customizing and Branding](consumer-experience-ios-sdk-attributes.html).


### Step 2: Customize the Customer Experience Survey

{:.important}
You must customize your Customer Experience Survey before initializing a conversation (calling **LPMessagingSDK.instance.showAgentConversation()**).

1. Get the object containing the default configurations:

   ```swift
   // Configuration instance
   let configuration = LPConfig.defaultConfiguration
   ```

2. Call the predefined customization methods:

   ```swift
   // Configuration instance
   let configuration = LPConfig.defaultConfiguration
   // Set Survey Button Background Color
   configuration.csatSubmitButtonBackgroundColor = UIColor.lightGray
   // Set Survey Background Color of the Rating Buttons
   configuration.csatRatingButtonSelectedColor = UIColor.lightGray
   // Set Survey Color for the FCR survey buttons (YES/NO) when selected.
   configuration.csatResolutionButtonSelectedColor = UIColor.lightGray
   // Set Survey Text Color for all Labels.
   configuration.csatAllTitlesTextColor = UIColor.lightGray
   // Set Survey Navigation Bar Background Color
    configuration.csatNavigationBackgroundColor = UIColor.lightGray
   ```

3. Print the configurations using:

   ```swift
   // Print Configurations
   LPConfig.printAllConfigurations()
   ```

For more details on the different attributes you are able to customize, refer to [Attributes](mobile-app-messaging-sdk-for-ios-customization-and-branding-attributes.html#surveys-buttons-csat-and-fcr).

### Step 3: Enable Photo Sharing



### Step 4: Configure App for Push Notifications

