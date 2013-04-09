PubNub + AMD
============

This is a simple demo project using PubNub and AMD modules (RequireJS).

The code is very simple. The main entry point is main.js, which loads pubnub through a RequireJS shim and starts listening to the channel "test". When connected, it publishes a message through the same channel. The file `unminified.html` loads all the scripts without optimization, while the file `minified.js` loads a single javascript file that is optimized with r.js and almond.js.

To run:

1. Clone the project
2. Rename the file **config.dist.js** to **config.js** and enter your PubNub keys
3. Run `npm install` to install dependencies
4. Run `make` to build the minified javascript file