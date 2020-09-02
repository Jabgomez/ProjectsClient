import React, { useContext, useEffect } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

//components
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {
    //Obtener el state
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //Obtener proyectos cuando carga el componente
    useEffect(()=>{
        obtenerProyectos();
    }, [])
    
    if (proyectos.length === 0) return <p>Sin proyectos...</p>   

    return (  
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition key={proyecto.id} timeout={600} classNames="proyecto">
                        <Proyecto proyecto={proyecto}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            
        </ul>
    );
}
 
export default ListadoProyectos;