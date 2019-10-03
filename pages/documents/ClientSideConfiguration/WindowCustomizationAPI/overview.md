---
pagename: Overview
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Window Customization API
permalink: window-customization-api-overview.html
indicator: both
---

### Introduction

The Engagement Window Customization API provides you with the ability to easily customize the look and feel of the web engagement window. Today, you can perform simple customization to the window by using the engagement window studio or by applying your own CSS in a non-standardized way (through custom classes added via JavaScript for example). However, customizing the window via non-standard CSS risks being affected by changes made to the engagement window by LivePerson in the future.

By exposing this API, we created a customization standard that is backward compatible using CSS. A list of "reserved" CSS classes was created, following a common naming convention and structure, which will remain untouched by LivePerson. This guarantees that any customization remains in place and doesn't get overriden by future development efforts by LivePerson.

The API added classes to most of the window UI elements and supports both chat and and web messaging. 

### Use Cases

* Customize the engagement window for the web in a standardized way.
* Create a full page experience for your engagement windows.

### CSS Playground

{:.notice}
The CSS playground allows those using the API to try it out with any account and any environment.
It provides several templates to get inspiration and ideas for your own customizations.
Test the API live [here](/assets/css-playground/).



