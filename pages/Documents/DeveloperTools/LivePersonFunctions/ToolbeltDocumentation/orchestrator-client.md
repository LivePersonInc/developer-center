---
pagename: Orchestrator Client
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-orchestrator-client.html 
indicator: both
---

# Interface: IOrchestratorClient

## Table of contents

### Methods

- [invoke](#invoke)

## Methods

### invoke

▸ **invoke**(`invocations`, `deadline`, `options?`): `Promise`<[`IOrchestratorResponse`](#interface-iorchestratorrespons)[]\>

**`throws`** if "errorStrategy" option is "ExitOnError" and there is an invocation error, it will cancel other requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `invocations` | [`IOrchestratorInvocation`](#interface-iorchestratorinvocation)[] | contains the UUIDs of the lambdas which will be invoked with their respective information |
| `deadline` | `number` | provides the maximum time the orchestrator function is waiting for an answer (max 25s) |
| `options?` | [`IOrchestratorOptions`](#interface-iorchestratoroptions) | Orchestrator invoke options: timeout, parallel invocation and error strategy |

#### Returns

`Promise`<[`IOrchestratorResponse`](#interface-iorchestratorresponse)[]\>

___

## Related Interfaces / Types / Enums

### Interface: IOrchestratorResponse

**Properties:**

• **body**: `unknown`
• **headers**: \[name: `string`\]: `string`
• **statusCode**: `number`
• **uuid**: `string`
• `Optional` **error**: [`Error`](#type-error)

### Interface: IOrchestratorOptions

**Properties:**

• `Optional` **errorStrategy**: [`ErrorStrategy`](#enumeration-errorstrategy)

Defines the strategy to follow in case of error.

• `Optional` **invokeParallel**: `boolean`

If true, it will execute all invocations in parallel

• **timeout**: `number`

Request timeout for each invocation

### Interface: IOrchestratorInvocation

• **headers**: \[name: `string`\]: `string`

• **payload**: `unknown`

• **uuid**: `string`

• `Optional` **retries**: `number`

Default 3

• `Optional` **retryFunction**: [`IRetryFunction`](#type-iretryfunction)

This function is used to determine if a received status code/error should be retried or aborted.
The default tactic is to retry on 429 and 5xx. This excludes retries on errors raised by the function.

### Type: Error

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |

### Type: IRetryFunction

**IRetryFunction**: (`statusCode`: `number`, `error`: `unknown`) => `boolean`

### Enumeration: ErrorStrategy

**Enumeration members:**

- **CONTINUE\_ON\_ERROR** = `"ContinueOnError"`
- **EXIT\_ON\_ERROR** = `"ExitOnError"`
