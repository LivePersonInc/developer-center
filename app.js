var fs = require('fs');
console.log('running');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
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

readFiles(
'./pages/documents/consumer experience/android-sdk/',
(filename, content) => {
  console.log(filename);
  console.log(content);
},
(error) => {
  console.log(error);
});
