---
title: VoIP Configuration
redirect_from:
  - consumer-experience-voice-video-ios-voip-configuration.html
level1: Documents
level2: Consumer Experience
level3: Voice & Video for iOS SDK (BETA)
level4: LiveEngage Configuration
order: 100
permalink: voice-&-video-for-ios-sdk-beta-liveengage-configuration-voip-configuration.html
indicator: messaging
---

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



## Setting up your App

### Step 1: Login to Apple Member Center

First login to the [**Apple Member Center**](https://developer.apple.com/account/). Once logged in, you should open the section **Certificates, IDs & Profiles** from your sidebar.

![Certificates](img/member_ceter_certificates.png){:style="max-height:350px"}

### Step 2: Create an App ID

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

## Push via SSL certificate

### Step 1: Create a server-side VoIP push certificate

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


### Step 2: Export your Certificate

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


### Step 3: Convert your Certificate

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

#### Store Certificates
Now delete `myvoipapp-private-key.pem` again.You should end up with two remaining new files, which you should store safely:

  * `myvoipapp-certificate.pem`
  * `myvoipapp-private-key-nopass.pem`

This is it. The created files are required to be uploaded to LivePerson's App Configurations of your LiveEngage Account. To learn how to upload your certificates, please continue reading [Register Your App](consumer-experience-voice-video-ios-register-app.html){:target="_blank"}.


## Push via Tokens

**Coming soon!**

Push notifications using tokens are not yet supported. Please contact your LivePerson account manager for more details.
