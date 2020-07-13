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

1. Access the Knowledge Base application as described [here](knowledge-base-overview.html#access-the-knowledge-base).
2. In the dashboard that lists your knowledge bases, click **Add Knowledge Base** in the upper-right corner.
2. Specify the following:
    * **Data source name**: Enter a display name for the knowledge base.
    * **Data source type**: Select "Knowledge Base."
    * **Language**: Select the language of the knowledge base. The default value is English. For details on how the language is used, see [here](knowledge-base-overview.html#languages) in the overview.
    * **Import articles from**: You can add articles manually, but if you have them in an external file, you can import them now. Select either "CSV" or "Google Sheet," and use the controls provided to upload the file's contents. The Google sheet must be public, i.e., with no file restrictions in place. For details on creating an import file, see farther below. 
        
        If you select "Google Sheet" and you provide the URL to the sheet, be aware that this establishes a link between the knowledge base and the sheet. If you later sync the knowledge base, it is updated with the current contents in the sheet. 

    * **Intent Association**: This field specifies where the intents reside, either in the knowledge base itself or in a domain in Intent Builder. Select either "Knowledge Base Intents" or "Domain Intents." If you select "Domain Intents," also select the domain from the list that appears. For a more in-depth explanation of these, see [here](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents) in the overview.

        If and when you are selecting the domain, be aware that it can't be changed after the knowledge base is created.

3. Click **Add**.

    This creates the knowledge base, and takes you to its search view. In this default view, you can search the title, intent qualifiers and content of articles.

    If you specified a CSV or Google sheet to use as an import file, the articles in the file are enabled by default. This means they will be returned by knowledge base searches in a Knowledge Base integration, once you add an integration. You can disable articles on a per article basis, as described [here](knowledge-base-articles.html#enable-or-disable-an-article). 

### Create an import file

If you want to import a set of articles into a knowledge base when you add the knowledge base, you'll need to create the import file.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_importFile.png">

**To create an import file**

1. Create a new CSV file or Google sheet. A Google sheet must be public, i.e., with no file restrictions in place.
2. Add the column headers listed below; use the order listed in the table below.
3. Fill out the rows with your article data. It's recommended that you complete at least these columns: title, summary, detail, tags, and alternates (if using Knowledge Base intents) or intentName (if using Domain intents).

#### Column headers

| Column header name | Description |
|-----|-----|
| id | A String; a unique ID assigned to an article. <br><br>**Note**: This column isn't required when you initially create the knowledge base. However, if you're using a Google sheet that you plan to sync periodically, it does play a role then. Before performing a sync, update the Google sheet to include the "id" column and enter the IDs for all existing articles. |
| tags | A comma-separated list of relevant keywords. These highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences. |
| title | The article title. This should be a complete sentence or question that the user might ask. See [here](knowledge-base-articles.html#best-practices) for best practices. |
| summary | A short response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels. |
| alternates | Applicable if you're using Knowledge Base intents, not Domain intents (see [here](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents) for an understanding of the two). In the UI, these are called "intent qualifiers." Intent qualifiers are alternative ways that people ask for the article, i.e., alternative ways to communicate the same intent. See [here](knowledge-base-articles.html#best-practices) for best practices. |
| detail | A longer message to the user. For messaging, it's recommended that you keep the responses as brief as possible. |
| content_url | The URL of a hyperlink. For more on this, see [here](knowledge-base-articles.html#add-content-links). |
| image_url | The URL of an image. For more on this, see [here](knowledge-base-articles.html#add-content-links). |
| audio_url | The URL of an audio file. For more on this, see [here](knowledge-base-articles.html#add-content-links). |
| video_url | The URL of a video file. For more on this, see [here](knowledge-base-articles.html#add-content-links). |
| category | Assigning a category lets you [filter and find articles based on categories](knowledge-base-articles.html#find-articles-assigned-to-a-specific-category) in the Knowledge Base application. |
| positiveLearnings | These are phrases for which you want a match to the article to occur. A comma-separated list. |
| negativeLearnings | These are phrases for which you don't want the article to appear in the result even if it is matched to the consumer's intent. A comma-separated list. |
| intentName | Applicable if you're using Domain intents, not Knowledge Base intents (see [here](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents) for an understanding of the two). This is the intent associated with the article. |

### Configure knowledge base settings

**To configure knowledge base settings**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Specify the following:
    * **Data source name**: Enter a new display name for the knowledge base if desired. Changing the name of the knowledge base doesn't require a corresponding update to a [knowledge base integration](conversation-builder-integrations-knowledge-base-integrations.html) that uses the knowledge base; the integration is tied to the knowledge base's underlying primary key, not its name. 
    * **Data source type**: Read-only.
    * **Language**: Change the language if desired. For information on the role that the language plays, see [here](knowledge-base-overview.html#languages).
    * **Import articles from**: After you've added a knowledge base, you can't subsequently import articles from a CSV file. However, you can link a Google sheet to the knowledge base, but be aware that, once you [sync with the sheet](knowledge-base-knowledge-bases.html#sync-with-a-google-sheet), the contents of the knowledge base are overwritten with what's in the sheet. The Google sheet must be public, i.e., with no file restrictions in place.
    * **Knowledge Base ID**: Read-only. This is a unique identifier that’s generated by the system. In some scenarios, you might need to reference the knowledge base ID. Here’s where you can find it.
    * **Intent Association**: Read-only. If the knowledge base uses Knowledge Base intents, you can convert them to Domain intents (discussed farther below).
    * **Associated Domain for Entity**: This field is only displayed if the knowledge base uses [Knowledge Base intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents). If desired, you can change the domain where the entities used in the knowledge base are defined.
    * **Associated Domain**: Read-only. This field is displayed only if the knowledge base uses [Domain intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents). The domain can't be changed after the knowledge base is created.
    * **Account**: If you logged into Conversation Builder directly (i.e., not via single sign-on from Conversational Cloud) and you have access to multiple organizations within your Conversational Cloud account, you can use this setting to change the organization under which this knowledge base exists. If you logged into Conversation Builder via single sign-on from Conversational Cloud, the organization you were using in Conversational Cloud is active and can't be changed, and nothing appears in this list.
    * **Public**: If you don't want other users in your Conversational Cloud account to be able to view and edit the knowledge base, click the slider to Off. To facilitate the contributions of multiple persons to articles, the default value is On.
5. Click **Update**.

### Convert Knowledge Base intents to Domain intents

When you convert Knowledge Base intents to Domain intents, the system takes each article title in the knowledge base and creates an intent in Intent Builder in the domain that you specify. Additionally, all the intent qualifiers in the articles are converted to training phrases for their respective intents in Intent Builder.

From a workflow perspective, the process of testing the knowledge base and adding/changing training phrases moves from the Knowledge Base application to the Intent Builder application.

{: .important}
Before taking this action, be certain about doing so. Once you convert the intents, you no longer see and can no longer use Knowledge Base intents in the affected knowledge base. Also, this action irreversibly modifies the domain that you select as described above.

**To convert from Knowledge Base intents to Domain intents**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Click **More Options**, and scroll down to the **Intent Association** section.
5. Click **Convert to Domain Intents**.
6. In the dialog that appears, select the domain.
7. In the confirmation dialog, click **Confirm**.
    
    This converts the intents and associates the selected domain.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_convertIntents.png">

### Sync with a Google sheet

After you've made changes to the Google sheet that's linked to the knowledge base, sync the knowledge base to update it with the content.

{: .important}
This action overwrites the content in the knowledge base with the content in the Google sheet, so use caution when performing this. Also be aware that newly added articles are enabled by default, so ensure the contents of the sheet are suitable before you sync. You can disable articles on a per article basis, as described [here](knowledge-base-articles.html#enable-or-disable-an-article).

Before performing a sync, make sure the Google sheet includes the "id" column that contains the IDs for all existing articles. If it doesn't, update the sheet accordingly before syncing.

**To sync a knowledge base with a Google sheet**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Click **More Options**, scroll down to the **Sync Google Sheet Data Source** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_syncGoogleSheet.png"> (Refresh icon).

### Refresh the intents

The intents for every article are stored in a cache that is updated automatically every 5 minutes. But if you've made a recent change to intents--either [Knowledge Base intents or Domain intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents)--and you want to immediately see the result of the changes, you can manually refresh the cache.

**To refresh the intents in a knowledge base**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Click **More Options**, scroll down to the **Refresh Intents** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_refresh.png"> (Refresh icon).

### Download a knowledge base 

Download of a knowledge base creates a CSV file.

You might need to download a knowledge base for a few reasons:

* You added the initial set of articles to the knowledge base by importing a CSV file, and now you want to add more articles using an import file too. *The only way to do this is with a Google sheet*, so you plan to download the knowledge base to a CSV file, convert the CSV file to a Google sheet, add the new articles alongside the existing articles (**don't remove the existing articles**), and link the Google sheet to the knowledge base.
* You want to create a copy of the knowledge base by downloading it and then adding a new knowledge base using the CSV as the import file.
* You want to move or copy the knowledge base to another environment.
* You want an extra measure of back-up, so you plan to archive the CSV file for safekeeping.

**To download a knowledge base**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Click **More Options**, scroll down to the **Download Knowledge Base** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_download.png"> (Download icon).
5. Follow the browser prompts to access and save the CSV file to a location of your choice.

### Delete a knowledge base

Deleting a knowledge base is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Ensure the knowledge base isn't being used in any [Knowledge Base integrations](conversation-builder-integrations-knowledge-base-integrations.html) before you delete it.

**To delete a knowledge base**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Click **More Options**, scroll down to the **Delete Knowledge Base** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_delete.png"> (Delete icon).
5. In the confirmation dialog, click **Yes**.