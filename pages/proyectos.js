import React from 'react';

//Components
import Proyectos from '../components/proyectos/Proyectos'
import HideRoute from '../components/hinder/HideRoute';

const proyectos = () => {
    return (
        <HideRoute component={Proyectos}></HideRoute>
        //<Proyectos/>
    );
}
 
export default proyectos;
