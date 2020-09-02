import React, { useContext } from 'react';

//Context
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Tarea = ({tarea}) => {
    //obtener el context de las tareas
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    //obtener el context de proyecto
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const [proyectoActual] = proyecto;

    //Eliminar
    const eliminar = (id) => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    } 

    //Cambiar estado de la tarea
    const cambiarEstado = (tarea) => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }

        cambiarEstadoTarea(tarea);
    }

    const seleccionar = (tarea) => {
        guardarTareaActual(tarea);
    }

    return (  
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ?
                        (
                            <button type="button" className="completo" onClick={()=> cambiarEstado(tarea)}>Completo</button>
                        )
                    :
                        (
                            <button type="button" className="incompleto" onClick={()=> cambiarEstado(tarea)}>Incompleto</button>
                        )
                }
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario" onClick={()=> seleccionar(tarea)}>Editar</button>
                <button type="button" className="btn btn-secundario" onClick={()=> eliminar(tarea.id)}>Eliminar</button>
            </div>
        </li>
    );
}
 
export default Tarea;