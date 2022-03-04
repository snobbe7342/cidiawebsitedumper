#!/bin/sh
mkdir -p ~/Library/Application Support/Mozilla/NativeMessagingHosts/
jq '.path= "'$PWD'/CidiaWebsiteDump_companion.sh"' CidiaWebsiteDump_companion.json > ~/Library/Application Support/Mozilla/NativeMessagingHosts/CidiaWebsiteDump_companion.json