---
pagename: LiveEngage Configuration
redirect_from:
  - consumer-experience-voice-video-ios-requirements.html
  - voice-and-video-for-ios-sdk-beta-liveengage-configuration-agent-workspace-requirements.html
  - consumer-experience-voice-video-ios-account-settings.html
  - voice-and-video-for-ios-sdk-beta-liveengage-configuration-account-settings.html
  - consumer-experience-voice-video-ios-voip-configuration.html
  - voice-and-video-for-ios-sdk-beta-liveengage-configuration-voip-configuration.html
  - consumer-experience-voice-video-ios-register-app.html
  - voice-and-video-for-ios-sdk-beta-liveengage-configuration-register-your-app.html
  - voice-and-video-for-ios-sdk-beta-liveengage-configuration.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Voice and Video for iOS SDK (BETA)
permalink: mobile-app-messaging-sdk-for-ios-voice-and-video-for-ios-sdk-beta-liveengage-configuration.html
indicator: messaging
---

### Agent Workspace Requirements

Your agents will be using LiveEngage from a regular web browser to make calls to your consumers. The following sections explain how to setup your LiveEngage account for voice & video support.

Note: Legacy systems do NOT support this feature

#### Supported Browsers

| Browser | Version |  Desktop OS |
| ------------- |:-------------:|:-------------|
| Chrome | latest (>= v54)  | Windows, MacOSX, Linux |

**Note**: Only web browsers listed here are supported. When using LiveEngage from an unsupported browser the feature is automatically disabled from the agent workspace.

#### Required Hardware

| Feature	| Hardware | Note |
| --------|:---------|:-----|
| Voice Calls |	Microphone | - |
| Video Calls |	Microphone + Webcam |	- |
| In-app CoBrowse |	- | requires a voice-call |

### Account Settings

### Account Features

By default, voice & video is **not enabled** in your LiveEngage account. Please contact your LivePerson account manager to have this feature enabled for you.

### User Profiles

Your agents on LiveEngage require a specific set of skills in order to use the **voice**, **video** or **In-app CoBrowse** capabilities of your account.

By default, these settings are enabled for your agents role. If you wish to disable or customize them for specific **Agent Groups**, follow these steps:

  1. Goto the **Users** tab
  2. Select **Profiles**
  3. Select the profile you wish to edit (usually: **Agent**)


![Profiles1](img/le_profiles_01.png)

Enable the permissions you wish to _grant_ to your group:

  * [x] _Initiate voice conversation_
  * [x] _Initiate live video_
  * [x] _Initiate CoBrowse view-only session, with scroll-control_ (1)
  * [x] _Initiate CoBrowse view-only session_
  * [x] _Initiate CoBrowse shared control session_

All of these settings should be self-explanatory.

![Profiles2](img/le_profiles_02.png)

_Scroll-only is currently supported in Web-based CoBrowse only. For in-app CoBrowse this setting is identical to the normal view-only mode._

### Invitation Options

The settings you chose in **User Profiles** will be reflected in all of your account's **Messaging conversations** (not Chat). Depending on the features you enabled, you will see something similar to below:

![Conversations Features](img/le_conv_features.png)

### VOIP Configuration

To make full use of **LivePerson's Live Voice & Video** SDK, you should add Voice-Over-IP capabilities to your iOS app. This allows users to receive calls in real-time, even if your app is closed.

**Heads-up**: Setting up VoIP Push Notifications the first time can be the most time-consuming task of integration. However, it only needs to be done once and is absolutely worth the effort. Just follow the steps below.

  * **Setting up your App**
    * [Login to Apple Member Center](#step-1-login-to-apple-member-center)
    * [Create an App ID](#step-2-create-an-app-id)
  * **Push via SSL certificate**
    * [Create a server-side VoIP push certificate](#step-1-create-a-server-side-voip-push-certificate)
    * [Export your Certificate](#step-2-export-your-certificate)
    * [Convert your Certificate](#step-3-convert-your-certificate)
  * **Push via Tokens**
    * [Coming Soon](#coming-soon)

#### Setting up your App

##### Step 1: Login to Apple Member Center

First login to the [**Apple Member Center**](https://developer.apple.com/account/). Once logged in, you should open the section **Certificates, IDs & Profiles** from your sidebar.

![Certificates](img/member_ceter_certificates.png){:style="max-height:350px"}

##### Step 2: Create an App ID

**Note:** If you already have an explicit App ID with `Push Notifications` capability you can skip to Step 3.

In order to use Push notifications your app requires an **Explicit App ID** matching your app's `bundle Id`. Wildcard app IDs are not possible. To create a new App Id:

  * Under **Identifiers**, select App IDs.
  * Press **+** in top-right corner

![App IDs](img/member_ceter_app_ids.png)

  * Enter the app’s name
  * Select **Explicit App Id** and enter the app's full bundle ID in the **Bundle ID** field

![App ID Register](img/member_ceter_app_id_register_01.png)

  * From the list of **App Services** check **Push Notifications**

![App ID Register2](img/member_ceter_app_id_register_02.png)

Now press **Continue** and you're done with this step.

#### Push via SSL certificate

##### Step 1: Create a server-side VoIP push certificate

In order to send VoIP-Push notifications to your app's users, a server-side SSL certificate is required. The certificate ensures that no untrusted party can send push-calls to your users.

  * Under **Certificates**, select All.
  * Press **+** in top-right corner

![Certificates New](img/member_ceter_certificates_new.png)

  * Check **VoIP Services Certificate** from the list
  * Press **Continue**

![Certificates New 2](img/member_ceter_certificates_new_02.png)

In the next step you will need to select the **Bundle ID** of your app (created OR edited in _Step #2_). The displayed bundle ID contains a random prefix, which you can ignore. You will be asked to create a CSR (certificate-signing-request), so follow the on-screen instructions.

  * After the CSR is created you are asked to upload it
  * Once uploaded the server-side certificate is created, which we can then download
  * Open the downloaded **certificate** so it will be added to your Mac's keychain.


For some more details, refer to this [answer on StackOverflow](http://stackoverflow.com/questions/21250510/generate-pem-file-used-to-setup-apple-push-notification).


##### Step 2: Export your Certificate

In order for Apple VoIP Push services to be used through LivePerson's PusherService, the just created certificate & signing key are required. To export them, follow these steps:

   * First open the `Keychain Access` app on your Mac
   * Select **login** on top-left & **Certificates** bottom-left
   * You should see a list of certificates on your Mac

![Keychain Export](img/keychain_export_01.png)

   * Select the VoIP certificate you just created (it's name includes **VoIP Services**)
   * Dropdown the selection
   * First select the **certificate** itself (top)
   * Right-click and choose **Export XXX...** from the menu
   * Choose a _save location_ on your Mac, let's name it: `myvoipapp-certificate.p12`
   * You will be asked to enter a password. Choose any and remember it.

![Keychain Export2](img/keychain_export_02.png)

   * Now repeat the steps above, this time by selecting the **private key** just below the certificate
   * When saving let's name it `myvoipapp-private-key.p12`

Your have now successfully exported both your **Certificate** & **Private Key**.


##### Step 3: Convert your Certificate

Apple's PushService requires **Push Certificates** and keys to come in a special SSL format, called `pem`. For this reason, it is necessary to convert the certificates exported from your Mac, which are stored in `p12` format.

  * Make sure you have `OpenSSL` installed on your computer
  * `cd` to the directory where you exported both your `*.p12` files to
  * Run the commands below in order, assuming you named your certificate `myvoipapp-certificate.p12` and private-key `myvoipapp-private-key.p12` respectively

#### Run OpenSSL in Shell

```bash
# Step 1 - Converts your certificate from p12 to pem
openssl pkcs12 -clcerts -nokeys -out myvoipapp-certificate.pem -in myvoipapp-certificate.p12
```
```bash
# Step 2 - Converts your private-key from p12 to pem
openssl pkcs12 -nocerts -out myvoipapp-private-key.pem -in myvoipapp-private-key.p12
```
```bash
# Step 3 - Removes the password-protection from your private-key (required!)
openssl rsa -in myvoipapp-private-key.pem -out myvoipapp-private-key-nopass.pem
```

##### Store Certificates

Now delete `myvoipapp-private-key.pem` again.You should end up with two remaining new files, which you should store safely:

  * `myvoipapp-certificate.pem`
  * `myvoipapp-private-key-nopass.pem`

This is it. The created files are required to be uploaded to LivePerson's App Configurations of your LiveEngage Account. To learn how to upload your certificates, please continue reading [Register Your App](#register-your-app).


#### Push via Tokens

##### Coming soon

Push notifications using tokens are not yet supported. Please contact your LivePerson account manager for more details.

### Register Your App

In order to use your app with your LiveEngage account, you need to register it. The steps below are mandatory to receive push-call notifications on iOS.

#### Register your App ID

  * Login to your **LiveEngage** account as _Account Admin_
  * Open **Campaigns** tab
  * Select **Datasources** label below the campaigns list

![Data Sources](img/le_campaigns_datasources.png)

  * Select **APP** tab
  * Under **Mobile App Management** choose **Manage**

![Data Sources Apps](img/le_campaigns_datasources_apps.png)

  * Click **+ Add New**

![Data Sources Apps2](img/le_campaigns_datasources_apps_02.png)

  * Choose [*iOS*] as Platform
  * Enter your app's **Bundle ID** prefixed with `voip:` in **Mobile App name**, for example: **`voip:com.mybrand.app`**. Adding the prefix is mandatory to receive VoIP calls.
  * Press __Create app__
  * Wait for a confirmation, then __Close__

![Data Sources Apps3](img/le_campaigns_datasources_apps_03.png)

***

#### Configure your App

  * Choose your app from the list
  * Click **Edit** when hovering

![Data Sources Apps4](img/le_campaigns_datasources_apps_04.png)

  1. Upload your **Certificate file**
  2. Upload your **Key file**
  3. Save changes

![Data Sources Apps5](img/le_campaigns_datasources_apps_05.png)
_Note_: If you followed the [VoIP Example Setup](#voip-configuration), these are `myvoipapp-certificate.pem` and private-key `myvoipapp-private-key-nopass.pem`, respectively.

Your app registration is now complete.
