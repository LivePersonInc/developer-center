---
pagename: Introduction
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: Facebook Messenger Templates
permalink: structured-content-facebook-messenger-templates-introduction.html
indicator: messaging
---

### Introduction

The LiveEngage Facebook Messenger connector now supports sending structured content elements via a set of templates that are rendered by Facebook. When agents or bots on LiveEngage share structured content templates, consumers will view the rendered templates via the Facebook Messenger mobile or desktop app. 

See the [Introduction to Structured Content](structured-content-introduction-to-structured-content.html) for more information.

The structured content templates explained and outlined in this document include [generic, button, list, and carousel](https://developers.facebook.com/docs/messenger-platform/send-messages/templates).

### Account Setup

If your account is not currently using the Facebook connector, please refer to the [onboarding guide](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=facebook-connector) to start managing your Facebook pages' conversations with LiveEngage.

### Facebook Messenger Setup

Some changes need to be made for certain Button actions:

* **Navigation button action** - render a link to a Google Map for the consumer (with exact location rendered by structured content coordinates):
  * To allow Google Map rendering on the consumer device, this URL must be added to the Facebook page whitelisted domains: `https://www.google.com/` 
  * To whitelist URLs go to your page→ Settings→ Messenger Platform→ Whitelisted Domains. 
* **Link button action** - direct a consumer to an outside link:
  * The URL added in the button must be whitelisted on the Facebook Page configuration in order to allow the consumer to view it in the messenger view. 
    * To whitelist URLs go to your Facebook page→ Settings→ Messenger Platform→ Whitelisted Domains. 
  * The height ratio for webview display of the Facebook URL buttons will always be set as ["full"](https://developers.facebook.com/docs/messenger-platform/send-messages/buttons) and cannot be changed
  * Facebook Messenger desktop clients use an iframe to display the web links. Your brands website will need to support iframes in order for the consumer to be able to view it from FB desktop. 
