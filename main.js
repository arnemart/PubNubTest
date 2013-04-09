require.config({
    shim: {
        'pubnub': {
            deps: ['config'],
            init: function(config) {
                return this.PUBNUB.init({
                    publish_key: config.pubKey,
                    subscribe_key: config.subKey
                });
            }
        }
    }
});

require(['pubnub'], function(pubnub) {
    pubnub.subscribe({
        channel: 'test',
        message: function(message) {
            console.log(message);
        },
        connect: function() {
            console.log('connected!');
            pubnub.publish({
                channel: 'test',
                message: 'Message'
            });
        }
    });
});