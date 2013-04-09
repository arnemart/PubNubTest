compile:
	@@echo "Concatenating all scripts"
	@@rm -f main.min.js
	@@node_modules/.bin/r.js -o build.js