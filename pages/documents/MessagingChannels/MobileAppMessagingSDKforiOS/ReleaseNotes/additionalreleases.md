---
pagename: Additional Releases
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: All Releases
permalink: mobile-app-messaging-sdk-for-ios-all-releases-additional-releases.html
indicator: messaging
---

{% assign additionalrelease = site.data.releasenotesios['Additional'] %}
{% for currentversion in additionalrelease.versions %}
{% include_relative Additional/{{currentversion.version}}.md %}
<hr/>
{% endfor %}


<button onclick="location.href='mobile-app-messaging-sdk-for-ios-all-releases.html'" type="button">back to releases</button> <button onclick="window.scrollTo(0, 0);"> scroll to top </button>