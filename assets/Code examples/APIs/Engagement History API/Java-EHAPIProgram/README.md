# LiveEngage Engagement History API - Send Email Based On Keyword
This program allows you to use the Engagement History API to pull your chat transcripts for the previous day, and then send those transcripts to an Email address. It makes use of the keyword search that is available in the API, which allows you to pull chats with that keyword.

For example, if I wanted to get an email every time someone answered Dissatisfied on my post chat survey, I could use Dissatisfied as my keyword and the program will only pull those chat transcripts.

To use this program, you will need to setup a SendGrid account and create an API key. SendGrid will allow you to send up to 12,000 emails for free a month. If you will be sending more that, they offer very cheap plans.

## How To Use The Program
In order to use the program you will need to get an API key for your SendGrid account, and you will need to fill out the config.properties file with your API information.

### Setup SendGrid 
Once you have logged into your SendGrid account, you will need to go to Settings and then API Keys on the left hand side of the screen.

Next, click the Create API Key button, and then choose General API Key.

In the new dialog box, enter a name for your API key such as EHAPI Key. For this key, the only option you need to enable is Full Access for the Mail Send permissions. 

Click Save to save your key.

You will then be shown your API key. Make sure to store this key in a safe place, because you will not be able to view this key again. If you do lose it, you can create a new key at any time.

### Edit config.properties
In the config.properties file, you will need to add the following information:
* apikey= Your App Key ID
* apisecret= Your App Key Secret
* tokenkey= Your Token ID
* tokensecret= Your Token Secret
* baseuri= Your Base URI for the API call
* accountnum= Your account number
* sendgridapi= Your SendGrid API key
* sendtoemail= The email you want the transcript sent to
* keyword= The keyword that you want to search the transcripts for
