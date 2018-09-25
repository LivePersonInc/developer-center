var fs = require('fs');
console.log('running');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames = []
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);

      });
    });
  });
}

// Import the module
var readdirp = require('readdirp');

var settings = {
    root: './pages/documents/Rich Messaging',
    entryType: 'files',
    depth: 3
};

// In this example, this variable will store all the paths of the files and directories inside the providen path
var allFilePaths = [];

// Iterate recursively through a folder
readdirp(settings)
    .on('data', function (entry) {
        // execute everytime a file is found in the provided directory
        console.log(entry.fullPath);
        fs.readFile(
        entry.fullPath,
        'utf-8',
        (error, content) => {
          const lines = content.split('\n');
          //console.log(lines);
          let link = lines.find(line => line.startsWith('!'));

          console.log(lines.join('\n'));
          fs.writeFile(entry.fullPath, lines.join('\n'));
        },
        (error) => {
          console.log(error);
        });
    })
    .on('warn', function(warn){
        console.log("Warn: ", warn);
    })
    .on('error', function(err){
        console.log("Error: ", err);
    })
    .on('end', function(){

        console.log(allFilePaths);
        // ["c:/file.txt","c:/other-file.txt" ...]
    })
;
