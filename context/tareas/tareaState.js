import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';

import TareaContext from './tareaContext'
import tareaReducer from './tareaReducer'

import {
    TAREAS_PROYECTO, 
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    EDITAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 0, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { id: 1, nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { id: 2, nombre: 'Diseñar', estado: false, proyectoId: 3 },
            { id: 3, nombre: 'Elegir plataforma', estado: true, proyectoId: 4 },
            { id: 4, nombre: 'Elegir colores', estado: true, proyectoId: 1 },
            { id: 5, nombre: 'Diseñar', estado: false, proyectoId: 2 },
            { id: 6, nombre: 'Programar', estado: false, proyectoId: 4 },
            { id: 7, nombre: 'Revisar', estado: true, proyectoId: 4 },
            { id: 8, nombre: 'Publicar', estado: false, proyectoId: 1 }    
        ],

        tareasProyecto: null,
        errorTarea: false,
        tareaActual: null
    }
    
    //Crear el dispatch y el state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    //Funciones
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTarea = tarea => {
        tarea.id = uuid()
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    const eliminarTarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    const cambiarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })  
    }
    
    const guardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    const editarTarea = (tarea) => {
        dispatch({
            type: EDITAR_TAREA,
            payload: tarea
        })
    }

    return (  
        <TareaContext.Provider value={{
            tareas: state.tareas,
            tareasProyecto: state.tareasProyecto, 
            errorTarea: state.errorTarea,
            tareaActual: state.tareaActual,

            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual,
            editarTarea
        }}>
            {props.children}
        </TareaContext.Provider>
    );
}
 
export default TareaState;