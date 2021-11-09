---
pagename: Advanced Use Cases
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-advanced-use-cases.html
indicator: both
---

The techniques discussed below provide solutions to common use cases and conversation challenges.

### Keep the consumer in the current dialog

In a bot, at branching points within a dialog, the consumer is asked to answer questions or make choices about how to proceed. Depending on the goal of the bot, you might need to ensure that the consumer's next utterance doesn't jump the consumer out into another dialog due to the NLU matching the utterance to another intent. Sometimes jumping to another dialog is desirable, but other times it isn't. For example, you might need the consumer to answer a specific question, so you need a way to keep the consumer in the current dialog until that's done.

You can help to keep the consumer in the current dialog by offering predefined options in a menu of buttons or predefined choices to a multiple-choice question. However, there's no guarantee that the consumer won't ignore these and type a response of their own. This means you need a way to handle any other response.

To solve this problem, you can create a rule with a [No Match condition](conversation-builder-interactions-configuration-next-action.html#conditions) that directs the flow as you need, either to repeat the same question or to redirect the flow to somewhere else within the bot.

**To implement this solution**

1. In the interaction, create a *final* (last) rule.
2. In the rule definition, name the rule. Then add a condition that uses the "No Match" match type. A condition that uses this match type catches all utterances that aren't caught by earlier rules. (In the condition, you can optionally specify a message to send to the consumer before the flow continues to the next action.)
3. Under **And Go To**, select the desired next action.

In our example below, the No Match condition directs the flow to the current interaction in order to repeat it. This interaction is a question that asks for the consumer's email address.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/keepUserInDialog1.png">

Our example dialog flow now looks like this:

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/keepUserInDialog3.png">

When the user enters anything but a well-formed email address, this yields a conversation that looks like the following, where the email address question is repeated:

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/keepUserInDialog2.png">

For more information on the "No Match" match type and other match types that can be used in conditions, see [here](conversation-builder-interactions-configuration-next-action.html#conditions).

### Base 64 encoding

The JavaScript editor within Conversation Builder doesn't natively support encoding to and decoding from Base 64. If you have a case where you need to do so, you can call a FaaS function and use the `crypto` package to encode a value and return it to your bot. Alternatively, using the following code in your Global Functions will give you access to this functionality without having to call outside of Conversation Builder.

Below, we've constructed two new functions -- `encode` and `decode` -- that work the same way as the Window object's `atob` and `btoa` functions:

```javascript
function encode(string) {
  // base64 character set, plus padding character (=)
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  // Regular expression to check formal correctness of base64 encoded strings
  var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  string = String(string);
  var bitmap, a, b, c,
      result = "", i = 0,
      rest = string.length % 3; // To determine the final padding
  for (; i < string.length;) {
      if ((a = string.charCodeAt(i++)) > 255 || (b = string.charCodeAt(i++)) > 255 || (c = string.charCodeAt(i++)) > 255)
          throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
      bitmap = (a << 16) | (b << 8) | c;
      result += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63) + b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
  }
  // If there's need of padding, replace the last 'A's with equal signs
  return rest ? result.slice(0, rest - 3) + "===".substring(rest) : result;
};
function decode(string) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  // Regular expression to check formal correctness of base64 encoded strings
  var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  // atob can work with strings with whitespaces, even inside the encoded part,
  // but only \t, \n, \f, \r and ' ', which can be stripped.
  string = String(string).replace(/[\t\n\f\r ]+/g, "");
  if (!b64re.test(string))
      throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  // Adding the padding if missing, for semplicity
  string += "==".slice(2 - (string.length & 3));
  var bitmap, result = "", r1, r2, i = 0;
  for (; i < string.length;) {
      bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12
              | (r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255)
              : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255)
              : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
  }
  return result;
};
```

Once created, you can call both functions as needed from the Pre-Process and Post-Process code editors.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/base64a.png">

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/base64b.png">

Both functions were adapted from a polyfill located [here](https://github.com/MaxArt2501/base64-js/blob/master/base64.js).