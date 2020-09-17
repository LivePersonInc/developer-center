---
pagename: Writing a Transformation Specification
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: External Knowledge Bases
permalink: knowledge-base-external-knowledge-bases-writing-a-transformation-specification.html
indicator: both
---

### Introduction

The data schema used by your CMS differs from that used by LivePerson Knowledge Base, so mapping the content from the former to the latter is a required step in setting up the knowledge base. This involves defining a Jolt transformation specification to transform the data that's retrieved from the CMS. Jolt is an open-source, JSON-to-JSON transformation library.

If you’re using a popular CMS vendor (Salesforce or Zendesk), LivePerson provides a default, vendor-specific, Jolt specification. You’ll need to adjust the default specification accordingly if you’ve customized the CMS’ data schema. On the other hand, if you’re using a CMS vendor for which no default specification is available, you’ll need to write one from scratch. In either case, use the examples that follow as a guide.

Jolt provides several, out-of-the-box transforms that you can use when writing the specification; these are described [here](https://github.com/bazaarvoice/jolt#stock-transforms). The Shift transform in particular does most of the heavy work when it comes to the transform; it specifies how the input JSON should be “shifted around” to make the output JSON. All of the examples that follow use the Shift transform.

The Shift transform supports very simple to very complex data transformations, powered by wildcards: *, &, @, $, and #. The examples that follow cover what's needed for transformation to the LivePerson Knowledge Base article schema. To learn about more complex use cases, see the Jolt test samples [here](https://github.com/bazaarvoice/jolt/tree/master/jolt-core/src/test/resources/json/shiftr), which are documented by the Jolt team.

### Supported LivePerson attributes

See [here](knowledge-base-external-knowledge-bases-mapping-content-metadata.html#supported-liveperson-attributes) for the list of supported LivePerson attributes when content mapping.

### Reading the examples

**Terminology:** 

LHS = left-hand side = the input JSON tree<br>
RHS = right-hand side = the output JSON tree

### Examples - Map a single article's content (CMS KB with LivePerson AI)

#### Example 1

**Input JSON**
```JSON 
{
   "result": {
       "id": 360048237271,
       "url": "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json",
       "title": "How to Reset password",
       "label_names": [
           "Account"
       ],
       "body": "<p>Go to login page, and click on \"forgot password\" button below password field, and follow the instructions to receive the password reset email. </p>"
   }
}
```

**Transformation specification**
```JSON
[
  {
    "operation": "shift",
    "spec": {
      "result": {
        "id": "externalId",
        "title": "title",
        "body": "summary",
        "url": "contentURL",
        "label_names": "tags"
      }
    }
}]
```

**Transformed output**
```JSON
{
  "externalId" : 360048237271,
  "title" : "How to Reset password",
  "summary" : "<p>Go to login page, and click on \"forgot password\" button below password field, and follow the instructions to receive the password reset email. </p>",
  "contentURL" : "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json",
  "tags" : [ "Account" ]
}
```

#### Example 2

**Input JSON**
```JSON 
{
  "articleNumber": "000001000",
  "categoryGroups": [
    {
      "groupLabel": "All",
      "groupName": "All",
      "selectedCategories": [
        {
          "categoryLabel": "Account",
          "categoryName": "Account",
          "url": "/services/data/v38.0/support/dataCategoryGroups/All/dataCategories/Account?sObjectName=KnowledgeArticleVersion"
        }
      ]
    },
    {
      "groupLabel": "User",
      "groupName": "User",
      "selectedCategories": [
        {
          "categoryLabel": "Profile",
          "categoryName": "Profile",
          "url": "/services/data/v38.0/support/dataCategoryGroups/All/dataCategories/Account?sObjectName=KnowledgeArticleVersion"
        }
      ]
    }
  ],
  "createdDate": "2020-08-12T21:20:31Z",
  "id": "kA0050000004EA3CAM",
  "summary": "To reset password, click on the link provided below password field on the logon page.",
  "title": "How to reset password",
  "url": "/services/data/v38.0/support/knowledgeArticles/kA0050000004EA3CAM"
}
```

**Transformation specification**
```JSON
[
  {
    "operation": "shift",
    "spec": {
      "id": "externalId",
      "title": "title",
      "summary": "summary",
      "url": "contentURL",
      "categoryGroups": {
        "*": {
          "selectedCategories": {
            "*": {
			// using tags[] array 
              "categoryLabel": "tags[]"
            }
          }
        }
      }
    }
  }
]
```

In the above specification, in the output JSON’s tags attribute, “[ ]” is used to explicitly mention it as an array data type. If we don’t do this, if there is only one selected category, then "tags" is created as a string data type on the RHS due to categoryLabel being a string type. If the selected categories are more than one across all category groups, then mentioning "tags" as an array isn’t required, as the Shift transform automatically does the type casting to hold a list of strings. 

**Using the * wildcard:** In the transform operation, " * " considers all fields/keys matching “ * ” pattern at the current level on the LHS.

In the example above, we use “ * “ to consider all objects under the “categoryGroups” array. 

“ * “ can be used to match all fields/keys/indexes like in the example above. It can also be used to match part of the key on the LHS. For example, “ categor* ” could match keys like “categoryGroups”, “categories”.

**Transformed output**
```JSON
{
  "externalId" : "kA0050000004EA3CAM",
  "title" : "How to reset password",
  "summary" : "To reset password, click on the link provided below password field on the logon page.",
  "contentURL" : "/services/data/v38.0/support/knowledgeArticles/kA0050000004EA3CAM",
  "tags" : [ "Account", "Profile" ]
```

#### Example 3

**Input JSON**
```JSON 
{
  "result": [
    {
      "id": 360048237271,
      "url": "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json",
      "title": "How to Reset password",
      "label_names": [
        "Account"
      ],
      "body": "<p>Go to login page, and click on \"forgot password\" button below password field, and follow the instructions to receive the password reset email. </p>"
    }
  ]
}
```

**Transformation specification**
```JSON
[
  {
    "operation": "shift",
    "spec": {
      "result": {
        "0": {
          "id": "externalId",
          "title": "title",
          "body": "summary",
          "url": "contentURL",
          "label_names": "tags"
        }
      }
    }
}]
```

When fetching a single article, some CMS systems might return an array as per their contract. However, when mapping a single article’s content, the target schema should be an object. For this reason, in the example above, “0” index is used under the “result” array to consider only a single object on the RHS.

**Transformed output**
```JSON
{
  "externalId" : 360048237271,
  "title" : "How to Reset password",
  "summary" : "<p>Go to login page, and click on \"forgot password\" button below password field, and follow the instructions to receive the password reset email. </p>",
  "contentURL" : "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json",
  "tags" : [ "Account" ]
}
```

### Examples - Map articles' metadata (CMS KB with LivePerson AI)

#### Example 1

**Input JSON**
```JSON 
{
    "results": [
        {
            "id": 360048529551,
            "url": "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048529551-Account-Information.json",
            "title": "Account Information",
            "label_names": [
                "Info",
                "Account Information",
                "Information"
            ],
            "body": "<p>For account information, go to Settings-&gt;Account-&gt;Basic Information.</p>"
        },
        {
            "id": 360048237271,
            "url": "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json",
            "title": "How to Reset password",
            "label_names": [
                "Account"
            ],
            "body": "<p>Go to login page, and click on \"forgot password\" button below password field, and follow the instructions to receive the password reset email. </p>"
        }
    ]
}
```

**Transformation specification**
```JSON
[
  {
    "operation": "shift",
    "spec": {
      "results": {
        "*": {
          "id": "[&1].externalId",
          "title": "[&1].title",
          "label_names": "[&1].tags"
        }
      }
    }
  }
]
```

**Using the & wildcard:** Use the wildcard “&” if you want to use the key on the LHS as a key on the RHS. This wildcard has a canonical syntax “&(n,m)” for complex mappings:
* The first parameter tells the level to go up on the LHS from current node.
* The second parameter tells which part of the key (applicable when using “ * ” on LHS object keys) to use on the RHS.
 
The syntaxes below are equal, i.e., parameters/brackets can be ignored for simple mappings:<br>
& = &0 = &(0) = &(0,0)<br>
&1 = &(1) = &(1,0)

```JSON
    {
        "foo" : {
            "bar": {
                "baz":  // on RHS &0 = baz, &1 = bar, &2 = foo
            }
        }
     }
```

In the transformation spec farther above, we use the index of the "results" array (&1 = one level up from “title” means index of the "results" array) as the object's index on the RHS. “[ ]“ around “&1” is required as the output is an array.

On the LHS, the values “0” and “1” are resolved by “&1”, as we have two objects in the "results" array that are mapped to “[0]”, “[1]” on the RHS in the same order as the LHS.

**Transformed output**
```JSON
[ {
  "externalId" : 360048529551,
  "title" : "Account Information",
  "tags" : [ "Info", "Account Information", "Information" ]
}, {
  "externalId" : 360048237271,
  "title" : "How to Reset password",
  "tags" : [ "Account" ]
} ]
```

#### Example 2

**Input JSON** 
```JSON
{
  "results": [
    {
      "categoryGroups": [
        {
          "groupLabel": "All",
          "groupName": "All",
          "selectedCategories": [
            {
              "categoryLabel": "Account",
              "categoryName": "Account",
              "url": "/services/data/v42.0/support/dataCategoryGroups/All/dataCategories/Account?sObjectName=KnowledgeArticleVersion"
            }
          ]
        }
      ],
      "id": "kA0050000004F1HCAU",
      "summary": "Go to login page mentioned in the developer documentation, and enter your credentials.",
      "title": "How to Login",
      "url": "/services/data/v42.0/support/knowledgeArticles/kA0050000004F1HCAU"
    },
    {
      "categoryGroups": [
        {
          "groupLabel": "All",
          "groupName": "All",
          "selectedCategories": [
            {
              "categoryLabel": "Profile",
              "categoryName": "Profile",
              "url": "/services/data/v42.0/support/dataCategoryGroups/All/dataCategories/Account?sObjectName=KnowledgeArticleVersion"
            }
          ]
        }
      ],
      "id": "kA0050000004EA3CAM",
      "summary": "To reset password, click on the link provided below password field on the logon page.",
      "title": "How to reset password",
      "url": "/services/data/v42.0/support/knowledgeArticles/kA0050000004EA3CAM"
    }
  ]
}
```

**Transformation specification**
```JSON
[
  {
    "operation": "shift",
    "spec": {
      "results": {
        "*": {
          "id": "[&1].externalId",
          "title": "[&1].title",
          "categoryGroups": {
            "*": {
              "selectedCategories": {
                "*": {
                  "categoryLabel": "[&5].tags[]"
                }
              }
            }
          }
        }
      }
    }
  }
]
```

[&5].tags[ ] is used on the RHS because the “results” array index is five levels up from categoryLabel, i.e., categoryLabel -> selectedCategories index -> selectedCategories key ->  categoryGroups index -> categoryGroups key -> results index.

**Transformed output**
```JSON
[ {
  "externalId" : "kA0050000004F1HCAU",
  "title" : "How to Login",
  "tags" : [ "Account" ]
}, {
  "externalId" : "kA0050000004EA3CAM",
  "title" : "How to reset password",
  "tags" : [ "Profile" ]
} ]
```

### Examples - Map article suggestions/answers (CMS KB without LivePerson AI)

#### Example 1

**Input JSON**
```JSON 
{
  "results": [
    {
      "url": "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json",
      "title": "How to Reset password",
      "label_names": [
        "Profile"
      ],
      "body": "<p>Go to login page, and click on \"forgot password\" button below password field, and follow the instructions to receive the password reset email. </p>"
    },
    {
      "url": "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json",
      "title": "Account Information",
      "label_names": [
        "Account"
      ],
      "body": "<p>For account information, go to Settings-&gt;Account-&gt;Basic Information. </p>"
    }
  ]
}
```

**Transformation specification**
```JSON
[
  {
    "operation": "shift",
    "spec": {
      "results": {
        "*": {
          "title": "[&1].title",
          "label_names": "[&1].tags",
          "body": "[&1].summary",
          "url": "[&1].contentURL"
        }
      }
    }
  }
]
```

**Transformed output**
```JSON
[ {
  "title" : "How to Reset password",
  "tags" : [ "Profile" ],
  "summary" : "<p>Go to login page, and click on \"forgot password\" button below password field, and follow the instructions to receive the password reset email. </p>",
  "contentURL" : "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json"
}, {
  "title" : "Account Information",
  "tags" : [ "Account" ],
  "summary" : "<p>For account information, go to Settings-&gt;Account-&gt;Basic Information. </p>",
  "contentURL" : "https://livepersonkb.zendesk.com/api/v2/help_center/en-us/articles/360048237271-How-to-Reset-password.json"
} ]
```

#### Example 2

**Input JSON**
```JSON 
{
  "searchRecords": [
    {
      "attributes": {
        "type": "KnowledgeArticleVersion",
        "url": "/services/data/v42.0/sobjects/KnowledgeArticleVersion/ka0050000004EEFAA2"
      },
      "Title": "How to reset password",
      "Summary": "To reset password, click on the link provided below password field on the logon page.",
      "KnowledgeArticleId": "kA0050000004EA3CAM"
    },
    {
      "attributes": {
        "type": "KnowledgeArticleVersion",
        "url": "/services/data/v42.0/sobjects/KnowledgeArticleVersion/ka0050000004F5YAAU"
      },
      "Title": "How to Login",
      "Summary": "Go to login page mentioned in the developer documentation, and enter your credentials.",
      "KnowledgeArticleId": "kA0050000004F1HCAU"
    }
  ]
}
```

**Transformation specification**
```JSON
[
  {
    "operation": "shift",
    "spec": {
      "searchRecords": {
        "*": {
          "KnowledgeArticleId": "[&1].externalId",
          "Title": "[&1].title",
          "Summary": "[&1].summary",
          "attributes": {
            "url": "[&2].contentURL"
          }
        }
      }
    }
  }
]
```

“[&2].contentURL” is used on the RHS because the “searchRecords” array index is two levels up from “url”, i.e., url -> attributes -> searchRecords index.

**Transformed output**
```JSON
[ {
  "externalId" : "kA0050000004EA3CAM",
  "title" : "How to reset password",
  "summary" : "To reset password, click on the link provided below password field on the logon page.",
  "contentURL" : "/services/data/v42.0/sobjects/KnowledgeArticleVersion/ka0050000004EEFAA2"
}, {
  "externalId" : "kA0050000004F1HCAU",
  "title" : "How to Login",
  "summary" : "Go to login page mentioned in the developer documentation, and enter your credentials.",
  "contentURL" : "/services/data/v42.0/sobjects/KnowledgeArticleVersion/ka0050000004F5YAAU"
} ]
```
