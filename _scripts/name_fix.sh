#!/bin/sh
REGEX_DASH=" - "
REGEX_PLUS=" + "
REGEX_SLASH=" / "
REGEX_AMP=" & "
REGEX_SPACE=" "
REGEX_QUOTE="\""
REGEX_BASIC_DASH="-"
# Print all files that end in md.
# Ignore Release notes folder
# Write to file list
# find ./pages -name '*.md' -not -path "*/ReleaseNotes/*" -print > ./_scripts/flieList.txt
# input="./_scripts/flieList.txt"
# while IFS= read -r line
# do
#     # Get file path
#     path=${line%/*}
#     # Get file name
#     currentFileName=${line##*/}
#     # Get pagename from file
#     page=$(sed -n '2p' "$line")
#     page=${page:10}
#     if [[ $page =~ $REGEX_DASH ]]; then
#         while [[ $page =~ $REGEX_DASH ]]; do
#             page=${page/$REGEX_DASH/"-"}
#         done;
#     fi
#     if [[ $page =~ $REGEX_PLUS ]]; then
#         while [[ $page =~ $REGEX_PLUS ]]; do
#             page=${page/$REGEX_PLUS/"+"}
#         done;
#     fi
#     if [[ $page =~ $REGEX_SLASH ]]; then
#         while [[ $page =~ $REGEX_SLASH ]]; do
#             page=${page/$REGEX_SLASH/"-
#             "}
#         done;
#     fi
#     if [[ $page =~ $REGEX_AMP ]]; then
#         while [[ $page =~ $REGEX_AMP ]]; do
#             page=${page/$REGEX_AMP/"&"}
#         done;
#     fi
#     # Removes leading spaces
#     page="${page#"${page%%[![:space:]]*}"}"
#     if [[ $page =~ $REGEX_SPACE ]]; then
#         while [[ $page =~ $REGEX_SPACE ]]; do
#             page=${page/$REGEX_SPACE/"-"}
#         done;
#     fi
#     if [[ $page =~ $REGEX_QUOTE ]]; then
#         while [[ $page =~ $REGEX_QUOTE ]]; do
#             page=${page/$REGEX_QUOTE/""}
#         done;
#     fi
#     # Lowercase
#     fileName="$(tr [A-Z] [a-z] <<< "$page")"
#     fileName="${fileName}.md"
#     current="${path}/${currentFileName}"
#     new="${path}/${fileName}"
#     # Make new file with new name
#     # Remove old file
#     mv -f "$current" "$new"
# done < "$input"
# # Clean up
# rm ./_scripts/flieList.txt
### This handles folder name updates


for file in `find ./pages/* -type d` ; do
    folder=${file##*/}
     if [[ "$folder" =~ $REGEX_SPACE ]]; then
        echo "${file}" >> ./_scripts/badFolders.txt
        echo "BAD SPACE"
    fi
    # firstLetter="${folder:0:1}"
    # if [[ "$firstLetter" =~ [a-z] ]]; then
    #     echo "${file}" >> ./_scripts/badFolders.txt
    # fi
   
done
tail -r ./_scripts/badFolders.txt > ./_scripts/badFoldersR.txt
# rm -f ./_scripts/badFolders.txt
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
    # Remove spaces
    if [[ $folder =~ $REGEX_SPACE ]]; then
        while [[ $folder =~ $REGEX_SPACE ]]; do
            folder=${folder/$REGEX_SPACE/""}
        done;
    fi
    current="${path}/${currentFolder}"
    new="${path}/${folder}"
    echo $current
    echo $new
    echo "\n"
    # mv -f "$current" "$new"
done < "$input"
rm -f ./_scripts/badFoldersR.txt