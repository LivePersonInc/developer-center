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
indicator: both
---

MTLS - Mutual Transport Layer Security (Mutual TLS), is a new solution from LivePerson, to centralize certificate management and to store the certificates in a secured location over Hashicorp’s vault. The service will be self-serve, which will allow users to manage their own certificates, without the need to reach out to a CSM or to the support team.


MTLS  - While TLS means that only one side needs to authenticate the connection, with MTLS, the more widespread and common for the business to business solution, both parties need to authenticate it. This solution is safer and becoming a standard, especially among the banking industry. The process is: the client authenticates the server (TLS wise) then server authenticates back to the client. Traffic will flow only after mutual (back and forth) authentication success. 


What is Hashicorp vault?

HashiCorp provides a suite of open-source tools intended to support development and deployment of large-scale service-oriented software installations. Vault, first released on April 2015, provides secrets management, identity-based access, and encrypting application data for auditing of secrets for applications, systems, users.



Use cases - Why should I use this?

As a bank, I would like to use MTLS in order for me to be able to be aligned with open banking standards and because I would like my connection to be more secure.

As a brand, I would use the MTLS API to upload a certificate, map an existing certificate, wrap and forward mtls requeses etc’.

Prerequisites - 

In order for MTLS to work, the brand needs to generate a specific MTLS certificate. The brand is doing it by receiving a CSR from the support, filling the CSR with the required details and signing the certificate with a 3rd party provider.

Once the certificate is ready, support needs to upload the new certificate, map the service that will support the MTLS and tie it to a specific URL. The upcoming future solution will allow customers to self-serve the entire process, including uploading the new certificate to store it on Hashicorp vault.


Limitations

Technical limitations:

P12 (private + public) must be Java compliant, created key must use suppoted algorithm and key strength, the p12 tester resource exist to make sure that created P12 is fully supported.

Resources support oAuth1 (App key) and Bearer as described in Wiki, with a few limitations:
- Mapping Resource is oAuth1 (not account related operation)
- Certificate Resource "by-file" operations are Bearer only operations.
- P12Tester Resource is Bearer authorized only resource.
- Forwarding resource supports both oAuth1 (app key) and Bearer.

MTLS service is throttling protected, allowing only 10 request per second (for incoming IP), this is used to limit traffic through the service, as MTLS service proxies both MTLS and TLS traffic this limits the 'bandwidth' for each service.

Uploaded certificates/mappings will reflect to runtime after 5 minutes, this is due to caching mechanism embedded in the runtime resources, Configration (certificate CRUD) resource is not cached.

B. Product limitations:

MTLS will not act as a feature that we can enable or disable for an account at this phase. In the upcoming future releases, it will be acting as an AC- Feature.
