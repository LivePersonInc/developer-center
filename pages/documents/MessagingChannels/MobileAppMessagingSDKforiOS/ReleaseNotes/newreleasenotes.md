---
pagename: Latest iOS Messaging SDK Release Notes
redirect_from:
  - consumer-experience-ios-sdk-release-notes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS


permalink: mobile-app-messaging-sdk-for-ios-latest-release-notes.html
indicator: messaging
---

{% for operatingsystem in site.data.releasenotesios %}
{% for release in operatingsystem.releases %}
{% if forloop.first == true %}
<h4>SDK Version {{ release.releasename }}</h4>
For all previous release notes versions, see <a href="/mobile-app-messaging-sdk-for-ios-all-release-notes.html">All Release Notes</a>.
{% capture my_include %}{% include_relative {{ release.releasename }}.md %}{% endcapture %}
{{ my_include | markdownify }}
{% endif %}
{% endfor %}
{% endfor %}
