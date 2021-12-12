let fs = require ('fs');

module.exports = moduloTareas = {
  

    leerJSON : () => {
      let listaDeTareas= fs.readFileSync('./tareas.json','utf-8');
      return JSON.parse(listaDeTareas);
    },

    escribirJSON: (titulo , estado) => {
     let nuevaTarea = {

    titulo : titulo,
    estado : estado
     }

     let tareasAnteriores = moduloTareas.leerJSON();
     tareasAnteriores.push(nuevaTarea);
     moduloTareas.guardarJSON(tareasAnteriores)
    },

    guardarJSON: (info)  =>  {
       let nuevoJSON = JSON.stringify(info);
       fs.writeFileSync('./tareas.json',nuevoJSON , 'utf-8');

    },

    deshacer: () => {
      let tareas = moduloTareas.leerJSON();
      tareas.pop();
      moduloTareas.guardarJSON(tareas);
    },
    filtrarEstado: (estado) => {
      
      let listaDeTareas = moduloTareas.leerJSON();
      let tareasFiltradas = listaDeTareas.filter(tarea => {
        return tarea.estado.toLowerCase() === estado.toLowerCase();
      })
      
      return tareasFiltradas
    }
    
  }

   

  



