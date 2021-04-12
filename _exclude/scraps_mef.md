This is for storing segments of doc temporarily until they can be added to the public files...

UNIVERSAL TILE

For "Interaction Support" topic for adding the Universal interaction:

| Universal | Yes, but the JSON must adhere to the [Rich Messaging support](getting-started-with-rich-messaging-introduction.html) for Conversational Cloud. Some channels might not support all templates. |

SNIPPET FOR TOP SECTION

- **Consumer Authentication**: Use this when you require the bot to make API calls on behalf of the consumer. With this type of credential, the consumer is sent an authentication link, uses it to authenticate, and obtains a token that is sent to the bot. This “delegates” access to the bot, so it can make the API calls.

NEW SECTION BELOW

### Add a Consumer Authentication credential

You can create a Consumer Authentication credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when you require the bot to make API calls on behalf of the consumer. With this credential, the consumer receives an authentication link, uses it to authenticate, and obtains a token that is sent to the bot. This “delegates” access to the bot, so it can make the API calls. The general flow is this:

1. In the bot, the Integration interaction is triggered in the dialog.
2. The bot sends an authentication URL (a plain link) to the consumer.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/creds_consumer_auth_2.png">

3. The consumer clicks the link, is directed to the authentication URL (e.g., a login page), and authenticates, thereby obtaining a token.
4. The token is sent to the bot.
5. The bot runs the integration (with the token) and responds with a result.

**To add a Consumer Authentication credential**

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    * **Name**: Enter a descriptive name.
    * **Authentication Type**: Select "Consumer Authentication."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    * **Authentication URL**: Enter the authentication endpoint to be sent to the consumer in order to obtain an access token that is sent to the bot. The URL is provided by the resource provider; see their documentation for this information.
    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/creds_consumer_auth_1.png">
7. Click **Save**.