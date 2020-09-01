---
pagename: Limited Releases
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: All Releases
permalink: mobile-app-messaging-sdk-for-ios-all-releases-limited-releases.html
indicator: messaging
---

{% assign limitedrelease = site.data.releasenotesios['Limited'] %}
{% for currentversion in limitedrelease.versions %}
{% include_relative Limited/{{currentversion.version}}.md %}
<hr/>
{% endfor %}



<button onclick="location.href='mobile-app-messaging-sdk-for-ios-all-releases.html'" type="button">back to releases</button> <button onclick="window.scrollTo(0, 0);"> scroll to top </button>