---
title: Release Notes
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS

order: 243
permalink: consumer-experience-ios-sdk-release-notes.html
indicator: messaging
---
<div class="subscribe">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/consumer-experience-ios-sdk-release-notes.html&mode=web&css=post-content" target="_blank">click here to subscribe to any further changes!</a> When the Release Notes are updated, you'll get a notification straight to your email of choice!</div>
<br>
<br>

### iOS Messaging SDK - Version 3.2.3
iOS Messaging SDK v3.2.3 contains the following bug fix:

#### Symptom:
When consumer trying to enter into an existing conversation after the agent mark as closed, loading history failed and the consumer can't see the conversation window
#### Fix:
improve logout mechanism.

### iOS Messaging SDK - Version 3.2.2
iOS Messaging SDK v3.2.2 contains the following bug fixes:

#### Symptom:

When calling getEngagement while there is an active conversation which is not related to a campaign, the response returns an error.

#### Fix:

When calling getEngagement while there is an active conversation which is not related to a campaign, a response will be returned with the available information.

#### Symptom:

In some cases, the badge counter was returned with an incorrect value, which represents a previous value. For example, when an agent sent messages while the conversation screen was in the background.

#### Fix:

Badge counter is now showing the actual value.

#### Symptom:

In case of a failure in ‘logout’, the user’s data might be displayed with empty message bubbles the next time that the consumer opens the conversation screen.

#### Fix:

The user’s data is now cleared as expected only if the ‘logout’ succeeded.

#### Symptom:

In some cases, the badge counter was returned with an incorrect value, which represents a previous value.

#### Fix:

Badge counter is now showing the actual value regardless the state of the conversation.

### iOS Messaging SDK - Version 3.2.1

iOS Messaging SDK v3.2.1 contains the following bug fixes:

#### Symptom:

When trying to get the number of unread messages and the token expired, the SDK doesn’t provide a relevant indication.

#### Fix:

When trying to get the number of unread messages and the token expired, a token expired callback will now be returned.

### iOS Messaging SDK - Version 3.2

**Version 3.2 roll-out: July 1st 2018**

### Main Features

#### Audio Messaging

**Type**: Consumer Experience Feature
**Available to all customers?** No. Please contact your account team.

Consumers are now able to send Audio messages to brands which makes the communication even better.

In Audio messages, the Brands can configure:

1. The maximum length of the message (15 seconds - 2 minutes long by default)
2. Enable/Disable the feature
3. Max stored audio messages on device
4. Tooltips text

#### Unauthenticated In-App Messaging

**Type:** Developer Experience Feature

**Available to all customers?** Yes.

Brands can communicate with their consumers in an unauthenticated manner while being able to leverage additional LiveEngage capabilities such as Campaigns for Messaging.

Unauthenticated messaging allows brands to:

1. Easier & quicker on-boarding to LiveEngage

2. Having pre authentication messaging use cases, for example, assistance with password recovery

3. The ability to use Campaigns for Messaging while having unauthenticated conversations

#### Quick Replies

**Type:** Consumer Experience Feature

**Available to all customers?** Yes.

Quick Replies enrich the consumer experience by using rich text interactions that guide the consumer throughout the conversation. The consumer is presented with a number of brief answers that can be selected in order to navigate the conversation in the right path.

The Quick Replies can contain the same actions as Structured Content buttons:

1. Publish text

2. Link

3. Navigation

As Quick Replies contain predefined values, the feature can dramatically improvie communication with Bots and improve both consumer experience and operational efficiency.

#### Structured Content Carousel

**Type:** Consumer Experience Feature

**Available to all customers?** Yes.

Structured Content experience is enriched with the Carousel allowing more capabilities, more use cases and moving agents one step forward in being able to provide end to end assistance.

The Carousel consists of more than one card at a time, side by side and the consumer can swipe between cards.

#### Experience and Branding Enhancements

**Type:** Consumer Experience Feature

**Available to all customers?** Yes.

The SDK allows Brands to customize the SDK even more, giving a personal touch to their cusomers.

**Large Emojis**

When using Emojis in a conversation:

1. One Emoji - the Emoji will be enlarged to an extra large size.

2. Two Emojis - the Emojis will be enlarged to a Large size.

3. More than two Emojis or Emojis with text - the Emojis' size will be small.

**Conversation Window Background Image**

A new way for Brands to set their own background in conversations to add a more personal touch.

### APIs

#### New APIs

<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>LPMonitoringIdentity - added new object to be used as a param in the LPMonitoringAPI.</td>
      <td>The object replaced consumerId which is now deprecated.</td>
    </tr>
    <tr>
      <td>func getEngagement(identities: [LPMonitoringIdentity], monitoringParams: LPMonitoringParams?, completion: @escaping (_ response: LPGetEngagementResponse)->(), failure: @escaping (_error: NSError)->())</td>
      <td>Use this API to get an engagement for a consumer in an appInstallationId context. The returned value is based on the provided Engagement Attributes. As an optional parameter, you can pass SDE Data which includes Entry Points or any other Engagement Attributes for routing the Parameters:
      <br>
        - identities: an array of identity
        objects of type LPMonitoringIdentity
        which includes the details on the
        consumer and issuer
        <br>
        - monitoringParams: an instance of
        includes optional Array of Entry
        Points and an optional dictionary of
        Engagement Attributes
        <br>
        - completion: completion block with
        response of type
        LPGetEngagementResponse. This
        response includes sessionID and
        visitorID along with
        LPEngagementDetails object.
        <br>
        - failure: failure block with an error in
        case the request fails
        </td>
      </tr>
      <tr>
        <td>func sendSDE(identities: [LPMonitoringIdentity], monitoringParams: LPMonitoringParams, completion: @escaping (_ response: LPSendSDEResponse)->(),failure: @escaping (_ error: NSError)->())</td>
        <td>Use this API to report Engagement Attributes for a consumer in an appInstallationId context including show and accept impression. Parameters:
        <br>
          - identities: an array of identity
          objects of type LPMonitoringIdentity
          which includes the details on the
          consumer and issuer
          <br>
          - monitoringParams: an instance of
          LPMonitoringParams includes
          optional Array of Entry Points and an
          optional dictionary of Engagement
          Attributes. Additional optional
          parameter is PageID which is used
          for Page identification for sending
          events on the current engagement.
          PageID will be received in
          LPSendSDEResponse and in
          LPGetEngagementResponse
          <br>
          - completion: completion block with
          response of type
          LPSendSDEResponse. This
          response includes sessionID and
          visitorID and pageID for future use.
          <br>
          - failure: failure block with an error in
          case the request fails
          </td>
        </tr>
        <tr>
          <td>LPAuthenticationType - a new enum. Was added to LPAuthenticationParams</td>
          <td>This enum is used for determine the authentication type with the following options:
          <br>
            - signup (default) // old
            unauthenticated method. <strong>Will
            be deprecated on Jun 2019</strong>
          <br>
            - unauthenticated
          <br>
            - authenticated
            </td>
          </tr>
          <tr>
            <td>registerPushNotifications → Added new optional parameter authenticationParams:
                func registerPushNotifications(token: Data, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil, authenticationParams: LPAuthenticationParams? = nil)
            </td>
            <td>If passing authentication params, this method will register immediately to LPPusher, the registration will be performed when calling showConversation</td>
          </tr>
        </tbody>
      </table>

#### Deprecated APIs

<table>
  <thead>
    <tr>
      <th>API</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>func addContentToMessage(text: String) from LPMessagingSDK</td>
    </tr>
    <tr>
      <td>func getEngagement(consumerID: String?, monitoringParams: LPMonitoringParams?, completion: @escaping (_ response: LPGetEngagementResponse)->(), failure: @escaping (_ error: NSError)->())</td>
    </tr>
    <tr>
      <td>func sendSDE(consumerID: String, monitoringParams: LPMonitoringParams, completion: @escaping (_ response: LPSendSDEResponse)->(), failure: @escaping (_ error: NSError)->())</td>
    </tr>
  </tbody>
  </table>

#### Callbacks

**New Callbacks**

<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>LPMessagingSDKUnauthenticatedUserExpired()</td>
      <td>Called when an unauthenticated user expired and can no longer be in use. When this callback is invoked, the previous open conversation will be closed locally.</td>
    </tr>
    <tr>
      <td>LPMessagingSDKPushRegistrationDidFinish()</td>
      <td>Called when the SDK registration for LP Pusher service has been succeeded. Pusher is the service that responsible for Remote Push Notifications routing and delivering from and to APNS.</td>
    </tr>
    <tr>
      <td>LPMessagingSDKPushRegistrationDidFail(_ error: NSError)</td>
      <td>Called when the SDK registration for LP Pusher service has failed with error. Pusher is the service that responsible for Remote Push Notifications routing and delivering from and to APNS.</td>
    </tr>
  </tbody>
  </table>

#### Configurations

**General Configurations**

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>ttrShouldShow</td>
      <td>Toggling this on will show TTR notifications. When the auto messages feature is enabled, TTR notifications will not be displayed regardless of this parameter.</td>
      <td>true</td>
    </tr>
    <tr>
      <td>announceAgentTyping</td>
      <td>This configuration already existed. If true, show agent is typing indicator in selected position and accessibility will announce when agent is typing a message to the consumer. If false, will not show any indication, and will not announce when agent is typing a message.</td>
      <td>true</td>
    </tr>
    <tr>
      <td>showAgentTypingInMessageBubble</td>
      <td>If true, shows agent is typing indicator in a message bubble. If false, show indicator under Agent label in navigator bar. If announceAgentTyping is false, will not show any "is typing" indicator regardless of current value</td>
      <td>true</td>
    </tr>
  </tbody>
  </table>

#### Experience and Branding Enhancements

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>enableEnlargeEmojis</td>
      <td>When true, user and remote user messages containing one or two emojis will be enlarged in chat. Messages with one emoji will be the largest, two emojis will be large, and 3 or more will be displayed as normal text.</td>
      <td>false</td>
    </tr>
    <tr>
      <td>conversationBackgroundPortraitImage</td>
      <td>When not nil, will be used as the conversation portrait background image.</td>
      <td>nil</td>
    </tr>
    <tr>
      <td>conversationBackgroundLandscapeImage</td>
      <td>When not nil, will be used as the conversation landscape background image</td>
      <td>nil</td>
    </tr>
    <tr>
      <td>conversationBackgroundImageContentMode</td>
      <td>Defines the content mode of the conversation background image.</td>
      <td>.scaleToFill</td>
    </tr>
  </tbody>
  </table>


#### Structured Content

  <table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>structuredContentBubbleTopLeftCornerRadius</td>
      <td>Sets the corner radius of the top left corner of a Structured Content card</td>
      <td>8</td>
    </tr>
    <tr>
      <td>structuredContentBubbleTopRightCornerRadius</td>
      <td>Sets the corner radius of the top right corner of a Structured Content card</td>
      <td>8</td>
    </tr>
    <tr>
      <td>structuredContentBubbleBottomLeftCornerRadius</td>
      <td>Sets the corner radius of the bottom left corner of a Structured Content card</td>
      <td>8</td>
    </tr>
    <tr>
      <td>structuredContentBubbleBottomRightCornerRadius</td>
      <td>Sets the corner radius of the bottom right corner of a Structured Content card</td>
      <td>8</td>
    </tr>
  </tbody>
  </table>


#### Audio Messaging

  <table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>recordingDurationLimit: TimeInterval</td>
      <td>Maximum time frame for recording audio message (in seconds).</td>
      <td>120</td>
    </tr>
    <tr>
      <td>enableAudioSharing</td>
      <td>True - Enables Audio Sharing feature, False - Disables Audio Sharing</td>
      <td>false</td>
    </tr>
    <tr>
      <td>maxNumberOfSavedAudioFilesOnDisk</td>
      <td>This number represents how many audio files will be saved on the disk. Exceeding files are deleted when the app closes.</td>
      <td>20</td>
    </tr>
  </tbody>
  </table>


#### Quick Replies

  <table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>quickReplyButtonVerticalPadding</td>
      <td>Distance between the bottom and top edges of the button to the bottom and top edges of the text</td>
      <td>10.0</td>
    </tr>
    <tr>
      <td>quickReplyButtonHorizontalPadding</td>
      <td>Distance between the right and left edges of the button to the right and left edges of the text</td>
      <td>15.0</td>
    </tr>
    <tr>
      <td>quickReplyVerticalMargin</td>
      <td>Vertical margin between quick reply buttons</td>
      <td>10.0</td>
    </tr>
    <tr>
      <td>quickReplyHorizontalMargin</td>
      <td>Horizontal padding between quick reply buttons</td>
      <td>10.0</td>
    </tr>
    <tr>
      <td>quickReplyButtonBorderWidth</td>
      <td>Border size of Quick Reply buttons</td>
      <td>1.0</td>
    </tr>
  </tbody>
  </table>


#### Updated Configurations

  <table>
  <thead>
    <tr>
      <th>Configuration</th>
      <th>Description</th>
      <th>Old Value</th>
      <th>New Value</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>inputTextViewCornerRadius</td>
      <td>User Input TextView corner radius</td>
      <td>17.0</td>
      <td>20.0</td>
    </tr>
  </tbody>
  </table>


### Strings Localization

#### General Strings

  <table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>isTyping
  </td>
      <td>Indication that appears while Agent is typing a new message.
  </td>
      <td>"typing…"</td>
    </tr>
  </tbody>
  </table>


#### Quick Replies

  <table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>quickReplyButton</td>
      <td>Accessibility string when hovering on the Quick Replies control. </td>
      <td>"Quick reply button"
  </td>
    </tr>
    <tr>
      <td>outOf</td>
      <td>Accessibility string when hovering on the Quick Replies button</td>
      <td>"out of"</td>
    </tr>
  </tbody>
  </table>


#### Unauthenticated Messaging

  <table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>unauthenticatedUserExpiredTitle</td>
      <td>The title of the presented dialog when the identity is expired.</td>
      <td>New Conversation</td>
    </tr>
    <tr>
      <td>unauthenticatedUserExpiredMessage
  </td>
      <td>The body of the presented dialog when the identity is expired.
  </td>
      <td>"Hi there! As we haven't seen you for a while, we're opening a new conversation for you"</td>
    </tr>
  </tbody>
  </table>


#### Audio Messaging

  <table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>toolTipLongTapToRecord</td>
      <td>Tooltip shown when short tapping the mic button. </td>
      <td>"Long tap to record"</td>
    </tr>
    <tr>
      <td>toolTipReleaseButtonForRecording</td>
      <td>Tooltip shown when keeping mic tapped.</td>
      <td>"Release for recording"</td>
    </tr>
    <tr>
      <td>toolTipRecordLimitReached</td>
      <td>Tooltip shown when the maximum recording time reached.</td>
      <td>“Recording limit has been reached, click to send”</td>
    </tr>
  </tbody>
  </table>


### Features Enablement Chart

  <table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Backend update</th>
      <th>Backend enablement</th>
      <th>Backend configuration </th>
      <th>SDK enablement </th>
      <th>SDK configuration </th>
    </tr>
    </thead>
<tbody>
    <tr>
      <td>Audio Messaging</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Unauthenticated Messaging</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Quick Replies</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Structured Content Carousel</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Branding Enhancements</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </tbody>
  </table>


### iOS Messaging SDK - Version 3.1.5

Version 3.1.5 supports XCode 9.3 & XCode 9.4

#### Symptom:

Control History APIs are not exposed to Objective C.

#### Fix:

The Control History APIs are now exposed

#### Symptom:

LPMessagingSDKCSATScoreSubmissionDidFinish delegate was called when getting history, even if the CSAT was already submitted.

#### Fix:

LPMessagingSDKCSATScoreSubmissionDidFinish is now called only after the CSAT is submitted.


### iOS Messaging SDK - Version 3.1.4 (identical to 3.1.0.24)
Version 3.1.0.24 - Supports XCode 9.2

Version 3.1.4 - Supports XCode 9.3

#### Symptom:

In some cases where two consumers use the same device (one after the other), push notifications directed to the first consumer were routed to the device although a different consumer was using it.

#### Fix:

Before registering a new consumer for push notification, we make sure the previous consumer was unregistered.

#### Symptom:

In some cases, when using older iOS versions (~iOS 9) and older devices, and fetching additional history, the UI of the conversation screen breaks and from time to time, the app might crash as well.

#### Fix:

The UI will maintain its structure after fetching additional history and prevent a possible crash.


#### Symptom:

After a brand calls to Clear History, the conversation is removed from the UI but when the consumer navigates back to the screen the history is presented again.

#### Fix:

History will not be presented after calling Clear History.


#### Symptom:

In some cases, when the SDK is trying to connect to LivePerson’s servers, there is no indication for the consumer.

#### Fix:

An indication will be presented while the SDK attempts to connect to the server.

### iOS Messaging SDK - Version 3.1.3 (identical to 3.1.0.23)
Version 3.1.0.23 - Supports XCode 9.2

Version 3.1.3 - Supports XCode 9.3

The version contains the following bug fixes:

#### Symptom:
When a consumer scrolls inside the conversation window, returns to the app and then back to the conversation, their position inside the screen is not saved and they need to navigate back to their previous position.

#### Fix:
The consumer’s position within the conversation window is saved. When the consumer returns to the conversation, they will return to the same place they were when they navigated away from the screen.

#### Symptom:
In some cases, when fetching additional history, the UI of the conversation screen breaks.

#### Fix:
The UI will maintain its structure after fetching additional history.

#### Symptom:
When a consumer starts a conversation and leaves the messaging screen while moving the app to background, then returns to the messaging screen after the JWT has expired, they will not be able to continue the conversation and sending messages will be disabled.

#### Fix:
The JWT expiration is now verified before each socket connection. If it expires, a callback of tokenExpired will be invoked.

#### Symptom:
When calling the API of removeConversation() from viewWillDisappear() when the conversation has been resolved, the socket will be closed while the CSAT is being presented to the consumer. As a result, the CSAT submit button is disabled.

#### Fix:
The socket will not be closed while the CSAT is being presented.


### iOS Messaging SDK - Version 3.1.2 (identical to 3.1.0.22)
Version 3.1.0.22 - Supports XCode 9.2

Version 3.1.2 - Supports XCode 9.3

The version contains the following bug fixes:

#### Symptom:
Consumer is typing indication appears to the agent when the keyboard is opened and not when the consumer actually starts typing.

#### Fix:
Consumer is typing view will be presented to agent on a keystroke.

#### Symptom:
When a consumer scrolls inside the conversation window, goes back to the app and back to the conversation, the position inside the screen will not be saved.

#### Fix:
The position inside the screen is saved. When the consumer will go back to the conversation, the position will be the same as it was when leaving the screen.

#### Symptom:
Agent’s first name appears in the in app notification instead of the nickname.

#### Fix:
Added the nickname of the agent instead of the first name.


### iOS Messaging SDK - Version 3.1.1

#### Added support for XCode 9.3 and Swift 4.1



### iOS Messaging SDK - Version 3.1

These are the main feature releases available in the **Mobile App Messaging SDK version 3.1 for iOS**.

**Version 3.1 planned roll-out: March 18th 2018**

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.4.pdf){:target="_blank"}


#### New functionalities

##### Campaign for messaging

**Type:** Developer Experience Feature

**Available to all customers?** Yes.

The addition of campaigns for mobile app and web messaging will allow brands to manage their engagements easily and efficiently across these channels, targeting customers based on unauthenticated attributes or locations and routing them to a desired skill.

Being able to track customer activity in all areas of the brand app and provide information on these interactions to LiveEngage boosts agent efficiency and enables more accurate reporting.

Using the Monitoring APIs, brands can:

1. Report on the customer’s journey inside the app

2. Get engagements based on the reported SDEs

3. Route conversations to a specific skill (based on engagements)

##### Monitoring APIs

The below APIs enable brands to use Campaigns for Messaging inside the brand’s app

<table>
<thead>
 <tr>
 <th>New APIs</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Added monitoringInitParams to LPMessagingSDK.initialize() →
func initialize(_ brandID: String? = nil, monitoringInitParams: LPMonitoringInitParams? = nil) throws</td>
 <td>Added new optional monitoringInitParams: LPMonitoringInitParams object to allow using Monitoring.
SDK can be initialized once without monitoringInitParams and then have another initialize call using this param.
Passing monitoringInitParams is mandatory when using MonitoringAPI capabilities</td>
 </tr>
 <tr>
 <td>Added to LPMessasgingSDK.instance.getConversationBrandQuery →
func getConversationBrandQuery(_ brandID: String, campaignInfo: LPCampaignInfo? = nil) -> ConversationParamProtocol</td>
 <td>Added new optional campaignInfo: LPCampaignInfo object to be able to pass a new Campaign to conversation.
Campaign includes Engagement info which allows to control the consumer's routing.</td>
 </tr>
 <tr>
 <td>LPCampaignInfo initialization:
LPCampaignInfo(campaignID: Int, engagementID: Int, engagementContextID: String, sessionID: String? = nil, visitorID: String? = nil)</td>
 <td>Object to be able to pass a new Campaign to conversation.
Campaign includes Engagement info which allows to control the consumer's routing.</td>
 </tr>
 <tr>
 <td>LPMonitoringAPI → Added new API interface which should be called using:
LPMonitoringAPI.instance.xxxx
func getEngagement(consumerID: String?, monitoringParams: LPMonitoringParams?, completion: @escaping (_ response: LPGetEngagementResponse)->(), failure: @escaping (_ error: NSError)->())</td>
 <td>Use this API to get an engagement for a consumer in an appInstallationId context. When calculating eligibility the decision is based on the SDEs and other parameters. Based on messaging campaign concept
 As an optional parameter, you can pass SDE Data which includes Entry Points and Engagement Attributes for routing the conversation.
 Parameters:
      <ul>
      <li>consumerID: an optional brand app consumer ID to get the engagement for</li>
      <li>monitoringParams: an instance of includes optional Array of Entry Points and an optional dictionary of Engagement Attributes</li>
      <li>completion: completion block with response of type LPGetEngagementResponse. This response includes sessionID and visitorID along with LPEngagementDetails object.</li>
      <li>failure: failure block with an error in case the request fails</li></ul> </td>
 </tr>
 <tr>
 <td>func sendSDE(consumerID: String, monitoringParams: LPMonitoringParams, completion: @escaping (_ response: LPSendSDEResponse)->(), failure: @escaping (_ error: NSError)->())</td>
 <td>Use this API to report an engagement attributes (SDEs) for a consumer in an appInstallationId context.
 Parameters:
      <ul>
      <li>consumerID: an optional brand app consumer ID to get the engagement for</li>
      <li>monitoringParams: an instance of includes optional Array of Entry Points and an optional dictionary of Engagement Attributes</li>
      <li>completion: completion block with response of type LPGetEngagementResponse. This response includes sessionID and visitorID along with LPEngagementDetails object.</li>
      <li>failure: failure block with an error in case the request fails</li></ul> </td>
 </tr>
 </tbody>
</table>

**Please note: while the APIs are already available in the SDK, the backend will be available in mid-April. Please consult your account team before using the APIs.**

**The following additional conditions and configurations are required:**

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 </tr>
  </tbody>
</table>


##### Conversation History Control

**Type:** Developer Experience Feature

**Available to all customers?** Yes.

To enhance control of customer data retention, scalability and performance, and support the EU’s General Data Protection Regulation (GDPR), open conversations will be loaded from a real time service while closed conversations will be loaded from a history service.

The change will be **seamless** for brands who upgrade to SDK version 3.1. Brands choosing not to upgrade to SDK v3.1 will be able to view the conversation history from the last 14 days. The history stored on the consumer’s device will also be available.

The following additional conditions and configurations are required:*

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Yes</td>
 <td>No</td>
 <td>No</td>
 <td>No</td>
 <td>No</td>
 </tr>
 </tbody>
</table>


##### History and Active Conversation View

**Type:** Developer Experience Feature

**Available to all customers?** Yes.

New APIs will give brands control over the conversations presented in the conversation window. For example, brands can choose to present only the last 180 days of conversation history.

These APIs can be used together with getengagement (Monitoring APIs) to decide how to present  conversations history according to whether there is an open conversation or not. For example, if there is no open conversation, brands can present a ‘View conversation history’ button which will present only the closed conversations from the last 180 days.

The new APIs allows:

* Getting an indication if there is an open conversation or not (Monitoring APIs)

* Controlling which conversations will be presented by status (open\closed)

* Controlling the time frame of presented conversations (by days)

 * When using historyConversationsMaxDays, LPConversationHistoryMaxDaysDateType will decide if to filter by the conversations' start date or end date. When not providing a value, startConversationDate will be the default.

##### History and Active Conversation APIs

<table>
<thead>
 <tr>
 <th>New APIs</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>LPConversationViewParams → LPConversationHistoryControlParam → historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay?</td>
 <td>Allows to control which conversation will be presented when opening the conversation screen, by status (open or closed)</td>
 </tr>
 <tr>
 <td>LPConversationViewParams → LPConversationHistoryControlParam →
historyConversationMaxDaysType: LPConversationHistoryMaxDaysDateType? = startConversationDate</td>
 <td>When using historyConversationsMaxDays, LPConversationHistoryMaxDaysDateType will decide if to filter by the conversations' start date or end date.
When not providing a value, startConversationDate will be the default.</td>
 </tr>
 <tr>
 <td>LPConversationViewParams → LPConversationHistoryControlParam →
historyConversationsMaxDays: UInt?</td>
 <td>Allows to control the amount of conversations history that will be presented when opening the conversation screen by days.</td>
 </tr>
 </tbody>
</table>


The following additional conditions and configurations are required:*

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Yes</td>
 <td>No</td>
 <td>No</td>
 <td>No</td>
 <td>No</td>
 </tr>
 </tbody>
</table>


#### New Strings Localizations

<table>
<thead>
 <tr>
 <th>New Strings Localization</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>conversationEmptyState</td>
 <td>There are currently no conversations at this time</td>
 </tr>
 </tbody>
</table>


#### New parameters

##### Branding and configuration parameters

**Type:** Parameters

**Available to all customers?** Yes

The Mobile App Messaging SDK v3.1 exposes additional branding configuration parameters.

The new parameters may control text, padding of conversation UI elements and more.

<table>
<thead>
 <tr>
 <th>Parameter name and default value</th>
 <th>Description</th>
 <th>Image</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>LPConfig → csatYesNoButtonsCornerRadius: Double = 25</td>
 <td>Makes CSAT Yes/No buttons corner radiuses customizable (through LPConfig).</td>
 <td><img src="img/ios_csat_yesno_buttons_radius.png"></td>
 </tr>
 <tr>
 <td>LPConfig → messageStatusNumericTimestampOnly: Bool = false</td>
 <td>When false (default), timestamps will display information relative to when sent/distributed/read (e.g. 'sent 5 minutes ago'. When true, will show as numeric only (e.g. '11:32').</td>
 <td><img src="img/ios_numeric_timestamp.png"></td>
 </tr>
 <tr>
 <td>LPConfig → photoSharingMenuCameraImage: UIImage </td>
 <td>Custom Camera image in the photo sharing menu.</td>
 <td><img src="img/ios_camera_button.png"></td>
 </tr>
 <tr>
 <td>LPConfig → photoSharingMenuLibraryImage: UIImage </td>
 <td>Custom Library image in the photo sharing menu.</td>
 <td><img src="img/ios_gallery_button.png"></td>
 </tr>
 <tr>
 <td>LPConfig → photoSharingOpenMenuImageButton: UIImage</td>
 <td>Photo sharing open menu custom button.</td>
 <td><img src="img/ios_attach_button.png"></td>
 </tr>
 <tr>
 <td>LPConfig → photoSharingCloseMenuImageButton: UIImage</td>
 <td>Photo sharing close menu custom button</td>
 <td><img src="img/ios_ps_close_button.png"></td>
 </tr>
 <tr>
 <td>LPConfig → conversationEmptyStateTextColor: UIColor() = black</td>
 <td>Color code for the empty state label</td>
 <td><img src="img/ios_empty_state_no_conversations.png"></td>
 </tr>
 </tbody>
</table>


**Key for items as follows:**

**Backend update:** This feature requires an update to the backend.

**Backend enablement**: This feature requires items to be toggled on in the backend.

**Backend configuration**: This feature requires configuration in the backend.

**SDK enablement:** This feature requires items to be toggled on in the SDK.

**SDK configuration**: This features requires items to be configured in the SDK.

### iOS Messaging SDK - Version 3.0

#### New functionalities

##### Certificate Pinning

**Type:** Security Feature

**Available to all customers?** No. Contact support for more details.

Certificate Pinning allows increased security on top of the commonly used SSL protocol for mobile apps. It assists to prevent certificate hijacks and mitigates implications from compromised certificate authorities. By using Certificate Pinning, apps have an additional validation of the server’s certificate.

The object certPinningPublicKeys was added to the object LPAuthenticationParams.
**Please note**: using the new object without completing the onborading process will result in failures while trying to communicate with LivePerson’s servers.

The following additional conditions and configurations are required:

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Yes | Yes | Yes | Yes | Yes |


##### XCode 9.2 and Swift 4.0.2 Support

**Type:** Developer Experience Feature

**Available to all customers?** Yes

The Mobile App Messaging SDK v3.0 was built and certified with XCode 9.2 in Swift 4.0.2 and also supports XCode 9.1.

#### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

<table>
<thead>
 <tr>
 <th></th>
 <th colspan="4">Operating system</th>
 </tr>
 <tr>
 <th>Model</th>
 <th>iOS 9.x</th>
 <th>iOS 10.x</th>
 <th>iOS 11.x</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>iPhone 8</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 </tr>
 <tr>
 <td>iPhone 8+</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 </tr>
 <tr>
 <td>iPhone X</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 </tr>
 </tbody>
</table>

A full list of supported and certified devices can be found in the [LiveEngage System Requirements document](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf).

**Key for items as follows:**

**Backend update:** This feature requires an update to the backend.

**Backend enablement**: This feature requires items to be toggled on in the backend.

**Backend configuration**: This feature requires configuration in the backend.

**SDK enablement:** This feature requires items to be toggled on in the SDK.

**SDK configuration**: This features requires items to be configured in the SDK.


### iOS Messaging SDK - Version 2.9.4

**Version 2.9.4 planned roll-out: December 21th 2017**

#### Fixed issue

#### Symptom:
For iOS 11, the app might crash when closing the conversation screen while receiving new messages.

#### Fix:
Improved memory allocation for conversation screen

#### XCode 9.2 and Swift 4.0.2 Support

**Type:** Developer Experience Feature

### iOS Messaging SDK - Version 2.9.3

**Version 2.9.3 planned roll-out: November 29th 2017**

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.1.pdf){:target="_blank"}

These are the main feature releases available in the **Mobile App Messaging SDK version 2.9 for iOS**.

#### Accessibility Updates

**Bug: Structured content focus for new messages**

_Symptom_:

When consumer has opened the conversation screen, connectivity bar shows there is no connection and there is no connectivity to the messaging service. This symptom will occur in the following case:

Brands which implement UIDevice Extension with 'var modelName: String' that returns device name string containing white spaces.

_Fix_:

SDK will now trim the whitespace of the device modelName and connectivity will work as expected.

**Bug: Structured content image resolution**

_Symptom_:

UI overlaps of time stamp label over the message when sending a Link Preview message, while setting 'bubbleTimestampTopPadding' with a value.

_Fix_:

Overlap will no longer occur due to backend fixes.




### iOS Messaging SDK - Version 2.9.0

**Version 2.9 planned roll-out: November 12th 2017**

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.1.pdf){:target="_blank"}

These are the main feature releases available in the **Mobile App Messaging SDK version 2.9 for iOS**.

#### New functionalities

##### XCode 9.1 and Swift 4.0.2 Support

**Type:** Developer Experience Feature

**Available to all customers?** Yes

The Mobile App Messaging SDK v2.9 was built and certified with XCode 9.1 in Swift 4.0.2.

Customers wishing to use the Mobile App Messaging SDK v2.9 must upgrade their XCode to 9.1 and their Swift version to 4.0.2.

##### iPhone X Device Support

**Type:** Device Support Feature

**Available to all customers?** Yes

The Mobile App Messaging SDK v2.9 is now supported on the iPhone X.

#### New parameters

##### Branding and configuration parameters

**Type:** Parameters

**Available to all customers?** Yes

The Mobile App Messaging SDK v2.9 exposes additional branding configuration parameters.

New parameters may control text, padding of conversation UI elements and more.

<table>
<thead>
 <tr>
   <th>Parameter name and default value</th>
   <th>Description</th>
   <th>Image</th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>customFontNameDateSeparator: String?</td>
 <td>Custom font for Timestamp. Fonts that are not part of the iOS families must be defined in the App's Info.plist.</td>
 <td><img src="img/fontname.png" alt="fontname"></td>
 </tr>
 <tr>
 <td>dateSeparatorFontSize : UIFontTextStyle = .footnote</td>
 <td>Defines the Date Separator font text style.</td>
 <td><img src="img/fontsize.png" alt="fontsize"></td>
 </tr>
 <tr>
 <td>dateSeparatorTopPadding: Float = 0.0</td>
 <td>Defines the Date Separator top spacing.</td>
 <td><img src="img/toppadding.png" alt="toppadding"></td>
 </tr>
 <tr>
 <td>dateSeparatorBottomPadding: Float = 0.0</td>
 <td>Defines the Date Separator bottom spacing.</td>
 <td><img src="img/bottompadding.png" alt="bottompadding"></td>
 </tr>
 <tr>
 <td>remoteUserAvatarLeadingPadding: Float = 8.0</td>
 <td>Defines the remote avatar leading spacing (from the left edge to the avatar).</td>
 <td><img src="img/leadingpadding.png" alt="leadingpadding"></td>
 </tr>
 <tr>
 <td>remoteUserAvatarTrailingPadding: Float = 8.0</td>
 <td>Defines the remote avatar Trailing spacing (from the avatar to the bubble).</td>
 <td><img src="img/trailingpadding.png" alt="trailingpadding"></td>
 </tr>
 <tr>
 <td>bubbleTopPadding: Float = 10.0</td>
 <td>Defines the bubble top spacing.</td>
 <td><img src="img/bubbletoppadding.png" alt="bubbleTopPadding"></td>
 </tr>
 <tr>
 <td>bubbleBottomPadding: Float = 10.0</td>
 <td>Defines the bubble bottom spacing.</td>
 <td><img src="img/bubblebottompadding.png" alt="bubbleBottomPadding"></td>
 </tr>
 <tr>
 <td>bubbleLeadingPadding: Float = 10.0</td>
 <td>Defines the bubble leading spacing.</td>
 <td><img src="img/bubbleleadingpadding.png" alt="bubbleLeadingPadding"></td>
 </tr>
 <tr>
 <td>bubbleTrailingPadding: Float = 10.0</td>
 <td>Defines the bubble trailing spacing.</td>
 <td><img src="img/bubbletrailingpadding.png" alt="bubbleTrailingPadding"></td>
 </tr>
 <tr>
 <td>inputTextViewTopBorderColor: UIColor = UIColor.clear</td>
 <td>Input TextView top border color. The default color is clear.</td>
 <td></td>
 </tr>
 <tr>
 <td>conversationSeparatorFontSize: UIFontTextStyle = .caption1</td>
 <td>Defines the Conversation Closed separator font size.</td>
 <td><img src="img/separatorfont.png" alt="separatorfont"></td>
 </tr>
 <tr>
 <td>conversationSeparatorFontName: String?</td>
 <td>Custom font name for Conversation Closed separator. Fonts that are not part of the iOS families must be defined in App's Info.plist.</td>
 <td><img src="img/separatorfontname.png" alt="separatorfontname"></td>
 </tr>
 <tr>
 <td>conversationSeparatorTopPadding: Float = 5.0</td>
 <td>Defines the Conversation Closed Separator Top spacing.</td>
 <td><img src="img/separatortoppadding.png" alt="separatortoppadding"></td>
 </tr>
 <tr>
 <td>conversationSeparatorBottomPadding: Float = 7.0</td>
 <td>Defines the Conversation Closed label to separator line spacing.</td>
 <td><img src="img/separatorbottompadding.png" alt="separatorbottompadding"></td>
 </tr>
 <tr>
 <td>conversationSeparatorViewBottomPadding: Float = 7.0</td>
 <td>Defines the conversation separator view bottom spacing.</td>
 <td><img src="img/viewbottompadding.png" alt="viewbottompadding"></td>
 </tr>
 <tr>
 <td>customRefreshControllerImagesArray:Array&lt;UIImage&gt;? = nil</td>
 <td>Array of images for creating the custom refresh controller. The controller will loop the images; two or more images are required for the array to take effect.</td>
 <td><img src="img/imagesarray.png" alt="imagesarray"></td>
 </tr>
 <tr>
 <td>customRefreshControllerAnimationSpeed:Float = 2</td>
 <td>Custom refresh controller speed animation; defines the full images loop time. A smaller value will create a higher speed animation.</td>
 <td></td>
 </tr>
 <tr>
 <td>bubbleTimestampTopPadding: Float = 2.0</td>
 <td>Defines the bubble Timestamp top spacing.</td>
 <td><img src="img/timestamptoppadding.png" alt="timestamptoppadding"></td>
 </tr>
 <tr>
 <td>bubbleTimestampBottomPadding: Float = 5.0</td>
 <td>Defines the bubble Timestamp bottom spacing.</td>
 <td><img src="img/timestampbottompadding.png" alt="timestampbottompadding"></td>
 </tr>
 </tbody>
</table>

### iOS Messaging SDK - Version 2.8.0

**Version 2.8 planned roll-out: September 27th 2017**

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.0.pdf){:target="_blank"}

These are the main feature releases available in the **Mobile App Messaging SDK version 2.8 for iOS**.

#### Structured content enablement (GA in SDK)

**Type:** Feature

**Available to all customers?** No - early adopters only.

_The beta version was released in v2.7 (for a full description, refer to the [v2.7 release notes](https://s3-eu-west-1.amazonaws.com/ce-sr/Release+Notes/In-appSDKv2.7_ReleaseNotes-iOS.pdf)). The SDK delivers structured content enablement only; the feature will be made fully productive in October. In v2.8 the feature is enabled by default in the SDK._

The dictionary of template elements can be found [here](https://developers.liveperson.com/structured-content-templates.html).

**What does enablement mean?**

Until rollout is complete, the structured content capability in SDK v2.7 was flagged as a Beta feature. The feature has an enablement toggle in the SDK which was disabled by default.

In SDK v2.8, it is enabled by default.

The toggle may be switched on or off as part of the SDK implementation within the host app, however it is highly recommended not to release the SDK in the host app with structured content enabled until end to end flow has been fully tested on the brand’s account.

**Inapp Messaging SDK toggle** -

* iOS - enableStructuredContent


**Related properties**: Structured content

The following additional conditions and configurations are required:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>

#### Automatic messages for messaging

**Type:** Feature

**Available to all customers?** No - early adopters only.

**Description**

Automatic Messages (AKA System Messages) are predefined messages about events that occur in the conversation and are sent to the consumer as the events occur. Their purpose is to gain the consumer’s trust in the messaging channel, by setting expectations and giving the consumer visibility over the agent’s availability.

Auto messages are triggered upon specific events that are detected by the system (e.g. the consumer opens a new conversation, the conversation is transferred to another agent, the time to respond is updated, etc.). When the auto messages are sent, they are displayed to the consumer and the agent within the conversation transcript, and they also appear in the conversation’s history both on the consumer’s side and in LE.

**Notes**:

* Messages are supported in all LiveEngage languages.

* The content of each message can be edited by the brand.

* Skill variation is supported, including enabling/disabling the messages for each skill.

* Certain messages can have different parameters, such as the time the conversation is in the queue before the message is sent.

* Dynamic text can be added to the messages, which will be replaced with a runtime value, such as agent name.

* Auto messages do not affect whom the conversation is pending, nor the time to respond.

* They are filtered out of the reports by default (unless manually included).

The following auto messages are supported:

* New conversations

 * A consumer opens a conversation during working hours

 * A consumer opens a conversation for the first time ever, during working hours

* Off hours

 * A consumer opens a conversation during off hours

 * A consumer opens a conversation for the first time ever, during off hours

 * The consumer sends the first message during off hours in an open conversation

* Time to respond

 * The response time is updated manually by the agent

 * The consumer marks the conversation as urgent

 * The consumer dismisses the conversation urgent state

* Consumer/Agent non-responsive

 * The consumer has not responded for X seconds/minutes/hours

 * The agent did not respond for X seconds/minutes/hours

 * Conversation is in queue for X mins/hours

* Transfers and connection to agents

 * The conversation is transferred to a different skill

 * The agent returns the conversation to the queue

 * The consumer is connected to an agent

* Conversation participants

 * Agent manager joins the conversation 	

 * The joined agent manager leaves the conversation 	

**How to enable auto messages**

Auto messages will be enabled for early adopters upon release. Please contact your account manager for more information.

**IMPORTANT NOTES**:

When auto messages are enabled, they are all enabled by default and all have the default text. It is advised to review them immediately and modify them to suit the brand’s needs.

Once auto messages are enabled, the SDK does not show toast messages which were presented in the past.

The following messages remain in the SDK :

* Introduction message from the consumer’s first ever conversation. Make sure you do not have a collision between that message and auto messages.

* Conversation resolved message

The following additional conditions and configurations are required:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>


#### Unread messages badge

When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon or other marker to show unread messages.

The unread messages number is passed to the SDK through LP Push service with every push.

**IMPORTANT NOTES :**

A push is sent to the last device which was registered to the LP push service, meaning that the unread messages indication can be fetched by only one device.

* If the user is using two devices in parallel, the device that does not receive push events will receive updates of the unread message indicator only once that a message has been sent from that device and the push arrives to it.

* In addition, if a conversation is ongoing in web messaging, then the push will not arrive to the device, since the web-socket is already open.

**Getting the unread message badge counter**

This API method uses a threshold mechanism of 10 seconds from the last time the badge retrieved from the server. If calling this method within less than 10 seconds, the counter will be returned from cache otherwise, it will be fetched again with new data.
​ ​
**Parameters**:

* conversationQuery: conversationQuery: used to identify the related brand

* completion: called once the operation ends successfully

* failure: called once the operation failed

**Related properties**: Unread messages badge

**Related API**: Unread messages badge API

The following additional conditions and configurations are required*:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>Yes</td>
 <td>No</td>
 <td>No</td>
 <td>No</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>


#### Set icon for "Send" button

Brands are now able to choose and configure their own icon for the 'Send’ button for Mobile App Messaging conversations.

**How to configure the send button icon:**

1. Ensure the SDK is set to use an icon and not text for the Send button (**isSendMessageButtonInTextMode = false**)

2. Set the icon - sendButtonImage: UIImage

**IMPORTANT NOTES**:

The chosen icon must adhere to [Apple’s guidelines for custom icons](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/custom-icons/).

**Related properties:** Send button

The following additional conditions and configurations are required*:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>


#### iOS11, XCode 9 and Swift 4/Swift 3.2 Certification, and removal of iOS8 from supported list

The Mobile App Messaging SDK v.28 was built and certified with XCode 9 in Swift 4/ Swift 3.2 for iOS11.

The following devices were certified with iOS11:

* iPhone 6

* iPhone 7

With this new certification, support for iOS8 was removed.

The following additional conditions and configurations are required*:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>


#### Customizable bubble corners

The radius of the corners of message bubbles can now be configured by the brand. There are 8 different parameters to be configured: the 4 corners of the agent message bubble and the 4 corners of the consumer message bubble.

The corners of the scroll button may also be set.

**Related properties**: Bubble corners

The following additional conditions and configurations are required*:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>


#### Reconnect attempt termination callback

The new callback will be invoked when all connection retries have failed:

**Related callback**: Reconnect attempt termination callback

The following additional conditions and configurations are required*:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>


#### Logout - add completion closure/failure

This method is a destructive method that is typically used to clean a user’s data before a second user logs into the same device or simply to log the current user out.

The method carried out the following steps:

* Unregisters from the push notification service.

* Clears all SDK persistent data.

* Cleans running operations (see [destruct](consumer-experience-ios-sdk-destruct.html){:target="_blank"}).

* Invokes destruct() method

Parameters:

* completion: a completion block for successful logout. The completion block will be invoked only if all logout steps succeeded.

* failure: a failure block with a specified error for logout failure. The failure block will be invoked if at least one of the logout steps has failed.

**Related API:** [Logout API](#heading=h.mr00ktj28srq)

The following additional conditions and configurations are required*:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>


#### New event - conversation interactions

The conversation interactions event communicates the Inactive time interval within seconds of the user last touching the screen. This interval applies to the scroll/messaging/action menus and any other general action on the conversation screen.

_Note_: If the screen is not active or the application is running in the background, the API will return -1.

Reset events:

* send message

* text edit change

* scroll

* viewDidAppear

* appWillEnterForeground

* tap

* long press

* WindowContainerViewController -

* menuButtonClicked

* WindowContainerViewController -

* customButtonClicked

Clear events:

* viewDidDisappear

* appWillEnterBackground

**Related API**: Conversation interactions API

The following additional conditions and configurations are required*:

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
</thead>
<tbody>
 <tr>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Yes</td>
 </tr>
</tbody>
</table>


* *Key for items as follows:*

**Backend update:** This feature requires an update to the backend.

**Backend enablement**: This feature requires items to be toggled on in the backend.

**Backend configuration**: This feature requires configuration in the backend.

**SDK enablement:** This feature requires items to be toggled on in the SDK.

**SDK configuration**: This features requires items to be configured in the SDK.

#### New properties

##### Structured content

The following properties for structured content can now be configured:

<table>
<thead>
 <tr>
 <th>Name</th>
 <th>Description</th>
 <th>Default</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>enableStrucutredContent: Bool</td>
 <td>Enable or Disable toggle for Structured Content feature in conversations.</td>
 <td>true</td>
 </tr>
 </tbody>
</table>


##### Bubble corners

The following properties for customizable bubble corners can now be configured:

<table>
<thead>
 <tr>
 <th>Name</th>
 <th>Description</th>
 <th>Default</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>userBubbleTopLeftCornerRadius:Float = 8</td>
 <td>Top left radius corner on the user bubble. Note (applies to all bubble corner properties): Setting the radius to a value greater than 0.0 causes the bubble's layer to begin drawing rounded corners on its background. This attribute affects the bubble's masking and it is recommended to use a corner radius which at maximum equals to half of the bubble's height. Setting a corner radius larger than half of the bubble's height will cause the text to cut visually.</td>
 <td>8</td>
 </tr>
 <tr>
 <td>userBubbleTopRightCornerRadius:Float = 8</td>
 <td>Top right radius corner on the user bubble</td>
 <td>8</td>
 </tr>
 <tr>
 <td>userBubbleBottomLeftCornerRadius:Float = 8</td>
 <td>Bottom left radius corner on the user bubble</td>
 <td>8</td>
 </tr>
 <tr>
 <td>userBubbleBottomRightCornerRadius:Float = 0</td>
 <td>Bottom right radius corner on the user bubble</td>
 <td>0</td>
 </tr>
 <tr>
 <td>remoteUserBubbleTopLeftCornerRadius:Float = 8</td>
 <td>Top left radius corner on the remote bubble</td>
 <td>8</td>
 </tr>
 <tr>
 <td>remoteUserBubbleTopRightCornerRadius:Float = 8</td>
 <td>Top right radius corner on the remote bubble</td>
 <td>8</td>
 </tr>
 <tr>
 <td>remoteUserBubbleBottomLeftCornerRadius:Float = 0</td>
 <td>Bottom left radius corner on the remote bubble</td>
 <td>0</td>
 </tr>
 <tr>
 <td>remoteUserBubbleBottomRightCornerRadius:Float = 8
</td>
 <td>Bottom right radius corner on the remote bubble</td>
 <td>8</td>
 </tr>
 </tbody>
</table>


#### Unread messages badge

The following properties for the unread messages badge can be configured:

<table>
<thead>
 <tr>
 <th>Name</th>
 <th>Description</th>
 <th>Default</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>unreadMessagesCornersRadius:Float = 8</td>
 <td>Sets the corner radius of the unread messages cell</td>
 <td>8</td>
 </tr>
 </tbody>
</table>


#### Scroll to bottom button

The following properties for the scroll to bottom button can now be configured:

<table>
<thead>
 <tr>
 <th>Name</th>
 <th>Description</th>
 <th>Default</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>scrollToBottomButtonCornerRadius:Float = 20</td>
 <td>Sets the top left and bottom left radius of the scroll to bottom button</td>
 <td>20</td>
 </tr>
 <tr>
 <td>scrollToBottomButtonBadgeCornerRadius:Float = 12</td>
 <td>Sets the radius of the scroll to bottom badge corners </td>
 <td>12</td>
 </tr>
 </tbody>
</table>


#### Send button

The following properties for the send button can now be configured:

<table>
<thead>
 <tr>
 <th>Name</th>
 <th>Description</th>
 <th>Default</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>sendButtonImage: UIImage</td>
 <td>Custom send button image in the conversation screen</td>
 <td>Arrow icon</td>
 </tr>
 </tbody>
</table>


#### Controller bubble

The following properties for the controller bubble can now be configured:

<table>
<thead>
 <tr>
 <th>Name</th>
 <th>Description</th>
 <th>Default</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>controllerBubbleTextColor : UIColor</td>
 <td>Color code for the text of the controller bubble</td>
 <td>UI color</td>
 </tr>
 </tbody>
</table>


#### New APIs

#### Conversation interactions API

**func getInactiveUserInteractionTimeInterval(_conversationQuery: ConversationParamProtocol) -> TimeInterval**

  - Returns: Inactive TimeInterval (Double)

#### Unread messages badge API

**func getUnreadMessagesCount(_conversationQuery: ConversationParamProtocol, completion: @escaping (_ badgeCounter: Int)->(), failure: @escaping (_ error:NSError)→())**

#### Logout API

**func logout(completion: @escaping ()->(), failure: @escaping (_ error: Error)→())**

####New Callbacks

##### Reconnect attempt termination callback

**func LPMessagingSDKConnectionRetriesFailed(_error: NSError)**

### iOS Messaging SDK - Version 2.7.0

These are the main feature releases available in the Mobile App Messaging SDK version 2.7 for iOS.
Version 2.7 roll-out: September 3rd 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.9.pdf){:target="_blank"}

#### New functionalities

##### Structured content enablement (Beta)

![StructuredContent](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/00-structuredContent.jpg)

**This version of the SDK delivers structured content enablement only; the feature will be made fully productive in October.*

**Description**
Structured message templates and elements, such as cards, images and deep linking buttons, turn a simple app interaction into a conversational user experience. They support a huge variety of messaging interactions and enable:

 - Clearer communication with bots, so commands are more easily
   understood.
 - The ability to trigger actions, such as deep-linking navigation,
   confirmations and transactions, directly from a    conversation
 - Improved sales through product promotion and    simplification of the
   purchasing process
 - An overall improved and more    efficient    service - just what
   consumers expect from messaging

**SDK 2.7 structured content capabilities**
Structured content capabilities are being gradually rolled out during September-October 2017.
Dedicated documentation for structured content will be published as part of the gradual rollout.

Mobile App Messaging SDK v2.7 has a structured content renderer for the following elements:

 - Image
 - Text
 - Button
 - Clicks (actions and meta-data)

Full list of elements dictionary will be published during the gradual rollout.

**What does enablement mean?**
Until rollout is complete, the structured content capability in SDK v2.7 is flagged as a Beta feature. The feature has an enablement toggle in the SDK which is disabled by default.

The toggle may be switched on as part of the SDK release within the host app, however it is highly recommended not to release the SDK in the host app with structured content enabled until end to end flow has been fully tested on the brand’s account.

In addition to structured content enablement, SDK v2.7 also has a few branding properties and one callback which can be configured and used.

###### Related properties: [Structured content](#new-properties)

###### Related strings: [Structured content](#new-strings)

The following additional conditions and configurations are required:*


| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Yes | Yes | Yes | Yes | Yes |

##### Tablet split-screen supportability
![TabletSplitScreen](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/01-tabletSplitScreen.jpg)
To ensure that consumers using tablets can connect with brands while enjoying the tablet experience, brands can enable tablet applications to host the conversation window within an application page, as a fragment for Android or viewcontroller for iOS.

Until now the SDK has provided support for a full page layout for messaging conversations. SDK 2.7 provides full support for conversations in a split-screen with viewcontroller / fragment modes. Brands can own the wrapper and host the conversation in split-screen.

A full list of supported and certified devices can be found in the LiveEngage System Requirements document.
The following additional conditions and configurations are required:*


| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |


##### Connectivity status bar
The connectivity status bar ensures consumers are always kept informed about the status of their connection, including:

 - Online/ Offline status
 - Attempting to connect to LiveEngage service
 - Continuing attempt to connect to LiveEngage service
 - Retry

###### Related properties: [Connectivity status bar](#new-properties)

###### Related strings: [Connectivity status bar](#new-strings)

The following additional conditions and configurations are required*:

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |

##### Secure form branding enhancements
To enable brands to adjust the secure form visuals to accurately reflect their brand experience, the following configurations are now available:

 - Secure form fonts
 - Bubble loader indicator color

The secure form is essentially a web page running in a web view, within the messaging conversation. As such, the web page may run predefined fonts which can be set by the SDK remotely.

By default, the font is set to Helvetica. However brands can choose from any of the fonts on the following secure form supported fonts list:

Aria, Arial, Arial Black, Bookman Old Style, Comic Sans MS, Courier New, Garamond, Georgia, Helvetica, HelveticaNeue, HelveticaNeue-Light, Impact, Lato, Lucida Console, Lucida Sans Unicode, MS Sans Serif, MS Serif, Palatino Linotype, Tahoma, Times New Roman, Trebuchet MS, Verdana.

![PCI](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/02-pciBranding.jpg)

###### Related properties: [Secure form branding enhancements](#new-properties)

The following additional conditions and configurations are required*:

 1. Secure forms should be configured and set on LE
 2. For fonts settings and bubble loading indicator :

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |


##### Message selection
When the consumer selects a message with a long tap, the background color of the message will change, to indicate to the user that it has been selected.
The color of the selected message can be configured by the brand.

###### Related properties: [Message selection branding](#new-properties)

The following additional conditions and configurations are required*:

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

##### App level DB encryption
To protect and encrypt conversation data in DB on the application level, Jailbroken iPhone conversation data in DB is now protected with an app level key for encryption. Every message is now encrypted and decrypted in RunTime.

The following additional conditions and configurations are required*:

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |

##### View-only mode
The SDK now offers a new RunTime mode in addition to the edit mode, known as view-only mode. View-only mode means consumers can see the full conversation, but the keyboard and text input area are not displayed. In this mode, new messages can arrive, but the consumer will not be able to respond.
This mode gives brands greater control over how consumers are able to use messaging within the brand’s app.
Future SDKs will support additional modes.

![ViewOnly](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/03-viewOnlyMode.jpg)

###### Related properties: [View-only mode](#new-properties)

The following additional conditions and configurations are required*:

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

##### Photo sharing permissions callback
When a consumer shares photos during a conversation, a banner appears asking them to grant permission for the app to have access to their camera and/ or photo library.

If the consumer refuses permission, the SDK sends a callback to the host app. Brands are then able to run a customized and branded banner with a second request for the consumer to grant the appropriate photo sharing permissions.

In order to present a custom banner, brands can create and present a new UIAlertViewController as well as a UIView, and present them on the SDK container ViewController or the root UIWindow.

![PCI](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/04-photoSharingCallback.jpg)

###### Related properties: [Photo sharing permissions callback](#new-properties)

The following additional conditions and configurations are required*:

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

**Key for items as follows**:

Backend update: This feature requires an update to the backend.
Backend enablement: This feature requires items to be toggled on in the backend.
Backend configuration: This feature requires configuration in the backend.
SDK enablement: This feature requires items to be toggled on in the SDK.
SDK configuration: This features requires items to be configured in the SDK.

#### New properties

##### Structured content

The following properties for structured content can now be configured:

| Name | Description | Default |
| ------------ | ------------ | ------------ |
| structuredContentBubbleBorderWidth: Double | Structured Content bubble border width in pixels. | 1.0 |
| structuredContentBubbleBorderColor: UIColor | Structured Content bubble border color. | #004dc9 |
| enableStrucutredContent: Bool | Enable or Disable toggle for Structured Content feature in conversations. | false |

##### Connectivity status bar
The following properties for the connectivity status bar can now be configured:

| Name | Description | Default |
| ------------ | ------------ | ------------ |
| connectionStatusConnectingBackgroundColor: UIColor | Color code for the background of the connectivity status bar while connecting. | #f5f5f5f2 |
| connectionStatusConnectingTextColor: UIColor | Color code for the text of the connectivity status bar while connecting. | #46474a |
| connectionStatusFailedToConnectBackgroundColor: UIColor | Color code for the background of the connectivity status bar when connection fails.| #000000cc |
 | connectionStatusFailedToConnectTextColor: UIColor | Color code for the text of the connectivity status bar when connection fails.| UIColor.white |

##### Secure form branding
The following properties for the secure form branding can now be configured:

| Name | Description | Default |
| ------------ | ------------ | ------------ |
| secureFormCustomFontName: String | Secure form custom font name to be used when the user is completing the secure form. If not set, the default font is Helvetica. | Helvetica |
| secureFormHideLogo: Bool | Hiding the secure form logo at the top of the form. | false |
| secureFormBubbleLoadingIndicatorColor: UIColor | Secure form loading indicator color when loading the form before opening.| #46474a |

##### Message selection branding
The following properties for the user avatar can now be configured:

| Name | Description | Default |
| ------------ | ------------ | ------------ |
| remoteUserBubbleLongPressOverlayColor: UIColor | Color of the remote user's bubble overlay when the user long taps the bubble. The overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, the overlay will disappear too. In order to show the overlay, “enableBubblesOverlayOnLongPress” should be true. | UIColor.black |
| remoteUserBubbleLongPressOverlayAlpha: Float | The Alpha of the remote user's bubble overlay when the user long taps the bubble. The value can be 0.0 - 1.0. The overlay will appear as long as the menu controller appears on the bubble. When the menu is dismissed, the overlay will disappear too. In order to show the overlay, enableBubblesOverlayOnLongPress should be true. | 0.3 |
| userBubbleLongPressOverlayColor: UIColor | Color code for the background of the visitor bubble.| UIColor.black |
| userBubbleLongPressOverlayAlpha: Float | Color code for the outline color.| 0.3 |

#### New classes
##### LPConversationViewParams
This class represents an object to determine the conversation mode, filter and container, for example, Container, Window or ViewOnly.

    class LPConversationViewParams: NSObject {
     	var conversationQuery: ConversationParamProtocol!
        var containerViewController: UIViewController? // nil = WindowMode
     	var isViewOnly = false
    }

##### LPAuthenticationParams
This class represents an object to determine the properties of an authenticated connection. If using an authenticated connection, this parameter must be passed: LPAuthenticationParams supports Code Flow login or Implicit Flow login. For Implicit Flow, pass 'jwt' parameter only. For Code Flow, pass 'authCode' and 'redirectURI' only.

    class LPAuthenticationParams: NSObject {
        var authenticationCode: String? // Code Flow authentication
        var jwt: String? // Implicit Flow authentication
     	var redirectURI: String? // Code Flow authentication
    }

#### New APIs
##### View-only API

    func showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)

This method is used to open the conversation screen.

##### New reconnect API

    func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams

When using SSO in an authenticated connection, an auth-code is passed to the SDK. The session in this case might have an expiration date. To reconnect with a new token, use the 'reconnect’ API and pass the new token.

This method reconnects the conversation's connection for a conversation query and reconnects open related webSockets and sync the conversation with its latest updates.

#### Deprecated APIs
```
  func showConversation(_ conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)
```
This method has been deprecated in SDK version 2.7.
Use showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)

```
    func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationCode: String)
```

This method was deprecated since SDK version 2.7.0.
Use reconnect(_ conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams]

#### New callbacks
##### Photo sharing permissions callback

    optional func LPMessagingSDKUserDeniedPermission(_ permissionType: LPPermissionTypes)

##### CSAT launched callback

       optional func LPMessagingSDKConversationCSATDidLoad(_ conversationID: String?)

##### CSAT skipped callback

       optional func LPMessagingSDKConversationCSATSkipped(_ conversationID: String?)

#### New strings
##### Structured content

    "newStructuredContentMessage" = "New message";
    "structuredContentAccessibilityMap" = "Map";

##### Connectivity status bar

    "connectionStatusBarConnecting" = "Connecting...";
    "connectionStatusBarStillConnecting" = "Still connecting...";
    "connectionStatusBarFailedToConnect" = "Failed to connect to the server.";


##### Accessibility

    "structuredContentAccessibilityMap" = "Map";


### iOS Messaging SDK - Version 2.5.0

These are the main feature releases available in the Mobile App Messaging SDK version 2.5 for iOS.

Version 2.5 roll-out: July 2nd 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.8.pdf){:target="_blank"}


##### New functionalities

##### Custom fonts

in order for consumers to enjoy the full brand experience while messaging in-app, brands are able to configure certified operating system fonts to appear in the messaging window. The fonts can be used across all elements, or only for the font within the message bubble.

The SDK also supports the use of a brand’s own customized fonts (although these are not certified).

Custom fonts are not supported for Native iOS properties such as:

* Activity mode - Overflow menu

* Popup messages

###### Related properties: Custom fonts

**The following additional conditions and configurations are required:**



| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

##### Tablet supportability
To ensure that consumers using tablets can connect with brands while enjoying the tablet experience, Mobile App Messaging is now supported on these devices, in window mode and activity mode, and in both portrait and landscape layouts.

All supported devices have gone through automation tests and all certified devices have gone through both automation and manual testing.

| Device | iOS 8.x | iOS 9.x | iOS 10.x |
| ------------ | ------------ | ------------ | ------------ |
| iPad 5 (2017) | N/A  | N/A | Certified |

A full list of supported and certified devices can be found in the LiveEngage System Requirements document.

##### Connectivity improvements
The user experience when connecting to the app has been significantly improved. When users first log-in, and during all subsequent attempts, the login process is now much smoother and faster.

In addition, other aspects such as feature and conversation history will also be more rapid as a result of the improvements.

The following additional conditions and configurations are required*:

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |

##### Default Agent Avatar
The SDK now offers brands a to use a default agent avatar of their own.

Related properties: User avatar

The following additional conditions and configurations are required*:

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

* Key for items as follows:
Backend update: This feature requires an update to the backend.
Backend enablement: This feature requires items to be toggled on in the backend.
Backend configuration: This feature requires configuration in the backend.
SDK enablement: This feature requires items to be toggled on in the SDK.
SDK configuration: This features requires items to be configured in the SDK.

##### Photo Sharing Button Colors
Brands now have the ability to set camera button colors in addition to the Send button colors.

Related properties: Photo sharing

The following additional conditions and configurations are required*:

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

#### New properties
The following properties of the secure form bubble on the agent side can now be configured:

##### Custom Fonts

| Name | Description  | Example | Default |
| ------------ | ------------ | ------------ | ------------ |
| customFontNameConversationFeed: String? = nil | The font name for all elements of the conversation feed. | ![CustomFonts](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/customFontConversationFeed.png) | Empty (use the device font) |
| customFontNameNonConversationFeed: String? = nil | The font name for all elements that are not in the conversation feed. | ![CustomFonts](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/customFontNonConvrsationFeed.png) | Empty (use the device font) |

##### Photo Sharing
Configuring Camera's button colors

| Name | Description | Example | Default |
| ------------ | ------------ | ------------ | ------------ |
| cameraButtonEnabledColor | The camera button color when in enabled mode in the conversation screen. The button will be presented only if the photo sharing feature is enabled. | ![CameraColor](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/cameraButtonEnabledColor.png) | #0362AC |
| cameraButtonDisabledColor | The camera button color when in disabled mode in the conversation screen. The button will be presented only if the photo sharing feature is enabled. | ![CameraColor](https://raw.githubusercontent.com/LP-Messaging/iOS-Messaging-SDK/gh-pages/images/cameraButtonEnabledColor.png) | #8B8A8F |

##### User Avatar

| Name  | Description  | Default  |
| ------------ | ------------ | ------------ |
| remoteUserDefaultAvatarImage | The default avatar image of the remote user. When assigned, this image will disable remoteUserAvatarBackgroundColor and remoteUserAvatarIconColor configurations. If the remote user has an avatar image in his profile, this attribute will be ignored. | nil |


## Mobile App Messaging SDK Version 2.3.1

Mobile App Messaging SDK v2.3.1 for iOS contains the following bug fix:

_Symptom_:

For one minute after the consumer had navigated away from the conversation window, any arriving messages would not display. They would only appear in the conversation window after the minute had passed.

_Fix_:
The following capability which was first introduced in v2.3 has been disabled to avoid this bug : “Presence enablement for photo sharing - beta*”.

### iOS Messaging SDK - Version 2.3.0

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.6.pdf){:target="_blank"}


These are the main feature releases available in the **Mobile App Messaging SDK version 2.3 for iOS**.


##### iOS Developer Enhancements

The LiveEngage in-app SDK is fully compatible with the most recent versions of Apple’s developer tools, XCode 8.3 and Swift 3.1.

The SDK is also compatible with [CocoaPods](https://cocoapods.org/){:target="_blank"}, a dependency manager for Swift and Objective-C Cocoa projects. CocoaPods has thousands of libraries and is used in over 2 million apps. It can help you scale your projects elegantly and provides a standard format for managing external libraries.

Note: Sample Apps are now using CocoaPods.

**CocoaPods Installation**

1.	Install cocoapods using the following command:

    $ gem install cocoapods

2.	Navigate to your project folder and init new pod using the following command:

    $ pod init

3.	Podfile should be created under your project’s folder.

    To integrate Liveperson Messaging SDK into your Xcode project using CocoaPods, specify it in your Podfile:

      source 'https://github.com/LivePersonInc/iOSPodSpecs.git'
        platform :ios, '8.0'
      	use_frameworks!

      	target '<Your Target Name>' do
      	    pod 'LPMessagingSDK'
      	end

4.	Run the following command in the terminal under your project folder:

    $ pod install

5.	In project settings, navigate to the Build Phases tab, and click the + button to add a New Run Script Phase. Add the script below in order to loop through the frameworks embedded in the application and remove unused architectures (used for the simulator). This step is a workaround for the [known iOS issue](http://www.openradar.me/radar?id=6409498411401216){:target="_blank"} and is necessary for archiving your app before publishing it to the App Store.

```shell
bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
```


##### Secure form for Mobile App Messaging


The secure form gives consumers the confidence to submit sensitive information, such as credit card data and social security numbers, while messaging in-app. The form also enables agents to safely carry out secure processes, such as payment, identification and authorisations.

The form can be tailored to match the Mobile App Messaging experience and has a time-out expiry, for added security.

_This feature requires consulting services support. For more information, please refer to the LiveEngage [secure form for messaging documentation](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Secure+form+for+messaging.pdf){:target="_blank"}_.

![Release Notes Secure Form](img/releasenotessecureform.png)

**Related properties**: Agent PCI bubble
**Related strings**: PCI


##### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

**iPhone**

|                 |    Operating system    |                 |
|-----------------|------------------------|-----------------|
|    Device       |    iOS 9.x             |    iOS 10.x     |
|    iPhone SE    |    Supported           |    Supported    |

**iPad**

|                       |    Operating system    |                 |                 |
|-----------------------|------------------------|-----------------|-----------------|
|    Device             |    iOS 8.x             |    iOS 9.x      |    iOS 10.x     |
|    Air 2 (2014)       |    Supported           |    Supported    |    Supported    |
|    Mini 4 (2015)      |    N/A                 |    Supported    |    Supported    |
|    iPad Pro (2016)    |    N/A                 |    Supported    |    Supported    |
|    iPad 5 (2017)      |    N/A                 |    N/A          |    Supported    |



##### Presence enablement for photo sharing - beta*
Presence enablement for photo sharing provides consumers with the ability to receive notifications while uploading a photo, whether they remain within the app or keep it running in the background.

The Web Socket remains open for a maximum of 60 seconds (using Background Task) when the app or conversation window moves to the background. This scenario is also applicable for non photo sharing flows.

*Photo sharing is a beta feature*.

### iOS Messaging SDK - Version 2.0

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.0.pdf){:target="_blank"}


These are the main feature releases available in the Mobile App Messaging SDK version 2.0.


##### Photo sharing for iOS and Android (Beta)

Consumers can now add photos directly into a messaging conversation, enabling them to describe an item and share it with their agent. Photo sharing supports multiple image sizes, and all shared images are logged in All Connections. This feature is available for Facebook messenger, web messaging, and Mobile App Messaging, on both Android and iOS.

![Release Notes Photo Sharing](img/releasenotessharing.png)


##### Accessibility for messaging


The Mobile App Messaging SDK now supports accessibility WCAG Level A and Level AA and CATO.

![Release Note Accessibility](img/releasenotesaccessibility.png)


##### Configure regular expressions to create hyperlinks in messages


Brands can now configure their own regular expressions to create hyperlinks which link directly to relevant pages or actions.

Expressions can be configured for the following commands:

*	Call
*	Email
*	URL

![Release Notes Hyperlinks](img/releasenotes1.png)


##### In-conversation shortcut to new messages


A shortcut can now be configured to appear within the conversation when there are new messages available. This saves the consumer time when scrolling within messaging conversations. Clicking on the shortcut navigates the visitor straight to the new messages so they can quickly and easily continue the conversation.

![Release Note In-conversation](img/releasenotesinconversation.png)


##### Set icon for send button


Brands now have the ability to replace the Send button in a messaging conversation with a paper plane (Android) or arrow (iOS). This icon can be customized to match the brand’s colors.


##### Link preview within conversation


When sending a link within an Mobile App Messaging conversation, a preview of the link page will display within the thread, giving the consumer a useful overview of the link content.


##### Ability to remove resolved divider in thread


Brands are now able to configure the removal of the resolved divider within a thread. The divider usually appears underneath the system message noting that the conversation has been resolved. This creates the feel of one ongoing, undisrupted conversation for consumers using messaging.

![Release Notes Ability to Remove](img/releasenotesability1.png) ![Release Notes Ability to Remove](img/releasenotesability2.png)


##### Add callback to SDK for agent picture click


In order to provide brands with greater insight into consumer activity within the messaging window, LiveEngage will provide a callback when a consumer clicks on the agent’s picture in the conversation. The brand can then decide what action they would like to take, for example opening an agent profile or enlarging the picture.

![Release Notes Add Callback](img/releasenotescallback.png)


##### Enhancement: Configure CSAT Timeout


Brands can now configure for how long a CSAT form will be displayed to the consumer after the messaging conversation is resolved by the agent. This applies to consumers who exit the conversation before it is resolved.

Brands can select from the following options:
-	The CSAT form never times out, and will be displayed to the consumer when they reopen the conversation regardless of the amount of time that has passed since the conversation was resolved.

-	The number of minutes from when the conversation was resolved to when the form will no longer be displayed.
