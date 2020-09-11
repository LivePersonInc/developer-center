---
pagename: Mapping Content Metadata
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: CMS Knowledge Bases
permalink: knowledge-base-cms-knowledge-bases-mapping-content-metadata.html
indicator: both
---

### Introduction

When you add a CMS knowledge base, one important step in the process is to map the external CMS' article data model to LivePerson Knowledge Base. This is done by providing a Jolt transformation specification that can be used to "transform" the response that's returned from the API call to the LivePerson Knowledge Base article(s) schema.

LivePerson provides *default* Jolt transformation specifications for a few, popular CMS vendors, namely, Salesforce and Zendesk. If you’ve customized your CMS’ data schema, you’ll need to adjust the default specification accordingly. If you use another CMS vendor, you can write the specification using the guidance and examples [here](knowledge-base-cms-knowledge-bases-writing-a-transformation-specification.html).

### Supported LivePerson attributes

When you [add a CMS knowledge base with LivePerson AI](knowledge-base-cms-knowledge-bases-cms-kbs-with-liveperson-ai.html#add-a-cms-kb-with-liveperson-ai), one setup step involves configuring the request to fetch the articles' metadata. This includes defining the transformation specification for the data that is returned. The following LivePerson attributes are supported:

| LivePerson Attribute | Mandatory? |
| --- | --- |
| externalId | yes |
| title | yes |
| tags | no |
| category | no |

When you [add a CMS knowledge base with LivePerson AI](knowledge-base-cms-knowledge-bases-cms-kbs-with-liveperson-ai.html#add-a-cms-kb-with-liveperson-ai), a second setup step involves configuring the request for the on-demand retrieval of a single article by its unique identifier. This includes defining the transformation specification for the data that is returned. The following LivePerson attributes are supported:

| LivePerson Attribute | Mandatory? |
| --- | --- |
| externalId | yes |
| title | yes |
| tags | no |
| category | no |
| summary | no, but see note below |
| detail | no, but see note below |
| contentURL | no, but see note below |
| imageURL | no, but see note below |
| audioURL | no, but see note below |
| videoURL | no, but see note below |

{: .important}
One of summary, detail, contentURL, imageURL, audioURL, or videoURL is mandatory.

When you [add a CMS knowledge base without LivePerson AI](knowledge-base-cms-knowledge-bases-cms-kbs-without-liveperson-ai.html#add-a-cms-kb-without-liveperson-ai), one setup step involves configuring the request for the on-demand content retrieval using your CMS’ query and answer API. This includes defining the transformation specification for the article suggestions/answers that are returned. The following LivePerson attributes are supported:

| LivePerson Attribute | Mandatory? |
| --- | --- |
| externalId | no |
| title | yes |
| tags | no |
| category | no |
| summary | no, but see note below |
| detail | no, but see note below |
| contentURL | no, but see note below |
| imageURL | no, but see note below |
| audioURL | no, but see note below |
| videoURL | no, but see note below |

{: .important}
One of summary, detail, contentURL, imageURL, audioURL, or videoURL is mandatory.

### Map content metadata

1. In the Add Knowledge Base window, click **Map Content Metadata** if you haven't already done so. 
2. For **Content Provider**, select the name of your CMS provider. If you don't see your provider's name listed, select "Others," and then enter the name.
    
    If you were able to select your CMS provider's name, this step populates the **Transformation Spec** editor with a vendor-specific, Jolt transformation specification that's designed for the given request (API call). This is a pre-built specification for a default data structure. You can use the specification as is. Alternatively, if you've customized your CMS' data model (e.g., you've added a custom attribute), you can use it as a starter template.

    If your CMS provider's name wasn't listed, no default specification is provided. You'll need to write the specification from scratch.

3. Adjust or write the Jolt transformation spec if needed, using the examples and guidance [here](knowledge-base-cms-knowledge-bases-writing-a-transformation-specification.html). 

4. Click **Test Spec**.

    This step verifies that the specification uses well-formed JSON.

    If you were able to select your CMS provider's name in the **Content Provider** field, the **Sample Input** editor contains some default input in JSON format.

5. In the **Sample Input** editor:

    * If the editor is empty, take your CMS' response payload and paste it here.
    * If the editor has some default, sample input, you can use it as is or replace it with your own.

6. Click **Validate Spec**.
    
    This step verifies that the specification meets all LivePerson requirements. For example, if you've omitted a mandatory field, you'll see an error. If you've included a field that's not supported, you'll see a warning.

    This step also populates a third, read-only panel that illustrates the output when the sample input JSON is transformed using the specification. Behind the scenes, the output is JSON too. However, it's presented in a friendlier, record format, so it's faster and easier to evaluate whether the specification is working as you expect.

7. If the transformation isn't working as you expect, adjust the specification and repeat this process.
