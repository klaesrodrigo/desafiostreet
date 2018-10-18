'use strict';

import AlimentoRepo from '../repositories/alimento-repository';

class AlimentoController {
    constructor() {}

    async post(req, res) {
        try {
            let result = await new AlimentoRepo().createOrUpdate(req.body);
            res.status(201).send(result);
        } catch (err) {
            console.log(err);
        }
    }

    async put(req, res) {
        try {
            let result = await new AlimentoRepo().createOrUpdate(req.body);
            res.status(202).send(result);
        } catch (err) {
            console.log(err);
        }
    }

    async get(req, res) {
        try {
            let result = await new AlimentoRepo().findAll();
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    }

    async getById(req, res) {
        try {
            let result = await new AlimentoRepo().findBy(req.params.food);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    }

    async delete(req, res) {
        try {
            let obj = await new AlimentoRepo();
            let result = await obj.remove(req.params.food);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
        }
    }
}
export default AlimentoController;