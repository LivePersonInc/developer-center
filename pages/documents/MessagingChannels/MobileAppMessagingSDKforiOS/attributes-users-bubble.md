---
pagename: User's Bubble
redirect_from:
  - consumer-experience-ios-sdk-attributes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK Attributes

permalink: mobile-app-messaging-sdk-for-ios-sdk-attributes-user-s-bubble.html   

indicator: messaging
---

The goal of the following document is to enumerate the different fields controlling design attributes in the SDK. If a clearer view of which attribute corresponds with a design element is needed, please utilize the [Attributes Design Sheet](consumer-experience-ios-sdk-attributes-design-sheet.html).


### remoteUserBubbleBackgroundColor
Color code for the background of the remote user's bubble.

   - **Type:** UIColor    
   - **Default:** \#004DC9  
 
   ![remoteuserbubblebackgroundcolor](img/remoteuserbubblebackgroundcolor.png)

--- 

### remoteUserBubbleBorderColor
Color code for the outline color.

   - **Type:** UIColor    
   - **Default:** \#004DC9 

   ![remoteuserbubblebordercolor](img/remoteuserbubblebordercolor.png)

--- 

### remoteUserBubbleLinkColor
Color code for links in the text of the remote user's bubble.

   - **Type:** UIColor    
   - **Default:** UIColor.white 

   ![remoteuserbubblelinkcolor](img/remoteuserbubblelinkcolor.png)

--- 

### remoteUserBubbleTextColor
Color code for the text of the remote user's bubble.

   - **Type:** UIColor    
   - **Default:** UIColor.white 

   ![remoteuserbubbletextcolor](img/remoteuserbubbletextcolor.png)

--- 

### remoteUserBubbleBorderWidth
Double number for the outline width. 

   - **Type:** Double    
   - **Default:**  2  

   ![remoteuserbubbleborderwidth](img/remoteuserbubbleborderwidth.png)


--- 


### remoteUserBubbleTimestampColor
Color code for the timestamp of the remote user's bubble. 

   - **Type:** UIColor    
   - **Default:**  #5B5C5E

   ![remoteuserbubbletimestampcolor](img/remoteuserbubbletimestampcolor.png)

--- 


### remoteUserTypingTintColor
Color of the remote user typing bubbles animation.  

   - **Type:** UIColor    
   - **Default:**  UIColor.white

   ![remoteusertypingtintcolor](img/remoteusertypingtintcolor.png)

--- 


### remoteUserBubbleLongPressOverlayColor
Color of the remote user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.

   - **Type:** UIColor    
   - **Default:**  UIColor.black

   <img src="img/remoteUserBubbleOverlay.png" alt="remoteUserBubbleOverlay">

--- 


### remoteUserBubbleLongPressOverlayAlpha
Alpha of the remote user's bubble overlay when user uses a long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.  

   - **Type:** Float    
   - **Default:**  0.3

<img src="img/remoteUserBubbleOverlay.png" alt="remoteUserBubbleOverlay">

--- 


### remoteUserBubbleTopLeftCornerRadius  
Top left Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:**  8

   <img src="img/remoteTopLeft.png" alt="remoteTopLeft">

--- 


### remoteUserBubbleTopRightCornerRadius
Top right Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:**  8

<img src="img/remoteTopRight.png" alt="remoteTopRight">

--- 


### remoteUserBubbleBottomLeftCornerRadius
Bottom left Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:** 8

   <img src="img/remoteBottomLeft.png" alt="remoteBottomLeft">

--- 


### remoteUserBubbleBottomRightCornerRadius
Bottom right Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:** 8

   <img src="img/remoteBottomRight.png" alt="remoteBottomRight">

--- 


### userBubbleBackgroundColor
Color code for the background of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #EDEDED

<img src="img/userbubblebackgroundcolor.png" alt="userbubblebackgroundcolor">

--- 


### userBubbleBorderColor
Color code for the outline color.

   - **Type:** UIColor    
   - **Default:** #EDEDED

<img src="img/userbubblebordercolor.png" alt="userbubblebordercolor">

--- 


### userBubbleLinkColor
Color code for links in the text of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #0000ee

<img src="img/userbubblelinkcolor.png" alt="userbubblelinkcolor">

--- 


### userBubbleTextColor
Color code for the text of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** UIColor.black

<img src="img/userbubbletextcolor.png" alt="userbubbletextcolor">

--- 


### userBubbleBorderWidth
Double number for the outline width.

   - **Type:** Double    
   - **Default:** 1

<img src="img/userbubbleborderwidth.png" alt="userbubbleborderwidth">

--- 


### userBubbleTimestampColor
Color code for the timestamp of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #5B5C5E

<img src="img/userbubbletimestampcolor.png" alt="userbubbletimestampcolor">

--- 


### userBubbleSendStatusTextColor
Color code for the send status text of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #5B5C5E

<img src="img/userbubblesendstatustextcolor.png" alt="userbubblesendstatustextcolor">

--- 


### userBubbleErrorTextColor
Color code for the error view text of the visitor bubble. 

   - **Type:** UIColor    
   - **Default:** #DE0A23

<img src="img/userbubbleerrortextcolor.png" alt="userbubbleerrortextcolor">

--- 


### userBubbleErrorBorderColor
Color code for the error view border of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #DE0A23

<img src="img/userbubbleerrorbordercolor.png" alt="userbubbleerrorbordercolor">

--- 


### userBubbleLongPressOverlayColor
Color of the user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.  

   - **Type:** UIColor    
   - **Default:** UIColor.black

<img src="img/userBubbleOverlay.png" alt="userBubbleOverlay">

--- 


### userBubbleLongPressOverlayAlpha
Alpha of the user's bubble overlay when user use long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble, when the menu dismissed, overlay will disappear too. In order to show overlay enableBubblesOverlayOnLongPress should be true.  

   - **Type:** Float    
   - **Default:** 0.3

<img src="img/userBubbleOverlay.png" alt="userBubbleOverlay">

--- 


### userBubbleTopLeftCornerRadius
Top left Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.

   - **Type:** Float    
   - **Default:** 8

<img src="img/userTopLeft.png" alt="userTopLeft">

--- 


### userBubbleTopRightCornerRadius
Top right Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:** 8

<img src="img/userTopRight.png" alt="userTopRight">

--- 


### userBubbleBottomLeftCornerRadius
Bottom left Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:** 8

<img src="img/userBottomLeft.png" alt="userBottomLeft">

--- 


### userBubbleBottomRightCornerRadius
Bottom right Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float   
   - **Default:** 8

<img src="img/userBottomRight.png" alt="userBottomRight">

--- 


### bubbleEmailLinksRegex
Regular expression for email hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled

   - **Type:** String?    
   - **Default:** nil

--- 


### bubbleUrlLinksRegex
Regular expression for url hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled.

   - **Type:** String?  
   - **Default:** nil

--- 


### bubblePhoneLinksRegex
Regular expression for phone hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled.

   - **Type:** String?  
   - **Default:** nil 

--- 


### bubbleTopPadding
Define the bubble Top Padding.

   - **Type:** Float  
   - **Default:** 10

<img src="img/bubbleTopPadding.png" alt="bubbleTopPadding">

--- 


### bubbleBottomPadding
Define the bubble bottom Padding.

   - **Type:** Float  
   - **Default:** 10

<img src="img/bubbleBottomPadding.png" alt="bubbleBottomPadding">

--- 


### bubbleLeadingPadding
Define the bubble Leading Padding.

   - **Type:** Float  
   - **Default:** 10

<img src="img/bubbleLeadingPadding.png" alt="bubbleLeadingPadding">

--- 


### bubbleTrailingPadding
Define the bubble Trailing Padding.

   - **Type:** Float   
   - **Default:** 10

<img src="img/bubbleTrailingPadding.png" alt="bubbleTrailingPadding">

--- 


### bubbleTimestampBottomPadding
Define the bubble Trailing Padding.

   - **Type:** Float    
   - **Default:** 5

<img src="img/bubbleTimestampBottomPadding.png" alt="bubbleTimestampBottomPadding">

--- 


### bubbleTimestampTopPadding
Define the bubble Timestamp Top Padding.

   - **Type:** Float  
   - **Default:** 5

<img src="img/bubbleTimestampTopPadding.png" alt="bubbleTimestampTopPadding">

--- 


### enableEnlargeEmojis
When true, user and remote user messages containing one or two emojis will be enlarged in chat. Messages with one emoji will be the largest, two emojis will be large, and 3 or more will be displayed as normal text.

   - **Type:** Bool  
   - **Default:** false

<img src="img/enableEnlargeEmojis.png" alt="enableEnlargeEmojis">
