'use strict'

import router from 'express';
import Controller from '../controllers/alimento-controller';

const routes = router.Router();

let _ctrl = new Controller();

routes.get('/', _ctrl.get);
routes.get('/:food', _ctrl.getById);
routes.post('/', _ctrl.post);
routes.patch('/', _ctrl.put);
routes.delete('/:food', _ctrl.delete);

module.exports = app => app.use('/food', routes);