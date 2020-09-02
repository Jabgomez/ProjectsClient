import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';

//Components
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'

//Types
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    CREAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types'

const ProyectoState = props => {
    const initialState = {
        nuevoProyecto : false,
        errorFormulario: false, 
        proyectos : [],
        proyecto: null
    }

    const proyectos = [
        {id:1, nombre: 'Tienda'},
        {id:2, nombre: 'Hola'},
        {id:3, nombre: 'Tesoro'},
        {id:4, nombre: 'MERN'}
    ]

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO 
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    const crearProyectos = proyecto => {
        proyecto.id = uuid()

        // insertar proyecto en state
        dispatch({
            type: CREAR_PROYECTO,
            payload: proyecto
        })
    }

    const validarFormulario = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    const eliminarProyecto = (proyectoId) => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }
    


    return (
        <proyectoContext.Provider value={{
            nuevoProyecto: state.nuevoProyecto, 
            proyectos: state.proyectos,
            errorFormulario: state.errorFormulario,
            proyecto: state.proyecto,

            mostrarFormulario,
            obtenerProyectos,
            crearProyectos,
            validarFormulario,
            proyectoActual,
            eliminarProyecto
        }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;