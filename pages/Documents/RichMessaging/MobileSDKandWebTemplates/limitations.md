---
pagename: Limitations
redirect_from:
  - rich-messaging-structured-content-limitations.html
  - structured-content-mobile-sdk-and-web-templates-limitations.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Mobile SDK and Web Templates
permalink: mobile-sdk-and-web-templates-limitations.html
indicator: both
---

### Maps

Both the web window (visitor side) and the workspace (agent side) do not show map by user-specific location but instead shows a static snapshot, the default map view defined.

### Styling

#### Mobile

* Only the following parameters can be configured in Bubble branding when using the In*App SDK. All other attributes are inherited from the SDK configuration:

  * Card border width

  * Card border color

* Structured content JSON affects text formatting in the structured content "Text" element but only the following parameters can be configured for the "Text" element:

    * Font size

    * Font style (Italic, Bold)

    * Font color

    * Background color

#### Web (Chat/Messaging)

* You cannot customize the branding of the structured content bubble in the web window view.

* Cards may be branded using the JSON template only.
