---
pagename: Attributes Design Sheet
redirect_from:
  - consumer-experience-ios-sdk-attributes-design-sheet.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK Attributes
permalink: mobile-app-messaging-sdk-for-ios-sdk-attributes-attributes-design-sheet.html
indicator: messaging
---

<div class="designsheet">
<table rules="all" class="bigtable">
  <thead>
  <col width="60%">
  <tr>
    <th>Name</th>
    <th>Design Example</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><div class="designsheetnumber">1</div> remoteUserBubbleBackgroundColor, remoteUserBubbleBorderColor, remoteUserBubbleLinkColor, remoteUserBubbleTextColor, remoteUserBubbleBorderWidth, remoteUserBubbleTimestampColor</td>
    <td rowspan="3"><img loading="lazy" src="img/User_bubbles (1,2,3).png" alt="" /></td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">2</div>userBubbleBackgroundColor, userBubbleBorderColor, userBubbleLinkColor, userBubbleTextColor, userBubbleBorderWidth, userBubbleTimestampColor, userBubbleSendStatusTextColor, userBubbleErrorTextColor, userBubbleErrorBorderColor </td>
  </tr>
  <tr>
  <td><div class="designsheetnumber">3</div> remoteUserTypingTintColor</td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">4</div> enableLinkPreview, linkPreviewBackgroundColor, linkPreviewTitleTextColor, linkPreviewDescriptionTextColor, linkPreviewSiteNameTextColor, linkPreviewBorderWidth, linkPreviewStyle, linkPreviewSiteNameTextColor </td>
    <td rowspan="2"><img loading="lazy" src="img/Link preview (4,5).png" alt="" /></td>
  </tr>
  <tr>
  <td> <div class="designsheetnumber">5</div> urlRealTimePreviewBackgroundColor, urlRealTimePreviewBorderColor, urlRealTimePreviewBorderWidth, urlRealTimePreviewTitleTextColor, urlRealTimePreviewDescriptionTextColor, useNonOGTagsForLinkPreview</td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">6</div> enablePhotoSharing, photosharingMenuBackgroundColor, photosharingMenuButtonsBackgroundColor, photosharingMenuButtonsTintColor, photosharingMenuButtonsTextColor</td>
    <td><img loading="lazy" src="img/Photo sharing (6).png" alt="" /></td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">7</div> fileCellLoaderFillColor, fileCellLoaderRingProgressColor, fileCellLoaderRingBackgroundColor</td>
    <td><img loading="lazy" src="img/Photo sharing (7).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">8</div> systemBubbleTextColor</td>
    <td><img loading="lazy" src="img/System messages (8).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">9</div> customButtonImage </td>
    <td><img loading="lazy" src="img/Window mode (9).png" alt="" /></td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">10</div> checkmarkVisibility, checkmarkReadColor, checkmarkDistributedColor, checkmarkSentColor, isReadReceiptTextMode</td>
    <td><img loading="lazy" src="img/Delivery notifications (10).png" alt="" /></td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">11</div> csatNavigationTitleColor, csatAllTitlesTextColor </td>
    <td rowspan="4"><img loading="lazy" src="img/Survey buttons (11,12,13,14).png" alt="" /></td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">12</div> csatRatingButtonSelectedColor</td>
  </tr>
  <tr>
     <td><div class="designsheetnumber">13</div> csatResolutionButtonSelectedColor, csatResolutionHidden</td>
  </tr>
  <tr>
     <td><div class="designsheetnumber">14</div> csatSubmitButtonCornerRadius, csatSubmitButtonBackgroundColor, csatSubmitButtonTextColor</td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">15</div> csatThankYouScreenHidden </td>
    <td rowspan="2"><img loading="lazy" src="img/Survey buttons (15,16).png" alt="" /></td>
  </tr>
  <tr>
  <td><div class="designsheetnumber">16</div> csatNavigationBackgroundColor</td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">17</div> conversationSeparatorTextColor, enableConversationSeparatorTextMessage, enableConversationSeparatorLine</td>
    <td><img loading="lazy" src="img/Conversations (17).png" alt=""></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">18</div> scrollToBottomButtonBackgroundColor, scrollToBottomButtonMessagePreviewTextColor, scrollToBottomButtonBadgeBackgroundColor, scrollToBottomButtonBadgeTextColor, scrollToBottomButtonArrowColor</td>
    <td><img loading="lazy" src="img/Unread messages (18).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">19</div> unreadMessagesDividerBackgroundColor, unreadMessagesDividerTextColor</td>
    <td><img loading="lazy" src="img/Unread messages (19).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">20</div> brandName, conversationBackgroundColor </td>
    <td><img loading="lazy" src="img/Brand (20).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">21</div> dateSeparatorTitleBackgroundColor, dateSeparatorTextColor, dateSeparatorLineBackgroundColor, dateSeparatorBackgroundColor</td>
    <td><img loading="lazy" src="img/Date seperator (21).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">22</div> inputTextViewContainerBackgroundColor, inputTextViewCornerRadius</td>
    <td><img loading="lazy" src="img/User input view (22).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">23</div> ttrShouldShowTimestamp, showUrgentButtonInTTRNotification, showOffHoursBanner, ttrBannerBackgroundColor, ttrBannerTextColor, ttrBannerOpacityAlpha</td>
    <td><img loading="lazy" src="img/TTR off hours (23).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">24</div> csatAgentAvatarBackgroundColor, csatAgentAvatarIconColor</td>
    <td><img loading="lazy" src="img/User avatar (24).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">25</div> secureFormBackButtonColor, secureFormUIStatusBarStyleLightContent, secureFormNavigationBackgroundColor, secureFormNavigationTitleColor, secureFormBubbleBackgroundColor, secureFormBubbleBorderColor, secureFormBubbleBorderWidth, secureFormBubbleTitleColor</td>
    <td><img loading="lazy" src="img/Secure form (25).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">26</div> secureFormBubbleDescriptionColor, secureFormBubbleFillFormButtonTextColor, secureFormBubbleFillFormButtonBackgroundColor, secureFormBubbleFormImageTintColor</td>
    <td><img loading="lazy" src="img/Secure form (26).png" alt="" /></td>
  </tr>
</tbody>
</table>
</div>
