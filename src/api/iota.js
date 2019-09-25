import {Router} from "express";
import {version} from "../../package";
import iotaService from "../services/iota.service";
import rippleService from "../services/ripple.service";


export default ({config, db}) => {
    let api = Router();

    // mount the facets resource
    api.get('/createNewAddress', (req, res) => {
        iotaService.createNewAddress((seeds, wallet) => {
            res.json({
                wallet: {
                    secret: seeds,
                    address: wallet
                }
            });
        });


    });

    api.get('/getAddressBalance', (req, res) => {
        var address = req.query.address;
        if (address) {
            iotaService.getAddressBalance(address, res);
        } else {
            res.json({
                status: 1,
                message: 'No address'
            });
        }

    });

    api.get('/', (req, res) => {
        res.json({version});
    });

    return api;
}