import React, { useState, useContext } from 'react';

//components
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { errorFormulario, nuevoProyecto, mostrarFormulario, crearProyectos, validarFormulario } = proyectosContext;

    //State proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre
    const { nombre } = proyecto; 

    //registrar cambios en el state
    const handleChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    
    //Cuando el usuario hace click en enviar
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar Proyecto
        if(nombre === '') {
            validarFormulario();
            return;
        }

        //Agregar al state
        crearProyectos(proyecto)

        //Reiniciar Form
        setProyecto({
            nombre : ''
        })
    }

    return ( 
        <> 
            <button type="button" className="btn btn-block btn-primario" onClick={()=>mostrarFormulario()}>Nuevo Proyecto</button>
            {
                nuevoProyecto
                ?
                    (
                        <form action="" className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
                            <input type="text" className="input-text" placeholder="Nombre del proyecto"  name="nombre" value={nombre}  onChange={handleChange}/>
                            <input type="submit" className="btn btn-primario btn-block" value="Agregar proyecto"/>
                        </form>
                    )
                :
                    null
            }

            {errorFormulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </>
    );
}
 
export default NuevoProyecto;