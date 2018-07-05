var fs = require('fs');
console.log('running');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames = ['proguard-configuration.md']
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
  const lines = content.split('\n');
  //console.log(lines);
  const title = lines.find(line => line.startsWith('title')).replace('title: ', '').toLowerCase().replace(/ /g, '-');
  const level3 = lines.find(line => line.startsWith('level3')).replace('level3: ', '').toLowerCase().replace(/ /g, '-');
  const level4 = lines.find(line => line.startsWith('level4')).replace('level4: ', '').toLowerCase().replace(/ /g, '-');
  //console.log(lines.find(line => line.startsWith('title')))
  const lineOfLink = lines.findIndex(line => line.startsWith('perma'))
  lines[lineOfLink] = `permalink: ${level3}-${level4}-${title}` + '.html';
  console.log(lines.join('\n'));
  fs.writeFile(filename, lines.join('\n'));
},
(error) => {
  console.log(error);
});
