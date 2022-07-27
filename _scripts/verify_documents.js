// let reader = new FileReader();
let data = require('./documentsupdated.json');
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const commonMethods = require('./common_functions.js');
let root_folder_name;
let path;

(function () {
   commonMethods.resetErrorCounter();
   let pass = 0; // 0 is true -1 is false
   data.forEach(item => {
      path = "pages/Documents/";
      path += commonMethods.convertToExpectedFolderName(item.categoryname) + '/';
      root_folder_name = item.categoryname;
      if (fs.existsSync(path) && item.documents) {
         item.documents.forEach(doc => {
            var document_path = path
            //check if document is a folder 
            if (doc.pages) {
               document_path += commonMethods.convertToExpectedFolderName(doc.documentname) + '/'
               // console.log("Doc is a folder")
               if (fs.existsSync(document_path)) {
                  // console.log('Doc Folder exists');
                  //now loop over pages
                  doc.pages.forEach(page => {
                     let page_path = document_path;
                     if (page.subpages) {
                        page_path += commonMethods.convertToExpectedFolderName(page.pagename) + '/'
                        if (fs.existsSync(page_path)) {
                           page.subpages.forEach(subpage => {
                              commonMethods.fileExists(subpage.subpagename, page_path, root_folder_name)
                           })
                        } else {
                           console.log(`Folder Name: ${commonMethods.convertToExpectedFolderName(page.pagename)} doesn't exist in ${document_path} or is not named properly. \n`);
                           commonMethods.addErrorCount();
                        }

                     } else {
                        commonMethods.fileExists(page.pagename, document_path, root_folder_name)
                     }
                  })
               }
               else {
                  console.log(`Folder Name: ${commonMethods.convertToExpectedFolderName(doc.documentname)} doesn't exist in ${path} or is not named properly. \n`);
                  commonMethods.addErrorCount();
               }
            } else {
               commonMethods.fileExists(doc.documentname, document_path, root_folder_name);
            }
         })

      } else {
         console.log(`Folder Name: ${commonMethods.convertToExpectedFolderName(item.categoryname)} in pages/Documents/ doesn't exist or is not named properly. \n`);
         commonMethods.addErrorCount();
      }
   })
   let errorCounter = commonMethods.getErrorCount();
   console.log("\nNumber of errors: ", errorCounter)
   if (errorCounter > 0) {
      console.log("\n Number of errors: ", errorCounter)
   } else {
      console.log('Congrats there are no errors in the repo');
   }
   return errorCounter
}());


