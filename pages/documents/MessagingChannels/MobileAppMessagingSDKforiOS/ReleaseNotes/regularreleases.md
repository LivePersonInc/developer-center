---
pagename: Regular Releases
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: All Releases
permalink: mobile-app-messaging-sdk-for-ios-all-releases-regular-releases.html
indicator: messaging
---

{% assign regularrelease = site.data.releasenotesios['regular'] %}
{% for currentversion in regularrelease.versions %}
{% include_relative regular/{{currentversion.version}}.md %}
<hr/>
{% endfor %}


<button onclick="location.href='mobile-app-messaging-sdk-for-ios-all-releases.html'" type="button">back to releases</button> <button onclick="window.scrollTo(0, 0);"> scroll to top </button>