'use strict';

import router from './routes/index';
import app from './config';
import Alimento from './models/Alimento';

const init = {
    "pizza": 400,
    "hamburguer": 550.75,
    "coca cola zero": 0.0
}

const ali = new Alimento();
ali.saveFile(init)

const port = process.env.port || 3000;
router(app);

app.listen(port, () => {
    console.log(`RUN!! Port: ${port}`);
});