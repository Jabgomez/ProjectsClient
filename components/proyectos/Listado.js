import React, { useContext, useEffect } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

//components
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import AlertaContext from '../../context/alertas/alertaContext' 

const ListadoProyectos = () => {
    //Obtener el state
    const proyectosContext = useContext(proyectoContext);
    const {mensaje, proyectos, obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Obtener proyectos cuando carga el componente
    useEffect(()=>{
        //Si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos();
    }, [mensaje])
    
    if (proyectos.length === 0) return <p>Sin proyectos...</p>   

    return (  
        <ul className="listado-proyectos">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition key={proyecto._id} timeout={600} classNames="proyecto">
                        <Proyecto proyecto={proyecto}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            
        </ul>
    );
}
 
export default ListadoProyectos;