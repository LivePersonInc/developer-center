---
pagename: Transcripts
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Analytics
permalink: bot-analytics-transcripts.html
indicator: both
---

Transcripts of conversations in which a bot participated are logged if the bot’s [Log Transcripts bot setting](conversation-builder-bots-bot-basics.html#configure-bot-settings) is enabled. Some cases might prohibit transcript logging for privacy or other reasons. If you disable transcript logging, metadata on the conversation is still logged, but the content of the conversation isn’t.

Review of transcripts is a great way to identify opportunities for tuning.

<!--
### Transcript review via the Conversations view

You can use the **Conversations** view to perform a targeted review of transcripts based on the conversation status of the conversations, which can be:
* Bot Disengaged
* Consumer Disengaged
* Intended Transfer
* Unintended Transfer
* Bot Contained

For an explanation of each status, see [here](bot-analytics-key-terms-concepts.html#containment-of-bot-conversations).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ba_conversationsview3.png">
-->

### Transcript review via the MACS view

You can use the **MACS** view to perform a targeted review of transcripts based on MACS data, such as the MACS score. For example, you might want to review the transcripts of conversations that had MACS 1 (i.e., a low conversation quality score). Or, you might want to review the transcripts of conversations where the bot didn't understand the consumer's question. 

<img style="width:800px" src="img/ConvoBuilder/ba_transcripts_macs.png">

To learn more about MACS, see [here](bot-analytics-macs.html).

### Transcript review via the Transcripts view
You can use the **Transcripts** view to access all the transcripts for a specified date range. This view allows you to download transcripts.

**To access a bot’s transcripts via the Transcripts view**

1. [Access Bot Analytics](bot-analytics-overview.html#access-bot-analytics), and select the bot in the table on the main dashboard.
2. From the dropdown menu on the menu bar, select **Transcripts**.

    <img style="width:500px" src="img/ConvoBuilder/ba_transcripts_menu_option.png">

3. Use the filtering controls to display the desired transcripts.

    <img style="width:800px" src="img/ConvoBuilder/ba_transcripts_filter.png">

    {: .important}
    Currently, Phrase Search is disabled.

    {: .important}
    When downloading transcripts, a maximum of 10,000 messages per download is allowed. For example, if you request the transcripts for February 15, 2021 through February 21, 2021, and the bot conversations for that period contain an average of 10 messages each, then the maximum number of bot conversations in the download would be approximately 1,000.