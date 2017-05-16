# C# - Engagement History API Example
This is a basic example of how to connect to the Engagement History API in C# by using a 3rd party OAuth Class from http://cropperplugins.codeplex.com/SourceControl/latest#Cropper.Plugins/OAuth1.0/OAuth.cs. In order to run this example you will need to update the EngagementHistoryAPI.cs file with your Engagement History API credentials.

# Java - Engagement History API Program
This is a runnable Jar file that will query the Engagement History API based on a keyword, and then send out an email for each of the chat transcripts that are returned. This program will automatically pull all of the chat transcripts for the previous day that contain the keyword you are seaching for.

Example Use Case: I want to get an email with the chat transcript anytime someone answered Dissatisfied to my CSAT question. 

To run this program, you will need to edit the config.properties file, and you will need to create a SendGrid account.

# Java - Engagement History API to Text File
This example uses the Engagement History API to access the chat transcripts for the previous day, parses the data, and then saves the information to a text file.

This example uses the Scribe library. 

To run this example, you will need to updaet the Main.java file with your API keys.

# Java - Transcript Send Email Example
This example uses the Engagement History API to access the chat transcripts for the previous day, parses the data, and then send out an individual email for each chat that occurred. The email contains all of the meta data tied to that chat and the chat transcript. 

This example also uses the Skill API and the Agent API to get the skill name, the name of the agent, and the email of the agent, and then adds that data to the email.

To send the email, this example uses a Gmail account to send out the emails.

### Run The Example
In order to run the example, you will need to have a Gmail account that you can use for sending out the emails, and you will need to have API keys for the Engagement History API. 

You will need to update the following files:
* SendEmailSingleChat.java - with your Gmail credentials
* AgentList.java - with your Engagement History API credentials
* SkillList.java - with your Engagement History API credentials
* IndividualChat.java  with your Engagement History API credentials

# Node JS - Engagement History API Example
This is a basic example of how to connect to the Engagement History API in Node.JS by using the request module. In order to run this example you will need to update the EHAPIExample.js file with your Engagement History API credentials.

# Python - Engagement History API Example
This is a basic example of how to connect to the Engagement History API in Python by using the requests_oauthlib. In order to run this example you will need to update the ehapiExample.py file with your Engagement History API credentials.

This example works with Python 3.5. 

# Python - Engagement History API To CSV
This is an example of how to connect to the Engagement History API in Python by using the requests_oauthlib, and then how to create a CSV file with the data that is returned from the API by using Pandas. In order to run this example you will need to update the eh-api-to_csv-pandas.py file with your Engagement History API credentials.

### Contribution 
Thank you [WildYorkies](https://github.com/WildYorkies) for providing this example code.

This example works with Python 3.5. 

# R - Engagement History API Example
This is a basic example of how to connect to the Engagement History API in R by using the httr library. In order to run this example you will need to update the rEngagementHistory.R file with your Engagement History API credentials.