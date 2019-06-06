---
pagename: Photo and file sharing
redirect_from:
  - consumer-experience-ios-sdk-attributes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK Attributes

permalink: mobile-app-messaging-sdk-for-ios-sdk-attributes-photo-and-file-sharing.html   

indicator: messaging
---

### enablePhotoSharing 
     | Bool | 
     | True - Enables Photo Sharing feature, False - Disables Photo Sharing | 
     |  | 
     | false | 

---  

### maxNumberOfSavedFilesOnDisk 
     | Int | 
     | This number represents how many files will be saved on the disk. Exceeding files are deleted when the app closes. | 
     |  | 
     | 20 | 

---   

### photosharingMenuBackgroundColor  
     | UIColor | 
     | Photo Sharing menu background color | 
     | <img src="img/photosharingmenubackgroundcolor.png" alt="photosharingmenubackgroundcolor"> | 
     | #0362AC | 

---  

### photosharingMenuButtonsBackgroundColor 
     | UIColor | 
     | Photo Sharing menu buttons background color | 
     | <img src="img/photosharingmenubuttonsbackgroundcolor.png" alt="photosharingmenubuttonsbackgroundcolor"> | 
     | UIColor.white | 

---  

### photosharingMenuButtonsTintColor  
     | UIColor | 
     | Photo Sharing menu buttons tint color | 
     | <img src="img/photosharingmenubuttonstintcolor.png" alt="photosharingmenubuttonstintcolor"> | 
     | #0362AC | 

---  

### photosharingMenuButtonsTextColor | 
     | UIColor | 
     | Photo Sharing menu buttons text color | 
     | <img src="img/photosharingmenubuttonstextcolor.png" alt="photosharingmenubuttonstextcolor"> | 
     | UIColor.white | 

---  

### cameraButtonEnabledColor | 
     | UIColor | 
     | Photo Sharing Camera button color in enabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled | 
     | <img src="img/cameraButtonColor.png" alt="cameraButtonColor"> | 
     | #0362AC | 

--- 

### cameraButtonDisabledColor  
     | UIColor | 
     | Photo Sharing Camera button color in disabled mode in the conversation screen. Will be presented only if photo sharing feature is enabled | 
     | <img src="img/cameraButtonColor.png" alt="cameraButtonColor"> | 
     | #8B8A8F | 

--- 

### fileCellLoaderFillColor | 
     | UIColor | 
     | Radial loader fill color | 
     | <img src="img/filecellloaderfillcolor.png" alt="fileCellLoaderFillColor"> | 
     | UIColor(white: 0.0, alpha: 0.5) | 

---  

### fileCellLoaderRingProgressColor  
     | UIColor | 
     | Radial loader progress color | 
     | <img src="img/filecellloaderringprogresscolor.png" alt="filecellloaderringprogresscolor"> | 
     | UIColor.white | 

---  

### fileCellLoaderRingBackgroundColor  
     | UIColor | 
     | Radial loader progress background color | 
     | <img src="img/filecellloaderringbackgroundcolor.png" alt="filecellloaderringprogresscolor"> | 
     | UIColor.lightGray | 


 Note: The disabled/enabled color of the Camera button, which is in the input text view, will change according to the sendButtonDisabledTextColor and sendButtonEnabledTextColor parameters. 