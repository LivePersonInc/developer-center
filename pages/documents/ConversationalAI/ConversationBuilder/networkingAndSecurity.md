---
pagename: Networking & Security
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-networking-security.html
indicator: both
---

If you have [IP restrictions](https://knowledge.liveperson.com/security-regulations-security-ip-restriction.html) in place, you’ll need to do some whitelisting so that Conversation Builder can make calls to your brand’s systems and vice versa. The specifics on what to whitelist vary depending on whether your implementation is hosted in the LivePerson Cloud or Amazon Web Services (AWS) environment:

* **LivePerson Cloud**: This is your environment if you access Conversation Builder from within LiveEngage, i.e., your browser is pointing to the “liveperson.net” domain.
* **AWS**: This is your environment if you access Conversation Builder directly, i.e., your browser is pointing to the “livepersonai.com” domain.

### LivePerson Cloud

If your implementation is hosted in LivePerson Cloud, you can find all details on whitelisting [here](https://knowledge.liveperson.com/security-regulations-security-configuring-your-firewall.html) in the Knowledge Center.

### AWS

If your implementation is hosted in AWS, in general, use Amazon’s list of IP ranges to guide your whitelisting. Be aware that the list is updated periodically by Amazon, so check back periodically as well.

More specifically, refer to Amazon’s **ip-ranges JSON file** that you can access from the [AWS IP Address Ranges](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html) page (see the “Download” section). The sections below describe the IP ranges of interest.

#### Brand system calls to Conversation Builder

| To use this... | Whitelist this in the ip-ranges file... | Notes | 
|----|----|----|
| Conversation Builder's web portal | All IPs for the CLOUDFRONT service and the EC2 service | Whitelisting the domain is recommended over whitelisting the IPs. |
| Web View integration API | All IPs for the EC2 service | |

#### Conversation Builder calls to brand systems

| To use this... | Whitelist this in the ip-ranges file... |
|----|----|
| Agent connectors to LiveEngage | All IPs for the EC2 service |
| API integrations | All IPs for the EC2 service |
| Custom integrations (if any developed specifically for your brand) | All IPs for the EC2 service |

