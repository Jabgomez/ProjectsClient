import React, {useContext, useState, useEffect} from 'react';

//Context
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTareas = () => {

    //obtener el context de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //obtener el context de las tareas
    const tareasContext = useContext(tareaContext);
    const { errorTarea, tareaActual, agregarTarea, validarTarea, obtenerTareas, editarTarea } = tareasContext;

    //Effect que detecta si hay tarea seleccionada
    useEffect(()=>{
        if(tareaActual !== null) {
            setTarea(tareaActual)
        } else {
            setTarea({
                nombre: ''
            })
        }
    },[tareaActual]);
    
    //state del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    });

    const {nombre} = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    //Array destructuring
    const [proyectoActual] = proyecto;

    //Leer valores del form
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const agregar = e => {
        e.preventDefault();

        //Validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        //Verificar si esta editanto o agregando
        if(tareaActual === null) {
            //Agregar tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            //Editar
            editarTarea(tarea);
        }

        
        //Actualizar las tareas
        obtenerTareas(proyectoActual.id);

        //Reiniciar el form
        setTarea({
            nombre: ''
        })

    }

    return ( 
        <div className="formulario">
            <form onSubmit={agregar}>
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Nombre de la tarea" name="nombre" value={nombre} onChange={handleChange}/>
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value={tareaActual ? "Editar tarea" : "Agregar tarea"}/>
                </div>
            </form>
            {errorTarea ? <p className="mensaje error">El nombre es obligatorio</p> : null }
        </div>
    );
}
 
export default FormTareas;