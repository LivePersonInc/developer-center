---
pagename: Introduction
redirect_from:
    - conversation-builder-intent-builder-nlu-engines.html
    - conversational-ai-platform-natural-language-understanding-nlu-engines.html
    - conversational-ai-natural-language-understanding-nlu-engines.html
    - intent-builder-natural-language-understanding.html
    - intent-manager-natural-language-understanding.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Natural Language Understanding
permalink: intent-manager-natural-language-understanding-introduction.html
indicator: both
---

One of the essential tools of Conversational AI is Natural Language Understanding (NLU). This is what allows Intent Manager to analyze consumer input and assign accurate intents.

While LivePerson provides its own proprietary NLU out of the box, Intent Manager also allows you to choose your preferred NLU engine by routing all NLU analysis and training through an API. This API layer of abstraction means you can choose from the following NLU engines:

- LivePerson's native NLU
- Google Dialogflow
- IBM Watson
- Your own custom, Rasa-based NLU engine

{: .important}
If you choose LivePerson's native NLU, no setup work needs to be done to connect the NLU engine to your domain in Intent Manager. Third-party providers require an additional setup process.

### Limitations and constraints of third-party NLU engines

- [Prebuilt domains](intent-manager-key-terms-concepts.html#prebuilt-domains) and [Regular Expression entities](intent-manager-key-terms-concepts.html#entities) can't be used with third-party NLU engines.
- You must use Intent Manager for all model management, i.e., for making changes to intents and entities, model training, and model activation. Performing these tasks directly in your third-party solution isn’t supported. This ensures your domain data always reflects the actual model in your solution.
- LivePerson does not support "pulling" into Intent Manager existing models that have been trained in the third-party application. Only model "push" is supported; this is accomplished by training the model in Intent Manager.
