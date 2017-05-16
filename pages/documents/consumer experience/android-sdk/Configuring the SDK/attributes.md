---
title: Attributes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Customization and Branding

order: 264
permalink: android-attributes.html

---

### Brand

| Name | Description | Default |
| :--- | :--- | :--- |
| `````````<string name="brand_name">````````` | The brand name will be shown as a title on the toolbar when there is no active conversation. | My Brand |
| `````````<integer name="message_receive_icons">````````` | For each message, there are three indicators available: Message sent, Message received, Message read. You can customize the indicators according to your needs, by using a number between 1 and 3: <br> 0 - text (sent, delivered etc.) instead of icons <br> 1 - Sent only <br> 2 - Sent+received <br> 3 - Sent+received+read | |
| `````````<string-array name="message_receive_text">````````` | If you set 0 in the resource message_receive_icons, you can specify what texts appears for each state. You must have 4 items, in the following order: <br> 1st item - message sent <br> 2nd item - message delivered <br> 3rd item - message read <br> 4th item - message not delivered <br> 5th item - message sending | |
| `````````<bool name="clear_history_show_confirm_dialog">````````` | Define if to show confirm dialog before clearing history or not. | true |

###  Brand Message Bubble - the first brand message

| Name | Description | Default |
| :--- | :--- | :--- |
| `````````<dimen name="brand_bubble_stroke_width">````````` | Int number for the outline width. | 0dp |
| `````````<color name="brand_bubble_stroke_color">````````` | Color code for the outline color. | #004DC9 (blue) |
| `````````<color name="brand_bubble_message_text_color">````````` | Color code for the text of the brand bubble | @android:color/white |
| ```<color name="brand_bubble_message_link_text_color">``` | Color code for links in the text of the brand bubble. | @android:color/white |
| ```<color name="brand_bubble_timestamp_text_color">``` | Color code for the timestamp of the brand bubble. | #46474A (dark gray) |
| ```<color name="brand_bubble_background_color">``` | Color code for the background of the brand bubble. | #004DC9 (blue) |
| ```<color name="brand_logo_background_color">``` | Color code for the background of the default brand logo next to the bubble. | #007AFF (light blue) |

###  Agent Message Bubbles

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<dimen name="agent_bubble_stroke_width">``` | Int number for the outline width. | 0dp |
| ```<color name="agent_bubble_stroke_color">``` | Color code for the outline color. | #004DC9 (blue) |
| ```<color name="agent_bubble_message_text_color">``` | Color code for the text of the agent bubble. | @android:color/white |
| ```<color name="agent_bubble_message_link_text_color">``` | Color code for links in the text of the agent bubble. | @android:color/white |
| ```<color name="agent_bubble_timestamp_text_color">``` | Color code for the timestamp of the agent bubble. | #46474A (dark gray) |
| ```<color name="agent_bubble_background_color">``` | Color code for the background of the agent bubble. | #004DC9 (blue) |
| ```<color name="agent_avatar_background_color">``` | Color code for the background of the agent default avatar next to the bubble | #949596 (gray) |
| ```<color name="agent_avatar_icon_color">``` | Color code for the agent default icon in the avatar next to the bubble. | @android:color/white |
| ```<color name="agent_bubble_link_preview_background_color">``` | Color code for the background of the agent bubble when url is presented. | @android:color/white |
| ```<color name="agent_bubble_link_preview_title_text_color">``` | Color code for the background of the agent title text color when url is presented. | @android:color/black |
| ```<color name="agent_bubble_link_preview_description_text_color">``` | Color code for the background of the agent description text color when url is presented. | #555555 (gray) |

###  Consumer Bubbles

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<dimen name="consumer_bubble_stroke_width">``` | integer in dp for the bubble stroke width of the consumer bubble. | 1dp |
| ```<color name="consumer_bubble_message_text_color">``` | Color code for the text of the consumer bubble. | @android:color/black |
| ```<color name="consumer_bubble_message_link_text_color">``` | Color code for links in the text of the consumer bubble. | #004DC9 (blue) |
| ```<color name="consumer_bubble_timestamp_text_color">``` | Color code for the timestamp of the consumer bubble. | #46474A (dark gray) |
| ```<color name="consumer_bubble_background_color">``` | Color code for the background of the consumer bubble. | #EDEDED (light gray) |
| ```<color name="consumer_bubble_state_text_color">``` | Color code for state text next to the consumer bubble. | #46474A (dark gray) |
| ```<color name="consumer_bubble_stroke_color">``` | Color code for the stroke of the consumer bubble. | #EDEDED (light gray) |
| ```<color name="consumer_bubble_link_preview_background_color">``` | Color code for the background of the consumer bubble when url is presented. | @android:color/white |
| ```<color name="consumer_bubble_link_preview_title_text_color">``` | Color code for the background of the consumer title text color when url is presented. | @android:color/black |
| ```<color name="consumer_bubble_link_preview_description_text_color">``` | Color code for the background of the consumer description text color when url is presented | #555555 (gray) |

###  System messages

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<color name="system_bubble_text_color">``` | Color code for the text of the system messages. | #46474A (dark gray) |
| ```<bool name="enable_conversation_resolved_message">``` | Enable/disable the conversation resolved message. | true |
| ```<bool name="enable_conversation_resolved_separator">``` | Enable/disable separators between conversations. | true |
| ```<color name="conversation_separator_text_color">``` | Color code for the conversation resolved message and separator. | #555555 (gray) |

###  Unread messages indicator Bubbles

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<bool name="unread_indicator_bubble_enable">``` | Enable/disable the unread message indicator (shown or invisible)  | true |
| ```<color name="unread_indicator_bubble_text_color">``` | Enable/disable the unread message indicator (shown or invisible) - true by default. | #004DC9 (blue) |
| ```<color name="unread_indicator_bubble_background_color">``` | Color code for the background of the unread messages bubble. | #EDEDED (light gray) |

###  Survey screen

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<integer name="csatSurveyExpirationInMinutes">``` | Define the expiration time in minutes for the survey to appear after closing the conversation. | 1440 |
| ```<color name="feedback_fragment_background_color">``` | Feedback dialog background color. | @android:color/white |
| ```<color name="feedback_fragment_title_question">``` | Feedback dialog title color. | @android:color/black |
| ```<color name="feedback_fragment_star">``` | Feedback dialog star color. | #229A49 (green) |
| ```<color name="feedback_fragment_rate_text">``` | Feedback dialog rating title color. | #5b5c5e (dark grey) |
 | ```<color name="feedback_fragment_title_yesno">``` | Feedback dialog yes/no color. | #5b5c5e (dark grey) |
| ```<color name="feedback_fragment_yesno_btn_selected_background">``` | Feedback dialog yes/no selected background color. | #229A49 |
| ```<color name="feedback_fragment_yesno_btn_default_background">``` | Feedback dialog yes/no default background. | @android:color/white |
| ```<color name="feedback_fragment_yesno_btn_text_selected">``` | Feedback dialog yes/no text color when selected. | @android:color/white |
| ```<color name="feedback_fragment_yesno_btn_text_default">``` | Feedback dialog yes/no text color when in default. | #5B5C5E |
| ```<color name="feedback_fragment_yesno_btn_stroke_default">``` | Feedback dialog yes/no stroke color when in default. | #E2E2E3 |
| ```<color name="feedback_fragment_yesno_btn_stroke_selected">``` | Feedback dialog yes/no stroke color when selected. | #229A49 |
| ```<dimen name="feedback_fragment_yesno_btn_stroke_width_default">``` | Feedback dialog yes/no stroke width size when in default. | 1dp |
| ```<dimen name="feedback_fragment_yesno_btn_stroke_width_selected">``` | Feedback dialog yes/no stroke width size when in selected. | 1dp |
| ```<color name="feedback_fragment_submit_message">``` | Feedback dialog submit message text color. | #565656 |
| ```<color name="feedback_fragment_submit_btn_enabled">``` | Feedback dialog submit button color when enabled. | #229A49 |
| ```<color name="feedback_fragment_submit_btn_text_enabled">``` | Feedback dialog submit button text color when enabled. | @android:color/white |
| ```<color name="feedback_fragment_submit_btn_disabled">``` | Feedback dialog submit button color when disabled. | @android:color/white |
| ```<color name="feedback_fragment_submit_btn_text_disabled">``` | Feedback dialog submit button text color when disabled. | #BDBDBD |
| ```<color name="feedback_fragment_submit_btn_stroke_enabled">``` | Feedback dialog submit button stroke color when enabled. | #229A49 |
| ```<color name="feedback_fragment_submit_btn_stroke_disabled">``` | Feedback dialog submit button stroke color when disabled. | #E2E2E3 |
| ```<dimen name="feedback_fragment_submit_btn_stroke_width_enabled">``` | Feedback dialog submit button stroke width size when enabled. | 1dp |
| ```<dimen name="feedback_fragment_submit_btn_stroke_width_disabled">``` | Feedback dialog submit button stroke width size when disabled. | 1dp |
| ```<color name="feedback_fragment_agent_details_name">``` | Define the color of the agent name on agent details section in feedback dialog. | Visible only if show_agent_details_csat is true. | @android:color/black |
| ```<bool name="show_feedback">``` | Defines whether to show the feedback dialog. | true |
| ```<bool name="show_agent_details_csat">``` | Define if the agent’s name and avatar are visible on top of feedback dialog. (true=show, false=hide) <br> *NOTE: if both show_yes_no_question and show_agent_details_csat are set to true, show_yes_no_question will be ignored and will not be visible.* | true |
| ```<bool name="show_yes_no_question">``` | Defines whether to show or hide the yes/no question in the feedback dialog (true=show, false=hide) <br> *NOTE: if both show_yes_no_question and show_agent_details_csat are set to true, show_yes_no_question will be ignored and will not be visible.* | true |
| ```<bool name="show_csat_thank_you">``` | Define if "thank you" screen will appear after submitting the survey. (true=show, false=hide) | true |

###  Message Edit Text

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<color name="edit_text_underline_color">``` | Color code for the Enter Message control underline color. | #90CAF9 |
| ```<color name="lp_enter_msg_text">``` | Define the input message text color. | @android:color/black |
| ```<color name="lp_enter_msg_hint">``` | Define the input message hint color. | @android:color/darker_gray |
| ```<color name="lp_send_button_text_enable">``` | Define the color of the send button when it’s enabled. | #004DC9 (blue) |
| ```<color name="lp_send_button_text_disable">``` | Define the color of the send button when it’s disabled. | #B7B8B9 |
| ```<bool name="use_send_image_button">``` | Use an icon for the send button instead of "Send" text |  false |

###  Connection status bar

| Name |  Description | Default |
| :--- | :--- | :--- |
| ```<color name="connection_status_connecting_bg_color">``` | Define the color of statusbar background color while trying to connect. | #F2F5F5F5 |
| ```<color name="connection_status_not_connected_bg_color">``` | Define the color of statusbar background color when connection is unavailable. | #CC000000 |
| ```<color name="connection_status_connecting_text_color">``` | Define the color of statusbar text color while trying to connect. | #46474A |
| ```<color name="connection_status_not_connected_text_color">``` | Define the color of statusbar text color when connection is unavailable. | @android:color/black |

###  In page navigation -  Scroll down indicator

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<bool name="scroll_down_indicator_enabled">``` | Enable/disable the scroll down indicator (shown or invisible). | true |
| ```<bool name="scroll_down_indicator_unread_summary_enabled">``` | Enable/disable the summary in scroll down indicator (shown or invisible).  If unread_indicator_bubble_enable is false, it will be in minimized mode without a badge indicating number of unread message. And tap will scroll to the last message. | true |
| ```<color name="scroll_down_indicator_unread_counter_text_color">``` | Define the color of the unread messages counter text color. | @android:color/white |
| ```<color name="scroll_down_indicator_unread_summary_text_color">``` | Define the color of the unread message summary (preview) text color. | @android:color/white |
| ```<color name="scroll_down_indicator_unread_counter_stroke_color">``` | Define the color of the unread messages counter stroke color. | #CC000000 |
| ```<dimen name="scroll_down_indicator_unread_counter_stroke_width">``` | Define the dimen of the unread messages counter stroke width. | 1dp |
| ```<color name="scroll_down_indicator_unread_counter_solid_color">``` | Define the color of the unread messages counter solid color. | #FF0000 (red) |
| ```<color name="scroll_down_indicator_background_color">``` | Define the color of the scroll down background color. | #CC000000 |
| ```<color name="scroll_down_indicator_arrow_down_color">``` | Define the color of the image arrow scrolling down. | @android:color/white |

###  Photo Sharing

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<bool name="enable_photo_sharing">``` | Enable/disable the photo sharing feature. True by default. | false |
| ```<integer name="max_number_stored_images">``` | Define the max number of images that will be stored locally. | 20 |
|```<integer name="full_image_compression_rate">``` | Define the image compression rate (percentage). | 50 |
| ```<integer name="thumbnail_longer_dimension_resize">``` | Define the size of the thumbnail image longer dimension after resizing it (pixels). | 100 |
| ```<integer name="full_image_longer_dimension_resize">``` | Define the size of the full image longer dimension after resizing it (pixels). | 800 |
| ```<integer name="max_image_size_kb">``` | Define the maximum image size in KB. | 3000 |
| ```<color name="attachment_menu_item_background_color">``` | Define the background color of the item attachment menu. | #004DC9 (blue) |

###  General Style

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<color name="conversation_background">``` | Define the color code for the entire view background.  In activity mode - Also the color of android:windowBackground | @android:color/white |
| ```<bool name="link_preview_use_big_picture">``` | Define which configuration to show when sending / receiving s link (big / small picture). | true | 
| ```<bool name="link_preview_enable_real_time_preview">``` | Define whether or not we should show a real time link preview. A preview while the consumer is typing an url | true  |
| ```<bool name="link_preview_to_use_more_than_og_tags">``` | parse only ```<og:>``` tags or others as well. | false - use ```<og:title>``` tags only. <br> true - use ```<og:title>``` and ```<title>``` tags |

###  Conversation Activity Style - (activity mode only!)

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<color name="lp_colorPrimary">``` | Define the primary color of the activity. | android:colorPrimary |
| ```<color name="lp_colorPrimaryDark">``` | Define the primary dark color of the activity. | android:colorPrimaryDark |

###  Accessibility

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<integer name="snachbar_duration_for_accessibility">``` | Number of milliseconds to show the TTR snackbar if the accessibility TalkBack option is on. | 60,000 |

###  Miscellaneous

| Name | Description | Default |
| :--- | :--- | :--- |
| ```<bool name="disableTTRPopup">``` | Defines whether to disable the TTR snackbar popup (true=disable) | false |
| ```<bool name="contextual_menu_on_toolbar">``` | Enable multiple message copy menu over the app toolbar. If true, when long pressing a message on chat it will select the message and enable a context menu over the toolbar, enabling the user to copy multiple messages. If false, long pressing a message will display a copy popup menu. | true |
| ```<color name="bubble_selected_background_color">``` | Define the background color of item when it’s selected to be copied (if multiple message copy is enabled). | #5597a7e3 |
| ```<integer name="encryptionVersion">``` | Defines the encryption version to use. Currently available version 1 only. <br> 1 - encrypt data <br> 0 - disable encryption | 1 |
| ```<string name="csds_url">``` | For vanity URL purposes. For regular use please use: adminlogin.liveperson.net. | adminlogin.liveperson.net |
| ```<integer name="idp_num_history_conversation">``` | When user is authenticated, this indicates the number of recent conversations to reload from the server (including their messages) when running for the first time. | 2 |
| ```<bool name="show_timestamp_in_ttr_notification">``` |When true the TTR snackbar will display the time until the agent responds. If set to false, a general message is displayed. | true |
| ```<integer name="ttr_duration">``` | Set the duration that the TTR snackbar will be visible (ms). | 3,000 |
| ```<bool name="send_agent_profile_updates_when_conversation_closed">``` | When true the callback LivePersonCallback#onAgentDetailsChanged will be called with the agent details updates even if the last conversation is closed (in this case it will provide the assigned agent of the last conversation). If false, this callback will be called only when the current conversation is active.  | true |
| ```<bool name="ttr_message_off_hours_enabled">``` | Defines whether to show the off hours snackbar popup (true=enable). | true |
| ```<integer name="ttrShowFrequencyInSeconds">``` | Define the frequency of the TTR (time to response) messages. | 8 |
| ```<bool name="enable_client_only_masking">``` | Defines whether to enable or disable client side only masking.  | false |
| ```<bool name="enable_real_time_masking">``` | Defines whether to enable or disable real time masking. | false |
| ```<string name="client_only_masking_regex">``` | Defines the java regex for client side only masking. | No value |
| ```<string name="client_only_mask_character">``` | The character used to mask client only string. | ‘*’ |
| ```<string name="real_time_masking_regex">``` | Defines the Java regex for real time masking. | No value |
| ```<string name="real_time_mask_character">``` | The character used to mask the real time message. | ‘*’ |
| ```<string name="lp_bubble_phone_links_regex">``` | Defines the java regex for phone links in bubble messages.  | No value |
| ```<string name="lp_bubble_url_links_regex">``` | Defines the java regex for url links in bubble messages.  | No value |
| ```<string name="lp_bubble_email_links_regex">``` | Defines the java regex for email links in bubble messages.  | No value |
| ```<string name="lp_date_format">``` | Define date format.  | No value |
|```<string name="lp_time_format">``` | Define time format.  | No value |
| ```<string name="lp_date_time_format">``` | Define date-time format. | No value |
| ```<integer name="sendingMessageTimeoutInMinutes">``` | Define timeout for automatic resending pending message before moving it to failed. | 60 |

###  Deprecated Attributes

| Name | Description | 
| :--- | :--- |
| ```<string name="custom_button_icon_name">``` | Custom button icon filename without extension. This will be displayed on the toolbar. |
| ```<string name="custom_button_icon_description">``` | Content description for custom button. It briefly describes the view and is primarily used for accessibility support. Set this property to enable better accessibility support for your application. |
| ```<string name="notification_large_icon_name">``` | The name of a resource to use as the large icon of the push notification. |
