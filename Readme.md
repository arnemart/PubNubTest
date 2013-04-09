PubNub + AMD
============

This is a simple demo project using PubNub and AMD modules (RequireJS), created to highlight an issue where PubNub does not seem to connect unless the code is minified into a single file.

The code is very simple. The main entry point is main.js, which loads pubnub through a RequireJS shim and starts listening to the channel "test". When connected, it publishes a message through the same channel. The file `unminified.html` loads all the scripts without optimization, while the file `minified.js` loads a single javascript file that is optimized with r.js and almond.js.

In both instances, the browser console should display "connected!" followed by "Message". However this only happens in the minified file. The unminified script seems to fail to subscribe to the channel without error for an unknown reason.

To run:

1. Clone the project
2. Rename the file **config.dist.js** to **config.js** and enter your PubNub keys
3. Run `npm install` to install dependencies
4. Run `make` to build the minified javascript file