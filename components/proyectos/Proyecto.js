import React, { useContext } from 'react';

//Context
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Proyecto = ({proyecto}) => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    //obtener el state de las tareas
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;

    const seleccionarProyecto = id => {
        proyectoActual(id); //Selecciona el proyecto actual
        obtenerTareas(id); //Filtrar las tareas del proyecto seleccionado
    }

    return (  
        <li>
            <button type="button" className="btn btn-blank" onClick={()=>{seleccionarProyecto(proyecto._id)}}>{proyecto.nombre}</button>
        </li>
    );
}   
 
export default Proyecto;