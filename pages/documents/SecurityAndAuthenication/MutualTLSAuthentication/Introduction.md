---
pagename: Introduction
redirect_from:
  - guides-authentication-detailedapi.html
  - authentication-introduction.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Mutual TLS Authentication
permalink: mutual-tls-authentication-introduction.html
root-link: true
indicator: both
---
### MTLS Overview

Mutual Transport Layer Security (Mutual TLS) Mutual TLS is a common security practice, that uses client TLS certificates to provide an additional layer of protection, allowing to cryptographically verify the client information. While TLS means that only one side needs to authenticate a connection, with MTLS, the more widespread and common protocol for business to business solutions, both parties need to authenticate the connection. This protocol is safer and is fast becoming a standard, especially for the banking industry.

In order to support this security practice, LivePerson built a new solution from LivePerson. The goal of this solution is to centralize certificate management and to store the certificates in a secured location over [Hashicorp’s Vault](https://www.vaultproject.io/). The service will be self-serve, which will allow users to manage their own certificates, without the need to reach out to LivePerson for enablement or management.

#### What is Hashicorp Vault?

HashiCorp provides a suite of open-source tools intended to support development and deployment of large-scale service-oriented software installations. Vault, first released in April 2015, provides secrets management, identity-based access, and data application encryption.

### Use Cases

You should use this solution if you would like to use MTLS so you can be aligned with open banking standards, security protocols, and because you would like your connection to be more secure.

You would use the MTLS API provided here to upload a certificate, map an existing certificate, wrap and forward MTLS requests, etc.

### Prerequisites

In order for MTLS to work, you'll need to generate a specific MTLS certificate with your LivePerson account team. The upcoming future solution will allow you to self-serve the entire process, including uploading the new certificate to store it on Hashicorp vault.

For now, please contact your LivePerson account team or our Support team to create a new certificate and verify it.

### Limitations and Considerations

* The P12 files (private + public) must be Java compliant, the created key must use supported algorithm and key strength. You can use the [P12 testing tool](mutual-tls-authentication-p12-testing-tool.html) included in this API to verify that your P12 is up to standard.

* This API's resources support the oAuth1 (app key + app secret) and Bearer authentication methods with a few limitations:
  - The [Check MTLS Configuration](mutual-tls-authentication-check-mtls-configuration.html) method supports oAuth1 only.
  - The [Certification Management](mutual-tls-authentication-certificate-management.html) method supports the Bearer method only.
  - The [P12 testing tool](mutual-tls-authentication-p12-testing-tool.html) supports the Bearer method only.
  - The [Request Forwarding](mutual-tls-authentication-request-forwarding.html) method supports both oAuth1 (app key + app secret) and Bearer.

* MTLS service is throttling protected, allowing only 10 requests per second (for a certain incoming IP). This is used to limit traffic through the service. As MTLS service proxies both MTLS and TLS traffic, this limits the 'bandwidth' for both services.

* Uploaded certificates/mappings will reflect to runtime after 5 minutes. This is due to a caching mechanism embedded in the runtime resources.The Configuration (certificate CRUD) resource is not cached.
