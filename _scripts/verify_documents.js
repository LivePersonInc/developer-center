// let reader = new FileReader();
let data = require('./documentsupdated.json');
const fs = require("fs"); // Or `import fs from "fs";` with ESM
let path;
let errorCounter = 0;
const REGEX_DASH = " - ";
const REGEX_PLUS = " + ";
const REGEX_SLASH = " / ";
const REGEX_AMP = " & ";
const REGEX_QUOTE = "\"";

(function () {

   let pass = 0; // 0 is true -1 is false
   data.forEach(item => {
      path = "pages/documents/";
      path += convertToExpectedFolderName(item.categoryname) + '/';
      if (fs.existsSync(path) && item.documents) {
         item.documents.forEach(doc => {
            var document_path = path
            //check if document is a folder 
            if (doc.pages) {
               document_path += convertToExpectedFolderName(doc.documentname) + '/'
               // console.log("Doc is a folder")
               if (fs.existsSync(document_path)) {
                  // console.log('Doc Folder exists');
                  //now loop over pages
                  doc.pages.forEach(page => {
                     let page_path = document_path;
                     if (page.subpages) {
                        page_path += convertToExpectedFolderName(page.pagename) + '/'
                        if (fs.existsSync(page_path)) {
                           page.subpages.forEach(subpage => {
                              fileExists(subpage.subpagename, page_path)
                           })
                        } else {
                           console.log(`${page.pagename} folder doesn't exist or is not named properly. \n\n`);
                        }
                        // TODO
                     }
                     fileExists(page.pagename, document_path)
                  })
               }
               else {
                  console.log(`${doc.documentname} folder doesn't exist or is not named properly. \n\n`);
               }
            }
            fileExists(doc.documentname, document_path)
         })

      } else {
         console.log(` ${convertToExpectedFolderName(item.categoryname)} folders doesn't exist or is not named properly. \n\n`);
      }
   })
   console.log("\n\n Number of errors: ", errorCounter)
   if (errorCounter > 0) {
      throw new Error('Please address the errors and commit again in the documents folder. These errors are in the logs under the _scripts folder : ' + errorCounter)
   }
   return errorCounter
}());

function convertToExpectedFileName(file) {
   // console.log('file name is:', file.toLowerCase().split(' ').join('-').trim());
   let regex;

   if (file.includes(REGEX_DASH)) {
      regex = / - /gi;
      console.log('UNIQUE FILE', file);
      file = file.replace(regex, '-');
   } else if (file.includes(REGEX_PLUS)) {
      regex = / + /gi;
      console.log('UNIQUE FILE', file);
      file = file.replace(regex, '+');
      console.log('UNIQUE FILE fixed', file);
   } else if (file.includes(REGEX_SLASH)) {
      regex = / \/ /gi;
      console.log('UNIQUE FILE', file);
      file = file.replace(regex, '-');
      console.log('UNIQUE FILE fixed', file);
   } else if (file.includes(REGEX_AMP)) {
      regex = / & /gi;
      console.log('UNIQUE FILE', file);
      file = file.replace(regex, '&');
      console.log('UNIQUE FILE fixed', file);
   } else if (file.includes(REGEX_QUOTE)) {
      regex = /"/gi;
      console.log('UNIQUE FILE QUOTE', file);
      file = file.replace(regex, '');
      console.log('UNIQUE FILE fixed', file);
   }
   return file.toLowerCase().split(' ').join('-').trim();

}
function convertToExpectedFolderName(folder) {
   // console.log('Folder name is:', folder.split(' ').join('').trim());
   return folder.split(' ').join('').trim();
}

function get_line(filename, line_no, callback) {
   var data = fs.readFileSync(filename, 'utf8');
   var lines = data.split("\n");

   if (+line_no > lines.length) {
      throw new Error('File end reached without finding line');
   }

   callback(null, lines[+line_no]);
}

function pageNameMatchesLayout(fileName, path) {
   // console.log('This file exists: ', path);
   get_line(path, 1, function (err, line) {
      // console.log("___pagename___:", line.substring(10));
      if (line.substring(10).includes("\"")) {
         console.log(`Page name: ${line.substring(10)} Should not contain double quotes `)
         errorCounter++;
      }
      else if (!(fileName === line.substring(10))) {
         console.log(`Page name: ${line.substring(10)} in file does not match the layout spec: ${fileName}`)
         errorCounter++;
      }
   })
}
function fileExists(fileName, path) {
   // check if file exists
   let convertedFileName = convertToExpectedFileName(fileName);
   let fileName_path = path + convertedFileName + '.md'
   if (fs.existsSync(fileName_path)) {
      pageNameMatchesLayout(fileName, fileName_path)
   }
   else {
      console.log(`Could not find this file:\n ${convertedFileName}.md in: \n ${path}\n\n`);
      errorCounter++;
   }
}


