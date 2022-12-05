---
pagename: Error Dictionary
sitesection: Documents
categoryname: Reporting
documentname: Outbound Reporting API
permalink: outbound-reporting-api-error-dictionary.html
indicator: messaging
---

 | Errors ( ErrorSource_ErrorCode) | Message | Description |
 | outbound_wa_400 (outbound_400) | WA error - Media download failed | WhatsApp server was not able to download the media. Please check the media URL is correct and accessible. |
 | outbound_wa_408 (outbound_408) | WA error - WA server not available | WhatsApp server was not available to send the message. Please retry.  |
 | outbound_wa_410 (outbound_410) | WA error - Message expired | Message failed to send during its Time To Live (TTL) duration. |
 | outbound_wa_470 (outbound_470) | WA error - Re-engagement message | Message failed to send because more than 24 hours have passed since the customer last replied to this number. Use a message template to respond. |
 | outbound_wa_471 (outbound_471) | WA error - Exceeded number of message limit | Message failed to send because there are restrictions on how many messages can be sent from this phone number. This may be because too many previous messages were blocked or flagged as spam. Check your quality status in the WhatsApp Manager. See the Quality-Based Rate Limits documentation for more information. |
 | outbound_wa_495 (outbound_495) | WA error - Connection issue | WhatsApp failed to deliver the message due to not matching or corrupt certificate. Connection Issue. |
 | outbound_5XX | WA error - Generic error | Message failed to send because of an unknown error. Try again later. |
 | outbound_wa_1000 (outbound_1000) | WA error - Errors with rich message | WhatsApp failed sending rich message. Please check the file format is one of (jpg,png) for image, (pdf) for document or (mp4) for a video. |
 | outbound_wa_1005 (outbound_1005) | WA error  - Access denied | Media directory is not writable (upload request), or Invalid credentials, or Certificate Error, or App Expired - a version upgrade is required, or button messages are disabled for this account, or Number is already registered on WhatsApp (see Migrating a Phone Number for information on moving a phone number from WhatsApp to the WhatsApp Business API), or if your business sends commerce messages in India, make sure that you have completed all mandatory business profile and product item fields. For more information, see [Info](https://www.facebook.com/business/help/1104628230079278). |
 | outbound_wa_1014 (outbound_1014) | WA error  - Cannot access media | Upload failed on bad image (image not uploaded correctly) or endpoint not found |
 | outbound_wa_1026 (outbound_1026) | WA error  - Consumer's WA version incompatible  | WhatsApp could not send the message as the consumer's WA version is incompatible for the message. The receiver is incapable of receiving message. |
 | outbound_wa_1031 (outbound_1031) | WA error - Sender account locked | You account has been locked to send any message due to policy violation by WhatsApp. Please contact your LP business partner. |
 | outbound_wa_ntw_err | Network error occured in connector | Network error occured in internal connector component while processing WhatsApp message. If this continues to fail, please contact LP support. |
 | outbound_twilio_ntw_err | Network error occured in connector | Network error occured in internal connector component while processing SMS message. If this continues to fail, please contact LP support. |
 | outbound_twilio_20003 (outbound_20003) | Twilio error - Permission denied | [Twilio - 20003](https://www.twilio.com/docs/api/errors/20003) |
 | outbound_twilio_20500 (outbound_20500) | Twilio internal error | [Twilio - 20500](https://www.twilio.com/docs/api/errors/20500) |
 | outbound_twilio_21211 (outbound_21211) | Twilio error - Invalid "To" Phone number | [Twilio - 21211](https://www.twilio.com/docs/api/errors/21211) |
 | outbound_twilio_21408 (outbound_21408) | Twilio error - "From" number not enabled for the region | [Twilio - 21408](https://www.twilio.com/docs/api/errors/21408) |
 | outbound_twilio_21602 (outbound_21602) | Twilio error - No SMS message body | [Twilio - 21602](https://www.twilio.com/docs/api/errors/21602) |
 | outbound_twilio_21606 (outbound_21606) | Twilio error - "From" number is not valid for messaging | [Twilio - 21606](https://www.twilio.com/docs/api/errors/21606) |
 | outbound_twilio_21610 (outbound_21610) | Twilio error - "To" number is opted out | [Twilio - 21610](https://www.twilio.com/docs/api/errors/21610) |
 | outbound_twilio_21611 (outbound_21611) | Twilio error - Message queue limit exceeded | [Twilio - 21611](https://www.twilio.com/docs/api/errors/21611) |
 | outbound_twilio_21612 (outbound_21612) | Twilio error - 'To' number not reachabe | [Twilio - 21612](https://www.twilio.com/docs/api/errors/21612) |
 | outbound_twilio_21614 (outbound_21614) | Twilio error  -  Not a mobile number | [Twilio - 21614](https://www.twilio.com/docs/api/errors/21614) |
 | outbound_twilio_21617 (outbound_21617) | Twilio error  - Message exceeds 1600 characters | [Twilio - 21617](https://www.twilio.com/docs/api/errors/21617) |
 | twilio_5008 | No delivery response from Twilio or message is undelivered  | Message was sent successfully to the network service provider of the recipient, but there was no response from the provider that the message was delivered to the recipient. As there is no delivery response for 72 hours after the message was successfully sent, this sms message was marked as failed. |
 | twilio_30001 | Twilio error  - Queue overflow | [Twilio - 30001](https://www.twilio.com/docs/api/errors/30001) |
 | twilio_30002 | Twilio error  - Account suspended | [Twilio - 30002](https://www.twilio.com/docs/api/errors/30002) |
 | twilio_30003 | Twilio error  - Unreachable destination | [Twilio - 30003](https://www.twilio.com/docs/api/errors/30003) |
 | twilio_30004 | Twilio error  - Message blocked | [Twilio - 30004](https://www.twilio.com/docs/api/errors/30004) |
 | twilio_30005 | Twilio error - Unknown destination  | [Twilio - 30005](https://www.twilio.com/docs/api/errors/30005) |
 | twilio_30006 | Twilio error - Unreachable carrier | [Twilio - 30006](https://www.twilio.com/docs/api/errors/30006) |
 | twilio_30007 | Twilio error - Carrier violation | [Twilio - 30007](https://www.twilio.com/docs/api/errors/30007) |
 | twilio_30008 | Twilio error - unknown error | [Twilio - 30008](https://www.twilio.com/docs/api/errors/30008) |
 | twilio_30032 | Twilio error - Toll-Free Number Has Not Been Verified | [Twilio - 30032](https://www.twilio.com/docs/api/errors/30032) |
 | c2m_1001 | Consumer ineligible to receive message | The recipient number is not eligibile to receive messages for the specific channel. Please check if its a landline number or invalid number. |
 | c2m_1300 | No engagement found for skill | Engagement not found for the skill. Please check if the skill is added in Conversational Cloud and is also activated from C2M self-service web tool. |
 | c2m_1400 | Open conversation already exists | There is an open conversation for this customer. Make sure all the conversation from this customer on the specific channel are closed and retry. |
 | c2m_5000 | Unexpected error occured  | An internal error occured in sending this message. If this continues to fail, please contact LP support. |
 | c2m_5401 | Internal Server Error | An internal error occured in sending this message. If this continues to fail, please contact LP support. |
 | c2m_5403 | Message sent failed - timeout error | There was an internal timeout sending the message. If this continues to fail, please contact LP support. |
 | c2m_5807 | Media URL is not in the permitted URLs list | The media URL (photo, document, video, etc) needs to be included in the permitted URLs list. Use the settings tab in the Proactive Web tool to add the base URL to the permitted list. |
 | proactive_16 | InApp token not found | There was an internal error. If this continues to fail, please contact LP support.  |
 | proactive_17 | InApp failed to sent message  | There was an internal error. If this continues to fail, please contact LP support.  |
 | proactive_19 | InApp certificate missing  | There was an internal error. If this continues to fail, please contact LP support.  |
 | proactive_27 | InApp - Mobile app does not support in app messaging | The recipient mobile device does not support InApp messaging |
 | proactive_28 | InApp - Consumer is not authenticated | There was an internal error. If this continues to fail, please contact LP support. |
 | proactive_500 | Message could not be sent | This error can occur because of any of the following reasons: open conversation exists, invalid input, network errors, internal connector error. If this continues to fail in spite of no open conversations, please contact LP support. |
 | proactive_1001 | Consumer ineligible to receive message | The recipient number is not eligibile to receive messages for the specifc channel. Please check if its a landline number or invalid number. |
 | proactive_1301| Recipient validation failed | Recipient validation failed while publishing campaign. If this continues to fail, please contact LP support. |
 | proactive_1302 | Too many variables used | The template expects less variables for creating the message to the recipient. |
 | proactive_1303 | INSUFFICIENT_VARIABLES | The template expects more variables for creating the message to the recipient. |
 | proactive_1400 | Open conversation already exists | There is an open conversation for this customer. Make sure all the conversation from this customer on the specific channel are closed and retry. |
 | proactive_1401 | Bad request / Invalid Input | There was an internal error. If this continues to fail, please contact LP support. |
 | proactive_1800 | Open conversation already exists for inapp | There is an open conversation for this customer on the inapp channel. Make sure all the conversation from this customer on the specific channel are closed and retry. |
 | proactive_5000 | Unexpected error occured  | An internal error occured in sending this message. If this continues to fail, please contact LP support. |
 | proactive_5002 | Network error occured | Network error occured. If this continues to fail, please contact LP support. |
 | proactive_5403 | Internal error occured | There was an error in internal connector component. If this continues to fail, please contact LP support. |
 | proactive_5401 | Unknown error occured  | There was an internal error. If this continues to fail, please contact LP support. |
 | proactive_5803 | InApp message sent failed | Proactive message failed to be delivered to the in-app. If this continues to fail, please contact LP support. |