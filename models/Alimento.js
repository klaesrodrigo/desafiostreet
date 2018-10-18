'use strict';

import fs from "fs";

class Alimento {
  constructor() {
  }

  async saveFile(json) {
    let data = await JSON.stringify(json);
    try {
      await fs.writeFileSync("alimentos.json", data, function(erro) {
        if (erro) {
          throw erro;
        }
      });
    } catch (err) {
      console.log({ err });
    }
  }

  async readFile() {
    try {
      const data = await fs.readFileSync("alimentos.json");
      const json = JSON.parse(data);
      return json;
      
    } catch (err) {
      console.log({ err });
    }
  }
}

export default Alimento;
