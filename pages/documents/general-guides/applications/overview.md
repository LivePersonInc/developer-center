---
title: What Is a LiveEngage Application?
Keywords:
level1: Documents
level2: Guides
level3: LiveEngage Applications
level-order: 13
order: 10
permalink: liveengage-applications-what-is-a-liveengage-application.html
root-link: true
indicator: both
---

LiveEngage Applications are a code layer developed on top of LiveEngage APIs which include an `App_Install_Id` parameter. This parameter is received when registering a dedicated configuration manifest that defines its scope and components.

There are two different types of LiveEngage Applications:

### Global LiveEngage Applications

This type of Applications can be published in a Marketplace by a Developer and will be available for all LP customers to install (use/onboard) and manage within LE.

It is also possible to build a Global application but define that it will not be visible in the App Management Screen. This means that it won't be visible in a Marketplace-type environment but it will be possible to use it on all accounts.

**Note: Creation of Global LiveEngage Applications depends on a partnership program and a certification process. For more details, please contact [DevSupport](mailto:devsupport-lp@liveperson.com).**

### Private LiveEngage Applications

A customer will be able to develop and use their own private LiveEngage Applications. These Apps won’t be published in any Marketplace-type environments. In addition, the application can be used only on a specific list of accounts defined in its Manifest.

This type of LiveEngage Applications will be installed manually by uploading a Manifest JSON based on the [LiveEngage Application Installation schema](guides-le-applications-installing.html).
