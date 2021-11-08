---
pagename: Beta - Shortening Long-Form Content
redirect_from:
    - knowledge-base-external-knowledge-bases-beta-shortening-long-form-content.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: External Knowledge Bases
permalink: knowledgeai-external-knowledge-bases-beta-shortening-long-form-content.html
indicator: both
---

{: .important}
This topic discusses an experimental feature in Beta release. It’s applicable if you’re using an [external knowledge base with LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html), and you need a solution for shortening your content so that it’s suitable for conversational messaging.

Conversational messaging works best with content that’s as brief as possible. Therefore, LivePerson recommends that, when possible, you take one of the following approaches with your external CMS:

* For any content that you want to serve over messaging, edit it to be as short as possible.  The “summary” field should contain a brief summary that fits within a single messaging bubble (300 characters or less). The “details” field should contain slightly longer content (5,000 characters or less) that fits within a short sequence of messaging bubbles.
* Add a custom field to your CMS to support this content variant for messaging. Map this custom field to the LivePerson schema (to our “summary” or “detail” fields in the transformation spec), so it can be used instead. 

Sometimes, however, these approaches aren’t possible. For example, you might be using your long-form content to support a web site, so you need to leave your CMS content as is. You might also need to leave your CMS schema unchanged. In cases like these, LivePerson offers a solution that automates some of the work of readying your content for conversational messaging:

1. You identify the CMS content that you want to use.
2. The content is propagated to the knowledge base, *automatically shortened and cleaned up*, and exposed in a dedicated field in the KnowledgeAI UI, in read-only form.

    {: .important}
    Step 2 only happens if the content has HTML tags or is more than 1,000 characters, i.e., if the content warrants shortening or clean-up.

3. You manually apply (copy/paste) the transformed content to editable **Summary** and **Detail** fields within the knowledge base, as desired.

To set up and use this approach, follow the workflow described below.

### Adding the external knowledge base
In Step 5 when you [add the knowledge base](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html#add-an-external-kb-with-liveperson-ai), you define the request to fetch your content’s metadata.

To use this solution, *augment the request* so that each returned article also contains the content (summary, detail, etc.) that you want to send to the consumer. Then, in the transformation spec that you provide, map this content to an attribute named “messageReadyContent,” which is an optional attribute in the LivePerson KnowledgeAI schema.

When the knowledge base is added, the optional attribute is used to populate a **Message Ready Content** field in the UI when appropriate. This read-only field displays your content, which has been automatically shortened and cleaned up.

<img style="width:800px" src="img/ConvoBuilder/kb_cms_long_form1.png">

These are the shortening and clean-up rules that are applied:

* If the content doesn’t include HTML tags, it’s shortened to less than or equal to 1,000 characters, making sure the final sentence always ends with punctuation.
* If the content includes HTML tags, first, the unsupported HTML tags are removed. Then, if the length is greater than 320 characters (with the [supported HTML](knowledgeai-common-settings-tasks.html#format-text-in-an-article) tags included), all HTML tags are removed. If the resulting plain text length is more than 1,000 characters, it’s then shortened to less than or equal to 1,000 characters, making sure the final sentence always ends with punctuation. 

### Using the message-ready content

With the content that you intend to use now message-ready, you can quickly copy and paste it into the **Summary** and **Detail** field within an article as desired. Initially, the **Summary** and **Detail** fields are empty. This indicates that the message-ready content has not been applied yet.

<img style="width:800px" src="img/ConvoBuilder/kb_cms_long_form2.png">

**Please note:**

* Use of the message-ready content within an article is an optional step.
* Document which articles you update within your CMS. Also document which articles in the knowledge base you manually update with the message-ready content.

    A sync of the knowledge base updates (only) the article’s title, external ID, and read-only message-ready content. You will need to manually re-apply the updated, message-ready content to the Summary and Detail fields based on your understanding of 1) what has changed within the CMS and 2) which articles within the knowledge base are using the message-ready content.

#### Article-level limits
To promote best practices, the following limits are enforced by the application:

| Attribute | Limit |
| --- | --- |
| Summary | 300 characters |
| Detail | 5,000 characters<br><br>If you include HTML markup, take care to test it and ensure it doesn’t break when the content is sent to the consumer. |

### The runtime behavior

If you apply the message-ready content to the **Summary** or **Detail** field within an article in the knowledge base, then, at runtime, this content is retrieved and used. A fetch of the content from the CMS is not performed.
