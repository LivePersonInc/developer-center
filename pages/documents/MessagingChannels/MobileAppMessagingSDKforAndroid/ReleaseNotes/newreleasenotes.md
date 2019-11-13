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
<div class="notice">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/mobile-app-messaging-sdk-for-android-latest-release-notes.html&mode=web&css=post-content">subscribe</a> to receive notifications of changes! When we update the Release Notes, you'll get a notification straight to your email of choice!</div>
<h4>SDK version {{ release.releasename }}</h4>
For all previous release notes versions, see <a href="/mobile-app-messaging-sdk-for-android-all-release-notes.html">All Release Notes</a>.
{% capture my_include %}{% include_relative {{ release.releasename }}.md %}{% endcapture %}
{{ my_include | markdownify }}
{% endif %}
{% endfor %}
{% endfor %}
