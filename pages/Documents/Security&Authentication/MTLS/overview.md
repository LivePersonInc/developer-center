---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: MTLS
indicator: both
permalink: mtls-overview.html
---

mTLS or Mutual Transport Layer Security (also known as Mutual TLS), is a new solution from LivePerson. The purpose of this solution is to centralize certificate management and to store certificates in a secured location over Hashicorp’s vault. This solution is intended to be self-served but currently it requires communication with LivePerson support teams. In the future, self-service features will allow users to manage their own certificates, without the need to reach out to a LivePerson representative or to the support team.

### What is mTLS?

Transport Layer Security is a protocol for verifying the identity of a service over the Internet. While TLS meant that only one side needs to authenticate the connection, with mTLS, the more widespread and common protocol in the industry today, both parties need to authenticate their identity. This protocol is safer, since both sides verify their identity, and fast becoming an industry standard, especially in the banking industry.

By adopting mTLS, LivePerson is looking to adhere to industry standards and offer more secure connections between brands and their consumers. By verifying both the identity of the LivePerson server and the identity of the brand, we can make sure that there's no man in the middle attacks, fraud, phishing or other security risks.

The optimal flow looks like this: the client authenticates the server (just like in TLS) then the server authenticates back to the client. Traffic will flow only after mutual (back and forth) authentication has been achieved.

### What is Hashicorp Vault?

HashiCorp provides a suite of open-source tools intended to support development and deployment of large-scale service-oriented software installations. Vault, first released on April 2015, provides secrets management, identity-based access, and encrypting application data for auditing of secrets for applications, systems, users.

### Use cases - Why should I use mTLS?

Our mTLS methods allow you to add an additional layer of security to all communications between yourself, LivePerson, and your customers. You should use these methods to create mTLS certified conversations which provide this added layer of security.

### Happy flow example

The mTLS "happy flow" includes configuring the service and then invoking it in runtime:

#### Configuration

  * [Create a compliant P12 file](mtls-creating-a-p12-file.html) (Java compliant public + private keys)
  * Run the [p12tester resource](p12-key-tester.html). This will check that the P12 is valid, decipherable and can be used to reach the remote endpoint.
  * Upload the P12 file.
  * Create mapping for the service name/url/sitedId that uses the created certificate.

#### Run time

  * Run the [check mapping method](mtls-methods-check-mapping-configuration.html) for the configured service name/url/siteId, this will indicate that all the data is saved successfully and can be used.
  * [Forward](mtls-methods-forward-post-request.html) the request using the preconfigured parameters (if all previous step passed then this step should not fail). This request will now be authenticated with mTLS.

### Prerequisites

In order for mTLS to work, you'll need to generate a specific mTLS certificate. You can accomplish this by receiving a CSR from our support team, filling out the CSR with the required details and signing the certificate with a 3rd party provider.

Once the certificate is ready, our support team needs to upload the new certificate, map the service that will support the mTLS and tie it to a specific URL. The upcoming future solution will allow our customers to self-serve the entire process, including uploading the new certificate to store it on HashiCorp vault.

Check out the [on-boarding guide](/mtls-onboarding.html) for next steps.

### Limitations

#### Technical limitations:

* The P12 key (private + public) must be Java compliant. The created key must use supported algorithms and key strength. To test your P12 key, please use the [P12 Key Tester](p12-key-tester.html) resource included in this API.

* Resources support the oAuth1 (app key + app secret) and Bearer authentication methods with a few limitations:

  - The Check Mapping Configuration method supports oAuth1 only.

  - Any methods which create certificates "by-file" support Bearer authentication only.

  - The P12 Key Tester supports Bearer authentication only.

  - The Forwarding methods support oAuth1 authorization (app key + app secret).

* The mTLS service is throttling protected, allowing only 10 requests per second (per incoming IP).

* Uploaded certificates/mappings will be updated to runtime after 5 minutes. This is due to caching mechanisms embedded in the runtime resources. The Configuration (certificate CRUD) resource is not cached.

* It is possible to use the same certificate for different services but for each mapping of accountId + serviceName + url it will be only one certificate and the certificate name is unique.
