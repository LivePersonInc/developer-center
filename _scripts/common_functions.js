const REGEX_DASH = " - ";
const REGEX_PLUS = " + ";
const REGEX_SLASH = " / ";
const REGEX_AMP = " & ";
const REGEX_QUOTE = "\"";
let errorCounter = 0;
const fs = require("fs"); // Or `import fs from "fs";` with ESM
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
    },
    fileExists: function (fileName, path) {
        // check if file exists
        let convertedFileName = this.convertToExpectedFileName(fileName);
        let fileName_path = path + convertedFileName + '.md'
        if (fs.existsSync(fileName_path)) {
            this.pageNameMatchesLayout(fileName, fileName_path)
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
    verifyPermalink: function () {
        //     * `permalink`: this key defines the link at which the document can be found. The format of this value **MUST BE** as follows. Any other value format will cause the sidebar to malfunction:

        //   * If the page has a `subfoldername` value: documentname - subfoldername - pagename. For example: `mobile-app-messaging-sdk-for-android-advanced-features-audio-messages.html`

        //   * If the page does not have a `subfoldername` value: documentname - pagename. For example: users-api-overview.html

        // * `indicator`: this key sets the Chat or Messaging indicator (or both) on a document. It accepts `chat`, `messaging` or `both` as its value.
        //verifies permalink follows rules
    }
}
