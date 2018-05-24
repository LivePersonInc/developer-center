---
title: Overview
level1:
level2: Guides
level3: Cookies and LiveEngage
level-order: 5
order: 10
permalink: guides-cookies.html
root-link: true
indicator: both
---

A cookie is a small piece of data sent from a website and stored in the visitors' web browser. It helps the website to remember information about a visit; so when a visitor browses the same website in the future, the data stored in the cookie is sent back to the website by the browser.

LiveEngage uses information stored in cookies to maintain session data and to identify returning visitors by saving LiveEngage-specific data such as visitor ID and last chat date. It is important to note that the cookies do not contain any private customer data, or any data that can be accessible or useful outside of LiveEngage.

### Best Practices with Cookies and LiveEngage

In order to stay aligned with the latest regulations regarding cookies and tracking, these are the best practices that LivePerson recommends regarding cookies and LiveEngage:

1. Our tag should be deployed if the consumer does not explicitly decline their consent to cookies.

2. The brand's page should contain a visual element asking the consumer for their consent.

3. Depending on the consumer's response:

  * If the consumer says **YES**, the brand should remember their response and store it so that the LivePerson tag can deployed on all subsequent visits and pages.

  * If the consumer says **NO**, the brand should their response and store it , so the LivePerson tag is **not** deployed on consequent pages and visits. Additionally the brand may choose to refresh the current page so that the decision would apply and our tag would not get deployed on this page.

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

### CoBrowse cookies

|Name | Description | Storage|
|-------------|-------------|---------|
| s.browser| For transports based on HTTP (long-polling and callback-polling), CoBrowse sends a HTTP cookie with the handshake response, marked as HttpOnly, called s.browser. The cookie identifies the browser. See BAYEUX_BROWSER for details. Cookie is removed when the browser is closed.| Third party cookie. HttpOnly and Secure. Domain: CoBrowse Domain prefixed with siteId. Path: /sync.|

### Considerations

The following issues should be considered when working with LiveEngage Cookies.

**Note**: for any further clarification on any of the issues discussed below, please contact LivePerson Technical Support.

#### Secure Cookies

LiveEngage supports secure cookies, but requires the LiveEngage Tag to be deployed using HTTPS.

#### HttpOnly Attribute

LiveEngage is unable to support the HttpOnly attribute because it does not operate through JavaScript, which enables the LiveEngage Tag to collect cookies.

#### Third Party Cookies - Default

By default, LiveEngage uses third-party session and visitor cookies in order to save visitors’ tracking information. This is due to the fact that while visitors are browsing your site, the LiveEngage cookies are set by the LiveEngage domain and not by your website domain.
