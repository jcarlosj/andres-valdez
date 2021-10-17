'use strict'
const mongoose = requiere('mongoose');

const app = requiere('./app');
const config = requiere('./config');


mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    // en caso de que haya habido algún error
    if(err) {
        return console.log(`Error al conectar a la base de datos ${err}`);
    }

    //si no hay error
    console.log("Conexión a la base de datos establecida");
    app.listen(config.port, ()=> {
        console.log(`Api Rest corriendo en http://localhost:${config.port}`)
    });
});