'use strict';

class Util {
    constructor() {

    }

    async verifyAndInsert(alimentos, data) {
        for (let i in alimentos)
            for (let j in data)
                if (j != i)
                    alimentos[j] = data[j];
    }

    async findAndVerify(alimentos, data, resp) {
        let k;
        let bool = true;
        for (let i in alimentos) {
            if (data == i) {
                resp[i] = alimentos[i];
                k = alimentos[i] + "cal";
                bool = false;
            } 
        }

        if(bool)
            k = "Food informada não foi encontrada";

        return await k; 
    }

    static findAndDelete(alimentos, data, resp) {
        for (let i in alimentos) 
            if (data != i) 
                resp[i] = alimentos[i];
            
    }
}

export default Util;