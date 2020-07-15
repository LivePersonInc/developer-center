const REGEX_DASH = " - ";
const REGEX_PLUS = " + ";
const REGEX_SLASH = " / ";
const REGEX_AMP = " & ";
const REGEX_QUOTE = "\"";
let errorCounter = 0;
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const { name } = require("browser-sync");
module.exports = {
    convertToExpectedFileName: function (file) {
        // console.log('file name is:', file.toLowerCase().split(' ').join('-').trim());
        let regex;

        if (file.includes(REGEX_DASH)) {
            regex = / - /gi;
            console.log('UNIQUE FILE', file);
            file = file.replace(regex, '-');
        } else if (file.includes(REGEX_PLUS)) {
            regex = / + /gi;
            console.log('UNIQUE FILE', file);
            file = file.replace(regex, '-');
            console.log('UNIQUE FILE fixed', file);
        } else if (file.includes(REGEX_SLASH)) {
            regex = / \/ /gi;
            console.log('UNIQUE FILE', file);
            file = file.replace(regex, '-');
            console.log('UNIQUE FILE fixed', file);
        } else if (file.includes(REGEX_AMP)) {
            regex = / & /gi;
            console.log('UNIQUE FILE', file);
            file = file.replace(regex, '-');
            console.log('UNIQUE FILE fixed', file);
        } else if (file.includes(REGEX_QUOTE)) {
            regex = /"/gi;
            console.log('UNIQUE FILE QUOTE', file);
            file = file.replace(regex, '');
            console.log('UNIQUE FILE fixed', file);
        }
        return file.toLowerCase().split(' ').join('-').trim();

    },
    convertToExpectedFolderName: function (folder) {
        // console.log('Folder name is:', folder.split(' ').join('').trim());
        return folder.split(' ').join('').trim();
    },

    get_line: function (filename, line_no, callback) {
        var data = fs.readFileSync(filename, 'utf8');
        var lines = data.split("\n");

        if (+line_no > lines.length) {
            throw new Error('File end reached without finding line');
        }

        callback(null, lines[+line_no]);
    },

    pageNameMatchesLayout: function (fileName, path) {
        // console.log('This file exists: ', path);
        this.get_line(path, 1, function (err, line) {
            // console.log("___pagename___:", line.substring(10)); this reads the first line of file which is always pagename
            if (line.substring(10).includes("\"")) {
                console.log(`Page name: ${line.substring(10)} Should not contain double quotes `)
                errorCounter++;
            }
            else if (!(fileName === line.substring(10))) {
                console.log(`Page name: ${line.substring(10)} in file does not match the layout spec: ${fileName}`)
                errorCounter++;
            }
        })
    },
    findTreePath: function (path) {
        // todo rename conversation-builder-tutorials-guides-getting-started.html ---
        let nameArr = { 'documentname': null, 'subfoldername': null, 'permalink': null, 'pagename': null }

        for (let i = 1; i < 22; i++) {
            try {
                this.get_line(path, i, function (err, line) {
                    if (line.includes('documentname:')) {
                        nameArr.documentname = line.substring(14);
                    } else if (line.includes('subfoldername:')) {
                        nameArr.subfoldername = line.substring(15);
                    } else if (line.includes('permalink:')) {
                        nameArr.permalink = line.substring(11);
                    } else if (line.includes('pagename:')) {
                        nameArr.pagename = line.substring(10);
                    }
                })
            } catch (e) {
                console.log(' reached the end of file', e);
                break;
            }
        }
        return nameArr;
    },
    fileExists: function (fileName, path) {
        // check if file exists
        let convertedFileName = this.convertToExpectedFileName(fileName);
        let fileName_path = path + convertedFileName + '.md'
        if (fs.existsSync(fileName_path)) {
            this.pageNameMatchesLayout(fileName, fileName_path);
            this.verifyPermalink(fileName_path);
        }
        else {
            console.log(`Could not find this file:\n ${convertedFileName}.md in: \n ${path}\n\n`);
            errorCounter++;
        }
    },
    resetErrorCounter: function () {
        errorCounter = 0;
    },
    getErrorCount: function () {
        return errorCounter;
    },
    verifyPermalink: function (path) {
        let currentPageInfo = this.findTreePath(path);
        console.log("CURRENT PAGE INFO : ", currentPageInfo);
        let expectedPermalink;
        // loop through get line method to search for documentname, pagename, subfoldername and p
        let pagename = this.convertToExpectedFileName(currentPageInfo.pagename);
        let documentname = "";
        let subfoldername = "";

        if (currentPageInfo.documentname !== null) {
            // document name exists check if subfoldername exists
            documentname = this.convertToExpectedFileName(currentPageInfo.documentname);
            if (currentPageInfo.subfoldername !== null) {
                subfoldername = this.convertToExpectedFileName(currentPageInfo.subfoldername);
                expectedPermalink = `${documentname}-${subfoldername}-${pagename}.html`;
                if (currentPageInfo.permalink === expectedPermalink) {
                    console.log("THE PERMALINK IS VALID");
                } else {
                    console.log(`The permalink is invalid found: ${currentPageInfo.permalink}`);
                    console.log(`Expected permalink: ${expectedPermalink}`);
                    errorCounter++;
                }
            }
            else {
                expectedPermalink = `${documentname}-${pagename}.html`;
                if (currentPageInfo.permalink === expectedPermalink) {
                    console.log("THE PERMALINK IS VALID");
                } else {
                    console.log(`The permalink is invalid found: ${currentPageInfo.permalink}`);
                    console.log(`Expected permalink: ${expectedPermalink}`);
                    errorCounter++;
                }
            }
        } else {
            expectedPermalink = `${pagename}.html`;
            if (currentPageInfo.permalink === expectedPermalink) {
                console.log("THE PERMALINK IS VALID");
            } else {
                console.log(`The permalink is invalid found: ${currentPageInfo.permalink}`);
                console.log(`Expected permalink: ${expectedPermalink}`);
                errorCounter++;
            }
        }

    }
}
