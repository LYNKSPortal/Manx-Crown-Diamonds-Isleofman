#!/bin/bash
LOGO_BASE64=$(base64 logo.jpeg | tr -d '\n')

# Update index.html with new logo
sed -i 's|src="data:image/jpeg;base64,[^"]*"|src="data:image/jpeg;base64,'$LOGO_BASE64'"|g' index.html

echo "Logo updated in index.html"
