---
pagename: Regular Releases
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: All Releases
permalink: mobile-app-messaging-sdk-for-ios-all-releases-regular-releases.html
redirect_from:
  - mobile-app-messaging-sdk-for-ios-releases-all-regular-release-notes.html#ios-messaging-sdk---version-410
  - mobile-app-messaging-sdk-for-ios-releases-all-regular-release-notes.html#ios-messaging-sdk---version-400
indicator: messaging
---

<div class="notice">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/mobile-app-messaging-sdk-for-ios-all-releases-regular-releases.html&mode=web&css=post-content">subscribe</a> to receive notifications of changes! When we update the Release Notes, you'll get a notification straight to your email of choice!</div>

{% assign regularrelease = site.data.releasenotesios['Regular'] %}
{% for currentversion in regularrelease.versions %}
{% include_relative Regular/{{currentversion.version}}.md %}
<hr/>
{% endfor %}

<button onclick="location.href='mobile-app-messaging-sdk-for-ios-all-releases.html'" type="button">back to releases</button> <button onclick="window.scrollTo(0, 0);"> scroll to top </button>
