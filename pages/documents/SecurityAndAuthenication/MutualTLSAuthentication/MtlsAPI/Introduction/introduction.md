---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
indicator: both
permalink: mtls-overview.html
---

MTLS or Mutual Transport Layer Security (also known as Mutual TLS), is a new solution from LivePerson. The purpose of this solution is to centralize certificate management and to store certificates in a secured location over Hashicorp’s vault. This solution is intended to be self-served. This will allow users to manage their own certificates, without the need to reach out to a LivePerson representative or to the support team.

### What is MTLS?

Transport Layer Security is a protocol for verifying the identity of a service over the Internet. While TLS meant that only one side needs to authenticate the connection, with MTLS, the more widespread and common protocol in the industry today, both parties need to authenticate their identity. This protocol is safer and fast becoming an industry standard, especially in the banking industry.

The optimal flow looks like this: the client authenticates the server (just like in TLS) then the server authenticates back to the client. Traffic will flow only after mutual (back and forth) authentication was achieved.

### What is Hashicorp vault?

HashiCorp provides a suite of open-source tools intended to support development and deployment of large-scale service-oriented software installations. Vault, first released on April 2015, provides secrets management, identity-based access, and encrypting application data for auditing of secrets for applications, systems, users.

### Use cases - Why should I use MTLS?

As a bank, use this if you would like to be aligned with open banking standards and because you would like my connection to be more secure.

As any kind of business, you would use the MTLS API to upload a certificate, map an existing certificate, wrap and forward MTLS requests etc.

### Prerequisites

In order for MTLS to work, you'll need to generate a specific MTLS certificate. You can accomplish this by receiving a CSR from our support team, filling out the CSR with the required details and signing the certificate with a 3rd party provider.

Once the certificate is ready, our support team needs to upload the new certificate, map the service that will support the MTLS and tie it to a specific URL. The upcoming future solution will allow our customers to self-serve the entire process, including uploading the new certificate to store it on HashiCorp vault.

### Limitations

#### Technical limitations:

* The P12 key (private + public) must be Java compliant. The created key must use supported algorithms and key strength. To test your P12 key, please use the [P12 Key Tester](p12-key-tester.html) resource included in this API.

* Resources support the oAuth1 (app key + app secret) and Bearer authentication methods with a few limitations:

  - The Check Mapping Configuration method supports oAuth1 only.

  - Any methods which create certificates "by-file" support Bearer authentication only.

  - The P12 Key Tester supports Bearer authentication only.

  - The Forwarding methods support both oAuth1 (app key + app secret) and Bearer.

* The MTLS service is throttling protected, allowing only 10 requests per second (per incoming IP).

* Uploaded certificates/mappings will be updated to runtime after 5 minutes. This is due to caching mechanisms embedded in the runtime resources. The Configration (certificate CRUD) resource is not cached.

* It is possible to use the same certificate for different services but for each mapping of accountId + serviceName + url it will be only one certificate and the certificate name is unique.
