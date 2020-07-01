This is for storing segments of doc temporarily until they can be added to the public files...


### Starter packs

To get you quickly up and running with [intents](intent-builder-intents.html), LivePerson provides a set of starter packs that you can easily add to your Intent Builder environment. A starter pack is a ready-made domain that includes a set of predefined intents. There are two kinds of starter packs available:

* Generic starter packs for a number of verticals: Telecommunications, Financial Services, and more.
* Cross-vertical starter packs that are appropriate for all verticals. These include starter packs for things like account management, billing and payment, “small talk,” and more.

{Nice preview screenshot here}

Once you add a domain using a starter pack, you can customize it as you see fit. The domain behaves like any other you might create manually or via an import file.

If you want a fast, low effort way to get up and running with well-defined intents, LivePerson recommends that you get started using starter packs.

{: .important}
Starter packs for the [LP NLU v1 engine](intent-builder-natural-language-understanding.html#livepersons-nlu-engine) aren’t supported.


### Add a domain with a starter pack

For an introduction to starter packs, see here.

**To add a domain with a starter pack**

1. Access the Intent Builder application, as described [here](intent-builder-overview.html#access-intent-builder).
2. In the dashboard that lists your domains, click **Prebuilt Domains** at the top of the domain list.

    {screen}

3. On the Prebuilt Domains tab in the Add Domain dialog box, select the domain. Then click **Preview** to see a description of the domain and some sample user phrases. This helps you to verify that the domain is the one you want.

    {screen}

4. Click **Add**.
    
    The domain is added. 

    {: .important}
    There’s no need to train or activate the domain for the first time. Both of these steps have been done automatically. However, from this point forward, things work as if you had created the domain manually. If you subsequently make any changes, you’ll need to manually re-train the domain to create a new model version that reflects the changes. And when ready, you’ll need to activate the new model version.


### Import a dialog

You can import one or more dialogs from another bot. This can be advantageous when you have a well-defined dialog in one bot that you want to quickly and easily reuse in another. Note the following:

* You can import dialogs from only one bot at a time.
* You can import a maximum of 10 dialogs at a time.
* You can import dialogs of all types except Fallback and Disambiguation.
* You can import dialogs from the bots to which you have access in your organization. For example, you can’t import dialogs from a private bot that was created by another bot developer.
* The following is imported:  
    * All selected dialogs and the interactions therein.
    * All integrations referenced in the selected dialogs.
* During the import:
    * The order of the interactions is maintained.
    * The “next action” for each interaction is maintained whenever possible. If you don’t import a dialog that is referenced, the “next action” is cleared. After the import you are shown an error message, so you can import the associated dialog and/or update the next action as appropriate.
    * The assignments (IDs) of domains, intents, and entities are maintained.
* If you import a dialog that uses a knowledge base integration, and that knowledge base is private to another, …???

**To import a dialog from another bot**

1. Open the destination bot.
2. Click **Add Dialog** in the lower-left corner.
3. In the Add Dialog dialog box, select the **From Existing Bots** tab.
4. Browse and/or search to find and select the dialogs to import. You can search by…
5. Click **Add**.

    The selected dialogs are imported. At this point, you might need to do the following:

    * If you received any errors, this is because you imported a dialog that referenced another dialog that you didn’t import. In this case, the “next action” in the relevant interaction in the imported dialog is cleared. To resolve this, import the associated dialog and/or update the next action as appropriate.
    * You might want to rename the imported dialogs and interactions. They are given standard names based on the destination bot name and element name.
