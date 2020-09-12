import React, {useContext, useEffect} from 'react';
import {useRouter} from 'next/router'; 
import AuthContext from '../../context/autenticacion/authContext'

const Redirect = ({component: Component, ...props}) => {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    const {autenticado} = authContext;

    useEffect(()=>{
        if(autenticado){
            router.push('/proyectos')
            return;
        }
    },[autenticado])


    return(
        <>
            {!autenticado ?(<Component {...props}/>) : (<p>Redirecting...</p>)}
        </>
    );
}
 
export default Redirect;