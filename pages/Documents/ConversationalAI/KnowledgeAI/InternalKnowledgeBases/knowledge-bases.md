---
pagename: Knowledge Bases
redirect_from:
    - knowledge-base-knowledge-bases.html
    - knowledge-base-internal-knowledge-bases-knowledge-bases.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: Internal Knowledge Bases
permalink: knowledgeai-internal-knowledge-bases-knowledge-bases.html
indicator: both
---

### Add an internal knowledge base

1. Access the KnowledgeAI application as described [here](knowledgeai-overview.html#access-knowledgeai).
2. Click **Add Knowledge Base** in the upper-right corner.
3. On the **AI Enabled** tab of the window that appears, select **Internal Knowledge Base**.
4. Specify the following:
    * **Knowledge Base Name**: Enter a display name for the knowledge base.
    * **Import articles from**: You can add articles manually, but if you have them in an external file, you can import them now. Select either "CSV" or "Google Sheet," and use the controls provided to upload the file's contents. The Google sheet must be public, i.e., with no file restrictions in place. For details on creating an import file, see farther below. 
        
        If you select "Google Sheet" and you provide the URL to the sheet, be aware that this establishes a link between the knowledge base and the sheet. If you later sync the knowledge base, it is updated with the current contents in the sheet.

        **IMPORTANT**: When creating one knowledge base based off of another, don't reuse the same CSV import file or Google sheet for a second knowledge base in the same hosted region. The article IDs must be unique within the region. In the file for the second knowledge base, clear the article IDs; the application will create article IDs for new articles.

    * **Domain**: The knowledge base will use [Domain intents](knowledgeai-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents), so select the domain to use here. Note that you don't have to specify the domain at this point, as the field is optional when adding the knowledge base. This allows you to advance the creation of your knowledge base content without having to consider the domain beforehand.

    * **Language**: Select the language of the content. Make an accurate selection here; this helps text-based searches to work as expected and will help with regard to future enhancements related to text-based searches.

5. Click **Save**.

    This creates the knowledge base, and takes you to its search view. In this default view, you can search the title, intent qualifiers and content of articles.

    If you specified a CSV or Google sheet to use as an import file, the articles in the file are enabled by default. This means they will be returned by knowledge base searches in a Knowledge Base integration, once you add an integration. You can disable articles on a per article basis, as described [here](knowledgeai-internal-knowledge-bases-articles.html#enable-or-disable-an-article). 

### Create an import file

If you want to import a set of articles into a knowledge base when you add the knowledge base, you'll need to create the import file.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_importFile.png">

{: .important}
The import file can contain the subset of HTML that’s discussed [here](knowledgeai-common-settings-tasks.html#format-text-in-an-article). Additionally, as a best practice, ensure the file is saved as a UTF-8 encoded CSV file before you import it. This is particularly important if you need to support special language characters (e.g., ö, ü, ß).

**To create an import file**

1. Create a new CSV file or Google sheet. A Google sheet must be public, i.e., with no file restrictions in place.
2. Add the column headers listed below; use the order listed in the table below.
3. Fill out the rows with your article data. It's recommended that you complete at least these columns: title, summary, detail, tags, and alternates (if using Knowledge Base intents) or intentName (if using Domain intents).

#### Column headers

| Column header name | Description |
|-----|-----|
| id | A String; a unique ID assigned to an article. <br><br>This column isn't required when you initially create the knowledge base. However, if you're using a Google sheet that you plan to sync periodically, it does play a role then. Before performing a sync, update the Google sheet to include the "id" column and enter the IDs for all existing articles.<br><br>When creating one knowledge base based off of another, don't reuse the same CSV import file or Google sheet for a second knowledge base in the same hosted region. The article IDs must be unique within the region. In the file for the second knowledge base, clear the article IDs; the application will create article IDs for new articles. |
| tags | A comma-separated list of relevant keywords. These highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences. |
| title | The article title. This should be a complete sentence or question that the user might ask. See [here](knowledgeai-internal-knowledge-bases-best-practices.html) for best practices. |
| summary | A short response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels. |
| alternates | Applicable if you're using Knowledge Base intents, not Domain intents (see [here](knowledgeai-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents) for an understanding of the two). In the UI, these are called "intent qualifiers." Intent qualifiers are alternative ways that people ask for the article, i.e., alternative ways to communicate the same intent. See [here](knowledgeai-internal-knowledge-bases-best-practices.html) for best practices. |
| detail | A longer message to the user. For messaging, it's recommended that you keep the responses as brief as possible. |
| content_url | The URL of a hyperlink. For more on this, see [here](knowledgeai-internal-knowledge-bases-articles.html#add-content-links). |
| image_url | The URL of an image. For more on this, see [here](knowledgeai-internal-knowledge-bases-articles.html#add-content-links). |
| audio_url | The URL of an audio file. For more on this, see [here](knowledgeai-internal-knowledge-bases-articles.html#add-content-links). |
| video_url | The URL of a video file. For more on this, see [here](knowledgeai-internal-knowledge-bases-articles.html#add-content-links). |
| category | Assigning a category lets you [filter and find articles based on categories](knowledgeai-internal-knowledge-bases-articles.html#find-articles-with-a-specific-category) in the KnowledgeAI application. |
| intentName | Applicable if you're using Domain intents, not Knowledge Base intents (see [here](knowledgeai-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents) for an understanding of the two). This is the intent associated with the article. |
| validFrom | Specify the date and time on which the article becomes active in Epoch time in milliseconds. For more on active versus inactive articles, see [here](knowledgeai-internal-knowledge-bases-introduction.html#active-versus-inactive-articles). |
| validTo | Specify the date and time on which the article becomes inactive in Epoch time in milliseconds. For more on active versus inactive articles, see [here](knowledgeai-internal-knowledge-bases-introduction.html#active-versus-inactive-articles). |

### Convert Knowledge Base intents to Domain intents

When you convert Knowledge Base intents to Domain intents, the system takes each article title in the knowledge base and creates an intent in Intent Manager in the domain that you specify. Additionally, all the intent qualifiers in the articles are converted to training phrases for their respective intents in Intent Manager.

From a workflow perspective, the process of testing the knowledge base and adding/changing training phrases moves from the KnowledgeAI application to the Intent Manager application.

{: .important}
Before taking this action, be certain about doing so. Once you convert the intents, you no longer see and can no longer use Knowledge Base intents in the affected knowledge base. Also, this action irreversibly modifies the domain that you select as described above.

**To convert from Knowledge Base intents to Domain intents**
1. Open the knowledge base.
2. In the upper-left corner, click **Settings**.
3. Click **More Options**, and scroll down to the **Intent Association** section.
4. Click **Convert to Domain Intents**.
5. In the dialog that appears, select the domain.

    * If, within the knowledge base, you’re already using entities from an associated domain, select that domain here.
    * If you select a domain that uses the LivePerson (Legacy) engine, you are encouraged to subsequently [convert the domain to the LivePerson engine](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#convert-a-liveperson-legacy-domain-to-liveperson) as soon as possible. See [here](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#benefits-of-liveperson-over-liveperson-legacy) for the benefits of LivePerson over LivePerson (Legacy). **LivePerson will deprecate the LivePerson (Legacy) engine at the end of 2021.**
    * While you can select from all existing domains regardless of the NLU engine that it uses, if you instead create a domain on-the-fly in this step, you can only create a domain that uses the LivePerson engine or a third-party engine.

6. In the confirmation dialog, click **Confirm**.
    
    This converts the intents and associates the selected domain.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_convertIntents.png">

### Sync with a Google sheet

After you've made changes to the Google sheet that's linked to the knowledge base, sync the knowledge base to update it with the content.

{: .important}
This action overwrites the content in the knowledge base with the content in the Google sheet, so use caution when performing this. Also be aware that all new articles in the sheet are enabled by default (which means they are returned in knowledge base searches in KnowledgeAI integrations), so ensure the contents of the sheet are suitable before you sync. You can disable articles on a per article basis, as described [here](knowledgeai-internal-knowledge-bases-articles.html#enable-or-disable-an-article).

Before performing a sync, make sure the Google sheet includes the "id" column that contains the IDs for all existing articles. If it doesn't, update the sheet accordingly before syncing.

**To sync a knowledge base with a Google sheet**
1. Open the knowledge base.
2. In the upper-left corner, click **Settings**.
3. Click **More Options**, scroll down to the **Sync Google Sheet Data Source** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_syncGoogleSheet.png"> (Refresh icon).

### Download a knowledge base 

Download of a knowledge base creates a CSV file.

You might need to download a knowledge base for a few reasons:

* You want to create a copy of the knowledge base by downloading it and then adding a new knowledge base using the CSV as the import file.
* You want to move or copy the knowledge base to another environment.
* You want an extra measure of back-up, so you plan to archive the CSV file for safekeeping.

**To download a knowledge base**
1. Open the knowledge base.
2. In the upper-left corner, click **Settings**.
3. Click **More Options**, scroll down to the **Download Knowledge Base** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_download.png"> (Download icon).
4. Follow the browser prompts to access and save the CSV file to a location of your choice.