'use strict';

import Alimento from '../models/Alimento';
import Util from '../utils/util';

const util = new Util();

class AlimentoRepository{
    constructor(){

    }

      async createOrUpdate(data){
        const alimento =  new Alimento();
        let alimentos = await alimento.readFile();
        await util.verifyAndInsert(alimentos, data);
        await alimento.saveFile(alimentos);
        return await alimentos;
    }

    async findAll(){
        const alimento =  new Alimento();
        let alimentos = await alimento.readFile();
        return JSON.stringify(alimentos);   
    }

    async findBy(data){
        const alimento =  new Alimento();
        let alimentos = await alimento.readFile();
        let result = {};
        let k = await util.findAndVerify(alimentos, data, result);
        return k;
    }

    async remove(data){
        const alimento =  new Alimento();
        let alimentos = await alimento.readFile();
        let result = {};
        await Util.findAndDelete(alimentos, data, result);
        await alimento.saveFile(result);
        return JSON.stringify(result);
    }
}

export default AlimentoRepository

