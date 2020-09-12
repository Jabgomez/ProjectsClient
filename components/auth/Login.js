import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link'

//Components
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext'

const Login = () => {

    //Importar Context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, iniciarSesion } = authContext;

    useEffect(()=>{
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

    },[mensaje]);

    //State
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    //Extraer state
    const {email, password} = user;

    const HandleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();

        //Validar campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        //Pasarlo al action
        iniciarSesion({ email, password });
    }

    return (  
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1> <br/>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="ex: correo@email.com" onChange={HandleChange} value={email}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="*******" onChange={HandleChange} value={password}/>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesion"/>
                    </div>
                </form>
                <Link href="/register"><a className="enlace-cuenta">Regístrate</a></Link>
            </div>
        </div>
    );
}
 
export default Login;