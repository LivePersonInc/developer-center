---
pagename: Attributes
redirect_from:
  - android-attributes.html
  - mobile-app-messaging-sdk-for-android-customization-and-branding-attributes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: SDK Attributes

order: 160
permalink: mobile-app-messaging-sdk-for-android-sdk-attributes-attributes.html

indicator: messaging
---
The goal of the following document is to enumerate the different fields controlling design attributes in the SDK. If a clearer view of which attribute corresponds with a design element is needed, refer oo the [Attributes Design Sheet](android-attributes-designsheet.html).

{:.important}
For things like Brand name, which is a string, refer to [string Localization](android-modifying-string.html).


--- 

### Accessibility

#### snackbar_duration_for_accessibility
Number of milliseconds to show the TTR snackbar if the accessibility TalkBack option is on.

* **Type:** integer
* **Default value:** 60000

Note: This value was previously named `snachbar_duration_for_accessibility`, and its spelling has since been corrected.


#### announce_agent_typing
Announce when the agent is typing. This is applicable only in Activity mode.

* **Type:** bool
* **Default value:** true


--- 


### Agent Assignment

#### send_agent_profile_updates_when_conversation_closed
When set to **true** the callback [LivePersonCallback](lp_messaging_ui_brand_logo) `onAgentDetailsChanged` calls with the agent detail updates even if the last conversation is closed. In this case, it provides the assigned agent of the last conversation. If **false**, this callback is only called when the current conversation is active. 

* **Type:** bool  
* **Default value:** true 

--- 

### Audio Messaging

#### enable_voice_sharing
Enable or disable the audio messaging feature. 

* **Type:** bool  
* **Default value:** false

#### lp_record_max_time_seconds
Maximum voice recording time in seconds.

* **Type:** int  
* **Default value:** 120

#### max_number_stored_voice_files
Maximum number of voice files stored on the device.

* **Type:** int  
* **Default value:** 120

---  

### Avatars


#### avatar_margin_leading
Defines the remote avatar leading spacing (from the left edge to the avatar).
 
<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> @dimen/margin_regular </li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_avatar_margin_leading.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### avatar_margin_trailing
Defines the remote avatar Trailing spacing (from the avatar to the bubble).
 
<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> @dimen/margin_regular </li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_avatar_margin_trailing.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


---  

### Brand

#### lp_brand_header_text_color
The configuration to change the Brand name / Agent name text color in the header.

<div style="float: left; width: 50%;height: 50px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> black</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_brandname_color.png" style="height: 48px; width: auto;">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### brand_bubble_stroke_width
Int number for the outline width.


<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 0dp </li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/strokewidth.png" alt="strokewidth">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### brand_bubble_stroke_color
Color code for the outline color.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/strokecolor.png" alt="strokecolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### brand_bubble_message_text_color
Color code for the text of the brand bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/textcolor.png" alt="textcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### brand_bubble_message_link_text_color
Color code for links in the text of the brand bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/linktextcolor.png" alt="linktextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>
    
    
    
#### brand_bubble_timestamp_text_color
Color code for the timestamp of the brand bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #46474A (dark gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/timestamptextcolor.png" alt="timestamptextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### brand_bubble_background_color
Color code for the background of the brand bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/backgroundcolor.png" alt="backgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### brand_logo_background_color
Color code for the background of the default brand logo next to the bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #007AFF (light blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/logobackgroundcolor.png" alt="logobackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### brand_bubble_padding_right
Brand's welcome message bubble right padding.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_brand_bubble_right_padding.png" alt="brand_bubble_right_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### brand_bubble_padding_left
Brand's welcome message bubble left padding.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_brand_bubble_left_padding.png" alt="brand_bubble_left_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### brand_bubble_padding_top
Brand's welcome message bubble top padding.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_brand_bubble_top_padding.png" alt="brand_bubble_top_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### brand_bubble_padding_bottom
Brand's welcome message bubble bottom padding.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_brand_bubble_bottom_padding.png" alt="brand_bubble_bottom_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### custom_font_name_conversation_feed
The font name for all conversation feed’s element.

* **Type:** string
* **Default value:** Empty (use the device font)
* **Example:** sans-serif-thin

#### custom_font_name_non_conversation_feed
The font name for all elements that are not in the conversation feed.

* **Type:** string
* **Default value:** Empty (use the device font)
* **Example:** customFont.ttf



---  


### Connection status bar

#### connection_status_connecting_bg_color
Define the color of status bar background color while trying to connect.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #F2F5F5F5</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/connectingbgcolor.png" alt="connectingbgcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### connection_status_not_connected_bg_color
Define the color of status bar background color when connection is unavailable.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #CC000000</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/notconnectedbgcolor.png" alt="notconnectedbgcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### connection_status_connecting_text_color
Define the color of status bar text color while trying to connect.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #46474A</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/connectingtextcolor.png" alt="connectingtextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### connection_status_not_connected_text_color
Define the color of status bar text color when connection is unavailable.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/black</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/notconnectedtextcolor.png" alt="notconnectedtextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


---  

### Controller Message

#### conversation_controller_message_text_color
Color code for the text of the automatic messages.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #5b5c5e (dark gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/conversation_controller_message_text_color.png" alt="automaticmessagecoller">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

---   


### Conversation Activity Style - (activity mode only!)


#### lp_colorPrimary
Define the primary color of the activity.

* **Type:** color 
* **Default value:** android:colorPrimary



#### lp_colorPrimaryDark
Define the primary dark color of the activity.

* **Type:** color 
* **Default value:** android:colorPrimaryDark



#### lp_textColorSecondary
Define the color of menu button and back arrow on toolbar.

<div style="float: left; width: 50%;height: 43px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> black</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_secondary_color.png" alt="secondarycolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

---  

### Conversations

#### conversation_background (color)
Define the color code for the entire view background. 

In activity mode - Also the color of android:windowBackground.

* **Type:** color
* **Default value:** white


#### conversation_background (image)
Sets the conversation background image (applicable on Activity mode only).

**Type:** drawable

#### bubble_system_resolved_text_size
Conversation resolved message text size.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 12sp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_resolved_message_text_size.png" alt="resolved_message_text_size">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubble_system_resolved_padding
Conversation resolved message padding.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 4sp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_resolved_message_padding.png" alt="resolved_message_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubble_system_resolved_line_spacing
Conversation resolved message line spacing.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_resolved_message_line_spacing.png" alt="resolved_message_line_spacing">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### enable_conversation_resolved_message
Enable or disable the conversation resolved message.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> bool</li>
      <li><b>Default value:</b> true</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/enable_conversation_resolved_message.png" alt="conversationresolvedmessage">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### enable_conversation_resolved_separator
Enable or disable separators between conversations.

<div style="float: left; width: 50%;height: 50px;">
   <ul>
      <li><b>Type:</b> bool </li>
      <li><b>Default value:</b> true</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/enable_conversation_resolved_separator.png" alt="conversationresolvedseparator">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### conversation_separator_text_color
Color code for the conversation resolved message and separator.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #555555 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/enable_conversation_resolved_message.png" alt="conversationresolvedmessage">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

---   

### Data Masking

#### enable_client_only_masking
Defines whether to enable or disable client side only masking. False by default.

<div style="float: left; width: 50%;height: 100px;">
   <ul>
      <li><b>Type:</b> bool</li>
      <li><b>Default value:</b> false</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/clientonlymasking.png" alt="clientonlymasking">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### enable_real_time_masking
Defines whether to enable or disable real time masking. 

* **Type:** bool
* **Default value:** false

#### client_only_masking_regex
Defines the java regex for client side only masking. By default does not contain any value.

* **Type:** string
* **Default value:** No value

#### client_only_mask_character
The character used to mask client only string.

* **Type:** string
* **Default value:** '*'

#### real_time_masking_regex
Defines the Java regex for real time masking.

* **Type:** string
* **Default value:** No value

#### real_time_mask_character
The character used to mask the real time message.

<div style="float: left; width: 50%;height: 108px;">
   <ul>
      <li><b>Type:</b> string</li>
      <li><b>Default value:</b> '*'</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/realtimemaskcharacter.png" alt="realtimemaskcharacter">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

---  

### Date and Time 

#### lp_date_format
Define date format.

* **Type:** string
* **Default value:** No value

#### lp_time_format
Define time format.

* **Type:** string
* **Default value:** No value

#### lp_date_time_format
Define date-time format.

* **Type:** string
* **Default value:** No value



#### sendingMessageTimeoutInMinutes
Define timeout for automatic resending pending message before moving it to failed.

* **Type:** integer
* **Default value:** 60

---  


### Date Separator

#### lp_header_text_color
Text color for the Day/date header.

<div style="float: left; width: 50%;height: 75px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #46474a (Dark gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_header_text_color.png" alt="header_text_color">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### lp_header_background_color
Background color for the Day/date header.

<div style="float: left; width: 50%;height: 78px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_header_background_color.png" alt="header_background_color">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### sticky_timestamp_text_size
Font text size for the Date Separator.

<div style="float: left; width: 50%;height: 60px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> @dimen/small_text_size</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_sticky_timestamp_text_size.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### sticky_timestamp_margin_top
Top margin spacing of the Date Separator.

<div style="float: left; width: 50%;height: 85px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_sticky_timestamp_margin_top.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### enter_message_top_separator_color
Top border color for the Input TextView.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/darker_gray</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_enter_message_top_separator_color.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### enter_message_divider_visible
Enable (visible) or disable (hidden) the Enter Message edit text divider.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> bool</li>
      <li><b>Default value:</b> false</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_enter_message_divider_visible.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubble_system_resolved_text_size
Defines the Resolved system message text size.

<div style="float: left; width: 50%;height: 45px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> small_text_size</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_bubble_system_resolved_text_size.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### bubble_system_resolved_padding
Defines the Resolved system message padding.

<div style="float: left; width: 50%;height: 85px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> margin_half</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_bubble_system_resolved_padding.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### bubble_system_resolved_line_spacing
Defines the Resolved system message line spacing.

<div style="float: left; width: 50%;height: 85px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_bubble_system_resolved_line_spacing.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

 

#### bubble_system_resolved_separator_padding_bottom
Defines the Resolved system message Separator padding.

<div style="float: left; width: 50%;height: 120px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> margin_half</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_bubble_system_resolved_separator_padding_bottom.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_progress_bar_image
Defines the Progress bar image. If empty, the default Progress bar appears.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> drawable</li>
      <li><b>Default value:</b> </li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_lp_progress_bar_image.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lpmessaging_ui_image_progress_bar.xml	
Default progress bar vector drawable for downloading or uploading an image. It appears on the image, inside the bubble, until progress is done. To Override this resource, create a vector drawable under the android drawable folder with the same resource name.


---  

### Delivery Notifications

#### message_receive_icons
For each message, there are three indicators available: Message sent, Message received, and Message read.
  
You can customize the indicators according to your needs, by using a number between 1 and 3.

**Type:** integer


<div style="float: left; width: 50%;height: 220px;">
   <ul>
      <li><b>0:</b>  text (sent, delivered etc.) instead of icons</li>
      <li><b>1:</b> Sent only</li>
      <li><b>2:</b>  Sent+received</li>
      <li><b>3:</b>  Sent+received+read</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/receiveicons.png" alt="receiveicons">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### message_receive_text
If you set the resource [message_receive_icons](#message_receive_icons) to **0**, you can specify what texts appear for each state. 

**Type:** string-array

<div style="float: left; width: 50%;height: 220px;">
   You must have 4 items, in the following order: 
   <ul>
      <li><b>1st item:</b> message sent</li>
      <li><b>2nd item:</b> message delivered</li>
      <li><b>3rd item:</b> message read</li>
      <li><b>4th item:</b> message not delivered</li>
      <li><b>5th item:</b> message sending</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/receivetext.png" alt="receivetext" right>
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### clear_history_show_confirm_dialog
Define if to show confirm dialog before clearing history or not. 

* **Type:** bool
* **Default value:** true

---  

### General Style

#### is_enable_enlarge_emojis
When true, user and remote user messages containing one or two emojis will be enlarged in chat. Messages with one emoji will be the largest, two emojis will be large, and three or more will be displayed as normal text.

* **Type:** bool
* **Default value:** false

#### vibrate_enabled
Enable or disable vibrate upon receiving messages from agent while conversation screen is in foreground. false by default.

* **Type:** bool
* **Default value:** false


#### contextual_menu_on_toolbar
Enable multiple message copy menu over the app toolbar. If true, when long pressing a message on chat it will select the message and enable a context menu over the toolbar, enabling the user to copy multiple messages. If false, long pressing a message will display a copy popup menu.

* **Type:** bool
* **Default value:** true


#### bubble_selected_background_color
Define the background color of item when it’s selected to be copied (if multiple message copy is enabled).

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #5597a7e3</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/bubbleselectedbackgroundcolor.png" alt="bubbleselectedbackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### encryptionVersion
Defines the encryption version to use. Currently available version 1 only.

* **Type:** integer
* **Default value:** 1 (encrypted)


#### csds_url
For vanity URL purposes. 

* **Type:** string
* **Default value:** adminlogin.liveperson.net


#### idp_num_history_conversation
Defines the number of recent conversations (including messages) to fetch from the server when loading more conversations. Only for authenticated account.

* **Type:** integer 
* **Default value:** 2

#### lp_bubble_phone_links_regex
Defines the java regex for phone links in bubble messages. 

* **Type:** string
* **Default value:** No value

#### lp_bubble_url_links_regex
Defines the java regex for url links in bubble messages. 

* **Type:** string
* **Default value:** No value

#### lp_bubble_email_links_regex
Defines the java regex for email links in bubble messages. By default does not contain any value.

* **Type:** string
* **Default value:** No value

#### lpinfra_ui_ic_send_disabled.xml
You can display a different drawable to represent sending a message. Create a drawable file named **lpinfra_ui_ic_send_disabled.xml**, which overrides the SDK's default drawable.

To display an image instead of text, set the `use_send_image_button` boolean to true.

<div style="float: left; width: 50%;height: 64px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #555555 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption>Default image</figcaption>
   <img src="img/android_disabled_send_button.png" style="width: 64px;">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### lpmessaging_ui_ic_gallery.xml
You can replace the existing Gallery image button. Create a drawable file named **lpmessaging_ui_ic_gallery.xml**, which overrides the SDK's default drawable.


<div style="float: left; width: 50%;height: 82px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption>Default image</figcaption>
   <img src="img/android_gallery_button.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### lpmessaging_ui_ic_camera.xml
You can replace the existing Library image button. Create a drawable file named **lpmessaging_ui_ic_camera.xml**, which overrides the SDK's default drawable.

<div style="float: left; width: 50%;height: 80px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption>Default image</figcaption>
   <img src="img/android_camera_button.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### lpinfra_ui_ic_attach.xml
You can replace the existing Attach image. Create a drawable file named **lpinfra_ui_ic_attach.xml**, which overrides the SDK's default drawable.

<div style="float: left; width: 50%;height: 64px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #555555 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption>Default image</figcaption>
   <img src="img/android_attach_button.png" style="width: 64px;">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### lpinfra_ui_ic_close.xml
You can replace the existing Close image. Create a drawable file named **lpinfra_ui_ic_close.xml**, which overrides the SDK's default drawable.

<div style="float: left; width: 50%;height: 64px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #555555 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption>Default image</figcaption>
   <img src="img/android_ps_close_button.png" style="width: 64px;">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

---

### Link Preview

#### link_preview_use_big_picture
Define which configuration to show when sending / receiving s link (big / small picture).

* **Type:** bool
* **Default value:** true


#### link_preview_enable_real_time_preview
Define whether or not we should show a real time link preview. A preview while the consumer is typing an url.

* **Type:** bool
* **Default value:** true


#### link_preview_to_use_more_than_og_tags
parse only &lt;og:> tags or others as well

false - use &lt;og:title&gt; tags only.true - use &lt;og:title&gt; and &lt;title&gt; tags


---  


### Message Edit Text


#### edit_text_underline_color
Color code for the Enter Message control underline color.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #90CAF9</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/underlinecolor.png" alt="underlinecolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_enter_msg_text
Define the input message text color.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/black</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/entermsgtext.png" alt="entermsgtext">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_enter_msg_hint
Define the input message hint color.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/darker_gray</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/entermsghint.png" alt="entermsghint">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_send_button_text_enable
Define the color of the send button when it’s enabled.

* **Type:** color
* **Default value:** #004DC9 (blue)

<div style="float: left; width: 50%;height: 40px;">
   <figure>
   <figcaption></figcaption>
   <img src="img/buttontextenable.png" alt="buttontextenable">
   </figure>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/buttontextenable2.png" alt="buttontextenable2">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_send_button_text_disable
Define the color of the send button when it’s disabled.

* **Type:** color
* **Default value:** #B7B8B9

<div style="float: left; width: 50%;height: 40px;">
   <figure>
   <figcaption></figcaption>
   <img src="img/buttontextdisable.png" alt="buttontextdisable">
   </figure>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/buttontextdisable2.png" alt="buttontextdisable2">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### use_send_image_button
Use an icon for the send button instead of "Send" text.

<div style="float: left; width: 50%;height: 40px;">
   <ul>
      <li><b>Type:</b> bool</li>
      <li><b>Default value:</b> false</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/sendimagebutton.png" alt="sendimagebutton">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>




---  

### Navigation -  Scroll down indicator

#### scroll_down_indicator_enabled
Enable or disable the scroll down indicator (shown or invisible). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> bool</li>
      <li><b>Default value:</b> true</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/indicatorenabled.png" alt="indicatorenabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

 
#### scroll_down_indicator_unread_summary_enabled
Enable or disable the summary in scroll down indicator (shown or invisible). If [unread_indicator_bubble_enable](#unread_indicator_bubble_enable) is **false**, it's in minimized mode without a badge indicating number of unread message.  Tapping scrolls to the last message.

* **Type:** bool  
* **Default value:** true

<div style="float: left; width: 50%;height: 73px;">
   <figure>
   <figcaption></figcaption>
   <img src="img/summaryenabled1.png" alt="summaryenabled1">
   </figure>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/summaryenabled2.png" alt="summaryenabled2">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### scroll_down_indicator_unread_counter_text_color
Color of the unread messages counter text color.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/unreadcountertextcolor.png" alt="unreadcountertextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### scroll_down_indicator_unread_summary_text_color
Color of the unread message summary (preview) text color.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/unreadsummarytextcolor.png" alt="unreadsummarytextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### scroll_down_indicator_unread_counter_stroke_color
Color of the unread messages counter stroke color.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #CC000000</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/unreadcounterstrokecolor.png" alt="unreadcounterstrokecolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### scroll_down_indicator_unread_counter_stroke_width
Dimension of the unread messages counter stroke width.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 1dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/unreadcounterstrokewidth.png" alt="unreadcounterstrokewidth">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### scroll_down_indicator_unread_counter_solid_color
Color of the unread messages counter solid color.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #FF0000 (red)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/unreadcountersolidcolor.png" alt="unreadcountersolidcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### scroll_down_indicator_background_color
Color of the scroll down background color.

* **Type:** color  
* **Default value:** #CC000000

<div style="float: left; width: 50%;height: 75px;">
   <figure>
   <figcaption></figcaption>
   <img src="img/scrolldownindicatorbackgroundcolor.png" alt="scrolldownindicatorbackgroundcolor">
   </figure>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/scrolldownindicatorbackgroundcolor2.png" alt="scrolldownindicatorbackgroundcolor2">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### scroll_down_indicator_arrow_down_color
Color of the image arrow scrolling down.

* **Type:** color  
* **Default value:** @android:color/white

<div style="float: left; width: 50%;height: 73px;">
   <figure>
   <figcaption></figcaption>
   <img src="img/scrolldownindicatorarrowcolor.png" alt="scrolldownindicatorarrowcolor">
   </figure>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/scrolldownindicatorarrowcolor2.png" alt="scrolldownindicatorarrowcolor2">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### scroll_down_indicator_radius
Left top and left bottom corner radius of the scroll down indicator.

<div style="float: left; width: 50%;height: 78px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 20dp for left top and the left bottom the corners</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/indicatorenabled.png" alt="indicatorenabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### scroll_down_indicator_counter_radius
Corner radius of the unread messages counter inside the scroll down indicator.

<div style="float: left; width: 50%;height: 56px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 20dp for all the corners</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/summaryenabled1.png" alt="summaryenabled1">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


---  



### Photo and File Sharing


#### enable_photo_sharing
Enable or disable the photo sharing feature. 

* **Type:** bool 
* **Default value:** false


#### max_number_stored_images
Define the max number of images that will be stored locally.

* **Type:** integer 
* **Default value:** 20


#### full_image_compression_rate
Define the image compression rate (percentage).

* **Type:** integer
* **Default value:** 50


#### thumbnail_longer_dimension_resize
Define the size of the thumbnail image longer dimension after resizing it (pixels).

* **Type:** integer
* **Default value:** 100


#### full_image_longer_dimension_resize
Define the size of the full image longer dimension after resizing it (pixels).

* **Type:** integer
* **Default value:** 800


#### max_image_size_kb
Define the maximum image size in KB that can be uploaded.

* **Type:** integer
* **Default value:** 3000


#### attachment_menu_item_background_color
Define the background color of the items in the attachment menu.

<div style="float: left; width: 50%;height: 210px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/menuitembackgroundcolor.png" alt="menuitembackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_attachment_menu_background_color
Define the background color of the attachment menu.

<div style="float: left; width: 50%;height: 210px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #F5F5F5 (light gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/attachmentmenubackgroundcolor.png" alt="attachmentmenubackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_attachment_menu_item_text_color
Define the items’ text color in the attachment menu.

<div style="float: left; width: 50%;height: 210px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #46474A (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/attachmentmenuitemtextcolor.png" alt="attachmentmenuitemtextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_attachment_menu_item_icon_color
Define the items’ icon color in the attachment menu.

<div style="float: left; width: 50%;height: 210px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #F5F5F5 (light gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/menuitemiconcolor.png" alt="menuitemiconcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

---   

### Quick Replies

#### lpui_quick_reply_button_vertical_padding
Quick Replies button padding above and below the button text.

* **Type:** dimen 
* **Default value:** 12dp

#### lpui_quick_reply_button_horizontal_padding
Quick Replies button padding on right and left of button text.

* **Type:** dimen 
* **Default value:** 12dp

#### lpui_quick_reply_button_vertical_margin
Quick Replies button margin below.

* **Type:** dimen 
* **Default value:** 12dp

#### lpui_quick_reply_button_horizontal_margin
Quick Replies button margin to the right.

* **Type:** dimen 
* **Default value:** 8dp

#### lpui_quick_reply_button_border_width
Quick Replies button border width.

* **Type:** dimen 
* **Default value:** 1dp


---  


### Secure Form

#### pci_form_hide_logo
Define if to hide logo inside the pci secure form web view.

* **Type:** bool
* **Default value:** false


#### pci_form_font_name
Define the font of the pci secure form.

* **Type:** string
* **Default value:** No value (use device's default)


#### lpmessaging_ui_secure_form_progress_bar.xml	
Default progress bar vector drawable for PCI secure form (after pressing to fill the form, the button changes to progress bar until we can show the form). To Override this resource, create a vector drawable under the android drawable folder with the same resource name.


---  

### Survey screen


#### csatSurveyExpirationInMinutes
Expiration of CSAT in minutes from the moment the conversation was ended. If Survey exceeded the expiration, it does not present to the user.

* **Type:** integer
* **Default value:** 1440



#### feedback_fragment_background_color
Background color for the feedback dialog.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentbackground.png" alt="fragmentbackground">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_title_question
Title color for the feedback dialog.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/black</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmenttitle.png" alt="fragmenttitle">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_star
Start color for the feedback dialog.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #229A49 (green)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentstar.png" alt="fragmentstar">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_rate_text
Rating title color for the feedback dialog.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #5b5c5e (dark grey)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentratetext.png" alt="fragmentratetext">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>




#### feedback_fragment_title_yesno
Yes and no color for the feedback dialog.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #5b5c5e (dark grey)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmenttitleyesno.png" alt="fragmenttitleyesno">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_yesno_btn_selected_background
Background color of the yes or no selected in the feedback dialog.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #229A49</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentyesnobtn.png" alt="fragmentyexnobtn">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_yesno_btn_default_background
Default background of the yes and no of the feedback dialog.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmenyesnobtndeafult.png" alt="feedback_fragment_yesno_btn_default_background">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_yesno_btn_text_selected
Text color for the yes/no buttons when selected in the feedback dialog.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentyesnobtntext.png" alt="fragmentratetext">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_yesno_btn_text_default
Feedback dialog yes/no text color when in default.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #5B5C5E</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentbtntextdefault.png" alt="fragmentbtntextdefault">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_yesno_btn_stroke_default
Feedback dialog yes/no stroke color when in default.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #E2E2E3</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentyesnobtbstroke.png" alt="fragmentyesnobtbstroke">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_yesno_btn_stroke_selected
Feedback dialog yes/no stroke color when selected.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #229A49</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/yesnobtnstrokeselected.png" alt="yesnobtnstrokeselected">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_yesno_btn_stroke_width_default
Feedback dialog yes/no stroke width size when in default.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 1dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/yesnobtbnstrokewidth.png" alt="yesnobtbnstrokewidth">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_yesno_btn_stroke_width_selected
Feedback dialog yes/no stroke width size when in selected.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 1dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/yesnobtnstrokewidthselected.png" alt="yesnobtnstrokewidthselected">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_submit_message
Feedback dialog submit message text color.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #565656</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentsubmitmessage.png" alt="fragmentsubmitmessage">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_submit_btn_enabled
Feedback dialog submit button color when enabled.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #229A49</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentsubmitbtnenabled.png" alt="fragmentsubmitbtnenabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_submit_btn_text_enabled
Feedback dialog submit button text color when enabled.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentbtntextenabled.png" alt ="fragmentbtntextenabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_submit_btn_disabled
Feedback dialog submit button color when disabled.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentsubmitbtndisabled.png" alt="fragmentsubmitbtndisabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### feedback_fragment_submit_btn_text_disabled
Feedback dialog submit button text color when disabled.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #BDBDBD</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/submitbtntextdisabled.png" alt="submitbtntextdisabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_submit_btn_stroke_enabled
Feedback dialog submit button stroke color when enabled.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #229A49</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/submitbtnstrokeenabled.png" alt="submitbtnstrokeenabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_submit_btn_stroke_disabled
Feedback dialog submit button stroke color when disabled.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #E2E2E3</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/submitbtnstrokedisabled.png" alt="submitbtnstrokedisabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_submit_btn_stroke_width_enabled
Feedback dialog submit button stroke width size when enabled.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 1dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/btnstrokewidthenabled.png" alt="btnstrokewidthenabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_submit_btn_stroke_width_disabled
Feedback dialog submit button stroke width size when disabled.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 1dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/btnstrokewidthdisabled.png" alt="btnstrokewidthdisabled">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### feedback_fragment_agent_details_name
Define the color of the agent name on agent details section in feedback dialog.Visible only if [show_agent_details_csat](#show_agent_details_csat) is set to **true**.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/black</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/fragmentagentdetailnames.png" alt="fragmentagentdetailnames">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### show_feedback
Defines whether to show the feedback dialog.

* **Type:** bool  
* **Default value:** true

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### show_agent_details_csat
Define if the agent’s name and avatar are visible on top of feedback dialog.

{:.notice}
If both [show_yes_no_question](#show_yes_no_question) and [show_agent_details_csat](#show_agent_details_csat) are set to **true**, then `show_yes_no_question` gets ignored and hidden.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> bool</li>
      <li><b>Default value:</b> true (show)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/showyesno.png" alt="showyesno">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### show_yes_no_question
Defines whether to show or hide the yes/no question in the feedback dialog (true=show, false=hide).


{:.notice}
If both `show_yes_no_question` and [show_agent_details_csat](#show_agent_details_csat) are set to **true**, then `show_yes_no_question` gets ignored and hidden.

<div style="float: left; width: 50%;height: 400px;">
   <ul>
      <li><b>Type:</b> bool</li>
      <li><b>Default value:</b> true</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/showyesno.png" alt="showyesno">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### show_csat_thank_you
Define if "thank you" screen will appear after submitting the survey. 

* **Type:** bool  
* **Default value:** true (show)

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### button_corner_radius
Makes CSAT Yes/No and Submit buttons corner radiuses customizable (through dimens.xml).

<div style="float: left; width: 50%;height: 75px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 30dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_csat_yesno_radius.png">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>




---   

### Structured Content


#### enable_structured_content
Enable or disable structured content feature.

* **Type:** bool
* **Default value:** false


#### structured_content_border_color
Color code for the structured content bubble outline color.

* **Type:** color 
* **Default value:** #EDEDED (light gray)


#### structured_content_border_width
Integer in dp for the bubble stroke width of the structured content bubble.

* **Type:** dimen 
* **Default value:** 1dp


#### structured_content_map_zoom&
Integer that defines the zoom level of the structured content map view. For more details, see [Google map API](https://developers.google.com/maps/documentation/android-api/views#zoom).

* **Type:** integer
* **Default value:** 18


#### structured_content_link_as_callback
Set the Structured Content link as a callback (true) instead of a deep link intent (false).

* **Type:** bool
* **Default value:** false (deep link intent)


#### lp_google_maps_key
Set the host app's Google Map key to enable map views in Structured Content.

* **Type:** string
* **Default value:** no value


#### structured_content_background_color
The color of the background of structured content elements. 

* **Type:** color
* **Default value:** #FFFFFF


#### structured_content_bottom_right_radius
Configuration for bottom right corner radius of structured content card.

* **Type:** dimen 
* **Default value:** 0dp


#### structured_content_bottom_left_radius
Configuration for top left corner radius of structured content card.

* **Type:** dimen 
* **Default value:** 0dp
 
 
#### structured_content_top_right_radius
Configuration for top right corner radius of structured content card. 

* **Type:** dimen 
* **Default value:** 0dp


#### structured_content_bottom_left_radius
Configuration for bottom left corner radius of structured content card.

* **Type:** dimen 
* **Default value:** 0dp


---  

### System messages

#### system_bubble_text_color
Color code for the text of the system messages.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #46474A (dark gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/conversation_separator_text_color.png" alt="separatortextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

---  

### Time to Response and Off Hours

#### disableTTRPopup
Defines whether to disable the TTR snackbar popup (true=disable) false by default.

* **Type:** bool 
* **Default value:** false

#### show_timestamp_in_ttr_notification
When true the TTR snackbar will display the time until the agent responds. If set to false, a general message is displayed.

* **Type:** bool
* **Default value:** true

#### ttr_duration
Set the duration that the TTR snackbar will be visible (ms).

* **Type:** integer
* **Default value:** 3000


#### ttrFirstTimeDelaySeconds
Set the time in seconds before the first the TTR snackbar will be displayed.

* **Type:** integer
* **Default value:** 10

#### ttr_message_off_hours_enabled
Defines whether to show the off hours snackbar popup (true=enable).

* **Type:** bool
* **Default value:** true

#### ttrShowFrequencyInSeconds
Define the frequency of the TTR (time to response) messages.

* **Type:** integer
* **Default value:** 8


---  

### Unread Messages


#### unread_indicator_bubble_enable
Toggle the mode of the unread_indicator_bubble_enable. 
If **unread_indicator_bubble_enable**  is disabled, the "scroll to bottom" button will scroll to bottom of the conversation but the count indicator and message preview  will not be displayed".

Note: Regardless of **unread_indicator_bubble_enable** value, the conversation screen will always scrolls to the last position where the user left off.

* **Type:** bool 
* **Default value:** true

#### unread_indicator_bubble_text_color
Enable or disable the unread message indicator (shown or invisible) - true by default.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/unreadindicatorbubbletextcolor.png" alt="unreadindicatorbubbletextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### unread_indicator_bubble_background_color
Color code for the background of the unread messages bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #EDEDED (light gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/unread_indicator_bubble_background_color.png" alt="unread_indicator_bubble_background_color">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

---  

### Bubbles

#### agent_bubble_stroke_width
Int number for the outline width.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_stroke_width.png" alt="strokewidth">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_stroke_color
Color code for the outline color.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_stroke_color.png" alt="strokecolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_message_text_color
Color code for the text of the agent bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_message_link_text_color.png" alt="textcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_message_link_text_color
Color code for links in the text of the agent bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_message_link_text_color.png" alt="linktextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_timestamp_text_color
Color code for the timestamp of the agent bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #46474A (dark gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_timestamp_text_color.png" alt="timestamptextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_background_color
Color code for the background of the agent bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agentbubblebackgroundcolor.png" alt="backgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_avatar_background_color
Color code for the background of the agent default avatar next to the bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #949596 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agentavatarbackgroundcolor.png" alt="agentavatarbackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_avatar_icon_color
Color code for the agent default icon in the avatar next to the bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #ffffffff</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_avatar_icon_color.png" alt="iconcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### lp_messaging_ui_ic_agent_avatar	
Default agent avatar appearing next to an agent’s bubble when no avatar URL is assigned on LiveEngage and on agent avatar appearing on the action bar. 

If you want to define the background color for this avatar, override [agent_avatar_background_color](#agent_avatar_background_color) resource ID.


#### lp_messaging_ui_brand_logo	
Default brand avatar on the avatar next to brand bubble (the first brand message) and on agent avatar appearing on the action bar before an agent is assigned. 

If you want to define the background color for this avatar, override [brand_logo_background_color](#brand_logo_background_color) resource ID. Only relevant for bubble brand’s avatar. 

Background color of the agent avatar on action bar is [agent_avatar_background_color](#agent_avatar_background_color).


#### agent_bubble_link_preview_background_color
Color code for the background of the agent bubble when url is presented.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #ffffffff</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_link_preview_background_color.png" alt="previewbackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_link_preview_title_text_color
Color code for the background of the agent title text color when url is presented.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #ffffffff</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_link_preview_title_text_color.png" alt="titletextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_link_preview_description_text_color
Color code for the background of the agent description text color when url is presented.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #555555 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_link_preview_description_text_color.png" alt="descriptiontextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### agent_bubble_pci_form_invitation_background_color
background color of the form invitation bubble

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #ffffffff</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_pci_form_invitation_background_color.png" alt="invitationbackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_pci_form_invitation_background_btn_color
background color of the form invitation button only

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #ffffffff</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_pci_form_invitation_button_text_color.png" alt="buttontextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### agent_bubble_pci_form_invitation_stroke_color
color of the stroke (border) of the form invitation bubble.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #949596 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_pci_form_invitation_stroke_color.png" alt="strokecolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_pci_form_invitation_button_text_color
color of the text on the button  

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_pci_form_invitation_button_text_color.png" alt="invitationbuttoncolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_pci_form_invitation_description_text_color
Text color on the description in the form invitation bubble.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #949596 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_pci_form_invitation_description_text_color.png" alt="descriptiontextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### agent_bubble_pci_form_invitation_title_text_color
text color on the title in the form invitation bubble.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #ff000000</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_pci_form_invitation_title_text_color.png" alt="titletextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### agent_bubble_pci_form_invitation_icon_tint_color
color of the icon in the form invitation bubble.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/agent_bubble_pci_form_invitation_icon_tint_color.png" alt="tintcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### chat_bubble_padding_right
Chat message (agent/consumer) bubble right padding.

<div style="float: left; width: 50%;height: 80px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_agent_bubble_right_padding.png" alt="agent_bubble_right_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### chat_bubble_padding_left
Chat message (agent/consumer) bubble left padding.

<div style="float: left; width: 50%;height: 80px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_agent_bubble_left_padding.png" alt="agent_bubble_left_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### chat_bubble_padding_top
Chat message (agent/consumer) bubble top padding.

<div style="float: left; width: 50%;height: 80px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_agent_bubble_top_padding.png" alt="agent_bubble_top_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### chat_bubble_padding_bottom
Chat message (agent/consumer) bubble bottom padding.

<div style="float: left; width: 50%;height: 80px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 8dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/android_agent_bubble_bottom_padding.png" alt="agent_bubble_bottom_padding">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### show_agent_typing_in_message_bubble

True - the agent-is-typing-indicator appears in "temporary" bubble and the style is available in both fragment and activity modes.

False - the agent-is-typing-indicator appears in the status bar (under the agent name) and the style is available only in activity mode.

Only available as long as the announce_agent_typing configuration is on (set as true).

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> bool</li>
      <li><b>Default value:</b> false</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <td><img src="img/android_agent_typing_bubble.png"></td>
   </figure>
</div>


<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

{:.important}
If you want to present a different animation or image, create a file and name it *lp_messaging_ui_typing_animation_frames.xml* to override the SDK's original animation.<br><br>**Default value:** LivePerson animation


#### agent_bubble_link_preview_background_stroke_color
The border color of the link preview bubble sent by the agent.

* **Type:** color
* **Default value:** #EDEDED

#### agent_bubble_link_preview_background_stroke_width
The border width of the link preview bubble sent by the agent.

* **Type:** dimen
* **Default value:** 1dp

#### consumer_bubble_stroke_width
integer in dp for the bubble stroke width of the consumer bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 1dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_stroke_width.png" alt="strokewidth">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_message_text_color
Color code for the text of the consumer bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> @android:color/black</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_message_text_color.png" alt="messagetextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_message_link_text_color
Color code for links in the text of the consumer bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_message_link_text_color.png" alt="linktextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_timestamp_text_color
Color code for the timestamp of the consumer bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #46474A (dark gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_timestamp_text_color.png" alt="timestamptextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_background_color
Color code for the background of the consumer bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #EDEDED (light gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_background_color.png" alt="bubblebackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_state_text_color
Color code for state text next to the consumer bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #46474A (dark gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_state_text_color.png" alt="statetextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_stroke_color
Color code for the stroke of the consumer bubble.

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #EDEDED (light gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_stroke_color.png" alt="strokecolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_link_preview_background_color
Color code for the background of the consumer bubble when url is presented.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> white</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_link_preview_background_color.png" alt="previewbackgroundcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_link_preview_title_text_color
Color code for the background of the consumer title text color when url is presented.

<div style="float: left; width: 50%;height: 125px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> black</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_link_preview_title_text_color.png" alt="titletextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_link_preview_description_text_color
Color code for the background of the consumer description text color when url is presented.

<div style="float: left; width: 50%;height: 140px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #555555 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_link_preview_description_text_color.png" alt="descriptiontextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_read_status_color
Color code for the read status icon (if enable).

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #004DC9 (blue)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_read_status_color.png" alt="readstatuscolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

 
 
#### consumer_bubble_received_status_color
Color code for the received status icon (if enable).

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #CECECE</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_received_status_color.png" alt="statuscolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### consumer_bubble_sent_status_color
Color code for the sent status icon (if enable).

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #CECECE</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_sent_status_color.png" alt="sentstatuscolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### consumer_bubble_sending_status_color
Color code for the sending status icon (if enable).

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> color</li>
      <li><b>Default value:</b> #949596 (gray)</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_sending_status_color.png" alt="sendingstatuscolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>

#### consumer_bubble_link_preview_background_stroke_color
The border color of the link preview bubble sent by the consumer.

* **Type:** color
* **Default value:** #EDEDED



#### consumer_bubble_link_preview_background_stroke_width
The border width of the link preview bubble sent by the consumer.

* **Type:** dimen
* **Default value:** 1dp

#### end_bubble_bottom_left_radius
Corner radius of bottom left consumer bubbles (on the right side). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 10dp, bottom_right is 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_stroke_width.png" alt="strokewidth_consumer">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### end_bubble_top_left_radius
Corner radius of top left consumer bubbles (on the right side). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 10dp, bottom_right is 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_stroke_width.png" alt="strokewidth_consumer">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### end_bubble_top_right_radius
Corner radius of top right consumer bubbles (on the right side). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 10dp, bottom_right is 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_stroke_width.png" alt="strokewidth_consumer">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### end_bubble_bottom_right_radius
Corner radius of bottom right consumer bubbles (on the right side). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 10dp, bottom_right is 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/consumer_bubble_stroke_width.png" alt="strokewidth_consumer">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### start_bubble_bottom_left_radius
Corner radius of the bottom left agent/brand bubbles (on the left side). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 10dp, bottom_left is 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/strokewidth.png" alt="strokewidth_agnet">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### start_bubble_top_left_radius
Corner radius of the top left agent/brand bubbles (on the left side). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 10dp, bottom_left is 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/strokewidth.png" alt="strokewidth_agnet">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### start_bubble_top_right_radius
Corner radius of the top right agent/brand bubbles (on the left side). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 10dp, bottom_left is 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/strokewidth.png" alt="strokewidth_agnet">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>



#### start_bubble_bottom_right_radius
Corner radius of the bottom right agent/brand bubbles (on the left side). 

<div style="float: left; width: 50%;height: 73px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 10dp, bottom_left is 0dp</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/strokewidth.png" alt="strokewidth_agnet">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


#### unread_indicator_bubble_radius
Corner radius of the unread messages bubble. 

<div style="float: left; width: 50%;height: 120px;">
   <ul>
      <li><b>Type:</b> dimen</li>
      <li><b>Default value:</b> 20dp for all the corners</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
   <figure>
   <figcaption></figcaption>
   <img src="img/unreadindicatorbubbletextcolor.png" alt="unreadindicatorbubbletextcolor">
   </figure>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>




--- 

### Deprecated Attributes

#### custom_button_icon_name
String. Custom button icon filename without extension. This will be displayed on the toolbar.

#### custom_button_icon_description
String. Content description for custom button. It briefly describes the view and is primarily used for accessibility support. Set this property to enable better accessibility support for your application.

#### notification_large_icon_name
String. The name of a resource to use as the large icon of the push notification.

#### enter_message_divider_visible
Bool. Determine if the Enter Message edit text divider is visible or not.

