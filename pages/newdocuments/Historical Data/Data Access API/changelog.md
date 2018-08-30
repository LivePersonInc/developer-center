---
pagename: Changelog
redirect_from:
  - data-data-access-changelog.html
sitesection: Documents
categoryname: Data
documentname: Data Access API

order: 62
permalink: data-access-api-changelog.html
indicator: both

---

This document describes changes made to the Data Access API. Entries will appear under a relevant date and will detail changes made to either the documentation or the API itself. All changes should be backwards compatible but where they are not or extra work is needed to make sure that backwards compatibility is maintained, the Changelog will mention this.

All future dates found in this documentation reflect approximations for upcoming additions or corrections and are subject to change.

### October 30th, 2017

**Bug fixes**:

1. Missing sporadic engagements and surveys

2. Data Access job failed with arrayIndex error

**Improvements**:

1. Improve decryption algorithm

2. Scan for files according to the request's parameters (reduce probability of timeout).

3. In  Web Session, add to impression section controlGroup field ( a new field that will be added to the schema - version 1.0.0.35)


### June 18th, 2017

**Bug Fixes**

Fixed a bug where some of the conversation records created by the Data Access job had missing conversation IDs.

**Data Access Schema (version 1.0.0.34)**  

The `isInteractive` boolean field was added to the transfer section. This field indicates whether the transfer part of the conversation is interactive or not. _To clarify_, the `isInteractive` field in the main conversation section relates to the last part of the conversation.
