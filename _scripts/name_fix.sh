#!/bin/sh
REGEX_DASH=" - "
REGEX_PLUS=" + "
REGEX_SLASH=" / "
REGEX_AMPERSAND=" & "
REGEX_QUOTE="\""
REGEX_COMMA=", "
REGEX_APOSTROPHE="'"
REGEX_EXCLAMATION="\!"
REGEX_SPACE=" "
REGEX_QUESTION="\?"
REGEX_PERIOD="\."
REGEX_OPEN_PARENTHESIS="\("
REGEX_CLOSE_PARENTHESIS=")"

find ./pages/* -type d > ./_scripts/newFile.txt


# Print all files that end in md.
# Ignore Release notes folder
# Write to file list
find ./pages -name '*.md' -not -path "*/ReleaseNotes/*" -print > ./_scripts/flieList.txt
input="./_scripts/flieList.txt"
while IFS= read -r line
do
    # Get file path
    path=${line%/*}
    # Get file name
    currentFileName=${line##*/}
    # Get pagename from file
    page=$(sed -n '2p' "$line")
    page=${page:10}
    if [[ $page =~ $REGEX_DASH ]]; then
        while [[ $page =~ $REGEX_DASH ]]; do
            page=${page/$REGEX_DASH/"-"}
        done;
    fi
    if [[ $page =~ $REGEX_PLUS ]]; then
        while [[ $page =~ $REGEX_PLUS ]]; do
            page=${page/$REGEX_PLUS/"-"}
        done;
    fi
    if [[ $page =~ $REGEX_SLASH ]]; then
        while [[ $page =~ $REGEX_SLASH ]]; do
            page=${page/$REGEX_SLASH/"-"}
        done;
    fi
    if [[ $page =~ $REGEX_AMPERSAND ]]; then
        while [[ $page =~ $REGEX_AMPERSAND ]]; do
            page=${page/$REGEX_AMPERSAND/"-"}
        done;
    fi
    if [[ $page =~ $REGEX_COMMA ]]; then
        while [[ $page =~ $REGEX_COMMA ]]; do
            page=${page/$REGEX_COMMA/"-"}
        done;
    fi
    if [[ $page =~ $REGEX_APOSTROPHE ]]; then
        while [[ $page =~ $REGEX_APOSTROPHE ]]; do
            page=${page/$REGEX_APOSTROPHE/"-"}
        done;
    fi
   

    # Removes leading spaces
    page="${page#"${page%%[![:space:]]*}"}"
   
    if [[ $page =~ $REGEX_SPACE ]]; then
        while [[ $page =~ $REGEX_SPACE ]]; do
            page=${page/$REGEX_SPACE/"-"}
        done;
    fi
    if [[ $page =~ $REGEX_EXCLAMATION ]]; then
        while [[ $page =~ $REGEX_EXCLAMATION ]]; do
            page=${page/$REGEX_EXCLAMATION/""}
        done;
    fi
    if [[ $page =~ $REGEX_QUESTION ]]; then
        while [[ $page =~ $REGEX_QUESTION ]]; do
            page=${page/$REGEX_QUESTION/""}
        done;
    fi
    if [[ $page =~ $REGEX_PERIOD ]]; then
        while [[ $page =~ $REGEX_PERIOD ]]; do
            page=${page/$REGEX_PERIOD/""}
        done;
    fi
    if [[ $page =~ $REGEX_OPEN_PARENTHESIS ]]; then
        while [[ $page =~ $REGEX_OPEN_PARENTHESIS ]]; do
            page=${page/$REGEX_OPEN_PARENTHESIS/""}
        done;
    fi
    if [[ $page =~ $REGEX_CLOSE_PARENTHESIS ]]; then
        while [[ $page =~ $REGEX_CLOSE_PARENTHESIS ]]; do
            page=${page/$REGEX_CLOSE_PARENTHESIS/""}
        done;
    fi
    if [[ $page =~ $REGEX_QUOTE ]]; then
        while [[ $page =~ $REGEX_QUOTE ]]; do
            page=${page/$REGEX_QUOTE/""}
        done;
    fi
    # Lowercase
    fileName="$(tr [A-Z] [a-z] <<< "$page")"
    fileName="${fileName}.md"
    current="${path}/${currentFileName}"
    new="${path}/${fileName}"
    # Make new file with new name
    # Remove old file
    mv -f "$current" "$new"
done < "$input"
# Clean up
rm ./_scripts/flieList.txt
### This handles folder name updates



input="./_scripts/newFile.txt"
while IFS= read -r line
do
    if [[ "${line}" =~ $REGEX_SPACE ]]; then
        echo "${line}" >> ./_scripts/badFolders.txt
    fi
    folder=${line##*/} 
    firstLetter="${folder:0:1}"
    if [[ "$firstLetter" =~ [a-z] ]]; then
        echo "${line}" >> ./_scripts/badFolders.txt
    fi
done < "$input"
rm -f ./_scripts/newFile.txt
tail -r ./_scripts/badFolders.txt > ./_scripts/badFoldersR.txt
rm -f ./_scripts/badFolders.txt
input="./_scripts/badFoldersR.txt"
while IFS= read -r line
do
    #Get file path
    path=${line%/*}
    # Get file name
    currentFolder=${line##*/}
    folder=$currentFolder
    
    if [[ $folder =~ $REGEX_BASIC_DASH ]]; then
        while [[ $folder =~ $REGEX_BASIC_DASH ]]; do
            folder=${folder/$REGEX_BASIC_DASH/" "}
        done;
    fi
    
    # Title case
    folder=$( echo "${folder}" | awk '{for(i=1;i<=NF;i++)sub(/./,toupper(substr($i,1,1)),$i)}1')
    # Remove spaces in the titlecase folder namevariab;e
   if [[ "${folder}" =~ $REGEX_SPACE ]]; then
         while [[ "${folder}" =~ $REGEX_SPACE ]]; do
             folder="${folder/$REGEX_SPACE/}"
            #  echo "${line}" >> ./_scripts/badFolders.txt
         done;
    fi
    current="${path}/${currentFolder}"
    new="${path}/${folder}"
    mv -f "$current" "$new"
done < "$input"
rm -f ./_scripts/badFoldersR.txt