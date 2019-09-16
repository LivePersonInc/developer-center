---
pagename: Onboarding
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
indicator: both
permalink: mtls-onboarding.html
---

The following is a step by step walkthrough on how to use LivePerson MTLS services. This guide assumes that you already have a valid/assigned certificate.

### Step 1 - Test Your Certificate

The first thing we need to do in order to get started, is create a p12 file (and its corresponding password). Please refer to [this document](mtls-creating-a-p12-file.html) for in-depth instructions on how to do that.

As part of our MTLS service, we offer a p12 file tester. You can find it [here](mtls-methods-p12-key-tester.html). What this tool does is to submit a request to the MTLS protected endpoint (at this stage without storing the certificate in the Hashicorp Vault). It then tests that the p12 file is correct and authenticated. If the p12 file is correct this also validates the certificate.

### Step 2 - Upload certificate

Now that your ceritifcate if validated, you can upload it. Once it is uploaded, it can be mapped.

You can upload your certificate by using the following method: [Create Certificate from File](mtls-methods-create-certificate-from-file.html). This method creates both the MySql entities and the Hashicorp Vault entry.

The `id` parameter returned is needed to further configuration. Please note it before moving to the next step.

### Step 3 - Create MTLS Mapping object

Now that we have validated and uploaded our certificate, we must map it to the corresponding objects. This mapping must correspond with runtime submitted parameters to identify the context (will be explained below).

In order to create the mapping object, you will need to use the following method.

|Method|      URL|  
|:--------  |:---  |
|POST|  https://{domain}/api/account/{accountId}/configuration/ac-common/mtls?v=3.0 |

You can authenticate with this endpoint with oAuth1 or a Bearer.

Service options:
```
public enum Services {
    TEST_SERVICE("0"),
    IDP ("1"),
    WEBHOOKS ("2");
}
```

Example body (Certificate array):
```
[
    {
        "certificationId": "{idFromPreviousCreation}",
        "serviceId": "0", //From service options
        "enable": true,   //Must be true to work (can be disabled)
        "url": "{urlToAccessTo}", //The Url protected by the certificate (as will be submitted by runtime, it must match               (parameters exluded))
        "siteId": "{siteId}",
        "name": "{CertificateMappingName}",
        "deleted": false
    }
]

```

### Step 4 - Use the runtime

If all previous steps were successful, you can now start using the runtime. The runtime includes two methods:

* [Mapping method](mtls-methods-check-mapping-configuration.html)

* [Forward method](mtls-methods-forward-get-request.html)

You can use the first method, to check that the certificate exists and is valid. You can then use the second method to forward the request.
