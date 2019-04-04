---
pagename: Latest Release Notes
redirect_from:
  - consumer-experience-ios-sdk-release-notes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS


permalink: mobile-app-messaging-sdk-for-ios-latest-release-notes.html
indicator: messaging
---
<br>
{% for operatingsystem in site.data.releasenotesios %}
{% for release in operatingsystem.releases %}
{% if forloop.first == true %}
<h3>Latest iOS Messaging SDK version - {{ release.releasename }}</h3>
This is the latest version of the iOS Messaging SDK release notes. If you want to view all release notes for previous versions, see <a href="/mobile-app-messaging-sdk-for-ios-all-release-notes.html">All iOS Messaging SDK Release Notes</a>.
{% capture my_include %}{% include_relative {{ release.releasename }}.md %}{% endcapture %}
{{ my_include | markdownify }}
{% endif %}
{% endfor %}
{% endfor %}
