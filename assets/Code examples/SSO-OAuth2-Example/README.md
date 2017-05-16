# SSO OAuth 2.0 Implicit and Code Flow Example

This is an example of how to implement the SSO OAuth 2.0 implicit flow and code flow in NodeJS. It uses the jsonwebtoken module to generate and sign the OpenID Connect Token. 

The example does not verify if the user is logged in, use the same authentication code for everyone, and should not be implemented as is. It is only meant to show how to generate the Token using the two flows.

You can see a live example of the NodeJS app here: <a href="https://enigmatic-shelf-93460.herokuapp.com/" target="_blank">https://enigmatic-shelf-93460.herokuapp.com/</a>
If you would like to see a live example of the code flow please visit this URL: <a href="https://enigmatic-shelf-93460.herokuapp.com/codeflow" target="_blank">https://enigmatic-shelf-93460.herokuapp.com/codeflow</a>

##  Run the example

In order to run the example you need to have NodeJS installed on your machine. Once you do, just run npm install from the command line to install the required modules. Then just run, npm start to start the local server.

### Note
For this example, I used two seperate LiveEngage accounts that way the app code show both examples.