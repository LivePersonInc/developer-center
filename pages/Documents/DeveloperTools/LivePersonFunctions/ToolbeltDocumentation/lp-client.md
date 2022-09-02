---
pagename: LP Client
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-lp-client.html 
indicator: both
---

# Type: ILPClient

**ILpClient**: (`service`: [`LpServices`](#enumeration-lpservices) \| `string`, `path`: `string`, `options`: [`ILpClientOptions`](https://www.npmjs.com/package/request-promise)) => `Promise`<`any`\>

## Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`LpServices`](#enumeration-lpservices) \| `string` |
| `path` | `string` |
| `options` | [`ILpClientOptions`](https://www.npmjs.com/package/request-promise) |

### Returns

`Promise`<`any`\>

___

## Related Enums

### Enumeration: LpServices

**Enumeration members:**

- **ACCOUNT\_CONFIG\_READ\_ONLY** = `"accountConfigReadOnly"`
- **ACCOUNT\_CONFIG\_READ\_WRITE** = `"accountConfigReadWrite"`
- **AGENT\_VEP** = `"agentVep"`
- **ASYNC\_MESSAGING** = `"asyncMessaging"`
- **ASYNC\_MESSAGING\_EN** = `"asyncMessagingEnt"`
- **AUDITLOG** = `"auditlog"`
- **ENG\_HIST\_DOMAIN** = `"engHistDomain"`
- **LE\_DATA\_REPORTING** = `"leDataReporting"`
- **MSDKGW** = `"msdkgw"`
- **MSG\_EWT\_API** = `"msgEwtAPI"`
- **MSG\_HIST** = `"msgHist"`
- **PUSHER** = `"pusher"`
- **RTBF** = `"rtbf"`
- **SMT** = `"smt"`
