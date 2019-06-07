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

<div style="float: left; width: 35%;padding-bottom: 15px;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #004DC9</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteuserbubblebackgroundcolor.png" alt="remoteuserbubblebackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### remoteUserBubbleBorderColor
Color code for the outline color.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #004DC9</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteuserbubblebordercolor.png" alt="remoteuserbubblebordercolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### remoteUserBubbleLinkColor
Color code for links in the text of the remote user's bubble.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> UIColor.white</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteuserbubblelinkcolor.png" alt="remoteuserbubblelinkcolor">
   </figure>
</div>
<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### remoteUserBubbleTextColor
Color code for the text of the remote user's bubble.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> UIColor.white</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteuserbubbletextcolor.png" alt="remoteuserbubbletextcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### remoteUserBubbleBorderWidth
Double number for the outline width. 

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> Double</li>
      <li><b>Default:</b> 2</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteuserbubbleborderwidth.png" alt="remoteuserbubbleborderwidth">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### remoteUserBubbleTimestampColor
Color code for the timestamp of the remote user's bubble. 

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #5B5C5E</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteuserbubbletimestampcolor.png" alt="remoteuserbubbletimestampcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### remoteUserTypingTintColor
Color of the remote user typing bubbles animation.  

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> UIColor.white</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteusertypingtintcolor.png" alt="remoteusertypingtintcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### remoteUserBubbleLongPressOverlayColor
Color of the remote user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.

<div style="float: left; width: 35%;height: 150px;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> UIColor.black</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteUserBubbleOverlay.png" alt="remoteUserBubbleOverlay">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### remoteUserBubbleLongPressOverlayAlpha
Alpha of the remote user's bubble overlay when user uses a long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.  

<div style="float: left; width: 35%;height: 150px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 0.3</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteUserBubbleOverlay.png" alt="remoteUserBubbleOverlay">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### remoteUserBubbleTopLeftCornerRadius  
Top left Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  


<div style="float: left; width: 35%;height: 125px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 8</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteTopLeft.png" alt="remoteTopLeft">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### remoteUserBubbleTopRightCornerRadius
Top right Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

<div style="float: left; width: 35%;height: 125px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 8</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteTopRight.png" alt="remoteTopRight">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### remoteUserBubbleBottomLeftCornerRadius
Bottom left Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

<div style="float: left; width: 35%;height: 125px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 8</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteBottomLeft.png" alt="remoteBottomLeft">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### remoteUserBubbleBottomRightCornerRadius
Bottom right Radius corner on the Remote bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

<div style="float: left; width: 35%;height: 125px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 8</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/remoteBottomRight.png" alt="remoteBottomRight">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### userBubbleBackgroundColor
Color code for the background of the visitor bubble.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #EDEDED</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userbubblebackgroundcolor.png" alt="userbubblebackgroundcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### userBubbleBorderColor
Color code for the outline color.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #EDEDED</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
  <img src="img/userbubblebordercolor.png" alt="userbubblebordercolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### userBubbleLinkColor
Color code for links in the text of the visitor bubble.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #0000ee</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userbubblelinkcolor.png" alt="userbubblelinkcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### userBubbleTextColor
Color code for the text of the visitor bubble.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> UIColor.black</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userbubbletextcolor.png" alt="userbubbletextcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### userBubbleBorderWidth
Double number for the outline width.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> Double</li>
      <li><b>Default:</b> 1</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userbubbleborderwidth.png" alt="userbubbleborderwidth">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### userBubbleTimestampColor
Color code for the timestamp of the visitor bubble.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #5B5C5E</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userbubbletimestampcolor.png" alt="userbubbletimestampcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### userBubbleSendStatusTextColor
Color code for the send status text of the visitor bubble.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #5B5C5E</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userbubblesendstatustextcolor.png" alt="userbubblesendstatustextcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### userBubbleErrorTextColor
Color code for the error view text of the visitor bubble. 

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #DE0A23</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userbubbleerrortextcolor.png" alt="userbubbleerrortextcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### userBubbleErrorBorderColor
Color code for the error view border of the visitor bubble.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> #DE0A23</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userbubbleerrorbordercolor.png" alt="userbubbleerrorbordercolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### userBubbleLongPressOverlayColor
Color of the user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.  


<div style="float: left; width: 35%;height: 150px;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> UIColor.black</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userBubbleOverlay.png" alt="userBubbleOverlay">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### userBubbleLongPressOverlayAlpha
Alpha of the user's bubble overlay when user use long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble, when the menu dismissed, overlay will disappear too. In order to show overlay enableBubblesOverlayOnLongPress should be true.  

<div style="float: left; width: 35%;height: 150px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 0.3</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userBubbleOverlay.png" alt="userBubbleOverlay">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### userBubbleTopLeftCornerRadius
Top left Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 8</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userTopLeft.png" alt="userTopLeft">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### userBubbleTopRightCornerRadius
Top right Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 8</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userTopRight.png" alt="userTopRight">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### userBubbleBottomLeftCornerRadius
Bottom left Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 8</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userBottomLeft.png" alt="userBottomLeft">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### userBubbleBottomRightCornerRadius
Bottom right Radius corner on the user's bubble. Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.  

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 8</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/userBottomRight.png" alt="userBottomRight">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubbleEmailLinksRegex
Regular expression for email hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled

   - **Type:** String?    
   - **Default:** nil

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### bubbleUrlLinksRegex
Regular expression for url hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled.

   - **Type:** String?  
   - **Default:** nil

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubblePhoneLinksRegex
Regular expression for phone hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled.

   - **Type:** String?  
   - **Default:** nil 

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubbleTopPadding
Define the bubble Top Padding.

<div style="float: left; width: 35%;height: 75px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 10</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/bubbleTopPadding.png" alt="bubbleTopPadding">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### bubbleBottomPadding
Define the bubble bottom Padding.

<div style="float: left; width: 35%;height: 75px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 10</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/bubbleBottomPadding.png" alt="bubbleBottomPadding">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubbleLeadingPadding
Define the bubble Leading Padding.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 10</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/bubbleLeadingPadding.png" alt="bubbleLeadingPadding">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubbleTrailingPadding
Define the bubble Trailing Padding.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 10</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/bubbleTrailingPadding.png" alt="bubbleTrailingPadding">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubbleTimestampBottomPadding
Define the bubble Trailing Padding.

<div style="float: left; width: 35%;height: 75px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 5</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/bubbleTimestampBottomPadding.png" alt="bubbleTimestampBottomPadding">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### bubbleTimestampTopPadding
Define the bubble Timestamp Top Padding.

<div style="float: left; width: 35%;height: 75px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> 5</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/bubbleTimestampTopPadding.png" alt="bubbleTimestampTopPadding">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### enableEnlargeEmojis
When true, user and remote user messages containing one or two emojis will be enlarged in chat. Messages with one emoji will be the largest, two emojis will be large, and 3 or more will be displayed as normal text.

<div style="float: left; width: 35%;height: 300px;">
   <ul>
      <li><b>Type:</b> Bool</li>
      <li><b>Default:</b> false</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/enableEnlargeEmojis.png" alt="enableEnlargeEmojis" style="width: auto; height: 300px;">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

<hr>   

### Link Preview

#### enableLinkPreview 
Enable or disable link preview feature. If disabled, user will not see site's link preview or link preview.  

   - **Type:** Bool
   - **Default:** true

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### linkPreviewBackgroundColor 
Color code for the background of the link preview area inside cell.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### linkPreviewTitleTextColor
Color code for the title text inside link preview area inside cell.

   - **Type:** UIColor
   - **Default:** UIColor.black  

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### linkPreviewDescriptionTextColor 
Color code for the description text inside link preview area inside cell.

   - **Type:** UIColor
   - **Default:** #5B5C5E  

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### linkPreviewSiteNameTextColor  
Color code for the description site name link preview area inside cell.

   - **Type:** UIColor
   - **Default:** #E2E3E3

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### linkPreviewBorderWidth 
Double number for the outline width of link preview area inside cell.

   - **Type:** Double
   - **Default:** 1.0  

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### linkPreviewStyle 
Refers to the style in which the link preview cell will be displayed.

   - **Type:** LPUrlPreviewStyle
   - **Default:** LPUrlPreviewStyle.slim  


<div style="float: left; width: 35%;height: 250px;">
   <figure>
   <figcaption>Slim</figcaption>
   <img src="img/linkpreviewstyleslim.png" alt="linkpreviewslim">
   </figure>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption>Large</figcaption>
   <img src="img/linkpreviewstylelarge.png" alt="linkpreviewlarge">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### linkPreviewSiteNameTextColor  
Color code for the description site name link preview area inside cell.

   - **Type:** UIColor
   - **Default:**  

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### urlRealTimePreviewBackgroundColor 
The background color of the url real time preview.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> UIColor.white</li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/realtimepreviewbackgroundcolor.png" alt="realtimepreviewbackgroundcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### urlRealTimePreviewBorderColor 
The border color of the url real time preview.

<div style="float: left; width: 35%;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> </li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/realtimepreviewbordercolor.png" alt="realtimepreviewbordercolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### urlRealTimePreviewBorderWidth
The border width of the url real time preview.
 
<div style="float: left; width: 35%;height: 50px;">
   <ul>
      <li><b>Type:</b> Float</li>
      <li><b>Default:</b> </li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/urlrealtimepreviewborderwidth.png" alt="urlRealTimePreviewBorderWidth">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### urlRealTimePreviewTitleTextColor  
The title text color of the url real time preview.

<div style="float: left; width: 35%;height: 50px;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> </li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/urlrealtimepreviewtitletextcolor.png" alt="urlRealTimePreviewTitleTextColor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### urlRealTimePreviewDescriptionTextColor  
The description text color of the url real time preview.

<div style="float: left; width: 35%;height: 50px;">
   <ul>
      <li><b>Type:</b> UIColor</li>
      <li><b>Default:</b> </li>
   </ul>
</div>

<div style="float: right; width: 65%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/urlrealtimepreviewdescriptiontextcolor.png" alt="urlrealtimepreviewdescriptiontextcolor">
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### useNonOGTagsForLinkPreview  
The urlPreview attribute also uses non-OG tags to parse urls instead of using only OG tags if useNonOGTagsForLinkPreview is true.

   - **Type:** Bool
   - **Default:**  true

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

<hr>

### Photo and file sharing

#### enablePhotoSharing 
True - Enables Photo Sharing feature, False - Disables Photo Sharing. 

   - **Type:** Bool
   - **Default:**  false




#### maxNumberOfSavedFilesOnDisk 
This number represents how many files will be saved on the disk. Exceeding files are deleted when the app closes. 

   - **Type:** Int
   - **Default:** 20 




#### photosharingMenuBackgroundColor  
Photo Sharing menu background color.

   - **Type:** UIColor
   - **Default:**  #0362AC

<img src="img/photosharingmenubackgroundcolor.png" alt="photosharingmenubackgroundcolor"> 




#### photosharingMenuButtonsBackgroundColor  
Photo Sharing menu buttons background color. 

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/photosharingmenubuttonsbackgroundcolor.png" alt="photosharingmenubuttonsbackgroundcolor">




#### photosharingMenuButtonsTintColor  
Photo Sharing menu buttons tint color.

   - **Type:** UIColor
   - **Default:** #0362AC 

<img src="img/photosharingmenubuttonstintcolor.png" alt="photosharingmenubuttonstintcolor"> 




#### photosharingMenuButtonsTextColor  
Photo Sharing menu buttons text color.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/photosharingmenubuttonstextcolor.png" alt="photosharingmenubuttonstextcolor">  




#### cameraButtonEnabledColor  
Photo Sharing Camera button color in enabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled.

   - **Type:** UIColor
   - **Default:** #0362AC 

<img src="img/cameraButtonColor.png" alt="cameraButtonColor">  




####  cameraButtonDisabledColor  
Photo Sharing Camera button color in disabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled. 

   - **Type:** UIColor
   - **Default:** #8B8A8F 

<img src="img/cameraButtonColor.png" alt="cameraButtonColor">




#### fileCellLoaderFillColor 
Radial loader fill color.

   - **Type:** UIColor
   - **Default:** UIColor(white: 0.0, alpha: 0.5) 

<img src="img/filecellloaderfillcolor.png" alt="fileCellLoaderFillColor">




#### fileCellLoaderRingProgressColor  
Radial loader progress color.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/filecellloaderringprogresscolor.png" alt="filecellloaderringprogresscolor">




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




#### sendButtonEnabledColor  
Color code for Send and Camera (of Photo Sharing) buttons in disabled mode. 

   - **Type:** UIColor
   - **Default:** #0362AC 




####  sendButtonImage  
Send button Image in the conversation screen. The custom image changes only if `isSendMessageButtonInTextMode` = **false**. 

{:.important}
You must follow the guidelines in the [Custom Icon documentation](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/custom-icons/).

   - **Type:** UIImage
   - **Default:** SDK bundle sendMessageIcon Icon 

<img src="img/DefaultSendButton.png" alt="DefaultSendButton">




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




#### checkmarkReadColor  
Color of checkmark indication signs of Read messages. 

   - **Type:** UIColor
   - **Default:** #004DC9 
 
<img src="img/checkmarkreadcolor.png" alt="checkmarkreadcolor">




#### checkmarkDistributedColor  
Color of checkmark indication signs of Distributed messages.  

   - **Type:** UIColor
   - **Default:** #5B5C5E 

<img src="img/checkmarkdistributedcolor.png" alt="checkmarkdistributedcolor"> 




####  checkmarkSentColor  
Color of checkmark indication signs of Sent messages. 

   - **Type:** UIColor
   - **Default:** #5B5C5E 




#### isReadReceiptTextMode  
Two options for read indication: Read Receipt with Text Mode Read. Receipt with Icon Mode. If the parameter set as true the mode will be Text. If the parameter set as false the mode will be Icon. 

   - **Type:** Bool
   - **Default:** true 

<img src="img/isreadreceipttextmode.png" alt="isReadReceiptTextMode"> 




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




#### csatYesNoButtonsCornerRadius  
Corner radius of the resolution Yes/No buttons.  

   - **Type:** Double
   - **Default:** 25 

<img src="img/csatYesNoResolutionButtonsCornerRadius.png" alt="csatYesNoButtonsCornerRadius"> 




####  csatSubmitButtonBackgroundColor  
Background color code of the Submit button.  

   - **Type:** UIColor
   - **Default:** #229A49 

<img src="img/csatsubmitbuttonbackgroundcolor.png" alt="csatsubmitbuttonbackgroundcolor"> 




#### csatSubmitButtonTextColor  
Text color code of the Submit button.  

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/csatsubmitbuttontextcolor.png" alt="csatSubmitButtonTextColor"> 




#### csatRatingButtonSelectedColor  
Background Color code of the rating buttons.  

   - **Type:** UIColor
   - **Default:** #229A49 

<img src="img/csatratingbuttonselectedcolor.png" alt="csatRatingButtonSelectedColor"> 




#### csatResolutionButtonSelectedColor  
Color code for the FCR survey buttons (YES/NO) when selected.  

   - **Type:** UIColor
   - **Default:** #229A49 

<img src="img/csatresolutionbuttonselectedcolor.png" alt="csatresolutionbuttonselectedcolor"> 




#### csatAllTitlesTextColor  
Title text color for all labels.  

   - **Type:** UIColor
   - **Default:** UIColor.black 

<img src="img/csatalltitlestextcolor.png" alt="csatAllTitlesTextColor"> 




#### csatResolutionHidden  
Hides the FCR survey (YES/NO) question.  

   - **Type:** Bool
   - **Default:** false 

<img src="img/csatresolutionhidden.png" alt="csatResolutionHidden"> 




#### csatAgentViewHidden  
Hides the view of agent avatar and name. 
 
   - **Type:** Bool
   - **Default:** true 

<img src="img/csatagentviewhidden.png" alt="csatagentviewhidden"> 




#### csatThankYouScreenHidden 
Hides the Thank You screen after tapping Submit button.   

   - **Type:** Bool
   - **Default:** false 

<img src="img/csatthankyouscreenhidden.png" alt="csatthankyouscreenhidden"> 




#### csatNavigationBackgroundColor 
Background color of the navigation of the survey.  

   - **Type:** UIColor
   - **Default:** #229A49 

<img src="img/csatnavigationbackgroundcolor.png" alt="csatnavigationbackgroundcolor"> 




#### csatNavigationTitleColor  
Text color of the title in the survey navigation. |

   - **Type:** UIColor
   - **Default:** UIColor.white 




#### csatSkipButtonColor  
Skip survey button color. 

   - **Type:** UIColor
   - **Default:** UIColor.black 




#### csatUIStatusBarStyleLightContent  
Allow the UI status bar to take the color of the survey navigation bar color. 

   - **Type:** Bool
   - **Default:** true 




#### csatShowSurveyView 
Hides the whole survey view and disables it. 

   - **Type:** Bool
   - **Default:** true 




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




#### deleteClosedConversationOlderThanMonths  
Upon SDK initialization, all closed conversations with an end date older than X months get deleted from the database. Setting 0 deletes all closed conversations. 

   - **Type:** UInt
   - **Default:** 13 




#### sendingMessageTimeoutInMinutes  
Maximum number of minutes to send the message. 

   - **Type:** UInt
   - **Default:** 60 




#### conversationSeparatorTextColor  
Conversation separator text and line color.

   - **Type:** UIColor
   - **Default:** UIColor.black 

<img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor"> 




#### enableConversationSeparatorTextMessage 
Toggle conversation separator text message when conversation resolved from agent or consumer.

   - **Type:** Bool
   - **Default:** true 

<img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor">




#### enableConversationSeparatorLine  
Toggle conversation separator line when conversation resolved from agent or consumer.

   - **Type:** Bool
   - **Default:** true 

<img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor">




#### conversationSeparatorFontSize 
Define the conversation closed separator font size.

   - **Type:** UIFontTextStyle
   - **Default:** UIFontTextStyle.caption1 

<img src="img/conversationClosedSeparatorFontSize.png" alt="conversationClosedSeparatorFontSize"> 




#### conversationSeparatorBottomPadding 
Define the conversation Closed label to separator line padding.

   - **Type:** Float
   - **Default:**  7

<img src="img/conversationClosedSeparatorBottomPadding.png" alt="conversationClosedSeparatorBottomPadding">




#### conversationSeparatorFontName 
Custom font name for conversation closed separator. Fonts that are not part of the iOS families, must be defined in App's Info.plist.

   - **Type:** Float
   - **Default:** 7 

<img src="img/conversationClosedSeparatorFontName.png" alt="conversationClosedSeparatorFontName"> 




#### conversationSeparatorViewBottomPadding  
Define the conversation separator view bottom padding.

   - **Type:** String
   - **Default:** nil 

<img src="img/conversationClosedSeparatorViewBottomPadding.png" alt="conversationClosedSeparatorViewBottomPadding">




#### conversationClosedSeparatorTopPadding 
Define the conversation Closed Separator Top padding.

   - **Type:** Float
   - **Default:** 5 

<img src="img/conversationClosedSeparatorTopPadding.png" alt="conversationClosedSeparatorTopPadding">




#### enableVibrationOnMessageFromRemoteUser 
Toggle vibration sound when a remote user sends a new message.

   - **Type:** Bool
   - **Default:** false 




#### announceAgentTyping  
If true, show agent is typing indicator in selected position and accessibility will announce when agent is typing a message to the consumer. If false, will not show any indication, and will not announce when agent is typing a message. 

   - **Type:** Bool
   - **Default:**  true 




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




#### scrollToBottomButtonMessagePreviewTextColor 
Scroll to bottom button text color of the last unread message preview.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/scrolltobottombuttonmessagepreviewtextcolor.png" alt="scrolltobottombuttonmessagepreviewtextcolor">




#### scrollToBottomButtonBadgeBackgroundColor  
Scroll to bottom button unread message badge background color.

   - **Type:** UIColor
   - **Default:** #E7242D 

<img src="img/scrolltobottombuttonbadgebackgroundcolor.png" alt="scrolltobottombuttonbadgebackgroundcolor"> 




#### scrollToBottomButtonBadgeTextColor 
Scroll to bottom button unread message badge text color.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/scrolltobottombuttonbadgetextcolor.png" alt="scrolltobottombuttonbadgetextcolor"> 




#### scrollToBottomButtonArrowColor 
Scroll to bottom button arrow tint color.

   - **Type:** UIColor
   - **Default:** UIColor.white 

<img src="img/scrolltobottombuttonarrowcolor.png" alt="scrolltobottombuttonarrowcolor">




#### unreadMessagesDividerBackgroundColor 
Unread Messages divider background color.

   - **Type:** UIColor
   - **Default:** #F5F5F5 

<img src="img/unreadmessagesdividerbackgroundcolor.png" alt="unreadmessagesdividerbackgroundcolor">




#### unreadMessagesDividerTextColor 
Unread Messages divider text color.

   - **Type:** UIColor
   - **Default:** #004DC9 

<img src="img/unreadmessagesdividertextcolor.png" alt="unreadmessagesdividertextcolor"> 




#### scrollToBottomButtonEnabled
Toggle the mode of the Scroll to bottom button. 

   - **Type:** Bool
   - **Default:** true 




#### scrollToBottomButtonMessagePreviewEnabled  
Toggle the mode of the Scroll to bottom unread message text preview. 


   - **Type:** Bool
   - **Default:** true 




#### unreadMessagesDividerEnabled 
Toggle the mode of the Unread Messages divider. If disabled, scroll to bottom button scrolls to bottom although we can have new messages and don't show the badge at all nor "new message preview." 

   - **Type:** Bool
   - **Default:** true 




#### unreadMessagesCornersRadius 
Define the corners radius of the unread messages bubble.  

   - **Type:** Float
   - **Default:** 8 for all the corners 

<img src="img/unreadBubbleRadius.png" alt="unreadBubbleRadius">  




#### scrollToBottomButtonCornerRadius  
Define the left top and left bottom corner radius of the scroll down indicator.  

Define the corner radius for the left top

   - **Type:** Float
   - **Default:**  20 for left top and the left bottom corners

<img src="img/scrollToBottomButtonCornerRadius.png" alt="scrollToBottomButtonCornerRadius"> 




#### scrollToBottomButtonBadgeCornerRadius  
Define the corners radius of the unread messages counter inside the scroll down indicator.  

   - **Type:** Float
   - **Default:**  12 for all the corners
  
<img src="img/scrollToBottomButtonBadgeCornerRadius.png" alt="scrollToBottomButtonBadgeCornerRadius"> 

--- 

### Localization

#### country  
Country code: When it is not nil, it will be combined with 'language' ("language_country", for example: en_US) and used instead of device default locale when formatting date and time. If no value is provided, the SDK will use the country according to the device's locale.  

   - **Type:** String?
   - **Default:** nil 




#### language  
Language used instead of default device language.

The LPLanguage enum contains all languages supported by the MessagingSDK, and affects the following areas:

1. Used when getting localized strings.
   
2. Combined with 'country' ("language_country", for example: en_US) and used instead of default device locale when formatting time and date. If no value is provided, the SDK uses the device's language as default. 

   - **Type:** LPLanguage
   - **Default:** DeviceLanguage 

--- 

### Brand

#### brandName  
The brand name will be shown as a title on toolbar when there is no active conversation.  

   - **Type:** String
   - **Default:** "" (Empty String) 


 

#### conversationBackgroundColor  
Color code for the entire view background. 

   - **Type:** UIColor
   - **Default:** UIColor.white 


 

#### customFontNameConversationFeed  
Custom font name for conversation feed, which affects all messages, timestamps and separators. If the fonts are not part of the iOS families, you must define them in App's Info.plist. 
 
   - **Type:** String?
   - **Default:** nil 

<img src="img/customFontNameConversationFeed.png" alt="customFontNameConversationFeed"> 




#### customFontNameNonConversationFeed  
Custom font name for all non conversation feed controls. Such as: Buttons, Alerts, Banners, Menu and External Windows. If the fonts are not part of the iOS families, you must define them in App's Info.plist. 

   - **Type:** String?
   - **Default:**  nil

<img src="img/customFontNameNonConversationFeed.png" alt="customFontNameNonConversationFeed"> |


 

#### customRefreshControllerImagesArray  
Array of images for creating the custom refresh controller that loops the images from the array.  You must have two or more images in the array for it to work properly.

   - **Type:** <ArrayUIImage>?
   - **Default:** nil 

<img src="img/customRefreshControllerImagesArray.png" alt="customRefreshControllerImagesArray"> 


 

#### customRefreshControllerAnimationSpeed  
Custom refresh controller speed animation define the full images loop time. Smaller values create high speed animation.

   - **Type:** Float<UIImage>
   - **Default:** 2 

 

#### conversationBackgroundPortraitImage  
When not nil, use this attribute as the conversation portrait background image. When an image is shown, it is recommended to set [`dateSeparatorBackgroundColor`](#dateseparatorbackgroundcolor) config to **clear**. 

   - **Type:** UIImage;
   - **Default:**  nil



#### conversationBackgroundLandscapeImage  
When not nil, use this attibute as the conversation landscape background image. When an image is shown, it is recommended to set [`dateSeparatorBackgroundColor`](#dateseparatorbackgroundcolor) config to **clear**. 

   - **Type:** UIImage;
   - **Default:**  nil



#### conversationBackgroundImageContentMode  
Defines the content mode of the conversation background image.  

   - **Type:** UIViewContentMode;
   - **Default:** scaleToFill 

--- 

### Date Separator

#### dateSeparatorTitleBackgroundColor  
Color code for date separator title background color. 

   - **Type:** UIColor
   - **Default:**  UIColor.white

<img src="img/dateseparatortitlebackgroundcolor.png" alt="dateseparatortitlebackground"> |

 

#### dateSeparatorTextColor  
Color code for date separator text color. 
 
   - **Type:** UIColor
   - **Default:** #46474A 

<img src="img/dateseparatortextcolor.png" alt="dateSeparatorTextColor"> 
 


#### dateSeparatorLineBackgroundColor 
Color code for date separator line background color. 

   - **Type:** UIColor
   - **Default:** UIColor.clear 

<img src="img/dateseparatorlinebackgroundcolor.png" alt="datesepartaorlinebackgroundcolor"> 



#### dateSeparatorBackgroundColor  
Color code for date separator background color. 
 
   - **Type:** UIColor
   - **Default:** #FFFFFF  

<img src="img/dateseparatorbackgroundcolor.png" alt="dateSeparatorBackgroundColor"> 

 

#### dateSeparatorFontSize  
Define the Date Separator font text style. 
 
   - **Type:** UIFontTextStyle
   - **Default:** UIFontTextStyle.footnote 

<img src="img/dateSeparatorFontSize.png" alt="dateSeparatorFontSize">

 

#### customFontNameDateSeparator  
Custom font name for Timestamp. Fonts that are not part of the iOS families, must be defined in App's Info.plist. 

   - **Type:** String
   - **Default:** nil 

<img src="img/customFontNameSeparatorTimestampFeed.png" alt="customFontNameSeparatorTimestampFeed"> 

 

#### dateSeparatorTopPadding  
Define the Date Separator Top padding. 
 
   - **Type:** Float
   - **Default:** 0 

<img src="img/dateSeparatorTopPadding.png" alt="dateSeparatorTopPadding"> 

 

#### dateSeparatorBottomPadding  
Define the Date Separator bottom padding.  

   - **Type:** Float
   - **Default:** 0 

<img src="img/dateSeparatorBottomPadding.png" alt="dateSeparatorBottomPadding"> 

--- 

### User input view

#### inputTextViewContainerBackgroundColor  
User Input TextView container background color.  

   - **Type:** UIColor
   - **Default:** #F5F5F5 

<img src="img/inputtextviewcontainerbackgroundcolor.png" alt="inputTextViewContainerBackgroundColor"> 

 

#### inputTextViewCornerRadius  
User Input TextView corner radius.  

   - **Type:** Double
   - **Default:** 20.0 

<img src="img/inputtextviewcornerradius.png" alt="inputtextviewcornerradius"> 

--- 

### Agent Assignment

#### retrieveAssignedAgentFromLastClosedConversation  
When using `getAssignedAgent` method, lets you get assigned agents from active conversations only, or from the last closed conversation in case there is no active conversation. If no assigned agent is available, this method returns nil. 

   - **Type:** Bool
   - **Default:** true 

--- 

### Duration of Local Notifications

#### notificationShowDurationInSeconds  
Display duration of the local notification in seconds.  When in VoiceOver mode it gets extended to 60 sec.

Examples: TimeToRespond notification, local notification, etc.

   - **Type:** Double
   - **Default:**  3 (60 when in VoiceOver mode)

--- 

### Time To Response and Off hours

#### ttrShouldShow  
When set to **true**, the TTR notifications show with off hours.  When the auto messages feature is enabled, TTR notifications do not display when the auto messages featuer is enabled, regardless of the value set for this attribute. 

   - **Type:** Bool
   - **Default:** true  



#### ttrShowShiftBanner  
Enable or disable shift toaster ('An agent will respond...’).

   - **Type:** Bool
   - **Default:** true 



#### ttrFirstTimeDelay  
Number of seconds before the first Time to Respond (TTR) notification appears. 

   - **Type:** Double
   - **Default:** 10 



#### ttrShouldShowTimestamp  
When set to **true**, the timestamp of the TTR notification displays. Otherwise, the "An agent will respond shortly" message displays.   

   - **Type:** Bool
   - **Default:** false 

<img src="img/ttrshouldshowtimestamp.png" alt="ttrShouldShowTimestamp"><br><img src="img/ttrshouldshowtimestamp1.png" alt="ttrShouldShowTimestamp"> 

 

#### ttrShowFrequencyInSeconds  
Controls the TTR frequency, for example, don’t show the TTR more than once in 8 seconds. 

   - **Type:** UInt
   - **Default:** 8 



#### showUrgentButtonInTTRNotification  
When set to **true**, the Urgent button shows in the TTR notification.

   - **Type:** Bool
   - **Default:** false 

<img src="img/showurgentbuttoninttrnotification.png" alt="showUrgentButtonInTTRNotification"><br><img src="img/showurgentbuttoninttrnotification1.png" alt="showurgentbuttoninttrnotification"> 



#### showOffHoursBanner  
Enable or disable the off-hours toaster. 

   - **Type:** Bool
   - **Default:** true 

<img src="img/showoffhoursbanner.png" alt="showoffhoursbanner"> 

 

#### ttrBannerBackgroundColor  
Background color for banner. 
 
   - **Type:** UIColor
   - **Default:** #52A742 

<img src="img/ttrbannerbackgroundcolor.png" alt="ttrBannerBackgroundColor"> 



#### ttrBannerTextColor  
Text color of the banner. 

   - **Type:** UIColor
   - **Default:** #52A742 

<img src="img/ttrbannertextcolor.png" alt="ttrbannertextcolor"> 



#### ttrBannerOpacityAlpha  
Opacity level of the banner background (values: 0.0 - 1.0). 
 
   - **Type:** Double
   - **Default:** 0.8 

<img src="img/ttrbanneropacityalpha.png" alt="ttrBannerOpacityAlpha"> 



#### offHoursTimeZoneName  
Off Hours time zone name string based on [NSTimeZone knownTimeZoneNames]. If sending empty string, the local timezone will be used (Server sends UTC time). 

   - **Type:** String
   - **Default:** "" (Empty String) 

--- 

### Date and Time

#### lpDateFormat  
Custom formatting for date string (day, year..), for example, 'd MMM'. If not defined, one of the default styles will be used (see timestamps formatting). 

   - **Type:** String?
   - **Default:** nil 



#### lpTimeFormat  
Custom formatting for time string (hours, lpDateTimeFormat minutes..), for example, 'hh:mm a'. If not defined, one of the default styles will be used (see timestamps formatting). 

   - **Type:** String?
   - **Default:** nil 



#### lpDateTimeFormat  
Custom formatting for date and time string, for example, 'EEEE MM/dd/YY hh:mm a'. If not defined, one of the default styles will be used (see timestamps formatting). 
     

   - **Type:** String?
   - **Default:** nil 

--- 

### User Avatar

#### remoteUserAvatarBackgroundColor  
Background color of the remote user’s avatar. 

   - **Type:** UIColor
   - **Default:** #004DC9 



#### remoteUserAvatarLeading  
Define the remote avatar Leading padding (left edge to avatar). 

   - **Type:** Float
   - **Default:** 8 

<img src="img/remoteUserAvatarLeadingPadding.png" alt="remoteUserAvatarLeadingPadding"> 



#### remoteUserAvatarTrailingPadding  
Define the remote avatar Trailing padding (Avatar to bubble). 
 
   - **Type:** Float
   - **Default:** 8 

<img src="img/remoteUserAvatarTrailingPadding.png" alt="remoteUserAvatarTrailingPadding"> 

 

#### remoteUserAvatarIconColor  
Icon color of default remoteUser avatar.  

   - **Type:** UIColor
   - **Default:**  #FFFFFF



#### remoteUserDefaultAvatarImage  
Default Avatar image of the remote user. When assigned, image disables the `remoteUserAvatarBackgroundColor` and `remoteUserAvatarIconColor` configurations.  If remote user has an avatar image in his profile, this attribute gets ignored. 

   - **Type:** UIImage?
   - **Default:** nil 

<img src="img/remoteUserDefaultAvatarImage.png" alt="remoteUserDefaultAvatarImage"> 

 

#### brandAvatarImage  
Set avatar image for the brand, and is an optional UIImage that if set to **nil** a default avatar displays. Image ratio must be 1:1 (square) and at least 50x50 pixels. 

   - **Type:** UIImage?
   - **Default:** nil 



#### csatAgentAvatarBackgroundColor 
Background color of agent's default avatar in CSAT. 
 
   - **Type:** UIColor
   - **Default:** #004DC9 

<img src="img/csatagentavatarbackgroundcolor.png" alt="csatAgentAvatarBackgroundColor"> 



#### csatAgentAvatarIconColor  
Icon color of agent's default avatar in CSAT.

   - **Type:** UIColor
   - **Default:** #FFFFFF 

<img src="img/csatagentavatariconcolor.png" alt="csatAgentAvatarIconColor"> 

--- 

### Data Masking

#### enableClientOnlyMasking  
When set to **true**, you can control which part of the text to mask. All masked data appear as asterisks and gets saved to the local DB masked and sent to the server unmasked.

   - **Type:** Bool
   - **Default:** false 

 

#### enableRealTimeMasking  
When set to **true**, you can control which part of the text to mask. All masked data appear as asterisks and gets saved to the local DB masked and sent to the server unmasked.

   - **Type:** Bool
   - **Default:** false 

 

#### clientOnlyMaskingRegex  
A regular expression string that lets you can control which part of the text to mask. All masked data appear as asterisks and gets saved to the local DB masked and sent to the server unmasked.

The regular expression patterns and behavior are based on Perl's regular expressions. See Apple Reference. 

   - **Type:** String
   - **Default:** "" (Empty String) - no regex



#### realTimeMaskingRegex  
A regular expression string that lets you can control which part of the text to mask. All masked data appear as asterisks and gets saved to the local DB masked and sent to the server unmasked.

The regular expression patterns and behavior are based on Perl's regular expressions. See Apple Reference.  

   - **Type:** String
   - **Default:** "" (Empty String) - no regex

--- 

### Navigation

#### conversationNavigationBackgroundColor  
Background color of navigation bar in conversation screen. 

   - **Type:** UIColor
   - **Default:** #0362AC 



#### conversationNavigationTitleColor  
Navigation title color in conversation screen. 

   - **Type:** UIColor
   - **Default:** #FFFFFF  



#### conversationStatusBarStyle  
Status bar style in conversation screen.  


   - **Type:** UIStatusBarStyle
   - **Default:** .LightContent 

---  

### Secure Form

#### secureFormBackButtonColor  
Back button color in secure form screen. 

   - **Type:** UIColor
   - **Default:** UIColor.black 

 

#### secureFormUIStatusBarStyleLightContent  
Should display status bar of the secure form screen in Light Content Mode (UIStatusBarStyle).

   - **Type:** Bool
   - **Default:** true 



#### secureFormNavigationBackgroundColor  
Background color of navigation bar in secure form screen. 

   - **Type:** UIColor
   - **Default:** #0362AC 



#### secureFormNavigationTitleColor  
Navigation title color in secure form screen.

   - **Type:** UIColor
   - **Default:** UIColor.white 



#### secureFormBubbleBackgroundColor  
Secure form bubble background color.

   - **Type:** UIColor
   - **Default:** UIColor.white 



#### secureFormBubbleBorderColor  
Secure form bubble border color.

   - **Type:** UIColor
   - **Default:** #d4d4d5 



#### secureFormBubbleBorderWidth  
Secure form bubble border width in pixels.

   - **Type:** Double
   - **Default:**  2.0



#### secureFormBubbleTitleColor  
Secure form bubble form title color.

   - **Type:** UIColor
   - **Default:** UIColor.black 



#### secureFormBubbleDescriptionColor 
Secure form bubble fill form text button color.

   - **Type:** UIColor
   - **Default:** #5b5c5e  



#### secureFormBubbleFillFormButtonTextColor  
Secure form bubble fill form text button color.

   - **Type:** UIColor
   - **Default:** #004dc9 



#### secureFormBubbleFillFormButtonBackgroundColor  
Secure form bubble fill form button background color.

   - **Type:** UIColor
   - **Default:**  UIColor.clear



#### secureFormBubbleFormImageTintColor 
Secure form bubble form image tint color.

   - **Type:** UIColor
   - **Default:** #004dc9 



#### secureFormCustomFontName 
 Secure form custom font name to be used while user is filling the secure form. If not set, the default font will be Helvetica. 
  
   - **Type:** String
   - **Default:** Helvetica 

<img src="img/secureFormCustomFontName.png" alt="secureFormCustomFontName"> 



#### secureFormHideLogo  
Secure form flag for hiding the secure form logo in the top of the form.  

   - **Type:** Bool
   - **Default:** false 

<img src="img/secureFormHideLogo.png" alt="secureFormHideLogo"> |



#### secureFormBubbleLoadingIndicatorColor  
Secure form loading indicator color while loading form before opening. 
 
   - **Type:** UIColor
   - **Default:** #46474a 

<img src="img/secureFormBubbleLoadingIndicatorColor.png" alt="secureFormBubbleLoadingIndicatorColor"> 

--- 

### Structured Content

#### enableStrucutredContent  
Enable or Disable toggle for Structured Content feature in conversations.

   - **Type:** Bool
   - **Default:** false 



#### structuredContentBubbleBorderWidth 
Structured Content bubble border width in pixels.

   - **Type:** Double
   - **Default:** 0.3 



#### structuredContentBubbleBorderColor  
Structured Content bubble border color.

   - **Type:** UIColor
   - **Default:** nil 



#### structuredContentBubbleTopLeftCornerRadius 
Structured Content bubble top left corner radius in pixels. 

   - **Type:** Float
   - **Default:** 0.0 



#### structuredContentBubbleTopRightCornerRadius 
Structured Content bubble top right corner radius in pixels.

   - **Type:** Float
   - **Default:** 0.0 

 

#### structuredContentBubbleBottomLeftCornerRadius  
Structured Content bubble bottom left corner radius in pixels.

   - **Type:** Float
   - **Default:** 0.0  



#### structuredContentBubbleBottomRightCornerRadius 
Structured Content bubble bottom right corner radius in pixels.

   - **Type:** Float
   - **Default:** 0.0 



#### structuredContentMapLatitudeDeltaDeltaSpan  
Structured Content Latitude Delta Span. Used to determine which area of the map to focus on. If you set this attribute, you must also set `structuredContentMapLongitudeDeltaSpan`. This parameter is used to create an [MKCoordinateSpan](https://developer.apple.com/documentation/mapkit/mkcoordinatespan). 

   - **Type:** Double
   - **Default:** 0.01 

 

#### structuredContentMapLongitudeDeltaSpan  
Structured Content Longitude Delta Span. Used to determine which area of the map to focus on. If you set this attribute, you must also set `structuredContentMapLatitudeDeltaDeltaSpan`. This parameter is used to create an [MKCoordinateSpan](https://developer.apple.com/documentation/mapkit/mkcoordinatespan). 

   - **Type:** Double
   - **Default:** 0.01 

--- 

### Quick Reply

#### quickReplyButtonVerticalPadding  
Distance between the bottom and top edges of the button to the bottom and top edges of the text.

   - **Type:** CGFloat
   - **Default:** 10.0 



#### quickReplyButtonHorizontalPadding  
Distance between the right and left edges of the button to the right and left edges of the text. 

   - **Type:** CGFloat
   - **Default:** 15.0 



#### quickReplyVerticalPadding  
Vertical padding between quick reply buttons. 

   - **Type:** CGFloat
   - **Default:** 10.0 



#### quickReplyHorizontalPadding  
Horizontal padding between quick reply buttons. 

   - **Type:** CGFloat
   - **Default:** 10.0 



#### quickReplyButtonBorderWidth  
Border size of Quick Reply buttons. 

   - **Type:** CGFloat
   - **Default:** 1.0 

--- 

### Connection Status Bar

#### connectionStatusConnectingBackgroundColor  
Color code for the background of the connection status bar while connecting.
 
   - **Type:** UIColor
   - **Default:** #f5f5f5f2 

<img src="img/connectionStatusBarConnecting.png" alt="systemBubbleTextColor"> 



#### connectionStatusConnectingTextColor 
Color code for the text of the connection status bar while connecting. 
 
   - **Type:** UIColor
   - **Default:**  #46474a

<img src="img/connectionStatusBarConnecting.png" alt="systemBubbleTextColor"> 

 

#### connectionStatusFailedToConnectBackgroundColor  
Color code for the background of the connection status bar when connection failed.

   - **Type:** UIColor
   - **Default:** #000000cc 

<img src="img/connectionStatusBarFailedToConnect.png" alt="systemBubbleTextColor"> 



#### connectionStatusFailedToConnectTextColor  
Color code for the text of the connection status bar when connection failed. 
 
   - **Type:** UIColor 
   - **Default:** UIColor.white 

<img src="img/connectionStatusBarFailedToConnect.png" alt="systemBubbleTextColor"> 

--- 

### Controller message

#### controllerBubbleTextColor  
Color code for the text of the controller bubble. 
 
   - **Type:** UIColor
   - **Default:** #5b5c5e 

<img src="img/controllerbubletextcolor.png" alt="controller bubble text color"> 

--- 

### Audio support

#### recordingDurationLimit  
Maximum time frame for recording audio message (in seconds). 

   - **Type:** TimeInterval (Double)
   - **Default:** 120 



#### enableAudioSharing 
When set to **true**, the audio sharing features gets enabled. 


   - **Type:** Bool
   - **Default:** false (disabled)



#### maxNumberOfSavedAudioFilesOnDisk  
Number representing how many audio files saved on the disk. Exceeding the max value of files get deleted when the app closes. 


   - **Type:** Int
   - **Default:** 20

