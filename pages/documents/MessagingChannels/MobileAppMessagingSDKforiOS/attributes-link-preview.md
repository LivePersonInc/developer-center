---
pagename: Link Preview
redirect_from:
  - consumer-experience-ios-sdk-attributes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK Attributes

permalink: mobile-app-messaging-sdk-for-ios-sdk-attributes-link-preview.html   

indicator: messaging
---

[short description of this topic here]

### enableLinkPreview
Enable or disable link preview feature. If disabled, user will not see site's link preview or link preview.

   - **Type:**  Bool
   - **Default:**  true

--- 

### linkPreviewBackgroundColor
Color code for the background of the link preview area inside cell.

   - **Type:**  UIColor
   - **Default:**  UIColor.white

--- 

### linkPreviewTitleTextColor
Color code for the title text inside link preview area inside cell.

   - **Type:**  UIColor
   - **Default:**  UIColor.black

--- 

### linkPreviewDescriptionTextColor 
Color code for the description text inside link preview area inside cell.

   - **Type:**  UIColor
   - **Default:**  #5B5C5E

---  

### linkPreviewSiteNameTextColor  
Color code for the description site name link preview area inside cell.

   - **Type:**  UIColor
   - **Default:**  #E2E3E3

---

### linkPreviewBorderWidth 
Double number for the outline width of link preview area inside cell.

   - **Type:**  Double
   - **Default:**  1.0

---  

### linkPreviewStyle 
Refers to the style in which the link preview cell will be displayed.

   - **Type:**  LPUrlPreviewStyle
   - **Default:**  LPUrlPreviewStyle.slim

Slim: <img src="img/linkpreviewstyleslim.png" alt="linkpreviewslim"> 

Large: <img src="img/linkpreviewstylelarge.png" alt="linkpreviewlarge"> 


--- 

### linkPreviewSiteNameTextColor 
Color code for the description site name link preview area inside cell.

   - **Type:**  UIColor
   - **Default:**  


--- 

### urlRealTimePreviewBackgroundColor 
The background color of the url real time preview.

   - **Type:**  UIColor
   - **Default:**  UIColor.white

<img src="img/realtimepreviewbackgroundcolor.png" alt="realtimepreviewbackgroundcolor"> 

---  

### urlRealTimePreviewBorderColor 
The border color of the url real time preview.

   - **Type:**  UIColor
   - **Default:**  

<img src="img/realtimepreviewbordercolor.png" alt="realtimepreviewbordercolor"> 


---  

### urlRealTimePreviewBorderWidth  
The border width of the url real time preview.

   - **Type:**  Float
   - **Default:**  

<img src="img/urlrealtimepreviewborderwidth.png" alt="urlRealTimePreviewBorderWidth">  

--- 

### urlRealTimePreviewTitleTextColor 
The title text color of the url real time preview.

   - **Type:**  UIColor
   - **Default:**  

<img src="img/urlrealtimepreviewtitletextcolor.png" alt="urlRealTimePreviewTitleTextColor"> 

---  

### urlRealTimePreviewDescriptionTextColor 
The description text color of the url real time preview.

   - **Type:**  UIColor
   - **Default:**  

<img src="img/urlrealtimepreviewdescriptiontextcolor.png" alt="urlrealtimepreviewdescriptiontextcolor"> 

---  

### useNonOGTagsForLinkPreview  
The urlPreview attribute also uses non-OG tags to parse urls instead of using only OG tags if useNonOGTagsForLinkPreview is true.

   - **Type:**  Bool
   - **Default:**  true
