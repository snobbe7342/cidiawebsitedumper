#!/bin/sh
mkdir -p ~/.config/google-chrome/NativeMessagingHosts/
jq '.path= "'$PWD'/CidiaWebsiteDump_companion.sh"' CidiaWebsiteDump_companion.json > ~/.config/google-chrome/NativeMessagingHosts/CidiaWebsiteDump_companion.json