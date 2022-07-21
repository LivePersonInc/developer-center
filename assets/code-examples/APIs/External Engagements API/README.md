# LiveEngage-External-Engagements-API
This repository contains Python & Node examples for the LiveEngage External Engagements API.

## Python - External Engagements API Example
This is a basic example of how to connect to the External Engagements API in Python by using the requests_oauthlib. The purpose of this API is to allow for chat links to be created outside of the customers website for use within an IVR system. Links can be SMS'd to visitors using the brands SMS gateway. In order to run this example you will need to update the external-engagement-api.py file with your API credentials found on LiveEngage in Campaigns > Data Sources > API. You will need to also create and activate an Offsite Engagement for IVR set up to route to your brands LivePerson tagged homepage within your LiveEngage account.

### Contribution 
Thank you [Matt Coles](https://github.com/MattJColes) for providing this example code.

This example works with Python 3.5. 

## Node - External Engagements API Example
This is a basic example of how to connect to the External Engagements API in Node by using the requests module. This shows an example of a POST request. The purpose of this is to obtain agent availability information and perhaps may be useful in programatically interacting with chat buttons based on that availability. In order to run this example you will need to update the external-engagement-api.js file with your API credentials found on LiveEngage in Campaigns > Data Sources > API. You will need to also create and activate an Offsite Engagement for IVR set up to route to your brands LivePerson tagged homepage within your LiveEngage account.

### Contribution 
Thank you [Josh Espinosa](https://github.com/Hauuguu) for providing this example code.

This example works with Node v4.4.6