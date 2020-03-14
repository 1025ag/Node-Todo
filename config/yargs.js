const descripcion = { 
    demand:true, 
    alias: 'd', 
    desc:'Descripción de la tarea por hacer' 
};
const completado = {
    default:true, 
    alias: 'c', 
    desc: 'Marca como completado o pendiente la tarea' 
}

const argv = require('yargs')
            .command('crear', 'Crea un elemeneto por hacer', {
                 descripcion 
            })
            .command('actualizar', 'Actualizar el estado compleado de una tarea', {
                 descripcion, 
                 completado 
            }  
                    )
            .command('borrar', 'Borrar una tarea', {
                descripcion
            })
            .help()
            .argv;

module.exports = { 
    argv 
};

