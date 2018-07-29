---
title: HTTP Response Codes
redirect_from:
  - push-service-codes.html
Keywords:
level1: Documents
level2: Guides


order: 30
permalink: push-notification-service-http-response-codes.html

indicator: messaging
---

Listed below are the expected responses from the push endpoint:

- 200 OK - Message accepted by service.
- 401 DENIED - Service token/auth key denied
- 403 FORBIDDEN - User token cannot accept push notifications.
- 500 SERVER ERROR - Error in processing request

In case of a network error (5XX error code), messages are resent every 10 seconds for up to 4
attempts.

TLS errors behave according to TLS spec error codes.
