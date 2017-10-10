---
title: Attributes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Customization and Branding

order: 224
permalink: consumer-experience-ios-sdk-attributes.html

indicator: messaging
---

The goal of the following document is to enumerate the different fields controlling design attributes in the SDK. If a clearer view of which attribute corresponds with a design element is needed, please utilize the [Attributes Design Sheet](consumer-experience-ios-sdk-attributes-design-sheet.html).


### Users Bubble

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td align="left">remoteUserBubbleBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the background of the remote user bubble.</td>
    <td align="left"><img src="img/remoteuserbubblebackgroundcolor.png" alt="remoteuserbubblebackgroundcolor"></td>
    <td align="left">#004DC9</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleBorderColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the outline color.</td>
    <td align="left"><img src="img/remoteuserbubblebordercolor.png" alt="remoteuserbubblebordercolor"></td>
    <td align="left">#004DC9</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleLinkColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for links in the text of the remote user bubble.</td>
    <td align="left"><img src="img/remoteuserbubblelinkcolor.png" alt="remoteuserbubblelinkcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the text of the remote user bubble.</td>
    <td align="left"><img src="img/remoteuserbubbletextcolor.png" alt="remoteuserbubbletextcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleBorderWidth</td>
    <td align="left">Double</td>
    <td align="left">Double number for the outline width.</td>
    <td align="left"><img src="img/remoteuserbubbleborderwidth.png" alt="remoteuserbubbleborderwidth"></td>
    <td align="left">2</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleTimestampColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the timestamp of the remote user bubble.</td>
    <td align="left"><img src="img/remoteuserbubbletimestampcolor.png" alt="remoteuserbubbletimestampcolor"></td>
    <td align="left">#5B5C5E</td>
  </tr>
  <tr>
    <td align="left">remoteUserTypingTintColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color of the remote user typing bubbles animation.</td>
    <td align="left"><img src="img/remoteusertypingtintcolor.png" alt="remoteusertypingtintcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleLongPressOverlayColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color of the remote user's bubble overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.</td>
    <td align="left"><img src="img/remoteUserBubbleOverlay.png" alt="remoteUserBubbleOverlay"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleLongPressOverlayAlpha</td>
    <td align="left">Float</td>
    <td align="left">Alpha of the remote user's bubble overlay when user uses a long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.</td>
    <td align="left"><img src="img/remoteUserBubbleOverlay.png" alt="remoteUserBubbleOverlay"></td>
    <td align="left">0.3</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleTopLeftCornerRadius</td>
    <td align="left">Float</td>
    <td align="left"> Top left Radius corner on the Remote bubble.
     Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.</td>
    <td align="left"><img src="img/remoteTopLeft.png" alt="remoteTopLeft"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleTopRightCornerRadius</td>
    <td align="left">Float</td>
    <td align="left"> Top right Radius corner on the Remote bubble.
     Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.</td>
    <td align="left"><img src="img/remoteTopRight.png" alt="remoteTopRight"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleBottomLeftCornerRadius</td>
    <td align="left">Float</td>
    <td align="left"> Bottom left Radius corner on the Remote bubble.
    Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.</td>
    <td align="left"><img src="img/remoteBottomLeft.png" alt="remoteBottomLeft"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">remoteUserBubbleBottomRightCornerRadius</td>
    <td align="left">Float</td>
    <td align="left"> Bottom right Radius corner on the Remote bubble.
   Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.</td>
    <td align="left"><img src="img/remoteBottomRight.png" alt="remoteBottomRight"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">userBubbleBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the background of the visitor bubble.</td>
    <td align="left"><img src="img/userbubblebackgroundcolor.png" alt="userbubblebackgroundcolor"></td>
    <td align="left">#EDEDED</td>
  </tr>
  <tr>
    <td align="left">userBubbleBorderColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the outline color.</td>
    <td align="left"><img src="img/userbubblebordercolor.png" alt="userbubblebordercolor"></td>
    <td align="left">#EDEDED</td>
  </tr>
  <tr>
    <td align="left">userBubbleLinkColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for links in the text of the visitor bubble.</td>
    <td align="left"><img src="img/userbubblelinkcolor.png" alt="userbubblelinkcolor"></td>
    <td align="left">#0000ee</td>
  </tr>
  <tr>
    <td align="left">userBubbleTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the text of the visitor bubble.</td>
    <td align="left"><img src="img/userbubbletextcolor.png" alt="userbubbletextcolor"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">userBubbleBorderWidth</td>
    <td align="left">Double</td>
    <td align="left">Double number for the outline width.</td>
    <td align="left"><img src="img/userbubbleborderwidth.png" alt="userbubbleborderwidth"></td>
    <td align="left">1</td>
  </tr>
  <tr>
    <td align="left">userBubbleTimestampColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the timestamp of the visitor bubble.</td>
    <td align="left"><img src="img/userbubbletimestampcolor.png" alt="userbubbletimestampcolor"></td>
    <td align="left">#5B5C5E</td>
  </tr>
  <tr>
    <td align="left">userBubbleSendStatusTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the send status text of the visitor bubble.</td>
    <td align="left"><img src="img/userbubblesendstatustextcolor.png" alt="userbubblesendstatustextcolor"></td>
    <td align="left">#5B5C5E</td>
  </tr>
  <tr>
    <td align="left">userBubbleErrorTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the error view text of the visitor bubble.</td>
    <td align="left"><img src="img/userbubbleerrortextcolor.png" alt="userbubbleerrortextcolor"></td>
    <td align="left">#DE0A23</td>
  </tr>
  <tr>
    <td align="left">userBubbleErrorBorderColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the error view border of the visitor bubble.</td>
    <td align="left"><img src="img/userbubbleerrorbordercolor.png" alt="userbubbleerrorbordercolor"></td>
    <td align="left">#DE0A23</td>
  </tr>
  <tr>
    <td align="left">userBubbleLongPressOverlayColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color of the user bubble's overlay when user uses a long press gesture on the bubble. Overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, overlay will disappear too. In order to show overlay, enableBubblesOverlayOnLongPress should be true.</td>
    <td align="left"><img src="img/userBubbleOverlay.png" alt="userBubbleOverlay"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">userBubbleLongPressOverlayAlpha</td>
    <td align="left">Float</td>
    <td align="left">Alpha of the user's bubble overlay when user use long press gesture on the bubble. Value can be 0.0 - 1.0. Overlay will appear as long as the menu controller appears on the bubble, when the menu dismissed, overlay will disappear too. In order to show overlay enableBubblesOverlayOnLongPress should be true.</td>
    <td align="left"><img src="img/userBubbleOverlay.png" alt="userBubbleOverlay"></td>
    <td align="left">0.3</td>
  </tr>
  <tr>
    <td align="left">userBubbleTopLeftCornerRadius</td>
    <td align="left">Float</td>
    <td align="left"> Top left Radius corner on the User bubble.
    Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.</td>
    <td align="left"><img src="img/userTopLeft.png" alt="userTopLeft"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">userBubbleTopRightCornerRadius</td>
    <td align="left">Float</td>
    <td align="left"> Top right Radius corner on the User bubble.
    Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.</td>
    <td align="left"><img src="img/userTopRight.png" alt="userTopRight"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">userBubbleBottomLeftCornerRadius</td>
    <td align="left">Float</td>
    <td align="left"> Bottom left Radius corner on the User bubble.
    Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.</td>
    <td align="left"><img src="img/userBottomLeft.png" alt="userBottomLeft"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">userBubbleBottomRightCornerRadius</td>
    <td align="left">Float</td>
    <td align="left"> Bottom right Radius corner on the User bubble.
    Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it's recommended to use a corner radius which is at max equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause text to cut visually.</td>
    <td align="left"><img src="img/userBottomRight.png" alt="userBottomRight"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">bubbleEmailLinksRegex</td>
    <td align="left">String?</td>
    <td align="left">Regular expression for email hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">bubbleUrlLinksRegex</td>
    <td align="left">String?</td>
    <td align="left">Regular expression for url hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">bubblePhoneLinksRegex</td>
    <td align="left">String?</td>
    <td align="left">Regular expression for phone hyperlinks in users messages (consumer and agent). This attribute is optional - If not assigned, the default link detection will be enabled</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">bubbleTopPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the bubble Top Padding</td>
    <td align="left"><img src="img/bubbleTopPadding.png" alt="bubbleTopPadding"></td>
    <td align="left">10</td>
  </tr>
  <tr>
    <td align="left">bubbleBottomPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the bubble bottom Padding</td>
    <td align="left"><img src="img/bubbleBottomPadding.png" alt="bubbleBottomPadding"></td>
    <td align="left">10</td>
  </tr>
  <tr>
    <td align="left">bubbleLeadingPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the bubble Leading Padding</td>
    <td align="left"><img src="img/bubbleLeadingPadding.png" alt="bubbleLeadingPadding"></td>
    <td align="left">10</td>
  </tr>
  <tr>
    <td align="left">bubbleTrailingPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the bubble Trailing Padding</td>
    <td align="left"><img src="img/bubbleTrailingPadding.png" alt="bubbleTrailingPadding"></td>
    <td align="left">10</td>
  </tr>
  <tr>
    <td align="left">bubbleTimestampBottomPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the bubble Trailing Padding</td>
    <td align="left"><img src="img/bubbleTimestampBottomPadding.png" alt="bubbleTimestampBottomPadding"></td>
    <td align="left">5</td>
  </tr>
  <tr>
    <td align="left">bubbleTimestampTopPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the bubble Timestamp Top Padding</td>
    <td align="left"><img src="img/bubbleTimestampTopPadding.png" alt="bubbleTimestampTopPadding"></td>
    <td align="left">5</td>
  </tr>
</tbody>
</table>

### Link Preview

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">enableLinkPreview</td>
    <td align="left">Bool</td>
    <td align="left">Enable or disable link preview feature. If disabled, user will not see site's link preview or link preview.</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">linkPreviewBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the background of the link preview area inside cell.</td>
    <td align="left"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">linkPreviewTitleTextColor
</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the title text inside link preview area inside cell.</td>
    <td align="left"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">linkPreviewDescriptionTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the description text inside link preview area inside cell.</td>
    <td align="left"></td>
    <td align="left">#5B5C5E</td>
  </tr>
  <tr>
    <td align="left">linkPreviewSiteNameTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the description site name link preview area inside cell.</td>
    <td align="left"></td>
    <td align="left">#E2E3E3
</td>
  </tr>
  <tr>
    <td align="left">linkPreviewBorderWidth</td>
    <td align="left">Double</td>
    <td align="left">Double number for the outline width of link preview area inside cell.</td>
    <td align="left"></td>
    <td align="left">1.0</td>
  </tr>
  <tr>
    <td align="left">linkPreviewStyle</td>
    <td align="left">LPUrlPreviewStyle</td>
    <td align="left">Refers to the style in which the link preview cell will be displayed</td>
    <td align="left">Slim: <img src="img/linkpreviewstyleslim.png" alt="linkpreviewslim"> <br> Large: <img src="img/linkpreviewstylelarge.png" alt="linkpreviewlarge"></td>
    <td align="left">LPUrlPreviewStyle.slim</td>
  </tr>
  <tr>
    <td align="left">linkPreviewSiteNameTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the description site name link preview area inside cell.</td>
    <td align="left"></td>
    <td align="left"></td>
  </tr>
  <tr>
    <td align="left">urlRealTimePreviewBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">The background color of the url real time preview</td>
    <td align="left"><img src="img/realtimepreviewbackgroundcolor.png" alt="realtimepreviewbackgroundcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">urlRealTimePreviewBorderColor</td>
    <td align="left">UIColor</td>
    <td align="left">The border color of the url real time preview</td>
    <td align="left"><img src="img/realtimepreviewbordercolor.png" alt="realtimepreviewbordercolor"></td>
    <td align="left"></td>
  </tr>
  <tr>
    <td align="left">urlRealTimePreviewBorderWidth</td>
    <td align="left">Float</td>
    <td align="left">The border width of the url real time preview </td>
    <td align="left"><img src="img/urlrealtimepreviewborderwidth.png" alt="urlRealTimePreviewBorderWidth"></td>
    <td align="left"></td>
  </tr>
  <tr>
    <td align="left">urlRealTimePreviewTitleTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">The title text color of the url real time preview</td>
    <td align="left"><img src="img/urlrealtimepreviewtitletextcolor.png" alt="urlRealTimePreviewTitleTextColor"></td>
    <td align="left"></td>
  </tr>
  <tr>
    <td align="left">urlRealTimePreviewDescriptionTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">The description text color of the url real time preview</td>
    <td align="left"><img src="img/urlrealtimepreviewdescriptiontextcolor.png" alt="urlrealtimepreviewdescriptiontextcolor"></td>
    <td align="left"></td>
  </tr>
  <tr>
    <td align="left">useNonOGTagsForLinkPreview</td>
    <td align="left">Bool</td>
    <td align="left">urlPreview will also use non og tags to parse urls instead of using only og tags if useNonOGTagsForLinkPreview is true</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
</tbody>
</table>

### Photo Sharing

<table>
<thead>
   <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">enablePhotoSharing</td>
    <td align="left">Bool</td>
    <td align="left">True - Enables Photo Sharing feature, False - Disables Photo Sharing</td>
    <td align="left"></td>
    <td align="left">false</td>
  </tr>
  <tr>
    <td align="left">maxNumberOfSavedFilesOnDisk</td>
    <td align="left">Int</td>
    <td align="left">This number represents how many files will be saved on the disk. Exceeding files are deleted when the app closes.</td>
    <td align="left"></td>
    <td align="left">20</td>
  </tr>
  <tr>
    <td align="left">photosharingMenuBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Photo Sharing menu background color</td>
    <td align="left"><img src="img/photosharingmenubackgroundcolor.png" alt="photosharingmenubackgroundcolor"></td>
    <td align="left">#0362AC</td>
  </tr>
  <tr>
    <td align="left">photosharingMenuButtonsBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Photo Sharing menu buttons background color</td>
    <td align="left"><img src="img/photosharingmenubuttonsbackgroundcolor.png" alt="photosharingmenubuttonsbackgroundcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">photosharingMenuButtonsTintColor</td>
    <td align="left">UIColor</td>
    <td align="left">Photo Sharing menu buttons tint color</td>
    <td align="left"><img src="img/photosharingmenubuttonstintcolor.png" alt="photosharingmenubuttonstintcolor"></td>
    <td align="left">#0362AC</td>
  </tr>
  <tr>
    <td align="left">photosharingMenuButtonsTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Photo Sharing menu buttons text color</td>
    <td align="left"><img src="img/photosharingmenubuttonstextcolor.png" alt="photosharingmenubuttonstextcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>

    <td align="left">cameraButtonEnabledColor</td>
    <td align="left">UIColor</td>
    <td align="left">Photo Sharing Camera button color in enabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled</td>
    <td align="left"><img src="img/cameraButtonColor.png" alt="cameraButtonColor"></td>
    <td align="left">#0362AC</td>
  </tr>
  <tr>
    <td align="left">cameraButtonDisabledColor</td>
    <td align="left">UIColor</td>
    <td align="left">Photo Sharing Camera button color in disabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled</td>
    <td align="left"><img src="img/cameraButtonColor.png" alt="cameraButtonColor"></td>
    <td align="left">#8B8A8F</td>
  </tr>
  <tr>
    <td align="left">fileCellLoaderFillColor</td>
    <td align="left">UIColor</td>
    <td align="left">Radial loader fill color</td>
    <td align="left"><img src="img/filecellloaderfillcolor.png" alt="fileCellLoaderFillColor"></td>
    <td align="left">UIColor(white: 0.0, alpha: 0.5)</td>
  </tr>
  <tr>
    <td align="left">fileCellLoaderRingProgressColor</td>
    <td align="left">UIColor</td>
    <td align="left">Radial loader progress color</td>
    <td align="left"><img src="img/filecellloaderringprogresscolor.png" alt="filecellloaderringprogresscolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">fileCellLoaderRingBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Radial loader progress background color</td>
    <td align="left"><img src="img/filecellloaderringbackgroundcolor.png" alt="filecellloaderringprogresscolor"></td>
    <td align="left">UIColor.lightGray</td>
  </tr>
  <tr>
  <td align="left" colspan="5">Note: Camera button, in the input text view, disabled/enabled color will change according to  sendButtonDisabledTextColor and sendButtonEnabledTextColor configurations.</td>
  </tr>
</tbody>
</table>

### Send Button

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">sendButtonDisabledColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for Send and Camera (of Photo Sharing) buttons in disabled mode</td>
    <td align="left"></td>
    <td align="left">#AAAAAA</td>
  </tr>
  <tr>
    <td align="left">sendButtonEnabledColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for Send and Camera (of Photo Sharing) buttons in disabled mode.</td>
    <td align="left"></td>
    <td align="left">#0362AC</td>
  </tr>
  <tr>
    <td align="left">sendButtonImage</td>
    <td align="left">UIImage</td>
    <td align="left">Send button Image in the conversation screen. The custom image will be changed only if isSendMessageButtonInTextMode = false. the send button image need to follow the Custom Icon documention (https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/custom-icons/)</td>
    <td align="left"><img src="img/DefaultSendButton.png" alt="DefaultSendButton"></td>
    <td align="left">SDK bundle sendMessageIcon Icon</td>
  </tr>
  <tr>
    <td align="left">isSendMessageButtonInTextMode</td>
    <td align="left">Bool</td>
    <td align="left">Two options for send message button mode:Send message button in "text mode" - will be taken from localized resources Send message button in "icon mode"</td>
    <td align="left"></td>
    <td align="left">Default mode is text</td>
  </tr>
</tbody>
</table>

### System Messages

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="left">systemBubbleTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the text of the system messages.</td>
    <td align="left"><img src="img/systembubbletextcolor.png" alt="systemBubbleTextColor"></td>
    <td align="left">UIColor.black</td>
  </tr>
</tbody>
</table>

### Window Mode

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">customButtonImage</td>
    <td align="left">UIImage</td>
    <td align="left">In window mode only:
Custom button icon image. This will be displayed on the navigation bar.
When the button is pressed, a dedicated callback will be invoked. (See LPMessagingSDKCustomButtonTapped for more information).</td>
    <td align="left"><img src="img/custombuttonimage.png" alt="custombuttonimage"></td>
    <td align="left">nil</td>
  </tr>
  </tbody>
</table>


### Delivery Notifications

<table>
<thead>
   <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">checkmarkVisibility</td>
    <td align="left">CheckmarksState(Integer Enum)</td>
    <td align="left">Checkmark visibility of the following options (type CheckmarksState): SentOnly - Show checkmarks for only Sent messages. SentAndAccepted - Show checkmarks for only Sent and Accepted messages. All - Show checkmarks for Sent, Accepted and Read messages.</td>
    <td align="left"></td>
    <td align="left">CheckmarksState.All</td>
  </tr>
  <tr>
    <td align="left">checkmarkReadColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color of checkmark indication signs of Read messages.</td>
    <td align="left"><img src="img/checkmarkreadcolor.png" alt="checkmarkreadcolor"></td>
    <td align="left">#004DC9</td>
  </tr>
  <tr>
    <td align="left">checkmarkDistributedColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color of checkmark indication signs of Distributed messages.</td>
    <td align="left"><img src="img/checkmarkdistributedcolor.png" alt="checkmarkdistributedcolor"></td>
    <td align="left">#5B5C5E</td>
  </tr>
  <tr>
    <td align="left">checkmarkSentColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color of checkmark indication signs of Sent messages.</td>
    <td align="left"></td>
    <td align="left">#5B5C5E</td>
  </tr>
  <tr>
    <td align="left">isReadReceiptTextMode</td>
    <td align="left">Bool</td>
    <td align="left">Two options for read indication: Read Receipt with Text Mode Read. Receipt with Icon Mode. If the parameter set as true the mode will be Text. If the parameter set as false the mode will be Icon. Default value is true.</td>
    <td align="left"><img src="img/isreadreceipttextmode.png" alt="isReadReceiptTextMode"></td>
    <td align="left">true</td>
  </tr>
</tbody>
</table>

### Surveys Buttons (CSAT and FCR)

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">csatSubmitButtonCornerRadius</td>
    <td align="left">Double</td>
    <td align="left">Corner radius of the Submit button.</td>
    <td align="left"><img src="img/csatsubmitbuttoncornerradius.png" alt="csatSubmitButtonCornerRadius"></td>
    <td align="left">30</td>
  </tr>
  <tr>
    <td align="left">csatSubmitButtonBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Background color code of the Submit button.</td>
    <td align="left"><img src="img/csatsubmitbuttonbackgroundcolor.png" alt="csatsubmitbuttonbackgroundcolor"></td>
    <td align="left">#229A49</td>
  </tr>
  <tr>
    <td align="left">csatSubmitButtonTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Text color code of the Submit button.</td>
    <td align="left"><img src="img/csatsubmitbuttontextcolor.png" alt="csatSubmitButtonTextColor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">csatRatingButtonSelectedColor</td>
    <td align="left">UIColor</td>
    <td align="left">Background Color code of the rating buttons.</td>
    <td align="left"><img src="img/csatratingbuttonselectedcolor.png" alt="csatRatingButtonSelectedColor"></td>
    <td align="left">#229A49</td>
  </tr>
  <tr>
    <td align="left">csatResolutionButtonSelectedColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the FCR survey buttons (YES/NO) when selected.</td>
    <td align="left"><img src="img/csatresolutionbuttonselectedcolor.png" alt="csatresolutionbuttonselectedcolor"></td>
    <td align="left">#229A49</td>
  </tr>
  <tr>
    <td align="left">csatAllTitlesTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Title text color for all labels.</td>
    <td align="left"><img src="img/csatalltitlestextcolor.png" alt="csatAllTitlesTextColor"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">csatResolutionHidden</td>
    <td align="left">Bool</td>
    <td align="left">Hides the FCR survey (YES/NO) question.</td>
    <td align="left"><img src="img/csatresolutionhidden.png" alt="csatResolutionHidden"></td>
    <td align="left">false</td>
  </tr>
  <tr>
    <td align="left">csatAgentViewHidden</td>
    <td align="left">Bool</td>
    <td align="left">Hides the view of agent avatar and name.</td>
    <td align="left"><img src="img/csatagentviewhidden.png" alt="csatagentviewhidden"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">csatThankYouScreenHidden</td>
    <td align="left">Bool</td>
    <td align="left">Hides the Thank You screen after tapping Submit button. </td>
    <td align="left"><img src="img/csatthankyouscreenhidden.png" alt="csatthankyouscreenhidden"></td>
    <td align="left">false</td>
  </tr>
  <tr>
    <td align="left">csatNavigationBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Background color of the navigation of the survey.</td>
    <td align="left"><img src="img/csatnavigationbackgroundcolor.png" alt="csatnavigationbackgroundcolor"></td>
    <td align="left">#229A49</td>
  </tr>
  <tr>
    <td align="left">csatNavigationTitleColor</td>
    <td align="left">UIColor</td>
    <td align="left">Text color of the title in the survey navigation.</td>
    <td align="left"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">csatSkipButtonColor</td>
    <td align="left">UIColor</td>
    <td align="left">Skip survey button color. </td>
    <td align="left"></td>
    <td align="left">UIColor.black</td>
  </tr>

  <tr>
    <td align="left">csatUIStatusBarStyleLightContent</td>
    <td align="left">Bool</td>
    <td align="left">Allow the UI status bar to take the color of the survey navigation bar color.</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">csatShowSurveyView</td>
    <td align="left">Bool</td>
    <td align="left">Hides the whole survey view and disables it.</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">csatSurveyExpirationInMinutes</td>
    <td align="left">UInt</td>
    <td align="left">Expiration of CSAT in minutes from the moment the conversation was ended. If Survey exceeded the expiration, it will not be presented to the user. Default 24H</td>
    <td align="left"></td>
    <td align="left">1440 </td>
  </tr>
</tbody>
</table>

### Conversations

<table>
<thead>
  <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">maxPreviousConversationToPresent</td>
    <td align="left">UInt</td>
    <td align="left">Number of conversations to show in advance.</td>
    <td align="left"></td>
    <td align="left">2</td>
  </tr>

  <tr>
    <td align="left">deleteClosedConversationOlderThanMonths</td>
    <td align="left">UInt</td>
    <td align="left">Upon SDK initialization, all closed conversations with an end date older than X months will be deleted from the database. Setting 0 will delete all closed conversations.</td>
    <td align="left"></td>
    <td align="left">13</td>
  </tr>
  <tr>
    <td align="left">sendingMessageTimeoutInMinutes</td>
    <td align="left">UInt</td>
    <td align="left">Maximum number of minutes to send the message</td>
    <td align="left"></td>
    <td align="left">60</td>
  </tr>
  <tr>
    <td align="left">conversationSeparatorTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Conversation separator text and line color</td>
    <td align="left"><img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">enableConversationSeparatorTextMessage</td>
    <td align="left">Bool</td>
    <td align="left">Toggle conversation separator text message when conversation resolved from agent or consumer</td>
    <td align="left"><img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">enableConversationSeparatorLine</td>
    <td align="left">Bool</td>
    <td align="left">Toggle conversation separator line when conversation resolved from agent or consumer</td>
    <td align="left"><img src="img/conversationseparatortextcolor.png" alt="conversationseparatortextcolor"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">conversationClosedSeparatorFontSize</td>
    <td align="left">UIFontTextStyle</td>
    <td align="left">Define the Date Separator font size</td>
    <td align="left"><img src="img/conversationClosedSeparatorFontSize.png" alt="conversationClosedSeparatorFontSize"></td>
    <td align="left">UIFontTextStyle.caption1</td>
  </tr>
  <tr>
    <td align="left">conversationClosedSeparatorBottomPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the conversation Closed label to separator line padding</td>
    <td align="left"><img src="img/conversationClosedSeparatorBottomPadding.png" alt="conversationClosedSeparatorBottomPadding"></td>
    <td align="left">7</td>
  </tr>
  <tr>
    <td align="left">conversationClosedSeparatorFontName</td>
    <td align="left">Float</td>
    <td align="left">Define the conversation separator view bottom padding</td>
    <td align="left"><img src="img/conversationClosedSeparatorFontName.png" alt="conversationClosedSeparatorFontName"></td>
    <td align="left">7</td>
  </tr>
  <tr>
    <td align="left">conversationClosedSeparatorViewBottomPadding</td>
    <td align="left">String</td>
    <td align="left">Custom font name for Timestamp. Fonts that are not part of the iOS families, must be defined in App's Info.plist</td>
    <td align="left"><img src="img/conversationClosedSeparatorViewBottomPadding.png" alt="conversationClosedSeparatorViewBottomPadding"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">conversationClosedSeparatorTopPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the conversation Closed Separator Top padding</td>
    <td align="left"><img src="img/conversationClosedSeparatorTopPadding.png" alt="conversationClosedSeparatorTopPadding"></td>
    <td align="left">5</td>
  </tr>
  <tr>
    <td align="left">enableVibrationOnMessageFromRemoteUser</td>
    <td align="left">Bool</td>
    <td align="left">Toggle vibration sound when a new message from a remote user received</td>
    <td align="left"></td>
    <td align="left">false</td>
  </tr>
</tbody>
</table>

### Unread Messages

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">scrollToBottomButtonBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Scroll to bottom button background color of the whole button</td>
    <td align="left"><img src="img/scrolltobottombuttonbackgroundcolor.png" alt="scrolltobottombuttonarrowcolor"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">scrollToBottomButtonMessagePreviewTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Scroll to bottom button text color of the last unread message preview</td>
    <td align="left"><img src="img/scrolltobottombuttonmessagepreviewtextcolor.png" alt="scrolltobottombuttonmessagepreviewtextcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">scrollToBottomButtonBadgeBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Scroll to bottom button unread message badge background color</td>
    <td align="left"><img src="img/scrolltobottombuttonbadgebackgroundcolor.png" alt="scrolltobottombuttonbadgebackgroundcolor"></td>
    <td align="left">#E7242D</td>
  </tr>
  <tr>
    <td align="left">scrollToBottomButtonBadgeTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Scroll to bottom button unread message badge text color</td>
    <td align="left"><img src="img/scrolltobottombuttonbadgetextcolor.png" alt="scrolltobottombuttonbadgetextcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">scrollToBottomButtonArrowColor</td>
    <td align="left">UIColor</td>
    <td align="left">Scroll to bottom button arrow tint color</td>
    <td align="left"><img src="img/scrolltobottombuttonarrowcolor.png" alt="scrolltobottombuttonarrowcolor"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">unreadMessagesDividerBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Unread Messages divider background color</td>
    <td align="left"><img src="img/unreadmessagesdividerbackgroundcolor.png" alt="unreadmessagesdividerbackgroundcolor"></td>
    <td align="left">#F5F5F5</td>
  </tr>
  <tr>
    <td align="left">unreadMessagesDividerTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Unread Messages divider text color</td>
    <td align="left"><img src="img/unreadmessagesdividertextcolor.png" alt="unreadmessagesdividertextcolor"></td>
    <td align="left">#004DC9</td>
  </tr>
  <tr>
    <td align="left">scrollToBottomButtonEnabled</td>
    <td align="left">Bool</td>
    <td align="left">Toggle the mode of the Scroll to bottom button</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">scrollToBottomButtonMessagePreviewEnabled</td>
    <td align="left">Bool</td>
    <td align="left">Toggle the mode of the Scroll to bottom unread message text preview</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">unreadMessagesDividerEnabled</td>
    <td align="left">Bool</td>
    <td align="left">Toggle the mode of the Unread Messages divider. If disabled, scroll to bottom button will scroll to bottom although we can have new messages and don't show the badge at all nor "new message preview"</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">unreadMessagesCornersRadius</td>
    <td align="left">Float</td>
    <td align="left">Define the corners radius of the unread messages bubble.</td>
    <td align="left"><img src="img/unreadBubbleRadius.png" alt="unreadBubbleRadius"></td>
    <td align="left">8 for all the corners</td>
  </tr>
  <tr>
    <td align="left">scrollToBottomButtonCornerRadius</td>
    <td align="left">Float</td>
    <td align="left">Define the left top and the left bottom corners radius of the scroll down indicator.</td>
    <td align="left"><img src="img/scrollToBottomButtonCornerRadius.png" alt="scrollToBottomButtonCornerRadius"></td>
    <td align="left">20 for left top and the left bottom the corners</td>
  </tr>
  <tr>
    <td align="left">scrollToBottomButtonBadgeCornerRadius</td>
    <td align="left">Float</td>
    <td align="left">Define the corners radius of the unread messages counter inside the scroll down indicator.</td>
    <td align="left"><img src="img/scrollToBottomButtonBadgeCornerRadius.png" alt="scrollToBottomButtonBadgeCornerRadius"></td>
    <td align="left">12 for all the corners	</td>
  </tr>
</tbody>
</table>

### Localization

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">country</td>
    <td align="left">String?</td>
    <td align="left">Country code: When it is not nil, it will be combined with 'language' ("language_country", for example: en_US) and used instead of device default locale when formatting date and time. If no value is provided, the SDK will use the country according to the device's locale.</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">language</td>
    <td align="left">LPLanguage</td>
    <td align="left">Language that will be used instead of default device language.
Its type is LPLanguage enum that contains all the languages that are supported by MessagingSDK.
It will affect the following areas:
     1. Will be used when getting localized strings
     2. Will be combined with 'country' ("language_country", for example: en_US) and used instead of default device locale when formatting time and date. If no value is provided, the SDK will use the device's language as default.</td>
    <td align="left"></td>
    <td align="left">DeviceLanguage</td>
  </tr>
  </tbody>
</table>

### Brand

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">brandName</td>
    <td align="left">String</td>
    <td align="left">The brand name will be shown as a title on toolbar when there is no active conversation. </td>
    <td align="left"></td>
    <td align="left">"" (Empty String)</td>
  </tr>
  <tr>
    <td align="left">conversationBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the entire view background.</td>
    <td align="left"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">customFontNameConversationFeed</td>
    <td align="left">String?</td>
    <td align="left"> Custom font name for conversation feed. This font will affect all Messages, Timestamp and Separators. Fonts that are not part of the iOS families, must be defined in App's Info.plist</td>
    <td align="left"><img src="img/customFontNameConversationFeed.png" alt="customFontNameConversationFeed"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">customFontNameNonConversationFeed</td>
    <td align="left">String?</td>
    <td align="left"> Custom font name for all non conversation feed controls. Such as: Buttons, Alerts, Banners, Menu and External Windows.
    Fonts that are not part of the iOS families, must be defined in App's Info.plist</td>
    <td align="left"><img src="img/customFontNameNonConversationFeed.png" alt="customFontNameNonConversationFeed"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">customRefreshControllerImagesArray</td>
    <td align="left">Array<UIImage></td>
    <td align="left">Array of images for creating the custom refresh controller</td>
    <td align="left"><img src="img/customRefreshControllerImagesArray.png" alt="customRefreshControllerImagesArray"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">customRefreshControllerAnimationSpeed</td>
    <td align="left">Float<UIImage></td>
    <td align="left">custom refresh controller speed animation </td>
    <td align="left"></td>
    <td align="left">2</td>
  </tr>
</tbody>
</table>

### Date Separator

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">dateSeparatorTitleBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for date separator title background color.</td>
    <td align="left"><img src="img/dateseparatortitlebackgroundcolor.png" alt="dateseparatortitlebackground"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">dateSeparatorTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for date separator text color.</td>
    <td align="left"><img src="img/dateseparatortextcolor.png" alt="dateSeparatorTextColor"></td>
    <td align="left">#46474A</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">dateSeparatorLineBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for date separator line background color.</td>
    <td align="left"><img src="img/dateseparatorlinebackgroundcolor.png" alt="datesepartaorlinebackgroundcolor"></td>
    <td align="left">UIColor.clear</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">dateSeparatorBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for date separator background color.</td>
    <td align="left"><img src="img/dateseparatorbackgroundcolor.png" alt="dateSeparatorBackgroundColor"></td>
    <td align="left">#FFFFFF</td>
  </tr>
  <tr>
    <td align="left">dateSeparatorFontSize</td>
    <td align="left">UIFontTextStyle</td>
    <td align="left">Define the Date Separator font text style.</td>
    <td align="left"><img src="img/dateSeparatorFontSize.png" alt="dateSeparatorFontSize"></td>
    <td align="left">UIFontTextStyle.footnote</td>
  </tr>
  <tr>
    <td align="left">customFontNameSeparatorTimestampFeed</td>
    <td align="left">String</td>
    <td align="left">Custom font name for Timestamp.
    Fonts that are not part of the iOS families, must be defined in App's Info.plist.</td>
    <td align="left"><img src="img/customFontNameSeparatorTimestampFeed.png" alt="customFontNameSeparatorTimestampFeed"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">dateSeparatorTopPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the Date Separator Top padding.</td>
    <td align="left"><img src="img/dateSeparatorTopPadding.png" alt="dateSeparatorTopPadding"></td>
    <td align="left">0</td>
  </tr>
  <tr>
    <td align="left">dateSeparatorBottomPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the Date Separator bottom padding.</td>
    <td align="left"><img src="img/dateSeparatorBottomPadding.png" alt="dateSeparatorBottomPadding"></td>
    <td align="left">0</td>
  </tr>
</tbody>
</table>

### User input view

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">inputTextViewContainerBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">User Input TextView container background color.</td>
    <td align="left"><img src="img/inputtextviewcontainerbackgroundcolor.png" alt="inputTextViewContainerBackgroundColor"></td>
    <td align="left">#F5F5F5</td>
  </tr>
  <tr>  
  </tr>
  <tr>
    <td align="left">inputTextViewCornerRadius</td>
    <td align="left">Double</td>
    <td align="left">User Input TextView corner radius.</td>
    <td align="left"><img src="img/inputtextviewcornerradius.png" alt="inputtextviewcornerradius"></td>
    <td align="left">17.0</td>
  </tr>
</tbody>
</table>

### Agent Assignment

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">retrieveAssignedAgentFromLastClosedConversation</td>
    <td align="left">Bool</td>
    <td align="left">When using "getAssignedAgent" method, this option lets you decide whether to get assigned agents from active conversations only, or also from the last closed conversation in case there is no active conversation. If not assigned agent is available this method will return nil.</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
</tbody>
</table>

### Duration of Local Notifications

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">notificationShowDurationInSeconds</td>
    <td align="left">Double</td>
    <td align="left">Display duration of the local notification in seconds.
Examples: TimeToRespond notification, local notification, etc.
Note: this parameter will be extended to 60sec when in VoiceOver mode.</td>
    <td align="left"></td>
    <td align="left">3 (60 when in VoiceOver mode)</td>
  </tr>
</tbody>
</table>

### Time To Response and Off hours

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">ttrShowShiftBanner</td>
    <td align="left">Bool</td>
    <td align="left">Ability to enable/disable shift toaster (‘An agent will respond...’)</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">ttrFirstTimeDelay</td>
    <td align="left">Double</td>
    <td align="left">TTR - Time To Respond. Number of seconds before the first TTR notification appears.</td>
    <td align="left"></td>
    <td align="left">10</td>
  </tr>
  <tr>
    <td align="left">ttrShouldShowTimestamp</td>
    <td align="left">Bool</td>
    <td align="left">TTR - Time To Respond. <b>Enable</b>: Displays a time stamp in the TTR notification. <b>Disable</b>: Displays: "An agent will respond shortly".</td>
    <td align="left"><img src="img/ttrshouldshowtimestamp.png" alt="ttrShouldShowTimestamp"><br><img src="img/ttrshouldshowtimestamp1.png" alt="ttrShouldShowTimestamp"></td>
    <td align="left">false</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">ttrShowFrequencyInSeconds</td>
    <td align="left">UInt</td>
    <td align="left">Controls the TTR frequency: Don’t show the TTR more than once in X seconds.</td>
    <td align="left"></td>
    <td align="left">8</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">showUrgentButtonInTTRNotification</td>
    <td align="left">Bool</td>
    <td align="left">TTR - Time To Respond. Enable presentation of Urgent button in the TTR notification.</td>
    <td align="left"><img src="img/showurgentbuttoninttrnotification.png" alt="showUrgentButtonInTTRNotification"><br><img src="img/showurgentbuttoninttrnotification1.png" alt="showurgentbuttoninttrnotification"></td>
    <td align="left">false</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">showOffHoursBanner</td>
    <td align="left">Bool</td>
    <td align="left">Ability to disable/enable the off-hours toaster.</td>
    <td align="left"><img src="img/showoffhoursbanner.png" alt="showoffhoursbanner"></td>
    <td align="left">true</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">ttrBannerBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color of background for banner.</td>
    <td align="left"><img src="img/ttrbannerbackgroundcolor.png" alt="ttrBannerBackgroundColor"></td>
    <td align="left">#52A742</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">ttrBannerTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Text color of the banner.</td>
    <td align="left"><img src="img/ttrbannertextcolor.png" alt="ttrbannertextcolor"></td>
    <td align="left">#52A742</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">ttrBannerOpacityAlpha</td>
    <td align="left">Double</td>
    <td align="left">Opacity level of the banner background (values: 0.0 - 1.0).</td>
    <td align="left"><img src="img/ttrbanneropacityalpha.png" alt="ttrBannerOpacityAlpha"></td>
    <td align="left">0.8</td>
  </tr>
  <tr>
    <td align="left">offHoursTimeZoneName</td>
    <td align="left">String</td>
    <td align="left">Off Hours time zone name string based on [NSTimeZone knownTimeZoneNames]. If sending empty string, the local timezone will be used (Server sends UTC time).</td>
    <td align="left"></td>
    <td align="left">""</td>
  </tr>
</tbody>
</table>

### Date and Time

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">lpDateFormat</td>
    <td align="left">String?</td>
    <td align="left">Custom formatting for date string (day, year..), for example: 'd MMM'. If not defined, one of the default styles will be used (see timestamps formatting).</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">lpTimeFormat</td>
    <td align="left">String?</td>
    <td align="left">Custom formatting for time string (hours, lpDateTimeFormat minutes..), for example: 'hh:mm a'. If not defined, one of the default styles will be used (see timestamps formatting).</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">lpDateTimeFormat</td>
    <td align="left">String?</td>
    <td align="left">Custom formatting for date and time string, for example: 'EEEE MM/dd/YY hh:mm a'. If not defined, one of the default styles will be used (see timestamps formatting).</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
</tbody>
</table>

### Toast Notifications

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">toastNotificationsEnabled</td>
    <td align="left">Bool</td>
    <td align="left">Enable toast notifications such as offline and TTR notifications.
    False: Disable toast notifications.</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">csdsDomain</td>
    <td align="left">String</td>
    <td align="left">CSDS Domain URL. For brands that need to control the URL that is the gateway for LivePerson services, use this key to set a URL of your choice.</td>
    <td align="left">"https://adminlogin.liveperson.net/csdr/account/%@/service/baseURI.json?version=1.0"</td>
    <td align="left"></td>
  </tr>
</tbody>
</table>

### User Avatar

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">remoteUserAvatarBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Background color of the remote user’s avatar.</td>
    <td align="left"></td>
    <td align="left">#004DC9</td>
  </tr>
  <tr>
    <td align="left">remoteUserAvatarLeading</td>
    <td align="left">Float</td>
    <td align="left">Define the remote avatar Leading padding.</td>
    <td align="left"><img src="img/remoteUserAvatarLeadingPadding.png" alt="remoteUserAvatarLeadingPadding"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">remoteUserAvatarTrailingPadding</td>
    <td align="left">Float</td>
    <td align="left">Define the remote avatar Trailing padding.</td>
    <td align="left"><img src="img/remoteUserAvatarTrailingPadding.png" alt="remoteUserAvatarTrailingPadding"></td>
    <td align="left">8</td>
  </tr>
  <tr>
    <td align="left">remoteUserAvatarIconColor</td>
    <td align="left">UIColor</td>
    <td align="left">Icon color of default remoteUser avatar.</td>
    <td align="left">#0362AC</td>
    <td align="left">#FFFFFF</td>
  </tr>
  <tr>
    <td align="left">remoteUserDefaultAvatarImage</td>
    <td align="left">UIImage?</td>
    <td align="left">Default Avatar image of the remote user. When assigned, this image will disable remoteUserAvatarBackgroundColor and remoteUserAvatarIconColor configurations.  If remote user has an avatar image in his profile, this attribute will be ignored.</td>
    <td align="left"><img src="img/remoteUserDefaultAvatarImage.png"</td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">brandAvatarImage</td>
    <td align="left">UIImage?</td>
    <td align="left">Set avatar image for brand. This is an optional UIImage that if is set to nil a default avatar will be presented. Image ratio should be 1:1 (square) and at least 50x50 pixels.</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">csatAgentAvatarBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Background color of agent's default avatar in CSAT.</td>
    <td align="left"><img src="img/csatagentavatarbackgroundcolor.png" alt="csatAgentAvatarBackgroundColor"></td>
    <td align="left">#004DC9</td>
  </tr>
  <tr>
  </tr>
  <tr>
    <td align="left">csatAgentAvatarIconColor</td>
    <td align="left">UIColor</td>
    <td align="left">Icon color of agent's default avatar in CSAT.</td>
    <td align="left"><img src="img/csatagentavatariconcolor.png" alt="csatAgentAvatarIconColor"></td>
    <td align="left">#FFFFFF</td>
  </tr>
</tbody>
</table>

### Data Masking

<table>
<thead>
   <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td align="left">enableClientOnlyMasking</td>
    <td align="left">Bool</td>
    <td align="left">Determines whether to enable using regular expression to control which part of the text to mask, all masked data will appear as asterisks, will be saved to local db masked and will be sent to the server unmasked.</td>
    <td align="left"></td>
    <td align="left">false</td>
  </tr>
  <tr>
    <td align="left">enableRealTimeMasking</td>
    <td align="left">Bool</td>
    <td align="left">Determines whether to enable using regular expression to control which part of the text to mask, all masked data will appear as asterisks, will be saved to local db masked and sent to the server masked. </td>
    <td align="left"></td>
    <td align="left">false</td>
  </tr>

  <tr>
    <td align="left">clientOnlyMaskingRegex</td>
    <td align="left">String</td>
    <td align="left">Regular expression string to control which part of the text to mask, all masked data will appear as asterisks, will be saved to local db masked and will be sent to the server unmasked. Default is empty, meaning no regex. The regular expression patterns and behavior are based on Perl's regular expressions. See Apple Reference. </td>
    <td align="left"></td>
    <td align="left">""</td>
  </tr>
  <tr>
    <td align="left">realTimeMaskingRegex</td>
    <td align="left">String</td>
    <td align="left">Regular expression string to control which part of the text to mask. All masked data will appear as asterisks, will be saved to local db masked, and will be sent to the server unmasked. Default is empty, meaning no regex. The regular expression patterns and behavior are based on Perl's regular expressions. See Apple Reference. </td>
    <td align="left"></td>
    <td align="left">""</td>
  </tr>
</tbody>
</table>

### Navigation

<table>
<thead>
   <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="left">conversationNavigationBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Background color of navigation bar in conversation screen.</td>
    <td align="left"></td>
    <td align="left">#0362AC</td>
  </tr>
  <tr>
    <td align="left">conversationNavigationTitleColor</td>
    <td align="left">UIColor</td>
    <td align="left">Navigation title color in conversation screen.</td>
    <td align="left"></td>
    <td align="left">#FFFFFF</td>
  </tr>
  <tr>
    <td align="left">conversationStatusBarStyle</td>
    <td align="left">UIStatusBarStyle</td>
    <td align="left">Status bar style in conversation screen.</td>
    <td align="left"></td>
    <td align="left">.LightContent</td>
  </tr>
</tbody>
</table>

### Secure Form

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="left">secureFormBackButtonColor</td>
    <td align="left">UIColor</td>
    <td align="left">Back button color in secure form screen</td>
    <td align="left"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">secureFormUIStatusBarStyleLightContent</td>
    <td align="left">Bool</td>
    <td align="left">Should display status bar of the secure form screen in Light Content Mode (UIStatusBarStyle)</td>
    <td align="left"></td>
    <td align="left">true</td>
  </tr>
  <tr>
    <td align="left">secureFormNavigationBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Background color of navigation bar in secure form screen</td>
    <td align="left"></td>
    <td align="left">#0362AC</td>
  </tr>
  <tr>
    <td align="left">secureFormNavigationTitleColor</td>
    <td align="left">UIColor</td>
    <td align="left">Navigation title color in secure form screen</td>
    <td align="left"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Secure form bubble background color</td>
    <td align="left"></td>
    <td align="left">UIColor.white</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleBorderColor</td>
    <td align="left">UIColor</td>
    <td align="left">Secure form bubble border color</td>
    <td align="left"></td>
    <td align="left">#d4d4d5</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleBorderWidth</td>
    <td align="left">Double</td>
    <td align="left">Secure form bubble border width in pixels</td>
    <td align="left"></td>
    <td align="left">2.0</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleTitleColor</td>
    <td align="left">UIColor</td>
    <td align="left">Secure form bubble form title color</td>
    <td align="left"></td>
    <td align="left">UIColor.black</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleDescriptionColor</td>
    <td align="left">UIColor</td>
    <td align="left">Secure form bubble fill form text button color</td>
    <td align="left"></td>
    <td align="left">#5b5c5e</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleFillFormButtonTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Secure form bubble fill form text button color</td>
    <td align="left"></td>
    <td align="left">#004dc9</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleFillFormButtonBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Secure form bubble fill form button background color</td>
    <td align="left"></td>
    <td align="left">UIColor.clear</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleFormImageTintColor</td>
    <td align="left">UIColor</td>
    <td align="left">Secure form bubble form image tint color</td>
    <td align="left"></td>
    <td align="left">#004dc9</td>
  </tr>

  <tr>
    <td align="left">secureFormCustomFontName</td>
    <td align="left">String</td>
    <td align="left">Secure form custom font name to be used while user is filling the secure form. If not set, the default font will be Helvetica.</td>
    <td align="left"><img src="img/secureFormCustomFontName.png" alt="secureFormCustomFontName"></td>
    <td align="left">Helvetica</td>
  </tr>
  <tr>
    <td align="left">secureFormHideLogo</td>
    <td align="left">Bool</td>
    <td align="left">Secure form flag for hiding the secure form logo in the top of the form.</td>
    <td align="left"><img src="img/secureFormHideLogo.png" alt="secureFormHideLogo"></td>
    <td align="left">false</td>
  </tr>
  <tr>
    <td align="left">secureFormBubbleLoadingIndicatorColor</td>
    <td align="left">UIColor</td>
    <td align="left">Secure form loading indicator color while loading form before opening.</td>
    <td align="left"><img src="img/secureFormBubbleLoadingIndicatorColor.png" alt="secureFormBubbleLoadingIndicatorColor"></td>
    <td align="left">#46474a</td>
  </tr>
</tbody>
</table>

### Structured Content

<table>
<thead>
   <tr>
  <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default </th>
  </tr>
  </thead>
<tbody>
<tr>
  <td align="left">enableStrucutredContent</td>
  <td align="left">Bool</td>
  <td align="left">Enable or Disable toggle for Structured Content feature in conversations</td>
  <td align="left"></td>
  <td align="left">false</td>
</tr>
  <tr>
    <td align="left">structuredContentBubbleBorderWidth</td>
    <td align="left">Double</td>
    <td align="left">Structured Content bubble border width in pixels.</td>
    <td align="left"></td>
    <td align="left">0.3</td>
  </tr>
  <tr>
    <td align="left">structuredContentBubbleBorderColor</td>
    <td align="left">UIColor</td>
    <td align="left">Structured Content bubble border color.</td>
    <td align="left"></td>
    <td align="left">nil</td>
  </tr>
  <tr>
    <td align="left">structuredContentMapLatitudeDeltaDeltaSpan</td>
    <td align="left">Double</td>
    <td align="left">Structured Content Latitude Delta Span. Used to determine which area of the map to focus on. If you set this attribute, you must set structuredContentMapLongitudeDeltaSpan as well. This parameter is used to create an MKCoordinateSpan.
    For more info, [click here](https://developer.apple.com/documentation/mapkit/mkcoordinatespan).</td>
    <td align="left"></td>
    <td align="left">0.01</td>
  </tr>
  <tr>
    <td align="left">structuredContentMapLongitudeDeltaSpan</td>
    <td align="left">Double</td>
    <td align="left">Structured Content Longitude Delta Span. Used to determine which area of the map to focus on. If you set this attribute, you must set structuredContentMapLatitudeDeltaDeltaSpan as well. This parameter is used to create an MKCoordinateSpan.
    For more info, [click here](https://developer.apple.com/documentation/mapkit/mkcoordinatespan).</td>
    <td align="left"></td>
    <td align="left">0.01</td>
  </tr>
</tbody>
</table>

### Connection Status Bar

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="left">connectionStatusConnectingBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the background of the connection status bar while connecting.</td>
    <td align="left"><img src="img/connectionStatusBarConnecting.png" alt="systemBubbleTextColor"></td>
    <td align="left">#f5f5f5f2</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td align="left">connectionStatusConnectingTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the text of the connection status bar while connecting.</td>
    <td align="left"><img src="img/connectionStatusBarConnecting.png" alt="systemBubbleTextColor"></td>
    <td align="left">#46474a</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td align="left">connectionStatusFailedToConnectBackgroundColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the background of the connection status bar when connection failed.</td>
    <td align="left"><img src="img/connectionStatusBarFailedToConnect.png" alt="systemBubbleTextColor"></td>
    <td align="left">#000000cc</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td align="left">connectionStatusFailedToConnectTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the text of the connection status bar when connection failed.</td>
    <td align="left"><img src="img/connectionStatusBarFailedToConnect.png" alt="systemBubbleTextColor"></td>
    <td align="left">UIColor.white</td>
  </tr>
</tbody>

</table>

### Controller message

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Example</th>
    <th>Default</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="left">controllerBubbleTextColor</td>
    <td align="left">UIColor</td>
    <td align="left">Color code for the text of the controller bubble.</td>
    <td align="left"><img alt="controller bubble text color"></td>
    <td align="left">#5b5c5e</td>
  </tr>
</tbody>
</table>
