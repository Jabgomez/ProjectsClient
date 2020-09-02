import React from 'react';
import HideRoute from '../components/hinder/HideRoute';

//Components
import Proyectos from '../components/proyectos/Proyectos'

const proyectos = () => {
    return (
        <HideRoute component={Proyectos}></HideRoute>
        //<Proyectos/>
    );
}
 
export default proyectos;
