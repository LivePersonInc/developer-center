---
pagename: Latest Release Notes
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Release Notes
permalink: mobile-app-messaging-sdk-for-android-release-notes-latest-release-notes.html
indicator: messaging
---

{% for operatingsystem in site.data.releasenotesandroid %}
{% for release in operatingsystem.releases %}
{% if forloop.first == true %}
<div class="attn-alert">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/mobile-app-messaging-sdk-for-android-latest-release-notes.html&mode=web&css=post-content" target="_blank">subscribe to receive notifications of changes</a>. When we update the release notes, you'll get a notification straight to your email of choice.</div>

#### SDK version {{ release.releasename }}

For all previous release notes versions, see <a href="/mobile-app-messaging-sdk-for-android-all-release-notes.html">all release notes</a>.
{% capture my_include %}{% include_relative {{ release.releasename }}.md %}{% endcapture %}
{{ my_include | markdownify }}
{% endif %}
{% endfor %}
{% endfor %}
