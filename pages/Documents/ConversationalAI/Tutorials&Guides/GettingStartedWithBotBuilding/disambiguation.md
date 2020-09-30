---
pagename: Disambiguation
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Getting Started with Bot Building
permalink: tutorials-guides-getting-started-with-bot-building-disambiguation.html
indicator: both
---

When working with natural language from our users, it is sometimes necessary to dive further into their statement to understand what their true intent is. In addition, humans have a tendency to communicate in ways which might include multiple intents in the same statement. In both of these cases, we can use disambiguation to clarify our user intents and ensure that their needs are being addressed appropriately.

### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/455215972" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Step 11: Demonstration of need
This step serves to demonstrate a use case for when we might need to employ disambiguation. 

1. From the Conversational AI section of the Conversational Cloud, navigate to **Intent Builder** and select the ‘Getting Started’ domain.

    The Getting Started domain should contain both an Order Status and a Billing Question intent.

2. Use the debugger to test out some utterances. In the **Test User Input** panel on the right, enter the text “I want to know about my bill and recent order”. Make sure that the **Search in domain** toggle is switched to on and click on **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/disambiguation_need.png">

3. Note that this input results in a FAIR PLUS score for both of our intents. In this case, our user would be directed to our Fallback dialog despite the fact that there is some confidence that their utterance matches multiple intents. This example clearly demonstrates the need to drill deeper with our user and provide a pathway to find resolution.
