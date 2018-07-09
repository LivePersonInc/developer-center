---
title: Surveys
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK

order: 3
permalink: javascript-chat-sdk-surveys.html

indicator: chat
---

All surveys follow the same structure and behavior patterns. To avoid duplication for the different survey types, here is a summary of the survey object.


**The Survey Object**

| Property | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| survey |	The top level container of the survey object.| object | |
| id	| The identifier for this survey. | number | |
| header |	A header for the survey to display before the questions. | string | |
| questions | A top level container for the question object. | object | |
| question |  | array/object | If a single question appears it will be an object. Otherwise it is an array of questions. |

**The Question Object**

| Property | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| id	| An identifier for the question. Will be later used when submitting answers. | number | |
| order	| The order of the question in the question list. | number | |
| mandatory	| If this question must be filled in for the survey to be valid. | Boolean | Due to the survey having logic some mandatory questions do not need to be answered. |
| validationType | The required validation for this field. | string | Options:  alpha_numeric, numeric, email. <br> alpha_numeric: Any input will accept empty spaces. <br> numeric: Any valid number. <br> email: A valid email. |
| logicId	| This represents the question's logical ID. | number | Surveys can have logic defined for displaying a question only when a specific multi-option answer was selected. |
| label | The question text. | string | |
| lastKnownValue |	The last value entered for this question by the specific user. | string | Only exists in questions of type Text Field and Text Area. |
| entry	| An array of possible answers for this question. | object | Explained in a separate table below. <br> Only exists in questions of type: Dropdown Box, Radio Button, Radio Button (side by side) and Checkbox. |
| type	| The expected DOM display and behavior for a question. | string | Types: <br> Text Field - an input field of type text <input type="text" /> <br> Text Area - a text area <textarea></textarea> <br> Dropdown Box - a select element <select><option>First Choice</option></select> <br> Radio Button - an input field of type radio. <input type="radio"  value="first option" /> <br> Radio Button (side by side) - same as Radio Button, the difference is the expected rendering for this should be side by side options. <br> Checkbox -  an input field of type checkbox. <input type="checkbox"  value="first option" /> <br> This is the only type that allows multiple answers for the same question. |

**The Entry Object**

| Property | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| value | The answer text. | string | |
| checked | Indicates if this answer is selected. | Boolean | |
| logic | Contains the showLogicId property which can be a single one or an array. | object | The showLogicId is a list of logicId that are a part of the question object.  When an entry is marked as checked true, the questions whose logicId's match the showLogicId field should be displayed. |

Logic Example:

```javascript
logic : {
    showLogicId : [2 ,3 ,4]
}
```



