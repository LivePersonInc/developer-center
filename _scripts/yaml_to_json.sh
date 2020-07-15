#!/bin/sh

echo "convert yaml to json solution HI"
ruby -rjson -ryaml -e "puts YAML.load_file('./_data/solutions.yaml').to_json" > ./_scripts/solutions.json
node ./_scripts/verify_solution.js  > ./_scripts/solnOutputError.log
cat ./_scripts/solnOutputError.log
# sPASS=node ./_scripts/verify_solution.js
 rm -f ./_scripts/documentsupdated.json
echo "FINISHED YAML TO JSON SOLUTION"

echo "convert yaml to json documents "
ruby -rjson -ryaml -e "puts YAML.load_file('./_data/documentsupdated.yaml').to_json" > ./_scripts/documentsupdated.json
node ./_scripts/verify_documents.js > ./_scripts/docOutputError.log
cat ./_scripts/docOutputError.log
# dPASS=node ./_scripts/verify_documents.js
 rm -f ./_scripts/documentsupdated.json