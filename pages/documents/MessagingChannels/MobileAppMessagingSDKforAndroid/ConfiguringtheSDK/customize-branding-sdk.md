---
pagename: Customize the SDK
redirect_from:
  - android-configuring-sdk.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Customization and Branding

permalink: mobile-app-messaging-sdk-for-android-customization-and-branding-customizing-the-sdk.html

indicator: messaging
---

You can customize the look and feel of the conversation screen with your branding.xml file. Additionally, you can configure the style of the message EditText in your styles.xml file.

### Step 1. Create your branding.xml file and add design attributes

1. In your Android Studio project, right-click your app, and select **New > XML > Values XML File**.

2. Add design attributes to your branding.xml file. The file MUST contain all the resource-names as they are listed in [Attributes](android-attributes.html). The Customer notes column includes space for you to add your branding.

   {:.important}
   If a clearer view of which attribute corresponds with a design element is needed, utilize the [Attributes Design Sheet](android-attributes-designsheet.html).

3. Add resources to your project. The SDK utilizes several resources as part of its GUI. 
   
   | Resource name | Description |
   |---|---|
   | lp_messaging_ui_brand_logo | Default brand avatar on the avatar next to brand bubble (the first brand message) and on agent avatar appearing on the action bar before an agent is assigned. In case you want to define the background color for this avatar - override "brand_logo_background_color" resource id. (This is relevant for bubble brand’s avatar only. Background color of agent avatar on action bar is "agent_avatar_background_color"). |
   | lp_messaging_ui_ic_agent_avatar | Default agent avatar appearing next to an agent’s bubble when no avatar URL is assigned on LiveEngage and on agent avatar appearing on the action bar. In case you want to define the background color for this avatar, override "agent_avatar_background_color" resource id. |
   | lpmessaging_ui_secure_form_progress_bar.xml | Default progress bar vector drawable for PCI secure form (after pressing to fill the form, the button changes to progress bar until we can show the form). To Override this resource - create your own vector drawable under the android drawable folder with the same resource name. |
   | lpmessaging_ui_image_progress_bar.xml | Default progress bar vector drawable for downloading \ uploading an image. It will appear on the image, inside the bubble, until progress is done. To Override this resource - create your own vector drawable under the android drawable folder with the same resource name. |
   | lpinfra_ui_ic_send_disabled.xml | Default send button icon vector drawable. It will appear on the send button. The drawable is colored when the send button is enabled. The color configuration used is R.color.lp_send_button_text_enable. When the send button is disabled, we color it by the color configuration R.color.lp_send_button_text_disable. See more here: [Configuring the SDK](android-attributes.html#Message Edit Text) To Override this resource - create your own vector drawable under the android drawable folder with the same resource name. |

### Step 2. Configure the message EditText in your styles.xml file

1. In the app’s styles.xml file, override the `lp_enter_message_style` with the required style.

   ```xml
   <style name="lp_enter_message_style" parent="Theme.AppCompat.Light.NoActionBar">
   <item name="colorControlActivated">#F8BBD0</item>
   </style>
   ```

2. Change the font of the elements in the conversation view with two separate settings: 

   - **custom_font_name_conversation_feed** - the font name (standard Android font name, such as *san-serif-thin*) for all conversation feed’s element. By default, the value is empty. 

   - **custom_font_name_non_conversation_feed** - the font name (custom installed TTF font, such as *customFont.ttf*), for all elements that are not in the conversation feed. For example, the font on the Enter Message EditText control or toolbar text. 

     {:.important}
     The custom font file must reside in the **assets** folder of the host app, located as a sibling of the **res** folder. If using a custom font, the above font parameters should be the custom font file name with the TTF extension (**customFont.ttf**).