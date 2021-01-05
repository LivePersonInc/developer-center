---
pagename: Hooks
redirect_from:
  - le-tag-events-events.html
  - lp-tag-visitor-flow.html
  - le-tag-events-visitor-flow-events.html
  - lp-tag-engagement-window.html
  - le-tag-events-engagement-window-events.html
  - lp-tag-engagement.html
  - le-tag-events-engagement-events.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: Web Tag
subfoldername: Hooks
permalink: web-tag-hooks.html

indicator: both
---

## HOOKS

The `lpTag` handles the interfere of many events that occur on the vistor's webpage by executing a callback.

These tag hooks provide transparency into the lifecycle flows of engagements, embeddeded chat windows, and cobrowse sessions, among others. 

Below you can find a list of hooks available on a web page by the Web Tag, each organized under a given `eventName`.


### Definition

**Hook callback parameters**: The “hook” function will get always one object:

**Hook callback return  parameters**:  The “hook” function MUST return always one object - if the “hook” returns non-object parameter, the executor will ignore the returned parameter and will take the previous one. 

**Execute order**:  The hooks will be executed by the order they were “pushed”. 

If param1 was changed on hook1, hook2 will get param1 after the change.


### Valid hook
```javascript
function _hookCallback_(options){
  return options;
}
```

### Invalid hooks
```javascript
function hookCallback(option1, option2){
  return option1;
}

function hookCallback(options){
  return null;
}

function hookCallback(options){
  return "some string";
}
```
 

### Limitations
*   The customers need to make sure to integrate properly and to not cause bugs / edge cases
*   Hooks will not be executed on external window. In the future when taglet “scope” will be supported, hooks will be supported only if the hook is inside a site taglet.

### Register to hook:
```javascript
lpTag.hooks = lpTag.hooks || [];

lpTag.hooks.push({
  name: "BEFORE_SURVEY_SUBMIT",
  callback: function (options) {
    options.data.answers = "masking answer";
    return options;
  }
 });

lpTag.hooks.push({
  name: "BEFORE_SURVEY_SUBMIT",
  callback: function (options) {
    options.data.answers = "masking the masked answer";
    return options;
  }
});
```
## Places:

### SMT

#### NAME: BEFORE_SUBMIT_SDE

Use case: SDE submit.

Interference:  change / prevent sending SDE data before it's sent to server (push & send flows)

Place: TBD

Timing: Before

Parameters: TBD

## Rendering


#### NAME: BEFORE_ENG_DISPLAY

Use case: Change engagement state / click target / display / etc.

Interference:  Change engagement configuration before engagement display.

Place: rendererStub.js --> engagement.createInstance

Timing: Before

Parameters: TBD 


#### NAME: BEFORE_ENG_CHANNEL_OPEN

Use case: Open the content  (window / target) in different way.

Interference:  The flow after engagement click.

Place:
```
baseOffer.js --> click --> _openChannel
```

Timing: Before

Parameters: TBD 

### Unified Window


#### NAME: AFTER_GET_SURVEY

Use case:  Change  pre-chat / post-chat / offline survey data structure or fill in part of the answers

Interference:  Pre-chat / post-chat / offline survey data before rendering the view

Timing: After

Parameters:
```json
{
  "data": {
    "surveyType": surveyType,
    "surveyData": surveyData
  }
}
```

<table>
  <tr>
   <td><strong>Parameter name</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Role</strong>
   </td>
   <td><strong>Data structure</strong>
   </td>
  </tr>
  <tr>
   <td>surveyType
   </td>
   <td>string
   </td>
   <td>Which survey type is the one submitted
   </td>
   <td> “offlineSurvey” | “preChatSurvey” | “postChatSurvey” 
   </td>
  </tr>
  <tr>
   <td>surveyData
   </td>
   <td>Object
   </td>
   <td>Survey questions which would be render by the given data
   </td>
   <td><code>{  </code>
<p>
<code>   "header":"",</code>
<p>
<code>   "id":1058794,</code>
<p>
<code>   "questions":{  </code>
<p>
<code>      "question":[  </code>
<p>
<code>         {  </code>
<p>
<code>            "type":"Text Field",</code>
<p>
<code>            "validationType":"alpha_numeric",</code>
<p>
<code>            "id":5567213,</code>
<p>
<code>            "logicId":2,</code>
<p>
<code>            "order":0,</code>
<p>
<code>            "mandatory":true,</code>
<p>
<code>            "label":"From Name:",</code>
<p>
<code>            "lastKnownValue":""</code>
<p>
<code>         }</code>
<p>
<code>      ]</code>
<p>
<code>   }</code>
<p>
<code>}</code>
   </td>
  </tr>
</table>



#### NAME: BEFORE_SUBMIT_SURVEY

Use case:  Change answers

Interference:  Pre-chat / post-chat / offline survey answers before submit

Timing: Before

Parameters:
```json
{
   "data": {
     "surveyType": offlineSurvey/ preChatSurvey / postChatSurvey,
     "questionsInfo": questionInfo,
     "surveyData": surveyData
  }
}
```

<table>
  <tr>
   <td><strong>Parameter name</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Role</strong>
   </td>
   <td><strong>Data structure</strong>
   </td>
  </tr>
  <tr>
   <td>surveyType
   </td>
   <td>string
   </td>
   <td>Which survey type is the one submitted
   </td>
   <td> “offlineSurvey”/ “preChatSurvey” / “postChatSurvey” / 
   </td>
  </tr>
  <tr>
   <td>questionsInfo
   </td>
   <td>Array of objects - [{}]
   </td>
   <td>General info about the questions (Data is not meant to be changed)
   </td>
   <td>[{  
<p>
   "type":"Text Field",
<p>
   "validationType":"alpha_numeric",
<p>
   "id":5567213,
<p>
   "logicId":2,
<p>
   "order":0,
<p>
   "mandatory":true,
<p>
   "label":"From Name:",
<p>
   "lastKnownValue":"asf"
<p>
}]
   </td>
  </tr>
  <tr>
   <td>surveyData
   </td>
   <td>Object
   </td>
   <td>The actual submitted data - changing the surveyData actually affect the submitted data
   </td>
   <td><code>{  </code>
<p>
<code>   "survey":{  </code>
<p>
<code>      "id":1058794,</code>
<p>
<code>      "question":[  </code>
<p>
<code>         {  </code>
<p>
<code>            "id":5567213,</code>
<p>
<code>            "answer":"asf"</code>
<p>
<code>         },</code>
<p>
<code>         {  </code>
<p>
<code>            "id":5567214,</code>
<p>
<code>            "answer":"sadf@asf.con"</code>
<p>
<code>         },</code>
<p>
<code>         {  </code>
<p>
<code>            "id":5567217,</code>
<p>
<code>            "answer":"asdf"</code>
<p>
<code>         }</code>
<p>
<code>      ]</code>
<p>
<code>   }</code>
<p>
<code>}</code>
   </td>
  </tr>
</table>


#### NAME: BEFORE_SEND_VISITOR_LINE

Use case:  Change / prevent visitor lines on chat

Interference:  Visitor lines text

Place:
```
TrabscriptManager.js -> sendLine
```

Timing: Before

Parameters:
```json
{
  "data": {
    "line": line
  }
}
```

<table>
  <tr>
   <td><strong>Parameter name</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Role</strong>
   </td>
   <td><strong>Data structure</strong>
   </td>
  </tr>
  <tr>
   <td>line
   </td>
   <td>Object
   </td>
   <td>Text the visitor sending to agent
   </td>
   <td><code>{  </code>
<p>
<code>   "text":"Can you help me?"</code>
<p>
<code>}</code>
   </td>
  </tr>
</table>


#### NAME: AFTER_GET_LINES

Use case:  Change / prevent agent lines (e.g. change the look&feel of co-browse invitation)

Interference:  All lines presented on visitor side only

Timing: After

Parameters:
```json
{
  "data": {
    "lines": lines
  }
}
```

<table>
  <tr>
   <td><strong>Parameter name</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Role</strong>
   </td>
   <td><strong>Data structure</strong>
   </td>
  </tr>
  <tr>
   <td>lines
   </td>
   <td>Array of objects - [{}]
   </td>
   <td>Lines data before saved in model.
<p>
The rational value to change is only the “text”
   </td>
   <td><code>[  </code>
<p>
<code>   {  </code>
<p>
<code>      "@id":"4",</code>
<p>
<code>      "@type":"line",</code>
<p>
<code>      "time":"2017-03-02T11:51:02.545+02:00",</code>
<p>
<code>      "textType":"html",</code>
<p>
<code>      "text":"&lt;div dir=\"ltr\" style=\"direction: ltr; text-align: left;\">how are you?&lt;/div>",</code>
<p>
<code>      "by":"margalitb@liveperson.com",</code>
<p>
<code>      "source":"agent",</code>
<p>
<code>      "subType":"REGULAR",</code>
<p>
<code>      "type":"line",</code>
<p>
<code>      "localId":2</code>
<p>
<code>   }</code>
<p>
<code>]</code>
   </td>
  </tr>
</table>

