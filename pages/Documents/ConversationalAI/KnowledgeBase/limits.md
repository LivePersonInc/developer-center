---
pagename: Limits
redirect_from:
    - knowledge-base-internal-knowledge-bases-limits.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-limits.html
indicator: both
---

As you add and manage articles, there are a number of validation checks that are performed by the system to enforce limits and thereby promote best practices. This helps to ensure your content is suitable for messages, which should be short.

{: .important}
As of March 2, 2021, the limits have changed and are as described below. They are enforced by the application.


### Knowledge base-level limits
Knowlege base-level limits vary depending on the NLU engine that’s in use.

| Type of knowledge base | NLU engine | Number of articles allowed per knowledge base |
| --- | --- | --- |
| Internal, with Domain intents | LivePerson or third-party | 1,000 |
| Internal, with Domain intents | LivePerson (Legacy) | 250 |
| Internal, with Knowledge Base intents | LivePerson (Legacy) | 250 |

### Article-level limits for internal knowledge bases

If you’re using an [internal knowledge base](knowledge-base-internal-knowledge-bases-introduction.html), the following limits apply.

| Attribute or setting | Limit |
| --- | --- |
| Title | 128 characters |
| Summary | 300 characters | 
| Detail | 1,000 characters if no HTML is used, or 320 characters if HTML is used |
| Intent qualifiers | 40 in number<br><br>*Not applicable when the knowledge base uses Domain intents* |
| Positive learnings | 10 in number |
| Negative learnings | 10 in number |
| Tags | 10 in number<br>length of each tag: 25 characters |
| Categories | length of each tag: 25 characters |
| Content links (content, audio, image and video) | 1,000 characters |