---
pagename: What Is a Conversational Cloud Application?
redirect_from:
  - guides-le-applications-what-is.html
  - liveengage-applications-what-is-a-liveengage-application.html
Keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Conversational Cloud Applications
permalink: conversational-cloud-applications-what-is-a-conversational-cloud-application.html
root-link: true
indicator: both
---

Conversational Cloud Applications are a code layer developed on top of LiveEngage APIs which include an `App_Install_Id` parameter. This parameter is received when registering a dedicated configuration manifest that defines its scope and components.

There are two different types of Conversational Cloud Applications:

### Global Conversational Cloud Applications

This type of Application needs to be be published to the Marketplace by a LivePerson Developer and will be available for all LP customers to install (use/onboard) and manage within LE. Global applications are restricted to LivePerson only and can't be developed by 3rd party developers (for now).

### Private Conversational Cloud Applications

A customer will be able to develop and use their own private Conversational Cloud Applications. These Apps won’t be published in the Marketplace.

This type of Conversational Cloud Application will be installed manually by uploading a JSON Manifest based on the [Conversational Cloud Application Installation schema](guides-le-applications-installing.html). This schema will be uploaded under the specific account.

### Quicklaunch menu

Applications can be added to the QuickLaunch menu in the LiveEngage UI. For applications to be available in the QuickLaunch menu, some criteria have to be met.

In case of a Private Conversational Cloud Application the JSON Manifest should contain the following properties:
* `"quick_launch_enabled" : true`,
* non-empty `entry_uri`,
* the user profile should match one of the profiles listed in `enabled_for_profiles`.
