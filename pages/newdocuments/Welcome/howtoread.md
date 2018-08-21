---
pagename: How to Read Our Documents
sitesection: Documents
categoryname: Guides
documentname: Getting Started with LiveEngage APIs
permalink: getting-started-with-liveengage-apis-how-to-read-our-documents.html
indicator: both
---

While there is some variety across LivePerson's documents, we try to stick to an overall standardized format. Therefore, it should be relatively easy to find the information you need inside each document. Let's break down how each structure is constructed:

1) Overview. Every document starts with an overview of the API it documents. This overview contains either a textual description of what the API does or the authentication methods supported by the API (see above for more details). The overview will then contain use cases for the API, more information on working with the API if necessary (like extra installation steps, other APIs which support it and so forth).

2) Getting Started. This is only included in some APIs, where further configuration or installation steps are required (for example, the Connector API and the Monitor API which require an app installation process). Where this section doesn't exist, it means there is no further installation needed and you can start working with the API once you've authenticated.

3) Methods. These are the actual API calls from which the API is comprised. Each method is broken down in the following way:

  * A textual description of the method and what it does along with any special considerations to using it.

  * **The request**. This will include the HTTP method and the URL to which it should be sent.

    * The request headers. Various HTTP headers that have to be passed along with the request.

    * Request body. What is the payload (usually JSON) that needs to be passed with this request? Includes an example of such a body.

  * **The response**. What should you expect to get back from the request?

    * Elements in the response. This will break down the response example and explain each key and its values.

    * Response codes. What are the different codes sent back with this response and what do they represent?

4) Any additional information about the API. This field changes between each API. Some of our APIs require understanding of different LiveEngage services (like the Connector API) or even third party software. In those cases, you'll find additional folders. Sometimes, these will appear before Methods, if they're required for the methods to work, but they will usually appear afterwards.

5) Appendix. The appendix will include any special requirements or notes necessary to working with the API like security certificates, advanced features and more.

**Note**: our recommendation is to start reading each document from its overview in order to first familiarize yourself with what it does and how it works. Then, moving on to the Methods section is the next logical step. The methods comprise the important parts of the API and cover all its functionality. Even if you're not a developer, reviewing this section will give you a more comprehensive and in depth idea of what can be achieved with the API.
