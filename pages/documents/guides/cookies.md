---
title: Introduction
level1: Documents
level2: Guides

level-order: 5
order: 10
permalink: guides-cookies.html
root-link: true
indicator:
---

A cookie is a small piece of data sent from a website and stored in the visitors' web browser. It helps the website to remember information about a visit; so when a visitor browses the same website in the future, the data stored in the cookie is sent back to the website by the browser.

LiveEngage uses information stored in cookies to maintain session data and to identify returning visitors by saving LiveEngage-specific data such as visitor ID and last chat date. It is important to note that the cookies do not contain any private customer data, or any data that can be accessible or useful outside of LiveEngage.

### Cookie Solution Types

**SecureStorage**

Secure storage is a client-side storage mechanism, that Liveperson has implemented in order to provide the best possible consumer experience.
Secure storage uses a combination of modern browser technologies (indexedDB, localStorage, sessionStorage and first party cookies) to store necessary information on LivePerson domain - depending on browser capabilities.

By default, LiveEngage uses the third-party cookie solution type for visitors. However if this is not your preferred option, please contact LivePerson Customer Support.
The following tables list the cookie solution types offered by LivePerson.

### Monitoring Cookies

|    Cookie Type    |    Description  |    Storage  |
|-------------------------------------------|-----------------|-------------|
| LPVID  | Visitor ID as identified in LiveEngage. Identifies a browser as long as cookie is not deleted. | 1st party persistent. Fallback to sessionStorage per Tab. Path: parent domain /.| 
| LPSID-SiteID | Current active (or last) monitoring session. |    1st party session   cookie.    Fallback to   sessionStorage per Tab.   Path: parent domain /.|   
| LPSessionID  | Current active (or last) monitoring session. |    3rd party HTTP only   session cookie.   Path: LivePerson parent   domain /. |
| LPVisitorID  | Visitor ID as identified in LivePerson. Identifies a browser as long as cookie is not deleted.| 3rd party HTTP only persistent.Path: LivePerson parent   domain /.| 
| lpLastVisit-<SiteId> | Last visit timestamp | localStorage <br> Duration: forever|
|lpTabId| Tab identifier | sessionStorage <br>  Duration: session - same tab and domain only
|lpPmCalleeDfs| For cross domain communication logic | sessionStorage <br> Duration: session - same tab and domain only |

### Conversation Cookies

| Cookie Type | Description | Storage |
|-------------|-------------|---------|
| LPCID-SiteId  |Token for retrieving conversation data in the client only.| First party session cookie. No fallbacks. Path: parent domain /.|
| LPCKEY-SiteId |Token for retrieving conversation data in the client only.| First party session cookie. No fallbacks.Path: parent domain /.|
| LivePersonID  |LivePerson chat identifier. Note: We do not currently use this data. | Third party persistent cookie. Path: LivePerson parent domain / Note: We do not currently use this data.|
|Storage_expiration-SiteId| timestamp for last storage usage (used for secure storage logic)| SecureStorage <br> Duration 1 day |
|lpStrMap| manages storages keys (used for secure storage logic) | SecureStorage <br> Duration 1 day |
|<SiteId><LPSID>| Handles window UI states between tabs.| SecureStorage <br> Duration 1 day |
|<SiteId><LPSID>UIConf | Stores conversation settings (features, logic etc.) | SecureStorage <br> Duration 1 day |
|<SiteId><LPSID><SiteId>| stores chat services locations | SecureStorage <br> Duration 1 day |
|<SiteId>lpMessaging-<SiteId>| Stores the JWT token and authentication code in messaging scenarios for messaging window recovery on navigation and cross tabs | SecureStorage <br> Duration 1 day |
|<SiteId>-lpuw| session state | SecureStorage <br> Duration 1 day |

### Login Cookies

| Cookie Type | Description | Storage |
|-------------|-------------|---------|
|idpLastSiteId|Last site id for Remember me functionality|Third party secure cookie path / Liveperson domain|
|idpLastDomain|Last domain used for login for Remember me functionality| Third party secure cookie Path / Liveperson domain |