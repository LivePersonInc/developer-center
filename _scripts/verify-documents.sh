#!/bin/sh

echo "convert yaml to json for Documents folder "
ruby -rjson -ryaml -e "puts YAML.load_file('./_data/documentsupdated.yaml').to_json" > ./_scripts/documentsupdated.json
node ./_scripts/verify_documents.js > ./_scripts/docOutputError.log
cat ./_scripts/docOutputError.log
rm -f ./_scripts/documentsupdated.json
echo "FINISHED YAML TO JSON Verify For Documentsupdated.yaml file"

