---
pagename: NLU Engines Troubleshooting
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversational AI
subfoldername: Natural Language Understanding
permalink: conversational-ai-natural-language-troubleshooting-nlu-engines.html
indicator: both
---

# Troubleshooting 3rd party NLU Providers

Occasionally you may run into problems using NLU integrations from other providers. Following is some tips to help with these issues.

## IBM Watson

## How to resolve max workspace limit issue?

We see this error only for Watson NLU, when the max workspace limit is reached on the account. To resolve this you will need to login your IBM Cloud account and remove enough unused skills to get below the five workspace limit.

Steps: 

1. Login to cloud.ibm.com:
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_login_ibmcloud.png">

2. Expand the Navigation Menu and click on Resource List in the left panel:
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_resource_list.png">

3. Click on Watson Integration:
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_resource_list.png">

4. Click on Launch Watson Assistant, it opens up a new window.
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_resource_list.png">

5. Click on Skills tab and delete the unused skill.
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_resource_list.png">

6. Delete skill:
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_resource_list.png">

Select the skill. Click on the Delete link in the Context menu. This opens a popup. Enter the text as DELETE and click on Save. This successfully deletes the Skill.
