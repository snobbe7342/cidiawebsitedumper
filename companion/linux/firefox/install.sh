#!/bin/sh
mkdir -p ~/.mozilla/native-messaging-hosts/
jq '.path= "'$PWD'/CidiaWebsiteDump_companion.sh"' CidiaWebsiteDump_companion.json > ~/.mozilla/native-messaging-hosts/CidiaWebsiteDump_companion.json