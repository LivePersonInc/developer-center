---
pagename: Dialog Templates
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-dialog-templates.html
indicator: both
---

### What’s a dialog template?

A dialog template is a dialog that a bot developer has intentionally made available as a “template” that can be imported by others. A dialog template includes not just the dialog in question but also all required components on which the dialog relies: other dialogs, environment variables, and so on.

Only dialogs of type Dialog can be made available as dialog templates.

#### Advantages of dialog templates
You can [import a dialog](conversation-builder-dialogs-dialog-basics.html#import-a-dialog) that isn’t made available as a template, but that process automatically imports only some of the components on which a dialog can rely, namely, the integrations that are used. The rest you must manually include (other dialogs) or add after the import (environment variables and global functions). As a result, a dialog import is better suited to situations where your import requirements are more relaxed, and you’re primarily interested in the dialog itself.

In contrast, when a bot developer makes a dialog available as a template that can be imported, she must specify all the components on which the dialog relies in a template definition. The system then automatically includes all these components when the dialog template is imported.

For quick, casual copies of dialogs, a dialog import can be handy. But when you want to formalize the import process for a dialog -- and ensure that other bot developers import all required components -- make the dialog available as a dialog template.

### Make a dialog available as a template

A dialog that is made available as a template functions just like it would if it weren’t a template. There is no impact to the dialog itself. 

Once you make a dialog available as a template, the dialog can no longer be imported as a dialog. It can only be imported as a dialog template.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/dialogtemplates_1.png">

There are two reasons for this:

* It helps to ensure that all import requirements are met, as the import of a dialog template follows the requirements outlined in the dialog’s template definition.
* It helps to prevent you from inadvertently importing the same dialog in different ways on different occasions.

**To make a dialog available as a dialog template**

1. Open the bot.
2. In the dialogs panel on the left, click <img style="width:30px" src="img/ConvoBuilder/icon_ellipsis_dark.png"> beside the dialog name, and select **Dialog Settings**.
3. On the Dialog Settings page, expand **More Settings**.
4. Scroll down to **Make Available as a Dialog Template**, and click **+ Add Template Definition**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/dialogtemplates_2.png">

    The dialog itself is automatically made a part of the template definition, but you need to specify other dependencies.

5. In the Add Template Definition window, specify the following:

    * **Template Name**: Enter a brief, descriptive name for the template.
    * **Description**: Enter a brief description of the dialog’s functionality. This description is shown to bot developers when importing dialog templates.
    * **+ Add Dialog**: Add to this list the dialogs upon which this dialog relies.
    * **Domains**: This is a read-only list of all the domains used by all the dialogs that are a part of this dialog template. All domain associations will be maintained when the dialog template is imported by others. However, only [prebuilt domains](intent-builder-overview.html#prebuilt-domains) are included in the import. If an associated domain doesn't exist within your organization or it isn't a prebuilt domain, you'll need to add it manually.
    * **+ Add Bot Environment Variable**: Add to this list the environment variables upon which this dialog relies.
    * **+ Add Global Function**: By default, this is populated with the global functions defined for the bot. Remove any functions that aren’t needed by the dialogs that are a part of the dialog template.

    You don't need to specify any integrations here. All integrations used by this dialog and the listed dialogs are automatically included when the dialog template is imported by a bot developer.

6. Do one of the following:
    * Click **Save** to save the template definition but keep it in "draft" status. This keeps the dialog template hidden. Use this status to save your work until you're ready to expose the dialog template to others within your organization.
    * Click **Publish** to save the template definition and make it possible for other bot developers within your organization to import the dialog template.

    Regardless of which action you take, in the Dialogs panel, you now see an indicator that the dialog has a template definition:

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/dialogtemplates_3.png">

{: .important}
If you subsequently change the dialog in a way that impacts the template definition, remember to update the template definition accordingly.

### Publish a dialog template

Publishing a dialog template changes its status from "draft" to "published." This makes it possible for other bot developers within your organization to import the dialog template.

{: .important}
Once you publish a dialog template, there is no way to unpublish it. Delete the dialog template instead.

**To publish a dialog template**

1. Open the bot.
2. In the dialogs panel on the left, click <img style="width:30px" src="img/ConvoBuilder/icon_ellipsis_dark.png"> beside the dialog name, and select **Dialog Settings**.
3. On the Dialog Settings page, expand **More Settings**.
4. Scroll down to **Make Available as a Dialog Template**, and click **+ Update Template Definition**.
5. In the Update Template Definition window, click **Publish** in the lower-right corner.

### Import a dialog template

When you import a dialog template, you import the dialog, the integrations used in the dialog, and all other required components upon which the dialog relies. These other components can include:

* Other dialogs and the integrations they use
* Domains
* Environment variables
* Global functions

Note the following:
* During the import, the association of domains, intents, and entities are maintained. However, only [prebuilt domains](intent-builder-overview.html#prebuilt-domains) are included in the import. If an associated domain doesn't exist within your organization or it isn't a prebuilt domain, you'll need to add it manually.
* If you import a dialog that uses a knowledge base integration, and that knowledge base is owned by another bot developer and isn't public, you can still use the integration in the bot, but you can't view or edit that knowledge base in the Knowledge Base application.

After you import a dialog template into a destination bot, it becomes a normal dialog within the bot, and it functions as if you had created the dialog from scratch.

{: .important}
Keep in mind that importing a dialog template imports not only the dialog but also all other dialogs referenced by that dialog. After the import, carefully review all the imported dialogs against the dialogs that existed in the bot before the import. The goal is to ensure that you have not inadvertently imported the same dialog on multiple occasions in multiple ways, i.e., as a stand-alone dialog and/or as a part of one or more dialog templates.

**To import a dialog template**

1. Open the destination bot.
2. Click **Add Dialog** in the lower-left corner.
3. In the Add Dialog window, select the **From Dialog Templates** tab.
4. Browse and/or search to find and select the dialog template to import. You can select only a single dialog template. You can select from the dialog templates defined in the bots and bot templates to which you have access in your organization.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/dialogtemplates_4.png">

5. Select the dialog template, and click **Next**.
6. Review the list of associated items (other dialogs, domains, environment variables, global functions) that will be imported as a part of the dialog template. These are the items that the bot developer who created the template has specified as required by the dialog.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/dialogtemplates_5.png">

7. Click **Save**.

    This creates a dialog based on the template and imports the associated items into the bot. From this point forward, the dialog works as if you had created it from scratch.

8. You might want to rename the imported dialogs, interactions, and integrations. They are given standard names that include a timestamp.
9. Ensure proper conversation flow by checking (and updating, if necessary) the following in the interactions in the relevant dialogs:
    * Next Action values
    * JavaScript code
    * Environment variables
