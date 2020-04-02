---
pagename: Onboarding
keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: MTLS API
indicator: both
permalink: mtls-onboarding.html
---

The following is a step by step walkthrough on how to use LivePerson MTLS services. This guide assumes that you already have a valid/assigned certificate (for our purposes, a valid certificate is a p12/pfx file which consists of the needed public/private certificates).

### Step 1 - Test Your Certificate

The first thing we need to do in order to get started, is create a p12 file (and its corresponding password). Please refer to [this document](mtls-creating-a-p12-file.html) for in-depth instructions on how to do that.

As part of our MTLS service, we offer a p12 file tester. You can find it [here](mtls-methods-p12-key-tester.html). What this tool does is to test the validity of the p12/pfx file and corresponding password (at this stage without storing the certificate in the Hashicorp Vault).

### Step 2 - Upload certificate

In this stage we upload a certificate to the our storage. At this point, the certificate will not be connected to any **mapping parameters** (see explanation in step 3). It will be created so it can be connected in the next stage.

#### Actions to take

Now that your certificate is validated, you can upload it. Once it is uploaded, it can be mapped.

You can upload your certificate by using the following method: [upload certificate](mtls-methods-create-certificate-for-account.html). This method creates both the MySql entities and the Hashicorp Vault entry.

The `id` parameter returned by this method is needed for further configuration. Please note it before moving to the next step (it can also be fetched later).

### Step 3 - Create MTLS Mapping object

#### Mapping Parameters

These are the parameters that connect the configuration data to runtime. They consist of triplets of **accountId/serviceName/url** which serve as a unique key (if all 3 parameters match, then we pull the configuration at runtime).

* **accountId:** The actual account that is creating/consuming the configuration.

* **serviceName:** The service that will be creating/consuming the configuration, possible options are **0, 1, 2** which maps as such: 

```java
public enum Services {
    TEST_SERVICE("0"),
    IDP ("1"),
    WEBHOOKS ("2");
}
```

* **url:** The url we will proxy the request to in runtime (represented by runtime header `LP-forward-url`).

#### Actions to take

Now that we have validated and uploaded our certificate, we must map it to the corresponding objects. This mapping must correspond with runtime submitted parameters **(accountId/serviceName/url)** to identify the context (as explained above).

**Note that there is a per account duplication constraint that checks both name and the key (unique accountId/serviceName/url triplets). When trying to create an entry that already exists, an informative error will be returned**.

In order to create the mapping object, you will need to use the following method.

**Note that this action is performed against ac-common domain, not the mtls service**

|Method|      URL|  
|:--------  |:---  |
|POST|  https://{accountConfigReadWrite-domain}/api/account/{accountId}/configuration/ac-common/mtls?v=3.0 |

You can authenticate with this endpoint with oAuth1 (AppKey) or a Bearer.

Service options (as explained are 0, 1, 2):

```java
public enum Services {
    TEST_SERVICE("0"),
    IDP ("1"),
    WEBHOOKS ("2");
}
```

Example body (Certificates array):

```json
[
    {
        "certificationId": "{idFromPreviousCreation}",
        "serviceId": "{serviceIdAsNumber}",
        "enable": true,   
        "url": "{url}", 
        "siteId": "{accountId}",
        "name": "{anyNonDuplicatingNamePerAccount}",
        "deleted": false
    }
]

```

### Step 4 - Use the runtime

If all previous steps were successful, runtime methods can now be used. The runtime includes mapping and forward methods.

#### Actions to take

* [Mapping method](mtls-methods-check-mapping-configuration.html) - This method receives triplets of **serviceName/url/siteid** and returns for each triplet whether a certificate is configured for it. Use this method to make sure your certificates are configured properly, **Since mtls is throttle protected this method is used to verify that mTLS is configured for the supplied parameters. The goal of this method is not to submit regular TLS requests through the service (using up bandwidth), even though it is possible.**


* [Forward method](mtls-methods-forward-get-request.html) - the request will be mTLS wrapped using the certificate fetched. The certificate is fetched using the provided parameters (**accountId/serviceName/url**). The request is then forwarded to the `LP-forward-url` specified. The response will return as if contacting the remote endpoint directly but will be authenticated, its identity confirmed via the certificate.
