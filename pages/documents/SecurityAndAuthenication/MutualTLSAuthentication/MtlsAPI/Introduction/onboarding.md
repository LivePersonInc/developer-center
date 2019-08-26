## General explanation
The following is a step by step walkthrough on how to get MTLS up and running,
[troubleshooting](https://lpgithub.dev.lprnd.net/vault/lp-mtls-app/wiki/MTLS-Troubleshooting) and [certificate creation](https://lpgithub.dev.lprnd.net/vault/lp-mtls-app/wiki/Support---TLS-Certificate-creation) will be explained in a different section.

## 1)Certificate creation
First thing needed to start the onboarding process is a p12 file (and its corresponding password):
[P12 creation](https://lpgithub.dev.lprnd.net/vault/lp-mtls-app/wiki/Support---TLS-Certificate-creation)

## 2)Run the created certificate through the tester (important)
Wiki: [Tester API wiki](https://lpgithub.dev.lprnd.net/vault/lp-mtls-app/wiki/P12-Testing-Resource)

What the Api does is to submit a request to the MTLS protected endpoint (at this stage without storing certificate in Hashicorp Vault)

**This is an important step, this is actually a test that Java API supports and is able to process the p12 file and forward the request**

## 3)Upload certificate 

**Will be available through UI, this section is relevant to July 2019**

Before mapping the certificate it needs to be uploaded.

Done by the following API: [Certificate Resource](https://lpgithub.dev.lprnd.net/vault/lp-mtls-app/wiki/MTLS-Certificate-Resource)

The Api creates both the MySql entities (non secure parts) and the Hashicorp Vault entry (secured parts)

The Id returned is needed to further configuration.

## 4)Create MTLS Mapping object
**Will be available through UI, this section is relevant after July 2019**

This must correspond with runtime submitted parameters to identify the context (will be explained below).

Api endpoint (this is a Rest Api, support all CRUD operations)
```
https://{domain}/api/account/{accountId}/configuration/ac-common/mtls?v=3.0
```
Api can be oAuth1 or oAuth2 protected (either is fine, can use Bearer or App Key).

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
        "url": "{urlToAccessTo}", //The Url protected by the certificate (as will be submitted by runtime, it must match (parameters exluded))
        "siteId": "{siteId}",
        "name": "{CertificateMappingName}",
        "deleted": false
    }
]
```

## 5) Use the runtime

If all successful can now start using the runtime: [Mapping Resource](https://lpgithub.dev.lprnd.net/vault/lp-mtls-app/wiki/MTLS-Mapping-Endpoint) , [Forward resource](https://lpgithub.dev.lprnd.net/vault/lp-mtls-app/wiki/MTLS-Forwarding-Endpoint)

Can check mapping that certificate exist and supported, then can forward the request. (Both of those Api are runtime Apis),

## Troubleshooting
If all steps completed and errors occur, Please check our [troubleshooting](https://lpgithub.dev.lprnd.net/vault/lp-mtls-app/wiki/MTLS-Troubleshooting) section.


