---
pagename: Latest Release Notes
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
<h3>Latest Android Messaging SDK version - {{ release.releasename }}</h3>
This is the latest version of the Android Messaging SDK release notes. To view all release notes for previous versions, <a href="/mobile-app-messaging-sdk-for-android-all-release-notes.html">please click here</a>.
{% capture my_include %}{% include_relative {{ release.releasename }}.md %}{% endcapture %}
{{ my_include | markdownify }}
{% endif %}
{% endfor %}
{% endfor %}
