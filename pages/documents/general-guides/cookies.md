---
title: Overview
redirect_from:
  - guides-cookies.html
sitesection: Documents
level2: Guides
level3: Cookies and LiveEngage
level-order: 12
order: 10
permalink: cookies-and-liveengage-overview.html
root-link: true
indicator: both
---

A cookie is a small piece of data sent from a website and stored in the visitors' web browser. It helps the website to remember information about a visit; so when a visitor browses the same website in the future, the data stored in the cookie is sent back to the website by the browser.

LiveEngage uses information stored in cookies to maintain session data and to identify returning visitors by saving LiveEngage-specific data, such as visitor ID and last chat date. It is important to note that the cookies** ****do not contain any private customer data** or any data that can be accessible or useful outside of LiveEngage.

### Cookie Consent

Brands that elect to use our products and services are responsible for obtaining (and maintaining) consumer consent before using LiveEngage cookies and other tracking technologies on their websites.  While we include suggested best practices below, we also recommend that you seek legal advice about what would be best for your particular websites or applications in light of your offering, the reason you’re using cookies and the laws that apply to you.

### Best Practices with Cookies and LiveEngage

In order to stay aligned with the latest regulations, LivePerson recommends that brands adopt the following best practices regarding cookies, tracking and LiveEngage:

1. You should add a cookie consent functionality to your website.  It should contain a prominent banner or similar visual element when the page first loads to concisely inform the consumer about the use of cookies and what action the consumer should take to consent.

  * If the consumer consents, you should remember their response so you can deploy the LiveEngage tag on all subsequent visits and pages.

  * If the consumer declines, you should remember their response, so the LiveEngage tag is **not** deployed on subsequent pages and visits. Additionally you may choose to refresh the current page to apply the consumer’s choice so that the LiveEngage tag would not get deployed on that specific page.

2. You should include information about your use of third party cookies, such as LiveEngage cookies, and the purpose for their use, in your privacy policy or cookie notice.

3. You should inform consumers about various options they can use to disable cookies.

### Cookie Types

**SecureStorage**

Secure storage is a client-side storage mechanism, that LivePerson has implemented in order to provide the best possible consumer experience. Secure storage uses a combination of modern browser technologies (indexedDB, localStorage, sessionStorage and first party cookies) to store necessary information on LivePerson domains - depending on browser capabilities.

By default, LiveEngage uses the third-party cookie solution type for website visitors. If you have any questions about this approach, please contact LivePerson Customer Support. The following tables list the cookie solution types offered by LivePerson.

### Monitoring Cookies

<table>
  <thead>
  <tr>
    <th>Cookie Type</th>
    <th>Description</th>
    <th>Storage</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>LPVID</td>
    <td>Visitor ID as identified in LiveEngage. Identifies a browser as long as cookie is not deleted.</td>
    <td>1st party persistent. Fallback to sessionStorage per Tab.
Path: parent domain /.</td>
  </tr>
  <tr>
    <td>LPSID-SiteID</td>
    <td>Current active (or last) monitoring session.</td>
    <td>1st party session cookie. Fallback to sessionStorage per Tab.
Path: parent domain /.</td>
  </tr>
  <tr>
    <td>LPSessionID</td>
    <td>Current active (or last) monitoring session.</td>
    <td>3rd party HTTPonly session cookie.
Path: LivePerson parent domain /.</td>
  </tr>
  <tr>
    <td>LPVisitorID</td>
    <td>Visitor ID as identified in LivePerson. Identifies a browser as long as cookie is not deleted.</td>
    <td>3rd party HTTP only persistent.
Path: LivePerson parent domain /.</td>
  </tr>
  <tr>
    <td>lpLastVisit-</td>
    <td>Last visit timestamp</td>
    <td>localStorage
Duration: forever</td>
  </tr>
  <tr>
    <td>lpTabId</td>
    <td>Tab identifier</td>
    <td>sessionStorage
Duration: session - same tab and domain only</td>
  </tr>
  <tr>
    <td>lpPmCalleeDfs</td>
    <td>For cross domain communication logic</td>
    <td>sessionStorage
Duration: session - same tab and domain only</td>
  </tr>
</tbody>
</table>


### Conversation Cookies

<table>
  <thead>
  <tr>
    <th>Cookie Type</th>
    <th>Description</th>
    <th>Storage</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>LPCID-SiteId</td>
    <td>Token for retrieving conversation data in the client only.</td>
    <td>First party session cookie. No fallbacks. Path: parent domain /.</td>
  </tr>
  <tr>
    <td>LPCKEY-SiteId</td>
    <td>Token for retrieving conversation data in the client only.</td>
    <td>First party session cookie. No fallbacks.Path: parent domain /.</td>
  </tr>
  <tr>
    <td>LivePersonID</td>
    <td>LivePerson chat identifier.
Note: We do not currently use this data although we do store it.</td>
    <td>Third party persistent cookie. Path: LivePerson parent domain / Note: We do not currently use this data  although we do store it.</td>
  </tr>
  <tr>
    <td>Storage_expiration-SiteId</td>
    <td>timestamp for last storage usage (used for secure storage logic)</td>
    <td>SecureStorage
Duration 1 day</td>
  </tr>
  <tr>
    <td>lpStrMap</td>
    <td>manages storages keys (used for secure storage logic)</td>
    <td>SecureStorage
Duration 1 day</td>
  </tr>
  <tr>
    <td></td>
    <td>Handles window UI states between tabs.</td>
    <td>SecureStorage
Duration 1 day</td>
  </tr>
  <tr>
    <td>UIConf</td>
    <td>Stores conversation settings (features, logic etc.)</td>
    <td>SecureStorage
Duration 1 day</td>
  </tr>
  <tr>
    <td></td>
    <td>stores chat services locations</td>
    <td>SecureStorage
Duration 1 day</td>
  </tr>
  <tr>
    <td>lpMessaging-</td>
    <td>Stores the JWT token and authentication code in messaging scenarios for messaging window recovery on navigation and cross tabs</td>
    <td>SecureStorage
Duration 1 day</td>
  </tr>
  <tr>
    <td>-lpuw</td>
    <td>session state</td>
    <td>SecureStorage
Duration 1 day</td>
  </tr>
</tbody>
</table>


### Login Cookies

<table>
  <thead>
  <tr>
    <th>Cookie Type</th>
    <th>Description</th>
    <th>Storage</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>idpLastSiteId</td>
    <td>Last site id for Remember me functionality</td>
    <td>Third party secure session cookie path / LivePerson domain. Stored as long as the session is active.</td>
  </tr>
  <tr>
    <td>idpLastDomain</td>
    <td>Last domain used for login for Remember me functionality</td>
    <td>Third party secure session cookie Path / LivePerson domain

</td>
  </tr>
  <tr>
    <td>session_id</td>
    <td>LiveEngage agent session identification</td>
    <td>Third party, httpOnly secure session cookie Path / LivePerson domain</td>
  </tr>
  <tr>
    <td>WSHumanClickServer</td>
    <td>Logical name of appserver handling the site</td>
    <td>Third party, secure session cookie Path /hc/web LivePerson domain</td>
  </tr>
  <tr>
    <td>WSHumanClickWebSession</td>
    <td>Appserver web session identifier</td>
    <td>Third party, httpOnly secure session cookie Path /hc/s-{siteid}/web LivePerson domain</td>
  </tr>
  <tr>
    <td>WSHumanClickSiteNumber</td>
    <td>Site identifier</td>
    <td>Third party, secure session cookie Path /hc/s-{siteid}/web LivePerson domain</td>
  </tr>
  <tr>
    <td>agentSessionKey</td>
    <td>Agent session identifier in the appserver</td>
    <td>Third party, secure session cookie Path /api/account/{accountid}/agentSession LivePerson domain</td>
  </tr>
</tbody>
</table>


### CoBrowse cookies

<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Storage</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>s.browser</td>
    <td>For transports based on HTTP (long-polling and callback-polling), CoBrowse sends a HTTP cookie with the handshake response, marked as HttpOnly, called s.browser. The cookie identifies the browser. See BAYEUX_BROWSER for details. Cookie is removed when the browser is closed.</td>
    <td>Third party cookie. HttpOnly and Secure. Domain: CoBrowse Domain prefixed with siteId. Path: /sync.</td>
  </tr>
</tbody>
</table>


### Considerations

The following issues should be considered when working with LiveEngage Cookies.

#### Secure Cookies

LiveEngage supports secure cookies, but requires the LiveEngage Tag to be deployed using HTTPS.

#### HttpOnly Attribute

LiveEngage is unable to support the HttpOnly attribute because it does not operate through JavaScript, which enables the LiveEngage Tag to collect cookies.

#### Third Party Cookies - Default

By default, LiveEngage uses third-party session and visitor cookies in order to save visitors’ tracking information. This is due to the fact that while visitors are browsing your site, the LiveEngage cookies are set by the LiveEngage domain and not by your website domain.

If you have any questions that are not addressed through this cookie policy, please contact LivePerson Technical Support.
