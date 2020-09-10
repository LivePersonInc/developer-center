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

When you add a CMS knowledge base, one important step in the process is to map the external CMS' article data model to LivePerson Knowledge Base. This is done by providing a Jolt transformation specification that can be used to "transform" the response that's returned from the API call to the CMS.

LivePerson provides *default* Jolt transformation specifications for a few, popular CMS vendors, namely, Salesforce and Zendesk. If you use one of these vendors, you can use the default specification as long as you haven't customized the CMS' data schema. If you use another CMS vendor, you can write the specification using the guidance and examples [here](knowledge-base-cms-knowledge-bases-writing-a-jolt-specification.html).

### Attributes supported when content mapping

When you [add a CMS knowledge base with LivePerson AI](knowledge-base-cms-knowledge-bases-cms-kbs-with-liveperson-ai.html#add-a-cms-kb-with-liveperson-ai), one setup step involves configuring the request to fetch the articles' metadata. This includes defining the transformation specification for the data that is returned. The following LivePerson attributes are supported:

| Attribute | Mandatory? |
| --- | --- |
| externalId | yes |
| title | yes |
| tags | no |
| category | no |

When you [add a CMS knowledge base with LivePerson AI](knowledge-base-cms-knowledge-bases-cms-kbs-with-liveperson-ai.html#add-a-cms-kb-with-liveperson-ai), a second setup step involves configuring the request for the on-demand retrieval of a single article by its unique identifier. This includes defining the transformation specification for the data that is returned. The following LivePerson attributes are supported:

| Attribute | Mandatory? |
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

| Attribute | Mandatory? |
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

### Map content metadata (popular CMS vendors)

1. In the Add Knowledge Base window, click **Map Content Metadata** if you haven't already done so. 
2. For **Content Provider**, select the name of your CMS provider.
    
    This populates the **Transformation Spec** editor with a vendor-specific, Jolt transformation spec that's designed for the given request (API call). This is a pre-built Jolt specification for a default data structure. You can use the specification as is or as a starter template.

3. If you've customized your CMS's data model (e.g., you've added a custom attribute), use the editor to modify the specification accordingly. For help with this, see [here](knowledge-base-cms-knowledge-bases-writing-a-jolt-specification.html).

4. Click **Test Spec**.

    This step verifies that the specification uses well-formed JSON.

    The **Sample Input** editor contains some default input in JSON format.

5. You can choose to use the default, sample input, or you can replace it with your own. For example, to see one of your own records, take the payload returned from the API call and paste it here.

6. Click **Validate Spec**.
    
    This step verifies that the specification meets all LivePerson requirements. For example, if you've omitted a required field, you'll see an error. If you've included a field that's not supported, you'll see a warning.

    This step also populates a third, read-only panel that illustrates the output when the sample input JSON is transformed using the specification. Behind the scenes, the output is JSON too. However, it's presented in a friendlier, record format, so it's faster and easier to evaluate whether the specification is working as you expect.

### Map content metadata (other vendors)

1. In the Add Knowledge Base window, click **Map Content Metadata** if you haven't already done so. 
2. For **Content Provider**, select "Others," and enter the name of your CMS provider.
3. In the **Transformation Spec** editor, enter the Jolt specification.
4. Click **Test Spec**.

