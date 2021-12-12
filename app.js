let moduloTareas = require("./tareas");
let process = require("process");
const { log } = require("console");
let comando = process.argv[2];

if (comando !== undefined) {
    switch (comando.toLowerCase()) {
        case "listar":
            let tareas = moduloTareas.leerJSON();
            if (tareas.length === 0) {
                console.log("Tu lista de Tareas esta vacia");
            } else {
                console.log("\n>>>BIENVENIDO/A  A LA  App. DE TAREAS DE MARTIN SALGADO<<<     Version 2.0 \n");
                console.log("              >>>Lista de Tareas<<<         \n");
                tareas.forEach((tarea) => {
                    console.log("Título: " + tarea.titulo + " - estado: " + tarea.estado);
                });
                console.log("");
            }
            break;

        case "crear":
            let titulo = process.argv[3]; // titulo que pase x consola
            let estado = "pendiente";
            moduloTareas.escribirJSON(titulo, estado);
            break;

        case "deshacer":
            moduloTareas.deshacer();
            break;
        case "filtrar":
            let filtrar = process.argv[3];
            let listaFiltrada = moduloTareas.filtrarEstado(filtrar);
            console.log("");
            for (let i = 0; i < listaFiltrada.length; i++) {
                console.log(listaFiltrada[i].titulo);
            }
            console.log("");
            break;

        default:
            console.log("No entiendo que quieres hacer");
    }
} else if (comando === undefined) {
    console.log("\nAtencion - Tienes que pasar una Acción\n");
    console.log("\n>>>Bienvenido a la App. de Tareas de Martin Salgado<<<     Version 2.0 \n");
    console.log(">>>  MENU  <<<\n");
    console.log("==> Vizualizar lista de Tareas --> node app.js listar \n ");
    console.log("==> Crear una nueva Tarea e incluirla en la Lista de tareas --> node app.js crear (titulo de tarea)\n");
    console.log("==> Filtrar tareas para visualizar ( Pendientes / terminadas y en proceso --> node app.js filtrar (estado de tareas que quieres visualizar)\n");
    console.log("==> Para borrar la ultima Tarea de la App --> node app.js deshacer\n" );
}
