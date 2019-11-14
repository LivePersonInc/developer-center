---
pagename: Knowledge Bases
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-knowledge-bases.html
indicator: both
---

### Add a knowledge base

1. In the Dashboard, click **Add Knowledge Base** in the upper-right corner.
2. Specify the following:
    * **Data source name**: Enter a name for the knowledge base.
    * **Data source type**: Select "Knowledge Base."
    * **Language**: Select the language of the knowledge base. The default value is English. For details, see [here](knowledge-base-overview.html#languages) in the overview.
    * **Import articles from**: You can add articles manually, but if you have them in an external file, you can import them now. Select either "CSV" or "Google Sheet," and use the controls provided to upload the file's contents. For details on creating an import file, see [here](knowledge-base-knowledge-bases.html#create-an-import-file) below.
    * **Intent Association**: This field specifies where the intents reside, either in the knowledge base itself or in a domain in Intent Builder. Select either "Knowledge Base Intents" or "Domain Intents." If you select "Domain Intents," also select the domain from the list that appears. For a more in-depth explanation of these, see [here](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents) in the overview.
3. Click **Add**.

    This creates the knowledge base, and takes you to its search view. In this default view, you can search the title, intent qualifiers and content of articles.

### Create an import file

If you want to import a set of articles into a knowledge base when you add the knowledge base, you'll need to create the import file.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_importFile.png">

**To create an import file**

1. Create a new CSV file or Google sheet.
2. Add the column headers listed below; use the order listed.
3. Fill out the rows with your article data. It's recommended that you complete at least the first 6 columns: id, tags, title, summary, alternates, and detail.

#### Column headers

| Column header name | Notes |
|--------------------|-------|
| id | An integer; usually just the row index, e.g., 1, 2, 3. |
| tags | A comma-separated list of relevant terms. |
| title | The article title. This should be a complete sentence or question that the user might ask. |
| summary | A short answer that's 80 characters or less. |
| alternates | In the UI, these are called "intent qualifiers." |
| detail | A long answer that's 350 characters or less. |
| content_url | |
| image_url | |
| audio_url | |
| video_url | |
| followupQuestion | |
| quickReplies | |
| inputContext | |
| contextAlternates | In the UI, these are called "context intents." |
| outputContext | |
| category | |
| section | |
| positiveLearnings | |
| negativeLearnings | |
| intentName | |

### Sync with a Google sheet

Intro to be added

**To sync a knowledge base with a Google sheet**
1. Open the knowledge base, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> (Knowledge Base Menu icon) in the lower-right corner.
2. In the Settings panel, click **KB Settings**.
3. Click **More Options**, scroll down to the **Sync Google Sheet Data Source** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_syncGoogleSheet.png"> (Refresh icon).

### Refresh the intents

Intro to be added

**To refresh the intents in a knowledge base**
1. Open the knowledge base, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> (Knowledge Base Menu icon) in the lower-right corner.
2. In the Settings panel, click **KB Settings**.
3. Click **More Options**, scroll down to the **Refresh Intents** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_refresh.png"> (Refresh icon).

### Download a knowledge base 

Export of a knowledge base creates a CSV file.

You might need to download a knowledge base for a few reasons:

* a
* b
* c

**To download a knowledge base**
1. Open the knowledge base, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> (Knowledge Base Menu icon) in the lower-right corner.
2. In the Settings panel, click **KB Settings**.
3. Click **More Options**, scroll down to the **Download Knowledge Base** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_download.png"> (Download icon).
4. Follow the browser prompts to access and save the CSV file to a location of your choice.

### Delete a knowledge base

Deleting a knowledge base is a non-recoverable action, so be certain about doing so before taking this action.

**To delete a knowledge base**
1. Open the knowledge base, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> (Knowledge Base Menu icon) in the lower-right corner.
2. In the Settings panel, click **KB Settings**.
3. Click **More Options**, scroll down to the **Delete Knowledge Base** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_delete.png"> (Delete icon).
4. In the confirmation dialog, click **Yes**.