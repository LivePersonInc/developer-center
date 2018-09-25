---
pagename: All Android Messaging SDK Release Notes
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
permalink: mobile-app-messaging-sdk-for-android-release-notes-all-release-notes.html
indicator: messaging
---

Listed below are all of the Release Notes for previous versions of our Mobile App Messaging SDK for Android. To learn more about the SDK and how to get started, please visit [this page](/mobile-app-messaging-sdk-for-android-quick-start.html).

{% for operatingsystem in site.data.releasenotesandroid %}
{% for release in operatingsystem.releases %}
{% if forloop.first %}
<a href="mobile-app-messaging-sdk-for-android-release-notes.html">Mobile App Messaging SDK for Android Release Notes {{ release.releasename }}</a>
{% else %}
<a href="/{{ release.releasename | slugify }}.html">{{ release.releasename }}</a>
{% endif %}
{% endfor %}
{% endfor %}
