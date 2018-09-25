---
pagename: All iOS Messaging SDK Release Notes
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
permalink: mobile-app-messaging-sdk-for-ios-release-notes-all-release-notes.html
indicator: messaging
---

Listed below are all of the Release Notes for previous versions of our Mobile App Messaging SDK for iOS. To learn more about the SDK and how to get started, please visit [this page](/mobile-app-messaging-sdk-for-ios-quick-start.html).

{% for operatingsystem in site.data.releasenotes %}
{% if operatingsystem == "iOS" %}
{% for release in operatingsystem.releases %}
{% if forloop.first %}
<a href="mobile-app-messaging-sdk-for-ios-release-notes.html">Mobile App Messaging SDK for iOS Release Notes {{ release.releasename }}</a>
{% else %}
<a href="/{{ release.releasename | slugify }}.html">{{ release.releasename }}</a>
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
