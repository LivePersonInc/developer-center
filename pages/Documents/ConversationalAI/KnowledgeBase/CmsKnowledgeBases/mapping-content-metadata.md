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

When you add a CMS knowledge base, one important step in the process is to map the external CMS' article data model to LivePerson Knowledge Base. This is done by providing a Jolt transformation specification that can be used to "transform" the response that's returned from the API call into the LivePerson Knowledge Base article schema.

LivePerson provides default Jolt transformation specifications for a few, popular CMS vendors, namely, Salesforce and Zendesk. If you’ve customized the CMS’ data schema, you’ll need to adjust the default specification accordingly. If you use another CMS vendor, you'll need to write the specification from scratch.

### Supported LivePerson attributes

When you [add a CMS knowledge base with LivePerson AI](knowledge-base-cms-knowledge-bases-cms-kbs-with-liveperson-ai.html#add-a-cms-kb-with-liveperson-ai), one setup step involves configuring the request to fetch the articles' metadata. This includes defining the transformation specification for the data that is returned. The following LivePerson attributes are supported:

| LivePerson Attribute | Description | Mandatory? |
| --- | --- | --- |
| externalId | A String; a unique ID assigned to the article | yes |
| title | The article title. This should be a complete sentence or question that the user might ask. | yes |
| tags | A list of relevant keywords. These highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences. | no |
| category | Assigning a category lets you filter and find articles based on categories in the Knowledge Base application. | no |

When you [add a CMS knowledge base with LivePerson AI](knowledge-base-cms-knowledge-bases-cms-kbs-with-liveperson-ai.html#add-a-cms-kb-with-liveperson-ai), a second setup step involves configuring the request for the on-demand retrieval of a single article by its unique identifier. This includes defining the transformation specification for the data that is returned. The following LivePerson attributes are supported:

| LivePerson Attribute | Description | Mandatory? |
| --- | --- | --- |
| externalId | A String; a unique ID assigned to the article | yes |
| title | The article title. This should be a complete sentence or question that the user might ask. | yes |
| tags | A list of relevant keywords. These highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences. | no |
| category | Assigning a category lets you filter and find articles based on categories in the Knowledge Base application. | no |
| summary | A short response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels. | no, but see note below |
| detail | A longer message to the user. For messaging, it's recommended that you keep the responses as brief as possible. | no, but see note below |
| contentURL | The URL of a hyperlink.  | no, but see note below |
| imageURL | The URL of an image. | no, but see note below |
| audioURL | The URL of an audio file. | no, but see note below |
| videoURL | The URL of a video file. | no, but see note below |

{: .important}
One of summary, detail, contentURL, imageURL, audioURL, or videoURL is mandatory.

When you [add a CMS knowledge base without LivePerson AI](knowledge-base-cms-knowledge-bases-cms-kbs-without-liveperson-ai.html#add-a-cms-kb-without-liveperson-ai), one setup step involves configuring the request for the on-demand content retrieval using your CMS’ query and answer API. This includes defining the transformation specification for the articles that are returned. The following LivePerson attributes are supported:

| LivePerson Attribute | Description | Mandatory? |
| --- | --- | --- |
| externalId | see above | no |
| title | see above | yes |
| tags | see above | no |
| category | see above | no |
| summary | see above | no, but see note below |
| detail | see above | no, but see note below |
| contentURL | see above | no, but see note below |
| imageURL | see above | no, but see note below |
| audioURL | see above | no, but see note below |
| videoURL | see above | no, but see note below |

{: .important}
One of summary, detail, contentURL, imageURL, audioURL, or videoURL is mandatory.

### Map content metadata

1. In the Add Knowledge Base window, click **Map Content Metadata** if you haven't already done so. 
2. For **Content Provider**, select the name of your CMS provider. If you don't see your provider's name listed, select "Others," and then enter the name.
    
    If you were able to select your CMS provider's name, this step populates the **Transformation Spec** editor with a vendor-specific, Jolt transformation specification that's designed for the given request (API call). This is a pre-built specification for a default data structure. You can use the specification as is. Alternatively, if you've customized the CMS' data model (e.g., you've added a custom attribute), you can use it as a starter template.

    If you weren't able to select your CMS provider's name, a default specification isn't available. You'll need to write the specification from scratch.

3. If needed, adjust or write the Jolt transformation spec using the examples and guidance [here](knowledge-base-cms-knowledge-bases-writing-a-transformation-specification.html). 

4. Click **Test Spec**.

    This step verifies that the specification uses well-formed JSON.

    If you were able to select your CMS provider's name in the **Content Provider** field, the **Sample Input** editor contains some default input in JSON format.

5. In the **Sample Input** editor:

    * If the editor has default input, you can use it as is or replace it with your own, e.g., with the CMS' response payload.
    * If the editor is empty, take your CMS' response payload and paste it here.

6. Click **Validate Spec**.
    
    This step verifies that the specification meets all LivePerson requirements. For example, if you've omitted a mandatory field, you'll see an error. If you've included a field that's not supported, you'll see a warning.

    This step also populates a third, read-only panel that illustrates the output when the sample input JSON is transformed using the specification. Behind the scenes, the output is JSON too. However, it's presented in a friendlier, record format, so it's faster and easier to evaluate whether the specification is working as you expect.
