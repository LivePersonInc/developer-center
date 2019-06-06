---
pagename: Attributes
redirect_from:
  - consumer-experience-ios-sdk-attributes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Customization and Branding

order: 224
permalink: mobile-app-messaging-sdk-for-ios-sdk-attributes-attributes.html

indicator: messaging
---

The goal of the following document is to enumerate the different fields controlling design attributes in the SDK. If a clearer view of which attribute corresponds with a design element is needed, please utilize the [Attributes Design Sheet](consumer-experience-ios-sdk-attributes-design-sheet.html).


### User's Bubble

#### remoteUserBubbleBackgroundColor
Color code for the background of the remote user's bubble.

   - **Type:** UIColor    
   - **Default:** \#004DC9  
 
   ![remoteuserbubblebackgroundcolor](img/remoteuserbubblebackgroundcolor.png)

--- 

#### remoteUserBubbleBorderColor
Color code for the outline color.

   - **Type:** UIColor    
   - **Default:** \#004DC9 

   ![remoteuserbubblebordercolor](img/remoteuserbubblebordercolor.png)

--- 

#### remoteUserBubbleLinkColor
Color code for links in the text of the remote user's bubble.

   - **Type:** UIColor    
   - **Default:** UIColor.white 

   ![remoteuserbubblelinkcolor](img/remoteuserbubblelinkcolor.png)

--- 


#### remoteUserBubbleTextColor
Color code for the text of the remote user's bubble.

   - **Type:** UIColor    
   - **Default:** UIColor.white 

   ![remoteuserbubbletextcolor](img/remoteuserbubbletextcolor.png)

--- 


#### remoteUserBubbleBorderWidth
Double number for the outline width. 

   - **Type:** Double    
   - **Default:**  2  

   ![remoteuserbubbleborderwidth](img/remoteuserbubbleborderwidth.png)


--- 


#### remoteUserBubbleTimestampColor
Color code for the timestamp of the remote user's bubble. 

   - **Type:** UIColor    
   - **Default:**  #5B5C5E

   ![remoteuserbubbletimestampcolor](img/remoteuserbubbletimestampcolor.png)

--- 


#### remoteUserTypingTintColor
Color of the remote user typing bubbles animation.  

   - **Type:** UIColor    
   - **Default:**  UIColor.white

   ![remoteusertypingtintcolor](img/remoteusertypingtintcolor.png)

--- 


#### remoteUserBubbleLongPressOverlayColor
Color of the remote user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.

   - **Type:** UIColor    
   - **Default:**  UIColor.black

   <img src="img/remoteUserBubbleOverlay.png" alt="remoteUserBubbleOverlay">

--- 


#### remoteUserBubbleLongPressOverlayAlpha
Alpha of the remote user's bubble overlay when user uses a long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.  

   - **Type:** Float    
   - **Default:**  0.3

<img src="img/remoteUserBubbleOverlay.png" alt="remoteUserBubbleOverlay">

--- 


#### remoteUserBubbleTopLeftCornerRadius  
Top left Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:**  8

   <img src="img/remoteTopLeft.png" alt="remoteTopLeft">

--- 


#### remoteUserBubbleTopRightCornerRadius
Top right Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:**  8

<img src="img/remoteTopRight.png" alt="remoteTopRight">

--- 


#### remoteUserBubbleBottomLeftCornerRadius
Bottom left Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:** 8

   <img src="img/remoteBottomLeft.png" alt="remoteBottomLeft">

--- 


#### remoteUserBubbleBottomRightCornerRadius
Bottom right Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:** 8

   <img src="img/remoteBottomRight.png" alt="remoteBottomRight">

--- 


#### userBubbleBackgroundColor
Color code for the background of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #EDEDED

<img src="img/userbubblebackgroundcolor.png" alt="userbubblebackgroundcolor">

--- 


#### userBubbleBorderColor
Color code for the outline color.

   - **Type:** UIColor    
   - **Default:** #EDEDED

<img src="img/userbubblebordercolor.png" alt="userbubblebordercolor">

--- 


#### userBubbleLinkColor
Color code for links in the text of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #0000ee

<img src="img/userbubblelinkcolor.png" alt="userbubblelinkcolor">

--- 


#### userBubbleTextColor
Color code for the text of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** UIColor.black

<img src="img/userbubbletextcolor.png" alt="userbubbletextcolor">

--- 


#### userBubbleBorderWidth
Double number for the outline width.

   - **Type:** Double    
   - **Default:** 1

<img src="img/userbubbleborderwidth.png" alt="userbubbleborderwidth">

--- 


#### userBubbleTimestampColor
Color code for the timestamp of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #5B5C5E

<img src="img/userbubbletimestampcolor.png" alt="userbubbletimestampcolor">

--- 


#### userBubbleSendStatusTextColor
Color code for the send status text of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #5B5C5E

<img src="img/userbubblesendstatustextcolor.png" alt="userbubblesendstatustextcolor">

--- 


#### userBubbleErrorTextColor
Color code for the error view text of the visitor bubble. 

   - **Type:** UIColor    
   - **Default:** #DE0A23

<img src="img/userbubbleerrortextcolor.png" alt="userbubbleerrortextcolor">

--- 


#### userBubbleErrorBorderColor
Color code for the error view border of the visitor bubble.

   - **Type:** UIColor    
   - **Default:** #DE0A23

<img src="img/userbubbleerrorbordercolor.png" alt="userbubbleerrorbordercolor">

--- 


#### userBubbleLongPressOverlayColor
Color of the user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.  

   - **Type:** UIColor    
   - **Default:** UIColor.black

<img src="img/userBubbleOverlay.png" alt="userBubbleOverlay">

--- 


#### userBubbleLongPressOverlayAlpha
Alpha of the user's bubble overlay when user use long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble, when the menu dismissed, overlay will disappear too. In order to show overlay enableBubblesOverlayOnLongPress should be true.  

   - **Type:** Float    
   - **Default:** 0.3

<img src="img/userBubbleOverlay.png" alt="userBubbleOverlay">

--- 


#### userBubbleTopLeftCornerRadius
Top left Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.

   - **Type:** Float    
   - **Default:** 8

<img src="img/userTopLeft.png" alt="userTopLeft">

--- 


#### userBubbleTopRightCornerRadius
Top right Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:** 8

<img src="img/userTopRight.png" alt="userTopRight">

--- 


#### userBubbleBottomLeftCornerRadius
Bottom left Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float    
   - **Default:** 8

<img src="img/userBottomLeft.png" alt="userBottomLeft">

--- 


#### userBubbleBottomRightCornerRadius
Bottom right Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

   - **Type:** Float   
   - **Default:** 8

<img src="img/userBottomRight.png" alt="userBottomRight">

--- 


#### bubbleEmailLinksRegex
Regular expression for email hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled

   - **Type:** String?    
   - **Default:** nil

--- 


#### bubbleUrlLinksRegex
Regular expression for url hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled.

   - **Type:** String?  
   - **Default:** nil

--- 


#### bubblePhoneLinksRegex
Regular expression for phone hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled.

   - **Type:** String?  
   - **Default:** nil 

--- 


#### bubbleTopPadding
Define the bubble Top Padding.

   - **Type:** Float  
   - **Default:** 10

<img src="img/bubbleTopPadding.png" alt="bubbleTopPadding">

--- 


#### bubbleBottomPadding
Define the bubble bottom Padding.

   - **Type:** Float  
   - **Default:** 10

<img src="img/bubbleBottomPadding.png" alt="bubbleBottomPadding">

--- 


#### bubbleLeadingPadding
Define the bubble Leading Padding.

   - **Type:** Float  
   - **Default:** 10

<img src="img/bubbleLeadingPadding.png" alt="bubbleLeadingPadding">

--- 


#### bubbleTrailingPadding
Define the bubble Trailing Padding.

   - **Type:** Float   
   - **Default:** 10

<img src="img/bubbleTrailingPadding.png" alt="bubbleTrailingPadding">

--- 


#### bubbleTimestampBottomPadding
Define the bubble Trailing Padding.

   - **Type:** Float    
   - **Default:** 5

<img src="img/bubbleTimestampBottomPadding.png" alt="bubbleTimestampBottomPadding">

--- 


#### bubbleTimestampTopPadding
Define the bubble Timestamp Top Padding.

   - **Type:** Float  
   - **Default:** 5

<img src="img/bubbleTimestampTopPadding.png" alt="bubbleTimestampTopPadding">

--- 


#### enableEnlargeEmojis
When true, user and remote user messages containing one or two emojis will be enlarged in chat. Messages with one emoji will be the largest, two emojis will be large, and 3 or more will be displayed as normal text.

   - **Type:** Bool  
   - **Default:** false

<img src="img/enableEnlargeEmojis.png" alt="enableEnlargeEmojis">

---   

### Link Preview

#### enableLinkPreview 
Enable or disable link preview feature. If disabled, user will not see site's link preview or link preview.  

   - **Type:** Bool
   - **Default:** true


--- 

#### linkPreviewBackgroundColor 
Color code for the background of the link preview area inside cell.

   - **Type:** UIColor
   - **Default:** UIColor.white 

--- 

#### linkPreviewTitleTextColor
Color code for the title text inside link preview area inside cell.

   - **Type:** UIColor
   - **Default:** UIColor.black  

--- 

#### linkPreviewDescriptionTextColor 
Color code for the description text inside link preview area inside cell.

   - **Type:** UIColor
   - **Default:** #5B5C5E  

--- 

#### linkPreviewSiteNameTextColor  
Color code for the description site name link preview area inside cell.

   - **Type:** UIColor
   - **Default:** #E2E3E3

--- 

#### linkPreviewBorderWidth 
Double number for the outline width of link preview area inside cell.

   - **Type:** Double
   - **Default:** 1.0  

--- 

#### linkPreviewStyle 
Refers to the style in which the link preview cell will be displayed.

   - **Type:** LPUrlPreviewStyle
   - **Default:** LPUrlPreviewStyle.slim  

Slim: <img src="img/linkpreviewstyleslim.png" alt="linkpreviewslim"> 

Large: <img src="img/linkpreviewstylelarge.png" alt="linkpreviewlarge"> 


--- 

#### linkPreviewSiteNameTextColor  
Color code for the description site name link preview area inside cell.

   - **Type:** UIColor
   - **Default:**  

--- 

#### urlRealTimePreviewBackgroundColor 
The background color of the url real time preview.

   - **Type:** UIColor
   - **Default:**  UIColor.white

<img src="img/realtimepreviewbackgroundcolor.png" alt="realtimepreviewbackgroundcolor"> 

--- 

#### urlRealTimePreviewBorderColor 
The border color of the url real time preview.

   - **Type:** UIColor
   - **Default:**  

<img src="img/realtimepreviewbordercolor.png" alt="realtimepreviewbordercolor"> 
 
--- 

#### urlRealTimePreviewBorderWidth
The border width of the url real time preview.

   - **Type:** Float
   - **Default:**  

<img src="img/urlrealtimepreviewborderwidth.png" alt="urlRealTimePreviewBorderWidth"> 
 

--- 

#### urlRealTimePreviewTitleTextColor  
The title text color of the url real time preview.

   - **Type:** UIColor
   - **Default:**  

<img src="img/urlrealtimepreviewtitletextcolor.png" alt="urlRealTimePreviewTitleTextColor">

--- 

#### urlRealTimePreviewDescriptionTextColor  
The description text color of the url real time preview.

   - **Type:** UIColor
   - **Default:**  

<img src="img/urlrealtimepreviewdescriptiontextcolor.png" alt="urlrealtimepreviewdescriptiontextcolor">


--- 

#### useNonOGTagsForLinkPreview  
The urlPreview attribute also uses non-OG tags to parse urls instead of using only OG tags if useNonOGTagsForLinkPreview is true.

   - **Type:** Bool
   - **Default:**  true

--- 

### Photo and file sharing

#### enablePhotoSharing 
True - Enables Photo Sharing feature, False - Disables Photo Sharing. 

   - **Type:** Bool
   - **Default:**  false

--- 

#### maxNumberOfSavedFilesOnDisk 
This number represents how many files will be saved on the disk. Exceeding files are deleted when the app closes. 

   - **Type:** Int
   - **Default:** 20 

--- 

#### photosharingMenuBackgroundColor  
Photo Sharing menu background color.

   - **Type:** UIColor
   - **Default:**  #0362AC

<img src="img/photosharingmenubackgroundcolor.png" alt="photosharingmenubackgroundcolor"> 

--- 

#### photosharingMenuButtonsBackgroundColor  
Photo Sharing menu buttons background color. 

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/photosharingmenubuttonsbackgroundcolor.png" alt="photosharingmenubuttonsbackgroundcolor">

--- 

#### photosharingMenuButtonsTintColor  
Photo Sharing menu buttons tint color.

   - **Type:** UIColor
   - **Default:** #0362AC 

<img src="img/photosharingmenubuttonstintcolor.png" alt="photosharingmenubuttonstintcolor"> 

--- 

#### photosharingMenuButtonsTextColor  
Photo Sharing menu buttons text color.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/photosharingmenubuttonstextcolor.png" alt="photosharingmenubuttonstextcolor">  

--- 

#### cameraButtonEnabledColor  
Photo Sharing Camera button color in enabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled.

   - **Type:** UIColor
   - **Default:** #0362AC 

<img src="img/cameraButtonColor.png" alt="cameraButtonColor">  

--- 

####  cameraButtonDisabledColor  
Photo Sharing Camera button color in disabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled. 

   - **Type:** UIColor
   - **Default:** #8B8A8F 

<img src="img/cameraButtonColor.png" alt="cameraButtonColor">

--- 

#### fileCellLoaderFillColor 
Radial loader fill color.

   - **Type:** UIColor
   - **Default:** UIColor(white: 0.0, alpha: 0.5) 

<img src="img/filecellloaderfillcolor.png" alt="fileCellLoaderFillColor">

--- 

#### fileCellLoaderRingProgressColor  
Radial loader progress color.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/filecellloaderringprogresscolor.png" alt="filecellloaderringprogresscolor">

--- 

#### fileCellLoaderRingBackgroundColor  
Radial loader progress background color.

   - **Type:** UIColor
   - **Default:** UIColor.lightGray 

<img src="img/filecellloaderringbackgroundcolor.png" alt="filecellloaderringprogresscolor">

{:.notice}
The disabled/enabled color of the Camera button, which is in the input text view, changes according to the `sendButtonDisabledTextColor` and `sendButtonEnabledTextColor` parameters. 

--- 

### Send Button

#### sendButtonDisabledColor 
Color code for Send and Camera (of Photo Sharing) buttons in disabled mode. 

   - **Type:** UIColor
   - **Default:** #AAAAAA 

--- 

#### sendButtonEnabledColor  
Color code for Send and Camera (of Photo Sharing) buttons in disabled mode. 

   - **Type:** UIColor
   - **Default:** #0362AC 

--- 

####  sendButtonImage  
Send button Image in the conversation screen. The custom image changes only if `isSendMessageButtonInTextMode` = **false**. 

{:.important}
You must follow the guidelines in the [Custom Icon documentation](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/custom-icons/).

   - **Type:** UIImage
   - **Default:** SDK bundle sendMessageIcon Icon 

<img src="img/DefaultSendButton.png" alt="DefaultSendButton">

--- 

#### isSendMessageButtonInTextMode  
You have two options for the send message button mode: **text mode** (taken from localized resources) and **icon mode**.  
 
   - **Type:** Bool
   - **Default:** text mode 

--- 

### System Messages

#### systemBubbleTextColor  
Color code for the text of the system messages. 

   - **Type:** UIColor
   - **Default:** UIColor.black 

<img src="img/systembubbletextcolor.png" alt="systemBubbleTextColor"> 

--- 

### Window Mode

#### customButtonImage 
*(Window mode only)* Custom button icon image that displays on the navigation bar.
When pressed, the [LPMessagingSDKCustomButtonTapped](mobile-app-messaging-sdk-for-ios-sdk-apis-callbacks-index.html#lpmessagingsdkcustombuttontapped) callback gets invoked.

   - **Type:** UIImage
   - **Default:** nil 

<img src="img/custombuttonimage.png" alt="custombuttonimage"> 
 
--- 

### Delivery Notifications

#### checkmarkVisibility 
Checkmark visibility of the following options (type CheckmarksState): SentOnly - Show checkmarks for only Sent messages. SentAndAccepted - Show checkmarks for only Sent and Accepted messages. All - Show checkmarks for Sent, Accepted and Read messages. 

   - **Type:** CheckmarksState(Integer Enum)
   - **Default:** CheckmarksState.All 

--- 

#### checkmarkReadColor  
Color of checkmark indication signs of Read messages. 

   - **Type:** UIColor
   - **Default:** #004DC9 
 
<img src="img/checkmarkreadcolor.png" alt="checkmarkreadcolor">

--- 

#### checkmarkDistributedColor  
Color of checkmark indication signs of Distributed messages.  

   - **Type:** UIColor
   - **Default:** #5B5C5E 

<img src="img/checkmarkdistributedcolor.png" alt="checkmarkdistributedcolor"> 

--- 

####  checkmarkSentColor  
Color of checkmark indication signs of Sent messages. 

   - **Type:** UIColor
   - **Default:** #5B5C5E 

--- 

#### isReadReceiptTextMode  
Two options for read indication: Read Receipt with Text Mode Read. Receipt with Icon Mode. If the parameter set as true the mode will be Text. If the parameter set as false the mode will be Icon. 

   - **Type:** Bool
   - **Default:** true 

<img src="img/isreadreceipttextmode.png" alt="isReadReceiptTextMode"> 

--- 

#### messageStatusNumericTimestampOnly  
When false (default), time stamps displays information relative to when sent/distributed/read, for example, 'sent 5 minutes ago'. When true, shows as numeric only, for example, '11:32.'  

   - **Type:** Bool
   - **Default:** false 

<img src="img/messageStatusNumericTimestampOnly.png" alt="messageStatusNumericTimestampOnly"> 

--- 

### Surveys Buttons (CSAT and FCR)

#### csatSubmitButtonCornerRadius   
Corner radius of the Submit button.  

   - **Type:** Double
   - **Default:** 30 

<img src="img/csatsubmitbuttoncornerradius.png" alt="csatSubmitButtonCornerRadius"> 

--- 

#### csatYesNoButtonsCornerRadius  
Corner radius of the resolution Yes/No buttons.  

   - **Type:** Double
   - **Default:** 25 

<img src="img/csatYesNoResolutionButtonsCornerRadius.png" alt="csatYesNoButtonsCornerRadius"> 

--- 

####  csatSubmitButtonBackgroundColor  
Background color code of the Submit button.  

   - **Type:** UIColor
   - **Default:** #229A49 

<img src="img/csatsubmitbuttonbackgroundcolor.png" alt="csatsubmitbuttonbackgroundcolor"> 

--- 

#### csatSubmitButtonTextColor  
Text color code of the Submit button.  

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/csatsubmitbuttontextcolor.png" alt="csatSubmitButtonTextColor"> 

--- 

#### csatRatingButtonSelectedColor  
Background Color code of the rating buttons.  

   - **Type:** UIColor
   - **Default:** #229A49 

<img src="img/csatratingbuttonselectedcolor.png" alt="csatRatingButtonSelectedColor"> 

--- 

#### csatResolutionButtonSelectedColor  
Color code for the FCR survey buttons (YES/NO) when selected.  

   - **Type:** UIColor
   - **Default:** #229A49 

<img src="img/csatresolutionbuttonselectedcolor.png" alt="csatresolutionbuttonselectedcolor"> 

--- 

#### csatAllTitlesTextColor  
Title text color for all labels.  

   - **Type:** UIColor
   - **Default:** UIColor.black 

<img src="img/csatalltitlestextcolor.png" alt="csatAllTitlesTextColor"> 

--- 

#### csatResolutionHidden  
Hides the FCR survey (YES/NO) question.  

   - **Type:** Bool
   - **Default:** false 

<img src="img/csatresolutionhidden.png" alt="csatResolutionHidden"> 

--- 

#### csatAgentViewHidden  
Hides the view of agent avatar and name. 
 
   - **Type:** Bool
   - **Default:** true 

<img src="img/csatagentviewhidden.png" alt="csatagentviewhidden"> 

--- 

#### csatThankYouScreenHidden 
Hides the Thank You screen after tapping Submit button.   

   - **Type:** Bool
   - **Default:** false 

<img src="img/csatthankyouscreenhidden.png" alt="csatthankyouscreenhidden"> 

--- 

#### csatNavigationBackgroundColor 
Background color of the navigation of the survey.  

   - **Type:** UIColor
   - **Default:** #229A49 

<img src="img/csatnavigationbackgroundcolor.png" alt="csatnavigationbackgroundcolor"> 

--- 

#### csatNavigationTitleColor  
Text color of the title in the survey navigation. |

   - **Type:** UIColor
   - **Default:** UIColor.white 

--- 

#### csatSkipButtonColor  
Skip survey button color. 

   - **Type:** UIColor
   - **Default:** UIColor.black 

--- 

#### csatUIStatusBarStyleLightContent  
Allow the UI status bar to take the color of the survey navigation bar color. 

   - **Type:** Bool
   - **Default:** true 

--- 

#### csatShowSurveyView 
Hides the whole survey view and disables it. 

   - **Type:** Bool
   - **Default:** true 

--- 

#### csatSurveyExpirationInMinutes  
Expiration of CSAT in minutes from the moment the conversation was ended. If Survey exceeded the expiration, it does not get presented to the user.  

   - **Type:** UInt
   - **Default:** 1440 

--- 

### Conversations

#### maxPreviousConversationToPresent  
Number of conversations to show in advance. 

   - **Type:** UInt
   - **Default:** 2 

--- 

#### deleteClosedConversationOlderThanMonths  
Upon SDK initialization, all closed conversations with an end date older than X months get deleted from the database. Setting 0 deletes all closed conversations. 

   - **Type:** UInt
   - **Default:** 13 

--- 

#### sendingMessageTimeoutInMinutes  
Maximum number of minutes to send the message. 

   - **Type:** UInt
   - **Default:** 60 

--- 

#### conversationSeparatorTextColor  
Conversation separator text and line color.

   - **Type:** UIColor
   - **Default:** UIColor.black 

<img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor"> 

--- 

#### enableConversationSeparatorTextMessage 
Toggle conversation separator text message when conversation resolved from agent or consumer.

   - **Type:** Bool
   - **Default:** true 

<img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor">

--- 

#### enableConversationSeparatorLine  
Toggle conversation separator line when conversation resolved from agent or consumer.

   - **Type:** Bool
   - **Default:** true 

<img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor">

--- 

#### conversationSeparatorFontSize 
Define the conversation closed separator font size.

   - **Type:** UIFontTextStyle
   - **Default:** UIFontTextStyle.caption1 

<img src="img/conversationClosedSeparatorFontSize.png" alt="conversationClosedSeparatorFontSize"> 

--- 

#### conversationSeparatorBottomPadding 
Define the conversation Closed label to separator line padding.

   - **Type:** Float
   - **Default:**  7

<img src="img/conversationClosedSeparatorBottomPadding.png" alt="conversationClosedSeparatorBottomPadding">

--- 

#### conversationSeparatorFontName 
Custom font name for conversation closed separator. Fonts that are not part of the iOS families, must be defined in App's Info.plist.

   - **Type:** Float
   - **Default:** 7 

<img src="img/conversationClosedSeparatorFontName.png" alt="conversationClosedSeparatorFontName"> 

--- 

#### conversationSeparatorViewBottomPadding  
Define the conversation separator view bottom padding.

   - **Type:** String
   - **Default:** nil 

<img src="img/conversationClosedSeparatorViewBottomPadding.png" alt="conversationClosedSeparatorViewBottomPadding">

--- 

#### conversationClosedSeparatorTopPadding 
Define the conversation Closed Separator Top padding.

   - **Type:** Float
   - **Default:** 5 

<img src="img/conversationClosedSeparatorTopPadding.png" alt="conversationClosedSeparatorTopPadding">

--- 

#### enableVibrationOnMessageFromRemoteUser 
Toggle vibration sound when a remote user sends a new message.

   - **Type:** Bool
   - **Default:** false 

--- 

#### announceAgentTyping  
If true, show agent is typing indicator in selected position and accessibility will announce when agent is typing a message to the consumer. If false, will not show any indication, and will not announce when agent is typing a message. 

   - **Type:** Bool
   - **Default:**  true 

--- 

#### showAgentTypingInMessageBubble  
If true, shows agent is typing indicator in a message bubble. If false, show indicator under Agent label in navigator bar. if announceAgentTyping is false, will not show any "is typing" indicator regardless of current value. 

   - **Type:** Bool
   - **Default:** true 

--- 

### Unread Messages

#### scrollToBottomButtonBackgroundColor  
Scroll to bottom button background color of the whole button.

   - **Type:** UIColor
   - **Default:** UIColor.black 

<img src="img/scrolltobottombuttonbackgroundcolor.png" alt="scrolltobottombuttonarrowcolor"> 

--- 

#### scrollToBottomButtonMessagePreviewTextColor 
Scroll to bottom button text color of the last unread message preview.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/scrolltobottombuttonmessagepreviewtextcolor.png" alt="scrolltobottombuttonmessagepreviewtextcolor">

--- 

#### scrollToBottomButtonBadgeBackgroundColor  
Scroll to bottom button unread message badge background color.

   - **Type:** UIColor
   - **Default:** #E7242D 

<img src="img/scrolltobottombuttonbadgebackgroundcolor.png" alt="scrolltobottombuttonbadgebackgroundcolor"> 

--- 

#### scrollToBottomButtonBadgeTextColor 
Scroll to bottom button unread message badge text color.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/scrolltobottombuttonbadgetextcolor.png" alt="scrolltobottombuttonbadgetextcolor"> 

--- 

#### scrollToBottomButtonArrowColor 
Scroll to bottom button arrow tint color.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/scrolltobottombuttonarrowcolor.png" alt="scrolltobottombuttonarrowcolor">

--- 

#### unreadMessagesDividerBackgroundColor 
Unread Messages divider background color.

   - **Type:** UIColor
   - **Default:** #F5F5F5 

<img src="img/unreadmessagesdividerbackgroundcolor.png" alt="unreadmessagesdividerbackgroundcolor">

--- 

#### unreadMessagesDividerTextColor 
Unread Messages divider text color.

   - **Type:** UIColor
   - **Default:** #004DC9 

<img src="img/unreadmessagesdividertextcolor.png" alt="unreadmessagesdividertextcolor"> 

--- 

#### scrollToBottomButtonEnabled
Toggle the mode of the Scroll to bottom button. 

   - **Type:** Bool
   - **Default:** true 

--- 

#### scrollToBottomButtonMessagePreviewEnabled  
Toggle the mode of the Scroll to bottom unread message text preview. 


   - **Type:** Bool
   - **Default:** true 

--- 

#### unreadMessagesDividerEnabled 
Toggle the mode of the Unread Messages divider. If disabled, scroll to bottom button scrolls to bottom although we can have new messages and don't show the badge at all nor "new message preview." 

   - **Type:** Bool
   - **Default:** true 

--- 

#### unreadMessagesCornersRadius 
Define the corners radius of the unread messages bubble.  

   - **Type:** Float
   - **Default:** 8 for all the corners 

<img src="img/unreadBubbleRadius.png" alt="unreadBubbleRadius">  

--- 

#### scrollToBottomButtonCornerRadius  
Define the left top and left bottom corner radius of the scroll down indicator.  

Define the corner radius for the left top

   - **Type:** Float
   - **Default:**  20 for left top and the left bottom corners

<img src="img/scrollToBottomButtonCornerRadius.png" alt="scrollToBottomButtonCornerRadius"> 

--- 

#### 

     | scrollToBottomButtonBadgeCornerRadius | 
     | Float | 
     | Define the corners radius of the unread messages counter inside the scroll down indicator. | 
     | <img src="img/scrollToBottomButtonBadgeCornerRadius.png" alt="scrollToBottomButtonBadgeCornerRadius"> | 
     | 12 for all the corners	 | 

--- 

### Localization

#### country  
     | String? | 
     | Country code: When it is not nil, it will be combined with 'language' ("language_country", for example: en_US) and used instead of device default locale when formatting date and time. If no value is provided, the SDK will use the country according to the device's locale. | 
     |  | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | language | 
     | LPLanguage | 
     | Language that will be used instead of default device language.
Its type is LPLanguage enum that contains all the languages that are supported by MessagingSDK.
It will affect the following areas:
     1. Will be used when getting localized strings
     2. Will be combined with 'country' ("language_country", for example: en_US) and used instead of default device locale when formatting time and date. If no value is provided, the SDK will use the device's language as default. | 
     |  | 
     | DeviceLanguage | 

   - **Type:** 
   - **Default:**  

--- 

### Brand

#### brandName  
     | String | 
     | The brand name will be shown as a title on toolbar when there is no active conversation.  | 
     |  | 
     | "" (Empty String) | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | conversationBackgroundColor | 
     | UIColor | 
     | Color code for the entire view background. | 
     |  | 
     | UIColor.white | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | customFontNameConversationFeed | 
     | String? | 
     |  Custom font name for conversation feed. This font will affect all Messages, Timestamp and Separators. Fonts that are not part of the iOS families, must be defined in App's Info.plist | 
     | <img src="img/customFontNameConversationFeed.png" alt="customFontNameConversationFeed"> | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | customFontNameNonConversationFeed | 
     | String? | 
     |  Custom font name for all non conversation feed controls. Such as: Buttons, Alerts, Banners, Menu and External Windows.
    Fonts that are not part of the iOS families, must be defined in App's Info.plist | 
     | <img src="img/customFontNameNonConversationFeed.png" alt="customFontNameNonConversationFeed"> | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | customRefreshControllerImagesArray | 
     | &lt;ArrayUIImage&gt;? | 
     | Array of images for creating the custom refresh controller the controller will loop the images from the array need two or more images in the array for take effect | 
     | <img src="img/customRefreshControllerImagesArray.png" alt="customRefreshControllerImagesArray"> | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | customRefreshControllerAnimationSpeed | 
     | Float&lt;UIImage&gt; | 
     | custom refresh controller speed animation define the full images loop time. Smaller value will create high speed animation  | 
     |  | 
     | 2 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | conversationBackgroundPortraitImage | 
     | UIImage; | 
     | When not nil, will be used as the conversation portrait background image. When an image is shown it is recommended to set dateSeparatorBackgroundColor config to clear. | 
     |  | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | conversationBackgroundLandscapeImage | 
     | UIImage; | 
     |  When not nil, will be used as the conversation landscape background image. When an image is shown it is recommended to set dateSeparatorBackgroundColor config to clear. | 
     |  | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | conversationBackgroundImageContentMode | 
     | UIViewContentMode; | 
     | Defines the content mode of the conversation background image.  | 
     |  | 
     | scaleToFill | 

   - **Type:** 
   - **Default:**  

--- 

### Date Separator

#### dateSeparatorTitleBackgroundColor  
			 | UIColor | 
			 | Color code for date separator title background color. | 
			 | <img src="img/dateseparatortitlebackgroundcolor.png" alt="dateseparatortitlebackground"> | 
			 | UIColor.white | 

   - **Type:** 
   - **Default:**  

--- 

#### 

			 | dateSeparatorTextColor | 
			 | UIColor | 
			 | Color code for date separator text color. | 
			 | <img src="img/dateseparatortextcolor.png" alt="dateSeparatorTextColor"> | 
			 | #46474A | 

   - **Type:** 
   - **Default:**  

--- 

#### 

			 | dateSeparatorLineBackgroundColor | 
			 | UIColor | 
			 | Color code for date separator line background color. | 
			 | <img src="img/dateseparatorlinebackgroundcolor.png" alt="datesepartaorlinebackgroundcolor"> | 
			 | UIColor.clear | 

   - **Type:** 
   - **Default:**  

--- 

#### 

			 | dateSeparatorBackgroundColor | 
			 | UIColor | 
			 | Color code for date separator background color. | 
			 | <img src="img/dateseparatorbackgroundcolor.png" alt="dateSeparatorBackgroundColor"> | 
			 | #FFFFFF | 

   - **Type:** 
   - **Default:**  

--- 

#### 

			 | dateSeparatorFontSize | 
			 | UIFontTextStyle | 
			 | Define the Date Separator font text style. | 
			 | <img src="img/dateSeparatorFontSize.png" alt="dateSeparatorFontSize"> | 
			 | UIFontTextStyle.footnote | 

   - **Type:** 
   - **Default:**  

--- 

#### 

			 | customFontNameDateSeparator | 
			 | String | 
			 | Custom font name for Timestamp. Fonts that are not part of the iOS families, must be defined in App's Info.plist. | 
			 | <img src="img/customFontNameSeparatorTimestampFeed.png" alt="customFontNameSeparatorTimestampFeed"> | 
			 | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

			 | dateSeparatorTopPadding | 
			 | Float | 
			 | Define the Date Separator Top padding. | 
			 | <img src="img/dateSeparatorTopPadding.png" alt="dateSeparatorTopPadding"> | 
			 | 0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

			 | dateSeparatorBottomPadding | 
			 | Float | 
			 | Define the Date Separator bottom padding. | 
			 | <img src="img/dateSeparatorBottomPadding.png" alt="dateSeparatorBottomPadding"> | 
			 | 0 | 

   - **Type:** 
   - **Default:**  

--- 

### User input view

#### inputTextViewContainerBackgroundColor  
     | UIColor | 
     | User Input TextView container background color. | 
     | <img src="img/inputtextviewcontainerbackgroundcolor.png" alt="inputTextViewContainerBackgroundColor"> | 
     | #F5F5F5 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | inputTextViewCornerRadius | 
     | Double | 
     | User Input TextView corner radius. | 
     | <img src="img/inputtextviewcornerradius.png" alt="inputtextviewcornerradius"> | 
     | 20.0 | 

   - **Type:** 
   - **Default:**  

--- 

### Agent Assignment

#### retrieveAssignedAgentFromLastClosedConversation  
     | Bool | 
     | When using "getAssignedAgent" method, this option lets you decide whether to get assigned agents from active conversations only, or also from the last closed conversation in case there is no active conversation. If no assigned agent is available this method will return nil. | 
     |  | 
     | true | 

   - **Type:** 
   - **Default:**  

--- 

### Duration of Local Notifications

#### notificationShowDurationInSeconds  
     | Double | 
     | Display duration of the local notification in seconds.
Examples: TimeToRespond notification, local notification, etc.
Note: this parameter will be extended to 60sec when in VoiceOver mode. | 
     |  | 
     | 3 (60 when in VoiceOver mode) | 

   - **Type:** 
   - **Default:**  

--- 

### Time To Response and Off hours

#### ttrShouldShow  
    | Bool | 
    | Toggling this on will show TTR notifications including off hours. When the auto messages feature is enabled, TTR notifications will not be displayed regardless of this parameter.’) | 
    |  | 
    | true | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | ttrShowShiftBanner | 
     | Bool | 
     | Ability to enable/disable shift toaster ('An agent will respond...’) | 
     |  | 
     | true | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | ttrFirstTimeDelay | 
     | Double | 
     | TTR - Time To Respond. Number of seconds before the first TTR notification appears. | 
     |  | 
     | 10 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | ttrShouldShowTimestamp | 
     | Bool | 
     | TTR - Time To Respond. <b>Enable</b>: Displays a time stamp in the TTR notification. <b>Disable</b>: Displays: "An agent will respond shortly". | 
     | <img src="img/ttrshouldshowtimestamp.png" alt="ttrShouldShowTimestamp"><br><img src="img/ttrshouldshowtimestamp1.png" alt="ttrShouldShowTimestamp"> | 
     | false | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | ttrShowFrequencyInSeconds | 
     | UInt | 
     | Controls the TTR frequency: Don’t show the TTR more than once in X seconds. | 
     |  | 
     | 8 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | showUrgentButtonInTTRNotification | 
     | Bool | 
     | TTR - Time To Respond. Enable presentation of Urgent button in the TTR notification. | 
     | <img src="img/showurgentbuttoninttrnotification.png" alt="showUrgentButtonInTTRNotification"><br><img src="img/showurgentbuttoninttrnotification1.png" alt="showurgentbuttoninttrnotification"> | 
     | false | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | showOffHoursBanner | 
     | Bool | 
     | Ability to disable/enable the off-hours toaster. | 
     | <img src="img/showoffhoursbanner.png" alt="showoffhoursbanner"> | 
     | true | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | ttrBannerBackgroundColor | 
     | UIColor | 
     | Color of background for banner. | 
     | <img src="img/ttrbannerbackgroundcolor.png" alt="ttrBannerBackgroundColor"> | 
     | #52A742 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | ttrBannerTextColor | 
     | UIColor | 
     | Text color of the banner. | 
     | <img src="img/ttrbannertextcolor.png" alt="ttrbannertextcolor"> | 
     | #52A742 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | ttrBannerOpacityAlpha | 
     | Double | 
     | Opacity level of the banner background (values: 0.0 - 1.0). | 
     | <img src="img/ttrbanneropacityalpha.png" alt="ttrBannerOpacityAlpha"> | 
     | 0.8 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | offHoursTimeZoneName | 
     | String | 
     | Off Hours time zone name string based on [NSTimeZone knownTimeZoneNames]. If sending empty string, the local timezone will be used (Server sends UTC time). | 
     |  | 
     | "" (Empty String) | 

   - **Type:** 
   - **Default:**  

--- 

### Date and Time

#### lpDateFormat  
     | String? | 
     | Custom formatting for date string (day, year..), for example: 'd MMM'. If not defined, one of the default styles will be used (see timestamps formatting). | 
     |  | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | lpTimeFormat | 
     | String? | 
     | Custom formatting for time string (hours, lpDateTimeFormat minutes..), for example: 'hh:mm a'. If not defined, one of the default styles will be used (see timestamps formatting). | 
     |  | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | lpDateTimeFormat | 
     | String? | 
     | Custom formatting for date and time string, for example: 'EEEE MM/dd/YY hh:mm a'. If not defined, one of the default styles will be used (see timestamps formatting). | 
     |  | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

### User Avatar

#### remoteUserAvatarBackgroundColor  
     | UIColor | 
     | Background color of the remote user’s avatar. | 
     |  | 
     | #004DC9 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | remoteUserAvatarLeading | 
     | Float | 
     | Define the remote avatar Leading padding (left edge to avatar). | 
     | <img src="img/remoteUserAvatarLeadingPadding.png" alt="remoteUserAvatarLeadingPadding"> | 
     | 8 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | remoteUserAvatarTrailingPadding | 
     | Float | 
     | Define the remote avatar Trailing padding (Avatar to bubble). | 
     | <img src="img/remoteUserAvatarTrailingPadding.png" alt="remoteUserAvatarTrailingPadding"> | 
     | 8 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | remoteUserAvatarIconColor | 
     | UIColor | 
     | Icon color of default remoteUser avatar. | 
     | #0362AC | 
     | #FFFFFF | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | remoteUserDefaultAvatarImage | 
     | UIImage? | 
     | Default Avatar image of the remote user. When assigned, this image will disable remoteUserAvatarBackgroundColor and remoteUserAvatarIconColor configurations.  If remote user has an avatar image in his profile, this attribute will be ignored. | 
     | <img src="img/remoteUserDefaultAvatarImage.png"> | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | brandAvatarImage | 
     | UIImage? | 
     | Set avatar image for brand. This is an optional UIImage that if is set to nil a default avatar will be presented. Image ratio should be 1:1 (square) and at least 50x50 pixels. | 
     |  | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | csatAgentAvatarBackgroundColor | 
     | UIColor | 
     | Background color of agent's default avatar in CSAT. | 
     | <img src="img/csatagentavatarbackgroundcolor.png" alt="csatAgentAvatarBackgroundColor"> | 
     | #004DC9 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | csatAgentAvatarIconColor | 
     | UIColor | 
     | Icon color of agent's default avatar in CSAT. | 
     | <img src="img/csatagentavatariconcolor.png" alt="csatAgentAvatarIconColor"> | 
     | #FFFFFF | 

   - **Type:** 
   - **Default:**  

--- 

### Data Masking

#### enableClientOnlyMasking | 
     | Bool | 
     | Determines whether to enable using regular expression to control which part of the text to mask, all masked data will appear as asterisks, will be saved to local db masked and will be sent to the server unmasked. | 
     |  | 
     | false | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | enableRealTimeMasking | 
     | Bool | 
     | Determines whether to enable using regular expression to control which part of the text to mask, all masked data will appear as asterisks, will be saved to local db masked and sent to the server masked.  | 
     |  | 
     | false | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | clientOnlyMaskingRegex | 
     | String | 
     | Regular expression string to control which part of the text to mask, all masked data will appear as asterisks, will be saved to local db masked and will be sent to the server unmasked. Default is empty, meaning no regex. The regular expression patterns and behavior are based on Perl's regular expressions. See Apple Reference.  | 
     |  | 
     | "" (Empty String) | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | realTimeMaskingRegex | 
     | String | 
     | Regular expression string to control which part of the text to mask. All masked data will appear as asterisks, will be saved to local db masked, and will be sent to the server masked. Default is empty, meaning no regex. The regular expression patterns and behavior are based on Perl's regular expressions. See Apple Reference.  | 
     |  | 
     | "" (Empty String) | 

   - **Type:** 
   - **Default:**  

--- 

### Navigation

#### conversationNavigationBackgroundColor  
     | UIColor | 
     | Background color of navigation bar in conversation screen. | 
     |  | 
     | #0362AC | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | conversationNavigationTitleColor | 
     | UIColor | 
     | Navigation title color in conversation screen. | 
     |  | 
     | #FFFFFF | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | conversationStatusBarStyle | 
     | UIStatusBarStyle | 
     | Status bar style in conversation screen. | 
     |  | 
     | .LightContent | 

   - **Type:** 
   - **Default:**  

---  

### Secure Form

#### secureFormBackButtonColor  
     | UIColor | 
     | Back button color in secure form screen | 
     |  | 
     | UIColor.black | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormUIStatusBarStyleLightContent | 
     | Bool | 
     | Should display status bar of the secure form screen in Light Content Mode (UIStatusBarStyle) | 
     |  | 
     | true | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormNavigationBackgroundColor | 
     | UIColor | 
     | Background color of navigation bar in secure form screen | 
     |  | 
     | #0362AC | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormNavigationTitleColor | 
     | UIColor | 
     | Navigation title color in secure form screen | 
     |  | 
     | UIColor.white | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormBubbleBackgroundColor | 
     | UIColor | 
     | Secure form bubble background color | 
     |  | 
     | UIColor.white | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormBubbleBorderColor | 
     | UIColor | 
     | Secure form bubble border color | 
     |  | 
     | #d4d4d5 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormBubbleBorderWidth | 
     | Double | 
     | Secure form bubble border width in pixels | 
     |  | 
     | 2.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormBubbleTitleColor | 
     | UIColor | 
     | Secure form bubble form title color | 
     |  | 
     | UIColor.black | 

   - **Type:** 
   - **Default:**  

--- 

#### 
     | secureFormBubbleDescriptionColor | 
     | UIColor | 
     | Secure form bubble fill form text button color | 
     |  | 
     | #5b5c5e | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormBubbleFillFormButtonTextColor | 
     | UIColor | 
     | Secure form bubble fill form text button color | 
     |  | 
     | #004dc9 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormBubbleFillFormButtonBackgroundColor | 
     | UIColor | 
     | Secure form bubble fill form button background color | 
     |  | 
     | UIColor.clear | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormBubbleFormImageTintColor | 
     | UIColor | 
     | Secure form bubble form image tint color | 
     |  | 
     | #004dc9 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormCustomFontName | 
     | String | 
     | Secure form custom font name to be used while user is filling the secure form. If not set, the default font will be Helvetica. | 
     | <img src="img/secureFormCustomFontName.png" alt="secureFormCustomFontName"> | 
     | Helvetica | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormHideLogo | 
     | Bool | 
     | Secure form flag for hiding the secure form logo in the top of the form. | 
     | <img src="img/secureFormHideLogo.png" alt="secureFormHideLogo"> | 
     | false | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | secureFormBubbleLoadingIndicatorColor | 
     | UIColor | 
     | Secure form loading indicator color while loading form before opening. | 
     | <img src="img/secureFormBubbleLoadingIndicatorColor.png" alt="secureFormBubbleLoadingIndicatorColor"> | 
     | #46474a | 

   - **Type:** 
   - **Default:**  

--- 

### Structured Content

#### enableStrucutredContent  
   | Bool | 
   | Enable or Disable toggle for Structured Content feature in conversations | 
   |  | 
   | false | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | structuredContentBubbleBorderWidth | 
     | Double | 
     | Structured Content bubble border width in pixels. | 
     |  | 
     | 0.3 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | structuredContentBubbleBorderColor | 
     | UIColor | 
     | Structured Content bubble border color. | 
     |  | 
     | nil | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | structuredContentBubbleTopLeftCornerRadius | 
     | Float | 
     | Structured Content bubble top left corner radius in pixels. | 
     |  | 
     | 0.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | structuredContentBubbleTopRightCornerRadius | 
     | Float | 
     | Structured Content bubble top right corner radius in pixels. | 
     |  | 
     | 0.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | structuredContentBubbleBottomLeftCornerRadius | 
     | Float | 
     | Structured Content bubble bottom left corner radius in pixels. | 
     |  | 
     | 0.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | structuredContentBubbleBottomRightCornerRadius | 
     | Float | 
     | Structured Content bubble bottom right corner radius in pixels. | 
     |  | 
     | 0.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | structuredContentMapLatitudeDeltaDeltaSpan | 
     | Double | 
     | Structured Content Latitude Delta Span. Used to determine which area of the map to focus on. If you set this attribute, you must set structuredContentMapLongitudeDeltaSpan as well. This parameter is used to create an MKCoordinateSpan.
    For more info, <a href="https://developer.apple.com/documentation/mapkit/mkcoordinatespan">click here</a>. | 
     |  | 
     | 0.01 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | structuredContentMapLongitudeDeltaSpan | 
     | Double | 
     | Structured Content Longitude Delta Span. Used to determine which area of the map to focus on. If you set this attribute, you must set structuredContentMapLatitudeDeltaDeltaSpan as well. This parameter is used to create an MKCoordinateSpan.
    For more info, <a href="https://developer.apple.com/documentation/mapkit/mkcoordinatespan">click here</a>. | 
     |  | 
     | 0.01 | 

   - **Type:** 
   - **Default:**  

--- 

### Quick Reply

#### quickReplyButtonVerticalPadding  
   | CGFloat | 
   | Distance between the bottom and top edges of the button to the bottom and top edges of the text | 
   |  | 
   | 10.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | quickReplyButtonHorizontalPadding | 
     | CGFloat | 
     | Distance between the right and left edges of the button to the right and left edges of the text | 
     |  | 
     | 15.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | quickReplyVerticalPadding | 
     | CGFloat | 
     | Vertical padding between quick reply buttons | 
     |  | 
     | 10.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | quickReplyHorizontalPadding | 
     | CGFloat | 
     | Horizontal padding between quick reply buttons | 
     |  | 
     | 10.0 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | quickReplyButtonBorderWidth | 
     | CGFloat | 
     | Border size of Quick Reply buttons | 
     |  | 
     | 1.0 | 

   - **Type:** 
   - **Default:**  

--- 

### Connection Status Bar

#### connectionStatusConnectingBackgroundColor  
     | UIColor | 
     | Color code for the background of the connection status bar while connecting. | 
     | <img src="img/connectionStatusBarConnecting.png" alt="systemBubbleTextColor"> | 
     | #f5f5f5f2 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | connectionStatusConnectingTextColor | 
     | UIColor | 
     | Color code for the text of the connection status bar while connecting. | 
     | <img src="img/connectionStatusBarConnecting.png" alt="systemBubbleTextColor"> | 
     | #46474a | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | connectionStatusFailedToConnectBackgroundColor | 
     | UIColor | 
     | Color code for the background of the connection status bar when connection failed. | 
     | <img src="img/connectionStatusBarFailedToConnect.png" alt="systemBubbleTextColor"> | 
     | #000000cc | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | connectionStatusFailedToConnectTextColor | 
     | UIColor | 
     | Color code for the text of the connection status bar when connection failed. | 
     | <img src="img/connectionStatusBarFailedToConnect.png" alt="systemBubbleTextColor"> | 
     | UIColor.white | 

   - **Type:** 
   - **Default:**  

--- 

### Controller message

#### controllerBubbleTextColor  
     | UIColor | 
     | Color code for the text of the controller bubble. | 
     | <img src="img/controllerbubletextcolor.png" alt="controller bubble text color"> | 
     | #5b5c5e | 

   - **Type:** 
   - **Default:**  

--- 

### Audio support

#### recordingDurationLimit  
     | TimeInterval (Double) | 
     | Maximum time frame for recording audio message (in seconds). | 
     |  | 
     | 120 | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | enableAudioSharing | 
     | Bool | 
     | True - Enables Audio Sharing feature, False - Disables Audio Sharing | 
     |  | 
     | false | 

   - **Type:** 
   - **Default:**  

--- 

#### 

     | maxNumberOfSavedAudioFilesOnDisk | 
     | Int | 
     | This number represents how many audio files will be saved on the disk. Exceeding files are deleted when the app closes. | 
     |  | 
     | 20 | 

