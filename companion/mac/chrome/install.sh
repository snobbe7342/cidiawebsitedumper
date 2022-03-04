#!/bin/sh
mkdir -p ~/Library/Application Support/Google/Chrome/NativeMessagingHosts/
jq '.path= "'$PWD'/CidiaWebsiteDump_companion.sh"' CidiaWebsiteDump_companion.json > ~/Library/Application Support/Google/Chrome/NativeMessagingHosts/CidiaWebsiteDump_companion.json