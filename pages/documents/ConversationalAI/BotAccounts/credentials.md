---
pagename: Credentials
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Accounts
permalink: bot-accounts-credentials.html
indicator: both
---

Resource owners can use Conversation Builder to define credentials for accessing resources. Once a credential is defined, you can attach it to a bot API integration. When the bot is processing a dialog and needs to call the API integration as a part of the dialog flow, the bot will use the associated credentials to authenticate and perform the necessary actions.

You define credentials per organization.

### Authorization types
A credential that you define can use one of the following types of authorization:

- **Oauth 2.0**: Use this when you require the use of an access token that's obtained via the OAuth 2.0 protocol.
- **Mutual Authentication**:
- **Basic Authentication**:
- **Access Token**:
- **Fire API**:


### Add an OAuth 2.0 credential

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "OAuth 2.0."
5. Click **Next**.
6. Set the callback/redirect URI in the resource:
    a. Click **Copy** to copy the redirect URI to your clipboard.
    b. Go to the resource (for example, Salesforce), paste in/set the redirect URI there, and save.
7. Click **Next**.
8. In the Add Credentials dialog box, specify the following:
    - **Client ID**:
    - **Client Secret**:
    - **Grant Type**: Always select "Authorization Code." This is the only grant type that's supported.
    - **Scope**: (Optional)
    - **Auth URL**: 
    - **Resource URL**:
9. Click **Authorize**.

    This adds the credentials and proceeds to authorize them with the resource. You are redirected to the resource for authentication. If a session is already cached, you might be redirected immediately back to Conversation Builder; otherwise, you'll have to allow authorization.

    If the credentials are valid, you are redirected back to Conversation Builder, and you'll see a confirmation message indicated that authorization passed successfully. At this point, the token is persisted in Conversation Builder and can be used freely by bots.

#### Authorize an existing OAuth 2.0 credential

Whenever you need to authorize with existing credentials, in the Credentials view, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> icon for the credential, and then click **Authorize** from the menu that appears.

### Add a Mutual Authentication credential

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Mutual Authentication."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **Keys Certificate**: Click **Upload**, and upload the file that contains the private and public keys.
    - **Trust Certificate**: Click **Upload**, and upload the file that contains the trusted resources. The file format must be .crt, .cer, or .pem.
    - **Cryptographic Protocols**: Select the encryption/decryption protocols that are supported by the trusted resources. If you leave this blank, the default value of TLS 1.2 and TLS1.1 is used.
7. Click **Save**.

### Add a Basic Authentication credential

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Basic Authentication."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **User Name**: Enter the user name.
    - **User Password**: Enter the password.
7. Click **Save**.

### Add an Access Token credential

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Access Token."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **Access Token**: TBA
    - **Token Type**: TBA
7. Click **Save**.

### Add a Fire API credential

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Fire API."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **NLU Provider**: Select the NLU provider.
    - **Credentials**: Enter the credentials in JSON format.
7. Click **Save**.

### Delete a credential

**To delete a credential**

1. In the Credentials view, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> icon for the credential, and then click **Delete** from the menu that appears.
2. Click **Continue** in the confirmation dialog.
