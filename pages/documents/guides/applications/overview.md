---
title: What Is a LiveEngage Application?
Keywords:
level1:
level2: Guides
level3: LiveEngage Applications
level-order: 12
order: 10
permalink: guides-le-applications-what-is.html
root-link: true
indicator:
---

LiveEngage Applications are a code layer developed on top of LiveEngage APIs which have an `App_Install_Id` parameter by registering a dedicated configuration (manifest) that defines its scope and components.

There are two different types of LiveEngage Applications:

### Global LiveEngage Application

These type of Applications can be published in a Marketplace by a Developer and will be available for all LP customers to install (use/onboard) and manage within LE.

It is also possible to build a Global application but define that it will not be visible in the App Management Screen. This means that it won't be visible in a Marketplace-type environment but it will be possible to use it on all accounts.

**Note: Creation of Global LiveEngage Applications depends on a partnership program and a certification process. For more details, please approach Dev Support**

### Private LiveEngage Application

A customer will be able to develop and use his own private LiveEngage Applications. These Apps won’t be published in any Marketplace-type environments. In addition, the application can be used only on a specific list of accounts defined in its Manifest.

This type of LiveEngage Applications will be installed manually by uploading a Manifest JSON based on the [LiveEngage Application Installation schema](guides-le-applications-installing.html).
