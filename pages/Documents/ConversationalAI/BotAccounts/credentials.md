---
pagename: Credentials
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Accounts
permalink: bot-accounts-credentials.html
indicator: both
date_updated: 2022/11/13
---

Resource owners can use the Bot Accounts application to define credentials for accessing resources. Once a credential is defined, you can attach it to a bot [API integration](conversation-builder-integrations-api-integrations.html). When the bot is processing a dialog and needs to call the API integration as a part of the dialog flow, the bot will use the associated credentials to authenticate and perform the necessary actions.

You define credentials per organization.

### Credential types (authentication types)
There are several types of credentials that you can define to support [API integrations](conversation-builder-integrations-api-integrations.html):

- **OAuth 2.0**: Use this when you require the use of an access token that's obtained via the OAuth 2.0 protocol. You can obtain the access token using the client’s credentials plus an authorization code (Authorization Code grant type) or using just the client’s credentials (Client Credentials grant type). OAuth 2.0 and Mutual Authentication are more secure choices than others in this list.
- **Consumer Pre-Authentication**: A type of OAuth 2.0 authentication. If you’re authenticating your consumers and then storing and managing their digital identities using an identity provider (IdP) service, you can leverage that functionality in the Conversational Cloud, effectively federating their identities to LivePerson. This credential lets you securely share those consumer tokens with registered LivePerson services (Conversation Builder, etc.). In turn, our services can use the tokens to validate consumers; to carry on authenticated conversations, without prompting the consumer to re-authenticate when powering multiple LivePerson use cases; and to make API calls to your brand’s services on the consumer’s behalf (retrieve order details, make a payment, etc.). In this authentication flow, the consumer is authenticated before a conversation with a bot ever begins.
- **Consumer Authentication**: A type of OAuth 2.0 authentication. In this authentication flow, the consumer is sent an authentication challenge (a link) during the bot conversation. Once it’s completed successfully and the consumer is authenticated, the consumer’s unique token is obtained from your identity provider (IdP) service and sent to the bot. This lets the bot carry on an authenticated conversation with the consumer and make API calls on the consumer’s behalf. While this credential is available, LivePerson strongly recommends the Consumer Pre-Authentication credential instead for [several reasons](bot-accounts-credentials.html#how-does-consumer-pre-authentication-differ-from-consumer-authentication).
- **Mutual Authentication**: Use this when you require an industry-standard, two-way authentication protocol where both the client and the server authenticate each other. Mutual Authentication and OAuth 2.0 are more secure choices than others in this list (for example, Basic Authentication).
- **Basic Authentication**: Use this when the API has a permanent token that you always want to use. The token is created by the system using the user name and password that you specify. This is a simpler but less secure choice than others in this list.
- **Access Token**: Use this when the API has a permanent token that you always want to use. You specify the token to use. This is a simpler but less secure choice than others in this list.

There's also a credential type that supports the use of [third-party NLU engines](intent-manager-natural-language-understanding-google-dialogflow-and-ibm-watson-nlu-engines.html):

- **Third-party NLU**: If you're using a [Google Dialogflow or IBM Watson](intent-manager-natural-language-understanding-google-dialogflow-and-ibm-watson-nlu-engines.html) NLU engine for NLU intelligence, you can use this credential to authenticate with that engine.

{: .attn-alert}
When working with API integrations, keep in mind that the authentication type that you select for a credential must be supported by the API that you intend to call. For example, don't use Basic Authentication if the API doesn't support it.

### Add an OAuth 2.0 credential using the Authorization Code grant type

You can create an OAuth 2.0 credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when you require the use of an access token that's obtained via the OAuth 2.0 protocol.

{: .attn-note}
The images in this section illustrate creating an OAuth 2.0 credential to support integration with Salesforce in particular, as an example.

#### To add an OAuth 2.0 credential using the Authorization Code grant type

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credential** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "OAuth 2.0."
    - **Grant Type**: Select "Authorization Code."

    <img class="fancyimage" alt="Add Credentials page when adding an OAuth 2.0 credential and selecting the credential type" style="width:750px" src="img/ConvoBuilder/creds_oauth2_img7.png">

5. Click **Next**.
6. Set the callback/redirect URI in the resource:

    a. Click **Copy** to copy the redirect URI to your clipboard.
        <img class="fancyimage" alt="Add Credentials page when adding an OAuth 2.0 credential and setting the callback or redirect URI in the resource" style="width:750px" src="img/ConvoBuilder/creds_oauth2_img1.png">
    b. Go to the resource (for example, Salesforce), paste in/set the redirect URI there, and save.
        <img class="fancyimage" alt="Setting the redirect URI in the resource, for example, Salesforce" style="width:750px" src="img/ConvoBuilder/creds_oauth2_img2.png">
7. Click **Next**.
8. In the Add Credentials dialog box, specify the following based on the OAuth 2.0 configuration in the resource application (where you earlier pasted the redirect URI):
    - **Client ID**: A public ID that identifies the API client to the respective entity. Also called the consumer key/ID.
    - **Client Secret**: A private secret that only the client should have. Used for verifying the client's identity before providing an access token to the API. Also called the consumer secret.
    - **Scope**: (Optional) Used to define the scope of the access granted by the token. For example, read_only in some resource providers would mean that the token will only grant access to read APIs. This value is passed as is; it should conform to the OAuth 2.0 specification.
    - **Auth URL**: Enter the auth URL (the auth end point). Used to exchange the OAuth2 credentials for a code that is later exchanged for an access token. Used only during the authorization process, which usually happens once.
    - **Token URL**: Enter the resource URL (the token end point). Used to exchange the OAuth2 credentials plus the code that was received from the Auth URL for an access token that will be used for making the secured API calls. Also used for refreshing the token when it expires.
    <img class="fancyimage" alt="Add Credentials page when adding an OAuth 2.0 credential and setting the properties needed for the authorization process" style="width:750px" src="img/ConvoBuilder/creds_oauth2_img3.png">
9. Click **Authorize**.

    This adds the credentials and proceeds to authorize them with the resource. You are redirected to the resource for authentication. If a session is already cached, you might be redirected immediately back to Conversation Builder; otherwise, you'll have to allow authorization.

    <img class="fancyimage" alt="Logging into the resource, for example, Salesforce, to authenticate" style="width:400px" src="img/ConvoBuilder/creds_oauth2_img4.png">

    If the credentials are valid, you are then redirected back to Conversation Builder, and you'll see a confirmation message indicating that authorization passed successfully. At this point, the token is persisted in Conversation Builder and can be used freely by bots.

### Add an OAuth 2.0 credential using the Client Credentials grant type

You can create an OAuth 2.0 credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when you require the use of an access token that's obtained via the OAuth 2.0 protocol.

#### To add an OAuth 2.0 credential using the Client Credentials grant type

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credential** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "OAuth 2.0."
    - **Grant Type**: Select "Client Credentials."

    <img class="fancyimage" alt="Add Credentials page when adding an OAuth 2.0 credential and selecting the authentication type" style="width:750px" src="img/ConvoBuilder/creds_oauth2_img8.png">

5. Click **Next**.
6. In the Add Credentials dialog box, specify the following based on the OAuth 2.0 configuration in the resource application:
    - **Client ID**: A public ID that identifies the API client to the respective entity. Also called the consumer key/ID.
    - **Client Secret**: A private secret that only the client should have. Used for verifying the client's identity before providing an access token to the API. Also called the consumer secret.
    - **Scope**: (Optional) Used to define the scope of the access granted by the token. For example, read_only in some resource providers would mean that the token will only grant access to read APIs. This value is passed as is; it should conform to the OAuth 2.0 specification.
    - **Token URL**: Enter the resource URL (the token end point). Used to exchange the OAuth2 credentials for an access token that will be used for making the secured API calls. Also used for refreshing the token when it expires.
    <img class="fancyimage" alt="Add Credentials page when adding an OAuth 2.0 credential and setting the properties needed for the authorization process" style="width:750px" src="img/ConvoBuilder/creds_oauth2_img9.png">
7. Click **Authorize**.

    If the credentials are valid, you'll see a confirmation message indicating that authorization passed successfully. At this point, the token is persisted in Conversation Builder and can be used freely by bots.

### Reauthorize an existing OAuth 2.0 credential

Depending on the configuration of the resource, you might need to manually reauthorize an existing credential. For example, if you've defined the expiry of the access token, but you haven't defined a refresh token (to refresh the access token when needed), you'll need to manually reauthorize the credential when the access token expires. In general, a configuration like that isn't recommended so that things can be automated as much as possible. However, you can manually reauthorize whenever you need:

- To reauthorize, in the Credentials view, move your mouse over the credential in the list, click the <img class="inlineimage" style="width:25px" alt="3-dot icon" src="img/ConvoBuilder/icon_ellipsis.png"> icon, and then select **Authorize** from the menu that appears.

    <img class="fancyimage" alt="Menu for a credential; provides options for Edit, Delete, and Authorize" style="width:125px" src="img/ConvoBuilder/creds_oauth2_img6.png">

### Add a Consumer Pre-Authentication credential

Consumer Pre-Authentication is a type of OAuth 2.0 authentication. If you’re authenticating your consumers and then storing and managing their digital identities using an identity provider (IdP) service, you can leverage that functionality in the Conversational Cloud, effectively federating their identities to LivePerson.

The Consumer Pre-Authentication credential lets you securely share those consumer tokens with registered LivePerson services (Conversation Builder, etc.). In turn, our services can use the tokens to:

* Validate consumers.
* Carry on authenticated conversations, without prompting the consumer to re-authenticate when powering multiple LivePerson use cases.
* Make API calls to your brand’s services on the consumer’s behalf (retrieve order details, make a payment, etc.).

#### Using Consumer Pre-Authentication

In this authentication flow, the consumer is authenticated before a conversation with a bot ever begins. To set this up:

1. Configure your IdP service, so you can leverage it in Conversational Cloud. [Learn more](consumer-authentication-configuration.html).

2. In Bot Accounts, [add a Consumer Pre-Authentication credential](bot-accounts-credentials.html#add-a-consumer-pre-authentication-credential-1).
3. In Conversation Builder, in an API integration in the bot, select the configured credential. This gets the consumer’s unique token from the IdP service when needed for the API call.

<img alt="Example API integration that uses a Consumer Pre-Authentication credential" style="width:800px" src="img/ConvoBuilder/creds_consumer_preauth_use.png">

#### How does Consumer Pre-Authentication differ from Consumer Authentication?

The Consumer Pre-Authentication credential is somewhat similar to the [Consumer Authentication credential](bot-accounts-credentials.html#add-a-consumer-authentication-credential): Both use an IdP service to provide consumer tokens when requested.

However, the authentication flows are different. With the former, the consumer is “pre-authenticated,” i.e., they’re authenticated before a conversation with the bot begins. With the latter, the consumer must complete an authentication challenge during the conversation in order to be authenticated.

Consumer Pre-Authentication is strongly recommended over Consumer Authentication for several reasons: 

* It’s more secure. LivePerson securely stores and manages the consumer tokens in one, central place for use by all registered LivePerson services.
* It’s simpler for you. Lifecycle management is easier because you update the policies in one, central place instead of in multiple LivePerson services. What’s more, within your bot, the integration is implemented differently and more simply: Just select the Consumer Pre-Authentication credential as the one to use. That’s it.
* It’s simpler for your consumers. There’s no work for the consumer to do during the bot conversation.
* Token renewal is done automatically upon expiry.

#### Add a Consumer Pre-Authentication credential

{: .attn-note}
Only one Consumer Pre-Authentication credential can exist per account.

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    * **Name**: Enter a descriptive name.
    * **Authentication Type**: Select “Consumer Pre-Authentication.”
    <img class="fancyimage" alt="Adding a Consumer Pre-Authentication credential" style="width:800px" src="img/ConvoBuilder/creds_consumer_preauth_add.png">
5. Click **Save**.

### Add a Consumer Authentication credential

Unfamiliar with this credential? [Learn more](conversation-builder-integrations-using-consumer-access-tokens.html).

{: .attn-note}
Consider using Consumer Pre-Authentication instead. It’s strongly recommended over this credential; [learn why](bot-accounts-credentials.html#how-does-consumer-pre-authentication-differ-from-consumer-authentication).

#### To add a Consumer Authentication credential

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    * **Name**: Enter a descriptive name.
    * **Authentication Type**: Select “Consumer Authentication.”
5. Click **Next**.
6. For **Authentication URL**, enter the authentication endpoint to be sent to the consumer in order to obtain an access token that is sent to the bot. An example is below. The URL is provided by the resource provider; see their documentation for this info.

    The authentication URL must include the following query params:
    * client_id={PROVIDE THE CLIENT ID}
    * response_type=code
    * redirectedCode={PROVIDE THE REDIRECT URI}
    * scope={PROVIDE THE SCOPE}

7. Click **Save**.

##### Authentication URL Example

```
https://accounts.brand.com/authorize?client_id=34e83335186541078261d83c6d050a32&response_type=code&redirect_uri=https://va.idp.liveperson.net/callback/12345566/redirectedCode&scope=user-read-private
```

### Add a Mutual Authentication credential

You can create a Mutual Authentication credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when you require an industry-standard, two-way authentication protocol where both the client and the server authenticate each other. A Mutual Authentication credential makes use of a key certificate and a trust certificate.

#### Key certificates
A key certificate is a key store file that contains private and public key pairs. A key certificate identifies the LivePerson platform as a valid entity that is allowed to interact with external systems. The recommended format is .p12 (PKCS12). You can generate a self-signed certificate pair using openssl or keytool, for example:

`keytool -genkeypair -alias nt-ms -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore cb-mtls-server.p12 -validity 3650 -ext SAN=dns:localhost,ip:127.0.0.1`

You can verify the file using:

`keytool -keystore nt-ms.p12 -list`

#### Trust certificates
A trust certificate is exported from the external system (e.g., Salesforce) to which the LivePerson platform makes the external call. The recommended file format is .pem.

When you add a Mutual Authentication credential, you can upload a trust certificate via the UI, or you can import it into the keystore as follows. If your keystore already has the trust certificate, then one provided via the UI is not required.

**Note:** The PEM format is the most common format used for trust certificates. Extensions used for PEM certificates are .cer, .crt, and .pem. They are Base64-encoded ASCII files. The DER format is the binary form of the certificate. DER-formatted certificates do not contain the "BEGIN CERTIFICATE/END CERTIFICATE" statements. DER-formatted certificates most often use the .der extension.

You can convert a trust certificate to the required format using openssl. For example, the following commands convert a PEM-format file to DER and then import it into the keystore:

`openssl x509 -outform der -in certificate.pem -out certificate.der`

`keytool -import -alias company-alias -keystore ./cb-mtls-server.p12 -file ./certificate.der`

#### To add a Mutual Authentication credential

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credential** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Mutual Authentication."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **Key Certificate**: This is required. Click **Upload**, and upload the file that contains the private and public keys. The file format must be .pfx, .p12 (recommended), or .jks. Note that the UI doesn’t verify that the uploaded certificate and keys are working; you must verify externally that they’re current and valid.
    - **Trust Certificate**: Click **Upload**, and upload the file that contains the trusted resources. The file format must be .crt, .cer, or .pem. As mentioned above, if your keystore already has the trust certificate, then one provided via the UI is not required. Note that the UI doesn’t verify that the uploaded certificate and keys are working; you must verify externally that they’re current and valid.
    - **Key Certificate Password**: This is an optional field, but if the keys certificate requires a password, you must enter it here.
    - **Trust Certificate Password**: This is an optional field, but if the trust certificate requires a password, you must enter it here.
    - **Cryptographic Protocols**: Select the encryption/decryption protocols that are supported by the trusted resources. If you leave this blank, the default value of TLS 1.2 and TLS1.1 is used.
7. Click **Save**.

### Add a Basic Authentication credential

You can create a Basic Authentication credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when the API has a permanent token that you always want to use. The token is created by the system using the user name and password that you specify, and it's valid as long as the password isn't changed.

Like the Access Token credential (discussed below), this type of credential isn't very secure, so it isn't used very often.

**To add a Basic Authentication credential**

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credential** in the upper-right corner.
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
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credential** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Access Token."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **Access Token**: Enter the token.
    - **Token Type**: Enter the type of token; typically, this value is "Bearer" or "Basic," but this field allows for free text to let you specify another third-party type that isn't supported by any protocol.
7. Click **Save**.

### Add a third-party NLU credential

{: .attn-note}
This procedure applies if you're using a Google Dialogflow or IBM Watson NLU engine for NLU intelligence.

While the credential types discussed above support [API integrations](conversation-builder-integrations-api-integrations.html), a third-party NLU credential is different in that it's used during *domain training* in [Intent Manager](intent-manager-overview.html).

**To add a third-party NLU credential**

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credential** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    - **Name**: Enter a descriptive name.
    - **Authentication Type**: Select "Third-party NLU."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    - **NLU Provider**: Select the NLU provider.
    - **Credentials**: Paste here the credentials that you received from the NLU provider when you set up the service. The credentials must be in JSON format.
7. Click **Save**.

### Delete a credential

Before deleting a credential, manually verify that it isn't in use by a bot or, in the case of third-party NLU credentials, by a domain. If the credential is in use, you'll need to reconfigure the bots or domains as appropriate.

**To delete a credential**

1. In the Bot Accounts application, select the name of the organization for which to delete the credential.
2. Click **Credentials** in the upper-left corner to display the list of credentials.
3. Select the credential, and then click the <img style="width:25px" alt="3-dot icon" src="img/ConvoBuilder/icon_ellipsis.png"> icon that appears.
4. Select **Delete**.
5. Click **Continue** in the confirmation dialog.