---
pagename: Attributes Design Sheet
redirect_from:
  - android-attributes-designsheet.html
  - mobile-app-messaging-sdk-for-android-customization-and-branding-attributes-design-sheet.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: SDK Attributes
permalink: mobile-app-messaging-sdk-for-android-sdk-attributes-attributes-design-sheet.html
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
    <td><div class="designsheetnumber" style="font-size: 1.5em">1 / 2</div>&lt;string name=&quot;brand_name&quot;&gt;&lt;/string&gt;, &lt;integer name=&quot;message_receive_icons&quot;&gt;, &lt;string-array name=&quot;message_receive_text&quot;&gt;, &lt;bool name=&quot;clear_history_show_confirm_dialog&quot;&gt;</td>
    <td><img src="img/Brand (1,2).png" alt="" /></td>
  </tr>
  <tr>
  <td><div class="designsheetnumber">3</div> &lt;dimen name=&quot;brand_bubble_stroke_width&quot;&gt;, &lt;color name=&quot;brand_bubble_stroke_color&quot;&gt;, &lt;color name=&quot;brand_bubble_message_text_color&quot;&gt;, &lt;color name=&quot;brand_bubble_message_link_text_color&quot;&gt;, &lt;color name=&quot;brand_bubble_timestamp_text_color&quot;&gt;,  &lt;color name=&quot;brand_bubble_background_color&quot;&gt;, &lt;color name=&quot;brand_logo_background_color&quot;&gt; </td>
  <td><img src="img/Brand messaging bubbles first message (3).png" alt="" /></td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">4</div> &lt;dimen name=&quot;agent_bubble_stroke_width&quot;&gt;, &lt;color name=&quot;agent_bubble_stroke_color&quot;&gt;, &lt;color name=&quot;agent_bubble_message_text_color&quot;&gt;</td>
    <td rowspan="4"><img src="img/Agent message bubbles 1 (4,5,6,7).png" alt="" /></td>
  </tr>
  <tr>
  <td> <div class="designsheetnumber">5</div> &lt;color name=&quot;agent_bubble_message_link_text_color&quot;&gt;, &lt;color name=&quot;agent_bubble_timestamp_text_color&quot;&gt;, &lt;color name=&quot;agent_bubble_background_color&quot;&gt;, &lt;color name=&quot;agent_avatar_background_color&quot;&gt;</td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">6</div> &lt;color name=&quot;agent_avatar_icon_color&quot;&gt;, &lt;color name=&quot;agent_bubble_link_preview_background_color&quot;&gt;</td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">7</div> &lt;color name=&quot;agent_bubble_link_preview_title_text_color&quot;&gt;, &lt;color name=&quot;agent_bubble_link_preview_description_text_color&quot;&gt;</td>

  </tr>
  <tr>
    <td> <div class="designsheetnumber">8</div> &lt;color name=&quot;agent_bubble_pci_form_invitation_background_color&quot;&gt;, &lt;color name=&quot;agent_bubble_pci_form_invitation_background_btn_color&quot;&gt;, &lt;color name=&quot;agent_bubble_pci_form_invitation_stroke_color&quot;&gt;, &lt;color name=&quot;agent_bubble_pci_form_invitation_button_text_color&quot;&gt;, &lt;color name=&quot;agent_bubble_pci_form_invitation_description_text_color&quot;&gt;, &lt;color name=&quot;agent_bubble_pci_form_invitation_title_text_color&quot;&gt;, &lt;color name=&quot;agent_bubble_pci_form_invitation_icon_tint_color&quot;&gt;</td>
    <td><img src="img/Agent message bubbles 2 (8).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">9</div> &lt;dimen name=&quot;consumer_bubble_stroke_width&quot;&gt;, &lt;color name=&quot;consumer_bubble_message_text_color&quot;&gt;,  &lt;color name=&quot;consumer_bubble_message_link_text_color&quot;&gt;, &lt;color name=&quot;consumer_bubble_timestamp_text_color&quot;&gt;, &lt;color name=&quot;consumer_bubble_background_color&quot;&gt;, >&lt;color name=&quot;consumer_bubble_state_text_color&quot;&gt;, &lt;color name=&quot;consumer_bubble_stroke_color&quot;&gt; </td>
    <td rowspan="3"><img src="img/Consumer message bubbles (9,10,11).png" alt="" /></td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">10</div> &lt;color name=&quot;consumer_bubble_link_preview_background_color&quot;&gt;</td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">11</div> &lt;color name=&quot;consumer_bubble_link_preview_title_text_color&quot;&gt;, &lt;color name=&quot;consumer_bubble_link_preview_description_text_color&quot;&gt; </td>
  </tr>
  <tr>
    <td><div class="designsheetnumber">12</div> &lt;color name=&quot;system_bubble_text_color&quot;&gt;, &lt;bool name=&quot;enable_conversation_resolved_message&quot;&gt;, &lt;bool name=&quot;enable_conversation_resolved_separator&quot;&gt;, &lt;color name=&quot;conversation_separator_text_color&quot;&gt;</td>
    <td><img src="img/System messages (12).png" alt="" /></td>
  </tr>
  <tr>
     <td><div class="designsheetnumber">13</div> &lt;bool name=&quot;unread_indicator_bubble_enable&quot;&gt;, &lt;color name=&quot;unread_indicator_bubble_text_color&quot;&gt;, &lt;color name=&quot;unread_indicator_bubble_background_color&quot;&gt;</td>
     <td><img src="img/Unread messages indicator bubbles (13).png" alt="" /></td>
  </tr>
  <tr>
     <td><div class="designsheetnumber">14</div> &lt;color name=&quot;feedback_fragment_background_color&quot;&gt;, &lt;color name=&quot;feedback_fragment_title_question&quot;&gt;, &lt;color name=&quot;feedback_fragment_star&quot;&gt;, &lt;color name=&quot;feedback_fragment_rate_text&quot;&gt;, &lt;color name=&quot;feedback_fragment_title_yesno&quot;&gt;, &lt;color name=&quot;feedback_fragment_yesno_btn_selected_background&quot;&gt;, &lt;color name=&quot;feedback_fragment_yesno_btn_default_background&quot;&gt;,  &lt;color name=&quot;feedback_fragment_yesno_btn_text_selected&quot;&gt;, &lt;color name=&quot;feedback_fragment_yesno_btn_text_default&quot;&gt;, &lt;color name=&quot;feedback_fragment_yesno_btn_stroke_default&quot;&gt;, &lt;color name=&quot;feedback_fragment_yesno_btn_stroke_selected&quot;&gt;, &lt;dimen name=&quot;feedback_fragment_yesno_btn_stroke_width_default&quot;&gt;, &lt;dimen name=&quot;feedback_fragment_yesno_btn_stroke_width_selected&quot;&gt;, &lt;color name=&quot;feedback_fragment_agent_details_name&quot;&gt;</td>
     <td><img src="img/Survey screen (14).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">15</div> &lt;color name=&quot;edit_text_underline_color&quot;&gt;, &lt;color name=&quot;lp_enter_msg_text&quot;&gt;, &lt;color name=&quot;lp_enter_msg_hint&quot;&gt;, &lt;color name=&quot;lp_send_button_text_enable&quot;&gt;, &lt;color name=&quot;lp_send_button_text_disable&quot;&gt;, &lt;bool name=&quot;use_send_image_button&quot;&gt; </td>
    <td><img src="img/Message edit text (15).png" alt="" /></td>
  </tr>
  <tr>
  <td><div class="designsheetnumber">16</div> &lt;color name=&quot;connection_status_connecting_bg_color&quot;&gt;, &lt;color name=&quot;connection_status_not_connected_bg_color&quot;&gt;, &lt;color name=&quot;connection_status_connecting_text_color&quot;&gt;, &lt;color name=&quot;connection_status_not_connected_text_color&quot;&gt;</td>
  <td><img src="img/Connection status bar (16).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">17</div> &lt;color name=&quot;scroll_down_indicator_unread_counter_text_color&quot;&gt;, &lt;color name=&quot;scroll_down_indicator_unread_summary_text_color&quot;&gt;, &lt;color name=&quot;scroll_down_indicator_unread_counter_stroke_color&quot;&gt;, &lt;dimen name=&quot;scroll_down_indicator_unread_counter_stroke_width&quot;&gt;, &lt;color name=&quot;scroll_down_indicator_unread_counter_solid_color&quot;&gt;, &lt;color name=&quot;scroll_down_indicator_background_color&quot;&gt;, &lt;color name=&quot;scroll_down_indicator_arrow_down_color&quot;&gt;</td>
    <td><img src="img/in page navigation - scroll down indicator (17).png"></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">18</div> &lt;color name=&quot;attachment_menu_item_background_color&quot;&gt;, &lt;color name=&quot;lp_attachment_menu_background_color&quot;&gt;, &lt;color name=&quot;lp_attachment_menu_item_text_color&quot;&gt;, &lt;color name=&quot;lp_attachment_menu_item_icon_color&quot;&gt;lpinfra_ui_ic_attach.xml</td>
    <td><img src="img/Photo sharing (18).png" alt="" /></td>
  </tr>
  <tr>
    <td> <div class="designsheetnumber">19</div> &lt;color name=&quot;bubble_selected_background_color&quot;&gt;</td>
    <td><img src="img/Miscellaneous (19).png" alt="" /></td>
  </tr>
</tbody>
</table>
</div>
