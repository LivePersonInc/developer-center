// let reader = new FileReader();
let solution = require('./solutions.json');
let solution_path = "pages/Solutions/MMS/additionaloptions.md";
// import { convertToExpectedFolderName, fileExists, convertToExpectedFileName } from './common_functions.js'
const commonMethods = require('./common_functions.js');
//import CommonMethods from './common_functions';

const fs = require("fs"); // Or `import fs from "fs";` with ESM
let errorCounter = 0;

(function () {
    solution.forEach(item => {
        // TODO use file reader to see if folder exists
        solution_path = "pages/Solutions/";
        solution_path += commonMethods.convertToExpectedFolderName(item.solutionname) + '/';
        // console.log('Solution path updated :', solution_path)
        if (fs.existsSync(solution_path) && item.documents) {
            // console.log('Found folder HOOORAH :', folderName(item.solutionname))

            item.documents.forEach(doc => {
                var document_path = solution_path
                //check if document is a folder 
                if (doc.documentname.pages) {
                    // console.log("Doc is a folder")
                    document_path += commonMethods.convertToExpectedFolderName(doc.documentname) + '/'
                    if (fs.existsSync(document_path)) {
                        // Check if pages have subpages
                        console.log('Doc Folder exists');
                        //now loop over pages
                    }
                    else {
                        console.log(`${doc.documentname} file doesn't exist or is not named properly.`);
                        errorCounter++;
                    }
                }
                //check if document is a file
                else if (doc.documentname) {
                    // check if file exists
                    let fName = commonMethods.convertToExpectedFileName(doc.documentname);
                    document_path = solution_path + fName + '.md'
                    //solution_path += filefName + '.md';
                    // console.log('solution path is : ', solution_path);
                    if (fs.existsSync(document_path)) {
                        console.log('This file exists: ', document_path);
                        let pagename = commonMethods.get_line(document_path, 1, function (err, line) {
                            // console.log("pagename&&&:", line.substring(10));
                            console.log("\n");
                            if (line.substring(10).includes("\"")) {
                                console.log(`Page name: ${line.substring(10)} Should not contain double quotes `)
                                errorCounter++;
                            }
                            else if (!(doc.documentname === line.substring(10))) {
                                console.log(`Page name: ${line.substring(10)} in file does not match the layout spec: ${fileName}`)
                                errorCounter++;
                            }
                        })
                    }
                    else {
                        console.log('Could not find this file ', document_path);
                        errorCounter++;
                    }
                } else {
                    console.log(`${doc.documentname} file doesn't exist or is not named properly.
                  file name should take title, make it lower case and add dashes where spaces are
                  i.e.  File Name should be file-name
                  `);
                }
            })
        } else {
            console.log(` ${commonMethods.convertToExpectedFolderName(item.solutionname)} folders doesn't exist or is not named properly.
            `);
            errorCounter++;
        }
    })
    console.log("\n\n Number of errors: ", errorCounter)
    if (errorCounter > 0) {
        throw new Error('Please address the errors and commit again in the solutions folder. These errors are in the logs under the _scripts folder : ' + errorCounter)
    }
    return errorCounter;
}());

