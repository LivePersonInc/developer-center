---
title: Configuration of Push Proxy
Keywords:
level1: Documents
level2: Guides
level3: Push Notification Service (iOS and Android)

order: 40
permalink: push-service-configuration.html

indicator: messaging
---

The push proxy is configured the same way as any other static app with configurable
parameters:

- **endPointURL** - URL to be used for the relevant app.
- **authorization** - BA header. (optional)
- **key** - TLS key file location. (optional)
- **cert** - TLS certification file location. (optional)
- **push-service** - GCM to enforce GCM only, APN to enforce APN only or native to use
the original device type (GCM for Android and APN for iOS).

**Example of push proxy configuration:**

```json    
"test_endpoint":	{
    "endPointURL":	"https://testun.tmocce.com:443/unionma/messaging/5.2/lp_push",
    "authorization":"",
    "key":	"./custom_certs/tmo.key",
    "cert":	"./custom_certs/tmo.crt",
    "push-service":	"native"
}
```