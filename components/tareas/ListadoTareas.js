import React, {useContext} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

//Components
import Tarea from './Tarea'

//Context
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'


const ListadoTareas = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;    

    //obtener el state de las tareas
    const tareasContext = useContext(tareaContext);
    const { tareasProyecto } = tareasContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Seleccione un proyecto</h2>

    //Array destructuring
    const [proyectoActual] = proyecto;

    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {  
                    tareasProyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : 
                        <TransitionGroup>
                            {tareasProyecto.map(tarea => (
                                <CSSTransition key={tarea._id} timeout={600} classNames="tarea">
                                    <Tarea tarea={tarea}/>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
            </ul>

            <button type="button" className="btn btn-primario" onClick={() => eliminarProyecto(proyectoActual._id)}>Eliminar proyecto &times;</button>
        </>
    );
}
 
export default ListadoTareas;
