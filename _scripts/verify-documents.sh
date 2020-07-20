#!/bin/sh

echo "Verifying documents match the  documentsupdated yaml file \\n \\n"
ruby -rjson -ryaml -e "puts YAML.load_file('./_data/documentsupdated.yaml').to_json" > ./_scripts/documentsupdated.json
node ./_scripts/verify_documents.js > ./_scripts/docOutputError.log
cat ./_scripts/docOutputError.log
rm -f ./_scripts/documentsupdated.json

input="./_scripts/docOutputError.log"
allowCommit="false"

while IFS= read -r line
do
  message=${line:0:8}
    if [[ $message == "Congrats" ]]; then

        allowCommit="true"
    fi
done < "$input"
if [[ $allowCommit == "true" ]]; then
    rm -f ./_scripts/docOutputError.log
    else
    echo 'THERE ARE ISSUES IN BUILD PLEASE REVIEW docOutputError.log UNDER THE _scripts FOLDER BEFORE BEING ABLE TO COMMIT'
    exit 1
fi

