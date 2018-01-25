---
title: Certificate Pinning - iOS
Keywords:
level1: Documents
level2:
level3: In-App Messaging SDK for iOS
level4: Certificate Pinning

order:
permalink: consumer-experience-ios-sdk-certpinning.html

indicator: messaging
---

### Introduction

Certificate Pinning allows increased security on top of the commonly used SSL protocol for mobile apps. It assists to prevent certificate hijacks and mitigates implications from compromised certificate authorities. By using Certificate Pinning, apps have an additional validation of the server’s certificate.

In order to use Certificate Pinning , the brand will need to go through an on-boarding process. This process includes setting up the Vanity URL feature, which is a prerequisite to using Certificate Pinning. The on-boarding process includes the following steps:

  * Request to use the feature from the account team.

  * Filling the Vanity URL feature request form.

  * Purchasing a SAN certificate according to a CSR which will be provided by the account team.

  * Providing the purchased certificate to LivePerson.

  * LivePerson internal configuration.

The duration of the on-boarding process will be according to LivePerson's SLA.

### Using the Feature

   **Please note** - Using the described functionality without having the feature configured will result in failures while trying to communicate with LivePerson’s servers.

### iOS

In order to add the feature on iOS, please perform the following steps:

1. Add the domains for `lptags` and `csds` (both will be provided by the account team)

   `LPConfig.defaultConfiguration.csdsDomain = "<SOME DOMAIN>"`

   `LPConfig.defaultConfiguration.lpTagDomain = "<SOME DOMAIN>"`

The configuration should be added anywhere inside the code **before** calling the method `showConversation(conversationViewParams, authenticationParams: authenticationParams)`

{:start="2"}
2. Adding the public keys to the SDK - The brand should extract the public keys of the SAN certificate that was provided to LivePerson. The keys should be added to the object `LPAuthenticationParams`.

Multiple keys can be added, as long as one of the keys will match the returned key, the connection will be initiated.

#### Code Sample

```swift
func certPinningExample() {

  LPConfig.defaultConfiguration.csdsDomain = "<SOME DOMAIN>"
  LPConfig.defaultConfiguration.lpTagDomain = "<SOME DOMAIN>"

  let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery("accountNumber")
  let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, containerViewController: self, isViewOnly: false)
  let authenticationParams = LPAuthenticationParams(certPinningPublicKeys: ["key1", "key2", "key3"])

  LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
}
```
