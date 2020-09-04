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

When you add a CMS knowledge base, one important step in the process is to map the CMS' article data model to LivePerson Knowledge Base. This is done by providing a Jolt transformation spec that will be used to transform the response returned from the API call.

LivePerson provides default Jolt transformation specs for a few popular CMS vendors, namely, Salesforce and Zendesk. If you use another CMS vendor, you can write the spec using the guidance and examples farther below.

### Map content metadata (popular CMS vendors)

1. In the Add Knowledge Base window, click **Map Content Metadata** if you haven't already done so. 
2. For **Content Provider**, select the name of your CMS provider.
    
    This populates the **Transformation Spec** editor with a vendor-specific Jolt transformation spec that transforms the CMS' data model to LivePerson Knowledge Base's data model. This is a pre-built spec for a default data structure, which you can use as is or as starter template.

3. If you've customized your CMS's data model (e.g., you've added a custom attribute), use the editor to modify the transform spec accordingly.

4. Click **Validate Spec**.
    
    This populates the **Sample Input** editor with some default input in JSON format. 

5. You can keep the default sample input. Alternatively, use the editor to replace it with your own. For example, to see one of your own records, you can take the payload from your API and paste it here.

6. Click **Preview**.
    
    This populates a third, read-only panel that illustrates the output when the sample input is transformed using the spec. Behind the scenes, this is JSON. However, it's presented in a record format, so it's quicker and easier to evaluate whether the transformation is as you expect.

### Errors

|Code | Error | Applies to... | Description |
| --- | --- | --- | --- |
| | "Invalid input transformation spec" | All CMS knowledge bases | The Jolt transformation spec is invalid. |
| | "Invalid article Json" | All CMS knowledge bases | The JSON for the sample input is invalid. |
| | "Mandatory field 'title' is missing" | All CMS knowledge bases | The article's "title" is not mapped in the Jolt transformation spec. This is a mandatory field in every spec. |
| | "One of the mandatory content attribute(contentUrl/audioUrl/imageUrl/videoUrl/summary/details) is missing in the transformed article" | All CMS knowledge bases | In the spec for fetching article metadata (CMS knowledge base with AI) or in the spec for fetching article suggestions (CMS knowledge base without AI), at least one of these listed attributes must be present, but at least one is not. | 
| | "Mandatory field 'externalId' is missing" | CMS knowledge bases without AI | The article's "externalId" is not mapped in the Jolt transformation spec. This is a mandatory field in the spec. |

### Warnings

| Code | Warning | Applies to... | Description |
| --- | --- | --- | --- |
| | "Unsupported content attributes mapped to transformed article" | CMS knowledge bases with AI | In the spec for fetching article metadata, unsupported attributes are included. These are ignored. |

### Map content metadata (other vendors)

1. In the Add Knowledge Base window, click **Map Content Metadata** if you haven't already done so. 
2. For **Content Provider**, select "Other," and enter the name of your CMS provider.
3. In the **Transformation Spec** editor, enter the Jolt spec.
4. Click **Validate Spec**.

### Write a Jolt transformation spec

to be added