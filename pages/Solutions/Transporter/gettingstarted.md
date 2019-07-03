---
pagename: Getting Started
redirect_from:
sitesection: Solutions
documentname: Transporter
permalink: transporter-getting-started.html
indicator: Both
---

<div class="important"> Transporter is currently a Beta feature - users must agree to our Data Application Beta terms of use upon login.
<br>
<br>
<b>Please be aware that some elements and usability may change as we finalize this feature.</b>
</div>

### Requirements

Login to Transporter requires:

* Feature access by request (see your account manager).

* A valid LiveEngage username and password.

* Two-factor authentication with an authenticator application.

### How to access the Transporter

Access to Transporter is strictly by request - speak to your account manager to discuss pricing and availability.
Once your account is enabled, you can begin by logging in via [https://transporter.liveperson.net](https://transporter.liveperson.net)

#### Login Page  

Enter your LiveEngage credentials:

* Account Number

* LiveEngage Username

* LiveEngage Password

Note that logging into Transporter will terminate any existing LiveEngage sessions - however, you can login to LiveEngage after logging into Transporter without disrupting your Transporter session.

#### Two-factor Authentication  

For security reasons and to protect your data privacy, Transporter also requires mandatory login verification via Two-factor Authentication.
If this is the first time you are logging in, you will need to enroll - simply download an Authenticator application, such as:

* Google Authenticator

* Authy

* 1Password

* LastPass Authenticator

* Okta

Once you have scanned your unique QR code with your device, enter the 6 digit verification code to continue.  On subsequent logins, you will be prompted to enter a new 6 digit code as shown on your devices Authenticator Application - do not lose your 2FA token.

### Single Sign-on

All users of Data Transporter may now login via Single Sign-on instead of regular username / password.
This provides accounts with Agent SSO enabled to also utilise Data Transporter - in addition, non Agent SSO users can take advantage of the Simultaneous Login feature this provides when using the SSO option.

**How to Enable**

From the main login page (https://transporter.liveperson.net/login), simply enter your account number and then click “Single Sign-on” link below the regular “Sign in” button.
Alternatively, use the following shortcut:
https://transporter.liveperson.net/sso/YOUR_ACCOUNT_NUMBER

### Task Manager

The TASKS page will show each task you have configured in Transporter - if this is your first time logging in, no tasks will have yet been configured.
On the left-hand side is the navigation and alerts menu.

#### Navigation

To the left of the Task Manager, you'll find the Navigation bar. This bar contains all the different sections of the Transporter. The sections are as follows:

**TASKS**: see and manage all your scheduled tasks here.

**HISTORY**: view or download completed reports from your destinations.

**REPORTS**: view and select available business or integration type reports.

**LIVEENGAGE**: setup your LiveEngage source authorization.

**SFTP_AMAZON_GOOGLE**: setup your report destination authorization.

**ACCOUNT**: configure your timezone, set your encryption keys, and customize filenames and data delimiters used by Transporter.

### Initial Configuration

Upon first use, please use the ALERTS notifications area at the bottom of the Navigation bar to navigate to each relevant section and follow the appropriate instructions.

1. Choose a timezone - this setting will ensure all scheduled reports and times will appear relative to your selected timezone.

2. Setup encryption - for security reasons, Transporter encrypts all reports before transmission to your selected destination. As such, encryption must be activated by generating a Public/Private key-pair (or by bringing your own) - see Encryption section for more details..

3. Setup LiveEngage - to get started, make sure you have authorized at least 1 LiveEngage account source - you can retrieve an API key from the LiveEngage console.

### Encryption

For security and data protection, all reports shall be encrypted - Transporter supports PGP/GPG based encryption which conforms to the OpenPGP standard.
To get started with Encryption, you must first generate a Public and Private key-pair (PGP based) via the ACCOUNT section in Transporter - alternatively, if you have your own Public and Private keys (PGP based), you can provide these instead.

Once your keys are generated, your Public Key will be saved to your account, and you will be prompted to securely store your Private Key and Passphrase (these will not be saved).

<div class="important">If you do not save your Private Key and/or Passphrase offline, you will not be able to decrypt your completed reports - use GPG Suite or GPG4Win to do so.</div>

**Notes about Encryption**:

* Keys will be generated with an RSA key size of 2,048 bits (therefore, if you bring your own, they must also be 2,048 bits).

* A secure Passphrase is required to generate a set of keys - if you bring your own keys, enter the Passphrase you previously used to verify your keys are valid.

* There are a variety of free and paid tools you may used to store your Public_Private key offline, and allow for 1-click encryption_decryption of GPG/PGP-based files:

	* GPG Tools / GPG Suite (Mac OSX) (free).

	* GPG4Win (Windows) (free).

### Connecting to LiveEngage

#### API Key Setup

To extract report data from LiveEngage, Transporter requires that you configure a set of API keys from the LiveEngage console and enter them into Transporter in the LIVEENGAGE section, accessible from the Navigation bar.

When [configuring API keys](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) from the LiveEngage Console, ensure the following APIs are checked after key creation:

* Data: Data Access API, Engagement History / Messaging Interactions, Operational Realtime / Messaging Operations

* Administration: Users, Skills, Agent Groups

#### Transporter Authorization

Once you have created your keys, enter them into Transporter via the LIVEENGAGE section and click create.  Your API keys will be encrypted and stored securely.
After verifying your keys are valid, you will see the LiveEngage setting appear in the table at the bottom of the page - it is now ready for use as your source when you configure your first report.

<div class="important">Once you have performed the initial Transporter configuration as detailed in this guide, it's time to create your reporting tasks! <a href="transporter-creating-report-tasks.html">See this guide</a> for more information on how to do so.</div>
