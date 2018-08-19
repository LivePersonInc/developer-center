---
title: Modifying Strings
redirect_from:
  - android-modifying-string.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: String Localization

order: 210
permalink: mobile-app-messaging-sdk-for-android-string-localization-modifying-strings.html

indicator: messaging
---

You may change every string appearing on the SDK interface by overriding the respective string key.

_**Note:** for how to create a new locale file, click [here](android-localization-strings.html#create-new-localization-file){:target="_blank"}_

**General**

<table>
<tr>
  <th>String name</th>
  <th>Used in</th>
  <th>Default value</th>
</tr>
<tr>
  <td>lp_enter_message</td>
  <td>Enter message text box when empty.</td>
  <td>Write a message</td>
</tr>
<tr>
  <td>lp_send</td>
  <td>The "Send" button text.</td>
  <td>Send</td>
</tr>
<tr>
  <td>lp_no_network_toast_message</td>
  <td>A toast message when there is no network.</td>
  <td>No internet connection. Please check your connection and try again.</td>
</tr>
<tr>
  <td>lp_no_action_not_available_toast_message</td>
  <td>A toast message when the required action is not available (e.g. Mark as urgent when there is no active conversation).</td>
  <td>Action not available - no open conversation</td>
</tr>
<tr>
  <td>lp_today</td>
  <td>Today header in conversation.</td>
  <td>Today</td>
</tr>
<tr>
  <td>lp_yesterday</td>
  <td>Yesterday header in conversation.</td>
  <td>Yesterday</td>
</tr>
<tr>
  <td>lp_first_message</td>
  <td>System message before the first conversation.</td>
  <td>How can I help you today?</td>
</tr>
<tr>
  <td>lp_loading_message</td>
  <td>Text above the loading icon when loading previous messages.</td>
  <td>Loading...</td>
</tr>
<tr>
  <td>lp_conversation_ended_by_agent_with_name</td>
  <td>Message when the conversation was resolved when we have an agent name.
%1$s - agent name
%2$s - time</td>
  <td>Conversation resolved by %1$s \n %2$s</td>
</tr>
<tr>
  <td>lp_conversation_ended_by_agent_no_name</td>
  <td>Message when the conversation was resolved when we don’t have the agent name.
%1$s - time</td>
  <td>Conversation resolved by Agent \n %1$s</td>
</tr>
<tr>
  <td>lp_conversation_ended_by_you</td>
  <td>Message when the conversation was resolved by the client.
%1$s - time</td>
  <td>Conversation resolved by You \n %1$s</td>
</tr>
<tr>
  <td>lp_is_typing</td>
  <td>Text in conversation activity when agent is typing.</td>
  <td>typing...</td>
</tr>
<tr>
  <td>lp_mark_as_urgent_menu_text</td>
  <td>"Mark as urgent" string in menu and snack bar.</td>
  <td>Mark as urgent</td>
</tr>
<tr>
  <td>lp_mark_as_resolved_menu_text</td>
  <td>"Mark as resolved" string in menu.</td>
  <td>Mark as resolved</td>
</tr>
<tr>
  <td>lp_clear_history_menu_text</td>
  <td>"Clear history" string in menu</td>
  <td>Clear history</td>
</tr>
<tr>
  <td>lp_dismiss_as_urgent_menu_text</td>
  <td>Dismiss urgent menu text.</td>
  <td>Dismiss urgent</td>
</tr>
<tr>
  <td></td>
  <td>"Clear history" string in menu.</td>
  <td>Clear history</td>
</tr>
<tr>
  <td></td>
  <td>"Clear history" confirmation dialog text</td>
  <td>All of your existing conversation history will be lost. Are you sure?</td>
</tr>
<tr>
  <td></td>
  <td>"Clear" button text on "Clear history" dialog.</td>
  <td>Clear</td>
</tr>
<tr>
  <td>lp_end_conversation_first</td>
  <td>Dialog text that is shown in case trying to clear history when a conversation is open.</td>
  <td>Please resolve the conversation first.</td>
</tr>
<tr>
  <td>lp_dismiss_as_urgent_two_lines</td>
  <td>"Dismiss urgent" string in menu and snack bar.</td>
  <td>Dismiss urgent</td>
</tr>
<tr>
  <td>lp_mark_as_urgent_dialog_header</td>
  <td>Mark as urgent confirmation dialog header.</td>
  <td>Are you sure you want to mark this conversation as urgent?</td>
</tr>
<tr>
  <td>lp_dismiss_urgent_dialog_header</td>
  <td>Dismiss urgent confirmation dialog header.</td>
  <td>Are you sure you want to mark this conversation as not urgent?</td>
</tr>
<tr>
  <td>lp_mark_as_resolved_dialog_message</td>
  <td>Resolve conversation confirmation dialog text.</td>
  <td>Are you sure this topic is resolved?</td>
</tr>
<tr>
  <td>lp_mark_as_urgent_dialog_message</td>
  <td>Mark as urgent confirmation dialog text.</td>
  <td>This means that your conversation will get top priority.</td>
</tr>
<tr>
  <td>lp_dismiss_urgent_dialog_message</td>
  <td>Dismiss urgent confirmation dialog text.</td>
  <td>This means that your conversation will get normal priority.</td>
</tr>
<tr>
  <td>lp_ttr_message_with_timestamp</td>
  <td>Text in TTR snackbar when timestamp is shown.</td>
  <td>An agent will respond within the next</td>
</tr>
<tr>
  <td>lp_ttr_message_minutes</td>
  <td>(plurals string that contains: "one" and "others")
The one or others strings is concatenated to the lp_ttr_message_with_timestamp string above according to whether it’s single minute multiple minutes.
Example</td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td>one</td>
  <td> %1$s minute</td>
</tr>
<tr>
  <td></td>
  <td>others</td>
  <td> %1$s minutes</td>
</tr>
<tr>
  <td>lp_ttr_message_hours</td>
  <td>(plurals string that contains: "one" and "others").
The one or others strings is concatenated to the lp_ttr_message_with_timestamp string above according to whether it’s single hour multiple hours.
Example</td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td>one</td>
  <td> %1$s hour</td>
</tr>
<tr>
  <td></td>
  <td>others</td>
  <td> %1$s hours</td>
</tr>
<tr>
  <td>lp_ttr_message_days</td>
  <td>(plurals string that contains: "one" and "others")
The one or others strings is concatenated to the lp_ttr_message_with_timestamp string above according to whether it’s single day multiple days.
Example</td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td>one</td>
  <td> %1$s day</td>
</tr>
<tr>
  <td></td>
  <td>others</td>
  <td> %1$s days</td>
</tr>
<tr>
  <td>lp_ttr_message_no_timestamp</td>
  <td>Text in TTR snackbar when timestamp is not shown.</td>
  <td>An agent will respond shortly</td>
</tr>
<tr>
  <td>lp_feedback_1</td>
  <td>String displayed when one star is selected in the feedback dialog.</td>
  <td>Very Dissatisfied</td>
</tr>
<tr>
  <td>lp_feedback_2</td>
  <td>String displayed when two stars are selected in the feedback dialog.</td>
  <td>Dissatisfied</td>
</tr>
<tr>
  <td>lp_feedback_3</td>
  <td>String displayed when three stars are selected in the feedback dialog.</td>
  <td>Neither</td>
</tr>
<tr>
  <td>lp_feedback_4</td>
  <td>String displayed when four stars are selected in the feedback dialog.</td>
  <td>Satisfied</td>
</tr>
<tr>
  <td>lp_feedback_5</td>
  <td>String displayed when five stars are selected in the feedback dialog.</td>
  <td>Very Satisfied</td>
</tr>
<tr>
  <td>lp_feedback_thank_you</td>
  <td>Text displayed after the feedback dialog is submitted.</td>
  <td>Survey submitted successfully.\nThank you!</td>
</tr>
<tr>
  <td>lp_feedback_submit</td>
  <td>The feedback submit button text.</td>
  <td>Submit</td>
</tr>
<tr>
  <td>lp_feedback_yesno_question</td>
  <td>Yes/No question text in feedback dialog.</td>
  <td>Did we solve your issue today?</td>
</tr>
<tr>
  <td>lp_feedback_submit_message</td>
  <td>Submit message text at the bottom of feedback dialog.</td>
  <td>Your feedback helps us serve you better.\n It will not be shared with any customer service representatives.</td>
</tr>
<tr>
  <td>lp_feedback_yesno_negative_title</td>
  <td>Negative button text in the feedback dialog.</td>
  <td>NO</td>
</tr>
<tr>
  <td>lp_feedback_yesno_positive_title</td>
  <td>Positive button text in the feedback dialog.</td>
  <td>YES</td>
</tr>
<tr>
  <td>lp_feedback_question</td>
  <td>Feedback dialog rate question text.</td>
  <td>How would you rate your connection with our agent?</td>
</tr>
<tr>
  <td>lp_end</td>
  <td>End conversation "End" button text.</td>
  <td>End</td>
</tr>
<tr>
  <td>lp_skip</td>
  <td>Feedback dialog toolbar skip button text.</td>
  <td>Skip</td>
</tr>
<tr>
  <td>lp_done</td>
  <td>Feedback dialog toolbar done button text (after submitting).</td>
  <td>Done</td>
</tr>
<tr>
  <td>lp_ok</td>
  <td>Confirmation dialog OK button.</td>
  <td>OK</td>
</tr>
<tr>
  <td>lp_cancel</td>
  <td>Confirmation dialog Cancel button.</td>
  <td>Cancel</td>
</tr>
<tr>
  <td>lp_menu_copy</td>
  <td>Copy menu button text when selecting messages in conversation.</td>
  <td>Copy</td>
</tr>
<tr>
  <td>lp_end_conversation</td>
  <td>End conversation title.</td>
  <td>Resolve the conversation</td>
</tr>
<tr>
  <td>lp_resend_failed_conversation_closed</td>
  <td>Toast message displayed when trying to resend a failed message when conversation is already closed.</td>
  <td>This conversation has already been resolved.</td>
</tr>
<tr>
  <td>lp_resend_failed_masked_message</td>
  <td>Toast message displayed when trying to resend a failed masked message.</td>
  <td>Message failed to send. Please re-enter message and send again.</td>
</tr>
<tr>
  <td>lp_new_messages</td>
  <td>Notification message displayed when there are multiple push messages.</td>
  <td>new messages</td>
</tr>
<tr>
  <td>lp_message_time_now</td>
  <td>Message timestamp for the latest messages ("Now").</td>
  <td>Now</td>
</tr>
<tr>
  <td>lp_message_time_now_with_state</td>
  <td>Message timestamp for the latest messages that has a sending state ("now").</td>
  <td>Now</td>
</tr>
<tr>
  <td>lp_message_time_min_ago</td>
  <td>Message timestamp for older messages  ("5 min ago").</td>
  <td>Min ago</td>
</tr>
<tr>
  <td>lp_ttr_message_off_hours_time_zone_id</td>
  <td>Represents Java timezone ID that is used in the off hours message.
For a full list of the available IDs, use the "Aliases" from here.</td>
  <td>US/Pacific
</td>
</tr>
<tr>
  <td>lp_ttr_message_off_hours_message</td>
  <td>Message to show when the online hours is more than 2 days from now.
includes 1 param:
%1$s - for the full date (MMM dd, yyyy hh:mm a)</td>
  <td>Thanks for your message. We will be back online at %1$s</td>
</tr>
<tr>
  <td>lp_unread_message</td>
  <td>(plurals string that contains: "one" and "others").
Used in the unread messages indicator to indicate how many unread messages
Example</td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td>one</td>
  <td> %1$d UNREAD MESSAGE</td>
</tr>
<tr>
  <td></td>
  <td>others</td>
  <td> %1$d UNREAD MESSAGES</td>
</tr>
<tr>
  <td>lp_still_loading_message</td>
  <td>Message displayed when loading conversation takes longer the usual</td>
  <td>Still loading conversation...</td>
</tr>
<tr>
  <td>lp_date_time_format</td>
  <td>Date and time format to be used instead of the standard format</td>
  <td>No Value</td>
</tr>
<tr>
  <td>lp_failed_upload_toast_message</td>
  <td>Toast message displayed when uploading a photo failed</td>
  <td>Failed to upload file</td>
</tr>
<tr>
  <td>lp_failed_download_toast_message</td>
  <td>Toast message displayed when downloading a photo failed</td>
  <td>Failed to download file</td>
</tr>
<tr>
  <td>brand_name</td>
  <td>The default agent name displayed on the toolbar</td>
  <td>My Brand</td>
</tr>
<tr>
  <td>lp_ttr_message_off_hours_message_today</td>
  <td>A snackbar content when the agent is in off hours and TTR is sometime today</td>
  <td>Thanks for your message. We will be back online today at %1$s</td>
</tr>
<tr>
  <td>lp_ttr_message_off_hours_message_tomorrow</td>
  <td>A snackbar content when the agent is in off hours and TTR is sometime tomorrow</td>
  <td>Thanks for your message. We will be back online tomorrow at %1$s</td>
</tr>
<tr>
  <td>lp_add_a_caption</td>
  <td>Hint text in the Enter Message EditText on the image preview screen</td>
  <td>Add a caption</td>
</tr>
<tr>
  <td>lp_connection_status_connecting</td>
  <td>Connection bar text when connecting</td>
  <td>Connecting…</td>
</tr>
<tr>
  <td>lp_connection_status_trying_to_connect</td>
  <td>Connection bar text when the connection is longer than 5 seconds</td>
  <td>Still trying to connect…</td>
</tr>
<tr>
  <td>lp_connection_status_failed_to_connect</td>
  <td>Connection bar text when could not connect to the messaging server</td>
  <td>Failed to connect to the server.</td>
</tr>
<tr>
  <td>lp_connection_status_no_connection</td>
  <td>Connection bar text when there is no internet connection on the device</td>
  <td>Offline. Please check your connection.</td>
</tr>
<tr>
  <td>lp_attachment_menu_gallery_item_text</td>
  <td>The Gallery icon’s text in the attachment menu</td>
  <td>GALLERY</td>
</tr>
<tr>
  <td>lp_attachment_menu_camera_item_text</td>
  <td>The Camera icon’s text in the attachment menu</td>
  <td>CAMERA</td>
</tr>
</table>

| String name                                           | Used in                                                                 | Default value                                                                                       |
|-------------------------------------------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| lpmessaging_ui_pci_leave_dialog_title                 | Title of the PCI dialog before leaving unfilled form.                   | Are you sure?                                                                                       |
| lpmessaging_ui_pci_leave_dialog_description           | Body message of the PCI dialog before leaving unfilled form.            | Once you leave the secure form, you will not be able to access it again.                            |
| lpmessaging_ui_pci_leave_dialog_btn_positive          | Positive button text of the PCI dialog before leaving unfilled form.    | OK                                                                                                  |
| lpmessaging_ui_pci_leave_dialog_btn_negative          | Negative button text of the PCI dialog before leaving unfilled form.    | STAY                                                                                                |
| lpmessaging_ui_fill_in_form_text_button               | PCI form bubble action button text.                                     | Fill in form                                                                                        |
| lpmessaging_ui_secure_form_to_fill_in_message         | PCI form bubble message                                                 | This is a secure form. Information entered here is protected and cannot be accessed once submitted. |
| lpmessaging_ui_secure_form_viewed_message             | PCI form bubble message - state viewed (not filled and can’t be filled) | This form has already been viewed. Please ask the agent to resend the form.                         |
| lpmessaging_ui_secure_form_error_message              | PCI form bubble message - state error                                   | There was a problem opening this form. Please ask the agent to resend the form.                     |
| lpmessaging_ui_secure_form_expired_message            | PCI form bubble message - state expired                                 | Secure form has expired. Please ask the agent to resend the form.                                   |
| lpmessaging_ui_secure_form_submitted_message          | PCI form bubble message - state submitted                               | This form has been submitted and cannot be reopened for security reasons.                           |
| lpmessaging_ui_secure_form_consumer_submitted_message | Consumer-Submission bubble confirming form submission                   | I have submitted the %s form                                                                        |


**Clear History dialog**

<table>
<tr>
  <th>String name</th>
  <th>Used in</th>
  <th>Default value</th>
</tr>
<tr>
  <td>lp_clear_history_dialog_title</td>
  <td>Title of the Clear History confirm dialog</td>
  <td>Clear history</td>
</tr>
<tr>
  <td>lp_clear_history_dialog_message</td>
  <td>Body message of the Clear History confirm dialog</td>
  <td>All of your existing conversation history will be lost. Are you sure?</td>
</tr>
<tr>
  <td>lp_clear_history_dialog_positive_button</td>
  <td>Positive button text</td>
  <td>Clear</td>
</tr>
<tr>
  <td>lp_end_conversation_first</td>
  <td>Message text displayed when trying to clear history and the conversation is not resolved</td>
  <td>Please resolve the conversation first.</td>
</tr>
</table>


**Masking**

<table>
<tr>
  <th>String name</th>
  <th>Used in</th>
  <th>Default value</th>
</tr>
<tr>
  <td>lp_system_message_real_time_masked</td>
  <td>Text of system message, added after detecting a real time masked message (if this feature is enabled).</td>
  <td>Your personal data has been masked to protect your security and cannot be read by the agent.</td>
</tr>
<tr>
  <td>real_time_mask_character</td>
  <td>The character used to mask the real time message.</td>
  <td>*</td>
</tr>
<tr>
  <td>lp_system_message_client_only_masked</td>
  <td>Text of system message, added after detecting a client only masked message (if this feature is enabled).</td>
  <td>Your personal data has been masked to protect your security. Only the agent can read it.</td>
</tr>
<tr>
  <td>client_only_mask_character</td>
  <td>The character used to mask client only string.</td>
  <td>*</td>
</tr>
</table>


**Structured Content**

<table>
<tr>
  <th>String name</th>
  <th>Used in</th>
  <th>Default value</th>
</tr>
<tr>
  <td>lp_structured_content_display_failed</td>
  <td>Message displayed in the conversation if there is an error parsing the structured content message</td>
  <td>Content failed to display</td>
</tr>
<tr>
  <td>lp_new_message</td>
  <td>Message displayed on the scroll down indicator when a structured content message is received</td>
  <td>New message</td>
</tr>
</table>

**Audio Messaging**

<table>
<tr>
  <th>String name</th>
  <th>Used in</th>
  <th>Default value</th>
</tr>
<tr>
  <td>lp_accessibility_voice</td>
  <td>Accessibility on the mic button</td>
  <td>Voice</td>
</tr>
<tr>
  <td>lp_mic_tooltip_long_press</td>
  <td>Tooltip shown when short tapping the mic button.</td>
  <td>Long tap to record</td>
</tr>
<tr>
  <td>lp_mic_tooltip_release</td>
  <td>Tooltip shown when keeping mic tapped.</td>
  <td>Release for recording</td>
</tr>
<tr>
  <td>lp_mic_tooltip_max_recording</td>
  <td>Tooltip shown when the maximum recording time reached.</td>
  <td>Long tap to record</td>
</tr>
</table>

**Unauthenticated In-App Messaging**

<table>
<tr>
  <th>String name</th>
  <th>Used in</th>
  <th>Default value</th>
</tr>
<tr>
  <td>lp_new_unauth_user_dialog_title</td>
  <td>The title of the presented dialog when the identity is expired.</td>
  <td>New Conversation</td>
</tr>
<tr>
  <td>lp_new_unauth_user_dialog_message</td>
  <td>The body of the presented dialog when the identity is expired.</td>
  <td>"Hi there! As we haven't seen you for a while, we're opening a new conversation for you"</td>
</tr>
<tr>
  <td>lp_new_unauth_user_dialog_positive_button</td>
  <td>The button of the presented dialog when the identity is expired.</td>
  <td>OK</td>
</tr>
</table>

**Quick Replies**

<table>
<tr>
  <th>String name</th>
  <th>Used in</th>
  <th>Default value</th>
</tr>
<tr>
  <td>lpmessaging_ui_quick_replies_section</td>
  <td>Accessibility string when hovering on the Quick Replies control</td>
  <td></td>
</tr>
<tr>
  <td>lpmessaging_ui_quick_replies_button_content_description</td>
  <td>Accessibility string when hovering on the Quick Replies button</td>
  <td></td>
</tr>
</table>

**Accessibility strings (used by the Accessibility TalkBack)**

<table>
<tr>
  <th>String name</th>
  <th>Used in</th>
  <th>Default value</th>
</tr>
<tr>
  <td>lp_accessibility_received</td>
  <td>Received message status</td>
  <td>received</td>
</tr>
<tr>
  <td>lp_accessibility_selected</td>
  <td>Used to indicate the selected star on the feedback screen</td>
  <td>selected</td>
</tr>
<tr>
  <td>lp_accessibility_agent</td>
  <td>Used as a message prefix on the message from the agent</td>
  <td>Agent</td>
</tr>
<tr>
  <td>lp_accessibility_you</td>
  <td>Used as a message prefix on the message from the consumer</td>
  <td>You</td>
</tr>
<tr>
  <td>lp_accessibility_attachment_menu_button_collapsed</td>
  <td>The attachment menu button name when collapsed</td>
  <td>Attachment menu button collapsed</td>
</tr>
<tr>
  <td>lp_accessibility_attachment_menu_button_expanded</td>
  <td>The attachment menu button name when expanded</td>
  <td>Attachment menu button expanded</td>
</tr>
<tr>
  <td>lp_accessibility_photo_preview</td>
  <td>Used on the image on the preview screen</td>
  <td>Photo preview</td>
</tr>
<tr>
  <td>lp_accessibility_attachment_menu</td>
  <td>Used on the attachment menu</td>
  <td>Attachment menu</td>
</tr>
<tr>
  <td>lp_accessibility_gallery</td>
  <td>Used on the gallery button (on the attachment menu)</td>
  <td>Gallery</td>
</tr>
<tr>
  <td>lp_accessibility_camera</td>
  <td>Used on the camera button (on the attachment menu)</td>
  <td>Camera</td>
</tr>
<tr>
  <td>lp_accessibility_image</td>
  <td>Used on the thumbnail image on the conversation screen</td>
  <td>Image</td>
</tr>
<tr>
  <td>lp_accessibility_full_image</td>
  <td>Used on the image in the full image screen</td>
  <td>Full image</td>
</tr>
<tr>
  <td>lp_accessibility_resend</td>
  <td>Used on the resend button</td>
  <td>Resend</td>
</tr>
<tr>
  <td>lp_accessibility_agnet_icon</td>
  <td>Used on the agent avatar</td>
  <td>Agent Icon</td>
</tr>
<tr>
  <td>lp_accessibility_chat_message</td>
  <td>Used as a label on the 'Enter message’ EditText control</td>
  <td>Chat message</td>
</tr>
<tr>
  <td>lp_accessibility_image_caption</td>
  <td>A label string for the Enter Message EditText in the image preview screen</td>
  <td>Image caption</td>
</tr>
<tr>
  <td>lp_accessibility_photo</td>
  <td>Used on an image on the conversation screen</td>
  <td>Photo</td>
</tr>
<tr>
  <td>lp_accessibility_new_agent_message</td>
  <td>Used when receive an incoming message from agent</td>
  <td>New agent message:</td>
</tr>
<tr>
  <td>lp_accessibility_new_system_message</td>
  <td>Used when receive an incoming system message</td>
  <td>New system message:</td>
</tr>
<tr>
  <td>lp_accessibility_sc_map</td>
  <td>Used on the map element in a structured content message</td>
  <td>Map</td>
</tr>
<tr>
  <td>lp_accessibility_sc_image</td>
  <td>Used on the image element in a structured content message</td>
  <td>Image</td>
</tr>
<tr>
  <td>lp_accessibility_sc_button</td>
  <td>Used on the button element in a structured content message</td>
  <td>Button</td>
</tr>
<tr>
  <td>lp_accessibility_sc_text</td>
  <td>Used on the text element in a structured content message</td>
  <td>Text</td>
</tr>
<tr>
  <td>lp_accessibility_sc_destination</td>
  <td>Used on the map pin on a structured content map element</td>
  <td>Destination</td>
</tr>
<tr>
  <td>lp_accessibility_is_typing</td>
  <td>Announced when an agent with nickname is typing (applicable only in Activity mode)</td>
  <td>%1$s is typing</td>
</tr>
<tr>
  <td>lp_accessibility_agent_is_typing</td>
  <td>Announced when an agent without a nickname is typing (applicable only in Activity mode)</td>
  <td>Agent is typing</td>
</tr>
</table>
