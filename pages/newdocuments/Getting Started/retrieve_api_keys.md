---
pagename: Create a new API Key
redirect_from:
  - guides-gettingstarted.html
sitesection: Documents
categoryname: Guides
documentname: Retrieve API Keys

permalink: retrieve-api-keys-create-a-new-api-key.html
root-link: true
level-order: 1
order: 1
indicator:
---

If required by an API, create an Application Key. This Application Key will be installed automatically upon creation.

To Create an Application Key:

1.	Log into LiveEngage with Administrator or Campaign Manager permissions, and open the Campaigns area.
2.	In the footnote, click on Data Sources. The Data Sources area is displayed.

![Campaigns](img/campaigns.png)

{:start="3"}
3.	Open the API tab, and then click Add new API key. Alternatively, click on an existing key to edit its privileges.

![DataSourcesAPI](img/datasourcesapi.png)

{:start="4"}
4.	Complete the required fields, and then click Save.
5.	The four values for an AUTH request are now displayed in the API keys management screen:
	- App key
	- Secret
	- Access token
	- Access token secret
6.	With these four values, generate an OAuth Authorization header according to the [OAuth specification Section 9](https://oauth.net/core/1.0/#signing_process).

*Example:*

| Header Name | Authorization |
| :--- | :--- |
| Header Value | OAuth   oauth_signature="JA0PvBbTAxmtLmzIWINpSVLshrY%3D", <br> oauth_version="1.0", <br> oauth_nonce="c1c04ec4-3125-44cf-9c39-cccb9343541b", <br> oauth_consumer_key="d392e7ff2e204d6c802e38fd775563d1", <br> oauth_signature_method="HMAC-SHA1", <br> oauth_token="61adad31204a4e6fab68d560f1ffb594", <br> oauth_timestamp="1261039670" <br> *Note: The Authorization should be contained on a single line. New lines have been inserted for clarity.* |
