---
pagename: Credentials
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Accounts
permalink: bot-accounts-credentials.html
indicator: both
---

Resource owners can use the [Bot Accounts](conversational-ai-platform-platform-overview.html) application to define credentials for accessing resources. Once a credential is defined, you can attach it to a bot [API integration](conversation-builder-integrations-api-integrations.html). When the bot is processing a dialog and needs to call the API integration as a part of the dialog flow, the bot will use the associated credentials to authenticate and perform the necessary actions.

You define credentials per organization.

### Credential types (authentication types)
There are several types of credentials that you can define to support [API integrations](conversation-builder-integrations-api-integrations.html):

- **OAuth 2.0**: Use this when you require the use of an access token that's obtained via the OAuth 2.0 protocol. This is a more secure choice than others in this list.
- **Mutual Authentication**: Use this when you require an industry-standard, two-way authentication protocol where both the client and the server authenticate each other. This is a more secure choice than others in this list.
- **Basic Authentication**: Use this when the API has a permanent token that you always want to use. The token is created by the system using the user name and password that you specify. This is a simpler but less secure choice than others in this list.
- **Access Token**: Use this when the API has a permanent token that you always want to use. You specify the token to use. This is a simpler but less secure choice than others in this list.

There's also a credential type that supports the use of third-party NLU engines:

- **Fire API**: If you're using a supported third-party NLU engine to match intents (for example, IBM's Watson), you can use this to authenticate with that engine.

### Add an OAuth 2.0 credential

You can create an OAuth 2.0 credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when you require the use of an access token that's obtained via the OAuth 2.0 protocol.

{: .important}
The images in this section illustrate creating an OAuth 2.0 credential to support integration with Salesforce in particular, as an example.

**To add an OAuth 2.0 credential**

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "OAuth 2.0."
5. Click **Next**.
6. Set the callback/redirect URI in the resource:

    a. Click **Copy** to copy the redirect URI to your clipboard.
        <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/creds_oauth2_img1.png">
    b. Go to the resource (for example, Salesforce), paste in/set the redirect URI there, and save.
        <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/creds_oauth2_img2.png">
7. Click **Next**.
8. In the Add Credentials dialog box, specify the following based on the OAuth 2.0 configuration in the resource application (where you earlier pasted the redirect URI):
    - **Client ID**: Enter the client ID.
    - **Client Secret**: Enter the client secret.
    - **Grant Type**: Always select "Authorization Code." This is the only grant type that's supported.
    - **Scope**: (Optional) Enter the allowed scopes.
    - **Auth URL**: Enter the auth URL (the auth end point).
    - **Resource URL**: Enter the resource URL (the token end point).
    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/creds_oauth2_img3.png">
9. Click **Authorize**.

    This adds the credentials and proceeds to authorize them with the resource. You are redirected to the resource for authentication. If a session is already cached, you might be redirected immediately back to Conversation Builder; otherwise, you'll have to allow authorization.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/creds_oauth2_img4.png">

    If the credentials are valid, you are then redirected back to Conversation Builder, and you'll see a confirmation message indicated that authorization passed successfully. At this point, the token is persisted in Conversation Builder and can be used freely by bots.

     <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/creds_oauth2_img5.png">

#### Reauthorize an existing OAuth 2.0 credential

Depending on the configuration of the resource, you might need to manually reauthorize an existing credential. For example, if you've defined the expiry of the access token, but you haven't defined a refresh token (to refresh the access token when needed), you'll need to manually reauthorize the credential when the access token expires. In general, a configuration like that isn't recommended so that things can be automated as much as possible. However, you can manually reauthorize whenever you need:

- To reauthorize, in the Credentials view, move your mouse over the credential in the list, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> icon, and then select **Authorize** from the menu that appears.

    <img class="fancyimage" style="width:125px" src="img/ConvoBuilder/creds_oauth2_img6.png">

### Add a Mutual Authentication credential

You can create a Mutual Authentication credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when you require an industry-standard, two-way authentication protocol where both the client and the server authenticate each other.

**To add a Mutual Authentication credential**

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

You can create a Basic Authentication credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when the API has a permanent token that you always want to use. The token is created by the system using the user name and password that you specify, and it's valid as long as the password isn't changed.

Like the Access Token credential (discussed below), this type of credential isn't very secure, so it isn't used very often.

**To add a Basic Authentication credential**

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Basic Authentication."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **User Name**: Enter the user name for the system to use to create the token.
    - **User Password**: Enter the password for the system to use to create the token.
7. Click **Save**.

### Add an Access Token credential

You can create an Access Token credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when the API has a permanent token that you always want to use. You specify the token to use.

Like the Basic Authentication credential (discussed above), this type of credential isn't very secure, so it isn't used very often.

**To add an Access Token credential**

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Access Token."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **Access Token**: Enter the token.
    - **Token Type**: Enter the type of token; typically, this value is "Bearer" or "Basic," but this field allows for free text to let you specify another third-party type that isn't supported by any protocol.
7. Click **Save**.

### Add a Fire API credential

While the credential types discussed above support [API integrations](conversation-builder-integrations-api-integrations.html), a Fire API credential is different in that it's used during *domain creation* in [Intent Builder](intent-builder-overview.html).

If you're using a supported third-party NLU engine to match intents (for example, IBM's Watson), when you create the domain that will contain the intents and you specify the NLU to use to match intents, you can also specify the credential to use to authenticate with that third-party NLU engine.

**To add a Fire API credential**

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-right corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Fire API."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **NLU Provider**: Select the NLU provider.
    - **Credentials**: Paste here the credentials that you received from the NLU provider when you set up the service. The credentials must be in JSON format.
7. Click **Save**.

### Delete a credential

Before deleting a credential, manually verify that it isn't in use by a bot or, in the case of Fire API credentials, by a domain. If the credential is in use, you'll need to reconfigure the bots or domains as appropriate.

**To delete a credential**

1. In the Credentials view, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> icon for the credential, and then click **Delete** from the menu that appears.
2. Click **Continue** in the confirmation dialog.
