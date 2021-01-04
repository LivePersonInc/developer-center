---
pagename: Overview
redirect_from:
  - guides-cookies.html
  - cookies-and-liveengage-overview.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Cookies and Conversational Cloud
permalink: cookies-and-conversational-cloud-overview.html
root-link: true
indicator: both
---

A cookie is a small piece of data sent from a website and stored in the visitors' web browser. It helps the website to remember information about a visit; so when a visitor browses the same website in the future, the data stored in the cookie is sent back to the website by the browser.

Conversational Cloud uses information stored in browser storage to maintain session data and to identify returning visitors by saving Conversational Cloud-specific data, such as visitor ID and last chat date. It is important to note that the stored data **do not contain any private customer data** or any data that can be accessible or useful outside of Conversational Cloud.

### Cookie Consent

Brands that elect to use our products and services are responsible for obtaining (and maintaining) consumer consent before using Conversational Cloud cookies and other tracking technologies on their websites.  While we include suggested best practices below, we also recommend that you seek legal advice about what would be best for your particular websites or applications in light of your offering, the reason you’re using cookies and the laws that apply to you.

### Best Practices with Cookies and Conversational Cloud

In order to stay aligned with the latest regulations, LivePerson recommends that brands adopt the following best practices regarding cookies, tracking and Conversational Cloud:

1. You should add a cookie consent functionality to your website.  It should contain a prominent banner or similar visual element when the page first loads to concisely inform the consumer about the use of cookies and what action the consumer should take to consent.

  * If the consumer consents, you should remember their response so you can deploy the Web Tag on all subsequent visits and pages.

  * If the consumer declines, you should remember their response, so the Web Tag is **not** deployed on subsequent pages and visits. Additionally you may choose to refresh the current page to apply the consumer’s choice so that the Web Tag would not get deployed on that specific page.

{:start="2"}
2. You should include information about your use of third party cookies, such as Conversational Cloud cookies, and the purpose for their use, in your privacy policy or cookie notice.

3. You should inform consumers about various options they can use to disable cookies.

### Storage Data Types

<div class="important">If no duration is specified for a Storage Type below, this means its duration is the browser session</div>

**SecureStorage**

Secure storage is a client-side storage mechanism, that LivePerson has implemented in order to provide the best possible consumer experience. Secure storage uses a combination of modern browser technologies (indexedDB, localStorage, sessionStorage and first party cookies) to store necessary information on LivePerson domains - depending on browser capabilities.

By default, Conversational Cloud uses the third-party storage solution type for website visitors. If you have any questions about this approach, please contact LivePerson Customer Support. The following tables list the stored data and their types offered by LivePerson.

### Monitoring Data

<table>
  <thead>
  <tr>
    <th>Entry Name</th>
    <th>Description</th>
    <th>Storage Type</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>LPVID</td>
    <td>Visitor ID as identified in Conversational Cloud. Identifies a browser as long as cookie is not deleted.</td>
    <td>1st party persistent. Fallback to sessionStorage per Tab. <br><br>Path: parent domain /.</td>
  </tr>
  <tr>
    <td>LPSID-SiteID</td>
    <td>Current active (or last) monitoring session.</td>
    <td>1st party session cookie. Fallback to sessionStorage per Tab. <br><br>Path: parent domain /.</td>
  </tr>
  <tr>
    <td>LPSessionID</td>
    <td>Current active (or last) monitoring session.</td>
    <td>3rd party HTTPonly session cookie. <br><br>Path: LivePerson parent domain /.</td>
  </tr>
  <tr>
    <td>LPVisitorID</td>
    <td>Visitor ID as identified in LivePerson. Identifies a browser as long as cookie is not deleted.</td>
    <td>3rd party HTTP only persistent. <br><br>Path: LivePerson parent domain /.</td>
  </tr>
  <tr>
    <td>lpLastVisit-</td>
    <td>Last visit timestamp</td>
    <td>localStorage. <br><br>Duration: forever</td>
  </tr>
  <tr>
    <td>lpTabId</td>
    <td>Tab identifier - uses to share LivePerson data between different browser tabs</td>
    <td>sessionStorage. <br><br>Duration: session - same tab and domain only</td>
  </tr>
  <tr>
    <td>lpPmCalleeDfs</td>
    <td>For cross domain communication logic</td>
    <td>sessionStorage. <br><br>Duration: session - same tab and domain only</td>
  </tr>
</tbody>
</table>


### Conversation Data

<table>
  <thead>
  <tr>
    <th>Entry Name</th>
    <th>Description</th>
    <th>Storage Type</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>LPCID-SiteId</td>
    <td>Token for retrieving conversation data in the client only.</td>
    <td>First party session cookie. No fallbacks. <br><br>Path: parent domain /.</td>
  </tr>
  <tr>
    <td>LPCKEY-SiteId</td>
    <td>Token for retrieving conversation data in the client only.</td>
    <td>First party session cookie. No fallbacks. <br><br>Path: parent domain /.</td>
  </tr>
  <tr>
    <td>LivePersonID</td>
    <td>LivePerson chat identifier.
Note: We do not currently use this data although we do store it.</td>
    <td>Third party persistent cookie. <br><br>Path: LivePerson parent domain / Note: We do not currently use this data  although we do store it.</td>
  </tr>
  <tr>
    <td>Storage_expiration-SiteId</td>
    <td>timestamp for last storage usage (used for secure storage logic)</td>
    <td>SecureStorage. <br><br>Duration: 1 day</td>
  </tr>
  <tr>
    <td>lpStrMap</td>
    <td>manages storages keys (used for secure storage logic)</td>
    <td>SecureStorage. <br><br>Duration: 1 day</td>
  </tr>  
  <tr>
    <td>UIConf</td>
    <td>Stores conversation settings (features, logic etc.)</td>
    <td>SecureStorage. <br><br>Duration: 1 day</td>
  </tr>  
  <tr>
    <td>lpMessaging-</td>
    <td>Stores the JWT token and authentication code in messaging scenarios for messaging window recovery on navigation and cross tabs</td>
    <td>SecureStorage. <br><br>Duration: 1 day</td>
  </tr>
  <tr>
    <td>-lpuw</td>
    <td>session state</td>
    <td>SecureStorage. <br><br>Duration 1 day</td>
  </tr>
</tbody>
</table>


### Login Cookies

<table>
  <thead>
  <tr>
    <th>Entry Name</th>
    <th>Description</th>
    <th>Storage Type</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>idpLastSiteId</td>
    <td>Last site id for Remember me functionality</td>
    <td>Third party secure session cookie. <br><br>Path: LivePerson domain. Stored as long as the session is active.</td>
  </tr>
  <tr>
    <td>idpLastDomain</td>
    <td>Last domain used for login for Remember me functionality</td>
    <td>Third party secure session cookie. <br><br>Path: LivePerson domain

</td>
  </tr>
  <tr>
    <td>session_id</td>
    <td>Conversational Cloud agent session identification</td>
    <td>Third party, httpOnly secure session cookie. <br><br>Path: LivePerson domain</td>
  </tr>
  <tr>
    <td>WSHumanClickServer</td>
    <td>Logical name of appserver handling the site</td>
    <td>Third party, secure session cookie. <br><br>Path: /hc/web LivePerson domain</td>
  </tr>
  <tr>
    <td>WSHumanClickWebSession</td>
    <td>Appserver web session identifier</td>
    <td>Third party, httpOnly secure session cookie. <br><br>Path /hc/s-{siteid}/web LivePerson domain</td>
  </tr>
  <tr>
    <td>WSHumanClickSiteNumber</td>
    <td>Site identifier</td>
    <td>Third party, secure session cookie. <br><br>Path: /hc/s-{siteid}/web LivePerson domain</td>
  </tr>
  <tr>
    <td>agentSessionKey</td>
    <td>Agent session identifier in the appserver</td>
    <td>Third party, secure session cookie. <br><br>Path: /api/account/{accountid}/agentSession LivePerson domain</td>
  </tr>
</tbody>
</table>


### CoBrowse cookies

<table>
  <thead>
  <tr>
    <th>Entry Name</th>
    <th>Description</th>
    <th>Storage Type</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>s.browser</td>
    <td>For transports based on HTTP (long-polling and callback-polling), CoBrowse sends a HTTP cookie with the handshake response, marked as HttpOnly, called s.browser. The cookie identifies the browser. See BAYEUX_BROWSER for details. Cookie is removed when the browser is closed.</td>
    <td>Third party cookie. HttpOnly and Secure. Domain: CoBrowse Domain prefixed with siteId. <br><br>Path: /sync.</td>
  </tr>
</tbody>
</table>


### Considerations

The following issues should be considered when working with Conversational Cloud Cookies.

#### Secure Cookies

Conversational Cloud supports secure cookies, but requires the Web Tag to be deployed using HTTPS.

#### HttpOnly Attribute

Conversational Cloud is unable to support the HttpOnly attribute because it does not operate through JavaScript, which enables the Web Tag to collect cookies.

#### Third Party Storage - Default

By default, Conversational Cloud uses third-party session and visitor storage in order to save visitors’ tracking information. This is due to the fact that while visitors are browsing your site, the Conversational Cloud cookies are set by the Conversational Cloud domain and not by your website domain.

Some browsers are currently limiting the usage of third-party storage - this can affect the LivePerson loading and monitoring process. it is possible also to enable first-party storage support for the secure storage for additional support.

If you have any questions that are not addressed through this cookie policy, please contact LivePerson Technical Support.
