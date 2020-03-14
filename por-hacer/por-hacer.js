const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo grabar');
        else
            return `db/data.json`
    })
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = ((descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return completado;
    } else {
        return false;
    }
});

const borrar = (descripcion) => {
    cargarDB();
    if (listadoPorHacer.length > 0) {        
        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);
        guardarDB();
        return `Tarea borrada: ${descripcion}`;
    }else {
        return `No existe una tarea con la descripción: ${descripcion}`;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};