---
pagename: Latest Android Messaging SDK Release Notes
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
permalink: mobile-app-messaging-sdk-for-android-latest-release-notes.html
indicator: messaging
---

{% for operatingsystem in site.data.releasenotesandroid %}
{% for release in operatingsystem.releases %}
{% if forloop.first == true %}
<h4>SDK version {{ release.releasename }}</h4>
For all previous release notes versions, see <a href="/mobile-app-messaging-sdk-for-android-all-release-notes.html">All Release Notes</a>.
{% capture my_include %}{% include_relative {{ release.releasename }}.md %}{% endcapture %}
{{ my_include | markdownify }}
{% endif %}
{% endfor %}
{% endfor %}
