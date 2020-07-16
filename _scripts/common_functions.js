const REGEX_DASH = " - ";
const REGEX_PLUS = " + ";
const REGEX_SLASH = " / ";
const REGEX_AMPERSAND = " & ";
const REGEX_QUOTE = "\"";
const REGEX_COMMA = ", ";
const REGEX_APOSTROPHE = "'";
const REGEX_EXCLAMATION = "!";
const REGEX_QUESTION = "?";
const REGEX_PERIOD = ".";
const REGEX_OPEN_PARENTHESIS = "(";
const REGEX_CLOSE_PARENTHESIS = ")";
let errorCounter = 0;
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const { name } = require("browser-sync");
module.exports = {
    convertToExpectedFileName: function (file) {

        let regex;

        if (file.includes(REGEX_DASH)) {
            regex = / - /gi;
            file = file.replace(regex, '-');
        }
        if (file.includes(REGEX_PLUS)) {
            regex = / + /gi;
            file = file.replace(regex, '-');
        }
        if (file.includes(REGEX_SLASH)) {
            regex = / \/ /gi;
            file = file.replace(regex, '-');
        }

        if (file.includes(REGEX_AMPERSAND)) {
            regex = / & /gi;
            file = file.replace(regex, '-');
        }
        if (file.includes(REGEX_QUOTE)) {
            regex = /"/gi;
            file = file.replace(regex, '');
        }
        if (file.includes(REGEX_COMMA)) {
            regex = /, /gi;
            file = file.replace(regex, '-');
        }
        if (file.includes(REGEX_APOSTROPHE)) {
            regex = /'/gi;
            file = file.replace(regex, '-');
        }

        if (file.includes(REGEX_EXCLAMATION)) {
            regex = /!/gi;
            file = file.replace(regex, '');
        }
        if (file.includes(REGEX_QUESTION)) {
            regex = /\?/gi;
            file = file.replace(regex, '');
        }
        if (file.includes(REGEX_PERIOD)) {
            regex = /\./gi;
            file = file.replace(regex, '-');
        }
        if (file.includes(REGEX_OPEN_PARENTHESIS)) {
            regex = /\(/gi;
            file = file.replace(regex, '');
        }
        if (file.includes(REGEX_CLOSE_PARENTHESIS)) {
            regex = /\)/gi;
            file = file.replace(regex, '');
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
                console.log(`Page name: ${line.substring(10)} Should not contain double quotes \n\n`)
                errorCounter++;
            }
            else if (!(fileName === line.substring(10))) {
                console.log(`Page name: ${line.substring(10)} in ${path} des not match the layout spec: ${fileName}\n\n`)
                errorCounter++;
            }
        })
    },
    findTreePath: function (path) {
        // todo rename conversation-builder-tutorials-guides-getting-started.html ---
        let nameArr = { 'categoryname': null, 'documentname': null, 'subfoldername': null, 'permalink': null, 'pagename': null, }
        // looking though first 50 lines in mark down for all items in array
        let PageHeaderLines = 50
        for (let i = 1; i < PageHeaderLines; i++) {
            try {
                this.get_line(path, i, function (err, line) {
                    if (line.includes('documentname:')) {
                        nameArr.documentname = line.substring(14).trim();
                    } else if (line.includes('subfoldername:')) {
                        nameArr.subfoldername = line.substring(15).trim();
                    } else if (line.includes('permalink:')) {
                        nameArr.permalink = line.substring(11).trim();
                    } else if (line.includes('pagename:')) {
                        nameArr.pagename = line.substring(10).trim();
                    }
                    else if (line.includes('categoryname:')) {
                        nameArr.categoryname = line.substring(14).trim();
                    }
                })
            } catch (e) {
                // Breaks at end of file if less then 50
                // console.log(' reached the end of file', e);
                break;
            }
        }
        return nameArr;
    },
    fileExists: function (fileName, path) {
        // check if file exists
        let convertedFileName = this.convertToExpectedFileName(`${fileName}`);
        let fileName_path = path + convertedFileName + '.md'
        if (fs.existsSync(fileName_path)) {
            this.pageNameMatchesLayout(fileName, fileName_path);
            this.verifyPermalink(fileName_path);
        }
        else {
            // console.log(`This file ${fileName} was converted into ${convertedFileName} in the path   `)
            console.log(`Page name: '${fileName}' was converted into file name:\n ${convertedFileName}.md \n And could not be found in:  ${path}\n\n`);
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
                if (currentPageInfo.permalink !== expectedPermalink) {
                    console.log(`The permalink is invalid found: ${currentPageInfo.permalink}`);
                    console.log(`Expected permalink: ${expectedPermalink} \n\n`);
                    console.log("CURRENT PAGE INFO : ", currentPageInfo);
                    errorCounter++;
                }
            }
            else {
                expectedPermalink = `${documentname}-${pagename}.html`;
                if (currentPageInfo.permalink !== expectedPermalink) {
                    console.log(`The permalink is invalid found: ${currentPageInfo.permalink}`);
                    console.log(`Expected permalink: ${expectedPermalink} \n\n`);
                    console.log("CURRENT PAGE INFO : ", currentPageInfo);
                    errorCounter++;
                }
            }
        } else {
            expectedPermalink = `${pagename}.html`;
            if (currentPageInfo.permalink !== expectedPermalink) {
                console.log(`The permalink is invalid found: ${currentPageInfo.permalink}`);
                console.log(`Expected permalink: ${expectedPermalink} \n\n`);
                console.log("CURRENT PAGE INFO : ", currentPageInfo);
                errorCounter++;
            }
        }

    }
}
