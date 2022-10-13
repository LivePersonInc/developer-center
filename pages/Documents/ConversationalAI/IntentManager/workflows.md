---
pagename: Workflows
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
permalink: intent-manager-workflows.html
indicator: both
---

Common workflows often require you to bounce between different areas of Intent Manager: Discover, Build, Optimize and Analyze. They also require that you use several features of the application, each robust on their own. Use this topic to guide you through various workflows.

Keep in mind the [best practices](intent-manager-best-practices.html).

### A view from 1,000 feet

1. Understand [key terms and concepts](intent-manager-key-terms-concepts.html) in Intent Manager.
2. [Get started](intent-manager-getting-started.html) with a prebuilt domain that's ready-made, pretrained, and includes a set of well-defined intents. Alternatively, [start with a custom domain](intent-manager-build-domains.html#add-a-domain-manually-or-using-an-import-file). You can import your existing intents into it, or add the initial intents and training phrases manually.
3. Understand the model: If necessary, review the model’s coverage, i.e., the intent names and training phrases. This gives you a good understanding of the intents that already exist in the model. This is important to keep in mind, as you don’t want your future work to overlap with any of the existing intents.
4. Use [intent discovery](intent-manager-discover-intent-discovery.html) (the **Discover** page) to find new intents to add to your current taxonomy and to classify consumer messages under those intents.
5. [Train the new model](intent-manager-build-domains.html#train-a-domain).
6. [Test with the Model Tester](intent-manager-build-test-with-the-model-tester.html) (on the **Build** page) and optimize your model based on the test report. The Model Tester is designed to help you to determine if the model is improving or regressing from one version to the next as you train the intents in the domain.
7. [Analyze](intent-manager-analyze-basic-tasks.html) customer data.
8. Repeat steps 4 through 7 to improve your model.

### Create a domain and activate it for use

1. Create the domain.
2. Add and update the intents and entities in the domain.
3. [Train the domain](intent-manager-build-domains.html#train-a-domain).
4. Test and debug the domain:
    * [Single utterance testing](intent-manager-build-test-a-single-utterance.html)
    * [Testing with the Model Tester](intent-manager-build-test-with-the-model-tester.html)
5. [Activate the model version](intent-manager-build-versions.html#activate-a-model-version).

    Once you activate the model version, it’s used whenever the domain is referenced: in Conversation Builder, in API calls to the NLU engine, and in analytics.

### Use unclassified messages to create a new intent

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Click **Discover**, and select a domain.
3. [Use the Discover page](intent-manager-discover-intent-discovery.html) to filter your view, so you’re looking at only unclassified messages.
4. Find a message related to the intent you want to create, and click **Discover similar messages**.
5. Select the messages that you want to use as training phrases for the new intent.
6. Create the intent (specifying the target domain for the intent when you do).
7. Click **Build**, and select the target domain to display it.
8. Need more training phrases for the intent? Display the intent, and [generate additional, similar training phrases](intent-manager-build-intents.html#generate-training-phrases).
9. [Train the domain](intent-manager-build-domains.html#train-a-domain).
10. [Test a single utterance](intent-manager-build-test-a-single-utterance.html) or [test with the Model Tester](intent-manager-build-test-with-the-model-tester.html), and tune the domain.

Note that, in **Discover**, you can also find intentful messages and add them to an existing intent. However, the intent must be in the domain that’s currently selected.