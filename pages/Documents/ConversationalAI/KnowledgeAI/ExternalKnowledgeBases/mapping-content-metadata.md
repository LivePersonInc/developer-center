---
pagename: Mapping Content Metadata
redirect_from:
    - knowledge-base-external-knowledge-bases-mapping-content-metadata.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: External Knowledge Bases
permalink: knowledgeai-external-knowledge-bases-mapping-content-metadata.html
indicator: both
---

### Introduction

When you are adding an external knowledge base, there are a few points in the process where you need to provide a Jolt transformation spec that can be used to "transform" the response returned from the given request into the LivePerson KnowledgeAI article schema. This is necessary to map the external CMS' article data model to LivePerson KnowledgeAI.

If you were able to select your CMS provider from the **Content Provider** list, a default spec is available and provided at these points:

<img style="width:750px" src="img/ConvoBuilder/kb_cms_map_metadata_5.png" alt="An example of a default spec provided in the Transformation Spec field">

The default spec is pre-built for a default data structure. You can use the spec as is. Alternatively, if you've customized the CMS' data model (e.g., you've added a custom attribute), you can use it as a starter template.

If you weren't able to select your CMS provider from the **Content Provider** list, you'll need to write the spec from scratch, as no default spec is provided at these points:

<img style="width:750px" src="img/ConvoBuilder/kb_cms_map_metadata_6.png" alt="An example of no default spec provided in the Transformation Spec field">

### Supported LivePerson attributes

When [adding an external knowledge base with LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html#add-an-external-kb-with-liveperson-ai), one step involves configuring the request to fetch the articles' metadata. This includes defining the transformation spec for the data that's returned. The following LivePerson attributes are supported:

| LivePerson Attribute | Description | Mandatory? |
| --- | --- | --- |
| externalId | A String; a unique ID assigned to the article | yes |
| title | The article title. This should be a complete sentence or question that the user might ask. | yes |
| tags | A list of relevant keywords. These highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences. | no |
| category | Assigning a category lets you filter and find articles based on categories in the KnowledgeAI application. | no |

When [adding an external knowledge base with LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html#add-an-external-kb-with-liveperson-ai), a second step involves configuring the request for the on-demand retrieval of a single article by its unique identifier. This includes defining the transformation spec for the data that's returned. The following LivePerson attributes are supported:

| LivePerson Attribute | Description | Mandatory? |
| --- | --- | --- |
| externalId | A String; a unique ID assigned to the article | yes |
| title | The article title. This should be a complete sentence or question that the user might ask. | yes |
| tags | A list of relevant keywords. These highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences. | no |
| category | Assigning a category lets you filter and find articles based on categories in the KnowledgeAI application. | no |
| summary | A short response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels. | no, but see note below |
| detail | A longer message to the user. For messaging, it's recommended that you keep the responses as brief as possible. | no, but see note below |
| contentURL | The URL of a hyperlink.  | no, but see note below |
| imageURL | The URL of an image. | no, but see note below |
| audioURL | The URL of an audio file. | no, but see note below |
| videoURL | The URL of a video file. | no, but see note below |

{: .attn-note}
One of summary, detail, contentURL, imageURL, audioURL, or videoURL is mandatory.

**Tip:** For information on how to send article content to consumers, see [this topic](knowledgeai-sending-content-to-consumers-and-agents.html).

When [adding an external knowledge base without LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-without-liveperson-ai.html#add-an-external-kb-without-liveperson-ai), one step involves configuring the request for the on-demand content retrieval using your CMS’ query and answer API. This includes defining the transformation spec for the articles that are returned. The following LivePerson attributes are supported:

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

{: .attn-note}
One of summary, detail, contentURL, imageURL, audioURL, or videoURL is mandatory.

### Map content metadata

1. If you need to adjust or write the Jolt transformation spec, click **Customize** in the Add Knowledge Base window.

    <img style="width:750px" src="img/ConvoBuilder/kb_cms_map_metadata_7.png" alt="The Customize link to click when you want to adjust or write the Jolt transformation spec">

2. In the **Transformation Spec** editor (left panel), adjust or write the Jolt transformation spec using the [examples and guidance](knowledgeai-external-knowledge-bases-writing-a-transformation-specification.html).

    <img style="width:800px" src="img/ConvoBuilder/kb_cms_map_metadata_1.png" alt="An example of a spec in the Transformation Spec editor">

3. In the **Sample Data** editor (middle panel):

    * If the editor has default input, you can use it as is or replace it with your own, e.g., with the CMS' response payload.
    * If the editor is empty, take your CMS' response payload and paste it in.
    <br>
    <br>
4. Click **Validate Spec**.

    This verifies that the spec uses well-formed JSON and that the spec and sample input meet all LivePerson requirements. For example, if you've omitted a mandatory field, you'll see an error. If you've included a field that's not supported, you'll see a warning.

    This step also populates the third, read-only **Review Output** panel. This panel illustrates the output when the sample input JSON is transformed using the spec. Behind the scenes, the output is JSON too. However, it's presented in a friendlier, record format, so it's faster and easier to evaluate whether the spec is working as you expect.

    <img style="width:450px" src="img/ConvoBuilder/kb_cms_map_metadata_4.png" alt="An example of the output to review based on the transformation spec provided">

5. When you have finished with the spec, click **Save**.
