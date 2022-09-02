---
pagename: GDPR Util
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-gdpr-util.html 
indicator: both
---

# Interface: IGDPRUtil

GDPR related functionality

## Table of contents

### Methods

- [replaceConversationFiles](#replaceconversationfiles)

## Methods

### replaceConversationFiles

▸ **replaceConversationFiles**(`conversation`, `credentials`, `shouldReplace?`, `replacementFile?`): `Promise`<[`FilesReplaced`](#type-filesreplaced)\>

**Warning: This will remove all files permanently! Ask your account manager for permissions.**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conversation` | `any` | Conversation for which the files should be replaced. |
| `credentials` | [`IObjectStoreCredentials`](#interface-iobjectstorecredentials) | Credentials for the object store where files are stored. |
| `shouldReplace?` | [`IShouldReplace`](#type-ishouldreplace) | Matcher function that can be used to filter files. |
| `replacementFile?` | [`IReplacementFile`](#interface-ireplacementfile) | File that is used to replace current files. By default a 1x1 black png. |

#### Returns

`Promise`<[`FilesReplaced`](#type-filesreplaced)\>

Promise of files that have been replaced.

___

## Related Interfaces / Types

### Interface: IObjectStoreCredentials

**Properties:**

- **username**: `string`
- **password**: `string`

### Interface: IReplacementFile

**Properties:**

- **contentType**: `string`
- **body**: [`Buffer`](https://nodejs.org/api/buffer.html)

### Type: IShouldReplace

**IShouldReplace**: (`path`: `string`) => `boolean`

### Type: FilesReplaced

**FilesReplaced**: `string`[]
