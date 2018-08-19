---
title: Release Notes
redirect_from:
  - consumer-experience-android-sdk-release-notes.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
order: 310
permalink: mobile-app-messaging-sdk-for-android-release-notes.html
indicator: messaging
---
<div class="subscribe">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/consumer-experience-android-sdk-release-notes.html&mode=web&css=post-content" target="_blank">click here to subscribe to any further changes!</a> When the Release Notes are updated, you'll get a notification straight to your email of choice!</div>
<br>
<br>

### Android Messaging SDK -  Version 3.2

**Version 3.2 release: July 1st 2018**

### Main Features

#### Audio Messaging

**Type:** Consumer Experience Feature  

**Available to all customers?** No. Please contact your account team.

Consumers are now able to send Audio messages to brands which makes the communication even easier.

In Audio messages the Brands can configure:

1. The maximum length of the message (15 seconds - 2 minutes long by default)

2. Enable/Disable the feature

3. Max stored audio messages on device

4. Tooltips text

#### Unauthenticated In-App Messaging

**Type:** Developer Experience Feature

**Available to all customers?** Yes

Brands can communicate with their consumers in an unauthenticated manner while being able to leverage additional LiveEngage capabilities such as Campaigns for Messaging.

Unauthenticated messaging allows brands to:

1. Easier & quicker on-boarding to LiveEngage

2. Having pre authentication messaging use cases, for example, assistance with password recovery

3. The ability to use Campaigns for Messaging while having unauthenticated conversations

#### Quick Replies

**Type:** Consumer Experience Feature

**Available to all customers?** Yes

Quick Replies enrich the consumer experience by using rich text interactions that guide the consumer throughout the conversation. The consumer is presented with number of brief answers that can be selected in order to navigate the conversation in the right path.

The quick replies can contain the same actions as Structured Content buttons:

1. Publish Text

2. Link

3. Navigation

As Quick Replies contain predefined values, it can dramatically improve communication with Bots and improve both consumer experience and operational efficiency.

#### Structured Content Carousel

**Type:** Consumer Experience Feature

**Available to all customers?** Yes

Structured Contend experience is enriched with the Carousel allowing more capabilities, more use cases and moving agents one step forward in being able to provide end to end assistance.

The Carousel consists of more than one card at a time, side by side and the consumer can swipe between cards.

#### New Devices Certification

The following devices are now also supported and/or certified to host our In-App Messaging SDK:

<table>
<thead>
  <tr>
    <th></th>
    <th>Operating system</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>Device</td>
    <td>v5.X (Lollipop)</td>
    <td>v6.X (Marshmallow)</td>
    <td>v7.X (Nougat)</td>
    <td>v8.X (Oreo)</td>
  </tr>
  <tr>
    <td>Xiaomi Mi 6</td>
    <td>---------</td>
    <td>---------</td>
    <td>---------</td>
    <td>Certified</td>
  </tr>
  <tr>
    <td>Galaxy S9*</td>
    <td>---------</td>
    <td>---------</td>
    <td>---------</td>
    <td>Certified</td>
  </tr>
</tbody>
</table>


* **Photo Sharing functionality is limited on the device. Only photos which were <strong>not</strong> taken by the device can be shared**

#### Experience and Branding Enhancements

**Type:** Consumer Experience Feature

**Available to all customers?** Yes

The SDK allows Brands to customize the SDK even more, giving a personal touch to their customers.

**Large Emojis**

When using Emojis in a conversation:

1. One Emoji - The Emoji will be enlarged to a Extra Large size

2. Two Emojis - The Emojis will be enlarged to a Large size

3. More than two Emojis or Emojis with text - The Emojis size will be small

**Conversation Window Background Image**

A new way for Brands to set their own background to conversation to add a more personal touch. As in fragment mode, LivePerson does not have control over the Activity which contains the conversation window fragment, this feature works only in Activity mode. In Fragment mode, brands can add the background picture on the Activity window.

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
    <td>public static void registerLPPusher(String brandId, String appId, String gcmToken,
LPAuthenticationParams authenticationParams,final ICallback<Void, Exception> registrationCompletedCallback)</td>
    <td>added authenticationParams parameter. If passed, this method will register immediately to LPPusher without needing to open the conversation view first (showConversation).
New registrationCompletedCallback callback parameter will be called back when registration to LPPusher is succeed or failed</td>
  </tr>
  <tr>
    <td>public static void getEngagement(Context context, @Nullable ArrayList&lt;LPMonitoringIdentity&gt; identities,                            MonitoringParams monitoringParams, EngagementCallback callback)</td>
    <td>List&lt;LPMonitoringIdentity&gt; replaced previous consumerId parameter - an array of identity objects of type LpMonitoringIdentity which includes the details of the consumer</td>
  </tr>
  <tr>
    <td>public static void sendSde(Context context, @NonNull ArrayList&lt;LPMonitoringIdentity&gt; identities,
@NonNull MonitoringParams monitoringParams, SdeCallback callback)</td>
    <td>List&lt;LPMonitoringIdentity&gt; replaced previous consumerId parameter - an array of identity objects of type LpMonitoringIdentity which includes the details of the consumer</td>
  </tr>
  <tr>
    <td>Class LPMonitoringIdentity</td>
    <td>A new class that contains String consumerId, String issuer to provide identities to the new getEngagement() and sendSde() methods (Monitoring API)</td>
  </tr>
  <tr>
    <td>LPAuthenticationType → Added new enum instance to LPAuthenticationParams</td>
    <td>This enum is used for determine the authentication type with the following options:
SIGN_UP (default) // old unauthenticated method. Will be deprecated on Jun 2019
UN_AUTH
AUTH</td>
  </tr>
</tbody>
</table>


#### Deprecated APIs

<table>
<thead>
  <tr>
    <th>API</th>
    <th>Description</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>@Deprecated
public static void registerLPPusher(String brandId, String appId, String gcmToken)</td>
    <td>See new APIs for the new API</td>
  </tr>
</tbody>
</table>


#### Removed APIs

<table>
<thead>
  <tr>
    <th>API</th>
    <th>Description</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>public static void getEngagement(Context context, @Nullable String consumerId
MonitoringParams monitoringParams, EngagementCallback callback)</td>
    <td></td>
  </tr>
  <tr>
    <td>public static void sendSde(Context context, @NonNull String consumerId,
@NonNull MonitoringParams monitoringParams, SdeCallback callback)</td>
    <td></td>
  </tr>
</tbody>
</table>


### Configurations

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
    <td>is_enable_enlarge_emojis</td>
    <td>When true, user and remote user messages containing one or two emojis will be enlarged in chat. Messages with one emoji will be the largest, two emojis will be large, and 3 or more will be displayed as normal text.</td>
    <td>false</td>
  </tr>
  <tr>
    <td>conversation_background</td>
    <td>Sets the conversation background image</td>
    <td></td>
  </tr>
</tbody>
</table>


#### Link Preview

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
    <td>agent_bubble_link_preview_background_stroke_color</td>
    <td>The border color of the link preview bubble sent by the agent.</td>
    <td>#EDEDED
</td>
  </tr>
  <tr>
    <td>agent_bubble_link_preview_background_stroke_width</td>
    <td>The border width of the link preview bubble sent by the agent.</td>
    <td>1dp
</td>
  </tr>
  <tr>
    <td>consumer_bubble_link_preview_background_stroke_color</td>
    <td>The border color of the link preview bubble sent by the consumer.</td>
    <td>#EDEDED</td>
  </tr>
  <tr>
    <td>consumer_bubble_link_preview_background_stroke_width</td>
    <td>The border width of the link preview bubble sent by the consumer.
</td>
    <td>1dp</td>
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
    <td>structured_content_bottom_right_radius</td>
    <td>Sets the radius of the bottom right corner radius of structured content card. </td>
    <td>0dp </td>
  </tr>
  <tr>
    <td>structured_content_top_left_radius</td>
    <td>Configuration for top left corner radius of structured content card. </td>
    <td>0dp </td>
  </tr>
  <tr>
    <td>structured_content_top_right_radius</td>
    <td>Configuration for top right corner radius of structured content card. </td>
    <td>0dp </td>
  </tr>
  <tr>
    <td>structured_content_bottom_left_radius</td>
    <td>Configuration for bottom left corner radius of structured content card. </td>
    <td>0dp </td>
  </tr>
  <tr>
    <td>structured_content_background_color
</td>
    <td>The background color of structured content card</td>
    <td>#FFFFFF</td>
  </tr>
  <tr>
    <td>conversation_background
</td>
    <td>The background image of conversation screen</td>
    <td>No value</td>
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
    <td>lp_record_max_time_seconds</td>
    <td>Maximum voice recording time in seconds</td>
    <td>120 seconds</td>
  </tr>
  <tr>
    <td>max_number_stored_voice_files</td>
    <td>Maximum number of voice files stored on the device</td>
    <td>20 messages</td>
  </tr>
  <tr>
    <td>enable_voice_sharing</td>
    <td>Enable/disable voice sharing</td>
    <td>false</td>
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
    <td>lpui_quick_reply_button_vertical_padding</td>
    <td>Quick Replies button padding above and below the button text</td>
    <td>12dp</td>
  </tr>
  <tr>
    <td>lpui_quick_reply_button_horizontal_padding</td>
    <td>Quick Replies button padding on right and left of button text</td>
    <td>12dp</td>
  </tr>
  <tr>
    <td>lpui_quick_reply_button_vertical_margin</td>
    <td>Quick Replies button margin below</td>
    <td>12dp</td>
  </tr>
  <tr>
    <td>lpui_quick_reply_button_horizontal_margin</td>
    <td>Quick Replies button margin to the right</td>
    <td>8dp</td>
  </tr>
  <tr>
    <td>lpui_quick_reply_button_border_width</td>
    <td>Quick Replies button border width</td>
    <td>1dp</td>
  </tr>
</tbody>
</table>


#### Deprecated Configurations

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
    <td>enter_message_divider_visible</td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>


### Strings Localization

#### Audio Messaging

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Default text</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>lp_accessibility_voice</td>
    <td>Accessibility on the mic button</td>
    <td>"Voice"</td>
  </tr>
  <tr>
    <td>lp_mic_tooltip_long_press</td>
    <td>Tooltip shown when short tapping the mic button. </td>
    <td>“Long tap to record”</td>
  </tr>
  <tr>
    <td>lp_mic_tooltip_release</td>
    <td>Tooltip shown when keeping mic tapped.</td>
    <td>“Release for recording”</td>
  </tr>
  <tr>
    <td>lp_mic_tooltip_max_recording</td>
    <td>Tooltip shown when the maximum recording time reached.</td>
    <td>“Recording limit has been reached, click to send”</td>
  </tr>
</tbody>
</table>


#### Unauthenticated In-App Messaging

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Default text</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>lp_new_unauth_user_dialog_title
</td>
    <td>The title of the presented dialog when the identity is expired.</td>
    <td>"New Conversation"</td>
  </tr>
  <tr>
    <td>lp_new_unauth_user_dialog_message
</td>
    <td>The body of the presented dialog when the identity is expired.</td>
    <td>“Hi there! As we haven't seen you for a while, we're opening a new conversation for you”</td>
  </tr>
  <tr>
    <td>lp_new_unauth_user_dialog_positive_button
</td>
    <td>The button of the presented dialog when the identity is expired.</td>
    <td>“Ok”</td>
  </tr>
</tbody>
</table>


#### Quick Replies

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Default text</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>lpmessaging_ui_quick_replies_section</td>
    <td>Accessibility string when hovering on the Quick Replies control</td>
    <td></td>
  </tr>
  <tr>
    <td>lpmessaging_ui_quick_replies_button_content_description
</td>
    <td>Accessibility string when hovering on the Quick Replies button
</td>
    <td></td>
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

### Android Messaging SDK -  Version 3.1

These are the main feature releases available in the **Mobile App Messaging SDK version 3.1 for Android**.

**Version 3.1 planned roll-out: March 18h 2018**

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.4.pdf){:target="_blank"}

#### New functionalities

##### Campaigns for Messaging - Monitoring APIs

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
 <th> Description </th>
  </tr>
 </thead>
 <tbody>
 <tr>
 <td>Added to Liveperson.initialize() →
InitLivePersonProperties contains new MonitoringInitParams object</td>
 <td>Added new optional MonitoringInitParams object. Brands who wish to use Monitoring capabilities & campaigns should add the required parameters.
The SDK can be initialized once without MonitoringInitParams and then have another initialize call using these params.
</td>
 </tr>
 <tr>
 <td>CampaignInfo was added to ConversationViewParams (used in showConversation() and getConversationFragment())
</td>
 <td>Added new optional CampaignInfo object to be able to pass a new campaign information to conversation.
Campaign includes Engagement info which allows to control the consumer's routing.</td>
 </tr>
 <tr>
 <td>New BadArgumentException was added.
</td>
 <td>CampaignInfo has three mandatory members: campaignId, engagementId and engagementContextId. If constructing CampaignInfo with one of them null or empty BadArgumentException is thrown.</td>
 </tr>
 <tr>
 <td>getEngagement(Context context, @Nullable String consumerId, MonitoringParams monitoringParams, EngagementCallback callback)</td>
 <td>Use this API to get an engagement for a consumer in an appInstallationId context. When calculating eligibility the decision is based on the SDEs and other parameters. Based on messaging campaign concept
As an optional parameter, you can pass MontoringParams which includes PageId, Entry Points and Engagement Attributes for routing the conversation.
- Parameters:
      - context: application context
      - consumerID: an optional brand app consumer ID to get the engagement for
      - monitoringParams: an instance of includes optional PageId, JSONArray of Entry Points and a JSONArray of Engagement Attributes
      - EngagementCallback: operation callback:
    onSuccess() response with LPEngagementResponse that contains pageId, sessionId, visitorId and engagementDetailsList
   onError() response with the MonitoringErrorType</td>
 </tr>
 <tr>
 <td>sendSde(Context context, @NonNull String consumerId, @NonNull MonitoringParams monitoringParams, SdeCallback callback)</td>
 <td>Use this API to report an engagement attributes (SDEs) for a consumer in an appInstallationId context.
- Parameters:
      - context: application context
      - consumerID: brand app consumer ID to get the engagement for
      - monitoringParams: an instance of LPMonitoringParams includes optional Array of Entry Points and an optional dictionary of Engagement Attributes. Additional optional parameter is PageID which is used for Page identification for sending events on the current engagement. PageID will be received in LPSdeResponse and in LPtEngagementResponse
    - SdeCallback: operation callback:
    onSuccess() response with LPSdeResponse that contains pageId, sessionId and visitorId
   onError() response with the MonitoringErrorType
</td>
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
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
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
 <th> Description </th>
  </tr>
 </thead>
 <tbody>
 <tr>
 <td>ConversationViewParams -> mHistoryConversationsStateToDisplay</td>
 <td>Allows to control which conversation will be presented when opening the conversation screen, by status (open or closed).
(mHistoryConversationsStateToDisplay is of type LPConversationsHistoryStateToDisplay ENUM which has the following values:
OPEN, CLOSE , ALL)</td>
 </tr>
 <tr>
 <td>ConversationViewParams -> mHistoryConversationMaxDaysType</td>
 <td>When using mHistoryConversationsMaxDays, LPConversationHistoryMaxDaysDateType will decide if to filter by the conversations' start date or end date.
When not providing a value, startConversationDate will be the default.
(mHistoryConversationMaxDaysType is of type LPConversationHistoryMaxDaysDateType ENUM which has the following values:
startConversationDate, endConversationDate)</td>
 </tr>
 <tr>
 <td>ConversationViewParams -> mHistoryConversationsMaxDays</td>
 <td>Allows to control the amount of conversations history that will be presented when opening the conversation screen by days.
(Default is -1 (no limit))</td>
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
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 </tr>
 </tbody>
</table>


#### New Strings Localizations

<table>
<thead>
 <tr>
 <th>New Strings Localization</th>
 <th> Description </th>
  </tr>
 </thead>
 <tbody>
 <tr>
 <td>lp_history_control_api_empty_state</td>
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
 <th>Name</th>
 <th>Description</th>
 <th>Default</th>
 <th>Screenshot</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>&lt;color name="lp_brand_header_text_color"&gt;@android:color/black&lt;/color&gt;
</td>
 <td>The configuration to change the Brand name / Agent name text color in the header
</td>
 <td>Black</td>
 <td><img src="img/android_brandname_color.png"></td>
 </tr>
 <tr>
 <td>&lt;bool name="show_agent_typing_in_message_bubble"&gt;false&lt;/bool&gt;</td>
 <td>True - the agent-is-typing-indicator will appear in "temporary" bubble. This style is available in both fragment and activity modes.
False - the agent-is-typing-indicator will appear in the status bar (under the agent name). This style is available only in activity mode.
This configuration is available as long as the announce_agent_typing configuration is on (set as true).
</td>
 <td>false
</td>
<td><img src="img/android_agent_typing_bubble.png"></td>
 </tr>
 <tr>
 <td>lp_messaging_ui_typing_animation_frames.xml
</td>
 <td>In case the brand wants to present a different animation / different image resources. They may create a file named "lp_messaging_ui_typing_animation_frames.xml", this will override the SDK's original animation.</td>
 <td>LivePerson animation</td>
 <td><img src="img/android_custom_agent_typing_bubble.png.png"></td>
 </tr>
 <tr>
 <td>lpinfra_ui_ic_send_disabled.xml</td>
 <td>In case the brand wants to display a different drawable to represent sending a message.
The brand create a drawable file named "lpinfra_ui_ic_send_disabled.xml" which will override the SDK's default drawable.
</td>
 <td>The default image is the one from the screenshot to the to the right.
Please notice that in order to display an image instead of a text the boolean
use_send_image_button
should be set to true</td>
 <td><img src="img/android_disabled_send_button.png"></td>
 </tr>
 <tr>
 <td>lpmessaging_ui_ic_gallery.xml
</td>
 <td> In order to replace the existing add image from library button (photo sharing). The brand may create a drawable file named "lpmessaging_ui_ic_gallery.xml" which will override the SDK's default drawable.</td>
 <td>LivePerson image</td>
 <td><img src="img/android_gallery_button.png"></td>
 </tr>
 <tr>
 <td>lpmessaging_ui_ic_camera.xml
</td>
 <td>In Order to replace the add image from camera button (photo sharing), the brand may create a drawable file named "lpmessaging_ui_ic_camera.xml" which will override the SDK's default drawable.
</td>
 <td>LivePerson image</td>
 <td><img src="img/android_camera_button.png"></td>
 </tr>
 <tr>
 <td>lpinfra_ui_ic_attach.xml
</td>
 <td>In case the brand wants to display a different drawable for opening the photo-sharing menu tab. They may create a drawable file named "lpinfra_ui_ic_attach.xml" which will override the SDK's default drawable.
</td>
 <td>LivePerson image</td>
 <td><img src="img/android_attach_button.png"></td>
 </tr>
 <tr>
 <td>lpinfra_ui_ic_close.xml</td>
 <td>In case the brand wants to display a different drawable for closing the photo-sharing menu tab. They may create a drawable file named "lpinfra_ui_ic_close.xml" which will override the SDK's default drawable.</td>
 <td>LivePerson image</td>
 <td><img src="img/android_ps_close_button.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="button_corner_radius"&gt;30dp&lt;/dimen&gt;
</td>
 <td>Makes CSAT Yes/No and Submit buttons corner radiuses customizable (through dimens.xml).</td>
 <td>30dp</td>
 <td><img src="img/android_csat_yesno_radius.png"></td>
 </tr>
 </tbody>
</table>


#### Additional Features

##### Adding Support for Android O

Mobile App Messaging SDK v3.1 can be integrated into apps running on Android O (api 26 & api 27)

##### Wrapping Text in Edit Text Box

Parity with iOS in the Edit Text box.  The max lines is declared at 3. meaning when the text suppresses the length fit for 3 lines the first line will be hidden.

##### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

<table>
<thead>
 <tr>
 <th colspan="5">Operating system</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Device</td>
 <td>v5.X (Lollipop)</td>
 <td>v6.X (Marshmallow)</td>
 <td>v7.X (Nougat)</td>
 <td>v8.X (Oreo)</td>
 </tr>
 <tr>
 <td>Pixel XL</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Supported</td>
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


**Mobile App Messaging SDK version 3.0 **.

#### New functionalities

##### Certificate Pinning

**Type:** Security Feature

**Available to all customers?** No. Contact support for more details.

Certificate Pinning allows increased security on top of the commonly used SSL protocol for mobile apps. It assists to prevent certificate hijacks and mitigates implications from compromised certificate authorities. By using Certificate Pinning, apps have an additional validation of the server’s certificate.

The object mCertificatePinningKeys was added to the object LPAuthenticationParams.

**Please note**: using the new object without completing the on-boarding process will result in failures while trying to communicate with LivePerson’s servers.

The following additional conditions and configurations are required:

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Yes | Yes | Yes | Yes | Yes |


#### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

<table>
<thead>
 <tr>
 <th></th>
 <th colspan="4">Operating system</th>
 </tr>
 <tr>
 <th>Device</th>
 <th>v5.X (Lollipop)</th>
 <th>v6.X (Marshmallow)</th>
 <th>v7.X (Nougat)</th>
 <th>v8.X (Oreo)</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Note 8</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 <td>Supported</td>
 </tr>
 <tr>
 <td>Pixel</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 </tr>
 <tr>
 <td>Pixel 2</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 </tr>
 </tbody>
</table>

A full list of supported and certified devices can be found in the [LiveEngage System Requirements document](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf).

#### New APIs

#### New parameters

##### Branding and configuration parameters

**Type:** Parameters

**Available to all customers?** Yes

The Mobile App Messaging SDK v3.0 exposes additional branding configuration parameters.

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
 <td>&lt;dimen name="sticky_timestamp_text_size"&gt;@dimen/small_text_size</dimen></td>
 <td>Defines the Date Separator font text size.</td>
 <td><img src="img/android_sticky_timestamp_text_size.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="sticky_timestamp_margin_top">8dp</dimen></td>
 <td>Defines the Date Separator top spacing.</td>
 <td><img src="img/android_sticky_timestamp_margin_top.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="avatar_margin_leading"&gt;@dimen/margin_regular</dimen></td>
 <td>Defines the remote avatar leading spacing (from the left edge to the avatar).</td>
 <td><img src="img/android_avatar_margin_leading.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="avatar_margin_trailing"&gt;@dimen/margin_regular</dimen></td>
 <td>Defines the remote avatar Trailing spacing (from the avatar to the bubble).</td>
 <td><img src="img/android_avatar_margin_trailing.png"></td>
 </tr>
 <tr>
 <td>
  &lt;color name="enter_message_top_separator_color"&gt;@android:color/darker_gray&lt;/color&gt;</td>
 <td>Input TextView top border color. The default color is clear.</td>
 <td><img src="img/android_enter_message_top_separator_color.png"></td>
 </tr>
 <tr>
 <td>&lt;bool name="enter_message_divider_visible"&gt;false&lt;/bool&gt;
</td>
 <td>Determine if the Enter Message edit text divider is visible or not.</td>
 <td><img src="img/android_enter_message_divider_visible.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_text_size"&gt;@dimen/small_text_size</dimen>
</td>
 <td>Defines the Resolved system message text size.</td>
 <td><img src="img/android_bubble_system_resolved_text_size.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_padding"&gt;@dimen/margin_half</dimen></td>
 <td>Defines the Resolved system message padding.</td>
 <td><img src="img/android_bubble_system_resolved_padding.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_line_spacing">0dp</dimen>
</td>
 <td>Defines the Resolved system message line spacing.</td>
 <td><img src="img/android_bubble_system_resolved_line_spacing.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_separator_padding_bottom"&gt;@dimen/margin_half</dimen>
</td>
 <td>Defines the Resolved system message Separator padding.</td>
 <td><img src="img/android_bubble_system_resolved_separator_padding_bottom.png"></td>
 </tr>
 <tr>
 <td>&lt;drawable name="lp_progress_bar_image"&gt;&lt;/drawable&gt;</td>
 <td>Defines the Progress bar image. If empty, the default Progress bar appears.</td>
 <td><img src="img/android_lp_progress_bar_image.png"></td>
 </tr>
 </tbody>
</table>


**Key for items as follows:**

**Backend update:** This feature requires an update to the backend.

**Backend enablement**: This feature requires items to be toggled on in the backend.

**Backend configuration**: This feature requires configuration in the backend.

**SDK enablement:** This feature requires items to be toggled on in the SDK.

**SDK configuration**: This features requires items to be configured in the SDK.

### Android Messaging SDK -  Version 2.9

These are the main feature releases available in the Mobile App Messaging SDK version 2.9 for Android.

Version 2.9 planned roll-out: November 12th 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.1.pdf){:target="_blank"}

#### New functionalities

##### Oreo Support - Android API Level Support Update

**Type:** Developer Experience Feature

**Available to all customers?** Yes

The Mobile App Messaging SDK v2.9 was built and certified within the host app on Android API level 26.

The Mobile App Messaging SDK should remain on Android API level 25, while the host app may use Android API level 26.

**Important:**

The SDK Android API level should remain on level 25. Please do not change SDK Android API level to 26; support for this level 26 will be provided in 2018.

#### New parameters

##### Branding and Configuration Parameters

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
 <td>&lt;color name="lp_header_background_color"&gt;@android:color/white (#FFFFFF)</td>
 <td>Day/date sticky header background color.</td>
 <td><img src="img/androidheaderbackground.png" alt="androidheaderbackground"></td>
 </tr>
 <tr>
 <td>&lt;color name="lp_header_text_color"&gt;@color/lp_dark_gray_1 (#46474a)</td>
 <td>Day/date sticky header text color.</td>
 <td><img src="img/androidtextcolor.png" alt="androidtextcolor"></td>
 </tr>
 <tr>
 <td>&lt;color name="lp_textColorSecondary"&gt;@android:color/black (#000000)</td>
 <td>Color of menu button and back arrow on toolbar (Activity Mode).</td>
 <td><img src="img/textcolorsecondary.png" alt="lp_textColorSecondary"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="brand_bubble_padding_bottom"&gt;8dp</td>
 <td>Brand welcome message bubble (brand) bottom spacing.</td>
 <td><img src="img/androidpaddingbottom.png" alt="androidpaddingbottom"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="brand_bubble_padding_left"&gt;8dp</td>
 <td>Brand welcome message bubble (brand) left spacing.</td>
 <td><img src="img/androidpaddingleft.png" alt="androidpaddingleft"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="brand_bubble_padding_right"&gt;8dp</td>
 <td>Brand welcome message bubble (brand) right spacing.</td>
 <td><img src="img/androidpaddingright.png" alt="androidpaddingright"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="brand_bubble_padding_top"&gt;8dp</td>
 <td>Brand welcome message bubble (brand) top spacing.</td>
 <td><img src="img/androidpaddingtop.png" alt="androidpaddingtop"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_line_spacing"&gt;0dp</td>
 <td>Resolve message spacing from above.</td>
 <td><img src="img/linespacing.png" alt="linespacing"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_padding"&gt;@dimen/margin_half (4dp)</td>
 <td>Resolve message spacing from below.</td>
 <td><img src="img/systemresolved.png" alt="systemresolved"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_text_size"&gt;@dimen/small_text_size (12sp)</td>
 <td>Resolve message text size.</td>
 <td><img src="img/androidtextsize.png" alt="androidtextsize"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="chat_bubble_padding_bottom"&gt;8dp</td>
 <td>Conversation message (agent / consumer) bottom spacing.</td>
 <td><img src="img/androidbubblepaddingbottom.png" alt="androidbubblepaddingbottom"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="chat_bubble_padding_left"&gt;8dp</td>
 <td>Conversation message (agent / consumer) left spacing.</td>
 <td><img src="img/androidbubblepaddingleft.png" alt="androidbubblepaddingleft"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="chat_bubble_padding_right"&gt;8dp</td>
 <td>Conversation message (agent / consumer) right spacing.</td>
 <td><img src="img/androidbubblepaddingright.png" alt="androidbubblepaddingright"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="chat_bubble_padding_top"&gt;8dp</td>
 <td>Conversation message (agent / consumer) top padding</td>
 <td><img src="img/androidbubblepaddingtop.png" alt="androidbubblepaddingtop"></td>
 </tr>
 </tbody>
</table>

### Android Messaging SDK -  version 2.8

These are the main feature releases available in the Mobile App Messaging SDK version 2.8 for Android.

Version 2.8 roll-out: October 3rd 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.0.pdf){:target="_blank"}

#### New functionalities

##### Structured content enablement (GA in SDK)

**Type**:​ Feature

**Available​ ​to​ ​all​ ​customers?​** ​No - early adopters only

_The beta version was released in v2.7 (for a full description, refer to the v2.7 release notes). The SDK delivers structured content enablement only; the feature will be made fully productive in October. In v2.8 the feature is enabled by default in the SDK._

The dictionary of template elements can be found [here](structured-content-templates.html).

**What​ ​does​ ​enablement​ ​mean**?

Until rollout is complete, the structured content capability in SDK v2.7 was flagged as a Beta feature. The feature has an enablement toggle in the SDK which was disabled by default. In SDK v2.8, it is enabled by default.

The toggle may be switched on or off as part of the SDK implementation within the host app, however it is highly recommended not to release the SDK in the host app with structured content enabled until end to end flow has been fully tested on the brand’s account.

**In-app​ ​Messaging​ ​SDK​ ​toggle**​ -

* Android - `enable_structured_content`

Related​ ​properties:​ ​Structured content

The following additional conditions and configurations are required:

|Backend update |Backend enablement|Backend configuration|SDK enablement|SDK configuration|
|---------------|------------------|---------------------|--------------|-----------------|
|Yes| Yes| Yes| Yes| Yes|

##### Automatic messages for messaging

**Type**:​ Feature

**Available​ ​to​ ​all​ ​customers**?​ ​No - early adopters only

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

**How​ ​to​ ​enable​ ​auto​ ​messages**

Auto messages will be enabled for early adopters upon release. Please contact your account manager for more information.

**IMPORTANT​ ​NOTES**​:

When auto messages are enabled, they are all enabled by default and all have the default text. It is advised to review them immediately and modify them to suit the brand’s needs. Once auto messages are enabled, the SDK does not show toast messages which were presented in the past.

The following messages remain in the SDK:

* Introduction message from the consumer’s first ever conversation. Make sure you do not have a collision between that message and auto messages.

* Conversation resolved message

The following additional conditions and configurations are required:

|Backend update |Backend enablement|Backend configuration|SDK enablement|SDK configuration|
|---------------|------------------|---------------------|--------------|-----------------|
|Yes| Yes| Yes| Yes| Yes|

##### Unread messages badge

When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon or other marker to show unread messages.

The unread messages number is passed to the SDK through LP Push service with every push.

**IMPORTANT​ ​NOTES**​​
:
The number of unread messages are fetched by the API from the pusher regardless of whether it’s registered to the LP push service.

**Getting the unread message badge counter**

This API method uses a threshold mechanism of 10 seconds from the last time the badge retrieved from the server. If calling this method within less than 10 seconds, the counter will be returned from cache otherwise,
it will be fetched again with new data.

**Parameters**​:

* conversationQuery: conversationQuery: used to identify the related brand

* completion: called once the operation ends successfully

* failure: called once the operation failed

**Related​ ​properties**:​ ​Unread messages badge
**Related​ ​API**:​ Unread messages badge API

The following additional conditions and configurations are required:

|Backend update |Backend enablement|Backend configuration|SDK enablement|SDK configuration|
|---------------|------------------|---------------------|--------------|-----------------|
|Yes| No| No| No| Yes|

**Key for items as follows**:

**Backend​ ​update**:​ This feature requires an update to the backend.
**Backend​ ​enablement**​: This feature requires items to be toggled on in the backend.
**Backend​ ​configuration**​: This feature requires configuration in the backend.
**SDK​ ​enablement**:​ This feature requires items to be toggled on in the SDK.
**SDK​ ​configuration​**: This features requires items to be configured in the SDK.

#### New properties

##### Structured Content

The following properties for structured content can now be configured:

|Name|Description|Default|
|----|-----------|-------|
|&lt;bool name="enable_structured_content"&gt;|Enable or Disable toggle for Structured Content feature in conversations.|True|

#### New APIs

##### Unread Messages Badge APIs

```javascript
public​ ​static​ ​void​ ​getNumUnreadMessages(String​ ​appId,​ ​final​ ​ICallback<Integer,
Exception>​ ​callback)​ ​{
​ ​ ​ ​if​ ​(!isValidState())​ ​{
​ ​ ​ ​ ​ ​ ​ ​callback.onError(new​ ​Exception("SDK​ ​not​ ​initialized"));
​ ​ ​ ​}​ ​else​ ​{
​ ​ ​ ​ ​ ​ ​ ​MessagingFactory.getInstance().getController().getUnreadMessagesCount(mBrandId,
appId,​ ​callback);
​ ​ ​ ​}
}
```

To use this API, the SDK must be after initialization.

### Android Messaging SDK -  version 2.5

These are the main feature releases available in the Mobile App Messaging SDK version 2.5 for Android.

Version 2.5 roll-out: July 2nd 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.8.pdf){:target="_blank"}


#### New functionalities

##### Custom fonts

In order for consumers to enjoy the full brand experience while messaging in-app, brands are able to configure certified operating system fonts to appear in the messaging window. The fonts can be used across all elements, or only for the font within the message bubble.

The SDK also supports the use of a brand’s own customized fonts (although these are not certified).

Custom fonts are not supported for Native iOS properties such as:
* Activity mode - Overflow menu
* Popup messages

![Conversation Custom Font](img/CustomFont.png)

Conversation Custom Fonts

![Non Conversation Custom Font](img/NonConversation.png)

Non Conversation Custom Fonts

_Related properties_: Custom fonts

**The following additional conditions and configurations are required:**

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

##### New way to listen to LP events via local intents

A new method of listening to LP events has been added. This method allows the host app to register to receive a specific action or to receive all of them. All of the actions match and correspond to the existing callback method. LivePerson recommends using the SDK’s Broadcast Receiver to receive these intent actions, as this system allows the user to listen to specific actions, and is not reliant on the SDK’s life cycle.

Note: Brands can still choose to use the callback method, which remains valid and supported.

_Related APIs_: LivePersonIntents API

**The following additional conditions and configurations are required**:

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |

##### Tablet supportability
To ensure that consumers using tablets can connect with brands while enjoying the tablet experience, Mobile App Messaging is now supported on these devices, in window mode and activity mode, and in both portrait and landscape layouts.

All supported devices have gone through automation tests and all certified devices have gone through both automation and manual testing.

| Device | v5.X (Lollipop) | v6.X (Marshmallow) | v7.X (Nougat) |
| ------------ | ------------ | ------------ | ------------ |
| Samsung Galaxy Tab S2 9.7 | N/A  | Supported | N/A |
| Samsung Galaxy Tab S3 | N/A  | N/A | Supported |
| Huawei MediaPad M3 | N/A  | Supported | N/A |

![Tablet Portrait](img/TabletPortrait.png)

Tablet Portrait Mode

![Tablet Landscape](img/TabletLandscape.png)

Tablet Landscape Mode

##### List of certified and supported devices extended
The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

| Device | v5.X (Lollipop) | v6.X (Marshmallow) | v7.X (Nougat) |
| ------------ | ------------ | ------------ | ------------ |
| Samsung Galaxy S8 | N/A  | Supported | Certified |
| Samsung Galaxy S8+ | N/A  | N/A | Certified |
| LG G6 | N/A  | N/A | Certified |
| LG V20 | N/A  | N/A | Certified |

A full list of supported and certified devices can be found in the LiveEngage System Requirements document.

##### Connectivity improvements
The user experience when connecting to the app has been significantly improved. When users first log-in, and during all subsequent attempts, the login process is now much smoother and faster.

In addition, other aspects such as feature and conversation history will also be more rapid as a result of the improvements.

The following additional conditions and configurations are required*:

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |

#### New APIs
LivePersonIntents API
* All Actions are defined in the LivePersonIntents.ILivePersonIntentAction Interface.
* All additional data is provided using Extras on the intents and defined in the LivePersonIntents.ILivePersonIntentExtras Interface.
* The LivePersonIntents class provides several methods that help extract the data from of the intent, without dealing with the Extras.

For more information on this API, please refer to the deployment guide.

#### New properties
The following properties of the secure form bubble on the agent side can now be configured:

##### Custom Fonts

| Name  | Description  | Default  |
| ------------ | ------------ | ------------ |
| string name="custom_font_name_conversation_feed" | The font name for all elements in the conversation feed. | Empty (use the device font) |
| string name="custom_font_name_non_conversation_feed" | The font name for all elements that are not in the conversation feed. | Empty (use the device font) |



### Android Messaging SDK -  version 2.3
These are the main feature releases available in the **Mobile App Messaging SDK version 2.3 for Android**.

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.6.pdf){:target="_blank"}



#### Presence enablement for photo sharing - beta

Presence enablement for photo sharing provides consumers with the ability to receive notifications while uploading a photo, whether they remain within the app or keep it running in the background. The Web Socket remains open for a maximum of 5 seconds when the app moves to the background. This scenario is also applicable for non photo sharing flows.

In addition, brands can also customize notifications for photo sharing, indicating to the consumer when a photo is loading, has successfully sent or has failed to send

![Presence Enablement](img/releasepresence.png)

Related API: Photo sharing
Related strings: Photo sharing upload status


#### In-app unread messages badge enablement

When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualisation of a badge, such as a number, icon or other marker to show unread messages.

![Unread Messages Badge](img/releaseunread.png)

Related API: Handle Push Message, Get Num Unread Messages, Deprecated API


#### Secure form for Mobile App Messaging

The secure form gives consumers the confidence to submit sensitive information, such as credit card data and social security numbers, while messaging in-app. The form also enables agents to safely carry out secure processes, such as payment, identification and authorisations. The form can be tailored to match the Mobile App Messaging experience and has a time-out expiry, for added security.

_This feature requires consulting services support. For more information, please refer to the LiveEngage ​[secure form for messaging documentation​](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Secure+form+for+messaging.pdf){:target="_blank"}_.

![Secure Form](img/releasesecure.png)

Related properties: Agent PCI bubble
Related strings: PCI


#### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

**Mobile**

|                        | Operating system |                    |               |
|------------------------|------------------|--------------------|---------------|
| **Device**                 | **v5.x (Lollipop)**   | **v6.X (Marshmallow)** | **v7.X (Nougat)** |
| Samsung Galaxy S4      | Supported        | -                  | -             |
| Samsung Galaxy A5      | Supported        | Certified          | -             |
| Samsung Galaxy J3      | Certified        | -                  | -             |
| Samsung Galaxy J5      | -                | Certified          | -             |
| Samsung Galaxy S6      | -                | -                  | Certified     |
| Samsung Galaxy S6 edge | -                | -                  | Certified     |
| Samsung Galaxy S7      | -                | -                  | Certified     |
| Samsung Galaxy S7 edge | -                | -                  | Certified     |
| LG V20                 | -                | -                  | Supported     |
| Sony Xperia X          | -                | Certified          | Supported     |

**Tablet**


|              | Operating System |                 |                    |               |
|--------------|------------------|-----------------|--------------------|---------------|
| Device       | V4.4X (KitKat)   | v5.X (Lollipop) | v6.X (Marshmallow) | v7.X (Nougat) |
| Galaxy Tab A | -                | Supported       | Supported          | -             |
| Galaxy Tab 3 | Supported        | -               | -                  | -             |
| Nexus        | Supported        | Supported       | Supported          | -             |
| HTC          | -                | -               | Supported          | Supported     |


#### New APIS


**handlePushMessage**

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| data | A Bundle that contains the message. The bundle should hold a string with key named "message". |
| brandId | The account ID. |
| showNotification | Used to instruct the SDK to either show or not show a notification to the user. If you wish your app will handle the display of the notification you can set this as false. |

All incoming push messages are received by the host app. The host app can choose to fully handle any push message and display a notification message, or partially handle it and allow the SDK to display the notification. In a case the host app decides to show its own custom notification, it can call handlePushMessage() with the ​showNotification​ parameter set to false and will parse and return a PushMessage object. In case the push message is not related to the SDK, it will return null.

_Note: For the unread messages feature to work correctly, the host app must call this method upon receiving SDK push messages (whether showing a custom notification or not)_.

**getNumUnreadMessages**

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID. |

This returns the counter of the unread messages to the number of push messages received.
This number is set to 0 when opening the conversation screen.

To get updates on the unread messages counter: create a BroadcastReceiver that will listen to the following Action:

_LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION;_

To get the number of unread messages out of the intent, use the following extra key:

_LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA;_

**Photo Sharing**

Set a pending intent for the image upload foreground service notification -

`setImageServicePendingIntent(PendingIntent pendingIntent)`

Set a notification builder for the image upload foreground service notification -

`setImageServiceUploadNotificationBuilder(Notification.Builder builder)`

Set a notification builder for the image down foreground service notification -

`setImageServiceDownloadNotificationBuilder(Notification.Builder builder)`


#### Deprecated API


The following API has been deprecated:

`public static void handlePush(Context context, Bundle data, String brandId, boolean
showNotification)`

Please use the above ​handlePushMessage()​ method instead.

#### New properties


**agent PCI bubble**

The following properties of the secure form bubble on the agent side can now be configured:

Background color of the form invitation bubble -

`<color​ ​name=​"agent_bubble_pci_form_invitation_background_color"​>
@android:color/white​</color>`

Background color of the form invitation button only -

`<color​ ​name=​"agent_bubble_pci_form_invitation_background_btn_color"​>
@android:color/white​</color>`

Color of the stroke (border) of the form invitation bubble -

`<color​ ​name=​"agent_bubble_pci_form_invitation_stroke_color"​>​ ​@color/lp_gray​</color>`

Color of the text on the button -

`<color ​name=​"agent_bubble_pci_form_invitation_button_text_color"​>
@color/lp_blue​</color>​`

Text color on the description in the form invitation bubble -

`<color ​name=​"agent_bubble_pci_form_invitation_description_text_color"​>
@color/lp_gray​</color>`

Text color on the title in the form invitation bubble -

`<color​ ​name=​"agent_bubble_pci_form_invitation_title_text_color"​>
@android:color/black​</color>`

Color of the icon in the form invitation bubble -

`<color ​name=​"agent_bubble_pci_form_invitation_icon_tint_color"​>
@color/lp_blue​</color>`

**consumer read status**

Color of the read status indicator in the consumer message status line -

`<color​ ​name=​"​consumer_bubble_read_status_color​"​>​@color/lp_blue​</color>`

Color of the received status indicator in the consumer message status line -

`<color ​name=​"​consumer_bubble_received_status_color​"​>​#cecece​</color>`

Color of the sent status indicator in the consumer message status line -

`<color​ ​name=​"​consumer_bubble_sent_status_color​"​>​#cecece​</color>`

Color of the sending status indicator in the consumer message status line -

`<color ​name=​"​consumer_bubble_sending_status_color​"​>​@color/lp_gray​</color>`


#### New strings keys

**Photo Sharing Upload Status**

`<string​ ​name=​"uploading_image"​>​Uploading image...​</string>`
`<string​ ​name=​"downloading_image"​>​Downloading image...​</string>`

**Accessibility**

`<string​ ​name=​"lp_accessibility_message_preview_close_description"​>​Close​</string>``
`<string​ ​name=​"lp_accessibility_scroll_down_indicator_description"​>​scroll
down​</string>`

**Connection Status**

`<string​ ​name=​"lp_connection_status_trying_to_connect"​>​Still trying to
connect…​</string>`
`<string​ ​name=​"lp_connection_status_no_connection"​>​Offline. Please check your
connection.​</string>`

**PCI**

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_title"​>​Are you sure?​</string>`

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_description"​>​Once you leave the secure
form, you will not be able to access it again.​</string>`

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_btn_positive"​>​OK​</string>`

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_btn_negative"​>​STAY​</string>`

`<string​ ​name=​"lpmessaging_ui_fill_in_form_text_button"​>​Fill in form​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_to_fill_in_message"​>​This is a secure form.
Information entered here is protected and cannot be accessed once submitted.​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_viewed_message"​>​This form has already been
viewed. Please ask the agent to resend the form.​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_error_message"​>​There was a problem opening
this form. Please ask the agent to resend the form.​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_expired_message"​>​Secure form has expired.
Please ask the agent to resend the form.​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_submitted_message"​>​This form has been
submitted and cannot be reopened for security reasons.​</string>`

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_description"​>​Once you leave the secure
form, you will not be able to access it again.​</string>`
