---
pagename: Introduction
redirect_from:
  - guides-authentication-detailedapi.html
  - authentication-introduction.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Mutual TLS Authentication
permalink: mutual-tls-authentication-detailed-api.html
root-link: true
level-order: 6
order: 1
indicator: both
---


The MTLS authentication API provides endpoints to forward customer requests with custom certificate which stored in Hashicorp Vault. 
The main motivation is to centralize certificate management and access to Hashicorp Vault, Allow customer “self serve” handling of certificates.
“lp-MTLS” will serve as an entry point for MTLS connection endpoints.
