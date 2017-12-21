---
title: Structured Content Rendering Tool
Keywords:
level1: Documents
level2: Guides
level3: Structured Content
order: 11
permalink: structured-content-pollock.html
indicator: both
---

The **Json-Pollock** package renders live DOM elements out of JSON according to the [Structured Messaging Templates specification](https://developers.liveperson.com/structured-content-templates.html). You can find the GitHub repository for this project [here](https://github.com/LivePersonInc/json-pollock).

**A sandbox environment which you can use to check out the tool in context can be found [here](https://livepersoninc.github.io/json-pollock/editor/).**

### Installation

```
npm i json-pollock --save
```

In the `dist` folder you'll find a the following files:

`json-pollock.bundle.min.js`  - this script bundle contains both package and styles. Once you import it into your code it will inject the needed styles into your page header - no additional actions are needed from your side. It also supports umd - meaning you can consume it using AMD, CommonJS and as simple script (see examples below)

`json-pollock.min.js` - use this script if you want to handle the import of the styles by yourself. If you use this option. you should also take care to link `json-pollock.min.css` to your web page. Also supports umd.

`json-pollock.global.min.js` - this script is the same as `json-pollock.min.js`, however it does not support umd - it only puts JsonPollock on the current `this` (usually the `window` object). Use this in case you inject the package into sites that are not managed by you and you don't know if it uses AMD or not.

### Examples

A `script` tag:

```html
<!-- for bundle this import if enough -->
<script src="path-to-node-modules/dist/json-pollock.bundle.min.js"></script>

<!-- for others you should also link the styles -->
<script src="path-to-node-modules/dist/json-pollock.[global.]min.js"></script>
<link rel="stylesheet" href="path-to-node-modules/dist/json-pollock.min.css">
```

Following examples are relevant only for `json-pollock.bundle.min.js` and `json-pollock.min.js`:

Using [RequireJS](http://requirejs.org/):

Map the JsonPollock path in the RequireJs config, and then:

```js
require(["JsonPollock"],(jsonPollock) => {
    ...
})
```

Using [CommonJS](http://requirejs.org/docs/commonjs.html):.

```js
const JsonPollock = require("JsonPollock");
```

### Usage

**init**

You can call the `init` function if you want to configure JsonPollock - it is not mandatory; if you don't call it, JsonPollock will be initialized with defaults.

```js
JsonPollock.init({
	maxAllowedElements: 50    // max DOM elements that will be rendered, other elements will be ignored, default is 50.
});
```

**render**

The *render* function renders json into a DOM element.

```js
const content = {
	"type": "vertical",
	"elements": [{
        	"type": "image",
        	"url": "http://assets/phone.jpg",
        	"tooltip": "Great Phone!",
        	"click": {
          		"actions": [{
            			"type": "navigate",
            			"name": "Navigate to store via image",
            			"lo": 23423423,
            			"la": 2423423423
          		}]
        	}
      	}]
}
const rooEl = JsonPollock.render(content);
document.getElementById('container').appendChild(rooEl);
```

**registerAction**

The *registerAction* function allows to register a callback to a certain action type, as defined in the [spec](https://developers.liveperson.com/structured-content-templates.html).

```js
const linkCallback = (data) => {
	//data => {actionData: <action configuration>, metadata: <metadata configuration, if given>}
    	window.open(data.actionData.uri,"_blank")
};
JsonPollock.registerAction('link', linkCallback);
```

**unregisterAction**

The *unregisterAction* function allow to unregister a callback to a certain action type, as defined in the [spec](https://developers.liveperson.com/structured-content-templates.html).

```js
JsonPollock.unregisterAction('link');
```

**unregisterAllActions**

The *unregisterAllActions* function allow to unregister all callbacks to all action types.

```js
JsonPollock.unregisterAllActions();
```

### Error Handling

*JsonPollock.render()* will throw an Error if it fails for any reason. The error object will have a *message* property that will supply the error description.

Prior to the rendering, the JSON object is validated against the JSON schema. If it fails to validate the error object will also include an *errors* property that will hold the validation errors.

```js
...
try {
    const rooEl = JsonPollock.render(json);
    ...
} catch(e) {
	console.log(e.message);    // error message
	console.log(e.errors);     // validation errors
}
```
