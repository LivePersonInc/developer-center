---
pagename: String Values
redirect_from:
  - android-modifying-string.html
  - mobile-app-messaging-sdk-for-android-string-localization-modifying-strings.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: String Localization

order: 210
permalink: mobile-app-messaging-sdk-for-android-string-localization-string-values.html

indicator: messaging
---

You can change strings appearing on the SDK interface by overriding the respective string key.

**Note:**  To create a new locale file, see [Override SDK Strings](http://localhost:4000/mobile-app-messaging-sdk-for-android-string-localization-override-sdk-strings.html#create-new-localization-file).

### Accessibility strings (used by the Accessibility TalkBack)

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **lp\_accessibility\_agent** | Used as a message prefix on the message from the agent | Agent |
| **lp\_accessibility\_agent\_is\_typing** | Announced when an agent without a nickname is typing (applicable only in Activity mode) | Agent is typing |
| **lp\_accessibility\_agnet\_icon** | Used on the agent avatar | Agent Icon |
| **lp\_accessibility\_attachment\_menu** | Used on the attachment menu | Attachment menu |
| **lp\_accessibility\_attachment\_menu\_button\_collapsed** | The attachment menu button name when collapsed | Attachment menu button collapsed |
| **lp\_accessibility\_attachment\_menu\_button\_expanded** | The attachment menu button name when expanded | Attachment menu button expanded |
| **lp\_accessibility\_camera** | Used on the camera button (on the attachment menu) | Camera |
| **lp\_accessibility\_chat\_message** | Used as a label on the 'Enter message' EditText control | Chat message |
| **lp\_accessibility\_full\_image** | Used on the image in the full image screen | Full image |
| **lp\_accessibility\_gallery** | Used on the gallery button (on the attachment menu) | Gallery |
| **lp\_accessibility\_image** | Used on the thumbnail image on the conversation screen | Image |
| **lp\_accessibility\_image\_caption** | A label string for the Enter Message EditText in the image preview screen | Image caption |
| **lp\_accessibility\_is\_typing** | Announced when an agent with nickname is typing (applicable only in Activity mode) | %1$s is typing |
| **lp\_accessibility\_new\_agent\_message** | Used when receive an incoming message from agent | New agent message: |
| **lp\_accessibility\_new\_system\_message** | Used when receive an incoming system message | New system message: |
| **lp\_accessibility\_photo** | Used on an image on the conversation screen | Photo |
| **lp\_accessibility\_photo\_preview** | Used on the image on the preview screen | Photo preview |
| **lp\_accessibility\_received** | Received message status | received |
| **lp\_accessibility\_resend** | Used on the resend button | Resend |
| **lp\_accessibility\_sc\_button** | Used on the button element in a structured content message | Button |
| **lp\_accessibility\_sc\_destination** | Used on the map pin on a structured content map element | Destination |
| **lp\_accessibility\_sc\_image** | Used on the image element in a structured content message | Image |
| **lp\_accessibility\_sc\_map** | Used on the map element in a structured content message | Map |
| **lp\_accessibility\_sc\_text** | Used on the text element in a structured content message | Text |
| **lp\_accessibility\_selected** | Used to indicate the selected star on the feedback screen | selected |
| **lp\_accessibility\_you** | Used as a message prefix on the message from the consumer | You |

### Audio Messaging

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **lp\_accessibility\_voice** | Accessibility on the mic button | Voice |
| **lp\_mic\_tooltip\_long\_press** | Tooltip shown when short tapping the mic button. | Long tap to record |
| **lp\_mic\_tooltip\_max\_recording** | Tooltip shown when the maximum recording time reached. | Long tap to record |
| **lp\_mic\_tooltip\_release** | Tooltip shown when keeping mic tapped. | Release for recording |

### Clear History dialog

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **lp\_clear\_history\_dialog\_message** | Body message of the Clear History confirm dialog | All of your existing conversation history will be lost. Are you sure? |
| **lp\_clear\_history\_dialog\_positive\_button** | Positive button text | Clear |
| **lp\_clear\_history\_dialog\_title** | Title of the Clear History confirm dialog | Clear history |
| **lp\_end\_conversation\_first** | Message text displayed when trying to clear history and the conversation is not resolved | Please resolve the conversation first. |
| **lp\_history\_control\_api\_empty\_state** | There are currently no conversations at this time |   |

### Conversation Survey

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **lpmessaging\_ui\_fill\_in\_form\_text\_button** | PCI form bubble action button text. | Fill in form |
| **lpmessaging\_ui\_pci\_leave\_dialog\_btn\_negative** | Negative button text of the PCI dialog before leaving unfilled form. | STAY |
| **lpmessaging\_ui\_pci\_leave\_dialog\_btn\_positive** | Positive button text of the PCI dialog before leaving unfilled form. | OK |
| **lpmessaging\_ui\_pci\_leave\_dialog\_description** | Body message of the PCI dialog before leaving unfilled form. | Once you leave the secure form, you will not be able to access it again. |
| **lpmessaging\_ui\_pci\_leave\_dialog\_title** | Title of the PCI dialog before leaving unfilled form. | Are you sure? |
| **lpmessaging\_ui\_secure\_form\_consumer\_submitted\_message** | Consumer-Submission bubble confirming form submission | I have submitted the %s form |
| **lpmessaging\_ui\_secure\_form\_error\_message** | PCI form bubble message - state error | There was a problem opening this form. Please ask the agent to resend the form. |
| **lpmessaging\_ui\_secure\_form\_expired\_message** | PCI form bubble message - state expired | Secure form has expired. Please ask the agent to resend the form. |
| **lpmessaging\_ui\_secure\_form\_submitted\_message** | PCI form bubble message - state submitted | This form has been submitted and cannot be reopened for security reasons. |
| **lpmessaging\_ui\_secure\_form\_to\_fill\_in\_message** | PCI form bubble message | This is a secure form. Information entered here is protected and cannot be accessed once submitted. |
| **lpmessaging\_ui\_secure\_form\_viewed\_message** | PCI form bubble message - state viewed (not filled and can't be filled) | This form has already been viewed. Please ask the agent to resend the form. |

### General

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **brand\_name** | The default agent name displayed on the toolbar | My Brand |
| **lp\_add\_a\_caption** | Hint text in the Enter Message EditText on the image preview screen | Add a caption |
| **lp\_attachment\_menu\_camera\_item\_text** | The Camera icon's text in the attachment menu | CAMERA |
| **lp\_attachment\_menu\_gallery\_item\_text** | The Gallery icon's text in the attachment menu | GALLERY |
| **lp\_cancel** | Confirmation dialog Cancel button. | Cancel |
| **lp\_clear\_history\_menu\_text** | "Clear history" string in menu"Clear history" string in menu."Clear history" confirmation dialog text"Clear" button text on "Clear history" dialog. | Clear history |
| **lp\_connection\_status\_connecting** | Connection bar text when connecting | Connecting… |
| **lp\_connection\_status\_failed\_to\_connect** | Connection bar text when could not connect to the messaging server | Failed to connect to the server. |
| **lp\_connection\_status\_no\_connection** | Connection bar text when there is no internet connection on the device | Offline. Please check your connection. |
| **lp\_connection\_status\_trying\_to\_connect** | Connection bar text when the connection is longer than 5 seconds | Still trying to connect… |
| **lp\_conversation\_ended\_by\_agent\_no\_name** | Message when the conversation was resolved when we don't have the agent name. %1$s - time | Conversation resolved by Agent \n %1$s |
| **lp\_conversation\_ended\_by\_agent\_with\_name** | Message when the conversation was resolved when we have an agent name. %1$s - agent name %2$s - time | Conversation resolved by %1$s \n %2$s |
| **lp\_conversation\_ended\_by\_you** | Message when the conversation was resolved by the client. %1$s - time | Conversation resolved by You \n %1$s |
| **lp\_date\_time\_format** | Date and time format to be used instead of the standard format | No Value |
| **lp\_dismiss\_as\_urgent\_menu\_text** | Dismiss urgent menu text. | Dismiss urgent |
| **lp\_dismiss\_as\_urgent\_two\_lines** | "Dismiss urgent" string in menu and snack bar. | Dismiss urgent |
| **lp\_dismiss\_urgent\_dialog\_header** | Dismiss urgent confirmation dialog header. | Are you sure you want to mark this conversation as not urgent? |
| **lp\_dismiss\_urgent\_dialog\_message** | Dismiss urgent confirmation dialog text. | This means that your conversation will get normal priority. |
| **lp\_done** | Feedback dialog toolbar done button text (after submitting). | Done |
| **lp\_end** | End conversation "End" button text. | End |
| **lp\_end\_conversation** | End conversation title. | Resolve the conversation |
| **lp\_end\_conversation\_first** | Dialog text that is shown in case trying to clear history when a conversation is open. | Please resolve the conversation first. |
| **lp\_enter\_message** | Enter message text box when empty. | Write a message |
| **lp\_failed\_download\_toast\_message** | Toast message displayed when downloading a photo failed | Failed to download file |
| **lp\_failed\_upload\_toast\_message** | Toast message displayed when uploading a photo failed | Failed to upload file |
| **lp\_feedback\_1** | String displayed when one star is selected in the feedback dialog. | Very Dissatisfied |
| **lp\_feedback\_2** | String displayed when two stars are selected in the feedback dialog. | Dissatisfied |
| **lp\_feedback\_3** | String displayed when three stars are selected in the feedback dialog. | Neither |
| **lp\_feedback\_4** | String displayed when four stars are selected in the feedback dialog. | Satisfied |
| **lp\_feedback\_5** | String displayed when five stars are selected in the feedback dialog. | Very Satisfied |
| **lp\_feedback\_question** | Feedback dialog rate question text. | How would you rate your connection with our agent? |
| **lp\_feedback\_submit** | The feedback submit button text. | Submit |
| **lp\_feedback\_submit\_message** | Submit message text at the bottom of feedback dialog. | Your feedback helps us serve you better.\n It will not be shared with any customer service representatives. |
| **lp\_feedback\_thank\_you** | Text displayed after the feedback dialog is submitted. | Survey submitted successfully.\nThank you! |
| **lp\_feedback\_yesno\_negative\_title** | Negative button text in the feedback dialog. | NO |
| **lp\_feedback\_yesno\_positive\_title** | Positive button text in the feedback dialog. | YES |
| **lp\_feedback\_yesno\_question** | Yes/No question text in feedback dialog. | Did we solve your issue today? |
| **lp\_first\_message** | System message before the first conversation. | How can I help you today? |
| **lp\_is\_typing** | Text in conversation activity when agent is typing. | typing... |
| **lp\_loading\_message** | Text above the loading icon when loading previous messages. | Loading... |
| **lp\_mark\_as\_resolved\_dialog\_message** | Resolve conversation confirmation dialog text. | Are you sure this topic is resolved? |
| **lp\_mark\_as\_resolved\_menu\_text** | "Mark as resolved" string in menu. | Mark as resolved |
| **lp\_mark\_as\_urgent\_dialog\_header** | Mark as urgent confirmation dialog header. | Are you sure you want to mark this conversation as urgent? |
| **lp\_mark\_as\_urgent\_dialog\_message** | Mark as urgent confirmation dialog text. | This means that your conversation will get top priority. |
| **lp\_mark\_as\_urgent\_menu\_text** | "Mark as urgent" string in menu and snack bar. | Mark as urgent |
| **lp\_menu\_copy** | Copy menu button text when selecting messages in conversation. | Copy |
| **lp\_message\_time\_min\_ago** | Message timestamp for older messages ("5 min ago"). | Min ago |
| **lp\_message\_time\_now** | Message timestamp for the latest messages ("Now"). | Now |
| **lp\_message\_time\_now\_with\_state** | Message timestamp for the latest messages that has a sending state ("now"). | Now |
| **lp\_new\_messages** | Notification message displayed when there are multiple push messages. | new messages |
| **lp\_no\_action\_not\_available\_toast\_message** | A toast message when the required action is not available (e.g. Mark as urgent when there is no active conversation). | Action not available - no open conversation |
| **lp\_no\_network\_toast\_message** | A toast message when there is no network. | No internet connection. Please check your connection and try again. |
| **lp\_ok** | Confirmation dialog OK button. | OK |
| **lp\_resend\_failed\_conversation\_closed** | Toast message displayed when trying to resend a failed message when conversation is already closed. | This conversation has already been resolved. |
| **lp\_resend\_failed\_masked\_message** | Toast message displayed when trying to resend a failed masked message. | Message failed to send. Please re-enter message and send again. |
| **lp\_send** | The "Send" button text. | Send |
| **lp\_skip** | Feedback dialog toolbar skip button text. | Skip |
| **lp\_still\_loading\_message** | Message displayed when loading conversation takes longer the usual | Still loading conversation... |
| **lp\_today** | Today header in conversation. | Today |
| **lp\_ttr\_message\_days** | (plurals string that contains: "one" and "others") The one or others strings is concatenated to the lp\_ttr\_message\_with\_timestamp string above according to whether it's single day multiple days. Example: one or others. |   |
| **lp\_ttr\_message\_hours** | (plurals string that contains: "one" and "others"). The one or others strings is concatenated to the lp\_ttr\_message\_with\_timestamp string above according to whether it's single hour multiple hours. Example: one or others. |   |
| **lp\_ttr\_message\_minutes** | (plurals string that contains: "one" and "others") The one or others strings is concatenated to the lp\_ttr\_message\_with\_timestamp string above according to whether it's single minute multiple minutes. Example |   |
| **lp\_ttr\_message\_no\_timestamp** | Text in TTR snackbar when timestamp is not shown. | An agent will respond shortly |
| **lp\_ttr\_message\_off\_hours\_message** | Message to show when the online hours is more than 2 days from now. includes 1 param: %1$s - for the full date (MMM dd, yyyy hh:mm a) | Thanks for your message. We will be back online at %1$s |
| **lp\_ttr\_message\_off\_hours\_message\_today** | A snackbar content when the agent is in off hours and TTR is sometime today | Thanks for your message. We will be back online today at %1$s |
| **lp\_ttr\_message\_off\_hours\_message\_tomorrow** | A snackbar content when the agent is in off hours and TTR is sometime tomorrow | Thanks for your message. We will be back online tomorrow at %1$s |
| **lp\_ttr\_message\_off\_hours\_time\_zone\_id** | Represents Java timezone ID that is used in the off hours message. For a full list of the available IDs, use the "Aliases" from here. | US/Pacific |
| **lp\_ttr\_message\_with\_timestamp** | Text in TTR snackbar when timestamp is shown. | An agent will respond within the next |
| **lp\_unread\_message** | (plurals string that contains: "one" and "others"). Used in the unread messages indicator to indicate how many unread messages Example: one or others. |   |
| **lp\_yesterday** | Yesterday header in conversation. | Yesterday |




### Masking

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **client\_only\_mask\_character** | The character used to mask client only string. | \* |
| **lp\_system\_message\_client\_only\_masked** | Text of system message, added after detecting a client only masked message (if this feature is enabled). | Your personal data has been masked to protect your security. Only the agent can read it. |
| **lp\_system\_message\_real\_time\_masked** | Text of system message, added after detecting a real time masked message (if this feature is enabled). | Your personal data has been masked to protect your security and cannot be read by the agent. |
| **real\_time\_mask\_character** | The character used to mask the real time message. | \* |

### Quick Replies

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **lpmessaging\_ui\_quick\_replies\_button\_content\_description** | Accessibility string when hovering on the Quick Replies button |   |
| **lpmessaging\_ui\_quick\_replies\_section** | Accessibility string when hovering on the Quick Replies control |   |

### Structured Content

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **lp\_new\_message** | Message displayed on the scroll down indicator when a structured content message is received | New message |
| **lp\_structured\_content\_display\_failed** | Message displayed in the conversation if there is an error parsing the structured content message | Content failed to display |

### Unauthenticated In-App Messaging

| **String name** | **Used in** | **Default value** |
| --- | --- | --- |
| **lp\_new\_unauth\_user\_dialog\_message** | The body of the presented dialog when the identity is expired. | "Hi there! As we haven't seen you for a while, we're opening a new conversation for you" |
| **lp\_new\_unauth\_user\_dialog\_positive\_button** | The button of the presented dialog when the identity is expired. | OK |
| **lp\_new\_unauth\_user\_dialog\_title** | The title of the presented dialog when the identity is expired. | New Conversation |