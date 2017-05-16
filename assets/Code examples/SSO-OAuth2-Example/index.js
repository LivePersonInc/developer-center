var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// jsonwebtoken is required for you to generate and sign the OpenID Connect Token
// You can read more about this module here: https://github.com/auth0/node-jsonwebtoken
var jwt = require('jsonwebtoken');
/*	
	You will need to generate your own public and private RSA keys using OpenSSL. These keys can then be placed in the files below.
	Page 19 of this pdf: https://ce-sr.s3.amazonaws.com/Auth%20Chat/Authenticated%20Interactions%20with%20oAuth%202.0v.pdf shows
	how you can generate these keys.
	Once you generate a new public key, make sure you update JWT Public Key Field in LiveEngage.
    */
    var fs = require('fs');
    var cert_pub = fs.readFileSync(__dirname + '/rsa-public-key.pem');
    var cert_priv = fs.readFileSync(__dirname + '/rsa-private.pem');

    app.set('port', (process.env.PORT || 5000));

    app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// render the index page
app.get('/', function(request, response) {
  response.render('pages/index');
});

// render the code flow page
app.get('/codeflow', function(request, response) {
  response.render('pages/codeflow');
});

// render the customer page
app.get('/customer', function(request, response) {
  response.render('pages/customer');
});

// used to generate the OpenID Connect Token for the implicit flow
app.post('/getToken', function(request, response) {
	// generate our token with the appropiate information and sign it with our private RSA key.
	var token = jwt.sign({ 
        "iss": "https://enigmatic-shelf-93460.herokuapp.com/",
        "sub": "4255551212", //becomes customer id in Customer Info SDE
        "preferred_username" : "JohnDoe", //becomes username in Customer Info SDE
        "phone_number" : "+1-10-344-3765333", //becomes imei in Customer Info SDE
        "given_name" : "Test", //becomes first part of name in Personal Info SDE
        "family_name" : "Test2", //becomnes second part of name in Personal Info SDE
        "email" : "email@email.com", //becomes Email adress in Peresonal Info SDE
        "gender" : "Male", //becomes gender in Personal Info SDE 
        "lp_sdes":[
            {
             "type":"ctmrinfo",
             "info":{
                 "cstatus":"cancelled",
                 "ctype":"vip",
                 "customerId":"138766AC",
                 "balance":-400.99,
                 "socialId":"11256324780",
                 "imei":"3543546543545688",
                 "userName":"user000",
                 "companySize":500,
                 "accountName":"bank corp",
                 "role":"broker",
                 "lastPaymentDate":{
                     "day":15,
                     "month":10,
                     "year":2014
                 },
                 "registrationDate":{
                     "day":23,
                     "month":5,
                     "year":2013
                 }
             }
         },
          {
            "type": "personal",
                "personal": {
                "firstname": "John",
                "lastname": "Doe",
                "age": {
                   "age": 34,
                   "year": 1980,
                   "month": 4,
                   "day": 15
               },
                "contacts": [{
                   "email": "myname@example.com",
                   "phone": "+1 212-788-8877"
               }],
                "gender": "MALE",
                "company": "company"
            }
        }
    ]
    }, cert_priv, { algorithm: 'RS256', expiresIn: '1h'});
        //console.log(token);
        // verify that the token was generated correctly
        jwt.verify(token, cert_pub, function(err, decoded) {
        	// if the token didn't generate then respond with the error
        	if(err){
        		console.log(err);
        		response.json({
                    "error": err,
                    "Fail": "404"
                });
        	}
        	// if successful then response with the token
        	else {
        		//console.log(decoded);
        		response.json({
                    "decoded": decoded,
                    "token": token
                });
        	}
        });
});

// used to generate the OpenID Connect Token for the code flow
app.post('/token', function(request, response) {
    // First we need to validate that the client id and the client secret are valid. If they are, then we will validate
    // the authorization code, if they are not, then we will respond with an error.
    var auth = request.get("Authorization");  // auth is in base64(username:password)  so we need to decode the base64
    var tmp = auth.split(' '); 
    var buf = new Buffer(tmp[1], 'base64'); 
    var plain_auth = buf.toString();      
    var creds = plain_auth.split(':');
    var username = creds[0];
    var password = creds[1];
    // validate that the client id and the client secret are correct
    if((username == 'clientid') && (password == 'clientsecret')) { 
        console.log(request.body.code);
        // validate the authorization code, and if it is successful send the OpenID Connect Token, otherwise send an error.
        if(request.body.code == "secretcode"){
            // generate our token with the appropiate information and sign it with our private RSA key.
            var token = jwt.sign({ 
                "iss": "https://enigmatic-shelf-93460.herokuapp.com/",
                "sub": "4255551212", //becomes customer id in Customer Info SDE
                "preferred_username" : "JohnDoe", //becomes username in Customer Info SDE
                "phone_number" : "+1-10-344-3765333", //becomes imei in Customer Info SDE
                "given_name" : "Test", //becomes first part of name in Personal Info SDE
                "family_name" : "Test2", //becomnes second part of name in Personal Info SDE
                "email" : "email@email.com", //becomes Email adress in Peresonal Info SDE
                "gender" : "Male", //becomes gender in Personal Info SDE 
                "lp_sdes":[
                    {
                     "type":"ctmrinfo",
                     "info":{
                         "cstatus":"cancelled",
                         "ctype":"vip",
                         "customerId":"138766AC",
                         "balance":-400.99,
                         "socialId":"11256324780",
                         "imei":"3543546543545688",
                         "userName":"user000",
                         "companySize":500,
                         "accountName":"bank corp",
                         "role":"broker",
                         "lastPaymentDate":{
                             "day":15,
                             "month":10,
                             "year":2014
                         },
                         "registrationDate":{
                             "day":23,
                             "month":5,
                             "year":2013
                         }
                     }
                 },
                  {
                    "type": "personal",
                        "personal": {
                        "firstname": "John",
                        "lastname": "Doe",
                        "age": {
                           "age": 34,
                           "year": 1980,
                           "month": 4,
                           "day": 15
                       },
                        "contacts": [{
                           "email": "myname@example.com",
                           "phone": "+1 212-788-8877"
                       }],
                        "gender": "MALE",
                        "company": "company"
                    }
                }
            ]
            }, cert_priv, { algorithm: 'RS256', expiresIn: '1h'});
            // verify that the token was generated correctly
            jwt.verify(token, cert_pub, function(err, decoded) {
                // if the token didn't generate then respond with the error
                if(err){
                    response.json({
                        "error": err,
                        "Fail": "404"
                    });
                }
                // if successful then response with the token
                else {
                    response.json({
                        "access_token": "NotApplicable",
                         "token_type": "Bearer",
                         "id_token": token
                    });
                }
            });
        }
        else {
            response.json({
                "error": "Couldn't validate authorization code."
            });
        }
    }
    else {
        response.json({
            "error": "Couldn't validate the client id and secret"
        });
    }
});

// used for the pop out chat window
app.get('/authorize', function(request, response) {
    // add code to validate that the client id is correct 
    /* 
        Add code to verify that your user is logged in here...
        If the user is logged in and verified then create the authorization code and supply it in the redirect
    */
    // Create the authorization code and supply it to the redirect
    var authorization_code = "secretcode";
    // for the redirect, you need to use the redirect_uri from the request and append the authorization code to the url
    response.redirect(request.query.redirect_uri+"&code="+authorization_code);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});