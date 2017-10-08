---
title: Attributes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Customization and Branding

order: 160
permalink: android-attributes.html

indicator: messaging
---
The goal of the following document is to enumerate the different fields controlling design attributes in the SDK. If a clearer view of which attribute corresponds with a design element is needed, please utilize the [Attributes Design Sheet](android-attributes-designsheet.html).


### Brand

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;integer name=&quot;message_receive_icons&quot;&gt;
</td>
    <td>For each message, there are three indicators available: Message sent, Message received, Message read. You can customize the indicators according to your needs, by using a number between 1 and 3:<br>0 - text (sent, delivered etc.) instead of icons<br>1 - Sent only<br>2 - Sent+received<br>3 - Sent+received+read</td>
  <td></td>
  <td><img src="img/receiveicons.png" alt="receiveicons"></td>
  </tr>
  <tr>
    <td>&lt;string-array name=&quot;message_receive_text&quot;&gt;
</td>
    <td>If you set 0 in the resource message_receive_icons, you can specify what texts appears for each state. You must have 4 items, in the following order: <br>1st item -message sent<br>2nd item - message delivered<br>3rd item - message read<br>4th item - message not delivered<br>5th item - message sending</td>
  <td></td>
  <td><img src="img/receivetext.png" alt="receivetext"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;clear_history_show_confirm_dialog&quot;&gt;
</td>
    <td>Define if to show confirm dialog before clearing history or not. True by default.</td>
    <td>true</td>
    <td></td>
  </tr>
</tbody>
</table>


### Brand Message Bubble - the first brand message

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;dimen name=&quot;brand_bubble_stroke_width&quot;&gt;
</td>
    <td>Int number for the outline width.</td>
    <td>0dp</td>
    <td><img src="img/strokewidth.png" alt="strokewidth"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;brand_bubble_stroke_color&quot;&gt;
</td>
    <td>Color code for the outline color.</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/strokecolor.png" alt="strokecolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;brand_bubble_message_text_color&quot;&gt;
</td>
    <td>Color code for the text of the brand bubble</td>
    <td>@android:color/white</td>
    <td><img src="img/textcolor.png" alt="textcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;brand_bubble_message_link_text_color&quot;&gt;
</td>
    <td>Color code for links in the text of the brand bubble.</td>
    <td>@android:color/white</td>
    <td><img src="img/linktextcolor.png" alt="linktextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;brand_bubble_timestamp_text_color&quot;&gt;
</td>
    <td>Color code for the timestamp of the brand bubble.</td>
    <td>#46474A (dark gray)</td>
    <td><img src="img/timestamptextcolor.png" alt="timestamptextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;brand_bubble_background_color&quot;&gt;
</td>
    <td>Color code for the background of the brand bubble.</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/backgroundcolor.png" alt="backgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;brand_logo_background_color&quot;&gt;
</td>
    <td>Color code for the background of the default brand logo next to the bubble.</td>
    <td>#007AFF (light blue)</td>
    <td><img src="img/logobackgroundcolor.png" alt="logobackgroundcolor"></td>
  </tr>
</tbody>
</table>


### Agent Message Bubbles

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;dimen name=&quot;agent_bubble_stroke_width&quot;&gt;
</td>
    <td>Int number for the outline width.</td>
    <td>0dp</td>
    <td><img src="img/agent_bubble_stroke_width.png" alt="strokewidth"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_bubble_stroke_color&quot;&gt;
</td>
    <td>Color code for the outline color.</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/agent_bubble_stroke_color.png" alt="strokecolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_bubble_message_text_color&quot;&gt;
</td>
    <td>Color code for the text of the agent bubble.</td>
    <td>white</td>
    <td><img src="img/agent_bubble_message_link_text_color.png" alt="textcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_bubble_message_link_text_color&quot;&gt;
</td>
    <td>Color code for links in the text of the agent bubble.</td>
    <td>white</td>
    <td><img src="img/agent_bubble_message_link_text_color.png" alt="linktextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_bubble_timestamp_text_color&quot;&gt;
</td>
    <td>Color code for the timestamp of the agent bubble.</td>
    <td>#46474A (dark gray)</td>
    <td><img src="img/agent_bubble_timestamp_text_color.png" alt="timestamptextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_bubble_background_color&quot;&gt;
</td>
    <td>Color code for the background of the agent bubble.</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/agentbubblebackgroundcolor.png" alt="backgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_avatar_background_color&quot;&gt;
</td>
    <td>Color code for the background of the agent default avatar next to the bubble</td>
    <td>#949596 (gray)</td>
    <td><img src="img/agentavatarbackgroundcolor.png" alt="agentavatarbackgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_avatar_icon_color&quot;&gt;
</td>
    <td>Color code for the agent default icon in the avatar next to the bubble.</td>
    <td>#ffffffff></td>
    <td><img src="img/agent_avatar_icon_color.png" alt="iconcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_bubble_link_preview_background_color&quot;&gt;
</td>
    <td>Color code for the background of the agent bubble when url is presented</td>
    <td>#ffffffff</td>
    <td><img src="img/agent_bubble_link_preview_background_color.png" alt="previewbackgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_bubble_link_preview_title_text_color&quot;&gt;
</td>
    <td>Color code for the background of the agent title text color when url is presented</td>
    <td>#ffffffff</td>
    <td><img src="img/agent_bubble_link_preview_title_text_color.png" alt="titletextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;agent_bubble_link_preview_description_text_color&quot;&gt;
</td>
    <td>Color code for the background of the agent description text color when url is presented</td>
    <td>#555555 (gray)</td>
    <td><img src="img/agent_bubble_link_preview_description_text_color.png" alt="descriptiontextcolor"></td>
  </tr>
    <tr>
    <td>&lt;color name=&quot;agent_bubble_pci_form_invitation_background_color&quot;&gt;
</td>
    <td>background color of the form invitation bubble</td>
    <td>#ffffffff</td>
    <td><img src="img/agent_bubble_pci_form_invitation_background_color.png" alt="invitationbackgroundcolor"></td>
  </tr>
    <tr>
    <td>&lt;color name=&quot;agent_bubble_pci_form_invitation_background_btn_color&quot;&gt;
</td>
    <td>background color of the form invitation button only</td>
    <td>#ffffffff</td>
    <td><img src="img/agent_bubble_pci_form_invitation_button_text_color.png" alt="buttontextcolor"></td>
  </tr>
    <tr>
    <td>&lt;color name=&quot;agent_bubble_pci_form_invitation_stroke_color&quot;&gt;
</td>
    <td>color of the stroke (border) of the form invitation bubble</td>
    <td>#949596 (gray)</td>
    <td><img src="img/agent_bubble_pci_form_invitation_stroke_color.png" alt="strokecolor"></td>
  </tr>
    <tr>
    <td>&lt;color name=&quot;agent_bubble_pci_form_invitation_button_text_color&quot;&gt;
</td>
    <td>color of the text on the button  </td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/agent_bubble_pci_form_invitation_button_text_color.png" alt="invitationbuttoncolor"></td>
  </tr>
    <tr>
    <td>&lt;color name=&quot;agent_bubble_pci_form_invitation_description_text_color&quot;&gt;
</td>
    <td>Text color on the description in the form invitation bubble</td>
    <td>#949596 (gray)</td>
    <td><img src="img/agent_bubble_pci_form_invitation_description_text_color.png" alt="descriptiontextcolor"></td>
  </tr>
    <tr>
    <td>&lt;color name=&quot;agent_bubble_pci_form_invitation_title_text_color&quot;&gt;
 </td>
    <td>text color on the title in the form invitation bubble</td>
    <td>#ff000000</td>
    <td><img src="img/agent_bubble_pci_form_invitation_title_text_color.png" alt="titletextcolor"></td>
  </tr>
    <tr>
    <td>&lt;color name=&quot;agent_bubble_pci_form_invitation_icon_tint_color&quot;&gt;
 </td>
    <td>color of the icon in the form invitation bubble</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/agent_bubble_pci_form_invitation_icon_tint_color.png" alt="tintcolor"></td>
  </tr>

</tbody>
</table>


### Consumer Bubbles

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;dimen name=&quot;consumer_bubble_stroke_width&quot;&gt;
</td>
    <td>integer in dp for the bubble stroke width of the consumer bubble.</td>
    <td>1dp</td>
    <td><img src="img/consumer_bubble_stroke_width.png" alt="strokewidth"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_message_text_color&quot;&gt;
</td>
    <td>Color code for the text of the consumer bubble.</td>
    <td>@android:color/black</td>
    <td><img src="img/consumer_bubble_message_text_color.png" alt="messagetextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_message_link_text_color&quot;&gt;
</td>
    <td>Color code for links in the text of the consumer bubble.</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/consumer_bubble_message_link_text_color.png" alt="linktextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_timestamp_text_color&quot;&gt;
</td>
    <td>Color code for the timestamp of the consumer bubble.</td>
    <td>#46474A (dark gray)</td>
    <td><img src="img/consumer_bubble_timestamp_text_color.png" alt="timestamptextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_background_color&quot;&gt;
</td>
    <td>Color code for the background of the consumer bubble.</td>
    <td>#EDEDED (light gray)</td>
    <td><img src="img/consumer_bubble_background_color.png" alt="bubblebackgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_state_text_color&quot;&gt;
</td>
    <td>Color code for state text next to the consumer bubble.</td>
    <td>#46474A (dark gray)</td>
    <td><img src="img/consumer_bubble_state_text_color.png" alt="statetextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_stroke_color&quot;&gt;
</td>
    <td>Color code for the stroke of the consumer bubble.</td>
    <td>#EDEDED (light gray)</td>
    <td><img src="img/consumer_bubble_stroke_color.png" alt="strokecolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_link_preview_background_color&quot;&gt;
</td>
    <td>Color code for the background of the consumer bubble when url is presented</td>
    <td>white</td>
    <td><img src="img/consumer_bubble_link_preview_background_color.png" alt="previewbackgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_link_preview_title_text_color&quot;&gt;
</td>
    <td>Color code for the background of the consumer title text color when url is presented</td>
    <td>black</td>
    <td><img src="img/consumer_bubble_link_preview_title_text_color.png" alt="titletextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_link_preview_description_text_color&quot;&gt;
</td>
    <td>Color code for the background of the consumer description text color when url is presented</td>
    <td>#555555 (gray)</td>
    <td><img src="img/consumer_bubble_link_preview_description_text_color.png" alt="descriptiontextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_read_status_color&quot;&gt;
</td>
    <td>Color code for the read status icon (if enable)</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/consumer_bubble_read_status_color.png" alt="readstatuscolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_received_status_color&quot;&gt;
</td>
    <td>Color code for the received status icon (if enable)</td>
    <td>#CECECE</td>
    <td><img src="img/consumer_bubble_received_status_color.png" alt="statuscolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_sent_status_color&quot;&gt;
</td>
    <td>Color code for the sent status icon (if enable)</td>
    <td>#CECECE</td>
    <td><img src="img/consumer_bubble_sent_status_color.png" alt="sentstatuscolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;consumer_bubble_sending_status_color&quot;&gt;
</td>
    <td>Color code for the sending status icon (if enable)</td>
    <td>#949596 (gray)</td>
    <td><img src="img/consumer_bubble_sending_status_color.png" alt="sendingstatuscolor"></td>
  </tr>
</tbody>
</table>


### System messages

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;color name=&quot;system_bubble_text_color&quot;&gt;
</td>
    <td>Color code for the text of the system messages.</td>
    <td>#46474A (dark gray)</td>
    <td><img src="img/conversation_separator_text_color.png" alt="separatortextcolor"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;enable_conversation_resolved_message&quot;&gt;
</td>
    <td>Enable/disable the conversation resolved message</td>
    <td>true</td>
    <td><img src="img/enable_conversation_resolved_message.png" alt="conversationresolvedmessage"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;enable_conversation_resolved_separator&quot;&gt;
</td>
    <td>Enable/disable separators between conversations</td>
    <td>true</td>
    <td><img src="img/enable_conversation_resolved_separator.png" alt="conversationresolvedseparator"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;conversation_separator_text_color&quot;&gt;
</td>
    <td>Color code for the conversation resolved message and separator</td>
    <td>#555555 (gray)</td>
    <td><img src="img/enable_conversation_resolved_message.png" alt="conversationresolvedmessage"></td>
  </tr>
</tbody>
</table>

### Automatic Messages

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;color name=&quot;conversation_controller_message_text_color&quot;&gt;
</td>
    <td>Color code for the text of the automatic messages.</td>
    <td>#5b5c5e (dark gray)</td>
    <td><img src="img/conversation_controller_message_text_color.png" alt="automaticmessagecoller"></td>
  </tr>
</tbody>
</table>


### Unread messages indicator Bubbles

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>&lt;bool name=&quot;unread_indicator_bubble_enable&quot;&gt;</td>
    <td>Enable/disable the unread message indicator (shown or invisible) - true by default.</td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;unread_indicator_bubble_text_color&quot;&gt;</td>
    <td>Enable/disable the unread message indicator (shown or invisible) - true by default.</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/unreadindicatorbubbletextcolor.png" alt="unreadindicatorbubbletextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;unread_indicator_bubble_background_color&quot;&gt;</td>
    <td>Color code for the background of the unread messages bubble.</td>
    <td>#EDEDED (light gray)</td>
    <td><img src="img/unread_indicator_bubble_background_color.png" alt="unread_indicator_bubble_background_color"></td>
  </tr>
</tbody>
</table>



### Bubbles Corner Radius

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
    &lt;dimen name=&quot;end_bubble_bottom_left_radius&quot;&gt; <br />
    &lt;dimen name=&quot;end_bubble_top_left_radius&quot;&gt;   <br />
    &lt;dimen name=&quot;end_bubble_top_right_radius&quot;&gt;   <br />
    &lt;dimen name=&quot;end_bubble_bottom_right_radius&quot;&gt;   
    </td>
    <td>Define the corners radius of all the consumer bubbles (on the right side) </td>
    <td>10dp, bottom_right is 0dp </td>
    <td><img src="img/consumer_bubble_stroke_width.png" alt="strokewidth_consumer"></td>

  </tr>
  <tr>
    <td>
    &lt;dimen name=&quot;start_bubble_bottom_left_radius&quot;&gt; <br />
    &lt;dimen name=&quot;start_bubble_top_left_radius&quot;&gt;   <br />
    &lt;dimen name=&quot;start_bubble_top_right_radius&quot;&gt;   <br />
    &lt;dimen name=&quot;start_bubble_bottom_right_radius&quot;&gt;   
    </td>
    <td>Define the corners radius of all the agent/brand bubbles (on the left side) </td>
    <td>10dp, bottom_left is 0dp </td>
    <td><img src="img/strokewidth.png" alt="strokewidth_agnet"></td>

  </tr>
  <tr>
    <td>&lt;dimen name=&quot;unread_indicator_bubble_radius&quot;&gt; </td>
    <td>Define the corners radius of the unread messages bubble.</td>
    <td>20dp for all the corners</td>  
    <td><img src="img/unreadindicatorbubbletextcolor.png" alt="unreadindicatorbubbletextcolor"></td>  

  </tr>

  <tr>
    <td>&lt;dimen name=&quot;scroll_down_indicator_radius&quot;&gt;
     </td>
    <td>Define the left top and the left bottom corners radius of the scroll down indicator.</td>
    <td>20dp for left top and the left bottom the corners</td>
    <td><img src="img/indicatorenabled.png" alt="indicatorenabled"></td>

  </tr>
  <tr>
    <td>&lt;dimen name=&quot;scroll_down_indicator_counter_radius&quot;&gt;
     </td>
    <td>Define the corners radius of the unread messages counter inside the scroll down indicator.</td>
    <td>20dp for all the corners</td>  
    <td><img src="img/summaryenabled1.png" alt="summaryenabled1"></td>

  </tr>

</tbody>
</table>
### Survey screen

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;integer name=&quot;csatSurveyExpirationInMinutes&quot;&gt;</td>
    <td>Define the expiration time in minutes for the survey to appear after closing the conversation.</td>
    <td>1440</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_background_color&quot;&gt;</td>
    <td>Feedback dialog background color.</td>
    <td>@android:color/white</td>
    <td><img src="img/fragmentbackground.png" alt="fragmentbackground"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_title_question&quot;&gt;</td>
    <td>Feedback dialog title color.</td>
    <td>@android:color/black</td>
    <td><img src="img/fragmenttitle.png" alt="fragmenttitle"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_star&quot;&gt;</td>
    <td>Feedback dialog star color.</td>
    <td>#229A49 (green)</td>
    <td><img src="img/fragmentstar.png" alt="fragmentstar"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_rate_text&quot;&gt;</td>
    <td>Feedback dialog rating title color.</td>
    <td>#5b5c5e (dark grey)</td>
    <td><img src="img/fragmentratetext.png" alt="fragmentratetext"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_title_yesno&quot;&gt;</td>
    <td>Feedback dialog yes/no color.</td>
    <td>#5b5c5e (dark grey)</td>
    <td><img src="img/fragmenttitleyesno.png" alt="fragmenttitleyesno"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_yesno_btn_selected_background&quot;&gt;</td>
    <td>Feedback dialog yes/no selected background color.</td>
    <td>#229A49</td>
    <td><img src="img/fragmentyesnobtn.png" alt="fragmentyexnobtn"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_yesno_btn_default_background&quot;&gt;</td>
    <td>Feedback dialog yes/no default background.</td>
    <td>@android:color/white</td>
    <td><img src="img/fragmenyesnobtndeafult.png" alt="feedback_fragment_yesno_btn_default_background"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_yesno_btn_text_selected&quot;&gt;</td>
    <td>Feedback dialog yes/no text color when selected.</td>
    <td>@android:color/white</td>
    <td><img src="img/fragmentyesnobtntext.png" alt="fragmentratetext"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_yesno_btn_text_default&quot;&gt;</td>
    <td>Feedback dialog yes/no text color when in default.</td>
    <td>#5B5C5E</td>
    <td><img src="img/fragmentbtntextdefault.png" alt="fragmentbtntextdefault"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_yesno_btn_stroke_default&quot;&gt;</td>
    <td>Feedback dialog yes/no stroke color when in default.</td>
    <td>#E2E2E3</td>
    <td><img src="img/fragmentyesnobtbstroke.png" alt="fragmentyesnobtbstroke"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_yesno_btn_stroke_selected&quot;&gt;</td>
    <td>Feedback dialog yes/no stroke color when selected.</td>
    <td>#229A49</td>
    <td><img src="img/yesnobtnstrokeselected.png" alt="yesnobtnstrokeselected"></td>
  </tr>
  <tr>
    <td>&lt;dimen name=&quot;feedback_fragment_yesno_btn_stroke_width_default&quot;&gt;</td>
    <td>Feedback dialog yes/no stroke width size when in default.</td>
    <td>1dp</td>
    <td><img src="img/yesnobtbnstrokewidth.png" alt="yesnobtbnstrokewidth"></td>
  </tr>
  <tr>
    <td>&lt;dimen name=&quot;feedback_fragment_yesno_btn_stroke_width_selected&quot;&gt;</td>
    <td>Feedback dialog yes/no stroke width size when in selected.</td>
    <td>1dp</td>
    <td><img src="img/yesnobtnstrokewidthselected.png" alt="yesnobtnstrokewidthselected"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_submit_message&quot;&gt;</td>
    <td>Feedback dialog submit message text color.</td>
    <td>#565656</td>
    <td><img src="img/fragmentsubmitmessage.png" alt="fragmentsubmitmessage"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_submit_btn_enabled&quot;&gt;</td>
    <td>Feedback dialog submit button color when enabled.</td>
    <td>#229A49</td>
    <td><img src="img/fragmentsubmitbtnenabled.png" alt="fragmentsubmitbtnenabled"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_submit_btn_text_enabled&quot;&gt;</td>
    <td>Feedback dialog submit button text color when enabled.</td>
    <td>@android:color/white</td>
    <td><img src="img/fragmentbtntextenabled.png" alt ="fragmentbtntextenabled"></td>
    </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_submit_btn_disabled&quot;&gt;</td>
    <td>Feedback dialog submit button color when disabled.</td>
    <td>@android:color/white</td>
    <td><img src="img/fragmentsubmitbtndisabled.png" alt="fragmentsubmitbtndisabled"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_submit_btn_text_disabled&quot;&gt;</td>
    <td>Feedback dialog submit button text color when disabled.</td>
    <td>#BDBDBD</td>
    <td><img src="img/submitbtntextdisabled.png" alt="submitbtntextdisabled"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_submit_btn_stroke_enabled&quot;&gt;</td>
    <td>Feedback dialog submit button stroke color when enabled.</td>
    <td>#229A49</td>
    <td><img src="img/submitbtnstrokeenabled.png" alt="submitbtnstrokeenabled"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_submit_btn_stroke_disabled&quot;&gt;</td>
    <td>Feedback dialog submit button stroke color when disabled.</td>
    <td>#E2E2E3</td>
    <td><img src="img/submitbtnstrokedisabled.png" alt="submitbtnstrokedisabled"></td>
  </tr>
  <tr>
    <td>&lt;dimen name=&quot;feedback_fragment_submit_btn_stroke_width_enabled&quot;&gt;</td>
    <td>Feedback dialog submit button stroke width size when enabled.</td>
    <td>1dp</td>
    <td><img src="img/btnstrokewidthenabled.png" alt="btnstrokewidthenabled"></td>
  </tr>
  <tr>
    <td>&lt;dimen name=&quot;feedback_fragment_submit_btn_stroke_width_disabled&quot;&gt;</td>
    <td>Feedback dialog submit button stroke width size when disabled.</td>
    <td>1dp</td>
    <td><img src="img/btnstrokewidthdisabled.png" alt="btnstrokewidthdisabled"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;feedback_fragment_agent_details_name&quot;&gt;</td>
    <td>Define the color of the agent name on agent details section in feedback dialog.Visible only if show_agent_details_csat is true.</td>
    <td>@android:color/black</td>
    <td><img src="img/fragmentagentdetailnames.png" alt="fragmentagentdetailnames"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;show_feedback&quot;&gt;</td>
    <td>Defines whether to show the feedback dialog.</td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;show_agent_details_csat&quot;&gt;</td>
    <td>Define if the agent’s name and avatar are visible on top of feedback dialog.(true=show, false=hide) <br> NOTE: if both show_yes_no_question and show_agent_details_csat are set to true, show_yes_no_question will be ignored and will not be visible.</td>
    <td>true</td>
    <td><img src="img/showyesno.png" alt="showyesno"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;show_yes_no_question&quot;&gt;</td>
    <td>Defines whether to show or hide the yes/no question in the feedback dialog (true=show, false=hide) <br> NOTE: if both show_yes_no_question and show_agent_details_csat are set to true, show_yes_no_question will be ignored and will not be visible.</td>
    <td>true</td>
    <td><img src="img/showyesno.png" alt="showyesno"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;show_csat_thank_you&quot;&gt;</td>
    <td>Define if "thank you" screen will appear after submitting the survey. (true=show, false=hide)</td>
    <td>true</td>
    <td></td>
  </tr>
</tbody>
</table>


### Message Edit Text

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;color name=&quot;edit_text_underline_color&quot;&gt;</td>
    <td>Color code for the Enter Message control underline color.</td>
    <td>#90CAF9</td>
    <td><img src="img/underlinecolor.png" alt="underlinecolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;lp_enter_msg_text&quot;&gt;</td>
    <td>Define the input message text color.</td>
    <td>@android:color/black</td>
    <td><img src="img/entermsgtext.png" alt="entermsgtext"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;lp_enter_msg_hint&quot;&gt;</td>
    <td>Define the input message hint color.</td>
    <td>@android:color/darker_gray</td>
    <td><img src="img/entermsghint.png" alt="entermsghint"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;lp_send_button_text_enable&quot;&gt;</td>
    <td>Define the color of the send button when it’s enabled.</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/buttontextenable.png" alt="buttontextenable"><br><img src="img/buttontextenable2.png" alt="buttontextenable2"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;lp_send_button_text_disable&quot;&gt;</td>
    <td>Define the color of the send button when it’s disabled.</td>
    <td>#B7B8B9</td>
    <td><img src="img/buttontextdisable.png" alt="buttontextdisable"><br><img src="img/buttontextdisable2.png" alt="buttontextdisable2"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;use_send_image_button&quot;&gt;</td>
    <td>Use an icon for the send button instead of "Send" text</td>
    <td>false</td>
    <td><img src="img/sendimagebutton.png" alt="sendimagebutton"></td>
  </tr>
</tbody>
</table>


### Connection status bar

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>&lt;color name=&quot;connection_status_connecting_bg_color&quot;&gt;</td>
    <td>Define the color of statusbar background color while trying to connect.</td>
    <td>#F2F5F5F5</td>
    <td><img src="img/connectingbgcolor.png" alt="connectingbgcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;connection_status_not_connected_bg_color&quot;&gt;</td>
    <td>Define the color of statusbar background color when connection is unavailable.</td>
    <td>#CC000000</td>
    <td><img src="img/notconnectedbgcolor.png" alt="notconnectedbgcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;connection_status_connecting_text_color&quot;&gt;</td>
    <td>Define the color of statusbar text color while trying to connect.</td>
    <td>#46474A</td>
    <td><img src="img/connectingtextcolor.png" alt="connectingtextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;connection_status_not_connected_text_color&quot;&gt;</td>
    <td>Define the color of statusbar text color when connection is unavailable.</td>
    <td>@android:color/black</td>
    <td><img src="img/notconnectedtextcolor.png" alt="notconnectedtextcolor"></td>
  </tr>
</tbody>
</table>


### In page navigation -  Scroll down indicator

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;bool name=&quot;scroll_down_indicator_enabled&quot;&gt;</td>
    <td>Enable/disable the scroll down indicator (shown or invisible). True by default</td>
    <td>true</td>
    <td><img src="img/indicatorenabled.png" alt="indicatorenabled"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;scroll_down_indicator_unread_summary_enabled&quot;&gt;</td>
    <td>Enable/disable the summary in scroll down indicator (shown or invisible). If unread_indicator_bubble_enable is false, it will be in minimized mode without a badge indicating number of unread message. And tap will scroll to the last message.</td>
    <td>true</td>
    <td><img src="img/summaryenabled1.png" alt="summaryenabled1"><img src="img/summaryenabled2.png" alt="summaryenabled2"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;scroll_down_indicator_unread_counter_text_color&quot;&gt;</td>
    <td>Define the color of the unread messages counter text color.</td>
    <td>@android:color/white</td>
    <td><img src="img/unreadcountertextcolor.png" alt="unreadcountertextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;scroll_down_indicator_unread_summary_text_color&quot;&gt;</td>
    <td>Define the color of the unread message summary (preview) text color.</td>
    <td>@android:color/white</td>
    <td><img src="img/unreadsummarytextcolor.png" alt="unreadsummarytextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;scroll_down_indicator_unread_counter_stroke_color&quot;&gt;</td>
    <td>Define the color of the unread messages counter stroke color.</td>
    <td>#CC000000</td>
    <td><img src="img/unreadcounterstrokecolor.png" alt="unreadcounterstrokecolor"></td>
  </tr>
  <tr>
    <td>&lt;dimen name=&quot;scroll_down_indicator_unread_counter_stroke_width&quot;&gt;</td>
    <td>Define the dimen of the unread messages counter stroke width.</td>
    <td>1dp</td>
    <td><img src="img/unreadcounterstrokewidth.png" alt="unreadcounterstrokewidth"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;scroll_down_indicator_unread_counter_solid_color&quot;&gt;</td>
    <td>Define the color of the unread messages counter solid color.</td>
    <td>#FF0000 (red)</td>
    <td><img src="img/unreadcountersolidcolor.png" alt="unreadcountersolidcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;scroll_down_indicator_background_color&quot;&gt;</td>
    <td>Define the color of the scroll down background color.</td>
    <td>#CC000000</td>
    <td><img src="img/scrolldownindicatorbackgroundcolor.png" alt="scrolldownindicatorbackgroundcolor"><img src="img/scrolldownindicatorbackgroundcolor2.png" alt="scrolldownindicatorbackgroundcolor2"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;scroll_down_indicator_arrow_down_color&quot;&gt;</td>
    <td>Define the color of the image arrow scrolling down.</td>
    <td>@android:color/white</td>
    <td><img src="img/scrolldownindicatorarrowcolor.png" alt="scrolldownindicatorarrowcolor"><br><img src="img/scrolldownindicatorarrowcolor2.png" alt="scrolldownindicatorarrowcolor2"></td>
  </tr>
</tbody>
</table>


### Photo Sharing

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;bool name=&quot;enable_photo_sharing&quot;&gt;</td>
    <td>Enable/disable the photo sharing feature. </td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;max_number_stored_images&quot;&gt;</td>
    <td>Define the max number of images that will be stored locally.</td>
    <td>20</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;full_image_compression_rate&quot;&gt;</td>
    <td>Define the image compression rate (percentage)</td>
    <td>50</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;thumbnail_longer_dimension_resize&quot;&gt;</td>
    <td>Define the size of the thumbnail image longer dimension after resizing it (pixels)</td>
    <td>100</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;full_image_longer_dimension_resize&quot;&gt;</td>
    <td>Define the size of the full image longer dimension after resizing it (pixels).</td>
    <td>800</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;max_image_size_kb&quot;&gt;</td>
    <td>Define the maximum image size in KB that can be uploaded.</td>
    <td>3000</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;attachment_menu_item_background_color&quot;&gt;</td>
    <td>Define the background color of the items in the attachment menu.</td>
    <td>#004DC9 (blue)</td>
    <td><img src="img/menuitembackgroundcolor.png" alt="menuitembackgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;lp_attachment_menu_background_color&quot;&gt;</td>
    <td>Define the background color of the attachment menu</td>
    <td>#F5F5F5 (light gray)</td>
    <td><img src="img/attachmentmenubackgroundcolor.png" alt="attachmentmenubackgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;lp_attachment_menu_item_text_color&quot;&gt;</td>
    <td>Define the items’ text color in the attachment menu</td>
    <td>#46474A(gray)</td>
    <td><img src="img/attachmentmenuitemtextcolor.png" alt="attachmentmenuitemtextcolor"></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;lp_attachment_menu_item_icon_color&quot;&gt;</td>
    <td>Define the items’ icon color in the attachment menu</td>
    <td>#F5F5F5 (light gray)</td>
    <td><img src="img/menuitemiconcolor.png" alt="menuitemiconcolor"></td>
  </tr>
</tbody>
</table>


### General Style

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;color name=&quot;conversation_background&quot;&gt;
</td>
    <td>Define the color code for the entire view background. <br>In activity mode - Also the color of android:windowBackground</td>
    <td>white</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;link_preview_use_big_picture&quot;&gt;
</td>
    <td>Define which configuration to show when sending / receiving s link (big / small picture)</td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;link_preview_enable_real_time_preview&quot;&gt;</td>
    <td>Define whether or not we should show a real time link preview. A preview while the consumer is typing an url</td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;link_preview_to_use_more_than_og_tags&quot;&gt;</td>
    <td>parse only &lt;og:> tags or others as well</td>
    <td>false - use &lt;og:title&gt; tags only.true - use &lt;og:title&gt; and &lt;title&gt; tags</td>
    <td></td>
  </tr>
</tbody>
</table>


### Conversation Activity Style - (activity mode only!)

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;color name=&quot;lp_colorPrimary&quot;&gt;
</td>
    <td>Define the primary color of the activity.</td>
    <td>android:colorPrimary</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;lp_colorPrimaryDark&quot;&gt;
</td>
    <td>Define the primary dark color of the activity.</td>
    <td>android:colorPrimaryDark</td>
    <td></td>
  </tr>
</tbody>
</table>


### Accessibility

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;integer name=&quot;snachbar_duration_for_accessibility&quot;&gt;</td>
    <td>Number of milliseconds to show the TTR snackbar if the accessibility TalkBack option is on</td>
    <td>60,000</td>
    <td></td>
  </tr>
</tbody>
</table>

### Custom Fonts

<table>
<thead>
 <tr>
   <th>Name</th>
   <th>Description</th>
   <th>Default</th>
   <th>Example</th>
 </tr>
</thead>
<tbody>  
   <tr>
     <td>&lt;string name=&quot;custom_font_name_conversation_feed&quot;&gt;</td>
     <td>The font name for all conversation feed’s element.</td>
     <td>Empty (use the device font)</td>
     <td>sans-serif-thin</td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;custom_font_name_non_conversation_feed&quot;&gt;</td>
    <td>The font name for all elements that are not in the conversation feed.</td>
    <td>Empty (use the device font)</td>
    <td>customFont.ttf</td>
  </tr>
</tbody>
</table>

### Structured Content

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  

<tr>
  <td>&lt;bool name=&quot;enable_structured_content&quot;&gt;
</td>
  <td>Enable/Disable structured content feature</td>
  <td>false</td>
  <td></td>
</tr>

  <tr>
    <td>&lt;color name=&quot;structured_content_border_color&quot;&gt;
</td>
    <td>Color code for the structured content bubble outline color.</td>
    <td>#EDEDED (light gray)</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;dimen name=&quot;structured_content_border_width&quot;&gt;
  </td>
    <td>Integer in dp for the bubble stroke width of the structured content bubble.</td>
    <td>1dp</td>
    <td></td>
  </tr>  
  <tr>
    <td>&lt;integer name=&quot;structured_content_map_zoom&quot;&gt;</td>
    <td>Integer that defines the zoom level of the structured content map view. (Refer to [Google map API](https://developers.google.com/maps/documentation/android-api/views#zoom){:target="_blank"} for details)</td>
    <td>18</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;structured_content_link_as_callback&quot;&gt;</td>
    <td>Enable/Disable sending the Structured Content link as a callback instead of a deep link intent (true - use callback, false - deep link intent)</td>
    <td>false</td>
    <td></td>
  </tr>
  </tbody>
</table>


### Miscellaneous

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>  
  <tr>
    <td>&lt;bool name=&quot;disableTTRPopup&quot;&gt;</td>
    <td>Defines whether to disable the TTR snackbar popup (true=disable) false by default.</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;vibrate_enabled&quot;&gt;</td>
    <td>Enable/Disable vibrate upon receiving messages from agent while conversation screen is in foreground. false by default.</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;contextual_menu_on_toolbar&quot;&gt;</td>
    <td>Enable multiple message copy menu over the app toolbar. If true, when long pressing a message on chat it will select the message and enable a context menu over the toolbar, enabling the user to copy multiple messages. If false, long pressing a message will display a copy popup menu.</td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;color name=&quot;bubble_selected_background_color&quot;&gt;</td>
    <td>Define the background color of item when it’s selected to be copied (if multiple message copy is enabled).</td>
    <td>#5597a7e3</td>
    <td><img src="img/bubbleselectedbackgroundcolor.png" alt="bubbleselectedbackgroundcolor"></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;encryptionVersion&quot;&gt;</td>
    <td>Defines the encryption version to use. Currently available version 1 only.<br>1 - encrypt data<br> 0 - disable encryption</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;csds_url&quot;&gt;</td>
    <td>For vanity URL purposes. For regular use please use: adminlogin.liveperson.net</td>
    <td>adminlogin.liveperson.net</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;idp_num_history_conversation&quot;&gt;</td>
    <td>When user is authenticated, this indicates the number of recent conversations to reload from the server (including their messages) when running for the first time.</td>
    <td>2</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;show_timestamp_in_ttr_notification&quot;&gt;</td>
    <td>When true the TTR snackbar will display the time until the agent responds. If set to false, a general message is displayed.</td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;ttr_duration&quot;&gt;</td>
    <td>Set the duration that the TTR snackbar will be visible (ms).</td>
    <td>3,000</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;ttrFirstTimeDelaySeconds&quot;&gt;</td>
    <td>Set the time in seconds before the first the TTR snackbar will be displayed</td>
    <td>10</td>
    <td></td>
    </tr>
  <tr>
    <td>&lt;bool name=&quot;send_agent_profile_updates_when_conversation_closed&quot;&gt;</td>
    <td>When true the callback LivePersonCallback#onAgentDetailsChanged will be called with the agent details updates even if the last conversation is closed (in this case it will provide the assigned agent of the last conversation). If false, this callback will be called only when the current conversation is active. </td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;ttr_message_off_hours_enabled&quot;&gt;</td>
    <td>Defines whether to show the off hours snackbar popup (true=enable).</td>
    <td>true</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;ttrShowFrequencyInSeconds&quot;&gt;</td>
    <td>Define the frequency of the TTR (time to response) messages.</td>
    <td>8</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;enable_client_only_masking&quot;&gt;</td>
    <td>Defines whether to enable or disable client side only masking. False by default.</td>
    <td>false</td>
    <td><img src="img/clientonlymasking.png" alt="clientonlymasking"></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;enable_real_time_masking&quot;&gt;</td>
    <td>Defines whether to enable or disable real time masking. False by default.</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;client_only_masking_regex&quot;&gt;</td>
    <td>Defines the java regex for client side only masking. By default does not contain any value.</td>
    <td>No value</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;client_only_mask_character&quot;&gt;</td>
    <td>The character used to mask client only string.</td>
    <td>‘*’</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;real_time_masking_regex&quot;&gt;</td>
    <td>Defines the Java regex for real time masking.</td>
    <td>No value</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;real_time_mask_character&quot;&gt;</td>
    <td>The character used to mask the real time message.</td>
    <td>'*'</td>
    <td><img src="img/realtimemaskcharacter.png" alt="realtimemaskcharacter"></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;lp_bubble_phone_links_regex&quot;&gt;</td>
    <td>Defines the java regex for phone links in bubble messages. By default does not contain any value.</td>
    <td>No value</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;lp_bubble_url_links_regex&quot;&gt;</td>
    <td>Defines the java regex for url links in bubble messages. By default does not contain any value.</td>
    <td>No value</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;lp_bubble_email_links_regex&quot;&gt;</td>
    <td>Defines the java regex for email links in bubble messages. By default does not contain any value.</td>
    <td>No value</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;lp_date_format&quot;&gt;</td>
    <td>Define date format.</td>
    <td>No value</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;lp_time_format&quot;&gt;</td>
    <td>Define time format.</td>
    <td>No value</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;lp_date_time_format&quot;&gt;</td>
    <td>Define date-time format.</td>
    <td>No value</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;integer name=&quot;sendingMessageTimeoutInMinutes&quot;&gt;</td>
    <td>Define timeout for automatic resending pending message before moving it to failed.</td>
    <td>60</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;bool name=&quot;pci_form_hide_logo&quot;&gt;</td>
    <td>Define if to hide logo inside the pci secure form web view</td>
    <td>false</td>
    <td></td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;pci_form_font_name&quot;&gt;</td>
    <td>Define the font of the pci secure form, by default - empty, use device's default</td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>



### Deprecated Attributes

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
</thead>
<tbody>    
  <tr>
    <td>&lt;string name=&quot;custom_button_icon_name&quot;&gt;</td>
    <td>Custom button icon filename without extension. This will be displayed on the toolbar.</td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;custom_button_icon_description&quot;&gt;</td>
    <td>Content description for custom button.It briefly describes the view and is primarily used for accessibility support. Set this property to enable better accessibility support for your application.</td>
  </tr>
  <tr>
    <td>&lt;string name=&quot;notification_large_icon_name&quot;&gt;</td>
    <td>The name of a resource to use as the large icon of the push notification</td>
  </tr>
</tbody>
</table>
