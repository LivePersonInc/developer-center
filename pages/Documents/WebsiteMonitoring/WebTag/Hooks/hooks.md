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
   <td>
     See below for data structure
   </td>
  </tr>
</table>

```json
{  
   "header":"",
   "id":1058794,
   "questions":{  
      "question":[  
         {  
            "type":"Text Field",
            "validationType":"alpha_numeric",
            "id":5567213,
            "logicId":2,
            "order":0,
            "mandatory":true,
            "label":"From Name:",
            "lastKnownValue":""
         }
      ]
   }
}
```



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
   <td>
     See data structure below
   </td>
  </tr>
  <tr>
   <td>surveyData
   </td>
   <td>Object
   </td>
   <td>The actual submitted data - changing the surveyData actually affect the submitted data
   </td>
   <td>
     See data structure below
   </td>
  </tr>
</table>

#### Array of Object - Data structure

```json
[{  
   "type":"Text Field",
   "validationType":"alpha_numeric",
   "id":5567213,
   "logicId":2,
   "order":0,
   "mandatory":true,
   "label":"From Name:",
   "lastKnownValue":"asf"
}]
```

#### surveyData - Data structure

```json
{  
   "survey":{  
      "id":1058794,
      "question":[  
         {  
            "id":5567213,
            "answer":"asf"
         },
         { 
            "id":5567214,
            "answer":"sadf@asf.con"
         },
         {  
            "id":5567217,
            "answer":"asdf"
         }
      ]
   }
}
```

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
   <td>
     See data structure below
   </td>
  </tr>
</table>

```json
{  
   "text":"Can you help me?"
}
```

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
The rational value to change is only the “text”
   </td>
   <td>
     See data structure below
   </td>
  </tr>
</table>

```json
[  
   {  
      "@id":"4",
      "@type":"line",
      "time":"2017-03-02T11:51:02.545+02:00",
      "textType":"html",
      "text":"&lt;div dir=\"ltr\" style=\"direction: ltr; text-align: left;\">how are you?&lt;/div>",
      "by":"margalitb@liveperson.com",
      "source":"agent",
      "subType":"REGULAR",
      "type":"line",
      "localId":2
   }
]
```
