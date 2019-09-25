import {version} from '../../package.json';
import {Router} from 'express';
import ripple from './ripple';
import iota from './iota';

export default ({config, db}) => {
    let api = Router();

    // mount the facets resource
    api.use('/ripple', ripple({config, db}));
    api.use('/iota', iota({config, db}));

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({version});
    });

    return api;
}
