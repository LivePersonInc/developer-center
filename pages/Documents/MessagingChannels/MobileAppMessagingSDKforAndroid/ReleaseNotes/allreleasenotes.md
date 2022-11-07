---
pagename: All Android Messaging SDK Release Notes
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
permalink: mobile-app-messaging-sdk-for-android-all-release-notes.html
indicator: messaging
---
<br>

Listed below are all of the Release Notes for previous versions of our Mobile App Messaging SDK for Android. To learn more about the SDK and how to get started, see the [MobileSDK Android Quick Start guide](/mobile-app-messaging-sdk-for-android-quick-start.html).

<a href="mobile-app-messaging-sdk-for-android-release-notes.html">View all release notes</a>
{% for operatingsystem in site.data.releasenotesandroid %}
{% for release in operatingsystem.releases %}
{% if forloop.first %}
<a href="mobile-app-messaging-sdk-for-android-latest-release-notes.html">Mobile App Messaging SDK for Android Release Notes {{ release.releasename }}</a>
{% else %}
<a href="/{{ release.releasename | slugify }}.html">{{ release.releasename }}</a>
{% endif %}
{% endfor %}
{% endfor %}
