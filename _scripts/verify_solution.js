// let reader = new FileReader();
let solution = require('./solutions.json');
let solution_path = "pages/Solutions/MMS/additionaloptions.md";
let document_path = "pages/documents/";
const fs = require("fs"); // Or `import fs from "fs";` with ESM
let errorCounter = 0;
const REGEX_DASH = " - ";
const REGEX_PLUS = " + ";
const REGEX_SLASH = " / ";
const REGEX_AMP = " & ";
const REGEX_QUOTE = "\"";
(function () {

    solution.forEach(item => {
        // TODO use file reader to see if folder exists
        solution_path = "pages/Solutions/";
        solution_path += folderName(item.solutionname) + '/';
        // console.log('Solution path updated :', solution_path)
        if (fs.existsSync(solution_path) && item.documents) {
            // console.log('Found folder HOOORAH :', folderName(item.solutionname))

            item.documents.forEach(doc => {
                // TODO use file reader to see if folder exists
                var document_path = solution_path

                //check if document is a folder 
                if (doc.documentname.pages) {
                    //TODO add for loop for pages.check
                    // console.log("Doc is a folder")
                    document_path += folderName(doc.documentname) + '/'
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
                    let fName = fileName(doc.documentname);
                    document_path = solution_path + fName + '.md'
                    //solution_path += filefName + '.md';
                    // console.log('solution path is : ', solution_path);
                    if (fs.existsSync(document_path)) {
                        console.log('This file exists: ', document_path);
                        let pagename = get_line(document_path, 1, function (err, line) {
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
            console.log(` ${folderName(item.solutionname)} folders doesn't exist or is not named properly.
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

function fileName(file) {
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
        console.log('UNIQUE FILE', file);
        file = file.replace(regex, '');
        console.log('UNIQUE FILE fixed', file);
    }
    return file.toLowerCase().split(' ').join('-').trim()
}
function folderName(folder) {
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

