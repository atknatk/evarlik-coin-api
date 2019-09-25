const IOTA = require('iota.lib.js');

var iota = new IOTA({
    'host': 'http://localhost',
    'port': 14265
});

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 150; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const iotaService = {

    createNewAddress(cb) {
        var digestOne = iota.multisig.getDigest(makeid(), 0, 1);
        var options = {};

        options.index = 0;
        options.security = 2;
        options.deterministic = "off";
        options.checksum = true;
        options.total = 1;
        iota.api.getNewAddress(digestOne, options, (e, add) => {
            cb(digestOne, add[0]);
        });
        /*return {
            wallet: {
                secret: digestOne,
                address: address
            }
        };*/
    },
};
export default iotaService;

// process.on('unhandledRejection', up => { console.log(up) })