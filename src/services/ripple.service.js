const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    //  server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
    server: 'wss://s.altnet.rippletest.net:51233'
});

const rippleService = {

    createNewAddress() {
        var wallet = api.generateAddress();
        return {wallet: wallet};
    },
    getAddressBalance(address, res) {
        const api = new RippleAPI({
            server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
        });

        api.on('error', (errorCode, errorMessage) => {
            console.log(errorCode + ': ' + errorMessage);
        });
        api.on('connected', () => {
            console.log('connected');
        });

        api.on('disconnected', (code) => {
            // code - [close code](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent) sent by the server
            // will be 1000 if this was normal closure
            console.log('disconnected, code:', code);
        });

        api.connect().then(() => {
            api.getAccountInfo(address).then(info => {
                res.json({
                    status: 0,
                    message: info,
                });
            }).catch((error) => {
                res.json({
                    status: 2,
                    message: error.name,
                    obj: error
                });
            });
        }).then(() => {
            // return api.disconnect();
        }).catch(console.error);

        /*api.getAccountInfo(address).then(info => {
            res.json({
                status: 0,
                message: info,
            });
        }).catch((error) => {
            res.json({
                status: 2,
                message: error.name,
                obj: error
            });
        });*/

    },
    getAddressBalanceTest(address, res) {
        const api = new RippleAPI({
            //  server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
            server: 'wss://s.altnet.rippletest.net:51233'
        });

        api.on('error', (errorCode, errorMessage) => {
            console.log(errorCode + ': ' + errorMessage);
        });
        api.on('connected', () => {
            console.log('connected');
        });

        api.on('disconnected', (code) => {
            // code - [close code](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent) sent by the server
            // will be 1000 if this was normal closure
            console.log('disconnected, code:', code);
        });

        api.connect().then(() => {
            api.getAccountInfo(address).then(info => {
                res.json({
                    status: 0,
                    message: info,
                });
            }).catch((error) => {
                res.json({
                    status: 2,
                    message: error.name,
                    obj: error
                });
            });
        }).then(() => {
            // return api.disconnect();
        }).catch(console.error);

        /*api.getAccountInfo(address).then(info => {
            res.json({
                status: 0,
                message: info,
            });
        }).catch((error) => {
            res.json({
                status: 2,
                message: error.name,
                obj: error
            });
        });*/

    }

};
export default rippleService;

// process.on('unhandledRejection', up => { console.log(up) })