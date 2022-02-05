---
pagename: Open Source List and Dependencies
redirect_from:
  - android-opensource.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Resources
permalink: mobile-app-messaging-sdk-for-android-resources-open-source-list-and-dependencies.html
indicator: messaging
---

### Open Source List

| Name                | Site                                                    | License                                                                     |
|---------------------|---------------------------------------------------------|-----------------------------------------------------------------------------|
| Picasso             | [http://square.github.io/picasso/](http://square.github.io/picasso/)                        | [http://square.github.io/picasso/#license](http://square.github.io/picasso/#license)                                    |
| OKHTTP              | [http://square.github.io/okhttp/](http://square.github.io/okhttp/)                         | [https://github.com/square/okhttp/blob/master/LICENSE.txt](https://github.com/square/okhttp/blob/master/LICENSE.txt)                    |

### Latest Dependencies

**com.squareup.okhttp3:okhttp:4.9.1**
An HTTP+HTTP/2 client for Android and Java applications.

**com.squareup.picasso:picasso:2.8**
An Android library for managing images and the memory they use.

### Previous dependencies per SDK version

| SDK Version         | Picasso Version  | OkHttp Version   |
|---------------------|------------------|------------------|
| 5.7.1 onwards       | 2.8              | 4.9.1            |
| 5.6.0 - 5.7.0       | 2.8              | 3.10.0           |
| 5.0.0 - 5.5.1       | No dependency    | 3.9.1            |
| 4.10.0              | 2.71828          | 4.9.1            |
| 4.8.1 - 4.9.0       | 2.71828          | 3.10.0           |
| 3.7.0 - 4.7.0       | No dependency    | 3.9.1            |
| < 3.7.0             | 2.5.2            | 3.9.1            |

{:.important}
The Picasso dependency was removed from SDK versions 3.7.0 - 4.7.0 and 5.0.0 - 5.5.1 because Picasso version 2.5.2 has a known issue with image rendering on Xperia devices which later got fixed in the latest Picasso versions.
