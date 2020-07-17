#!/bin/sh

echo "convert yaml to json Solution folder"
ruby -rjson -ryaml -e "puts YAML.load_file('./_data/solutions.yaml').to_json" > ./_scripts/solutions.json
node ./_scripts/verify_solution.js  > ./_scripts/solnOutputError.log
cat ./_scripts/solnOutputError.log
rm -f ./_scripts/documentsupdated.json
echo "FINISHED YAML TO JSON Verify For Solutions.yaml file"

echo "convert yaml to json for Documents folder "
ruby -rjson -ryaml -e "puts YAML.load_file('./_data/documentsupdated.yaml').to_json" > ./_scripts/documentsupdated.json
node ./_scripts/verify_documents.js > ./_scripts/docOutputError.log
cat ./_scripts/docOutputError.log
# rm -f ./_scripts/documentsupdated.json
echo "FINISHED YAML TO JSON Verify For Documentsupdated.yaml file"

