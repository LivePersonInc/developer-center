---
pagename: SDK 5.0 and above
redirect_from:
  - consumer-experience-ios-sdk-attributes.html
  - mobile-app-messaging-sdk-for-ios-customization-and-branding-attributes.html
  - mobile-app-messaging-sdk-for-ios-sdk-attributes-attributes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK Attributes
permalink: mobile-app-messaging-sdk-for-ios-sdk-attributes-sdk-5-0-and-above.html
indicator: messaging
---

The goal of the following document is to enumerate the different fields controlling design attributes in the SDK. If a clearer view of which attribute corresponds with a design element is needed, please utilize the [Attributes Design Sheet](mobile-app-messaging-sdk-for-ios-sdk-attributes-attributes-design-sheet.html).

### iOS 13 UIColors and DarkMode support 
With the addition of Dark Mode support in iOS 13, we now utilize Apple’s UIUserInterface enum values observed by UIColor objects to update colors based on the selection provided by the OS.  We believe this is the easiest implementation for our customers who use our default configurations as well as those customers who desire custom attribute configurations.  

#### What this means for our customers who use our default Attribute configurations? 
If you are currently using our default attribute configurations, do a quick check below to see if the default value has changed.  Likely only the colors have been updated.  If you wish to support Dark Mode and you are using our default color configurations you have nothing to do, we have handled the support for you by updating the SDK color scheme to utilize iOS system colors where possible.  This appearance is different than the previous implementation but is intended to be more in line with what iOS users expect.  We have worked hard on its implementation and hope you enjoy it! 

#### What this means for our customers who use custom attribute configurations? 
If you have customized the appearance of the iOS SDK by setting your own UIColor for attributes within the LPConfig object, note that unless you pass a UIColor that has colors set specifically for at minimum UIUserInterface values “dark” and “light” your custom configuration will not support dark mode and the UI may not appear as expected. This implementation is intended to mirror how you might support Dark Mode within your own application.  We recommend using the following UIColor Extension pattern we found laid out in [this](https://nshipster.com/dark-mode/ "Dark Mode on iOS 13 - NSHipster") article from NSHipster.   We have modeled our own default color objects in this manner (as public LPColor struct objects described below).  

#### What this means for consumers on iOS 12 and below? 
As is indicated by the code sample below, we have mirrored the implementation for our “light” scheme for iOS devices operating on iOS 11 and 12 using non semantic colors that closely resemble the light iOS system colors. 

#### How to implement custom color configurations within the LPMessaging iOS SDK that support DarkMode?
For color attributes that accept UIColor, simply pass a UIColor object which has values based on the current “traitCollection.userInterfaceStyle” as implemented below.

```Swift
import UIKit

extension UIColor {
    static var customAccent: UIColor {
        if #available(iOS 13, *) {
            return UIColor { (traitCollection: UITraitCollection) -> UIColor in
                if traitCollection.userInterfaceStyle == .dark {
                    return UIColor.black
                } else {
                    return UIColor.white
                }
            }
        } else {
            return UIColor.white
        }
    }
}
```  

<a style="font-weight:bold" href='#LPColor' id='LPColor' class='anchor' aria-hidden='true'>LPColor</a>
   
| Semantic Color Name  | iOS 13 color source | iOS 11-12 color source |
| :--- | :--- | :--- |
| lpBackground |UIColor.systemBackground | UIColor.white |
| lpLabel | UIColor.label | UIColor.black |
| lpLink | UIColor.link | UIColor.blue |
| lpSecondaryLabel | UIColor.secondaryLabel | UIColor.darkGray |

| Visible Color Name  | iOS 13 color source | iOS 11-12 color source |
| :--- | :--- | :--- |
| lpBlue | UIColor.systemBlue | r: 0, g: 122, b: 255 |
| lpClear | UIColor.clear | UIColor.clear |
| lpGray | UIColor.systemGray | r: 142, g: 142, b: 147 |
| lpGray2 | UIColor.systemGray2 | r: 174, g: 174, b: 178 |
| lpGray3 | UIColor.systemGray3 | r: 199, g: 199, b: 204 |
| lpGray4 | UIColor.systemGray4 | r: 209, g: 209, b: 214 |
| lpGray5 | UIColor.systemGray5 | r: 229, g: 229, b: 234 |
| lpGreen | UIColor.systemGreen | r: 52, g: 199, b: 89 |
| lpIndigo | UIColor.systemIndigo | r: 88, g: 86, b: 214 |
| lpLightBlue | UIColor.systemTeal | r: 90, g: 200, b: 250 |
| lpOrange | UIColor.systemOrange | r: 255, g: 149, b: 0 |
| lpPink | UIColor.systemPink | r: 255, g: 45, b: 85 |
| lpRed | UIColor.systemRed | r: 255, g: 59, b: 48 |

--- 




### Agent Assignment

#### retrieveAssignedAgentFromLastClosedConversation  
When using `getAssignedAgent` method, lets you get assigned agents from active conversations only, or from the last closed conversation in case there is no active conversation. If no assigned agent is available, this method returns nil. 

   - **Type:** Bool
   - **Default value:** true 

--- 

### Audio Support

#### recordingDurationLimit  
Maximum time frame for recording audio message (in seconds). 

   - **Type:** TimeInterval (Double)
   - **Default value:** 120 



#### enableAudioSharing 
Enable or disable audio sharing feature. True is enabled. 

   - **Type:** Bool
   - **Default value:** false (disabled)



#### maxNumberOfSavedAudioFilesOnDisk  
Max number of allowed saved audio files on disk. This refers only to audio files.
The validation of allowed max number of documents will be when showing and removing conversations.

   - **Type:** UInt
   - **Default value:** 20

---  

### Auth

#### hideUIUntilAuthenticated  
Hides previous chat history until user identify has been verified

   - **Type:** Bool
   - **Default value:** true (enabled)

{: .notice}
avaliable on SDK 6.0 and above.

---  
### Brand

#### brandName  
The brand name will be shown as a title on toolbar when there is no active conversation.  

   - **Type:** String
   - **Default value:** "" (Empty String) 


 

#### conversationBackgroundColor  
Color code for the entire view background. 

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpBackground`](#LPColor) 


#### customFontNameConversationFeed  
Custom font name for conversation feed, which affects all messages, timestamps and separators. Fonts that are not part of the iOS families, must be defined in the host app's Info.plist.

- **Type:** String
- **Default value:** nil

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/customFontNameConversationFeed.png" alt="customFontNameConversationFeed" style="width: 324px;">
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

#### customFontNameNonConversationFeed  
Custom font name for all non conversation feed controls. Such as: buttons, alerts, banners, menu and external windows.
Fonts that are not part of the iOS families, must be defined in App's Info.plist.

<!--    <div style="float: left; width: 35%;height: 69px;">
   <ul>
      <li><b>Type:</b> String?</li>
      <li><b>Default value:</b> nil</li>
   </ul>
</div> -->

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/customFontNameNonConversationFeed.png" alt="customFontNameNonConversationFeed" style="width: 324px;">
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->
 

#### customRefreshControllerImagesArray  
Array of images for creating the custom refresh controller. The custom refresh controller will loop the images from the array. 
It will need two or more images in the array for the loop to take effect.

<!--    <div style="float: left; width: 35%;height: 136px;">
   <ul>
      <li><b>Type:</b> &#060;ArrayUIImage&#062;?</li>
      <li><b>Default value:</b> nil</li>
   </ul>
</div> -->

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/customRefreshControllerImagesArray.png" alt="customRefreshControllerImagesArray">
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

#### customRefreshControllerAnimationSpeed  
Custom refresh controller speed animation define the full images loop time. The smaller the value, the faster the animation.

   - **Type:** Float<UIImage>
   - **Default value:** 2 


#### conversationBackgroundPortraitImage  
When not nil, use this attribute as the conversation portrait background image. When an image is shown, it is recommended to set [`dateSeparatorBackgroundColor`](#dateseparatorbackgroundcolor) config to **clear**. 

   - **Type:** UIImage
   - **Default value:**  nil



#### conversationBackgroundLandscapeImage  
When not nil, use this attibute as the conversation landscape background image. When an image is shown, it is recommended to set [`dateSeparatorBackgroundColor`](#dateseparatorbackgroundcolor) config to **clear**. 

   - **Type:** UIImage
   - **Default value:** nil


#### conversationBackgroundImageContentMode  
Defines the content mode of the conversation background image.  

   - **Type:** UIView.ContentMode
   - **Default value:** scaleToFill 



--- 

### Connection Status Bar

#### connectionStatusConnectingBackgroundColor  
Color code for the background of the connection status bar while connecting.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor) 

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/connectionStatusBarConnecting.png" alt="systemBubbleTextColor"> 
   </figure>
</div> -->


<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->


#### connectionStatusConnectingTextColor 
Color code for the text of the connection status bar while connecting.

- **Type:** UIColor
- **Default value:** [`LPColor.lpWhite`](#LPColor) 

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/connectionStatusBarConnecting.png" alt="systemBubbleTextColor"> 
   </figure>
</div> -->


<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->
 

#### connectionStatusFailedToConnectBackgroundColor  
Connection status toast (failed to connect) background color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBlack`](#LPColor) 

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/connectionStatusBarFailedToConnect.png" alt="systemBubbleTextColor"> 
   </figure>
</div> -->


<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

#### connectionStatusFailedToConnectTextColor  
Connection status toast (failed to connect) text color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpWhite`](#LPColor) 

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/connectionStatusBarFailedToConnect.png" alt="systemBubbleTextColor"> 
   </figure>
</div> -->


<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

--- 

### Controller bubble

#### controllerBubbleTextColor  
Color code for the text of the controller bubble. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray2`](#LPColor) 

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/controllerbubletextcolor.png" alt="controller bubble text color"> 
   </figure>
</div> -->


<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->


--- 

### Conversations

#### maxPreviousConversationToPresent  
Number of conversations to show in advance. 

   - **Type:** UInt
   - **Default value:** 2 




#### deleteClosedConversationOlderThanMonths  
Upon SDK initialization, all closed conversations with an end date older than X months will be deleted from the database. Setting 0 deletes all closed conversations. 

   - **Type:** UInt
   - **Default value:** 13 




#### sendingMessageTimeoutInMinutes  
Maximum number of minutes to send the message. 

   - **Type:** UInt
   - **Default value:** 60 




#### conversationSeparatorTextColor  
Conversation separator text and line color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray2`](#LPColor) 

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor"> 
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

#### enableConversationSeparator
Toggle conversation separator view when conversation resolved from agent or consumer.

{:.notice}
This Configuration is avaliable on SDK 6.2.0 & above

{:.important}
Conversation separator view contains Conversation Separator Text Message and Conversation Separator Line

{:.notice}
Setting this property to false will also disable **enableConversationSeparatorTextMessage** & **enableConversationSeparatorLine**

- **Type:** Bool
- **Default value:** true


#### enableConversationSeparatorTextMessage 
Toggle conversation separator text message when conversation resolved from agent or consumer.

{:.notice}
if **enableConversationSeparator** is set to **false**, Conversation Separator Text won't be displayed even if this property is enable

- **Type:** Bool
- **Default value:** true


#### enableConversationSeparatorLine 
Toggle conversation separator line when conversation resolved from agent or consumer.

{:.notice}
if **enableConversationSeparator** is set to **false**, Conversation Separator Line won't be displayed even if this property is enable

- **Type:** Bool
- **Default value:** true 


#### enableConversationSeparatorLineOnAutoClose 
Toggle conversation separator line when conversation is auto close

{:.notice}
This Configuration is avaliable on SDK 6.2.0 & above

{:.important}
For this property to work when is enable, **enableConversationSeparatorLine** needs to be enable too.

{:.notice}
if **enableConversationSeparator** is set to **false**, Conversation Separator Line won't be displayed for Auto Close Conversations even if this property is enable.

- **Type:** Bool
- **Default value:** false


#### conversationSeparatorFontSize 
Define the conversation closed separator font size.

- **Type:** UIFontTextStyle
- **Default value:** UIFontTextStyle.caption1


#### conversationSeparatorBottomPadding 
Define the conversation Closed label to separator line padding.

- **Type:** Float
- **Default value:** 7

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/conversationClosedSeparatorBottomPadding.png" alt="conversationClosedSeparatorBottomPadding"> 
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

#### conversationSeparatorFontName 
Custom font name for conversation closed separator. Fonts that are not part of the iOS families, must be defined in the host app's Info.plist.

- **Type:** String
- **Default value:** nil

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/conversationClosedSeparatorFontName.png" alt="conversationClosedSeparatorFontName"> 
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->


#### conversationSeparatorViewBottomPadding  
Define the conversation separator view bottom padding.

- **Type:** Float
- **Default value:** 7

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/conversationClosedSeparatorViewBottomPadding.png" alt="conversationClosedSeparatorViewBottomPadding">
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->


#### conversationClosedSeparatorTopPadding 
Define the conversation Closed Separator Top padding.

- **Type:** Float
- **Default value:** 5

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/conversationClosedSeparatorTopPadding.png" alt="conversationClosedSeparatorTopPadding">
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->


#### enableVibrationOnMessageFromRemoteUser 
Toggle device vibration when a remote user sends a new message.

   - **Type:** Bool
   - **Default value:** false 




#### announceAgentTyping  
If true, show agent is typing indicator. In accessibility mode, announce when agent is typing. 
When false will not show any indication that the agent is typing, and will not announce when agent is typing in accessibility.

   - **Type:** Bool
   - **Default value:**  true 


#### showAgentTypingInMessageBubble  
When true, shows agent  is typing indicator in a message bubble. When false, show indicator under Agent label in navigator bar.
When announceAgentTyping is false, will not show any "is typing" indicator regardless of current value.

   - **Type:** Bool
   - **Default value:** true 

--- 

### Data Masking

#### enableClientOnlyMasking  
Enabling this flag, SDK will use regular expression defined in 'clientOnlyMaskingRegex' to mask text on the consumer device.  This is client only masking because it is both set and executed within the consumers device. 
All masked data will appear as asterisks, will be saved to local db masked and will be sent to the server unmasked. This feature is only available for Unauthenticated conversations. 

   - **Type:** Bool
   - **Default value:** false 

 

#### enableRealTimeMasking  
When this flag is enabled, the SDK will use regular expression defined in 'realTimeMaskingRegex' to mask text originated on the consumer device.  This masking is applied to messages both on the consumer device and sent to the agent. All masked data will appear as asterisks, will be saved to local databases masked and will be sent to the server masked.

   - **Type:** Bool
   - **Default value:** false 

 

#### clientOnlyMaskingRegex  
Regular expression string applied to the 'enableClientOnlyMasking' flag.

The regular expression patterns and behavior are based on Perl's regular expressions. See Apple Reference. 

   - **Type:** String
   - **Default value:** "" (Empty String) - no regex



#### realTimeMaskingRegex  
Regular expression string applied to the 'enableRealTimeMasking' flag.

The regular expression patterns and behavior are based on Perl's regular expressions. See Apple Reference.

   - **Type:** String
   - **Default value:** "" (Empty String) - no regex


--- 


### Date and Time

#### lpDateFormat  
Custom formatting for date string (day, year..), for example, 'd MMM'. If not defined, one of the default styles will be used (see timestamps formatting). 

   - **Type:** String?
   - **Default value:** nil 



#### lpTimeFormat  
Custom formatting for time string (hours,  minutes..), for example, 'hh:mm a'. If not defined, one of the default styles will be used (see timestamps formatting). 

   - **Type:** String?
   - **Default value:** nil 



#### lpDateTimeFormat  
Custom formatting for date and time string, for example, 'EEEE MM/dd/YY hh:mm a'. If not defined, one of the default styles will be used (see timestamps formatting). 
     

   - **Type:** String?
   - **Default value:** nil 

--- 


### Date Separator

#### dateSeparatorTitleBackgroundColor  
Color code for date separator title background color. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor) 

<!--    <div style="float: right; width: 65%;height: 42px;">
   <figure>
   <figcaption></figcaption>
   <img src="img/dateseparatortitlebackgroundcolor.png" alt="dateseparatortitlebackground">
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

#### dateSeparatorTextColor  
Color code for date separator text color. 
 
- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor) 

<!--    <div style="float: right; width: 65%;height: 42px;">
   <figure>
   <figcaption></figcaption>
   <img src="img/dateseparatortextcolor.png" alt="dateSeparatorTextColor">
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

#### dateSeparatorLineBackgroundColor 
Color code for date separator line background color. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpClear`](#LPColor) 

<!--    <div style="float: right; width: 65%;height: 42px;">
   <figure>
   <figcaption></figcaption>
   <img src="img/dateseparatorlinebackgroundcolor.png" alt="datesepartaorlinebackgroundcolor">
   </figure>
</div> -->

<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->

#### dateSeparatorBackgroundColor  
Color code for date separator background color. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor) 



#### dateSeparatorFontSize  
Define the Date Separator font text style. 

- **Type:** UIFontTextStyle
- **Default value:** UIFontTextStyle.footnote



#### customFontNameDateSeparator  
Custom font name for Timestamp. Fonts that are not part of the iOS families, must be defined in App's Info.plist. 

- **Type:** String
- **Default value:** nil



#### dateSeparatorTopPadding  
Define the Date Separator Top padding. 

- **Type:** Float
- **Default value:** 0.0



#### dateSeparatorBottomPadding  
Define the Date Separator bottom padding.  

- **Type:** Float
- **Default value:** 0.0




--- 

### Delivery Notifications

#### checkmarkVisibility 
Checkmark visibility of the following options (type CheckmarksState): SentOnly - Show checkmarks for only Sent messages. SentAndAccepted - Show checkmarks for only Sent and Accepted messages. All - Show checkmarks for Sent, Accepted and Read messages. 

   - **Type:** CheckmarksState(Integer Enum)
   - **Default value:** CheckmarksState.All 

#### checkmarkReadColor  
Color of checkmark indication signs of Read messages. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpBlue`](#LPColor) 


 

#### checkmarkDistributedColor  
Color of checkmark indication signs of Distributed messages.  

- **Type:** UIColor
- **Default value:** [`LPColor.lpSecondaryLabel`](#LPColor) 




####  checkmarkSentColor  
Color of checkmark indication signs of Sent messages. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpSecondaryLabel`](#LPColor) 




#### isReadReceiptTextMode  
Two options for read indication:     
If true = Read receipt “text mode”.
If false = Read receipt “icon mode”.

- **Type:** Bool
- **Default value:** true




#### messageStatusNumericTimestampOnly  
When false (default), time stamps displays information relative to when sent/distributed/read, for example, 'sent 5 minutes ago'. When true, shows as numeric only, for example, '11:32.'   

- **Type:** Bool
- **Default value:** false


--- 

### Duration of Local Notifications

#### notificationShowDurationInSeconds  
Display duration of the local notification in seconds.  When in VoiceOver mode it gets extended to 60 sec.

Examples: TimeToRespond notification, local notification, etc.

   - **Type:** Double
   - **Default value:**  3 (60 when in VoiceOver mode)

---

### Domains

{:.notice}
Overriding this values with incorrect domains will create connection issues on the LPMessagingSDK (e.g. "Failed to connect to server" banner)

#### csdsDomain
For brands that need to control the CSDS URL for LivePerson services, use this key to set a URL of your choice.

- **Type:** String

#### lpTagDomain
For brands that need to control the LPTAG URL for LivePerson services, use this key to set a URL of your choice.

- **Type:** String

--- 

### Hyperlink

#### markdownHyperlinkFromAgent
Enable or disable hyperlink support. Agent won’t be able to send hyperlink messages if set to false
    
- **Type:** bool
- **Default value:** true

#### remoteUserBubbleHyperlinkColor
Set the link message text color
    
- **Type:** color
- **Default value:** For iOS 13, we use UIColor.label, anything below that uses UIColor.black

<img src="../../../../img/ios-hyperlink-color-cofiguration.png" alt="Hyperlink color configuration" style="width: 600px;padding: 20px;">


---

### Link Preview

#### enableLinkPreview 
Enable or disable link preview feature. If disabled, user will not see site's link preview or link preview.  

   - **Type:** Bool
   - **Default value:** true



#### linkPreviewBackgroundColor 
Color code for the background of the link preview area inside cell.

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpBackground`](#LPColor) 


#### linkPreviewTitleTextColor
Color code for the title text inside link preview area inside cell.

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpLabel`](#LPColor) 



#### linkPreviewDescriptionTextColor 
Color code for the description text inside link preview area inside cell.

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpGray2`](#LPColor) 



#### linkPreviewSiteNameTextColor  
Color code for the description site name link preview area inside cell.

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpGray2`](#LPColor) 



#### linkPreviewBorderWidth 
Double number for the outline width of link preview area inside cell.

   - **Type:** Double
   - **Default value:** 1.0  



#### linkPreviewStyle 
Refers to the style in which the link preview cell will be displayed.

   - **Type:** LPUrlPreviewStyle
   - **Default value:** LPUrlPreviewStyle.slim  



#### urlRealTimePreviewBackgroundColor 
The background color of the url real time preview.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor) 



#### urlRealTimePreviewBorderColor 
The border color of the url real time preview.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray3`](#LPColor) 


#### urlRealTimePreviewBorderWidth
The border width of the url real time preview.
 
- **Type:** CGFloat
- **Default value:** 1.0  



#### urlRealTimePreviewTitleTextColor  
The title text color of the url real time preview.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBlack`](#LPColor) 


#### urlRealTimePreviewDescriptionTextColor  
The description text color of the url real time preview.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray4`](#LPColor) 



#### useNonOGTagsForLinkPreview  
"urlPreview" will also use non-OG tags to parse urls instead of using only OG tags if useNonOGTagsForLinkPreview is true.

   - **Type:** Bool
   - **Default value:**  true

---   

### Loading View 

#### loadingViewBlurEffect
The type of effect on the loading view.

   - **Type:** UIBlurEffect 
   - **Default value:**  LPBlurEffects.lpLoadingViewEffect
   
   
#### loadingViewBackgroundColor
The type of effect on the loading view.

- **Type:** UIColor 
- **Default value:**  [`LPColor.lpClear`](#LPColor)  



#### loadingViewTextColor
The text color for the label on the loading view.

   - **Type:** UIColor 
   - **Default value:**  [`LPColor.lpGray2`](#LPColor) 
   
#### loadingViewProgressBackgroundColor
The background color for the progress view on the loading view.

   - **Type:** UIColor 
   - **Default value:**  [`LPColor.lpGray2`](#LPColor)  


#### loadingViewProgressTintColor
The tint color for the progress view on the loading view.


  - **Type:** UIColor 
  - **Default value:**  [`LPColor.lpBlue`](#LPColor) 



--- 

### Localization

#### country  
Country code - when it is not nil, it will be combined with 'language' ("<language>_<country>", for example: en_US) and used instead of device default locale when formatting date and time.
  
The combined value has to be a part of iOS available Locale identifiers (use Locale.availableIdentifiers to validate). Otherwise, default locale will be used.

NOTE: the 24/12 Hours time style also will be affected by using the specific Locale when formatting times.
If no value is provided, the SDK will use the country according to the device's locale.

   - **Type:** String?
   - **Default value:** nil 



#### Language  
Language used instead of default device language.

The LPLanguage enum contains all languages supported by the MessagingSDK, and affects the following areas:

1. Used when getting localized strings.
   
2. Combined with 'country' ("language_country", for example: en_US) and used instead of default device locale when formatting time and date. If no value is provided, the SDK uses the device's language as default. 

   - **Type:** LPLanguage
   - **Default value:** DeviceLanguage 

--- 

### LPPusher 

#### enableLpPusherService 
Bool used to allow manual configuration for enabling the SDK to register to LP Pusher service. Requires user logout to change current configuration. 

   - **Type:** Bool
   - **Default value:**  true

### Navigation

#### conversationNavigationBackgroundColor  
Background color of navigation bar in conversation screen. 

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpGray4`](#LPColor) 



#### conversationNavigationTitleColor  
Navigation title color in conversation screen. 

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpLabel`](#LPColor) 



#### conversationStatusBarStyle  
Status bar style in conversation screen.  


   - **Type:** UIStatusBarStyle
   - **Default value:** .default
   
#### lpNavigationBarLeftItemImageButton  
LivePerson Navigation Bar Left Item custom button. 
NOTE: this property gets its tintColor from `conversationNavigationTitleColor`

  **Type:** UIImage?
 
 **Default value:** 

 <embed src="img/iosSDK/lpNavigationBarLeftItemImageButton_lpClose.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="50px" height="50px" />

 <div style="width: 50%;padding: 5px;">
 &nbsp;
 </div>
 
 
 
#### lpNavigationBarRightItemImageButton  
LivePerson Navigation Bar Right Item custom button. 
NOTE: this property gets its tintColor from `conversationNavigationTitleColor`

**Type:** UIImage?

**Default value:** 

<embed src="img/iosSDK/lpNavigationBarRightItemImageButton_lpMore.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="50px" height="50px" />

<div style="width: 50%;padding: 5px;">
&nbsp;
</div>

---  

### Photo and file sharing

#### fileSharingFromAgent
Enable or disable file/photo sharing feature from agents.

   - **Type:** Bool
   - **Default value:**  true
   
#### fileSharingFromConsumer
Enable or disable file/photo sharing feature from consumer.

   - **Type:** Bool
   - **Default value:**  false    


#### maxNumberOfSavedFilesOnDisk 
Max number of allowed saved files on disk. This refers only to full photo files.
NOTE: The validation of allowed max number of files will take place when showing and removing conversations.

   - **Type:** Int
   - **Default value:** 20 


#### maxNumberOfSavedDocumentsOnDisk 
Max number of allowed saved documents on disk. This refers only to document files
The validation of allowed max number of documents will be when showing and removing conversations.

   - **Type:** Int
   - **Default value:** 20 


#### photosharingMenuBackgroundColor  
Photo Sharing menu background color.


- **Type:** UIColor
- **Default value:** [`LPColor.lpBlue`](#LPColor) 

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/photosharingmenubackgroundcolor.png" alt="photosharingmenubackgroundcolor">
   </figure>
</div> -->


<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->


#### photosharingMenuButtonsBackgroundColor  
Photo Sharing menu buttons background color. 


- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor) 

<!--    <div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/photosharingmenubuttonsbackgroundcolor.png" alt="photosharingmenubuttonsbackgroundcolor">
   </figure>
</div> -->


<!--    <div style="width: 85%;padding: 5px;">
&nbsp;
</div> -->


#### photosharingMenuButtonsTintColor  
Photo Sharing menu buttons tint color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBlue`](#LPColor) 



#### photosharingMenuButtonsTextColor  
Photo Sharing menu buttons text color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor) 



#### cameraButtonEnabledColor  
Photo Sharing Camera button color in enabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBlue`](#LPColor) 



####  cameraButtonDisabledColor  
Photo Sharing Camera button color in disabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray`](#LPColor) 



#### fileCellLoaderFillColor 
Radial loader fill color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray3`](#LPColor) 



#### fileCellLoaderRingProgressColor  
Color of the loader progress line.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor) 



#### fileCellLoaderRingBackgroundColor  
Color of the loader progress line background.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray5`](#lpColor) 

<div class="important">The disabled/enabled color of the Camera button, which is in the input text view, changes according to the <code>sendButtonDisabledTextColor</code> and <code>sendButtonEnabledTextColor</code> parameters.</div>


#### photoSharingOpenMenuImageButton
Photo sharing open menu custom button.
NOTE: this property gets its tint color from `cameraButtonEnabledColor` or `cameraButtonDisabledColor` - depending on button state

**Type:** UIImage?

**Default value:** 
<embed src="img/iosSDK/photoSharingOpenMenuImageButton_attachment.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="50px" height="50px" />

<div style="width: 50%;padding: 5px;">
&nbsp;
</div>



#### photoSharingCloseMenuImageButton
Photo sharing close menu custom button.
NOTE: this property gets its tint color from `cameraButtonEnabledColor` or `cameraButtonDisabledColor` - depending on button state

**Type:** UIImage?

**Default value:** 
<embed src="img/iosSDK/photoSharingCloseMenuImageButton_menuClose.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="50px" height="50px" />


<div style="width: 50%;padding: 5px;">
&nbsp;
</div>


#### photoSharingMenuCameraImage  
Custom camera image in the photo sharing menu.
NOTE: this property gets its tint color from `photosharingMenuButtonsTintColor` and background color from `photosharingMenuButtonsBackgroundColor`

**Type:** UIImage?

**Default value:** 

<embed src="img/iosSDK/photoSharingMenuCameraImage_Camera.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="50px" height="50px" />


<div style="width: 50%;padding: 5px;">
&nbsp;
</div>


#### photoSharingMenuLibraryImage
Custom Library image in the photo sharing menu.
NOTE: this property gets its tint color from `photosharingMenuButtonsTintColor` and background color from `photosharingMenuButtonsBackgroundColor`

- **Type:** UIImage?

**Default value:** 

<embed src="img/iosSDK/photoSharingMenuLibraryImage_gallery_menu.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="50px" height="50px" />

<div style="width: 50%;padding: 5px;">
&nbsp;
</div>

#### fileSharingMenuFileImage
Custom file image in the file sharing menu.
NOTE: this property gets its tint color from `photosharingMenuButtonsTintColor` and background color from `photosharingMenuButtonsBackgroundColor`

**Type:** UIImage?

**Default value:** 

<embed src="img/iosSDK/fileSharingMenuFileImage_document.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="50px" height="50px" />

<div style="width: 50%;padding: 5px;">
&nbsp;
</div>

#### fileSharingUniversalFileThumbnailimage
Image for custom the thumbnail of unsupported files in file sharing.

- **Type:** UIImage?
- **Default value:** nil


#### fileSharingPDFFileThumbnailimage
Image for custom the thumbnail of PDF files in file sharing.

- **Type:** UIImage?
- **Default value:** nil


#### fileSharingPPTXFileThumbnailimage
 Image for custom the thumbnail of PPTX files in file sharing

- **Type:** UIImage?
- **Default value:** nil



#### fileSharingDOCXFileThumbnailimage
Image for custom the thumbnail of DOCX files in file sharing

- **Type:** UIImage?
- **Default value:** nil



#### fileSharingXLSXFileThumbnailimage
Image for custom the thumbnail of XLSX files in file sharing

- **Type:** UIImage?
- **Default value:** nil



#### conversationEmptyStateTextColor
Color code for the empty state label.

- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor) 



#### remoteFileStateTint
Tint color for the state of files (and photos) received from agents.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray3`](#LPColor) 


#### userFileStateTint
Tint color for the state of files send by user.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray3`](#LPColor) 


#### userPhotoStateTint
Tint color for the state of photos send by user.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray3`](#LPColor) 


--- 

### Quick Reply

#### quickReplyButtonVerticalPadding  
Distance between the bottom and top edges of the button to the bottom and top edges of the text.

   - **Type:** CGFloat
   - **Default value:** 10.0 



#### quickReplyButtonHorizontalPadding  
Distance between the right and left edges of the button to the right and left edges of the text. 

   - **Type:** CGFloat
   - **Default value:** 15.0 



#### quickReplyVerticalPadding  
Vertical padding between quick reply buttons. 

   - **Type:** CGFloat
   - **Default value:** 10.0 



#### quickReplyHorizontalPadding  
Horizontal padding between quick reply buttons. 

   - **Type:** CGFloat
   - **Default value:** 10.0 



#### quickReplyButtonBorderWidth  
Border size of Quick Reply buttons. 

   - **Type:** CGFloat
   - **Default value:** 1.0 

--- 

### Secure Form

#### secureFormBackButtonColor  
Back button color in secure form screen. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor)

 

#### secureFormUIStatusBarStyle  
The style (UIStatusBarStyle) for the secure form screen.

   - **Type:** UIStatusBarStyle
   - **Default value:** UIStatusBarStyle.default 



#### secureFormNavigationBackgroundColor  
Background color of navigation bar in secure form screen. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray4`](#LPColor)

   
   
#### secureFormNavigationTitleColor  
Navigation title color in secure form screen.

- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor)



#### secureFormBubbleBackgroundColor  
Secure form bubble background color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor)



#### secureFormBubbleBorderColor  
Secure form bubble border color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray4`](#LPColor)


#### secureFormBubbleBorderWidth  
Secure form bubble border width in pixels.

   - **Type:** Double
   - **Default value:**  1.0



#### secureFormBubbleTitleColor  
Secure form bubble form title color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor)



#### secureFormBubbleDescriptionColor 
Secure form bubble form description color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor)



#### secureFormBubbleFillFormButtonTextColor  
Secure form bubble fill form text button color.

- **Type:** UIColor
- **Default value:** [`LPColor.lpBlue`](#LPColor)


#### secureFormBubbleFillFormButtonBackgroundColor  
Secure form bubble fill form button background color.
   
   - **Type:** UIColor
   - **Default value:** [`LPColor.lpClear`](#LPColor)



#### secureFormBubbleFormImageTintColor 
Secure form bubble form image tint color.

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpBlue`](#LPColor)



#### secureFormCustomFontName 
 Secure form custom font name to be used while user is filling out the secure form. If not set, the default font will be used. 
 
 - **Type:** String
 - **Default value:** Helvetica
 

#### secureFormHideLogo  
Secure form flag for hiding the secure form logo in the top of the form.  

- **Type:** Bool
- **Default value:** false



#### secureFormBubbleLoadingIndicatorColor  
Secure form loading indicator color while loading form before opening. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray5`](#LPColor)




--- 

### Send Button

#### sendButtonDisabledColor 
Send button color in disabled mode in the conversation screen. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpGray`](#LPColor)




#### sendButtonEnabledColor  
Send button color in enabled mode in the conversation screen. 

- **Type:** UIColor
- **Default value:** [`LPColor.lpBlue`](#LPColor)


####  sendButtonImage  
Send button Image in the conversation screen. The custom image changes only if `isSendMessageButtonInTextMode` = **false**. 
The image must conform to Apple's [Custom Icon guidelines](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/custom-icons/).
NOTE: this property gets its tintColor from `sendButtonDisabledColor` or `sendButtonEnabledColor` - depending on state

**Type:** UIImage

 **Default value:** 

 <embed src="img/iosSDK/sendButtonImage_sendMessageIcon.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="50px" height="50px" />

 <div style="width: 50%;padding: 5px;">
 &nbsp;
 </div>
 

#### isSendMessageButtonInTextMode  
Two options for the send message button mode: 
1. **text mode** (taken from localized resources) 
2. **icon mode**.  
 
   - **Type:** Bool
   - **Default value:** text mode 

--- 

### Structured Content

#### enableStructuredContent  
Enable or Disable toggle for Structured Content feature in conversations.

   - **Type:** Bool
   - **Default value:** true 



#### structuredContentBubbleBorderWidth 
Structured Content bubble border width in pixels.

   - **Type:** Double
   - **Default value:** 1.0 



#### structuredContentBubbleBorderColor  
Structured Content bubble border color.

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpGray4`](#LPColor)



#### structuredContentBubbleTopLeftCornerRadius 
Structured Content bubble top left corner radius in pixels. 

   - **Type:** Float
   - **Default value:** 8.0 



#### structuredContentBubbleTopRightCornerRadius 
Structured Content bubble top right corner radius in pixels.

   - **Type:** Float
   - **Default value:** 8.0 

 

#### structuredContentBubbleBottomLeftCornerRadius  
Structured Content bubble bottom left corner radius in pixels.

   - **Type:** Float
   - **Default value:** 8.0  



#### structuredContentBubbleBottomRightCornerRadius 
Structured Content bubble bottom right corner radius in pixels.

   - **Type:** Float
   - **Default value:** 8.0 



#### structuredContentMapLatitudeDeltaDeltaSpan  
Structured Content Latitude Delta Span. Used to determine which area of the map to focus on. If you set this attribute, you must also set `structuredContentMapLongitudeDeltaSpan`. This parameter is used to create an [MKCoordinateSpan](https://developer.apple.com/documentation/mapkit/mkcoordinatespan). 

   - **Type:** Double
   - **Default value:** 0.01 


#### structuredContentMapLongitudeDeltaSpan  
Structured Content Longitude Delta Span. Used to determine which area of the map to focus on. If you set this attribute, you must also set `structuredContentMapLatitudeDeltaDeltaSpan`. This parameter is used to create an [MKCoordinateSpan](https://developer.apple.com/documentation/mapkit/mkcoordinatespan). 

   - **Type:** Double
   - **Default value:** 0.01 


#### structuredContentButtonBorderColor
Sets border color for button type element on Structured Content
    
- **Type:** color
- **Default value:** [`lightBlue`](#LPColor)

{: .notice}
Accessibility compliance highlights the need for links and buttons to have a distinctive UI characteristic, changing this value might break compliance.


#### structuredContentButtonTextColor
Sets text color for button type element on Structured Content
    
- **Type:** color
- **Default value:** For iOS 13, we use [`UIColor.label`](#LPColor), anything below that uses [`UIColor.black`](#LPColor)


#### structuredContentTextColor
Sets text color for text type element on Structured Content
    
- **Type:** color
- **Default value:** For iOS 13, we use [`UIColor.label`](#LPColor), anything below that uses [`UIColor.black`](#LPColor)

    
--- 

### Surveys Buttons (CSAT and FCR)

#### csatSubmitButtonCornerRadius   
Corner radius for submit button.  
 
- **Type:** Double
- **Default value:** 30.0


#### csatYesNoButtonsCornerRadius  
Corner radius for (Yes/No) buttons.  

- **Type:** Double
- **Default value:** 25.0



####  csatSubmitButtonBackgroundColor  
Background color of the Submit button.  

- **Type:** UIColor
- **Default value:** [`LPColor.lpGreen`](#LPColor)



#### csatSubmitButtonTextColor  
Text color of the Submit button.  

- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor)




#### csatRatingButtonSelectedColor  
Background Color of the rating buttons.  


- **Type:** UIColor
- **Default value:** [`LPColor.lpGreen`](#LPColor)



#### csatResolutionButtonSelectedColor  
Color for the resolution confirmation buttons (Yes/No) when selected

- **Type:** UIColor
- **Default value:** [`LPColor.lpGreen`](#LPColor)




#### csatAllTitlesTextColor  
Title text color for all labels.  

- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor)




#### csatResolutionHidden  
Hides the survey (Yes/No) question.  
To show CSAT resolution, 'csatAgentViewHidden' must be set to True.

- **Type:** Bool
- **Default value:** false




#### csatAgentViewHidden  
Hides the view of agent avatar and name. 

- **Type:** Bool
- **Default value:** false



#### csatThankYouScreenHidden 
Hides the Thank You screen after tapping the 'Submit' button.

1. If true, CSAT view will disappear immediately after tapping 'Submit'.

2. If false, Thank You screen will appear for 2 seconds after tapping 'Submit' and then all the CSAT view will disappear.

- **Type:** Bool
- **Default value:** false


#### csatNavigationBackgroundColor 
Background color of navigation bar in survey screen.  

- **Type:** UIColor
- **Default value:** [`LPColor.lpGreen`](#LPColor)


#### csatNavigationTitleColor  
Text color of the title in the survey screen.  

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpBackground`](#LPColor)




#### csatSkipButtonColor  
Skip button color in survey screen. 

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpLabel`](#LPColor)




#### csatUIStatusBarStyle  
The style (UIStatusBarStyle) for the survey screen. 

   - **Type:** UIStatusBarStyle
   - **Default value:** UIStatusBarStyle.default 




#### csatShowSurveyView 
Hides the whole survey view and disables it. 

   - **Type:** Bool
   - **Default value:** true 




#### csatSurveyExpirationInMinutes  
Expiration of CSAT in minutes from the moment the conversation was ended. If Survey exceeded the expiration, it will not be presented to the user..  

   - **Type:** UInt
   - **Default value:** 1440 


--- 


### System Messages

#### systemBubbleTextColor  
Color code for the text of the system messages. 


- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor)



--- 

### Time To Response and Off hours

#### ttrShouldShow  
When set to **true**, the TTR notifications show with off hours.  When the auto messages feature is enabled, TTR notifications do not display when the auto messages featuer is enabled, regardless of the value set for this attribute. 

   - **Type:** Bool
   - **Default value:** true  



#### ttrShowShiftBanner  
Enable or disable shift toaster ('An agent will respond...’).

   - **Type:** Bool
   - **Default value:** true 



#### ttrFirstTimeDelay  
Number of seconds before the first Time to Respond (TTR) notification appears. 

   - **Type:** Double
   - **Default value:** 10 



#### ttrShouldShowTimestamp  
When set to **true**, the timestamp of the TTR notification displays. 
Otherwise, the "An agent will respond shortly" message displays.   


- **Type:** Bool
- **Default value:** false 



#### ttrShowFrequencyInSeconds  
Controls the TTR frequency, for example, don’t show the TTR more than once in 8 seconds. 

   - **Type:** UInt
   - **Default value:** 8 

#### showOffHoursBanner  
Enable or disable the off-hours toaster. 


- **Type:** Bool
- **Default value:** true 



#### ttrBannerBackgroundColor  
Background color of TTR notification banner view. 


- **Type:** UIColor
- **Default value:** [`LPColor.lpBlack`](#LPColor)



#### ttrBannerTextColor  
Text color of TTR notification banner view. 


- **Type:** UIColor
- **Default value:** [`LPColor.lpWhite`](#LPColor)




#### offHoursTimeZoneName  
Off Hours time zone name string based on [NSTimeZone knownTimeZoneNames]. If sending empty string, the local timezone will be used (Server sends UTC time). 

   - **Type:** String
   - **Default value:** "" (Empty String) 

#### toastNotificationsEnabled  
Enable toast notifications such as offline and TTR notifications. 

   - **Type:** Bool
   - **Default value:** true 


--- 

### Unread Messages

#### scrollToBottomButtonBackgroundColor  
Scroll to bottom button background color of the whole button.
- **Type:** UIColor
- **Default value:** [`LPColor.lpGray2`](#LPColor)




#### scrollToBottomButtonMessagePreviewTextColor 
Scroll to bottom button text color of the last unread message preview.


- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor)



#### scrollToBottomButtonBadgeBackgroundColor  
Scroll to bottom button unread message badge background color.


- **Type:** UIColor
- **Default value:** [`LPColor.lpRed`](#LPColor)




#### scrollToBottomButtonBadgeTextColor 
Scroll to bottom button unread message badge text color.


- **Type:** UIColor
- **Default value:** [`LPColor.lpLabel`](#LPColor)





#### scrollToBottomButtonArrowColor 
Scroll to bottom button arrow tint color.


- **Type:** UIColor
- **Default value:** [`LPColor.lpBackground`](#LPColor)





#### unreadMessagesDividerBackgroundColor 
Unread Messages divider background color.


- **Type:** UIColor
- **Default value:** [`LPColor.lpGray5`](#LPColor)



#### unreadMessagesDividerTextColor 
Unread Messages divider text color.


- **Type:** UIColor
- **Default value:** [`LPColor.lpBlue`](#LPColor)




#### scrollToBottomButtonEnabled
Toggle the mode of the scroll to bottom button. 

   - **Type:** Bool
   - **Default value:** true 




#### scrollToBottomButtonMessagePreviewEnabled  
Toggle the mode of the scroll to bottom unread message text preview. 


   - **Type:** Bool
   - **Default value:** true 



#### unreadMessagesDividerEnabled 
Toggle the mode of the Unread Messages divider. 

- Important: As of SDK 5.1 & above, This configuration no longer impacts the scroll of the conversation or the scroll to bottom button (message preview or count indicator)

- Note: Behavior for SDK version 5.0:
If  disabled, the "scroll to bottom" button will scroll to bottom of the conversation but the count indicator and message preview  will not be displayed. Regardless of **unreadMessagesDividerEnabled** value, the conversation screen will always scrolls to the last position where the user left off. 

   - **Type:** Bool
   - **Default value:** true 



#### unreadMessagesCornersRadius 
Define the corners radius of the unread messages.  


- **Type:** Float
- **Default value:** 8.0 




#### scrollToBottomButtonCornerRadius  
Define the top left and bottom left corners radius. 


- **Type:** Float
- **Default value:** 20.0 



#### scrollToBottomButtonBadgeCornerRadius  
Define the scroll to bottom badge corners radius.  


- **Type:** Float
- **Default value:** 12.0 



---  

### User Avatar

#### remoteUserAvatarBackgroundColor  
Background color of the remote user’s avatar. 

   - **Type:** UIColor
   - **Default value:** [`LPColor.lpGray4`](#LPColor) 



#### remoteUserAvatarLeadingPadding  
Define the remote avatar Leading padding (left edge to avatar). 

- **Type:** Float
- **Default value:**  8.0



#### remoteUserAvatarTrailingPadding  
Define the remote avatar Trailing padding (Avatar to bubble). 


- **Type:** Float
- **Default value:**  8.0



#### remoteUserAvatarIconColor  
Icon color of default remoteUser avatar.  

   - **Type:** UIColor
   - **Default value:**  [`LPColor.lpBackground`](#LPColor)



#### remoteUserDefaultAvatarImage  
 Default Avatar image of the remote user.
 When assigned, this image will disable `remoteUserAvatarBackgroundColor` and `remoteUserAvatarIconColor` configurations.
 If remote user has an avatar image in his profile, this attribute will be ignored.
 
- **Type:** UIImage?
- **Default value:** nil 



#### remoteUserAvatarIconBorderWidth  
Define the remote avatar icon border width.


- **Type:** CGFloat
- **Default value:** 0.0


#### remoteUserAvatarIconBorderColor  
Define the remote avatar icon border color.


- **Type:** UIColor
- **Default value:** [`LPColor.lpClear`](#LPColor)
  
  
#### brandAvatarImage  
Default avatar image for Brand.
If setting nil - default avatar image will be used with `remoteUserAvatarBackgroundColor` and `remoteUserAvatarIconColor`

   - **Type:** UIImage?
   - **Default value:** nil 

#### brandAvatarImageContentMode
Sets content mode for the brand avatar image

- **Type:** UIView.ContentMode
- **Default value:** .scaleAspectFit

#### csatAgentAvatarBackgroundColor 
Background color of agent's default avatar in CSAT. 


- **Type:** UIColor  
- **Default value:** [`LPColor.lpGray4`](#LPColor)


#### csatAgentAvatarIconColor  
Icon color of agent's default avatar in CSAT.


- **Type:** UIColor  
- **Default value:** [`LPColor.lpBackground`](#LPColor)



--- 

### User input view

#### inputTextViewContainerBackgroundColor  
User Input TextView container background color.  


- **Type:** UIColor  
- **Default value:** [`LPColor.lpGray3`](#LPColor)



#### inputTextViewCornerRadius  
User Input TextView corner radius.  


- **Type:** Double  
- **Default value:** 20.0 




#### inputTextViewTopBorderColor  
Input TextView top border color default clear color.  


- **Type:** UIColor  
- **Default value:** [`LPColor.lpClear`](#LPColor)


--- 

### User's Bubble

#### remoteUserBubbleBackgroundColor
Color code for the background of the remote user's bubble.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpGray4`](#LPColor)



#### remoteUserBubbleBorderColor
Color code for the outline color.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpGray4`](#LPColor)



#### remoteUserBubbleLinkColor
Color code for links in the text of the remote user's bubble.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpLabel`](#LPColor)




#### remoteUserBubbleTextColor
Color code for the text of the remote user's bubble.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpLabel`](#LPColor)




#### remoteUserBubbleBorderWidth
Double number for the outline width. 

- **Type:** Double    
- **Default value:** 1




#### remoteUserBubbleTimestampColor
Color code for the timestamp of the remote user's bubble. 


- **Type:** UIColor    
- **Default value:** [`LPColor.lpSecondaryLabel`](#LPColor)




#### remoteUserTypingTintColor
Color of the typing indicator for when the remote user is typing. 


- **Type:** UIColor    
- **Default value:** [`LPColor.lpBackground`](#LPColor)




#### remoteUserBubbleLongPressOverlayColor
Color of the remote user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpLabel`](#LPColor)



#### remoteUserBubbleLongPressOverlayAlpha
Alpha of the remote user's bubble overlay when user uses a long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.  


- **Type:** Float    
- **Default value:** 0.3



#### remoteUserBubbleTopLeftCornerRadius  
Top left Radius corner on the Remote bubble. 
Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to be clipped.


- **Type:** Float    
- **Default value:** 8.0



#### remoteUserBubbleTopRightCornerRadius
Top right Radius corner on the Remote bubble. 
Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to be clipped.


- **Type:** Float    
- **Default value:** 8.0




#### remoteUserBubbleBottomLeftCornerRadius
Bottom left Radius corner on the Remote bubble. 
Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to be clipped.


- **Type:** Float    
- **Default value:** 0.0



#### remoteUserBubbleBottomRightCornerRadius
Bottom right Radius corner on the Remote bubble. 
Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to be clipped.


- **Type:** Float    
- **Default value:** 8.0



#### userBubbleBackgroundColor
Color code for the background of the visitor bubble.

- **Type:** UIColor    
- **Default value:** [`LPColor.lpBlue`](#LPColor)



#### userBubbleBorderColor
Color code for the outline color.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpBlue`](#LPColor)



#### userBubbleLinkColor
Color code for links in the text of the visitor bubble.


- **Type:** UIColor    
- **Default value:** UIColor.white



#### userBubbleTextColor
Color code for the text of the visitor bubble.

- **Type:** UIColor    
- **Default value:** UIColor.white





#### userBubbleBorderWidth
Double number for the outline width.

- **Type:** Double    
- **Default value:** 1.0



#### userBubbleTimestampColor
Color code for the timestamp of the visitor bubble.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpSecondaryLabel`](#LPColor)



#### userBubbleSendStatusTextColor
Color code for the send status text of the visitor bubble.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpSecondaryLabel`](#LPColor)




#### userBubbleErrorTextColor
Color code for the error view text of the visitor bubble. 


- **Type:** UIColor    
- **Default value:** [`LPColor.lpRed`](#LPColor)




#### userBubbleErrorBorderColor
Color code for the error view border of the visitor bubble.


- **Type:** UIColor    
- **Default value:** [`LPColor.lpRed`](#LPColor)



#### enableBubblesOverlayOnLongPress
Enable bubbles overlay when user performs a long press gesture on messaging bubbles.  

- **Type:** Bool    
- **Default value:** true


#### userBubbleLongPressOverlayColor
Color of the user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.  


- **Type:** UIColor    
- **Default value:** [`LPColor.lpLabel`](#LPColor)



#### userBubbleLongPressOverlayAlpha
Alpha of the user's bubble overlay when user use long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble, when the menu dismissed, overlay will disappear too. In order to show overlay enableBubblesOverlayOnLongPress should be true.  

- **Type:** Float    
- **Default value:** 0.3



#### userBubbleTopLeftCornerRadius
Top left Radius corner on the user's bubble. 
Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to be clipped.

- **Type:** Float    
- **Default value:** 8.0



#### userBubbleTopRightCornerRadius
Top right Radius corner on the user's bubble. 
Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to be clipped.  

- **Type:** Float    
- **Default value:** 8.0


#### userBubbleBottomLeftCornerRadius
Bottom left Radius corner on the user's bubble. 
Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to be clipped.


- **Type:** Float    
- **Default value:** 8.0




#### userBubbleBottomRightCornerRadius
Bottom right Radius corner on the user's bubble. 
Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to be clipped.

- **Type:** Float    
- **Default value:** 0.0



#### bubbleEmailLinksRegex
Regular expression for email hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled

   - **Type:** String?    
   - **Default value:** nil



#### bubbleUrlLinksRegex
Regular expression for url hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled.

   - **Type:** String?  
   - **Default value:** nil



#### bubblePhoneLinksRegex
Regular expression for phone hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled.

   - **Type:** String?  
   - **Default value:** nil 


#### bubbleTopPadding
Define the bubble Top Padding.

- **Type:** Float  
- **Default value:** 10 



#### bubbleBottomPadding
Define the bubble bottom Padding.


- **Type:** Float  
- **Default value:** 10 


#### bubbleLeadingPadding
Define the bubble Leading Padding.

- **Type:** Float  
- **Default value:** 10 


#### bubbleTrailingPadding
Define the bubble Trailing Padding.

- **Type:** Float  
- **Default value:** 10 


#### bubbleTimestampBottomPadding
Define the bubble Trailing Padding.

- **Type:** Float    
- **Default value:** 5


#### bubbleTimestampTopPadding
Define the bubble Timestamp Top Padding.

- **Type:** Float    
- **Default value:** 5


#### enableEnlargeEmojis
When true, user and remote user messages containing one or two emojis will be enlarged in chat. Messages with one emoji will be the largest, two emojis will be large, and 3 or more will be displayed as normal text.

- **Type:** Bool    
- **Default value:** false



---   

### Window Mode

#### customButtonImage 
Custom button icon image that displays on the navigation bar.
NOTE: this property gets its tintColor from `conversationNavigationTitleColor`
When pressed, the [LPMessagingSDKCustomButtonTapped](mobile-app-messaging-sdk-for-ios-sdk-apis-callbacks-index.html#lpmessagingsdkcustombuttontapped) callback gets invoked.
   
- **Type:** UIImage?    
- **Default value:** nil
